import { parseCanon } from '../src/parser';

const input = `#schema "./schema.canon"

data1 {
    datam1 = "value1"
    datam2 = "value2"
}`;

console.log('Input lines:');
input.split('\n').forEach((line, i) => {
  console.log(`${i + 1}: "${line}" (length: ${line.length})`);
});

console.log('\nParsing...');
const result = parseCanon(input);
console.log('\nProgram location:');
console.log(JSON.stringify(result.loc, null, 2));

// Check what the test framework sees
const actualYaml = require('js-yaml').dump(result, { indent: 2, noRefs: true });
console.log('\nActual YAML (last 10 lines):');
console.log(actualYaml.split('\n').slice(-10).join('\n'));
