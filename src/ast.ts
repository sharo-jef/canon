import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { CanonLexer } from './generated/CanonLexer';
import { CanonParser } from './generated/CanonParser';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { CanonParserVisitor } from './generated/CanonParserVisitor';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { RuleNode } from 'antlr4ts/tree/RuleNode';

interface ASTNode {
    type: string;
    text?: string;
    children?: ASTNode[];
    [key: string]: any;
}

class ASTBuilder extends AbstractParseTreeVisitor<ASTNode> implements CanonParserVisitor<ASTNode> {
    
    defaultResult(): ASTNode {
        return { type: 'Unknown' };
    }

    visitTerminal(node: TerminalNode): ASTNode {
        // 重要な情報を持つTerminalのみ、簡潔な形で返す
        return {
            type: 'Terminal',
            text: node.text
        };
    }

    visitChildren(node: RuleNode): ASTNode {
        const ruleNames = (node as any).constructor.name || 'UnknownRule';
        const ruleName = ruleNames.replace('Context', '');
        
        // 式の階層を簡略化: 単一の子ノードしか持たない式は省略
        if (this.isSimpleExpressionNode(node, ruleName)) {
            const child = node.getChild(0);
            if (child) {
                return this.visit(child);
            }
        }

        const result: ASTNode = {
            type: ruleName,
            children: []
        };

        // 特定のルールに対して詳細情報を追加
        this.addRuleSpecificInfo(node, result);

        // 一部のノードは詳細情報のみで十分（子ノードを含めない）
        if (this.isInformationOnlyNode(ruleName, result)) {
            delete result.children;
            return result;
        }
        
        // Binary expressions that have been structured should not process children
        const binaryExpressions = ['AdditiveExpression', 'MultiplicativeExpression', 'ComparisonExpression', 'RangeExpression'];
        if (binaryExpressions.includes(ruleName) && result.left && result.operator && result.right) {
            delete result.children;
            return result;
        }

        // 子ノードを処理
        if (node.childCount > 0) {
            for (let i = 0; i < node.childCount; i++) {
                const child = node.getChild(i);
                if (child) {
                    const childNode = this.visit(child);
                    if (childNode && this.shouldIncludeNode(childNode, ruleName)) {
                        // 冗長なノードの場合、その子ノードを直接追加
                        if (this.isRedundantWrapperNode(childNode)) {
                            if (childNode.children) {
                                result.children!.push(...childNode.children);
                            }
                        } else {
                            result.children!.push(childNode);
                        }
                    }
                }
            }
        }

        // 空のchildrenを持つノードの後処理
        if (result.children!.length === 0) {
            delete result.children;
        } else if (ruleName === 'PrimaryExpression' && result.children!.length === 1 && result.type === 'PrimaryExpression') {
            // PrimaryExpression with single child should delegate to the child
            const singleChild = result.children![0];
            if (singleChild.type === 'Literal' || singleChild.type === 'MemberAccess' || 
                singleChild.type === 'StringInterpolation' || singleChild.type === 'FunctionCall') {
                // Return the child directly (transparent delegation)
                return singleChild;
            }
        }

        return result;
    }

    private isSimpleExpressionNode(node: RuleNode, ruleName: string): boolean {
        // 二項演算子のコンテキストの場合は透過処理しない
        const binaryExpressions = ['AdditiveExpression', 'MultiplicativeExpression', 'ComparisonExpression', 'Expression'];
        if (binaryExpressions.includes(ruleName)) {
            // 3つ以上の子ノードがある場合は二項演算の可能性が高いので透過処理しない
            if (node.childCount >= 3) {
                return false;
            }
        }
        
        // 単一の子ノードしか持たない式ノードかチェック
        if (node.childCount === 1) {
            const expressionTypes = [
                'Expression', 'ComparisonExpression',
                'AdditiveExpression', 'MultiplicativeExpression'
            ];
            return expressionTypes.includes(ruleName);
        }
        return false;
    }

