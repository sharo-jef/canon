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
	public static readonly STRING_TYPE = 19;
	public static readonly INT_TYPE = 20;
	public static readonly BOOL_TYPE = 21;
	public static readonly PLUS = 22;
	public static readonly MINUS = 23;
	public static readonly MULTIPLY = 24;
	public static readonly DIVIDE = 25;
	public static readonly MODULO = 26;
	public static readonly EQUALS = 27;
	public static readonly NOT_EQUALS = 28;
	public static readonly LESS_THAN = 29;
	public static readonly GREATER_THAN = 30;
	public static readonly LESS_EQUALS = 31;
	public static readonly GREATER_EQUALS = 32;
	public static readonly ASSIGN = 33;
	public static readonly LOGICAL_AND = 34;
	public static readonly LOGICAL_OR = 35;
	public static readonly LBRACE = 36;
	public static readonly RBRACE = 37;
	public static readonly LPAREN = 38;
	public static readonly RPAREN = 39;
	public static readonly LBRACKET = 40;
	public static readonly RBRACKET = 41;
	public static readonly DOT = 42;
	public static readonly COMMA = 43;
	public static readonly COLON = 44;
	public static readonly SEMICOLON = 45;
	public static readonly QUESTION = 46;
	public static readonly ARROW = 47;
	public static readonly PIPE = 48;
	public static readonly STRING_LITERAL = 49;
	public static readonly DOUBLE_STRING_LITERAL = 50;
	public static readonly TEMPLATE_STRING_START = 51;
	public static readonly INTEGER_LITERAL = 52;
	public static readonly TRUE = 53;
	public static readonly FALSE = 54;
	public static readonly ANNOTATION = 55;
	public static readonly IDENTIFIER = 56;
	public static readonly TEMPLATE_STRING_END = 57;
	public static readonly TEMPLATE_STRING_PART = 58;
	public static readonly TEMPLATE_INTERPOLATION_START = 59;
	public static readonly TEMPLATE_INTERPOLATION_SIMPLE = 60;
	public static readonly INTERPOLATION_END = 61;
	public static readonly INTERPOLATION_WS = 62;
	public static readonly RULE_program = 0;
	public static readonly RULE_schemaDirective = 1;
	public static readonly RULE_useStatement = 2;
	public static readonly RULE_topLevelElement = 3;
	public static readonly RULE_schemaDeclaration = 4;
	public static readonly RULE_structDeclaration = 5;
	public static readonly RULE_unionDeclaration = 6;
	public static readonly RULE_typeDeclaration = 7;
	public static readonly RULE_unionType = 8;
	public static readonly RULE_type = 9;
	public static readonly RULE_baseType = 10;
	public static readonly RULE_primitiveType = 11;
	public static readonly RULE_block = 12;
	public static readonly RULE_blockContent = 13;
	public static readonly RULE_propertyDeclaration = 14;
	public static readonly RULE_assignmentStatement = 15;
	public static readonly RULE_initDeclaration = 16;
	public static readonly RULE_functionDeclaration = 17;
	public static readonly RULE_getterDeclaration = 18;
	public static readonly RULE_repeatedDeclaration = 19;
	public static readonly RULE_mappingBlock = 20;
	public static readonly RULE_mappingEntry = 21;
	public static readonly RULE_parameterList = 22;
	public static readonly RULE_parameter = 23;
	public static readonly RULE_callExpression = 24;
	public static readonly RULE_argumentList = 25;
	public static readonly RULE_expressionStatement = 26;
	public static readonly RULE_expression = 27;
	public static readonly RULE_primary = 28;
	public static readonly RULE_literal = 29;
	public static readonly RULE_stringLiteral = 30;
	public static readonly RULE_templateString = 31;
	public static readonly RULE_templateStringContent = 32;
	public static readonly RULE_annotation = 33;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "schemaDirective", "useStatement", "topLevelElement", "schemaDeclaration", 
		"structDeclaration", "unionDeclaration", "typeDeclaration", "unionType", 
		"type", "baseType", "primitiveType", "block", "blockContent", "propertyDeclaration", 
		"assignmentStatement", "initDeclaration", "functionDeclaration", "getterDeclaration", 
		"repeatedDeclaration", "mappingBlock", "mappingEntry", "parameterList", 
		"parameter", "callExpression", "argumentList", "expressionStatement", 
		"expression", "primary", "literal", "stringLiteral", "templateString", 
		"templateStringContent", "annotation",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "'#schema'", undefined, "'schema'", 
		"'struct'", "'union'", "'type'", "'init'", "'private'", "'get'", "'repeated'", 
		"'use'", "'if'", "'else'", "'not'", "'this'", "'string'", "'int'", "'bool'", 
		undefined, undefined, undefined, undefined, "'%'", undefined, undefined, 
		undefined, undefined, undefined, undefined, "'='", undefined, undefined, 
		"'{'", undefined, undefined, undefined, "'['", "']'", undefined, "','", 
		"':'", "';'", "'?'", "'->'", "'|'", undefined, undefined, undefined, undefined, 
		"'true'", "'false'", undefined, undefined, undefined, undefined, "'${'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WS", "LINE_COMMENT", "BLOCK_COMMENT", "SCHEMA_DIRECTIVE", 
		"HASH_COMMENT", "SCHEMA", "STRUCT", "UNION", "TYPE", "INIT", "PRIVATE", 
		"GET", "REPEATED", "USE", "IF", "ELSE", "NOT", "THIS", "STRING_TYPE", 
		"INT_TYPE", "BOOL_TYPE", "PLUS", "MINUS", "MULTIPLY", "DIVIDE", "MODULO", 
		"EQUALS", "NOT_EQUALS", "LESS_THAN", "GREATER_THAN", "LESS_EQUALS", "GREATER_EQUALS", 
		"ASSIGN", "LOGICAL_AND", "LOGICAL_OR", "LBRACE", "RBRACE", "LPAREN", "RPAREN", 
		"LBRACKET", "RBRACKET", "DOT", "COMMA", "COLON", "SEMICOLON", "QUESTION", 
		"ARROW", "PIPE", "STRING_LITERAL", "DOUBLE_STRING_LITERAL", "TEMPLATE_STRING_START", 
		"INTEGER_LITERAL", "TRUE", "FALSE", "ANNOTATION", "IDENTIFIER", "TEMPLATE_STRING_END", 
		"TEMPLATE_STRING_PART", "TEMPLATE_INTERPOLATION_START", "TEMPLATE_INTERPOLATION_SIMPLE", 
		"INTERPOLATION_END", "INTERPOLATION_WS",
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
			this.state = 73;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.SCHEMA_DIRECTIVE) | (1 << CanonParser.SCHEMA) | (1 << CanonParser.STRUCT) | (1 << CanonParser.UNION) | (1 << CanonParser.TYPE) | (1 << CanonParser.USE))) !== 0) || _la === CanonParser.ANNOTATION || _la === CanonParser.IDENTIFIER) {
				{
				this.state = 71;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CanonParser.SCHEMA_DIRECTIVE:
					{
					this.state = 68;
					this.schemaDirective();
					}
					break;
				case CanonParser.USE:
					{
					this.state = 69;
					this.useStatement();
					}
					break;
				case CanonParser.SCHEMA:
				case CanonParser.STRUCT:
				case CanonParser.UNION:
				case CanonParser.TYPE:
				case CanonParser.ANNOTATION:
				case CanonParser.IDENTIFIER:
					{
					this.state = 70;
					this.topLevelElement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 75;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 76;
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
			this.state = 78;
			this.match(CanonParser.SCHEMA_DIRECTIVE);
			this.state = 79;
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
			this.state = 81;
			this.match(CanonParser.USE);
			this.state = 82;
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
	public topLevelElement(): TopLevelElementContext {
		let _localctx: TopLevelElementContext = new TopLevelElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CanonParser.RULE_topLevelElement);
		try {
			this.state = 89;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 84;
				this.schemaDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 85;
				this.structDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 86;
				this.unionDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 87;
				this.typeDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 88;
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
		this.enterRule(_localctx, 8, CanonParser.RULE_schemaDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 91;
				this.annotation();
				}
				}
				this.state = 96;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 97;
			this.match(CanonParser.SCHEMA);
			this.state = 100;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.LBRACE:
				{
				this.state = 98;
				this.block();
				}
				break;
			case CanonParser.STRING_LITERAL:
			case CanonParser.DOUBLE_STRING_LITERAL:
			case CanonParser.TEMPLATE_STRING_START:
				{
				this.state = 99;
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
		this.enterRule(_localctx, 10, CanonParser.RULE_structDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 102;
				this.annotation();
				}
				}
				this.state = 107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 108;
			this.match(CanonParser.STRUCT);
			this.state = 109;
			this.match(CanonParser.IDENTIFIER);
			this.state = 110;
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
		this.enterRule(_localctx, 12, CanonParser.RULE_unionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 112;
				this.annotation();
				}
				}
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 118;
			this.match(CanonParser.UNION);
			this.state = 119;
			this.match(CanonParser.IDENTIFIER);
			this.state = 120;
			this.match(CanonParser.ASSIGN);
			this.state = 121;
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
		this.enterRule(_localctx, 14, CanonParser.RULE_typeDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 123;
				this.annotation();
				}
				}
				this.state = 128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 129;
			this.match(CanonParser.TYPE);
			this.state = 130;
			this.match(CanonParser.IDENTIFIER);
			this.state = 131;
			this.match(CanonParser.ASSIGN);
			this.state = 132;
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
	public unionType(): UnionTypeContext {
		let _localctx: UnionTypeContext = new UnionTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CanonParser.RULE_unionType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.type();
			this.state = 139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.PIPE) {
				{
				{
				this.state = 135;
				this.match(CanonParser.PIPE);
				this.state = 136;
				this.type();
				}
				}
				this.state = 141;
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
		this.enterRule(_localctx, 18, CanonParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			this.baseType();
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.LBRACKET) {
				{
				{
				this.state = 143;
				this.match(CanonParser.LBRACKET);
				this.state = 144;
				this.match(CanonParser.RBRACKET);
				}
				}
				this.state = 149;
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
		this.enterRule(_localctx, 20, CanonParser.RULE_baseType);
		try {
			this.state = 152;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.STRING_TYPE:
			case CanonParser.INT_TYPE:
			case CanonParser.BOOL_TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 150;
				this.primitiveType();
				}
				break;
			case CanonParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 151;
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
		this.enterRule(_localctx, 22, CanonParser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
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
		this.enterRule(_localctx, 24, CanonParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this.match(CanonParser.LBRACE);
			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.INIT) | (1 << CanonParser.PRIVATE) | (1 << CanonParser.GET) | (1 << CanonParser.REPEATED) | (1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (CanonParser.LPAREN - 38)) | (1 << (CanonParser.STRING_LITERAL - 38)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 38)) | (1 << (CanonParser.TEMPLATE_STRING_START - 38)) | (1 << (CanonParser.INTEGER_LITERAL - 38)) | (1 << (CanonParser.TRUE - 38)) | (1 << (CanonParser.FALSE - 38)) | (1 << (CanonParser.ANNOTATION - 38)) | (1 << (CanonParser.IDENTIFIER - 38)))) !== 0)) {
				{
				{
				this.state = 157;
				this.blockContent();
				}
				}
				this.state = 162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 163;
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
	public blockContent(): BlockContentContext {
		let _localctx: BlockContentContext = new BlockContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CanonParser.RULE_blockContent);
		try {
			this.state = 172;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 165;
				this.assignmentStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 166;
				this.expressionStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 167;
				this.propertyDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 168;
				this.initDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 169;
				this.functionDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 170;
				this.getterDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 171;
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
	public propertyDeclaration(): PropertyDeclarationContext {
		let _localctx: PropertyDeclarationContext = new PropertyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CanonParser.RULE_propertyDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 177;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 174;
				this.annotation();
				}
				}
				this.state = 179;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 181;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.PRIVATE) {
				{
				this.state = 180;
				this.match(CanonParser.PRIVATE);
				}
			}

			this.state = 183;
			this.match(CanonParser.IDENTIFIER);
			this.state = 193;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON || _la === CanonParser.QUESTION) {
				{
				this.state = 185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.QUESTION) {
					{
					this.state = 184;
					this.match(CanonParser.QUESTION);
					}
				}

				this.state = 187;
				this.match(CanonParser.COLON);
				this.state = 188;
				this.type();
				this.state = 191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.ASSIGN) {
					{
					this.state = 189;
					this.match(CanonParser.ASSIGN);
					this.state = 190;
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
		this.enterRule(_localctx, 30, CanonParser.RULE_assignmentStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.THIS) {
				{
				this.state = 195;
				this.match(CanonParser.THIS);
				this.state = 196;
				this.match(CanonParser.DOT);
				}
			}

			this.state = 199;
			this.match(CanonParser.IDENTIFIER);
			this.state = 200;
			this.match(CanonParser.ASSIGN);
			this.state = 201;
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
		this.enterRule(_localctx, 32, CanonParser.RULE_initDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 203;
				this.annotation();
				}
				}
				this.state = 208;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 209;
			this.match(CanonParser.INIT);
			this.state = 215;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.LPAREN) {
				{
				this.state = 210;
				this.match(CanonParser.LPAREN);
				this.state = 212;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.THIS || _la === CanonParser.IDENTIFIER) {
					{
					this.state = 211;
					this.parameterList();
					}
				}

				this.state = 214;
				this.match(CanonParser.RPAREN);
				}
			}

			this.state = 217;
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
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CanonParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 219;
				this.annotation();
				}
				}
				this.state = 224;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 226;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.PRIVATE) {
				{
				this.state = 225;
				this.match(CanonParser.PRIVATE);
				}
			}

			this.state = 228;
			this.match(CanonParser.IDENTIFIER);
			this.state = 229;
			this.match(CanonParser.LPAREN);
			this.state = 231;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.THIS || _la === CanonParser.IDENTIFIER) {
				{
				this.state = 230;
				this.parameterList();
				}
			}

			this.state = 233;
			this.match(CanonParser.RPAREN);
			this.state = 234;
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
		this.enterRule(_localctx, 36, CanonParser.RULE_getterDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 239;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 236;
				this.annotation();
				}
				}
				this.state = 241;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 242;
			this.match(CanonParser.GET);
			this.state = 243;
			this.match(CanonParser.IDENTIFIER);
			this.state = 244;
			this.match(CanonParser.LPAREN);
			this.state = 245;
			this.match(CanonParser.RPAREN);
			this.state = 246;
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
		this.enterRule(_localctx, 38, CanonParser.RULE_repeatedDeclaration);
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
			this.state = 254;
			this.match(CanonParser.REPEATED);
			this.state = 255;
			this.match(CanonParser.IDENTIFIER);
			this.state = 256;
			this.match(CanonParser.COLON);
			this.state = 257;
			this.type();
			this.state = 259;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.LBRACE) {
				{
				this.state = 258;
				this.mappingBlock();
				}
			}

			this.state = 263;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.ASSIGN) {
				{
				this.state = 261;
				this.match(CanonParser.ASSIGN);
				this.state = 262;
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
		this.enterRule(_localctx, 40, CanonParser.RULE_mappingBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 265;
			this.match(CanonParser.LBRACE);
			this.state = 269;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.IDENTIFIER) {
				{
				{
				this.state = 266;
				this.mappingEntry();
				}
				}
				this.state = 271;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 272;
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
		this.enterRule(_localctx, 42, CanonParser.RULE_mappingEntry);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 274;
			this.match(CanonParser.IDENTIFIER);
			this.state = 275;
			this.match(CanonParser.ARROW);
			this.state = 276;
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
		this.enterRule(_localctx, 44, CanonParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 278;
			this.parameter();
			this.state = 283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.COMMA) {
				{
				{
				this.state = 279;
				this.match(CanonParser.COMMA);
				this.state = 280;
				this.parameter();
				}
				}
				this.state = 285;
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
		this.enterRule(_localctx, 46, CanonParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 288;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.THIS) {
				{
				this.state = 286;
				this.match(CanonParser.THIS);
				this.state = 287;
				this.match(CanonParser.DOT);
				}
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
		this.enterRule(_localctx, 48, CanonParser.RULE_callExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			this.match(CanonParser.IDENTIFIER);
			this.state = 301;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 296;
				this.match(CanonParser.LPAREN);
				this.state = 298;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (CanonParser.LPAREN - 38)) | (1 << (CanonParser.STRING_LITERAL - 38)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 38)) | (1 << (CanonParser.TEMPLATE_STRING_START - 38)) | (1 << (CanonParser.INTEGER_LITERAL - 38)) | (1 << (CanonParser.TRUE - 38)) | (1 << (CanonParser.FALSE - 38)) | (1 << (CanonParser.IDENTIFIER - 38)))) !== 0)) {
					{
					this.state = 297;
					this.argumentList();
					}
				}

				this.state = 300;
				this.match(CanonParser.RPAREN);
				}
				break;
			}
			this.state = 304;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 303;
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
		this.enterRule(_localctx, 50, CanonParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 306;
			this.expression(0);
			this.state = 311;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.COMMA) {
				{
				{
				this.state = 307;
				this.match(CanonParser.COMMA);
				this.state = 308;
				this.expression(0);
				}
				}
				this.state = 313;
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
		this.enterRule(_localctx, 52, CanonParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 314;
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
		let _startState: number = 54;
		this.enterRecursionRule(_localctx, 54, CanonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 322;
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

				this.state = 317;
				this.primary();
				}
				break;
			case CanonParser.MINUS:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 318;
				this.match(CanonParser.MINUS);
				this.state = 319;
				this.expression(8);
				}
				break;
			case CanonParser.NOT:
				{
				_localctx = new LogicalNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 320;
				this.match(CanonParser.NOT);
				this.state = 321;
				this.expression(7);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 353;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 351;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 324;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 325;
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
						this.state = 326;
						this.expression(7);
						}
						break;

					case 2:
						{
						_localctx = new AdditiveExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 327;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 328;
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
						this.state = 329;
						this.expression(6);
						}
						break;

					case 3:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 330;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 331;
						_la = this._input.LA(1);
						if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (CanonParser.LESS_THAN - 29)) | (1 << (CanonParser.GREATER_THAN - 29)) | (1 << (CanonParser.LESS_EQUALS - 29)) | (1 << (CanonParser.GREATER_EQUALS - 29)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 332;
						this.expression(5);
						}
						break;

					case 4:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 333;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 334;
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
						this.state = 335;
						this.expression(4);
						}
						break;

					case 5:
						{
						_localctx = new LogicalAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 336;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 337;
						this.match(CanonParser.LOGICAL_AND);
						this.state = 338;
						this.expression(3);
						}
						break;

					case 6:
						{
						_localctx = new LogicalOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 339;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 340;
						this.match(CanonParser.LOGICAL_OR);
						this.state = 341;
						this.expression(2);
						}
						break;

					case 7:
						{
						_localctx = new MemberAccessExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 342;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 343;
						this.match(CanonParser.DOT);
						this.state = 344;
						this.match(CanonParser.IDENTIFIER);
						}
						break;

					case 8:
						{
						_localctx = new FunctionCallExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 345;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 346;
						this.match(CanonParser.LPAREN);
						this.state = 348;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (CanonParser.LPAREN - 38)) | (1 << (CanonParser.STRING_LITERAL - 38)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 38)) | (1 << (CanonParser.TEMPLATE_STRING_START - 38)) | (1 << (CanonParser.INTEGER_LITERAL - 38)) | (1 << (CanonParser.TRUE - 38)) | (1 << (CanonParser.FALSE - 38)) | (1 << (CanonParser.IDENTIFIER - 38)))) !== 0)) {
							{
							this.state = 347;
							this.argumentList();
							}
						}

						this.state = 350;
						this.match(CanonParser.RPAREN);
						}
						break;
					}
					}
				}
				this.state = 355;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
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
		this.enterRule(_localctx, 56, CanonParser.RULE_primary);
		try {
			this.state = 379;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				_localctx = new LiteralExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 356;
				this.literal();
				}
				break;

			case 2:
				_localctx = new IdentifierExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 357;
				this.match(CanonParser.IDENTIFIER);
				}
				break;

			case 3:
				_localctx = new ThisExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 358;
				this.match(CanonParser.THIS);
				}
				break;

			case 4:
				_localctx = new IfExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 359;
				this.match(CanonParser.IF);
				this.state = 360;
				this.match(CanonParser.LPAREN);
				this.state = 361;
				this.expression(0);
				this.state = 362;
				this.match(CanonParser.RPAREN);
				this.state = 365;
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
					this.state = 363;
					this.expression(0);
					}
					break;
				case CanonParser.LBRACE:
					{
					this.state = 364;
					this.block();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 372;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
				case 1:
					{
					this.state = 367;
					this.match(CanonParser.ELSE);
					this.state = 370;
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
						this.state = 368;
						this.expression(0);
						}
						break;
					case CanonParser.LBRACE:
						{
						this.state = 369;
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
				this.state = 374;
				this.match(CanonParser.LPAREN);
				this.state = 375;
				this.expression(0);
				this.state = 376;
				this.match(CanonParser.RPAREN);
				}
				break;

			case 6:
				_localctx = new CallExpressionPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 378;
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
		this.enterRule(_localctx, 58, CanonParser.RULE_literal);
		try {
			this.state = 385;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.STRING_LITERAL:
			case CanonParser.DOUBLE_STRING_LITERAL:
			case CanonParser.TEMPLATE_STRING_START:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 381;
				this.stringLiteral();
				}
				break;
			case CanonParser.INTEGER_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 382;
				this.match(CanonParser.INTEGER_LITERAL);
				}
				break;
			case CanonParser.TRUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 383;
				this.match(CanonParser.TRUE);
				}
				break;
			case CanonParser.FALSE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 384;
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
		this.enterRule(_localctx, 60, CanonParser.RULE_stringLiteral);
		try {
			this.state = 390;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 387;
				this.match(CanonParser.STRING_LITERAL);
				}
				break;
			case CanonParser.DOUBLE_STRING_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 388;
				this.match(CanonParser.DOUBLE_STRING_LITERAL);
				}
				break;
			case CanonParser.TEMPLATE_STRING_START:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 389;
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
		this.enterRule(_localctx, 62, CanonParser.RULE_templateString);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 392;
			this.match(CanonParser.TEMPLATE_STRING_START);
			this.state = 396;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (CanonParser.TEMPLATE_STRING_PART - 58)) | (1 << (CanonParser.TEMPLATE_INTERPOLATION_START - 58)) | (1 << (CanonParser.TEMPLATE_INTERPOLATION_SIMPLE - 58)))) !== 0)) {
				{
				{
				this.state = 393;
				this.templateStringContent();
				}
				}
				this.state = 398;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 399;
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
		this.enterRule(_localctx, 64, CanonParser.RULE_templateStringContent);
		try {
			this.state = 407;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.TEMPLATE_STRING_PART:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 401;
				this.match(CanonParser.TEMPLATE_STRING_PART);
				}
				break;
			case CanonParser.TEMPLATE_INTERPOLATION_SIMPLE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 402;
				this.match(CanonParser.TEMPLATE_INTERPOLATION_SIMPLE);
				}
				break;
			case CanonParser.TEMPLATE_INTERPOLATION_START:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 403;
				this.match(CanonParser.TEMPLATE_INTERPOLATION_START);
				this.state = 404;
				this.expression(0);
				this.state = 405;
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
		this.enterRule(_localctx, 66, CanonParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 409;
			this.match(CanonParser.ANNOTATION);
			this.state = 416;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.LPAREN:
				{
				this.state = 410;
				this.match(CanonParser.LPAREN);
				this.state = 412;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (CanonParser.LPAREN - 38)) | (1 << (CanonParser.STRING_LITERAL - 38)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 38)) | (1 << (CanonParser.TEMPLATE_STRING_START - 38)) | (1 << (CanonParser.INTEGER_LITERAL - 38)) | (1 << (CanonParser.TRUE - 38)) | (1 << (CanonParser.FALSE - 38)) | (1 << (CanonParser.IDENTIFIER - 38)))) !== 0)) {
					{
					this.state = 411;
					this.argumentList();
					}
				}

				this.state = 414;
				this.match(CanonParser.RPAREN);
				}
				break;
			case CanonParser.STRING_LITERAL:
			case CanonParser.DOUBLE_STRING_LITERAL:
			case CanonParser.TEMPLATE_STRING_START:
				{
				this.state = 415;
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
		case 27:
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
			return this.precpred(this._ctx, 10);

		case 7:
			return this.precpred(this._ctx, 9);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03@\u01A5\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x03\x02\x03\x02\x03\x02\x07\x02J\n\x02\f\x02\x0E\x02M\v\x02\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x05\x05\\\n\x05\x03\x06\x07\x06_\n\x06\f\x06" +
		"\x0E\x06b\v\x06\x03\x06\x03\x06\x03\x06\x05\x06g\n\x06\x03\x07\x07\x07" +
		"j\n\x07\f\x07\x0E\x07m\v\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x07" +
		"\bt\n\b\f\b\x0E\bw\v\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x07\t\x7F\n" +
		"\t\f\t\x0E\t\x82\v\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x07" +
		"\n\x8C\n\n\f\n\x0E\n\x8F\v\n\x03\v\x03\v\x03\v\x07\v\x94\n\v\f\v\x0E\v" +
		"\x97\v\v\x03\f\x03\f\x05\f\x9B\n\f\x03\r\x03\r\x03\x0E\x03\x0E\x07\x0E" +
		"\xA1\n\x0E\f\x0E\x0E\x0E\xA4\v\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xAF\n\x0F\x03\x10\x07\x10" +
		"\xB2\n\x10\f\x10\x0E\x10\xB5\v\x10\x03\x10\x05\x10\xB8\n\x10\x03\x10\x03" +
		"\x10\x05\x10\xBC\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xC2\n\x10" +
		"\x05\x10\xC4\n\x10\x03\x11\x03\x11\x05\x11\xC8\n\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x12\x07\x12\xCF\n\x12\f\x12\x0E\x12\xD2\v\x12\x03\x12" +
		"\x03\x12\x03\x12\x05\x12\xD7\n\x12\x03\x12\x05\x12\xDA\n\x12\x03\x12\x03" +
		"\x12\x03\x13\x07\x13\xDF\n\x13\f\x13\x0E\x13\xE2\v\x13\x03\x13\x05\x13" +
		"\xE5\n\x13\x03\x13\x03\x13\x03\x13\x05\x13\xEA\n\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x14\x07\x14\xF0\n\x14\f\x14\x0E\x14\xF3\v\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x07\x15\xFC\n\x15\f\x15\x0E\x15" +
		"\xFF\v\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0106\n\x15" +
		"\x03\x15\x03\x15\x05\x15\u010A\n\x15\x03\x16\x03\x16\x07\x16\u010E\n\x16" +
		"\f\x16\x0E\x16\u0111\v\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x18\x03\x18\x03\x18\x07\x18\u011C\n\x18\f\x18\x0E\x18\u011F\v" +
		"\x18\x03\x19\x03\x19\x05\x19\u0123\n\x19\x03\x19\x03\x19\x03\x19\x05\x19" +
		"\u0128\n\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u012D\n\x1A\x03\x1A\x05\x1A" +
		"\u0130\n\x1A\x03\x1A\x05\x1A\u0133\n\x1A\x03\x1B\x03\x1B\x03\x1B\x07\x1B" +
		"\u0138\n\x1B\f\x1B\x0E\x1B\u013B\v\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0145\n\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u015F\n\x1D\x03\x1D\x07\x1D\u0162" +
		"\n\x1D\f\x1D\x0E\x1D\u0165\v\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0170\n\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x05\x1E\u0175\n\x1E\x05\x1E\u0177\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x05\x1E\u017E\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F" +
		"\u0184\n\x1F\x03 \x03 \x03 \x05 \u0189\n \x03!\x03!\x07!\u018D\n!\f!\x0E" +
		"!\u0190\v!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u019A\n" +
		"\"\x03#\x03#\x03#\x05#\u019F\n#\x03#\x03#\x05#\u01A3\n#\x03#\x02\x02\x03" +
		"8$\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
		"\x02\x07\x03\x02\x15\x17\x03\x02\x1A\x1C\x03\x02\x18\x19\x03\x02\x1F\"" +
		"\x03\x02\x1D\x1E\x02\u01CE\x02K\x03\x02\x02\x02\x04P\x03\x02\x02\x02\x06" +
		"S\x03\x02\x02\x02\b[\x03\x02\x02\x02\n`\x03\x02\x02\x02\fk\x03\x02\x02" +
		"\x02\x0Eu\x03\x02\x02\x02\x10\x80\x03\x02\x02\x02\x12\x88\x03\x02\x02" +
		"\x02\x14\x90\x03\x02\x02\x02\x16\x9A\x03\x02\x02\x02\x18\x9C\x03\x02\x02" +
		"\x02\x1A\x9E\x03\x02\x02\x02\x1C\xAE\x03\x02\x02\x02\x1E\xB3\x03\x02\x02" +
		"\x02 \xC7\x03\x02\x02\x02\"\xD0\x03\x02\x02\x02$\xE0\x03\x02\x02\x02&" +
		"\xF1\x03\x02\x02\x02(\xFD\x03\x02\x02\x02*\u010B\x03\x02\x02\x02,\u0114" +
		"\x03\x02\x02\x02.\u0118\x03\x02\x02\x020\u0122\x03\x02\x02\x022\u0129" +
		"\x03\x02\x02\x024\u0134\x03\x02\x02\x026\u013C\x03\x02\x02\x028\u0144" +
		"\x03\x02\x02\x02:\u017D\x03\x02\x02\x02<\u0183\x03\x02\x02\x02>\u0188" +
		"\x03\x02\x02\x02@\u018A\x03\x02\x02\x02B\u0199\x03\x02\x02\x02D\u019B" +
		"\x03\x02\x02\x02FJ\x05\x04\x03\x02GJ\x05\x06\x04\x02HJ\x05\b\x05\x02I" +
		"F\x03\x02\x02\x02IG\x03\x02\x02\x02IH\x03\x02\x02\x02JM\x03\x02\x02\x02" +
		"KI\x03\x02\x02\x02KL\x03\x02\x02\x02LN\x03\x02\x02\x02MK\x03\x02\x02\x02" +
		"NO\x07\x02\x02\x03O\x03\x03\x02\x02\x02PQ\x07\x06\x02\x02QR\x05> \x02" +
		"R\x05\x03\x02\x02\x02ST\x07\x10\x02\x02TU\x07:\x02\x02U\x07\x03\x02\x02" +
		"\x02V\\\x05\n\x06\x02W\\\x05\f\x07\x02X\\\x05\x0E\b\x02Y\\\x05\x10\t\x02" +
		"Z\\\x052\x1A\x02[V\x03\x02\x02\x02[W\x03\x02\x02\x02[X\x03\x02\x02\x02" +
		"[Y\x03\x02\x02\x02[Z\x03\x02\x02\x02\\\t\x03\x02\x02\x02]_\x05D#\x02^" +
		"]\x03\x02\x02\x02_b\x03\x02\x02\x02`^\x03\x02\x02\x02`a\x03\x02\x02\x02" +
		"ac\x03\x02\x02\x02b`\x03\x02\x02\x02cf\x07\b\x02\x02dg\x05\x1A\x0E\x02" +
		"eg\x05> \x02fd\x03\x02\x02\x02fe\x03\x02\x02\x02g\v\x03\x02\x02\x02hj" +
		"\x05D#\x02ih\x03\x02\x02\x02jm\x03\x02\x02\x02ki\x03\x02\x02\x02kl\x03" +
		"\x02\x02\x02ln\x03\x02\x02\x02mk\x03\x02\x02\x02no\x07\t\x02\x02op\x07" +
		":\x02\x02pq\x05\x1A\x0E\x02q\r\x03\x02\x02\x02rt\x05D#\x02sr\x03\x02\x02" +
		"\x02tw\x03\x02\x02\x02us\x03\x02\x02\x02uv\x03\x02\x02\x02vx\x03\x02\x02" +
		"\x02wu\x03\x02\x02\x02xy\x07\n\x02\x02yz\x07:\x02\x02z{\x07#\x02\x02{" +
		"|\x05\x12\n\x02|\x0F\x03\x02\x02\x02}\x7F\x05D#\x02~}\x03\x02\x02\x02" +
		"\x7F\x82\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02" +
		"\x81\x83\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02\x83\x84\x07\v\x02\x02" +
		"\x84\x85\x07:\x02\x02\x85\x86\x07#\x02\x02\x86\x87\x05\x14\v\x02\x87\x11" +
		"\x03\x02\x02\x02\x88\x8D\x05\x14\v\x02\x89\x8A\x072\x02\x02\x8A\x8C\x05" +
		"\x14\v\x02\x8B\x89\x03\x02\x02\x02\x8C\x8F\x03\x02\x02\x02\x8D\x8B\x03" +
		"\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x13\x03\x02\x02\x02\x8F\x8D\x03" +
		"\x02\x02\x02\x90\x95\x05\x16\f\x02\x91\x92\x07*\x02\x02\x92\x94\x07+\x02" +
		"\x02\x93\x91\x03\x02\x02\x02\x94\x97\x03\x02\x02\x02\x95\x93\x03\x02\x02" +
		"\x02\x95\x96\x03\x02\x02\x02\x96\x15\x03\x02\x02\x02\x97\x95\x03\x02\x02" +
		"\x02\x98\x9B\x05\x18\r\x02\x99\x9B\x07:\x02\x02\x9A\x98\x03\x02\x02\x02" +
		"\x9A\x99\x03\x02\x02\x02\x9B\x17\x03\x02\x02\x02\x9C\x9D\t\x02\x02\x02" +
		"\x9D\x19\x03\x02\x02\x02\x9E\xA2\x07&\x02\x02\x9F\xA1\x05\x1C\x0F\x02" +
		"\xA0\x9F\x03\x02\x02\x02\xA1\xA4\x03\x02\x02\x02\xA2\xA0\x03\x02\x02\x02" +
		"\xA2\xA3\x03\x02\x02\x02\xA3\xA5\x03\x02\x02\x02\xA4\xA2\x03\x02\x02\x02" +
		"\xA5\xA6\x07\'\x02\x02\xA6\x1B\x03\x02\x02\x02\xA7\xAF\x05 \x11\x02\xA8" +
		"\xAF\x056\x1C\x02\xA9\xAF\x05\x1E\x10\x02\xAA\xAF\x05\"\x12\x02\xAB\xAF" +
		"\x05$\x13\x02\xAC\xAF\x05&\x14\x02\xAD\xAF\x05(\x15\x02\xAE\xA7\x03\x02" +
		"\x02\x02\xAE\xA8\x03\x02\x02\x02\xAE\xA9\x03\x02\x02\x02\xAE\xAA\x03\x02" +
		"\x02\x02\xAE\xAB\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAD\x03\x02" +
		"\x02\x02\xAF\x1D\x03\x02\x02\x02\xB0\xB2\x05D#\x02\xB1\xB0\x03\x02\x02" +
		"\x02\xB2\xB5\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB3\xB4\x03\x02\x02" +
		"\x02\xB4\xB7\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB6\xB8\x07\r\x02" +
		"\x02\xB7\xB6\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xB9\x03\x02\x02" +
		"\x02\xB9\xC3\x07:\x02\x02\xBA\xBC\x070\x02\x02\xBB\xBA\x03\x02\x02\x02" +
		"\xBB\xBC\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBE\x07.\x02\x02" +
		"\xBE\xC1\x05\x14\v\x02\xBF\xC0\x07#\x02\x02\xC0\xC2\x058\x1D\x02\xC1\xBF" +
		"\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC4\x03\x02\x02\x02\xC3\xBB" +
		"\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\x1F\x03\x02\x02\x02\xC5\xC6" +
		"\x07\x14\x02\x02\xC6\xC8\x07,\x02\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC8" +
		"\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCA\x07:\x02\x02\xCA\xCB" +
		"\x07#\x02\x02\xCB\xCC\x058\x1D\x02\xCC!\x03\x02\x02\x02\xCD\xCF\x05D#" +
		"\x02\xCE\xCD\x03\x02\x02\x02\xCF\xD2\x03\x02\x02\x02\xD0\xCE\x03\x02\x02" +
		"\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD3\x03\x02\x02\x02\xD2\xD0\x03\x02\x02" +
		"\x02\xD3\xD9\x07\f\x02\x02\xD4\xD6\x07(\x02\x02\xD5\xD7\x05.\x18\x02\xD6" +
		"\xD5\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8" +
		"\xDA\x07)\x02\x02\xD9\xD4\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA" +
		"\xDB\x03\x02\x02\x02\xDB\xDC\x05\x1A\x0E\x02\xDC#\x03\x02\x02\x02\xDD" +
		"\xDF\x05D#\x02\xDE\xDD\x03\x02\x02\x02\xDF\xE2\x03\x02\x02\x02\xE0\xDE" +
		"\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\xE4\x03\x02\x02\x02\xE2\xE0" +
		"\x03\x02\x02\x02\xE3\xE5\x07\r\x02\x02\xE4\xE3\x03\x02\x02\x02\xE4\xE5" +
		"\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE7\x07:\x02\x02\xE7\xE9" +
		"\x07(\x02\x02\xE8\xEA\x05.\x18\x02\xE9\xE8\x03\x02\x02\x02\xE9\xEA\x03" +
		"\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xEC\x07)\x02\x02\xEC\xED\x05" +
		"\x1A\x0E\x02\xED%\x03\x02\x02\x02\xEE\xF0\x05D#\x02\xEF\xEE\x03\x02\x02" +
		"\x02\xF0\xF3\x03\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF1\xF2\x03\x02\x02" +
		"\x02\xF2\xF4\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF4\xF5\x07\x0E\x02" +
		"\x02\xF5\xF6\x07:\x02\x02\xF6\xF7\x07(\x02\x02\xF7\xF8\x07)\x02\x02\xF8" +
		"\xF9\x05\x1A\x0E\x02\xF9\'\x03\x02\x02\x02\xFA\xFC\x05D#\x02\xFB\xFA\x03" +
		"\x02\x02\x02\xFC\xFF\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFD\xFE\x03" +
		"\x02\x02\x02\xFE\u0100\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\u0100\u0101" +
		"\x07\x0F\x02\x02\u0101\u0102\x07:\x02\x02\u0102\u0103\x07.\x02\x02\u0103" +
		"\u0105\x05\x14\v\x02\u0104\u0106\x05*\x16\x02\u0105\u0104\x03\x02\x02" +
		"\x02\u0105\u0106\x03\x02\x02\x02\u0106\u0109\x03\x02\x02\x02\u0107\u0108" +
		"\x07#\x02\x02\u0108\u010A\x058\x1D\x02\u0109\u0107\x03\x02\x02\x02\u0109" +
		"\u010A\x03\x02\x02\x02\u010A)\x03\x02\x02\x02\u010B\u010F\x07&\x02\x02" +
		"\u010C\u010E\x05,\x17\x02\u010D\u010C\x03\x02\x02\x02\u010E\u0111\x03" +
		"\x02\x02\x02\u010F\u010D\x03\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110" +
		"\u0112\x03\x02\x02\x02\u0111\u010F\x03\x02\x02\x02\u0112\u0113\x07\'\x02" +
		"\x02\u0113+\x03\x02\x02\x02\u0114\u0115\x07:\x02\x02\u0115\u0116\x071" +
		"\x02\x02\u0116\u0117\x07:\x02\x02\u0117-\x03\x02\x02\x02\u0118\u011D\x05" +
		"0\x19\x02\u0119\u011A\x07-\x02\x02\u011A\u011C\x050\x19\x02\u011B\u0119" +
		"\x03\x02\x02\x02\u011C\u011F\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02" +
		"\u011D\u011E\x03\x02\x02\x02\u011E/\x03\x02\x02\x02\u011F\u011D\x03\x02" +
		"\x02\x02\u0120\u0121\x07\x14\x02\x02\u0121\u0123\x07,\x02\x02\u0122\u0120" +
		"\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02" +
		"\u0124\u0127\x07:\x02\x02\u0125\u0126\x07.\x02\x02\u0126\u0128\x05\x14" +
		"\v\x02\u0127\u0125\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u01281" +
		"\x03\x02\x02\x02\u0129\u012F\x07:\x02\x02\u012A\u012C\x07(\x02\x02\u012B" +
		"\u012D\x054\x1B\x02\u012C\u012B\x03\x02\x02\x02\u012C\u012D\x03\x02\x02" +
		"\x02\u012D\u012E\x03\x02\x02\x02\u012E\u0130\x07)\x02\x02\u012F\u012A" +
		"\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130\u0132\x03\x02\x02\x02" +
		"\u0131\u0133\x05\x1A\x0E\x02\u0132\u0131\x03\x02\x02\x02\u0132\u0133\x03" +
		"\x02\x02\x02\u01333\x03\x02\x02\x02\u0134\u0139\x058\x1D\x02\u0135\u0136" +
		"\x07-\x02\x02\u0136\u0138\x058\x1D\x02\u0137\u0135\x03\x02\x02\x02\u0138" +
		"\u013B\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u0139\u013A\x03\x02" +
		"\x02\x02\u013A5\x03\x02\x02\x02\u013B\u0139\x03\x02\x02\x02\u013C\u013D" +
		"\x058\x1D\x02\u013D7\x03\x02\x02\x02\u013E\u013F\b\x1D\x01\x02\u013F\u0145" +
		"\x05:\x1E\x02\u0140\u0141\x07\x19\x02\x02\u0141\u0145\x058\x1D\n\u0142" +
		"\u0143\x07\x13\x02\x02\u0143\u0145\x058\x1D\t\u0144\u013E\x03\x02\x02" +
		"\x02\u0144\u0140\x03\x02\x02\x02\u0144\u0142\x03\x02\x02\x02\u0145\u0163" +
		"\x03\x02\x02\x02\u0146\u0147\f\b\x02\x02\u0147\u0148\t\x03\x02\x02\u0148" +
		"\u0162\x058\x1D\t\u0149\u014A\f\x07\x02\x02\u014A\u014B\t\x04\x02\x02" +
		"\u014B\u0162\x058\x1D\b\u014C\u014D\f\x06\x02\x02\u014D\u014E\t\x05\x02" +
		"\x02\u014E\u0162\x058\x1D\x07\u014F\u0150\f\x05\x02\x02\u0150\u0151\t" +
		"\x06\x02\x02\u0151\u0162\x058\x1D\x06\u0152\u0153\f\x04\x02\x02\u0153" +
		"\u0154\x07$\x02\x02\u0154\u0162\x058\x1D\x05\u0155\u0156\f\x03\x02\x02" +
		"\u0156\u0157\x07%\x02\x02\u0157\u0162\x058\x1D\x04\u0158\u0159\f\f\x02" +
		"\x02\u0159\u015A\x07,\x02\x02\u015A\u0162\x07:\x02\x02\u015B\u015C\f\v" +
		"\x02\x02\u015C\u015E\x07(\x02\x02\u015D\u015F\x054\x1B\x02\u015E\u015D" +
		"\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02" +
		"\u0160\u0162\x07)\x02\x02\u0161\u0146\x03\x02\x02\x02\u0161\u0149\x03" +
		"\x02\x02\x02\u0161\u014C\x03\x02\x02\x02\u0161\u014F\x03\x02\x02\x02\u0161" +
		"\u0152\x03\x02\x02\x02\u0161\u0155\x03\x02\x02\x02\u0161\u0158\x03\x02" +
		"\x02\x02\u0161\u015B\x03\x02\x02\x02\u0162\u0165\x03\x02\x02\x02\u0163" +
		"\u0161\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u01649\x03\x02\x02" +
		"\x02\u0165\u0163\x03\x02\x02\x02\u0166\u017E\x05<\x1F\x02\u0167\u017E" +
		"\x07:\x02\x02\u0168\u017E\x07\x14\x02\x02\u0169\u016A\x07\x11\x02\x02" +
		"\u016A\u016B\x07(\x02\x02\u016B\u016C\x058\x1D\x02\u016C\u016F\x07)\x02" +
		"\x02\u016D\u0170\x058\x1D\x02\u016E\u0170\x05\x1A\x0E\x02\u016F\u016D" +
		"\x03\x02\x02\x02\u016F\u016E\x03\x02\x02\x02\u0170\u0176\x03\x02\x02\x02" +
		"\u0171\u0174\x07\x12\x02\x02\u0172\u0175\x058\x1D\x02\u0173\u0175\x05" +
		"\x1A\x0E\x02\u0174\u0172\x03\x02\x02\x02\u0174\u0173\x03\x02\x02\x02\u0175" +
		"\u0177\x03\x02\x02\x02\u0176\u0171\x03\x02\x02\x02\u0176\u0177\x03\x02" +
		"\x02\x02\u0177\u017E\x03\x02\x02\x02\u0178\u0179\x07(\x02\x02\u0179\u017A" +
		"\x058\x1D\x02\u017A\u017B\x07)\x02\x02\u017B\u017E\x03\x02\x02\x02\u017C" +
		"\u017E\x052\x1A\x02\u017D\u0166\x03\x02\x02\x02\u017D\u0167\x03\x02\x02" +
		"\x02\u017D\u0168\x03\x02\x02\x02\u017D\u0169\x03\x02\x02\x02\u017D\u0178" +
		"\x03\x02\x02\x02\u017D\u017C\x03\x02\x02\x02\u017E;\x03\x02\x02\x02\u017F" +
		"\u0184\x05> \x02\u0180\u0184\x076\x02\x02\u0181\u0184\x077\x02\x02\u0182" +
		"\u0184\x078\x02\x02\u0183\u017F\x03\x02\x02\x02\u0183\u0180\x03\x02\x02" +
		"\x02\u0183\u0181\x03\x02\x02\x02\u0183\u0182\x03\x02\x02\x02\u0184=\x03" +
		"\x02\x02\x02\u0185\u0189\x073\x02\x02\u0186\u0189\x074\x02\x02\u0187\u0189" +
		"\x05@!\x02\u0188\u0185\x03\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0188" +
		"\u0187\x03\x02\x02\x02\u0189?\x03\x02\x02\x02\u018A\u018E\x075\x02\x02" +
		"\u018B\u018D\x05B\"\x02\u018C\u018B\x03\x02\x02\x02\u018D\u0190\x03\x02" +
		"\x02\x02\u018E\u018C\x03\x02\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F" +
		"\u0191\x03\x02\x02\x02\u0190\u018E\x03\x02\x02\x02\u0191\u0192\x07;\x02" +
		"\x02\u0192A\x03\x02\x02\x02\u0193\u019A\x07<\x02\x02\u0194\u019A\x07>" +
		"\x02\x02\u0195\u0196\x07=\x02\x02\u0196\u0197\x058\x1D\x02\u0197\u0198" +
		"\x07?\x02\x02\u0198\u019A\x03\x02\x02\x02\u0199\u0193\x03\x02\x02\x02" +
		"\u0199\u0194\x03\x02\x02\x02\u0199\u0195\x03\x02\x02\x02\u019AC\x03\x02" +
		"\x02\x02\u019B\u01A2\x079\x02\x02\u019C\u019E\x07(\x02\x02\u019D\u019F" +
		"\x054\x1B\x02\u019E\u019D\x03\x02\x02\x02\u019E\u019F\x03\x02\x02\x02" +
		"\u019F\u01A0\x03\x02\x02\x02\u01A0\u01A3\x07)\x02\x02\u01A1\u01A3\x05" +
		"> \x02\u01A2\u019C\x03\x02\x02\x02\u01A2\u01A1\x03\x02\x02\x02\u01A2\u01A3" +
		"\x03\x02\x02\x02\u01A3E\x03\x02\x02\x025IK[`fku\x80\x8D\x95\x9A\xA2\xAE" +
		"\xB3\xB7\xBB\xC1\xC3\xC7\xD0\xD6\xD9\xE0\xE4\xE9\xF1\xFD\u0105\u0109\u010F" +
		"\u011D\u0122\u0127\u012C\u012F\u0132\u0139\u0144\u015E\u0161\u0163\u016F" +
		"\u0174\u0176\u017D\u0183\u0188\u018E\u0199\u019E\u01A2";
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
	public topLevelElement(): TopLevelElementContext[];
	public topLevelElement(i: number): TopLevelElementContext;
	public topLevelElement(i?: number): TopLevelElementContext | TopLevelElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TopLevelElementContext);
		} else {
			return this.getRuleContext(i, TopLevelElementContext);
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
	public blockContent(): BlockContentContext[];
	public blockContent(i: number): BlockContentContext;
	public blockContent(i?: number): BlockContentContext | BlockContentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContentContext);
		} else {
			return this.getRuleContext(i, BlockContentContext);
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


export class BlockContentContext extends ParserRuleContext {
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
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	public getterDeclaration(): GetterDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GetterDeclarationContext);
	}
	public repeatedDeclaration(): RepeatedDeclarationContext | undefined {
		return this.tryGetRuleContext(0, RepeatedDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_blockContent; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterBlockContent) {
			listener.enterBlockContent(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitBlockContent) {
			listener.exitBlockContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitBlockContent) {
			return visitor.visitBlockContent(this);
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
	public ASSIGN(): TerminalNode { return this.getToken(CanonParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
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


export class FunctionDeclarationContext extends ParserRuleContext {
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


