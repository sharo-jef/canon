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
	public static readonly SCHEMA = 1;
	public static readonly STRUCT = 2;
	public static readonly MIXIN = 3;
	public static readonly FUN = 4;
	public static readonly DECLARE = 5;
	public static readonly VAL = 6;
	public static readonly VAR = 7;
	public static readonly RETURN = 8;
	public static readonly FOR = 9;
	public static readonly IN = 10;
	public static readonly THIS = 11;
	public static readonly STRING_TYPE = 12;
	public static readonly INT_TYPE = 13;
	public static readonly SCHEMA_DIRECTIVE = 14;
	public static readonly INTERPOLATION_START = 15;
	public static readonly PLUS = 16;
	public static readonly MINUS = 17;
	public static readonly MULTIPLY = 18;
	public static readonly DIVIDE = 19;
	public static readonly EQUALS = 20;
	public static readonly NOT_EQUALS = 21;
	public static readonly LESS_THAN = 22;
	public static readonly GREATER_THAN = 23;
	public static readonly LESS_EQUALS = 24;
	public static readonly GREATER_EQUALS = 25;
	public static readonly ASSIGN = 26;
	public static readonly RANGE = 27;
	public static readonly DOT = 28;
	public static readonly SEMICOLON = 29;
	public static readonly COMMA = 30;
	public static readonly COLON = 31;
	public static readonly QUESTION = 32;
	public static readonly AT = 33;
	public static readonly LPAREN = 34;
	public static readonly RPAREN = 35;
	public static readonly LBRACE = 36;
	public static readonly RBRACE = 37;
	public static readonly LBRACKET = 38;
	public static readonly RBRACKET = 39;
	public static readonly BACKTICK = 40;
	public static readonly STRING_LITERAL = 41;
	public static readonly INTEGER_LITERAL = 42;
	public static readonly IDENTIFIER = 43;
	public static readonly COMMENT = 44;
	public static readonly WS = 45;
	public static readonly RULE_program = 0;
	public static readonly RULE_schemaDirective = 1;
	public static readonly RULE_schemaDefinition = 2;
	public static readonly RULE_schemaMember = 3;
	public static readonly RULE_structDefinition = 4;
	public static readonly RULE_structMember = 5;
	public static readonly RULE_methodDefinition = 6;
	public static readonly RULE_functionDefinition = 7;
	public static readonly RULE_functionBody = 8;
	public static readonly RULE_parameterList = 9;
	public static readonly RULE_parameter = 10;
	public static readonly RULE_typeReference = 11;
	public static readonly RULE_statement = 12;
	public static readonly RULE_variableDeclaration = 13;
	public static readonly RULE_assignment = 14;
	public static readonly RULE_expressionStatement = 15;
	public static readonly RULE_returnStatement = 16;
	public static readonly RULE_forStatement = 17;
	public static readonly RULE_objectConstruction = 18;
	public static readonly RULE_constructionBody = 19;
	public static readonly RULE_expression = 20;
	public static readonly RULE_rangeExpression = 21;
	public static readonly RULE_comparisonExpression = 22;
	public static readonly RULE_additiveExpression = 23;
	public static readonly RULE_multiplicativeExpression = 24;
	public static readonly RULE_primaryExpression = 25;
	public static readonly RULE_functionCall = 26;
	public static readonly RULE_argumentList = 27;
	public static readonly RULE_memberAccess = 28;
	public static readonly RULE_stringInterpolation = 29;
	public static readonly RULE_stringContent = 30;
	public static readonly RULE_interpolationExpression = 31;
	public static readonly RULE_literal = 32;
	public static readonly RULE_annotation = 33;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "schemaDirective", "schemaDefinition", "schemaMember", "structDefinition", 
		"structMember", "methodDefinition", "functionDefinition", "functionBody", 
		"parameterList", "parameter", "typeReference", "statement", "variableDeclaration", 
		"assignment", "expressionStatement", "returnStatement", "forStatement", 
		"objectConstruction", "constructionBody", "expression", "rangeExpression", 
		"comparisonExpression", "additiveExpression", "multiplicativeExpression", 
		"primaryExpression", "functionCall", "argumentList", "memberAccess", "stringInterpolation", 
		"stringContent", "interpolationExpression", "literal", "annotation",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'schema'", "'struct'", "'mixin'", "'fun'", "'declare'", "'val'", 
		"'var'", "'return'", "'for'", "'in'", "'this'", "'string'", "'int'", "'#schema'", 
		"'${'", "'+'", "'-'", "'*'", "'/'", "'=='", "'!='", "'<'", "'>'", "'<='", 
		"'>='", "'='", "'..'", "'.'", "';'", "','", "':'", "'?'", "'@'", "'('", 
		"')'", "'{'", "'}'", "'['", "']'", "'`'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "SCHEMA", "STRUCT", "MIXIN", "FUN", "DECLARE", "VAL", "VAR", 
		"RETURN", "FOR", "IN", "THIS", "STRING_TYPE", "INT_TYPE", "SCHEMA_DIRECTIVE", 
		"INTERPOLATION_START", "PLUS", "MINUS", "MULTIPLY", "DIVIDE", "EQUALS", 
		"NOT_EQUALS", "LESS_THAN", "GREATER_THAN", "LESS_EQUALS", "GREATER_EQUALS", 
		"ASSIGN", "RANGE", "DOT", "SEMICOLON", "COMMA", "COLON", "QUESTION", "AT", 
		"LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACKET", "RBRACKET", "BACKTICK", 
		"STRING_LITERAL", "INTEGER_LITERAL", "IDENTIFIER", "COMMENT", "WS",
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
			this.state = 68;
			this.schemaDirective();
			this.state = 70;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.SCHEMA) {
				{
				this.state = 69;
				this.schemaDefinition();
				}
			}

			this.state = 77;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.STRUCT) | (1 << CanonParser.FUN) | (1 << CanonParser.DECLARE) | (1 << CanonParser.VAL) | (1 << CanonParser.VAR) | (1 << CanonParser.RETURN) | (1 << CanonParser.FOR) | (1 << CanonParser.THIS))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CanonParser.AT - 33)) | (1 << (CanonParser.LPAREN - 33)) | (1 << (CanonParser.BACKTICK - 33)) | (1 << (CanonParser.STRING_LITERAL - 33)) | (1 << (CanonParser.INTEGER_LITERAL - 33)) | (1 << (CanonParser.IDENTIFIER - 33)))) !== 0)) {
				{
				this.state = 75;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CanonParser.STRUCT:
					{
					this.state = 72;
					this.structDefinition();
					}
					break;
				case CanonParser.FUN:
				case CanonParser.DECLARE:
				case CanonParser.AT:
					{
					this.state = 73;
					this.functionDefinition();
					}
					break;
				case CanonParser.VAL:
				case CanonParser.VAR:
				case CanonParser.RETURN:
				case CanonParser.FOR:
				case CanonParser.THIS:
				case CanonParser.LPAREN:
				case CanonParser.BACKTICK:
				case CanonParser.STRING_LITERAL:
				case CanonParser.INTEGER_LITERAL:
				case CanonParser.IDENTIFIER:
					{
					this.state = 74;
					this.statement();
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
			this.match(CanonParser.STRING_LITERAL);
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
	public schemaDefinition(): SchemaDefinitionContext {
		let _localctx: SchemaDefinitionContext = new SchemaDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CanonParser.RULE_schemaDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this.match(CanonParser.SCHEMA);
			this.state = 86;
			this.match(CanonParser.LBRACE);
			this.state = 90;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.AT || _la === CanonParser.IDENTIFIER) {
				{
				{
				this.state = 87;
				this.schemaMember();
				}
				}
				this.state = 92;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 93;
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
	public schemaMember(): SchemaMemberContext {
		let _localctx: SchemaMemberContext = new SchemaMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CanonParser.RULE_schemaMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.AT) {
				{
				{
				this.state = 95;
				this.annotation();
				}
				}
				this.state = 100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 101;
			this.match(CanonParser.IDENTIFIER);
			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.MULTIPLY) {
				{
				this.state = 102;
				this.match(CanonParser.MULTIPLY);
				}
			}

			this.state = 105;
			this.match(CanonParser.COLON);
			this.state = 106;
			this.typeReference();
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
	public structDefinition(): StructDefinitionContext {
		let _localctx: StructDefinitionContext = new StructDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CanonParser.RULE_structDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 108;
			this.match(CanonParser.STRUCT);
			this.state = 109;
			this.match(CanonParser.IDENTIFIER);
			this.state = 110;
			this.match(CanonParser.LBRACE);
			this.state = 114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.MIXIN || _la === CanonParser.AT || _la === CanonParser.IDENTIFIER) {
				{
				{
				this.state = 111;
				this.structMember();
				}
				}
				this.state = 116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 117;
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
		this.enterRule(_localctx, 10, CanonParser.RULE_structMember);
		let _la: number;
		try {
			this.state = 134;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 119;
				this.match(CanonParser.MIXIN);
				this.state = 120;
				this.match(CanonParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CanonParser.AT) {
					{
					{
					this.state = 121;
					this.annotation();
					}
					}
					this.state = 126;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 127;
				this.match(CanonParser.IDENTIFIER);
				this.state = 129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.QUESTION) {
					{
					this.state = 128;
					this.match(CanonParser.QUESTION);
					}
				}

				this.state = 131;
				this.match(CanonParser.COLON);
				this.state = 132;
				this.typeReference();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 133;
				this.methodDefinition();
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
	public methodDefinition(): MethodDefinitionContext {
		let _localctx: MethodDefinitionContext = new MethodDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CanonParser.RULE_methodDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.AT) {
				{
				{
				this.state = 136;
				this.annotation();
				}
				}
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 142;
			this.match(CanonParser.IDENTIFIER);
			this.state = 143;
			this.match(CanonParser.LPAREN);
			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.IDENTIFIER) {
				{
				this.state = 144;
				this.parameterList();
				}
			}

			this.state = 147;
			this.match(CanonParser.RPAREN);
			this.state = 150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 148;
				this.match(CanonParser.COLON);
				this.state = 149;
				this.typeReference();
				}
			}

			this.state = 152;
			this.functionBody();
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
	public functionDefinition(): FunctionDefinitionContext {
		let _localctx: FunctionDefinitionContext = new FunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CanonParser.RULE_functionDefinition);
		let _la: number;
		try {
			this.state = 190;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 157;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CanonParser.AT) {
					{
					{
					this.state = 154;
					this.annotation();
					}
					}
					this.state = 159;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 160;
				this.match(CanonParser.FUN);
				this.state = 161;
				this.match(CanonParser.IDENTIFIER);
				this.state = 162;
				this.match(CanonParser.LPAREN);
				this.state = 164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.IDENTIFIER) {
					{
					this.state = 163;
					this.parameterList();
					}
				}

				this.state = 166;
				this.match(CanonParser.RPAREN);
				this.state = 169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.COLON) {
					{
					this.state = 167;
					this.match(CanonParser.COLON);
					this.state = 168;
					this.typeReference();
					}
				}

				this.state = 171;
				this.functionBody();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CanonParser.AT) {
					{
					{
					this.state = 172;
					this.annotation();
					}
					}
					this.state = 177;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 178;
				this.match(CanonParser.DECLARE);
				this.state = 179;
				this.match(CanonParser.FUN);
				this.state = 180;
				this.match(CanonParser.IDENTIFIER);
				this.state = 181;
				this.match(CanonParser.LPAREN);
				this.state = 183;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.IDENTIFIER) {
					{
					this.state = 182;
					this.parameterList();
					}
				}

				this.state = 185;
				this.match(CanonParser.RPAREN);
				this.state = 188;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.COLON) {
					{
					this.state = 186;
					this.match(CanonParser.COLON);
					this.state = 187;
					this.typeReference();
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
	public functionBody(): FunctionBodyContext {
		let _localctx: FunctionBodyContext = new FunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CanonParser.RULE_functionBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this.match(CanonParser.LBRACE);
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.VAL) | (1 << CanonParser.VAR) | (1 << CanonParser.RETURN) | (1 << CanonParser.FOR) | (1 << CanonParser.THIS))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (CanonParser.LPAREN - 34)) | (1 << (CanonParser.BACKTICK - 34)) | (1 << (CanonParser.STRING_LITERAL - 34)) | (1 << (CanonParser.INTEGER_LITERAL - 34)) | (1 << (CanonParser.IDENTIFIER - 34)))) !== 0)) {
				{
				{
				this.state = 193;
				this.statement();
				}
				}
				this.state = 198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 199;
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
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CanonParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this.parameter();
			this.state = 206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.COMMA) {
				{
				{
				this.state = 202;
				this.match(CanonParser.COMMA);
				this.state = 203;
				this.parameter();
				}
				}
				this.state = 208;
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
		this.enterRule(_localctx, 20, CanonParser.RULE_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			this.match(CanonParser.IDENTIFIER);
			this.state = 210;
			this.match(CanonParser.COLON);
			this.state = 211;
			this.typeReference();
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
	public typeReference(): TypeReferenceContext {
		let _localctx: TypeReferenceContext = new TypeReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CanonParser.RULE_typeReference);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			_la = this._input.LA(1);
			if (!(((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (CanonParser.STRING_TYPE - 12)) | (1 << (CanonParser.INT_TYPE - 12)) | (1 << (CanonParser.IDENTIFIER - 12)))) !== 0))) {
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CanonParser.RULE_statement);
		try {
			this.state = 221;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 215;
				this.variableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 216;
				this.assignment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 217;
				this.expressionStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 218;
				this.returnStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 219;
				this.forStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 220;
				this.objectConstruction();
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
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CanonParser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 223;
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
			this.state = 224;
			this.match(CanonParser.IDENTIFIER);
			this.state = 225;
			this.match(CanonParser.ASSIGN);
			this.state = 226;
			this.expression();
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
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CanonParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 235;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				this.state = 228;
				this.match(CanonParser.IDENTIFIER);
				}
				break;

			case 2:
				{
				this.state = 229;
				this.match(CanonParser.THIS);
				this.state = 230;
				this.match(CanonParser.DOT);
				this.state = 231;
				this.match(CanonParser.IDENTIFIER);
				}
				break;

			case 3:
				{
				this.state = 232;
				this.match(CanonParser.IDENTIFIER);
				this.state = 233;
				this.match(CanonParser.DOT);
				this.state = 234;
				this.match(CanonParser.IDENTIFIER);
				}
				break;
			}
			this.state = 237;
			this.match(CanonParser.ASSIGN);
			this.state = 238;
			this.expression();
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
		this.enterRule(_localctx, 30, CanonParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			this.expression();
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
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CanonParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this.match(CanonParser.RETURN);
			this.state = 244;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 243;
				this.expression();
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
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CanonParser.RULE_forStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 246;
			this.match(CanonParser.FOR);
			this.state = 247;
			this.match(CanonParser.LPAREN);
			this.state = 248;
			this.match(CanonParser.IDENTIFIER);
			this.state = 249;
			this.match(CanonParser.IN);
			this.state = 250;
			this.expression();
			this.state = 251;
			this.match(CanonParser.RPAREN);
			this.state = 252;
			this.match(CanonParser.LBRACE);
			this.state = 256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.VAL) | (1 << CanonParser.VAR) | (1 << CanonParser.RETURN) | (1 << CanonParser.FOR) | (1 << CanonParser.THIS))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (CanonParser.LPAREN - 34)) | (1 << (CanonParser.BACKTICK - 34)) | (1 << (CanonParser.STRING_LITERAL - 34)) | (1 << (CanonParser.INTEGER_LITERAL - 34)) | (1 << (CanonParser.IDENTIFIER - 34)))) !== 0)) {
				{
				{
				this.state = 253;
				this.statement();
				}
				}
				this.state = 258;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 259;
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
	public objectConstruction(): ObjectConstructionContext {
		let _localctx: ObjectConstructionContext = new ObjectConstructionContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CanonParser.RULE_objectConstruction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 261;
			this.match(CanonParser.IDENTIFIER);
			this.state = 267;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 262;
				this.match(CanonParser.LPAREN);
				this.state = 264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.THIS || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (CanonParser.LPAREN - 34)) | (1 << (CanonParser.BACKTICK - 34)) | (1 << (CanonParser.STRING_LITERAL - 34)) | (1 << (CanonParser.INTEGER_LITERAL - 34)) | (1 << (CanonParser.IDENTIFIER - 34)))) !== 0)) {
					{
					this.state = 263;
					this.argumentList();
					}
				}

				this.state = 266;
				this.match(CanonParser.RPAREN);
				}
				break;
			}
			this.state = 273;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.LBRACE) {
				{
				this.state = 269;
				this.match(CanonParser.LBRACE);
				this.state = 270;
				this.constructionBody();
				this.state = 271;
				this.match(CanonParser.RBRACE);
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
	public constructionBody(): ConstructionBodyContext {
		let _localctx: ConstructionBodyContext = new ConstructionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CanonParser.RULE_constructionBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 280;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.VAL) | (1 << CanonParser.VAR) | (1 << CanonParser.FOR) | (1 << CanonParser.THIS))) !== 0) || _la === CanonParser.IDENTIFIER) {
				{
				this.state = 278;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CanonParser.THIS:
				case CanonParser.IDENTIFIER:
					{
					this.state = 275;
					this.assignment();
					}
					break;
				case CanonParser.VAL:
				case CanonParser.VAR:
					{
					this.state = 276;
					this.variableDeclaration();
					}
					break;
				case CanonParser.FOR:
					{
					this.state = 277;
					this.forStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 282;
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CanonParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
			this.rangeExpression();
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
	public rangeExpression(): RangeExpressionContext {
		let _localctx: RangeExpressionContext = new RangeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CanonParser.RULE_rangeExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
			this.comparisonExpression();
			this.state = 290;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.RANGE) {
				{
				{
				this.state = 286;
				this.match(CanonParser.RANGE);
				this.state = 287;
				this.comparisonExpression();
				}
				}
				this.state = 292;
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
	public comparisonExpression(): ComparisonExpressionContext {
		let _localctx: ComparisonExpressionContext = new ComparisonExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CanonParser.RULE_comparisonExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
			this.additiveExpression();
			this.state = 298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.EQUALS) | (1 << CanonParser.NOT_EQUALS) | (1 << CanonParser.LESS_THAN) | (1 << CanonParser.GREATER_THAN) | (1 << CanonParser.LESS_EQUALS) | (1 << CanonParser.GREATER_EQUALS))) !== 0)) {
				{
				{
				this.state = 294;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.EQUALS) | (1 << CanonParser.NOT_EQUALS) | (1 << CanonParser.LESS_THAN) | (1 << CanonParser.GREATER_THAN) | (1 << CanonParser.LESS_EQUALS) | (1 << CanonParser.GREATER_EQUALS))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 295;
				this.additiveExpression();
				}
				}
				this.state = 300;
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
	public additiveExpression(): AdditiveExpressionContext {
		let _localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, CanonParser.RULE_additiveExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this.multiplicativeExpression();
			this.state = 306;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.PLUS || _la === CanonParser.MINUS) {
				{
				{
				this.state = 302;
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
				this.state = 303;
				this.multiplicativeExpression();
				}
				}
				this.state = 308;
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
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		let _localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CanonParser.RULE_multiplicativeExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 309;
			this.primaryExpression();
			this.state = 314;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.MULTIPLY || _la === CanonParser.DIVIDE) {
				{
				{
				this.state = 310;
				_la = this._input.LA(1);
				if (!(_la === CanonParser.MULTIPLY || _la === CanonParser.DIVIDE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 311;
				this.primaryExpression();
				}
				}
				this.state = 316;
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
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, CanonParser.RULE_primaryExpression);
		try {
			this.state = 329;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 317;
				this.memberAccess();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 318;
				this.functionCall();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 319;
				this.match(CanonParser.IDENTIFIER);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 320;
				this.literal();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 321;
				this.stringInterpolation();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 322;
				this.match(CanonParser.IDENTIFIER);
				this.state = 323;
				this.match(CanonParser.LPAREN);
				this.state = 324;
				this.match(CanonParser.RPAREN);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 325;
				this.match(CanonParser.LPAREN);
				this.state = 326;
				this.expression();
				this.state = 327;
				this.match(CanonParser.RPAREN);
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
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CanonParser.RULE_functionCall);
		let _la: number;
		try {
			this.state = 355;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 331;
				this.match(CanonParser.IDENTIFIER);
				this.state = 332;
				this.match(CanonParser.LPAREN);
				this.state = 334;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.THIS || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (CanonParser.LPAREN - 34)) | (1 << (CanonParser.BACKTICK - 34)) | (1 << (CanonParser.STRING_LITERAL - 34)) | (1 << (CanonParser.INTEGER_LITERAL - 34)) | (1 << (CanonParser.IDENTIFIER - 34)))) !== 0)) {
					{
					this.state = 333;
					this.argumentList();
					}
				}

				this.state = 336;
				this.match(CanonParser.RPAREN);
				this.state = 341;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.LBRACE) {
					{
					this.state = 337;
					this.match(CanonParser.LBRACE);
					this.state = 338;
					this.constructionBody();
					this.state = 339;
					this.match(CanonParser.RBRACE);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 343;
				this.memberAccess();
				this.state = 344;
				this.match(CanonParser.LPAREN);
				this.state = 346;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.THIS || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (CanonParser.LPAREN - 34)) | (1 << (CanonParser.BACKTICK - 34)) | (1 << (CanonParser.STRING_LITERAL - 34)) | (1 << (CanonParser.INTEGER_LITERAL - 34)) | (1 << (CanonParser.IDENTIFIER - 34)))) !== 0)) {
					{
					this.state = 345;
					this.argumentList();
					}
				}

				this.state = 348;
				this.match(CanonParser.RPAREN);
				this.state = 353;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.LBRACE) {
					{
					this.state = 349;
					this.match(CanonParser.LBRACE);
					this.state = 350;
					this.constructionBody();
					this.state = 351;
					this.match(CanonParser.RBRACE);
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
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, CanonParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 357;
			this.expression();
			this.state = 362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.COMMA) {
				{
				{
				this.state = 358;
				this.match(CanonParser.COMMA);
				this.state = 359;
				this.expression();
				}
				}
				this.state = 364;
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
	public memberAccess(): MemberAccessContext {
		let _localctx: MemberAccessContext = new MemberAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, CanonParser.RULE_memberAccess);
		try {
			this.state = 371;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.THIS:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 365;
				this.match(CanonParser.THIS);
				this.state = 366;
				this.match(CanonParser.DOT);
				this.state = 367;
				this.match(CanonParser.IDENTIFIER);
				}
				}
				break;
			case CanonParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 368;
				this.match(CanonParser.IDENTIFIER);
				this.state = 369;
				this.match(CanonParser.DOT);
				this.state = 370;
				this.match(CanonParser.IDENTIFIER);
				}
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
	public stringInterpolation(): StringInterpolationContext {
		let _localctx: StringInterpolationContext = new StringInterpolationContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, CanonParser.RULE_stringInterpolation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 373;
			this.match(CanonParser.BACKTICK);
			this.state = 374;
			this.stringContent();
			this.state = 375;
			this.match(CanonParser.BACKTICK);
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
	public stringContent(): StringContentContext {
		let _localctx: StringContentContext = new StringContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, CanonParser.RULE_stringContent);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 381;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.INTERPOLATION_START || _la === CanonParser.DOT) {
				{
				this.state = 379;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CanonParser.INTERPOLATION_START:
					{
					this.state = 377;
					this.interpolationExpression();
					}
					break;
				case CanonParser.DOT:
					{
					this.state = 378;
					this.match(CanonParser.DOT);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 383;
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
	public interpolationExpression(): InterpolationExpressionContext {
		let _localctx: InterpolationExpressionContext = new InterpolationExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, CanonParser.RULE_interpolationExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 384;
			this.match(CanonParser.INTERPOLATION_START);
			this.state = 385;
			this.expression();
			this.state = 386;
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, CanonParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 388;
			_la = this._input.LA(1);
			if (!(_la === CanonParser.STRING_LITERAL || _la === CanonParser.INTEGER_LITERAL)) {
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
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, CanonParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
			this.match(CanonParser.AT);
			this.state = 391;
			this.match(CanonParser.IDENTIFIER);
			this.state = 398;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.STRING_LITERAL:
				{
				this.state = 392;
				this.match(CanonParser.STRING_LITERAL);
				}
				break;
			case CanonParser.LPAREN:
				{
				this.state = 393;
				this.match(CanonParser.LPAREN);
				this.state = 395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.THIS || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (CanonParser.LPAREN - 34)) | (1 << (CanonParser.BACKTICK - 34)) | (1 << (CanonParser.STRING_LITERAL - 34)) | (1 << (CanonParser.INTEGER_LITERAL - 34)) | (1 << (CanonParser.IDENTIFIER - 34)))) !== 0)) {
					{
					this.state = 394;
					this.argumentList();
					}
				}

				this.state = 397;
				this.match(CanonParser.RPAREN);
				}
				break;
			case CanonParser.FUN:
			case CanonParser.DECLARE:
			case CanonParser.AT:
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03/\u0193\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x03\x02\x03\x02\x05\x02I\n\x02\x03\x02\x03\x02\x03\x02\x07\x02N\n" +
		"\x02\f\x02\x0E\x02Q\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x04\x03\x04\x03\x04\x07\x04[\n\x04\f\x04\x0E\x04^\v\x04\x03\x04\x03\x04" +
		"\x03\x05\x07\x05c\n\x05\f\x05\x0E\x05f\v\x05\x03\x05\x03\x05\x05\x05j" +
		"\n\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06" +
		"s\n\x06\f\x06\x0E\x06v\v\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x07" +
		"\x07}\n\x07\f\x07\x0E\x07\x80\v\x07\x03\x07\x03\x07\x05\x07\x84\n\x07" +
		"\x03\x07\x03\x07\x03\x07\x05\x07\x89\n\x07\x03\b\x07\b\x8C\n\b\f\b\x0E" +
		"\b\x8F\v\b\x03\b\x03\b\x03\b\x05\b\x94\n\b\x03\b\x03\b\x03\b\x05\b\x99" +
		"\n\b\x03\b\x03\b\x03\t\x07\t\x9E\n\t\f\t\x0E\t\xA1\v\t\x03\t\x03\t\x03" +
		"\t\x03\t\x05\t\xA7\n\t\x03\t\x03\t\x03\t\x05\t\xAC\n\t\x03\t\x03\t\x07" +
		"\t\xB0\n\t\f\t\x0E\t\xB3\v\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\xBA\n" +
		"\t\x03\t\x03\t\x03\t\x05\t\xBF\n\t\x05\t\xC1\n\t\x03\n\x03\n\x07\n\xC5" +
		"\n\n\f\n\x0E\n\xC8\v\n\x03\n\x03\n\x03\v\x03\v\x03\v\x07\v\xCF\n\v\f\v" +
		"\x0E\v\xD2\v\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xE0\n\x0E\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x05\x10\xEE\n\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03" +
		"\x12\x05\x12\xF7\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x07\x13\u0101\n\x13\f\x13\x0E\x13\u0104\v\x13\x03\x13" +
		"\x03\x13\x03\x14\x03\x14\x03\x14\x05\x14\u010B\n\x14\x03\x14\x05\x14\u010E" +
		"\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0114\n\x14\x03\x15\x03" +
		"\x15\x03\x15\x07\x15\u0119\n\x15\f\x15\x0E\x15\u011C\v\x15\x03\x16\x03" +
		"\x16\x03\x17\x03\x17\x03\x17\x07\x17\u0123\n\x17\f\x17\x0E\x17\u0126\v" +
		"\x17\x03\x18\x03\x18\x03\x18\x07\x18\u012B\n\x18\f\x18\x0E\x18\u012E\v" +
		"\x18\x03\x19\x03\x19\x03\x19\x07\x19\u0133\n\x19\f\x19\x0E\x19\u0136\v" +
		"\x19\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u013B\n\x1A\f\x1A\x0E\x1A\u013E\v" +
		"\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u014C\n\x1B\x03\x1C\x03\x1C\x03\x1C" +
		"\x05\x1C\u0151\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0158" +
		"\n\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u015D\n\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x05\x1C\u0164\n\x1C\x05\x1C\u0166\n\x1C\x03\x1D\x03" +
		"\x1D\x03\x1D\x07\x1D\u016B\n\x1D\f\x1D\x0E\x1D\u016E\v\x1D\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0176\n\x1E\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03 \x03 \x07 \u017E\n \f \x0E \u0181\v \x03!\x03!\x03" +
		"!\x03!\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x05#\u018E\n#\x03#\x05#\u0191" +
		"\n#\x03#\x02\x02\x02$\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
		">\x02@\x02B\x02D\x02\x02\b\x04\x02\x0E\x0F--\x03\x02\b\t\x03\x02\x16\x1B" +
		"\x03\x02\x12\x13\x03\x02\x14\x15\x03\x02+,\x02\u01AD\x02F\x03\x02\x02" +
		"\x02\x04T\x03\x02\x02\x02\x06W\x03\x02\x02\x02\bd\x03\x02\x02\x02\nn\x03" +
		"\x02\x02\x02\f\x88\x03\x02\x02\x02\x0E\x8D\x03\x02\x02\x02\x10\xC0\x03" +
		"\x02\x02\x02\x12\xC2\x03\x02\x02\x02\x14\xCB\x03\x02\x02\x02\x16\xD3\x03" +
		"\x02\x02\x02\x18\xD7\x03\x02\x02\x02\x1A\xDF\x03\x02\x02\x02\x1C\xE1\x03" +
		"\x02\x02\x02\x1E\xED\x03\x02\x02\x02 \xF2\x03\x02\x02\x02\"\xF4\x03\x02" +
		"\x02\x02$\xF8\x03\x02\x02\x02&\u0107\x03\x02\x02\x02(\u011A\x03\x02\x02" +
		"\x02*\u011D\x03\x02\x02\x02,\u011F\x03\x02\x02\x02.\u0127\x03\x02\x02" +
		"\x020\u012F\x03\x02\x02\x022\u0137\x03\x02\x02\x024\u014B\x03\x02\x02" +
		"\x026\u0165\x03\x02\x02\x028\u0167\x03\x02\x02\x02:\u0175\x03\x02\x02" +
		"\x02<\u0177\x03\x02\x02\x02>\u017F\x03\x02\x02\x02@\u0182\x03\x02\x02" +
		"\x02B\u0186\x03\x02\x02\x02D\u0188\x03\x02\x02\x02FH\x05\x04\x03\x02G" +
		"I\x05\x06\x04\x02HG\x03\x02\x02\x02HI\x03\x02\x02\x02IO\x03\x02\x02\x02" +
		"JN\x05\n\x06\x02KN\x05\x10\t\x02LN\x05\x1A\x0E\x02MJ\x03\x02\x02\x02M" +
		"K\x03\x02\x02\x02ML\x03\x02\x02\x02NQ\x03\x02\x02\x02OM\x03\x02\x02\x02" +
		"OP\x03\x02\x02\x02PR\x03\x02\x02\x02QO\x03\x02\x02\x02RS\x07\x02\x02\x03" +
		"S\x03\x03\x02\x02\x02TU\x07\x10\x02\x02UV\x07+\x02\x02V\x05\x03\x02\x02" +
		"\x02WX\x07\x03\x02\x02X\\\x07&\x02\x02Y[\x05\b\x05\x02ZY\x03\x02\x02\x02" +
		"[^\x03\x02\x02\x02\\Z\x03\x02\x02\x02\\]\x03\x02\x02\x02]_\x03\x02\x02" +
		"\x02^\\\x03\x02\x02\x02_`\x07\'\x02\x02`\x07\x03\x02\x02\x02ac\x05D#\x02" +
		"ba\x03\x02\x02\x02cf\x03\x02\x02\x02db\x03\x02\x02\x02de\x03\x02\x02\x02" +
		"eg\x03\x02\x02\x02fd\x03\x02\x02\x02gi\x07-\x02\x02hj\x07\x14\x02\x02" +
		"ih\x03\x02\x02\x02ij\x03\x02\x02\x02jk\x03\x02\x02\x02kl\x07!\x02\x02" +
		"lm\x05\x18\r\x02m\t\x03\x02\x02\x02no\x07\x04\x02\x02op\x07-\x02\x02p" +
		"t\x07&\x02\x02qs\x05\f\x07\x02rq\x03\x02\x02\x02sv\x03\x02\x02\x02tr\x03" +
		"\x02\x02\x02tu\x03\x02\x02\x02uw\x03\x02\x02\x02vt\x03\x02\x02\x02wx\x07" +
		"\'\x02\x02x\v\x03\x02\x02\x02yz\x07\x05\x02\x02z\x89\x07-\x02\x02{}\x05" +
		"D#\x02|{\x03\x02\x02\x02}\x80\x03\x02\x02\x02~|\x03\x02\x02\x02~\x7F\x03" +
		"\x02\x02\x02\x7F\x81\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x81\x83\x07" +
		"-\x02\x02\x82\x84\x07\"\x02\x02\x83\x82\x03\x02\x02\x02\x83\x84\x03\x02" +
		"\x02\x02\x84\x85\x03\x02\x02\x02\x85\x86\x07!\x02\x02\x86\x89\x05\x18" +
		"\r\x02\x87\x89\x05\x0E\b\x02\x88y\x03\x02\x02\x02\x88~\x03\x02\x02\x02" +
		"\x88\x87\x03\x02\x02\x02\x89\r\x03\x02\x02\x02\x8A\x8C\x05D#\x02\x8B\x8A" +
		"\x03\x02\x02\x02\x8C\x8F\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8D\x8E" +
		"\x03\x02\x02\x02\x8E\x90\x03\x02\x02\x02\x8F\x8D\x03\x02\x02\x02\x90\x91" +
		"\x07-\x02\x02\x91\x93\x07$\x02\x02\x92\x94\x05\x14\v\x02\x93\x92\x03\x02" +
		"\x02\x02\x93\x94\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x98\x07%" +
		"\x02\x02\x96\x97\x07!\x02\x02\x97\x99\x05\x18\r\x02\x98\x96\x03\x02\x02" +
		"\x02\x98\x99\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9B\x05\x12\n" +
		"\x02\x9B\x0F\x03\x02\x02\x02\x9C\x9E\x05D#\x02\x9D\x9C\x03\x02\x02\x02" +
		"\x9E\xA1\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02" +
		"\xA0\xA2\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA2\xA3\x07\x06\x02\x02" +
		"\xA3\xA4\x07-\x02\x02\xA4\xA6\x07$\x02\x02\xA5\xA7\x05\x14\v\x02\xA6\xA5" +
		"\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\xAB" +
		"\x07%\x02\x02\xA9\xAA\x07!\x02\x02\xAA\xAC\x05\x18\r\x02\xAB\xA9\x03\x02" +
		"\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xC1\x05\x12" +
		"\n\x02\xAE\xB0\x05D#\x02\xAF\xAE\x03\x02\x02\x02\xB0\xB3\x03\x02\x02\x02" +
		"\xB1\xAF\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB4\x03\x02\x02\x02" +
		"\xB3\xB1\x03\x02\x02\x02\xB4\xB5\x07\x07\x02\x02\xB5\xB6\x07\x06\x02\x02" +
		"\xB6\xB7\x07-\x02\x02\xB7\xB9\x07$\x02\x02\xB8\xBA\x05\x14\v\x02\xB9\xB8" +
		"\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xBE" +
		"\x07%\x02\x02\xBC\xBD\x07!\x02\x02\xBD\xBF\x05\x18\r\x02\xBE\xBC\x03\x02" +
		"\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC1\x03\x02\x02\x02\xC0\x9F\x03\x02" +
		"\x02\x02\xC0\xB1\x03\x02\x02\x02\xC1\x11\x03\x02\x02\x02\xC2\xC6\x07&" +
		"\x02\x02\xC3\xC5\x05\x1A\x0E\x02\xC4\xC3\x03\x02\x02\x02\xC5\xC8\x03\x02" +
		"\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC9\x03\x02" +
		"\x02\x02\xC8\xC6\x03\x02\x02\x02\xC9\xCA\x07\'\x02\x02\xCA\x13\x03\x02" +
		"\x02\x02\xCB\xD0\x05\x16\f\x02\xCC\xCD\x07 \x02\x02\xCD\xCF\x05\x16\f" +
		"\x02\xCE\xCC\x03\x02\x02\x02\xCF\xD2\x03\x02\x02\x02\xD0\xCE\x03\x02\x02" +
		"\x02\xD0\xD1\x03\x02\x02\x02\xD1\x15\x03\x02\x02\x02\xD2\xD0\x03\x02\x02" +
		"\x02\xD3\xD4\x07-\x02\x02\xD4\xD5\x07!\x02\x02\xD5\xD6\x05\x18\r\x02\xD6" +
		"\x17\x03\x02\x02\x02\xD7\xD8\t\x02\x02\x02\xD8\x19\x03\x02\x02\x02\xD9" +
		"\xE0\x05\x1C\x0F\x02\xDA\xE0\x05\x1E\x10\x02\xDB\xE0\x05 \x11\x02\xDC" +
		"\xE0\x05\"\x12\x02\xDD\xE0\x05$\x13\x02\xDE\xE0\x05&\x14\x02\xDF\xD9\x03" +
		"\x02\x02\x02\xDF\xDA\x03\x02\x02\x02\xDF\xDB\x03\x02\x02\x02\xDF\xDC\x03" +
		"\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xDF\xDE\x03\x02\x02\x02\xE0\x1B\x03" +
		"\x02\x02\x02\xE1\xE2\t\x03\x02\x02\xE2\xE3\x07-\x02\x02\xE3\xE4\x07\x1C" +
		"\x02\x02\xE4\xE5\x05*\x16\x02\xE5\x1D\x03\x02\x02\x02\xE6\xEE\x07-\x02" +
		"\x02\xE7\xE8\x07\r\x02\x02\xE8\xE9\x07\x1E\x02\x02\xE9\xEE\x07-\x02\x02" +
		"\xEA\xEB\x07-\x02\x02\xEB\xEC\x07\x1E\x02\x02\xEC\xEE\x07-\x02\x02\xED" +
		"\xE6\x03\x02\x02\x02\xED\xE7\x03\x02\x02\x02\xED\xEA\x03\x02\x02\x02\xEE" +
		"\xEF\x03\x02\x02\x02\xEF\xF0\x07\x1C\x02\x02\xF0\xF1\x05*\x16\x02\xF1" +
		"\x1F\x03\x02\x02\x02\xF2\xF3\x05*\x16\x02\xF3!\x03\x02\x02\x02\xF4\xF6" +
		"\x07\n\x02\x02\xF5\xF7\x05*\x16\x02\xF6\xF5\x03\x02\x02\x02\xF6\xF7\x03" +
		"\x02\x02\x02\xF7#\x03\x02\x02\x02\xF8\xF9\x07\v\x02\x02\xF9\xFA\x07$\x02" +
		"\x02\xFA\xFB\x07-\x02\x02\xFB\xFC\x07\f\x02\x02\xFC\xFD\x05*\x16\x02\xFD" +
		"\xFE\x07%\x02\x02\xFE\u0102\x07&\x02\x02\xFF\u0101\x05\x1A\x0E\x02\u0100" +
		"\xFF\x03\x02\x02\x02\u0101\u0104\x03\x02\x02\x02\u0102\u0100\x03\x02\x02" +
		"\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0105\x03\x02\x02\x02\u0104\u0102" +
		"\x03\x02\x02\x02\u0105\u0106\x07\'\x02\x02\u0106%\x03\x02\x02\x02\u0107" +
		"\u010D\x07-\x02\x02\u0108\u010A\x07$\x02\x02\u0109\u010B\x058\x1D\x02" +
		"\u010A\u0109\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02\u010B\u010C\x03" +
		"\x02\x02\x02\u010C\u010E\x07%\x02\x02\u010D\u0108\x03\x02\x02\x02\u010D" +
		"\u010E\x03\x02\x02\x02\u010E\u0113\x03\x02\x02\x02\u010F\u0110\x07&\x02" +
		"\x02\u0110\u0111\x05(\x15\x02\u0111\u0112\x07\'\x02\x02\u0112\u0114\x03" +
		"\x02\x02\x02\u0113\u010F\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114" +
		"\'\x03\x02\x02\x02\u0115\u0119\x05\x1E\x10\x02\u0116\u0119\x05\x1C\x0F" +
		"\x02\u0117\u0119\x05$\x13\x02\u0118\u0115\x03\x02\x02\x02\u0118\u0116" +
		"\x03\x02\x02\x02\u0118\u0117\x03\x02\x02\x02\u0119\u011C\x03\x02\x02\x02" +
		"\u011A\u0118\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B)\x03\x02" +
		"\x02\x02\u011C\u011A\x03\x02\x02\x02\u011D\u011E\x05,\x17\x02\u011E+\x03" +
		"\x02\x02\x02\u011F\u0124\x05.\x18\x02\u0120\u0121\x07\x1D\x02\x02\u0121" +
		"\u0123\x05.\x18\x02\u0122\u0120\x03\x02\x02\x02\u0123\u0126\x03\x02\x02" +
		"\x02\u0124\u0122\x03\x02\x02\x02\u0124\u0125\x03\x02\x02\x02\u0125-\x03" +
		"\x02\x02\x02\u0126\u0124\x03\x02\x02\x02\u0127\u012C\x050\x19\x02\u0128" +
		"\u0129\t\x04\x02\x02\u0129\u012B\x050\x19\x02\u012A\u0128\x03\x02\x02" +
		"\x02\u012B\u012E\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012C\u012D" +
		"\x03\x02\x02\x02\u012D/\x03\x02\x02\x02\u012E\u012C\x03\x02\x02\x02\u012F" +
		"\u0134\x052\x1A\x02\u0130\u0131\t\x05\x02\x02\u0131\u0133\x052\x1A\x02" +
		"\u0132\u0130\x03\x02\x02\x02\u0133\u0136\x03\x02\x02\x02\u0134\u0132\x03" +
		"\x02\x02\x02\u0134\u0135\x03\x02\x02\x02\u01351\x03\x02\x02\x02\u0136" +
		"\u0134\x03\x02\x02\x02\u0137\u013C\x054\x1B\x02\u0138\u0139\t\x06\x02" +
		"\x02\u0139\u013B\x054\x1B\x02\u013A\u0138\x03\x02\x02\x02\u013B\u013E" +
		"\x03\x02\x02\x02\u013C\u013A\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02" +
		"\u013D3\x03\x02\x02\x02\u013E\u013C\x03\x02\x02\x02\u013F\u014C\x05:\x1E" +
		"\x02\u0140\u014C\x056\x1C\x02\u0141\u014C\x07-\x02\x02\u0142\u014C\x05" +
		"B\"\x02\u0143\u014C\x05<\x1F\x02\u0144\u0145\x07-\x02\x02\u0145\u0146" +
		"\x07$\x02\x02\u0146\u014C\x07%\x02\x02\u0147\u0148\x07$\x02\x02\u0148" +
		"\u0149\x05*\x16\x02\u0149\u014A\x07%\x02\x02\u014A\u014C\x03\x02\x02\x02" +
		"\u014B\u013F\x03\x02\x02\x02\u014B\u0140\x03\x02\x02\x02\u014B\u0141\x03" +
		"\x02\x02\x02\u014B\u0142\x03\x02\x02\x02\u014B\u0143\x03\x02\x02\x02\u014B" +
		"\u0144\x03\x02\x02\x02\u014B\u0147\x03\x02\x02\x02\u014C5\x03\x02\x02" +
		"\x02\u014D\u014E\x07-\x02\x02\u014E\u0150\x07$\x02\x02\u014F\u0151\x05" +
		"8\x1D\x02\u0150\u014F\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151" +
		"\u0152\x03\x02\x02\x02\u0152\u0157\x07%\x02\x02\u0153\u0154\x07&\x02\x02" +
		"\u0154\u0155\x05(\x15\x02\u0155\u0156\x07\'\x02\x02\u0156\u0158\x03\x02" +
		"\x02\x02\u0157\u0153\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158" +
		"\u0166\x03\x02\x02\x02\u0159\u015A\x05:\x1E\x02\u015A\u015C\x07$\x02\x02" +
		"\u015B\u015D\x058\x1D\x02\u015C\u015B\x03\x02\x02\x02\u015C\u015D\x03" +
		"\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u0163\x07%\x02\x02\u015F" +
		"\u0160\x07&\x02\x02\u0160\u0161\x05(\x15\x02\u0161\u0162\x07\'\x02\x02" +
		"\u0162\u0164\x03\x02\x02\x02\u0163\u015F\x03\x02\x02\x02\u0163\u0164\x03" +
		"\x02\x02\x02\u0164\u0166\x03\x02\x02\x02\u0165\u014D\x03\x02\x02\x02\u0165" +
		"\u0159\x03\x02\x02\x02\u01667\x03\x02\x02\x02\u0167\u016C\x05*\x16\x02" +
		"\u0168\u0169\x07 \x02\x02\u0169\u016B\x05*\x16\x02\u016A\u0168\x03\x02" +
		"\x02\x02\u016B\u016E\x03\x02\x02\x02\u016C\u016A\x03\x02\x02\x02\u016C" +
		"\u016D\x03\x02\x02\x02\u016D9\x03\x02\x02\x02\u016E\u016C\x03\x02\x02" +
		"\x02\u016F\u0170\x07\r\x02\x02\u0170\u0171\x07\x1E\x02\x02\u0171\u0176" +
		"\x07-\x02\x02\u0172\u0173\x07-\x02\x02\u0173\u0174\x07\x1E\x02\x02\u0174" +
		"\u0176\x07-\x02\x02\u0175\u016F\x03\x02\x02\x02\u0175\u0172\x03\x02\x02" +
		"\x02\u0176;\x03\x02\x02\x02\u0177\u0178\x07*\x02\x02\u0178\u0179\x05>" +
		" \x02\u0179\u017A\x07*\x02\x02\u017A=\x03\x02\x02\x02\u017B\u017E\x05" +
		"@!\x02\u017C\u017E\x07\x1E\x02\x02\u017D\u017B\x03\x02\x02\x02\u017D\u017C" +
		"\x03\x02\x02\x02\u017E\u0181\x03\x02\x02\x02\u017F\u017D\x03\x02\x02\x02" +
		"\u017F\u0180\x03\x02\x02\x02\u0180?\x03\x02\x02\x02\u0181\u017F\x03\x02" +
		"\x02\x02\u0182\u0183\x07\x11\x02\x02\u0183\u0184\x05*\x16\x02\u0184\u0185" +
		"\x07\'\x02\x02\u0185A\x03\x02\x02\x02\u0186\u0187\t\x07\x02\x02\u0187" +
		"C\x03\x02\x02\x02\u0188\u0189\x07#\x02\x02\u0189\u0190\x07-\x02\x02\u018A" +
		"\u0191\x07+\x02\x02\u018B\u018D\x07$\x02\x02\u018C\u018E\x058\x1D\x02" +
		"\u018D\u018C\x03\x02\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E\u018F\x03" +
		"\x02\x02\x02\u018F\u0191\x07%\x02\x02\u0190\u018A\x03\x02\x02\x02\u0190" +
		"\u018B\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191E\x03\x02\x02" +
		"\x021HMO\\dit~\x83\x88\x8D\x93\x98\x9F\xA6\xAB\xB1\xB9\xBE\xC0\xC6\xD0" +
		"\xDF\xED\xF6\u0102\u010A\u010D\u0113\u0118\u011A\u0124\u012C\u0134\u013C" +
		"\u014B\u0150\u0157\u015C\u0163\u0165\u016C\u0175\u017D\u017F\u018D\u0190";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CanonParser.__ATN) {
			CanonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CanonParser._serializedATN));
		}

		return CanonParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public schemaDirective(): SchemaDirectiveContext {
		return this.getRuleContext(0, SchemaDirectiveContext);
	}
	public EOF(): TerminalNode { return this.getToken(CanonParser.EOF, 0); }
	public schemaDefinition(): SchemaDefinitionContext | undefined {
		return this.tryGetRuleContext(0, SchemaDefinitionContext);
	}
	public structDefinition(): StructDefinitionContext[];
	public structDefinition(i: number): StructDefinitionContext;
	public structDefinition(i?: number): StructDefinitionContext | StructDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructDefinitionContext);
		} else {
			return this.getRuleContext(i, StructDefinitionContext);
		}
	}
	public functionDefinition(): FunctionDefinitionContext[];
	public functionDefinition(i: number): FunctionDefinitionContext;
	public functionDefinition(i?: number): FunctionDefinitionContext | FunctionDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionDefinitionContext);
		} else {
			return this.getRuleContext(i, FunctionDefinitionContext);
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
	public STRING_LITERAL(): TerminalNode { return this.getToken(CanonParser.STRING_LITERAL, 0); }
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


export class SchemaDefinitionContext extends ParserRuleContext {
	public SCHEMA(): TerminalNode { return this.getToken(CanonParser.SCHEMA, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CanonParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CanonParser.RBRACE, 0); }
	public schemaMember(): SchemaMemberContext[];
	public schemaMember(i: number): SchemaMemberContext;
	public schemaMember(i?: number): SchemaMemberContext | SchemaMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SchemaMemberContext);
		} else {
			return this.getRuleContext(i, SchemaMemberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_schemaDefinition; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterSchemaDefinition) {
			listener.enterSchemaDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitSchemaDefinition) {
			listener.exitSchemaDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitSchemaDefinition) {
			return visitor.visitSchemaDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SchemaMemberContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(CanonParser.IDENTIFIER, 0); }
	public COLON(): TerminalNode { return this.getToken(CanonParser.COLON, 0); }
	public typeReference(): TypeReferenceContext {
		return this.getRuleContext(0, TypeReferenceContext);
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
	public MULTIPLY(): TerminalNode | undefined { return this.tryGetToken(CanonParser.MULTIPLY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_schemaMember; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterSchemaMember) {
			listener.enterSchemaMember(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitSchemaMember) {
			listener.exitSchemaMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitSchemaMember) {
			return visitor.visitSchemaMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDefinitionContext extends ParserRuleContext {
	public STRUCT(): TerminalNode { return this.getToken(CanonParser.STRUCT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(CanonParser.IDENTIFIER, 0); }
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_structDefinition; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterStructDefinition) {
			listener.enterStructDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitStructDefinition) {
			listener.exitStructDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitStructDefinition) {
			return visitor.visitStructDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructMemberContext extends ParserRuleContext {
	public MIXIN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.MIXIN, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(CanonParser.IDENTIFIER, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CanonParser.COLON, 0); }
	public typeReference(): TypeReferenceContext | undefined {
		return this.tryGetRuleContext(0, TypeReferenceContext);
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
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(CanonParser.QUESTION, 0); }
	public methodDefinition(): MethodDefinitionContext | undefined {
		return this.tryGetRuleContext(0, MethodDefinitionContext);
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


export class MethodDefinitionContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(CanonParser.IDENTIFIER, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CanonParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CanonParser.RPAREN, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
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
	public typeReference(): TypeReferenceContext | undefined {
		return this.tryGetRuleContext(0, TypeReferenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_methodDefinition; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterMethodDefinition) {
			listener.enterMethodDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitMethodDefinition) {
			listener.exitMethodDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitMethodDefinition) {
			return visitor.visitMethodDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDefinitionContext extends ParserRuleContext {
	public FUN(): TerminalNode { return this.getToken(CanonParser.FUN, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(CanonParser.IDENTIFIER, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CanonParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CanonParser.RPAREN, 0); }
	public functionBody(): FunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, FunctionBodyContext);
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
	public typeReference(): TypeReferenceContext | undefined {
		return this.tryGetRuleContext(0, TypeReferenceContext);
	}
	public DECLARE(): TerminalNode | undefined { return this.tryGetToken(CanonParser.DECLARE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_functionDefinition; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterFunctionDefinition) {
			listener.enterFunctionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitFunctionDefinition) {
			listener.exitFunctionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitFunctionDefinition) {
			return visitor.visitFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionBodyContext extends ParserRuleContext {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_functionBody; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterFunctionBody) {
			listener.enterFunctionBody(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitFunctionBody) {
			listener.exitFunctionBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitFunctionBody) {
			return visitor.visitFunctionBody(this);
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
	public COLON(): TerminalNode { return this.getToken(CanonParser.COLON, 0); }
	public typeReference(): TypeReferenceContext {
		return this.getRuleContext(0, TypeReferenceContext);
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


export class TypeReferenceContext extends ParserRuleContext {
	public STRING_TYPE(): TerminalNode | undefined { return this.tryGetToken(CanonParser.STRING_TYPE, 0); }
	public INT_TYPE(): TerminalNode | undefined { return this.tryGetToken(CanonParser.INT_TYPE, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(CanonParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_typeReference; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterTypeReference) {
			listener.enterTypeReference(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitTypeReference) {
			listener.exitTypeReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitTypeReference) {
			return visitor.visitTypeReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	public objectConstruction(): ObjectConstructionContext | undefined {
		return this.tryGetRuleContext(0, ObjectConstructionContext);
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


export class VariableDeclarationContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(CanonParser.IDENTIFIER, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(CanonParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public VAL(): TerminalNode | undefined { return this.tryGetToken(CanonParser.VAL, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(CanonParser.VAR, 0); }
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


export class AssignmentContext extends ParserRuleContext {
	public ASSIGN(): TerminalNode { return this.getToken(CanonParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.IDENTIFIER);
		} else {
			return this.getToken(CanonParser.IDENTIFIER, i);
		}
	}
	public THIS(): TerminalNode | undefined { return this.tryGetToken(CanonParser.THIS, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CanonParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_assignment; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
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


export class ReturnStatementContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(CanonParser.RETURN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(CanonParser.FOR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CanonParser.LPAREN, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(CanonParser.IDENTIFIER, 0); }
	public IN(): TerminalNode { return this.getToken(CanonParser.IN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(CanonParser.RPAREN, 0); }
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_forStatement; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectConstructionContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(CanonParser.IDENTIFIER, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.RPAREN, 0); }
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(CanonParser.LBRACE, 0); }
	public constructionBody(): ConstructionBodyContext | undefined {
		return this.tryGetRuleContext(0, ConstructionBodyContext);
	}
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(CanonParser.RBRACE, 0); }
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_objectConstruction; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterObjectConstruction) {
			listener.enterObjectConstruction(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitObjectConstruction) {
			listener.exitObjectConstruction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitObjectConstruction) {
			return visitor.visitObjectConstruction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructionBodyContext extends ParserRuleContext {
	public assignment(): AssignmentContext[];
	public assignment(i: number): AssignmentContext;
	public assignment(i?: number): AssignmentContext | AssignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentContext);
		} else {
			return this.getRuleContext(i, AssignmentContext);
		}
	}
	public variableDeclaration(): VariableDeclarationContext[];
	public variableDeclaration(i: number): VariableDeclarationContext;
	public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationContext);
		}
	}
	public forStatement(): ForStatementContext[];
	public forStatement(i: number): ForStatementContext;
	public forStatement(i?: number): ForStatementContext | ForStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ForStatementContext);
		} else {
			return this.getRuleContext(i, ForStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_constructionBody; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterConstructionBody) {
			listener.enterConstructionBody(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitConstructionBody) {
			listener.exitConstructionBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitConstructionBody) {
			return visitor.visitConstructionBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public rangeExpression(): RangeExpressionContext {
		return this.getRuleContext(0, RangeExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_expression; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RangeExpressionContext extends ParserRuleContext {
	public comparisonExpression(): ComparisonExpressionContext[];
	public comparisonExpression(i: number): ComparisonExpressionContext;
	public comparisonExpression(i?: number): ComparisonExpressionContext | ComparisonExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComparisonExpressionContext);
		} else {
			return this.getRuleContext(i, ComparisonExpressionContext);
		}
	}
	public RANGE(): TerminalNode[];
	public RANGE(i: number): TerminalNode;
	public RANGE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.RANGE);
		} else {
			return this.getToken(CanonParser.RANGE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_rangeExpression; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterRangeExpression) {
			listener.enterRangeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitRangeExpression) {
			listener.exitRangeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitRangeExpression) {
			return visitor.visitRangeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonExpressionContext extends ParserRuleContext {
	public additiveExpression(): AdditiveExpressionContext[];
	public additiveExpression(i: number): AdditiveExpressionContext;
	public additiveExpression(i?: number): AdditiveExpressionContext | AdditiveExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditiveExpressionContext);
		} else {
			return this.getRuleContext(i, AdditiveExpressionContext);
		}
	}
	public EQUALS(): TerminalNode[];
	public EQUALS(i: number): TerminalNode;
	public EQUALS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.EQUALS);
		} else {
			return this.getToken(CanonParser.EQUALS, i);
		}
	}
	public NOT_EQUALS(): TerminalNode[];
	public NOT_EQUALS(i: number): TerminalNode;
	public NOT_EQUALS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.NOT_EQUALS);
		} else {
			return this.getToken(CanonParser.NOT_EQUALS, i);
		}
	}
	public LESS_THAN(): TerminalNode[];
	public LESS_THAN(i: number): TerminalNode;
	public LESS_THAN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.LESS_THAN);
		} else {
			return this.getToken(CanonParser.LESS_THAN, i);
		}
	}
	public GREATER_THAN(): TerminalNode[];
	public GREATER_THAN(i: number): TerminalNode;
	public GREATER_THAN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.GREATER_THAN);
		} else {
			return this.getToken(CanonParser.GREATER_THAN, i);
		}
	}
	public LESS_EQUALS(): TerminalNode[];
	public LESS_EQUALS(i: number): TerminalNode;
	public LESS_EQUALS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.LESS_EQUALS);
		} else {
			return this.getToken(CanonParser.LESS_EQUALS, i);
		}
	}
	public GREATER_EQUALS(): TerminalNode[];
	public GREATER_EQUALS(i: number): TerminalNode;
	public GREATER_EQUALS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.GREATER_EQUALS);
		} else {
			return this.getToken(CanonParser.GREATER_EQUALS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_comparisonExpression; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterComparisonExpression) {
			listener.enterComparisonExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitComparisonExpression) {
			listener.exitComparisonExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitComparisonExpression) {
			return visitor.visitComparisonExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	public multiplicativeExpression(): MultiplicativeExpressionContext[];
	public multiplicativeExpression(i: number): MultiplicativeExpressionContext;
	public multiplicativeExpression(i?: number): MultiplicativeExpressionContext | MultiplicativeExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplicativeExpressionContext);
		} else {
			return this.getRuleContext(i, MultiplicativeExpressionContext);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.PLUS);
		} else {
			return this.getToken(CanonParser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.MINUS);
		} else {
			return this.getToken(CanonParser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_additiveExpression; }
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


export class MultiplicativeExpressionContext extends ParserRuleContext {
	public primaryExpression(): PrimaryExpressionContext[];
	public primaryExpression(i: number): PrimaryExpressionContext;
	public primaryExpression(i?: number): PrimaryExpressionContext | PrimaryExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrimaryExpressionContext);
		} else {
			return this.getRuleContext(i, PrimaryExpressionContext);
		}
	}
	public MULTIPLY(): TerminalNode[];
	public MULTIPLY(i: number): TerminalNode;
	public MULTIPLY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.MULTIPLY);
		} else {
			return this.getToken(CanonParser.MULTIPLY, i);
		}
	}
	public DIVIDE(): TerminalNode[];
	public DIVIDE(i: number): TerminalNode;
	public DIVIDE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.DIVIDE);
		} else {
			return this.getToken(CanonParser.DIVIDE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_multiplicativeExpression; }
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


export class PrimaryExpressionContext extends ParserRuleContext {
	public memberAccess(): MemberAccessContext | undefined {
		return this.tryGetRuleContext(0, MemberAccessContext);
	}
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(CanonParser.IDENTIFIER, 0); }
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public stringInterpolation(): StringInterpolationContext | undefined {
		return this.tryGetRuleContext(0, StringInterpolationContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.RPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_primaryExpression; }
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


export class FunctionCallContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(CanonParser.IDENTIFIER, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CanonParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CanonParser.RPAREN, 0); }
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(CanonParser.LBRACE, 0); }
	public constructionBody(): ConstructionBodyContext | undefined {
		return this.tryGetRuleContext(0, ConstructionBodyContext);
	}
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(CanonParser.RBRACE, 0); }
	public memberAccess(): MemberAccessContext | undefined {
		return this.tryGetRuleContext(0, MemberAccessContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
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


export class MemberAccessContext extends ParserRuleContext {
	public THIS(): TerminalNode | undefined { return this.tryGetToken(CanonParser.THIS, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CanonParser.DOT, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.IDENTIFIER);
		} else {
			return this.getToken(CanonParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_memberAccess; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterMemberAccess) {
			listener.enterMemberAccess(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitMemberAccess) {
			listener.exitMemberAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitMemberAccess) {
			return visitor.visitMemberAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringInterpolationContext extends ParserRuleContext {
	public BACKTICK(): TerminalNode[];
	public BACKTICK(i: number): TerminalNode;
	public BACKTICK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.BACKTICK);
		} else {
			return this.getToken(CanonParser.BACKTICK, i);
		}
	}
	public stringContent(): StringContentContext {
		return this.getRuleContext(0, StringContentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_stringInterpolation; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterStringInterpolation) {
			listener.enterStringInterpolation(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitStringInterpolation) {
			listener.exitStringInterpolation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitStringInterpolation) {
			return visitor.visitStringInterpolation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContentContext extends ParserRuleContext {
	public interpolationExpression(): InterpolationExpressionContext[];
	public interpolationExpression(i: number): InterpolationExpressionContext;
	public interpolationExpression(i?: number): InterpolationExpressionContext | InterpolationExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterpolationExpressionContext);
		} else {
			return this.getRuleContext(i, InterpolationExpressionContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.DOT);
		} else {
			return this.getToken(CanonParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_stringContent; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterStringContent) {
			listener.enterStringContent(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitStringContent) {
			listener.exitStringContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitStringContent) {
			return visitor.visitStringContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterpolationExpressionContext extends ParserRuleContext {
	public INTERPOLATION_START(): TerminalNode { return this.getToken(CanonParser.INTERPOLATION_START, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(CanonParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_interpolationExpression; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterInterpolationExpression) {
			listener.enterInterpolationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitInterpolationExpression) {
			listener.exitInterpolationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitInterpolationExpression) {
			return visitor.visitInterpolationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(CanonParser.STRING_LITERAL, 0); }
	public INTEGER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(CanonParser.INTEGER_LITERAL, 0); }
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


export class AnnotationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(CanonParser.AT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(CanonParser.IDENTIFIER, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(CanonParser.STRING_LITERAL, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.RPAREN, 0); }
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


