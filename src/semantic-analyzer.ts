#!/usr/bin/env tsx

/**
 * 意味解析を実行するメインファイル
 */

import { SemanticAnalyzer } from './semantic/SemanticAnalyzer';
import path from 'path';

async function main() {
  const args = process.argv.slice(2);
  const astFilePath = args[0] || path.join(__dirname, '..', 'ast.yaml');

  console.log(`Canon Semantic Analyzer`);
  console.log(`AST file: ${astFilePath}`);
  console.log('='.repeat(50));

  const analyzer = new SemanticAnalyzer();

  try {
    const result = await analyzer.analyzeFromFile(astFilePath);

    if (result.success) {
      console.log('✅ Semantic analysis completed successfully!');
    } else {
      console.log('❌ Semantic analysis failed with errors:');
      result.errors.forEach((error, index) => {
        console.log(`\n${index + 1}. [${error.type}] ${error.message}`);
        if (error.location) {
          console.log(`   📍 Line ${error.location.line}, Column ${error.location.column}`);
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
