import path from 'path';
import process from 'process';
import { parseCanonFileToYamlFile } from '../src/parser.ts';

// Temporary script to generate AST from definition/config.canon
async function generateAST() {
  try {
    const inputFile = path.join(process.cwd(), 'definition', 'config.canon');
    const outputFile = path.join(process.cwd(), 'ast.yaml');

    console.log('Generating AST from:', inputFile);
    console.log('Output to:', outputFile);

    await parseCanonFileToYamlFile(inputFile, outputFile);

    console.log('✅ AST generated successfully!');
  } catch (error) {
    console.error('❌ Error generating AST:', error);
    process.exit(1);
  }
}

generateAST();
