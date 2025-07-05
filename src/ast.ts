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
import { 
    CanonErrorListener, 
    ErrorFormatter, 
    ErrorCollection, 
    DEFAULT_FORMATTER_OPTIONS 
} from './error';

interface ASTLocation {
    start: { line: number; column: number };
    end: { line: number; column: number };
}

interface ASTNode {
    type: string;
    text?: string;
    children?: ASTNode[];
    loc?: ASTLocation;
    [key: string]: any;
}

class ASTBuilder extends AbstractParseTreeVisitor<ASTNode> implements CanonParserVisitor<ASTNode> {
    
    defaultResult(): ASTNode {
        return { type: 'Unknown' };
    }

    private getLocationInfo(node: any): ASTLocation | undefined {
        try {
            if (node && node.start && node.stop) {
                return {
                    start: {
                        line: node.start.line,
                        column: node.start.charPositionInLine
                    },
                    end: {
                        line: node.stop.line,
                        column: node.stop.charPositionInLine + (node.stop.text?.length || 0)
                    }
                };
            }
        } catch (error) {
            // If location extraction fails, return undefined
        }
        return undefined;
    }

    private createIdentifierWithLocation(name: string, sourceNode?: any): ASTNode {
        const identifier: ASTNode = {
            type: 'Identifier',
            name: name
        };
        
        if (sourceNode) {
            const loc = this.getLocationInfo(sourceNode);
            if (loc) {
                identifier.loc = loc;
            }
        }
        
        return identifier;
    }

    private unquote(text: string): string {
        if ((text.startsWith("'") && text.endsWith("'")) || (text.startsWith('"') && text.endsWith('"'))) {
            return text.slice(1, -1);
        }
        return text;
    }

    visitTerminal(node: TerminalNode): ASTNode {
        // 重要な情報を持つTerminalのみ、簡潔な形で返す
        const result: ASTNode = {
            type: 'Terminal',
            text: node.text
        };
        
        const loc = this.getLocationInfo(node);
        if (loc) {
            result.loc = loc;
        }
        
        return result;
    }

    visitChildren(node: RuleNode): ASTNode {
        const ruleNames = (node as any).constructor.name || 'UnknownRule';
        const ruleName = ruleNames.replace('Context', '');
        
        // Statement は常に透過化（子ノードに委譲）
        if (ruleName === 'Statement' && node.childCount === 1) {
            const child = node.getChild(0);
            if (child) {
                return this.visit(child);
            }
        }
        
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

        // Add location information
        const loc = this.getLocationInfo(node as any);
        if (loc) {
            result.loc = loc;
        }

        // 特定のルールに対して詳細情報を追加
        this.addRuleSpecificInfo(node, result);

        // Binary expressions that have been structured should not process children
        const binaryExpressions = ['BinaryExpression'];
        if ((binaryExpressions.includes(ruleName) || result.type === 'BinaryExpression') && result.left && result.operator && result.right) {
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
        const binaryExpressions = ['BinaryExpression', 'AdditiveExpression', 'MultiplicativeExpression', 'ComparisonExpression', 'Expression'];
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
                result.schema = this.unquote(stringLiteral.text);
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
                result.name = this.createIdentifierWithLocation(identifier.text, identifier);
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
                    result.dataType = this.visit(typeRef);
                }
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
                result.functionName = this.createIdentifierWithLocation(identifier.text, identifier);
                result.arguments = [];
            } else if (identifier && !lparen && !rparen) {
                // Simple identifier reference - create Identifier node
                result.type = 'Identifier';
                result.name = identifier.text;
                // Add location from the identifier token
                const loc = this.getLocationInfo(identifier);
                if (loc) {
                    result.loc = loc;
                }
            }
            // For other cases (literals, complex expressions), let normal processing handle delegation
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
                        name: this.createIdentifierWithLocation(identifier.text, identifier),
                        type: {
                            type: 'TypeReference',
                            typeName: typeRef.text
                        }
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

