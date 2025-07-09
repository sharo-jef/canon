#!/usr/bin/env tsx

/**
 * 意味解析を実行するメインファイル
 */

import * as path from 'path';
import { SemanticAnalyzer } from './semantic/SemanticAnalyzer';

async function main() {
  const args = process.argv.slice(2);
  const sourceFilePath = args[0] || 'definition/schema.canon';

  // Convert relative path to absolute path
  const absoluteSourceFilePath = path.resolve(sourceFilePath);

  console.log(`Canon Semantic Analyzer`);
  console.log(`Source file: ${sourceFilePath}`);
  console.log('='.repeat(50));

  const analyzer = new SemanticAnalyzer();

  try {
    const result = await analyzer.analyzeFromFile(absoluteSourceFilePath);

    if (result.success) {
      console.log('✅ Semantic analysis completed successfully!');
    } else {
      console.log('❌ Semantic analysis failed with errors:');
      result.errors.forEach((error, index) => {
        console.log(`\n${index + 1}. [${error.type}] ${error.message}`);
        if (error.location) {
          const fileInfo = error.filePath ? `${path.basename(error.filePath)}:` : '';
          console.log(
            `   📍 ${fileInfo}Line ${error.location.line}, Column ${error.location.column}`
          );
        }
      });
    }

    // デバッグ情報を表示
    if (process.env.DEBUG === 'true' || args.includes('--debug')) {
      console.log('\n' + '='.repeat(50));
      analyzer.printResults();
    }

    // 成功時は0、失敗時は1でプロセスを終了
    process.exit(result.success ? 0 : 1);
  } catch (error) {
    console.error('💥 Fatal error during semantic analysis:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main().catch((error) => {
    console.error('Unhandled error:', error);
    process.exit(1);
  });
}
