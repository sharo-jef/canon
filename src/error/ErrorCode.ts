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
