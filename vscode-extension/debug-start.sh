#!/bin/bash

# Canon VSCode Extension Debug Startup Script

echo "🚀 Starting Canon VSCode Extension Development..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Make sure you're in the vscode-extension directory."
    exit 1
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Compile TypeScript
echo "🔨 Compiling TypeScript..."
npm run compile

if [ $? -eq 0 ]; then
    echo "✅ Compilation successful!"
    echo "📋 Next steps:"
    echo "  1. Press F5 in VS Code to launch Extension Development Host"
    echo "  2. Or use Ctrl+Shift+P → 'Tasks: Run Task' → 'npm: compile' then F5"
    echo "  3. Or try the 'Run Extension (No PreTask)' configuration"
    echo ""
    echo "🎯 Happy debugging!"
else
    echo "❌ Compilation failed. Please check the errors above."
    exit 1
fi
