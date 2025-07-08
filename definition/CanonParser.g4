// ──────────────────────────────────────────────
// CanonParser.g4  (functionally identical version)
// ──────────────────────────────────────────────
parser grammar CanonParser;

options { tokenVocab = CanonLexer; }

// ───── entry ──────────────────────────────────
program
    : (schemaDirective | useStatement | topLevelStatement)* EOF
    ;

// ───── directives / imports ───────────────────
schemaDirective : SCHEMA_DIRECTIVE stringLiteral ;
useStatement    : USE IDENTIFIER ;

// ───── top-level ──────────────────────────────
topLevelStatement
    : topLevelElement ( SEMICOLON topLevelElement )*
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
schemaDeclaration        : annotation* SCHEMA  ( block | stringLiteral ) ;
structDeclaration        : annotation* STRUCT  IDENTIFIER structBody ;
unionDeclaration         : annotation* UNION   IDENTIFIER ASSIGN unionType ;
typeDeclaration          : annotation* TYPE    IDENTIFIER ASSIGN type ;
functionDeclaration
    : annotation* (INFIX FUN type DOT IDENTIFIER | FUN IDENTIFIER)
      LPAREN parameterList? RPAREN
      ( COLON type )?
      block
    ;

variableDeclaration
    : annotation* ( VAL | VAR ) IDENTIFIER
      ( COLON type )?
      ASSIGN expression
    ;

// ───── type system ────────────────────────────
unionType : type ( BIT_OR type )* ;

type      : baseType ( LBRACKET RBRACKET )* ;
baseType  : primitiveType | IDENTIFIER ;
primitiveType : STRING_TYPE | INT_TYPE | BOOL_TYPE ;

// ───── blocks / statements ────────────────────
block
    : LBRACE ( statement ( SEMICOLON statement )* )* RBRACE
    ;

structBody
    : LBRACE ( structMember ( SEMICOLON structMember )* )* RBRACE
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
    : annotation* PRIVATE? IDENTIFIER
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

initDeclaration    : annotation* INIT ( LPAREN parameterList? RPAREN )? block ;
getterDeclaration  : annotation* GET  IDENTIFIER LPAREN RPAREN ( COLON type )? block ;
methodDeclaration  : annotation* PRIVATE? FUN IDENTIFIER
                     LPAREN parameterList? RPAREN
                     ( COLON type )?
                     block ;
repeatedDeclaration: annotation* REPEATED IDENTIFIER COLON type
                     mappingBlock?
                     ( ASSIGN expression )? ;
mappingBlock       : LBRACE mappingEntry* RBRACE ;
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
lambdaParameters : IDENTIFIER ( COMMA IDENTIFIER )* ;
lambdaBody       : expression | ( statement ( SEMICOLON statement )* )+ ;

anonymousFunction
    : FUN LPAREN parameterList? RPAREN ( COLON type )? block
    ;

spreadExpression : SPREAD expression ;
