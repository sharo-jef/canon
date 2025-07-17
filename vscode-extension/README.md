# Canon Language Support for Visual Studio Code

This extension provides comprehensive language support for the Canon configuration language, including syntax highlighting, code snippets, and Language Server Protocol (LSP) features.

## Features

### 🎨 Syntax Highlighting

- Complete syntax highlighting for Canon language constructs
- Support for keywords, operators, strings, numbers, and comments
- Template string interpolation highlighting
- Annotation highlighting

### 📝 Code Snippets

- Over 25 built-in snippets for common Canon constructs
- Schema and struct declarations
- Function and property definitions
- Control flow statements
- Built-in types and annotations

### 🧠 Language Server Features

- **Real-time validation**: Automatic error detection and reporting
- **Hover information**: Get documentation for keywords and identifiers
- **Auto-completion**: Intelligent code completion for keywords, types, and annotations
- **Document formatting**: Basic code formatting support

### 🛠️ Commands

- `Canon: Parse File` - Parse the current Canon file and show AST
- `Canon: Validate File` - Validate the current Canon file
- `Canon: Format File` - Format the current Canon file

## Getting Started

1. Install the extension
2. Open a `.canon` file
3. Start coding with full language support!

## Configuration

The extension can be configured through VS Code settings:

- `canon.enableValidation`: Enable real-time validation (default: true)
- `canon.enableHover`: Enable hover information (default: true)
- `canon.enableCompletion`: Enable auto-completion (default: true)
- `canon.canonInterpreterPath`: Path to the Canon interpreter executable

## Canon Language Overview

Canon is a configuration language designed for structured data with schema validation. Key features include:

### Schema Definition

```canon
schema {
  server
  database
}

struct server {
  port: int = 8080
  host: string = 'localhost'
  ssl: bool = false
}
```

### Configuration Files

```canon
#schema './schema.canon'

server {
  port = 9000
  host = 'production.example.com'
  ssl = true
}
```

### Advanced Features

- Template strings with interpolation: `` `Welcome to ${server.host}!` ``
- Range expressions: `1..10`, `1..=10`
- Pipeline operators: `value |> function`
- Lambda expressions: `{ x -> x * 2 }`
- Annotations: `@description 'Server configuration'`

## File Association

This extension automatically activates for files with the `.canon` extension.

## Requirements

- Visual Studio Code 1.74.0 or higher
- Node.js (for running the Canon interpreter)

## Known Issues

- Advanced type checking is still in development
- Some complex syntax highlighting edge cases may not be perfect

## Contributing

This extension is part of the Canon language project. For issues and contributions, please visit:
[https://github.com/sharo-jef/canon](https://github.com/sharo-jef/canon)

## Release Notes

### 0.1.0

Initial release with:

- Basic syntax highlighting
- Code snippets
- LSP features (validation, hover, completion)
- Document formatting
- Command palette integration

---

**Enjoy coding with Canon!** 🚀
