@echo off
setlocal

echo 🚀 Starting Canon VSCode Extension Development...

REM Check if we're in the right directory
if not exist "package.json" (
    echo ❌ Error: package.json not found. Make sure you're in the vscode-extension directory.
    exit /b 1
)

REM Install dependencies if needed
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
)

REM Compile TypeScript
echo 🔨 Compiling TypeScript...
npm run compile

if %ERRORLEVEL% EQU 0 (
    echo ✅ Compilation successful!
    echo 📋 Next steps:
    echo   1. Press F5 in VS Code to launch Extension Development Host
    echo   2. Or use Ctrl+Shift+P → 'Tasks: Run Task' → 'npm: compile' then F5
    echo   3. Or try the 'Run Extension ^(No PreTask^)' configuration
    echo.
    echo 🎯 Happy debugging!
) else (
    echo ❌ Compilation failed. Please check the errors above.
    exit /b 1
)
