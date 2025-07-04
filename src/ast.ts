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
        return {
            type: 'Terminal',
            text: node.text
        };
    }

    visitChildren(node: RuleNode): ASTNode {
        const ruleNames = (node as any).constructor.name || 'UnknownRule';
        const ruleName = ruleNames.replace('Context', '');
        
        const result: ASTNode = {
            type: ruleName,
            children: []
        };

        // 特定のルールに対して詳細情報を追加
        this.addRuleSpecificInfo(node, result);

        // 式の階層を簡略化: 単一の子ノードしか持たない式は省略
        if (this.isSimpleExpressionNode(node, ruleName)) {
            const child = node.getChild(0);
            if (child) {
                return this.visit(child);
            }
        }

        // 子ノードを処理
        if (node.childCount > 0) {
            for (let i = 0; i < node.childCount; i++) {
                const child = node.getChild(i);
                if (child) {
                    const childNode = this.visit(child);
                    if (childNode) {
                        result.children!.push(childNode);
                    }
                }
            }
        }

        return result;
    }

    private isSimpleExpressionNode(node: RuleNode, ruleName: string): boolean {
        // 単一の子ノードしか持たない式ノードかチェック
        if (node.childCount === 1) {
            const expressionTypes = [
                'Expression', 'RangeExpression', 'ComparisonExpression',
                'AdditiveExpression', 'MultiplicativeExpression'
            ];
            return expressionTypes.includes(ruleName);
        }
        return false;
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
            const typeRef = ctx.typeReference();
            
            if (identifier) {
                result.name = identifier.text;
                result.isMultiple = !!multiply;
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
        
        // Struct member
        else if (ctx.constructor.name === 'StructMemberContext') {
            if (ctx.MIXIN()) {
                result.memberType = 'mixin';
                const identifier = ctx.IDENTIFIER();
                if (identifier) {
                    result.mixinType = identifier.text;
                }
            } else if (ctx.IDENTIFIER()) {
                result.memberType = 'field';
                const identifier = ctx.IDENTIFIER();
                const question = ctx.QUESTION();
                const typeRef = ctx.typeReference();
                
                if (identifier) {
                    result.name = identifier.text;
                    result.isOptional = !!question;
                    if (typeRef) {
                        result.dataType = typeRef.text;
                    }
                }
            } else {
                result.memberType = 'method';
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
        }
        
        // Function call
        else if (ctx.constructor.name === 'FunctionCallContext') {
            const identifier = ctx.IDENTIFIER();
            const memberAccess = ctx.memberAccess();
            
            if (memberAccess) {
                // Member function call (e.g., version.toString())
                result.isMethodCall = true;
            } else if (identifier && identifier.length > 0) {
                result.functionName = identifier[0].text;
            }
            
            const argumentList = ctx.argumentList();
            if (argumentList) {
                result.hasArguments = true;
                result.argumentCount = this.countArguments(argumentList);
            }
            
            const constructionBody = ctx.constructionBody();
            if (constructionBody) {
                // This is actually an object construction with trailing lambda
                result.isObjectConstruction = true;
                result.hasBody = true;
            }
        }
        
        // Object construction
        else if (ctx.constructor.name === 'ObjectConstructionContext') {
            const identifier = ctx.IDENTIFIER();
            if (identifier) {
                result.constructorName = identifier.text;
            }
            
            const argumentList = ctx.argumentList();
            if (argumentList) {
                result.hasArguments = true;
                result.argumentCount = this.countArguments(argumentList);
            }
            
            const constructionBody = ctx.constructionBody();
            if (constructionBody) {
                result.hasBody = true;
            }
        }
        
        // Primary expression - handle apply() style calls
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
            }
        }
        
        // Assignment
        else if (ctx.constructor.name === 'AssignmentContext') {
            let target = 'unknown';
            const identifiers = ctx.IDENTIFIER();
            const thisToken = ctx.THIS();
            
            if (thisToken && identifiers?.[0]) {
                target = `this.${identifiers[0].text}`;
            } else if (identifiers?.length >= 2) {
                target = `${identifiers[0].text}.${identifiers[1].text}`;
            } else if (identifiers?.[0]) {
                target = identifiers[0].text;
            }
            
            result.target = target;
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

    // Visitor methods implementation
    visitProgram(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitSchemaDirective(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitSchemaDefinition(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitSchemaMember(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitStructDefinition(ctx: any): ASTNode { return this.visitChildren(ctx); }
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
    visitObjectConstruction(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitConstructionBody(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitExpression(ctx: any): ASTNode { return this.visitChildren(ctx); }
    visitRangeExpression(ctx: any): ASTNode { return this.visitChildren(ctx); }
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

function parseSchemaCanonToAST(): void {
    try {
        // schema.canonファイルを読み込み
        const schemaPath = path.join(__dirname, '..', 'definition', 'schema.canon');
        const input = fs.readFileSync(schemaPath, 'utf-8');
        
        console.log('Parsing schema.canon to AST...\n');
        
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
        
        console.log('AST (YAML format):');
        console.log('==================');
        console.log(yamlOutput);
        
        console.log('\nAST parsing completed successfully!');
        
    } catch (error) {
        console.error('Error parsing schema.canon to AST:', error);
    }
}

// メイン実行
if (require.main === module) {
    parseSchemaCanonToAST();
}

export { parseSchemaCanonToAST, ASTBuilder, ASTNode };
