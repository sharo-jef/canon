import { execSync } from 'child_process';
import { readdirSync, existsSync } from 'fs';
import { join } from 'path';

const testCasesDir = 'testcases/error-cases';
const testDirs = readdirSync(testCasesDir, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

console.log('Testing all error cases...\n');

let passed = 0;
let failed = 0;

for (const testDir of testDirs) {
  const inputFile = join(testCasesDir, testDir, 'input.canon');

  if (!existsSync(inputFile)) {
    console.log(`❌ ${testDir}: input.canon not found`);
    failed++;
    continue;
  }

  try {
    execSync(`npx tsx src/parser.ts "${inputFile}"`, {
      stdio: 'pipe',
      cwd: process.cwd(),
    });
    console.log(`❌ ${testDir}: Expected error but parsing succeeded`);
    failed++;
  } catch (error) {
    console.log(`✅ ${testDir}: Correctly failed with error`);
    passed++;
  }
}

console.log(`\nResults: ${passed} error cases correctly failed, ${failed} unexpected results`);
