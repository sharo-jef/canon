import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';
import { describe, test, expect } from '@jest/globals';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { CanonLexer } from '../generated/CanonLexer';
import { CanonParser } from '../generated/CanonParser';
import { CanonErrorListener, ErrorFormatter, DEFAULT_FORMATTER_OPTIONS } from '../error';
import { parseCanon } from '../parser';

/**
 * Parse Canon input and return formatted errors or success indicator
 */
function parseCanonInput(
  input: string,
  inputFile: string
): { success: boolean; errors?: string; ast?: any } {
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
    const _tree = parser.program();

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
      // Success case - try to generate AST using parseCanon function
      try {
        const ast = parseCanon(input, inputFile);
        return { success: true, ast: ast };
      } catch {
        return { success: true, ast: undefined }; // Parse succeeded even if visitor failed
      }
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
          const normalizeErrorMessage = (message: string): string => {
            // Remove Node.js experimental warnings and other system-specific messages
            return message
              .split('\n')
              .filter(
                (line) =>
                  !line.includes('ExperimentalWarning') &&
                  !line.includes('Support for loading ES Module') &&
                  !line.includes('Use `node --trace-warnings') &&
                  !line.includes('(Use `node --trace-warnings') &&
                  !line.trim().startsWith('(node:')
              )
              .join('\n')
              .trim();
          };

          const actualError = normalizeErrorMessage(result.errors!);
          const expectedError = normalizeErrorMessage(testCase.expectedError!);

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
            // Convert AST to YAML format to match expected output
            const astYaml = yaml.dump(result.ast, {
              indent: 2,
              lineWidth: -1,
              sortKeys: false,
            });
            const expectedYaml = testCase.expectedOutput.trim();

            try {
              // Parse both as YAML and compare objects
              const actualAst = yaml.load(astYaml);
              const expectedAst = yaml.load(expectedYaml);
              expect(actualAst).toEqual(expectedAst);
            } catch {
              // Fall back to string comparison if YAML parsing fails
              expect(astYaml.trim()).toBe(expectedYaml);
            }
          }
        });
      });
    } else {
      test.skip('No success-cases directory found', () => {});
    }
  });
});
