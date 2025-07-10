import { readFile } from 'fs/promises';
import { Parser } from '../src/parser';
import { Interpreter } from '../src/interpreter/Interpreter';

async function testVersionConstructor() {
  console.log('=== Testing Version Constructor ===');

  const schemaContent = await readFile('definition/schema.canon', 'utf-8');
  const configContent = await readFile('definition/config.canon', 'utf-8');

  const parser = new Parser();
  const interpreter = new Interpreter({ debug: true });

  // Parse schema
  const schemaAst = parser.parse(schemaContent);
  console.log('Schema parsed successfully');

  // Parse config
  const configAst = parser.parse(configContent);
  console.log('Config parsed successfully');

  // Interpret schema
  console.log('\n=== Interpreting Schema ===');
  const schemaResult = interpreter.interpret(schemaAst, './definition/schema.canon');
  console.log('Schema interpretation result:', schemaResult);

  // Interpret config
  console.log('\n=== Interpreting Config ===');
  const configResult = interpreter.interpret(configAst, './definition/config.canon');
  console.log('Config interpretation result:', configResult);

  // Get final results
  const finalResult = interpreter.getResult();
  console.log('\n=== Final Result ===');
  console.log(JSON.stringify(finalResult, null, 2));
}

testVersionConstructor().catch(console.error);