    // Visitor methods implementation
    visitProgram(ctx: any): ASTNode { return this.visitChildren(ctx); }

    visitVariableDeclaration(ctx: any): ASTNode {
        const identifier = ctx.IDENTIFIER();
        const expression = ctx.expression();
        
        return {
            type: 'VariableDeclaration',
            isMutable: !!ctx.VAR(), // true for 'var', false for 'val'
            variableName: this.createIdentifierWithLocation(identifier.text, identifier),
            expression: expression ? this.visit(expression) : undefined,
            loc: this.getLocationInfo(ctx)
        };
    }

    visitAssignment(ctx: any): ASTNode {
        const identifiers = ctx.IDENTIFIER();
        const thisToken = ctx.THIS();
        const expression = ctx.expression();

        let target: any;
        if (thisToken && identifiers?.[0]) {
            // this.property pattern
            target = {
                type: 'MemberAccess',
                object: {
                    type: 'ThisReference'
                },
                member: this.createIdentifierWithLocation(identifiers[0].text, identifiers[0])
            };
        } else if (identifiers?.length >= 2) {
            // object.property pattern
            target = {
                type: 'MemberAccess',
                object: this.createIdentifierWithLocation(identifiers[0].text, identifiers[0]),
                member: this.createIdentifierWithLocation(identifiers[1].text, identifiers[1])
            };
        } else if (identifiers?.[0]) {
            // Simple identifier pattern
            target = this.createIdentifierWithLocation(identifiers[0].text, identifiers[0]);
        } else {
            // Fallback for unknown patterns
            target = {
                type: 'Identifier',
                name: 'unknown'
            };
        }

        return {
            type: 'Assignment',
            target: target,
            expression: expression ? this.visit(expression) : undefined,
            loc: this.getLocationInfo(ctx)
        };
    }

    visitLiteral(ctx: any): ASTNode {
        const stringLiteral = ctx.STRING_LITERAL();
        const integerLiteral = ctx.INTEGER_LITERAL();
        
        let literalType: string;
        let value: any;
        
        if (stringLiteral) {
            literalType = 'string';
            value = this.unquote(stringLiteral.text);
        } else if (integerLiteral) {
            literalType = 'integer';
            value = parseInt(integerLiteral.text);
        } else {
            literalType = 'unknown';
            value = null;
        }

        return {
            type: 'Literal',
            literalType: literalType,
            value: value,
            loc: this.getLocationInfo(ctx)
        };
    }

    visitMemberAccess(ctx: any): ASTNode {
        const identifiers = ctx.IDENTIFIER();
        const thisToken = ctx.THIS();
        
        let object: any;
        let member: any;
        
        if (thisToken && identifiers?.[0]) {
            object = {
                type: 'ThisReference'
            };
            member = this.createIdentifierWithLocation(identifiers[0].text, identifiers[0]);
        } else if (identifiers?.length >= 2) {
            object = this.createIdentifierWithLocation(identifiers[0].text, identifiers[0]);
            member = this.createIdentifierWithLocation(identifiers[1].text, identifiers[1]);
        } else {
            object = { type: 'Unknown' };
            member = { type: 'Unknown' };
        }

        return {
            type: 'MemberAccess',
            object: object,
            member: member,
            loc: this.getLocationInfo(ctx)
        };
    }

