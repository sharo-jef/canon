// Generated from definition/CanonParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CanonParserListener } from "./CanonParserListener";
import { CanonParserVisitor } from "./CanonParserVisitor";


export class CanonParser extends Parser {
	public static readonly WS = 1;
	public static readonly NEWLINE = 2;
	public static readonly LINE_COMMENT = 3;
	public static readonly BLOCK_COMMENT = 4;
	public static readonly SCHEMA_DIRECTIVE = 5;
	public static readonly HASH_COMMENT = 6;
	public static readonly SCHEMA = 7;
	public static readonly STRUCT = 8;
	public static readonly UNION = 9;
	public static readonly TYPE = 10;
	public static readonly INIT = 11;
	public static readonly PRIVATE = 12;
	public static readonly GET = 13;
	public static readonly REPEATED = 14;
	public static readonly USE = 15;
	public static readonly IF = 16;
	public static readonly ELSE = 17;
	public static readonly NOT = 18;
	public static readonly THIS = 19;
	public static readonly VAL = 20;
	public static readonly VAR = 21;
	public static readonly FUN = 22;
	public static readonly INFIX = 23;
	public static readonly STRING_TYPE = 24;
	public static readonly INT_TYPE = 25;
	public static readonly FLOAT_TYPE = 26;
	public static readonly BOOL_TYPE = 27;
	public static readonly PLUS = 28;
	public static readonly MINUS = 29;
	public static readonly MULTIPLY = 30;
	public static readonly DIVIDE = 31;
	public static readonly MODULO = 32;
	public static readonly POWER = 33;
	public static readonly EQUALS = 34;
	public static readonly NOT_EQUALS = 35;
	public static readonly LESS_THAN = 36;
	public static readonly GREATER_THAN = 37;
	public static readonly LESS_EQUALS = 38;
	public static readonly GREATER_EQUALS = 39;
	public static readonly ASSIGN = 40;
	public static readonly PLUS_ASSIGN = 41;
	public static readonly MINUS_ASSIGN = 42;
	public static readonly MULTIPLY_ASSIGN = 43;
	public static readonly DIVIDE_ASSIGN = 44;
	public static readonly MODULO_ASSIGN = 45;
	public static readonly POWER_ASSIGN = 46;
	public static readonly LOGICAL_AND = 47;
	public static readonly LOGICAL_OR = 48;
	public static readonly PIPELINE = 49;
	public static readonly BIT_AND = 50;
	public static readonly BIT_OR = 51;
	public static readonly BIT_XOR = 52;
	public static readonly BIT_NOT = 53;
	public static readonly LEFT_SHIFT = 54;
	public static readonly RIGHT_SHIFT = 55;
	public static readonly RANGE_INCLUSIVE = 56;
	public static readonly RANGE = 57;
	public static readonly SPREAD = 58;
	public static readonly EXCLAMATION = 59;
	public static readonly LBRACE = 60;
	public static readonly RBRACE = 61;
	public static readonly LPAREN = 62;
	public static readonly RPAREN = 63;
	public static readonly LBRACKET = 64;
	public static readonly RBRACKET = 65;
	public static readonly DOT = 66;
	public static readonly COMMA = 67;
	public static readonly COLON = 68;
	public static readonly SEMICOLON = 69;
	public static readonly QUESTION = 70;
	public static readonly ARROW = 71;
	public static readonly STRING_LITERAL = 72;
	public static readonly DOUBLE_STRING_LITERAL = 73;
	public static readonly TEMPLATE_STRING_START = 74;
	public static readonly INTEGER_LITERAL = 75;
	public static readonly TRUE = 76;
	public static readonly FALSE = 77;
	public static readonly ANNOTATION = 78;
	public static readonly IDENTIFIER = 79;
	public static readonly TEMPLATE_STRING_END = 80;
	public static readonly TEMPLATE_STRING_PART = 81;
	public static readonly TEMPLATE_INTERPOLATION_START = 82;
	public static readonly TEMPLATE_INTERPOLATION_SIMPLE = 83;
	public static readonly INTERPOLATION_END = 84;
	public static readonly INTERPOLATION_WS = 85;
	public static readonly INTERPOLATION_NEWLINE = 86;
	public static readonly RULE_program = 0;
	public static readonly RULE_programElement = 1;
	public static readonly RULE_schemaDirective = 2;
	public static readonly RULE_useStatement = 3;
	public static readonly RULE_statementSeparator = 4;
	public static readonly RULE_statementSeparators = 5;
	public static readonly RULE_topLevelStatement = 6;
	public static readonly RULE_topLevelElement = 7;
	public static readonly RULE_schemaDeclaration = 8;
	public static readonly RULE_structDeclaration = 9;
	public static readonly RULE_unionDeclaration = 10;
	public static readonly RULE_typeDeclaration = 11;
	public static readonly RULE_functionDeclaration = 12;
	public static readonly RULE_variableDeclaration = 13;
	public static readonly RULE_unionType = 14;
	public static readonly RULE_type = 15;
	public static readonly RULE_baseType = 16;
	public static readonly RULE_primitiveType = 17;
	public static readonly RULE_block = 18;
	public static readonly RULE_structBody = 19;
	public static readonly RULE_structMember = 20;
	public static readonly RULE_statement = 21;
	public static readonly RULE_expressionStatement = 22;
	public static readonly RULE_propertyDeclaration = 23;
	public static readonly RULE_assignmentStatement = 24;
	public static readonly RULE_destructuringAssignment = 25;
	public static readonly RULE_destructuringPattern = 26;
	public static readonly RULE_arrayDestructuringPattern = 27;
	public static readonly RULE_objectDestructuringPattern = 28;
	public static readonly RULE_destructuringElement = 29;
	public static readonly RULE_destructuringProperty = 30;
	public static readonly RULE_initDeclaration = 31;
	public static readonly RULE_getterDeclaration = 32;
	public static readonly RULE_methodDeclaration = 33;
	public static readonly RULE_repeatedDeclaration = 34;
	public static readonly RULE_mappingBlock = 35;
	public static readonly RULE_mappingEntry = 36;
	public static readonly RULE_parameterList = 37;
	public static readonly RULE_parameter = 38;
	public static readonly RULE_callExpression = 39;
	public static readonly RULE_argumentList = 40;
	public static readonly RULE_expression = 41;
	public static readonly RULE_primary = 42;
	public static readonly RULE_literal = 43;
	public static readonly RULE_stringLiteral = 44;
	public static readonly RULE_templateString = 45;
	public static readonly RULE_templateStringContent = 46;
	public static readonly RULE_annotation = 47;
	public static readonly RULE_listLiteral = 48;
	public static readonly RULE_lambdaExpression = 49;
	public static readonly RULE_lambdaParameters = 50;
	public static readonly RULE_lambdaParameter = 51;
	public static readonly RULE_lambdaBody = 52;
	public static readonly RULE_anonymousFunction = 53;
	public static readonly RULE_spreadExpression = 54;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "programElement", "schemaDirective", "useStatement", "statementSeparator", 
		"statementSeparators", "topLevelStatement", "topLevelElement", "schemaDeclaration", 
		"structDeclaration", "unionDeclaration", "typeDeclaration", "functionDeclaration", 
		"variableDeclaration", "unionType", "type", "baseType", "primitiveType", 
		"block", "structBody", "structMember", "statement", "expressionStatement", 
		"propertyDeclaration", "assignmentStatement", "destructuringAssignment", 
		"destructuringPattern", "arrayDestructuringPattern", "objectDestructuringPattern", 
		"destructuringElement", "destructuringProperty", "initDeclaration", "getterDeclaration", 
		"methodDeclaration", "repeatedDeclaration", "mappingBlock", "mappingEntry", 
		"parameterList", "parameter", "callExpression", "argumentList", "expression", 
		"primary", "literal", "stringLiteral", "templateString", "templateStringContent", 
		"annotation", "listLiteral", "lambdaExpression", "lambdaParameters", "lambdaParameter", 
		"lambdaBody", "anonymousFunction", "spreadExpression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "'#schema'", undefined, 
		"'schema'", "'struct'", "'union'", "'type'", "'init'", "'private'", "'get'", 
		"'repeated'", "'use'", "'if'", "'else'", "'not'", "'this'", "'val'", "'var'", 
		"'fun'", "'infix'", "'string'", "'int'", "'float'", "'bool'", undefined, 
		undefined, undefined, undefined, "'%'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'='", "'+='", "'-='", "'*='", 
		"'/='", "'%='", "'**='", undefined, undefined, "'|>'", undefined, undefined, 
		undefined, "'~'", "'<<'", "'>>'", "'..='", "'..'", "'...'", undefined, 
		"'{'", undefined, undefined, undefined, undefined, undefined, undefined, 
		"','", "':'", "';'", "'?'", "'->'", undefined, undefined, undefined, undefined, 
		"'true'", "'false'", undefined, undefined, undefined, undefined, "'${'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WS", "NEWLINE", "LINE_COMMENT", "BLOCK_COMMENT", "SCHEMA_DIRECTIVE", 
		"HASH_COMMENT", "SCHEMA", "STRUCT", "UNION", "TYPE", "INIT", "PRIVATE", 
		"GET", "REPEATED", "USE", "IF", "ELSE", "NOT", "THIS", "VAL", "VAR", "FUN", 
		"INFIX", "STRING_TYPE", "INT_TYPE", "FLOAT_TYPE", "BOOL_TYPE", "PLUS", 
		"MINUS", "MULTIPLY", "DIVIDE", "MODULO", "POWER", "EQUALS", "NOT_EQUALS", 
		"LESS_THAN", "GREATER_THAN", "LESS_EQUALS", "GREATER_EQUALS", "ASSIGN", 
		"PLUS_ASSIGN", "MINUS_ASSIGN", "MULTIPLY_ASSIGN", "DIVIDE_ASSIGN", "MODULO_ASSIGN", 
		"POWER_ASSIGN", "LOGICAL_AND", "LOGICAL_OR", "PIPELINE", "BIT_AND", "BIT_OR", 
		"BIT_XOR", "BIT_NOT", "LEFT_SHIFT", "RIGHT_SHIFT", "RANGE_INCLUSIVE", 
		"RANGE", "SPREAD", "EXCLAMATION", "LBRACE", "RBRACE", "LPAREN", "RPAREN", 
		"LBRACKET", "RBRACKET", "DOT", "COMMA", "COLON", "SEMICOLON", "QUESTION", 
		"ARROW", "STRING_LITERAL", "DOUBLE_STRING_LITERAL", "TEMPLATE_STRING_START", 
		"INTEGER_LITERAL", "TRUE", "FALSE", "ANNOTATION", "IDENTIFIER", "TEMPLATE_STRING_END", 
		"TEMPLATE_STRING_PART", "TEMPLATE_INTERPOLATION_START", "TEMPLATE_INTERPOLATION_SIMPLE", 
		"INTERPOLATION_END", "INTERPOLATION_WS", "INTERPOLATION_NEWLINE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CanonParser._LITERAL_NAMES, CanonParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CanonParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CanonParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return CanonParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CanonParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CanonParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CanonParser.RULE_program);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 110;
					this.match(CanonParser.NEWLINE);
					}
					}
				}
				this.state = 115;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 116;
			this.programElement();
			this.state = 122;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 117;
					this.statementSeparators();
					this.state = 118;
					this.programElement();
					}
					}
				}
				this.state = 124;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 128;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 125;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 131;
			this.match(CanonParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public programElement(): ProgramElementContext {
		let _localctx: ProgramElementContext = new ProgramElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CanonParser.RULE_programElement);
		try {
			this.state = 136;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.SCHEMA_DIRECTIVE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 133;
				this.schemaDirective();
				}
				break;
			case CanonParser.USE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 134;
				this.useStatement();
				}
				break;
			case CanonParser.NEWLINE:
			case CanonParser.SCHEMA:
			case CanonParser.STRUCT:
			case CanonParser.UNION:
			case CanonParser.TYPE:
			case CanonParser.THIS:
			case CanonParser.VAL:
			case CanonParser.VAR:
			case CanonParser.FUN:
			case CanonParser.INFIX:
			case CanonParser.LBRACE:
			case CanonParser.LBRACKET:
			case CanonParser.ANNOTATION:
			case CanonParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 135;
				this.topLevelElement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public schemaDirective(): SchemaDirectiveContext {
		let _localctx: SchemaDirectiveContext = new SchemaDirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CanonParser.RULE_schemaDirective);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this.match(CanonParser.SCHEMA_DIRECTIVE);
			this.state = 139;
			this.stringLiteral();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public useStatement(): UseStatementContext {
		let _localctx: UseStatementContext = new UseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CanonParser.RULE_useStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			this.match(CanonParser.USE);
			this.state = 142;
			this.match(CanonParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementSeparator(): StatementSeparatorContext {
		let _localctx: StatementSeparatorContext = new StatementSeparatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CanonParser.RULE_statementSeparator);
		try {
			this.state = 150;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 144;
				this.match(CanonParser.SEMICOLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 145;
				this.match(CanonParser.NEWLINE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 146;
				this.match(CanonParser.SEMICOLON);
				this.state = 147;
				this.match(CanonParser.NEWLINE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 148;
				this.match(CanonParser.NEWLINE);
				this.state = 149;
				this.match(CanonParser.SEMICOLON);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementSeparators(): StatementSeparatorsContext {
		let _localctx: StatementSeparatorsContext = new StatementSeparatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CanonParser.RULE_statementSeparators);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 152;
					this.statementSeparator();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 155;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public topLevelStatement(): TopLevelStatementContext {
		let _localctx: TopLevelStatementContext = new TopLevelStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CanonParser.RULE_topLevelStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this.topLevelElement();
			this.state = 163;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE || _la === CanonParser.SEMICOLON) {
				{
				{
				this.state = 158;
				this.statementSeparators();
				this.state = 159;
				this.topLevelElement();
				}
				}
				this.state = 165;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public topLevelElement(): TopLevelElementContext {
		let _localctx: TopLevelElementContext = new TopLevelElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CanonParser.RULE_topLevelElement);
		try {
			this.state = 175;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 166;
				this.schemaDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 167;
				this.structDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 168;
				this.unionDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 169;
				this.typeDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 170;
				this.variableDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 171;
				this.functionDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 172;
				this.assignmentStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 173;
				this.destructuringAssignment();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 174;
				this.callExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public schemaDeclaration(): SchemaDeclarationContext {
		let _localctx: SchemaDeclarationContext = new SchemaDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CanonParser.RULE_schemaDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 177;
				this.annotation();
				}
				}
				this.state = 182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 183;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 188;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 189;
			this.match(CanonParser.SCHEMA);
			this.state = 192;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.LBRACE:
				{
				this.state = 190;
				this.block();
				}
				break;
			case CanonParser.STRING_LITERAL:
			case CanonParser.DOUBLE_STRING_LITERAL:
			case CanonParser.TEMPLATE_STRING_START:
				{
				this.state = 191;
				this.stringLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structDeclaration(): StructDeclarationContext {
		let _localctx: StructDeclarationContext = new StructDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CanonParser.RULE_structDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 194;
				this.annotation();
				}
				}
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 200;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 206;
			this.match(CanonParser.STRUCT);
			this.state = 207;
			this.match(CanonParser.IDENTIFIER);
			this.state = 208;
			this.structBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unionDeclaration(): UnionDeclarationContext {
		let _localctx: UnionDeclarationContext = new UnionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CanonParser.RULE_unionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 210;
				this.annotation();
				}
				}
				this.state = 215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 216;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 221;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 222;
			this.match(CanonParser.UNION);
			this.state = 223;
			this.match(CanonParser.IDENTIFIER);
			this.state = 224;
			this.match(CanonParser.ASSIGN);
			this.state = 225;
			this.unionType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDeclaration(): TypeDeclarationContext {
		let _localctx: TypeDeclarationContext = new TypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CanonParser.RULE_typeDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 227;
				this.annotation();
				}
				}
				this.state = 232;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 236;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 233;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 238;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 239;
			this.match(CanonParser.TYPE);
			this.state = 240;
			this.match(CanonParser.IDENTIFIER);
			this.state = 241;
			this.match(CanonParser.ASSIGN);
			this.state = 242;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CanonParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 244;
				this.annotation();
				}
				}
				this.state = 249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 250;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 255;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 264;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.INFIX:
				{
				this.state = 256;
				this.match(CanonParser.INFIX);
				this.state = 257;
				this.match(CanonParser.FUN);
				this.state = 258;
				this.type();
				this.state = 259;
				this.match(CanonParser.DOT);
				this.state = 260;
				this.match(CanonParser.IDENTIFIER);
				}
				break;
			case CanonParser.FUN:
				{
				this.state = 262;
				this.match(CanonParser.FUN);
				this.state = 263;
				this.match(CanonParser.IDENTIFIER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 266;
			this.match(CanonParser.LPAREN);
			this.state = 268;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.THIS || _la === CanonParser.IDENTIFIER) {
				{
				this.state = 267;
				this.parameterList();
				}
			}

			this.state = 270;
			this.match(CanonParser.RPAREN);
			this.state = 273;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 271;
				this.match(CanonParser.COLON);
				this.state = 272;
				this.type();
				}
			}

			this.state = 275;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CanonParser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 280;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 277;
				this.annotation();
				}
				}
				this.state = 282;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 286;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 283;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 288;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 289;
			_la = this._input.LA(1);
			if (!(_la === CanonParser.VAL || _la === CanonParser.VAR)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 290;
			this.match(CanonParser.IDENTIFIER);
			this.state = 293;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 291;
				this.match(CanonParser.COLON);
				this.state = 292;
				this.type();
				}
			}

			this.state = 295;
			this.match(CanonParser.ASSIGN);
			this.state = 296;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unionType(): UnionTypeContext {
		let _localctx: UnionTypeContext = new UnionTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CanonParser.RULE_unionType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 298;
			this.type();
			this.state = 303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.BIT_OR) {
				{
				{
				this.state = 299;
				this.match(CanonParser.BIT_OR);
				this.state = 300;
				this.type();
				}
				}
				this.state = 305;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, CanonParser.RULE_type);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 306;
			this.baseType();
			this.state = 311;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 307;
					this.match(CanonParser.LBRACKET);
					this.state = 308;
					this.match(CanonParser.RBRACKET);
					}
					}
				}
				this.state = 313;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			}
			this.state = 315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.QUESTION) {
				{
				this.state = 314;
				this.match(CanonParser.QUESTION);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public baseType(): BaseTypeContext {
		let _localctx: BaseTypeContext = new BaseTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CanonParser.RULE_baseType);
		try {
			this.state = 319;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.STRING_TYPE:
			case CanonParser.INT_TYPE:
			case CanonParser.FLOAT_TYPE:
			case CanonParser.BOOL_TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 317;
				this.primitiveType();
				}
				break;
			case CanonParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 318;
				this.match(CanonParser.IDENTIFIER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primitiveType(): PrimitiveTypeContext {
		let _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CanonParser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 321;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.STRING_TYPE) | (1 << CanonParser.INT_TYPE) | (1 << CanonParser.FLOAT_TYPE) | (1 << CanonParser.BOOL_TYPE))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CanonParser.RULE_block);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 323;
			this.match(CanonParser.LBRACE);
			this.state = 327;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 324;
					this.match(CanonParser.NEWLINE);
					}
					}
				}
				this.state = 329;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			}
			this.state = 341;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 330;
					this.statement();
					this.state = 336;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 331;
							this.statementSeparators();
							this.state = 332;
							this.statement();
							}
							}
						}
						this.state = 338;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
					}
					}
					}
				}
				this.state = 343;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			}
			this.state = 347;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 344;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 349;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 350;
			this.match(CanonParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structBody(): StructBodyContext {
		let _localctx: StructBodyContext = new StructBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CanonParser.RULE_structBody);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			this.match(CanonParser.LBRACE);
			this.state = 356;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 353;
					this.match(CanonParser.NEWLINE);
					}
					}
				}
				this.state = 358;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			}
			this.state = 370;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 359;
					this.structMember();
					this.state = 365;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 360;
							this.statementSeparators();
							this.state = 361;
							this.structMember();
							}
							}
						}
						this.state = 367;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
					}
					}
					}
				}
				this.state = 372;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			}
			this.state = 376;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 373;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 378;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 379;
			this.match(CanonParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structMember(): StructMemberContext {
		let _localctx: StructMemberContext = new StructMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CanonParser.RULE_structMember);
		try {
			this.state = 386;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 381;
				this.propertyDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 382;
				this.initDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 383;
				this.getterDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 384;
				this.methodDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 385;
				this.repeatedDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CanonParser.RULE_statement);
		try {
			this.state = 396;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 388;
				this.assignmentStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 389;
				this.expressionStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 390;
				this.propertyDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 391;
				this.initDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 392;
				this.getterDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 393;
				this.methodDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 394;
				this.repeatedDeclaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 395;
				this.variableDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CanonParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 398;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyDeclaration(): PropertyDeclarationContext {
		let _localctx: PropertyDeclarationContext = new PropertyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, CanonParser.RULE_propertyDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 400;
				this.annotation();
				}
				}
				this.state = 405;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 409;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 406;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 411;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 413;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.PRIVATE) {
				{
				this.state = 412;
				this.match(CanonParser.PRIVATE);
				}
			}

			this.state = 415;
			this.match(CanonParser.IDENTIFIER);
			this.state = 425;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON || _la === CanonParser.QUESTION) {
				{
				this.state = 417;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.QUESTION) {
					{
					this.state = 416;
					this.match(CanonParser.QUESTION);
					}
				}

				this.state = 419;
				this.match(CanonParser.COLON);
				this.state = 420;
				this.type();
				this.state = 423;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.ASSIGN) {
					{
					this.state = 421;
					this.match(CanonParser.ASSIGN);
					this.state = 422;
					this.expression(0);
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentStatement(): AssignmentStatementContext {
		let _localctx: AssignmentStatementContext = new AssignmentStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CanonParser.RULE_assignmentStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 429;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.THIS) {
				{
				this.state = 427;
				this.match(CanonParser.THIS);
				this.state = 428;
				this.match(CanonParser.DOT);
				}
			}

			this.state = 431;
			this.match(CanonParser.IDENTIFIER);
			this.state = 432;
			_la = this._input.LA(1);
			if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (CanonParser.ASSIGN - 40)) | (1 << (CanonParser.PLUS_ASSIGN - 40)) | (1 << (CanonParser.MINUS_ASSIGN - 40)) | (1 << (CanonParser.MULTIPLY_ASSIGN - 40)) | (1 << (CanonParser.DIVIDE_ASSIGN - 40)) | (1 << (CanonParser.MODULO_ASSIGN - 40)) | (1 << (CanonParser.POWER_ASSIGN - 40)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 433;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public destructuringAssignment(): DestructuringAssignmentContext {
		let _localctx: DestructuringAssignmentContext = new DestructuringAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, CanonParser.RULE_destructuringAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 435;
			this.destructuringPattern();
			this.state = 436;
			this.match(CanonParser.ASSIGN);
			this.state = 437;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public destructuringPattern(): DestructuringPatternContext {
		let _localctx: DestructuringPatternContext = new DestructuringPatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CanonParser.RULE_destructuringPattern);
		try {
			this.state = 441;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.LBRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 439;
				this.arrayDestructuringPattern();
				}
				break;
			case CanonParser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 440;
				this.objectDestructuringPattern();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayDestructuringPattern(): ArrayDestructuringPatternContext {
		let _localctx: ArrayDestructuringPatternContext = new ArrayDestructuringPatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, CanonParser.RULE_arrayDestructuringPattern);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 443;
			this.match(CanonParser.LBRACKET);
			this.state = 444;
			this.destructuringElement();
			this.state = 449;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.COMMA) {
				{
				{
				this.state = 445;
				this.match(CanonParser.COMMA);
				this.state = 446;
				this.destructuringElement();
				}
				}
				this.state = 451;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 452;
			this.match(CanonParser.RBRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectDestructuringPattern(): ObjectDestructuringPatternContext {
		let _localctx: ObjectDestructuringPatternContext = new ObjectDestructuringPatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, CanonParser.RULE_objectDestructuringPattern);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 454;
			this.match(CanonParser.LBRACE);
			this.state = 455;
			this.destructuringProperty();
			this.state = 460;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.COMMA) {
				{
				{
				this.state = 456;
				this.match(CanonParser.COMMA);
				this.state = 457;
				this.destructuringProperty();
				}
				}
				this.state = 462;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 463;
			this.match(CanonParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public destructuringElement(): DestructuringElementContext {
		let _localctx: DestructuringElementContext = new DestructuringElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, CanonParser.RULE_destructuringElement);
		let _la: number;
		try {
			this.state = 473;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 465;
				this.match(CanonParser.IDENTIFIER);
				this.state = 468;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.ASSIGN) {
					{
					this.state = 466;
					this.match(CanonParser.ASSIGN);
					this.state = 467;
					this.expression(0);
					}
				}

				}
				break;
			case CanonParser.LBRACE:
			case CanonParser.LBRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 470;
				this.destructuringPattern();
				}
				break;
			case CanonParser.SPREAD:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 471;
				this.match(CanonParser.SPREAD);
				this.state = 472;
				this.match(CanonParser.IDENTIFIER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public destructuringProperty(): DestructuringPropertyContext {
		let _localctx: DestructuringPropertyContext = new DestructuringPropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, CanonParser.RULE_destructuringProperty);
		let _la: number;
		try {
			this.state = 487;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 475;
				this.match(CanonParser.IDENTIFIER);
				this.state = 478;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.ASSIGN) {
					{
					this.state = 476;
					this.match(CanonParser.ASSIGN);
					this.state = 477;
					this.expression(0);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 480;
				this.match(CanonParser.IDENTIFIER);
				this.state = 481;
				this.match(CanonParser.COLON);
				this.state = 482;
				this.match(CanonParser.IDENTIFIER);
				this.state = 485;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.ASSIGN) {
					{
					this.state = 483;
					this.match(CanonParser.ASSIGN);
					this.state = 484;
					this.expression(0);
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initDeclaration(): InitDeclarationContext {
		let _localctx: InitDeclarationContext = new InitDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, CanonParser.RULE_initDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 492;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 489;
				this.annotation();
				}
				}
				this.state = 494;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 495;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 500;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 501;
			this.match(CanonParser.INIT);
			this.state = 507;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.LPAREN) {
				{
				this.state = 502;
				this.match(CanonParser.LPAREN);
				this.state = 504;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.THIS || _la === CanonParser.IDENTIFIER) {
					{
					this.state = 503;
					this.parameterList();
					}
				}

				this.state = 506;
				this.match(CanonParser.RPAREN);
				}
			}

			this.state = 509;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public getterDeclaration(): GetterDeclarationContext {
		let _localctx: GetterDeclarationContext = new GetterDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, CanonParser.RULE_getterDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 514;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 511;
				this.annotation();
				}
				}
				this.state = 516;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 520;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 517;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 522;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 523;
			this.match(CanonParser.GET);
			this.state = 524;
			this.match(CanonParser.IDENTIFIER);
			this.state = 525;
			this.match(CanonParser.LPAREN);
			this.state = 526;
			this.match(CanonParser.RPAREN);
			this.state = 529;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 527;
				this.match(CanonParser.COLON);
				this.state = 528;
				this.type();
				}
			}

			this.state = 531;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodDeclaration(): MethodDeclarationContext {
		let _localctx: MethodDeclarationContext = new MethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, CanonParser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 536;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 533;
				this.annotation();
				}
				}
				this.state = 538;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 542;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 539;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 544;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 546;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.PRIVATE) {
				{
				this.state = 545;
				this.match(CanonParser.PRIVATE);
				}
			}

			this.state = 548;
			this.match(CanonParser.FUN);
			this.state = 549;
			this.match(CanonParser.IDENTIFIER);
			this.state = 550;
			this.match(CanonParser.LPAREN);
			this.state = 552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.THIS || _la === CanonParser.IDENTIFIER) {
				{
				this.state = 551;
				this.parameterList();
				}
			}

			this.state = 554;
			this.match(CanonParser.RPAREN);
			this.state = 557;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 555;
				this.match(CanonParser.COLON);
				this.state = 556;
				this.type();
				}
			}

			this.state = 559;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public repeatedDeclaration(): RepeatedDeclarationContext {
		let _localctx: RepeatedDeclarationContext = new RepeatedDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, CanonParser.RULE_repeatedDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 564;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 561;
				this.annotation();
				}
				}
				this.state = 566;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 570;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 567;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 572;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 573;
			this.match(CanonParser.REPEATED);
			this.state = 574;
			this.match(CanonParser.IDENTIFIER);
			this.state = 575;
			this.match(CanonParser.COLON);
			this.state = 576;
			this.type();
			this.state = 578;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				{
				this.state = 577;
				this.mappingBlock();
				}
				break;
			}
			this.state = 582;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.ASSIGN) {
				{
				this.state = 580;
				this.match(CanonParser.ASSIGN);
				this.state = 581;
				this.expression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mappingBlock(): MappingBlockContext {
		let _localctx: MappingBlockContext = new MappingBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, CanonParser.RULE_mappingBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 584;
			this.match(CanonParser.LBRACE);
			this.state = 588;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 585;
					this.match(CanonParser.NEWLINE);
					}
					}
				}
				this.state = 590;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
			}
			this.state = 600;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.IDENTIFIER) {
				{
				this.state = 591;
				this.mappingEntry();
				this.state = 597;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 592;
						this.statementSeparators();
						this.state = 593;
						this.mappingEntry();
						}
						}
					}
					this.state = 599;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
				}
				}
			}

			this.state = 605;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 602;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 607;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 608;
			this.match(CanonParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mappingEntry(): MappingEntryContext {
		let _localctx: MappingEntryContext = new MappingEntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, CanonParser.RULE_mappingEntry);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 610;
			this.match(CanonParser.IDENTIFIER);
			this.state = 611;
			this.match(CanonParser.ARROW);
			this.state = 612;
			this.match(CanonParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, CanonParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 614;
			this.parameter();
			this.state = 619;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.COMMA) {
				{
				{
				this.state = 615;
				this.match(CanonParser.COMMA);
				this.state = 616;
				this.parameter();
				}
				}
				this.state = 621;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, CanonParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 624;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.THIS) {
				{
				this.state = 622;
				this.match(CanonParser.THIS);
				this.state = 623;
				this.match(CanonParser.DOT);
				}
			}

			this.state = 626;
			this.match(CanonParser.IDENTIFIER);
			this.state = 629;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 627;
				this.match(CanonParser.COLON);
				this.state = 628;
				this.type();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callExpression(): CallExpressionContext {
		let _localctx: CallExpressionContext = new CallExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, CanonParser.RULE_callExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 631;
			this.match(CanonParser.IDENTIFIER);
			this.state = 637;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				{
				this.state = 632;
				this.match(CanonParser.LPAREN);
				this.state = 634;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.FUN) | (1 << CanonParser.STRING_TYPE) | (1 << CanonParser.INT_TYPE) | (1 << CanonParser.FLOAT_TYPE) | (1 << CanonParser.BOOL_TYPE) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (CanonParser.BIT_NOT - 53)) | (1 << (CanonParser.SPREAD - 53)) | (1 << (CanonParser.LBRACE - 53)) | (1 << (CanonParser.LPAREN - 53)) | (1 << (CanonParser.LBRACKET - 53)) | (1 << (CanonParser.STRING_LITERAL - 53)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 53)) | (1 << (CanonParser.TEMPLATE_STRING_START - 53)) | (1 << (CanonParser.INTEGER_LITERAL - 53)) | (1 << (CanonParser.TRUE - 53)) | (1 << (CanonParser.FALSE - 53)) | (1 << (CanonParser.IDENTIFIER - 53)))) !== 0)) {
					{
					this.state = 633;
					this.argumentList();
					}
				}

				this.state = 636;
				this.match(CanonParser.RPAREN);
				}
				break;
			}
			this.state = 640;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				{
				this.state = 639;
				this.block();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, CanonParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 642;
			this.expression(0);
			this.state = 647;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.COMMA) {
				{
				{
				this.state = 643;
				this.match(CanonParser.COMMA);
				this.state = 644;
				this.expression(0);
				}
				}
				this.state = 649;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 82;
		this.enterRecursionRule(_localctx, 82, CanonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 678;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.IF:
			case CanonParser.THIS:
			case CanonParser.FUN:
			case CanonParser.SPREAD:
			case CanonParser.LBRACE:
			case CanonParser.LPAREN:
			case CanonParser.LBRACKET:
			case CanonParser.STRING_LITERAL:
			case CanonParser.DOUBLE_STRING_LITERAL:
			case CanonParser.TEMPLATE_STRING_START:
			case CanonParser.INTEGER_LITERAL:
			case CanonParser.TRUE:
			case CanonParser.FALSE:
			case CanonParser.IDENTIFIER:
				{
				_localctx = new PrimaryExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 651;
				this.primary();
				}
				break;
			case CanonParser.MINUS:
				{
				_localctx = new UnaryMinusExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 652;
				this.match(CanonParser.MINUS);
				this.state = 653;
				this.expression(26);
				}
				break;
			case CanonParser.NOT:
				{
				_localctx = new LogicalNotExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 654;
				this.match(CanonParser.NOT);
				this.state = 655;
				this.expression(25);
				}
				break;
			case CanonParser.BIT_NOT:
				{
				_localctx = new BitwiseNotExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 656;
				this.match(CanonParser.BIT_NOT);
				this.state = 657;
				this.expression(24);
				}
				break;
			case CanonParser.INT_TYPE:
				{
				_localctx = new TypeCastExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 658;
				this.match(CanonParser.INT_TYPE);
				this.state = 659;
				this.match(CanonParser.LPAREN);
				this.state = 660;
				this.expression(0);
				this.state = 661;
				this.match(CanonParser.RPAREN);
				}
				break;
			case CanonParser.FLOAT_TYPE:
				{
				_localctx = new TypeCastExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 663;
				this.match(CanonParser.FLOAT_TYPE);
				this.state = 664;
				this.match(CanonParser.LPAREN);
				this.state = 665;
				this.expression(0);
				this.state = 666;
				this.match(CanonParser.RPAREN);
				}
				break;
			case CanonParser.STRING_TYPE:
				{
				_localctx = new TypeCastExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 668;
				this.match(CanonParser.STRING_TYPE);
				this.state = 669;
				this.match(CanonParser.LPAREN);
				this.state = 670;
				this.expression(0);
				this.state = 671;
				this.match(CanonParser.RPAREN);
				}
				break;
			case CanonParser.BOOL_TYPE:
				{
				_localctx = new TypeCastExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 673;
				this.match(CanonParser.BOOL_TYPE);
				this.state = 674;
				this.match(CanonParser.LPAREN);
				this.state = 675;
				this.expression(0);
				this.state = 676;
				this.match(CanonParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 750;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 748;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
					case 1:
						{
						_localctx = new PowerExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 680;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 681;
						this.match(CanonParser.POWER);
						this.state = 682;
						this.expression(15);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 683;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 684;
						(_localctx as MulDivModExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (CanonParser.MULTIPLY - 30)) | (1 << (CanonParser.DIVIDE - 30)) | (1 << (CanonParser.MODULO - 30)))) !== 0))) {
							(_localctx as MulDivModExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 685;
						this.expression(14);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 686;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 687;
						(_localctx as AddSubExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CanonParser.PLUS || _la === CanonParser.MINUS)) {
							(_localctx as AddSubExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 688;
						this.expression(13);
						}
						break;

					case 4:
						{
						_localctx = new RangeExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 689;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 690;
						(_localctx as RangeExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CanonParser.RANGE_INCLUSIVE || _la === CanonParser.RANGE)) {
							(_localctx as RangeExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 691;
						this.expression(12);
						}
						break;

					case 5:
						{
						_localctx = new InfixCallExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 692;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 693;
						this.match(CanonParser.IDENTIFIER);
						this.state = 694;
						this.expression(11);
						}
						break;

					case 6:
						{
						_localctx = new ShiftExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 695;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 696;
						(_localctx as ShiftExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CanonParser.LEFT_SHIFT || _la === CanonParser.RIGHT_SHIFT)) {
							(_localctx as ShiftExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 697;
						this.expression(10);
						}
						break;

					case 7:
						{
						_localctx = new RelationalExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 698;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 699;
						(_localctx as RelationalExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (CanonParser.LESS_THAN - 36)) | (1 << (CanonParser.GREATER_THAN - 36)) | (1 << (CanonParser.LESS_EQUALS - 36)) | (1 << (CanonParser.GREATER_EQUALS - 36)))) !== 0))) {
							(_localctx as RelationalExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 700;
						this.expression(9);
						}
						break;

					case 8:
						{
						_localctx = new EqualityExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 701;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 702;
						(_localctx as EqualityExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CanonParser.EQUALS || _la === CanonParser.NOT_EQUALS)) {
							(_localctx as EqualityExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 703;
						this.expression(8);
						}
						break;

					case 9:
						{
						_localctx = new BitwiseAndExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 704;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 705;
						this.match(CanonParser.BIT_AND);
						this.state = 706;
						this.expression(7);
						}
						break;

					case 10:
						{
						_localctx = new BitwiseXorExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 707;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 708;
						this.match(CanonParser.BIT_XOR);
						this.state = 709;
						this.expression(6);
						}
						break;

					case 11:
						{
						_localctx = new BitwiseOrExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 710;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 711;
						this.match(CanonParser.BIT_OR);
						this.state = 712;
						this.expression(5);
						}
						break;

					case 12:
						{
						_localctx = new LogicalAndExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 713;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 714;
						this.match(CanonParser.LOGICAL_AND);
						this.state = 715;
						this.expression(4);
						}
						break;

					case 13:
						{
						_localctx = new LogicalOrExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 716;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 717;
						this.match(CanonParser.LOGICAL_OR);
						this.state = 718;
						this.expression(3);
						}
						break;

					case 14:
						{
						_localctx = new PipelineExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 719;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 720;
						this.match(CanonParser.PIPELINE);
						this.state = 721;
						this.expression(2);
						}
						break;

					case 15:
						{
						_localctx = new MemberAccessExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 722;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 723;
						this.match(CanonParser.DOT);
						this.state = 724;
						this.match(CanonParser.IDENTIFIER);
						}
						break;

					case 16:
						{
						_localctx = new IndexAccessExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 725;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 726;
						this.match(CanonParser.LBRACKET);
						this.state = 727;
						this.expression(0);
						this.state = 728;
						this.match(CanonParser.RBRACKET);
						}
						break;

					case 17:
						{
						_localctx = new SliceExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 730;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 731;
						this.match(CanonParser.LBRACKET);
						this.state = 733;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.FUN) | (1 << CanonParser.STRING_TYPE) | (1 << CanonParser.INT_TYPE) | (1 << CanonParser.FLOAT_TYPE) | (1 << CanonParser.BOOL_TYPE) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (CanonParser.BIT_NOT - 53)) | (1 << (CanonParser.SPREAD - 53)) | (1 << (CanonParser.LBRACE - 53)) | (1 << (CanonParser.LPAREN - 53)) | (1 << (CanonParser.LBRACKET - 53)) | (1 << (CanonParser.STRING_LITERAL - 53)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 53)) | (1 << (CanonParser.TEMPLATE_STRING_START - 53)) | (1 << (CanonParser.INTEGER_LITERAL - 53)) | (1 << (CanonParser.TRUE - 53)) | (1 << (CanonParser.FALSE - 53)) | (1 << (CanonParser.IDENTIFIER - 53)))) !== 0)) {
							{
							this.state = 732;
							this.expression(0);
							}
						}

						this.state = 735;
						this.match(CanonParser.RANGE);
						this.state = 737;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.FUN) | (1 << CanonParser.STRING_TYPE) | (1 << CanonParser.INT_TYPE) | (1 << CanonParser.FLOAT_TYPE) | (1 << CanonParser.BOOL_TYPE) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (CanonParser.BIT_NOT - 53)) | (1 << (CanonParser.SPREAD - 53)) | (1 << (CanonParser.LBRACE - 53)) | (1 << (CanonParser.LPAREN - 53)) | (1 << (CanonParser.LBRACKET - 53)) | (1 << (CanonParser.STRING_LITERAL - 53)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 53)) | (1 << (CanonParser.TEMPLATE_STRING_START - 53)) | (1 << (CanonParser.INTEGER_LITERAL - 53)) | (1 << (CanonParser.TRUE - 53)) | (1 << (CanonParser.FALSE - 53)) | (1 << (CanonParser.IDENTIFIER - 53)))) !== 0)) {
							{
							this.state = 736;
							this.expression(0);
							}
						}

						this.state = 739;
						this.match(CanonParser.RBRACKET);
						}
						break;

					case 18:
						{
						_localctx = new FuncCallExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 740;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 741;
						this.match(CanonParser.LPAREN);
						this.state = 743;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.FUN) | (1 << CanonParser.STRING_TYPE) | (1 << CanonParser.INT_TYPE) | (1 << CanonParser.FLOAT_TYPE) | (1 << CanonParser.BOOL_TYPE) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (CanonParser.BIT_NOT - 53)) | (1 << (CanonParser.SPREAD - 53)) | (1 << (CanonParser.LBRACE - 53)) | (1 << (CanonParser.LPAREN - 53)) | (1 << (CanonParser.LBRACKET - 53)) | (1 << (CanonParser.STRING_LITERAL - 53)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 53)) | (1 << (CanonParser.TEMPLATE_STRING_START - 53)) | (1 << (CanonParser.INTEGER_LITERAL - 53)) | (1 << (CanonParser.TRUE - 53)) | (1 << (CanonParser.FALSE - 53)) | (1 << (CanonParser.IDENTIFIER - 53)))) !== 0)) {
							{
							this.state = 742;
							this.argumentList();
							}
						}

						this.state = 745;
						this.match(CanonParser.RPAREN);
						}
						break;

					case 19:
						{
						_localctx = new NonNullAssertExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 746;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 747;
						this.match(CanonParser.EXCLAMATION);
						}
						break;
					}
					}
				}
				this.state = 752;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, CanonParser.RULE_primary);
		try {
			this.state = 780;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				_localctx = new LiteralExprContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 753;
				this.literal();
				}
				break;

			case 2:
				_localctx = new ListLiteralExprContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 754;
				this.listLiteral();
				}
				break;

			case 3:
				_localctx = new LambdaExprContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 755;
				this.lambdaExpression();
				}
				break;

			case 4:
				_localctx = new AnonFuncExprContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 756;
				this.anonymousFunction();
				}
				break;

			case 5:
				_localctx = new SpreadExprContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 757;
				this.spreadExpression();
				}
				break;

			case 6:
				_localctx = new IdentifierExprContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 758;
				this.match(CanonParser.IDENTIFIER);
				}
				break;

			case 7:
				_localctx = new ThisExprContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 759;
				this.match(CanonParser.THIS);
				}
				break;

			case 8:
				_localctx = new IfExprContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 760;
				this.match(CanonParser.IF);
				this.state = 761;
				this.match(CanonParser.LPAREN);
				this.state = 762;
				this.expression(0);
				this.state = 763;
				this.match(CanonParser.RPAREN);
				this.state = 766;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
				case 1:
					{
					this.state = 764;
					this.expression(0);
					}
					break;

				case 2:
					{
					this.state = 765;
					this.block();
					}
					break;
				}
				this.state = 773;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
				case 1:
					{
					this.state = 768;
					this.match(CanonParser.ELSE);
					this.state = 771;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
					case 1:
						{
						this.state = 769;
						this.expression(0);
						}
						break;

					case 2:
						{
						this.state = 770;
						this.block();
						}
						break;
					}
					}
					break;
				}
				}
				break;

			case 9:
				_localctx = new ParenExprContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 775;
				this.match(CanonParser.LPAREN);
				this.state = 776;
				this.expression(0);
				this.state = 777;
				this.match(CanonParser.RPAREN);
				}
				break;

			case 10:
				_localctx = new CallExprPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 779;
				this.callExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, CanonParser.RULE_literal);
		try {
			this.state = 786;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.STRING_LITERAL:
			case CanonParser.DOUBLE_STRING_LITERAL:
			case CanonParser.TEMPLATE_STRING_START:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 782;
				this.stringLiteral();
				}
				break;
			case CanonParser.INTEGER_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 783;
				this.match(CanonParser.INTEGER_LITERAL);
				}
				break;
			case CanonParser.TRUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 784;
				this.match(CanonParser.TRUE);
				}
				break;
			case CanonParser.FALSE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 785;
				this.match(CanonParser.FALSE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		let _localctx: StringLiteralContext = new StringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, CanonParser.RULE_stringLiteral);
		try {
			this.state = 791;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 788;
				this.match(CanonParser.STRING_LITERAL);
				}
				break;
			case CanonParser.DOUBLE_STRING_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 789;
				this.match(CanonParser.DOUBLE_STRING_LITERAL);
				}
				break;
			case CanonParser.TEMPLATE_STRING_START:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 790;
				this.templateString();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateString(): TemplateStringContext {
		let _localctx: TemplateStringContext = new TemplateStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, CanonParser.RULE_templateString);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 793;
			this.match(CanonParser.TEMPLATE_STRING_START);
			this.state = 797;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (CanonParser.TEMPLATE_STRING_PART - 81)) | (1 << (CanonParser.TEMPLATE_INTERPOLATION_START - 81)) | (1 << (CanonParser.TEMPLATE_INTERPOLATION_SIMPLE - 81)))) !== 0)) {
				{
				{
				this.state = 794;
				this.templateStringContent();
				}
				}
				this.state = 799;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 800;
			this.match(CanonParser.TEMPLATE_STRING_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateStringContent(): TemplateStringContentContext {
		let _localctx: TemplateStringContentContext = new TemplateStringContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, CanonParser.RULE_templateStringContent);
		try {
			this.state = 808;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.TEMPLATE_STRING_PART:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 802;
				this.match(CanonParser.TEMPLATE_STRING_PART);
				}
				break;
			case CanonParser.TEMPLATE_INTERPOLATION_SIMPLE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 803;
				this.match(CanonParser.TEMPLATE_INTERPOLATION_SIMPLE);
				}
				break;
			case CanonParser.TEMPLATE_INTERPOLATION_START:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 804;
				this.match(CanonParser.TEMPLATE_INTERPOLATION_START);
				this.state = 805;
				this.expression(0);
				this.state = 806;
				this.match(CanonParser.INTERPOLATION_END);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, CanonParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 810;
			this.match(CanonParser.ANNOTATION);
			this.state = 817;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.LPAREN:
				{
				this.state = 811;
				this.match(CanonParser.LPAREN);
				this.state = 813;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.FUN) | (1 << CanonParser.STRING_TYPE) | (1 << CanonParser.INT_TYPE) | (1 << CanonParser.FLOAT_TYPE) | (1 << CanonParser.BOOL_TYPE) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (CanonParser.BIT_NOT - 53)) | (1 << (CanonParser.SPREAD - 53)) | (1 << (CanonParser.LBRACE - 53)) | (1 << (CanonParser.LPAREN - 53)) | (1 << (CanonParser.LBRACKET - 53)) | (1 << (CanonParser.STRING_LITERAL - 53)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 53)) | (1 << (CanonParser.TEMPLATE_STRING_START - 53)) | (1 << (CanonParser.INTEGER_LITERAL - 53)) | (1 << (CanonParser.TRUE - 53)) | (1 << (CanonParser.FALSE - 53)) | (1 << (CanonParser.IDENTIFIER - 53)))) !== 0)) {
					{
					this.state = 812;
					this.argumentList();
					}
				}

				this.state = 815;
				this.match(CanonParser.RPAREN);
				}
				break;
			case CanonParser.STRING_LITERAL:
			case CanonParser.DOUBLE_STRING_LITERAL:
			case CanonParser.TEMPLATE_STRING_START:
				{
				this.state = 816;
				this.stringLiteral();
				}
				break;
			case CanonParser.NEWLINE:
			case CanonParser.SCHEMA:
			case CanonParser.STRUCT:
			case CanonParser.UNION:
			case CanonParser.TYPE:
			case CanonParser.INIT:
			case CanonParser.PRIVATE:
			case CanonParser.GET:
			case CanonParser.REPEATED:
			case CanonParser.VAL:
			case CanonParser.VAR:
			case CanonParser.FUN:
			case CanonParser.INFIX:
			case CanonParser.ANNOTATION:
			case CanonParser.IDENTIFIER:
				break;
			default:
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public listLiteral(): ListLiteralContext {
		let _localctx: ListLiteralContext = new ListLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, CanonParser.RULE_listLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 819;
			this.match(CanonParser.LBRACKET);
			this.state = 828;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.FUN) | (1 << CanonParser.STRING_TYPE) | (1 << CanonParser.INT_TYPE) | (1 << CanonParser.FLOAT_TYPE) | (1 << CanonParser.BOOL_TYPE) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (CanonParser.BIT_NOT - 53)) | (1 << (CanonParser.SPREAD - 53)) | (1 << (CanonParser.LBRACE - 53)) | (1 << (CanonParser.LPAREN - 53)) | (1 << (CanonParser.LBRACKET - 53)) | (1 << (CanonParser.STRING_LITERAL - 53)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 53)) | (1 << (CanonParser.TEMPLATE_STRING_START - 53)) | (1 << (CanonParser.INTEGER_LITERAL - 53)) | (1 << (CanonParser.TRUE - 53)) | (1 << (CanonParser.FALSE - 53)) | (1 << (CanonParser.IDENTIFIER - 53)))) !== 0)) {
				{
				this.state = 820;
				this.expression(0);
				this.state = 825;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CanonParser.COMMA) {
					{
					{
					this.state = 821;
					this.match(CanonParser.COMMA);
					this.state = 822;
					this.expression(0);
					}
					}
					this.state = 827;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 830;
			this.match(CanonParser.RBRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaExpression(): LambdaExpressionContext {
		let _localctx: LambdaExpressionContext = new LambdaExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, CanonParser.RULE_lambdaExpression);
		try {
			this.state = 857;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 832;
				this.match(CanonParser.LBRACE);
				this.state = 833;
				this.match(CanonParser.RBRACE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 834;
				this.match(CanonParser.LBRACE);
				this.state = 835;
				this.match(CanonParser.ARROW);
				this.state = 836;
				this.match(CanonParser.RBRACE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 837;
				this.match(CanonParser.LBRACE);
				this.state = 838;
				this.match(CanonParser.ARROW);
				this.state = 839;
				this.lambdaBody();
				this.state = 840;
				this.match(CanonParser.RBRACE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 842;
				this.match(CanonParser.LBRACE);
				this.state = 843;
				this.lambdaParameters();
				this.state = 844;
				this.match(CanonParser.ARROW);
				this.state = 845;
				this.match(CanonParser.RBRACE);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 847;
				this.match(CanonParser.LBRACE);
				this.state = 848;
				this.lambdaParameters();
				this.state = 849;
				this.match(CanonParser.ARROW);
				this.state = 850;
				this.lambdaBody();
				this.state = 851;
				this.match(CanonParser.RBRACE);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 853;
				this.match(CanonParser.LBRACE);
				this.state = 854;
				this.lambdaBody();
				this.state = 855;
				this.match(CanonParser.RBRACE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaParameters(): LambdaParametersContext {
		let _localctx: LambdaParametersContext = new LambdaParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, CanonParser.RULE_lambdaParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 859;
			this.lambdaParameter();
			this.state = 864;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.COMMA) {
				{
				{
				this.state = 860;
				this.match(CanonParser.COMMA);
				this.state = 861;
				this.lambdaParameter();
				}
				}
				this.state = 866;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaParameter(): LambdaParameterContext {
		let _localctx: LambdaParameterContext = new LambdaParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, CanonParser.RULE_lambdaParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 867;
			this.match(CanonParser.IDENTIFIER);
			this.state = 870;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 868;
				this.match(CanonParser.COLON);
				this.state = 869;
				this.type();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaBody(): LambdaBodyContext {
		let _localctx: LambdaBodyContext = new LambdaBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, CanonParser.RULE_lambdaBody);
		let _la: number;
		try {
			this.state = 885;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 872;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 881;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 873;
					this.statement();
					this.state = 878;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CanonParser.SEMICOLON) {
						{
						{
						this.state = 874;
						this.match(CanonParser.SEMICOLON);
						this.state = 875;
						this.statement();
						}
						}
						this.state = 880;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 883;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.NEWLINE) | (1 << CanonParser.INIT) | (1 << CanonParser.PRIVATE) | (1 << CanonParser.GET) | (1 << CanonParser.REPEATED) | (1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.VAL) | (1 << CanonParser.VAR) | (1 << CanonParser.FUN) | (1 << CanonParser.STRING_TYPE) | (1 << CanonParser.INT_TYPE) | (1 << CanonParser.FLOAT_TYPE) | (1 << CanonParser.BOOL_TYPE) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (CanonParser.BIT_NOT - 53)) | (1 << (CanonParser.SPREAD - 53)) | (1 << (CanonParser.LBRACE - 53)) | (1 << (CanonParser.LPAREN - 53)) | (1 << (CanonParser.LBRACKET - 53)) | (1 << (CanonParser.STRING_LITERAL - 53)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 53)) | (1 << (CanonParser.TEMPLATE_STRING_START - 53)) | (1 << (CanonParser.INTEGER_LITERAL - 53)) | (1 << (CanonParser.TRUE - 53)) | (1 << (CanonParser.FALSE - 53)) | (1 << (CanonParser.ANNOTATION - 53)) | (1 << (CanonParser.IDENTIFIER - 53)))) !== 0));
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public anonymousFunction(): AnonymousFunctionContext {
		let _localctx: AnonymousFunctionContext = new AnonymousFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, CanonParser.RULE_anonymousFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 887;
			this.match(CanonParser.FUN);
			this.state = 888;
			this.match(CanonParser.LPAREN);
			this.state = 890;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.THIS || _la === CanonParser.IDENTIFIER) {
				{
				this.state = 889;
				this.parameterList();
				}
			}

			this.state = 892;
			this.match(CanonParser.RPAREN);
			this.state = 895;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 893;
				this.match(CanonParser.COLON);
				this.state = 894;
				this.type();
				}
			}

			this.state = 897;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public spreadExpression(): SpreadExpressionContext {
		let _localctx: SpreadExpressionContext = new SpreadExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, CanonParser.RULE_spreadExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 899;
			this.match(CanonParser.SPREAD);
			this.state = 900;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 41:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 14);

		case 1:
			return this.precpred(this._ctx, 13);

		case 2:
			return this.precpred(this._ctx, 12);

		case 3:
			return this.precpred(this._ctx, 11);

		case 4:
			return this.precpred(this._ctx, 10);

		case 5:
			return this.precpred(this._ctx, 9);

		case 6:
			return this.precpred(this._ctx, 8);

		case 7:
			return this.precpred(this._ctx, 7);

		case 8:
			return this.precpred(this._ctx, 6);

		case 9:
			return this.precpred(this._ctx, 5);

		case 10:
			return this.precpred(this._ctx, 4);

		case 11:
			return this.precpred(this._ctx, 3);

		case 12:
			return this.precpred(this._ctx, 2);

		case 13:
			return this.precpred(this._ctx, 1);

		case 14:
			return this.precpred(this._ctx, 19);

		case 15:
			return this.precpred(this._ctx, 18);

		case 16:
			return this.precpred(this._ctx, 17);

		case 17:
			return this.precpred(this._ctx, 16);

		case 18:
			return this.precpred(this._ctx, 15);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03X\u0389\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x03\x02\x07\x02r\n\x02\f\x02\x0E\x02" +
		"u\v\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02{\n\x02\f\x02\x0E\x02~" +
		"\v\x02\x03\x02\x07\x02\x81\n\x02\f\x02\x0E\x02\x84\v\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x03\x05\x03\x8B\n\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05" +
		"\x06\x99\n\x06\x03\x07\x06\x07\x9C\n\x07\r\x07\x0E\x07\x9D\x03\b\x03\b" +
		"\x03\b\x03\b\x07\b\xA4\n\b\f\b\x0E\b\xA7\v\b\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x05\t\xB2\n\t\x03\n\x07\n\xB5\n\n\f\n\x0E\n" +
		"\xB8\v\n\x03\n\x07\n\xBB\n\n\f\n\x0E\n\xBE\v\n\x03\n\x03\n\x03\n\x05\n" +
		"\xC3\n\n\x03\v\x07\v\xC6\n\v\f\v\x0E\v\xC9\v\v\x03\v\x07\v\xCC\n\v\f\v" +
		"\x0E\v\xCF\v\v\x03\v\x03\v\x03\v\x03\v\x03\f\x07\f\xD6\n\f\f\f\x0E\f\xD9" +
		"\v\f\x03\f\x07\f\xDC\n\f\f\f\x0E\f\xDF\v\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\r\x07\r\xE7\n\r\f\r\x0E\r\xEA\v\r\x03\r\x07\r\xED\n\r\f\r\x0E\r" +
		"\xF0\v\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x07\x0E\xF8\n\x0E\f\x0E" +
		"\x0E\x0E\xFB\v\x0E\x03\x0E\x07\x0E\xFE\n\x0E\f\x0E\x0E\x0E\u0101\v\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E" +
		"\u010B\n\x0E\x03\x0E\x03\x0E\x05\x0E\u010F\n\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x05\x0E\u0114\n\x0E\x03\x0E\x03\x0E\x03\x0F\x07\x0F\u0119\n\x0F\f\x0F" +
		"\x0E\x0F\u011C\v\x0F\x03\x0F\x07\x0F\u011F\n\x0F\f\x0F\x0E\x0F\u0122\v" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0128\n\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x10\x07\x10\u0130\n\x10\f\x10\x0E\x10\u0133" +
		"\v\x10\x03\x11\x03\x11\x03\x11\x07\x11\u0138\n\x11\f\x11\x0E\x11\u013B" +
		"\v\x11\x03\x11\x05\x11\u013E\n\x11\x03\x12\x03\x12\x05\x12\u0142\n\x12" +
		"\x03\x13\x03\x13\x03\x14\x03\x14\x07\x14\u0148\n\x14\f\x14\x0E\x14\u014B" +
		"\v\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u0151\n\x14\f\x14\x0E\x14" +
		"\u0154\v\x14\x07\x14\u0156\n\x14\f\x14\x0E\x14\u0159\v\x14\x03\x14\x07" +
		"\x14\u015C\n\x14\f\x14\x0E\x14\u015F\v\x14\x03\x14\x03\x14\x03\x15\x03" +
		"\x15\x07\x15\u0165\n\x15\f\x15\x0E\x15\u0168\v\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x07\x15\u016E\n\x15\f\x15\x0E\x15\u0171\v\x15\x07\x15\u0173" +
		"\n\x15\f\x15\x0E\x15\u0176\v\x15\x03\x15\x07\x15\u0179\n\x15\f\x15\x0E" +
		"\x15\u017C\v\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x05\x16\u0185\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x05\x17\u018F\n\x17\x03\x18\x03\x18\x03\x19\x07\x19\u0194" +
		"\n\x19\f\x19\x0E\x19\u0197\v\x19\x03\x19\x07\x19\u019A\n\x19\f\x19\x0E" +
		"\x19\u019D\v\x19\x03\x19\x05\x19\u01A0\n\x19\x03\x19\x03\x19\x05\x19\u01A4" +
		"\n\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u01AA\n\x19\x05\x19\u01AC" +
		"\n\x19\x03\x1A\x03\x1A\x05\x1A\u01B0\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x05\x1C\u01BC\n\x1C" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u01C2\n\x1D\f\x1D\x0E\x1D\u01C5" +
		"\v\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u01CD\n" +
		"\x1E\f\x1E\x0E\x1E\u01D0\v\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F" +
		"\x05\x1F\u01D7\n\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u01DC\n\x1F\x03 " +
		"\x03 \x03 \x05 \u01E1\n \x03 \x03 \x03 \x03 \x03 \x05 \u01E8\n \x05 \u01EA" +
		"\n \x03!\x07!\u01ED\n!\f!\x0E!\u01F0\v!\x03!\x07!\u01F3\n!\f!\x0E!\u01F6" +
		"\v!\x03!\x03!\x03!\x05!\u01FB\n!\x03!\x05!\u01FE\n!\x03!\x03!\x03\"\x07" +
		"\"\u0203\n\"\f\"\x0E\"\u0206\v\"\x03\"\x07\"\u0209\n\"\f\"\x0E\"\u020C" +
		"\v\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u0214\n\"\x03\"\x03\"\x03" +
		"#\x07#\u0219\n#\f#\x0E#\u021C\v#\x03#\x07#\u021F\n#\f#\x0E#\u0222\v#\x03" +
		"#\x05#\u0225\n#\x03#\x03#\x03#\x03#\x05#\u022B\n#\x03#\x03#\x03#\x05#" +
		"\u0230\n#\x03#\x03#\x03$\x07$\u0235\n$\f$\x0E$\u0238\v$\x03$\x07$\u023B" +
		"\n$\f$\x0E$\u023E\v$\x03$\x03$\x03$\x03$\x03$\x05$\u0245\n$\x03$\x03$" +
		"\x05$\u0249\n$\x03%\x03%\x07%\u024D\n%\f%\x0E%\u0250\v%\x03%\x03%\x03" +
		"%\x03%\x07%\u0256\n%\f%\x0E%\u0259\v%\x05%\u025B\n%\x03%\x07%\u025E\n" +
		"%\f%\x0E%\u0261\v%\x03%\x03%\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x07" +
		"\'\u026C\n\'\f\'\x0E\'\u026F\v\'\x03(\x03(\x05(\u0273\n(\x03(\x03(\x03" +
		"(\x05(\u0278\n(\x03)\x03)\x03)\x05)\u027D\n)\x03)\x05)\u0280\n)\x03)\x05" +
		")\u0283\n)\x03*\x03*\x03*\x07*\u0288\n*\f*\x0E*\u028B\v*\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u02A9\n" +
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u02E0\n" +
		"+\x03+\x03+\x05+\u02E4\n+\x03+\x03+\x03+\x03+\x05+\u02EA\n+\x03+\x03+" +
		"\x03+\x07+\u02EF\n+\f+\x0E+\u02F2\v+\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u0301\n,\x03,\x03,\x03,\x05,\u0306" +
		"\n,\x05,\u0308\n,\x03,\x03,\x03,\x03,\x03,\x05,\u030F\n,\x03-\x03-\x03" +
		"-\x03-\x05-\u0315\n-\x03.\x03.\x03.\x05.\u031A\n.\x03/\x03/\x07/\u031E" +
		"\n/\f/\x0E/\u0321\v/\x03/\x03/\x030\x030\x030\x030\x030\x030\x050\u032B" +
		"\n0\x031\x031\x031\x051\u0330\n1\x031\x031\x051\u0334\n1\x032\x032\x03" +
		"2\x032\x072\u033A\n2\f2\x0E2\u033D\v2\x052\u033F\n2\x032\x032\x033\x03" +
		"3\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x03" +
		"3\x033\x033\x033\x033\x033\x033\x033\x033\x033\x053\u035C\n3\x034\x03" +
		"4\x034\x074\u0361\n4\f4\x0E4\u0364\v4\x035\x035\x035\x055\u0369\n5\x03" +
		"6\x036\x036\x036\x076\u036F\n6\f6\x0E6\u0372\v6\x066\u0374\n6\r6\x0E6" +
		"\u0375\x056\u0378\n6\x037\x037\x037\x057\u037D\n7\x037\x037\x037\x057" +
		"\u0382\n7\x037\x037\x038\x038\x038\x038\x02\x02\x03T9\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02" +
		"0\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02" +
		"L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02" +
		"h\x02j\x02l\x02n\x02\x02\v\x03\x02\x16\x17\x03\x02\x1A\x1D\x03\x02*0\x03" +
		"\x02 \"\x03\x02\x1E\x1F\x03\x02:;\x03\x0289\x03\x02&)\x03\x02$%\x02\u03F8" +
		"\x02s\x03\x02\x02\x02\x04\x8A\x03\x02\x02\x02\x06\x8C\x03\x02\x02\x02" +
		"\b\x8F\x03\x02\x02\x02\n\x98\x03\x02\x02\x02\f\x9B\x03\x02\x02\x02\x0E" +
		"\x9F\x03\x02\x02\x02\x10\xB1\x03\x02\x02\x02\x12\xB6\x03\x02\x02\x02\x14" +
		"\xC7\x03\x02\x02\x02\x16\xD7\x03\x02\x02\x02\x18\xE8\x03\x02\x02\x02\x1A" +
		"\xF9\x03\x02\x02\x02\x1C\u011A\x03\x02\x02\x02\x1E\u012C\x03\x02\x02\x02" +
		" \u0134\x03\x02\x02\x02\"\u0141\x03\x02\x02\x02$\u0143\x03\x02\x02\x02" +
		"&\u0145\x03\x02\x02\x02(\u0162\x03\x02\x02\x02*\u0184\x03\x02\x02\x02" +
		",\u018E\x03\x02\x02\x02.\u0190\x03\x02\x02\x020\u0195\x03\x02\x02\x02" +
		"2\u01AF\x03\x02\x02\x024\u01B5\x03\x02\x02\x026\u01BB\x03\x02\x02\x02" +
		"8\u01BD\x03\x02\x02\x02:\u01C8\x03\x02\x02\x02<\u01DB\x03\x02\x02\x02" +
		">\u01E9\x03\x02\x02\x02@\u01EE\x03\x02\x02\x02B\u0204\x03\x02\x02\x02" +
		"D\u021A\x03\x02\x02\x02F\u0236\x03\x02\x02\x02H\u024A\x03\x02\x02\x02" +
		"J\u0264\x03\x02\x02\x02L\u0268\x03\x02\x02\x02N\u0272\x03\x02\x02\x02" +
		"P\u0279\x03\x02\x02\x02R\u0284\x03\x02\x02\x02T\u02A8\x03\x02\x02\x02" +
		"V\u030E\x03\x02\x02\x02X\u0314\x03\x02\x02\x02Z\u0319\x03\x02\x02\x02" +
		"\\\u031B\x03\x02\x02\x02^\u032A\x03\x02\x02\x02`\u032C\x03\x02\x02\x02" +
		"b\u0335\x03\x02\x02\x02d\u035B\x03\x02\x02\x02f\u035D\x03\x02\x02\x02" +
		"h\u0365\x03\x02\x02\x02j\u0377\x03\x02\x02\x02l\u0379\x03\x02\x02\x02" +
		"n\u0385\x03\x02\x02\x02pr\x07\x04\x02\x02qp\x03\x02\x02\x02ru\x03\x02" +
		"\x02\x02sq\x03\x02\x02\x02st\x03\x02\x02\x02tv\x03\x02\x02\x02us\x03\x02" +
		"\x02\x02v|\x05\x04\x03\x02wx\x05\f\x07\x02xy\x05\x04\x03\x02y{\x03\x02" +
		"\x02\x02zw\x03\x02\x02\x02{~\x03\x02\x02\x02|z\x03\x02\x02\x02|}\x03\x02" +
		"\x02\x02}\x82\x03\x02\x02\x02~|\x03\x02\x02\x02\x7F\x81\x07\x04\x02\x02" +
		"\x80\x7F\x03\x02\x02\x02\x81\x84\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02" +
		"\x82\x83\x03\x02\x02\x02\x83\x85\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02" +
		"\x85\x86\x07\x02\x02\x03\x86\x03\x03\x02\x02\x02\x87\x8B\x05\x06\x04\x02" +
		"\x88\x8B\x05\b\x05\x02\x89\x8B\x05\x10\t\x02\x8A\x87\x03\x02\x02\x02\x8A" +
		"\x88\x03\x02\x02\x02\x8A\x89\x03\x02\x02\x02\x8B\x05\x03\x02\x02\x02\x8C" +
		"\x8D\x07\x07\x02\x02\x8D\x8E\x05Z.\x02\x8E\x07\x03\x02\x02\x02\x8F\x90" +
		"\x07\x11\x02\x02\x90\x91\x07Q\x02\x02\x91\t\x03\x02\x02\x02\x92\x99\x07" +
		"G\x02\x02\x93\x99\x07\x04\x02\x02\x94\x95\x07G\x02\x02\x95\x99\x07\x04" +
		"\x02\x02\x96\x97\x07\x04\x02\x02\x97\x99\x07G\x02\x02\x98\x92\x03\x02" +
		"\x02\x02\x98\x93\x03\x02\x02\x02\x98\x94\x03\x02\x02\x02\x98\x96\x03\x02" +
		"\x02\x02\x99\v\x03\x02\x02\x02\x9A\x9C\x05\n\x06\x02\x9B\x9A\x03\x02\x02" +
		"\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9D\x9E\x03\x02\x02" +
		"\x02\x9E\r\x03\x02\x02\x02\x9F\xA5\x05\x10\t\x02\xA0\xA1\x05\f\x07\x02" +
		"\xA1\xA2\x05\x10\t\x02\xA2\xA4\x03\x02\x02\x02\xA3\xA0\x03\x02\x02\x02" +
		"\xA4\xA7\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02" +
		"\xA6\x0F\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA8\xB2\x05\x12\n\x02" +
		"\xA9\xB2\x05\x14\v\x02\xAA\xB2\x05\x16\f\x02\xAB\xB2\x05\x18\r\x02\xAC" +
		"\xB2\x05\x1C\x0F\x02\xAD\xB2\x05\x1A\x0E\x02\xAE\xB2\x052\x1A\x02\xAF" +
		"\xB2\x054\x1B\x02\xB0\xB2\x05P)\x02\xB1\xA8\x03\x02\x02\x02\xB1\xA9\x03" +
		"\x02\x02\x02\xB1\xAA\x03\x02\x02\x02\xB1\xAB\x03\x02\x02\x02\xB1\xAC\x03" +
		"\x02\x02\x02\xB1\xAD\x03\x02\x02\x02\xB1\xAE\x03\x02\x02\x02\xB1\xAF\x03" +
		"\x02\x02\x02\xB1\xB0\x03\x02\x02\x02\xB2\x11\x03\x02\x02\x02\xB3\xB5\x05" +
		"`1\x02\xB4\xB3\x03\x02\x02\x02\xB5\xB8\x03\x02\x02\x02\xB6\xB4\x03\x02" +
		"\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xBC\x03\x02\x02\x02\xB8\xB6\x03\x02" +
		"\x02\x02\xB9\xBB\x07\x04\x02\x02\xBA\xB9\x03\x02\x02\x02\xBB\xBE\x03\x02" +
		"\x02\x02\xBC\xBA\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBF\x03\x02" +
		"\x02\x02\xBE\xBC\x03\x02\x02\x02\xBF\xC2\x07\t\x02\x02\xC0\xC3\x05&\x14" +
		"\x02\xC1\xC3\x05Z.\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC1\x03\x02\x02\x02" +
		"\xC3\x13\x03\x02\x02\x02\xC4\xC6\x05`1\x02\xC5\xC4\x03\x02\x02\x02\xC6" +
		"\xC9\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8" +
		"\xCD\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xCA\xCC\x07\x04\x02\x02\xCB" +
		"\xCA\x03\x02\x02\x02\xCC\xCF\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD" +
		"\xCE\x03\x02\x02\x02\xCE\xD0\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xD0" +
		"\xD1\x07\n\x02\x02\xD1\xD2\x07Q\x02\x02\xD2\xD3\x05(\x15\x02\xD3\x15\x03" +
		"\x02\x02\x02\xD4\xD6\x05`1\x02\xD5\xD4\x03\x02\x02\x02\xD6\xD9\x03\x02" +
		"\x02\x02\xD7\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xDD\x03\x02" +
		"\x02\x02\xD9\xD7\x03\x02\x02\x02\xDA\xDC\x07\x04\x02\x02\xDB\xDA\x03\x02" +
		"\x02\x02\xDC\xDF\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02" +
		"\x02\x02\xDE\xE0\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xE0\xE1\x07\v" +
		"\x02\x02\xE1\xE2\x07Q\x02\x02\xE2\xE3\x07*\x02\x02\xE3\xE4\x05\x1E\x10" +
		"\x02\xE4\x17\x03\x02\x02\x02\xE5\xE7\x05`1\x02\xE6\xE5\x03\x02\x02\x02" +
		"\xE7\xEA\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02" +
		"\xE9\xEE\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEB\xED\x07\x04\x02\x02" +
		"\xEC\xEB\x03\x02\x02\x02\xED\xF0\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02" +
		"\xEE\xEF\x03\x02\x02\x02\xEF\xF1\x03\x02\x02\x02\xF0\xEE\x03\x02\x02\x02" +
		"\xF1\xF2\x07\f\x02\x02\xF2\xF3\x07Q\x02\x02\xF3\xF4\x07*\x02\x02\xF4\xF5" +
		"\x05 \x11\x02\xF5\x19\x03\x02\x02\x02\xF6\xF8\x05`1\x02\xF7\xF6\x03\x02" +
		"\x02\x02\xF8\xFB\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xF9\xFA\x03\x02" +
		"\x02\x02\xFA\xFF\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFC\xFE\x07\x04" +
		"\x02\x02\xFD\xFC\x03\x02\x02\x02\xFE\u0101\x03\x02\x02\x02\xFF\xFD\x03" +
		"\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u010A\x03\x02\x02\x02\u0101" +
		"\xFF\x03\x02\x02\x02\u0102\u0103\x07\x19\x02\x02\u0103\u0104\x07\x18\x02" +
		"\x02\u0104\u0105\x05 \x11\x02\u0105\u0106\x07D\x02\x02\u0106\u0107\x07" +
		"Q\x02\x02\u0107\u010B\x03\x02\x02\x02\u0108\u0109\x07\x18\x02\x02\u0109" +
		"\u010B\x07Q\x02\x02\u010A\u0102\x03\x02\x02\x02\u010A\u0108\x03\x02\x02" +
		"\x02\u010B\u010C\x03\x02\x02\x02\u010C\u010E\x07@\x02\x02\u010D\u010F" +
		"\x05L\'\x02\u010E\u010D\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F" +
		"\u0110\x03\x02\x02\x02\u0110\u0113\x07A\x02\x02\u0111\u0112\x07F\x02\x02" +
		"\u0112\u0114\x05 \x11\x02\u0113\u0111\x03\x02\x02\x02\u0113\u0114\x03" +
		"\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0116\x05&\x14\x02\u0116" +
		"\x1B\x03\x02\x02\x02\u0117\u0119\x05`1\x02\u0118\u0117\x03\x02\x02\x02" +
		"\u0119\u011C\x03\x02\x02\x02\u011A\u0118\x03\x02\x02\x02\u011A\u011B\x03" +
		"\x02\x02\x02\u011B\u0120\x03\x02\x02\x02\u011C\u011A\x03\x02\x02\x02\u011D" +
		"\u011F\x07\x04\x02\x02\u011E\u011D\x03\x02\x02\x02\u011F\u0122\x03\x02" +
		"\x02\x02\u0120\u011E\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02\u0121" +
		"\u0123\x03\x02\x02\x02\u0122\u0120\x03\x02\x02\x02\u0123\u0124\t\x02\x02" +
		"\x02\u0124\u0127\x07Q\x02\x02\u0125\u0126\x07F\x02\x02\u0126\u0128\x05" +
		" \x11\x02\u0127\u0125\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128" +
		"\u0129\x03\x02\x02\x02\u0129\u012A\x07*\x02\x02\u012A\u012B\x05T+\x02" +
		"\u012B\x1D\x03\x02\x02\x02\u012C\u0131\x05 \x11\x02\u012D\u012E\x075\x02" +
		"\x02\u012E\u0130\x05 \x11\x02\u012F\u012D\x03\x02\x02\x02\u0130\u0133" +
		"\x03\x02\x02\x02\u0131\u012F\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02" +
		"\u0132\x1F\x03\x02\x02\x02\u0133\u0131\x03\x02\x02\x02\u0134\u0139\x05" +
		"\"\x12\x02\u0135\u0136\x07B\x02\x02\u0136\u0138\x07C\x02\x02\u0137\u0135" +
		"\x03\x02\x02\x02\u0138\u013B\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02" +
		"\u0139\u013A\x03\x02\x02\x02\u013A\u013D\x03\x02\x02\x02\u013B\u0139\x03" +
		"\x02\x02\x02\u013C\u013E\x07H\x02\x02\u013D\u013C\x03\x02\x02\x02\u013D" +
		"\u013E\x03\x02\x02\x02\u013E!\x03\x02\x02\x02\u013F\u0142\x05$\x13\x02" +
		"\u0140\u0142\x07Q\x02\x02\u0141\u013F\x03\x02\x02\x02\u0141\u0140\x03" +
		"\x02\x02\x02\u0142#\x03\x02\x02\x02\u0143\u0144\t\x03\x02\x02\u0144%\x03" +
		"\x02\x02\x02\u0145\u0149\x07>\x02\x02\u0146\u0148\x07\x04\x02\x02\u0147" +
		"\u0146\x03\x02\x02\x02\u0148\u014B\x03\x02\x02\x02\u0149\u0147\x03\x02" +
		"\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A\u0157\x03\x02\x02\x02\u014B" +
		"\u0149\x03\x02\x02\x02\u014C\u0152\x05,\x17\x02\u014D\u014E\x05\f\x07" +
		"\x02\u014E\u014F\x05,\x17\x02\u014F\u0151\x03\x02\x02\x02\u0150\u014D" +
		"\x03\x02\x02\x02\u0151\u0154\x03\x02\x02\x02\u0152\u0150\x03\x02\x02\x02" +
		"\u0152\u0153\x03\x02\x02\x02\u0153\u0156\x03\x02\x02\x02\u0154\u0152\x03" +
		"\x02\x02\x02\u0155\u014C\x03\x02\x02\x02\u0156\u0159\x03\x02\x02\x02\u0157" +
		"\u0155\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158\u015D\x03\x02" +
		"\x02\x02\u0159\u0157\x03\x02\x02\x02\u015A\u015C\x07\x04\x02\x02\u015B" +
		"\u015A\x03\x02\x02\x02\u015C\u015F\x03\x02\x02\x02\u015D\u015B\x03\x02" +
		"\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u0160\x03\x02\x02\x02\u015F" +
		"\u015D\x03\x02\x02\x02\u0160\u0161\x07?\x02\x02\u0161\'\x03\x02\x02\x02" +
		"\u0162\u0166\x07>\x02\x02\u0163\u0165\x07\x04\x02\x02\u0164\u0163\x03" +
		"\x02\x02\x02\u0165\u0168\x03\x02\x02\x02\u0166\u0164\x03\x02\x02\x02\u0166" +
		"\u0167\x03\x02\x02\x02\u0167\u0174\x03\x02\x02\x02\u0168\u0166\x03\x02" +
		"\x02\x02\u0169\u016F\x05*\x16\x02\u016A\u016B\x05\f\x07\x02\u016B\u016C" +
		"\x05*\x16\x02\u016C\u016E\x03\x02\x02\x02\u016D\u016A\x03\x02\x02\x02" +
		"\u016E\u0171\x03\x02\x02\x02\u016F\u016D\x03\x02\x02\x02\u016F\u0170\x03" +
		"\x02\x02\x02\u0170\u0173\x03\x02\x02\x02\u0171\u016F\x03\x02\x02\x02\u0172" +
		"\u0169\x03\x02\x02\x02\u0173\u0176\x03\x02\x02\x02\u0174\u0172\x03\x02" +
		"\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175\u017A\x03\x02\x02\x02\u0176" +
		"\u0174\x03\x02\x02\x02\u0177\u0179\x07\x04\x02\x02\u0178\u0177\x03\x02" +
		"\x02\x02\u0179\u017C\x03\x02\x02\x02\u017A\u0178\x03\x02\x02\x02\u017A" +
		"\u017B\x03\x02\x02\x02\u017B\u017D\x03\x02\x02\x02\u017C\u017A\x03\x02" +
		"\x02\x02\u017D\u017E\x07?\x02\x02\u017E)\x03\x02\x02\x02\u017F\u0185\x05" +
		"0\x19\x02\u0180\u0185\x05@!\x02\u0181\u0185\x05B\"\x02\u0182\u0185\x05" +
		"D#\x02\u0183\u0185\x05F$\x02\u0184\u017F\x03\x02\x02\x02\u0184\u0180\x03" +
		"\x02\x02\x02\u0184\u0181\x03\x02\x02\x02\u0184\u0182\x03\x02\x02\x02\u0184" +
		"\u0183\x03\x02\x02\x02\u0185+\x03\x02\x02\x02\u0186\u018F\x052\x1A\x02" +
		"\u0187\u018F\x05.\x18\x02\u0188\u018F\x050\x19\x02\u0189\u018F\x05@!\x02" +
		"\u018A\u018F\x05B\"\x02\u018B\u018F\x05D#\x02\u018C\u018F\x05F$\x02\u018D" +
		"\u018F\x05\x1C\x0F\x02\u018E\u0186\x03\x02\x02\x02\u018E\u0187\x03\x02" +
		"\x02\x02\u018E\u0188\x03\x02\x02\x02\u018E\u0189\x03\x02\x02\x02\u018E" +
		"\u018A\x03\x02\x02\x02\u018E\u018B\x03\x02\x02\x02\u018E\u018C\x03\x02" +
		"\x02\x02\u018E\u018D\x03\x02\x02\x02\u018F-\x03\x02\x02\x02\u0190\u0191" +
		"\x05T+\x02\u0191/\x03\x02\x02\x02\u0192\u0194\x05`1\x02\u0193\u0192\x03" +
		"\x02\x02\x02\u0194\u0197\x03\x02\x02\x02\u0195\u0193\x03\x02\x02\x02\u0195" +
		"\u0196\x03\x02\x02\x02\u0196\u019B\x03\x02\x02\x02\u0197\u0195\x03\x02" +
		"\x02\x02\u0198\u019A\x07\x04\x02\x02\u0199\u0198\x03\x02\x02\x02\u019A" +
		"\u019D\x03\x02\x02\x02\u019B\u0199\x03\x02\x02\x02\u019B\u019C\x03\x02" +
		"\x02\x02\u019C\u019F\x03\x02\x02\x02\u019D\u019B\x03\x02\x02\x02\u019E" +
		"\u01A0\x07\x0E\x02\x02\u019F\u019E\x03\x02\x02\x02\u019F\u01A0\x03\x02" +
		"\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1\u01AB\x07Q\x02\x02\u01A2\u01A4" +
		"\x07H\x02\x02\u01A3\u01A2\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02" +
		"\u01A4\u01A5\x03\x02\x02\x02\u01A5\u01A6\x07F\x02\x02\u01A6\u01A9\x05" +
		" \x11\x02\u01A7\u01A8\x07*\x02\x02\u01A8\u01AA\x05T+\x02\u01A9\u01A7\x03" +
		"\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA\u01AC\x03\x02\x02\x02\u01AB" +
		"\u01A3\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC1\x03\x02\x02" +
		"\x02\u01AD\u01AE\x07\x15\x02\x02\u01AE\u01B0\x07D\x02\x02\u01AF\u01AD" +
		"\x03\x02\x02\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0\u01B1\x03\x02\x02\x02" +
		"\u01B1\u01B2\x07Q\x02\x02\u01B2\u01B3\t\x04\x02\x02\u01B3\u01B4\x05T+" +
		"\x02\u01B43\x03\x02\x02\x02\u01B5\u01B6\x056\x1C\x02\u01B6\u01B7\x07*" +
		"\x02\x02\u01B7\u01B8\x05T+\x02\u01B85\x03\x02\x02\x02\u01B9\u01BC\x05" +
		"8\x1D\x02\u01BA\u01BC\x05:\x1E\x02\u01BB\u01B9\x03\x02\x02\x02\u01BB\u01BA" +
		"\x03\x02\x02\x02\u01BC7\x03\x02\x02\x02\u01BD\u01BE\x07B\x02\x02\u01BE" +
		"\u01C3\x05<\x1F\x02\u01BF\u01C0\x07E\x02\x02\u01C0\u01C2\x05<\x1F\x02" +
		"\u01C1\u01BF\x03\x02\x02\x02\u01C2\u01C5\x03\x02\x02\x02\u01C3\u01C1\x03" +
		"\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01C6\x03\x02\x02\x02\u01C5" +
		"\u01C3\x03\x02\x02\x02\u01C6\u01C7\x07C\x02\x02\u01C79\x03\x02\x02\x02" +
		"\u01C8\u01C9\x07>\x02\x02\u01C9\u01CE\x05> \x02\u01CA\u01CB\x07E\x02\x02" +
		"\u01CB\u01CD\x05> \x02\u01CC\u01CA\x03\x02\x02\x02\u01CD\u01D0\x03\x02" +
		"\x02\x02\u01CE\u01CC\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF" +
		"\u01D1\x03\x02\x02\x02\u01D0\u01CE\x03\x02\x02\x02\u01D1\u01D2\x07?\x02" +
		"\x02\u01D2;\x03\x02\x02\x02\u01D3\u01D6\x07";
	private static readonly _serializedATNSegment1: string =
		"Q\x02\x02\u01D4\u01D5\x07*\x02\x02\u01D5\u01D7\x05T+\x02\u01D6\u01D4\x03" +
		"\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7\u01DC\x03\x02\x02\x02\u01D8" +
		"\u01DC\x056\x1C\x02\u01D9\u01DA\x07<\x02\x02\u01DA\u01DC\x07Q\x02\x02" +
		"\u01DB\u01D3\x03\x02\x02\x02\u01DB\u01D8\x03\x02\x02\x02\u01DB\u01D9\x03" +
		"\x02\x02\x02\u01DC=\x03\x02\x02\x02\u01DD\u01E0\x07Q\x02\x02\u01DE\u01DF" +
		"\x07*\x02\x02\u01DF\u01E1\x05T+\x02\u01E0\u01DE\x03\x02\x02\x02\u01E0" +
		"\u01E1\x03\x02\x02\x02\u01E1\u01EA\x03\x02\x02\x02\u01E2\u01E3\x07Q\x02" +
		"\x02\u01E3\u01E4\x07F\x02\x02\u01E4\u01E7\x07Q\x02\x02\u01E5\u01E6\x07" +
		"*\x02\x02\u01E6\u01E8\x05T+\x02\u01E7\u01E5\x03\x02\x02\x02\u01E7\u01E8" +
		"\x03\x02\x02\x02\u01E8\u01EA\x03\x02\x02\x02\u01E9\u01DD\x03\x02\x02\x02" +
		"\u01E9\u01E2\x03\x02\x02\x02\u01EA?\x03\x02\x02\x02\u01EB\u01ED\x05`1" +
		"\x02\u01EC\u01EB\x03\x02\x02\x02\u01ED\u01F0\x03\x02\x02\x02\u01EE\u01EC" +
		"\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01F4\x03\x02\x02\x02" +
		"\u01F0\u01EE\x03\x02\x02\x02\u01F1\u01F3\x07\x04\x02\x02\u01F2\u01F1\x03" +
		"\x02\x02\x02\u01F3\u01F6\x03\x02\x02\x02\u01F4\u01F2\x03\x02\x02\x02\u01F4" +
		"\u01F5\x03\x02\x02\x02\u01F5\u01F7\x03\x02\x02\x02\u01F6\u01F4\x03\x02" +
		"\x02\x02\u01F7\u01FD\x07\r\x02\x02\u01F8\u01FA\x07@\x02\x02\u01F9\u01FB" +
		"\x05L\'\x02\u01FA\u01F9\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB" +
		"\u01FC\x03\x02\x02\x02\u01FC\u01FE\x07A\x02\x02\u01FD\u01F8\x03\x02\x02" +
		"\x02\u01FD\u01FE\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02\u01FF\u0200" +
		"\x05&\x14\x02\u0200A\x03\x02\x02\x02\u0201\u0203\x05`1\x02\u0202\u0201" +
		"\x03\x02\x02\x02\u0203\u0206\x03\x02\x02\x02\u0204\u0202\x03\x02\x02\x02" +
		"\u0204\u0205\x03\x02\x02\x02\u0205\u020A\x03\x02\x02\x02\u0206\u0204\x03" +
		"\x02\x02\x02\u0207\u0209\x07\x04\x02\x02\u0208\u0207\x03\x02\x02\x02\u0209" +
		"\u020C\x03\x02\x02\x02\u020A\u0208\x03\x02\x02\x02\u020A\u020B\x03\x02" +
		"\x02\x02\u020B\u020D\x03\x02\x02\x02\u020C\u020A\x03\x02\x02\x02\u020D" +
		"\u020E\x07\x0F\x02\x02\u020E\u020F\x07Q\x02\x02\u020F\u0210\x07@\x02\x02" +
		"\u0210\u0213\x07A\x02\x02\u0211\u0212\x07F\x02\x02\u0212\u0214\x05 \x11" +
		"\x02\u0213\u0211\x03\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214\u0215" +
		"\x03\x02\x02\x02\u0215\u0216\x05&\x14\x02\u0216C\x03\x02\x02\x02\u0217" +
		"\u0219\x05`1\x02\u0218\u0217\x03\x02\x02\x02\u0219\u021C\x03\x02\x02\x02" +
		"\u021A\u0218\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B\u0220\x03" +
		"\x02\x02\x02\u021C\u021A\x03\x02\x02\x02\u021D\u021F\x07\x04\x02\x02\u021E" +
		"\u021D\x03\x02\x02\x02\u021F\u0222\x03\x02\x02\x02\u0220\u021E\x03\x02" +
		"\x02\x02\u0220\u0221\x03\x02\x02\x02\u0221\u0224\x03\x02\x02\x02\u0222" +
		"\u0220\x03\x02\x02\x02\u0223\u0225\x07\x0E\x02\x02\u0224\u0223\x03\x02" +
		"\x02\x02\u0224\u0225\x03\x02\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226" +
		"\u0227\x07\x18\x02\x02\u0227\u0228\x07Q\x02\x02\u0228\u022A\x07@\x02\x02" +
		"\u0229\u022B\x05L\'\x02\u022A\u0229\x03\x02\x02\x02\u022A\u022B\x03\x02" +
		"\x02\x02\u022B\u022C\x03\x02\x02\x02\u022C\u022F\x07A\x02\x02\u022D\u022E" +
		"\x07F\x02\x02\u022E\u0230\x05 \x11\x02\u022F\u022D\x03\x02\x02\x02\u022F" +
		"\u0230\x03\x02\x02\x02\u0230\u0231\x03\x02\x02\x02\u0231\u0232\x05&\x14" +
		"\x02\u0232E\x03\x02\x02\x02\u0233\u0235\x05`1\x02\u0234\u0233\x03\x02" +
		"\x02\x02\u0235\u0238\x03\x02\x02\x02\u0236\u0234\x03\x02\x02\x02\u0236" +
		"\u0237\x03\x02\x02\x02\u0237\u023C\x03\x02\x02\x02\u0238\u0236\x03\x02" +
		"\x02\x02\u0239\u023B\x07\x04\x02\x02\u023A\u0239\x03\x02\x02\x02\u023B" +
		"\u023E\x03\x02\x02\x02\u023C\u023A\x03\x02\x02\x02\u023C\u023D\x03\x02" +
		"\x02\x02\u023D\u023F\x03\x02\x02\x02\u023E\u023C\x03\x02\x02\x02\u023F" +
		"\u0240\x07\x10\x02\x02\u0240\u0241\x07Q\x02\x02\u0241\u0242\x07F\x02\x02" +
		"\u0242\u0244\x05 \x11\x02\u0243\u0245\x05H%\x02\u0244\u0243\x03\x02\x02" +
		"\x02\u0244\u0245\x03\x02\x02\x02\u0245\u0248\x03\x02\x02\x02\u0246\u0247" +
		"\x07*\x02\x02\u0247\u0249\x05T+\x02\u0248\u0246\x03\x02\x02\x02\u0248" +
		"\u0249\x03\x02\x02\x02\u0249G\x03\x02\x02\x02\u024A\u024E\x07>\x02\x02" +
		"\u024B\u024D\x07\x04\x02\x02\u024C\u024B\x03\x02\x02\x02\u024D\u0250\x03" +
		"\x02\x02\x02\u024E\u024C\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024F" +
		"\u025A\x03\x02\x02\x02\u0250\u024E\x03\x02\x02\x02\u0251\u0257\x05J&\x02" +
		"\u0252\u0253\x05\f\x07\x02\u0253\u0254\x05J&\x02\u0254\u0256\x03\x02\x02" +
		"\x02\u0255\u0252\x03\x02\x02\x02\u0256\u0259\x03\x02\x02\x02\u0257\u0255" +
		"\x03\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258\u025B\x03\x02\x02\x02" +
		"\u0259\u0257\x03\x02\x02\x02\u025A\u0251\x03\x02\x02\x02\u025A\u025B\x03" +
		"\x02\x02\x02\u025B\u025F\x03\x02\x02\x02\u025C\u025E\x07\x04\x02\x02\u025D" +
		"\u025C\x03\x02\x02\x02\u025E\u0261\x03\x02\x02\x02\u025F\u025D\x03\x02" +
		"\x02\x02\u025F\u0260\x03\x02\x02\x02\u0260\u0262\x03\x02\x02\x02\u0261" +
		"\u025F\x03\x02\x02\x02\u0262\u0263\x07?\x02\x02\u0263I\x03\x02\x02\x02" +
		"\u0264\u0265\x07Q\x02\x02\u0265\u0266\x07I\x02\x02\u0266\u0267\x07Q\x02" +
		"\x02\u0267K\x03\x02\x02\x02\u0268\u026D\x05N(\x02\u0269\u026A\x07E\x02" +
		"\x02\u026A\u026C\x05N(\x02\u026B\u0269\x03\x02\x02\x02\u026C\u026F\x03" +
		"\x02\x02\x02\u026D\u026B\x03\x02\x02\x02\u026D\u026E\x03\x02\x02\x02\u026E" +
		"M\x03\x02\x02\x02\u026F\u026D\x03\x02\x02\x02\u0270\u0271\x07\x15\x02" +
		"\x02\u0271\u0273\x07D\x02\x02\u0272\u0270\x03\x02\x02\x02\u0272\u0273" +
		"\x03\x02\x02\x02\u0273\u0274\x03\x02\x02\x02\u0274\u0277\x07Q\x02\x02" +
		"\u0275\u0276\x07F\x02\x02\u0276\u0278\x05 \x11\x02\u0277\u0275\x03\x02" +
		"\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278O\x03\x02\x02\x02\u0279\u027F" +
		"\x07Q\x02\x02\u027A\u027C\x07@\x02\x02\u027B\u027D\x05R*\x02\u027C\u027B" +
		"\x03\x02\x02\x02\u027C\u027D\x03\x02\x02\x02\u027D\u027E\x03\x02\x02\x02" +
		"\u027E\u0280\x07A\x02\x02\u027F\u027A\x03\x02\x02\x02\u027F\u0280\x03" +
		"\x02\x02\x02\u0280\u0282\x03\x02\x02\x02\u0281\u0283\x05&\x14\x02\u0282" +
		"\u0281\x03\x02\x02\x02\u0282\u0283\x03\x02\x02\x02\u0283Q\x03\x02\x02" +
		"\x02\u0284\u0289\x05T+\x02\u0285\u0286\x07E\x02\x02\u0286\u0288\x05T+" +
		"\x02\u0287\u0285\x03\x02\x02\x02\u0288\u028B\x03\x02\x02\x02\u0289\u0287" +
		"\x03\x02\x02\x02\u0289\u028A\x03\x02\x02\x02\u028AS\x03\x02\x02\x02\u028B" +
		"\u0289\x03\x02\x02\x02\u028C\u028D\b+\x01\x02\u028D\u02A9\x05V,\x02\u028E" +
		"\u028F\x07\x1F\x02\x02\u028F\u02A9\x05T+\x1C\u0290\u0291\x07\x14\x02\x02" +
		"\u0291\u02A9\x05T+\x1B\u0292\u0293\x077\x02\x02\u0293\u02A9\x05T+\x1A" +
		"\u0294\u0295\x07\x1B\x02\x02\u0295\u0296\x07@\x02\x02\u0296\u0297\x05" +
		"T+\x02\u0297\u0298\x07A\x02\x02\u0298\u02A9\x03\x02\x02\x02\u0299\u029A" +
		"\x07\x1C\x02\x02\u029A\u029B\x07@\x02\x02\u029B\u029C\x05T+\x02\u029C" +
		"\u029D\x07A\x02\x02\u029D\u02A9\x03\x02\x02\x02\u029E\u029F\x07\x1A\x02" +
		"\x02\u029F\u02A0\x07@\x02\x02\u02A0\u02A1\x05T+\x02\u02A1\u02A2\x07A\x02" +
		"\x02\u02A2\u02A9\x03\x02\x02\x02\u02A3\u02A4\x07\x1D\x02\x02\u02A4\u02A5" +
		"\x07@\x02\x02\u02A5\u02A6\x05T+\x02\u02A6\u02A7\x07A\x02\x02\u02A7\u02A9" +
		"\x03\x02\x02\x02\u02A8\u028C\x03\x02\x02\x02\u02A8\u028E\x03\x02\x02\x02" +
		"\u02A8\u0290\x03\x02\x02\x02\u02A8\u0292\x03\x02\x02\x02\u02A8\u0294\x03" +
		"\x02\x02\x02\u02A8\u0299\x03\x02\x02\x02\u02A8\u029E\x03\x02\x02\x02\u02A8" +
		"\u02A3\x03\x02\x02\x02\u02A9\u02F0\x03\x02\x02\x02\u02AA\u02AB\f\x10\x02" +
		"\x02\u02AB\u02AC\x07#\x02\x02\u02AC\u02EF\x05T+\x11\u02AD\u02AE\f\x0F" +
		"\x02\x02\u02AE\u02AF\t\x05\x02\x02\u02AF\u02EF\x05T+\x10\u02B0\u02B1\f" +
		"\x0E\x02\x02\u02B1\u02B2\t\x06\x02\x02\u02B2\u02EF\x05T+\x0F\u02B3\u02B4" +
		"\f\r\x02\x02\u02B4\u02B5\t\x07\x02\x02\u02B5\u02EF\x05T+\x0E\u02B6\u02B7" +
		"\f\f\x02\x02\u02B7\u02B8\x07Q\x02\x02\u02B8\u02EF\x05T+\r\u02B9\u02BA" +
		"\f\v\x02\x02\u02BA\u02BB\t\b\x02\x02\u02BB\u02EF\x05T+\f\u02BC\u02BD\f" +
		"\n\x02\x02\u02BD\u02BE\t\t\x02\x02\u02BE\u02EF\x05T+\v\u02BF\u02C0\f\t" +
		"\x02\x02\u02C0\u02C1\t\n\x02\x02\u02C1\u02EF\x05T+\n\u02C2\u02C3\f\b\x02" +
		"\x02\u02C3\u02C4\x074\x02\x02\u02C4\u02EF\x05T+\t\u02C5\u02C6\f\x07\x02" +
		"\x02\u02C6\u02C7\x076\x02\x02\u02C7\u02EF\x05T+\b\u02C8\u02C9\f\x06\x02" +
		"\x02\u02C9\u02CA\x075\x02\x02\u02CA\u02EF\x05T+\x07\u02CB\u02CC\f\x05" +
		"\x02\x02\u02CC\u02CD\x071\x02\x02\u02CD\u02EF\x05T+\x06\u02CE\u02CF\f" +
		"\x04\x02\x02\u02CF\u02D0\x072\x02\x02\u02D0\u02EF\x05T+\x05\u02D1\u02D2" +
		"\f\x03\x02\x02\u02D2\u02D3\x073\x02\x02\u02D3\u02EF\x05T+\x04\u02D4\u02D5" +
		"\f\x15\x02\x02\u02D5\u02D6\x07D\x02\x02\u02D6\u02EF\x07Q\x02\x02\u02D7" +
		"\u02D8\f\x14\x02\x02\u02D8\u02D9\x07B\x02\x02\u02D9\u02DA\x05T+\x02\u02DA" +
		"\u02DB\x07C\x02\x02\u02DB\u02EF\x03\x02\x02\x02\u02DC\u02DD\f\x13\x02" +
		"\x02\u02DD\u02DF\x07B\x02\x02\u02DE\u02E0\x05T+\x02\u02DF\u02DE\x03\x02" +
		"\x02\x02\u02DF\u02E0\x03\x02\x02\x02\u02E0\u02E1\x03\x02\x02\x02\u02E1" +
		"\u02E3\x07;\x02\x02\u02E2\u02E4\x05T+\x02\u02E3\u02E2\x03\x02\x02\x02" +
		"\u02E3\u02E4\x03\x02\x02\x02\u02E4\u02E5\x03\x02\x02\x02\u02E5\u02EF\x07" +
		"C\x02\x02\u02E6\u02E7\f\x12\x02\x02\u02E7\u02E9\x07@\x02\x02\u02E8\u02EA" +
		"\x05R*\x02\u02E9\u02E8\x03\x02\x02\x02\u02E9\u02EA\x03\x02\x02\x02\u02EA" +
		"\u02EB\x03\x02\x02\x02\u02EB\u02EF\x07A\x02\x02\u02EC\u02ED\f\x11\x02" +
		"\x02\u02ED\u02EF\x07=\x02\x02\u02EE\u02AA\x03\x02\x02\x02\u02EE\u02AD" +
		"\x03\x02\x02\x02\u02EE\u02B0\x03\x02\x02\x02\u02EE\u02B3\x03\x02\x02\x02" +
		"\u02EE\u02B6\x03\x02\x02\x02\u02EE\u02B9\x03\x02\x02\x02\u02EE\u02BC\x03" +
		"\x02\x02\x02\u02EE\u02BF\x03\x02\x02\x02\u02EE\u02C2\x03\x02\x02\x02\u02EE" +
		"\u02C5\x03\x02\x02\x02\u02EE\u02C8\x03\x02\x02\x02\u02EE\u02CB\x03\x02" +
		"\x02\x02\u02EE\u02CE\x03\x02\x02\x02\u02EE\u02D1\x03\x02\x02\x02\u02EE" +
		"\u02D4\x03\x02\x02\x02\u02EE\u02D7\x03\x02\x02\x02\u02EE\u02DC\x03\x02" +
		"\x02\x02\u02EE\u02E6\x03\x02\x02\x02\u02EE\u02EC\x03\x02\x02\x02\u02EF" +
		"\u02F2\x03\x02\x02\x02\u02F0\u02EE\x03\x02\x02\x02\u02F0\u02F1\x03\x02" +
		"\x02\x02\u02F1U\x03\x02\x02\x02\u02F2\u02F0\x03\x02\x02\x02\u02F3\u030F" +
		"\x05X-\x02\u02F4\u030F\x05b2\x02\u02F5\u030F\x05d3\x02\u02F6\u030F\x05" +
		"l7\x02\u02F7\u030F\x05n8\x02\u02F8\u030F\x07Q\x02\x02\u02F9\u030F\x07" +
		"\x15\x02\x02\u02FA\u02FB\x07\x12\x02\x02\u02FB\u02FC\x07@\x02\x02\u02FC" +
		"\u02FD\x05T+\x02\u02FD\u0300\x07A\x02\x02\u02FE\u0301\x05T+\x02\u02FF" +
		"\u0301\x05&\x14\x02\u0300\u02FE\x03\x02\x02\x02\u0300\u02FF\x03\x02\x02" +
		"\x02\u0301\u0307\x03\x02\x02\x02\u0302\u0305\x07\x13\x02\x02\u0303\u0306" +
		"\x05T+\x02\u0304\u0306\x05&\x14\x02\u0305\u0303\x03\x02\x02\x02\u0305" +
		"\u0304\x03\x02\x02\x02\u0306\u0308\x03\x02\x02\x02\u0307\u0302\x03\x02" +
		"\x02\x02\u0307\u0308\x03\x02\x02\x02\u0308\u030F\x03\x02\x02\x02\u0309" +
		"\u030A\x07@\x02\x02\u030A\u030B\x05T+\x02\u030B\u030C\x07A\x02\x02\u030C" +
		"\u030F\x03\x02\x02\x02\u030D\u030F\x05P)\x02\u030E\u02F3\x03\x02\x02\x02" +
		"\u030E\u02F4\x03\x02\x02\x02\u030E\u02F5\x03\x02\x02\x02\u030E\u02F6\x03" +
		"\x02\x02\x02\u030E\u02F7\x03\x02\x02\x02\u030E\u02F8\x03\x02\x02\x02\u030E" +
		"\u02F9\x03\x02\x02\x02\u030E\u02FA\x03\x02\x02\x02\u030E\u0309\x03\x02" +
		"\x02\x02\u030E\u030D\x03\x02\x02\x02\u030FW\x03\x02\x02\x02\u0310\u0315" +
		"\x05Z.\x02\u0311\u0315\x07M\x02\x02\u0312\u0315\x07N\x02\x02\u0313\u0315" +
		"\x07O\x02\x02\u0314\u0310\x03\x02\x02\x02\u0314\u0311\x03\x02\x02\x02" +
		"\u0314\u0312\x03\x02\x02\x02\u0314\u0313\x03\x02\x02\x02\u0315Y\x03\x02" +
		"\x02\x02\u0316\u031A\x07J\x02\x02\u0317\u031A\x07K\x02\x02\u0318\u031A" +
		"\x05\\/\x02\u0319\u0316\x03\x02\x02\x02\u0319\u0317\x03\x02\x02\x02\u0319" +
		"\u0318\x03\x02\x02\x02\u031A[\x03\x02\x02\x02\u031B\u031F\x07L\x02\x02" +
		"\u031C\u031E\x05^0\x02\u031D\u031C\x03\x02\x02\x02\u031E\u0321\x03\x02" +
		"\x02\x02\u031F\u031D\x03\x02\x02\x02\u031F\u0320\x03\x02\x02\x02\u0320" +
		"\u0322\x03\x02\x02\x02\u0321\u031F\x03\x02\x02\x02\u0322\u0323\x07R\x02" +
		"\x02\u0323]\x03\x02\x02\x02\u0324\u032B\x07S\x02\x02\u0325\u032B\x07U" +
		"\x02\x02\u0326\u0327\x07T\x02\x02\u0327\u0328\x05T+\x02\u0328\u0329\x07" +
		"V\x02\x02\u0329\u032B\x03\x02\x02\x02\u032A\u0324\x03\x02\x02\x02\u032A" +
		"\u0325\x03\x02\x02\x02\u032A\u0326\x03\x02\x02\x02\u032B_\x03\x02\x02" +
		"\x02\u032C\u0333\x07P\x02\x02\u032D\u032F\x07@\x02\x02\u032E\u0330\x05" +
		"R*\x02\u032F\u032E\x03\x02\x02\x02\u032F\u0330\x03\x02\x02\x02\u0330\u0331" +
		"\x03\x02\x02\x02\u0331\u0334\x07A\x02\x02\u0332\u0334\x05Z.\x02\u0333" +
		"\u032D\x03\x02\x02\x02\u0333\u0332\x03\x02\x02\x02\u0333\u0334\x03\x02" +
		"\x02\x02\u0334a\x03\x02\x02\x02\u0335\u033E\x07B\x02\x02\u0336\u033B\x05" +
		"T+\x02\u0337\u0338\x07E\x02\x02\u0338\u033A\x05T+\x02\u0339\u0337\x03" +
		"\x02\x02\x02\u033A\u033D\x03\x02\x02\x02\u033B\u0339\x03\x02\x02\x02\u033B" +
		"\u033C\x03\x02\x02\x02\u033C\u033F\x03\x02\x02\x02\u033D\u033B\x03\x02" +
		"\x02\x02\u033E\u0336\x03\x02\x02\x02\u033E\u033F\x03\x02\x02\x02\u033F" +
		"\u0340\x03\x02\x02\x02\u0340\u0341\x07C\x02\x02\u0341c\x03\x02\x02\x02" +
		"\u0342\u0343\x07>\x02\x02\u0343\u035C\x07?\x02\x02\u0344\u0345\x07>\x02" +
		"\x02\u0345\u0346\x07I\x02\x02\u0346\u035C\x07?\x02\x02\u0347\u0348\x07" +
		">\x02\x02\u0348\u0349\x07I\x02\x02\u0349\u034A\x05j6\x02\u034A\u034B\x07" +
		"?\x02\x02\u034B\u035C\x03\x02\x02\x02\u034C\u034D\x07>\x02\x02\u034D\u034E" +
		"\x05f4\x02\u034E\u034F\x07I\x02\x02\u034F\u0350\x07?\x02\x02\u0350\u035C" +
		"\x03\x02\x02\x02\u0351\u0352\x07>\x02\x02\u0352\u0353\x05f4\x02\u0353" +
		"\u0354\x07I\x02\x02\u0354\u0355\x05j6\x02\u0355\u0356\x07?\x02\x02\u0356" +
		"\u035C\x03\x02\x02\x02\u0357\u0358\x07>\x02\x02\u0358\u0359\x05j6\x02" +
		"\u0359\u035A\x07?\x02\x02\u035A\u035C\x03\x02\x02\x02\u035B\u0342\x03" +
		"\x02\x02\x02\u035B\u0344\x03\x02\x02\x02\u035B\u0347\x03\x02\x02\x02\u035B" +
		"\u034C\x03\x02\x02\x02\u035B\u0351\x03\x02\x02\x02\u035B\u0357\x03\x02" +
		"\x02\x02\u035Ce\x03\x02\x02\x02\u035D\u0362\x05h5\x02\u035E\u035F\x07" +
		"E\x02\x02\u035F\u0361\x05h5\x02\u0360\u035E\x03\x02\x02\x02\u0361\u0364" +
		"\x03\x02\x02\x02\u0362\u0360\x03\x02\x02\x02\u0362\u0363\x03\x02\x02\x02" +
		"\u0363g\x03\x02\x02\x02\u0364\u0362\x03\x02\x02\x02\u0365\u0368\x07Q\x02" +
		"\x02\u0366\u0367\x07F\x02\x02\u0367\u0369\x05 \x11\x02\u0368\u0366\x03" +
		"\x02\x02\x02\u0368\u0369\x03\x02\x02\x02\u0369i\x03\x02\x02\x02\u036A" +
		"\u0378\x05T+\x02\u036B\u0370\x05,\x17\x02\u036C\u036D\x07G\x02\x02\u036D" +
		"\u036F\x05,\x17\x02\u036E\u036C\x03\x02\x02\x02\u036F\u0372\x03\x02\x02" +
		"\x02\u0370\u036E\x03\x02\x02\x02\u0370\u0371\x03\x02\x02\x02\u0371\u0374" +
		"\x03\x02\x02\x02\u0372\u0370\x03\x02\x02\x02\u0373\u036B\x03\x02\x02\x02" +
		"\u0374\u0375\x03\x02\x02\x02\u0375\u0373\x03\x02\x02\x02\u0375\u0376\x03" +
		"\x02\x02\x02\u0376\u0378\x03\x02\x02\x02\u0377\u036A\x03\x02\x02\x02\u0377" +
		"\u0373\x03\x02\x02\x02\u0378k\x03\x02\x02\x02\u0379\u037A\x07\x18\x02" +
		"\x02\u037A\u037C\x07@\x02\x02\u037B\u037D\x05L\'\x02\u037C\u037B\x03\x02" +
		"\x02\x02\u037C\u037D\x03\x02\x02\x02\u037D\u037E\x03\x02\x02\x02\u037E" +
		"\u0381\x07A\x02\x02\u037F\u0380\x07F\x02\x02\u0380\u0382\x05 \x11\x02" +
		"\u0381\u037F\x03\x02\x02\x02\u0381\u0382\x03\x02\x02\x02\u0382\u0383\x03" +
		"\x02\x02\x02\u0383\u0384\x05&\x14\x02\u0384m\x03\x02\x02\x02\u0385\u0386" +
		"\x07<\x02\x02\u0386\u0387\x05T+\x02\u0387o\x03\x02\x02\x02ms|\x82\x8A" +
		"\x98\x9D\xA5\xB1\xB6\xBC\xC2\xC7\xCD\xD7\xDD\xE8\xEE\xF9\xFF\u010A\u010E" +
		"\u0113\u011A\u0120\u0127\u0131\u0139\u013D\u0141\u0149\u0152\u0157\u015D" +
		"\u0166\u016F\u0174\u017A\u0184\u018E\u0195\u019B\u019F\u01A3\u01A9\u01AB" +
		"\u01AF\u01BB\u01C3\u01CE\u01D6\u01DB\u01E0\u01E7\u01E9\u01EE\u01F4\u01FA" +
		"\u01FD\u0204\u020A\u0213\u021A\u0220\u0224\u022A\u022F\u0236\u023C\u0244" +
		"\u0248\u024E\u0257\u025A\u025F\u026D\u0272\u0277\u027C\u027F\u0282\u0289" +
		"\u02A8\u02DF\u02E3\u02E9\u02EE\u02F0\u0300\u0305\u0307\u030E\u0314\u0319" +
		"\u031F\u032A\u032F\u0333\u033B\u033E\u035B\u0362\u0368\u0370\u0375\u0377" +
		"\u037C\u0381";
	public static readonly _serializedATN: string = Utils.join(
		[
			CanonParser._serializedATNSegment0,
			CanonParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CanonParser.__ATN) {
			CanonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CanonParser._serializedATN));
		}

		return CanonParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public programElement(): ProgramElementContext[];
	public programElement(i: number): ProgramElementContext;
	public programElement(i?: number): ProgramElementContext | ProgramElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProgramElementContext);
		} else {
			return this.getRuleContext(i, ProgramElementContext);
		}
	}
	public EOF(): TerminalNode { return this.getToken(CanonParser.EOF, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.NEWLINE);
		} else {
			return this.getToken(CanonParser.NEWLINE, i);
		}
	}
	public statementSeparators(): StatementSeparatorsContext[];
	public statementSeparators(i: number): StatementSeparatorsContext;
	public statementSeparators(i?: number): StatementSeparatorsContext | StatementSeparatorsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementSeparatorsContext);
		} else {
			return this.getRuleContext(i, StatementSeparatorsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_program; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProgramElementContext extends ParserRuleContext {
	public schemaDirective(): SchemaDirectiveContext | undefined {
		return this.tryGetRuleContext(0, SchemaDirectiveContext);
	}
	public useStatement(): UseStatementContext | undefined {
		return this.tryGetRuleContext(0, UseStatementContext);
	}
	public topLevelElement(): TopLevelElementContext | undefined {
		return this.tryGetRuleContext(0, TopLevelElementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_programElement; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterProgramElement) {
			listener.enterProgramElement(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitProgramElement) {
			listener.exitProgramElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitProgramElement) {
			return visitor.visitProgramElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SchemaDirectiveContext extends ParserRuleContext {
	public SCHEMA_DIRECTIVE(): TerminalNode { return this.getToken(CanonParser.SCHEMA_DIRECTIVE, 0); }
	public stringLiteral(): StringLiteralContext {
		return this.getRuleContext(0, StringLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_schemaDirective; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterSchemaDirective) {
			listener.enterSchemaDirective(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitSchemaDirective) {
			listener.exitSchemaDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitSchemaDirective) {
			return visitor.visitSchemaDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UseStatementContext extends ParserRuleContext {
	public USE(): TerminalNode { return this.getToken(CanonParser.USE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(CanonParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_useStatement; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterUseStatement) {
			listener.enterUseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitUseStatement) {
			listener.exitUseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitUseStatement) {
			return visitor.visitUseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementSeparatorContext extends ParserRuleContext {
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CanonParser.SEMICOLON, 0); }
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(CanonParser.NEWLINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_statementSeparator; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterStatementSeparator) {
			listener.enterStatementSeparator(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitStatementSeparator) {
			listener.exitStatementSeparator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitStatementSeparator) {
			return visitor.visitStatementSeparator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementSeparatorsContext extends ParserRuleContext {
	public statementSeparator(): StatementSeparatorContext[];
	public statementSeparator(i: number): StatementSeparatorContext;
	public statementSeparator(i?: number): StatementSeparatorContext | StatementSeparatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementSeparatorContext);
		} else {
			return this.getRuleContext(i, StatementSeparatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_statementSeparators; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterStatementSeparators) {
			listener.enterStatementSeparators(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitStatementSeparators) {
			listener.exitStatementSeparators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitStatementSeparators) {
			return visitor.visitStatementSeparators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopLevelStatementContext extends ParserRuleContext {
	public topLevelElement(): TopLevelElementContext[];
	public topLevelElement(i: number): TopLevelElementContext;
	public topLevelElement(i?: number): TopLevelElementContext | TopLevelElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TopLevelElementContext);
		} else {
			return this.getRuleContext(i, TopLevelElementContext);
		}
	}
	public statementSeparators(): StatementSeparatorsContext[];
	public statementSeparators(i: number): StatementSeparatorsContext;
	public statementSeparators(i?: number): StatementSeparatorsContext | StatementSeparatorsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementSeparatorsContext);
		} else {
			return this.getRuleContext(i, StatementSeparatorsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_topLevelStatement; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterTopLevelStatement) {
			listener.enterTopLevelStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitTopLevelStatement) {
			listener.exitTopLevelStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitTopLevelStatement) {
			return visitor.visitTopLevelStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopLevelElementContext extends ParserRuleContext {
	public schemaDeclaration(): SchemaDeclarationContext | undefined {
		return this.tryGetRuleContext(0, SchemaDeclarationContext);
	}
	public structDeclaration(): StructDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StructDeclarationContext);
	}
	public unionDeclaration(): UnionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, UnionDeclarationContext);
	}
	public typeDeclaration(): TypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TypeDeclarationContext);
	}
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	public assignmentStatement(): AssignmentStatementContext | undefined {
		return this.tryGetRuleContext(0, AssignmentStatementContext);
	}
	public destructuringAssignment(): DestructuringAssignmentContext | undefined {
		return this.tryGetRuleContext(0, DestructuringAssignmentContext);
	}
	public callExpression(): CallExpressionContext | undefined {
		return this.tryGetRuleContext(0, CallExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_topLevelElement; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterTopLevelElement) {
			listener.enterTopLevelElement(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitTopLevelElement) {
			listener.exitTopLevelElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitTopLevelElement) {
			return visitor.visitTopLevelElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SchemaDeclarationContext extends ParserRuleContext {
	public SCHEMA(): TerminalNode { return this.getToken(CanonParser.SCHEMA, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.NEWLINE);
		} else {
			return this.getToken(CanonParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_schemaDeclaration; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterSchemaDeclaration) {
			listener.enterSchemaDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitSchemaDeclaration) {
			listener.exitSchemaDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitSchemaDeclaration) {
			return visitor.visitSchemaDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDeclarationContext extends ParserRuleContext {
	public STRUCT(): TerminalNode { return this.getToken(CanonParser.STRUCT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(CanonParser.IDENTIFIER, 0); }
	public structBody(): StructBodyContext {
		return this.getRuleContext(0, StructBodyContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.NEWLINE);
		} else {
			return this.getToken(CanonParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_structDeclaration; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterStructDeclaration) {
			listener.enterStructDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitStructDeclaration) {
			listener.exitStructDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitStructDeclaration) {
			return visitor.visitStructDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnionDeclarationContext extends ParserRuleContext {
	public UNION(): TerminalNode { return this.getToken(CanonParser.UNION, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(CanonParser.IDENTIFIER, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(CanonParser.ASSIGN, 0); }
	public unionType(): UnionTypeContext {
		return this.getRuleContext(0, UnionTypeContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.NEWLINE);
		} else {
			return this.getToken(CanonParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_unionDeclaration; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterUnionDeclaration) {
			listener.enterUnionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitUnionDeclaration) {
			listener.exitUnionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitUnionDeclaration) {
			return visitor.visitUnionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDeclarationContext extends ParserRuleContext {
	public TYPE(): TerminalNode { return this.getToken(CanonParser.TYPE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(CanonParser.IDENTIFIER, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(CanonParser.ASSIGN, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.NEWLINE);
		} else {
			return this.getToken(CanonParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_typeDeclaration; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterTypeDeclaration) {
			listener.enterTypeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitTypeDeclaration) {
			listener.exitTypeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitTypeDeclaration) {
			return visitor.visitTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(CanonParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CanonParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public INFIX(): TerminalNode | undefined { return this.tryGetToken(CanonParser.INFIX, 0); }
	public FUN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.FUN, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CanonParser.DOT, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(CanonParser.IDENTIFIER, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.NEWLINE);
		} else {
			return this.getToken(CanonParser.NEWLINE, i);
		}
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CanonParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_functionDeclaration; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterFunctionDeclaration) {
			listener.enterFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitFunctionDeclaration) {
			listener.exitFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(CanonParser.IDENTIFIER, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(CanonParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public VAL(): TerminalNode | undefined { return this.tryGetToken(CanonParser.VAL, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(CanonParser.VAR, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.NEWLINE);
		} else {
			return this.getToken(CanonParser.NEWLINE, i);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CanonParser.COLON, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnionTypeContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public BIT_OR(): TerminalNode[];
	public BIT_OR(i: number): TerminalNode;
	public BIT_OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.BIT_OR);
		} else {
			return this.getToken(CanonParser.BIT_OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_unionType; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterUnionType) {
			listener.enterUnionType(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitUnionType) {
			listener.exitUnionType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitUnionType) {
			return visitor.visitUnionType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public baseType(): BaseTypeContext {
		return this.getRuleContext(0, BaseTypeContext);
	}
	public LBRACKET(): TerminalNode[];
	public LBRACKET(i: number): TerminalNode;
	public LBRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.LBRACKET);
		} else {
			return this.getToken(CanonParser.LBRACKET, i);
		}
	}
	public RBRACKET(): TerminalNode[];
	public RBRACKET(i: number): TerminalNode;
	public RBRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.RBRACKET);
		} else {
			return this.getToken(CanonParser.RBRACKET, i);
		}
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(CanonParser.QUESTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_type; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BaseTypeContext extends ParserRuleContext {
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(CanonParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_baseType; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterBaseType) {
			listener.enterBaseType(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitBaseType) {
			listener.exitBaseType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitBaseType) {
			return visitor.visitBaseType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	public STRING_TYPE(): TerminalNode | undefined { return this.tryGetToken(CanonParser.STRING_TYPE, 0); }
	public INT_TYPE(): TerminalNode | undefined { return this.tryGetToken(CanonParser.INT_TYPE, 0); }
	public FLOAT_TYPE(): TerminalNode | undefined { return this.tryGetToken(CanonParser.FLOAT_TYPE, 0); }
	public BOOL_TYPE(): TerminalNode | undefined { return this.tryGetToken(CanonParser.BOOL_TYPE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_primitiveType; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterPrimitiveType) {
			listener.enterPrimitiveType(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitPrimitiveType) {
			listener.exitPrimitiveType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitPrimitiveType) {
			return visitor.visitPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(CanonParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CanonParser.RBRACE, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.NEWLINE);
		} else {
			return this.getToken(CanonParser.NEWLINE, i);
		}
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public statementSeparators(): StatementSeparatorsContext[];
	public statementSeparators(i: number): StatementSeparatorsContext;
	public statementSeparators(i?: number): StatementSeparatorsContext | StatementSeparatorsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementSeparatorsContext);
		} else {
			return this.getRuleContext(i, StatementSeparatorsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_block; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(CanonParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CanonParser.RBRACE, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.NEWLINE);
		} else {
			return this.getToken(CanonParser.NEWLINE, i);
		}
	}
	public structMember(): StructMemberContext[];
	public structMember(i: number): StructMemberContext;
	public structMember(i?: number): StructMemberContext | StructMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructMemberContext);
		} else {
			return this.getRuleContext(i, StructMemberContext);
		}
	}
	public statementSeparators(): StatementSeparatorsContext[];
	public statementSeparators(i: number): StatementSeparatorsContext;
	public statementSeparators(i?: number): StatementSeparatorsContext | StatementSeparatorsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementSeparatorsContext);
		} else {
			return this.getRuleContext(i, StatementSeparatorsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_structBody; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterStructBody) {
			listener.enterStructBody(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitStructBody) {
			listener.exitStructBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitStructBody) {
			return visitor.visitStructBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructMemberContext extends ParserRuleContext {
	public propertyDeclaration(): PropertyDeclarationContext | undefined {
		return this.tryGetRuleContext(0, PropertyDeclarationContext);
	}
	public initDeclaration(): InitDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InitDeclarationContext);
	}
	public getterDeclaration(): GetterDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GetterDeclarationContext);
	}
	public methodDeclaration(): MethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclarationContext);
	}
	public repeatedDeclaration(): RepeatedDeclarationContext | undefined {
		return this.tryGetRuleContext(0, RepeatedDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_structMember; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterStructMember) {
			listener.enterStructMember(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitStructMember) {
			listener.exitStructMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitStructMember) {
			return visitor.visitStructMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public assignmentStatement(): AssignmentStatementContext | undefined {
		return this.tryGetRuleContext(0, AssignmentStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public propertyDeclaration(): PropertyDeclarationContext | undefined {
		return this.tryGetRuleContext(0, PropertyDeclarationContext);
	}
	public initDeclaration(): InitDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InitDeclarationContext);
	}
	public getterDeclaration(): GetterDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GetterDeclarationContext);
	}
	public methodDeclaration(): MethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclarationContext);
	}
	public repeatedDeclaration(): RepeatedDeclarationContext | undefined {
		return this.tryGetRuleContext(0, RepeatedDeclarationContext);
	}
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_statement; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyDeclarationContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(CanonParser.IDENTIFIER, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.NEWLINE);
		} else {
			return this.getToken(CanonParser.NEWLINE, i);
		}
	}
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(CanonParser.PRIVATE, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CanonParser.COLON, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(CanonParser.QUESTION, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_propertyDeclaration; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterPropertyDeclaration) {
			listener.enterPropertyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitPropertyDeclaration) {
			listener.exitPropertyDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitPropertyDeclaration) {
			return visitor.visitPropertyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentStatementContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(CanonParser.IDENTIFIER, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.ASSIGN, 0); }
	public PLUS_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.PLUS_ASSIGN, 0); }
	public MINUS_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.MINUS_ASSIGN, 0); }
	public MULTIPLY_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.MULTIPLY_ASSIGN, 0); }
	public DIVIDE_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.DIVIDE_ASSIGN, 0); }
	public MODULO_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.MODULO_ASSIGN, 0); }
	public POWER_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.POWER_ASSIGN, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(CanonParser.THIS, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CanonParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_assignmentStatement; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterAssignmentStatement) {
			listener.enterAssignmentStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitAssignmentStatement) {
			listener.exitAssignmentStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitAssignmentStatement) {
			return visitor.visitAssignmentStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DestructuringAssignmentContext extends ParserRuleContext {
	public destructuringPattern(): DestructuringPatternContext {
		return this.getRuleContext(0, DestructuringPatternContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(CanonParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_destructuringAssignment; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterDestructuringAssignment) {
			listener.enterDestructuringAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitDestructuringAssignment) {
			listener.exitDestructuringAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitDestructuringAssignment) {
			return visitor.visitDestructuringAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DestructuringPatternContext extends ParserRuleContext {
	public arrayDestructuringPattern(): ArrayDestructuringPatternContext | undefined {
		return this.tryGetRuleContext(0, ArrayDestructuringPatternContext);
	}
	public objectDestructuringPattern(): ObjectDestructuringPatternContext | undefined {
		return this.tryGetRuleContext(0, ObjectDestructuringPatternContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_destructuringPattern; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterDestructuringPattern) {
			listener.enterDestructuringPattern(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitDestructuringPattern) {
			listener.exitDestructuringPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitDestructuringPattern) {
			return visitor.visitDestructuringPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayDestructuringPatternContext extends ParserRuleContext {
	public LBRACKET(): TerminalNode { return this.getToken(CanonParser.LBRACKET, 0); }
	public destructuringElement(): DestructuringElementContext[];
	public destructuringElement(i: number): DestructuringElementContext;
	public destructuringElement(i?: number): DestructuringElementContext | DestructuringElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DestructuringElementContext);
		} else {
			return this.getRuleContext(i, DestructuringElementContext);
		}
	}
	public RBRACKET(): TerminalNode { return this.getToken(CanonParser.RBRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.COMMA);
		} else {
			return this.getToken(CanonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_arrayDestructuringPattern; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterArrayDestructuringPattern) {
			listener.enterArrayDestructuringPattern(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitArrayDestructuringPattern) {
			listener.exitArrayDestructuringPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitArrayDestructuringPattern) {
			return visitor.visitArrayDestructuringPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectDestructuringPatternContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(CanonParser.LBRACE, 0); }
	public destructuringProperty(): DestructuringPropertyContext[];
	public destructuringProperty(i: number): DestructuringPropertyContext;
	public destructuringProperty(i?: number): DestructuringPropertyContext | DestructuringPropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DestructuringPropertyContext);
		} else {
			return this.getRuleContext(i, DestructuringPropertyContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(CanonParser.RBRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.COMMA);
		} else {
			return this.getToken(CanonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_objectDestructuringPattern; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterObjectDestructuringPattern) {
			listener.enterObjectDestructuringPattern(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitObjectDestructuringPattern) {
			listener.exitObjectDestructuringPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitObjectDestructuringPattern) {
			return visitor.visitObjectDestructuringPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DestructuringElementContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(CanonParser.IDENTIFIER, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public destructuringPattern(): DestructuringPatternContext | undefined {
		return this.tryGetRuleContext(0, DestructuringPatternContext);
	}
	public SPREAD(): TerminalNode | undefined { return this.tryGetToken(CanonParser.SPREAD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_destructuringElement; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterDestructuringElement) {
			listener.enterDestructuringElement(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitDestructuringElement) {
			listener.exitDestructuringElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitDestructuringElement) {
			return visitor.visitDestructuringElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DestructuringPropertyContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.IDENTIFIER);
		} else {
			return this.getToken(CanonParser.IDENTIFIER, i);
		}
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CanonParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_destructuringProperty; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterDestructuringProperty) {
			listener.enterDestructuringProperty(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitDestructuringProperty) {
			listener.exitDestructuringProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitDestructuringProperty) {
			return visitor.visitDestructuringProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitDeclarationContext extends ParserRuleContext {
	public INIT(): TerminalNode { return this.getToken(CanonParser.INIT, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.NEWLINE);
		} else {
			return this.getToken(CanonParser.NEWLINE, i);
		}
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.RPAREN, 0); }
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_initDeclaration; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterInitDeclaration) {
			listener.enterInitDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitInitDeclaration) {
			listener.exitInitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitInitDeclaration) {
			return visitor.visitInitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetterDeclarationContext extends ParserRuleContext {
	public GET(): TerminalNode { return this.getToken(CanonParser.GET, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(CanonParser.IDENTIFIER, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CanonParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CanonParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.NEWLINE);
		} else {
			return this.getToken(CanonParser.NEWLINE, i);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CanonParser.COLON, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_getterDeclaration; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterGetterDeclaration) {
			listener.enterGetterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitGetterDeclaration) {
			listener.exitGetterDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitGetterDeclaration) {
			return visitor.visitGetterDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclarationContext extends ParserRuleContext {
	public FUN(): TerminalNode { return this.getToken(CanonParser.FUN, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(CanonParser.IDENTIFIER, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CanonParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CanonParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.NEWLINE);
		} else {
			return this.getToken(CanonParser.NEWLINE, i);
		}
	}
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(CanonParser.PRIVATE, 0); }
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CanonParser.COLON, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_methodDeclaration; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterMethodDeclaration) {
			listener.enterMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitMethodDeclaration) {
			listener.exitMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitMethodDeclaration) {
			return visitor.visitMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RepeatedDeclarationContext extends ParserRuleContext {
	public REPEATED(): TerminalNode { return this.getToken(CanonParser.REPEATED, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(CanonParser.IDENTIFIER, 0); }
	public COLON(): TerminalNode { return this.getToken(CanonParser.COLON, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.NEWLINE);
		} else {
			return this.getToken(CanonParser.NEWLINE, i);
		}
	}
	public mappingBlock(): MappingBlockContext | undefined {
		return this.tryGetRuleContext(0, MappingBlockContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_repeatedDeclaration; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterRepeatedDeclaration) {
			listener.enterRepeatedDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitRepeatedDeclaration) {
			listener.exitRepeatedDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitRepeatedDeclaration) {
			return visitor.visitRepeatedDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MappingBlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(CanonParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CanonParser.RBRACE, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.NEWLINE);
		} else {
			return this.getToken(CanonParser.NEWLINE, i);
		}
	}
	public mappingEntry(): MappingEntryContext[];
	public mappingEntry(i: number): MappingEntryContext;
	public mappingEntry(i?: number): MappingEntryContext | MappingEntryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MappingEntryContext);
		} else {
			return this.getRuleContext(i, MappingEntryContext);
		}
	}
	public statementSeparators(): StatementSeparatorsContext[];
	public statementSeparators(i: number): StatementSeparatorsContext;
	public statementSeparators(i?: number): StatementSeparatorsContext | StatementSeparatorsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementSeparatorsContext);
		} else {
			return this.getRuleContext(i, StatementSeparatorsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_mappingBlock; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterMappingBlock) {
			listener.enterMappingBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitMappingBlock) {
			listener.exitMappingBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitMappingBlock) {
			return visitor.visitMappingBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MappingEntryContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.IDENTIFIER);
		} else {
			return this.getToken(CanonParser.IDENTIFIER, i);
		}
	}
	public ARROW(): TerminalNode { return this.getToken(CanonParser.ARROW, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_mappingEntry; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterMappingEntry) {
			listener.enterMappingEntry(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitMappingEntry) {
			listener.exitMappingEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitMappingEntry) {
			return visitor.visitMappingEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.COMMA);
		} else {
			return this.getToken(CanonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(CanonParser.IDENTIFIER, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(CanonParser.THIS, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CanonParser.DOT, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CanonParser.COLON, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_parameter; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallExpressionContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(CanonParser.IDENTIFIER, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.RPAREN, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_callExpression; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterCallExpression) {
			listener.enterCallExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitCallExpression) {
			listener.exitCallExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitCallExpression) {
			return visitor.visitCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.COMMA);
		} else {
			return this.getToken(CanonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_argumentList; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterArgumentList) {
			listener.enterArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitArgumentList) {
			listener.exitArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitArgumentList) {
			return visitor.visitArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PrimaryExprContext extends ExpressionContext {
	public primary(): PrimaryContext {
		return this.getRuleContext(0, PrimaryContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterPrimaryExpr) {
			listener.enterPrimaryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitPrimaryExpr) {
			listener.exitPrimaryExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitPrimaryExpr) {
			return visitor.visitPrimaryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryMinusExprContext extends ExpressionContext {
	public MINUS(): TerminalNode { return this.getToken(CanonParser.MINUS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterUnaryMinusExpr) {
			listener.enterUnaryMinusExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitUnaryMinusExpr) {
			listener.exitUnaryMinusExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitUnaryMinusExpr) {
			return visitor.visitUnaryMinusExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalNotExprContext extends ExpressionContext {
	public NOT(): TerminalNode { return this.getToken(CanonParser.NOT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterLogicalNotExpr) {
			listener.enterLogicalNotExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitLogicalNotExpr) {
			listener.exitLogicalNotExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitLogicalNotExpr) {
			return visitor.visitLogicalNotExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitwiseNotExprContext extends ExpressionContext {
	public BIT_NOT(): TerminalNode { return this.getToken(CanonParser.BIT_NOT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterBitwiseNotExpr) {
			listener.enterBitwiseNotExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitBitwiseNotExpr) {
			listener.exitBitwiseNotExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitBitwiseNotExpr) {
			return visitor.visitBitwiseNotExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeCastExprContext extends ExpressionContext {
	public INT_TYPE(): TerminalNode | undefined { return this.tryGetToken(CanonParser.INT_TYPE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CanonParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(CanonParser.RPAREN, 0); }
	public FLOAT_TYPE(): TerminalNode | undefined { return this.tryGetToken(CanonParser.FLOAT_TYPE, 0); }
	public STRING_TYPE(): TerminalNode | undefined { return this.tryGetToken(CanonParser.STRING_TYPE, 0); }
	public BOOL_TYPE(): TerminalNode | undefined { return this.tryGetToken(CanonParser.BOOL_TYPE, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterTypeCastExpr) {
			listener.enterTypeCastExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitTypeCastExpr) {
			listener.exitTypeCastExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitTypeCastExpr) {
			return visitor.visitTypeCastExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MemberAccessExprContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(CanonParser.DOT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(CanonParser.IDENTIFIER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterMemberAccessExpr) {
			listener.enterMemberAccessExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitMemberAccessExpr) {
			listener.exitMemberAccessExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitMemberAccessExpr) {
			return visitor.visitMemberAccessExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IndexAccessExprContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LBRACKET(): TerminalNode { return this.getToken(CanonParser.LBRACKET, 0); }
	public RBRACKET(): TerminalNode { return this.getToken(CanonParser.RBRACKET, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterIndexAccessExpr) {
			listener.enterIndexAccessExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitIndexAccessExpr) {
			listener.exitIndexAccessExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitIndexAccessExpr) {
			return visitor.visitIndexAccessExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SliceExprContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LBRACKET(): TerminalNode { return this.getToken(CanonParser.LBRACKET, 0); }
	public RANGE(): TerminalNode { return this.getToken(CanonParser.RANGE, 0); }
	public RBRACKET(): TerminalNode { return this.getToken(CanonParser.RBRACKET, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterSliceExpr) {
			listener.enterSliceExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitSliceExpr) {
			listener.exitSliceExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitSliceExpr) {
			return visitor.visitSliceExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FuncCallExprContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(CanonParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CanonParser.RPAREN, 0); }
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterFuncCallExpr) {
			listener.enterFuncCallExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitFuncCallExpr) {
			listener.exitFuncCallExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitFuncCallExpr) {
			return visitor.visitFuncCallExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NonNullAssertExprContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public EXCLAMATION(): TerminalNode { return this.getToken(CanonParser.EXCLAMATION, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterNonNullAssertExpr) {
			listener.enterNonNullAssertExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitNonNullAssertExpr) {
			listener.exitNonNullAssertExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitNonNullAssertExpr) {
			return visitor.visitNonNullAssertExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PowerExprContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public POWER(): TerminalNode { return this.getToken(CanonParser.POWER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterPowerExpr) {
			listener.enterPowerExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitPowerExpr) {
			listener.exitPowerExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitPowerExpr) {
			return visitor.visitPowerExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MulDivModExprContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MULTIPLY(): TerminalNode | undefined { return this.tryGetToken(CanonParser.MULTIPLY, 0); }
	public DIVIDE(): TerminalNode | undefined { return this.tryGetToken(CanonParser.DIVIDE, 0); }
	public MODULO(): TerminalNode | undefined { return this.tryGetToken(CanonParser.MODULO, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterMulDivModExpr) {
			listener.enterMulDivModExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitMulDivModExpr) {
			listener.exitMulDivModExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitMulDivModExpr) {
			return visitor.visitMulDivModExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddSubExprContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CanonParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(CanonParser.MINUS, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterAddSubExpr) {
			listener.enterAddSubExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitAddSubExpr) {
			listener.exitAddSubExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitAddSubExpr) {
			return visitor.visitAddSubExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RangeExprContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RANGE(): TerminalNode | undefined { return this.tryGetToken(CanonParser.RANGE, 0); }
	public RANGE_INCLUSIVE(): TerminalNode | undefined { return this.tryGetToken(CanonParser.RANGE_INCLUSIVE, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterRangeExpr) {
			listener.enterRangeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitRangeExpr) {
			listener.exitRangeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitRangeExpr) {
			return visitor.visitRangeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InfixCallExprContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(CanonParser.IDENTIFIER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterInfixCallExpr) {
			listener.enterInfixCallExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitInfixCallExpr) {
			listener.exitInfixCallExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitInfixCallExpr) {
			return visitor.visitInfixCallExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShiftExprContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LEFT_SHIFT(): TerminalNode | undefined { return this.tryGetToken(CanonParser.LEFT_SHIFT, 0); }
	public RIGHT_SHIFT(): TerminalNode | undefined { return this.tryGetToken(CanonParser.RIGHT_SHIFT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterShiftExpr) {
			listener.enterShiftExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitShiftExpr) {
			listener.exitShiftExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitShiftExpr) {
			return visitor.visitShiftExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelationalExprContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LESS_THAN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.LESS_THAN, 0); }
	public GREATER_THAN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.GREATER_THAN, 0); }
	public LESS_EQUALS(): TerminalNode | undefined { return this.tryGetToken(CanonParser.LESS_EQUALS, 0); }
	public GREATER_EQUALS(): TerminalNode | undefined { return this.tryGetToken(CanonParser.GREATER_EQUALS, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterRelationalExpr) {
			listener.enterRelationalExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitRelationalExpr) {
			listener.exitRelationalExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitRelationalExpr) {
			return visitor.visitRelationalExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualityExprContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(CanonParser.EQUALS, 0); }
	public NOT_EQUALS(): TerminalNode | undefined { return this.tryGetToken(CanonParser.NOT_EQUALS, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterEqualityExpr) {
			listener.enterEqualityExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitEqualityExpr) {
			listener.exitEqualityExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitEqualityExpr) {
			return visitor.visitEqualityExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitwiseAndExprContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public BIT_AND(): TerminalNode { return this.getToken(CanonParser.BIT_AND, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterBitwiseAndExpr) {
			listener.enterBitwiseAndExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitBitwiseAndExpr) {
			listener.exitBitwiseAndExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitBitwiseAndExpr) {
			return visitor.visitBitwiseAndExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitwiseXorExprContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public BIT_XOR(): TerminalNode { return this.getToken(CanonParser.BIT_XOR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterBitwiseXorExpr) {
			listener.enterBitwiseXorExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitBitwiseXorExpr) {
			listener.exitBitwiseXorExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitBitwiseXorExpr) {
			return visitor.visitBitwiseXorExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitwiseOrExprContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public BIT_OR(): TerminalNode { return this.getToken(CanonParser.BIT_OR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterBitwiseOrExpr) {
			listener.enterBitwiseOrExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitBitwiseOrExpr) {
			listener.exitBitwiseOrExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitBitwiseOrExpr) {
			return visitor.visitBitwiseOrExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalAndExprContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LOGICAL_AND(): TerminalNode { return this.getToken(CanonParser.LOGICAL_AND, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterLogicalAndExpr) {
			listener.enterLogicalAndExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitLogicalAndExpr) {
			listener.exitLogicalAndExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitLogicalAndExpr) {
			return visitor.visitLogicalAndExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalOrExprContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LOGICAL_OR(): TerminalNode { return this.getToken(CanonParser.LOGICAL_OR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterLogicalOrExpr) {
			listener.enterLogicalOrExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitLogicalOrExpr) {
			listener.exitLogicalOrExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitLogicalOrExpr) {
			return visitor.visitLogicalOrExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PipelineExprContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public PIPELINE(): TerminalNode { return this.getToken(CanonParser.PIPELINE, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterPipelineExpr) {
			listener.enterPipelineExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitPipelineExpr) {
			listener.exitPipelineExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitPipelineExpr) {
			return visitor.visitPipelineExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_primary; }
	public copyFrom(ctx: PrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class LiteralExprContext extends PrimaryContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterLiteralExpr) {
			listener.enterLiteralExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitLiteralExpr) {
			listener.exitLiteralExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitLiteralExpr) {
			return visitor.visitLiteralExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListLiteralExprContext extends PrimaryContext {
	public listLiteral(): ListLiteralContext {
		return this.getRuleContext(0, ListLiteralContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterListLiteralExpr) {
			listener.enterListLiteralExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitListLiteralExpr) {
			listener.exitListLiteralExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitListLiteralExpr) {
			return visitor.visitListLiteralExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LambdaExprContext extends PrimaryContext {
	public lambdaExpression(): LambdaExpressionContext {
		return this.getRuleContext(0, LambdaExpressionContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterLambdaExpr) {
			listener.enterLambdaExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitLambdaExpr) {
			listener.exitLambdaExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitLambdaExpr) {
			return visitor.visitLambdaExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AnonFuncExprContext extends PrimaryContext {
	public anonymousFunction(): AnonymousFunctionContext {
		return this.getRuleContext(0, AnonymousFunctionContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterAnonFuncExpr) {
			listener.enterAnonFuncExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitAnonFuncExpr) {
			listener.exitAnonFuncExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitAnonFuncExpr) {
			return visitor.visitAnonFuncExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SpreadExprContext extends PrimaryContext {
	public spreadExpression(): SpreadExpressionContext {
		return this.getRuleContext(0, SpreadExpressionContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterSpreadExpr) {
			listener.enterSpreadExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitSpreadExpr) {
			listener.exitSpreadExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitSpreadExpr) {
			return visitor.visitSpreadExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierExprContext extends PrimaryContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(CanonParser.IDENTIFIER, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterIdentifierExpr) {
			listener.enterIdentifierExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitIdentifierExpr) {
			listener.exitIdentifierExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitIdentifierExpr) {
			return visitor.visitIdentifierExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ThisExprContext extends PrimaryContext {
	public THIS(): TerminalNode { return this.getToken(CanonParser.THIS, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterThisExpr) {
			listener.enterThisExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitThisExpr) {
			listener.exitThisExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitThisExpr) {
			return visitor.visitThisExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfExprContext extends PrimaryContext {
	public IF(): TerminalNode { return this.getToken(CanonParser.IF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CanonParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(CanonParser.RPAREN, 0); }
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(CanonParser.ELSE, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterIfExpr) {
			listener.enterIfExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitIfExpr) {
			listener.exitIfExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitIfExpr) {
			return visitor.visitIfExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenExprContext extends PrimaryContext {
	public LPAREN(): TerminalNode { return this.getToken(CanonParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(CanonParser.RPAREN, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterParenExpr) {
			listener.enterParenExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitParenExpr) {
			listener.exitParenExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitParenExpr) {
			return visitor.visitParenExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CallExprPrimaryContext extends PrimaryContext {
	public callExpression(): CallExpressionContext {
		return this.getRuleContext(0, CallExpressionContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterCallExprPrimary) {
			listener.enterCallExprPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitCallExprPrimary) {
			listener.exitCallExprPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitCallExprPrimary) {
			return visitor.visitCallExprPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public INTEGER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(CanonParser.INTEGER_LITERAL, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(CanonParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(CanonParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_literal; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(CanonParser.STRING_LITERAL, 0); }
	public DOUBLE_STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(CanonParser.DOUBLE_STRING_LITERAL, 0); }
	public templateString(): TemplateStringContext | undefined {
		return this.tryGetRuleContext(0, TemplateStringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_stringLiteral; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateStringContext extends ParserRuleContext {
	public TEMPLATE_STRING_START(): TerminalNode { return this.getToken(CanonParser.TEMPLATE_STRING_START, 0); }
	public TEMPLATE_STRING_END(): TerminalNode { return this.getToken(CanonParser.TEMPLATE_STRING_END, 0); }
	public templateStringContent(): TemplateStringContentContext[];
	public templateStringContent(i: number): TemplateStringContentContext;
	public templateStringContent(i?: number): TemplateStringContentContext | TemplateStringContentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TemplateStringContentContext);
		} else {
			return this.getRuleContext(i, TemplateStringContentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_templateString; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterTemplateString) {
			listener.enterTemplateString(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitTemplateString) {
			listener.exitTemplateString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitTemplateString) {
			return visitor.visitTemplateString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateStringContentContext extends ParserRuleContext {
	public TEMPLATE_STRING_PART(): TerminalNode | undefined { return this.tryGetToken(CanonParser.TEMPLATE_STRING_PART, 0); }
	public TEMPLATE_INTERPOLATION_SIMPLE(): TerminalNode | undefined { return this.tryGetToken(CanonParser.TEMPLATE_INTERPOLATION_SIMPLE, 0); }
	public TEMPLATE_INTERPOLATION_START(): TerminalNode | undefined { return this.tryGetToken(CanonParser.TEMPLATE_INTERPOLATION_START, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public INTERPOLATION_END(): TerminalNode | undefined { return this.tryGetToken(CanonParser.INTERPOLATION_END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_templateStringContent; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterTemplateStringContent) {
			listener.enterTemplateStringContent(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitTemplateStringContent) {
			listener.exitTemplateStringContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitTemplateStringContent) {
			return visitor.visitTemplateStringContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	public ANNOTATION(): TerminalNode { return this.getToken(CanonParser.ANNOTATION, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.RPAREN, 0); }
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_annotation; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterAnnotation) {
			listener.enterAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitAnnotation) {
			listener.exitAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitAnnotation) {
			return visitor.visitAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListLiteralContext extends ParserRuleContext {
	public LBRACKET(): TerminalNode { return this.getToken(CanonParser.LBRACKET, 0); }
	public RBRACKET(): TerminalNode { return this.getToken(CanonParser.RBRACKET, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.COMMA);
		} else {
			return this.getToken(CanonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_listLiteral; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterListLiteral) {
			listener.enterListLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitListLiteral) {
			listener.exitListLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitListLiteral) {
			return visitor.visitListLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaExpressionContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(CanonParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CanonParser.RBRACE, 0); }
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(CanonParser.ARROW, 0); }
	public lambdaBody(): LambdaBodyContext | undefined {
		return this.tryGetRuleContext(0, LambdaBodyContext);
	}
	public lambdaParameters(): LambdaParametersContext | undefined {
		return this.tryGetRuleContext(0, LambdaParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_lambdaExpression; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterLambdaExpression) {
			listener.enterLambdaExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitLambdaExpression) {
			listener.exitLambdaExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitLambdaExpression) {
			return visitor.visitLambdaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaParametersContext extends ParserRuleContext {
	public lambdaParameter(): LambdaParameterContext[];
	public lambdaParameter(i: number): LambdaParameterContext;
	public lambdaParameter(i?: number): LambdaParameterContext | LambdaParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LambdaParameterContext);
		} else {
			return this.getRuleContext(i, LambdaParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.COMMA);
		} else {
			return this.getToken(CanonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_lambdaParameters; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterLambdaParameters) {
			listener.enterLambdaParameters(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitLambdaParameters) {
			listener.exitLambdaParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitLambdaParameters) {
			return visitor.visitLambdaParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaParameterContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(CanonParser.IDENTIFIER, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CanonParser.COLON, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_lambdaParameter; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterLambdaParameter) {
			listener.enterLambdaParameter(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitLambdaParameter) {
			listener.exitLambdaParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitLambdaParameter) {
			return visitor.visitLambdaParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaBodyContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.SEMICOLON);
		} else {
			return this.getToken(CanonParser.SEMICOLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_lambdaBody; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterLambdaBody) {
			listener.enterLambdaBody(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitLambdaBody) {
			listener.exitLambdaBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitLambdaBody) {
			return visitor.visitLambdaBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnonymousFunctionContext extends ParserRuleContext {
	public FUN(): TerminalNode { return this.getToken(CanonParser.FUN, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CanonParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CanonParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CanonParser.COLON, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_anonymousFunction; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterAnonymousFunction) {
			listener.enterAnonymousFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitAnonymousFunction) {
			listener.exitAnonymousFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitAnonymousFunction) {
			return visitor.visitAnonymousFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpreadExpressionContext extends ParserRuleContext {
	public SPREAD(): TerminalNode { return this.getToken(CanonParser.SPREAD, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_spreadExpression; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterSpreadExpression) {
			listener.enterSpreadExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitSpreadExpression) {
			listener.exitSpreadExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitSpreadExpression) {
			return visitor.visitSpreadExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


