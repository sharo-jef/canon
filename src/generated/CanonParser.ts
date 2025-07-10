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
	public static readonly MIXIN = 24;
	public static readonly STRING_TYPE = 25;
	public static readonly INT_TYPE = 26;
	public static readonly FLOAT_TYPE = 27;
	public static readonly BOOL_TYPE = 28;
	public static readonly NULL_TYPE = 29;
	public static readonly PLUS = 30;
	public static readonly MINUS = 31;
	public static readonly MULTIPLY = 32;
	public static readonly DIVIDE = 33;
	public static readonly MODULO = 34;
	public static readonly POWER = 35;
	public static readonly EQUALS = 36;
	public static readonly NOT_EQUALS = 37;
	public static readonly LESS_THAN = 38;
	public static readonly GREATER_THAN = 39;
	public static readonly LESS_EQUALS = 40;
	public static readonly GREATER_EQUALS = 41;
	public static readonly ASSIGN = 42;
	public static readonly PLUS_ASSIGN = 43;
	public static readonly MINUS_ASSIGN = 44;
	public static readonly MULTIPLY_ASSIGN = 45;
	public static readonly DIVIDE_ASSIGN = 46;
	public static readonly MODULO_ASSIGN = 47;
	public static readonly POWER_ASSIGN = 48;
	public static readonly LOGICAL_AND = 49;
	public static readonly LOGICAL_OR = 50;
	public static readonly PIPELINE = 51;
	public static readonly BIT_AND = 52;
	public static readonly BIT_OR = 53;
	public static readonly BIT_XOR = 54;
	public static readonly BIT_NOT = 55;
	public static readonly LEFT_SHIFT = 56;
	public static readonly RIGHT_SHIFT = 57;
	public static readonly RANGE_INCLUSIVE = 58;
	public static readonly RANGE = 59;
	public static readonly SPREAD = 60;
	public static readonly EXCLAMATION = 61;
	public static readonly LBRACE = 62;
	public static readonly RBRACE = 63;
	public static readonly LPAREN = 64;
	public static readonly RPAREN = 65;
	public static readonly LBRACKET = 66;
	public static readonly RBRACKET = 67;
	public static readonly DOT = 68;
	public static readonly COMMA = 69;
	public static readonly COLON = 70;
	public static readonly SEMICOLON = 71;
	public static readonly QUESTION = 72;
	public static readonly ARROW = 73;
	public static readonly STRING_LITERAL = 74;
	public static readonly DOUBLE_STRING_LITERAL = 75;
	public static readonly TEMPLATE_STRING_START = 76;
	public static readonly INTEGER_LITERAL = 77;
	public static readonly TRUE = 78;
	public static readonly FALSE = 79;
	public static readonly ANNOTATION = 80;
	public static readonly IDENTIFIER = 81;
	public static readonly TEMPLATE_STRING_END = 82;
	public static readonly TEMPLATE_STRING_PART = 83;
	public static readonly TEMPLATE_INTERPOLATION_START = 84;
	public static readonly TEMPLATE_INTERPOLATION_SIMPLE = 85;
	public static readonly INTERPOLATION_END = 86;
	public static readonly INTERPOLATION_WS = 87;
	public static readonly INTERPOLATION_NEWLINE = 88;
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
	public static readonly RULE_functionType = 18;
	public static readonly RULE_block = 19;
	public static readonly RULE_structBody = 20;
	public static readonly RULE_structMember = 21;
	public static readonly RULE_statement = 22;
	public static readonly RULE_expressionStatement = 23;
	public static readonly RULE_propertyDeclaration = 24;
	public static readonly RULE_assignmentStatement = 25;
	public static readonly RULE_destructuringAssignment = 26;
	public static readonly RULE_destructuringPattern = 27;
	public static readonly RULE_arrayDestructuringPattern = 28;
	public static readonly RULE_objectDestructuringPattern = 29;
	public static readonly RULE_destructuringElement = 30;
	public static readonly RULE_destructuringProperty = 31;
	public static readonly RULE_initDeclaration = 32;
	public static readonly RULE_getterDeclaration = 33;
	public static readonly RULE_methodDeclaration = 34;
	public static readonly RULE_repeatedDeclaration = 35;
	public static readonly RULE_mixinDeclaration = 36;
	public static readonly RULE_mappingBlock = 37;
	public static readonly RULE_mappingEntry = 38;
	public static readonly RULE_parameterList = 39;
	public static readonly RULE_parameter = 40;
	public static readonly RULE_callExpression = 41;
	public static readonly RULE_argumentList = 42;
	public static readonly RULE_expression = 43;
	public static readonly RULE_primary = 44;
	public static readonly RULE_literal = 45;
	public static readonly RULE_stringLiteral = 46;
	public static readonly RULE_templateString = 47;
	public static readonly RULE_templateStringContent = 48;
	public static readonly RULE_annotation = 49;
	public static readonly RULE_listLiteral = 50;
	public static readonly RULE_lambdaExpression = 51;
	public static readonly RULE_lambdaParameters = 52;
	public static readonly RULE_lambdaParameter = 53;
	public static readonly RULE_lambdaBody = 54;
	public static readonly RULE_anonymousFunction = 55;
	public static readonly RULE_spreadExpression = 56;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "programElement", "schemaDirective", "useStatement", "statementSeparator", 
		"statementSeparators", "topLevelStatement", "topLevelElement", "schemaDeclaration", 
		"structDeclaration", "unionDeclaration", "typeDeclaration", "functionDeclaration", 
		"variableDeclaration", "unionType", "type", "baseType", "primitiveType", 
		"functionType", "block", "structBody", "structMember", "statement", "expressionStatement", 
		"propertyDeclaration", "assignmentStatement", "destructuringAssignment", 
		"destructuringPattern", "arrayDestructuringPattern", "objectDestructuringPattern", 
		"destructuringElement", "destructuringProperty", "initDeclaration", "getterDeclaration", 
		"methodDeclaration", "repeatedDeclaration", "mixinDeclaration", "mappingBlock", 
		"mappingEntry", "parameterList", "parameter", "callExpression", "argumentList", 
		"expression", "primary", "literal", "stringLiteral", "templateString", 
		"templateStringContent", "annotation", "listLiteral", "lambdaExpression", 
		"lambdaParameters", "lambdaParameter", "lambdaBody", "anonymousFunction", 
		"spreadExpression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "'#schema'", undefined, 
		"'schema'", "'struct'", "'union'", "'type'", "'init'", "'private'", "'get'", 
		"'repeated'", "'use'", "'if'", "'else'", "'not'", "'this'", "'val'", "'var'", 
		"'fun'", "'infix'", "'mixin'", "'string'", "'int'", "'float'", "'bool'", 
		"'null'", undefined, undefined, undefined, undefined, "'%'", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'='", 
		"'+='", "'-='", "'*='", "'/='", "'%='", "'**='", undefined, undefined, 
		"'|>'", undefined, undefined, undefined, "'~'", "'<<'", "'>>'", "'..='", 
		"'..'", "'...'", undefined, "'{'", undefined, undefined, undefined, undefined, 
		undefined, undefined, "','", "':'", "';'", "'?'", "'->'", undefined, undefined, 
		undefined, undefined, "'true'", "'false'", undefined, undefined, undefined, 
		undefined, "'${'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WS", "NEWLINE", "LINE_COMMENT", "BLOCK_COMMENT", "SCHEMA_DIRECTIVE", 
		"HASH_COMMENT", "SCHEMA", "STRUCT", "UNION", "TYPE", "INIT", "PRIVATE", 
		"GET", "REPEATED", "USE", "IF", "ELSE", "NOT", "THIS", "VAL", "VAR", "FUN", 
		"INFIX", "MIXIN", "STRING_TYPE", "INT_TYPE", "FLOAT_TYPE", "BOOL_TYPE", 
		"NULL_TYPE", "PLUS", "MINUS", "MULTIPLY", "DIVIDE", "MODULO", "POWER", 
		"EQUALS", "NOT_EQUALS", "LESS_THAN", "GREATER_THAN", "LESS_EQUALS", "GREATER_EQUALS", 
		"ASSIGN", "PLUS_ASSIGN", "MINUS_ASSIGN", "MULTIPLY_ASSIGN", "DIVIDE_ASSIGN", 
		"MODULO_ASSIGN", "POWER_ASSIGN", "LOGICAL_AND", "LOGICAL_OR", "PIPELINE", 
		"BIT_AND", "BIT_OR", "BIT_XOR", "BIT_NOT", "LEFT_SHIFT", "RIGHT_SHIFT", 
		"RANGE_INCLUSIVE", "RANGE", "SPREAD", "EXCLAMATION", "LBRACE", "RBRACE", 
		"LPAREN", "RPAREN", "LBRACKET", "RBRACKET", "DOT", "COMMA", "COLON", "SEMICOLON", 
		"QUESTION", "ARROW", "STRING_LITERAL", "DOUBLE_STRING_LITERAL", "TEMPLATE_STRING_START", 
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
			this.state = 117;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 114;
					this.match(CanonParser.NEWLINE);
					}
					}
				}
				this.state = 119;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 120;
			this.programElement();
			this.state = 126;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 121;
					this.statementSeparators();
					this.state = 122;
					this.programElement();
					}
					}
				}
				this.state = 128;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 132;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 129;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 135;
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
			this.state = 140;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.SCHEMA_DIRECTIVE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 137;
				this.schemaDirective();
				}
				break;
			case CanonParser.USE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 138;
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
				this.state = 139;
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
			this.state = 142;
			this.match(CanonParser.SCHEMA_DIRECTIVE);
			this.state = 143;
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
			this.state = 145;
			this.match(CanonParser.USE);
			this.state = 146;
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
			this.state = 154;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 148;
				this.match(CanonParser.SEMICOLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 149;
				this.match(CanonParser.NEWLINE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 150;
				this.match(CanonParser.SEMICOLON);
				this.state = 151;
				this.match(CanonParser.NEWLINE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 152;
				this.match(CanonParser.NEWLINE);
				this.state = 153;
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
			this.state = 157;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 156;
					this.statementSeparator();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 159;
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
			this.state = 161;
			this.topLevelElement();
			this.state = 167;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE || _la === CanonParser.SEMICOLON) {
				{
				{
				this.state = 162;
				this.statementSeparators();
				this.state = 163;
				this.topLevelElement();
				}
				}
				this.state = 169;
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
			this.state = 179;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 170;
				this.schemaDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 171;
				this.structDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 172;
				this.unionDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 173;
				this.typeDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 174;
				this.variableDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 175;
				this.functionDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 176;
				this.assignmentStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 177;
				this.destructuringAssignment();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 178;
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
			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 181;
				this.annotation();
				}
				}
				this.state = 186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 190;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 187;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 193;
			this.match(CanonParser.SCHEMA);
			this.state = 196;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.LBRACE:
				{
				this.state = 194;
				this.block();
				}
				break;
			case CanonParser.STRING_LITERAL:
			case CanonParser.DOUBLE_STRING_LITERAL:
			case CanonParser.TEMPLATE_STRING_START:
				{
				this.state = 195;
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
			this.state = 201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 198;
				this.annotation();
				}
				}
				this.state = 203;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 204;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 210;
			this.match(CanonParser.STRUCT);
			this.state = 211;
			this.match(CanonParser.IDENTIFIER);
			this.state = 212;
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
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 214;
				this.annotation();
				}
				}
				this.state = 219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 223;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 220;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 225;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 226;
			this.match(CanonParser.UNION);
			this.state = 227;
			this.match(CanonParser.IDENTIFIER);
			this.state = 228;
			this.match(CanonParser.ASSIGN);
			this.state = 229;
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
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 231;
				this.annotation();
				}
				}
				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 240;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 237;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 242;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 243;
			this.match(CanonParser.TYPE);
			this.state = 244;
			this.match(CanonParser.IDENTIFIER);
			this.state = 245;
			this.match(CanonParser.ASSIGN);
			this.state = 246;
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
			this.state = 251;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 248;
				this.annotation();
				}
				}
				this.state = 253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 254;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 259;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 268;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.INFIX:
				{
				this.state = 260;
				this.match(CanonParser.INFIX);
				this.state = 261;
				this.match(CanonParser.FUN);
				this.state = 262;
				this.type();
				this.state = 263;
				this.match(CanonParser.DOT);
				this.state = 264;
				this.match(CanonParser.IDENTIFIER);
				}
				break;
			case CanonParser.FUN:
				{
				this.state = 266;
				this.match(CanonParser.FUN);
				this.state = 267;
				this.match(CanonParser.IDENTIFIER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 270;
			this.match(CanonParser.LPAREN);
			this.state = 272;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.THIS || _la === CanonParser.IDENTIFIER) {
				{
				this.state = 271;
				this.parameterList();
				}
			}

			this.state = 274;
			this.match(CanonParser.RPAREN);
			this.state = 277;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 275;
				this.match(CanonParser.COLON);
				this.state = 276;
				this.type();
				}
			}

			this.state = 279;
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
			this.state = 284;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 281;
				this.annotation();
				}
				}
				this.state = 286;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 290;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 287;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 292;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 293;
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
			this.state = 294;
			this.match(CanonParser.IDENTIFIER);
			this.state = 297;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 295;
				this.match(CanonParser.COLON);
				this.state = 296;
				this.type();
				}
			}

			this.state = 299;
			this.match(CanonParser.ASSIGN);
			this.state = 300;
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
			this.state = 302;
			this.type();
			this.state = 307;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.BIT_OR) {
				{
				{
				this.state = 303;
				this.match(CanonParser.BIT_OR);
				this.state = 304;
				this.type();
				}
				}
				this.state = 309;
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
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 310;
			this.baseType();
			this.state = 315;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 311;
					this.match(CanonParser.LBRACKET);
					this.state = 312;
					this.match(CanonParser.RBRACKET);
					}
					}
				}
				this.state = 317;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			}
			this.state = 319;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 318;
				this.match(CanonParser.QUESTION);
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
	public baseType(): BaseTypeContext {
		let _localctx: BaseTypeContext = new BaseTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CanonParser.RULE_baseType);
		try {
			this.state = 324;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.STRING_TYPE:
			case CanonParser.INT_TYPE:
			case CanonParser.FLOAT_TYPE:
			case CanonParser.BOOL_TYPE:
			case CanonParser.NULL_TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 321;
				this.primitiveType();
				}
				break;
			case CanonParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 322;
				this.match(CanonParser.IDENTIFIER);
				}
				break;
			case CanonParser.LPAREN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 323;
				this.functionType();
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
			this.state = 326;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.STRING_TYPE) | (1 << CanonParser.INT_TYPE) | (1 << CanonParser.FLOAT_TYPE) | (1 << CanonParser.BOOL_TYPE) | (1 << CanonParser.NULL_TYPE))) !== 0))) {
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
	public functionType(): FunctionTypeContext {
		let _localctx: FunctionTypeContext = new FunctionTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CanonParser.RULE_functionType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			this.match(CanonParser.LPAREN);
			this.state = 337;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.STRING_TYPE) | (1 << CanonParser.INT_TYPE) | (1 << CanonParser.FLOAT_TYPE) | (1 << CanonParser.BOOL_TYPE) | (1 << CanonParser.NULL_TYPE))) !== 0) || _la === CanonParser.LPAREN || _la === CanonParser.IDENTIFIER) {
				{
				this.state = 329;
				this.type();
				this.state = 334;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CanonParser.COMMA) {
					{
					{
					this.state = 330;
					this.match(CanonParser.COMMA);
					this.state = 331;
					this.type();
					}
					}
					this.state = 336;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 339;
			this.match(CanonParser.RPAREN);
			this.state = 340;
			this.match(CanonParser.ARROW);
			this.state = 341;
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
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CanonParser.RULE_block);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 343;
			this.match(CanonParser.LBRACE);
			this.state = 347;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 344;
					this.match(CanonParser.NEWLINE);
					}
					}
				}
				this.state = 349;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			}
			this.state = 361;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 350;
					this.statement();
					this.state = 356;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 351;
							this.statementSeparators();
							this.state = 352;
							this.statement();
							}
							}
						}
						this.state = 358;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
					}
					}
					}
				}
				this.state = 363;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			}
			this.state = 367;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 364;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 369;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 370;
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
		this.enterRule(_localctx, 40, CanonParser.RULE_structBody);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 372;
			this.match(CanonParser.LBRACE);
			this.state = 376;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 373;
					this.match(CanonParser.NEWLINE);
					}
					}
				}
				this.state = 378;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			}
			this.state = 390;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 379;
					this.structMember();
					this.state = 385;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 380;
							this.statementSeparators();
							this.state = 381;
							this.structMember();
							}
							}
						}
						this.state = 387;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
					}
					}
					}
				}
				this.state = 392;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			}
			this.state = 396;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 393;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 398;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 399;
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
		this.enterRule(_localctx, 42, CanonParser.RULE_structMember);
		try {
			this.state = 407;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 401;
				this.propertyDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 402;
				this.initDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 403;
				this.getterDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 404;
				this.methodDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 405;
				this.repeatedDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 406;
				this.mixinDeclaration();
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
		this.enterRule(_localctx, 44, CanonParser.RULE_statement);
		try {
			this.state = 417;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 409;
				this.assignmentStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 410;
				this.expressionStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 411;
				this.propertyDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 412;
				this.initDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 413;
				this.getterDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 414;
				this.methodDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 415;
				this.repeatedDeclaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 416;
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
		this.enterRule(_localctx, 46, CanonParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 419;
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
		this.enterRule(_localctx, 48, CanonParser.RULE_propertyDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 424;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 421;
				this.annotation();
				}
				}
				this.state = 426;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 430;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 427;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 432;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 434;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.PRIVATE) {
				{
				this.state = 433;
				this.match(CanonParser.PRIVATE);
				}
			}

			this.state = 436;
			this.match(CanonParser.IDENTIFIER);
			this.state = 446;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON || _la === CanonParser.QUESTION) {
				{
				this.state = 438;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.QUESTION) {
					{
					this.state = 437;
					this.match(CanonParser.QUESTION);
					}
				}

				this.state = 440;
				this.match(CanonParser.COLON);
				this.state = 441;
				this.type();
				this.state = 444;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.ASSIGN) {
					{
					this.state = 442;
					this.match(CanonParser.ASSIGN);
					this.state = 443;
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
		this.enterRule(_localctx, 50, CanonParser.RULE_assignmentStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 450;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.THIS) {
				{
				this.state = 448;
				this.match(CanonParser.THIS);
				this.state = 449;
				this.match(CanonParser.DOT);
				}
			}

			this.state = 452;
			this.match(CanonParser.IDENTIFIER);
			this.state = 453;
			_la = this._input.LA(1);
			if (!(((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (CanonParser.ASSIGN - 42)) | (1 << (CanonParser.PLUS_ASSIGN - 42)) | (1 << (CanonParser.MINUS_ASSIGN - 42)) | (1 << (CanonParser.MULTIPLY_ASSIGN - 42)) | (1 << (CanonParser.DIVIDE_ASSIGN - 42)) | (1 << (CanonParser.MODULO_ASSIGN - 42)) | (1 << (CanonParser.POWER_ASSIGN - 42)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 454;
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
		this.enterRule(_localctx, 52, CanonParser.RULE_destructuringAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 456;
			this.destructuringPattern();
			this.state = 457;
			this.match(CanonParser.ASSIGN);
			this.state = 458;
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
		this.enterRule(_localctx, 54, CanonParser.RULE_destructuringPattern);
		try {
			this.state = 462;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.LBRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 460;
				this.arrayDestructuringPattern();
				}
				break;
			case CanonParser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 461;
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
		this.enterRule(_localctx, 56, CanonParser.RULE_arrayDestructuringPattern);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 464;
			this.match(CanonParser.LBRACKET);
			this.state = 465;
			this.destructuringElement();
			this.state = 470;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.COMMA) {
				{
				{
				this.state = 466;
				this.match(CanonParser.COMMA);
				this.state = 467;
				this.destructuringElement();
				}
				}
				this.state = 472;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 473;
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
		this.enterRule(_localctx, 58, CanonParser.RULE_objectDestructuringPattern);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 475;
			this.match(CanonParser.LBRACE);
			this.state = 476;
			this.destructuringProperty();
			this.state = 481;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.COMMA) {
				{
				{
				this.state = 477;
				this.match(CanonParser.COMMA);
				this.state = 478;
				this.destructuringProperty();
				}
				}
				this.state = 483;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 484;
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
		this.enterRule(_localctx, 60, CanonParser.RULE_destructuringElement);
		let _la: number;
		try {
			this.state = 494;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 486;
				this.match(CanonParser.IDENTIFIER);
				this.state = 489;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.ASSIGN) {
					{
					this.state = 487;
					this.match(CanonParser.ASSIGN);
					this.state = 488;
					this.expression(0);
					}
				}

				}
				break;
			case CanonParser.LBRACE:
			case CanonParser.LBRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 491;
				this.destructuringPattern();
				}
				break;
			case CanonParser.SPREAD:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 492;
				this.match(CanonParser.SPREAD);
				this.state = 493;
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
		this.enterRule(_localctx, 62, CanonParser.RULE_destructuringProperty);
		let _la: number;
		try {
			this.state = 508;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 496;
				this.match(CanonParser.IDENTIFIER);
				this.state = 499;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.ASSIGN) {
					{
					this.state = 497;
					this.match(CanonParser.ASSIGN);
					this.state = 498;
					this.expression(0);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 501;
				this.match(CanonParser.IDENTIFIER);
				this.state = 502;
				this.match(CanonParser.COLON);
				this.state = 503;
				this.match(CanonParser.IDENTIFIER);
				this.state = 506;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.ASSIGN) {
					{
					this.state = 504;
					this.match(CanonParser.ASSIGN);
					this.state = 505;
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
		this.enterRule(_localctx, 64, CanonParser.RULE_initDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 513;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 510;
				this.annotation();
				}
				}
				this.state = 515;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 519;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 516;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 521;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 522;
			this.match(CanonParser.INIT);
			this.state = 528;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.LPAREN) {
				{
				this.state = 523;
				this.match(CanonParser.LPAREN);
				this.state = 525;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.THIS || _la === CanonParser.IDENTIFIER) {
					{
					this.state = 524;
					this.parameterList();
					}
				}

				this.state = 527;
				this.match(CanonParser.RPAREN);
				}
			}

			this.state = 530;
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
		this.enterRule(_localctx, 66, CanonParser.RULE_getterDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 535;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 532;
				this.annotation();
				}
				}
				this.state = 537;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 541;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 538;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 543;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 544;
			this.match(CanonParser.GET);
			this.state = 545;
			this.match(CanonParser.IDENTIFIER);
			this.state = 546;
			this.match(CanonParser.LPAREN);
			this.state = 547;
			this.match(CanonParser.RPAREN);
			this.state = 550;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 548;
				this.match(CanonParser.COLON);
				this.state = 549;
				this.type();
				}
			}

			this.state = 552;
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
		this.enterRule(_localctx, 68, CanonParser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 557;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 554;
				this.annotation();
				}
				}
				this.state = 559;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 563;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 560;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 565;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 567;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.PRIVATE) {
				{
				this.state = 566;
				this.match(CanonParser.PRIVATE);
				}
			}

			this.state = 569;
			this.match(CanonParser.FUN);
			this.state = 570;
			this.match(CanonParser.IDENTIFIER);
			this.state = 571;
			this.match(CanonParser.LPAREN);
			this.state = 573;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.THIS || _la === CanonParser.IDENTIFIER) {
				{
				this.state = 572;
				this.parameterList();
				}
			}

			this.state = 575;
			this.match(CanonParser.RPAREN);
			this.state = 578;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 576;
				this.match(CanonParser.COLON);
				this.state = 577;
				this.type();
				}
			}

			this.state = 580;
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
		this.enterRule(_localctx, 70, CanonParser.RULE_repeatedDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 585;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 582;
				this.annotation();
				}
				}
				this.state = 587;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 591;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 588;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 593;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 594;
			this.match(CanonParser.REPEATED);
			this.state = 595;
			this.match(CanonParser.IDENTIFIER);
			this.state = 596;
			this.match(CanonParser.COLON);
			this.state = 597;
			this.type();
			this.state = 599;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				{
				this.state = 598;
				this.mappingBlock();
				}
				break;
			}
			this.state = 603;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.ASSIGN) {
				{
				this.state = 601;
				this.match(CanonParser.ASSIGN);
				this.state = 602;
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
	public mixinDeclaration(): MixinDeclarationContext {
		let _localctx: MixinDeclarationContext = new MixinDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, CanonParser.RULE_mixinDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 608;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 605;
				this.annotation();
				}
				}
				this.state = 610;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 614;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 611;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 616;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 617;
			this.match(CanonParser.MIXIN);
			this.state = 618;
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
	public mappingBlock(): MappingBlockContext {
		let _localctx: MappingBlockContext = new MappingBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, CanonParser.RULE_mappingBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 620;
			this.match(CanonParser.LBRACE);
			this.state = 624;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 621;
					this.match(CanonParser.NEWLINE);
					}
					}
				}
				this.state = 626;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
			}
			this.state = 636;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.IDENTIFIER) {
				{
				this.state = 627;
				this.mappingEntry();
				this.state = 633;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 628;
						this.statementSeparators();
						this.state = 629;
						this.mappingEntry();
						}
						}
					}
					this.state = 635;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
				}
				}
			}

			this.state = 641;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 638;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 643;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 644;
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
		this.enterRule(_localctx, 76, CanonParser.RULE_mappingEntry);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 646;
			this.match(CanonParser.IDENTIFIER);
			this.state = 647;
			this.match(CanonParser.ARROW);
			this.state = 648;
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
		this.enterRule(_localctx, 78, CanonParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 650;
			this.parameter();
			this.state = 655;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.COMMA) {
				{
				{
				this.state = 651;
				this.match(CanonParser.COMMA);
				this.state = 652;
				this.parameter();
				}
				}
				this.state = 657;
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
		this.enterRule(_localctx, 80, CanonParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 660;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.THIS) {
				{
				this.state = 658;
				this.match(CanonParser.THIS);
				this.state = 659;
				this.match(CanonParser.DOT);
				}
			}

			this.state = 662;
			this.match(CanonParser.IDENTIFIER);
			this.state = 665;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 663;
				this.match(CanonParser.COLON);
				this.state = 664;
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
		this.enterRule(_localctx, 82, CanonParser.RULE_callExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 667;
			this.match(CanonParser.IDENTIFIER);
			this.state = 673;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				{
				this.state = 668;
				this.match(CanonParser.LPAREN);
				this.state = 670;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.FUN) | (1 << CanonParser.STRING_TYPE) | (1 << CanonParser.INT_TYPE) | (1 << CanonParser.FLOAT_TYPE) | (1 << CanonParser.BOOL_TYPE) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (CanonParser.BIT_NOT - 55)) | (1 << (CanonParser.SPREAD - 55)) | (1 << (CanonParser.LBRACE - 55)) | (1 << (CanonParser.LPAREN - 55)) | (1 << (CanonParser.LBRACKET - 55)) | (1 << (CanonParser.STRING_LITERAL - 55)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 55)) | (1 << (CanonParser.TEMPLATE_STRING_START - 55)) | (1 << (CanonParser.INTEGER_LITERAL - 55)) | (1 << (CanonParser.TRUE - 55)) | (1 << (CanonParser.FALSE - 55)) | (1 << (CanonParser.IDENTIFIER - 55)))) !== 0)) {
					{
					this.state = 669;
					this.argumentList();
					}
				}

				this.state = 672;
				this.match(CanonParser.RPAREN);
				}
				break;
			}
			this.state = 676;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				{
				this.state = 675;
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
		this.enterRule(_localctx, 84, CanonParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 678;
			this.expression(0);
			this.state = 683;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.COMMA) {
				{
				{
				this.state = 679;
				this.match(CanonParser.COMMA);
				this.state = 680;
				this.expression(0);
				}
				}
				this.state = 685;
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
		let _startState: number = 86;
		this.enterRecursionRule(_localctx, 86, CanonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 714;
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

				this.state = 687;
				this.primary();
				}
				break;
			case CanonParser.MINUS:
				{
				_localctx = new UnaryMinusExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 688;
				this.match(CanonParser.MINUS);
				this.state = 689;
				this.expression(26);
				}
				break;
			case CanonParser.NOT:
				{
				_localctx = new LogicalNotExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 690;
				this.match(CanonParser.NOT);
				this.state = 691;
				this.expression(25);
				}
				break;
			case CanonParser.BIT_NOT:
				{
				_localctx = new BitwiseNotExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 692;
				this.match(CanonParser.BIT_NOT);
				this.state = 693;
				this.expression(24);
				}
				break;
			case CanonParser.INT_TYPE:
				{
				_localctx = new TypeCastExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 694;
				this.match(CanonParser.INT_TYPE);
				this.state = 695;
				this.match(CanonParser.LPAREN);
				this.state = 696;
				this.expression(0);
				this.state = 697;
				this.match(CanonParser.RPAREN);
				}
				break;
			case CanonParser.FLOAT_TYPE:
				{
				_localctx = new TypeCastExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 699;
				this.match(CanonParser.FLOAT_TYPE);
				this.state = 700;
				this.match(CanonParser.LPAREN);
				this.state = 701;
				this.expression(0);
				this.state = 702;
				this.match(CanonParser.RPAREN);
				}
				break;
			case CanonParser.STRING_TYPE:
				{
				_localctx = new TypeCastExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 704;
				this.match(CanonParser.STRING_TYPE);
				this.state = 705;
				this.match(CanonParser.LPAREN);
				this.state = 706;
				this.expression(0);
				this.state = 707;
				this.match(CanonParser.RPAREN);
				}
				break;
			case CanonParser.BOOL_TYPE:
				{
				_localctx = new TypeCastExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 709;
				this.match(CanonParser.BOOL_TYPE);
				this.state = 710;
				this.match(CanonParser.LPAREN);
				this.state = 711;
				this.expression(0);
				this.state = 712;
				this.match(CanonParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 786;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 784;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
					case 1:
						{
						_localctx = new PowerExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 716;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 717;
						this.match(CanonParser.POWER);
						this.state = 718;
						this.expression(15);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 719;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 720;
						(_localctx as MulDivModExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CanonParser.MULTIPLY - 32)) | (1 << (CanonParser.DIVIDE - 32)) | (1 << (CanonParser.MODULO - 32)))) !== 0))) {
							(_localctx as MulDivModExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 721;
						this.expression(14);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 722;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 723;
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
						this.state = 724;
						this.expression(13);
						}
						break;

					case 4:
						{
						_localctx = new RangeExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 725;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 726;
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
						this.state = 727;
						this.expression(12);
						}
						break;

					case 5:
						{
						_localctx = new InfixCallExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 728;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 729;
						this.match(CanonParser.IDENTIFIER);
						this.state = 730;
						this.expression(11);
						}
						break;

					case 6:
						{
						_localctx = new ShiftExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 731;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 732;
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
						this.state = 733;
						this.expression(10);
						}
						break;

					case 7:
						{
						_localctx = new RelationalExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 734;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 735;
						(_localctx as RelationalExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (CanonParser.LESS_THAN - 38)) | (1 << (CanonParser.GREATER_THAN - 38)) | (1 << (CanonParser.LESS_EQUALS - 38)) | (1 << (CanonParser.GREATER_EQUALS - 38)))) !== 0))) {
							(_localctx as RelationalExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 736;
						this.expression(9);
						}
						break;

					case 8:
						{
						_localctx = new EqualityExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 737;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 738;
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
						this.state = 739;
						this.expression(8);
						}
						break;

					case 9:
						{
						_localctx = new BitwiseAndExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 740;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 741;
						this.match(CanonParser.BIT_AND);
						this.state = 742;
						this.expression(7);
						}
						break;

					case 10:
						{
						_localctx = new BitwiseXorExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 743;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 744;
						this.match(CanonParser.BIT_XOR);
						this.state = 745;
						this.expression(6);
						}
						break;

					case 11:
						{
						_localctx = new BitwiseOrExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 746;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 747;
						this.match(CanonParser.BIT_OR);
						this.state = 748;
						this.expression(5);
						}
						break;

					case 12:
						{
						_localctx = new LogicalAndExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 749;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 750;
						this.match(CanonParser.LOGICAL_AND);
						this.state = 751;
						this.expression(4);
						}
						break;

					case 13:
						{
						_localctx = new LogicalOrExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 752;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 753;
						this.match(CanonParser.LOGICAL_OR);
						this.state = 754;
						this.expression(3);
						}
						break;

					case 14:
						{
						_localctx = new PipelineExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 755;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 756;
						this.match(CanonParser.PIPELINE);
						this.state = 757;
						this.expression(2);
						}
						break;

					case 15:
						{
						_localctx = new MemberAccessExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 758;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 759;
						this.match(CanonParser.DOT);
						this.state = 760;
						this.match(CanonParser.IDENTIFIER);
						}
						break;

					case 16:
						{
						_localctx = new IndexAccessExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 761;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 762;
						this.match(CanonParser.LBRACKET);
						this.state = 763;
						this.expression(0);
						this.state = 764;
						this.match(CanonParser.RBRACKET);
						}
						break;

					case 17:
						{
						_localctx = new SliceExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 766;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 767;
						this.match(CanonParser.LBRACKET);
						this.state = 769;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.FUN) | (1 << CanonParser.STRING_TYPE) | (1 << CanonParser.INT_TYPE) | (1 << CanonParser.FLOAT_TYPE) | (1 << CanonParser.BOOL_TYPE) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (CanonParser.BIT_NOT - 55)) | (1 << (CanonParser.SPREAD - 55)) | (1 << (CanonParser.LBRACE - 55)) | (1 << (CanonParser.LPAREN - 55)) | (1 << (CanonParser.LBRACKET - 55)) | (1 << (CanonParser.STRING_LITERAL - 55)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 55)) | (1 << (CanonParser.TEMPLATE_STRING_START - 55)) | (1 << (CanonParser.INTEGER_LITERAL - 55)) | (1 << (CanonParser.TRUE - 55)) | (1 << (CanonParser.FALSE - 55)) | (1 << (CanonParser.IDENTIFIER - 55)))) !== 0)) {
							{
							this.state = 768;
							this.expression(0);
							}
						}

						this.state = 771;
						this.match(CanonParser.RANGE);
						this.state = 773;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.FUN) | (1 << CanonParser.STRING_TYPE) | (1 << CanonParser.INT_TYPE) | (1 << CanonParser.FLOAT_TYPE) | (1 << CanonParser.BOOL_TYPE) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (CanonParser.BIT_NOT - 55)) | (1 << (CanonParser.SPREAD - 55)) | (1 << (CanonParser.LBRACE - 55)) | (1 << (CanonParser.LPAREN - 55)) | (1 << (CanonParser.LBRACKET - 55)) | (1 << (CanonParser.STRING_LITERAL - 55)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 55)) | (1 << (CanonParser.TEMPLATE_STRING_START - 55)) | (1 << (CanonParser.INTEGER_LITERAL - 55)) | (1 << (CanonParser.TRUE - 55)) | (1 << (CanonParser.FALSE - 55)) | (1 << (CanonParser.IDENTIFIER - 55)))) !== 0)) {
							{
							this.state = 772;
							this.expression(0);
							}
						}

						this.state = 775;
						this.match(CanonParser.RBRACKET);
						}
						break;

					case 18:
						{
						_localctx = new FuncCallExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 776;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 777;
						this.match(CanonParser.LPAREN);
						this.state = 779;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.FUN) | (1 << CanonParser.STRING_TYPE) | (1 << CanonParser.INT_TYPE) | (1 << CanonParser.FLOAT_TYPE) | (1 << CanonParser.BOOL_TYPE) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (CanonParser.BIT_NOT - 55)) | (1 << (CanonParser.SPREAD - 55)) | (1 << (CanonParser.LBRACE - 55)) | (1 << (CanonParser.LPAREN - 55)) | (1 << (CanonParser.LBRACKET - 55)) | (1 << (CanonParser.STRING_LITERAL - 55)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 55)) | (1 << (CanonParser.TEMPLATE_STRING_START - 55)) | (1 << (CanonParser.INTEGER_LITERAL - 55)) | (1 << (CanonParser.TRUE - 55)) | (1 << (CanonParser.FALSE - 55)) | (1 << (CanonParser.IDENTIFIER - 55)))) !== 0)) {
							{
							this.state = 778;
							this.argumentList();
							}
						}

						this.state = 781;
						this.match(CanonParser.RPAREN);
						}
						break;

					case 19:
						{
						_localctx = new NonNullAssertExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 782;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 783;
						this.match(CanonParser.EXCLAMATION);
						}
						break;
					}
					}
				}
				this.state = 788;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
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
		this.enterRule(_localctx, 88, CanonParser.RULE_primary);
		try {
			this.state = 816;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				_localctx = new LiteralExprContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 789;
				this.literal();
				}
				break;

			case 2:
				_localctx = new ListLiteralExprContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 790;
				this.listLiteral();
				}
				break;

			case 3:
				_localctx = new LambdaExprContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 791;
				this.lambdaExpression();
				}
				break;

			case 4:
				_localctx = new AnonFuncExprContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 792;
				this.anonymousFunction();
				}
				break;

			case 5:
				_localctx = new SpreadExprContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 793;
				this.spreadExpression();
				}
				break;

			case 6:
				_localctx = new IdentifierExprContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 794;
				this.match(CanonParser.IDENTIFIER);
				}
				break;

			case 7:
				_localctx = new ThisExprContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 795;
				this.match(CanonParser.THIS);
				}
				break;

			case 8:
				_localctx = new IfExprContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 796;
				this.match(CanonParser.IF);
				this.state = 797;
				this.match(CanonParser.LPAREN);
				this.state = 798;
				this.expression(0);
				this.state = 799;
				this.match(CanonParser.RPAREN);
				this.state = 802;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
				case 1:
					{
					this.state = 800;
					this.expression(0);
					}
					break;

				case 2:
					{
					this.state = 801;
					this.block();
					}
					break;
				}
				this.state = 809;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
				case 1:
					{
					this.state = 804;
					this.match(CanonParser.ELSE);
					this.state = 807;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
					case 1:
						{
						this.state = 805;
						this.expression(0);
						}
						break;

					case 2:
						{
						this.state = 806;
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
				this.state = 811;
				this.match(CanonParser.LPAREN);
				this.state = 812;
				this.expression(0);
				this.state = 813;
				this.match(CanonParser.RPAREN);
				}
				break;

			case 10:
				_localctx = new CallExprPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 815;
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
		this.enterRule(_localctx, 90, CanonParser.RULE_literal);
		try {
			this.state = 822;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.STRING_LITERAL:
			case CanonParser.DOUBLE_STRING_LITERAL:
			case CanonParser.TEMPLATE_STRING_START:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 818;
				this.stringLiteral();
				}
				break;
			case CanonParser.INTEGER_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 819;
				this.match(CanonParser.INTEGER_LITERAL);
				}
				break;
			case CanonParser.TRUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 820;
				this.match(CanonParser.TRUE);
				}
				break;
			case CanonParser.FALSE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 821;
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
		this.enterRule(_localctx, 92, CanonParser.RULE_stringLiteral);
		try {
			this.state = 827;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 824;
				this.match(CanonParser.STRING_LITERAL);
				}
				break;
			case CanonParser.DOUBLE_STRING_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 825;
				this.match(CanonParser.DOUBLE_STRING_LITERAL);
				}
				break;
			case CanonParser.TEMPLATE_STRING_START:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 826;
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
		this.enterRule(_localctx, 94, CanonParser.RULE_templateString);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 829;
			this.match(CanonParser.TEMPLATE_STRING_START);
			this.state = 833;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (CanonParser.TEMPLATE_STRING_PART - 83)) | (1 << (CanonParser.TEMPLATE_INTERPOLATION_START - 83)) | (1 << (CanonParser.TEMPLATE_INTERPOLATION_SIMPLE - 83)))) !== 0)) {
				{
				{
				this.state = 830;
				this.templateStringContent();
				}
				}
				this.state = 835;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 836;
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
		this.enterRule(_localctx, 96, CanonParser.RULE_templateStringContent);
		try {
			this.state = 844;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.TEMPLATE_STRING_PART:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 838;
				this.match(CanonParser.TEMPLATE_STRING_PART);
				}
				break;
			case CanonParser.TEMPLATE_INTERPOLATION_SIMPLE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 839;
				this.match(CanonParser.TEMPLATE_INTERPOLATION_SIMPLE);
				}
				break;
			case CanonParser.TEMPLATE_INTERPOLATION_START:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 840;
				this.match(CanonParser.TEMPLATE_INTERPOLATION_START);
				this.state = 841;
				this.expression(0);
				this.state = 842;
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
		this.enterRule(_localctx, 98, CanonParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 846;
			this.match(CanonParser.ANNOTATION);
			this.state = 853;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.LPAREN:
				{
				this.state = 847;
				this.match(CanonParser.LPAREN);
				this.state = 849;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.FUN) | (1 << CanonParser.STRING_TYPE) | (1 << CanonParser.INT_TYPE) | (1 << CanonParser.FLOAT_TYPE) | (1 << CanonParser.BOOL_TYPE) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (CanonParser.BIT_NOT - 55)) | (1 << (CanonParser.SPREAD - 55)) | (1 << (CanonParser.LBRACE - 55)) | (1 << (CanonParser.LPAREN - 55)) | (1 << (CanonParser.LBRACKET - 55)) | (1 << (CanonParser.STRING_LITERAL - 55)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 55)) | (1 << (CanonParser.TEMPLATE_STRING_START - 55)) | (1 << (CanonParser.INTEGER_LITERAL - 55)) | (1 << (CanonParser.TRUE - 55)) | (1 << (CanonParser.FALSE - 55)) | (1 << (CanonParser.IDENTIFIER - 55)))) !== 0)) {
					{
					this.state = 848;
					this.argumentList();
					}
				}

				this.state = 851;
				this.match(CanonParser.RPAREN);
				}
				break;
			case CanonParser.STRING_LITERAL:
			case CanonParser.DOUBLE_STRING_LITERAL:
			case CanonParser.TEMPLATE_STRING_START:
				{
				this.state = 852;
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
			case CanonParser.MIXIN:
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
		this.enterRule(_localctx, 100, CanonParser.RULE_listLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 855;
			this.match(CanonParser.LBRACKET);
			this.state = 864;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.FUN) | (1 << CanonParser.STRING_TYPE) | (1 << CanonParser.INT_TYPE) | (1 << CanonParser.FLOAT_TYPE) | (1 << CanonParser.BOOL_TYPE) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (CanonParser.BIT_NOT - 55)) | (1 << (CanonParser.SPREAD - 55)) | (1 << (CanonParser.LBRACE - 55)) | (1 << (CanonParser.LPAREN - 55)) | (1 << (CanonParser.LBRACKET - 55)) | (1 << (CanonParser.STRING_LITERAL - 55)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 55)) | (1 << (CanonParser.TEMPLATE_STRING_START - 55)) | (1 << (CanonParser.INTEGER_LITERAL - 55)) | (1 << (CanonParser.TRUE - 55)) | (1 << (CanonParser.FALSE - 55)) | (1 << (CanonParser.IDENTIFIER - 55)))) !== 0)) {
				{
				this.state = 856;
				this.expression(0);
				this.state = 861;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CanonParser.COMMA) {
					{
					{
					this.state = 857;
					this.match(CanonParser.COMMA);
					this.state = 858;
					this.expression(0);
					}
					}
					this.state = 863;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 866;
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
		this.enterRule(_localctx, 102, CanonParser.RULE_lambdaExpression);
		try {
			this.state = 893;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 868;
				this.match(CanonParser.LBRACE);
				this.state = 869;
				this.match(CanonParser.RBRACE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 870;
				this.match(CanonParser.LBRACE);
				this.state = 871;
				this.match(CanonParser.ARROW);
				this.state = 872;
				this.match(CanonParser.RBRACE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 873;
				this.match(CanonParser.LBRACE);
				this.state = 874;
				this.match(CanonParser.ARROW);
				this.state = 875;
				this.lambdaBody();
				this.state = 876;
				this.match(CanonParser.RBRACE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 878;
				this.match(CanonParser.LBRACE);
				this.state = 879;
				this.lambdaParameters();
				this.state = 880;
				this.match(CanonParser.ARROW);
				this.state = 881;
				this.match(CanonParser.RBRACE);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 883;
				this.match(CanonParser.LBRACE);
				this.state = 884;
				this.lambdaParameters();
				this.state = 885;
				this.match(CanonParser.ARROW);
				this.state = 886;
				this.lambdaBody();
				this.state = 887;
				this.match(CanonParser.RBRACE);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 889;
				this.match(CanonParser.LBRACE);
				this.state = 890;
				this.lambdaBody();
				this.state = 891;
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
		this.enterRule(_localctx, 104, CanonParser.RULE_lambdaParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 895;
			this.lambdaParameter();
			this.state = 900;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.COMMA) {
				{
				{
				this.state = 896;
				this.match(CanonParser.COMMA);
				this.state = 897;
				this.lambdaParameter();
				}
				}
				this.state = 902;
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
		this.enterRule(_localctx, 106, CanonParser.RULE_lambdaParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 903;
			this.match(CanonParser.IDENTIFIER);
			this.state = 906;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 904;
				this.match(CanonParser.COLON);
				this.state = 905;
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
		this.enterRule(_localctx, 108, CanonParser.RULE_lambdaBody);
		let _la: number;
		try {
			this.state = 921;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 908;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 917;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 909;
					this.statement();
					this.state = 914;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CanonParser.SEMICOLON) {
						{
						{
						this.state = 910;
						this.match(CanonParser.SEMICOLON);
						this.state = 911;
						this.statement();
						}
						}
						this.state = 916;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 919;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.NEWLINE) | (1 << CanonParser.INIT) | (1 << CanonParser.PRIVATE) | (1 << CanonParser.GET) | (1 << CanonParser.REPEATED) | (1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.VAL) | (1 << CanonParser.VAR) | (1 << CanonParser.FUN) | (1 << CanonParser.STRING_TYPE) | (1 << CanonParser.INT_TYPE) | (1 << CanonParser.FLOAT_TYPE) | (1 << CanonParser.BOOL_TYPE) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (CanonParser.BIT_NOT - 55)) | (1 << (CanonParser.SPREAD - 55)) | (1 << (CanonParser.LBRACE - 55)) | (1 << (CanonParser.LPAREN - 55)) | (1 << (CanonParser.LBRACKET - 55)) | (1 << (CanonParser.STRING_LITERAL - 55)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 55)) | (1 << (CanonParser.TEMPLATE_STRING_START - 55)) | (1 << (CanonParser.INTEGER_LITERAL - 55)) | (1 << (CanonParser.TRUE - 55)) | (1 << (CanonParser.FALSE - 55)) | (1 << (CanonParser.ANNOTATION - 55)) | (1 << (CanonParser.IDENTIFIER - 55)))) !== 0));
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
		this.enterRule(_localctx, 110, CanonParser.RULE_anonymousFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 923;
			this.match(CanonParser.FUN);
			this.state = 924;
			this.match(CanonParser.LPAREN);
			this.state = 926;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.THIS || _la === CanonParser.IDENTIFIER) {
				{
				this.state = 925;
				this.parameterList();
				}
			}

			this.state = 928;
			this.match(CanonParser.RPAREN);
			this.state = 931;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 929;
				this.match(CanonParser.COLON);
				this.state = 930;
				this.type();
				}
			}

			this.state = 933;
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
		this.enterRule(_localctx, 112, CanonParser.RULE_spreadExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 935;
			this.match(CanonParser.SPREAD);
			this.state = 936;
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
		case 43:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03Z\u03AD\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x03\x02\x07\x02v\n" +
		"\x02\f\x02\x0E\x02y\v\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02\x7F" +
		"\n\x02\f\x02\x0E\x02\x82\v\x02\x03\x02\x07\x02\x85\n\x02\f\x02\x0E\x02" +
		"\x88\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x05\x03\x8F\n\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x05\x06\x9D\n\x06\x03\x07\x06\x07\xA0\n\x07\r\x07" +
		"\x0E\x07\xA1\x03\b\x03\b\x03\b\x03\b\x07\b\xA8\n\b\f\b\x0E\b\xAB\v\b\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\xB6\n\t\x03\n" +
		"\x07\n\xB9\n\n\f\n\x0E\n\xBC\v\n\x03\n\x07\n\xBF\n\n\f\n\x0E\n\xC2\v\n" +
		"\x03\n\x03\n\x03\n\x05\n\xC7\n\n\x03\v\x07\v\xCA\n\v\f\v\x0E\v\xCD\v\v" +
		"\x03\v\x07\v\xD0\n\v\f\v\x0E\v\xD3\v\v\x03\v\x03\v\x03\v\x03\v\x03\f\x07" +
		"\f\xDA\n\f\f\f\x0E\f\xDD\v\f\x03\f\x07\f\xE0\n\f\f\f\x0E\f\xE3\v\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\r\x07\r\xEB\n\r\f\r\x0E\r\xEE\v\r\x03\r" +
		"\x07\r\xF1\n\r\f\r\x0E\r\xF4\v\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E" +
		"\x07\x0E\xFC\n\x0E\f\x0E\x0E\x0E\xFF\v\x0E\x03\x0E\x07\x0E\u0102\n\x0E" +
		"\f\x0E\x0E\x0E\u0105\v\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x05\x0E\u010F\n\x0E\x03\x0E\x03\x0E\x05\x0E\u0113" +
		"\n\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0118\n\x0E\x03\x0E\x03\x0E\x03" +
		"\x0F\x07\x0F\u011D\n\x0F\f\x0F\x0E\x0F\u0120\v\x0F\x03\x0F\x07\x0F\u0123" +
		"\n\x0F\f\x0F\x0E\x0F\u0126\v\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F" +
		"\u012C\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x07\x10\u0134" +
		"\n\x10\f\x10\x0E\x10\u0137\v\x10\x03\x11\x03\x11\x03\x11\x07\x11\u013C" +
		"\n\x11\f\x11\x0E\x11\u013F\v\x11\x03\x11\x05\x11\u0142\n\x11\x03\x12\x03" +
		"\x12\x03\x12\x05\x12\u0147\n\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x07\x14\u014F\n\x14\f\x14\x0E\x14\u0152\v\x14\x05\x14\u0154\n" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x07\x15\u015C\n\x15" +
		"\f\x15\x0E\x15\u015F\v\x15\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u0165" +
		"\n\x15\f\x15\x0E\x15\u0168\v\x15\x07\x15\u016A\n\x15\f\x15\x0E\x15\u016D" +
		"\v\x15\x03\x15\x07\x15\u0170\n\x15\f\x15\x0E\x15\u0173\v\x15\x03\x15\x03" +
		"\x15\x03\x16\x03\x16\x07\x16\u0179\n\x16\f\x16\x0E\x16\u017C\v\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x07\x16\u0182\n\x16\f\x16\x0E\x16\u0185\v" +
		"\x16\x07\x16\u0187\n\x16\f\x16\x0E\x16\u018A\v\x16\x03\x16\x07\x16\u018D" +
		"\n\x16\f\x16\x0E\x16\u0190\v\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x05\x17\u019A\n\x17\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u01A4\n\x18\x03\x19\x03\x19" +
		"\x03\x1A\x07\x1A\u01A9\n\x1A\f\x1A\x0E\x1A\u01AC\v\x1A\x03\x1A\x07\x1A" +
		"\u01AF\n\x1A\f\x1A\x0E\x1A\u01B2\v\x1A\x03\x1A\x05\x1A\u01B5\n\x1A\x03" +
		"\x1A\x03\x1A\x05\x1A\u01B9\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A" +
		"\u01BF\n\x1A\x05\x1A\u01C1\n\x1A\x03\x1B\x03\x1B\x05\x1B\u01C5\n\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03" +
		"\x1D\x05\x1D\u01D1\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u01D7" +
		"\n\x1E\f\x1E\x0E\x1E\u01DA\v\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x07\x1F\u01E2\n\x1F\f\x1F\x0E\x1F\u01E5\v\x1F\x03\x1F\x03\x1F" +
		"\x03 \x03 \x03 \x05 \u01EC\n \x03 \x03 \x03 \x05 \u01F1\n \x03!\x03!\x03" +
		"!\x05!\u01F6\n!\x03!\x03!\x03!\x03!\x03!\x05!\u01FD\n!\x05!\u01FF\n!\x03" +
		"\"\x07\"\u0202\n\"\f\"\x0E\"\u0205\v\"\x03\"\x07\"\u0208\n\"\f\"\x0E\"" +
		"\u020B\v\"\x03\"\x03\"\x03\"\x05\"\u0210\n\"\x03\"\x05\"\u0213\n\"\x03" +
		"\"\x03\"\x03#\x07#\u0218\n#\f#\x0E#\u021B\v#\x03#\x07#\u021E\n#\f#\x0E" +
		"#\u0221\v#\x03#\x03#\x03#\x03#\x03#\x03#\x05#\u0229\n#\x03#\x03#\x03$" +
		"\x07$\u022E\n$\f$\x0E$\u0231\v$\x03$\x07$\u0234\n$\f$\x0E$\u0237\v$\x03" +
		"$\x05$\u023A\n$\x03$\x03$\x03$\x03$\x05$\u0240\n$\x03$\x03$\x03$\x05$" +
		"\u0245\n$\x03$\x03$\x03%\x07%\u024A\n%\f%\x0E%\u024D\v%\x03%\x07%\u0250" +
		"\n%\f%\x0E%\u0253\v%\x03%\x03%\x03%\x03%\x03%\x05%\u025A\n%\x03%\x03%" +
		"\x05%\u025E\n%\x03&\x07&\u0261\n&\f&\x0E&\u0264\v&\x03&\x07&\u0267\n&" +
		"\f&\x0E&\u026A\v&\x03&\x03&\x03&\x03\'\x03\'\x07\'\u0271\n\'\f\'\x0E\'" +
		"\u0274\v\'\x03\'\x03\'\x03\'\x03\'\x07\'\u027A\n\'\f\'\x0E\'\u027D\v\'" +
		"\x05\'\u027F\n\'\x03\'\x07\'\u0282\n\'\f\'\x0E\'\u0285\v\'\x03\'\x03\'" +
		"\x03(\x03(\x03(\x03(\x03)\x03)\x03)\x07)\u0290\n)\f)\x0E)\u0293\v)\x03" +
		"*\x03*\x05*\u0297\n*\x03*\x03*\x03*\x05*\u029C\n*\x03+\x03+\x03+\x05+" +
		"\u02A1\n+\x03+\x05+\u02A4\n+\x03+\x05+\u02A7\n+\x03,\x03,\x03,\x07,\u02AC" +
		"\n,\f,\x0E,\u02AF\v,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x05-\u02CD\n-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x05-\u0304\n-\x03-\x03-\x05-\u0308\n-\x03-\x03-" +
		"\x03-\x03-\x05-\u030E\n-\x03-\x03-\x03-\x07-\u0313\n-\f-\x0E-\u0316\v" +
		"-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05" +
		".\u0325\n.\x03.\x03.\x03.\x05.\u032A\n.\x05.\u032C\n.\x03.\x03.\x03.\x03" +
		".\x03.\x05.\u0333\n.\x03/\x03/\x03/\x03/\x05/\u0339\n/\x030\x030\x030" +
		"\x050\u033E\n0\x031\x031\x071\u0342\n1\f1\x0E1\u0345\v1\x031\x031\x03" +
		"2\x032\x032\x032\x032\x032\x052\u034F\n2\x033\x033\x033\x053\u0354\n3" +
		"\x033\x033\x053\u0358\n3\x034\x034\x034\x034\x074\u035E\n4\f4\x0E4\u0361" +
		"\v4\x054\u0363\n4\x034\x034\x035\x035\x035\x035\x035\x035\x035\x035\x03" +
		"5\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x03" +
		"5\x035\x035\x055\u0380\n5\x036\x036\x036\x076\u0385\n6\f6\x0E6\u0388\v" +
		"6\x037\x037\x037\x057\u038D\n7\x038\x038\x038\x038\x078\u0393\n8\f8\x0E" +
		"8\u0396\v8\x068\u0398\n8\r8\x0E8\u0399\x058\u039C\n8\x039\x039\x039\x05" +
		"9\u03A1\n9\x039\x039\x039\x059\u03A6\n9\x039\x039\x03:\x03:\x03:\x03:" +
		"\x02\x02\x03X;\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02\x02\v\x03\x02" +
		"\x16\x17\x03\x02\x1B\x1F\x03\x02,2\x03\x02\"$\x03\x02 !\x03\x02<=\x03" +
		"\x02:;\x03\x02(+\x03\x02&\'\x02\u0420\x02w\x03\x02\x02\x02\x04\x8E\x03" +
		"\x02\x02\x02\x06\x90\x03\x02\x02\x02\b\x93\x03\x02\x02\x02\n\x9C\x03\x02" +
		"\x02\x02\f\x9F\x03\x02\x02\x02\x0E\xA3\x03\x02\x02\x02\x10\xB5\x03\x02" +
		"\x02\x02\x12\xBA\x03\x02\x02\x02\x14\xCB\x03\x02\x02\x02\x16\xDB\x03\x02" +
		"\x02\x02\x18\xEC\x03\x02\x02\x02\x1A\xFD\x03\x02\x02\x02\x1C\u011E\x03" +
		"\x02\x02\x02\x1E\u0130\x03\x02\x02\x02 \u0138\x03\x02\x02\x02\"\u0146" +
		"\x03\x02\x02\x02$\u0148\x03\x02\x02\x02&\u014A\x03\x02\x02\x02(\u0159" +
		"\x03\x02\x02\x02*\u0176\x03\x02\x02\x02,\u0199\x03\x02\x02\x02.\u01A3" +
		"\x03\x02\x02\x020\u01A5\x03\x02\x02\x022\u01AA\x03\x02\x02\x024\u01C4" +
		"\x03\x02\x02\x026\u01CA\x03\x02\x02\x028\u01D0\x03\x02\x02\x02:\u01D2" +
		"\x03\x02\x02\x02<\u01DD\x03\x02\x02\x02>\u01F0\x03\x02\x02\x02@\u01FE" +
		"\x03\x02\x02\x02B\u0203\x03\x02\x02\x02D\u0219\x03\x02\x02\x02F\u022F" +
		"\x03\x02\x02\x02H\u024B\x03\x02\x02\x02J\u0262\x03\x02\x02\x02L\u026E" +
		"\x03\x02\x02\x02N\u0288\x03\x02\x02\x02P\u028C\x03\x02\x02\x02R\u0296" +
		"\x03\x02\x02\x02T\u029D\x03\x02\x02\x02V\u02A8\x03\x02\x02\x02X\u02CC" +
		"\x03\x02\x02\x02Z\u0332\x03\x02\x02\x02\\\u0338\x03\x02\x02\x02^\u033D" +
		"\x03\x02\x02\x02`\u033F\x03\x02\x02\x02b\u034E\x03\x02\x02\x02d\u0350" +
		"\x03\x02\x02\x02f\u0359\x03\x02\x02\x02h\u037F\x03\x02\x02\x02j\u0381" +
		"\x03\x02\x02\x02l\u0389\x03\x02\x02\x02n\u039B\x03\x02\x02\x02p\u039D" +
		"\x03\x02\x02\x02r\u03A9\x03\x02\x02\x02tv\x07\x04\x02\x02ut\x03\x02\x02" +
		"\x02vy\x03\x02\x02\x02wu\x03\x02\x02\x02wx\x03\x02\x02\x02xz\x03\x02\x02" +
		"\x02yw\x03\x02\x02\x02z\x80\x05\x04\x03\x02{|\x05\f\x07\x02|}\x05\x04" +
		"\x03\x02}\x7F\x03\x02\x02\x02~{\x03\x02\x02\x02\x7F\x82\x03\x02\x02\x02" +
		"\x80~\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x86\x03\x02\x02\x02" +
		"\x82\x80\x03\x02\x02\x02\x83\x85\x07\x04\x02\x02\x84\x83\x03\x02\x02\x02" +
		"\x85\x88\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02" +
		"\x87\x89\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x89\x8A\x07\x02\x02\x03" +
		"\x8A\x03\x03\x02\x02\x02\x8B\x8F\x05\x06\x04\x02\x8C\x8F\x05\b\x05\x02" +
		"\x8D\x8F\x05\x10\t\x02\x8E\x8B\x03\x02\x02\x02\x8E\x8C\x03\x02\x02\x02" +
		"\x8E\x8D\x03\x02\x02\x02\x8F\x05\x03\x02\x02\x02\x90\x91\x07\x07\x02\x02" +
		"\x91\x92\x05^0\x02\x92\x07\x03\x02\x02\x02\x93\x94\x07\x11\x02\x02\x94" +
		"\x95\x07S\x02\x02\x95\t\x03\x02\x02\x02\x96\x9D\x07I\x02\x02\x97\x9D\x07" +
		"\x04\x02\x02\x98\x99\x07I\x02\x02\x99\x9D\x07\x04\x02\x02\x9A\x9B\x07" +
		"\x04\x02\x02\x9B\x9D\x07I\x02\x02\x9C\x96\x03\x02\x02\x02\x9C\x97\x03" +
		"\x02\x02\x02\x9C\x98\x03\x02\x02\x02\x9C\x9A\x03\x02\x02\x02\x9D\v\x03" +
		"\x02\x02\x02\x9E\xA0\x05\n\x06\x02\x9F\x9E\x03\x02\x02\x02\xA0\xA1\x03" +
		"\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\r\x03" +
		"\x02\x02\x02\xA3\xA9\x05\x10\t\x02\xA4\xA5\x05\f\x07\x02\xA5\xA6\x05\x10" +
		"\t\x02\xA6\xA8\x03\x02\x02\x02\xA7\xA4\x03\x02\x02\x02\xA8\xAB\x03\x02" +
		"\x02\x02\xA9\xA7\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\x0F\x03\x02" +
		"\x02\x02\xAB\xA9\x03\x02\x02\x02\xAC\xB6\x05\x12\n\x02\xAD\xB6\x05\x14" +
		"\v\x02\xAE\xB6\x05\x16\f\x02\xAF\xB6\x05\x18\r\x02\xB0\xB6\x05\x1C\x0F" +
		"\x02\xB1\xB6\x05\x1A\x0E\x02\xB2\xB6\x054\x1B\x02\xB3\xB6\x056\x1C\x02" +
		"\xB4\xB6\x05T+\x02\xB5\xAC\x03\x02\x02\x02\xB5\xAD\x03\x02\x02\x02\xB5" +
		"\xAE\x03\x02\x02\x02\xB5\xAF\x03\x02\x02\x02\xB5\xB0\x03\x02\x02\x02\xB5" +
		"\xB1\x03\x02\x02\x02\xB5\xB2\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB5" +
		"\xB4\x03\x02\x02\x02\xB6\x11\x03\x02\x02\x02\xB7\xB9\x05d3\x02\xB8\xB7" +
		"\x03\x02\x02\x02\xB9\xBC\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBA\xBB" +
		"\x03\x02\x02\x02\xBB\xC0\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBD\xBF" +
		"\x07\x04\x02\x02\xBE\xBD\x03\x02\x02\x02\xBF\xC2\x03\x02\x02\x02\xC0\xBE" +
		"\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xC3\x03\x02\x02\x02\xC2\xC0" +
		"\x03\x02\x02\x02\xC3\xC6\x07\t\x02\x02\xC4\xC7\x05(\x15\x02\xC5\xC7\x05" +
		"^0\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC5\x03\x02\x02\x02\xC7\x13\x03\x02" +
		"\x02\x02\xC8\xCA\x05d3\x02\xC9\xC8\x03\x02\x02\x02\xCA\xCD\x03\x02\x02" +
		"\x02\xCB\xC9\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xD1\x03\x02\x02" +
		"\x02\xCD\xCB\x03\x02\x02\x02\xCE\xD0\x07\x04\x02\x02\xCF\xCE\x03\x02\x02" +
		"\x02\xD0\xD3\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD2\x03\x02\x02" +
		"\x02\xD2\xD4\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD4\xD5\x07\n\x02" +
		"\x02\xD5\xD6\x07S\x02\x02\xD6\xD7\x05*\x16\x02\xD7\x15\x03\x02\x02\x02" +
		"\xD8\xDA\x05d3\x02\xD9\xD8\x03\x02\x02\x02\xDA\xDD\x03\x02\x02\x02\xDB" +
		"\xD9\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xE1\x03\x02\x02\x02\xDD" +
		"\xDB\x03\x02\x02\x02\xDE\xE0\x07\x04\x02\x02\xDF\xDE\x03\x02\x02\x02\xE0" +
		"\xE3\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2" +
		"\xE4\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE4\xE5\x07\v\x02\x02\xE5" +
		"\xE6\x07S\x02\x02\xE6\xE7\x07,\x02\x02\xE7\xE8\x05\x1E\x10\x02\xE8\x17" +
		"\x03\x02\x02\x02\xE9\xEB\x05d3\x02\xEA\xE9\x03\x02\x02\x02\xEB\xEE\x03" +
		"\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xF2\x03" +
		"\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEF\xF1\x07\x04\x02\x02\xF0\xEF\x03" +
		"\x02\x02\x02\xF1\xF4\x03\x02\x02\x02\xF2\xF0\x03\x02\x02\x02\xF2\xF3\x03" +
		"\x02\x02\x02\xF3\xF5\x03\x02\x02\x02\xF4\xF2\x03\x02\x02\x02\xF5\xF6\x07" +
		"\f\x02\x02\xF6\xF7\x07S\x02\x02\xF7\xF8\x07,\x02\x02\xF8\xF9\x05 \x11" +
		"\x02\xF9\x19\x03\x02\x02\x02\xFA\xFC\x05d3\x02\xFB\xFA\x03\x02\x02\x02" +
		"\xFC\xFF\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02" +
		"\xFE\u0103\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\u0100\u0102\x07\x04" +
		"\x02\x02\u0101\u0100\x03\x02\x02\x02\u0102\u0105\x03\x02\x02\x02\u0103" +
		"\u0101\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104\u010E\x03\x02" +
		"\x02\x02\u0105\u0103\x03\x02\x02\x02\u0106\u0107\x07\x19\x02\x02\u0107" +
		"\u0108\x07\x18\x02\x02\u0108\u0109\x05 \x11\x02\u0109\u010A\x07F\x02\x02" +
		"\u010A\u010B\x07S\x02\x02\u010B\u010F\x03\x02\x02\x02\u010C\u010D\x07" +
		"\x18\x02\x02\u010D\u010F\x07S\x02\x02\u010E\u0106\x03\x02\x02\x02\u010E" +
		"\u010C\x03\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110\u0112\x07B\x02" +
		"\x02\u0111\u0113\x05P)\x02\u0112\u0111\x03\x02\x02\x02\u0112\u0113\x03" +
		"\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114\u0117\x07C\x02\x02\u0115" +
		"\u0116\x07H\x02\x02\u0116\u0118\x05 \x11\x02\u0117\u0115\x03\x02\x02\x02" +
		"\u0117\u0118\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011A\x05" +
		"(\x15\x02\u011A\x1B\x03\x02\x02\x02\u011B\u011D\x05d3\x02\u011C\u011B" +
		"\x03\x02\x02\x02\u011D\u0120\x03\x02\x02\x02\u011E\u011C\x03\x02\x02\x02" +
		"\u011E\u011F\x03\x02\x02\x02\u011F\u0124\x03\x02\x02\x02\u0120\u011E\x03" +
		"\x02\x02\x02\u0121\u0123\x07\x04\x02\x02\u0122\u0121\x03\x02\x02\x02\u0123" +
		"\u0126\x03\x02\x02\x02\u0124\u0122\x03\x02\x02\x02\u0124\u0125\x03\x02" +
		"\x02\x02\u0125\u0127\x03\x02\x02\x02\u0126\u0124\x03\x02\x02\x02\u0127" +
		"\u0128\t\x02\x02\x02\u0128\u012B\x07S\x02\x02\u0129\u012A\x07H\x02\x02" +
		"\u012A\u012C\x05 \x11\x02\u012B\u0129\x03\x02\x02\x02\u012B\u012C\x03" +
		"\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u012E\x07,\x02\x02\u012E" +
		"\u012F\x05X-\x02\u012F\x1D\x03\x02\x02\x02\u0130\u0135\x05 \x11\x02\u0131" +
		"\u0132\x077\x02\x02\u0132\u0134\x05 \x11\x02\u0133\u0131\x03\x02\x02\x02" +
		"\u0134\u0137\x03\x02\x02\x02\u0135\u0133\x03\x02\x02\x02\u0135\u0136\x03" +
		"\x02\x02\x02\u0136\x1F\x03\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0138" +
		"\u013D\x05\"\x12\x02\u0139\u013A\x07D\x02\x02\u013A\u013C\x07E\x02\x02" +
		"\u013B\u0139\x03\x02\x02\x02\u013C\u013F\x03\x02\x02\x02\u013D\u013B\x03" +
		"\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u0141\x03\x02\x02\x02\u013F" +
		"\u013D\x03\x02\x02\x02\u0140\u0142\x07J\x02\x02\u0141\u0140\x03\x02\x02" +
		"\x02\u0141\u0142\x03\x02\x02\x02\u0142!\x03\x02\x02\x02\u0143\u0147\x05" +
		"$\x13\x02\u0144\u0147\x07S\x02\x02\u0145\u0147\x05&\x14\x02\u0146\u0143" +
		"\x03\x02\x02\x02\u0146\u0144\x03\x02\x02\x02\u0146\u0145\x03\x02\x02\x02" +
		"\u0147#\x03\x02\x02\x02\u0148\u0149\t\x03\x02\x02\u0149%\x03\x02\x02\x02" +
		"\u014A\u0153\x07B\x02\x02\u014B\u0150\x05 \x11\x02\u014C\u014D\x07G\x02" +
		"\x02\u014D\u014F\x05 \x11\x02\u014E\u014C\x03\x02\x02\x02\u014F\u0152" +
		"\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02" +
		"\u0151\u0154\x03\x02\x02\x02\u0152\u0150\x03\x02\x02\x02\u0153\u014B\x03" +
		"\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155" +
		"\u0156\x07C\x02\x02\u0156\u0157\x07K\x02\x02\u0157\u0158\x05 \x11\x02" +
		"\u0158\'\x03\x02\x02\x02\u0159\u015D\x07@\x02\x02\u015A\u015C\x07\x04" +
		"\x02\x02\u015B\u015A\x03\x02\x02\x02\u015C\u015F\x03\x02\x02\x02\u015D" +
		"\u015B\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u016B\x03\x02" +
		"\x02\x02\u015F\u015D\x03\x02\x02\x02\u0160\u0166\x05.\x18\x02\u0161\u0162" +
		"\x05\f\x07\x02\u0162\u0163\x05.\x18\x02\u0163\u0165\x03\x02\x02\x02\u0164" +
		"\u0161\x03\x02\x02\x02\u0165\u0168\x03\x02\x02\x02\u0166\u0164\x03\x02" +
		"\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167\u016A\x03\x02\x02\x02\u0168" +
		"\u0166\x03\x02\x02\x02\u0169\u0160\x03\x02\x02\x02\u016A\u016D\x03\x02" +
		"\x02\x02\u016B\u0169\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C" +
		"\u0171\x03\x02\x02\x02\u016D\u016B\x03\x02\x02\x02\u016E\u0170\x07\x04" +
		"\x02\x02\u016F\u016E\x03\x02\x02\x02\u0170\u0173\x03\x02\x02\x02\u0171" +
		"\u016F\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02\u0172\u0174\x03\x02" +
		"\x02\x02\u0173\u0171\x03\x02\x02\x02\u0174\u0175\x07A\x02\x02\u0175)\x03" +
		"\x02\x02\x02\u0176\u017A\x07@\x02\x02\u0177\u0179\x07\x04\x02\x02\u0178" +
		"\u0177\x03\x02\x02\x02\u0179\u017C\x03\x02\x02\x02\u017A\u0178\x03\x02" +
		"\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B\u0188\x03\x02\x02\x02\u017C" +
		"\u017A\x03\x02\x02\x02\u017D\u0183\x05,\x17\x02\u017E\u017F\x05\f\x07" +
		"\x02\u017F\u0180\x05,\x17\x02\u0180\u0182\x03\x02\x02\x02\u0181\u017E" +
		"\x03\x02\x02\x02\u0182\u0185\x03\x02\x02\x02\u0183\u0181\x03\x02\x02\x02" +
		"\u0183\u0184\x03\x02\x02\x02\u0184\u0187\x03\x02\x02\x02\u0185\u0183\x03" +
		"\x02\x02\x02\u0186\u017D\x03\x02\x02\x02\u0187\u018A\x03\x02\x02\x02\u0188" +
		"\u0186\x03\x02\x02\x02\u0188\u0189\x03\x02\x02\x02\u0189\u018E\x03\x02" +
		"\x02\x02\u018A\u0188\x03\x02\x02\x02\u018B\u018D\x07\x04\x02\x02\u018C" +
		"\u018B\x03\x02\x02\x02\u018D\u0190\x03\x02\x02\x02\u018E\u018C\x03\x02" +
		"\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F\u0191\x03\x02\x02\x02\u0190" +
		"\u018E\x03\x02\x02\x02\u0191\u0192\x07A\x02\x02\u0192+\x03\x02\x02\x02" +
		"\u0193\u019A\x052\x1A\x02\u0194\u019A\x05B\"\x02\u0195\u019A\x05D#\x02" +
		"\u0196\u019A\x05F$\x02\u0197\u019A\x05H%\x02\u0198\u019A\x05J&\x02\u0199" +
		"\u0193\x03\x02\x02\x02\u0199\u0194\x03\x02\x02\x02\u0199\u0195\x03\x02" +
		"\x02\x02\u0199\u0196\x03\x02\x02\x02\u0199\u0197\x03\x02\x02\x02\u0199" +
		"\u0198\x03\x02\x02\x02\u019A-\x03\x02\x02\x02\u019B\u01A4\x054\x1B\x02" +
		"\u019C\u01A4\x050\x19\x02\u019D\u01A4\x052\x1A\x02\u019E\u01A4\x05B\"" +
		"\x02\u019F\u01A4\x05D#\x02\u01A0\u01A4\x05F$\x02\u01A1\u01A4\x05H%\x02" +
		"\u01A2\u01A4\x05\x1C\x0F\x02\u01A3\u019B\x03\x02\x02\x02\u01A3\u019C\x03" +
		"\x02\x02\x02\u01A3\u019D\x03\x02\x02\x02\u01A3\u019E\x03\x02\x02\x02\u01A3" +
		"\u019F\x03\x02\x02\x02\u01A3\u01A0\x03\x02\x02\x02\u01A3\u01A1\x03\x02" +
		"\x02\x02\u01A3\u01A2\x03\x02\x02\x02\u01A4/\x03\x02\x02\x02\u01A5\u01A6" +
		"\x05X-\x02\u01A61\x03\x02\x02\x02\u01A7\u01A9\x05d3\x02\u01A8\u01A7\x03" +
		"\x02\x02\x02\u01A9\u01AC\x03\x02\x02\x02\u01AA\u01A8\x03\x02\x02\x02\u01AA" +
		"\u01AB\x03\x02\x02\x02\u01AB\u01B0\x03\x02\x02\x02\u01AC\u01AA\x03\x02" +
		"\x02\x02\u01AD\u01AF\x07\x04\x02\x02\u01AE\u01AD\x03\x02\x02\x02\u01AF" +
		"\u01B2\x03\x02\x02\x02\u01B0\u01AE\x03\x02\x02\x02\u01B0\u01B1\x03\x02" +
		"\x02\x02\u01B1\u01B4\x03\x02\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B3" +
		"\u01B5\x07\x0E\x02\x02\u01B4\u01B3\x03\x02\x02\x02\u01B4\u01B5\x03\x02" +
		"\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01C0\x07S\x02\x02\u01B7\u01B9" +
		"\x07J\x02\x02\u01B8\u01B7\x03\x02\x02\x02\u01B8\u01B9\x03\x02\x02\x02" +
		"\u01B9\u01BA\x03\x02\x02\x02\u01BA\u01BB\x07H\x02\x02\u01BB\u01BE\x05" +
		" \x11\x02\u01BC\u01BD\x07,\x02\x02\u01BD\u01BF\x05X-\x02\u01BE\u01BC\x03" +
		"\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02\u01BF\u01C1\x03\x02\x02\x02\u01C0" +
		"\u01B8\x03\x02\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C13\x03\x02\x02" +
		"\x02\u01C2\u01C3\x07\x15\x02\x02\u01C3\u01C5\x07F\x02\x02\u01C4\u01C2" +
		"\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02" +
		"\u01C6\u01C7\x07S";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u01C7\u01C8\t\x04\x02\x02\u01C8\u01C9\x05X-\x02\u01C95\x03\x02" +
		"\x02\x02\u01CA\u01CB\x058\x1D\x02\u01CB\u01CC\x07,\x02\x02\u01CC\u01CD" +
		"\x05X-\x02\u01CD7\x03\x02\x02\x02\u01CE\u01D1\x05:\x1E\x02\u01CF\u01D1" +
		"\x05<\x1F\x02\u01D0\u01CE\x03\x02\x02\x02\u01D0\u01CF\x03\x02\x02\x02" +
		"\u01D19\x03\x02\x02\x02\u01D2\u01D3\x07D\x02\x02\u01D3\u01D8\x05> \x02" +
		"\u01D4\u01D5\x07G\x02\x02\u01D5\u01D7\x05> \x02\u01D6\u01D4\x03\x02\x02" +
		"\x02\u01D7\u01DA\x03\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D8\u01D9" +
		"\x03\x02\x02\x02\u01D9\u01DB\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02" +
		"\u01DB\u01DC\x07E\x02\x02\u01DC;\x03\x02\x02\x02\u01DD\u01DE\x07@\x02" +
		"\x02\u01DE\u01E3\x05@!\x02\u01DF\u01E0\x07G\x02\x02\u01E0\u01E2\x05@!" +
		"\x02\u01E1\u01DF\x03\x02\x02\x02\u01E2\u01E5\x03\x02\x02\x02\u01E3\u01E1" +
		"\x03\x02\x02\x02\u01E3\u01E4\x03\x02\x02\x02\u01E4\u01E6\x03\x02\x02\x02" +
		"\u01E5\u01E3\x03\x02\x02\x02\u01E6\u01E7\x07A\x02\x02\u01E7=\x03\x02\x02" +
		"\x02\u01E8\u01EB\x07S\x02\x02\u01E9\u01EA\x07,\x02\x02\u01EA\u01EC\x05" +
		"X-\x02\u01EB\u01E9\x03\x02\x02\x02\u01EB\u01EC\x03\x02\x02\x02\u01EC\u01F1" +
		"\x03\x02\x02\x02\u01ED\u01F1\x058\x1D\x02\u01EE\u01EF\x07>\x02\x02\u01EF" +
		"\u01F1\x07S\x02\x02\u01F0\u01E8\x03\x02\x02\x02\u01F0\u01ED\x03\x02\x02" +
		"\x02\u01F0\u01EE\x03\x02\x02\x02\u01F1?\x03\x02\x02\x02\u01F2\u01F5\x07" +
		"S\x02\x02\u01F3\u01F4\x07,\x02\x02\u01F4\u01F6\x05X-\x02\u01F5\u01F3\x03" +
		"\x02\x02\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6\u01FF\x03\x02\x02\x02\u01F7" +
		"\u01F8\x07S\x02\x02\u01F8\u01F9\x07H\x02\x02\u01F9\u01FC\x07S\x02\x02" +
		"\u01FA\u01FB\x07,\x02\x02\u01FB\u01FD\x05X-\x02\u01FC\u01FA\x03\x02\x02" +
		"\x02\u01FC\u01FD\x03\x02\x02\x02\u01FD\u01FF\x03\x02\x02\x02\u01FE\u01F2" +
		"\x03\x02\x02\x02\u01FE\u01F7\x03\x02\x02\x02\u01FFA\x03\x02\x02\x02\u0200" +
		"\u0202\x05d3\x02\u0201\u0200\x03\x02\x02\x02\u0202\u0205\x03\x02\x02\x02" +
		"\u0203\u0201\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204\u0209\x03" +
		"\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0206\u0208\x07\x04\x02\x02\u0207" +
		"\u0206\x03\x02\x02\x02\u0208\u020B\x03\x02\x02\x02\u0209\u0207\x03\x02" +
		"\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A\u020C\x03\x02\x02\x02\u020B" +
		"\u0209\x03\x02\x02\x02\u020C\u0212\x07\r\x02\x02\u020D\u020F\x07B\x02" +
		"\x02\u020E\u0210\x05P)\x02\u020F\u020E\x03\x02\x02\x02\u020F\u0210\x03" +
		"\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211\u0213\x07C\x02\x02\u0212" +
		"\u020D\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213\u0214\x03\x02" +
		"\x02\x02\u0214\u0215\x05(\x15\x02\u0215C\x03\x02\x02\x02\u0216\u0218\x05" +
		"d3\x02\u0217\u0216\x03\x02\x02\x02\u0218\u021B\x03\x02\x02\x02\u0219\u0217" +
		"\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A\u021F\x03\x02\x02\x02" +
		"\u021B\u0219\x03\x02\x02\x02\u021C\u021E\x07\x04\x02\x02\u021D\u021C\x03" +
		"\x02\x02\x02\u021E\u0221\x03\x02\x02\x02\u021F\u021D\x03\x02\x02\x02\u021F" +
		"\u0220\x03\x02\x02\x02\u0220\u0222\x03\x02\x02\x02\u0221\u021F\x03\x02" +
		"\x02\x02\u0222\u0223\x07\x0F\x02\x02\u0223\u0224\x07S\x02\x02\u0224\u0225" +
		"\x07B\x02\x02\u0225\u0228\x07C\x02\x02\u0226\u0227\x07H\x02\x02\u0227" +
		"\u0229\x05 \x11\x02\u0228\u0226\x03\x02\x02\x02\u0228\u0229\x03\x02\x02" +
		"\x02\u0229\u022A\x03\x02\x02\x02\u022A\u022B\x05(\x15\x02\u022BE\x03\x02" +
		"\x02\x02\u022C\u022E\x05d3\x02\u022D\u022C\x03\x02\x02\x02\u022E\u0231" +
		"\x03\x02\x02\x02\u022F\u022D\x03\x02\x02\x02\u022F\u0230\x03\x02\x02\x02" +
		"\u0230\u0235\x03\x02\x02\x02\u0231\u022F\x03\x02\x02\x02\u0232\u0234\x07" +
		"\x04\x02\x02\u0233\u0232\x03\x02\x02\x02\u0234\u0237\x03\x02\x02\x02\u0235" +
		"\u0233\x03\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236\u0239\x03\x02" +
		"\x02\x02\u0237\u0235\x03\x02\x02\x02\u0238\u023A\x07\x0E\x02\x02\u0239" +
		"\u0238\x03\x02\x02\x02\u0239\u023A\x03\x02\x02\x02\u023A\u023B\x03\x02" +
		"\x02\x02\u023B\u023C\x07\x18\x02\x02\u023C\u023D\x07S\x02\x02\u023D\u023F" +
		"\x07B\x02\x02\u023E\u0240\x05P)\x02\u023F\u023E\x03\x02\x02\x02\u023F" +
		"\u0240\x03\x02\x02\x02\u0240\u0241\x03\x02\x02\x02\u0241\u0244\x07C\x02" +
		"\x02\u0242\u0243\x07H\x02\x02\u0243\u0245\x05 \x11\x02\u0244\u0242\x03" +
		"\x02\x02\x02\u0244\u0245\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246" +
		"\u0247\x05(\x15\x02\u0247G\x03\x02\x02\x02\u0248\u024A\x05d3\x02\u0249" +
		"\u0248\x03\x02\x02\x02\u024A\u024D\x03\x02\x02\x02\u024B\u0249\x03\x02" +
		"\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C\u0251\x03\x02\x02\x02\u024D" +
		"\u024B\x03\x02\x02\x02\u024E\u0250\x07\x04\x02\x02\u024F\u024E\x03\x02" +
		"\x02\x02\u0250\u0253\x03\x02\x02\x02\u0251\u024F\x03\x02\x02\x02\u0251" +
		"\u0252\x03\x02\x02\x02\u0252\u0254\x03\x02\x02\x02\u0253\u0251\x03\x02" +
		"\x02\x02\u0254\u0255\x07\x10\x02\x02\u0255\u0256\x07S\x02\x02\u0256\u0257" +
		"\x07H\x02\x02\u0257\u0259\x05 \x11\x02\u0258\u025A\x05L\'\x02\u0259\u0258" +
		"\x03\x02\x02\x02\u0259\u025A\x03\x02\x02\x02\u025A\u025D\x03\x02\x02\x02" +
		"\u025B\u025C\x07,\x02\x02\u025C\u025E\x05X-\x02\u025D\u025B\x03\x02\x02" +
		"\x02\u025D\u025E\x03\x02\x02\x02\u025EI\x03\x02\x02\x02\u025F\u0261\x05" +
		"d3\x02\u0260\u025F\x03\x02\x02\x02\u0261\u0264\x03\x02\x02\x02\u0262\u0260" +
		"\x03\x02\x02\x02\u0262\u0263\x03\x02\x02\x02\u0263\u0268\x03\x02\x02\x02" +
		"\u0264\u0262\x03\x02\x02\x02\u0265\u0267\x07\x04\x02\x02\u0266\u0265\x03" +
		"\x02\x02\x02\u0267\u026A\x03\x02\x02\x02\u0268\u0266\x03\x02\x02\x02\u0268" +
		"\u0269\x03\x02\x02\x02\u0269\u026B\x03\x02\x02\x02\u026A\u0268\x03\x02" +
		"\x02\x02\u026B\u026C\x07\x1A\x02\x02\u026C\u026D\x07S\x02\x02\u026DK\x03" +
		"\x02\x02\x02\u026E\u0272\x07@\x02\x02\u026F\u0271\x07\x04\x02\x02\u0270" +
		"\u026F\x03\x02\x02\x02\u0271\u0274\x03\x02\x02\x02\u0272\u0270\x03\x02" +
		"\x02\x02\u0272\u0273\x03\x02\x02\x02\u0273\u027E\x03\x02\x02\x02\u0274" +
		"\u0272\x03\x02\x02\x02\u0275\u027B\x05N(\x02\u0276\u0277\x05\f\x07\x02" +
		"\u0277\u0278\x05N(\x02\u0278\u027A\x03\x02\x02\x02\u0279\u0276\x03\x02" +
		"\x02\x02\u027A\u027D\x03\x02\x02\x02\u027B\u0279\x03\x02\x02\x02\u027B" +
		"\u027C\x03\x02\x02\x02\u027C\u027F\x03\x02\x02\x02\u027D\u027B\x03\x02" +
		"\x02\x02\u027E\u0275\x03\x02\x02\x02\u027E\u027F\x03\x02\x02\x02\u027F" +
		"\u0283\x03\x02\x02\x02\u0280\u0282\x07\x04\x02\x02\u0281\u0280\x03\x02" +
		"\x02\x02\u0282\u0285\x03\x02\x02\x02\u0283\u0281\x03\x02\x02\x02\u0283" +
		"\u0284\x03\x02\x02\x02\u0284\u0286\x03\x02\x02\x02\u0285\u0283\x03\x02" +
		"\x02\x02\u0286\u0287\x07A\x02\x02\u0287M\x03\x02\x02\x02\u0288\u0289\x07" +
		"S\x02\x02\u0289\u028A\x07K\x02\x02\u028A\u028B\x07S\x02\x02\u028BO\x03" +
		"\x02\x02\x02\u028C\u0291\x05R*\x02\u028D\u028E\x07G\x02\x02\u028E\u0290" +
		"\x05R*\x02\u028F\u028D\x03\x02\x02\x02\u0290\u0293\x03\x02\x02\x02\u0291" +
		"\u028F\x03\x02\x02\x02\u0291\u0292\x03\x02\x02\x02\u0292Q\x03\x02\x02" +
		"\x02\u0293\u0291\x03\x02\x02\x02\u0294\u0295\x07\x15\x02\x02\u0295\u0297" +
		"\x07F\x02\x02\u0296\u0294\x03\x02\x02\x02\u0296\u0297\x03\x02\x02\x02" +
		"\u0297\u0298\x03\x02\x02\x02\u0298\u029B\x07S\x02\x02\u0299\u029A\x07" +
		"H\x02\x02\u029A\u029C\x05 \x11\x02\u029B\u0299\x03\x02\x02\x02\u029B\u029C" +
		"\x03\x02\x02\x02\u029CS\x03\x02\x02\x02\u029D\u02A3\x07S\x02\x02\u029E" +
		"\u02A0\x07B\x02\x02\u029F\u02A1\x05V,\x02\u02A0\u029F\x03\x02\x02\x02" +
		"\u02A0\u02A1\x03\x02\x02\x02\u02A1\u02A2\x03\x02\x02\x02\u02A2\u02A4\x07" +
		"C\x02\x02\u02A3\u029E\x03\x02\x02\x02\u02A3\u02A4\x03\x02\x02\x02\u02A4" +
		"\u02A6\x03\x02\x02\x02\u02A5\u02A7\x05(\x15\x02\u02A6\u02A5\x03\x02\x02" +
		"\x02\u02A6\u02A7\x03\x02\x02\x02\u02A7U\x03\x02\x02\x02\u02A8\u02AD\x05" +
		"X-\x02\u02A9\u02AA\x07G\x02\x02\u02AA\u02AC\x05X-\x02\u02AB\u02A9\x03" +
		"\x02\x02\x02\u02AC\u02AF\x03\x02\x02\x02\u02AD\u02AB\x03\x02\x02\x02\u02AD" +
		"\u02AE\x03\x02\x02\x02\u02AEW\x03\x02\x02\x02\u02AF\u02AD\x03\x02\x02" +
		"\x02\u02B0\u02B1\b-\x01\x02\u02B1\u02CD\x05Z.\x02\u02B2\u02B3\x07!\x02" +
		"\x02\u02B3\u02CD\x05X-\x1C\u02B4\u02B5\x07\x14\x02\x02\u02B5\u02CD\x05" +
		"X-\x1B\u02B6\u02B7\x079\x02\x02\u02B7\u02CD\x05X-\x1A\u02B8\u02B9\x07" +
		"\x1C\x02\x02\u02B9\u02BA\x07B\x02\x02\u02BA\u02BB\x05X-\x02\u02BB\u02BC" +
		"\x07C\x02\x02\u02BC\u02CD\x03\x02\x02\x02\u02BD\u02BE\x07\x1D\x02\x02" +
		"\u02BE\u02BF\x07B\x02\x02\u02BF\u02C0\x05X-\x02\u02C0\u02C1\x07C\x02\x02" +
		"\u02C1\u02CD\x03\x02\x02\x02\u02C2\u02C3\x07\x1B\x02\x02\u02C3\u02C4\x07" +
		"B\x02\x02\u02C4\u02C5\x05X-\x02\u02C5\u02C6\x07C\x02\x02\u02C6\u02CD\x03" +
		"\x02\x02\x02\u02C7\u02C8\x07\x1E\x02\x02\u02C8\u02C9\x07B\x02\x02\u02C9" +
		"\u02CA\x05X-\x02\u02CA\u02CB\x07C\x02\x02\u02CB\u02CD\x03\x02\x02\x02" +
		"\u02CC\u02B0\x03\x02\x02\x02\u02CC\u02B2\x03\x02\x02\x02\u02CC\u02B4\x03" +
		"\x02\x02\x02\u02CC\u02B6\x03\x02\x02\x02\u02CC\u02B8\x03\x02\x02\x02\u02CC" +
		"\u02BD\x03\x02\x02\x02\u02CC\u02C2\x03\x02\x02\x02\u02CC\u02C7\x03\x02" +
		"\x02\x02\u02CD\u0314\x03\x02\x02\x02\u02CE\u02CF\f\x10\x02\x02\u02CF\u02D0" +
		"\x07%\x02\x02\u02D0\u0313\x05X-\x11\u02D1\u02D2\f\x0F\x02\x02\u02D2\u02D3" +
		"\t\x05\x02\x02\u02D3\u0313\x05X-\x10\u02D4\u02D5\f\x0E\x02\x02\u02D5\u02D6" +
		"\t\x06\x02\x02\u02D6\u0313\x05X-\x0F\u02D7\u02D8\f\r\x02\x02\u02D8\u02D9" +
		"\t\x07\x02\x02\u02D9\u0313\x05X-\x0E\u02DA\u02DB\f\f\x02\x02\u02DB\u02DC" +
		"\x07S\x02\x02\u02DC\u0313\x05X-\r\u02DD\u02DE\f\v\x02\x02\u02DE\u02DF" +
		"\t\b\x02\x02\u02DF\u0313\x05X-\f\u02E0\u02E1\f\n\x02\x02\u02E1\u02E2\t" +
		"\t\x02\x02\u02E2\u0313\x05X-\v\u02E3\u02E4\f\t\x02\x02\u02E4\u02E5\t\n" +
		"\x02\x02\u02E5\u0313\x05X-\n\u02E6\u02E7\f\b\x02\x02\u02E7\u02E8\x076" +
		"\x02\x02\u02E8\u0313\x05X-\t\u02E9\u02EA\f\x07\x02\x02\u02EA\u02EB\x07" +
		"8\x02\x02\u02EB\u0313\x05X-\b\u02EC\u02ED\f\x06\x02\x02\u02ED\u02EE\x07" +
		"7\x02\x02\u02EE\u0313\x05X-\x07\u02EF\u02F0\f\x05\x02\x02\u02F0\u02F1" +
		"\x073\x02\x02\u02F1\u0313\x05X-\x06\u02F2\u02F3\f\x04\x02\x02\u02F3\u02F4" +
		"\x074\x02\x02\u02F4\u0313\x05X-\x05\u02F5\u02F6\f\x03\x02\x02\u02F6\u02F7" +
		"\x075\x02\x02\u02F7\u0313\x05X-\x04\u02F8\u02F9\f\x15\x02\x02\u02F9\u02FA" +
		"\x07F\x02\x02\u02FA\u0313\x07S\x02\x02\u02FB\u02FC\f\x14\x02\x02\u02FC" +
		"\u02FD\x07D\x02\x02\u02FD\u02FE\x05X-\x02\u02FE\u02FF\x07E\x02\x02\u02FF" +
		"\u0313\x03\x02\x02\x02\u0300\u0301\f\x13\x02\x02\u0301\u0303\x07D\x02" +
		"\x02\u0302\u0304\x05X-\x02\u0303\u0302\x03\x02\x02\x02\u0303\u0304\x03" +
		"\x02\x02\x02\u0304\u0305\x03\x02\x02\x02\u0305\u0307\x07=\x02\x02\u0306" +
		"\u0308\x05X-\x02\u0307\u0306\x03\x02\x02\x02\u0307\u0308\x03\x02\x02\x02" +
		"\u0308\u0309\x03\x02\x02\x02\u0309\u0313\x07E\x02\x02\u030A\u030B\f\x12" +
		"\x02\x02\u030B\u030D\x07B\x02\x02\u030C\u030E\x05V,\x02\u030D\u030C\x03" +
		"\x02\x02\x02\u030D\u030E\x03\x02\x02\x02\u030E\u030F\x03\x02\x02\x02\u030F" +
		"\u0313\x07C\x02\x02\u0310\u0311\f\x11\x02\x02\u0311\u0313\x07?\x02\x02" +
		"\u0312\u02CE\x03\x02\x02\x02\u0312\u02D1\x03\x02\x02\x02\u0312\u02D4\x03" +
		"\x02\x02\x02\u0312\u02D7\x03\x02\x02\x02\u0312\u02DA\x03\x02\x02\x02\u0312" +
		"\u02DD\x03\x02\x02\x02\u0312\u02E0\x03\x02\x02\x02\u0312\u02E3\x03\x02" +
		"\x02\x02\u0312\u02E6\x03\x02\x02\x02\u0312\u02E9\x03\x02\x02\x02\u0312" +
		"\u02EC\x03\x02\x02\x02\u0312\u02EF\x03\x02\x02\x02\u0312\u02F2\x03\x02" +
		"\x02\x02\u0312\u02F5\x03\x02\x02\x02\u0312\u02F8\x03\x02\x02\x02\u0312" +
		"\u02FB\x03\x02\x02\x02\u0312\u0300\x03\x02\x02\x02\u0312\u030A\x03\x02" +
		"\x02\x02\u0312\u0310\x03\x02\x02\x02\u0313\u0316\x03\x02\x02\x02\u0314" +
		"\u0312\x03\x02\x02\x02\u0314\u0315\x03\x02\x02\x02\u0315Y\x03\x02\x02" +
		"\x02\u0316\u0314\x03\x02\x02\x02\u0317\u0333\x05\\/\x02\u0318\u0333\x05" +
		"f4\x02\u0319\u0333\x05h5\x02\u031A\u0333\x05p9\x02\u031B\u0333\x05r:\x02" +
		"\u031C\u0333\x07S\x02\x02\u031D\u0333\x07\x15\x02\x02\u031E\u031F\x07" +
		"\x12\x02\x02\u031F\u0320\x07B\x02\x02\u0320\u0321\x05X-\x02\u0321\u0324" +
		"\x07C\x02\x02\u0322\u0325\x05X-\x02\u0323\u0325\x05(\x15\x02\u0324\u0322" +
		"\x03\x02\x02\x02\u0324\u0323\x03\x02\x02\x02\u0325\u032B\x03\x02\x02\x02" +
		"\u0326\u0329\x07\x13\x02\x02\u0327\u032A\x05X-\x02\u0328\u032A\x05(\x15" +
		"\x02\u0329\u0327\x03\x02\x02\x02\u0329\u0328\x03\x02\x02\x02\u032A\u032C" +
		"\x03\x02\x02\x02\u032B\u0326\x03\x02\x02\x02\u032B\u032C\x03\x02\x02\x02" +
		"\u032C\u0333\x03\x02\x02\x02\u032D\u032E\x07B\x02\x02\u032E\u032F\x05" +
		"X-\x02\u032F\u0330\x07C\x02\x02\u0330\u0333\x03\x02\x02\x02\u0331\u0333" +
		"\x05T+\x02\u0332\u0317\x03\x02\x02\x02\u0332\u0318\x03\x02\x02\x02\u0332" +
		"\u0319\x03\x02\x02\x02\u0332\u031A\x03\x02\x02\x02\u0332\u031B\x03\x02" +
		"\x02\x02\u0332\u031C\x03\x02\x02\x02\u0332\u031D\x03\x02\x02\x02\u0332" +
		"\u031E\x03\x02\x02\x02\u0332\u032D\x03\x02\x02\x02\u0332\u0331\x03\x02" +
		"\x02\x02\u0333[\x03\x02\x02\x02\u0334\u0339\x05^0\x02\u0335\u0339\x07" +
		"O\x02\x02\u0336\u0339\x07P\x02\x02\u0337\u0339\x07Q\x02\x02\u0338\u0334" +
		"\x03\x02\x02\x02\u0338\u0335\x03\x02\x02\x02\u0338\u0336\x03\x02\x02\x02" +
		"\u0338\u0337\x03\x02\x02\x02\u0339]\x03\x02\x02\x02\u033A\u033E\x07L\x02" +
		"\x02\u033B\u033E\x07M\x02\x02\u033C\u033E\x05`1\x02\u033D\u033A\x03\x02" +
		"\x02\x02\u033D\u033B\x03\x02\x02\x02\u033D\u033C\x03\x02\x02\x02\u033E" +
		"_\x03\x02\x02\x02\u033F\u0343\x07N\x02\x02\u0340\u0342\x05b2\x02\u0341" +
		"\u0340\x03\x02\x02\x02\u0342\u0345\x03\x02\x02\x02\u0343\u0341\x03\x02" +
		"\x02\x02\u0343\u0344\x03\x02\x02\x02\u0344\u0346\x03\x02\x02\x02\u0345" +
		"\u0343\x03\x02\x02\x02\u0346\u0347\x07T\x02\x02\u0347a\x03\x02\x02\x02" +
		"\u0348\u034F\x07U\x02\x02\u0349\u034F\x07W\x02\x02\u034A\u034B\x07V\x02" +
		"\x02\u034B\u034C\x05X-\x02\u034C\u034D\x07X\x02\x02\u034D\u034F\x03\x02" +
		"\x02\x02\u034E\u0348\x03\x02\x02\x02\u034E\u0349\x03\x02\x02\x02\u034E" +
		"\u034A\x03\x02\x02\x02\u034Fc\x03\x02\x02\x02\u0350\u0357\x07R\x02\x02" +
		"\u0351\u0353\x07B\x02\x02\u0352\u0354\x05V,\x02\u0353\u0352\x03\x02\x02" +
		"\x02\u0353\u0354\x03\x02\x02\x02\u0354\u0355\x03\x02\x02\x02\u0355\u0358" +
		"\x07C\x02\x02\u0356\u0358\x05^0\x02\u0357\u0351\x03\x02\x02\x02\u0357" +
		"\u0356\x03\x02\x02\x02\u0357\u0358\x03\x02\x02\x02\u0358e\x03\x02\x02" +
		"\x02\u0359\u0362\x07D\x02\x02\u035A\u035F\x05X-\x02\u035B\u035C\x07G\x02" +
		"\x02\u035C\u035E\x05X-\x02\u035D\u035B\x03\x02\x02\x02\u035E\u0361\x03" +
		"\x02\x02\x02\u035F\u035D\x03\x02\x02\x02\u035F\u0360\x03\x02\x02\x02\u0360" +
		"\u0363\x03\x02\x02\x02\u0361\u035F\x03\x02\x02\x02\u0362\u035A\x03\x02" +
		"\x02\x02\u0362\u0363\x03\x02\x02\x02\u0363\u0364\x03\x02\x02\x02\u0364" +
		"\u0365\x07E\x02\x02\u0365g\x03\x02\x02\x02\u0366\u0367\x07@\x02\x02\u0367" +
		"\u0380\x07A\x02\x02\u0368\u0369\x07@\x02\x02\u0369\u036A\x07K\x02\x02" +
		"\u036A\u0380\x07A\x02\x02\u036B\u036C\x07@\x02\x02\u036C\u036D\x07K\x02" +
		"\x02\u036D\u036E\x05n8\x02\u036E\u036F\x07A\x02\x02\u036F\u0380\x03\x02" +
		"\x02\x02\u0370\u0371\x07@\x02\x02\u0371\u0372\x05j6\x02\u0372\u0373\x07" +
		"K\x02\x02\u0373\u0374\x07A\x02\x02\u0374\u0380\x03\x02\x02\x02\u0375\u0376" +
		"\x07@\x02\x02\u0376\u0377\x05j6\x02\u0377\u0378\x07K\x02\x02\u0378\u0379" +
		"\x05n8\x02\u0379\u037A\x07A\x02\x02\u037A\u0380\x03\x02\x02\x02\u037B" +
		"\u037C\x07@\x02\x02\u037C\u037D\x05n8\x02\u037D\u037E\x07A\x02\x02\u037E" +
		"\u0380\x03\x02\x02\x02\u037F\u0366\x03\x02\x02\x02\u037F\u0368\x03\x02" +
		"\x02\x02\u037F\u036B\x03\x02\x02\x02\u037F\u0370\x03\x02\x02\x02\u037F" +
		"\u0375\x03\x02\x02\x02\u037F\u037B\x03\x02\x02\x02\u0380i\x03\x02\x02" +
		"\x02\u0381\u0386\x05l7\x02\u0382\u0383\x07G\x02\x02\u0383\u0385\x05l7" +
		"\x02\u0384\u0382\x03\x02\x02\x02\u0385\u0388\x03\x02\x02\x02\u0386\u0384" +
		"\x03\x02\x02\x02\u0386\u0387\x03\x02\x02\x02\u0387k\x03\x02\x02\x02\u0388" +
		"\u0386\x03\x02\x02\x02\u0389\u038C\x07S\x02\x02\u038A\u038B\x07H\x02\x02" +
		"\u038B\u038D\x05 \x11\x02\u038C\u038A\x03\x02\x02\x02\u038C\u038D\x03" +
		"\x02\x02\x02\u038Dm\x03\x02\x02\x02\u038E\u039C\x05X-\x02\u038F\u0394" +
		"\x05.\x18\x02\u0390\u0391\x07I\x02\x02\u0391\u0393\x05.\x18\x02\u0392" +
		"\u0390\x03\x02\x02\x02\u0393\u0396\x03\x02\x02\x02\u0394\u0392\x03\x02" +
		"\x02\x02\u0394\u0395\x03\x02\x02\x02\u0395\u0398\x03\x02\x02\x02\u0396" +
		"\u0394\x03\x02\x02\x02\u0397\u038F\x03\x02\x02\x02\u0398\u0399\x03\x02" +
		"\x02\x02\u0399\u0397\x03\x02\x02\x02\u0399\u039A\x03\x02\x02\x02\u039A" +
		"\u039C\x03\x02\x02\x02\u039B\u038E\x03\x02\x02\x02\u039B\u0397\x03\x02" +
		"\x02\x02\u039Co\x03\x02\x02\x02\u039D\u039E\x07\x18\x02\x02\u039E\u03A0" +
		"\x07B\x02\x02\u039F\u03A1\x05P)\x02\u03A0\u039F\x03\x02\x02\x02\u03A0" +
		"\u03A1\x03\x02\x02\x02\u03A1\u03A2\x03\x02\x02\x02\u03A2\u03A5\x07C\x02" +
		"\x02\u03A3\u03A4\x07H\x02\x02\u03A4\u03A6\x05 \x11\x02\u03A5\u03A3\x03" +
		"\x02\x02\x02\u03A5\u03A6\x03\x02\x02\x02\u03A6\u03A7\x03\x02\x02\x02\u03A7" +
		"\u03A8\x05(\x15\x02\u03A8q\x03\x02\x02\x02\u03A9\u03AA\x07>\x02\x02\u03AA" +
		"\u03AB\x05X-\x02\u03ABs\x03\x02\x02\x02qw\x80\x86\x8E\x9C\xA1\xA9\xB5" +
		"\xBA\xC0\xC6\xCB\xD1\xDB\xE1\xEC\xF2\xFD\u0103\u010E\u0112\u0117\u011E" +
		"\u0124\u012B\u0135\u013D\u0141\u0146\u0150\u0153\u015D\u0166\u016B\u0171" +
		"\u017A\u0183\u0188\u018E\u0199\u01A3\u01AA\u01B0\u01B4\u01B8\u01BE\u01C0" +
		"\u01C4\u01D0\u01D8\u01E3\u01EB\u01F0\u01F5\u01FC\u01FE\u0203\u0209\u020F" +
		"\u0212\u0219\u021F\u0228\u022F\u0235\u0239\u023F\u0244\u024B\u0251\u0259" +
		"\u025D\u0262\u0268\u0272\u027B\u027E\u0283\u0291\u0296\u029B\u02A0\u02A3" +
		"\u02A6\u02AD\u02CC\u0303\u0307\u030D\u0312\u0314\u0324\u0329\u032B\u0332" +
		"\u0338\u033D\u0343\u034E\u0353\u0357\u035F\u0362\u037F\u0386\u038C\u0394" +
		"\u0399\u039B\u03A0\u03A5";
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
	public functionType(): FunctionTypeContext | undefined {
		return this.tryGetRuleContext(0, FunctionTypeContext);
	}
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
	public NULL_TYPE(): TerminalNode | undefined { return this.tryGetToken(CanonParser.NULL_TYPE, 0); }
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


export class FunctionTypeContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(CanonParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CanonParser.RPAREN, 0); }
	public ARROW(): TerminalNode { return this.getToken(CanonParser.ARROW, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
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
	public get ruleIndex(): number { return CanonParser.RULE_functionType; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterFunctionType) {
			listener.enterFunctionType(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitFunctionType) {
			listener.exitFunctionType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitFunctionType) {
			return visitor.visitFunctionType(this);
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
	public mixinDeclaration(): MixinDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MixinDeclarationContext);
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


export class MixinDeclarationContext extends ParserRuleContext {
	public MIXIN(): TerminalNode { return this.getToken(CanonParser.MIXIN, 0); }
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_mixinDeclaration; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterMixinDeclaration) {
			listener.enterMixinDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitMixinDeclaration) {
			listener.exitMixinDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitMixinDeclaration) {
			return visitor.visitMixinDeclaration(this);
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


