@echo off
echo Compiling Canon VSCode Extension...
npm run compile
if %ERRORLEVEL% NEQ 0 (
    echo Compilation failed!
    pause
    exit /b 1
)
echo Compilation successful!
echo Starting extension debug session...
code --extensionDevelopmentPath="%CD%"
