import * as fs from 'fs';
import { parseCanon } from '../src/parser';

// Read the file as the test runner does
const inputPath = 'testcases/success-cases/basic-config-01/input.canon';
const input = fs.readFileSync(inputPath, 'utf-8');

console.log('File content (showing characters):');
console.log(JSON.stringify(input));

console.log('\nFile content (with newlines visible):');
console.log(input.replace(/\n/g, '\\n\n'));

console.log('\nParsing...');
const result = parseCanon(input);
console.log('\nProgram location:');
console.log(JSON.stringify(result.loc, null, 2));
