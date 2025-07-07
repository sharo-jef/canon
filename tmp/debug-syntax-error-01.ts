import * as fs from 'fs';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { CanonLexer } from '../src/generated/CanonLexer';
import { CanonParser } from '../src/generated/CanonParser';
import { CanonErrorListener, ErrorFormatter, DEFAULT_FORMATTER_OPTIONS } from '../src/error';

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
      return { success: true, ast: undefined };
    }
  } catch (error) {
    return { success: false, errors: `Parse failed: ${error}` };
  }
}

const input = fs.readFileSync('./testcases/error-cases/syntax-error-01/input.canon', 'utf8');
console.log('Input:', JSON.stringify(input));

const inputFile = './testcases/error-cases/syntax-error-01/input.canon';
const result = parseCanonInput(input, inputFile);

console.log('Result success:', result.success);
console.log('Result errors:');
console.log(result.errors);
console.log('---');
console.log('Error lines:');
if (result.errors) {
  result.errors.split('\n').forEach((line, i) => {
    console.log(`${i + 1}: ${JSON.stringify(line)}`);
  });
}
