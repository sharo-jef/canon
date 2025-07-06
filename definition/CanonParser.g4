parser grammar CanonParser;

options {
    tokenVocab = CanonLexer;
}

// Root rule
program: (schemaDirective | useStatement | topLevelElement)* EOF;

// Schema directive
schemaDirective: SCHEMA_DIRECTIVE stringLiteral;

// Use statement
useStatement: USE IDENTIFIER;

// Top-level elements
topLevelElement:
    schemaDeclaration
    | structDeclaration
    | unionDeclaration
    | typeDeclaration
    | callExpression;

// Schema declaration
schemaDeclaration: annotation* SCHEMA block;

// Struct declaration
structDeclaration: annotation* STRUCT IDENTIFIER block;

// Union declaration
unionDeclaration: annotation* UNION IDENTIFIER ASSIGN unionType;

// Type declaration (for future type constraints)
typeDeclaration: annotation* TYPE IDENTIFIER ASSIGN type;

// Union type
unionType: type (PIPE type)*;

// Type definitions
type:
    baseType (LBRACKET RBRACKET)*;

baseType:
    primitiveType
    | IDENTIFIER;

primitiveType: STRING_TYPE | INT_TYPE | BOOL_TYPE;

// Block (used in schema, struct, object instantiation)
block: LBRACE blockContent* RBRACE;

blockContent:
    propertyDeclaration
    | assignmentStatement
    | initDeclaration
    | functionDeclaration
    | getterDeclaration
    | repeatedDeclaration
    | callExpression
    | expressionStatement;

// Property declarations (in struct and schema)
propertyDeclaration: annotation* (PRIVATE)? IDENTIFIER ((QUESTION)? COLON type (ASSIGN expression)?)?;

// Assignment statements (covers both property assignments and variable assignments)
assignmentStatement: (THIS DOT)? IDENTIFIER ASSIGN expression;

// Init declarations
initDeclaration: annotation* INIT (LPAREN parameterList? RPAREN)? block;

// Function declarations
functionDeclaration: annotation* (PRIVATE)? IDENTIFIER LPAREN parameterList? RPAREN block;

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
    | expression LPAREN argumentList? RPAREN                    #functionCallExpression
    | MINUS expression                                          #unaryMinusExpression
    | NOT expression                                            #logicalNotExpression
    | expression (MULTIPLY | DIVIDE | MODULO) expression       #multiplicativeExpression
    | expression (PLUS | MINUS) expression                     #additiveExpression
    | expression (LESS_THAN | GREATER_THAN | LESS_EQUALS | GREATER_EQUALS) expression #relationalExpression
    | expression (EQUALS | NOT_EQUALS) expression              #equalityExpression
    | expression LOGICAL_AND expression                        #logicalAndExpression
    | expression LOGICAL_OR expression                         #logicalOrExpression;

// Primary expressions
primary:
    literal                                                     #literalExpression
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