    visitFunctionCall(ctx: any): ASTNode {
        const identifier = ctx.IDENTIFIER();
        const memberAccess = ctx.memberAccess();
        const argumentList = ctx.argumentList();
        const constructionBody = ctx.constructionBody();
        
        let functionName: any;
        let target: any = undefined;
        let isMethodCall = false;
        
        if (memberAccess) {
            // Member function call (e.g., version.toString())
            isMethodCall = true;
            const memberAccessCtx = memberAccess as any;
            const identifiers = memberAccessCtx.IDENTIFIER();
            const thisToken = memberAccessCtx.THIS();
            
            if (thisToken && identifiers?.[0]) {
                functionName = `this.${identifiers[0].text}`;
                target = {
                    type: 'MemberAccess',
                    object: {
                        type: 'ThisReference'
                    },
                    member: this.createIdentifierWithLocation(identifiers[0].text, identifiers[0])
                };
            } else if (identifiers?.length >= 2) {
                functionName = `${identifiers[0].text}.${identifiers[1].text}`;
                target = {
                    type: 'MemberAccess',
                    object: this.createIdentifierWithLocation(identifiers[0].text, identifiers[0]),
                    member: this.createIdentifierWithLocation(identifiers[1].text, identifiers[1])
                };
            }
        } else if (identifier) {
            // Normal function call (e.g., data2(), apply())
            if (Array.isArray(identifier)) {
                functionName = this.createIdentifierWithLocation(identifier[0]?.text, identifier[0]);
            } else {
                functionName = this.createIdentifierWithLocation(identifier.text, identifier);
            }
        }
        
        const result: ASTNode = {
            type: 'FunctionCall',
            functionName: functionName,
            arguments: argumentList ? this.extractArgumentsFromList(argumentList) : [],
            loc: this.getLocationInfo(ctx)
        };
        
        if (isMethodCall && target) {
            result.isMethodCall = true;
            result.target = target;
        }
        
        if (constructionBody) {
            // This is actually an object construction with trailing lambda
            result.isObjectConstruction = true;
            result.body = this.extractStatementsFromBody(constructionBody);
        } else {
            result.body = [];
        }
        
        return result;
    }

    visitTypeReference(ctx: any): ASTNode {
        const stringType = ctx.STRING_TYPE();
        const intType = ctx.INT_TYPE();
        const identifier = ctx.IDENTIFIER();
        
        let typeName: string;
        if (stringType) {
            typeName = 'string';
        } else if (intType) {
            typeName = 'int';
        } else if (identifier) {
            typeName = identifier.text;
        } else {
            typeName = 'unknown';
        }

        return {
            type: 'TypeReference',
            typeName: typeName,
            loc: this.getLocationInfo(ctx)
        };
    }

    visitSchemaDirective(ctx: any): ASTNode {
        const stringLiteral = ctx.STRING_LITERAL();
        
        return {
            type: 'SchemaDirective',
            schema: stringLiteral ? this.unquote(stringLiteral.text) : '',
            loc: this.getLocationInfo(ctx)
        };
    }

    visitAnnotation(ctx: any): ASTNode {
        const identifier = ctx.IDENTIFIER();
        const stringLiteral = ctx.STRING_LITERAL();
        
        const result: ASTNode = {
            type: 'Annotation',
            loc: this.getLocationInfo(ctx)
        };
        
        if (identifier) {
            result.name = this.createIdentifierWithLocation(identifier.text, identifier);
            if (stringLiteral) {
                result.value = this.unquote(stringLiteral.text);
            }
        }
        
        return result;
    }

    visitStructDefinition(ctx: any): ASTNode {
        const identifier = ctx.IDENTIFIER();
        
        return {
            type: 'StructDefinition',
            name: identifier ? this.createIdentifierWithLocation(identifier.text, identifier) : undefined,
            loc: this.getLocationInfo(ctx)
        };
    }

    visitSchemaMember(ctx: any): ASTNode {
        const identifier = ctx.IDENTIFIER();
        const multiply = ctx.MULTIPLY();
        const question = ctx.QUESTION();
        const plus = ctx.PLUS();
        const typeRef = ctx.typeReference();
        
        const result: ASTNode = {
            type: 'SchemaMember',
            loc: this.getLocationInfo(ctx)
        };
        
        if (identifier) {
            result.name = this.createIdentifierWithLocation(identifier.text, identifier);
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
                result.dataType = this.visit(typeRef);
            }
        }
        
