import { parseCanon } from '../src/parser';
import fs from 'fs';

try {
  const input = fs.readFileSync('./testcases/success-cases/list-literal-01/input.canon', 'utf8');
  console.log('Input:', JSON.stringify(input));
  const result = parseCanon(input);
  console.log('Result type:', result.type);
  console.log('Result:');
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.log('Error:', error.message);
}
