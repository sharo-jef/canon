import * as fs from 'fs';
import * as path from 'path';
import { parseCanon } from '../src/parser';

function runAllTests() {
  const testCasesDir = path.join(__dirname, '..', 'testcases');
  const successDir = path.join(testCasesDir, 'success-cases');

  if (!fs.existsSync(successDir)) {
    console.log('No success-cases directory found');
    return;
  }

  const testDirs = fs
    .readdirSync(successDir)
    .filter((name) => fs.statSync(path.join(successDir, name)).isDirectory());

  let passed = 0;
  let failed = 0;

  for (const testDir of testDirs) {
    const testPath = path.join(successDir, testDir);
    const inputFile = path.join(testPath, 'input.canon');

    if (!fs.existsSync(inputFile)) {
      console.log(`⚠️  Skipping ${testDir}: no input.canon found`);
      continue;
    }

    try {
      const source = fs.readFileSync(inputFile, 'utf-8');
      const ast = parseCanon(source, inputFile);

      console.log(`✅ ${testDir}: Parsed successfully`);
      passed++;
    } catch (error) {
      console.log(`❌ ${testDir}: Parse failed - ${error}`);
      failed++;
    }
  }

  console.log(`\n🧪 Test Summary: ${passed} passed, ${failed} failed`);
}

if (require.main === module) {
  runAllTests();
}
