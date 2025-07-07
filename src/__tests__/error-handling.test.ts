import * as fs from 'fs';
import * as path from 'path';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { CanonLexer } from '../generated/CanonLexer';
import { CanonParser } from '../generated/CanonParser';
import { CanonErrorListener, ErrorFormatter, DEFAULT_FORMATTER_OPTIONS } from '../error';

/**
 * Parse Canon input and return formatted errors or success indicator
 */
function parseCanonInput(input: string, inputFile: string): { success: boolean; errors?: string } {
  try {
    const inputStream = CharStreams.fromString(input);
    const lexer = new CanonLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new CanonParser(tokenStream);

    // Set up error listener
    const errorListener = new CanonErrorListener(inputFile);
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);

    // Parse
    parser.program();

    if (errorListener.hasErrors()) {
      const errors = errorListener.getErrors();
      const formatter = new ErrorFormatter(input, inputFile, {
        ...DEFAULT_FORMATTER_OPTIONS,
        showColors: false, // Disable colors for testing
        contextLines: 2, // Show 2 lines before and after for better context
      });
      const formattedErrors = formatter.formatErrors([...errors.getSortedErrors()]);
      return { success: false, errors: formattedErrors.replace(/\r\n/g, '\n').trim() };
    } else {
      return { success: true };
    }
  } catch (error) {
    throw new Error(`Unexpected error during parsing: ${error}`);
  }
}

/**
 * Load test case files
 */
function loadTestCase(testCasePath: string) {
  const inputPath = path.join(testCasePath, 'input.canon');
  const errorPath = path.join(testCasePath, 'error.txt');
  const outputPath = path.join(testCasePath, 'output.yml');
  const descriptionPath = path.join(testCasePath, 'description.txt');

  const testCase: {
    name: string;
    description?: string;
    input?: string;
    expectedError?: string;
    expectedOutput?: string;
    isErrorCase: boolean;
  } = {
    name: path.basename(testCasePath),
    isErrorCase: fs.existsSync(errorPath),
  };

  if (fs.existsSync(descriptionPath)) {
    testCase.description = fs.readFileSync(descriptionPath, 'utf-8').trim();
  }

  if (fs.existsSync(inputPath)) {
    testCase.input = fs.readFileSync(inputPath, 'utf-8');
  }

  if (fs.existsSync(errorPath)) {
    testCase.expectedError = fs.readFileSync(errorPath, 'utf-8').replace(/\r\n/g, '\n').trim();
  }

  if (fs.existsSync(outputPath)) {
    testCase.expectedOutput = fs.readFileSync(outputPath, 'utf-8').trim();
  }

  return testCase;
}

describe('Canon Error Handling', () => {
  const testcasesDir = path.join(__dirname, '..', '..', 'testcases');

  if (!fs.existsSync(testcasesDir)) {
    test.skip('No testcases directory found', () => {});
    return;
  }

  describe('Error Cases', () => {
    const errorCasesDir = path.join(testcasesDir, 'error-cases');

    if (fs.existsSync(errorCasesDir)) {
      const errorCases = fs
        .readdirSync(errorCasesDir)
        .filter((name) => fs.statSync(path.join(errorCasesDir, name)).isDirectory());

      errorCases.forEach((testCaseName) => {
        const testCasePath = path.join(errorCasesDir, testCaseName);
        const testCase = loadTestCase(testCasePath);

        test(`${testCaseName}: ${testCase.description || 'No description'}`, () => {
          expect(testCase.input).toBeDefined();
          expect(testCase.expectedError).toBeDefined();

          const inputFile = path.join(testCasePath, 'input.canon');
          const result = parseCanonInput(testCase.input!, inputFile);

          expect(result.success).toBe(false);
          expect(result.errors).toBeDefined();

          // Normalize both actual and expected errors for comparison
          const actualError = result.errors!;
          const expectedError = testCase.expectedError!;

          expect(actualError).toBe(expectedError);
        });
      });
    } else {
      test.skip('No error-cases directory found', () => {});
    }
  });

  describe('Success Cases', () => {
    const successCasesDir = path.join(testcasesDir, 'success-cases');

    if (fs.existsSync(successCasesDir)) {
      const successCases = fs
        .readdirSync(successCasesDir)
        .filter((name) => fs.statSync(path.join(successCasesDir, name)).isDirectory());

      successCases.forEach((testCaseName) => {
        const testCasePath = path.join(successCasesDir, testCaseName);
        const testCase = loadTestCase(testCasePath);

        test(`${testCaseName}: ${testCase.description || 'No description'}`, () => {
          expect(testCase.input).toBeDefined();

          const inputFile = path.join(testCasePath, 'input.canon');
          const result = parseCanonInput(testCase.input!, inputFile);

          expect(result.success).toBe(true);
          expect(result.errors).toBeUndefined();

          // TODO: Add AST validation when expectedOutput is available
          if (testCase.expectedOutput) {
            // This would require implementing AST serialization to compare with expected output
            console.log('Expected output validation not yet implemented');
          }
        });
      });
    } else {
      test.skip('No success-cases directory found', () => {});
    }
  });
});
