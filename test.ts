import * as fs from 'fs';
import * as path from 'path';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { CanonLexer } from './src/generated/CanonLexer';
import { CanonParser } from './src/generated/CanonParser';

function testSimpleFile(): void {
    try {
        const testPath = path.join(__dirname, 'test_simple.canon');
        const input = fs.readFileSync(testPath, 'utf-8');
        
        console.log('Testing simple file...\n');
        console.log('Input:', input);
        console.log('\n---\n');
        
        const inputStream = new ANTLRInputStream(input);
        const lexer = new CanonLexer(inputStream);
        
        // トークンをデバッグ出力
        const tokenStream = new CommonTokenStream(lexer);
        tokenStream.fill();
        
        console.log('Tokens:');
        for (let i = 0; i < tokenStream.size; i++) {
            const token = tokenStream.get(i);
            console.log(`${i}: ${lexer.vocabulary.getSymbolicName(token.type)} -> "${token.text}"`);
        }
        console.log('\n---\n');
        
        // パース
        lexer.reset();
        const inputStream2 = new ANTLRInputStream(input);
        const lexer2 = new CanonLexer(inputStream2);
        const tokenStream2 = new CommonTokenStream(lexer2);
        const parser = new CanonParser(tokenStream2);
        
        const tree = parser.program();
        
        if (parser.numberOfSyntaxErrors > 0) {
            console.error(`Syntax errors found: ${parser.numberOfSyntaxErrors}`);
        } else {
            console.log('Parsing completed successfully!');
        }
        
    } catch (error) {
        console.error('Error:', error);
    }
}

if (require.main === module) {
    testSimpleFile();
}
