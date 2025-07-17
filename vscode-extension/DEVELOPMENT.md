# Canon VSCode Extension - Development & Debugging Guide

## 🚀 Quick Start

### Prerequisites

- Node.js (16.x or higher)
- Visual Studio Code
- Git

### Setup

```bash
cd vscode-extension
npm install
npm run compile
```

## 🐛 Debugging the Extension

### Method 1: F5 Debug Launch (Recommended)

**Step-by-Step Debugging:**

1. **Open the extension project in VS Code**

   ```bash
   cd vscode-extension
   code .
   ```

2. **Verify compilation works**

   ```bash
   npm run compile
   ```

   ✅ Should complete without errors

3. **Check output directory**
   - Verify `out/extension.js` exists
   - Verify `out/canonLanguageServer.js` exists

4. **Press F5** or go to `Run and Debug` (Ctrl+Shift+D)
   - Select "Run Extension" configuration
   - If you get "Could not find the task" error, try "Run Extension (No PreTask)"
   - This will open a new VS Code window labeled `[Extension Development Host]`

5. **Test your extension** in the development host window:
   - Create or open a `.canon` file
   - The extension will be automatically loaded and active

**Troubleshooting F5 Issues:**

- If F5 fails, manually run: `Ctrl+Shift+P` → "Tasks: Run Task" → "npm: compile"
- Then try F5 again
- Or use "Run Extension (No PreTask)" configuration

### Method 2: Manual Debug Setup

1. **Build the extension**

   ```bash
   npm run compile
   ```

2. **Launch VS Code with extension development path**
   ```bash
   code --extensionDevelopmentPath=./
   ```

### Method 3: VSIX Package Testing

1. **Package the extension**

   ```bash
   npm run package  # Creates optimized bundle
   npx vsce package # Creates .vsix file
   ```

2. **Install locally**
   ```bash
   code --install-extension canon-language-support-0.1.0.vsix
   ```

## 📝 Testing Features

### Test Files

Use the provided test files:

- `test-files/config.canon`
- `test-files/schema.canon`

### Feature Testing Checklist

#### ✅ Syntax Highlighting

