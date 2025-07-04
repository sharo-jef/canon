parser grammar CanonParser;

options {
	tokenVocab = CanonLexer;
}

// Top-level structure
program:
	schemaDirective schemaDefinition? (
		structDefinition
		| functionDefinition
		| statement
	)* EOF;

// Schema directive - required at the beginning
schemaDirective: SCHEMA_DIRECTIVE STRING_LITERAL;

// Schema definition
schemaDefinition: SCHEMA LBRACE schemaMember* RBRACE;
schemaMember:
	annotation* IDENTIFIER (MULTIPLY)? COLON typeReference;

// Struct definition
structDefinition: STRUCT IDENTIFIER LBRACE structMember* RBRACE;
structMember:
	MIXIN IDENTIFIER
	| annotation* IDENTIFIER (QUESTION)? COLON typeReference
	| methodDefinition;

// Method definition (inside struct)
methodDefinition:
	annotation* IDENTIFIER LPAREN parameterList? RPAREN (
		COLON typeReference
	)? functionBody;

// Function definition
functionDefinition:
	annotation* FUN IDENTIFIER LPAREN parameterList? RPAREN (
		COLON typeReference
	)? functionBody
	| annotation* DECLARE FUN IDENTIFIER LPAREN parameterList? RPAREN (
		COLON typeReference
	)? SEMICOLON?;

functionBody: LBRACE statement* RBRACE;
parameterList: parameter (COMMA parameter)*;
parameter: IDENTIFIER COLON typeReference;

// Type references
typeReference: STRING_TYPE | INT_TYPE | IDENTIFIER;

// Statements
statement:
	variableDeclaration
	| assignment
	| expressionStatement
	| returnStatement
	| forStatement
	| objectConstruction;

variableDeclaration: (VAL | VAR) IDENTIFIER ASSIGN expression;
assignment: (
		IDENTIFIER
		| THIS DOT IDENTIFIER
		| IDENTIFIER DOT IDENTIFIER
	) ASSIGN expression;
expressionStatement: expression;
returnStatement: RETURN expression?;
forStatement:
	FOR LPAREN IDENTIFIER IN expression RPAREN LBRACE statement* RBRACE;

// Object construction
objectConstruction:
	IDENTIFIER (LPAREN argumentList? RPAREN)? (
		LBRACE constructionBody RBRACE
	)?;
constructionBody: (
		assignment
		| variableDeclaration
		| forStatement
	)*;

// Expressions - optimized hierarchy
expression: rangeExpression;

rangeExpression:
	comparisonExpression (RANGE comparisonExpression)*;

comparisonExpression:
	additiveExpression (
		(
			EQUALS
			| NOT_EQUALS
			| LESS_THAN
			| GREATER_THAN
			| LESS_EQUALS
			| GREATER_EQUALS
		) additiveExpression
	)*;

additiveExpression:
	multiplicativeExpression (
		(PLUS | MINUS) multiplicativeExpression
	)*;

multiplicativeExpression:
	primaryExpression ((MULTIPLY | DIVIDE) primaryExpression)*;

primaryExpression:
	literal
	| stringInterpolation
	| IDENTIFIER LPAREN RPAREN // apply() style function call (should match before functionCall)
	| functionCall
	| memberAccess
	| IDENTIFIER
	| LPAREN expression RPAREN;

functionCall:
	IDENTIFIER LPAREN argumentList? RPAREN (
		LBRACE constructionBody RBRACE
	)?
	| memberAccess LPAREN argumentList? RPAREN (
		LBRACE constructionBody RBRACE
	)?;
argumentList: expression (COMMA expression)*;

memberAccess: (THIS DOT IDENTIFIER)
	| (IDENTIFIER DOT IDENTIFIER);

stringInterpolation: BACKTICK stringContent BACKTICK;
stringContent: (interpolationExpression | DOT | IDENTIFIER)*;
interpolationExpression: INTERPOLATION_START expression RBRACE;

// Literals
literal: STRING_LITERAL | INTEGER_LITERAL;

// Annotations
annotation:
	AT IDENTIFIER (STRING_LITERAL | LPAREN argumentList? RPAREN)?;
