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
	public static readonly SCHEMA = 2;
	public static readonly STRUCT = 3;
	public static readonly MIXIN = 4;
	public static readonly FUN = 5;
	public static readonly DECLARE = 6;
	public static readonly VAL = 7;
	public static readonly VAR = 8;
	public static readonly RETURN = 9;
	public static readonly FOR = 10;
	public static readonly IN = 11;
	public static readonly THIS = 12;
	public static readonly STRING_TYPE = 13;
	public static readonly INT_TYPE = 14;
	public static readonly SCHEMA_DIRECTIVE = 15;
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
	public static readonly INTERPOLATION_TEXT = 45;
	public static readonly INTERPOLATION_START = 46;
	public static readonly INTERPOLATION_DOLLAR = 47;
	public static readonly INTERPOLATION_END = 48;
	public static readonly EXPR_PLUS = 49;
	public static readonly EXPR_MINUS = 50;
	public static readonly EXPR_MULTIPLY = 51;
	public static readonly EXPR_DIVIDE = 52;
	public static readonly EXPR_EQUALS = 53;
	public static readonly EXPR_NOT_EQUALS = 54;
	public static readonly EXPR_LESS_THAN = 55;
	public static readonly EXPR_GREATER_THAN = 56;
	public static readonly EXPR_LESS_EQUALS = 57;
	public static readonly EXPR_GREATER_EQUALS = 58;
	public static readonly EXPR_DOT = 59;
	public static readonly EXPR_COMMA = 60;
	public static readonly EXPR_LPAREN = 61;
	public static readonly EXPR_RPAREN = 62;
	public static readonly EXPR_RBRACE = 63;
	public static readonly EXPR_IDENTIFIER = 64;
	public static readonly EXPR_INTEGER_LITERAL = 65;
	public static readonly EXPR_STRING_LITERAL = 66;
	public static readonly EXPR_WS = 67;
	public static readonly RULE_program = 0;
	public static readonly RULE_configurationCall = 1;
	public static readonly RULE_schemaImport = 2;
	public static readonly RULE_schemaDirective = 3;
	public static readonly RULE_schemaDefinition = 4;
	public static readonly RULE_schemaMember = 5;
	public static readonly RULE_structDefinition = 6;
	public static readonly RULE_structContent = 7;
	public static readonly RULE_mixinDeclaration = 8;
	public static readonly RULE_structMember = 9;
	public static readonly RULE_methodDefinition = 10;
	public static readonly RULE_functionDefinition = 11;
	public static readonly RULE_functionBody = 12;
	public static readonly RULE_parameterList = 13;
	public static readonly RULE_parameter = 14;
	public static readonly RULE_typeReference = 15;
	public static readonly RULE_statement = 16;
	public static readonly RULE_variableDeclaration = 17;
	public static readonly RULE_assignment = 18;
	public static readonly RULE_expressionStatement = 19;
	public static readonly RULE_returnStatement = 20;
	public static readonly RULE_forStatement = 21;
	public static readonly RULE_constructionBody = 22;
	public static readonly RULE_expression = 23;
	public static readonly RULE_comparisonExpression = 24;
	public static readonly RULE_additiveExpression = 25;
	public static readonly RULE_multiplicativeExpression = 26;
	public static readonly RULE_primaryExpression = 27;
	public static readonly RULE_functionCall = 28;
	public static readonly RULE_argumentList = 29;
	public static readonly RULE_memberAccess = 30;
	public static readonly RULE_stringInterpolation = 31;
	public static readonly RULE_interpolationContent = 32;
	public static readonly RULE_interpolationExpression = 33;
	public static readonly RULE_exprModeExpression = 34;
	public static readonly RULE_exprModeComparison = 35;
	public static readonly RULE_exprModeAdditive = 36;
	public static readonly RULE_exprModeMultiplicative = 37;
	public static readonly RULE_exprModePrimary = 38;
	public static readonly RULE_exprModeMemberAccess = 39;
	public static readonly RULE_exprModeArgumentList = 40;
	public static readonly RULE_literal = 41;
	public static readonly RULE_annotation = 42;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "configurationCall", "schemaImport", "schemaDirective", "schemaDefinition", 
		"schemaMember", "structDefinition", "structContent", "mixinDeclaration", 
		"structMember", "methodDefinition", "functionDefinition", "functionBody", 
		"parameterList", "parameter", "typeReference", "statement", "variableDeclaration", 
		"assignment", "expressionStatement", "returnStatement", "forStatement", 
		"constructionBody", "expression", "comparisonExpression", "additiveExpression", 
		"multiplicativeExpression", "primaryExpression", "functionCall", "argumentList", 
		"memberAccess", "stringInterpolation", "interpolationContent", "interpolationExpression", 
		"exprModeExpression", "exprModeComparison", "exprModeAdditive", "exprModeMultiplicative", 
		"exprModePrimary", "exprModeMemberAccess", "exprModeArgumentList", "literal", 
		"annotation",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'schema'", "'struct'", "'mixin'", "'fun'", "'declare'", 
		"'val'", "'var'", "'return'", "'for'", "'in'", "'this'", "'string'", "'int'", 
		"'#schema'", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'='", "'..'", undefined, 
		"';'", undefined, "':'", "'?'", "'@'", undefined, undefined, "'{'", undefined, 
		"'['", "']'", undefined, undefined, undefined, undefined, undefined, undefined, 
		"'${'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WS", "SCHEMA", "STRUCT", "MIXIN", "FUN", "DECLARE", "VAL", 
		"VAR", "RETURN", "FOR", "IN", "THIS", "STRING_TYPE", "INT_TYPE", "SCHEMA_DIRECTIVE", 
		"PLUS", "MINUS", "MULTIPLY", "DIVIDE", "EQUALS", "NOT_EQUALS", "LESS_THAN", 
		"GREATER_THAN", "LESS_EQUALS", "GREATER_EQUALS", "ASSIGN", "RANGE", "DOT", 
		"SEMICOLON", "COMMA", "COLON", "QUESTION", "AT", "LPAREN", "RPAREN", "LBRACE", 
		"RBRACE", "LBRACKET", "RBRACKET", "BACKTICK", "STRING_LITERAL", "INTEGER_LITERAL", 
		"IDENTIFIER", "COMMENT", "INTERPOLATION_TEXT", "INTERPOLATION_START", 
		"INTERPOLATION_DOLLAR", "INTERPOLATION_END", "EXPR_PLUS", "EXPR_MINUS", 
		"EXPR_MULTIPLY", "EXPR_DIVIDE", "EXPR_EQUALS", "EXPR_NOT_EQUALS", "EXPR_LESS_THAN", 
		"EXPR_GREATER_THAN", "EXPR_LESS_EQUALS", "EXPR_GREATER_EQUALS", "EXPR_DOT", 
		"EXPR_COMMA", "EXPR_LPAREN", "EXPR_RPAREN", "EXPR_RBRACE", "EXPR_IDENTIFIER", 
		"EXPR_INTEGER_LITERAL", "EXPR_STRING_LITERAL", "EXPR_WS",
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
			this.state = 89;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.SCHEMA) | (1 << CanonParser.STRUCT) | (1 << CanonParser.FUN) | (1 << CanonParser.DECLARE) | (1 << CanonParser.VAL) | (1 << CanonParser.VAR) | (1 << CanonParser.RETURN) | (1 << CanonParser.FOR) | (1 << CanonParser.THIS) | (1 << CanonParser.SCHEMA_DIRECTIVE))) !== 0) || _la === CanonParser.AT || _la === CanonParser.IDENTIFIER) {
				{
				{
				this.state = 86;
				this.statement();
				}
				}
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 92;
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
	public configurationCall(): ConfigurationCallContext {
		let _localctx: ConfigurationCallContext = new ConfigurationCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CanonParser.RULE_configurationCall);
		let _la: number;
		try {
			this.state = 112;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 94;
				this.match(CanonParser.IDENTIFIER);
				{
				this.state = 95;
				this.match(CanonParser.LPAREN);
				this.state = 97;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (CanonParser.THIS - 12)) | (1 << (CanonParser.LPAREN - 12)) | (1 << (CanonParser.BACKTICK - 12)) | (1 << (CanonParser.STRING_LITERAL - 12)) | (1 << (CanonParser.INTEGER_LITERAL - 12)) | (1 << (CanonParser.IDENTIFIER - 12)))) !== 0)) {
					{
					this.state = 96;
					this.argumentList();
					}
				}

				this.state = 99;
				this.match(CanonParser.RPAREN);
				}
				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.LBRACE) {
					{
					this.state = 101;
					this.match(CanonParser.LBRACE);
					this.state = 102;
					this.constructionBody();
					this.state = 103;
					this.match(CanonParser.RBRACE);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 107;
				this.match(CanonParser.IDENTIFIER);
				this.state = 108;
				this.match(CanonParser.LBRACE);
				this.state = 109;
				this.constructionBody();
				this.state = 110;
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
	public schemaImport(): SchemaImportContext {
		let _localctx: SchemaImportContext = new SchemaImportContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CanonParser.RULE_schemaImport);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			this.match(CanonParser.SCHEMA);
			this.state = 115;
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
	public schemaDirective(): SchemaDirectiveContext {
		let _localctx: SchemaDirectiveContext = new SchemaDirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CanonParser.RULE_schemaDirective);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this.match(CanonParser.SCHEMA_DIRECTIVE);
			this.state = 118;
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
		this.enterRule(_localctx, 8, CanonParser.RULE_schemaDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this.match(CanonParser.SCHEMA);
			this.state = 121;
			this.match(CanonParser.LBRACE);
			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.AT || _la === CanonParser.IDENTIFIER) {
				{
				{
				this.state = 122;
				this.schemaMember();
				}
				}
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 128;
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
		this.enterRule(_localctx, 10, CanonParser.RULE_schemaMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.AT) {
				{
				{
				this.state = 130;
				this.annotation();
				}
				}
				this.state = 135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 136;
			this.match(CanonParser.IDENTIFIER);
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 16)) & ~0x1F) === 0 && ((1 << (_la - 16)) & ((1 << (CanonParser.PLUS - 16)) | (1 << (CanonParser.MULTIPLY - 16)) | (1 << (CanonParser.QUESTION - 16)))) !== 0)) {
				{
				this.state = 137;
				_la = this._input.LA(1);
				if (!(((((_la - 16)) & ~0x1F) === 0 && ((1 << (_la - 16)) & ((1 << (CanonParser.PLUS - 16)) | (1 << (CanonParser.MULTIPLY - 16)) | (1 << (CanonParser.QUESTION - 16)))) !== 0))) {
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

			this.state = 140;
			this.match(CanonParser.COLON);
			this.state = 141;
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
		this.enterRule(_localctx, 12, CanonParser.RULE_structDefinition);
		let _la: number;
		try {
			this.state = 157;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 143;
				this.match(CanonParser.STRUCT);
				this.state = 144;
				this.match(CanonParser.IDENTIFIER);
				this.state = 145;
				this.match(CanonParser.LBRACE);
				this.state = 149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CanonParser.MIXIN || _la === CanonParser.AT || _la === CanonParser.IDENTIFIER) {
					{
					{
					this.state = 146;
					this.structContent();
					}
					}
					this.state = 151;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 152;
				this.match(CanonParser.RBRACE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 153;
				this.match(CanonParser.STRUCT);
				this.state = 154;
				this.match(CanonParser.IDENTIFIER);
				this.state = 155;
				this.match(CanonParser.ASSIGN);
				this.state = 156;
				this.typeReference();
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
	public structContent(): StructContentContext {
		let _localctx: StructContentContext = new StructContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CanonParser.RULE_structContent);
		try {
			this.state = 162;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 159;
				this.mixinDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 160;
				this.structMember();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 161;
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
	public mixinDeclaration(): MixinDeclarationContext {
		let _localctx: MixinDeclarationContext = new MixinDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CanonParser.RULE_mixinDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			this.match(CanonParser.MIXIN);
			this.state = 165;
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
	public structMember(): StructMemberContext {
		let _localctx: StructMemberContext = new StructMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CanonParser.RULE_structMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.AT) {
				{
				{
				this.state = 167;
				this.annotation();
				}
				}
				this.state = 172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 173;
			this.match(CanonParser.IDENTIFIER);
			this.state = 175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.QUESTION) {
				{
				this.state = 174;
				this.match(CanonParser.QUESTION);
				}
			}

			this.state = 177;
			this.match(CanonParser.COLON);
			this.state = 178;
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
	public methodDefinition(): MethodDefinitionContext {
		let _localctx: MethodDefinitionContext = new MethodDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CanonParser.RULE_methodDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.AT) {
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
			this.state = 186;
			this.match(CanonParser.IDENTIFIER);
			this.state = 187;
			this.match(CanonParser.LPAREN);
			this.state = 189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.IDENTIFIER) {
				{
				this.state = 188;
				this.parameterList();
				}
			}

			this.state = 191;
			this.match(CanonParser.RPAREN);
			this.state = 194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 192;
				this.match(CanonParser.COLON);
				this.state = 193;
				this.typeReference();
				}
			}

			this.state = 196;
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
		this.enterRule(_localctx, 22, CanonParser.RULE_functionDefinition);
		let _la: number;
		try {
			this.state = 237;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CanonParser.AT) {
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
				this.state = 204;
				this.match(CanonParser.FUN);
				this.state = 205;
				this.match(CanonParser.IDENTIFIER);
				this.state = 206;
				this.match(CanonParser.LPAREN);
				this.state = 208;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.IDENTIFIER) {
					{
					this.state = 207;
					this.parameterList();
					}
				}

				this.state = 210;
				this.match(CanonParser.RPAREN);
				this.state = 213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.COLON) {
					{
					this.state = 211;
					this.match(CanonParser.COLON);
					this.state = 212;
					this.typeReference();
					}
				}

				this.state = 215;
				this.functionBody();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CanonParser.AT) {
					{
					{
					this.state = 216;
					this.annotation();
					}
					}
					this.state = 221;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 222;
				this.match(CanonParser.DECLARE);
				this.state = 223;
				this.match(CanonParser.FUN);
				this.state = 224;
				this.match(CanonParser.IDENTIFIER);
				this.state = 225;
				this.match(CanonParser.LPAREN);
				this.state = 227;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.IDENTIFIER) {
					{
					this.state = 226;
					this.parameterList();
					}
				}

				this.state = 229;
				this.match(CanonParser.RPAREN);
				this.state = 232;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.COLON) {
					{
					this.state = 230;
					this.match(CanonParser.COLON);
					this.state = 231;
					this.typeReference();
					}
				}

				this.state = 235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.SEMICOLON) {
					{
					this.state = 234;
					this.match(CanonParser.SEMICOLON);
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
		this.enterRule(_localctx, 24, CanonParser.RULE_functionBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 239;
			this.match(CanonParser.LBRACE);
			this.state = 243;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.SCHEMA) | (1 << CanonParser.STRUCT) | (1 << CanonParser.FUN) | (1 << CanonParser.DECLARE) | (1 << CanonParser.VAL) | (1 << CanonParser.VAR) | (1 << CanonParser.RETURN) | (1 << CanonParser.FOR) | (1 << CanonParser.THIS) | (1 << CanonParser.SCHEMA_DIRECTIVE))) !== 0) || _la === CanonParser.AT || _la === CanonParser.IDENTIFIER) {
				{
				{
				this.state = 240;
				this.statement();
				}
				}
				this.state = 245;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 246;
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
		this.enterRule(_localctx, 26, CanonParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 248;
			this.parameter();
			this.state = 253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.COMMA) {
				{
				{
				this.state = 249;
				this.match(CanonParser.COMMA);
				this.state = 250;
				this.parameter();
				}
				}
				this.state = 255;
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
		this.enterRule(_localctx, 28, CanonParser.RULE_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			this.match(CanonParser.IDENTIFIER);
			this.state = 257;
			this.match(CanonParser.COLON);
			this.state = 258;
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
		this.enterRule(_localctx, 30, CanonParser.RULE_typeReference);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 260;
			_la = this._input.LA(1);
			if (!(((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (CanonParser.STRING_TYPE - 13)) | (1 << (CanonParser.INT_TYPE - 13)) | (1 << (CanonParser.IDENTIFIER - 13)))) !== 0))) {
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
		this.enterRule(_localctx, 32, CanonParser.RULE_statement);
		try {
			this.state = 272;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 262;
				this.structDefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 263;
				this.functionDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 264;
				this.variableDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 265;
				this.assignment();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 266;
				this.returnStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 267;
				this.forStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 268;
				this.configurationCall();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 269;
				this.schemaDirective();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 270;
				this.schemaImport();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 271;
				this.schemaDefinition();
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
		this.enterRule(_localctx, 34, CanonParser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 274;
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
			this.state = 275;
			this.match(CanonParser.IDENTIFIER);
			this.state = 276;
			this.match(CanonParser.ASSIGN);
			this.state = 277;
			this.expression();
			this.state = 279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.SEMICOLON) {
				{
				this.state = 278;
				this.match(CanonParser.SEMICOLON);
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
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CanonParser.RULE_assignment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 288;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 281;
				this.match(CanonParser.IDENTIFIER);
				}
				break;

			case 2:
				{
				this.state = 282;
				this.match(CanonParser.THIS);
				this.state = 283;
				this.match(CanonParser.DOT);
				this.state = 284;
				this.match(CanonParser.IDENTIFIER);
				}
				break;

			case 3:
				{
				this.state = 285;
				this.match(CanonParser.IDENTIFIER);
				this.state = 286;
				this.match(CanonParser.DOT);
				this.state = 287;
				this.match(CanonParser.IDENTIFIER);
				}
				break;
			}
			this.state = 290;
			this.match(CanonParser.ASSIGN);
			this.state = 291;
			this.expression();
			this.state = 293;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.SEMICOLON) {
				{
				this.state = 292;
				this.match(CanonParser.SEMICOLON);
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
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CanonParser.RULE_expressionStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			this.expression();
			this.state = 297;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.SEMICOLON) {
				{
				this.state = 296;
				this.match(CanonParser.SEMICOLON);
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
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CanonParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this.match(CanonParser.RETURN);
			this.state = 301;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 300;
				this.expression();
				}
				break;
			}
			this.state = 304;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.SEMICOLON) {
				{
				this.state = 303;
				this.match(CanonParser.SEMICOLON);
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
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CanonParser.RULE_forStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 306;
			this.match(CanonParser.FOR);
			this.state = 307;
			this.match(CanonParser.LPAREN);
			this.state = 308;
			this.match(CanonParser.IDENTIFIER);
			this.state = 309;
			this.match(CanonParser.IN);
			this.state = 310;
			this.expression();
			this.state = 311;
			this.match(CanonParser.RPAREN);
			this.state = 312;
			this.match(CanonParser.LBRACE);
			this.state = 316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.SCHEMA) | (1 << CanonParser.STRUCT) | (1 << CanonParser.FUN) | (1 << CanonParser.DECLARE) | (1 << CanonParser.VAL) | (1 << CanonParser.VAR) | (1 << CanonParser.RETURN) | (1 << CanonParser.FOR) | (1 << CanonParser.THIS) | (1 << CanonParser.SCHEMA_DIRECTIVE))) !== 0) || _la === CanonParser.AT || _la === CanonParser.IDENTIFIER) {
				{
				{
				this.state = 313;
				this.statement();
				}
				}
				this.state = 318;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 319;
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
	public constructionBody(): ConstructionBodyContext {
		let _localctx: ConstructionBodyContext = new ConstructionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CanonParser.RULE_constructionBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 327;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.VAL) | (1 << CanonParser.VAR) | (1 << CanonParser.FOR) | (1 << CanonParser.THIS))) !== 0) || _la === CanonParser.IDENTIFIER) {
				{
				this.state = 325;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
				case 1:
					{
					this.state = 321;
					this.assignment();
					}
					break;

				case 2:
					{
					this.state = 322;
					this.variableDeclaration();
					}
					break;

				case 3:
					{
					this.state = 323;
					this.forStatement();
					}
					break;

				case 4:
					{
					this.state = 324;
					this.configurationCall();
					}
					break;
				}
				}
				this.state = 329;
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
		this.enterRule(_localctx, 46, CanonParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 330;
			this.comparisonExpression();
			this.state = 335;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.RANGE) {
				{
				{
				this.state = 331;
				this.match(CanonParser.RANGE);
				this.state = 332;
				this.comparisonExpression();
				}
				}
				this.state = 337;
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
		this.enterRule(_localctx, 48, CanonParser.RULE_comparisonExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 338;
			this.additiveExpression();
			this.state = 343;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.EQUALS) | (1 << CanonParser.NOT_EQUALS) | (1 << CanonParser.LESS_THAN) | (1 << CanonParser.GREATER_THAN) | (1 << CanonParser.LESS_EQUALS) | (1 << CanonParser.GREATER_EQUALS))) !== 0)) {
				{
				{
				this.state = 339;
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
				this.state = 340;
				this.additiveExpression();
				}
				}
				this.state = 345;
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
		this.enterRule(_localctx, 50, CanonParser.RULE_additiveExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 346;
			this.multiplicativeExpression();
			this.state = 351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.PLUS || _la === CanonParser.MINUS) {
				{
				{
				this.state = 347;
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
				this.state = 348;
				this.multiplicativeExpression();
				}
				}
				this.state = 353;
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
		this.enterRule(_localctx, 52, CanonParser.RULE_multiplicativeExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 354;
			this.primaryExpression();
			this.state = 359;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.MULTIPLY || _la === CanonParser.DIVIDE) {
				{
				{
				this.state = 355;
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
				this.state = 356;
				this.primaryExpression();
				}
				}
				this.state = 361;
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
		this.enterRule(_localctx, 54, CanonParser.RULE_primaryExpression);
		try {
			this.state = 374;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 362;
				this.literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 363;
				this.stringInterpolation();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 364;
				this.match(CanonParser.IDENTIFIER);
				this.state = 365;
				this.match(CanonParser.LPAREN);
				this.state = 366;
				this.match(CanonParser.RPAREN);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 367;
				this.functionCall();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 368;
				this.memberAccess();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 369;
				this.match(CanonParser.IDENTIFIER);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 370;
				this.match(CanonParser.LPAREN);
				this.state = 371;
				this.expression();
				this.state = 372;
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
		this.enterRule(_localctx, 56, CanonParser.RULE_functionCall);
		let _la: number;
		try {
			this.state = 400;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 376;
				this.match(CanonParser.IDENTIFIER);
				this.state = 377;
				this.match(CanonParser.LPAREN);
				this.state = 379;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (CanonParser.THIS - 12)) | (1 << (CanonParser.LPAREN - 12)) | (1 << (CanonParser.BACKTICK - 12)) | (1 << (CanonParser.STRING_LITERAL - 12)) | (1 << (CanonParser.INTEGER_LITERAL - 12)) | (1 << (CanonParser.IDENTIFIER - 12)))) !== 0)) {
					{
					this.state = 378;
					this.argumentList();
					}
				}

				this.state = 381;
				this.match(CanonParser.RPAREN);
				this.state = 386;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.LBRACE) {
					{
					this.state = 382;
					this.match(CanonParser.LBRACE);
					this.state = 383;
					this.constructionBody();
					this.state = 384;
					this.match(CanonParser.RBRACE);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 388;
				this.memberAccess();
				this.state = 389;
				this.match(CanonParser.LPAREN);
				this.state = 391;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (CanonParser.THIS - 12)) | (1 << (CanonParser.LPAREN - 12)) | (1 << (CanonParser.BACKTICK - 12)) | (1 << (CanonParser.STRING_LITERAL - 12)) | (1 << (CanonParser.INTEGER_LITERAL - 12)) | (1 << (CanonParser.IDENTIFIER - 12)))) !== 0)) {
					{
					this.state = 390;
					this.argumentList();
					}
				}

				this.state = 393;
				this.match(CanonParser.RPAREN);
				this.state = 398;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.LBRACE) {
					{
					this.state = 394;
					this.match(CanonParser.LBRACE);
					this.state = 395;
					this.constructionBody();
					this.state = 396;
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
		this.enterRule(_localctx, 58, CanonParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 402;
			this.expression();
			this.state = 407;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.COMMA) {
				{
				{
				this.state = 403;
				this.match(CanonParser.COMMA);
				this.state = 404;
				this.expression();
				}
				}
				this.state = 409;
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
		this.enterRule(_localctx, 60, CanonParser.RULE_memberAccess);
		try {
			this.state = 416;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.THIS:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 410;
				this.match(CanonParser.THIS);
				this.state = 411;
				this.match(CanonParser.DOT);
				this.state = 412;
				this.match(CanonParser.IDENTIFIER);
				}
				}
				break;
			case CanonParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 413;
				this.match(CanonParser.IDENTIFIER);
				this.state = 414;
				this.match(CanonParser.DOT);
				this.state = 415;
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
		this.enterRule(_localctx, 62, CanonParser.RULE_stringInterpolation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 418;
			this.match(CanonParser.BACKTICK);
			this.state = 422;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (CanonParser.INTERPOLATION_TEXT - 45)) | (1 << (CanonParser.INTERPOLATION_START - 45)) | (1 << (CanonParser.INTERPOLATION_DOLLAR - 45)))) !== 0)) {
				{
				{
				this.state = 419;
				this.interpolationContent();
				}
				}
				this.state = 424;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 425;
			this.match(CanonParser.INTERPOLATION_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
	public interpolationContent(): InterpolationContentContext {
		let _localctx: InterpolationContentContext = new InterpolationContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, CanonParser.RULE_interpolationContent);
		try {
			this.state = 430;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.INTERPOLATION_TEXT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 427;
				this.match(CanonParser.INTERPOLATION_TEXT);
				}
				break;
			case CanonParser.INTERPOLATION_DOLLAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 428;
				this.match(CanonParser.INTERPOLATION_DOLLAR);
				}
				break;
			case CanonParser.INTERPOLATION_START:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 429;
				this.interpolationExpression();
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
	public interpolationExpression(): InterpolationExpressionContext {
		let _localctx: InterpolationExpressionContext = new InterpolationExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, CanonParser.RULE_interpolationExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 432;
			this.match(CanonParser.INTERPOLATION_START);
			this.state = 433;
			this.exprModeExpression();
			this.state = 434;
			this.match(CanonParser.EXPR_RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
	public exprModeExpression(): ExprModeExpressionContext {
		let _localctx: ExprModeExpressionContext = new ExprModeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, CanonParser.RULE_exprModeExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 436;
			this.exprModeComparison();
			this.state = 441;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.RANGE) {
				{
				{
				this.state = 437;
				this.match(CanonParser.RANGE);
				this.state = 438;
				this.exprModeComparison();
				}
				}
				this.state = 443;
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
	public exprModeComparison(): ExprModeComparisonContext {
		let _localctx: ExprModeComparisonContext = new ExprModeComparisonContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, CanonParser.RULE_exprModeComparison);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 444;
			this.exprModeAdditive();
			this.state = 449;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (CanonParser.EXPR_EQUALS - 53)) | (1 << (CanonParser.EXPR_NOT_EQUALS - 53)) | (1 << (CanonParser.EXPR_LESS_THAN - 53)) | (1 << (CanonParser.EXPR_GREATER_THAN - 53)) | (1 << (CanonParser.EXPR_LESS_EQUALS - 53)) | (1 << (CanonParser.EXPR_GREATER_EQUALS - 53)))) !== 0)) {
				{
				{
				this.state = 445;
				_la = this._input.LA(1);
				if (!(((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (CanonParser.EXPR_EQUALS - 53)) | (1 << (CanonParser.EXPR_NOT_EQUALS - 53)) | (1 << (CanonParser.EXPR_LESS_THAN - 53)) | (1 << (CanonParser.EXPR_GREATER_THAN - 53)) | (1 << (CanonParser.EXPR_LESS_EQUALS - 53)) | (1 << (CanonParser.EXPR_GREATER_EQUALS - 53)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 446;
				this.exprModeAdditive();
				}
				}
				this.state = 451;
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
	public exprModeAdditive(): ExprModeAdditiveContext {
		let _localctx: ExprModeAdditiveContext = new ExprModeAdditiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, CanonParser.RULE_exprModeAdditive);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 452;
			this.exprModeMultiplicative();
			this.state = 457;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.EXPR_PLUS || _la === CanonParser.EXPR_MINUS) {
				{
				{
				this.state = 453;
				_la = this._input.LA(1);
				if (!(_la === CanonParser.EXPR_PLUS || _la === CanonParser.EXPR_MINUS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 454;
				this.exprModeMultiplicative();
				}
				}
				this.state = 459;
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
	public exprModeMultiplicative(): ExprModeMultiplicativeContext {
		let _localctx: ExprModeMultiplicativeContext = new ExprModeMultiplicativeContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, CanonParser.RULE_exprModeMultiplicative);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 460;
			this.exprModePrimary();
			this.state = 465;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.EXPR_MULTIPLY || _la === CanonParser.EXPR_DIVIDE) {
				{
				{
				this.state = 461;
				_la = this._input.LA(1);
				if (!(_la === CanonParser.EXPR_MULTIPLY || _la === CanonParser.EXPR_DIVIDE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 462;
				this.exprModePrimary();
				}
				}
				this.state = 467;
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
	public exprModePrimary(): ExprModePrimaryContext {
		let _localctx: ExprModePrimaryContext = new ExprModePrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, CanonParser.RULE_exprModePrimary);
		let _la: number;
		try {
			this.state = 485;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 468;
				this.match(CanonParser.EXPR_STRING_LITERAL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 469;
				this.match(CanonParser.EXPR_INTEGER_LITERAL);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 470;
				this.match(CanonParser.EXPR_IDENTIFIER);
				this.state = 471;
				this.match(CanonParser.EXPR_LPAREN);
				this.state = 472;
				this.match(CanonParser.EXPR_RPAREN);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 473;
				this.match(CanonParser.EXPR_IDENTIFIER);
				this.state = 474;
				this.match(CanonParser.EXPR_LPAREN);
				this.state = 476;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (CanonParser.EXPR_LPAREN - 61)) | (1 << (CanonParser.EXPR_IDENTIFIER - 61)) | (1 << (CanonParser.EXPR_INTEGER_LITERAL - 61)) | (1 << (CanonParser.EXPR_STRING_LITERAL - 61)))) !== 0)) {
					{
					this.state = 475;
					this.exprModeArgumentList();
					}
				}

				this.state = 478;
				this.match(CanonParser.EXPR_RPAREN);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 479;
				this.exprModeMemberAccess();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 480;
				this.match(CanonParser.EXPR_IDENTIFIER);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 481;
				this.match(CanonParser.EXPR_LPAREN);
				this.state = 482;
				this.exprModeExpression();
				this.state = 483;
				this.match(CanonParser.EXPR_RPAREN);
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
	public exprModeMemberAccess(): ExprModeMemberAccessContext {
		let _localctx: ExprModeMemberAccessContext = new ExprModeMemberAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, CanonParser.RULE_exprModeMemberAccess);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 487;
			this.match(CanonParser.EXPR_IDENTIFIER);
			this.state = 488;
			this.match(CanonParser.EXPR_DOT);
			this.state = 489;
			this.match(CanonParser.EXPR_IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
	public exprModeArgumentList(): ExprModeArgumentListContext {
		let _localctx: ExprModeArgumentListContext = new ExprModeArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, CanonParser.RULE_exprModeArgumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 491;
			this.exprModeExpression();
			this.state = 496;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.EXPR_COMMA) {
				{
				{
				this.state = 492;
				this.match(CanonParser.EXPR_COMMA);
				this.state = 493;
				this.exprModeExpression();
				}
				}
				this.state = 498;
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, CanonParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 499;
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
		this.enterRule(_localctx, 84, CanonParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 501;
			this.match(CanonParser.AT);
			this.state = 502;
			this.match(CanonParser.IDENTIFIER);
			this.state = 509;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.STRING_LITERAL:
				{
				this.state = 503;
				this.match(CanonParser.STRING_LITERAL);
				}
				break;
			case CanonParser.LPAREN:
				{
				this.state = 504;
				this.match(CanonParser.LPAREN);
				this.state = 506;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (CanonParser.THIS - 12)) | (1 << (CanonParser.LPAREN - 12)) | (1 << (CanonParser.BACKTICK - 12)) | (1 << (CanonParser.STRING_LITERAL - 12)) | (1 << (CanonParser.INTEGER_LITERAL - 12)) | (1 << (CanonParser.IDENTIFIER - 12)))) !== 0)) {
					{
					this.state = 505;
					this.argumentList();
					}
				}

				this.state = 508;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03E\u0202\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x03\x02\x07\x02Z\n\x02\f\x02\x0E\x02]\v\x02\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x03\x05\x03d\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x05\x03l\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05" +
		"\x03s\n\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x06\x07\x06~\n\x06\f\x06\x0E\x06\x81\v\x06\x03\x06\x03\x06\x03" +
		"\x07\x07\x07\x86\n\x07\f\x07\x0E\x07\x89\v\x07\x03\x07\x03\x07\x05\x07" +
		"\x8D\n\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x07\b\x96\n" +
		"\b\f\b\x0E\b\x99\v\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\xA0\n\b\x03\t" +
		"\x03\t\x03\t\x05\t\xA5\n\t\x03\n\x03\n\x03\n\x03\v\x07\v\xAB\n\v\f\v\x0E" +
		"\v\xAE\v\v\x03\v\x03\v\x05\v\xB2\n\v\x03\v\x03\v\x03\v\x03\f\x07\f\xB8" +
		"\n\f\f\f\x0E\f\xBB\v\f\x03\f\x03\f\x03\f\x05\f\xC0\n\f\x03\f\x03\f\x03" +
		"\f\x05\f\xC5\n\f\x03\f\x03\f\x03\r\x07\r\xCA\n\r\f\r\x0E\r\xCD\v\r\x03" +
		"\r\x03\r\x03\r\x03\r\x05\r\xD3\n\r\x03\r\x03\r\x03\r\x05\r\xD8\n\r\x03" +
		"\r\x03\r\x07\r\xDC\n\r\f\r\x0E\r\xDF\v\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x05\r\xE6\n\r\x03\r\x03\r\x03\r\x05\r\xEB\n\r\x03\r\x05\r\xEE\n\r\x05" +
		"\r\xF0\n\r\x03\x0E\x03\x0E\x07\x0E\xF4\n\x0E\f\x0E\x0E\x0E\xF7\v\x0E\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xFE\n\x0F\f\x0F\x0E\x0F\u0101" +
		"\v\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12" +
		"\u0113\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u011A\n\x13" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0123" +
		"\n\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0128\n\x14\x03\x15\x03\x15\x05" +
		"\x15\u012C\n\x15\x03\x16\x03\x16\x05\x16\u0130\n\x16\x03\x16\x05\x16\u0133" +
		"\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x07\x17\u013D\n\x17\f\x17\x0E\x17\u0140\v\x17\x03\x17\x03\x17\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x07\x18\u0148\n\x18\f\x18\x0E\x18\u014B\v\x18" +
		"\x03\x19\x03\x19\x03\x19\x07\x19\u0150\n\x19\f\x19\x0E\x19\u0153\v\x19" +
		"\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u0158\n\x1A\f\x1A\x0E\x1A\u015B\v\x1A" +
		"\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0160\n\x1B\f\x1B\x0E\x1B\u0163\v\x1B" +
		"\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u0168\n\x1C\f\x1C\x0E\x1C\u016B\v\x1C" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0179\n\x1D\x03\x1E\x03\x1E\x03\x1E\x05" +
		"\x1E\u017E\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0185" +
		"\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u018A\n\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x05\x1E\u0191\n\x1E\x05\x1E\u0193\n\x1E\x03\x1F\x03" +
		"\x1F\x03\x1F\x07\x1F\u0198\n\x1F\f\x1F\x0E\x1F\u019B\v\x1F\x03 \x03 \x03" +
		" \x03 \x03 \x03 \x05 \u01A3\n \x03!\x03!\x07!\u01A7\n!\f!\x0E!\u01AA\v" +
		"!\x03!\x03!\x03\"\x03\"\x03\"\x05\"\u01B1\n\"\x03#\x03#\x03#\x03#\x03" +
		"$\x03$\x03$\x07$\u01BA\n$\f$\x0E$\u01BD\v$\x03%\x03%\x03%\x07%\u01C2\n" +
		"%\f%\x0E%\u01C5\v%\x03&\x03&\x03&\x07&\u01CA\n&\f&\x0E&\u01CD\v&\x03\'" +
		"\x03\'\x03\'\x07\'\u01D2\n\'\f\'\x0E\'\u01D5\v\'\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x05(\u01DF\n(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x05" +
		"(\u01E8\n(\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x07*\u01F1\n*\f*\x0E*\u01F4" +
		"\v*\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x05,\u01FD\n,\x03,\x05,\u0200\n" +
		",\x03,\x02\x02\x02-\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
		">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02\x02" +
		"\f\x05\x02\x12\x12\x14\x14\"\"\x04\x02\x0F\x10--\x03\x02\t\n\x03\x02\x16" +
		"\x1B\x03\x02\x12\x13\x03\x02\x14\x15\x03\x027<\x03\x0234\x03\x0256\x03" +
		"\x02+,\x02\u0228\x02[\x03\x02\x02\x02\x04r\x03\x02\x02\x02\x06t\x03\x02" +
		"\x02\x02\bw\x03\x02\x02\x02\nz\x03\x02\x02\x02\f\x87\x03\x02\x02\x02\x0E" +
		"\x9F\x03\x02\x02\x02\x10\xA4\x03\x02\x02\x02\x12\xA6\x03\x02\x02\x02\x14" +
		"\xAC\x03\x02\x02\x02\x16\xB9\x03\x02\x02\x02\x18\xEF\x03\x02\x02\x02\x1A" +
		"\xF1\x03\x02\x02\x02\x1C\xFA\x03\x02\x02\x02\x1E\u0102\x03\x02\x02\x02" +
		" \u0106\x03\x02\x02\x02\"\u0112\x03\x02\x02\x02$\u0114\x03\x02\x02\x02" +
		"&\u0122\x03\x02\x02\x02(\u0129\x03\x02\x02\x02*\u012D\x03\x02\x02\x02" +
		",\u0134\x03\x02\x02\x02.\u0149\x03\x02\x02\x020\u014C\x03\x02\x02\x02" +
		"2\u0154\x03\x02\x02\x024\u015C\x03\x02\x02\x026\u0164\x03\x02\x02\x02" +
		"8\u0178\x03\x02\x02\x02:\u0192\x03\x02\x02\x02<\u0194\x03\x02\x02\x02" +
		">\u01A2\x03\x02\x02\x02@\u01A4\x03\x02\x02\x02B\u01B0\x03\x02\x02\x02" +
		"D\u01B2\x03\x02\x02\x02F\u01B6\x03\x02\x02\x02H\u01BE\x03\x02\x02\x02" +
		"J\u01C6\x03\x02\x02\x02L\u01CE\x03\x02\x02\x02N\u01E7\x03\x02\x02\x02" +
		"P\u01E9\x03\x02\x02\x02R\u01ED\x03\x02\x02\x02T\u01F5\x03\x02\x02\x02" +
		"V\u01F7\x03\x02\x02\x02XZ\x05\"\x12\x02YX\x03\x02\x02\x02Z]\x03\x02\x02" +
		"\x02[Y\x03\x02\x02\x02[\\\x03\x02\x02\x02\\^\x03\x02\x02\x02][\x03\x02" +
		"\x02\x02^_\x07\x02\x02\x03_\x03\x03\x02\x02\x02`a\x07-\x02\x02ac\x07$" +
		"\x02\x02bd\x05<\x1F\x02cb\x03\x02\x02\x02cd\x03\x02\x02\x02de\x03\x02" +
		"\x02\x02ef\x07%\x02\x02fk\x03\x02\x02\x02gh\x07&\x02\x02hi\x05.\x18\x02" +
		"ij\x07\'\x02\x02jl\x03\x02\x02\x02kg\x03\x02\x02\x02kl\x03\x02\x02\x02" +
		"ls\x03\x02\x02\x02mn\x07-\x02\x02no\x07&\x02\x02op\x05.\x18\x02pq\x07" +
		"\'\x02\x02qs\x03\x02\x02\x02r`\x03\x02\x02\x02rm\x03\x02\x02\x02s\x05" +
		"\x03\x02\x02\x02tu\x07\x04\x02\x02uv\x07+\x02\x02v\x07\x03\x02\x02\x02" +
		"wx\x07\x11\x02\x02xy\x07+\x02\x02y\t\x03\x02\x02\x02z{\x07\x04\x02\x02" +
		"{\x7F\x07&\x02\x02|~\x05\f\x07\x02}|\x03\x02\x02\x02~\x81\x03\x02\x02" +
		"\x02\x7F}\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x82\x03\x02\x02" +
		"\x02\x81\x7F\x03\x02\x02\x02\x82\x83\x07\'\x02\x02\x83\v\x03\x02\x02\x02" +
		"\x84\x86\x05V,\x02\x85\x84\x03\x02\x02\x02\x86\x89\x03\x02\x02\x02\x87" +
		"\x85\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x8A\x03\x02\x02\x02\x89" +
		"\x87\x03\x02\x02\x02\x8A\x8C\x07-\x02\x02\x8B\x8D\t\x02\x02\x02\x8C\x8B" +
		"\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x8F" +
		"\x07!\x02\x02\x8F\x90\x05 \x11\x02\x90\r\x03\x02\x02\x02\x91\x92\x07\x05" +
		"\x02\x02\x92\x93\x07-\x02\x02\x93\x97\x07&\x02\x02\x94\x96\x05\x10\t\x02" +
		"\x95\x94\x03\x02\x02\x02\x96\x99\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02" +
		"\x97\x98\x03\x02\x02\x02\x98\x9A\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02" +
		"\x9A\xA0\x07\'\x02\x02\x9B\x9C\x07\x05\x02\x02\x9C\x9D\x07-\x02\x02\x9D" +
		"\x9E\x07\x1C\x02\x02\x9E\xA0\x05 \x11\x02\x9F\x91\x03\x02\x02\x02\x9F" +
		"\x9B\x03\x02\x02\x02\xA0\x0F\x03\x02\x02\x02\xA1\xA5\x05\x12\n\x02\xA2" +
		"\xA5\x05\x14\v\x02\xA3\xA5\x05\x16\f\x02\xA4\xA1\x03\x02\x02\x02\xA4\xA2" +
		"\x03\x02\x02\x02\xA4\xA3\x03\x02\x02\x02\xA5\x11\x03\x02\x02\x02\xA6\xA7" +
		"\x07\x06\x02\x02\xA7\xA8\x07-\x02\x02\xA8\x13\x03\x02\x02\x02\xA9\xAB" +
		"\x05V,\x02\xAA\xA9\x03\x02\x02\x02\xAB\xAE\x03\x02\x02\x02\xAC\xAA\x03" +
		"\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xAF\x03\x02\x02\x02\xAE\xAC\x03" +
		"\x02\x02\x02\xAF\xB1\x07-\x02\x02\xB0\xB2\x07\"\x02\x02\xB1\xB0\x03\x02" +
		"\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB4\x07!" +
		"\x02\x02\xB4\xB5\x05 \x11\x02\xB5\x15\x03\x02\x02\x02\xB6\xB8\x05V,\x02" +
		"\xB7\xB6\x03\x02\x02\x02\xB8\xBB\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02" +
		"\xB9\xBA\x03\x02\x02\x02\xBA\xBC\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02" +
		"\xBC\xBD\x07-\x02\x02\xBD\xBF\x07$\x02\x02\xBE\xC0\x05\x1C\x0F\x02\xBF" +
		"\xBE\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1" +
		"\xC4\x07%\x02\x02\xC2\xC3\x07!\x02\x02\xC3\xC5\x05 \x11\x02\xC4\xC2\x03" +
		"\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC7\x05" +
		"\x1A\x0E\x02\xC7\x17\x03\x02\x02\x02\xC8\xCA\x05V,\x02\xC9\xC8\x03\x02" +
		"\x02\x02\xCA\xCD\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02\xCB\xCC\x03\x02" +
		"\x02\x02\xCC\xCE\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCE\xCF\x07\x07" +
		"\x02\x02\xCF\xD0\x07-\x02\x02\xD0\xD2\x07$\x02\x02\xD1\xD3\x05\x1C\x0F" +
		"\x02\xD2\xD1\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD4\x03\x02\x02" +
		"\x02\xD4\xD7\x07%\x02\x02\xD5\xD6\x07!\x02\x02\xD6\xD8\x05 \x11\x02\xD7" +
		"\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9" +
		"\xF0\x05\x1A\x0E\x02\xDA\xDC\x05V,\x02\xDB\xDA\x03\x02\x02\x02\xDC\xDF" +
		"\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xE0" +
		"\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xE0\xE1\x07\b\x02\x02\xE1\xE2" +
		"\x07\x07\x02\x02\xE2\xE3\x07-\x02\x02\xE3\xE5\x07$\x02\x02\xE4\xE6\x05" +
		"\x1C\x0F\x02\xE5\xE4\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE7\x03" +
		"\x02\x02\x02\xE7\xEA\x07%\x02\x02\xE8\xE9\x07!\x02\x02\xE9\xEB\x05 \x11" +
		"\x02\xEA\xE8\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xED\x03\x02\x02" +
		"\x02\xEC\xEE\x07\x1F\x02\x02\xED\xEC\x03\x02\x02\x02\xED\xEE\x03\x02\x02" +
		"\x02\xEE\xF0\x03\x02\x02\x02\xEF\xCB\x03\x02\x02\x02\xEF\xDD\x03\x02\x02" +
		"\x02\xF0\x19\x03\x02\x02\x02\xF1\xF5\x07&\x02\x02\xF2\xF4\x05\"\x12\x02" +
		"\xF3\xF2\x03\x02\x02\x02\xF4\xF7\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02" +
		"\xF5\xF6\x03\x02\x02\x02\xF6\xF8\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02" +
		"\xF8\xF9\x07\'\x02\x02\xF9\x1B\x03\x02\x02\x02\xFA\xFF\x05\x1E\x10\x02" +
		"\xFB\xFC\x07 \x02\x02\xFC\xFE\x05\x1E\x10\x02\xFD\xFB\x03\x02\x02\x02" +
		"\xFE\u0101\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\xFF\u0100\x03\x02\x02" +
		"\x02\u0100\x1D\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0102\u0103\x07" +
		"-\x02\x02\u0103\u0104\x07!\x02\x02\u0104\u0105\x05 \x11\x02\u0105\x1F" +
		"\x03\x02\x02\x02\u0106\u0107\t\x03\x02\x02\u0107!\x03\x02\x02\x02\u0108" +
		"\u0113\x05\x0E\b\x02\u0109\u0113\x05\x18\r\x02\u010A\u0113\x05$\x13\x02" +
		"\u010B\u0113\x05&\x14\x02\u010C\u0113\x05*\x16\x02\u010D\u0113\x05,\x17" +
		"\x02\u010E\u0113\x05\x04\x03\x02\u010F\u0113\x05\b\x05\x02\u0110\u0113" +
		"\x05\x06\x04\x02\u0111\u0113\x05\n\x06\x02\u0112\u0108\x03\x02\x02\x02" +
		"\u0112\u0109\x03\x02\x02\x02\u0112\u010A\x03\x02\x02\x02\u0112\u010B\x03" +
		"\x02\x02\x02\u0112\u010C\x03\x02\x02\x02\u0112\u010D\x03\x02\x02\x02\u0112" +
		"\u010E\x03\x02\x02\x02\u0112\u010F\x03\x02\x02\x02\u0112\u0110\x03\x02" +
		"\x02\x02\u0112\u0111\x03\x02\x02\x02\u0113#\x03\x02\x02\x02\u0114\u0115" +
		"\t\x04\x02\x02\u0115\u0116\x07-\x02\x02\u0116\u0117\x07\x1C\x02\x02\u0117" +
		"\u0119\x050\x19\x02\u0118\u011A\x07\x1F\x02\x02\u0119\u0118\x03\x02\x02" +
		"\x02\u0119\u011A\x03\x02\x02\x02\u011A%\x03\x02\x02\x02\u011B\u0123\x07" +
		"-\x02\x02\u011C\u011D\x07\x0E\x02\x02\u011D\u011E\x07\x1E\x02\x02\u011E" +
		"\u0123\x07-\x02\x02\u011F\u0120\x07-\x02\x02\u0120\u0121\x07\x1E\x02\x02" +
		"\u0121\u0123\x07-\x02\x02\u0122\u011B\x03\x02\x02\x02\u0122\u011C\x03" +
		"\x02\x02\x02\u0122\u011F\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124" +
		"\u0125\x07\x1C\x02\x02\u0125\u0127\x050\x19\x02\u0126\u0128\x07\x1F\x02" +
		"\x02\u0127\u0126\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\'\x03" +
		"\x02\x02\x02\u0129\u012B\x050\x19\x02\u012A\u012C\x07\x1F\x02\x02\u012B" +
		"\u012A\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C)\x03\x02\x02" +
		"\x02\u012D\u012F\x07\v\x02\x02\u012E\u0130\x050\x19\x02\u012F\u012E\x03" +
		"\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130\u0132\x03\x02\x02\x02\u0131" +
		"\u0133\x07\x1F\x02\x02\u0132\u0131\x03\x02\x02\x02\u0132\u0133\x03\x02" +
		"\x02\x02\u0133+\x03\x02\x02\x02\u0134\u0135\x07\f\x02\x02\u0135\u0136" +
		"\x07$\x02\x02\u0136\u0137\x07-\x02\x02\u0137\u0138\x07\r\x02\x02\u0138" +
		"\u0139\x050\x19\x02\u0139\u013A\x07%\x02\x02\u013A\u013E\x07&\x02\x02" +
		"\u013B\u013D\x05\"\x12\x02\u013C\u013B\x03\x02\x02\x02\u013D\u0140\x03" +
		"\x02\x02\x02\u013E\u013C\x03\x02\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F" +
		"\u0141\x03\x02\x02\x02\u0140\u013E\x03\x02\x02\x02\u0141\u0142\x07\'\x02" +
		"\x02\u0142-\x03\x02\x02\x02\u0143\u0148\x05&\x14\x02\u0144\u0148\x05$" +
		"\x13\x02\u0145\u0148\x05,\x17\x02\u0146\u0148\x05\x04\x03\x02\u0147\u0143" +
		"\x03\x02\x02\x02\u0147\u0144\x03\x02\x02\x02\u0147\u0145\x03\x02\x02\x02" +
		"\u0147\u0146\x03\x02\x02\x02\u0148\u014B\x03\x02\x02\x02\u0149\u0147\x03" +
		"\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A/\x03\x02\x02\x02\u014B" +
		"\u0149\x03\x02\x02\x02\u014C\u0151\x052\x1A\x02\u014D\u014E\x07\x1D\x02" +
		"\x02\u014E\u0150\x052\x1A\x02\u014F\u014D\x03\x02\x02\x02\u0150\u0153" +
		"\x03\x02\x02\x02\u0151\u014F\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02" +
		"\u01521\x03\x02\x02\x02\u0153\u0151\x03\x02\x02\x02\u0154\u0159\x054\x1B" +
		"\x02\u0155\u0156\t\x05\x02\x02\u0156\u0158\x054\x1B\x02\u0157\u0155\x03" +
		"\x02\x02\x02\u0158\u015B\x03\x02\x02\x02\u0159\u0157\x03\x02\x02\x02\u0159" +
		"\u015A\x03\x02\x02\x02\u015A3\x03\x02\x02\x02\u015B\u0159\x03\x02\x02" +
		"\x02\u015C\u0161\x056\x1C\x02\u015D\u015E\t\x06\x02\x02\u015E\u0160\x05" +
		"6\x1C\x02\u015F\u015D\x03\x02\x02\x02\u0160\u0163\x03\x02\x02\x02\u0161" +
		"\u015F\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u01625\x03\x02\x02" +
		"\x02\u0163\u0161\x03\x02\x02\x02\u0164\u0169\x058\x1D\x02\u0165\u0166" +
		"\t\x07\x02\x02\u0166\u0168\x058\x1D\x02\u0167\u0165\x03\x02\x02\x02\u0168" +
		"\u016B\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02\u0169\u016A\x03\x02" +
		"\x02\x02\u016A7\x03\x02\x02\x02\u016B\u0169\x03\x02\x02\x02\u016C\u0179" +
		"\x05T+\x02\u016D\u0179\x05@!\x02\u016E\u016F\x07-\x02\x02\u016F\u0170" +
		"\x07$\x02\x02\u0170\u0179\x07%\x02\x02\u0171\u0179\x05:\x1E\x02\u0172" +
		"\u0179\x05> \x02\u0173\u0179\x07-\x02\x02\u0174\u0175\x07$\x02\x02\u0175" +
		"\u0176\x050\x19\x02\u0176\u0177\x07%\x02\x02\u0177\u0179\x03\x02\x02\x02" +
		"\u0178\u016C\x03\x02\x02\x02\u0178\u016D\x03\x02\x02\x02\u0178\u016E\x03" +
		"\x02\x02\x02\u0178\u0171\x03\x02\x02\x02\u0178\u0172\x03\x02\x02\x02\u0178" +
		"\u0173\x03\x02\x02\x02\u0178\u0174\x03\x02\x02\x02\u01799\x03\x02\x02" +
		"\x02\u017A\u017B\x07-\x02\x02\u017B\u017D\x07$\x02\x02\u017C\u017E\x05" +
		"<\x1F\x02\u017D\u017C\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E" +
		"\u017F\x03\x02\x02\x02\u017F\u0184\x07%\x02\x02\u0180\u0181\x07&\x02\x02" +
		"\u0181\u0182\x05.\x18\x02\u0182\u0183\x07\'\x02\x02\u0183\u0185\x03\x02" +
		"\x02\x02\u0184\u0180\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185" +
		"\u0193\x03\x02\x02\x02\u0186\u0187\x05> \x02\u0187\u0189\x07$\x02\x02" +
		"\u0188\u018A\x05<\x1F\x02\u0189\u0188\x03\x02\x02\x02\u0189\u018A\x03" +
		"\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B\u0190\x07%\x02\x02\u018C" +
		"\u018D\x07&\x02\x02\u018D\u018E\x05.\x18\x02\u018E\u018F\x07\'\x02\x02" +
		"\u018F\u0191\x03\x02\x02\x02\u0190\u018C\x03\x02\x02\x02\u0190\u0191\x03" +
		"\x02\x02\x02\u0191\u0193\x03\x02\x02\x02\u0192\u017A\x03\x02\x02\x02\u0192" +
		"\u0186\x03\x02\x02\x02\u0193;\x03\x02\x02\x02\u0194\u0199\x050\x19\x02" +
		"\u0195\u0196\x07 \x02\x02\u0196\u0198\x050\x19\x02\u0197\u0195\x03\x02" +
		"\x02\x02\u0198\u019B\x03\x02\x02\x02\u0199\u0197\x03\x02\x02\x02\u0199" +
		"\u019A\x03\x02\x02\x02\u019A=\x03\x02\x02\x02\u019B\u0199\x03\x02\x02" +
		"\x02\u019C\u019D\x07\x0E\x02\x02\u019D\u019E\x07\x1E\x02\x02\u019E\u01A3" +
		"\x07-\x02\x02\u019F\u01A0\x07-\x02\x02\u01A0\u01A1\x07\x1E\x02\x02\u01A1" +
		"\u01A3\x07-\x02\x02\u01A2\u019C\x03\x02\x02\x02\u01A2\u019F\x03\x02\x02" +
		"\x02\u01A3?\x03\x02\x02\x02\u01A4\u01A8\x07*\x02\x02\u01A5\u01A7\x05B" +
		"\"\x02\u01A6\u01A5\x03\x02\x02\x02\u01A7\u01AA\x03\x02\x02\x02\u01A8\u01A6" +
		"\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AB\x03\x02\x02\x02" +
		"\u01AA\u01A8\x03\x02\x02\x02\u01AB\u01AC\x072\x02\x02\u01ACA\x03\x02\x02" +
		"\x02\u01AD\u01B1\x07/\x02\x02\u01AE\u01B1\x071\x02\x02\u01AF\u01B1\x05" +
		"D#\x02\u01B0\u01AD\x03\x02\x02\x02\u01B0\u01AE\x03\x02\x02\x02\u01B0\u01AF" +
		"\x03\x02\x02\x02\u01B1C\x03\x02\x02\x02\u01B2\u01B3\x070\x02\x02\u01B3" +
		"\u01B4\x05F$\x02\u01B4\u01B5\x07A\x02\x02\u01B5E\x03\x02\x02\x02\u01B6" +
		"\u01BB\x05H%\x02\u01B7\u01B8\x07\x1D\x02\x02\u01B8\u01BA\x05H%\x02\u01B9" +
		"\u01B7\x03\x02\x02\x02\u01BA\u01BD\x03\x02\x02\x02\u01BB\u01B9\x03\x02" +
		"\x02\x02\u01BB\u01BC\x03\x02\x02\x02\u01BCG\x03\x02\x02\x02\u01BD\u01BB" +
		"\x03\x02\x02\x02\u01BE\u01C3\x05J&\x02\u01BF\u01C0\t\b\x02\x02\u01C0\u01C2" +
		"\x05J&\x02\u01C1\u01BF\x03\x02\x02\x02\u01C2\u01C5\x03\x02\x02\x02\u01C3" +
		"\u01C1\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4I\x03\x02\x02" +
		"\x02\u01C5\u01C3\x03\x02\x02\x02\u01C6\u01CB\x05L\'\x02\u01C7\u01C8\t" +
		"\t\x02\x02\u01C8\u01CA\x05L\'\x02\u01C9\u01C7\x03\x02\x02\x02\u01CA\u01CD" +
		"\x03\x02\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02" +
		"\u01CCK\x03\x02\x02\x02\u01CD\u01CB\x03\x02\x02\x02\u01CE\u01D3\x05N(" +
		"\x02\u01CF\u01D0\t\n\x02\x02\u01D0\u01D2\x05N(\x02\u01D1\u01CF\x03\x02" +
		"\x02\x02\u01D2\u01D5\x03\x02\x02\x02\u01D3\u01D1\x03\x02\x02\x02\u01D3" +
		"\u01D4\x03\x02\x02\x02\u01D4M\x03\x02\x02\x02\u01D5\u01D3\x03\x02\x02" +
		"\x02\u01D6\u01E8\x07D\x02\x02\u01D7\u01E8\x07C\x02\x02\u01D8\u01D9\x07" +
		"B\x02\x02\u01D9\u01DA\x07?\x02\x02\u01DA\u01E8\x07@\x02\x02\u01DB\u01DC" +
		"\x07B\x02\x02\u01DC\u01DE\x07?\x02\x02\u01DD\u01DF\x05R*\x02\u01DE\u01DD" +
		"\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02" +
		"\u01E0\u01E8\x07@\x02\x02\u01E1\u01E8\x05P)\x02\u01E2\u01E8\x07B\x02\x02" +
		"\u01E3\u01E4\x07?\x02\x02\u01E4\u01E5\x05F$\x02\u01E5\u01E6\x07@\x02\x02" +
		"\u01E6\u01E8\x03\x02\x02\x02\u01E7\u01D6\x03\x02\x02\x02\u01E7\u01D7\x03" +
		"\x02\x02\x02\u01E7\u01D8\x03\x02\x02\x02\u01E7\u01DB\x03\x02\x02\x02\u01E7" +
		"\u01E1\x03\x02\x02\x02\u01E7\u01E2\x03\x02\x02\x02\u01E7\u01E3\x03\x02" +
		"\x02\x02\u01E8O\x03\x02\x02\x02\u01E9\u01EA\x07B\x02\x02\u01EA\u01EB\x07" +
		"=\x02\x02\u01EB\u01EC\x07B\x02\x02\u01ECQ\x03\x02\x02\x02\u01ED\u01F2" +
		"\x05F$\x02\u01EE\u01EF\x07>\x02\x02\u01EF\u01F1\x05F$\x02\u01F0\u01EE" +
		"\x03\x02\x02\x02\u01F1\u01F4\x03\x02\x02\x02\u01F2\u01F0\x03\x02\x02\x02" +
		"\u01F2\u01F3\x03\x02\x02\x02\u01F3S\x03\x02\x02\x02\u01F4\u01F2\x03\x02" +
		"\x02\x02\u01F5\u01F6\t\v\x02\x02\u01F6U\x03\x02\x02\x02\u01F7\u01F8\x07" +
		"#\x02\x02\u01F8\u01FF\x07-\x02\x02\u01F9\u0200\x07+\x02\x02\u01FA\u01FC" +
		"\x07$\x02\x02\u01FB\u01FD\x05<\x1F\x02\u01FC\u01FB\x03\x02\x02\x02\u01FC" +
		"\u01FD\x03\x02\x02\x02\u01FD\u01FE\x03\x02\x02\x02\u01FE\u0200\x07%\x02" +
		"\x02\u01FF\u01F9\x03\x02\x02\x02\u01FF\u01FA\x03\x02\x02\x02\u01FF\u0200" +
		"\x03\x02\x02\x02\u0200W\x03\x02\x02\x02<[ckr\x7F\x87\x8C\x97\x9F\xA4\xAC" +
		"\xB1\xB9\xBF\xC4\xCB\xD2\xD7\xDD\xE5\xEA\xED\xEF\xF5\xFF\u0112\u0119\u0122" +
		"\u0127\u012B\u012F\u0132\u013E\u0147\u0149\u0151\u0159\u0161\u0169\u0178" +
		"\u017D\u0184\u0189\u0190\u0192\u0199\u01A2\u01A8\u01B0\u01BB\u01C3\u01CB" +
		"\u01D3\u01DE\u01E7\u01F2\u01FC\u01FF";
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


export class ConfigurationCallContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return CanonParser.RULE_configurationCall; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterConfigurationCall) {
			listener.enterConfigurationCall(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitConfigurationCall) {
			listener.exitConfigurationCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitConfigurationCall) {
			return visitor.visitConfigurationCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SchemaImportContext extends ParserRuleContext {
	public SCHEMA(): TerminalNode { return this.getToken(CanonParser.SCHEMA, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(CanonParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_schemaImport; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterSchemaImport) {
			listener.enterSchemaImport(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitSchemaImport) {
			listener.exitSchemaImport(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitSchemaImport) {
			return visitor.visitSchemaImport(this);
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
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(CanonParser.QUESTION, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CanonParser.PLUS, 0); }
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
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(CanonParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(CanonParser.RBRACE, 0); }
	public structContent(): StructContentContext[];
	public structContent(i: number): StructContentContext;
	public structContent(i?: number): StructContentContext | StructContentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructContentContext);
		} else {
			return this.getRuleContext(i, StructContentContext);
		}
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.ASSIGN, 0); }
	public typeReference(): TypeReferenceContext | undefined {
		return this.tryGetRuleContext(0, TypeReferenceContext);
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


export class StructContentContext extends ParserRuleContext {
	public mixinDeclaration(): MixinDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MixinDeclarationContext);
	}
	public structMember(): StructMemberContext | undefined {
		return this.tryGetRuleContext(0, StructMemberContext);
	}
	public methodDefinition(): MethodDefinitionContext | undefined {
		return this.tryGetRuleContext(0, MethodDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_structContent; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterStructContent) {
			listener.enterStructContent(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitStructContent) {
			listener.exitStructContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitStructContent) {
			return visitor.visitStructContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MixinDeclarationContext extends ParserRuleContext {
	public MIXIN(): TerminalNode { return this.getToken(CanonParser.MIXIN, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(CanonParser.IDENTIFIER, 0); }
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


export class StructMemberContext extends ParserRuleContext {
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
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(CanonParser.QUESTION, 0); }
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
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CanonParser.SEMICOLON, 0); }
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
	public structDefinition(): StructDefinitionContext | undefined {
		return this.tryGetRuleContext(0, StructDefinitionContext);
	}
	public functionDefinition(): FunctionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, FunctionDefinitionContext);
	}
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	public configurationCall(): ConfigurationCallContext | undefined {
		return this.tryGetRuleContext(0, ConfigurationCallContext);
	}
	public schemaDirective(): SchemaDirectiveContext | undefined {
		return this.tryGetRuleContext(0, SchemaDirectiveContext);
	}
	public schemaImport(): SchemaImportContext | undefined {
		return this.tryGetRuleContext(0, SchemaImportContext);
	}
	public schemaDefinition(): SchemaDefinitionContext | undefined {
		return this.tryGetRuleContext(0, SchemaDefinitionContext);
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
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CanonParser.SEMICOLON, 0); }
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
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CanonParser.SEMICOLON, 0); }
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
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CanonParser.SEMICOLON, 0); }
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
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CanonParser.SEMICOLON, 0); }
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
	public configurationCall(): ConfigurationCallContext[];
	public configurationCall(i: number): ConfigurationCallContext;
	public configurationCall(i?: number): ConfigurationCallContext | ConfigurationCallContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConfigurationCallContext);
		} else {
			return this.getRuleContext(i, ConfigurationCallContext);
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
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public stringInterpolation(): StringInterpolationContext | undefined {
		return this.tryGetRuleContext(0, StringInterpolationContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(CanonParser.IDENTIFIER, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.RPAREN, 0); }
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public memberAccess(): MemberAccessContext | undefined {
		return this.tryGetRuleContext(0, MemberAccessContext);
	}
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
	public BACKTICK(): TerminalNode { return this.getToken(CanonParser.BACKTICK, 0); }
	public INTERPOLATION_END(): TerminalNode { return this.getToken(CanonParser.INTERPOLATION_END, 0); }
	public interpolationContent(): InterpolationContentContext[];
	public interpolationContent(i: number): InterpolationContentContext;
	public interpolationContent(i?: number): InterpolationContentContext | InterpolationContentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterpolationContentContext);
		} else {
			return this.getRuleContext(i, InterpolationContentContext);
		}
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


