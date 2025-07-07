import * as fs from 'fs';
import * as path from 'path';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { CanonLexer } from '../src/generated/CanonLexer';
import { CanonParser } from '../src/generated/CanonParser';
import { CanonErrorListener, ErrorFormatter, DEFAULT_FORMATTER_OPTIONS } from '../src/error';

function normalizeErrorOutput(output: string, inputFile: string): string {
  const normalizedOutput = output.replace(
    new RegExp(inputFile.replace(/\\/g, '\\\\'), 'g'),
    'input'
  );
  return normalizedOutput.replace(/\r\n/g, '\n').trim();
}

function parseCanonInput(input: string, inputFile: string): { success: boolean; errors?: string } {
  try {
    const inputStream = CharStreams.fromString(input);
    const lexer = new CanonLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new CanonParser(tokenStream);

    const errorListener = new CanonErrorListener(inputFile);
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);

    parser.program();

    if (errorListener.hasErrors()) {
      const errors = errorListener.getErrors();
      const formatter = new ErrorFormatter(input, inputFile, {
        ...DEFAULT_FORMATTER_OPTIONS,
        showColors: false,
        contextLines: 1,
      });
      const formattedErrors = formatter.formatErrors([...errors.getSortedErrors()]);
      return { success: false, errors: normalizeErrorOutput(formattedErrors, inputFile) };
    } else {
      return { success: true };
    }
  } catch (error) {
    console.error('Parse error:', error);
    return { success: false };
  }
}

// Test string-interpolation-error-01
const testInput = `val name = "Test"
val message = \`Hello, \${name}!`;

const testCasePath = path.join(
  __dirname,
  '..',
  'testcases',
  'error-cases',
  'string-interpolation-error-01'
);
const inputFile = path.join(testCasePath, 'input.canon');

console.log('=== Test Input ===');
console.log(testInput);

console.log('=== Actual Output ===');
const result = parseCanonInput(testInput, inputFile);
console.log(result.errors);

console.log('=== Expected Output ===');
const expectedPath = path.join(testCasePath, 'error.txt');
const expected = fs.readFileSync(expectedPath, 'utf-8').trim();
console.log(expected);
