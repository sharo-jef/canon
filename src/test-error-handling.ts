import * as fs from 'fs';
import * as path from 'path';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { CanonLexer } from './generated/CanonLexer';
import { CanonParser } from './generated/CanonParser';
import { 
    CanonErrorListener, 
    ErrorFormatter, 
    DEFAULT_FORMATTER_OPTIONS 
} from './error';

/**
 * Test the error handling system with test cases
 */
function runTestCase(testCasePath: string): void {
    const inputPath = path.join(testCasePath, 'input');
    const errorPath = path.join(testCasePath, 'error');
    const outputPath = path.join(testCasePath, 'output');
    const descriptionPath = path.join(testCasePath, 'description');
    
    console.log(`\nRunning test case: ${path.basename(testCasePath)}`);
    console.log('=' .repeat(50));
    
    // Read description
    if (fs.existsSync(descriptionPath)) {
        const description = fs.readFileSync(descriptionPath, 'utf-8').trim();
        console.log(`Description: ${description}`);
    }
    
    // Read input
    if (!fs.existsSync(inputPath)) {
        console.error('Input file not found');
        return;
    }
    
    const input = fs.readFileSync(inputPath, 'utf-8');
    console.log('\nInput:');
    console.log(input);
    
    // Parse the input
    try {
        const inputStream = CharStreams.fromString(input);
        const lexer = new CanonLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new CanonParser(tokenStream);
        
        // Set up error listener
        const errorListener = new CanonErrorListener(inputPath);
        parser.removeErrorListeners();
        parser.addErrorListener(errorListener);
        
        // Parse
        const tree = parser.program();
        
        if (errorListener.hasErrors()) {
            // This is an error test case
            const errors = errorListener.getErrors();
            const formatter = new ErrorFormatter(input, inputPath, DEFAULT_FORMATTER_OPTIONS);
            const formattedErrors = formatter.formatErrors([...errors.getSortedErrors()]);
            
            console.log('\nActual Error Output:');
            console.log(formattedErrors);
            
            // Compare with expected error if it exists
            if (fs.existsSync(errorPath)) {
                const expectedError = fs.readFileSync(errorPath, 'utf-8').trim();
                console.log('\nExpected Error Output:');
                console.log(expectedError);
                
                // Simple comparison (in a real test framework, you'd use more sophisticated matching)
                console.log('\nComparison Result:');
                if (formattedErrors.includes('error[E000')) {
                    console.log('✓ Error format matches expected style');
                } else {
                    console.log('✗ Error format does not match expected style');
                }
            }
        } else {
            // This is a success test case
            console.log('\n✓ Parsing completed successfully');
            
            if (fs.existsSync(outputPath)) {
                console.log('(Expected successful parsing - output validation not implemented yet)');
            }
        }
        
    } catch (error) {
        console.error('\nUnexpected error during parsing:', error);
    }
}

/**
 * Run all test cases in the testcases directory
 */
function runAllTestCases(): void {
    const testcasesDir = path.join(__dirname, '..', 'testcases');
    
    if (!fs.existsSync(testcasesDir)) {
        console.log('No testcases directory found');
        return;
    }
    
    console.log('Canon Error Handling Test Suite');
    console.log('================================');
    
    // Run error cases
    const errorCasesDir = path.join(testcasesDir, 'error-cases');
    if (fs.existsSync(errorCasesDir)) {
        console.log('\n--- Error Test Cases ---');
        const errorCases = fs.readdirSync(errorCasesDir);
        for (const testCase of errorCases) {
            const testCasePath = path.join(errorCasesDir, testCase);
            if (fs.statSync(testCasePath).isDirectory()) {
                runTestCase(testCasePath);
            }
        }
    }
    
    // Run success cases
    const successCasesDir = path.join(testcasesDir, 'success-cases');
    if (fs.existsSync(successCasesDir)) {
        console.log('\n--- Success Test Cases ---');
        const successCases = fs.readdirSync(successCasesDir);
        for (const testCase of successCases) {
            const testCasePath = path.join(successCasesDir, testCase);
            if (fs.statSync(testCasePath).isDirectory()) {
                runTestCase(testCasePath);
            }
        }
    }
    
    console.log('\n=== Test Suite Complete ===');
}

// Main execution
if (require.main === module) {
    runAllTestCases();
}
