parser grammar CanonParser;

options {
    tokenVocab = CanonLexer;
}

// Root rule
program: (schemaDirective | useStatement | topLevelStatement)* EOF;

// Schema directive
schemaDirective: SCHEMA_DIRECTIVE stringLiteral;

// Use statement
useStatement: USE IDENTIFIER;

// Top-level statements - newline-separated, semicolon only for same-line multiple statements
topLevelStatement: topLevelElement (SEMICOLON topLevelElement)*;

// Top-level elements
topLevelElement:
    schemaDeclaration
    | structDeclaration
    | unionDeclaration
    | typeDeclaration
    | variableDeclaration
    | functionDeclaration
    | assignmentStatement
    | destructuringAssignment
    | callExpression;

// Schema declaration
schemaDeclaration: annotation* SCHEMA (block | stringLiteral);

// Struct declaration
structDeclaration: annotation* STRUCT IDENTIFIER block;

// Union declaration
unionDeclaration: annotation* UNION IDENTIFIER ASSIGN unionType;

// Type declaration (for future type constraints)
typeDeclaration: annotation* TYPE IDENTIFIER ASSIGN type;

// Top-level function declarations
functionDeclaration: annotation* FUN IDENTIFIER LPAREN parameterList? RPAREN (COLON type)? block;

// Variable declarations  
variableDeclaration: annotation* (VAL | VAR) IDENTIFIER (COLON type)? ASSIGN expression;

// Union type
unionType: type (BIT_OR type)*;

// Type definitions
type:
    baseType (LBRACKET RBRACKET)*;

baseType:
    primitiveType
    | IDENTIFIER;

primitiveType: STRING_TYPE | INT_TYPE | BOOL_TYPE;

// Block (used in schema, struct, object instantiation)
block: LBRACE (statement (SEMICOLON statement)*)* RBRACE;

statement:
    assignmentStatement
    | expressionStatement
    | propertyDeclaration
    | initDeclaration
    | getterDeclaration
    | repeatedDeclaration
    | variableDeclaration;

// Property declarations (in struct and schema)
propertyDeclaration: annotation* (PRIVATE)? IDENTIFIER ((QUESTION)? COLON type (ASSIGN expression)?)?;

// Assignment statements (covers both property assignments and variable assignments)
assignmentStatement: (THIS DOT)? IDENTIFIER (ASSIGN | PLUS_ASSIGN | MINUS_ASSIGN | MULTIPLY_ASSIGN | DIVIDE_ASSIGN | MODULO_ASSIGN | POWER_ASSIGN) expression;

// Destructuring assignment statements
destructuringAssignment: destructuringPattern ASSIGN expression;

// Destructuring patterns
destructuringPattern:
    arrayDestructuringPattern           // [a, b, c] = ...
    | objectDestructuringPattern;       // {a, b, c} = ...

    // Array destructuring patterns
arrayDestructuringPattern: LBRACKET destructuringElement (COMMA destructuringElement)* RBRACKET;

// Object destructuring patterns  
objectDestructuringPattern: LBRACE destructuringProperty (COMMA destructuringProperty)* RBRACE;

// Elements in array destructuring
destructuringElement:
    IDENTIFIER (ASSIGN expression)?    // with optional default value
    | destructuringPattern             // nested pattern
    | SPREAD IDENTIFIER;               // rest pattern: ...rest

// Properties in object destructuring
destructuringProperty:
    IDENTIFIER (ASSIGN expression)?    // {prop} or {prop = default}
    | IDENTIFIER COLON IDENTIFIER (ASSIGN expression)?; // {prop: newName} or {prop: newName = default}

// Init declarations
initDeclaration: annotation* INIT (LPAREN parameterList? RPAREN)? block;

// Getter declarations
getterDeclaration: annotation* GET IDENTIFIER LPAREN RPAREN block;

// Repeated declarations
repeatedDeclaration: annotation* REPEATED IDENTIFIER COLON type (mappingBlock)? (ASSIGN expression)?;

