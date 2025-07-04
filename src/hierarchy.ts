import * as fs from 'fs';
import * as path from 'path';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { CanonLexer } from './generated/CanonLexer';
import { CanonParser } from './generated/CanonParser';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { CanonParserListener } from './generated/CanonParserListener';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

class SchemaCanonParseListener implements CanonParserListener {
    private depth = 0;

    private getIndent(): string {
        return '  '.repeat(this.depth);
    }

    private logEnter(ruleName: string, details?: string): void {
        const info = details ? `: ${details}` : '';
        console.log(`${this.getIndent()}${ruleName}${info}`);
        this.depth++;
    }

    private logExit(): void {
        this.depth--;
    }

    enterProgram(ctx: any): void {
        this.logEnter('Program');
    }

    exitProgram(ctx: any): void {
        this.logExit();
    }

    enterSchemaDirective(ctx: any): void {
        const schema = ctx.STRING_LITERAL()?.text || 'unknown';
        this.logEnter('SchemaDirective', schema);
    }

    exitSchemaDirective(ctx: any): void {
        this.logExit();
    }

    enterSchemaDefinition(ctx: any): void {
        this.logEnter('SchemaDefinition');
    }

    exitSchemaDefinition(ctx: any): void {
        this.logExit();
    }

    enterSchemaMember(ctx: any): void {
        const identifier = ctx.IDENTIFIER()?.text || 'unknown';
        const isMultiple = ctx.MULTIPLY() ? '*' : '';
        const type = ctx.typeReference()?.text || 'unknown';
        this.logEnter('SchemaMember', `${identifier}${isMultiple}: ${type}`);
    }

    exitSchemaMember(ctx: any): void {
        this.logExit();
    }

    enterStructDefinition(ctx: any): void {
        const name = ctx.IDENTIFIER()?.text || 'unknown';
        this.logEnter('StructDefinition', name);
    }

    exitStructDefinition(ctx: any): void {
        this.logExit();
    }

    enterStructMember(ctx: any): void {
        if (ctx.MIXIN()) {
            const mixinType = ctx.IDENTIFIER()?.text || 'unknown';
            this.logEnter('StructMember', `mixin ${mixinType}`);
        } else if (ctx.IDENTIFIER()) {
            const name = ctx.IDENTIFIER()?.text || 'unknown';
            const optional = ctx.QUESTION() ? '?' : '';
            const type = ctx.typeReference()?.text || 'unknown';
            this.logEnter('StructMember', `${name}${optional}: ${type}`);
        } else {
            this.logEnter('StructMember', 'method');
        }
    }

    exitStructMember(ctx: any): void {
        this.logExit();
    }

    enterMethodDefinition(ctx: any): void {
        const name = ctx.IDENTIFIER()?.text || 'unknown';
        const returnType = ctx.typeReference()?.text || 'void';
        this.logEnter('MethodDefinition', `${name}(): ${returnType}`);
    }

    exitMethodDefinition(ctx: any): void {
        this.logExit();
    }

    enterFunctionDefinition(ctx: any): void {
        const name = ctx.IDENTIFIER()?.text || 'unknown';
        const returnType = ctx.typeReference()?.text || 'void';
        const isDeclare = ctx.DECLARE() ? 'declare ' : '';
        
        // パラメータの情報を取得
        const parameterList = ctx.parameterList();
        let parameters = '';
        if (parameterList) {
            const params = parameterList.parameter();
            if (params) {
                parameters = Array.isArray(params) 
                    ? params.map((p: any) => `${p.IDENTIFIER().text}: ${p.typeReference().text}`).join(', ')
                    : `${params.IDENTIFIER().text}: ${params.typeReference().text}`;
            }
        }
        
        this.logEnter('FunctionDefinition', `${isDeclare}${name}(${parameters}): ${returnType}`);
    }

    exitFunctionDefinition(ctx: any): void {
        this.logExit();
    }

    enterFunctionBody(ctx: any): void {
        this.logEnter('FunctionBody');
    }

    exitFunctionBody(ctx: any): void {
        this.logExit();
    }

    enterStatement(ctx: any): void {
        this.logEnter('Statement');
    }

    exitStatement(ctx: any): void {
        this.logExit();
    }

    enterReturnStatement(ctx: any): void {
        this.logEnter('ReturnStatement');
    }

    exitReturnStatement(ctx: any): void {
        this.logExit();
    }

