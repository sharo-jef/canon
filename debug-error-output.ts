import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { CanonLexer } from './src/generated/CanonLexer';
import { CanonParser } from './src/generated/CanonParser';
import { CanonErrorListener } from './src/error/CanonErrorListener';
import { ErrorFormatter, DEFAULT_FORMATTER_OPTIONS } from './src/error/ErrorFormatter';

// Test syntax-error-02
const input1 = `data1("arg1", "arg2" {
    datam1 = "value1"
}`;

console.log('=== syntax-error-02 actual output ===');
const inputStream1 = new ANTLRInputStream(input1);
const lexer1 = new CanonLexer(inputStream1);
const tokenStream1 = new CommonTokenStream(lexer1);
const parser1 = new CanonParser(tokenStream1);

const errorListener1 = new CanonErrorListener('input');
parser1.removeErrorListeners();
parser1.addErrorListener(errorListener1);

try {
  parser1.program();
} catch (error) {
  // ignore
}

if (errorListener1.hasErrors()) {
  const errors = errorListener1.getErrors();
  const formatter = new ErrorFormatter(input1, 'input', {
    ...DEFAULT_FORMATTER_OPTIONS,
    showColors: false,
    contextLines: 1,
  });
  const formattedErrors = formatter.formatErrors([...errors.getSortedErrors()]);
  console.log(formattedErrors);
}

// Test syntax-error-04
const input2 = `data1(arg1, arg2      {
    datam1 = value1
}`;

console.log('=== syntax-error-04 actual output ===');
const inputStream2 = new ANTLRInputStream(input2);
const lexer2 = new CanonLexer(inputStream2);
const tokenStream2 = new CommonTokenStream(lexer2);
const parser2 = new CanonParser(tokenStream2);

const errorListener2 = new CanonErrorListener('input');
parser2.removeErrorListeners();
parser2.addErrorListener(errorListener2);

try {
  parser2.program();
} catch (error) {
  // ignore
}

if (errorListener2.hasErrors()) {
  const errors = errorListener2.getErrors();
  const formatter = new ErrorFormatter(input2, 'input', {
    ...DEFAULT_FORMATTER_OPTIONS,
    showColors: false,
    contextLines: 1,
  });
  const formattedErrors = formatter.formatErrors([...errors.getSortedErrors()]);
  console.log(formattedErrors);
}
