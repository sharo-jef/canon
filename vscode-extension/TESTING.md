# Quick Test Guide for Canon VS Code Extension

## 🚀 Installation & Testing

### Step 1: Install the Extension

```bash
# From the vscode-extension directory
code --install-extension canon-language-support-0.1.0.vsix
```

### Step 2: Test Syntax Highlighting

1. Create a new file: `test.canon`
2. Copy and paste this code:

```canon
#schema './schema.canon'

// Server configuration
server {
  port = 8080
  host = 'localhost'
  ssl = false
}

// Database settings
database {
  driver = 'postgresql'
  host = 'db.example.com'
  port = 5432
  username = 'admin'
  password = 'secret123'
}

// Features list
features = [
  'authentication',
  'logging',
  'monitoring'
]

// Range example
ports = 8000..8010

// Template string
message = `Server running on ${server.host}:${server.port}`

// Lambda expression
multiply = { x -> x * 2 }

// If expression
env = if (server.ssl) 'secure' else 'development'
```

### Step 3: Test Code Snippets

Type these prefixes and press Tab:

- `schema` → Schema declaration
- `struct` → Struct declaration
- `fun` → Function declaration
- `if` → If expression
- `@description` → Description annotation

### Step 4: Test LSP Features

#### Commands (Ctrl+Shift+P):

- `Canon: Parse File` - Should show "✅ Parsed successfully"
- `Canon: Validate File` - Should show validation results
- `Canon: Format File` - Should format the code

#### Auto-completion (Ctrl+Space):

- Type `str` → Should suggest `struct`, `string`
- Type `@` → Should suggest annotations
- Type keywords → Should show completions

#### Hover Information:

- Hover over `schema` → Should show documentation
- Hover over `struct` → Should show description

## 🔧 Debug Mode Testing

### Enable Debug Console

1. Press F12 to open Developer Tools
2. Go to Console tab
3. Look for "Canon Language Support is now active!" message

### Test with Debug Mode

1. Open a `.canon` file
2. Check Console for logs
3. Test each feature and verify console output

## ❌ Common Issues

### Extension not activating

- **Check:** File has `.canon` extension
- **Solution:** Rename file to have `.canon` extension

### No syntax highlighting

- **Check:** VS Code recognizes the language
- **Solution:** Command palette → "Change Language Mode" → Select "Canon"

### LSP features not working

- **Check:** Extension output panel
- **Solution:** View → Output → Select "Canon Language Server"

## ✅ Expected Results

### Working Features:

- ✅ Syntax highlighting for all Canon constructs
- ✅ Code snippets for common patterns
- ✅ Auto-completion for keywords and types
- ✅ Hover documentation for keywords
- ✅ Basic validation and error reporting
- ✅ Document formatting
- ✅ Command palette integration

### File Association:

- ✅ `.canon` files automatically use Canon language mode
- ✅ Icon and language indicator in status bar

---

**If all tests pass, the extension is working correctly! 🎉**
