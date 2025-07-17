@echo off
echo ===========================================
echo Canon VSCode Extension - Detailed Debug
echo ===========================================
echo.
echo Step 1: Cleaning output directory...
if exist "out" rmdir /s /q out
echo.
echo Step 2: Fresh compilation...
call npm run compile
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Compilation failed!
    pause
    exit /b 1
)
echo ✅ Compilation successful!
echo.
echo Step 3: Checking compiled files...
if exist "out\extension.js" (
    echo ✅ extension.js found
) else (
    echo ❌ extension.js missing!
    pause
    exit /b 1
)
if exist "out\canonLanguageServer.js" (
    echo ✅ canonLanguageServer.js found
) else (
    echo ❌ canonLanguageServer.js missing!
    pause
    exit /b 1
)
echo.
echo Step 4: Starting Extension with verbose logging...
echo Opening VS Code with extension loaded and debug console...
start code --extensionDevelopmentPath="%CD%" --verbose --log trace --new-window
echo.
echo ✅ Extension should now be loading with detailed logs!
echo ✅ Press F12 in the new window to see debug output
echo.
pause
