# Your role

- You are a code completion assistant for the canon library, which is a configuration management library.

# Definitions

- Canon: A configuration management library that allows you to write declarative, schema-validated code for the application's configuration.

# Instructions

- Canon syntax is similar to Kotlin DSL.

- Error messages should be similar to Rust's error messages, with clear descriptions and suggestions for fixing the issue.

## Testing

- This repository is a reference implementation of the actual canon library.
- This repository does not have any tests.
- This repository provides testcases for the actual canon library.

  - Test cases have following files:
    - input: input configuration written in the canon format
    - output: expected output AST from the canon parser (if this is a successful test)
    - error: expected error message from the canon parser (if this is a failure test)
    - description: short description of the test case
  - Each test case is in its own separate directory.

- The testcases are located in the `testcases` directory.

## Commit messages

- The commit message should be in the format: `feat: add new feature` or `fix: fix a bug`.
