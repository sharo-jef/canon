lexer grammar CanonLexer;

// Skip whitespace and comments
WS: [ \t\r\n]+ -> skip;

// Comments
LINE_COMMENT: '//' ~[\r\n]* -> skip;
BLOCK_COMMENT: '/*' .*? '*/' -> skip;

// Schema directive (must come before hash comment)
SCHEMA_DIRECTIVE: '#schema';

// Hash comments (after schema directive to avoid conflicts)
// Match # followed by anything except 'schema' (for comments like # This is a comment)
HASH_COMMENT: '#' ( ~[\r\ns] | 's' ~[\r\nc] | 'sc' ~[\r\nh] | 'sch' ~[\r\ne] | 'sche' ~[\r\nm] | 'schem' ~[\r\na] ) ~[\r\n]* -> skip;

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
ELSE: 'else';
NOT: 'not';
THIS: 'this';
VAL: 'val';
VAR: 'var';
FUN: 'fun';

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
POWER: '**';

// Comparison operators
EQUALS: '==';
NOT_EQUALS: '!=';
LESS_THAN: '<';
GREATER_THAN: '>';
LESS_EQUALS: '<=';
GREATER_EQUALS: '>=';

// Assignment
ASSIGN: '=';
PLUS_ASSIGN: '+=';
MINUS_ASSIGN: '-=';
MULTIPLY_ASSIGN: '*=';
DIVIDE_ASSIGN: '/=';
MODULO_ASSIGN: '%=';
POWER_ASSIGN: '**=';

// Logical operators
LOGICAL_AND: '&&';
LOGICAL_OR: '||';

// Pipeline operator (must come before BIT_OR)
PIPELINE: '|>';

// Bitwise operators
BIT_AND: '&';
BIT_OR: '|';
BIT_XOR: '^';
BIT_NOT: '~';
LEFT_SHIFT: '<<';
RIGHT_SHIFT: '>>';

// Range and spread operators
RANGE: '..';
SPREAD: '...';

// Unary operators
EXCLAMATION: '!';

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

// Template string mode for handling ${expression} interpolation
mode TEMPLATE_MODE;

TEMPLATE_STRING_END: '`' -> popMode;
TEMPLATE_STRING_PART: (~[`$])+;
TEMPLATE_INTERPOLATION_START: '${' -> pushMode(INTERPOLATION_MODE);
TEMPLATE_INTERPOLATION_SIMPLE: '$' [a-zA-Z_][a-zA-Z0-9_]*;

// Interpolation mode for handling expressions inside ${}
mode INTERPOLATION_MODE;

INTERPOLATION_END: '}' -> popMode;
// All regular tokens are available inside interpolation
INTERPOLATION_IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]* -> type(IDENTIFIER);
INTERPOLATION_INTEGER: [0-9]+ -> type(INTEGER_LITERAL);
INTERPOLATION_PLUS: '+' -> type(PLUS);
INTERPOLATION_MINUS: '-' -> type(MINUS);
INTERPOLATION_MULTIPLY: '*' -> type(MULTIPLY);
INTERPOLATION_DIVIDE: '/' -> type(DIVIDE);
INTERPOLATION_POWER: '**' -> type(POWER);
INTERPOLATION_LPAREN: '(' -> type(LPAREN);
INTERPOLATION_RPAREN: ')' -> type(RPAREN);
INTERPOLATION_LBRACKET: '[' -> type(LBRACKET);
INTERPOLATION_RBRACKET: ']' -> type(RBRACKET);
INTERPOLATION_DOT: '.' -> type(DOT);
INTERPOLATION_EQUALS: '==' -> type(EQUALS);
INTERPOLATION_NOT_EQUALS: '!=' -> type(NOT_EQUALS);
INTERPOLATION_LESS_THAN: '<' -> type(LESS_THAN);
INTERPOLATION_GREATER_THAN: '>' -> type(GREATER_THAN);
INTERPOLATION_LESS_EQUALS: '<=' -> type(LESS_EQUALS);
INTERPOLATION_GREATER_EQUALS: '>=' -> type(GREATER_EQUALS);
INTERPOLATION_LOGICAL_AND: '&&' -> type(LOGICAL_AND);
INTERPOLATION_LOGICAL_OR: '||' -> type(LOGICAL_OR);
INTERPOLATION_EXCLAMATION: '!' -> type(EXCLAMATION);
INTERPOLATION_BIT_AND: '&' -> type(BIT_AND);
INTERPOLATION_BIT_OR: '|' -> type(BIT_OR);
INTERPOLATION_BIT_XOR: '^' -> type(BIT_XOR);
INTERPOLATION_WS: [ \t\r\n]+ -> skip;
