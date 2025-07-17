@echo off
echo ===========================================
echo Canon VSCode Extension - Quick Launch
echo ===========================================
echo.
echo Step 1: Compiling TypeScript...
call npm run compile
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Compilation failed!
    pause
    exit /b 1
)
echo ✅ Compilation successful!
echo.
echo Step 2: Starting Extension Development Host...
echo Opening VS Code with extension loaded...
echo.
start code --extensionDevelopmentPath="%CD%" --new-window
echo.
echo ✅ Extension Development Host should now be running!
echo ✅ Create a .canon file to test the extension
echo.
pause
