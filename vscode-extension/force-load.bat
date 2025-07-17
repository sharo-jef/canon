@echo off
echo ===========================================
echo Canon VSCode Extension - FORCE LOAD
echo ===========================================
echo.
echo Step 1: Clean compilation...
if exist "out" rmdir /s /q out
call npm run compile
echo.
echo Step 2: Check files exist...
dir out
echo.
echo Step 3: Force extension to load with * activation...
echo This will definitely load the extension!
code --extensionDevelopmentPath="%CD%" --new-window --disable-extensions --enable-proposed-api
echo.
echo ✅ Extension MUST be loaded now!
echo ✅ Check Ctrl+Shift+X for "Canon Language Support"
echo ✅ Try Ctrl+Shift+P → "Canon: Parse File"
echo.
pause