    enterExpression(ctx: any): void {
        this.logEnter('Expression');
    }

    exitExpression(ctx: any): void {
        this.logExit();
    }

    enterRangeExpression(ctx: any): void {
        this.logEnter('RangeExpression');
    }

    exitRangeExpression(ctx: any): void {
        this.logExit();
    }

    enterComparisonExpression(ctx: any): void {
        this.logEnter('ComparisonExpression');
    }

    exitComparisonExpression(ctx: any): void {
        this.logExit();
    }

    enterAdditiveExpression(ctx: any): void {
        this.logEnter('AdditiveExpression');
    }

    exitAdditiveExpression(ctx: any): void {
        this.logExit();
    }

    enterMultiplicativeExpression(ctx: any): void {
        this.logEnter('MultiplicativeExpression');
    }

    exitMultiplicativeExpression(ctx: any): void {
        this.logExit();
    }

    enterPrimaryExpression(ctx: any): void {
        // いろいろなパターンをチェック
        const identifiers = ctx.IDENTIFIER();
        const lparen = ctx.LPAREN();
        const rparen = ctx.RPAREN();
        const literal = ctx.literal();
        const stringInterpolation = ctx.stringInterpolation();
        const functionCall = ctx.functionCall();
        const memberAccess = ctx.memberAccess();
        
        if (identifiers && identifiers.length > 0 && lparen && rparen) {
            // apply() style function call
            const functionName = identifiers[0].text;
            this.logEnter('PrimaryExpression', `apply-style: ${functionName}()`);
        } else if (functionCall) {
            this.logEnter('PrimaryExpression', 'contains functionCall');
        } else if (memberAccess) {
            this.logEnter('PrimaryExpression', 'contains memberAccess');
        } else if (literal) {
            this.logEnter('PrimaryExpression', 'contains literal');
        } else if (stringInterpolation) {
            this.logEnter('PrimaryExpression', 'contains stringInterpolation');
        } else if (identifiers && identifiers.length > 0) {
            this.logEnter('PrimaryExpression', `identifier: ${identifiers[0].text}`);
        } else {
            this.logEnter('PrimaryExpression', 'unknown pattern');
        }
    }

    exitPrimaryExpression(ctx: any): void {
        this.logExit();
    }

    enterStringInterpolation(ctx: any): void {
        this.logEnter('StringInterpolation');
    }

    exitStringInterpolation(ctx: any): void {
        this.logExit();
    }

    enterStringContent(ctx: any): void {
        this.logEnter('StringContent');
    }

    exitStringContent(ctx: any): void {
        this.logExit();
    }

    enterInterpolationExpression(ctx: any): void {
        this.logEnter('InterpolationExpression');
    }

    exitInterpolationExpression(ctx: any): void {
        this.logExit();
    }

    enterMemberAccess(ctx: any): void {
        const identifiers = ctx.IDENTIFIER();
        const thisToken = ctx.THIS();
        if (thisToken && identifiers?.[0]) {
            this.logEnter('MemberAccess', `this.${identifiers[0].text}`);
        } else if (identifiers?.length >= 2) {
            this.logEnter('MemberAccess', `${identifiers[0].text}.${identifiers[1].text}`);
        } else {
            this.logEnter('MemberAccess', 'unknown.member');
        }
    }

    exitMemberAccess(ctx: any): void {
        this.logExit();
    }

    enterLiteral(ctx: any): void {
        const stringLiteral = ctx.STRING_LITERAL()?.text;
        const integerLiteral = ctx.INTEGER_LITERAL()?.text;
        const value = stringLiteral || integerLiteral || 'unknown';
        this.logEnter('Literal', value);
    }

    exitLiteral(ctx: any): void {
        this.logExit();
    }

    enterAssignment(ctx: any): void {
        const identifiers = ctx.IDENTIFIER();
        const thisToken = ctx.THIS();
        let target = 'unknown';
        
        if (thisToken && identifiers?.[0]) {
            target = `this.${identifiers[0].text}`;
        } else if (identifiers?.length >= 2) {
            target = `${identifiers[0].text}.${identifiers[1].text}`;
        } else if (identifiers?.[0]) {
            target = identifiers[0].text;
        }
        
        this.logEnter('Assignment', `${target} = ...`);
    }

    exitAssignment(ctx: any): void {
        this.logExit();
    }

