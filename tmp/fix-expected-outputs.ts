import { parseCanon } from '../src/parser';
import * as yaml from 'js-yaml';
import * as fs from 'fs';

// Test basic-config-01 - read from actual file
console.log('=== Testing basic-config-01 ===');
try {
  const input1 = fs.readFileSync('testcases/success-cases/basic-config-01/input.canon', 'utf-8');
  const result1 = parseCanon(input1);
  const yamlOutput1 = yaml.dump(result1, { indent: 2, noRefs: true });
  console.log('Writing to output.yml...');
  fs.writeFileSync('testcases/success-cases/basic-config-01/output.yml', yamlOutput1.trim());
  console.log('Updated basic-config-01/output.yml');
} catch (error) {
  console.error('Error with basic-config-01:', error);
}

// Test string-interpolation-02 - read from actual file
console.log('\n=== Testing string-interpolation-02 ===');
try {
  const input2 = fs.readFileSync(
    'testcases/success-cases/string-interpolation-02/input.canon',
    'utf-8'
  );
  const result2 = parseCanon(input2);
  const yamlOutput2 = yaml.dump(result2, { indent: 2, noRefs: true });
  console.log('Writing to output.yml...');
  fs.writeFileSync(
    'testcases/success-cases/string-interpolation-02/output.yml',
    yamlOutput2.trim()
  );
  console.log('Updated string-interpolation-02/output.yml');
} catch (error) {
  console.error('Error with string-interpolation-02:', error);
}