    private isMeaninglessToken(text?: string): boolean {
        if (!text) return false;
        
        const meaninglessTokens = [
            // 括弧類
            '{', '}', '(', ')', '[', ']',
            // 区切り文字
            ':', ';', ',', '.', 
            // 演算子
            '=', '+', '-', '*', '/', '==', '!=', '<', '>', '<=', '>=',
            // その他の記号
            '`', '${', '#schema', '?', '@',
            // 終端記号
            '<EOF>',
            // キーワード類（構造的な意味を持つものは除外対象）
            'schema', 'struct', 'fun', 'declare', 'return', 'for', 'in',
            'val', 'var', 'this', 'mixin'
        ];
        
        return meaninglessTokens.includes(text);
    }

    private addRuleSpecificInfo(node: RuleNode, result: ASTNode): void {
        const ctx = node as any;
        
        // プログラム
        if (ctx.constructor.name === 'ProgramContext') {
            // 特別な処理は不要
        }
        
        // Schema directive
        else if (ctx.constructor.name === 'SchemaDirectiveContext') {
            const stringLiteral = ctx.STRING_LITERAL();
            if (stringLiteral) {
                // スキーマディレクティブからクォートを除去
                let value = stringLiteral.text;
                if (value.startsWith("'") && value.endsWith("'")) {
                    value = value.slice(1, -1);
                }
                result.schema = value;
            }
        }
        
        // Schema member
        else if (ctx.constructor.name === 'SchemaMemberContext') {
            const identifier = ctx.IDENTIFIER();
            const multiply = ctx.MULTIPLY();
            const question = ctx.QUESTION();
            const plus = ctx.PLUS();
            const typeRef = ctx.typeReference();
            
            if (identifier) {
                result.name = identifier.text;
                result.multiple = !!multiply || !!plus; // * または + の場合は複数
                // * は multiple: true, required: false
                // + は multiple: true, required: true
                // ? は multiple: false, required: false
                // 修飾子なしは multiple: false, required: true
                if (multiply) {
                    result.required = false; // * は0個以上（任意）
                } else if (plus) {
                    result.required = true;  // + は1個以上必須
                } else if (question) {
                    result.required = false; // ? は任意
                } else {
                    result.required = true;  // 修飾子なしは必須
                }
                if (typeRef) {
                    result.dataType = typeRef.text;
                }
            }
        }
        
        // Struct definition
        else if (ctx.constructor.name === 'StructDefinitionContext') {
            const identifier = ctx.IDENTIFIER();
            if (identifier) {
                result.name = identifier.text;
            }
        }
        
        // Mixin declaration
        else if (ctx.constructor.name === 'MixinDeclarationContext') {
            const identifier = ctx.IDENTIFIER();
            if (identifier) {
                result.mixinType = identifier.text;
            }
        }
        
        // Struct member
        else if (ctx.constructor.name === 'StructMemberContext') {
            const identifier = ctx.IDENTIFIER();
            const question = ctx.QUESTION();
            const typeRef = ctx.typeReference();
            
            if (identifier) {
                result.name = identifier.text;
                result.required = !question; // ? があれば任意、なければ必須
                if (typeRef) {
                    result.dataType = typeRef.text;
                }
            }
        }
        
        // Function definition
        else if (ctx.constructor.name === 'FunctionDefinitionContext') {
            const identifier = ctx.IDENTIFIER();
            const isDeclare = ctx.DECLARE();
            const returnType = ctx.typeReference();
            
            if (identifier) {
                result.name = identifier.text;
                result.isDeclare = !!isDeclare;
                if (returnType) {
                    result.returnType = returnType.text;
                }
            }
            
            // パラメータ情報
            const parameterList = ctx.parameterList();
            if (parameterList) {
                result.parameters = this.extractParameters(parameterList);
            } else {
                result.parameters = []; // 明示的に空の配列を設定
            }
            
            // FunctionBody を直接プロパティとして設定
            const functionBody = ctx.functionBody();
            if (functionBody) {
                result.functionBody = this.visit(functionBody);
            }
        }
        
        // Method definition
        else if (ctx.constructor.name === 'MethodDefinitionContext') {
            const identifier = ctx.IDENTIFIER();
            const returnType = ctx.typeReference();
            
            if (identifier) {
                result.name = identifier.text;
                if (returnType) {
                    result.returnType = returnType.text;
                }
            }
            
            const parameterList = ctx.parameterList();
            if (parameterList) {
                result.parameters = this.extractParameters(parameterList);
            } else {
                result.parameters = []; // 明示的に空の配列を設定
            }
            
            // FunctionBody を直接プロパティとして設定
            const functionBody = ctx.functionBody();
            if (functionBody) {
                result.functionBody = this.visit(functionBody);
            }
        }
        
        // Function call
        else if (ctx.constructor.name === 'FunctionCallContext') {
            const identifier = ctx.IDENTIFIER();
            const memberAccess = ctx.memberAccess();
            
            if (memberAccess) {
                // Member function call (e.g., version.toString())
                result.isMethodCall = true;
                // memberAccessの情報も抽出
                const memberAccessCtx = memberAccess as any;
                const identifiers = memberAccessCtx.IDENTIFIER();
                const thisToken = memberAccessCtx.THIS();
                
                if (thisToken && identifiers?.[0]) {
                    result.functionName = `this.${identifiers[0].text}`;
                } else if (identifiers?.length >= 2) {
                    result.functionName = `${identifiers[0].text}.${identifiers[1].text}`;
                }
            } else if (identifier) {
                // 通常の関数呼び出し (e.g., data2(), apply())
                // identifierは単一の要素またはTerminalNodeの場合がある
                if (Array.isArray(identifier)) {
                    result.functionName = identifier[0]?.text;
                } else {
                    result.functionName = identifier.text;
                }
            }
            
            const argumentList = ctx.argumentList();
            if (argumentList) {
                result.hasArguments = true;
                result.argumentCount = this.countArguments(argumentList);
                // ArgumentListの中身を直接argumentsプロパティに
                result.arguments = this.extractArgumentsFromList(argumentList);
            } else {
                result.hasArguments = false;
                result.argumentCount = 0;
                result.arguments = [];
            }
            
            const constructionBody = ctx.constructionBody();
            if (constructionBody) {
                // This is actually an object construction with trailing lambda
                result.isObjectConstruction = true;
                result.hasBody = true;
                // ConstructionBodyの中身を直接bodyプロパティに
                result.body = this.extractStatementsFromBody(constructionBody);
            } else {
                result.hasBody = false;
                result.body = [];
            }
        }
        
        // Configuration call (was ObjectConstruction)
        else if (ctx.constructor.name === 'ConfigurationCallContext') {
            const identifier = ctx.IDENTIFIER();
            if (identifier) {
                result.functionName = identifier.text;  // 関数呼び出しと統一
            }
            
            const argumentList = ctx.argumentList();
            if (argumentList) {
                result.hasArguments = true;
                result.argumentCount = this.countArguments(argumentList);
                // ArgumentListの中身を直接argumentsプロパティに
                result.arguments = this.extractArgumentsFromList(argumentList);
            } else {
                result.hasArguments = false;
                result.argumentCount = 0;
                result.arguments = [];
            }
            
            const constructionBody = ctx.constructionBody();
            if (constructionBody) {
                result.hasBody = true;
                // ConstructionBodyの中身を直接bodyプロパティに
                result.body = this.extractStatementsFromBody(constructionBody);
            } else {
                result.hasBody = false;
                result.body = [];
            }
        }
        
        // Variable declaration - single expression, not children
        else if (ctx.constructor.name === 'VariableDeclarationContext') {
            const valToken = ctx.VAL();
            const varToken = ctx.VAR();
            const identifier = ctx.IDENTIFIER();
            
            if (identifier) {
                result.variableName = identifier.text;
                result.variableType = valToken ? 'val' : 'var';
                result.isMutable = !!varToken;
            }
            
            // Get the expression directly, not as children
            const expression = ctx.expression();
            if (expression) {
                result.expression = this.visit(expression);
                result.children = []; // Clear children since we have direct expression
            }
        }
        
        // For statement
        else if (ctx.constructor.name === 'ForStatementContext') {
            const identifier = ctx.IDENTIFIER();
            if (identifier) {
                result.iteratorVariable = identifier.text;
            }
        }
        
        // Primary expression - delegate to specific subtypes
        else if (ctx.constructor.name === 'PrimaryExpressionContext') {
            const identifier = ctx.IDENTIFIER();
            const lparen = ctx.LPAREN();
            const rparen = ctx.RPAREN();
            
            if (identifier && lparen && rparen) {
                // This is an apply() style function call
                result.type = 'FunctionCall';
                result.functionName = identifier.text;
                result.hasArguments = false;
                result.argumentCount = 0;
            } else if (identifier && !lparen && !rparen) {
                // Simple identifier reference - create Identifier node
                result.type = 'Identifier';
                result.name = identifier.text;
            }
            // For other cases (literals, complex expressions), let normal processing handle delegation
        }
        
        // Assignment
        // Assignment - single expression, not children
        else if (ctx.constructor.name === 'AssignmentContext') {
            const identifiers = ctx.IDENTIFIER();
            const thisToken = ctx.THIS();
            
            // Create structured target node instead of string
            if (thisToken && identifiers?.[0]) {
                // this.property pattern
                result.target = {
                    type: 'MemberAccess',
                    object: 'this',
                    member: identifiers[0].text,
                    fullAccess: `this.${identifiers[0].text}`
                };
            } else if (identifiers?.length >= 2) {
                // object.property pattern
                result.target = {
                    type: 'MemberAccess',
                    object: identifiers[0].text,
                    member: identifiers[1].text,
                    fullAccess: `${identifiers[0].text}.${identifiers[1].text}`
                };
            } else if (identifiers?.[0]) {
                // Simple identifier pattern
                result.target = {
                    type: 'Identifier',
                    name: identifiers[0].text
                };
            } else {
                // Fallback for unknown patterns
                result.target = {
                    type: 'Identifier',
                    name: 'unknown'
                };
            }
            
            // Get the expression directly, not as children
            const expression = ctx.expression();
            if (expression) {
                result.expression = this.visit(expression);
                result.children = []; // Clear children since we have direct expression
            }
        }
        
        // Member access
        else if (ctx.constructor.name === 'MemberAccessContext') {
            const identifiers = ctx.IDENTIFIER();
            const thisToken = ctx.THIS();
            
            if (thisToken && identifiers?.[0]) {
                result.object = 'this';
                result.member = identifiers[0].text;
                result.fullAccess = `this.${identifiers[0].text}`;
            } else if (identifiers?.length >= 2) {
                result.object = identifiers[0].text;
                result.member = identifiers[1].text;
                result.fullAccess = `${identifiers[0].text}.${identifiers[1].text}`;
            }
        }
        
        // Literal
        else if (ctx.constructor.name === 'LiteralContext') {
            const stringLiteral = ctx.STRING_LITERAL();
            const integerLiteral = ctx.INTEGER_LITERAL();
            
            if (stringLiteral) {
                result.literalType = 'string';
                // 文字列リテラルからクォートを除去
                let value = stringLiteral.text;
                if (value.startsWith("'") && value.endsWith("'")) {
                    value = value.slice(1, -1);
                }
                result.value = value;
            } else if (integerLiteral) {
                result.literalType = 'integer';
                result.value = parseInt(integerLiteral.text);
            }
        }
        
        // Type reference
        else if (ctx.constructor.name === 'TypeReferenceContext') {
            const stringType = ctx.STRING_TYPE();
            const intType = ctx.INT_TYPE();
            const identifier = ctx.IDENTIFIER();
            
            if (stringType) {
                result.typeName = 'string';
            } else if (intType) {
                result.typeName = 'int';
            } else if (identifier) {
                result.typeName = identifier.text;
            }
        }
        
        // Annotation
        else if (ctx.constructor.name === 'AnnotationContext') {
            const identifier = ctx.IDENTIFIER();
            const stringLiteral = ctx.STRING_LITERAL();
            
            if (identifier) {
                result.name = identifier.text;
                if (stringLiteral) {
                    // アノテーション値からクォートを除去
                    let value = stringLiteral.text;
                    if (value.startsWith("'") && value.endsWith("'")) {
                        value = value.slice(1, -1);
                    }
                    result.value = value;
                }
            }
        }
        
        // Parameter
        else if (ctx.constructor.name === 'ParameterContext') {
            const identifier = ctx.IDENTIFIER();
            const typeRef = ctx.typeReference();
            
            if (identifier) {
                result.parameterName = identifier.text;
                if (typeRef) {
                    result.parameterType = typeRef.text;
                }
            }
        }
        
        // Type reference
        else if (ctx.constructor.name === 'TypeReferenceContext') {
            const stringType = ctx.STRING_TYPE();
            const intType = ctx.INT_TYPE();
            const identifier = ctx.IDENTIFIER();
            
            if (stringType) {
                result.typeName = 'string';
            } else if (intType) {
                result.typeName = 'int';
            } else if (identifier) {
                result.typeName = identifier.text;
            }
        }
        
        // Binary expressions - use left/right/operator structure instead of children
        else if (ctx.constructor.name === 'ExpressionContext') {
            if (ctx.childCount >= 3) {
                // Range expression: left .. right
                const leftChild = ctx.getChild(0);
                const operatorChild = ctx.getChild(1);
                const rightChild = ctx.getChild(2);
                
                if (leftChild && operatorChild && rightChild && operatorChild.text === '..') {
                    result.type = 'RangeExpression';
                    result.left = this.visit(leftChild);
                    result.operator = operatorChild.text; // RANGE (..)
                    result.right = this.visit(rightChild);
                }
            }
        }
        
        else if (ctx.constructor.name === 'AdditiveExpressionContext') {
            if (ctx.childCount >= 3) {
                // Binary operation: left operator right
                const leftChild = ctx.getChild(0);
                const operatorChild = ctx.getChild(1);
                const rightChild = ctx.getChild(2);
                
                if (leftChild && operatorChild && rightChild) {
                    result.left = this.visit(leftChild);
                    result.operator = operatorChild.text; // PLUS or MINUS
                    result.right = this.visit(rightChild);
                }
            }
        }
        
        else if (ctx.constructor.name === 'MultiplicativeExpressionContext') {
            if (ctx.childCount >= 3) {
                const leftChild = ctx.getChild(0);
                const operatorChild = ctx.getChild(1);
                const rightChild = ctx.getChild(2);
                
                if (leftChild && operatorChild && rightChild) {
                    result.left = this.visit(leftChild);
                    result.operator = operatorChild.text; // MULTIPLY or DIVIDE
                    result.right = this.visit(rightChild);
                }
            }
        }
        
        else if (ctx.constructor.name === 'ComparisonExpressionContext') {
            if (ctx.childCount >= 3) {
                const leftChild = ctx.getChild(0);
                const operatorChild = ctx.getChild(1);
                const rightChild = ctx.getChild(2);
                
                if (leftChild && operatorChild && rightChild) {
                    result.left = this.visit(leftChild);
                    result.operator = operatorChild.text; // Comparison operators
                    result.right = this.visit(rightChild);
                }
            }
        }
    }
    
