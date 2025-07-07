import { parseCanon } from '../src/parser';

const input = `#schema "./schema.canon"

data1 {
    datam1 = "value1"
    datam2 = "value2"
}`;

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
