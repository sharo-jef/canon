import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { CanonLexer } from '../src/generated/CanonLexer';

const input = 'x |> inc';
const chars = CharStreams.fromString(input);
const lexer = new CanonLexer(chars);
const tokens = new CommonTokenStream(lexer);

tokens.fill();
console.log('Tokens:');
for (let i = 0; i < tokens.size; i++) {
  const token = tokens.get(i);
  console.log(
    `${i}: ${token.type} (${token.text}) line:${token.line} col:${token.charPositionInLine}`
  );
}

// Check token constants
console.log('\nToken constants:');
console.log('PIPELINE:', CanonLexer.PIPELINE);
console.log('BIT_OR:', CanonLexer.BIT_OR);
console.log('GREATER_THAN:', CanonLexer.GREATER_THAN);
