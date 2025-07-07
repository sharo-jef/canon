import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { CanonLexer } from '../src/generated/CanonLexer';
import { CanonParser } from '../src/generated/CanonParser';
import { CanonErrorListener, ErrorFormatter, DEFAULT_FORMATTER_OPTIONS } from '../src/error';
import * as fs from 'fs';

const input = fs.readFileSync('./tmp/test-compound-assignment.canon', 'utf-8');
const inputStream = CharStreams.fromString(input);
const lexer = new CanonLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new CanonParser(tokenStream);

const errorListener = new CanonErrorListener('./tmp/test-compound-assignment.canon');
parser.removeErrorListeners();
parser.addErrorListener(errorListener);

try {
  parser.program();
  if (errorListener.hasErrors()) {
    const errors = errorListener.getErrors();
    const formatter = new ErrorFormatter(input, './tmp/test-compound-assignment.canon', {
      ...DEFAULT_FORMATTER_OPTIONS,
      showColors: false,
      contextLines: 2,
    });
    const formattedErrors = formatter.formatErrors([...errors.getSortedErrors()]);
    console.log(formattedErrors);
  } else {
    console.log('✅ All compound assignment operators parsed successfully!');
  }
} catch (error) {
  console.error('Parse error:', error);
}
