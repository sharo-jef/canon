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
	public static readonly LINE_COMMENT = 2;
	public static readonly BLOCK_COMMENT = 3;
	public static readonly SCHEMA_DIRECTIVE = 4;
	public static readonly HASH_COMMENT = 5;
	public static readonly SCHEMA = 6;
	public static readonly STRUCT = 7;
	public static readonly UNION = 8;
	public static readonly TYPE = 9;
	public static readonly INIT = 10;
	public static readonly PRIVATE = 11;
	public static readonly GET = 12;
	public static readonly REPEATED = 13;
	public static readonly USE = 14;
	public static readonly IF = 15;
	public static readonly ELSE = 16;
	public static readonly NOT = 17;
	public static readonly THIS = 18;
	public static readonly VAL = 19;
	public static readonly VAR = 20;
	public static readonly FUN = 21;
	public static readonly STRING_TYPE = 22;
	public static readonly INT_TYPE = 23;
	public static readonly BOOL_TYPE = 24;
	public static readonly PLUS = 25;
	public static readonly MINUS = 26;
	public static readonly MULTIPLY = 27;
	public static readonly DIVIDE = 28;
	public static readonly MODULO = 29;
	public static readonly EQUALS = 30;
	public static readonly NOT_EQUALS = 31;
	public static readonly LESS_THAN = 32;
	public static readonly GREATER_THAN = 33;
	public static readonly LESS_EQUALS = 34;
	public static readonly GREATER_EQUALS = 35;
	public static readonly ASSIGN = 36;
	public static readonly PLUS_ASSIGN = 37;
	public static readonly LOGICAL_AND = 38;
	public static readonly LOGICAL_OR = 39;
	public static readonly EXCLAMATION = 40;
	public static readonly LBRACE = 41;
	public static readonly RBRACE = 42;
	public static readonly LPAREN = 43;
	public static readonly RPAREN = 44;
	public static readonly LBRACKET = 45;
	public static readonly RBRACKET = 46;
	public static readonly DOT = 47;
	public static readonly COMMA = 48;
	public static readonly COLON = 49;
	public static readonly SEMICOLON = 50;
	public static readonly QUESTION = 51;
	public static readonly ARROW = 52;
	public static readonly PIPE = 53;
	public static readonly STRING_LITERAL = 54;
	public static readonly DOUBLE_STRING_LITERAL = 55;
	public static readonly TEMPLATE_STRING_START = 56;
	public static readonly INTEGER_LITERAL = 57;
	public static readonly TRUE = 58;
	public static readonly FALSE = 59;
	public static readonly ANNOTATION = 60;
	public static readonly IDENTIFIER = 61;
	public static readonly TEMPLATE_STRING_END = 62;
	public static readonly TEMPLATE_STRING_PART = 63;
	public static readonly TEMPLATE_INTERPOLATION_START = 64;
	public static readonly TEMPLATE_INTERPOLATION_SIMPLE = 65;
	public static readonly INTERPOLATION_END = 66;
	public static readonly INTERPOLATION_WS = 67;
	public static readonly RULE_program = 0;
	public static readonly RULE_schemaDirective = 1;
	public static readonly RULE_useStatement = 2;
	public static readonly RULE_topLevelStatement = 3;
	public static readonly RULE_topLevelElement = 4;
	public static readonly RULE_schemaDeclaration = 5;
	public static readonly RULE_structDeclaration = 6;
	public static readonly RULE_unionDeclaration = 7;
	public static readonly RULE_typeDeclaration = 8;
	public static readonly RULE_functionDeclaration = 9;
	public static readonly RULE_variableDeclaration = 10;
	public static readonly RULE_unionType = 11;
	public static readonly RULE_type = 12;
	public static readonly RULE_baseType = 13;
	public static readonly RULE_primitiveType = 14;
	public static readonly RULE_block = 15;
	public static readonly RULE_statement = 16;
	public static readonly RULE_propertyDeclaration = 17;
	public static readonly RULE_assignmentStatement = 18;
	public static readonly RULE_initDeclaration = 19;
	public static readonly RULE_getterDeclaration = 20;
	public static readonly RULE_repeatedDeclaration = 21;
	public static readonly RULE_mappingBlock = 22;
	public static readonly RULE_mappingEntry = 23;
	public static readonly RULE_parameterList = 24;
	public static readonly RULE_parameter = 25;
	public static readonly RULE_callExpression = 26;
	public static readonly RULE_argumentList = 27;
	public static readonly RULE_expressionStatement = 28;
	public static readonly RULE_expression = 29;
	public static readonly RULE_primary = 30;
	public static readonly RULE_literal = 31;
	public static readonly RULE_stringLiteral = 32;
	public static readonly RULE_templateString = 33;
	public static readonly RULE_templateStringContent = 34;
	public static readonly RULE_annotation = 35;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "schemaDirective", "useStatement", "topLevelStatement", "topLevelElement", 
		"schemaDeclaration", "structDeclaration", "unionDeclaration", "typeDeclaration", 
		"functionDeclaration", "variableDeclaration", "unionType", "type", "baseType", 
		"primitiveType", "block", "statement", "propertyDeclaration", "assignmentStatement", 
		"initDeclaration", "getterDeclaration", "repeatedDeclaration", "mappingBlock", 
		"mappingEntry", "parameterList", "parameter", "callExpression", "argumentList", 
		"expressionStatement", "expression", "primary", "literal", "stringLiteral", 
		"templateString", "templateStringContent", "annotation",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "'#schema'", undefined, "'schema'", 
		"'struct'", "'union'", "'type'", "'init'", "'private'", "'get'", "'repeated'", 
		"'use'", "'if'", "'else'", "'not'", "'this'", "'val'", "'var'", "'fun'", 
		"'string'", "'int'", "'bool'", undefined, undefined, undefined, undefined, 
		"'%'", undefined, undefined, undefined, undefined, undefined, undefined, 
		"'='", "'+='", undefined, undefined, undefined, "'{'", undefined, undefined, 
		undefined, "'['", "']'", undefined, "','", "':'", "';'", "'?'", "'->'", 
		"'|'", undefined, undefined, undefined, undefined, "'true'", "'false'", 
		undefined, undefined, undefined, undefined, "'${'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WS", "LINE_COMMENT", "BLOCK_COMMENT", "SCHEMA_DIRECTIVE", 
		"HASH_COMMENT", "SCHEMA", "STRUCT", "UNION", "TYPE", "INIT", "PRIVATE", 
		"GET", "REPEATED", "USE", "IF", "ELSE", "NOT", "THIS", "VAL", "VAR", "FUN", 
		"STRING_TYPE", "INT_TYPE", "BOOL_TYPE", "PLUS", "MINUS", "MULTIPLY", "DIVIDE", 
		"MODULO", "EQUALS", "NOT_EQUALS", "LESS_THAN", "GREATER_THAN", "LESS_EQUALS", 
		"GREATER_EQUALS", "ASSIGN", "PLUS_ASSIGN", "LOGICAL_AND", "LOGICAL_OR", 
		"EXCLAMATION", "LBRACE", "RBRACE", "LPAREN", "RPAREN", "LBRACKET", "RBRACKET", 
		"DOT", "COMMA", "COLON", "SEMICOLON", "QUESTION", "ARROW", "PIPE", "STRING_LITERAL", 
		"DOUBLE_STRING_LITERAL", "TEMPLATE_STRING_START", "INTEGER_LITERAL", "TRUE", 
		"FALSE", "ANNOTATION", "IDENTIFIER", "TEMPLATE_STRING_END", "TEMPLATE_STRING_PART", 
		"TEMPLATE_INTERPOLATION_START", "TEMPLATE_INTERPOLATION_SIMPLE", "INTERPOLATION_END", 
		"INTERPOLATION_WS",
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.SCHEMA_DIRECTIVE) | (1 << CanonParser.SCHEMA) | (1 << CanonParser.STRUCT) | (1 << CanonParser.UNION) | (1 << CanonParser.TYPE) | (1 << CanonParser.USE) | (1 << CanonParser.THIS) | (1 << CanonParser.VAL) | (1 << CanonParser.VAR) | (1 << CanonParser.FUN))) !== 0) || _la === CanonParser.ANNOTATION || _la === CanonParser.IDENTIFIER) {
				{
				this.state = 75;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CanonParser.SCHEMA_DIRECTIVE:
					{
					this.state = 72;
					this.schemaDirective();
					}
					break;
				case CanonParser.USE:
					{
					this.state = 73;
					this.useStatement();
					}
					break;
				case CanonParser.SCHEMA:
				case CanonParser.STRUCT:
				case CanonParser.UNION:
				case CanonParser.TYPE:
				case CanonParser.THIS:
				case CanonParser.VAL:
				case CanonParser.VAR:
				case CanonParser.FUN:
				case CanonParser.ANNOTATION:
				case CanonParser.IDENTIFIER:
					{
					this.state = 74;
					this.topLevelStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 79;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 80;
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
	public schemaDirective(): SchemaDirectiveContext {
		let _localctx: SchemaDirectiveContext = new SchemaDirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CanonParser.RULE_schemaDirective);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			this.match(CanonParser.SCHEMA_DIRECTIVE);
			this.state = 83;
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
		this.enterRule(_localctx, 4, CanonParser.RULE_useStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this.match(CanonParser.USE);
			this.state = 86;
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
	public topLevelStatement(): TopLevelStatementContext {
		let _localctx: TopLevelStatementContext = new TopLevelStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CanonParser.RULE_topLevelStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			this.topLevelElement();
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.SEMICOLON) {
				{
				{
				this.state = 89;
				this.match(CanonParser.SEMICOLON);
				this.state = 90;
				this.topLevelElement();
				}
				}
				this.state = 95;
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
		this.enterRule(_localctx, 8, CanonParser.RULE_topLevelElement);
		try {
			this.state = 104;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 96;
				this.schemaDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 97;
				this.structDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 98;
				this.unionDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 99;
				this.typeDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 100;
				this.variableDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 101;
				this.functionDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 102;
				this.assignmentStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 103;
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
		this.enterRule(_localctx, 10, CanonParser.RULE_schemaDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 106;
				this.annotation();
				}
				}
				this.state = 111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 112;
			this.match(CanonParser.SCHEMA);
			this.state = 115;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.LBRACE:
				{
				this.state = 113;
				this.block();
				}
				break;
			case CanonParser.STRING_LITERAL:
			case CanonParser.DOUBLE_STRING_LITERAL:
			case CanonParser.TEMPLATE_STRING_START:
				{
				this.state = 114;
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
		this.enterRule(_localctx, 12, CanonParser.RULE_structDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 117;
				this.annotation();
				}
				}
				this.state = 122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 123;
			this.match(CanonParser.STRUCT);
			this.state = 124;
			this.match(CanonParser.IDENTIFIER);
			this.state = 125;
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
	public unionDeclaration(): UnionDeclarationContext {
		let _localctx: UnionDeclarationContext = new UnionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CanonParser.RULE_unionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 127;
				this.annotation();
				}
				}
				this.state = 132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 133;
			this.match(CanonParser.UNION);
			this.state = 134;
			this.match(CanonParser.IDENTIFIER);
			this.state = 135;
			this.match(CanonParser.ASSIGN);
			this.state = 136;
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
		this.enterRule(_localctx, 16, CanonParser.RULE_typeDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 138;
				this.annotation();
				}
				}
				this.state = 143;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 144;
			this.match(CanonParser.TYPE);
			this.state = 145;
			this.match(CanonParser.IDENTIFIER);
			this.state = 146;
			this.match(CanonParser.ASSIGN);
			this.state = 147;
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
		this.enterRule(_localctx, 18, CanonParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 149;
				this.annotation();
				}
				}
				this.state = 154;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 155;
			this.match(CanonParser.FUN);
			this.state = 156;
			this.match(CanonParser.IDENTIFIER);
			this.state = 157;
			this.match(CanonParser.LPAREN);
			this.state = 159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.THIS || _la === CanonParser.IDENTIFIER) {
				{
				this.state = 158;
				this.parameterList();
				}
			}

			this.state = 161;
			this.match(CanonParser.RPAREN);
			this.state = 164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 162;
				this.match(CanonParser.COLON);
				this.state = 163;
				this.type();
				}
			}

			this.state = 166;
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
		this.enterRule(_localctx, 20, CanonParser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 171;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 168;
				this.annotation();
				}
				}
				this.state = 173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 174;
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
			this.state = 175;
			this.match(CanonParser.IDENTIFIER);
			this.state = 178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 176;
				this.match(CanonParser.COLON);
				this.state = 177;
				this.type();
				}
			}

			this.state = 180;
			this.match(CanonParser.ASSIGN);
			this.state = 181;
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
		this.enterRule(_localctx, 22, CanonParser.RULE_unionType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183;
			this.type();
			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.PIPE) {
				{
				{
				this.state = 184;
				this.match(CanonParser.PIPE);
				this.state = 185;
				this.type();
				}
				}
				this.state = 190;
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
		this.enterRule(_localctx, 24, CanonParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 191;
			this.baseType();
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.LBRACKET) {
				{
				{
				this.state = 192;
				this.match(CanonParser.LBRACKET);
				this.state = 193;
				this.match(CanonParser.RBRACKET);
				}
				}
				this.state = 198;
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
	public baseType(): BaseTypeContext {
		let _localctx: BaseTypeContext = new BaseTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CanonParser.RULE_baseType);
		try {
			this.state = 201;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.STRING_TYPE:
			case CanonParser.INT_TYPE:
			case CanonParser.BOOL_TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 199;
				this.primitiveType();
				}
				break;
			case CanonParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 200;
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
		this.enterRule(_localctx, 28, CanonParser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.STRING_TYPE) | (1 << CanonParser.INT_TYPE) | (1 << CanonParser.BOOL_TYPE))) !== 0))) {
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
		this.enterRule(_localctx, 30, CanonParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
			this.match(CanonParser.LBRACE);
			this.state = 216;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.INIT) | (1 << CanonParser.PRIVATE) | (1 << CanonParser.GET) | (1 << CanonParser.REPEATED) | (1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.VAL) | (1 << CanonParser.VAR) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (CanonParser.LPAREN - 43)) | (1 << (CanonParser.STRING_LITERAL - 43)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 43)) | (1 << (CanonParser.TEMPLATE_STRING_START - 43)) | (1 << (CanonParser.INTEGER_LITERAL - 43)) | (1 << (CanonParser.TRUE - 43)) | (1 << (CanonParser.FALSE - 43)) | (1 << (CanonParser.ANNOTATION - 43)) | (1 << (CanonParser.IDENTIFIER - 43)))) !== 0)) {
				{
				{
				this.state = 206;
				this.statement();
				this.state = 211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CanonParser.SEMICOLON) {
					{
					{
					this.state = 207;
					this.match(CanonParser.SEMICOLON);
					this.state = 208;
					this.statement();
					}
					}
					this.state = 213;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 219;
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CanonParser.RULE_statement);
		try {
			this.state = 228;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 221;
				this.assignmentStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 222;
				this.expressionStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 223;
				this.propertyDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 224;
				this.initDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 225;
				this.getterDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 226;
				this.repeatedDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 227;
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
	public propertyDeclaration(): PropertyDeclarationContext {
		let _localctx: PropertyDeclarationContext = new PropertyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CanonParser.RULE_propertyDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 233;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 230;
				this.annotation();
				}
				}
				this.state = 235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.PRIVATE) {
				{
				this.state = 236;
				this.match(CanonParser.PRIVATE);
				}
			}

			this.state = 239;
			this.match(CanonParser.IDENTIFIER);
			this.state = 249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON || _la === CanonParser.QUESTION) {
				{
				this.state = 241;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.QUESTION) {
					{
					this.state = 240;
					this.match(CanonParser.QUESTION);
					}
				}

				this.state = 243;
				this.match(CanonParser.COLON);
				this.state = 244;
				this.type();
				this.state = 247;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.ASSIGN) {
					{
					this.state = 245;
					this.match(CanonParser.ASSIGN);
					this.state = 246;
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
		this.enterRule(_localctx, 36, CanonParser.RULE_assignmentStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.THIS) {
				{
				this.state = 251;
				this.match(CanonParser.THIS);
				this.state = 252;
				this.match(CanonParser.DOT);
				}
			}

			this.state = 255;
			this.match(CanonParser.IDENTIFIER);
			this.state = 256;
			_la = this._input.LA(1);
			if (!(_la === CanonParser.ASSIGN || _la === CanonParser.PLUS_ASSIGN)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 257;
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
	public initDeclaration(): InitDeclarationContext {
		let _localctx: InitDeclarationContext = new InitDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CanonParser.RULE_initDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 259;
				this.annotation();
				}
				}
				this.state = 264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 265;
			this.match(CanonParser.INIT);
			this.state = 271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.LPAREN) {
				{
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
				}
			}

			this.state = 273;
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
		this.enterRule(_localctx, 40, CanonParser.RULE_getterDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 278;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 275;
				this.annotation();
				}
				}
				this.state = 280;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 281;
			this.match(CanonParser.GET);
			this.state = 282;
			this.match(CanonParser.IDENTIFIER);
			this.state = 283;
			this.match(CanonParser.LPAREN);
			this.state = 284;
			this.match(CanonParser.RPAREN);
			this.state = 285;
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
		this.enterRule(_localctx, 42, CanonParser.RULE_repeatedDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 290;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 287;
				this.annotation();
				}
				}
				this.state = 292;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 293;
			this.match(CanonParser.REPEATED);
			this.state = 294;
			this.match(CanonParser.IDENTIFIER);
			this.state = 295;
			this.match(CanonParser.COLON);
			this.state = 296;
			this.type();
			this.state = 298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.LBRACE) {
				{
				this.state = 297;
				this.mappingBlock();
				}
			}

			this.state = 302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.ASSIGN) {
				{
				this.state = 300;
				this.match(CanonParser.ASSIGN);
				this.state = 301;
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
		this.enterRule(_localctx, 44, CanonParser.RULE_mappingBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 304;
			this.match(CanonParser.LBRACE);
			this.state = 308;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.IDENTIFIER) {
				{
				{
				this.state = 305;
				this.mappingEntry();
				}
				}
				this.state = 310;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 311;
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
		this.enterRule(_localctx, 46, CanonParser.RULE_mappingEntry);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 313;
			this.match(CanonParser.IDENTIFIER);
			this.state = 314;
			this.match(CanonParser.ARROW);
			this.state = 315;
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
		this.enterRule(_localctx, 48, CanonParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 317;
			this.parameter();
			this.state = 322;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.COMMA) {
				{
				{
				this.state = 318;
				this.match(CanonParser.COMMA);
				this.state = 319;
				this.parameter();
				}
				}
				this.state = 324;
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
		this.enterRule(_localctx, 50, CanonParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 327;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.THIS) {
				{
				this.state = 325;
				this.match(CanonParser.THIS);
				this.state = 326;
				this.match(CanonParser.DOT);
				}
			}

			this.state = 329;
			this.match(CanonParser.IDENTIFIER);
			this.state = 332;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 330;
				this.match(CanonParser.COLON);
				this.state = 331;
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
		this.enterRule(_localctx, 52, CanonParser.RULE_callExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			this.match(CanonParser.IDENTIFIER);
			this.state = 340;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				{
				this.state = 335;
				this.match(CanonParser.LPAREN);
				this.state = 337;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (CanonParser.LPAREN - 43)) | (1 << (CanonParser.STRING_LITERAL - 43)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 43)) | (1 << (CanonParser.TEMPLATE_STRING_START - 43)) | (1 << (CanonParser.INTEGER_LITERAL - 43)) | (1 << (CanonParser.TRUE - 43)) | (1 << (CanonParser.FALSE - 43)) | (1 << (CanonParser.IDENTIFIER - 43)))) !== 0)) {
					{
					this.state = 336;
					this.argumentList();
					}
				}

				this.state = 339;
				this.match(CanonParser.RPAREN);
				}
				break;
			}
			this.state = 343;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 342;
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
		this.enterRule(_localctx, 54, CanonParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 345;
			this.expression(0);
			this.state = 350;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.COMMA) {
				{
				{
				this.state = 346;
				this.match(CanonParser.COMMA);
				this.state = 347;
				this.expression(0);
				}
				}
				this.state = 352;
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
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, CanonParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 353;
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
		let _startState: number = 58;
		this.enterRecursionRule(_localctx, 58, CanonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 361;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.IF:
			case CanonParser.THIS:
			case CanonParser.LPAREN:
			case CanonParser.STRING_LITERAL:
			case CanonParser.DOUBLE_STRING_LITERAL:
			case CanonParser.TEMPLATE_STRING_START:
			case CanonParser.INTEGER_LITERAL:
			case CanonParser.TRUE:
			case CanonParser.FALSE:
			case CanonParser.IDENTIFIER:
				{
				_localctx = new PrimaryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 356;
				this.primary();
				}
				break;
			case CanonParser.MINUS:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 357;
				this.match(CanonParser.MINUS);
				this.state = 358;
				this.expression(8);
				}
				break;
			case CanonParser.NOT:
				{
				_localctx = new LogicalNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 359;
				this.match(CanonParser.NOT);
				this.state = 360;
				this.expression(7);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 394;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 392;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 363;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 364;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.MULTIPLY) | (1 << CanonParser.DIVIDE) | (1 << CanonParser.MODULO))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 365;
						this.expression(7);
						}
						break;

					case 2:
						{
						_localctx = new AdditiveExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 366;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 367;
						_la = this._input.LA(1);
						if (!(_la === CanonParser.PLUS || _la === CanonParser.MINUS)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 368;
						this.expression(6);
						}
						break;

					case 3:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 369;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 370;
						_la = this._input.LA(1);
						if (!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CanonParser.LESS_THAN - 32)) | (1 << (CanonParser.GREATER_THAN - 32)) | (1 << (CanonParser.LESS_EQUALS - 32)) | (1 << (CanonParser.GREATER_EQUALS - 32)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 371;
						this.expression(5);
						}
						break;

					case 4:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 372;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 373;
						_la = this._input.LA(1);
						if (!(_la === CanonParser.EQUALS || _la === CanonParser.NOT_EQUALS)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 374;
						this.expression(4);
						}
						break;

					case 5:
						{
						_localctx = new LogicalAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 375;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 376;
						this.match(CanonParser.LOGICAL_AND);
						this.state = 377;
						this.expression(3);
						}
						break;

					case 6:
						{
						_localctx = new LogicalOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 378;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 379;
						this.match(CanonParser.LOGICAL_OR);
						this.state = 380;
						this.expression(2);
						}
						break;

					case 7:
						{
						_localctx = new MemberAccessExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 381;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 382;
						this.match(CanonParser.DOT);
						this.state = 383;
						this.match(CanonParser.IDENTIFIER);
						}
						break;

					case 8:
						{
						_localctx = new FunctionCallExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 384;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 385;
						this.match(CanonParser.LPAREN);
						this.state = 387;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (CanonParser.LPAREN - 43)) | (1 << (CanonParser.STRING_LITERAL - 43)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 43)) | (1 << (CanonParser.TEMPLATE_STRING_START - 43)) | (1 << (CanonParser.INTEGER_LITERAL - 43)) | (1 << (CanonParser.TRUE - 43)) | (1 << (CanonParser.FALSE - 43)) | (1 << (CanonParser.IDENTIFIER - 43)))) !== 0)) {
							{
							this.state = 386;
							this.argumentList();
							}
						}

						this.state = 389;
						this.match(CanonParser.RPAREN);
						}
						break;

					case 9:
						{
						_localctx = new NonNullAssertionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 390;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 391;
						this.match(CanonParser.EXCLAMATION);
						}
						break;
					}
					}
				}
				this.state = 396;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
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
		this.enterRule(_localctx, 60, CanonParser.RULE_primary);
		try {
			this.state = 420;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				_localctx = new LiteralExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 397;
				this.literal();
				}
				break;

			case 2:
				_localctx = new IdentifierExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 398;
				this.match(CanonParser.IDENTIFIER);
				}
				break;

			case 3:
				_localctx = new ThisExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 399;
				this.match(CanonParser.THIS);
				}
				break;

			case 4:
				_localctx = new IfExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 400;
				this.match(CanonParser.IF);
				this.state = 401;
				this.match(CanonParser.LPAREN);
				this.state = 402;
				this.expression(0);
				this.state = 403;
				this.match(CanonParser.RPAREN);
				this.state = 406;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CanonParser.IF:
				case CanonParser.NOT:
				case CanonParser.THIS:
				case CanonParser.MINUS:
				case CanonParser.LPAREN:
				case CanonParser.STRING_LITERAL:
				case CanonParser.DOUBLE_STRING_LITERAL:
				case CanonParser.TEMPLATE_STRING_START:
				case CanonParser.INTEGER_LITERAL:
				case CanonParser.TRUE:
				case CanonParser.FALSE:
				case CanonParser.IDENTIFIER:
					{
					this.state = 404;
					this.expression(0);
					}
					break;
				case CanonParser.LBRACE:
					{
					this.state = 405;
					this.block();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 413;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
				case 1:
					{
					this.state = 408;
					this.match(CanonParser.ELSE);
					this.state = 411;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CanonParser.IF:
					case CanonParser.NOT:
					case CanonParser.THIS:
					case CanonParser.MINUS:
					case CanonParser.LPAREN:
					case CanonParser.STRING_LITERAL:
					case CanonParser.DOUBLE_STRING_LITERAL:
					case CanonParser.TEMPLATE_STRING_START:
					case CanonParser.INTEGER_LITERAL:
					case CanonParser.TRUE:
					case CanonParser.FALSE:
					case CanonParser.IDENTIFIER:
						{
						this.state = 409;
						this.expression(0);
						}
						break;
					case CanonParser.LBRACE:
						{
						this.state = 410;
						this.block();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				}
				}
				break;

			case 5:
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 415;
				this.match(CanonParser.LPAREN);
				this.state = 416;
				this.expression(0);
				this.state = 417;
				this.match(CanonParser.RPAREN);
				}
				break;

			case 6:
				_localctx = new CallExpressionPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 419;
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
		this.enterRule(_localctx, 62, CanonParser.RULE_literal);
		try {
			this.state = 426;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.STRING_LITERAL:
			case CanonParser.DOUBLE_STRING_LITERAL:
			case CanonParser.TEMPLATE_STRING_START:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 422;
				this.stringLiteral();
				}
				break;
			case CanonParser.INTEGER_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 423;
				this.match(CanonParser.INTEGER_LITERAL);
				}
				break;
			case CanonParser.TRUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 424;
				this.match(CanonParser.TRUE);
				}
				break;
			case CanonParser.FALSE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 425;
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
		this.enterRule(_localctx, 64, CanonParser.RULE_stringLiteral);
		try {
			this.state = 431;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 428;
				this.match(CanonParser.STRING_LITERAL);
				}
				break;
			case CanonParser.DOUBLE_STRING_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 429;
				this.match(CanonParser.DOUBLE_STRING_LITERAL);
				}
				break;
			case CanonParser.TEMPLATE_STRING_START:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 430;
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
		this.enterRule(_localctx, 66, CanonParser.RULE_templateString);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 433;
			this.match(CanonParser.TEMPLATE_STRING_START);
			this.state = 437;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & ((1 << (CanonParser.TEMPLATE_STRING_PART - 63)) | (1 << (CanonParser.TEMPLATE_INTERPOLATION_START - 63)) | (1 << (CanonParser.TEMPLATE_INTERPOLATION_SIMPLE - 63)))) !== 0)) {
				{
				{
				this.state = 434;
				this.templateStringContent();
				}
				}
				this.state = 439;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 440;
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
		this.enterRule(_localctx, 68, CanonParser.RULE_templateStringContent);
		try {
			this.state = 448;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.TEMPLATE_STRING_PART:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 442;
				this.match(CanonParser.TEMPLATE_STRING_PART);
				}
				break;
			case CanonParser.TEMPLATE_INTERPOLATION_SIMPLE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 443;
				this.match(CanonParser.TEMPLATE_INTERPOLATION_SIMPLE);
				}
				break;
			case CanonParser.TEMPLATE_INTERPOLATION_START:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 444;
				this.match(CanonParser.TEMPLATE_INTERPOLATION_START);
				this.state = 445;
				this.expression(0);
				this.state = 446;
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
		this.enterRule(_localctx, 70, CanonParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 450;
			this.match(CanonParser.ANNOTATION);
			this.state = 457;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.LPAREN:
				{
				this.state = 451;
				this.match(CanonParser.LPAREN);
				this.state = 453;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (CanonParser.LPAREN - 43)) | (1 << (CanonParser.STRING_LITERAL - 43)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 43)) | (1 << (CanonParser.TEMPLATE_STRING_START - 43)) | (1 << (CanonParser.INTEGER_LITERAL - 43)) | (1 << (CanonParser.TRUE - 43)) | (1 << (CanonParser.FALSE - 43)) | (1 << (CanonParser.IDENTIFIER - 43)))) !== 0)) {
					{
					this.state = 452;
					this.argumentList();
					}
				}

				this.state = 455;
				this.match(CanonParser.RPAREN);
				}
				break;
			case CanonParser.STRING_LITERAL:
			case CanonParser.DOUBLE_STRING_LITERAL:
			case CanonParser.TEMPLATE_STRING_START:
				{
				this.state = 456;
				this.stringLiteral();
				}
				break;
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 29:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);

		case 1:
			return this.precpred(this._ctx, 5);

		case 2:
			return this.precpred(this._ctx, 4);

		case 3:
			return this.precpred(this._ctx, 3);

		case 4:
			return this.precpred(this._ctx, 2);

		case 5:
			return this.precpred(this._ctx, 1);

		case 6:
			return this.precpred(this._ctx, 11);

		case 7:
			return this.precpred(this._ctx, 10);

		case 8:
			return this.precpred(this._ctx, 9);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03E\u01CE\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x03\x02\x03\x02\x03\x02\x07\x02N\n\x02\f\x02\x0E\x02" +
		"Q\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04" +
		"\x03\x05\x03\x05\x03\x05\x07\x05^\n\x05\f\x05\x0E\x05a\v\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06k\n\x06\x03" +
		"\x07\x07\x07n\n\x07\f\x07\x0E\x07q\v\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
		"v\n\x07\x03\b\x07\by\n\b\f\b\x0E\b|\v\b\x03\b\x03\b\x03\b\x03\b\x03\t" +
		"\x07\t\x83\n\t\f\t\x0E\t\x86\v\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x07" +
		"\n\x8E\n\n\f\n\x0E\n\x91\v\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x07\v" +
		"\x99\n\v\f\v\x0E\v\x9C\v\v\x03\v\x03\v\x03\v\x03\v\x05\v\xA2\n\v\x03\v" +
		"\x03\v\x03\v\x05\v\xA7\n\v\x03\v\x03\v\x03\f\x07\f\xAC\n\f\f\f\x0E\f\xAF" +
		"\v\f\x03\f\x03\f\x03\f\x03\f\x05\f\xB5\n\f\x03\f\x03\f\x03\f\x03\r\x03" +
		"\r\x03\r\x07\r\xBD\n\r\f\r\x0E\r\xC0\v\r\x03\x0E\x03\x0E\x03\x0E\x07\x0E" +
		"\xC5\n\x0E\f\x0E\x0E\x0E\xC8\v\x0E\x03\x0F\x03\x0F\x05\x0F\xCC\n\x0F\x03" +
		"\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\xD4\n\x11\f\x11\x0E" +
		"\x11\xD7\v\x11\x07\x11\xD9\n\x11\f\x11\x0E\x11\xDC\v\x11\x03\x11\x03\x11" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\xE7\n" +
		"\x12\x03\x13\x07\x13\xEA\n\x13\f\x13\x0E\x13\xED\v\x13\x03\x13\x05\x13" +
		"\xF0\n\x13\x03\x13\x03\x13\x05\x13\xF4\n\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x05\x13\xFA\n\x13\x05\x13\xFC\n\x13\x03\x14\x03\x14\x05\x14\u0100" +
		"\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x07\x15\u0107\n\x15\f\x15" +
		"\x0E\x15\u010A\v\x15\x03\x15\x03\x15\x03\x15\x05\x15\u010F\n\x15\x03\x15" +
		"\x05\x15\u0112\n\x15\x03\x15\x03\x15\x03\x16\x07\x16\u0117\n\x16\f\x16" +
		"\x0E\x16\u011A\v\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x17\x07\x17\u0123\n\x17\f\x17\x0E\x17\u0126\v\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x05\x17\u012D\n\x17\x03\x17\x03\x17\x05\x17\u0131" +
		"\n\x17\x03\x18\x03\x18\x07\x18\u0135\n\x18\f\x18\x0E\x18\u0138\v\x18\x03" +
		"\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x07" +
		"\x1A\u0143\n\x1A\f\x1A\x0E\x1A\u0146\v\x1A\x03\x1B\x03\x1B\x05\x1B\u014A" +
		"\n\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u014F\n\x1B\x03\x1C\x03\x1C\x03" +
		"\x1C\x05\x1C\u0154\n\x1C\x03\x1C\x05\x1C\u0157\n\x1C\x03\x1C\x05\x1C\u015A" +
		"\n\x1C\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u015F\n\x1D\f\x1D\x0E\x1D\u0162" +
		"\v\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x05\x1F\u016C\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05" +
		"\x1F\u0186\n\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u018B\n\x1F\f\x1F\x0E" +
		"\x1F\u018E\v\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x05 \u0199" +
		"\n \x03 \x03 \x03 \x05 \u019E\n \x05 \u01A0\n \x03 \x03 \x03 \x03 \x03" +
		" \x05 \u01A7\n \x03!\x03!\x03!\x03!\x05!\u01AD\n!\x03\"\x03\"\x03\"\x05" +
		"\"\u01B2\n\"\x03#\x03#\x07#\u01B6\n#\f#\x0E#\u01B9\v#\x03#\x03#\x03$\x03" +
		"$\x03$\x03$\x03$\x03$\x05$\u01C3\n$\x03%\x03%\x03%\x05%\u01C8\n%\x03%" +
		"\x03%\x05%\u01CC\n%\x03%\x02\x02\x03<&\x02\x02\x04\x02\x06\x02\b\x02\n" +
		"\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026" +
		"\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02\x02\t\x03\x02\x15\x16" +
		"\x03\x02\x18\x1A\x03\x02&\'\x03\x02\x1D\x1F\x03\x02\x1B\x1C\x03\x02\"" +
		"%\x03\x02 !\x02\u01FD\x02O\x03\x02\x02\x02\x04T\x03\x02\x02\x02\x06W\x03" +
		"\x02\x02\x02\bZ\x03\x02\x02\x02\nj\x03\x02\x02\x02\fo\x03\x02\x02\x02" +
		"\x0Ez\x03\x02\x02\x02\x10\x84\x03\x02\x02\x02\x12\x8F\x03\x02\x02\x02" +
		"\x14\x9A\x03\x02\x02\x02\x16\xAD\x03\x02\x02\x02\x18\xB9\x03\x02\x02\x02" +
		"\x1A\xC1\x03\x02\x02\x02\x1C\xCB\x03\x02\x02\x02\x1E\xCD\x03\x02\x02\x02" +
		" \xCF\x03\x02\x02\x02\"\xE6\x03\x02\x02\x02$\xEB\x03\x02\x02\x02&\xFF" +
		"\x03\x02\x02\x02(\u0108\x03\x02\x02\x02*\u0118\x03\x02\x02\x02,\u0124" +
		"\x03\x02\x02\x02.\u0132\x03\x02\x02\x020\u013B\x03\x02\x02\x022\u013F" +
		"\x03\x02\x02\x024\u0149\x03\x02\x02\x026\u0150\x03\x02\x02\x028\u015B" +
		"\x03\x02\x02\x02:\u0163\x03\x02\x02\x02<\u016B\x03\x02\x02\x02>\u01A6" +
		"\x03\x02\x02\x02@\u01AC\x03\x02\x02\x02B\u01B1\x03\x02\x02\x02D\u01B3" +
		"\x03\x02\x02\x02F\u01C2\x03\x02\x02\x02H\u01C4\x03\x02\x02\x02JN\x05\x04" +
		"\x03\x02KN\x05\x06\x04\x02LN\x05\b\x05\x02MJ\x03\x02\x02\x02MK\x03\x02" +
		"\x02\x02ML\x03\x02\x02\x02NQ\x03\x02\x02\x02OM\x03\x02\x02\x02OP\x03\x02" +
		"\x02\x02PR\x03\x02\x02\x02QO\x03\x02\x02\x02RS\x07\x02\x02\x03S\x03\x03" +
		"\x02\x02\x02TU\x07\x06\x02\x02UV\x05B\"\x02V\x05\x03\x02\x02\x02WX\x07" +
		"\x10\x02\x02XY\x07?\x02\x02Y\x07\x03\x02\x02\x02Z_\x05\n\x06\x02[\\\x07" +
		"4\x02\x02\\^\x05\n\x06\x02][\x03\x02\x02\x02^a\x03\x02\x02\x02_]\x03\x02" +
		"\x02\x02_`\x03\x02\x02\x02`\t\x03\x02\x02\x02a_\x03\x02\x02\x02bk\x05" +
		"\f\x07\x02ck\x05\x0E\b\x02dk\x05\x10\t\x02ek\x05\x12\n\x02fk\x05\x16\f" +
		"\x02gk\x05\x14\v\x02hk\x05&\x14\x02ik\x056\x1C\x02jb\x03\x02\x02\x02j" +
		"c\x03\x02\x02\x02jd\x03\x02\x02\x02je\x03\x02\x02\x02jf\x03\x02\x02\x02" +
		"jg\x03\x02\x02\x02jh\x03\x02\x02\x02ji\x03\x02\x02\x02k\v\x03\x02\x02" +
		"\x02ln\x05H%\x02ml\x03\x02\x02\x02nq\x03\x02\x02\x02om\x03\x02\x02\x02" +
		"op\x03\x02\x02\x02pr\x03\x02\x02\x02qo\x03\x02\x02\x02ru\x07\b\x02\x02" +
		"sv\x05 \x11\x02tv\x05B\"\x02us\x03\x02\x02\x02ut\x03\x02\x02\x02v\r\x03" +
		"\x02\x02\x02wy\x05H%\x02xw\x03\x02\x02\x02y|\x03\x02\x02\x02zx\x03\x02" +
		"\x02\x02z{\x03\x02\x02\x02{}\x03\x02\x02\x02|z\x03\x02\x02\x02}~\x07\t" +
		"\x02\x02~\x7F\x07?\x02\x02\x7F\x80\x05 \x11\x02\x80\x0F\x03\x02\x02\x02" +
		"\x81\x83\x05H%\x02\x82\x81\x03\x02\x02\x02\x83\x86\x03\x02\x02\x02\x84" +
		"\x82\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x87\x03\x02\x02\x02\x86" +
		"\x84\x03\x02\x02\x02\x87\x88\x07\n\x02\x02\x88\x89\x07?\x02\x02\x89\x8A" +
		"\x07&\x02\x02\x8A\x8B\x05\x18\r\x02\x8B\x11\x03\x02\x02\x02\x8C\x8E\x05" +
		"H%\x02\x8D\x8C\x03\x02\x02\x02\x8E\x91\x03\x02\x02\x02\x8F\x8D\x03\x02" +
		"\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x92\x03\x02\x02\x02\x91\x8F\x03\x02" +
		"\x02\x02\x92\x93\x07\v\x02\x02\x93\x94\x07?\x02\x02\x94\x95\x07&\x02\x02" +
		"\x95\x96\x05\x1A\x0E\x02\x96\x13\x03\x02\x02\x02\x97\x99\x05H%\x02\x98" +
		"\x97\x03\x02\x02\x02\x99\x9C\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02\x9A" +
		"\x9B\x03\x02\x02\x02\x9B\x9D\x03\x02\x02\x02\x9C\x9A\x03\x02\x02\x02\x9D" +
		"\x9E\x07\x17\x02\x02\x9E\x9F\x07?\x02\x02\x9F\xA1\x07-\x02\x02\xA0\xA2" +
		"\x052\x1A\x02\xA1\xA0\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA3" +
		"\x03\x02\x02\x02\xA3\xA6\x07.\x02\x02\xA4\xA5\x073\x02\x02\xA5\xA7\x05" +
		"\x1A\x0E\x02\xA6\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA8\x03" +
		"\x02\x02\x02\xA8\xA9\x05 \x11\x02\xA9\x15\x03\x02\x02\x02\xAA\xAC\x05" +
		"H%\x02\xAB\xAA\x03\x02\x02\x02\xAC\xAF\x03\x02\x02\x02\xAD\xAB\x03\x02" +
		"\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xB0\x03\x02\x02\x02\xAF\xAD\x03\x02" +
		"\x02\x02\xB0\xB1\t\x02\x02\x02\xB1\xB4\x07?\x02\x02\xB2\xB3\x073\x02\x02" +
		"\xB3\xB5\x05\x1A\x0E\x02\xB4\xB2\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02" +
		"\xB5\xB6\x03\x02\x02\x02\xB6\xB7\x07&\x02\x02\xB7\xB8\x05<\x1F\x02\xB8" +
		"\x17\x03\x02\x02\x02\xB9\xBE\x05\x1A\x0E\x02\xBA\xBB\x077\x02\x02\xBB" +
		"\xBD\x05\x1A\x0E\x02\xBC\xBA\x03\x02\x02\x02\xBD\xC0\x03\x02\x02\x02\xBE" +
		"\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\x19\x03\x02\x02\x02\xC0" +
		"\xBE\x03\x02\x02\x02\xC1\xC6\x05\x1C\x0F\x02\xC2\xC3\x07/\x02\x02\xC3" +
		"\xC5\x070\x02\x02\xC4\xC2\x03\x02\x02\x02\xC5\xC8\x03\x02\x02\x02\xC6" +
		"\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\x1B\x03\x02\x02\x02\xC8" +
		"\xC6\x03\x02\x02\x02\xC9\xCC\x05\x1E\x10\x02\xCA\xCC\x07?\x02\x02\xCB" +
		"\xC9\x03\x02\x02\x02\xCB\xCA\x03\x02\x02\x02\xCC\x1D\x03\x02\x02\x02\xCD" +
		"\xCE\t\x03\x02\x02\xCE\x1F\x03\x02\x02\x02\xCF\xDA\x07+\x02\x02\xD0\xD5" +
		"\x05\"\x12\x02\xD1\xD2\x074\x02\x02\xD2\xD4\x05\"\x12\x02\xD3\xD1\x03" +
		"\x02\x02\x02\xD4\xD7\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD5\xD6\x03" +
		"\x02\x02\x02\xD6\xD9\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD8\xD0\x03" +
		"\x02\x02\x02\xD9\xDC\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xDB\x03" +
		"\x02\x02\x02\xDB\xDD\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDD\xDE\x07" +
		",\x02\x02\xDE!\x03\x02\x02\x02\xDF\xE7\x05&\x14\x02\xE0\xE7\x05:\x1E\x02" +
		"\xE1\xE7\x05$\x13\x02\xE2\xE7\x05(\x15\x02\xE3\xE7\x05*\x16\x02\xE4\xE7" +
		"\x05,\x17\x02\xE5\xE7\x05\x16\f\x02\xE6\xDF\x03\x02\x02\x02\xE6\xE0\x03" +
		"\x02\x02\x02\xE6\xE1\x03\x02\x02\x02\xE6\xE2\x03\x02\x02\x02\xE6\xE3\x03" +
		"\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE5\x03\x02\x02\x02\xE7#\x03" +
		"\x02\x02\x02\xE8\xEA\x05H%\x02\xE9\xE8\x03\x02\x02\x02\xEA\xED\x03\x02" +
		"\x02\x02\xEB\xE9\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xEF\x03\x02" +
		"\x02\x02\xED\xEB\x03\x02\x02\x02\xEE\xF0\x07\r\x02\x02\xEF\xEE\x03\x02" +
		"\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xFB\x07?" +
		"\x02\x02\xF2\xF4\x075\x02\x02\xF3\xF2\x03\x02\x02\x02\xF3\xF4\x03\x02" +
		"\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF6\x073\x02\x02\xF6\xF9\x05\x1A" +
		"\x0E\x02\xF7\xF8\x07&\x02\x02\xF8\xFA\x05<\x1F\x02\xF9\xF7\x03\x02\x02" +
		"\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFC\x03\x02\x02\x02\xFB\xF3\x03\x02\x02" +
		"\x02\xFB\xFC\x03\x02\x02\x02\xFC%\x03\x02\x02\x02\xFD\xFE\x07\x14\x02" +
		"\x02\xFE\u0100\x071\x02\x02\xFF\xFD\x03\x02\x02\x02\xFF\u0100\x03\x02" +
		"\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0102\x07?\x02\x02\u0102\u0103" +
		"\t\x04\x02\x02\u0103\u0104\x05<\x1F\x02\u0104\'\x03\x02\x02\x02\u0105" +
		"\u0107\x05H%\x02\u0106\u0105\x03\x02\x02\x02\u0107\u010A\x03\x02\x02\x02" +
		"\u0108\u0106\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010B\x03" +
		"\x02\x02\x02\u010A\u0108\x03\x02\x02\x02\u010B\u0111\x07\f\x02\x02\u010C" +
		"\u010E\x07-\x02\x02\u010D\u010F\x052\x1A\x02\u010E\u010D\x03\x02\x02\x02" +
		"\u010E\u010F\x03\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110\u0112\x07" +
		".\x02\x02\u0111\u010C\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112" +
		"\u0113\x03\x02\x02\x02\u0113\u0114\x05 \x11\x02\u0114)\x03\x02\x02\x02" +
		"\u0115\u0117\x05H%\x02\u0116\u0115\x03\x02\x02\x02\u0117\u011A\x03\x02" +
		"\x02\x02\u0118\u0116\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119" +
		"\u011B\x03\x02\x02\x02\u011A\u0118\x03\x02\x02\x02\u011B\u011C\x07\x0E" +
		"\x02\x02\u011C\u011D\x07?\x02\x02\u011D\u011E\x07-\x02\x02\u011E\u011F" +
		"\x07.\x02\x02\u011F\u0120\x05 \x11\x02\u0120+\x03\x02\x02\x02\u0121\u0123" +
		"\x05H%\x02\u0122\u0121\x03\x02\x02\x02\u0123\u0126\x03\x02\x02\x02\u0124" +
		"\u0122\x03\x02\x02\x02\u0124\u0125\x03\x02\x02\x02\u0125\u0127\x03\x02" +
		"\x02\x02\u0126\u0124\x03\x02\x02\x02\u0127\u0128\x07\x0F\x02\x02\u0128" +
		"\u0129\x07?\x02\x02\u0129\u012A\x073\x02\x02\u012A\u012C\x05\x1A\x0E\x02" +
		"\u012B\u012D\x05.\x18\x02\u012C\u012B\x03\x02\x02\x02\u012C\u012D\x03" +
		"\x02\x02\x02\u012D\u0130\x03\x02\x02\x02\u012E\u012F\x07&\x02\x02\u012F" +
		"\u0131\x05<\x1F\x02\u0130\u012E\x03\x02\x02\x02\u0130\u0131\x03\x02\x02" +
		"\x02\u0131-\x03\x02\x02\x02\u0132\u0136\x07+\x02\x02\u0133\u0135\x050" +
		"\x19\x02\u0134\u0133\x03\x02\x02\x02\u0135\u0138\x03\x02\x02\x02\u0136" +
		"\u0134\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u0139\x03\x02" +
		"\x02\x02\u0138\u0136\x03\x02\x02\x02\u0139\u013A\x07,\x02\x02\u013A/\x03" +
		"\x02\x02\x02\u013B\u013C\x07?\x02\x02\u013C\u013D\x076\x02\x02\u013D\u013E" +
		"\x07?\x02\x02\u013E1\x03\x02\x02\x02\u013F\u0144\x054\x1B\x02\u0140\u0141" +
		"\x072\x02\x02\u0141\u0143\x054\x1B\x02\u0142\u0140\x03\x02\x02\x02\u0143" +
		"\u0146\x03\x02\x02\x02\u0144\u0142\x03\x02\x02\x02\u0144\u0145\x03\x02" +
		"\x02\x02\u01453\x03\x02\x02\x02\u0146\u0144\x03\x02\x02\x02\u0147\u0148" +
		"\x07\x14\x02\x02\u0148\u014A\x071\x02\x02\u0149\u0147\x03\x02\x02\x02" +
		"\u0149\u014A\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02\u014B\u014E\x07" +
		"?\x02\x02\u014C\u014D\x073\x02\x02\u014D\u014F\x05\x1A\x0E\x02\u014E\u014C" +
		"\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F5\x03\x02\x02\x02\u0150" +
		"\u0156\x07?\x02\x02\u0151\u0153\x07-\x02\x02\u0152\u0154\x058\x1D\x02" +
		"\u0153\u0152\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0155\x03" +
		"\x02\x02\x02\u0155\u0157\x07.\x02\x02\u0156\u0151\x03\x02\x02\x02\u0156" +
		"\u0157\x03\x02\x02\x02\u0157\u0159\x03\x02\x02\x02\u0158\u015A\x05 \x11" +
		"\x02\u0159\u0158\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A7\x03" +
		"\x02\x02\x02\u015B\u0160\x05<\x1F\x02\u015C\u015D\x072\x02\x02\u015D\u015F" +
		"\x05<\x1F\x02\u015E\u015C\x03\x02\x02\x02\u015F\u0162\x03\x02\x02\x02" +
		"\u0160\u015E\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u01619\x03\x02" +
		"\x02\x02\u0162\u0160\x03\x02\x02\x02\u0163\u0164\x05<\x1F\x02\u0164;\x03" +
		"\x02\x02\x02\u0165\u0166\b\x1F\x01\x02\u0166\u016C\x05> \x02\u0167\u0168" +
		"\x07\x1C\x02\x02\u0168\u016C\x05<\x1F\n\u0169\u016A\x07\x13\x02\x02\u016A" +
		"\u016C\x05<\x1F\t\u016B\u0165\x03\x02\x02\x02\u016B\u0167\x03\x02\x02" +
		"\x02\u016B\u0169\x03\x02\x02\x02\u016C\u018C\x03\x02\x02\x02\u016D\u016E" +
		"\f\b\x02\x02\u016E\u016F\t\x05\x02\x02\u016F\u018B\x05<\x1F\t\u0170\u0171" +
		"\f\x07\x02\x02\u0171\u0172\t\x06\x02\x02\u0172\u018B\x05<\x1F\b\u0173" +
		"\u0174\f\x06\x02\x02\u0174\u0175\t\x07\x02\x02\u0175\u018B\x05<\x1F\x07" +
		"\u0176\u0177\f\x05\x02\x02\u0177\u0178\t\b\x02\x02\u0178\u018B\x05<\x1F" +
		"\x06\u0179\u017A\f\x04\x02\x02\u017A\u017B\x07(\x02\x02\u017B\u018B\x05" +
		"<\x1F\x05\u017C\u017D\f\x03\x02\x02\u017D\u017E\x07)\x02\x02\u017E\u018B" +
		"\x05<\x1F\x04\u017F\u0180\f\r\x02\x02\u0180\u0181\x071\x02\x02\u0181\u018B" +
		"\x07?\x02\x02\u0182\u0183\f\f\x02\x02\u0183\u0185\x07-\x02\x02\u0184\u0186" +
		"\x058\x1D\x02\u0185\u0184\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02" +
		"\u0186\u0187\x03\x02\x02\x02\u0187\u018B\x07.\x02\x02\u0188\u0189\f\v" +
		"\x02\x02\u0189\u018B\x07*\x02\x02\u018A\u016D\x03\x02\x02\x02\u018A\u0170" +
		"\x03\x02\x02\x02\u018A\u0173\x03\x02\x02\x02\u018A\u0176\x03\x02\x02\x02" +
		"\u018A\u0179\x03\x02\x02\x02\u018A\u017C\x03\x02\x02\x02\u018A\u017F\x03" +
		"\x02\x02\x02\u018A\u0182\x03\x02\x02\x02\u018A\u0188\x03\x02\x02\x02\u018B" +
		"\u018E\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018C\u018D\x03\x02" +
		"\x02\x02\u018D=\x03\x02\x02\x02\u018E\u018C\x03\x02\x02\x02\u018F\u01A7" +
		"\x05@!\x02\u0190\u01A7\x07?\x02\x02\u0191\u01A7\x07\x14\x02\x02\u0192" +
		"\u0193\x07\x11\x02\x02\u0193\u0194\x07-\x02\x02\u0194\u0195\x05<\x1F\x02" +
		"\u0195\u0198\x07.\x02\x02\u0196\u0199\x05<\x1F\x02\u0197\u0199\x05 \x11" +
		"\x02\u0198\u0196\x03\x02\x02\x02\u0198\u0197\x03\x02\x02\x02\u0199\u019F" +
		"\x03\x02\x02\x02\u019A\u019D\x07\x12\x02\x02\u019B\u019E\x05<\x1F\x02" +
		"\u019C\u019E\x05 \x11\x02\u019D\u019B\x03\x02\x02\x02\u019D\u019C\x03" +
		"\x02\x02\x02\u019E\u01A0\x03\x02\x02\x02\u019F\u019A\x03\x02\x02\x02\u019F" +
		"\u01A0\x03\x02\x02\x02\u01A0\u01A7\x03\x02\x02\x02\u01A1\u01A2\x07-\x02" +
		"\x02\u01A2\u01A3\x05<\x1F\x02\u01A3\u01A4\x07.\x02\x02\u01A4\u01A7\x03" +
		"\x02\x02\x02\u01A5\u01A7\x056\x1C\x02\u01A6\u018F\x03\x02\x02\x02\u01A6" +
		"\u0190\x03\x02\x02\x02\u01A6\u0191\x03\x02\x02\x02\u01A6\u0192\x03\x02" +
		"\x02\x02\u01A6\u01A1\x03\x02\x02\x02\u01A6\u01A5\x03\x02\x02\x02\u01A7" +
		"?\x03\x02\x02\x02\u01A8\u01AD\x05B\"\x02\u01A9\u01AD\x07;\x02\x02\u01AA" +
		"\u01AD\x07<\x02\x02\u01AB\u01AD\x07=\x02\x02\u01AC\u01A8\x03\x02\x02\x02" +
		"\u01AC\u01A9\x03\x02\x02\x02\u01AC\u01AA\x03\x02\x02\x02\u01AC\u01AB\x03" +
		"\x02\x02\x02\u01ADA\x03\x02\x02\x02\u01AE\u01B2\x078\x02\x02\u01AF\u01B2" +
		"\x079\x02\x02\u01B0\u01B2\x05D#\x02\u01B1\u01AE\x03\x02\x02\x02\u01B1" +
		"\u01AF\x03\x02\x02\x02\u01B1\u01B0\x03\x02\x02\x02\u01B2C\x03\x02\x02" +
		"\x02\u01B3\u01B7\x07:\x02\x02\u01B4\u01B6\x05F$\x02\u01B5\u01B4\x03\x02" +
		"\x02\x02\u01B6\u01B9\x03\x02\x02\x02\u01B7\u01B5\x03\x02\x02\x02\u01B7" +
		"\u01B8\x03\x02\x02\x02\u01B8\u01BA\x03\x02\x02\x02\u01B9\u01B7\x03\x02" +
		"\x02\x02\u01BA\u01BB\x07@\x02\x02\u01BBE\x03\x02\x02\x02\u01BC\u01C3\x07" +
		"A\x02\x02\u01BD\u01C3\x07C\x02\x02\u01BE\u01BF\x07B\x02\x02\u01BF\u01C0" +
		"\x05<\x1F\x02\u01C0\u01C1\x07D\x02\x02\u01C1\u01C3\x03\x02\x02\x02\u01C2" +
		"\u01BC\x03\x02\x02\x02\u01C2\u01BD\x03\x02\x02\x02\u01C2\u01BE\x03\x02" +
		"\x02\x02\u01C3G\x03\x02\x02\x02\u01C4\u01CB\x07>\x02\x02\u01C5\u01C7\x07" +
		"-\x02\x02\u01C6\u01C8\x058\x1D\x02\u01C7\u01C6\x03\x02\x02\x02\u01C7\u01C8" +
		"\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01CC\x07.\x02\x02" +
		"\u01CA\u01CC\x05B\"\x02\u01CB\u01C5\x03\x02\x02\x02\u01CB\u01CA\x03\x02" +
		"\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CCI\x03\x02\x02\x029MO_jouz\x84" +
		"\x8F\x9A\xA1\xA6\xAD\xB4\xBE\xC6\xCB\xD5\xDA\xE6\xEB\xEF\xF3\xF9\xFB\xFF" +
		"\u0108\u010E\u0111\u0118\u0124\u012C\u0130\u0136\u0144\u0149\u014E\u0153" +
		"\u0156\u0159\u0160\u016B\u0185\u018A\u018C\u0198\u019D\u019F\u01A6\u01AC" +
		"\u01B1\u01B7\u01C2\u01C7\u01CB";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CanonParser.__ATN) {
			CanonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CanonParser._serializedATN));
		}

		return CanonParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(CanonParser.EOF, 0); }
	public schemaDirective(): SchemaDirectiveContext[];
	public schemaDirective(i: number): SchemaDirectiveContext;
	public schemaDirective(i?: number): SchemaDirectiveContext | SchemaDirectiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SchemaDirectiveContext);
		} else {
			return this.getRuleContext(i, SchemaDirectiveContext);
		}
	}
	public useStatement(): UseStatementContext[];
	public useStatement(i: number): UseStatementContext;
	public useStatement(i?: number): UseStatementContext | UseStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UseStatementContext);
		} else {
			return this.getRuleContext(i, UseStatementContext);
		}
	}
	public topLevelStatement(): TopLevelStatementContext[];
	public topLevelStatement(i: number): TopLevelStatementContext;
	public topLevelStatement(i?: number): TopLevelStatementContext | TopLevelStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TopLevelStatementContext);
		} else {
			return this.getRuleContext(i, TopLevelStatementContext);
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
	public PIPE(): TerminalNode[];
	public PIPE(i: number): TerminalNode;
	public PIPE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.PIPE);
		} else {
			return this.getToken(CanonParser.PIPE, i);
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
	public mappingEntry(): MappingEntryContext[];
	public mappingEntry(i: number): MappingEntryContext;
	public mappingEntry(i?: number): MappingEntryContext | MappingEntryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MappingEntryContext);
		} else {
			return this.getRuleContext(i, MappingEntryContext);
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
export class PrimaryExpressionContext extends ExpressionContext {
	public primary(): PrimaryContext {
		return this.getRuleContext(0, PrimaryContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterPrimaryExpression) {
			listener.enterPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitPrimaryExpression) {
			listener.exitPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MemberAccessExpressionContext extends ExpressionContext {
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
		if (listener.enterMemberAccessExpression) {
			listener.enterMemberAccessExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitMemberAccessExpression) {
			listener.exitMemberAccessExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitMemberAccessExpression) {
			return visitor.visitMemberAccessExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallExpressionContext extends ExpressionContext {
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
		if (listener.enterFunctionCallExpression) {
			listener.enterFunctionCallExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitFunctionCallExpression) {
			listener.exitFunctionCallExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitFunctionCallExpression) {
			return visitor.visitFunctionCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NonNullAssertionExpressionContext extends ExpressionContext {
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
		if (listener.enterNonNullAssertionExpression) {
			listener.enterNonNullAssertionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitNonNullAssertionExpression) {
			listener.exitNonNullAssertionExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitNonNullAssertionExpression) {
			return visitor.visitNonNullAssertionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryMinusExpressionContext extends ExpressionContext {
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
		if (listener.enterUnaryMinusExpression) {
			listener.enterUnaryMinusExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitUnaryMinusExpression) {
			listener.exitUnaryMinusExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitUnaryMinusExpression) {
			return visitor.visitUnaryMinusExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalNotExpressionContext extends ExpressionContext {
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
		if (listener.enterLogicalNotExpression) {
			listener.enterLogicalNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitLogicalNotExpression) {
			listener.exitLogicalNotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitLogicalNotExpression) {
			return visitor.visitLogicalNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicativeExpressionContext extends ExpressionContext {
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
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditiveExpressionContext extends ExpressionContext {
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
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelationalExpressionContext extends ExpressionContext {
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
		if (listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualityExpressionContext extends ExpressionContext {
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
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalAndExpressionContext extends ExpressionContext {
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
		if (listener.enterLogicalAndExpression) {
			listener.enterLogicalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitLogicalAndExpression) {
			listener.exitLogicalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitLogicalAndExpression) {
			return visitor.visitLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalOrExpressionContext extends ExpressionContext {
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
		if (listener.enterLogicalOrExpression) {
			listener.enterLogicalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitLogicalOrExpression) {
			listener.exitLogicalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitLogicalOrExpression) {
			return visitor.visitLogicalOrExpression(this);
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
export class LiteralExpressionContext extends PrimaryContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterLiteralExpression) {
			listener.enterLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitLiteralExpression) {
			listener.exitLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitLiteralExpression) {
			return visitor.visitLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierExpressionContext extends PrimaryContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(CanonParser.IDENTIFIER, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterIdentifierExpression) {
			listener.enterIdentifierExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitIdentifierExpression) {
			listener.exitIdentifierExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitIdentifierExpression) {
			return visitor.visitIdentifierExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ThisExpressionContext extends PrimaryContext {
	public THIS(): TerminalNode { return this.getToken(CanonParser.THIS, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterThisExpression) {
			listener.enterThisExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitThisExpression) {
			listener.exitThisExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitThisExpression) {
			return visitor.visitThisExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfExpressionContext extends PrimaryContext {
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
		if (listener.enterIfExpression) {
			listener.enterIfExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitIfExpression) {
			listener.exitIfExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitIfExpression) {
			return visitor.visitIfExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedExpressionContext extends PrimaryContext {
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
		if (listener.enterParenthesizedExpression) {
			listener.enterParenthesizedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitParenthesizedExpression) {
			listener.exitParenthesizedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitParenthesizedExpression) {
			return visitor.visitParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CallExpressionPrimaryContext extends PrimaryContext {
	public callExpression(): CallExpressionContext {
		return this.getRuleContext(0, CallExpressionContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterCallExpressionPrimary) {
			listener.enterCallExpressionPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitCallExpressionPrimary) {
			listener.exitCallExpressionPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitCallExpressionPrimary) {
			return visitor.visitCallExpressionPrimary(this);
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


