# Canon Configuration Language

The definitive canon for your application's configuration, written as declarative, schema-validated code.

## Features

- **Declarative Configuration**: Write configuration as code with a clear, readable syntax
- **Schema Validation**: Validate configuration against predefined schemas
- **AST Generation**: Generate Abstract Syntax Trees for analysis and tooling
- **Rust-like Error Messages**: Clear, helpful error messages with source code highlighting

## Error Handling

Canon provides Rust-inspired error messages with:

- **Error Codes**: Structured error codes (E0001, E0002, etc.) for easy reference
- **Source Code Highlighting**: Visual indication of error locations with carets (^)
- **Contextual Help**: Detailed explanations and suggestions for fixing errors
- **Multi-line Context**: Shows surrounding code for better understanding

### Example Error Message

```
error[E0001]: expected expression after '='
 --> config.canon:5:19
  |
4 |     database = {
5 |         host = // missing value
  |                ^ expected an expression here
6 |     }
  |
  = note: assignment expressions require a value on the right side
  = help: try providing a value like: host = "localhost"
```

## Usage

### Basic Parsing

```bash
# Parse a configuration file
npm run parse:ast

# Test error handling
npm run test:error-handling
```

### Error Codes Reference

- **E0001-E0099**: Syntax Errors
  - E0001: Missing expression
  - E0002: Missing closing parenthesis
  - E0003: Missing closing brace
  - E0005: Unexpected token

- **E0100-E0199**: Type Errors
- **E0200-E0299**: Schema Errors
- **E0300-E0399**: Configuration Errors

## Development

### Code Quality Tools

This project uses modern development tools to maintain code quality:

- **ESLint**: TypeScript linting with custom rules for Canon development
- **Prettier**: Automatic code formatting with consistent style
- **TypeScript**: Static type checking with strict configuration
- **Jest**: Unit testing framework with coverage reporting

### Development Scripts

- `npm run lint`: Run ESLint to check code quality
- `npm run lint:fix`: Auto-fix ESLint issues where possible
- `npm run format`: Format code with Prettier
- `npm run format:check`: Check if code is properly formatted
- `npm run typecheck`: Run TypeScript compiler for type checking
- `npm run ci`: Run all checks (type check, lint, format, tests)

### Testing

The project includes a comprehensive test suite in the `testcases/` directory:

```
testcases/
├── error-cases/          # Test cases that should produce errors
│   ├── syntax-error-01/  # Missing expression tests
│   ├── syntax-error-02/  # Missing parenthesis tests
│   └── syntax-error-03/  # Other syntax errors
└── success-cases/        # Test cases that should parse successfully
    └── basic-config-01/  # Basic configuration test
```

Each test case includes:

- `input`: The canon source code to test
- `error` or `output`: Expected error message or AST output
- `description`: Brief description of what the test covers

### Scripts

- `npm run generate`: Generate ANTLR4 parser from grammar files
- `npm run parse:ast`: Parse example files and generate AST
- `npm run test:error-handling`: Run error handling test suite
- `npm start`: Full build and parse pipeline

## Grammar

Canon uses ANTLR4 for parsing. Grammar files are located in `definition/`:

- `CanonLexer.g4`: Lexical rules (tokens)
- `CanonParser.g4`: Parsing rules (syntax)

Generated parser files are in `src/generated/`.
