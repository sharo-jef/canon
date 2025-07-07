import { parseCanon } from '../src/parser';

const input = `val x = 5
val result = x |> inc`;

console.log('Input:');
console.log(input);
console.log('\nParsing...');

try {
  const result = parseCanon(input);
  console.log('Result:');
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error('Error:', error.message || error);
}
