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

// Test all error cases
const errorCasesDir = path.join(__dirname, '..', 'testcases', 'error-cases');
const errorCases = fs
  .readdirSync(errorCasesDir)
  .filter((name) => fs.statSync(path.join(errorCasesDir, name)).isDirectory());

errorCases.forEach((testCaseName) => {
  const testCasePath = path.join(errorCasesDir, testCaseName);
  const inputPath = path.join(testCasePath, 'input.canon');
  const input = fs.readFileSync(inputPath, 'utf-8');

  console.log(`\n=== ${testCaseName} ===`);

  const result = parseCanonInput(input, inputPath);
  console.log(result.errors);
});
