lexer grammar CanonLexer;

// Skip whitespace and comments
WS: [ \t\r\n]+ -> skip;

// Comments
LINE_COMMENT: '//' ~[\r\n]* -> skip;
BLOCK_COMMENT: '/*' .*? '*/' -> skip;

// Schema directive (must come before hash comment)
SCHEMA_DIRECTIVE: '#schema';

// Hash comments (after schema directive to avoid conflicts)
HASH_COMMENT: '#' ~[\r\n]* -> skip;

// Keywords
SCHEMA: 'schema';
STRUCT: 'struct';
UNION: 'union';
TYPE: 'type';
INIT: 'init';
PRIVATE: 'private';
GET: 'get';
REPEATED: 'repeated';
USE: 'use';
IF: 'if';
ERROR: 'error';
AND: 'and';
OR: 'or';
NOT: 'not';
THIS: 'this';

// Built-in types
STRING_TYPE: 'string';
INT_TYPE: 'int';
BOOL_TYPE: 'bool';

// Operators
PLUS: '+';
MINUS: '-';
MULTIPLY: '*';
DIVIDE: '/';
MODULO: '%';

// Comparison operators
EQUALS: '==';
NOT_EQUALS: '!=';
LESS_THAN: '<';
GREATER_THAN: '>';
LESS_EQUALS: '<=';
GREATER_EQUALS: '>=';

// Assignment
ASSIGN: '=';

// Logical operators
LOGICAL_AND: '&&';
LOGICAL_OR: '||';

// Delimiters
LBRACE: '{';
RBRACE: '}';
LPAREN: '(';
RPAREN: ')';
LBRACKET: '[';
RBRACKET: ']';

// Punctuation
DOT: '.';
COMMA: ',';
COLON: ':';
SEMICOLON: ';';
QUESTION: '?';
ARROW: '->';
PIPE: '|';

// String literals
STRING_LITERAL: '\'' (~['\\\r\n] | EscapeSequence)* '\'';
DOUBLE_STRING_LITERAL: '"' (~["\\\r\n] | EscapeSequence)* '"';

// Template string literals (backticks with interpolation)
TEMPLATE_STRING_START: '`' -> pushMode(TEMPLATE_MODE);

// Integer literals
INTEGER_LITERAL: [0-9]+;

// Boolean literals
TRUE: 'true';
FALSE: 'false';

// Annotations
ANNOTATION: '@' IDENTIFIER;

// Identifiers (must come after keywords)
IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;

// Escape sequences for strings
fragment EscapeSequence:
    '\\' ['"\\nrtbf];

// Template string mode for handling $identifier interpolation
mode TEMPLATE_MODE;

TEMPLATE_STRING_END: '`' -> popMode;
TEMPLATE_STRING_PART: (~[`$])+;
TEMPLATE_INTERPOLATION: '$' [a-zA-Z_][a-zA-Z0-9_]*;
