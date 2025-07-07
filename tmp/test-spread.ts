import { parseCanon } from '../src/parser';

const input = `val arr = [1, 2, 3]
val spread = ...arr`;

console.log('Input:');
console.log(input);
console.log('\nParsing...');

try {
  const result = parseCanon(input);
  console.log('Result:');
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error('Error:', error);
}
