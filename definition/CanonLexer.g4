lexer grammar CanonLexer;

// Keywords
SCHEMA: 'schema';
STRUCT: 'struct';
MIXIN: 'mixin';
FUN: 'fun';
DECLARE: 'declare';
VAL: 'val';
VAR: 'var';
RETURN: 'return';
FOR: 'for';
IN: 'in';
THIS: 'this';
STRING_TYPE: 'string';
INT_TYPE: 'int';

// Operators and symbols
SCHEMA_DIRECTIVE: '#schema';
INTERPOLATION_START: '${';
PLUS: '+';
MINUS: '-';
MULTIPLY: '*';
DIVIDE: '/';
EQUALS: '==';
NOT_EQUALS: '!=';
LESS_THAN: '<';
GREATER_THAN: '>';
LESS_EQUALS: '<=';
GREATER_EQUALS: '>=';
ASSIGN: '=';
RANGE: '..';
DOT: '.';
SEMICOLON: ';';
COMMA: ',';
COLON: ':';
QUESTION: '?';
AT: '@';

// Brackets and braces
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
LBRACKET: '[';
RBRACKET: ']';

// String interpolation
BACKTICK: '`';

// Literals
STRING_LITERAL: ('"' (~["\r\n] | '\\"')* '"') | ('\'' (~['\r\n] | '\\\'')* '\'');
INTEGER_LITERAL: [0-9]+;

// Identifiers
IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;

// Comments (supporting Unicode characters)
COMMENT: '//' ~[\r\n]* -> skip;

// Whitespace
WS: [ \t\r\n]+ -> skip;

// Any other character (fallback for Unicode)
fragment UNICODE_CHAR: ~[\r\n];
