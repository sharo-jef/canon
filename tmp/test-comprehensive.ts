import { parseCanon } from '../src/parser';
import { Interpreter } from '../src/interpreter/Interpreter';
import { StructValue } from '../src/interpreter/values/StructValue';

// Test both mixin functionality and serialization together
const testCode = `
struct MixinTest {
  mixinField: string = "from mixin"
  
  fun mixinMethod() {
    "mixin method result"
  }
  
  @serialize
  get mixinSerializedGetter() {
    "mixin serialized getter"
  }
}

struct Version {
  mixin MixinTest
  version: string = "1.0"
  
  fun versionMethod() {
    "version method result"
  }
  
  @serialize
  get versionSerializedGetter() {
    "version serialized getter"
  }
}

Version()
`;

console.log('Testing mixin functionality + serialization together...');

const ast = parseCanon(testCode, 'test.canon');
const interpreter = new Interpreter({ isSchemaFile: true, debug: false });
try {
  const result = interpreter.execute(ast);
  console.log('Result type:', result.type);
  if (result.type === 'struct') {
    const structResult = result as StructValue;
    console.log(
      'Struct fields:',
      Array.from(structResult.getFields().entries()).map(([k, v]) => [k, v.type])
    );
    console.log('Native output:', structResult.toNative());
  }
} catch (error) {
  console.error('Error:', error);
}
