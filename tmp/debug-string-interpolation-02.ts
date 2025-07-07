import { parseCanon } from '../src/parser';
import * as yaml from 'js-yaml';

const input = `val x = 10
val y = 5
val result = "The sum of 10 and 5 is 15."
val complex = "Result: 25 (calculated from 10 * 2 + 5)"`;

console.log('Input:');
console.log(input);
console.log('\nParsing...');

try {
  const result = parseCanon(input);
  console.log('Result as YAML:');
  console.log(yaml.dump(result, { indent: 2, noRefs: true }));
} catch (error) {
  console.error('Error:', error);
}
