/**
 * Canon error codes following Rust's error code style (E0001, E0002, etc.)
 */
export enum ErrorCode {
  // Syntax Errors (E0001-E0099)
  E0001 = 'E0001', // Missing expression
  E0002 = 'E0002', // Missing closing parenthesis
  E0003 = 'E0003', // Missing closing brace
  E0004 = 'E0004', // Missing closing bracket
  E0005 = 'E0005', // Unexpected token
  E0006 = 'E0006', // Incomplete configuration call
  E0007 = 'E0007', // Invalid identifier
  E0008 = 'E0008', // Invalid literal
  E0009 = 'E0009', // Invalid operator
  E0010 = 'E0010', // Missing semicolon
  E0011 = 'E0011', // Invalid assignment target
  E0012 = 'E0012', // Missing block after call expression
  E0013 = 'E0013', // Invalid token sequence
  E0014 = 'E0014', // Unexpected end of file
  E0015 = 'E0015', // Unterminated template string
  E0016 = 'E0016', // Invalid semicolon usage

  // Type Errors (E0100-E0199)
  E0100 = 'E0100', // Type mismatch
  E0101 = 'E0101', // Undefined variable
  E0102 = 'E0102', // Undefined function
  E0103 = 'E0103', // Invalid argument count
  E0104 = 'E0104', // Invalid argument type
  E0105 = 'E0105', // Invalid return type
  E0106 = 'E0106', // Missing required property
  E0107 = 'E0107', // Property does not exist
  E0108 = 'E0108', // Cannot assign to immutable variable

  // Schema Errors (E0200-E0299)
  E0200 = 'E0200', // Schema not found
  E0201 = 'E0201', // Invalid schema format
  E0202 = 'E0202', // Schema validation failed
  E0203 = 'E0203', // Missing schema directive
  E0204 = 'E0204', // Circular schema dependency

  // Configuration Errors (E0300-E0399)
  E0300 = 'E0300', // Invalid configuration structure
  E0301 = 'E0301', // Missing required configuration
  E0302 = 'E0302', // Invalid configuration value
  E0303 = 'E0303', // Configuration constraint violation
}

/**
 * Maps error codes to detailed help messages with suggestions
 */
export const ERROR_HELP_MESSAGES: Record<ErrorCode, string> = {
  [ErrorCode.E0001]: 'assignment expressions require a value on the right side',
  [ErrorCode.E0002]: 'every opening parenthesis must have a matching closing parenthesis',
  [ErrorCode.E0003]: 'every opening brace must have a matching closing brace',
  [ErrorCode.E0004]: 'every opening bracket must have a matching closing bracket',
  [ErrorCode.E0005]: 'found unexpected token',
  [ErrorCode.E0006]: 'configuration calls need to be complete',
  [ErrorCode.E0007]: 'identifiers must start with a letter or underscore',
  [ErrorCode.E0008]: 'literal values must be properly formatted',
  [ErrorCode.E0009]: 'operator is not valid in this context',
  [ErrorCode.E0010]: 'semicolons are only used to separate multiple statements on the same line',
  [ErrorCode.E0011]: 'only variables and properties can be assigned to',
  [ErrorCode.E0012]: 'configuration calls need a block to define their contents',
  [ErrorCode.E0013]: 'this combination of tokens is not valid',
  [ErrorCode.E0014]: 'the file ended unexpectedly',
  [ErrorCode.E0015]: 'template strings must be closed with a backtick',
  [ErrorCode.E0016]:
    'semicolons should only be used to separate multiple statements on the same line',

  [ErrorCode.E0100]: 'the types do not match',
  [ErrorCode.E0101]: 'this variable has not been defined',
  [ErrorCode.E0102]: 'this function has not been defined',
  [ErrorCode.E0103]: 'wrong number of arguments',
  [ErrorCode.E0104]: 'argument type does not match',
  [ErrorCode.E0105]: 'return type does not match',
  [ErrorCode.E0106]: 'required property is missing',
  [ErrorCode.E0107]: 'this property does not exist',
  [ErrorCode.E0108]: 'cannot modify this value',
  [ErrorCode.E0200]: 'schema file not found',
  [ErrorCode.E0201]: 'schema format is invalid',
  [ErrorCode.E0202]: 'configuration does not match schema',
  [ErrorCode.E0203]: 'schema directive is missing',
  [ErrorCode.E0204]: 'schema has circular dependencies',
  [ErrorCode.E0300]: 'configuration structure is invalid',
  [ErrorCode.E0301]: 'required configuration is missing',
  [ErrorCode.E0302]: 'configuration value is invalid',
  [ErrorCode.E0303]: 'configuration violates constraints',
};

/**
 * Maps error codes to specific help suggestions
 */
