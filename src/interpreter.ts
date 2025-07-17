#!/usr/bin/env tsx

/**
 * Canon言語インタープリターのCLIエントリーポイント
 */

import { promises as fs } from 'fs';
import { parseCanon, parseCanonWithStructuredErrors } from './parser';
import { SemanticAnalyzer } from './semantic/SemanticAnalyzer';
import { Interpreter } from './interpreter/Interpreter';
import { SchemaValidator } from './interpreter/SchemaValidator';
// import { CanonRuntimeError } from './builtins/ErrorBuiltins';

interface CliOptions {
  inputFile: string;
  outputFile?: string;
  debug?: boolean;
  schemaOnly?: boolean;
  validate?: boolean;
  jsonOutput?: boolean;
  originalFilePath?: string;
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error('Usage: tsx interpreter.ts <input.canon> [options]');
    console.error('Options:');
    console.error('  --output <file>    Output JSON file (default: stdout)');
    console.error('  --debug           Enable debug output');
    console.error('  --schema-only     Only output schema information');
    console.error('  --validate        Validate only (for VSCode extension)');
    console.error('  --original-file-path <path>  Original file path (for VSCode extension)');
    console.error('  --json-output     Output structured JSON (for tooling)');
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
      case '--validate':
        options.validate = true;
        break;
      case '--json-output':
        options.jsonOutput = true;
        break;
      case '--original-file-path':
        options.originalFilePath = args[++i];
        break;
      default:
        console.error(`Unknown option: ${args[i]}`);
        process.exit(1);
    }
  }

  try {
    await runInterpreter(options);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Runtime Error: ${error.message}`);
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
  const { inputFile, outputFile, debug, schemaOnly, validate, jsonOutput, originalFilePath } =
    options;

  // ファイルの存在確認
  try {
    await fs.access(inputFile);
  } catch {
    throw new Error(`File not found: ${inputFile}`);
  }

  if (debug) {
    console.log(`[DEBUG] Processing file: ${inputFile}`);
    if (originalFilePath) {
      console.log(`[DEBUG] Original file path: ${originalFilePath}`);
    }
  }

  // 1. パースしてASTを生成
  if (debug) {
    console.log('[DEBUG] Parsing...');
  }

  let ast;
  try {
    if (jsonOutput) {
      // VSCode拡張などのツール向けに構造化エラーを返す
      const source = await fs.readFile(inputFile, 'utf-8');
      const parseResult = parseCanonWithStructuredErrors(source, inputFile);

      if (!parseResult.success) {
        // JSON形式でエラーを出力
        const jsonError = {
          success: false,
          errors: parseResult.errors,
        };
        console.log(JSON.stringify(jsonError, null, 2));
        process.exit(1);
      }

      ast = parseResult.ast;
    } else {
      // 従来のヒューマンリーダブルなエラー出力
      const source = await fs.readFile(inputFile, 'utf-8');
      ast = parseCanon(source, inputFile);
    }
  } catch (error) {
    if (validate) {
      // VSCode extension用：エラーを標準エラー出力に出力して終了
      console.error(`Parse error: ${error instanceof Error ? error.message : String(error)}`);
      process.exit(1);
    }
    throw error;
  }

  if (debug) {
    console.log('[DEBUG] Parse successful');
  }

  // Validate modeの場合はここで終了（成功）
  if (validate) {
    console.log('Validation successful');
    process.exit(0);
  }

  // エラーハンドリング：astが未定義の場合
  if (!ast) {
    throw new Error('Failed to parse Canon file');
  }

  // 2. セマンティック解析
  if (debug) {
    console.log('[DEBUG] Running semantic analysis...');
  }
  const analyzer = new SemanticAnalyzer();

  // Use analyzeFromTempFile if original file path is provided (for VSCode extension)
  // Otherwise use the regular analyzeFromFile method
  let analysisResult;
  if (originalFilePath) {
    analysisResult = await analyzer.analyzeFromTempFile(inputFile, originalFilePath);
  } else {
    analysisResult = await analyzer.analyzeFromFile(inputFile);
  }

  if (!analysisResult.success) {
    if (jsonOutput) {
      // JSON形式でセマンティックエラーを出力
      const jsonError = {
        success: false,
        errors: analysisResult.errors.map((error) => ({
          code: 'E9999', // セマンティックエラー用のコード
          message: error.message,
          filename: inputFile,
          location: error.location || { line: 1, column: 1 },
        })),
      };
      console.log(JSON.stringify(jsonError, null, 2));
      process.exit(1);
    } else {
      // 従来のヒューマンリーダブルなエラー出力
      console.error('Semantic analysis errors:');
      for (const error of analysisResult.errors) {
        console.error(`  ${error.message} at line ${error.location?.line || '?'}`);
      }
      throw new Error('Semantic analysis failed');
    }
  }

  if (debug) {
    console.log('[DEBUG] Semantic analysis successful');
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
    } catch {
      // スキーマが定義されていない場合は結果をそのまま出力
      if (debug) {
        console.log('[DEBUG] No schema found, outputting raw result');
      }
      const validationResult = validator.validateAndConvert(result);
      output = validationResult.data;
    }
  }

  // 5. 結果出力
  const jsonResult = JSON.stringify(output, null, 2);

  if (outputFile) {
    await fs.writeFile(outputFile, jsonResult, 'utf8');
    if (debug) {
      console.log(`[DEBUG] Output written to: ${outputFile}`);
    }
  } else {
    console.log(jsonResult);
  }
}

if (require.main === module) {
  main().catch((error) => {
    console.error('Unhandled error:', error);
    process.exit(1);
  });
}
