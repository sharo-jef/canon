import * as fs from 'fs';
import * as path from 'path';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { CanonLexer } from './src/generated/CanonLexer';
import { CanonParser } from './src/generated/CanonParser';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { CanonParserListener } from './src/generated/CanonParserListener';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

class SchemaCanonParseListener implements CanonParserListener {
    private depth = 0;

    private getIndent(): string {
        return '  '.repeat(this.depth);
    }

    enterProgram(ctx: any): void {
        console.log(`${this.getIndent()}Program:`);
        this.depth++;
    }

    exitProgram(ctx: any): void {
        this.depth--;
    }

    enterSchemaDirective(ctx: any): void {
        console.log(`${this.getIndent()}Schema Directive: ${ctx.STRING_LITERAL()?.text || 'unknown'}`);
    }

    exitSchemaDirective(ctx: any): void {}

    enterSchemaDefinition(ctx: any): void {
        console.log(`${this.getIndent()}Schema Definition:`);
        this.depth++;
    }

    exitSchemaDefinition(ctx: any): void {
        this.depth--;
    }

    enterSchemaMember(ctx: any): void {
        const identifier = ctx.IDENTIFIER()?.text || 'unknown';
        const isMultiple = ctx.MULTIPLY() ? '*' : '';
        const type = ctx.typeReference()?.text || 'unknown';
        console.log(`${this.getIndent()}Schema Member: ${identifier}${isMultiple}: ${type}`);
    }

    exitSchemaMember(ctx: any): void {}

    enterStructDefinition(ctx: any): void {
        const name = ctx.IDENTIFIER()?.text || 'unknown';
        console.log(`${this.getIndent()}Struct Definition: ${name}`);
        this.depth++;
    }

    exitStructDefinition(ctx: any): void {
        this.depth--;
    }

    enterStructMember(ctx: any): void {
        if (ctx.MIXIN()) {
            const mixinType = ctx.IDENTIFIER()?.text || 'unknown';
            console.log(`${this.getIndent()}Mixin: ${mixinType}`);
        } else if (ctx.IDENTIFIER()) {
            const name = ctx.IDENTIFIER()?.text || 'unknown';
            const optional = ctx.QUESTION() ? '?' : '';
            const type = ctx.typeReference()?.text || 'unknown';
            console.log(`${this.getIndent()}Struct Member: ${name}${optional}: ${type}`);
        }
    }

    exitStructMember(ctx: any): void {}

    enterFunctionDefinition(ctx: any): void {
        const name = ctx.IDENTIFIER()?.text || 'unknown';
        const returnType = ctx.typeReference()?.text || 'void';
        console.log(`${this.getIndent()}Function Definition: ${name}(): ${returnType}`);
        this.depth++;
    }

    exitFunctionDefinition(ctx: any): void {
        this.depth--;
    }

    enterAnnotation(ctx: any): void {
        console.log(`${this.getIndent()}Annotation: ${ctx.text}`);
    }

    exitAnnotation(ctx: any): void {}

    enterTypeReference(ctx: any): void {}
    exitTypeReference(ctx: any): void {}

    enterMethodDefinition(ctx: any): void {}
    exitMethodDefinition(ctx: any): void {}

    enterFunctionBody(ctx: any): void {}
    exitFunctionBody(ctx: any): void {}

    enterParameterList(ctx: any): void {}
    exitParameterList(ctx: any): void {}

    enterParameter(ctx: any): void {}
    exitParameter(ctx: any): void {}

    enterStatement(ctx: any): void {}
    exitStatement(ctx: any): void {}

    enterReturnStatement(ctx: any): void {}
    exitReturnStatement(ctx: any): void {}

    enterVariableDeclaration(ctx: any): void {}
    exitVariableDeclaration(ctx: any): void {}

    enterAssignmentStatement(ctx: any): void {}
    exitAssignmentStatement(ctx: any): void {}

    enterCallStatement(ctx: any): void {}
    exitCallStatement(ctx: any): void {}

    enterForStatement(ctx: any): void {}
    exitForStatement(ctx: any): void {}

    enterCall(ctx: any): void {}
    exitCall(ctx: any): void {}

    enterExpression(ctx: any): void {}
    exitExpression(ctx: any): void {}

    enterPrimary(ctx: any): void {}
    exitPrimary(ctx: any): void {}

    enterPropertyAccess(ctx: any): void {}
    exitPropertyAccess(ctx: any): void {}

    enterStringInterpolation(ctx: any): void {}
    exitStringInterpolation(ctx: any): void {}

    enterBlock(ctx: any): void {}
    exitBlock(ctx: any): void {}

    enterArguments(ctx: any): void {}
    exitArguments(ctx: any): void {}

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
        const schemaPath = path.join(__dirname, 'definition', 'schema.canon');
        const input = fs.readFileSync(schemaPath, 'utf-8');
        
        console.log('Parsing schema.canon...\n');
        
        // ANTLR4パーサーの設定
        const inputStream = new ANTLRInputStream(input);
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
