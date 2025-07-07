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
	public static readonly INFIX = 22;
	public static readonly STRING_TYPE = 23;
	public static readonly INT_TYPE = 24;
	public static readonly BOOL_TYPE = 25;
	public static readonly PLUS = 26;
	public static readonly MINUS = 27;
	public static readonly MULTIPLY = 28;
	public static readonly DIVIDE = 29;
	public static readonly MODULO = 30;
	public static readonly POWER = 31;
	public static readonly EQUALS = 32;
	public static readonly NOT_EQUALS = 33;
	public static readonly LESS_THAN = 34;
	public static readonly GREATER_THAN = 35;
	public static readonly LESS_EQUALS = 36;
	public static readonly GREATER_EQUALS = 37;
	public static readonly ASSIGN = 38;
	public static readonly PLUS_ASSIGN = 39;
	public static readonly MINUS_ASSIGN = 40;
	public static readonly MULTIPLY_ASSIGN = 41;
	public static readonly DIVIDE_ASSIGN = 42;
	public static readonly MODULO_ASSIGN = 43;
	public static readonly POWER_ASSIGN = 44;
	public static readonly LOGICAL_AND = 45;
	public static readonly LOGICAL_OR = 46;
	public static readonly PIPELINE = 47;
	public static readonly BIT_AND = 48;
	public static readonly BIT_OR = 49;
	public static readonly BIT_XOR = 50;
	public static readonly BIT_NOT = 51;
	public static readonly LEFT_SHIFT = 52;
	public static readonly RIGHT_SHIFT = 53;
	public static readonly RANGE_INCLUSIVE = 54;
	public static readonly RANGE = 55;
	public static readonly SPREAD = 56;
	public static readonly EXCLAMATION = 57;
	public static readonly LBRACE = 58;
	public static readonly RBRACE = 59;
	public static readonly LPAREN = 60;
	public static readonly RPAREN = 61;
	public static readonly LBRACKET = 62;
	public static readonly RBRACKET = 63;
	public static readonly DOT = 64;
	public static readonly COMMA = 65;
	public static readonly COLON = 66;
	public static readonly SEMICOLON = 67;
	public static readonly QUESTION = 68;
	public static readonly ARROW = 69;
	public static readonly STRING_LITERAL = 70;
	public static readonly DOUBLE_STRING_LITERAL = 71;
	public static readonly TEMPLATE_STRING_START = 72;
	public static readonly INTEGER_LITERAL = 73;
	public static readonly TRUE = 74;
	public static readonly FALSE = 75;
	public static readonly ANNOTATION = 76;
	public static readonly IDENTIFIER = 77;
	public static readonly TEMPLATE_STRING_END = 78;
	public static readonly TEMPLATE_STRING_PART = 79;
	public static readonly TEMPLATE_INTERPOLATION_START = 80;
	public static readonly TEMPLATE_INTERPOLATION_SIMPLE = 81;
	public static readonly INTERPOLATION_END = 82;
	public static readonly INTERPOLATION_WS = 83;
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
	public static readonly RULE_structBody = 16;
	public static readonly RULE_structMember = 17;
	public static readonly RULE_statement = 18;
	public static readonly RULE_expressionStatement = 19;
	public static readonly RULE_propertyDeclaration = 20;
	public static readonly RULE_assignmentStatement = 21;
	public static readonly RULE_destructuringAssignment = 22;
	public static readonly RULE_destructuringPattern = 23;
	public static readonly RULE_arrayDestructuringPattern = 24;
	public static readonly RULE_objectDestructuringPattern = 25;
	public static readonly RULE_destructuringElement = 26;
	public static readonly RULE_destructuringProperty = 27;
	public static readonly RULE_initDeclaration = 28;
	public static readonly RULE_getterDeclaration = 29;
	public static readonly RULE_methodDeclaration = 30;
	public static readonly RULE_repeatedDeclaration = 31;
	public static readonly RULE_mappingBlock = 32;
	public static readonly RULE_mappingEntry = 33;
	public static readonly RULE_parameterList = 34;
	public static readonly RULE_parameter = 35;
	public static readonly RULE_callExpression = 36;
	public static readonly RULE_argumentList = 37;
	public static readonly RULE_expression = 38;
	public static readonly RULE_primary = 39;
	public static readonly RULE_literal = 40;
	public static readonly RULE_stringLiteral = 41;
	public static readonly RULE_templateString = 42;
	public static readonly RULE_templateStringContent = 43;
	public static readonly RULE_annotation = 44;
	public static readonly RULE_listLiteral = 45;
	public static readonly RULE_lambdaExpression = 46;
	public static readonly RULE_lambdaParameters = 47;
	public static readonly RULE_lambdaBody = 48;
	public static readonly RULE_anonymousFunction = 49;
	public static readonly RULE_spreadExpression = 50;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "schemaDirective", "useStatement", "topLevelStatement", "topLevelElement", 
		"schemaDeclaration", "structDeclaration", "unionDeclaration", "typeDeclaration", 
		"functionDeclaration", "variableDeclaration", "unionType", "type", "baseType", 
		"primitiveType", "block", "structBody", "structMember", "statement", "expressionStatement", 
		"propertyDeclaration", "assignmentStatement", "destructuringAssignment", 
		"destructuringPattern", "arrayDestructuringPattern", "objectDestructuringPattern", 
		"destructuringElement", "destructuringProperty", "initDeclaration", "getterDeclaration", 
		"methodDeclaration", "repeatedDeclaration", "mappingBlock", "mappingEntry", 
		"parameterList", "parameter", "callExpression", "argumentList", "expression", 
		"primary", "literal", "stringLiteral", "templateString", "templateStringContent", 
		"annotation", "listLiteral", "lambdaExpression", "lambdaParameters", "lambdaBody", 
		"anonymousFunction", "spreadExpression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "'#schema'", undefined, "'schema'", 
		"'struct'", "'union'", "'type'", "'init'", "'private'", "'get'", "'repeated'", 
		"'use'", "'if'", "'else'", "'not'", "'this'", "'val'", "'var'", "'fun'", 
		"'infix'", "'string'", "'int'", "'bool'", undefined, undefined, undefined, 
		undefined, "'%'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "'='", "'+='", "'-='", "'*='", "'/='", "'%='", "'**='", 
		undefined, undefined, "'|>'", undefined, undefined, undefined, "'~'", 
		"'<<'", "'>>'", "'..='", "'..'", "'...'", undefined, "'{'", undefined, 
		undefined, undefined, undefined, undefined, undefined, "','", "':'", "';'", 
		"'?'", "'->'", undefined, undefined, undefined, undefined, "'true'", "'false'", 
		undefined, undefined, undefined, undefined, "'${'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WS", "LINE_COMMENT", "BLOCK_COMMENT", "SCHEMA_DIRECTIVE", 
		"HASH_COMMENT", "SCHEMA", "STRUCT", "UNION", "TYPE", "INIT", "PRIVATE", 
		"GET", "REPEATED", "USE", "IF", "ELSE", "NOT", "THIS", "VAL", "VAR", "FUN", 
		"INFIX", "STRING_TYPE", "INT_TYPE", "BOOL_TYPE", "PLUS", "MINUS", "MULTIPLY", 
		"DIVIDE", "MODULO", "POWER", "EQUALS", "NOT_EQUALS", "LESS_THAN", "GREATER_THAN", 
		"LESS_EQUALS", "GREATER_EQUALS", "ASSIGN", "PLUS_ASSIGN", "MINUS_ASSIGN", 
		"MULTIPLY_ASSIGN", "DIVIDE_ASSIGN", "MODULO_ASSIGN", "POWER_ASSIGN", "LOGICAL_AND", 
		"LOGICAL_OR", "PIPELINE", "BIT_AND", "BIT_OR", "BIT_XOR", "BIT_NOT", "LEFT_SHIFT", 
		"RIGHT_SHIFT", "RANGE_INCLUSIVE", "RANGE", "SPREAD", "EXCLAMATION", "LBRACE", 
		"RBRACE", "LPAREN", "RPAREN", "LBRACKET", "RBRACKET", "DOT", "COMMA", 
		"COLON", "SEMICOLON", "QUESTION", "ARROW", "STRING_LITERAL", "DOUBLE_STRING_LITERAL", 
		"TEMPLATE_STRING_START", "INTEGER_LITERAL", "TRUE", "FALSE", "ANNOTATION", 
		"IDENTIFIER", "TEMPLATE_STRING_END", "TEMPLATE_STRING_PART", "TEMPLATE_INTERPOLATION_START", 
		"TEMPLATE_INTERPOLATION_SIMPLE", "INTERPOLATION_END", "INTERPOLATION_WS",
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
			this.state = 107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.SCHEMA_DIRECTIVE) | (1 << CanonParser.SCHEMA) | (1 << CanonParser.STRUCT) | (1 << CanonParser.UNION) | (1 << CanonParser.TYPE) | (1 << CanonParser.USE) | (1 << CanonParser.THIS) | (1 << CanonParser.VAL) | (1 << CanonParser.VAR) | (1 << CanonParser.FUN) | (1 << CanonParser.INFIX))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (CanonParser.LBRACE - 58)) | (1 << (CanonParser.LBRACKET - 58)) | (1 << (CanonParser.ANNOTATION - 58)) | (1 << (CanonParser.IDENTIFIER - 58)))) !== 0)) {
				{
				this.state = 105;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CanonParser.SCHEMA_DIRECTIVE:
					{
					this.state = 102;
					this.schemaDirective();
					}
					break;
				case CanonParser.USE:
					{
					this.state = 103;
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
				case CanonParser.INFIX:
				case CanonParser.LBRACE:
				case CanonParser.LBRACKET:
				case CanonParser.ANNOTATION:
				case CanonParser.IDENTIFIER:
					{
					this.state = 104;
					this.topLevelStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 110;
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
			this.state = 112;
			this.match(CanonParser.SCHEMA_DIRECTIVE);
			this.state = 113;
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
			this.state = 115;
			this.match(CanonParser.USE);
			this.state = 116;
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
			this.state = 118;
			this.topLevelElement();
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.SEMICOLON) {
				{
				{
				this.state = 119;
				this.match(CanonParser.SEMICOLON);
				this.state = 120;
				this.topLevelElement();
				}
				}
				this.state = 125;
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
			this.state = 135;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 126;
				this.schemaDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 127;
				this.structDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 128;
				this.unionDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 129;
				this.typeDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 130;
				this.variableDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 131;
				this.functionDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 132;
				this.assignmentStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 133;
				this.destructuringAssignment();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 134;
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
			this.state = 140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 137;
				this.annotation();
				}
				}
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 143;
			this.match(CanonParser.SCHEMA);
			this.state = 146;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.LBRACE:
				{
				this.state = 144;
				this.block();
				}
				break;
			case CanonParser.STRING_LITERAL:
			case CanonParser.DOUBLE_STRING_LITERAL:
			case CanonParser.TEMPLATE_STRING_START:
				{
				this.state = 145;
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
			this.state = 151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 148;
				this.annotation();
				}
				}
				this.state = 153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 154;
			this.match(CanonParser.STRUCT);
			this.state = 155;
			this.match(CanonParser.IDENTIFIER);
			this.state = 156;
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
		this.enterRule(_localctx, 14, CanonParser.RULE_unionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 158;
				this.annotation();
				}
				}
				this.state = 163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 164;
			this.match(CanonParser.UNION);
			this.state = 165;
			this.match(CanonParser.IDENTIFIER);
			this.state = 166;
			this.match(CanonParser.ASSIGN);
			this.state = 167;
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
			this.state = 172;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 169;
				this.annotation();
				}
				}
				this.state = 174;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 175;
			this.match(CanonParser.TYPE);
			this.state = 176;
			this.match(CanonParser.IDENTIFIER);
			this.state = 177;
			this.match(CanonParser.ASSIGN);
			this.state = 178;
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
			this.state = 183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 180;
				this.annotation();
				}
				}
				this.state = 185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 194;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.INFIX:
				{
				this.state = 186;
				this.match(CanonParser.INFIX);
				this.state = 187;
				this.match(CanonParser.FUN);
				this.state = 188;
				this.type();
				this.state = 189;
				this.match(CanonParser.DOT);
				this.state = 190;
				this.match(CanonParser.IDENTIFIER);
				}
				break;
			case CanonParser.FUN:
				{
				this.state = 192;
				this.match(CanonParser.FUN);
				this.state = 193;
				this.match(CanonParser.IDENTIFIER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 196;
			this.match(CanonParser.LPAREN);
			this.state = 198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.THIS || _la === CanonParser.IDENTIFIER) {
				{
				this.state = 197;
				this.parameterList();
				}
			}

			this.state = 200;
			this.match(CanonParser.RPAREN);
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 201;
				this.match(CanonParser.COLON);
				this.state = 202;
				this.type();
				}
			}

			this.state = 205;
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
			this.state = 210;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 207;
				this.annotation();
				}
				}
				this.state = 212;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 213;
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
			this.state = 214;
			this.match(CanonParser.IDENTIFIER);
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 215;
				this.match(CanonParser.COLON);
				this.state = 216;
				this.type();
				}
			}

			this.state = 219;
			this.match(CanonParser.ASSIGN);
			this.state = 220;
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
			this.state = 222;
			this.type();
			this.state = 227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.BIT_OR) {
				{
				{
				this.state = 223;
				this.match(CanonParser.BIT_OR);
				this.state = 224;
				this.type();
				}
				}
				this.state = 229;
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
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
			this.baseType();
			this.state = 235;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 231;
					this.match(CanonParser.LBRACKET);
					this.state = 232;
					this.match(CanonParser.RBRACKET);
					}
					}
				}
				this.state = 237;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
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
			this.state = 240;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.STRING_TYPE:
			case CanonParser.INT_TYPE:
			case CanonParser.BOOL_TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 238;
				this.primitiveType();
				}
				break;
			case CanonParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 239;
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
			this.state = 242;
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
			this.state = 244;
			this.match(CanonParser.LBRACE);
			this.state = 255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.INIT) | (1 << CanonParser.PRIVATE) | (1 << CanonParser.GET) | (1 << CanonParser.REPEATED) | (1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.VAL) | (1 << CanonParser.VAR) | (1 << CanonParser.FUN) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (CanonParser.BIT_NOT - 51)) | (1 << (CanonParser.SPREAD - 51)) | (1 << (CanonParser.LBRACE - 51)) | (1 << (CanonParser.LPAREN - 51)) | (1 << (CanonParser.LBRACKET - 51)) | (1 << (CanonParser.STRING_LITERAL - 51)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 51)) | (1 << (CanonParser.TEMPLATE_STRING_START - 51)) | (1 << (CanonParser.INTEGER_LITERAL - 51)) | (1 << (CanonParser.TRUE - 51)) | (1 << (CanonParser.FALSE - 51)) | (1 << (CanonParser.ANNOTATION - 51)) | (1 << (CanonParser.IDENTIFIER - 51)))) !== 0)) {
				{
				{
				this.state = 245;
				this.statement();
				this.state = 250;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CanonParser.SEMICOLON) {
					{
					{
					this.state = 246;
					this.match(CanonParser.SEMICOLON);
					this.state = 247;
					this.statement();
					}
					}
					this.state = 252;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 257;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 258;
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
		this.enterRule(_localctx, 32, CanonParser.RULE_structBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 260;
			this.match(CanonParser.LBRACE);
			this.state = 271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.INIT) | (1 << CanonParser.PRIVATE) | (1 << CanonParser.GET) | (1 << CanonParser.REPEATED) | (1 << CanonParser.FUN))) !== 0) || _la === CanonParser.ANNOTATION || _la === CanonParser.IDENTIFIER) {
				{
				{
				this.state = 261;
				this.structMember();
				this.state = 266;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CanonParser.SEMICOLON) {
					{
					{
					this.state = 262;
					this.match(CanonParser.SEMICOLON);
					this.state = 263;
					this.structMember();
					}
					}
					this.state = 268;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 273;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 274;
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
		this.enterRule(_localctx, 34, CanonParser.RULE_structMember);
		try {
			this.state = 281;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 276;
				this.propertyDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 277;
				this.initDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 278;
				this.getterDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 279;
				this.methodDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 280;
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
		this.enterRule(_localctx, 36, CanonParser.RULE_statement);
		try {
			this.state = 291;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 283;
				this.assignmentStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 284;
				this.expressionStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 285;
				this.propertyDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 286;
				this.initDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 287;
				this.getterDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 288;
				this.methodDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 289;
				this.repeatedDeclaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 290;
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
		this.enterRule(_localctx, 38, CanonParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
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
		this.enterRule(_localctx, 40, CanonParser.RULE_propertyDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 295;
				this.annotation();
				}
				}
				this.state = 300;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.PRIVATE) {
				{
				this.state = 301;
				this.match(CanonParser.PRIVATE);
				}
			}

			this.state = 304;
			this.match(CanonParser.IDENTIFIER);
			this.state = 314;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON || _la === CanonParser.QUESTION) {
				{
				this.state = 306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.QUESTION) {
					{
					this.state = 305;
					this.match(CanonParser.QUESTION);
					}
				}

				this.state = 308;
				this.match(CanonParser.COLON);
				this.state = 309;
				this.type();
				this.state = 312;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.ASSIGN) {
					{
					this.state = 310;
					this.match(CanonParser.ASSIGN);
					this.state = 311;
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
		this.enterRule(_localctx, 42, CanonParser.RULE_assignmentStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 318;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.THIS) {
				{
				this.state = 316;
				this.match(CanonParser.THIS);
				this.state = 317;
				this.match(CanonParser.DOT);
				}
			}

			this.state = 320;
			this.match(CanonParser.IDENTIFIER);
			this.state = 321;
			_la = this._input.LA(1);
			if (!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (CanonParser.ASSIGN - 38)) | (1 << (CanonParser.PLUS_ASSIGN - 38)) | (1 << (CanonParser.MINUS_ASSIGN - 38)) | (1 << (CanonParser.MULTIPLY_ASSIGN - 38)) | (1 << (CanonParser.DIVIDE_ASSIGN - 38)) | (1 << (CanonParser.MODULO_ASSIGN - 38)) | (1 << (CanonParser.POWER_ASSIGN - 38)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 322;
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
		this.enterRule(_localctx, 44, CanonParser.RULE_destructuringAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 324;
			this.destructuringPattern();
			this.state = 325;
			this.match(CanonParser.ASSIGN);
			this.state = 326;
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
		this.enterRule(_localctx, 46, CanonParser.RULE_destructuringPattern);
		try {
			this.state = 330;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.LBRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 328;
				this.arrayDestructuringPattern();
				}
				break;
			case CanonParser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 329;
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
		this.enterRule(_localctx, 48, CanonParser.RULE_arrayDestructuringPattern);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 332;
			this.match(CanonParser.LBRACKET);
			this.state = 333;
			this.destructuringElement();
			this.state = 338;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.COMMA) {
				{
				{
				this.state = 334;
				this.match(CanonParser.COMMA);
				this.state = 335;
				this.destructuringElement();
				}
				}
				this.state = 340;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 341;
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
		this.enterRule(_localctx, 50, CanonParser.RULE_objectDestructuringPattern);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 343;
			this.match(CanonParser.LBRACE);
			this.state = 344;
			this.destructuringProperty();
			this.state = 349;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.COMMA) {
				{
				{
				this.state = 345;
				this.match(CanonParser.COMMA);
				this.state = 346;
				this.destructuringProperty();
				}
				}
				this.state = 351;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 352;
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
		this.enterRule(_localctx, 52, CanonParser.RULE_destructuringElement);
		let _la: number;
		try {
			this.state = 362;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 354;
				this.match(CanonParser.IDENTIFIER);
				this.state = 357;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.ASSIGN) {
					{
					this.state = 355;
					this.match(CanonParser.ASSIGN);
					this.state = 356;
					this.expression(0);
					}
				}

				}
				break;
			case CanonParser.LBRACE:
			case CanonParser.LBRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 359;
				this.destructuringPattern();
				}
				break;
			case CanonParser.SPREAD:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 360;
				this.match(CanonParser.SPREAD);
				this.state = 361;
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
		this.enterRule(_localctx, 54, CanonParser.RULE_destructuringProperty);
		let _la: number;
		try {
			this.state = 376;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 364;
				this.match(CanonParser.IDENTIFIER);
				this.state = 367;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.ASSIGN) {
					{
					this.state = 365;
					this.match(CanonParser.ASSIGN);
					this.state = 366;
					this.expression(0);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 369;
				this.match(CanonParser.IDENTIFIER);
				this.state = 370;
				this.match(CanonParser.COLON);
				this.state = 371;
				this.match(CanonParser.IDENTIFIER);
				this.state = 374;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.ASSIGN) {
					{
					this.state = 372;
					this.match(CanonParser.ASSIGN);
					this.state = 373;
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
		this.enterRule(_localctx, 56, CanonParser.RULE_initDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 381;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 378;
				this.annotation();
				}
				}
				this.state = 383;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 384;
			this.match(CanonParser.INIT);
			this.state = 390;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.LPAREN) {
				{
				this.state = 385;
				this.match(CanonParser.LPAREN);
				this.state = 387;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.THIS || _la === CanonParser.IDENTIFIER) {
					{
					this.state = 386;
					this.parameterList();
					}
				}

				this.state = 389;
				this.match(CanonParser.RPAREN);
				}
			}

			this.state = 392;
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
		this.enterRule(_localctx, 58, CanonParser.RULE_getterDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 397;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 394;
				this.annotation();
				}
				}
				this.state = 399;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 400;
			this.match(CanonParser.GET);
			this.state = 401;
			this.match(CanonParser.IDENTIFIER);
			this.state = 402;
			this.match(CanonParser.LPAREN);
			this.state = 403;
			this.match(CanonParser.RPAREN);
			this.state = 404;
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
		this.enterRule(_localctx, 60, CanonParser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 409;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 406;
				this.annotation();
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
			this.match(CanonParser.FUN);
			this.state = 416;
			this.match(CanonParser.IDENTIFIER);
			this.state = 417;
			this.match(CanonParser.LPAREN);
			this.state = 419;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.THIS || _la === CanonParser.IDENTIFIER) {
				{
				this.state = 418;
				this.parameterList();
				}
			}

			this.state = 421;
			this.match(CanonParser.RPAREN);
			this.state = 424;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 422;
				this.match(CanonParser.COLON);
				this.state = 423;
				this.type();
				}
			}

			this.state = 426;
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
		this.enterRule(_localctx, 62, CanonParser.RULE_repeatedDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 431;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 428;
				this.annotation();
				}
				}
				this.state = 433;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 434;
			this.match(CanonParser.REPEATED);
			this.state = 435;
			this.match(CanonParser.IDENTIFIER);
			this.state = 436;
			this.match(CanonParser.COLON);
			this.state = 437;
			this.type();
			this.state = 439;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				{
				this.state = 438;
				this.mappingBlock();
				}
				break;
			}
			this.state = 443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.ASSIGN) {
				{
				this.state = 441;
				this.match(CanonParser.ASSIGN);
				this.state = 442;
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
		this.enterRule(_localctx, 64, CanonParser.RULE_mappingBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 445;
			this.match(CanonParser.LBRACE);
			this.state = 449;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.IDENTIFIER) {
				{
				{
				this.state = 446;
				this.mappingEntry();
				}
				}
				this.state = 451;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 452;
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
		this.enterRule(_localctx, 66, CanonParser.RULE_mappingEntry);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 454;
			this.match(CanonParser.IDENTIFIER);
			this.state = 455;
			this.match(CanonParser.ARROW);
			this.state = 456;
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
		this.enterRule(_localctx, 68, CanonParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 458;
			this.parameter();
			this.state = 463;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.COMMA) {
				{
				{
				this.state = 459;
				this.match(CanonParser.COMMA);
				this.state = 460;
				this.parameter();
				}
				}
				this.state = 465;
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
		this.enterRule(_localctx, 70, CanonParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 468;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.THIS) {
				{
				this.state = 466;
				this.match(CanonParser.THIS);
				this.state = 467;
				this.match(CanonParser.DOT);
				}
			}

			this.state = 470;
			this.match(CanonParser.IDENTIFIER);
			this.state = 473;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 471;
				this.match(CanonParser.COLON);
				this.state = 472;
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
		this.enterRule(_localctx, 72, CanonParser.RULE_callExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 475;
			this.match(CanonParser.IDENTIFIER);
			this.state = 481;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				{
				this.state = 476;
				this.match(CanonParser.LPAREN);
				this.state = 478;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.FUN) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (CanonParser.BIT_NOT - 51)) | (1 << (CanonParser.SPREAD - 51)) | (1 << (CanonParser.LBRACE - 51)) | (1 << (CanonParser.LPAREN - 51)) | (1 << (CanonParser.LBRACKET - 51)) | (1 << (CanonParser.STRING_LITERAL - 51)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 51)) | (1 << (CanonParser.TEMPLATE_STRING_START - 51)) | (1 << (CanonParser.INTEGER_LITERAL - 51)) | (1 << (CanonParser.TRUE - 51)) | (1 << (CanonParser.FALSE - 51)) | (1 << (CanonParser.IDENTIFIER - 51)))) !== 0)) {
					{
					this.state = 477;
					this.argumentList();
					}
				}

				this.state = 480;
				this.match(CanonParser.RPAREN);
				}
				break;
			}
			this.state = 484;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				{
				this.state = 483;
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
		this.enterRule(_localctx, 74, CanonParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 486;
			this.expression(0);
			this.state = 491;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.COMMA) {
				{
				{
				this.state = 487;
				this.match(CanonParser.COMMA);
				this.state = 488;
				this.expression(0);
				}
				}
				this.state = 493;
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
		let _startState: number = 76;
		this.enterRecursionRule(_localctx, 76, CanonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 502;
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

				this.state = 495;
				this.primary();
				}
				break;
			case CanonParser.MINUS:
				{
				_localctx = new UnaryMinusExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 496;
				this.match(CanonParser.MINUS);
				this.state = 497;
				this.expression(22);
				}
				break;
			case CanonParser.NOT:
				{
				_localctx = new LogicalNotExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 498;
				this.match(CanonParser.NOT);
				this.state = 499;
				this.expression(21);
				}
				break;
			case CanonParser.BIT_NOT:
				{
				_localctx = new BitwiseNotExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 500;
				this.match(CanonParser.BIT_NOT);
				this.state = 501;
				this.expression(20);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 574;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 572;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
					case 1:
						{
						_localctx = new PowerExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 504;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 505;
						this.match(CanonParser.POWER);
						this.state = 506;
						this.expression(20);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 507;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 508;
						(_localctx as MulDivModExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.MULTIPLY) | (1 << CanonParser.DIVIDE) | (1 << CanonParser.MODULO))) !== 0))) {
							(_localctx as MulDivModExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 509;
						this.expression(19);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 510;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 511;
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
						this.state = 512;
						this.expression(18);
						}
						break;

					case 4:
						{
						_localctx = new RangeExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 513;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 514;
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
						this.state = 515;
						this.expression(17);
						}
						break;

					case 5:
						{
						_localctx = new InfixCallExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 516;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 517;
						this.match(CanonParser.IDENTIFIER);
						this.state = 518;
						this.expression(16);
						}
						break;

					case 6:
						{
						_localctx = new ShiftExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 519;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 520;
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
						this.state = 521;
						this.expression(15);
						}
						break;

					case 7:
						{
						_localctx = new RelationalExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 522;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 523;
						(_localctx as RelationalExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (CanonParser.LESS_THAN - 34)) | (1 << (CanonParser.GREATER_THAN - 34)) | (1 << (CanonParser.LESS_EQUALS - 34)) | (1 << (CanonParser.GREATER_EQUALS - 34)))) !== 0))) {
							(_localctx as RelationalExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 524;
						this.expression(14);
						}
						break;

					case 8:
						{
						_localctx = new EqualityExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 525;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 526;
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
						this.state = 527;
						this.expression(13);
						}
						break;

					case 9:
						{
						_localctx = new BitwiseAndExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 528;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 529;
						this.match(CanonParser.BIT_AND);
						this.state = 530;
						this.expression(12);
						}
						break;

					case 10:
						{
						_localctx = new BitwiseXorExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 531;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 532;
						this.match(CanonParser.BIT_XOR);
						this.state = 533;
						this.expression(11);
						}
						break;

					case 11:
						{
						_localctx = new BitwiseOrExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 534;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 535;
						this.match(CanonParser.BIT_OR);
						this.state = 536;
						this.expression(10);
						}
						break;

					case 12:
						{
						_localctx = new LogicalAndExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 537;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 538;
						this.match(CanonParser.LOGICAL_AND);
						this.state = 539;
						this.expression(9);
						}
						break;

					case 13:
						{
						_localctx = new LogicalOrExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 540;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 541;
						this.match(CanonParser.LOGICAL_OR);
						this.state = 542;
						this.expression(8);
						}
						break;

					case 14:
						{
						_localctx = new PipelineExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 543;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 544;
						this.match(CanonParser.PIPELINE);
						this.state = 545;
						this.expression(7);
						}
						break;

					case 15:
						{
						_localctx = new MemberAccessExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 546;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 547;
						this.match(CanonParser.DOT);
						this.state = 548;
						this.match(CanonParser.IDENTIFIER);
						}
						break;

					case 16:
						{
						_localctx = new IndexAccessExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 549;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 550;
						this.match(CanonParser.LBRACKET);
						this.state = 551;
						this.expression(0);
						this.state = 552;
						this.match(CanonParser.RBRACKET);
						}
						break;

					case 17:
						{
						_localctx = new SliceExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 554;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 555;
						this.match(CanonParser.LBRACKET);
						this.state = 557;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.FUN) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (CanonParser.BIT_NOT - 51)) | (1 << (CanonParser.SPREAD - 51)) | (1 << (CanonParser.LBRACE - 51)) | (1 << (CanonParser.LPAREN - 51)) | (1 << (CanonParser.LBRACKET - 51)) | (1 << (CanonParser.STRING_LITERAL - 51)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 51)) | (1 << (CanonParser.TEMPLATE_STRING_START - 51)) | (1 << (CanonParser.INTEGER_LITERAL - 51)) | (1 << (CanonParser.TRUE - 51)) | (1 << (CanonParser.FALSE - 51)) | (1 << (CanonParser.IDENTIFIER - 51)))) !== 0)) {
							{
							this.state = 556;
							this.expression(0);
							}
						}

						this.state = 559;
						this.match(CanonParser.RANGE);
						this.state = 561;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.FUN) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (CanonParser.BIT_NOT - 51)) | (1 << (CanonParser.SPREAD - 51)) | (1 << (CanonParser.LBRACE - 51)) | (1 << (CanonParser.LPAREN - 51)) | (1 << (CanonParser.LBRACKET - 51)) | (1 << (CanonParser.STRING_LITERAL - 51)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 51)) | (1 << (CanonParser.TEMPLATE_STRING_START - 51)) | (1 << (CanonParser.INTEGER_LITERAL - 51)) | (1 << (CanonParser.TRUE - 51)) | (1 << (CanonParser.FALSE - 51)) | (1 << (CanonParser.IDENTIFIER - 51)))) !== 0)) {
							{
							this.state = 560;
							this.expression(0);
							}
						}

						this.state = 563;
						this.match(CanonParser.RBRACKET);
						}
						break;

					case 18:
						{
						_localctx = new FuncCallExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 564;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 565;
						this.match(CanonParser.LPAREN);
						this.state = 567;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.FUN) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (CanonParser.BIT_NOT - 51)) | (1 << (CanonParser.SPREAD - 51)) | (1 << (CanonParser.LBRACE - 51)) | (1 << (CanonParser.LPAREN - 51)) | (1 << (CanonParser.LBRACKET - 51)) | (1 << (CanonParser.STRING_LITERAL - 51)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 51)) | (1 << (CanonParser.TEMPLATE_STRING_START - 51)) | (1 << (CanonParser.INTEGER_LITERAL - 51)) | (1 << (CanonParser.TRUE - 51)) | (1 << (CanonParser.FALSE - 51)) | (1 << (CanonParser.IDENTIFIER - 51)))) !== 0)) {
							{
							this.state = 566;
							this.argumentList();
							}
						}

						this.state = 569;
						this.match(CanonParser.RPAREN);
						}
						break;

					case 19:
						{
						_localctx = new NonNullAssertExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 570;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 571;
						this.match(CanonParser.EXCLAMATION);
						}
						break;
					}
					}
				}
				this.state = 576;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
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
		this.enterRule(_localctx, 78, CanonParser.RULE_primary);
		try {
			this.state = 604;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				_localctx = new LiteralExprContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 577;
				this.literal();
				}
				break;

			case 2:
				_localctx = new ListLiteralExprContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 578;
				this.listLiteral();
				}
				break;

			case 3:
				_localctx = new LambdaExprContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 579;
				this.lambdaExpression();
				}
				break;

			case 4:
				_localctx = new AnonFuncExprContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 580;
				this.anonymousFunction();
				}
				break;

			case 5:
				_localctx = new SpreadExprContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 581;
				this.spreadExpression();
				}
				break;

			case 6:
				_localctx = new IdentifierExprContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 582;
				this.match(CanonParser.IDENTIFIER);
				}
				break;

			case 7:
				_localctx = new ThisExprContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 583;
				this.match(CanonParser.THIS);
				}
				break;

			case 8:
				_localctx = new IfExprContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 584;
				this.match(CanonParser.IF);
				this.state = 585;
				this.match(CanonParser.LPAREN);
				this.state = 586;
				this.expression(0);
				this.state = 587;
				this.match(CanonParser.RPAREN);
				this.state = 590;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
				case 1:
					{
					this.state = 588;
					this.expression(0);
					}
					break;

				case 2:
					{
					this.state = 589;
					this.block();
					}
					break;
				}
				this.state = 597;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
				case 1:
					{
					this.state = 592;
					this.match(CanonParser.ELSE);
					this.state = 595;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
					case 1:
						{
						this.state = 593;
						this.expression(0);
						}
						break;

					case 2:
						{
						this.state = 594;
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
				this.state = 599;
				this.match(CanonParser.LPAREN);
				this.state = 600;
				this.expression(0);
				this.state = 601;
				this.match(CanonParser.RPAREN);
				}
				break;

			case 10:
				_localctx = new CallExprPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 603;
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
		this.enterRule(_localctx, 80, CanonParser.RULE_literal);
		try {
			this.state = 610;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.STRING_LITERAL:
			case CanonParser.DOUBLE_STRING_LITERAL:
			case CanonParser.TEMPLATE_STRING_START:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 606;
				this.stringLiteral();
				}
				break;
			case CanonParser.INTEGER_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 607;
				this.match(CanonParser.INTEGER_LITERAL);
				}
				break;
			case CanonParser.TRUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 608;
				this.match(CanonParser.TRUE);
				}
				break;
			case CanonParser.FALSE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 609;
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
		this.enterRule(_localctx, 82, CanonParser.RULE_stringLiteral);
		try {
			this.state = 615;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 612;
				this.match(CanonParser.STRING_LITERAL);
				}
				break;
			case CanonParser.DOUBLE_STRING_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 613;
				this.match(CanonParser.DOUBLE_STRING_LITERAL);
				}
				break;
			case CanonParser.TEMPLATE_STRING_START:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 614;
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
		this.enterRule(_localctx, 84, CanonParser.RULE_templateString);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 617;
			this.match(CanonParser.TEMPLATE_STRING_START);
			this.state = 621;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (CanonParser.TEMPLATE_STRING_PART - 79)) | (1 << (CanonParser.TEMPLATE_INTERPOLATION_START - 79)) | (1 << (CanonParser.TEMPLATE_INTERPOLATION_SIMPLE - 79)))) !== 0)) {
				{
				{
				this.state = 618;
				this.templateStringContent();
				}
				}
				this.state = 623;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 624;
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
		this.enterRule(_localctx, 86, CanonParser.RULE_templateStringContent);
		try {
			this.state = 632;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.TEMPLATE_STRING_PART:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 626;
				this.match(CanonParser.TEMPLATE_STRING_PART);
				}
				break;
			case CanonParser.TEMPLATE_INTERPOLATION_SIMPLE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 627;
				this.match(CanonParser.TEMPLATE_INTERPOLATION_SIMPLE);
				}
				break;
			case CanonParser.TEMPLATE_INTERPOLATION_START:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 628;
				this.match(CanonParser.TEMPLATE_INTERPOLATION_START);
				this.state = 629;
				this.expression(0);
				this.state = 630;
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
		this.enterRule(_localctx, 88, CanonParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 634;
			this.match(CanonParser.ANNOTATION);
			this.state = 641;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.LPAREN:
				{
				this.state = 635;
				this.match(CanonParser.LPAREN);
				this.state = 637;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.FUN) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (CanonParser.BIT_NOT - 51)) | (1 << (CanonParser.SPREAD - 51)) | (1 << (CanonParser.LBRACE - 51)) | (1 << (CanonParser.LPAREN - 51)) | (1 << (CanonParser.LBRACKET - 51)) | (1 << (CanonParser.STRING_LITERAL - 51)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 51)) | (1 << (CanonParser.TEMPLATE_STRING_START - 51)) | (1 << (CanonParser.INTEGER_LITERAL - 51)) | (1 << (CanonParser.TRUE - 51)) | (1 << (CanonParser.FALSE - 51)) | (1 << (CanonParser.IDENTIFIER - 51)))) !== 0)) {
					{
					this.state = 636;
					this.argumentList();
					}
				}

				this.state = 639;
				this.match(CanonParser.RPAREN);
				}
				break;
			case CanonParser.STRING_LITERAL:
			case CanonParser.DOUBLE_STRING_LITERAL:
			case CanonParser.TEMPLATE_STRING_START:
				{
				this.state = 640;
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
		this.enterRule(_localctx, 90, CanonParser.RULE_listLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 643;
			this.match(CanonParser.LBRACKET);
			this.state = 652;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.FUN) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (CanonParser.BIT_NOT - 51)) | (1 << (CanonParser.SPREAD - 51)) | (1 << (CanonParser.LBRACE - 51)) | (1 << (CanonParser.LPAREN - 51)) | (1 << (CanonParser.LBRACKET - 51)) | (1 << (CanonParser.STRING_LITERAL - 51)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 51)) | (1 << (CanonParser.TEMPLATE_STRING_START - 51)) | (1 << (CanonParser.INTEGER_LITERAL - 51)) | (1 << (CanonParser.TRUE - 51)) | (1 << (CanonParser.FALSE - 51)) | (1 << (CanonParser.IDENTIFIER - 51)))) !== 0)) {
				{
				this.state = 644;
				this.expression(0);
				this.state = 649;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CanonParser.COMMA) {
					{
					{
					this.state = 645;
					this.match(CanonParser.COMMA);
					this.state = 646;
					this.expression(0);
					}
					}
					this.state = 651;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 654;
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
		this.enterRule(_localctx, 92, CanonParser.RULE_lambdaExpression);
		try {
			this.state = 681;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 656;
				this.match(CanonParser.LBRACE);
				this.state = 657;
				this.match(CanonParser.RBRACE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 658;
				this.match(CanonParser.LBRACE);
				this.state = 659;
				this.match(CanonParser.ARROW);
				this.state = 660;
				this.match(CanonParser.RBRACE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 661;
				this.match(CanonParser.LBRACE);
				this.state = 662;
				this.match(CanonParser.ARROW);
				this.state = 663;
				this.lambdaBody();
				this.state = 664;
				this.match(CanonParser.RBRACE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 666;
				this.match(CanonParser.LBRACE);
				this.state = 667;
				this.lambdaParameters();
				this.state = 668;
				this.match(CanonParser.ARROW);
				this.state = 669;
				this.match(CanonParser.RBRACE);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 671;
				this.match(CanonParser.LBRACE);
				this.state = 672;
				this.lambdaParameters();
				this.state = 673;
				this.match(CanonParser.ARROW);
				this.state = 674;
				this.lambdaBody();
				this.state = 675;
				this.match(CanonParser.RBRACE);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 677;
				this.match(CanonParser.LBRACE);
				this.state = 678;
				this.lambdaBody();
				this.state = 679;
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
		this.enterRule(_localctx, 94, CanonParser.RULE_lambdaParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 683;
			this.match(CanonParser.IDENTIFIER);
			this.state = 688;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.COMMA) {
				{
				{
				this.state = 684;
				this.match(CanonParser.COMMA);
				this.state = 685;
				this.match(CanonParser.IDENTIFIER);
				}
				}
				this.state = 690;
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
	public lambdaBody(): LambdaBodyContext {
		let _localctx: LambdaBodyContext = new LambdaBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, CanonParser.RULE_lambdaBody);
		let _la: number;
		try {
			this.state = 704;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 691;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 700;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 692;
					this.statement();
					this.state = 697;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CanonParser.SEMICOLON) {
						{
						{
						this.state = 693;
						this.match(CanonParser.SEMICOLON);
						this.state = 694;
						this.statement();
						}
						}
						this.state = 699;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 702;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.INIT) | (1 << CanonParser.PRIVATE) | (1 << CanonParser.GET) | (1 << CanonParser.REPEATED) | (1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.VAL) | (1 << CanonParser.VAR) | (1 << CanonParser.FUN) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (CanonParser.BIT_NOT - 51)) | (1 << (CanonParser.SPREAD - 51)) | (1 << (CanonParser.LBRACE - 51)) | (1 << (CanonParser.LPAREN - 51)) | (1 << (CanonParser.LBRACKET - 51)) | (1 << (CanonParser.STRING_LITERAL - 51)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 51)) | (1 << (CanonParser.TEMPLATE_STRING_START - 51)) | (1 << (CanonParser.INTEGER_LITERAL - 51)) | (1 << (CanonParser.TRUE - 51)) | (1 << (CanonParser.FALSE - 51)) | (1 << (CanonParser.ANNOTATION - 51)) | (1 << (CanonParser.IDENTIFIER - 51)))) !== 0));
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
		this.enterRule(_localctx, 98, CanonParser.RULE_anonymousFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 706;
			this.match(CanonParser.FUN);
			this.state = 707;
			this.match(CanonParser.LPAREN);
			this.state = 709;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.THIS || _la === CanonParser.IDENTIFIER) {
				{
				this.state = 708;
				this.parameterList();
				}
			}

			this.state = 711;
			this.match(CanonParser.RPAREN);
			this.state = 714;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 712;
				this.match(CanonParser.COLON);
				this.state = 713;
				this.type();
				}
			}

			this.state = 716;
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
		this.enterRule(_localctx, 100, CanonParser.RULE_spreadExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 718;
			this.match(CanonParser.SPREAD);
			this.state = 719;
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
		case 38:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 19);

		case 1:
			return this.precpred(this._ctx, 18);

		case 2:
			return this.precpred(this._ctx, 17);

		case 3:
			return this.precpred(this._ctx, 16);

		case 4:
			return this.precpred(this._ctx, 15);

		case 5:
			return this.precpred(this._ctx, 14);

		case 6:
			return this.precpred(this._ctx, 13);

		case 7:
			return this.precpred(this._ctx, 12);

		case 8:
			return this.precpred(this._ctx, 11);

		case 9:
			return this.precpred(this._ctx, 10);

		case 10:
			return this.precpred(this._ctx, 9);

		case 11:
			return this.precpred(this._ctx, 8);

		case 12:
			return this.precpred(this._ctx, 7);

		case 13:
			return this.precpred(this._ctx, 6);

		case 14:
			return this.precpred(this._ctx, 5);

		case 15:
			return this.precpred(this._ctx, 4);

		case 16:
			return this.precpred(this._ctx, 3);

		case 17:
			return this.precpred(this._ctx, 2);

		case 18:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03U\u02D4\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x03\x02\x03\x02\x03\x02\x07\x02l\n\x02\f\x02\x0E\x02o\v\x02\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x05\x07\x05|\n\x05\f\x05\x0E\x05\x7F\v\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\x8A\n\x06\x03" +
		"\x07\x07\x07\x8D\n\x07\f\x07\x0E\x07\x90\v\x07\x03\x07\x03\x07\x03\x07" +
		"\x05\x07\x95\n\x07\x03\b\x07\b\x98\n\b\f\b\x0E\b\x9B\v\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\t\x07\t\xA2\n\t\f\t\x0E\t\xA5\v\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\n\x07\n\xAD\n\n\f\n\x0E\n\xB0\v\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\v\x07\v\xB8\n\v\f\v\x0E\v\xBB\v\v\x03\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x05\v\xC5\n\v\x03\v\x03\v\x05\v\xC9\n\v\x03\v\x03\v" +
		"\x03\v\x05\v\xCE\n\v\x03\v\x03\v\x03\f\x07\f\xD3\n\f\f\f\x0E\f\xD6\v\f" +
		"\x03\f\x03\f\x03\f\x03\f\x05\f\xDC\n\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03" +
		"\r\x07\r\xE4\n\r\f\r\x0E\r\xE7\v\r\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xEC" +
		"\n\x0E\f\x0E\x0E\x0E\xEF\v\x0E\x03\x0F\x03\x0F\x05\x0F\xF3\n\x0F\x03\x10" +
		"\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\xFB\n\x11\f\x11\x0E\x11" +
		"\xFE\v\x11\x07\x11\u0100\n\x11\f\x11\x0E\x11\u0103\v\x11\x03\x11\x03\x11" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u010B\n\x12\f\x12\x0E\x12\u010E" +
		"\v\x12\x07\x12\u0110\n\x12\f\x12\x0E\x12\u0113\v\x12\x03\x12\x03\x12\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u011C\n\x13\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0126\n\x14\x03" +
		"\x15\x03\x15\x03\x16\x07\x16\u012B\n\x16\f\x16\x0E\x16\u012E\v\x16\x03" +
		"\x16\x05\x16\u0131\n\x16\x03\x16\x03\x16\x05\x16\u0135\n\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x05\x16\u013B\n\x16\x05\x16\u013D\n\x16\x03\x17\x03" +
		"\x17\x05\x17\u0141\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x19\x03\x19\x05\x19\u014D\n\x19\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x07\x1A\u0153\n\x1A\f\x1A\x0E\x1A\u0156\v\x1A\x03\x1A\x03" +
		"\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u015E\n\x1B\f\x1B\x0E\x1B" +
		"\u0161\v\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0168\n\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u016D\n\x1C\x03\x1D\x03\x1D\x03\x1D\x05" +
		"\x1D\u0172\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0179" +
		"\n\x1D\x05\x1D\u017B\n\x1D\x03\x1E\x07\x1E\u017E\n\x1E\f\x1E\x0E\x1E\u0181" +
		"\v\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0186\n\x1E\x03\x1E\x05\x1E\u0189" +
		"\n\x1E\x03\x1E\x03\x1E\x03\x1F\x07\x1F\u018E\n\x1F\f\x1F\x0E\x1F\u0191" +
		"\v\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x07 \u019A" +
		"\n \f \x0E \u019D\v \x03 \x05 \u01A0\n \x03 \x03 \x03 \x03 \x05 \u01A6" +
		"\n \x03 \x03 \x03 \x05 \u01AB\n \x03 \x03 \x03!\x07!\u01B0\n!\f!\x0E!" +
		"\u01B3\v!\x03!\x03!\x03!\x03!\x03!\x05!\u01BA\n!\x03!\x03!\x05!\u01BE" +
		"\n!\x03\"\x03\"\x07\"\u01C2\n\"\f\"\x0E\"\u01C5\v\"\x03\"\x03\"\x03#\x03" +
		"#\x03#\x03#\x03$\x03$\x03$\x07$\u01D0\n$\f$\x0E$\u01D3\v$\x03%\x03%\x05" +
		"%\u01D7\n%\x03%\x03%\x03%\x05%\u01DC\n%\x03&\x03&\x03&\x05&\u01E1\n&\x03" +
		"&\x05&\u01E4\n&\x03&\x05&\u01E7\n&\x03\'\x03\'\x03\'\x07\'\u01EC\n\'\f" +
		"\'\x0E\'\u01EF\v\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u01F9" +
		"\n(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u0230\n" +
		"(\x03(\x03(\x05(\u0234\n(\x03(\x03(\x03(\x03(\x05(\u023A\n(\x03(\x03(" +
		"\x03(\x07(\u023F\n(\f(\x0E(\u0242\v(\x03)\x03)\x03)\x03)\x03)\x03)\x03" +
		")\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u0251\n)\x03)\x03)\x03)\x05)\u0256" +
		"\n)\x05)\u0258\n)\x03)\x03)\x03)\x03)\x03)\x05)\u025F\n)\x03*\x03*\x03" +
		"*\x03*\x05*\u0265\n*\x03+\x03+\x03+\x05+\u026A\n+\x03,\x03,\x07,\u026E" +
		"\n,\f,\x0E,\u0271\v,\x03,\x03,\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u027B" +
		"\n-\x03.\x03.\x03.\x05.\u0280\n.\x03.\x03.\x05.\u0284\n.\x03/\x03/\x03" +
		"/\x03/\x07/\u028A\n/\f/\x0E/\u028D\v/\x05/\u028F\n/\x03/\x03/\x030\x03" +
		"0\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x03" +
		"0\x030\x030\x030\x030\x030\x030\x030\x030\x030\x050\u02AC\n0\x031\x03" +
		"1\x031\x071\u02B1\n1\f1\x0E1\u02B4\v1\x032\x032\x032\x032\x072\u02BA\n" +
		"2\f2\x0E2\u02BD\v2\x062\u02BF\n2\r2\x0E2\u02C0\x052\u02C3\n2\x033\x03" +
		"3\x033\x053\u02C8\n3\x033\x033\x033\x053\u02CD\n3\x033\x033\x034\x034" +
		"\x034\x034\x02\x02\x03N5\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
		"\x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02\x02\v\x03\x02\x15\x16\x03\x02" +
		"\x19\x1B\x03\x02(.\x03\x02\x1E \x03\x02\x1C\x1D\x03\x0289\x03\x0267\x03" +
		"\x02$\'\x03\x02\"#\x02\u0328\x02m\x03\x02\x02\x02\x04r\x03\x02\x02\x02" +
		"\x06u\x03\x02\x02\x02\bx\x03\x02\x02\x02\n\x89\x03\x02\x02\x02\f\x8E\x03" +
		"\x02\x02\x02\x0E\x99\x03\x02\x02\x02\x10\xA3\x03\x02\x02\x02\x12\xAE\x03" +
		"\x02\x02\x02\x14\xB9\x03\x02\x02\x02\x16\xD4\x03\x02\x02\x02\x18\xE0\x03" +
		"\x02\x02\x02\x1A\xE8\x03\x02\x02\x02\x1C\xF2\x03\x02\x02\x02\x1E\xF4\x03" +
		"\x02\x02\x02 \xF6\x03\x02\x02\x02\"\u0106\x03\x02\x02\x02$\u011B\x03\x02" +
		"\x02\x02&\u0125\x03\x02\x02\x02(\u0127\x03\x02\x02\x02*\u012C\x03\x02" +
		"\x02\x02,\u0140\x03\x02\x02\x02.\u0146\x03\x02\x02\x020\u014C\x03\x02" +
		"\x02\x022\u014E\x03\x02\x02\x024\u0159\x03\x02\x02\x026\u016C\x03\x02" +
		"\x02\x028\u017A\x03\x02\x02\x02:\u017F\x03\x02\x02\x02<\u018F\x03\x02" +
		"\x02\x02>\u019B\x03\x02\x02\x02@\u01B1\x03\x02\x02\x02B\u01BF\x03\x02" +
		"\x02\x02D\u01C8\x03\x02\x02\x02F\u01CC\x03\x02\x02\x02H\u01D6\x03\x02" +
		"\x02\x02J\u01DD\x03\x02\x02\x02L\u01E8\x03\x02\x02\x02N\u01F8\x03\x02" +
		"\x02\x02P\u025E\x03\x02\x02\x02R\u0264\x03\x02\x02\x02T\u0269\x03\x02" +
		"\x02\x02V\u026B\x03\x02\x02\x02X\u027A\x03\x02\x02\x02Z\u027C\x03\x02" +
		"\x02\x02\\\u0285\x03\x02\x02\x02^\u02AB\x03\x02\x02\x02`\u02AD\x03\x02" +
		"\x02\x02b\u02C2\x03\x02\x02\x02d\u02C4\x03\x02\x02\x02f\u02D0\x03\x02" +
		"\x02\x02hl\x05\x04\x03\x02il\x05\x06\x04\x02jl\x05\b\x05\x02kh\x03\x02" +
		"\x02\x02ki\x03\x02\x02\x02kj\x03\x02\x02\x02lo\x03\x02\x02\x02mk\x03\x02" +
		"\x02\x02mn\x03\x02\x02\x02np\x03\x02\x02\x02om\x03\x02\x02\x02pq\x07\x02" +
		"\x02\x03q\x03\x03\x02\x02\x02rs\x07\x06\x02\x02st\x05T+\x02t\x05\x03\x02" +
		"\x02\x02uv\x07\x10\x02\x02vw\x07O\x02\x02w\x07\x03\x02\x02\x02x}\x05\n" +
		"\x06\x02yz\x07E\x02\x02z|\x05\n\x06\x02{y\x03\x02\x02\x02|\x7F\x03\x02" +
		"\x02\x02}{\x03\x02\x02\x02}~\x03\x02\x02\x02~\t\x03\x02\x02\x02\x7F}\x03" +
		"\x02\x02\x02\x80\x8A\x05\f\x07\x02\x81\x8A\x05\x0E\b\x02\x82\x8A\x05\x10" +
		"\t\x02\x83\x8A\x05\x12\n\x02\x84\x8A\x05\x16\f\x02\x85\x8A\x05\x14\v\x02" +
		"\x86\x8A\x05,\x17\x02\x87\x8A\x05.\x18\x02\x88\x8A\x05J&\x02\x89\x80\x03" +
		"\x02\x02\x02\x89\x81\x03\x02\x02\x02\x89\x82\x03\x02\x02\x02\x89\x83\x03" +
		"\x02\x02\x02\x89\x84\x03\x02\x02\x02\x89\x85\x03\x02\x02\x02\x89\x86\x03" +
		"\x02\x02\x02\x89\x87\x03\x02\x02\x02\x89\x88\x03\x02\x02\x02\x8A\v\x03" +
		"\x02\x02\x02\x8B\x8D\x05Z.\x02\x8C\x8B\x03\x02\x02\x02\x8D\x90\x03\x02" +
		"\x02\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x91\x03\x02" +
		"\x02\x02\x90\x8E\x03\x02\x02\x02\x91\x94\x07\b\x02\x02\x92\x95\x05 \x11" +
		"\x02\x93\x95\x05T+\x02\x94\x92\x03\x02\x02\x02\x94\x93\x03\x02\x02\x02" +
		"\x95\r\x03\x02\x02\x02\x96\x98\x05Z.\x02\x97\x96\x03\x02\x02\x02\x98\x9B" +
		"\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9C" +
		"\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02\x9C\x9D\x07\t\x02\x02\x9D\x9E" +
		"\x07O\x02\x02\x9E\x9F\x05\"\x12\x02\x9F\x0F\x03\x02\x02\x02\xA0\xA2\x05" +
		"Z.\x02\xA1\xA0\x03\x02\x02\x02\xA2\xA5\x03\x02\x02\x02\xA3\xA1\x03\x02" +
		"\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA6\x03\x02\x02\x02\xA5\xA3\x03\x02" +
		"\x02\x02\xA6\xA7\x07\n\x02\x02\xA7\xA8\x07O\x02\x02\xA8\xA9\x07(\x02\x02" +
		"\xA9\xAA\x05\x18\r\x02\xAA\x11\x03\x02\x02\x02\xAB\xAD\x05Z.\x02\xAC\xAB" +
		"\x03\x02\x02\x02\xAD\xB0\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAF" +
		"\x03\x02\x02\x02\xAF\xB1\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB1\xB2" +
		"\x07\v\x02\x02\xB2\xB3\x07O\x02\x02\xB3\xB4\x07(\x02\x02\xB4\xB5\x05\x1A" +
		"\x0E\x02\xB5\x13\x03\x02\x02\x02\xB6\xB8\x05Z.\x02\xB7\xB6\x03\x02\x02" +
		"\x02\xB8\xBB\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xB9\xBA\x03\x02\x02" +
		"\x02\xBA\xC4\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02\xBC\xBD\x07\x18\x02" +
		"\x02\xBD\xBE\x07\x17\x02\x02\xBE\xBF\x05\x1A\x0E\x02\xBF\xC0\x07B\x02" +
		"\x02\xC0\xC1\x07O\x02\x02\xC1\xC5\x03\x02\x02\x02\xC2\xC3\x07\x17\x02" +
		"\x02\xC3\xC5\x07O\x02\x02\xC4\xBC\x03\x02\x02\x02\xC4\xC2\x03\x02\x02" +
		"\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC8\x07>\x02\x02\xC7\xC9\x05F$\x02\xC8" +
		"\xC7\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA" +
		"\xCD\x07?\x02\x02\xCB\xCC\x07D\x02\x02\xCC\xCE\x05\x1A\x0E\x02\xCD\xCB" +
		"\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD0" +
		"\x05 \x11\x02\xD0\x15\x03\x02\x02\x02\xD1\xD3\x05Z.\x02\xD2\xD1\x03\x02" +
		"\x02\x02\xD3\xD6\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD4\xD5\x03\x02" +
		"\x02\x02\xD5\xD7\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD7\xD8\t\x02" +
		"\x02\x02\xD8\xDB\x07O\x02\x02\xD9\xDA\x07D\x02\x02\xDA\xDC\x05\x1A\x0E" +
		"\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDD\x03\x02\x02" +
		"\x02\xDD\xDE\x07(\x02\x02\xDE\xDF\x05N(\x02\xDF\x17\x03\x02\x02\x02\xE0" +
		"\xE5\x05\x1A\x0E\x02\xE1\xE2\x073\x02\x02\xE2\xE4\x05\x1A\x0E\x02\xE3" +
		"\xE1\x03\x02\x02\x02\xE4\xE7\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE5" +
		"\xE6\x03\x02\x02\x02\xE6\x19\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE8" +
		"\xED\x05\x1C\x0F\x02\xE9\xEA\x07@\x02\x02\xEA\xEC\x07A\x02\x02\xEB\xE9" +
		"\x03\x02\x02\x02\xEC\xEF\x03\x02\x02\x02\xED\xEB\x03\x02\x02\x02\xED\xEE" +
		"\x03\x02\x02\x02\xEE\x1B\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xF0\xF3" +
		"\x05\x1E\x10\x02\xF1\xF3\x07O\x02\x02\xF2\xF0\x03\x02\x02\x02\xF2\xF1" +
		"\x03\x02\x02\x02\xF3\x1D\x03\x02\x02\x02\xF4\xF5\t\x03\x02\x02\xF5\x1F" +
		"\x03\x02\x02\x02\xF6\u0101\x07<\x02\x02\xF7\xFC\x05&\x14\x02\xF8\xF9\x07" +
		"E\x02\x02\xF9\xFB\x05&\x14\x02\xFA\xF8\x03\x02\x02\x02\xFB\xFE\x03\x02" +
		"\x02\x02\xFC\xFA\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\u0100\x03" +
		"\x02\x02\x02\xFE\xFC\x03\x02\x02\x02\xFF\xF7\x03\x02\x02\x02\u0100\u0103" +
		"\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02" +
		"\u0102\u0104\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0104\u0105\x07" +
		"=\x02\x02\u0105!\x03\x02\x02\x02\u0106\u0111\x07<\x02\x02\u0107\u010C" +
		"\x05$\x13\x02\u0108\u0109\x07E\x02\x02\u0109\u010B\x05$\x13\x02\u010A" +
		"\u0108\x03\x02\x02\x02\u010B\u010E\x03\x02\x02\x02\u010C\u010A\x03\x02" +
		"\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D\u0110\x03\x02\x02\x02\u010E" +
		"\u010C\x03\x02\x02\x02\u010F\u0107\x03\x02\x02\x02\u0110\u0113\x03\x02" +
		"\x02\x02\u0111\u010F\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112" +
		"\u0114\x03\x02\x02\x02\u0113\u0111\x03\x02\x02\x02\u0114\u0115\x07=\x02" +
		"\x02\u0115#\x03\x02\x02\x02\u0116\u011C\x05*\x16\x02\u0117\u011C\x05:" +
		"\x1E\x02\u0118\u011C\x05<\x1F\x02\u0119\u011C\x05> \x02\u011A\u011C\x05" +
		"@!\x02\u011B\u0116\x03\x02\x02\x02\u011B\u0117\x03\x02\x02\x02\u011B\u0118" +
		"\x03\x02\x02\x02\u011B\u0119\x03\x02\x02\x02\u011B\u011A\x03\x02\x02\x02" +
		"\u011C%\x03\x02\x02\x02\u011D\u0126\x05,\x17\x02\u011E\u0126\x05(\x15" +
		"\x02\u011F\u0126\x05*\x16\x02\u0120\u0126\x05:\x1E\x02\u0121\u0126\x05" +
		"<\x1F\x02\u0122\u0126\x05> \x02\u0123\u0126\x05@!\x02\u0124\u0126\x05" +
		"\x16\f\x02\u0125\u011D\x03\x02\x02\x02\u0125\u011E\x03\x02\x02\x02\u0125" +
		"\u011F\x03\x02\x02\x02\u0125\u0120\x03\x02\x02\x02\u0125\u0121\x03\x02" +
		"\x02\x02\u0125\u0122\x03\x02\x02\x02\u0125\u0123\x03\x02\x02\x02\u0125" +
		"\u0124\x03\x02\x02\x02\u0126\'\x03\x02\x02\x02\u0127\u0128\x05N(\x02\u0128" +
		")\x03\x02\x02\x02\u0129\u012B\x05Z.\x02\u012A\u0129\x03\x02\x02\x02\u012B" +
		"\u012E\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012C\u012D\x03\x02" +
		"\x02\x02\u012D\u0130\x03\x02\x02\x02\u012E\u012C\x03\x02\x02\x02\u012F" +
		"\u0131\x07\r\x02\x02\u0130\u012F\x03\x02\x02\x02\u0130\u0131\x03\x02\x02" +
		"\x02\u0131\u0132\x03\x02\x02\x02\u0132\u013C\x07O\x02\x02\u0133\u0135" +
		"\x07F\x02\x02\u0134\u0133\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02" +
		"\u0135\u0136\x03\x02\x02\x02\u0136\u0137\x07D\x02\x02\u0137\u013A\x05" +
		"\x1A\x0E\x02\u0138\u0139\x07(\x02\x02\u0139\u013B\x05N(\x02\u013A\u0138" +
		"\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u013D\x03\x02\x02\x02" +
		"\u013C\u0134\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D+\x03\x02" +
		"\x02\x02\u013E\u013F\x07\x14\x02\x02\u013F\u0141\x07B\x02\x02\u0140\u013E" +
		"\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02" +
		"\u0142\u0143\x07O\x02\x02\u0143\u0144\t\x04\x02\x02\u0144\u0145\x05N(" +
		"\x02\u0145-\x03\x02\x02\x02\u0146\u0147\x050\x19\x02\u0147\u0148\x07(" +
		"\x02\x02\u0148\u0149\x05N(\x02\u0149/\x03\x02\x02\x02\u014A\u014D\x05" +
		"2\x1A\x02\u014B\u014D\x054\x1B\x02\u014C\u014A\x03\x02\x02\x02\u014C\u014B" +
		"\x03\x02\x02\x02\u014D1\x03\x02\x02\x02\u014E\u014F\x07@\x02\x02\u014F" +
		"\u0154\x056\x1C\x02\u0150\u0151\x07C\x02\x02\u0151\u0153\x056\x1C\x02" +
		"\u0152\u0150\x03\x02\x02\x02\u0153\u0156\x03\x02\x02\x02\u0154\u0152\x03" +
		"\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155\u0157\x03\x02\x02\x02\u0156" +
		"\u0154\x03\x02\x02\x02\u0157\u0158\x07A\x02\x02\u01583\x03\x02\x02\x02" +
		"\u0159\u015A\x07<\x02\x02\u015A\u015F\x058\x1D\x02\u015B\u015C\x07C\x02" +
		"\x02\u015C\u015E\x058\x1D\x02\u015D\u015B\x03\x02\x02\x02\u015E\u0161" +
		"\x03\x02\x02\x02\u015F\u015D\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02" +
		"\u0160\u0162\x03\x02\x02\x02\u0161\u015F\x03\x02\x02\x02\u0162\u0163\x07" +
		"=\x02\x02\u01635\x03\x02\x02\x02\u0164\u0167\x07O\x02\x02\u0165\u0166" +
		"\x07(\x02\x02\u0166\u0168\x05N(\x02\u0167\u0165\x03\x02\x02\x02\u0167" +
		"\u0168\x03\x02\x02\x02\u0168\u016D\x03\x02\x02\x02\u0169\u016D\x050\x19" +
		"\x02\u016A\u016B\x07:\x02\x02\u016B\u016D\x07O\x02\x02\u016C\u0164\x03" +
		"\x02\x02\x02\u016C\u0169\x03\x02\x02\x02\u016C\u016A\x03\x02\x02\x02\u016D" +
		"7\x03\x02\x02\x02\u016E\u0171\x07O\x02\x02\u016F\u0170\x07(\x02\x02\u0170" +
		"\u0172\x05N(\x02\u0171\u016F\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02" +
		"\u0172\u017B\x03\x02\x02\x02\u0173\u0174\x07O\x02\x02\u0174\u0175\x07" +
		"D\x02\x02\u0175\u0178\x07O\x02\x02\u0176\u0177\x07(\x02\x02\u0177\u0179" +
		"\x05N(\x02\u0178\u0176\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179" +
		"\u017B\x03\x02\x02\x02\u017A\u016E\x03\x02\x02\x02\u017A\u0173\x03\x02" +
		"\x02\x02\u017B9\x03\x02\x02\x02\u017C\u017E\x05Z.\x02\u017D\u017C\x03" +
		"\x02\x02\x02\u017E\u0181\x03\x02\x02\x02\u017F\u017D\x03\x02\x02\x02\u017F" +
		"\u0180\x03\x02\x02\x02\u0180\u0182\x03\x02\x02\x02\u0181\u017F\x03\x02" +
		"\x02\x02\u0182\u0188\x07\f\x02\x02\u0183\u0185\x07>\x02\x02\u0184\u0186" +
		"\x05F$\x02\u0185\u0184\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186" +
		"\u0187\x03\x02\x02\x02\u0187\u0189\x07?\x02\x02\u0188\u0183\x03\x02\x02" +
		"\x02\u0188\u0189\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018B" +
		"\x05 \x11\x02\u018B;\x03\x02\x02\x02\u018C\u018E\x05Z.\x02\u018D\u018C" +
		"\x03\x02\x02\x02\u018E\u0191\x03\x02\x02\x02\u018F\u018D\x03\x02\x02\x02" +
		"\u018F\u0190\x03\x02\x02\x02\u0190\u0192\x03\x02\x02\x02\u0191\u018F\x03" +
		"\x02\x02\x02\u0192\u0193\x07\x0E\x02\x02\u0193\u0194\x07O\x02\x02\u0194" +
		"\u0195\x07>\x02\x02\u0195\u0196\x07?\x02\x02\u0196\u0197\x05 \x11\x02" +
		"\u0197=\x03\x02\x02\x02\u0198\u019A\x05Z.\x02\u0199\u0198\x03\x02\x02" +
		"\x02\u019A\u019D\x03\x02\x02\x02\u019B\u0199\x03\x02\x02\x02\u019B\u019C" +
		"\x03\x02\x02\x02\u019C\u019F\x03\x02\x02\x02\u019D\u019B\x03\x02\x02\x02" +
		"\u019E\u01A0\x07\r\x02\x02\u019F\u019E\x03\x02\x02\x02\u019F\u01A0\x03" +
		"\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1\u01A2\x07\x17\x02\x02\u01A2" +
		"\u01A3\x07O\x02\x02\u01A3\u01A5\x07>\x02\x02\u01A4\u01A6\x05F$\x02\u01A5" +
		"\u01A4\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A7\x03\x02" +
		"\x02\x02\u01A7\u01AA\x07?\x02\x02\u01A8\u01A9\x07D\x02\x02\u01A9\u01AB" +
		"\x05\x1A\x0E\x02\u01AA\u01A8\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02" +
		"\u01AB\u01AC\x03\x02\x02\x02\u01AC\u01AD\x05 \x11\x02\u01AD?\x03\x02\x02" +
		"\x02\u01AE\u01B0\x05Z.\x02\u01AF\u01AE\x03\x02\x02\x02\u01B0\u01B3\x03" +
		"\x02\x02\x02\u01B1\u01AF\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2" +
		"\u01B4\x03\x02\x02\x02\u01B3\u01B1\x03\x02\x02\x02\u01B4\u01B5\x07\x0F" +
		"\x02\x02\u01B5\u01B6\x07O\x02\x02\u01B6\u01B7\x07D\x02\x02\u01B7\u01B9" +
		"\x05\x1A\x0E\x02\u01B8\u01BA\x05B\"\x02\u01B9\u01B8\x03\x02\x02\x02\u01B9" +
		"\u01BA\x03\x02\x02\x02\u01BA\u01BD\x03\x02\x02\x02\u01BB\u01BC\x07(\x02" +
		"\x02\u01BC\u01BE\x05N(\x02\u01BD\u01BB\x03\x02\x02\x02\u01BD\u01BE\x03" +
		"\x02\x02\x02\u01BEA\x03\x02\x02\x02\u01BF\u01C3\x07<\x02\x02\u01C0\u01C2" +
		"\x05D#\x02\u01C1\u01C0\x03\x02\x02\x02\u01C2\u01C5\x03\x02\x02\x02\u01C3" +
		"\u01C1\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01C6\x03\x02" +
		"\x02\x02\u01C5\u01C3\x03\x02\x02\x02\u01C6\u01C7\x07=\x02\x02\u01C7C\x03" +
		"\x02\x02\x02\u01C8\u01C9\x07O\x02\x02\u01C9\u01CA\x07G\x02\x02\u01CA\u01CB" +
		"\x07O\x02\x02\u01CBE\x03\x02\x02\x02\u01CC\u01D1\x05H%\x02\u01CD\u01CE" +
		"\x07C\x02\x02\u01CE\u01D0\x05H%\x02\u01CF\u01CD\x03\x02\x02\x02\u01D0" +
		"\u01D3\x03\x02\x02\x02\u01D1\u01CF\x03\x02\x02\x02\u01D1\u01D2\x03\x02" +
		"\x02\x02\u01D2G\x03\x02\x02\x02\u01D3\u01D1\x03\x02\x02\x02\u01D4\u01D5" +
		"\x07\x14\x02\x02\u01D5\u01D7\x07B\x02\x02\u01D6\u01D4\x03\x02\x02\x02" +
		"\u01D6\u01D7\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8\u01DB\x07" +
		"O\x02\x02\u01D9\u01DA\x07D\x02\x02\u01DA\u01DC\x05\x1A\x0E\x02\u01DB\u01D9" +
		"\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DCI\x03\x02\x02\x02\u01DD" +
		"\u01E3\x07O\x02\x02\u01DE\u01E0\x07>\x02\x02\u01DF\u01E1\x05L\'\x02\u01E0" +
		"\u01DF\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1\u01E2\x03\x02" +
		"\x02\x02\u01E2\u01E4\x07?\x02\x02\u01E3\u01DE\x03\x02\x02\x02\u01E3\u01E4" +
		"\x03\x02\x02\x02\u01E4\u01E6\x03\x02\x02\x02\u01E5\u01E7\x05 \x11\x02" +
		"\u01E6\u01E5\x03\x02\x02\x02\u01E6\u01E7\x03\x02\x02\x02\u01E7K\x03\x02" +
		"\x02\x02\u01E8\u01ED\x05N(\x02\u01E9\u01EA\x07C\x02\x02\u01EA\u01EC\x05" +
		"N(\x02\u01EB\u01E9\x03\x02\x02\x02\u01EC\u01EF\x03\x02\x02\x02\u01ED\u01EB" +
		"\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02\u01EEM\x03\x02\x02\x02\u01EF" +
		"\u01ED\x03\x02\x02\x02\u01F0\u01F1\b(\x01\x02\u01F1\u01F9\x05P)\x02\u01F2" +
		"\u01F3\x07\x1D\x02\x02\u01F3\u01F9\x05N(\x18\u01F4\u01F5\x07\x13\x02\x02" +
		"\u01F5\u01F9\x05N(\x17\u01F6\u01F7\x075\x02\x02\u01F7\u01F9\x05N(\x16" +
		"\u01F8\u01F0\x03\x02\x02\x02\u01F8\u01F2\x03\x02\x02\x02\u01F8\u01F4\x03" +
		"\x02\x02\x02\u01F8\u01F6\x03\x02\x02\x02\u01F9\u0240\x03\x02\x02\x02\u01FA" +
		"\u01FB\f\x15\x02\x02\u01FB\u01FC\x07!\x02\x02\u01FC\u023F\x05N(\x16\u01FD" +
		"\u01FE\f\x14\x02\x02\u01FE\u01FF\t\x05\x02\x02\u01FF\u023F\x05N(\x15\u0200" +
		"\u0201\f\x13\x02\x02\u0201\u0202\t\x06\x02\x02\u0202\u023F\x05N(\x14\u0203" +
		"\u0204\f\x12\x02\x02\u0204\u0205\t\x07\x02\x02\u0205\u023F\x05N(\x13\u0206" +
		"\u0207\f\x11\x02\x02\u0207\u0208\x07O\x02\x02\u0208\u023F\x05N(\x12\u0209" +
		"\u020A\f\x10\x02\x02\u020A\u020B\t\b\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\u020B\u023F\x05N(\x11\u020C\u020D\f\x0F\x02\x02\u020D\u020E\t\t\x02" +
		"\x02\u020E\u023F\x05N(\x10\u020F\u0210\f\x0E\x02\x02\u0210\u0211\t\n\x02" +
		"\x02\u0211\u023F\x05N(\x0F\u0212\u0213\f\r\x02\x02\u0213\u0214\x072\x02" +
		"\x02\u0214\u023F\x05N(\x0E\u0215\u0216\f\f\x02\x02\u0216\u0217\x074\x02" +
		"\x02\u0217\u023F\x05N(\r\u0218\u0219\f\v\x02\x02\u0219\u021A\x073\x02" +
		"\x02\u021A\u023F\x05N(\f\u021B\u021C\f\n\x02\x02\u021C\u021D\x07/\x02" +
		"\x02\u021D\u023F\x05N(\v\u021E\u021F\f\t\x02\x02\u021F\u0220\x070\x02" +
		"\x02\u0220\u023F\x05N(\n\u0221\u0222\f\b\x02\x02\u0222\u0223\x071\x02" +
		"\x02\u0223\u023F\x05N(\t\u0224\u0225\f\x07\x02\x02\u0225\u0226\x07B\x02" +
		"\x02\u0226\u023F\x07O\x02\x02\u0227\u0228\f\x06\x02\x02\u0228\u0229\x07" +
		"@\x02\x02\u0229\u022A\x05N(\x02\u022A\u022B\x07A\x02\x02\u022B\u023F\x03" +
		"\x02\x02\x02\u022C\u022D\f\x05\x02\x02\u022D\u022F\x07@\x02\x02\u022E" +
		"\u0230\x05N(\x02\u022F\u022E\x03\x02\x02\x02\u022F\u0230\x03\x02\x02\x02" +
		"\u0230\u0231\x03\x02\x02\x02\u0231\u0233\x079\x02\x02\u0232\u0234\x05" +
		"N(\x02\u0233\u0232\x03\x02\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234\u0235" +
		"\x03\x02\x02\x02\u0235\u023F\x07A\x02\x02\u0236\u0237\f\x04\x02\x02\u0237" +
		"\u0239\x07>\x02\x02\u0238\u023A\x05L\'\x02\u0239\u0238\x03\x02\x02\x02" +
		"\u0239\u023A\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B\u023F\x07" +
		"?\x02\x02\u023C\u023D\f\x03\x02\x02\u023D\u023F\x07;\x02\x02\u023E\u01FA" +
		"\x03\x02\x02\x02\u023E\u01FD\x03\x02\x02\x02\u023E\u0200\x03\x02\x02\x02" +
		"\u023E\u0203\x03\x02\x02\x02\u023E\u0206\x03\x02\x02\x02\u023E\u0209\x03" +
		"\x02\x02\x02\u023E\u020C\x03\x02\x02\x02\u023E\u020F\x03\x02\x02\x02\u023E" +
		"\u0212\x03\x02\x02\x02\u023E\u0215\x03\x02\x02\x02\u023E\u0218\x03\x02" +
		"\x02\x02\u023E\u021B\x03\x02\x02\x02\u023E\u021E\x03\x02\x02\x02\u023E" +
		"\u0221\x03\x02\x02\x02\u023E\u0224\x03\x02\x02\x02\u023E\u0227\x03\x02" +
		"\x02\x02\u023E\u022C\x03\x02\x02\x02\u023E\u0236\x03\x02\x02\x02\u023E" +
		"\u023C\x03\x02\x02\x02\u023F\u0242\x03\x02\x02\x02\u0240\u023E\x03\x02" +
		"\x02\x02\u0240\u0241\x03\x02\x02\x02\u0241O\x03\x02\x02\x02\u0242\u0240" +
		"\x03\x02\x02\x02\u0243\u025F\x05R*\x02\u0244\u025F\x05\\/\x02\u0245\u025F" +
		"\x05^0\x02\u0246\u025F\x05d3\x02\u0247\u025F\x05f4\x02\u0248\u025F\x07" +
		"O\x02\x02\u0249\u025F\x07\x14\x02\x02\u024A\u024B\x07\x11\x02\x02\u024B" +
		"\u024C\x07>\x02\x02\u024C\u024D\x05N(\x02\u024D\u0250\x07?\x02\x02\u024E" +
		"\u0251\x05N(\x02\u024F\u0251\x05 \x11\x02\u0250\u024E\x03\x02\x02\x02" +
		"\u0250\u024F\x03\x02\x02\x02\u0251\u0257\x03\x02\x02\x02\u0252\u0255\x07" +
		"\x12\x02\x02\u0253\u0256\x05N(\x02\u0254\u0256\x05 \x11\x02\u0255\u0253" +
		"\x03\x02\x02\x02\u0255\u0254\x03\x02\x02\x02\u0256\u0258\x03\x02\x02\x02" +
		"\u0257\u0252\x03\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258\u025F\x03" +
		"\x02\x02\x02\u0259\u025A\x07>\x02\x02\u025A\u025B\x05N(\x02\u025B\u025C" +
		"\x07?\x02\x02\u025C\u025F\x03\x02\x02\x02\u025D\u025F\x05J&\x02\u025E" +
		"\u0243\x03\x02\x02\x02\u025E\u0244\x03\x02\x02\x02\u025E\u0245\x03\x02" +
		"\x02\x02\u025E\u0246\x03\x02\x02\x02\u025E\u0247\x03\x02\x02\x02\u025E" +
		"\u0248\x03\x02\x02\x02\u025E\u0249\x03\x02\x02\x02\u025E\u024A\x03\x02" +
		"\x02\x02\u025E\u0259\x03\x02\x02\x02\u025E\u025D\x03\x02\x02\x02\u025F" +
		"Q\x03\x02\x02\x02\u0260\u0265\x05T+\x02\u0261\u0265\x07K\x02\x02\u0262" +
		"\u0265\x07L\x02\x02\u0263\u0265\x07M\x02\x02\u0264\u0260\x03\x02\x02\x02" +
		"\u0264\u0261\x03\x02\x02\x02\u0264\u0262\x03\x02\x02\x02\u0264\u0263\x03" +
		"\x02\x02\x02\u0265S\x03\x02\x02\x02\u0266\u026A\x07H\x02\x02\u0267\u026A" +
		"\x07I\x02\x02\u0268\u026A\x05V,\x02\u0269\u0266\x03\x02\x02\x02\u0269" +
		"\u0267\x03\x02\x02\x02\u0269\u0268\x03\x02\x02\x02\u026AU\x03\x02\x02" +
		"\x02\u026B\u026F\x07J\x02\x02\u026C\u026E\x05X-\x02\u026D\u026C\x03\x02" +
		"\x02\x02\u026E\u0271\x03\x02\x02\x02\u026F\u026D\x03\x02\x02\x02\u026F" +
		"\u0270\x03\x02\x02\x02\u0270\u0272\x03\x02\x02\x02\u0271\u026F\x03\x02" +
		"\x02\x02\u0272\u0273\x07P\x02\x02\u0273W\x03\x02\x02\x02\u0274\u027B\x07" +
		"Q\x02\x02\u0275\u027B\x07S\x02\x02\u0276\u0277\x07R\x02\x02\u0277\u0278" +
		"\x05N(\x02\u0278\u0279\x07T\x02\x02\u0279\u027B\x03\x02\x02\x02\u027A" +
		"\u0274\x03\x02\x02\x02\u027A\u0275\x03\x02\x02\x02\u027A\u0276\x03\x02" +
		"\x02\x02\u027BY\x03\x02\x02\x02\u027C\u0283\x07N\x02\x02\u027D\u027F\x07" +
		">\x02\x02\u027E\u0280\x05L\'\x02\u027F\u027E\x03\x02\x02\x02\u027F\u0280" +
		"\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281\u0284\x07?\x02\x02" +
		"\u0282\u0284\x05T+\x02\u0283\u027D\x03\x02\x02\x02\u0283\u0282\x03\x02" +
		"\x02\x02\u0283\u0284\x03\x02\x02\x02\u0284[\x03\x02\x02\x02\u0285\u028E" +
		"\x07@\x02\x02\u0286\u028B\x05N(\x02\u0287\u0288\x07C\x02\x02\u0288\u028A" +
		"\x05N(\x02\u0289\u0287\x03\x02\x02\x02\u028A\u028D\x03\x02\x02\x02\u028B" +
		"\u0289\x03\x02\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C\u028F\x03\x02" +
		"\x02\x02\u028D\u028B\x03\x02\x02\x02\u028E\u0286\x03\x02\x02\x02\u028E" +
		"\u028F\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290\u0291\x07A\x02" +
		"\x02\u0291]\x03\x02\x02\x02\u0292\u0293\x07<\x02\x02\u0293\u02AC\x07=" +
		"\x02\x02\u0294\u0295\x07<\x02\x02\u0295\u0296\x07G\x02\x02\u0296\u02AC" +
		"\x07=\x02\x02\u0297\u0298\x07<\x02\x02\u0298\u0299\x07G\x02\x02\u0299" +
		"\u029A\x05b2\x02\u029A\u029B\x07=\x02\x02\u029B\u02AC\x03\x02\x02\x02" +
		"\u029C\u029D\x07<\x02\x02\u029D\u029E\x05`1\x02\u029E\u029F\x07G\x02\x02" +
		"\u029F\u02A0\x07=\x02\x02\u02A0\u02AC\x03\x02\x02\x02\u02A1\u02A2\x07" +
		"<\x02\x02\u02A2\u02A3\x05`1\x02\u02A3\u02A4\x07G\x02\x02\u02A4\u02A5\x05" +
		"b2\x02\u02A5\u02A6\x07=\x02\x02\u02A6\u02AC\x03\x02\x02\x02\u02A7\u02A8" +
		"\x07<\x02\x02\u02A8\u02A9\x05b2\x02\u02A9\u02AA\x07=\x02\x02\u02AA\u02AC" +
		"\x03\x02\x02\x02\u02AB\u0292\x03\x02\x02\x02\u02AB\u0294\x03\x02\x02\x02" +
		"\u02AB\u0297\x03\x02\x02\x02\u02AB\u029C\x03\x02\x02\x02\u02AB\u02A1\x03" +
		"\x02\x02\x02\u02AB\u02A7\x03\x02\x02\x02\u02AC_\x03\x02\x02\x02\u02AD" +
		"\u02B2\x07O\x02\x02\u02AE\u02AF\x07C\x02\x02\u02AF\u02B1\x07O\x02\x02" +
		"\u02B0\u02AE\x03\x02\x02\x02\u02B1\u02B4\x03\x02\x02\x02\u02B2\u02B0\x03" +
		"\x02\x02\x02\u02B2\u02B3\x03\x02\x02\x02\u02B3a\x03\x02\x02\x02\u02B4" +
		"\u02B2\x03\x02\x02\x02\u02B5\u02C3\x05N(\x02\u02B6\u02BB\x05&\x14\x02" +
		"\u02B7\u02B8\x07E\x02\x02\u02B8\u02BA\x05&\x14\x02\u02B9\u02B7\x03\x02" +
		"\x02\x02\u02BA\u02BD\x03\x02\x02\x02\u02BB\u02B9\x03\x02\x02\x02\u02BB" +
		"\u02BC\x03\x02\x02\x02\u02BC\u02BF\x03\x02\x02\x02\u02BD\u02BB\x03\x02" +
		"\x02\x02\u02BE\u02B6\x03\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0" +
		"\u02BE\x03\x02\x02\x02\u02C0\u02C1\x03\x02\x02\x02\u02C1\u02C3\x03\x02" +
		"\x02\x02\u02C2\u02B5\x03\x02\x02\x02\u02C2\u02BE\x03\x02\x02\x02\u02C3" +
		"c\x03\x02\x02\x02\u02C4\u02C5\x07\x17\x02\x02\u02C5\u02C7\x07>\x02\x02" +
		"\u02C6\u02C8\x05F$\x02\u02C7\u02C6\x03\x02\x02\x02\u02C7\u02C8\x03\x02" +
		"\x02\x02\u02C8\u02C9\x03\x02\x02\x02\u02C9\u02CC\x07?\x02\x02\u02CA\u02CB" +
		"\x07D\x02\x02\u02CB\u02CD\x05\x1A\x0E\x02\u02CC\u02CA\x03\x02\x02\x02" +
		"\u02CC\u02CD\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02CF\x05" +
		" \x11\x02\u02CFe\x03\x02\x02\x02\u02D0\u02D1\x07:\x02\x02\u02D1\u02D2" +
		"\x05N(\x02\u02D2g\x03\x02\x02\x02Tkm}\x89\x8E\x94\x99\xA3\xAE\xB9\xC4" +
		"\xC8\xCD\xD4\xDB\xE5\xED\xF2\xFC\u0101\u010C\u0111\u011B\u0125\u012C\u0130" +
		"\u0134\u013A\u013C\u0140\u014C\u0154\u015F\u0167\u016C\u0171\u0178\u017A" +
		"\u017F\u0185\u0188\u018F\u019B\u019F\u01A5\u01AA\u01B1\u01B9\u01BD\u01C3" +
		"\u01D1\u01D6\u01DB\u01E0\u01E3\u01E6\u01ED\u01F8\u022F\u0233\u0239\u023E" +
		"\u0240\u0250\u0255\u0257\u025E\u0264\u0269\u026F\u027A\u027F\u0283\u028B" +
		"\u028E\u02AB\u02B2\u02BB\u02C0\u02C2\u02C7\u02CC";
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


export class StructBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(CanonParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CanonParser.RBRACE, 0); }
	public structMember(): StructMemberContext[];
	public structMember(i: number): StructMemberContext;
	public structMember(i?: number): StructMemberContext | StructMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructMemberContext);
		} else {
			return this.getRuleContext(i, StructMemberContext);
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
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.IDENTIFIER);
		} else {
			return this.getToken(CanonParser.IDENTIFIER, i);
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