- [ ] Keywords are highlighted (schema, struct, union, etc.)
- [ ] Types are highlighted (string, int, bool, etc.)
- [ ] Operators are highlighted (+, -, \*, ==, etc.)
- [ ] Comments are styled correctly (// and /\* \*/)
- [ ] String literals and template strings
- [ ] Numbers and boolean values

#### ✅ Code Snippets

Test snippets by typing:

- `schema` → schema declaration
- `struct` → struct declaration
- `fun` → function declaration
- `if` → if expression
- `@description` → description annotation

#### ✅ LSP Features

**Commands (Ctrl+Shift+P):**

- [ ] `Canon: Parse File`
- [ ] `Canon: Validate File`
- [ ] `Canon: Format File`

**Auto-completion (Ctrl+Space):**

- [ ] Keywords completion
- [ ] Type completion
- [ ] Annotation completion (after @)

**Hover Information:**

- [ ] Hover over keywords shows documentation
- [ ] Hover over identifiers shows type info

**Validation:**

- [ ] Real-time error detection
- [ ] Problems panel shows Canon errors

## 🔧 Development Workflow

### File Structure

```
vscode-extension/
├── .vscode/                 # Debug configuration
│   ├── launch.json         # F5 debug setup
│   ├── tasks.json          # Build tasks
│   └── settings.json       # Development settings
├── src/
│   ├── extension.ts        # Main extension entry point
│   └── canonLanguageServer.ts # LSP implementation
├── syntaxes/               # Syntax highlighting
├── snippets/               # Code snippets
├── language-configuration/ # Language settings
└── test-files/            # Sample Canon files
```

### Development Commands

```bash
# Compile TypeScript
npm run compile

# Watch mode (auto-compile on changes)
npm run watch

# Lint code
npm run lint

# Package for distribution
npm run package

# Create VSIX package
npx vsce package
```

### Hot Reload Development

1. **Start watch mode**

   ```bash
   npm run watch
   ```

2. **Launch debug session** (F5)

3. **Make changes** to TypeScript files

4. **Reload extension** in development host:
   - Press `Ctrl+Shift+P`
   - Type "Developer: Reload Window"

## 🚨 Common Issues & Solutions

### Issue: "Could not find the task" when pressing F5

**Symptoms:** F5 shows "Could not find the task 'npm: compile'"
**Solutions:**

1. **Ensure you're in the correct directory**

   ```bash
   # Make sure you're in the vscode-extension directory
   cd vscode-extension
   code .
   ```

2. **Verify tasks.json and launch.json are correctly configured**
   - Check that `.vscode/tasks.json` exists
   - Check that tasks have proper `label` fields
   - Try using "Run Extension (No PreTask)" configuration

3. **Manual compilation before F5**

   ```bash
   npm run compile
   # Then press F5
   ```

4. **Alternative: Use Ctrl+Shift+P**
   - Press `Ctrl+Shift+P`
   - Type "Tasks: Run Task"
   - Select "npm: compile"
   - Then press F5

### Issue: Extension not activating

**Symptoms:** No syntax highlighting, commands not available
**Solutions:**

- Check that file has `.canon` extension
- Verify extension is installed: `Extensions: Show Installed Extensions`
- Check developer console (F12) for errors

### Issue: LSP features not working

**Symptoms:** No auto-completion, validation, hover
**Solutions:**

- Verify Canon interpreter path in settings
- Check Output panel → Canon Language Server
- Enable debug mode: set `canon.debug: true` in settings

### Issue: Syntax highlighting incorrect

**Symptoms:** Wrong colors, missing highlights
**Solutions:**

- Check TextMate grammar: `Developer: Inspect Editor Tokens and Scopes`
- Verify file association in settings.json
- Reload window after changes

### Issue: Compilation errors

**Symptoms:** TypeScript errors during build
**Solutions:**

```bash
# Clear out directory
rm -rf out/

# Reinstall dependencies
rm -rf node_modules/
npm install

# Compile fresh
npm run compile
```

### Issue: "tsx command not found" or "node command not found" errors

**Symptoms:**

- Error message: `'tsx' は、内部コマンドまたは外部コマンド、実行可能なプログラムまたはバッチ ファイルとして認識されていません`
- Error message: `'node' は、内部コマンドまたは外部コマンド、実行可能なプログラムまたはバッチ ファイルとして認識されていません`
- Canon interpreter validation fails with command not found

**Root Cause:** VSCode extension environment doesn't have proper access to system commands

**✅ SOLUTION: Extension now uses mock validation by default**

The extension now defaults to **mock validation** which works reliably in all environments.

**Current Behavior:**

- ✅ **Mock validation is enabled by default** - Works immediately without setup
- ✅ **Real-time syntax checking** - Detects brackets, quotes, basic syntax errors
- ✅ **No external dependencies** - Runs entirely within VSCode

**To enable advanced validation (optional):**

1. **Install tsx globally** (if you want real interpreter validation):

   ```bash
   npm install -g tsx
   ```

2. **Enable real interpreter** in settings:
   ```json
   {
     "canon.useRealInterpreter": true
   }
   ```

**Verification:**

- Open any `.canon` file
- Should see syntax highlighting immediately
- Should see basic error detection in Problems panel
- No command-related errors

## 📊 Debug Information

### VS Code Developer Tools

- **Open:** Help → Toggle Developer Tools (F12)
- **Console:** View extension logs and errors
- **Sources:** Debug TypeScript with source maps

### Extension Logs

- **Output Panel:** View → Output → Canon Language Server
- **Console Logs:** Check developer console for `console.log()` output

### Performance Monitoring

```typescript
// Add timing logs in your code
console.time('validation');
// ... your code ...
console.timeEnd('validation');
```

## 🔧 Advanced Debugging

### Debugging LSP Communication

```typescript
// In canonLanguageServer.ts
console.log('LSP Request:', document.uri.toString());
console.log('LSP Response:', result);
```

### Debugging Syntax Highlighting

1. **Command Palette:** `Developer: Inspect Editor Tokens and Scopes`
2. **Click on text** to see applied scopes
3. **Verify TextMate grammar** rules

### Debugging Package Issues

```bash
# Verify package contents
unzip -l canon-language-support-0.1.0.vsix

# Test installation
code --install-extension canon-language-support-0.1.0.vsix --force
```

## 📚 Additional Resources

### VS Code Extension Development

- [VS Code Extension API](https://code.visualstudio.com/api)
- [Language Server Protocol](https://microsoft.github.io/language-server-protocol/)
- [TextMate Grammar Guide](https://macromates.com/manual/en/language_grammars)

### Canon Language

- [Canon Language Specification](../definition/README.md)
- [ANTLR Grammar Files](../definition/)
- [Test Cases](../testcases/)

---

**Happy debugging! 🎯**