        return result;
    }

    visitMixinDeclaration(ctx: any): ASTNode {
        const identifier = ctx.IDENTIFIER();
        
        return {
            type: 'MixinDeclaration',
            mixinType: identifier ? {
                type: 'TypeReference',
                typeName: identifier.text
            } : undefined,
            loc: this.getLocationInfo(ctx)
        };
    }

    visitStructMember(ctx: any): ASTNode {
        const identifier = ctx.IDENTIFIER();
        const question = ctx.QUESTION();
        const typeRef = ctx.typeReference();
        
        return {
            type: 'StructMember',
            name: identifier ? this.createIdentifierWithLocation(identifier.text, identifier) : undefined,
            required: !question, // ? があれば任意、なければ必須
            dataType: typeRef ? this.visit(typeRef) : undefined,
            loc: this.getLocationInfo(ctx)
        };
    }

    visitFunctionDefinition(ctx: any): ASTNode {
        const identifier = ctx.IDENTIFIER();
        const isDeclare = ctx.DECLARE();
        const returnType = ctx.typeReference();
        const parameterList = ctx.parameterList();
        const functionBody = ctx.functionBody();
        
        return {
            type: 'FunctionDefinition',
            name: identifier ? this.createIdentifierWithLocation(identifier.text, identifier) : undefined,
            isDeclare: !!isDeclare,
            returnType: returnType ? this.visit(returnType) : undefined,
            parameters: parameterList ? this.extractParameters(parameterList) : [],
            functionBody: functionBody ? this.visit(functionBody) : undefined,
            loc: this.getLocationInfo(ctx)
        };
    }

    visitMethodDefinition(ctx: any): ASTNode {
        const identifier = ctx.IDENTIFIER();
        const returnType = ctx.typeReference();
        const parameterList = ctx.parameterList();
        const functionBody = ctx.functionBody();
        
        return {
            type: 'MethodDefinition',
            name: identifier ? this.createIdentifierWithLocation(identifier.text, identifier) : undefined,
            returnType: returnType ? this.visit(returnType) : undefined,
            parameters: parameterList ? this.extractParameters(parameterList) : [],
            functionBody: functionBody ? this.visit(functionBody) : undefined,
            loc: this.getLocationInfo(ctx)
        };
    }

    visitConfigurationCall(ctx: any): ASTNode {
        const identifier = ctx.IDENTIFIER();
        const argumentList = ctx.argumentList();
        const constructionBody = ctx.constructionBody();
        
        return {
            type: 'ConfigurationCall',
            functionName: identifier ? this.createIdentifierWithLocation(identifier.text, identifier) : undefined,
            arguments: argumentList ? this.extractArgumentsFromList(argumentList) : [],
            body: constructionBody ? this.extractStatementsFromBody(constructionBody) : [],
            loc: this.getLocationInfo(ctx)
        };
    }

    visitForStatement(ctx: any): ASTNode {
        const identifier = ctx.IDENTIFIER();
        const expression = ctx.expression();
        const statements = ctx.statement();
        
        return {
            type: 'ForStatement',
            iteratorVariable: identifier ? this.createIdentifierWithLocation(identifier.text, identifier) : undefined,
            iterable: expression ? this.visit(expression) : undefined,
            body: statements && statements.length > 0 ? statements.map((stmt: any) => this.visit(stmt)) : [],
            loc: this.getLocationInfo(ctx)
        };
    }

    visitParameter(ctx: any): ASTNode {
        const identifier = ctx.IDENTIFIER();
        const typeRef = ctx.typeReference();
        
        return {
            type: 'Parameter',
            parameterName: identifier ? identifier.text : undefined,
            parameterType: typeRef ? typeRef.text : undefined,
            loc: this.getLocationInfo(ctx)
        };
    }

    visitExpression(ctx: any): ASTNode {
        if (ctx.childCount >= 3) {
            // Range expression: left .. right
            const leftChild = ctx.getChild(0);
            const operatorChild = ctx.getChild(1);
            const rightChild = ctx.getChild(2);
            
            if (leftChild && operatorChild && rightChild && operatorChild.text === '..') {
                return {
                    type: 'BinaryExpression',
                    left: this.visit(leftChild),
                    operator: operatorChild.text, // RANGE (..)
                    right: this.visit(rightChild),
                    loc: this.getLocationInfo(ctx)
                };
            }
        }
        // For other cases, delegate to default behavior
        return this.visitChildren(ctx);
    }

    visitAdditiveExpression(ctx: any): ASTNode {
        if (ctx.childCount >= 3) {
            // 左結合で複数の加算/減算を処理
            let currentLeft = this.visit(ctx.getChild(0));
            
            for (let i = 1; i < ctx.childCount; i += 2) {
                const operatorChild = ctx.getChild(i);
                const rightChild = ctx.getChild(i + 1);
                
                if (operatorChild && rightChild) {
                    const rightNode = this.visit(rightChild);
                    currentLeft = {
                        type: 'BinaryExpression',
                        left: currentLeft,
                        operator: operatorChild.text,
                        right: rightNode,
                        loc: this.getLocationInfo(ctx)
                    };
                }
            }
            
            return currentLeft;
        }
        // For other cases, delegate to default behavior
        return this.visitChildren(ctx);
    }

    visitMultiplicativeExpression(ctx: any): ASTNode {
        if (ctx.childCount >= 3) {
            // 左結合で複数の乗算/除算を処理
            let currentLeft = this.visit(ctx.getChild(0));
            
            for (let i = 1; i < ctx.childCount; i += 2) {
                const operatorChild = ctx.getChild(i);
                const rightChild = ctx.getChild(i + 1);
                
                if (operatorChild && rightChild) {
                    const rightNode = this.visit(rightChild);
                    currentLeft = {
                        type: 'BinaryExpression',
                        left: currentLeft,
                        operator: operatorChild.text,
                        right: rightNode,
                        loc: this.getLocationInfo(ctx)
                    };
                }
            }
            
            return currentLeft;
        }
        // For other cases, delegate to default behavior
        return this.visitChildren(ctx);
    }

    visitComparisonExpression(ctx: any): ASTNode {
        if (ctx.childCount >= 3) {
            const leftChild = ctx.getChild(0);
            const operatorChild = ctx.getChild(1);
            const rightChild = ctx.getChild(2);
            
            if (leftChild && operatorChild && rightChild) {
                return {
                    type: 'BinaryExpression',
                    left: this.visit(leftChild),
                    operator: operatorChild.text, // Comparison operators
                    right: this.visit(rightChild),
                    loc: this.getLocationInfo(ctx)
                };
            }
        }
        // For other cases, delegate to default behavior
        return this.visitChildren(ctx);
    }
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
        
        // カスタムエラーリスナーを設定
        const errorListener = new CanonErrorListener(filename);
        parser.removeErrorListeners(); // デフォルトのエラーリスナーを削除
        parser.addErrorListener(errorListener);
        
        // パースツリーを構築
        const tree = parser.program();
        
        // エラーがあった場合の処理
        if (errorListener.hasErrors()) {
            const errors = errorListener.getErrors();
            const formatter = new ErrorFormatter(input, filename, DEFAULT_FORMATTER_OPTIONS);
            const formattedErrors = formatter.formatErrors([...errors.getSortedErrors()]);
            
            console.error('Canon compilation failed:\n');
            console.error(formattedErrors);
            
            // デバッグ情報の表示（詳細モード）
            if (process.env.CANON_DEBUG) {
                console.error('\nDebug Information:');
                console.error('==================');
                console.error(`Total syntax errors: ${parser.numberOfSyntaxErrors}`);
                console.error('Tokens:');
                for (let i = 0; i < Math.min(tokenStream.size, 50); i++) {
                    const token = tokenStream.get(i);
                    console.error(`Token ${i}: type=${token.type}, text='${token.text}', line=${token.line}, column=${token.charPositionInLine}`);
                }
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