    private extractParameters(parameterList: any): any[] {
        const parameters: any[] = [];
        const params = parameterList.parameter();
        
        if (params) {
            const paramArray = Array.isArray(params) ? params : [params];
            for (const param of paramArray) {
                const identifier = param.IDENTIFIER();
                const typeRef = param.typeReference();
                
                if (identifier && typeRef) {
                    parameters.push({
                        name: identifier.text,
                        type: typeRef.text
                    });
                }
            }
        }
        
        return parameters;
    }
    
    private countArguments(argumentList: any): number {
        const expressions = argumentList.expression();
        if (!expressions) return 0;
        return Array.isArray(expressions) ? expressions.length : 1;
    }

    private extractArgumentsFromList(argumentList: any): ASTNode[] {
        const expressions = argumentList.expression();
        if (!expressions) return [];
        
        if (Array.isArray(expressions)) {
            return expressions.map((expr: any) => this.visit(expr));
        } else {
            return [this.visit(expressions)];
        }
    }

    private extractStatementsFromBody(constructionBody: any): ASTNode[] {
        const statements: ASTNode[] = [];
        
        // ConstructionBodyの各ステートメントを処理
        const assignments = constructionBody.assignment();
        if (assignments) {
            const assignmentList = Array.isArray(assignments) ? assignments : [assignments];
            statements.push(...assignmentList.map((stmt: any) => this.visit(stmt)));
        }
        
        const variableDeclarations = constructionBody.variableDeclaration();
        if (variableDeclarations) {
            const varDeclList = Array.isArray(variableDeclarations) ? variableDeclarations : [variableDeclarations];
            statements.push(...varDeclList.map((stmt: any) => this.visit(stmt)));
        }
        
        const forStatements = constructionBody.forStatement();
        if (forStatements) {
            const forStmtList = Array.isArray(forStatements) ? forStatements : [forStatements];
            statements.push(...forStmtList.map((stmt: any) => this.visit(stmt)));
        }
        
        const configurationCalls = constructionBody.configurationCall();
        if (configurationCalls) {
            const configCallList = Array.isArray(configurationCalls) ? configurationCalls : [configurationCalls];
            statements.push(...configCallList.map((stmt: any) => this.visit(stmt)));
        }
        
        return statements;
    }

