const fs = require('fs');
const path = require('path');

// Read the semantic analyzer file
const filePath = path.join(__dirname, '..', 'src', 'semantic', 'SemanticAnalyzer.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Remove all debug statements
const debugPatterns = [
  /console\.log\(`\[DEBUG\][^;]*;\s*\n/g,
  /console\.log\('\[DEBUG\][^;]*;\s*\n/g,
  /console\.log\(`\[DEBUG\][^;]*\);\s*\n/g,
  /console\.log\('\[DEBUG\][^;]*\);\s*\n/g,
  /if \(process\.env\.DEBUG\) \{\s*\n\s*console\.log\([^}]*\}\s*\n/g,
  /if \(process\.env\.DEBUG\) \{\s*\n\s*console\.log\([^}]*\}\s*/g,
];

debugPatterns.forEach((pattern) => {
  content = content.replace(pattern, '');
});

// Remove empty if blocks
content = content.replace(/if \(process\.env\.DEBUG\) \{\s*\n\s*\}\s*\n/g, '');

// Write the cleaned content back
fs.writeFileSync(filePath, content);

console.log('Debug statements removed successfully');
