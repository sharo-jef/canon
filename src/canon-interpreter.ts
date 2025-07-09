#!/usr/bin/env tsx

/**
 * Canon言語インタープリターのCLIエントリーポイント
 */

import { promises as fs } from 'fs';
import { parseCanonFile } from './parser';
import { SemanticAnalyzer } from './semantic/SemanticAnalyzer';
import { Interpreter } from './interpreter/Interpreter';
import { SchemaValidator } from './interpreter/SchemaValidator';
import { CanonRuntimeError } from './interpreter/builtins/ErrorBuiltins';

interface CliOptions {
  inputFile: string;
  outputFile?: string;
  debug?: boolean;
  schemaOnly?: boolean;
  skipSemantic?: boolean;
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error('Usage: tsx interpreter.ts <input.canon> [options]');
    console.error('Options:');
    console.error('  --output <file>    Output JSON file (default: stdout)');
    console.error('  --debug           Enable debug output');
    console.error('  --schema-only     Only output schema information');
    console.error('  --skip-semantic   Skip semantic analysis (for testing)');
    process.exit(1);
  }

  const options: CliOptions = {
    inputFile: args[0],
  };

  // Parse command line options
  for (let i = 1; i < args.length; i++) {
    switch (args[i]) {
      case '--output':
        options.outputFile = args[++i];
        break;
      case '--debug':
        options.debug = true;
        break;
      case '--schema-only':
        options.schemaOnly = true;
        break;
      case '--skip-semantic':
        options.skipSemantic = true;
        break;
      default:
        console.error(`Unknown option: ${args[i]}`);
        process.exit(1);
    }
  }

  try {
    await runInterpreter(options);
  } catch (error) {
    if (error instanceof CanonRuntimeError) {
      console.error(`Runtime Error: ${error.message}`);
    } else if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
      if (options.debug) {
        console.error(error.stack);
      }
    } else {
      console.error(`Unexpected error: ${error}`);
    }
    process.exit(1);
  }
}

async function runInterpreter(options: CliOptions): Promise<void> {
  const { inputFile, outputFile, debug, schemaOnly, skipSemantic } = options;

  // ファイルの存在確認
  try {
    await fs.access(inputFile);
  } catch {
    throw new Error(`File not found: ${inputFile}`);
  }

  if (debug) {
    console.log(`[DEBUG] Processing file: ${inputFile}`);
  }

  // 1. パースしてASTを生成
  if (debug) {
    console.log('[DEBUG] Parsing...');
  }
  const ast = parseCanonFile(inputFile);

  if (debug) {
    console.log('[DEBUG] Parse successful');
  }

  let analysisResult;
  // 2. セマンティック解析
  if (!skipSemantic) {
    if (debug) {
      console.log('[DEBUG] Running semantic analysis...');
    }
    const analyzer = new SemanticAnalyzer();
    // Set the current file path for proper relative path resolution
    analyzer['currentFilePath'] = inputFile;
    await analyzer.analyze(ast);

    analysisResult = {
      success: analyzer['errors'].length === 0,
      errors: analyzer['errors'],
      symbolTable: analyzer['symbolTable'],
    };

    if (!analysisResult.success) {
      console.error('Semantic analysis errors:');
      for (const error of analysisResult.errors) {
        console.error(`  ${error.message} at line ${error.location?.line || '?'}`);
      }
      throw new Error('Semantic analysis failed');
    }

    if (debug) {
      console.log('[DEBUG] Semantic analysis successful');
    }
  } else {
    if (debug) {
      console.log('[DEBUG] Skipping semantic analysis');
    }
  }

  // 3. インタープリター実行
  if (debug) {
    console.log('[DEBUG] Running interpreter...');
  }
  const interpreter = new Interpreter({ debug, inputFilePath: inputFile });
  const result = interpreter.evaluate(ast);

  if (debug) {
    console.log('[DEBUG] Interpreter execution completed');
  }

  // 4. スキーマ検証とJSON出力
  const validator = new SchemaValidator();

  let output: any;
  if (schemaOnly) {
    output = validator.getSchemaInfo();
    if (!output) {
      throw new Error('No schema definition found');
    }
  } else {
    try {
      output = interpreter.getResultAsJSON();
    } catch (error) {
      // スキーマが定義されていない場合は結果をそのまま出力
      if (debug) {
        console.log('[DEBUG] No schema found, outputting raw result');
      }
      const validationResult = validator.validateAndConvert(result);
      output = validationResult.data;
    }
  }

  // 5. 結果出力
  const jsonOutput = JSON.stringify(output, null, 2);

  if (outputFile) {
    await fs.writeFile(outputFile, jsonOutput, 'utf8');
    if (debug) {
      console.log(`[DEBUG] Output written to: ${outputFile}`);
    }
  } else {
    console.log(jsonOutput);
  }
}

if (require.main === module) {
  main().catch((error) => {
    console.error('Unhandled error:', error);
    process.exit(1);
  });
}