    private shouldIncludeNode(childNode: ASTNode, parentRuleName: string): boolean {
        // Terminal ノードは全て除外（重要な情報は親ノードでプロパティとして抽出済み）
        if (childNode.type === 'Terminal') {
            return false;
        }
        
        // FunctionDefinition と MethodDefinition の特定の子ノードは除外（プロパティとして直接設定済み）
        if (['FunctionDefinition', 'MethodDefinition'].includes(parentRuleName)) {
            if (['FunctionBody', 'ParameterList', 'TypeReference'].includes(childNode.type)) {
                return false;
            }
        }
        
        // ConfigurationCall と FunctionCall の構造的ラッパーは除外（プロパティとして直接設定済み）
        if (['ConfigurationCall', 'FunctionCall'].includes(parentRuleName)) {
            if (['ArgumentList', 'ConstructionBody'].includes(childNode.type)) {
                return false;
            }
        }
        
        // 重要な構文要素は保持
        const importantNodes = [
            'StructMember', 'MixinDeclaration', 'MethodDefinition', 'Annotation',
            'FunctionCall', 'Assignment', 'ReturnStatement', 'VariableDeclaration',
            'Literal', 'MemberAccess', 'StringInterpolation', 'ConfigurationCall',
            'StructContent', 'ExpressionStatement',
            'InterpolationExpression', 'TypeReference', 'Parameter',
            'ParameterList', 'ForStatement', 'StringContent',
            'FunctionBody', 'Statement', 'Identifier'
        ];
        
        if (importantNodes.includes(childNode.type)) {
            return true;
        }
        
        return true;
    }