// Mapping block for repeated declarations
mappingBlock: LBRACE mappingEntry* RBRACE;
mappingEntry: IDENTIFIER ARROW IDENTIFIER;

// Parameter list
parameterList: parameter (COMMA parameter)*;
parameter: (THIS DOT)? IDENTIFIER (COLON type)?;

// Call expression (function call with optional lambda block)
callExpression: IDENTIFIER (LPAREN argumentList? RPAREN)? block?;

// Argument list
argumentList: expression (COMMA expression)*;

// Statements
expressionStatement: expression;

// Expressions
expression:
    primary                                                     #primaryExpression
    | expression DOT IDENTIFIER                                 #memberAccessExpression
    | expression LBRACKET expression RBRACKET                   #indexAccessExpression
    | expression LBRACKET expression? RANGE expression? RBRACKET #sliceExpression
    | expression LPAREN argumentList? RPAREN                    #functionCallExpression
    | expression EXCLAMATION                                    #nonNullAssertionExpression
    | MINUS expression                                          #unaryMinusExpression
    | NOT expression                                            #logicalNotExpression
    | BIT_NOT expression                                        #bitwiseNotExpression
    | expression POWER expression                               #powerExpression
    | expression (MULTIPLY | DIVIDE | MODULO) expression       #multiplicativeExpression
    | expression (PLUS | MINUS) expression                     #additiveExpression
    | expression (LEFT_SHIFT | RIGHT_SHIFT) expression         #shiftExpression
    | expression (LESS_THAN | GREATER_THAN | LESS_EQUALS | GREATER_EQUALS) expression #relationalExpression
    | expression (EQUALS | NOT_EQUALS) expression              #equalityExpression
    | expression BIT_AND expression                            #bitwiseAndExpression
    | expression BIT_XOR expression                            #bitwiseXorExpression
    | expression BIT_OR expression                             #bitwiseOrExpression
    | expression LOGICAL_AND expression                        #logicalAndExpression
    | expression LOGICAL_OR expression                         #logicalOrExpression
    | expression PIPELINE expression                           #pipelineExpression
    | expression RANGE expression                              #rangeExpression;

// Primary expressions
primary:
    literal                                                     #literalExpression
    | listLiteral                                               #listLiteralExpression
    | lambdaExpression                                          #lambdaExpressionPrimary
    | anonymousFunction                                         #anonymousFunctionPrimary
    | spreadExpression                                          #spreadExpressionPrimary
    | IDENTIFIER                                                #identifierExpression
    | THIS                                                      #thisExpression
    | IF LPAREN expression RPAREN (expression | block) (ELSE (expression | block))? #ifExpression
    | LPAREN expression RPAREN                                  #parenthesizedExpression
    | callExpression                                            #callExpressionPrimary;

// Literals
literal:
    stringLiteral
    | INTEGER_LITERAL
    | TRUE
    | FALSE;

// String literals (including template strings)
stringLiteral:
    STRING_LITERAL
    | DOUBLE_STRING_LITERAL
    | templateString;

// Template string handling
templateString: TEMPLATE_STRING_START templateStringContent* TEMPLATE_STRING_END;

templateStringContent:
    TEMPLATE_STRING_PART
    | TEMPLATE_INTERPOLATION_SIMPLE
    | TEMPLATE_INTERPOLATION_START expression INTERPOLATION_END;

// Annotations
annotation: ANNOTATION (LPAREN argumentList? RPAREN | stringLiteral)?;

// List literal
listLiteral: LBRACKET (expression (COMMA expression)*)? RBRACKET;

// Lambda expression
lambdaExpression: LBRACE (lambdaParameters ARROW)? lambdaBody RBRACE;
lambdaParameters: IDENTIFIER (COMMA IDENTIFIER)*;
lambdaBody: expression | (statement (SEMICOLON statement)*)*;

// Anonymous function
anonymousFunction: FUN LPAREN parameterList? RPAREN (COLON type)? block;

// Spread expression (for future use)
spreadExpression: SPREAD expression;
