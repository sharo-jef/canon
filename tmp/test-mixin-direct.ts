import { parseCanon } from '../src/parser';
import { Interpreter } from '../src/interpreter/Interpreter';
import { StructValue } from '../src/interpreter/values/StructValue';

// Test mixin functionality
const testCode = `
struct MixinTest {
  mixinField: string = "from mixin"
}

struct Version {
  mixin MixinTest
  version: string = "1.0"
}

Version()
`;

console.log('Testing mixin functionality...');

// Parse the code
const ast = parseCanon(testCode, 'test.canon');

// Create interpreter with schema file option to bypass schema directive check
const interpreter = new Interpreter({ isSchemaFile: true, debug: false });
try {
  const result = interpreter.execute(ast);
  console.log('Result type:', result.type);
  if (result.type === 'struct') {
    const structResult = result as StructValue;
    console.log('Struct fields:', Array.from(structResult.getFields().entries()));
    console.log('Native output:', structResult.toNative());
  }
} catch (error) {
  console.error('Error:', error);
}
