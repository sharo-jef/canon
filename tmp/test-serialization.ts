import { parseCanon } from '../src/parser';
import { Interpreter } from '../src/interpreter/Interpreter';
import { StructValue } from '../src/interpreter/values/StructValue';

// Test method serialization functionality
const testCode = `
struct TestStruct {
  field: string = "test"
  
  get getter() {
    "getter value"
  }
  
  fun method() {
    "method value"
  }
  
  @serialize
  get serializedGetter() {
    "serialized getter value"
  }
}

TestStruct()
`;

console.log('Testing method/getter serialization...');

const ast = parseCanon(testCode, 'test.canon');
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
