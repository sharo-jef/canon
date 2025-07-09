// ──────────────────────────────────────────────
// CanonParser.g4  (functionally identical version)
// ──────────────────────────────────────────────
parser grammar CanonParser;

options { tokenVocab = CanonLexer; }

// ───── entry ──────────────────────────────────
program
    : NEWLINE* programElement (statementSeparators programElement)* NEWLINE* EOF
    ;

// ───── program elements ──────────────────────
programElement
    : schemaDirective
    | useStatement
    | topLevelElement
    ;

// ───── directives / imports ───────────────────
schemaDirective : SCHEMA_DIRECTIVE stringLiteral ;
useStatement    : USE IDENTIFIER ;

// ───── statement separators ──────────────────
statementSeparator
    : SEMICOLON
    | NEWLINE
    | SEMICOLON NEWLINE
    | NEWLINE SEMICOLON
    ;

// Allow multiple consecutive separators
statementSeparators
    : statementSeparator+
    ;

// ───── top-level ──────────────────────────────
topLevelStatement
    : topLevelElement ( statementSeparators topLevelElement )*
    ;

topLevelElement
    : schemaDeclaration
    | structDeclaration
    | unionDeclaration
    | typeDeclaration
    | variableDeclaration
    | functionDeclaration
    | assignmentStatement
    | destructuringAssignment
    | callExpression
    ;

// ───── declarations ─────────────────
schemaDeclaration        : annotation* NEWLINE* SCHEMA  ( block | stringLiteral ) ;
structDeclaration        : annotation* NEWLINE* STRUCT  IDENTIFIER structBody ;
unionDeclaration         : annotation* NEWLINE* UNION   IDENTIFIER ASSIGN unionType ;
typeDeclaration          : annotation* NEWLINE* TYPE    IDENTIFIER ASSIGN type ;
functionDeclaration
    : annotation* NEWLINE* (INFIX FUN type DOT IDENTIFIER | FUN IDENTIFIER)
      LPAREN parameterList? RPAREN
      ( COLON type )?
      block
    ;

variableDeclaration
    : annotation* NEWLINE* ( VAL | VAR ) IDENTIFIER
      ( COLON type )?
      ASSIGN expression
    ;

// ───── type system ────────────────────────────
unionType : type ( BIT_OR type )* ;

type      : baseType ( LBRACKET RBRACKET )* QUESTION? ;
baseType  : primitiveType | IDENTIFIER ;
primitiveType : STRING_TYPE | INT_TYPE | FLOAT_TYPE | BOOL_TYPE ;

// ───── blocks / statements ────────────────────
block
    : LBRACE NEWLINE* ( statement ( statementSeparators statement )* )* NEWLINE* RBRACE
    ;

structBody
    : LBRACE NEWLINE* ( structMember ( statementSeparators structMember )* )* NEWLINE* RBRACE
    ;

structMember
    : propertyDeclaration
    | initDeclaration
    | getterDeclaration
    | methodDeclaration
    | repeatedDeclaration
    ;

statement
    : assignmentStatement
    | expressionStatement
    | propertyDeclaration
    | initDeclaration
    | getterDeclaration
    | methodDeclaration
    | repeatedDeclaration
    | variableDeclaration
    ;

expressionStatement : expression ;

// ───── members & misc. ────────────────────────
propertyDeclaration
    : annotation* NEWLINE* PRIVATE? IDENTIFIER
      ( QUESTION? COLON type ( ASSIGN expression )? )?
    ;

assignmentStatement
    : ( THIS DOT )? IDENTIFIER
      ( ASSIGN | PLUS_ASSIGN | MINUS_ASSIGN
      | MULTIPLY_ASSIGN | DIVIDE_ASSIGN | MODULO_ASSIGN | POWER_ASSIGN )
      expression
    ;

destructuringAssignment
    : destructuringPattern ASSIGN expression
    ;

destructuringPattern
    : arrayDestructuringPattern
    | objectDestructuringPattern
    ;

arrayDestructuringPattern
    : LBRACKET destructuringElement ( COMMA destructuringElement )* RBRACKET
    ;

objectDestructuringPattern
    : LBRACE destructuringProperty ( COMMA destructuringProperty )* RBRACE
    ;

destructuringElement
    : IDENTIFIER ( ASSIGN expression )?
    | destructuringPattern
    | SPREAD IDENTIFIER
    ;

destructuringProperty
    : IDENTIFIER ( ASSIGN expression )?
    | IDENTIFIER COLON IDENTIFIER ( ASSIGN expression )?
    ;

initDeclaration    : annotation* NEWLINE* INIT ( LPAREN parameterList? RPAREN )? block ;
getterDeclaration  : annotation* NEWLINE* GET  IDENTIFIER LPAREN RPAREN ( COLON type )? block ;
methodDeclaration  : annotation* NEWLINE* PRIVATE? FUN IDENTIFIER
                     LPAREN parameterList? RPAREN
                     ( COLON type )?
                     block ;
