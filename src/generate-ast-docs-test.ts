import * as fs from 'fs';
import * as path from 'path';

function main() {
    try {
        console.log('🚀 Starting AST documentation generation...');
        
        const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🌳 Canon AST Documentation</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
            🌳 Canon AST Documentation (Test)
        </h1>
        <p class="text-gray-600">This is a test of Tailwind CSS styling.</p>
    </div>
</body>
</html>`;

        // Ensure docs directory exists
        const docsDir = path.join(process.cwd(), 'docs');
        if (!fs.existsSync(docsDir)) {
            fs.mkdirSync(docsDir, { recursive: true });
        }

        // Write HTML file
        const outputPath = path.join(docsDir, 'index.html');
        fs.writeFileSync(outputPath, html, 'utf8');

        console.log('✅ AST documentation generated successfully!');
        console.log(`📁 Output: ${outputPath}`);
        
    } catch (error) {
        console.error('❌ Error generating AST documentation:', error);
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}