    enterAnnotation(ctx: any): void {
        const at = ctx.AT()?.text || '@';
        const id = ctx.IDENTIFIER()?.text || 'unknown';
        const arg = ctx.STRING_LITERAL()?.text || '';
        this.logEnter('Annotation', `${at}${id}${arg ? ' ' + arg : ''}`);
    }

    exitAnnotation(ctx: any): void {
        this.logExit();
    }

    // Default implementations for other methods
    enterTypeReference(ctx: any): void {}
    exitTypeReference(ctx: any): void {}
    enterParameterList(ctx: any): void {}
    exitParameterList(ctx: any): void {}
    enterParameter(ctx: any): void {}
    exitParameter(ctx: any): void {}
    enterVariableDeclaration(ctx: any): void {}
    exitVariableDeclaration(ctx: any): void {}
    enterExpressionStatement(ctx: any): void {
        // expressionStatementの内容を取得
        const expression = ctx.expression();
        if (expression) {
            // expressionの詳細を調べる
            this.logEnter('ExpressionStatement', 'contains expression');
        } else {
            this.logEnter('ExpressionStatement', 'no expression');
        }
    }

    exitExpressionStatement(ctx: any): void {
        this.logExit();
    }
    enterForStatement(ctx: any): void {}
    exitForStatement(ctx: any): void {}
    enterObjectConstruction(ctx: any): void {
        const identifier = ctx.IDENTIFIER()?.text || 'unknown';
        
        // 引数の情報を取得
        const argumentList = ctx.argumentList();
        let args = '';
        if (argumentList) {
            const expressions = argumentList.expression();
            if (expressions) {
                args = Array.isArray(expressions) 
                    ? expressions.map((_: any, index: number) => `arg${index}`).join(', ')
                    : 'arg0';
            }
        }
        
        this.logEnter('ObjectConstruction', `${identifier}(${args})`);
    }

    exitObjectConstruction(ctx: any): void {
        this.logExit();
    }
    enterConstructionBody(ctx: any): void {}
    exitConstructionBody(ctx: any): void {}
    enterFunctionCall(ctx: any): void {
        let functionName = 'unknown';
        
        // IDENTIFIERを直接参照
        const identifiers = ctx.IDENTIFIER();
        if (identifiers && identifiers.length > 0) {
            functionName = identifiers[0].text;
        } else {
            // memberAccessの場合
            const memberAccess = ctx.memberAccess();
            if (memberAccess) {
                const memberIdentifiers = memberAccess.IDENTIFIER();
                const thisToken = memberAccess.THIS();
                if (thisToken && memberIdentifiers?.[0]) {
                    functionName = `this.${memberIdentifiers[0].text}`;
                } else if (memberIdentifiers?.length >= 2) {
                    functionName = `${memberIdentifiers[0].text}.${memberIdentifiers[1].text}`;
                } else {
                    functionName = 'memberAccess.function';
                }
            }
        }
        
        // 引数の情報を取得
        const argumentList = ctx.argumentList();
        let args = '';
        if (argumentList) {
            const expressions = argumentList.expression();
            if (expressions) {
                if (Array.isArray(expressions)) {
                    args = expressions.map((_: any, index: number) => `arg${index}`).join(', ');
                } else {
                    args = 'arg0';
                }
            }
        }
        
        this.logEnter('FunctionCall', `${functionName}(${args})`);
    }

    exitFunctionCall(ctx: any): void {
        this.logExit();
    }
    enterArgumentList(ctx: any): void {}
    exitArgumentList(ctx: any): void {}

    enterEveryRule(ctx: any): void {}
    exitEveryRule(ctx: any): void {}
    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: any): void {
        console.error(`Parse Error: ${node.text}`);
    }
}

function parseSchemaCanon(): void {
    try {
        // schema.canonファイルを読み込み
        const schemaPath = path.join(__dirname, '..', 'definition', 'schema.canon');
        const input = fs.readFileSync(schemaPath, 'utf-8');
        
        console.log('Parsing schema.canon...\n');
        
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
        
        // リスナーを使ってパースツリーを走査
        const listener = new SchemaCanonParseListener();
        ParseTreeWalker.DEFAULT.walk(listener, tree);
        
        console.log('\nParsing completed successfully!');
        
    } catch (error) {
        console.error('Error parsing schema.canon:', error);
    }
}

// メイン実行
if (require.main === module) {
    parseSchemaCanon();
}