export const ERROR_SUGGESTIONS: Record<ErrorCode, string> = {
  [ErrorCode.E0001]: 'try providing a value like: some_variable = "some_value"',
  [ErrorCode.E0002]: "check for missing ')' or extra '(' in your code",
  [ErrorCode.E0003]: "check for missing '}' or extra '{' in your code",
  [ErrorCode.E0004]: "check for missing ']' or extra '[' in your code",
  [ErrorCode.E0005]: 'check the syntax around this location',
  [ErrorCode.E0006]: 'try adding the missing parts of the configuration',
  [ErrorCode.E0007]: 'try changing the identifier to start with a valid character',
  [ErrorCode.E0008]: 'check the format of strings, numbers, or boolean values',
  [ErrorCode.E0009]: 'check if you are using the right operator for this situation',
  [ErrorCode.E0010]: 'remove the semicolon or add another statement after it',
  [ErrorCode.E0011]: "make sure the left side of '=' is a valid assignment target",
  [ErrorCode.E0012]: 'add a block like: config { ... }',
  [ErrorCode.E0013]: 'check the syntax and structure of your code',
  [ErrorCode.E0014]: 'check if you are missing closing braces, parentheses, or string terminators',
  [ErrorCode.E0015]: 'add a closing backtick (`) to end your template string',
  [ErrorCode.E0016]: 'remove the semicolon or add another statement after it',
  [ErrorCode.E0100]: 'make sure the value type matches what is expected',
  [ErrorCode.E0101]: 'declare the variable before using it',
  [ErrorCode.E0102]: 'make sure the function name is correct',
  [ErrorCode.E0103]: 'check the function signature for the correct number of parameters',
  [ErrorCode.E0104]: 'provide an argument of the expected type',
  [ErrorCode.E0105]: 'return a value of the expected type',
  [ErrorCode.E0106]: 'add the missing property to your configuration',
  [ErrorCode.E0107]: 'check the property name or remove it',
  [ErrorCode.E0108]: "use 'var' instead of 'val' for mutable variables",
  [ErrorCode.E0200]: 'check that the schema file path is correct',
  [ErrorCode.E0201]: 'check the schema file for syntax errors',
  [ErrorCode.E0202]: 'ensure your configuration follows the schema requirements',
  [ErrorCode.E0203]: 'add a schema directive at the top of your file',
  [ErrorCode.E0204]: 'remove circular references between schema files',
  [ErrorCode.E0300]: 'check the overall structure of your configuration',
  [ErrorCode.E0301]: 'add the missing configuration sections',
  [ErrorCode.E0302]: 'check that the value meets the expected format',
  [ErrorCode.E0303]: 'ensure the configuration meets all defined constraints',
};

/**
 * Gets the help message for an error code
 */
export function getErrorHelpMessage(code: ErrorCode): string {
  return ERROR_HELP_MESSAGES[code] || 'no additional help available';
}

/**
 * Gets the suggestion for an error code
 */
export function getErrorSuggestion(code: ErrorCode): string {
  return ERROR_SUGGESTIONS[code] || 'no suggestions available';
}

/**
 * Maps error codes to human-readable descriptions
 */
export const ERROR_DESCRIPTIONS: Record<ErrorCode, string> = {
  [ErrorCode.E0001]: "expected expression after '='",
  [ErrorCode.E0002]: 'missing closing parenthesis',
  [ErrorCode.E0003]: 'missing closing brace',
  [ErrorCode.E0004]: 'missing closing bracket',
  [ErrorCode.E0005]: 'unexpected token',
  [ErrorCode.E0006]: 'incomplete configuration call',
  [ErrorCode.E0007]: 'invalid identifier',
  [ErrorCode.E0008]: 'invalid literal',
  [ErrorCode.E0009]: 'invalid operator',
  [ErrorCode.E0010]: 'missing semicolon',
  [ErrorCode.E0011]: 'invalid assignment target',
  [ErrorCode.E0012]: 'missing block after call expression',
  [ErrorCode.E0013]: 'invalid token sequence',
  [ErrorCode.E0014]: 'unexpected end of file',
  [ErrorCode.E0015]: 'unterminated template string',
  [ErrorCode.E0016]: 'invalid semicolon usage',

  [ErrorCode.E0100]: 'type mismatch',
  [ErrorCode.E0101]: 'undefined variable',
  [ErrorCode.E0102]: 'undefined function',
  [ErrorCode.E0103]: 'invalid argument count',
  [ErrorCode.E0104]: 'invalid argument type',
  [ErrorCode.E0105]: 'invalid return type',
  [ErrorCode.E0106]: 'missing required property',
  [ErrorCode.E0107]: 'property does not exist',
  [ErrorCode.E0108]: 'cannot assign to immutable variable',

  [ErrorCode.E0200]: 'schema not found',
  [ErrorCode.E0201]: 'invalid schema format',
  [ErrorCode.E0202]: 'schema validation failed',
  [ErrorCode.E0203]: 'missing schema directive',
  [ErrorCode.E0204]: 'circular schema dependency',

  [ErrorCode.E0300]: 'invalid configuration structure',
  [ErrorCode.E0301]: 'missing required configuration',
  [ErrorCode.E0302]: 'invalid configuration value',
  [ErrorCode.E0303]: 'configuration constraint violation',
};

/**
 * Gets the description for an error code
 */
export function getErrorDescription(code: ErrorCode): string {
  return ERROR_DESCRIPTIONS[code] || 'unknown error';
}