repeatedDeclaration: annotation* NEWLINE* REPEATED IDENTIFIER COLON type
                     mappingBlock?
                     ( ASSIGN expression )? ;
mappingBlock       : LBRACE NEWLINE* (mappingEntry (statementSeparators mappingEntry)*)? NEWLINE* RBRACE ;
mappingEntry       : IDENTIFIER ARROW IDENTIFIER ;

parameterList : parameter ( COMMA parameter )* ;
parameter     : ( THIS DOT )? IDENTIFIER ( COLON type )? ;

// ───── calls & arguments ──────────────────────
callExpression
    : IDENTIFIER
      ( LPAREN argumentList? RPAREN )?
      block?
    ;

argumentList  : expression ( COMMA expression )* ;

// ───── expressions (precedence climbing) ──────
expression
    : primary                                      #primaryExpr
    | MINUS         expression                     #unaryMinusExpr
    | NOT           expression                     #logicalNotExpr
    | BIT_NOT       expression                     #bitwiseNotExpr
    | INT_TYPE LPAREN expression RPAREN           #typeCastExpr
    | FLOAT_TYPE LPAREN expression RPAREN         #typeCastExpr
    | STRING_TYPE LPAREN expression RPAREN        #typeCastExpr
    | BOOL_TYPE LPAREN expression RPAREN          #typeCastExpr
    | expression DOT IDENTIFIER                      #memberAccessExpr
    | expression LBRACKET expression RBRACKET        #indexAccessExpr
    | expression LBRACKET expression? RANGE expression? RBRACKET
                                                #sliceExpr
    | expression LPAREN argumentList? RPAREN         #funcCallExpr
    | expression EXCLAMATION                         #nonNullAssertExpr
    | expression POWER                           expression #powerExpr
    | expression op=(MULTIPLY | DIVIDE | MODULO) expression #mulDivModExpr
    | expression op=(PLUS | MINUS)               expression #addSubExpr
    | expression op=(RANGE | RANGE_INCLUSIVE)   expression #rangeExpr
    | expression IDENTIFIER                      expression #infixCallExpr
    | expression op=(LEFT_SHIFT | RIGHT_SHIFT)   expression #shiftExpr
    | expression op=(LESS_THAN|GREATER_THAN|LESS_EQUALS|GREATER_EQUALS) expression #relationalExpr
    | expression op=(EQUALS | NOT_EQUALS)        expression #equalityExpr
    | expression BIT_AND                expression #bitwiseAndExpr
    | expression BIT_XOR                expression #bitwiseXorExpr
    | expression BIT_OR                 expression #bitwiseOrExpr
    | expression LOGICAL_AND            expression #logicalAndExpr
    | expression LOGICAL_OR             expression #logicalOrExpr
    | expression PIPELINE               expression #pipelineExpr
    ;

// ───── primaries ───────────────────────────────
primary
    : literal                         #literalExpr
    | listLiteral                     #listLiteralExpr
    | lambdaExpression                #lambdaExpr
    | anonymousFunction               #anonFuncExpr
    | spreadExpression                #spreadExpr
    | IDENTIFIER                      #identifierExpr
    | THIS                            #thisExpr
    | IF LPAREN expression RPAREN ( expression | block )
          ( ELSE ( expression | block ) )?          #ifExpr
    | LPAREN expression RPAREN        #parenExpr
    | callExpression                  #callExprPrimary
    ;

// ───── literals / annotations ─────────────────
literal
    : stringLiteral
    | INTEGER_LITERAL
    | TRUE
    | FALSE
    ;

stringLiteral
    : STRING_LITERAL
    | DOUBLE_STRING_LITERAL
    | templateString
    ;

templateString
    : TEMPLATE_STRING_START templateStringContent* TEMPLATE_STRING_END
    ;

templateStringContent
    : TEMPLATE_STRING_PART
    | TEMPLATE_INTERPOLATION_SIMPLE
    | TEMPLATE_INTERPOLATION_START expression INTERPOLATION_END
    ;

// annotations
annotation
    : ANNOTATION ( LPAREN argumentList? RPAREN | stringLiteral )?
    ;

// lists / spread
listLiteral      : LBRACKET ( expression ( COMMA expression )* )? RBRACKET ;
lambdaExpression
    : LBRACE RBRACE
    | LBRACE ARROW RBRACE
    | LBRACE ARROW lambdaBody RBRACE
    | LBRACE lambdaParameters ARROW RBRACE
    | LBRACE lambdaParameters ARROW lambdaBody RBRACE
    | LBRACE lambdaBody RBRACE
    ;
lambdaParameters : lambdaParameter ( COMMA lambdaParameter )* ;
lambdaParameter  : IDENTIFIER ( COLON type )? ;
lambdaBody       : expression | ( statement ( SEMICOLON statement )* )+ ;

anonymousFunction
    : FUN LPAREN parameterList? RPAREN ( COLON type )? block
    ;

spreadExpression : SPREAD expression ;
