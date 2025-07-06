parser grammar CanonParser;

options {
	tokenVocab = CanonLexer;
}

// Top-level structure
program:
	statement* EOF;

// Configuration call (function call with optional trailing lambda for building config)
configurationCall:
	IDENTIFIER (LPAREN argumentList? RPAREN) (
		LBRACE constructionBody RBRACE
	)?
	| IDENTIFIER LBRACE constructionBody RBRACE;

// Schema import - schema "./path/to/schema.canon"
schemaImport: SCHEMA STRING_LITERAL;

// Schema directive - required at the beginning
schemaDirective: SCHEMA_DIRECTIVE STRING_LITERAL;

// Schema definition
schemaDefinition: SCHEMA LBRACE schemaMember* RBRACE;
schemaMember:
	annotation* IDENTIFIER (MULTIPLY | QUESTION | PLUS)? COLON typeReference;

// Struct definition
structDefinition:
	STRUCT IDENTIFIER LBRACE structContent* RBRACE
	| STRUCT IDENTIFIER ASSIGN typeReference; // Type alias
structContent:
	mixinDeclaration
	| structMember
	| methodDefinition;

mixinDeclaration: MIXIN IDENTIFIER;
structMember:
	annotation* IDENTIFIER (QUESTION)? COLON typeReference;

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
	structDefinition
	| functionDefinition
	| variableDeclaration
	| assignment
	| returnStatement
	| forStatement
	| configurationCall
	| schemaDirective
	| schemaImport
	| schemaDefinition;

variableDeclaration: (VAL | VAR) IDENTIFIER ASSIGN expression SEMICOLON?;
assignment: (
		IDENTIFIER
		| THIS DOT IDENTIFIER
		| IDENTIFIER DOT IDENTIFIER
	) ASSIGN expression SEMICOLON?;
expressionStatement: expression SEMICOLON?;
returnStatement: RETURN expression? SEMICOLON?;
forStatement:
	FOR LPAREN IDENTIFIER IN expression RPAREN LBRACE statement* RBRACE;

constructionBody: (
		assignment
		| variableDeclaration
		| forStatement
		| configurationCall
	)*;

// Expressions - hierarchy from lowest to highest precedence
expression: comparisonExpression (RANGE comparisonExpression)*;

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

stringInterpolation: BACKTICK interpolationContent* INTERPOLATION_END;

interpolationContent:
    INTERPOLATION_TEXT
    | INTERPOLATION_DOLLAR
    | interpolationExpression;

interpolationExpression: INTERPOLATION_START exprModeExpression EXPR_RBRACE;

// Expression rules for expression mode (inside ${...})
exprModeExpression: exprModeComparison (RANGE exprModeComparison)*;

exprModeComparison:
	exprModeAdditive (
		(
			EXPR_EQUALS
			| EXPR_NOT_EQUALS
			| EXPR_LESS_THAN
			| EXPR_GREATER_THAN
			| EXPR_LESS_EQUALS
			| EXPR_GREATER_EQUALS
		) exprModeAdditive
	)*;

exprModeAdditive:
	exprModeMultiplicative (
		(EXPR_PLUS | EXPR_MINUS) exprModeMultiplicative
	)*;

exprModeMultiplicative:
	exprModePrimary ((EXPR_MULTIPLY | EXPR_DIVIDE) exprModePrimary)*;

exprModePrimary:
	EXPR_STRING_LITERAL
	| EXPR_INTEGER_LITERAL
	| EXPR_IDENTIFIER EXPR_LPAREN EXPR_RPAREN // function call
	| EXPR_IDENTIFIER EXPR_LPAREN exprModeArgumentList? EXPR_RPAREN // function call with args
	| exprModeMemberAccess
	| EXPR_IDENTIFIER
	| EXPR_LPAREN exprModeExpression EXPR_RPAREN;

exprModeMemberAccess: EXPR_IDENTIFIER EXPR_DOT EXPR_IDENTIFIER;
exprModeArgumentList: exprModeExpression (EXPR_COMMA exprModeExpression)*;

// Literals
literal: STRING_LITERAL | INTEGER_LITERAL;

// Annotations
annotation:
	AT IDENTIFIER (STRING_LITERAL | LPAREN argumentList? RPAREN)?;
