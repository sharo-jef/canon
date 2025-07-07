import { parseCanon } from '../src/parser';

const input = `val incomplete = ...`;

try {
  const result = parseCanon(input);
  console.log('Unexpected success:', result);
} catch (error) {
  console.log('Error message:', error.message);
}