    private isRedundantWrapperNode(node: ASTNode): boolean {
        // 単一の子ノードを持つ構造的な wrapper ノードを判定
        // Statement のみ対象（重要な情報を持たない場合）
        // FunctionBody は関数の実装を含むため除外しない
        const wrapperNodes = ['Statement'];
        return wrapperNodes.includes(node.type) && 
               !!node.children && 
               node.children.length === 1 &&
               !this.hasSemanticValue(node);
    }

    private hasSemanticValue(node: ASTNode): boolean {
        // ノードが意味的な価値を持つかどうかを判定
        // （プロパティを持つ、または特定の型の場合は意味的価値がある）
        const keys = Object.keys(node);
        return keys.some(key => key !== 'type' && key !== 'children');
    }

    private isInformationOnlyNode(ruleName: string, result: ASTNode): boolean {
        // これらのノードは詳細情報のみで十分（子ノードは不要）
        const informationOnlyNodes = [
            'TypeReference', 'Parameter', 'Annotation', 'Literal', 'MemberAccess',
            'VariableDeclaration', 'Assignment', 'AdditiveExpression', 
            'MultiplicativeExpression', 'ComparisonExpression', 'Expression',
            'Identifier', 'ArgumentList', 'ConstructionBody'  // Added structural wrappers
        ];
        
        // PrimaryExpression with specific type info should not have children
        if (ruleName === 'PrimaryExpression' && (result.type !== 'PrimaryExpression')) {
            return true;  // It's been converted to a specific type
        }
        
        return informationOnlyNodes.includes(ruleName) && this.hasSemanticValue(result);
    }

