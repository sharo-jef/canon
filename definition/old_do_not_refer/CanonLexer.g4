lexer grammar CanonLexer;

// Whitespace - must be first for proper precedence
WS: [ \t\r\n]+ -> skip;

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
BACKTICK: '`' -> pushMode(INTERPOLATION_MODE);

// Literals
STRING_LITERAL: ('"' (~["\r\n] | '\\"')* '"') | ('\'' (~['\r\n] | '\\\'')* '\'');
INTEGER_LITERAL: [0-9]+;

// Identifiers
IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;

// Comments (supporting Unicode characters)
COMMENT: '//' ~[\r\n]* -> skip;

// String interpolation mode
mode INTERPOLATION_MODE;
    INTERPOLATION_TEXT: ~[`$]+;                     // Text between ` and $ or `
    INTERPOLATION_START: '${' -> pushMode(EXPRESSION_MODE);  // Start expression
    INTERPOLATION_DOLLAR: '$' ~[{];                 // Lone $ character
    INTERPOLATION_END: '`' -> popMode;              // End interpolation, back to default mode

// Expression mode for ${...} content
mode EXPRESSION_MODE;
    // Copy necessary tokens for expressions
    EXPR_PLUS: '+';
    EXPR_MINUS: '-';
    EXPR_MULTIPLY: '*';
    EXPR_DIVIDE: '/';
    EXPR_EQUALS: '==';
    EXPR_NOT_EQUALS: '!=';
    EXPR_LESS_THAN: '<';
    EXPR_GREATER_THAN: '>';
    EXPR_LESS_EQUALS: '<=';
    EXPR_GREATER_EQUALS: '>=';
    EXPR_DOT: '.';
    EXPR_COMMA: ',';
    EXPR_LPAREN: '(';
    EXPR_RPAREN: ')';
    EXPR_RBRACE: '}' -> popMode;                    // End expression, back to interpolation mode
    EXPR_IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;
    EXPR_INTEGER_LITERAL: [0-9]+;
    EXPR_STRING_LITERAL: ('"' (~["\r\n] | '\\"')* '"') | ('\'' (~['\r\n] | '\\\'')* '\'');
    EXPR_WS: [ \t\r\n]+ -> skip;

// Any other character (fallback for Unicode)
fragment UNICODE_CHAR: ~[\r\n];