export class InterpolationContentContext extends ParserRuleContext {
	public INTERPOLATION_TEXT(): TerminalNode | undefined { return this.tryGetToken(CanonParser.INTERPOLATION_TEXT, 0); }
	public INTERPOLATION_DOLLAR(): TerminalNode | undefined { return this.tryGetToken(CanonParser.INTERPOLATION_DOLLAR, 0); }
	public interpolationExpression(): InterpolationExpressionContext | undefined {
		return this.tryGetRuleContext(0, InterpolationExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_interpolationContent; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterInterpolationContent) {
			listener.enterInterpolationContent(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitInterpolationContent) {
			listener.exitInterpolationContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitInterpolationContent) {
			return visitor.visitInterpolationContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterpolationExpressionContext extends ParserRuleContext {
	public INTERPOLATION_START(): TerminalNode { return this.getToken(CanonParser.INTERPOLATION_START, 0); }
	public exprModeExpression(): ExprModeExpressionContext {
		return this.getRuleContext(0, ExprModeExpressionContext);
	}
	public EXPR_RBRACE(): TerminalNode { return this.getToken(CanonParser.EXPR_RBRACE, 0); }
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


export class ExprModeExpressionContext extends ParserRuleContext {
	public exprModeComparison(): ExprModeComparisonContext[];
	public exprModeComparison(i: number): ExprModeComparisonContext;
	public exprModeComparison(i?: number): ExprModeComparisonContext | ExprModeComparisonContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprModeComparisonContext);
		} else {
			return this.getRuleContext(i, ExprModeComparisonContext);
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
	public get ruleIndex(): number { return CanonParser.RULE_exprModeExpression; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterExprModeExpression) {
			listener.enterExprModeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitExprModeExpression) {
			listener.exitExprModeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitExprModeExpression) {
			return visitor.visitExprModeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprModeComparisonContext extends ParserRuleContext {
	public exprModeAdditive(): ExprModeAdditiveContext[];
	public exprModeAdditive(i: number): ExprModeAdditiveContext;
	public exprModeAdditive(i?: number): ExprModeAdditiveContext | ExprModeAdditiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprModeAdditiveContext);
		} else {
			return this.getRuleContext(i, ExprModeAdditiveContext);
		}
	}
	public EXPR_EQUALS(): TerminalNode[];
	public EXPR_EQUALS(i: number): TerminalNode;
	public EXPR_EQUALS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.EXPR_EQUALS);
		} else {
			return this.getToken(CanonParser.EXPR_EQUALS, i);
		}
	}
	public EXPR_NOT_EQUALS(): TerminalNode[];
	public EXPR_NOT_EQUALS(i: number): TerminalNode;
	public EXPR_NOT_EQUALS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.EXPR_NOT_EQUALS);
		} else {
			return this.getToken(CanonParser.EXPR_NOT_EQUALS, i);
		}
	}
	public EXPR_LESS_THAN(): TerminalNode[];
	public EXPR_LESS_THAN(i: number): TerminalNode;
	public EXPR_LESS_THAN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.EXPR_LESS_THAN);
		} else {
			return this.getToken(CanonParser.EXPR_LESS_THAN, i);
		}
	}
	public EXPR_GREATER_THAN(): TerminalNode[];
	public EXPR_GREATER_THAN(i: number): TerminalNode;
	public EXPR_GREATER_THAN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.EXPR_GREATER_THAN);
		} else {
			return this.getToken(CanonParser.EXPR_GREATER_THAN, i);
		}
	}
	public EXPR_LESS_EQUALS(): TerminalNode[];
	public EXPR_LESS_EQUALS(i: number): TerminalNode;
	public EXPR_LESS_EQUALS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.EXPR_LESS_EQUALS);
		} else {
			return this.getToken(CanonParser.EXPR_LESS_EQUALS, i);
		}
	}
	public EXPR_GREATER_EQUALS(): TerminalNode[];
	public EXPR_GREATER_EQUALS(i: number): TerminalNode;
	public EXPR_GREATER_EQUALS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.EXPR_GREATER_EQUALS);
		} else {
			return this.getToken(CanonParser.EXPR_GREATER_EQUALS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_exprModeComparison; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterExprModeComparison) {
			listener.enterExprModeComparison(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitExprModeComparison) {
			listener.exitExprModeComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitExprModeComparison) {
			return visitor.visitExprModeComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprModeAdditiveContext extends ParserRuleContext {
	public exprModeMultiplicative(): ExprModeMultiplicativeContext[];
	public exprModeMultiplicative(i: number): ExprModeMultiplicativeContext;
	public exprModeMultiplicative(i?: number): ExprModeMultiplicativeContext | ExprModeMultiplicativeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprModeMultiplicativeContext);
		} else {
			return this.getRuleContext(i, ExprModeMultiplicativeContext);
		}
	}
	public EXPR_PLUS(): TerminalNode[];
	public EXPR_PLUS(i: number): TerminalNode;
	public EXPR_PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.EXPR_PLUS);
		} else {
			return this.getToken(CanonParser.EXPR_PLUS, i);
		}
	}
	public EXPR_MINUS(): TerminalNode[];
	public EXPR_MINUS(i: number): TerminalNode;
	public EXPR_MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.EXPR_MINUS);
		} else {
			return this.getToken(CanonParser.EXPR_MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_exprModeAdditive; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterExprModeAdditive) {
			listener.enterExprModeAdditive(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitExprModeAdditive) {
			listener.exitExprModeAdditive(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitExprModeAdditive) {
			return visitor.visitExprModeAdditive(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprModeMultiplicativeContext extends ParserRuleContext {
	public exprModePrimary(): ExprModePrimaryContext[];
	public exprModePrimary(i: number): ExprModePrimaryContext;
	public exprModePrimary(i?: number): ExprModePrimaryContext | ExprModePrimaryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprModePrimaryContext);
		} else {
			return this.getRuleContext(i, ExprModePrimaryContext);
		}
	}
	public EXPR_MULTIPLY(): TerminalNode[];
	public EXPR_MULTIPLY(i: number): TerminalNode;
	public EXPR_MULTIPLY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.EXPR_MULTIPLY);
		} else {
			return this.getToken(CanonParser.EXPR_MULTIPLY, i);
		}
	}
	public EXPR_DIVIDE(): TerminalNode[];
	public EXPR_DIVIDE(i: number): TerminalNode;
	public EXPR_DIVIDE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.EXPR_DIVIDE);
		} else {
			return this.getToken(CanonParser.EXPR_DIVIDE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_exprModeMultiplicative; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterExprModeMultiplicative) {
			listener.enterExprModeMultiplicative(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitExprModeMultiplicative) {
			listener.exitExprModeMultiplicative(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitExprModeMultiplicative) {
			return visitor.visitExprModeMultiplicative(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprModePrimaryContext extends ParserRuleContext {
	public EXPR_STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(CanonParser.EXPR_STRING_LITERAL, 0); }
	public EXPR_INTEGER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(CanonParser.EXPR_INTEGER_LITERAL, 0); }
	public EXPR_IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(CanonParser.EXPR_IDENTIFIER, 0); }
	public EXPR_LPAREN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.EXPR_LPAREN, 0); }
	public EXPR_RPAREN(): TerminalNode | undefined { return this.tryGetToken(CanonParser.EXPR_RPAREN, 0); }
	public exprModeArgumentList(): ExprModeArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ExprModeArgumentListContext);
	}
	public exprModeMemberAccess(): ExprModeMemberAccessContext | undefined {
		return this.tryGetRuleContext(0, ExprModeMemberAccessContext);
	}
	public exprModeExpression(): ExprModeExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExprModeExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_exprModePrimary; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterExprModePrimary) {
			listener.enterExprModePrimary(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitExprModePrimary) {
			listener.exitExprModePrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitExprModePrimary) {
			return visitor.visitExprModePrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprModeMemberAccessContext extends ParserRuleContext {
	public EXPR_IDENTIFIER(): TerminalNode[];
	public EXPR_IDENTIFIER(i: number): TerminalNode;
	public EXPR_IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.EXPR_IDENTIFIER);
		} else {
			return this.getToken(CanonParser.EXPR_IDENTIFIER, i);
		}
	}
	public EXPR_DOT(): TerminalNode { return this.getToken(CanonParser.EXPR_DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_exprModeMemberAccess; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterExprModeMemberAccess) {
			listener.enterExprModeMemberAccess(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitExprModeMemberAccess) {
			listener.exitExprModeMemberAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitExprModeMemberAccess) {
			return visitor.visitExprModeMemberAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprModeArgumentListContext extends ParserRuleContext {
	public exprModeExpression(): ExprModeExpressionContext[];
	public exprModeExpression(i: number): ExprModeExpressionContext;
	public exprModeExpression(i?: number): ExprModeExpressionContext | ExprModeExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprModeExpressionContext);
		} else {
			return this.getRuleContext(i, ExprModeExpressionContext);
		}
	}
	public EXPR_COMMA(): TerminalNode[];
	public EXPR_COMMA(i: number): TerminalNode;
	public EXPR_COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CanonParser.EXPR_COMMA);
		} else {
			return this.getToken(CanonParser.EXPR_COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CanonParser.RULE_exprModeArgumentList; }
	// @Override
	public enterRule(listener: CanonParserListener): void {
		if (listener.enterExprModeArgumentList) {
			listener.enterExprModeArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: CanonParserListener): void {
		if (listener.exitExprModeArgumentList) {
			listener.exitExprModeArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CanonParserVisitor<Result>): Result {
		if (visitor.visitExprModeArgumentList) {
			return visitor.visitExprModeArgumentList(this);
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