    // Visitor methods implementation
    visitProgram(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitConfigurationCall(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitSchemaDirective(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitSchemaDefinition(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitSchemaMember(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitStructDefinition(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitStructContent(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitMixinDeclaration(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitStructMember(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitMethodDefinition(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitFunctionDefinition(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitFunctionBody(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitParameterList(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitParameter(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitTypeReference(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitStatement(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitVariableDeclaration(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitAssignment(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitExpressionStatement(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitReturnStatement(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitForStatement(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitConstructionBody(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitExpression(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitComparisonExpression(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitAdditiveExpression(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitMultiplicativeExpression(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitPrimaryExpression(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitFunctionCall(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitArgumentList(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitMemberAccess(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitStringInterpolation(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitStringContent(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitInterpolationExpression(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitLiteral(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitAnnotation(ctx: any): ASTNode { return this.visitChildren(ctx); }
}

function parseCanonToAST(filename: string): void {
    try {
        // 指定されたファイルを読み込み
        const canonPath = path.join(__dirname, '..', 'definition', filename);
        const input = fs.readFileSync(canonPath, 'utf-8');
        
        console.log(`Parsing ${filename} to AST...\n`);
        
        // ANTLR4パーサーの設定
        const inputStream = CharStreams.fromString(input);
        const lexer = new CanonLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new CanonParser(tokenStream);
        
        // パースツリーを構築
        const tree = parser.program();
        
        // エラーがあった場合の処理
        if (parser.numberOfSyntaxErrors > 0) {
            console.error(`Syntax errors found: ${parser.numberOfSyntaxErrors}`);
            console.error('Tokens:');
            for (let i = 0; i < tokenStream.size; i++) {
                const token = tokenStream.get(i);
                console.log(`Token ${i}: type=${token.type}, text='${token.text}', line=${token.line}, column=${token.charPositionInLine}`);
            }
            return;
        }
        
        // ASTビルダーを使ってASTを構築
        const astBuilder = new ASTBuilder();
        const ast = astBuilder.visit(tree);
        
        // ASTをYAML形式で出力
        const yamlOutput = yaml.dump(ast, {
            indent: 2,
            lineWidth: -1,
            noRefs: true,
            skipInvalid: true
        });
        
        // ast.yamlファイルに出力
        const astYamlPath = path.join(__dirname, '..', 'ast.yaml');
        fs.writeFileSync(astYamlPath, yamlOutput, 'utf-8');
        console.log(`\nAST saved to: ${astYamlPath}`);
        
        console.log('\nAST (YAML format):');
        console.log('==================');
        console.log(yamlOutput);
        
        console.log('\nAST parsing completed successfully!');
        
    } catch (error) {
        console.error(`Error parsing ${filename} to AST:`, error);
    }
}

function parseSchemaCanonToAST(): void {
    parseCanonToAST('schema.canon');
}

function parseConfigCanonToAST(): void {
    parseCanonToAST('config.canon');
}

// メイン実行
if (require.main === module) {
    parseSchemaCanonToAST();
    console.log('\n' + '='.repeat(80) + '\n');
    parseConfigCanonToAST();
}

export { parseSchemaCanonToAST, parseConfigCanonToAST, parseCanonToAST, ASTBuilder, ASTNode };
