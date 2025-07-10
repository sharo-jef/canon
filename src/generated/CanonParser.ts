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
	public static readonly NULL_TYPE = 28;
	public static readonly PLUS = 29;
	public static readonly MINUS = 30;
	public static readonly MULTIPLY = 31;
	public static readonly DIVIDE = 32;
	public static readonly MODULO = 33;
	public static readonly POWER = 34;
	public static readonly EQUALS = 35;
	public static readonly NOT_EQUALS = 36;
	public static readonly LESS_THAN = 37;
	public static readonly GREATER_THAN = 38;
	public static readonly LESS_EQUALS = 39;
	public static readonly GREATER_EQUALS = 40;
	public static readonly ASSIGN = 41;
	public static readonly PLUS_ASSIGN = 42;
	public static readonly MINUS_ASSIGN = 43;
	public static readonly MULTIPLY_ASSIGN = 44;
	public static readonly DIVIDE_ASSIGN = 45;
	public static readonly MODULO_ASSIGN = 46;
	public static readonly POWER_ASSIGN = 47;
	public static readonly LOGICAL_AND = 48;
	public static readonly LOGICAL_OR = 49;
	public static readonly PIPELINE = 50;
	public static readonly BIT_AND = 51;
	public static readonly BIT_OR = 52;
	public static readonly BIT_XOR = 53;
	public static readonly BIT_NOT = 54;
	public static readonly LEFT_SHIFT = 55;
	public static readonly RIGHT_SHIFT = 56;
	public static readonly RANGE_INCLUSIVE = 57;
	public static readonly RANGE = 58;
	public static readonly SPREAD = 59;
	public static readonly EXCLAMATION = 60;
	public static readonly LBRACE = 61;
	public static readonly RBRACE = 62;
	public static readonly LPAREN = 63;
	public static readonly RPAREN = 64;
	public static readonly LBRACKET = 65;
	public static readonly RBRACKET = 66;
	public static readonly DOT = 67;
	public static readonly COMMA = 68;
	public static readonly COLON = 69;
	public static readonly SEMICOLON = 70;
	public static readonly QUESTION = 71;
	public static readonly ARROW = 72;
	public static readonly STRING_LITERAL = 73;
	public static readonly DOUBLE_STRING_LITERAL = 74;
	public static readonly TEMPLATE_STRING_START = 75;
	public static readonly INTEGER_LITERAL = 76;
	public static readonly TRUE = 77;
	public static readonly FALSE = 78;
	public static readonly ANNOTATION = 79;
	public static readonly IDENTIFIER = 80;
	public static readonly TEMPLATE_STRING_END = 81;
	public static readonly TEMPLATE_STRING_PART = 82;
	public static readonly TEMPLATE_INTERPOLATION_START = 83;
	public static readonly TEMPLATE_INTERPOLATION_SIMPLE = 84;
	public static readonly INTERPOLATION_END = 85;
	public static readonly INTERPOLATION_WS = 86;
	public static readonly INTERPOLATION_NEWLINE = 87;
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
	public static readonly RULE_mappingBlock = 36;
	public static readonly RULE_mappingEntry = 37;
	public static readonly RULE_parameterList = 38;
	public static readonly RULE_parameter = 39;
	public static readonly RULE_callExpression = 40;
	public static readonly RULE_argumentList = 41;
	public static readonly RULE_expression = 42;
	public static readonly RULE_primary = 43;
	public static readonly RULE_literal = 44;
	public static readonly RULE_stringLiteral = 45;
	public static readonly RULE_templateString = 46;
	public static readonly RULE_templateStringContent = 47;
	public static readonly RULE_annotation = 48;
	public static readonly RULE_listLiteral = 49;
	public static readonly RULE_lambdaExpression = 50;
	public static readonly RULE_lambdaParameters = 51;
	public static readonly RULE_lambdaParameter = 52;
	public static readonly RULE_lambdaBody = 53;
	public static readonly RULE_anonymousFunction = 54;
	public static readonly RULE_spreadExpression = 55;
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
		"'fun'", "'infix'", "'string'", "'int'", "'float'", "'bool'", "'null'", 
		undefined, undefined, undefined, undefined, "'%'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'='", "'+='", 
		"'-='", "'*='", "'/='", "'%='", "'**='", undefined, undefined, "'|>'", 
		undefined, undefined, undefined, "'~'", "'<<'", "'>>'", "'..='", "'..'", 
		"'...'", undefined, "'{'", undefined, undefined, undefined, undefined, 
		undefined, undefined, "','", "':'", "';'", "'?'", "'->'", undefined, undefined, 
		undefined, undefined, "'true'", "'false'", undefined, undefined, undefined, 
		undefined, "'${'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WS", "NEWLINE", "LINE_COMMENT", "BLOCK_COMMENT", "SCHEMA_DIRECTIVE", 
		"HASH_COMMENT", "SCHEMA", "STRUCT", "UNION", "TYPE", "INIT", "PRIVATE", 
		"GET", "REPEATED", "USE", "IF", "ELSE", "NOT", "THIS", "VAL", "VAR", "FUN", 
		"INFIX", "STRING_TYPE", "INT_TYPE", "FLOAT_TYPE", "BOOL_TYPE", "NULL_TYPE", 
		"PLUS", "MINUS", "MULTIPLY", "DIVIDE", "MODULO", "POWER", "EQUALS", "NOT_EQUALS", 
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
			this.state = 115;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 112;
					this.match(CanonParser.NEWLINE);
					}
					}
				}
				this.state = 117;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 118;
			this.programElement();
			this.state = 124;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 119;
					this.statementSeparators();
					this.state = 120;
					this.programElement();
					}
					}
				}
				this.state = 126;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 127;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 133;
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
			this.state = 138;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.SCHEMA_DIRECTIVE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 135;
				this.schemaDirective();
				}
				break;
			case CanonParser.USE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 136;
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
				this.state = 137;
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
			this.state = 140;
			this.match(CanonParser.SCHEMA_DIRECTIVE);
			this.state = 141;
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
			this.state = 143;
			this.match(CanonParser.USE);
			this.state = 144;
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
			this.state = 152;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 146;
				this.match(CanonParser.SEMICOLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 147;
				this.match(CanonParser.NEWLINE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 148;
				this.match(CanonParser.SEMICOLON);
				this.state = 149;
				this.match(CanonParser.NEWLINE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 150;
				this.match(CanonParser.NEWLINE);
				this.state = 151;
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
			this.state = 155;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 154;
					this.statementSeparator();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 157;
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
			this.state = 159;
			this.topLevelElement();
			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE || _la === CanonParser.SEMICOLON) {
				{
				{
				this.state = 160;
				this.statementSeparators();
				this.state = 161;
				this.topLevelElement();
				}
				}
				this.state = 167;
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
			this.state = 177;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 168;
				this.schemaDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 169;
				this.structDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 170;
				this.unionDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 171;
				this.typeDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 172;
				this.variableDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 173;
				this.functionDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 174;
				this.assignmentStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 175;
				this.destructuringAssignment();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 176;
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
			this.state = 182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 179;
				this.annotation();
				}
				}
				this.state = 184;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 185;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 191;
			this.match(CanonParser.SCHEMA);
			this.state = 194;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.LBRACE:
				{
				this.state = 192;
				this.block();
				}
				break;
			case CanonParser.STRING_LITERAL:
			case CanonParser.DOUBLE_STRING_LITERAL:
			case CanonParser.TEMPLATE_STRING_START:
				{
				this.state = 193;
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
			this.state = 199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 196;
				this.annotation();
				}
				}
				this.state = 201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 202;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 208;
			this.match(CanonParser.STRUCT);
			this.state = 209;
			this.match(CanonParser.IDENTIFIER);
			this.state = 210;
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
			this.state = 215;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 212;
				this.annotation();
				}
				}
				this.state = 217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 218;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 223;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 224;
			this.match(CanonParser.UNION);
			this.state = 225;
			this.match(CanonParser.IDENTIFIER);
			this.state = 226;
			this.match(CanonParser.ASSIGN);
			this.state = 227;
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
			this.state = 232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 229;
				this.annotation();
				}
				}
				this.state = 234;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 235;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 241;
			this.match(CanonParser.TYPE);
			this.state = 242;
			this.match(CanonParser.IDENTIFIER);
			this.state = 243;
			this.match(CanonParser.ASSIGN);
			this.state = 244;
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
			this.state = 249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 246;
				this.annotation();
				}
				}
				this.state = 251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 252;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 257;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 266;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.INFIX:
				{
				this.state = 258;
				this.match(CanonParser.INFIX);
				this.state = 259;
				this.match(CanonParser.FUN);
				this.state = 260;
				this.type();
				this.state = 261;
				this.match(CanonParser.DOT);
				this.state = 262;
				this.match(CanonParser.IDENTIFIER);
				}
				break;
			case CanonParser.FUN:
				{
				this.state = 264;
				this.match(CanonParser.FUN);
				this.state = 265;
				this.match(CanonParser.IDENTIFIER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 268;
			this.match(CanonParser.LPAREN);
			this.state = 270;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.THIS || _la === CanonParser.IDENTIFIER) {
				{
				this.state = 269;
				this.parameterList();
				}
			}

			this.state = 272;
			this.match(CanonParser.RPAREN);
			this.state = 275;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 273;
				this.match(CanonParser.COLON);
				this.state = 274;
				this.type();
				}
			}

			this.state = 277;
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
			this.state = 282;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 279;
				this.annotation();
				}
				}
				this.state = 284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 288;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 285;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 290;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 291;
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
			this.state = 292;
			this.match(CanonParser.IDENTIFIER);
			this.state = 295;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 293;
				this.match(CanonParser.COLON);
				this.state = 294;
				this.type();
				}
			}

			this.state = 297;
			this.match(CanonParser.ASSIGN);
			this.state = 298;
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
			this.state = 300;
			this.type();
			this.state = 305;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.BIT_OR) {
				{
				{
				this.state = 301;
				this.match(CanonParser.BIT_OR);
				this.state = 302;
				this.type();
				}
				}
				this.state = 307;
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
			this.state = 308;
			this.baseType();
			this.state = 313;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 309;
					this.match(CanonParser.LBRACKET);
					this.state = 310;
					this.match(CanonParser.RBRACKET);
					}
					}
				}
				this.state = 315;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			}
			this.state = 317;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 316;
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
			this.state = 322;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.STRING_TYPE:
			case CanonParser.INT_TYPE:
			case CanonParser.FLOAT_TYPE:
			case CanonParser.BOOL_TYPE:
			case CanonParser.NULL_TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 319;
				this.primitiveType();
				}
				break;
			case CanonParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 320;
				this.match(CanonParser.IDENTIFIER);
				}
				break;
			case CanonParser.LPAREN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 321;
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
			this.state = 324;
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
			this.state = 326;
			this.match(CanonParser.LPAREN);
			this.state = 335;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.STRING_TYPE) | (1 << CanonParser.INT_TYPE) | (1 << CanonParser.FLOAT_TYPE) | (1 << CanonParser.BOOL_TYPE) | (1 << CanonParser.NULL_TYPE))) !== 0) || _la === CanonParser.LPAREN || _la === CanonParser.IDENTIFIER) {
				{
				this.state = 327;
				this.type();
				this.state = 332;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CanonParser.COMMA) {
					{
					{
					this.state = 328;
					this.match(CanonParser.COMMA);
					this.state = 329;
					this.type();
					}
					}
					this.state = 334;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 337;
			this.match(CanonParser.RPAREN);
			this.state = 338;
			this.match(CanonParser.ARROW);
			this.state = 339;
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
			this.state = 341;
			this.match(CanonParser.LBRACE);
			this.state = 345;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 342;
					this.match(CanonParser.NEWLINE);
					}
					}
				}
				this.state = 347;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			}
			this.state = 359;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 348;
					this.statement();
					this.state = 354;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 349;
							this.statementSeparators();
							this.state = 350;
							this.statement();
							}
							}
						}
						this.state = 356;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
					}
					}
					}
				}
				this.state = 361;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			}
			this.state = 365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 362;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 367;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 368;
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
			this.state = 370;
			this.match(CanonParser.LBRACE);
			this.state = 374;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 371;
					this.match(CanonParser.NEWLINE);
					}
					}
				}
				this.state = 376;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			}
			this.state = 388;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 377;
					this.structMember();
					this.state = 383;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 378;
							this.statementSeparators();
							this.state = 379;
							this.structMember();
							}
							}
						}
						this.state = 385;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
					}
					}
					}
				}
				this.state = 390;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			}
			this.state = 394;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 391;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 396;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 397;
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
			this.state = 404;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 399;
				this.propertyDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 400;
				this.initDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 401;
				this.getterDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 402;
				this.methodDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 403;
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
		this.enterRule(_localctx, 44, CanonParser.RULE_statement);
		try {
			this.state = 414;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 406;
				this.assignmentStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 407;
				this.expressionStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 408;
				this.propertyDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 409;
				this.initDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 410;
				this.getterDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 411;
				this.methodDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 412;
				this.repeatedDeclaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 413;
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
			this.state = 416;
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
			this.state = 421;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 418;
				this.annotation();
				}
				}
				this.state = 423;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 427;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 424;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 429;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 431;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.PRIVATE) {
				{
				this.state = 430;
				this.match(CanonParser.PRIVATE);
				}
			}

			this.state = 433;
			this.match(CanonParser.IDENTIFIER);
			this.state = 443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON || _la === CanonParser.QUESTION) {
				{
				this.state = 435;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.QUESTION) {
					{
					this.state = 434;
					this.match(CanonParser.QUESTION);
					}
				}

				this.state = 437;
				this.match(CanonParser.COLON);
				this.state = 438;
				this.type();
				this.state = 441;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.ASSIGN) {
					{
					this.state = 439;
					this.match(CanonParser.ASSIGN);
					this.state = 440;
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
			this.state = 447;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.THIS) {
				{
				this.state = 445;
				this.match(CanonParser.THIS);
				this.state = 446;
				this.match(CanonParser.DOT);
				}
			}

			this.state = 449;
			this.match(CanonParser.IDENTIFIER);
			this.state = 450;
			_la = this._input.LA(1);
			if (!(((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (CanonParser.ASSIGN - 41)) | (1 << (CanonParser.PLUS_ASSIGN - 41)) | (1 << (CanonParser.MINUS_ASSIGN - 41)) | (1 << (CanonParser.MULTIPLY_ASSIGN - 41)) | (1 << (CanonParser.DIVIDE_ASSIGN - 41)) | (1 << (CanonParser.MODULO_ASSIGN - 41)) | (1 << (CanonParser.POWER_ASSIGN - 41)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 451;
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
			this.state = 453;
			this.destructuringPattern();
			this.state = 454;
			this.match(CanonParser.ASSIGN);
			this.state = 455;
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
			this.state = 459;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.LBRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 457;
				this.arrayDestructuringPattern();
				}
				break;
			case CanonParser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 458;
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
			this.state = 461;
			this.match(CanonParser.LBRACKET);
			this.state = 462;
			this.destructuringElement();
			this.state = 467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.COMMA) {
				{
				{
				this.state = 463;
				this.match(CanonParser.COMMA);
				this.state = 464;
				this.destructuringElement();
				}
				}
				this.state = 469;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 470;
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
			this.state = 472;
			this.match(CanonParser.LBRACE);
			this.state = 473;
			this.destructuringProperty();
			this.state = 478;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.COMMA) {
				{
				{
				this.state = 474;
				this.match(CanonParser.COMMA);
				this.state = 475;
				this.destructuringProperty();
				}
				}
				this.state = 480;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 481;
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
			this.state = 491;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 483;
				this.match(CanonParser.IDENTIFIER);
				this.state = 486;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.ASSIGN) {
					{
					this.state = 484;
					this.match(CanonParser.ASSIGN);
					this.state = 485;
					this.expression(0);
					}
				}

				}
				break;
			case CanonParser.LBRACE:
			case CanonParser.LBRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 488;
				this.destructuringPattern();
				}
				break;
			case CanonParser.SPREAD:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 489;
				this.match(CanonParser.SPREAD);
				this.state = 490;
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
			this.state = 505;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 493;
				this.match(CanonParser.IDENTIFIER);
				this.state = 496;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.ASSIGN) {
					{
					this.state = 494;
					this.match(CanonParser.ASSIGN);
					this.state = 495;
					this.expression(0);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 498;
				this.match(CanonParser.IDENTIFIER);
				this.state = 499;
				this.match(CanonParser.COLON);
				this.state = 500;
				this.match(CanonParser.IDENTIFIER);
				this.state = 503;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.ASSIGN) {
					{
					this.state = 501;
					this.match(CanonParser.ASSIGN);
					this.state = 502;
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
			this.state = 510;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 507;
				this.annotation();
				}
				}
				this.state = 512;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 516;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 513;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 518;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 519;
			this.match(CanonParser.INIT);
			this.state = 525;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.LPAREN) {
				{
				this.state = 520;
				this.match(CanonParser.LPAREN);
				this.state = 522;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CanonParser.THIS || _la === CanonParser.IDENTIFIER) {
					{
					this.state = 521;
					this.parameterList();
					}
				}

				this.state = 524;
				this.match(CanonParser.RPAREN);
				}
			}

			this.state = 527;
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
			this.state = 532;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 529;
				this.annotation();
				}
				}
				this.state = 534;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 538;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 535;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 540;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 541;
			this.match(CanonParser.GET);
			this.state = 542;
			this.match(CanonParser.IDENTIFIER);
			this.state = 543;
			this.match(CanonParser.LPAREN);
			this.state = 544;
			this.match(CanonParser.RPAREN);
			this.state = 547;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 545;
				this.match(CanonParser.COLON);
				this.state = 546;
				this.type();
				}
			}

			this.state = 549;
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
			this.state = 554;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 551;
				this.annotation();
				}
				}
				this.state = 556;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 560;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 557;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 562;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 564;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.PRIVATE) {
				{
				this.state = 563;
				this.match(CanonParser.PRIVATE);
				}
			}

			this.state = 566;
			this.match(CanonParser.FUN);
			this.state = 567;
			this.match(CanonParser.IDENTIFIER);
			this.state = 568;
			this.match(CanonParser.LPAREN);
			this.state = 570;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.THIS || _la === CanonParser.IDENTIFIER) {
				{
				this.state = 569;
				this.parameterList();
				}
			}

			this.state = 572;
			this.match(CanonParser.RPAREN);
			this.state = 575;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 573;
				this.match(CanonParser.COLON);
				this.state = 574;
				this.type();
				}
			}

			this.state = 577;
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
			this.state = 582;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.ANNOTATION) {
				{
				{
				this.state = 579;
				this.annotation();
				}
				}
				this.state = 584;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 588;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 585;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 590;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 591;
			this.match(CanonParser.REPEATED);
			this.state = 592;
			this.match(CanonParser.IDENTIFIER);
			this.state = 593;
			this.match(CanonParser.COLON);
			this.state = 594;
			this.type();
			this.state = 596;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				{
				this.state = 595;
				this.mappingBlock();
				}
				break;
			}
			this.state = 600;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.ASSIGN) {
				{
				this.state = 598;
				this.match(CanonParser.ASSIGN);
				this.state = 599;
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
		this.enterRule(_localctx, 72, CanonParser.RULE_mappingBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 602;
			this.match(CanonParser.LBRACE);
			this.state = 606;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 603;
					this.match(CanonParser.NEWLINE);
					}
					}
				}
				this.state = 608;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
			}
			this.state = 618;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.IDENTIFIER) {
				{
				this.state = 609;
				this.mappingEntry();
				this.state = 615;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 610;
						this.statementSeparators();
						this.state = 611;
						this.mappingEntry();
						}
						}
					}
					this.state = 617;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
				}
				}
			}

			this.state = 623;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.NEWLINE) {
				{
				{
				this.state = 620;
				this.match(CanonParser.NEWLINE);
				}
				}
				this.state = 625;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 626;
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
		this.enterRule(_localctx, 74, CanonParser.RULE_mappingEntry);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 628;
			this.match(CanonParser.IDENTIFIER);
			this.state = 629;
			this.match(CanonParser.ARROW);
			this.state = 630;
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
		this.enterRule(_localctx, 76, CanonParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 632;
			this.parameter();
			this.state = 637;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.COMMA) {
				{
				{
				this.state = 633;
				this.match(CanonParser.COMMA);
				this.state = 634;
				this.parameter();
				}
				}
				this.state = 639;
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
		this.enterRule(_localctx, 78, CanonParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 642;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.THIS) {
				{
				this.state = 640;
				this.match(CanonParser.THIS);
				this.state = 641;
				this.match(CanonParser.DOT);
				}
			}

			this.state = 644;
			this.match(CanonParser.IDENTIFIER);
			this.state = 647;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 645;
				this.match(CanonParser.COLON);
				this.state = 646;
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
		this.enterRule(_localctx, 80, CanonParser.RULE_callExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 649;
			this.match(CanonParser.IDENTIFIER);
			this.state = 655;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				{
				this.state = 650;
				this.match(CanonParser.LPAREN);
				this.state = 652;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.FUN) | (1 << CanonParser.STRING_TYPE) | (1 << CanonParser.INT_TYPE) | (1 << CanonParser.FLOAT_TYPE) | (1 << CanonParser.BOOL_TYPE) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (CanonParser.BIT_NOT - 54)) | (1 << (CanonParser.SPREAD - 54)) | (1 << (CanonParser.LBRACE - 54)) | (1 << (CanonParser.LPAREN - 54)) | (1 << (CanonParser.LBRACKET - 54)) | (1 << (CanonParser.STRING_LITERAL - 54)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 54)) | (1 << (CanonParser.TEMPLATE_STRING_START - 54)) | (1 << (CanonParser.INTEGER_LITERAL - 54)) | (1 << (CanonParser.TRUE - 54)) | (1 << (CanonParser.FALSE - 54)) | (1 << (CanonParser.IDENTIFIER - 54)))) !== 0)) {
					{
					this.state = 651;
					this.argumentList();
					}
				}

				this.state = 654;
				this.match(CanonParser.RPAREN);
				}
				break;
			}
			this.state = 658;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
			case 1:
				{
				this.state = 657;
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
		this.enterRule(_localctx, 82, CanonParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 660;
			this.expression(0);
			this.state = 665;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.COMMA) {
				{
				{
				this.state = 661;
				this.match(CanonParser.COMMA);
				this.state = 662;
				this.expression(0);
				}
				}
				this.state = 667;
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
		let _startState: number = 84;
		this.enterRecursionRule(_localctx, 84, CanonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 696;
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

				this.state = 669;
				this.primary();
				}
				break;
			case CanonParser.MINUS:
				{
				_localctx = new UnaryMinusExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 670;
				this.match(CanonParser.MINUS);
				this.state = 671;
				this.expression(26);
				}
				break;
			case CanonParser.NOT:
				{
				_localctx = new LogicalNotExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 672;
				this.match(CanonParser.NOT);
				this.state = 673;
				this.expression(25);
				}
				break;
			case CanonParser.BIT_NOT:
				{
				_localctx = new BitwiseNotExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 674;
				this.match(CanonParser.BIT_NOT);
				this.state = 675;
				this.expression(24);
				}
				break;
			case CanonParser.INT_TYPE:
				{
				_localctx = new TypeCastExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 676;
				this.match(CanonParser.INT_TYPE);
				this.state = 677;
				this.match(CanonParser.LPAREN);
				this.state = 678;
				this.expression(0);
				this.state = 679;
				this.match(CanonParser.RPAREN);
				}
				break;
			case CanonParser.FLOAT_TYPE:
				{
				_localctx = new TypeCastExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 681;
				this.match(CanonParser.FLOAT_TYPE);
				this.state = 682;
				this.match(CanonParser.LPAREN);
				this.state = 683;
				this.expression(0);
				this.state = 684;
				this.match(CanonParser.RPAREN);
				}
				break;
			case CanonParser.STRING_TYPE:
				{
				_localctx = new TypeCastExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 686;
				this.match(CanonParser.STRING_TYPE);
				this.state = 687;
				this.match(CanonParser.LPAREN);
				this.state = 688;
				this.expression(0);
				this.state = 689;
				this.match(CanonParser.RPAREN);
				}
				break;
			case CanonParser.BOOL_TYPE:
				{
				_localctx = new TypeCastExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 691;
				this.match(CanonParser.BOOL_TYPE);
				this.state = 692;
				this.match(CanonParser.LPAREN);
				this.state = 693;
				this.expression(0);
				this.state = 694;
				this.match(CanonParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 768;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 766;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
					case 1:
						{
						_localctx = new PowerExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 698;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 699;
						this.match(CanonParser.POWER);
						this.state = 700;
						this.expression(15);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 701;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 702;
						(_localctx as MulDivModExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (CanonParser.MULTIPLY - 31)) | (1 << (CanonParser.DIVIDE - 31)) | (1 << (CanonParser.MODULO - 31)))) !== 0))) {
							(_localctx as MulDivModExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 703;
						this.expression(14);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 704;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 705;
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
						this.state = 706;
						this.expression(13);
						}
						break;

					case 4:
						{
						_localctx = new RangeExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 707;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 708;
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
						this.state = 709;
						this.expression(12);
						}
						break;

					case 5:
						{
						_localctx = new InfixCallExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 710;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 711;
						this.match(CanonParser.IDENTIFIER);
						this.state = 712;
						this.expression(11);
						}
						break;

					case 6:
						{
						_localctx = new ShiftExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 713;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 714;
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
						this.state = 715;
						this.expression(10);
						}
						break;

					case 7:
						{
						_localctx = new RelationalExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 716;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 717;
						(_localctx as RelationalExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (CanonParser.LESS_THAN - 37)) | (1 << (CanonParser.GREATER_THAN - 37)) | (1 << (CanonParser.LESS_EQUALS - 37)) | (1 << (CanonParser.GREATER_EQUALS - 37)))) !== 0))) {
							(_localctx as RelationalExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 718;
						this.expression(9);
						}
						break;

					case 8:
						{
						_localctx = new EqualityExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 719;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 720;
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
						this.state = 721;
						this.expression(8);
						}
						break;

					case 9:
						{
						_localctx = new BitwiseAndExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 722;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 723;
						this.match(CanonParser.BIT_AND);
						this.state = 724;
						this.expression(7);
						}
						break;

					case 10:
						{
						_localctx = new BitwiseXorExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 725;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 726;
						this.match(CanonParser.BIT_XOR);
						this.state = 727;
						this.expression(6);
						}
						break;

					case 11:
						{
						_localctx = new BitwiseOrExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 728;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 729;
						this.match(CanonParser.BIT_OR);
						this.state = 730;
						this.expression(5);
						}
						break;

					case 12:
						{
						_localctx = new LogicalAndExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 731;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 732;
						this.match(CanonParser.LOGICAL_AND);
						this.state = 733;
						this.expression(4);
						}
						break;

					case 13:
						{
						_localctx = new LogicalOrExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 734;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 735;
						this.match(CanonParser.LOGICAL_OR);
						this.state = 736;
						this.expression(3);
						}
						break;

					case 14:
						{
						_localctx = new PipelineExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 737;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 738;
						this.match(CanonParser.PIPELINE);
						this.state = 739;
						this.expression(2);
						}
						break;

					case 15:
						{
						_localctx = new MemberAccessExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 740;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 741;
						this.match(CanonParser.DOT);
						this.state = 742;
						this.match(CanonParser.IDENTIFIER);
						}
						break;

					case 16:
						{
						_localctx = new IndexAccessExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 743;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 744;
						this.match(CanonParser.LBRACKET);
						this.state = 745;
						this.expression(0);
						this.state = 746;
						this.match(CanonParser.RBRACKET);
						}
						break;

					case 17:
						{
						_localctx = new SliceExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 748;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 749;
						this.match(CanonParser.LBRACKET);
						this.state = 751;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.FUN) | (1 << CanonParser.STRING_TYPE) | (1 << CanonParser.INT_TYPE) | (1 << CanonParser.FLOAT_TYPE) | (1 << CanonParser.BOOL_TYPE) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (CanonParser.BIT_NOT - 54)) | (1 << (CanonParser.SPREAD - 54)) | (1 << (CanonParser.LBRACE - 54)) | (1 << (CanonParser.LPAREN - 54)) | (1 << (CanonParser.LBRACKET - 54)) | (1 << (CanonParser.STRING_LITERAL - 54)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 54)) | (1 << (CanonParser.TEMPLATE_STRING_START - 54)) | (1 << (CanonParser.INTEGER_LITERAL - 54)) | (1 << (CanonParser.TRUE - 54)) | (1 << (CanonParser.FALSE - 54)) | (1 << (CanonParser.IDENTIFIER - 54)))) !== 0)) {
							{
							this.state = 750;
							this.expression(0);
							}
						}

						this.state = 753;
						this.match(CanonParser.RANGE);
						this.state = 755;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.FUN) | (1 << CanonParser.STRING_TYPE) | (1 << CanonParser.INT_TYPE) | (1 << CanonParser.FLOAT_TYPE) | (1 << CanonParser.BOOL_TYPE) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (CanonParser.BIT_NOT - 54)) | (1 << (CanonParser.SPREAD - 54)) | (1 << (CanonParser.LBRACE - 54)) | (1 << (CanonParser.LPAREN - 54)) | (1 << (CanonParser.LBRACKET - 54)) | (1 << (CanonParser.STRING_LITERAL - 54)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 54)) | (1 << (CanonParser.TEMPLATE_STRING_START - 54)) | (1 << (CanonParser.INTEGER_LITERAL - 54)) | (1 << (CanonParser.TRUE - 54)) | (1 << (CanonParser.FALSE - 54)) | (1 << (CanonParser.IDENTIFIER - 54)))) !== 0)) {
							{
							this.state = 754;
							this.expression(0);
							}
						}

						this.state = 757;
						this.match(CanonParser.RBRACKET);
						}
						break;

					case 18:
						{
						_localctx = new FuncCallExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 758;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 759;
						this.match(CanonParser.LPAREN);
						this.state = 761;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.FUN) | (1 << CanonParser.STRING_TYPE) | (1 << CanonParser.INT_TYPE) | (1 << CanonParser.FLOAT_TYPE) | (1 << CanonParser.BOOL_TYPE) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (CanonParser.BIT_NOT - 54)) | (1 << (CanonParser.SPREAD - 54)) | (1 << (CanonParser.LBRACE - 54)) | (1 << (CanonParser.LPAREN - 54)) | (1 << (CanonParser.LBRACKET - 54)) | (1 << (CanonParser.STRING_LITERAL - 54)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 54)) | (1 << (CanonParser.TEMPLATE_STRING_START - 54)) | (1 << (CanonParser.INTEGER_LITERAL - 54)) | (1 << (CanonParser.TRUE - 54)) | (1 << (CanonParser.FALSE - 54)) | (1 << (CanonParser.IDENTIFIER - 54)))) !== 0)) {
							{
							this.state = 760;
							this.argumentList();
							}
						}

						this.state = 763;
						this.match(CanonParser.RPAREN);
						}
						break;

					case 19:
						{
						_localctx = new NonNullAssertExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CanonParser.RULE_expression);
						this.state = 764;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 765;
						this.match(CanonParser.EXCLAMATION);
						}
						break;
					}
					}
				}
				this.state = 770;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
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
		this.enterRule(_localctx, 86, CanonParser.RULE_primary);
		try {
			this.state = 798;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				_localctx = new LiteralExprContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 771;
				this.literal();
				}
				break;

			case 2:
				_localctx = new ListLiteralExprContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 772;
				this.listLiteral();
				}
				break;

			case 3:
				_localctx = new LambdaExprContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 773;
				this.lambdaExpression();
				}
				break;

			case 4:
				_localctx = new AnonFuncExprContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 774;
				this.anonymousFunction();
				}
				break;

			case 5:
				_localctx = new SpreadExprContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 775;
				this.spreadExpression();
				}
				break;

			case 6:
				_localctx = new IdentifierExprContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 776;
				this.match(CanonParser.IDENTIFIER);
				}
				break;

			case 7:
				_localctx = new ThisExprContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 777;
				this.match(CanonParser.THIS);
				}
				break;

			case 8:
				_localctx = new IfExprContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 778;
				this.match(CanonParser.IF);
				this.state = 779;
				this.match(CanonParser.LPAREN);
				this.state = 780;
				this.expression(0);
				this.state = 781;
				this.match(CanonParser.RPAREN);
				this.state = 784;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
				case 1:
					{
					this.state = 782;
					this.expression(0);
					}
					break;

				case 2:
					{
					this.state = 783;
					this.block();
					}
					break;
				}
				this.state = 791;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
				case 1:
					{
					this.state = 786;
					this.match(CanonParser.ELSE);
					this.state = 789;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
					case 1:
						{
						this.state = 787;
						this.expression(0);
						}
						break;

					case 2:
						{
						this.state = 788;
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
				this.state = 793;
				this.match(CanonParser.LPAREN);
				this.state = 794;
				this.expression(0);
				this.state = 795;
				this.match(CanonParser.RPAREN);
				}
				break;

			case 10:
				_localctx = new CallExprPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 797;
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
		this.enterRule(_localctx, 88, CanonParser.RULE_literal);
		try {
			this.state = 804;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.STRING_LITERAL:
			case CanonParser.DOUBLE_STRING_LITERAL:
			case CanonParser.TEMPLATE_STRING_START:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 800;
				this.stringLiteral();
				}
				break;
			case CanonParser.INTEGER_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 801;
				this.match(CanonParser.INTEGER_LITERAL);
				}
				break;
			case CanonParser.TRUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 802;
				this.match(CanonParser.TRUE);
				}
				break;
			case CanonParser.FALSE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 803;
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
		this.enterRule(_localctx, 90, CanonParser.RULE_stringLiteral);
		try {
			this.state = 809;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 806;
				this.match(CanonParser.STRING_LITERAL);
				}
				break;
			case CanonParser.DOUBLE_STRING_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 807;
				this.match(CanonParser.DOUBLE_STRING_LITERAL);
				}
				break;
			case CanonParser.TEMPLATE_STRING_START:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 808;
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
		this.enterRule(_localctx, 92, CanonParser.RULE_templateString);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 811;
			this.match(CanonParser.TEMPLATE_STRING_START);
			this.state = 815;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (CanonParser.TEMPLATE_STRING_PART - 82)) | (1 << (CanonParser.TEMPLATE_INTERPOLATION_START - 82)) | (1 << (CanonParser.TEMPLATE_INTERPOLATION_SIMPLE - 82)))) !== 0)) {
				{
				{
				this.state = 812;
				this.templateStringContent();
				}
				}
				this.state = 817;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 818;
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
		this.enterRule(_localctx, 94, CanonParser.RULE_templateStringContent);
		try {
			this.state = 826;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.TEMPLATE_STRING_PART:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 820;
				this.match(CanonParser.TEMPLATE_STRING_PART);
				}
				break;
			case CanonParser.TEMPLATE_INTERPOLATION_SIMPLE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 821;
				this.match(CanonParser.TEMPLATE_INTERPOLATION_SIMPLE);
				}
				break;
			case CanonParser.TEMPLATE_INTERPOLATION_START:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 822;
				this.match(CanonParser.TEMPLATE_INTERPOLATION_START);
				this.state = 823;
				this.expression(0);
				this.state = 824;
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
		this.enterRule(_localctx, 96, CanonParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 828;
			this.match(CanonParser.ANNOTATION);
			this.state = 835;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CanonParser.LPAREN:
				{
				this.state = 829;
				this.match(CanonParser.LPAREN);
				this.state = 831;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.FUN) | (1 << CanonParser.STRING_TYPE) | (1 << CanonParser.INT_TYPE) | (1 << CanonParser.FLOAT_TYPE) | (1 << CanonParser.BOOL_TYPE) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (CanonParser.BIT_NOT - 54)) | (1 << (CanonParser.SPREAD - 54)) | (1 << (CanonParser.LBRACE - 54)) | (1 << (CanonParser.LPAREN - 54)) | (1 << (CanonParser.LBRACKET - 54)) | (1 << (CanonParser.STRING_LITERAL - 54)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 54)) | (1 << (CanonParser.TEMPLATE_STRING_START - 54)) | (1 << (CanonParser.INTEGER_LITERAL - 54)) | (1 << (CanonParser.TRUE - 54)) | (1 << (CanonParser.FALSE - 54)) | (1 << (CanonParser.IDENTIFIER - 54)))) !== 0)) {
					{
					this.state = 830;
					this.argumentList();
					}
				}

				this.state = 833;
				this.match(CanonParser.RPAREN);
				}
				break;
			case CanonParser.STRING_LITERAL:
			case CanonParser.DOUBLE_STRING_LITERAL:
			case CanonParser.TEMPLATE_STRING_START:
				{
				this.state = 834;
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
		this.enterRule(_localctx, 98, CanonParser.RULE_listLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 837;
			this.match(CanonParser.LBRACKET);
			this.state = 846;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.FUN) | (1 << CanonParser.STRING_TYPE) | (1 << CanonParser.INT_TYPE) | (1 << CanonParser.FLOAT_TYPE) | (1 << CanonParser.BOOL_TYPE) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (CanonParser.BIT_NOT - 54)) | (1 << (CanonParser.SPREAD - 54)) | (1 << (CanonParser.LBRACE - 54)) | (1 << (CanonParser.LPAREN - 54)) | (1 << (CanonParser.LBRACKET - 54)) | (1 << (CanonParser.STRING_LITERAL - 54)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 54)) | (1 << (CanonParser.TEMPLATE_STRING_START - 54)) | (1 << (CanonParser.INTEGER_LITERAL - 54)) | (1 << (CanonParser.TRUE - 54)) | (1 << (CanonParser.FALSE - 54)) | (1 << (CanonParser.IDENTIFIER - 54)))) !== 0)) {
				{
				this.state = 838;
				this.expression(0);
				this.state = 843;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CanonParser.COMMA) {
					{
					{
					this.state = 839;
					this.match(CanonParser.COMMA);
					this.state = 840;
					this.expression(0);
					}
					}
					this.state = 845;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 848;
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
		this.enterRule(_localctx, 100, CanonParser.RULE_lambdaExpression);
		try {
			this.state = 875;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 850;
				this.match(CanonParser.LBRACE);
				this.state = 851;
				this.match(CanonParser.RBRACE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 852;
				this.match(CanonParser.LBRACE);
				this.state = 853;
				this.match(CanonParser.ARROW);
				this.state = 854;
				this.match(CanonParser.RBRACE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 855;
				this.match(CanonParser.LBRACE);
				this.state = 856;
				this.match(CanonParser.ARROW);
				this.state = 857;
				this.lambdaBody();
				this.state = 858;
				this.match(CanonParser.RBRACE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 860;
				this.match(CanonParser.LBRACE);
				this.state = 861;
				this.lambdaParameters();
				this.state = 862;
				this.match(CanonParser.ARROW);
				this.state = 863;
				this.match(CanonParser.RBRACE);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 865;
				this.match(CanonParser.LBRACE);
				this.state = 866;
				this.lambdaParameters();
				this.state = 867;
				this.match(CanonParser.ARROW);
				this.state = 868;
				this.lambdaBody();
				this.state = 869;
				this.match(CanonParser.RBRACE);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 871;
				this.match(CanonParser.LBRACE);
				this.state = 872;
				this.lambdaBody();
				this.state = 873;
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
		this.enterRule(_localctx, 102, CanonParser.RULE_lambdaParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 877;
			this.lambdaParameter();
			this.state = 882;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CanonParser.COMMA) {
				{
				{
				this.state = 878;
				this.match(CanonParser.COMMA);
				this.state = 879;
				this.lambdaParameter();
				}
				}
				this.state = 884;
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
		this.enterRule(_localctx, 104, CanonParser.RULE_lambdaParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 885;
			this.match(CanonParser.IDENTIFIER);
			this.state = 888;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 886;
				this.match(CanonParser.COLON);
				this.state = 887;
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
		this.enterRule(_localctx, 106, CanonParser.RULE_lambdaBody);
		let _la: number;
		try {
			this.state = 903;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 890;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 899;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 891;
					this.statement();
					this.state = 896;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CanonParser.SEMICOLON) {
						{
						{
						this.state = 892;
						this.match(CanonParser.SEMICOLON);
						this.state = 893;
						this.statement();
						}
						}
						this.state = 898;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 901;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CanonParser.NEWLINE) | (1 << CanonParser.INIT) | (1 << CanonParser.PRIVATE) | (1 << CanonParser.GET) | (1 << CanonParser.REPEATED) | (1 << CanonParser.IF) | (1 << CanonParser.NOT) | (1 << CanonParser.THIS) | (1 << CanonParser.VAL) | (1 << CanonParser.VAR) | (1 << CanonParser.FUN) | (1 << CanonParser.STRING_TYPE) | (1 << CanonParser.INT_TYPE) | (1 << CanonParser.FLOAT_TYPE) | (1 << CanonParser.BOOL_TYPE) | (1 << CanonParser.MINUS))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (CanonParser.BIT_NOT - 54)) | (1 << (CanonParser.SPREAD - 54)) | (1 << (CanonParser.LBRACE - 54)) | (1 << (CanonParser.LPAREN - 54)) | (1 << (CanonParser.LBRACKET - 54)) | (1 << (CanonParser.STRING_LITERAL - 54)) | (1 << (CanonParser.DOUBLE_STRING_LITERAL - 54)) | (1 << (CanonParser.TEMPLATE_STRING_START - 54)) | (1 << (CanonParser.INTEGER_LITERAL - 54)) | (1 << (CanonParser.TRUE - 54)) | (1 << (CanonParser.FALSE - 54)) | (1 << (CanonParser.ANNOTATION - 54)) | (1 << (CanonParser.IDENTIFIER - 54)))) !== 0));
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
		this.enterRule(_localctx, 108, CanonParser.RULE_anonymousFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 905;
			this.match(CanonParser.FUN);
			this.state = 906;
			this.match(CanonParser.LPAREN);
			this.state = 908;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.THIS || _la === CanonParser.IDENTIFIER) {
				{
				this.state = 907;
				this.parameterList();
				}
			}

			this.state = 910;
			this.match(CanonParser.RPAREN);
			this.state = 913;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CanonParser.COLON) {
				{
				this.state = 911;
				this.match(CanonParser.COLON);
				this.state = 912;
				this.type();
				}
			}

			this.state = 915;
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
		this.enterRule(_localctx, 110, CanonParser.RULE_spreadExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 917;
			this.match(CanonParser.SPREAD);
			this.state = 918;
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
		case 42:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03Y\u039B\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x03\x02\x07\x02t\n\x02\f\x02" +
		"\x0E\x02w\v\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02}\n\x02\f\x02\x0E" +
		"\x02\x80\v\x02\x03\x02\x07\x02\x83\n\x02\f\x02\x0E\x02\x86\v\x02\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x03\x03\x05\x03\x8D\n\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x05\x06\x9B\n\x06\x03\x07\x06\x07\x9E\n\x07\r\x07\x0E\x07\x9F\x03" +
		"\b\x03\b\x03\b\x03\b\x07\b\xA6\n\b\f\b\x0E\b\xA9\v\b\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\xB4\n\t\x03\n\x07\n\xB7\n\n" +
		"\f\n\x0E\n\xBA\v\n\x03\n\x07\n\xBD\n\n\f\n\x0E\n\xC0\v\n\x03\n\x03\n\x03" +
		"\n\x05\n\xC5\n\n\x03\v\x07\v\xC8\n\v\f\v\x0E\v\xCB\v\v\x03\v\x07\v\xCE" +
		"\n\v\f\v\x0E\v\xD1\v\v\x03\v\x03\v\x03\v\x03\v\x03\f\x07\f\xD8\n\f\f\f" +
		"\x0E\f\xDB\v\f\x03\f\x07\f\xDE\n\f\f\f\x0E\f\xE1\v\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x03\r\x07\r\xE9\n\r\f\r\x0E\r\xEC\v\r\x03\r\x07\r\xEF\n\r" +
		"\f\r\x0E\r\xF2\v\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x07\x0E\xFA\n" +
		"\x0E\f\x0E\x0E\x0E\xFD\v\x0E\x03\x0E\x07\x0E\u0100\n\x0E\f\x0E\x0E\x0E" +
		"\u0103\v\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x05\x0E\u010D\n\x0E\x03\x0E\x03\x0E\x05\x0E\u0111\n\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x05\x0E\u0116\n\x0E\x03\x0E\x03\x0E\x03\x0F\x07\x0F\u011B" +
		"\n\x0F\f\x0F\x0E\x0F\u011E\v\x0F\x03\x0F\x07\x0F\u0121\n\x0F\f\x0F\x0E" +
		"\x0F\u0124\v\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u012A\n\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x07\x10\u0132\n\x10\f\x10" +
		"\x0E\x10\u0135\v\x10\x03\x11\x03\x11\x03\x11\x07\x11\u013A\n\x11\f\x11" +
		"\x0E\x11\u013D\v\x11\x03\x11\x05\x11\u0140\n\x11\x03\x12\x03\x12\x03\x12" +
		"\x05\x12\u0145\n\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x07" +
		"\x14\u014D\n\x14\f\x14\x0E\x14\u0150\v\x14\x05\x14\u0152\n\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x07\x15\u015A\n\x15\f\x15\x0E" +
		"\x15\u015D\v\x15\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u0163\n\x15\f" +
		"\x15\x0E\x15\u0166\v\x15\x07\x15\u0168\n\x15\f\x15\x0E\x15\u016B\v\x15" +
		"\x03\x15\x07\x15\u016E\n\x15\f\x15\x0E\x15\u0171\v\x15\x03\x15\x03\x15" +
		"\x03\x16\x03\x16\x07\x16\u0177\n\x16\f\x16\x0E\x16\u017A\v\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x07\x16\u0180\n\x16\f\x16\x0E\x16\u0183\v\x16" +
		"\x07\x16\u0185\n\x16\f\x16\x0E\x16\u0188\v\x16\x03\x16\x07\x16\u018B\n" +
		"\x16\f\x16\x0E\x16\u018E\v\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x05\x17\u0197\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x05\x18\u01A1\n\x18\x03\x19\x03\x19\x03\x1A" +
		"\x07\x1A\u01A6\n\x1A\f\x1A\x0E\x1A\u01A9\v\x1A\x03\x1A\x07\x1A\u01AC\n" +
		"\x1A\f\x1A\x0E\x1A\u01AF\v\x1A\x03\x1A\x05\x1A\u01B2\n\x1A\x03\x1A\x03" +
		"\x1A\x05\x1A\u01B6\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u01BC" +
		"\n\x1A\x05\x1A\u01BE\n\x1A\x03\x1B\x03\x1B\x05\x1B\u01C2\n\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D" +
		"\x05\x1D\u01CE\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u01D4\n\x1E" +
		"\f\x1E\x0E\x1E\u01D7\v\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x07\x1F\u01DF\n\x1F\f\x1F\x0E\x1F\u01E2\v\x1F\x03\x1F\x03\x1F\x03" +
		" \x03 \x03 \x05 \u01E9\n \x03 \x03 \x03 \x05 \u01EE\n \x03!\x03!\x03!" +
		"\x05!\u01F3\n!\x03!\x03!\x03!\x03!\x03!\x05!\u01FA\n!\x05!\u01FC\n!\x03" +
		"\"\x07\"\u01FF\n\"\f\"\x0E\"\u0202\v\"\x03\"\x07\"\u0205\n\"\f\"\x0E\"" +
		"\u0208\v\"\x03\"\x03\"\x03\"\x05\"\u020D\n\"\x03\"\x05\"\u0210\n\"\x03" +
		"\"\x03\"\x03#\x07#\u0215\n#\f#\x0E#\u0218\v#\x03#\x07#\u021B\n#\f#\x0E" +
		"#\u021E\v#\x03#\x03#\x03#\x03#\x03#\x03#\x05#\u0226\n#\x03#\x03#\x03$" +
		"\x07$\u022B\n$\f$\x0E$\u022E\v$\x03$\x07$\u0231\n$\f$\x0E$\u0234\v$\x03" +
		"$\x05$\u0237\n$\x03$\x03$\x03$\x03$\x05$\u023D\n$\x03$\x03$\x03$\x05$" +
		"\u0242\n$\x03$\x03$\x03%\x07%\u0247\n%\f%\x0E%\u024A\v%\x03%\x07%\u024D" +
		"\n%\f%\x0E%\u0250\v%\x03%\x03%\x03%\x03%\x03%\x05%\u0257\n%\x03%\x03%" +
		"\x05%\u025B\n%\x03&\x03&\x07&\u025F\n&\f&\x0E&\u0262\v&\x03&\x03&\x03" +
		"&\x03&\x07&\u0268\n&\f&\x0E&\u026B\v&\x05&\u026D\n&\x03&\x07&\u0270\n" +
		"&\f&\x0E&\u0273\v&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x07" +
		"(\u027E\n(\f(\x0E(\u0281\v(\x03)\x03)\x05)\u0285\n)\x03)\x03)\x03)\x05" +
		")\u028A\n)\x03*\x03*\x03*\x05*\u028F\n*\x03*\x05*\u0292\n*\x03*\x05*\u0295" +
		"\n*\x03+\x03+\x03+\x07+\u029A\n+\f+\x0E+\u029D\v+\x03,\x03,\x03,\x03," +
		"\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u02BB\n,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u02F2\n,\x03" +
		",\x03,\x05,\u02F6\n,\x03,\x03,\x03,\x03,\x05,\u02FC\n,\x03,\x03,\x03," +
		"\x07,\u0301\n,\f,\x0E,\u0304\v,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x05-\u0313\n-\x03-\x03-\x03-\x05-\u0318\n-" +
		"\x05-\u031A\n-\x03-\x03-\x03-\x03-\x03-\x05-\u0321\n-\x03.\x03.\x03.\x03" +
		".\x05.\u0327\n.\x03/\x03/\x03/\x05/\u032C\n/\x030\x030\x070\u0330\n0\f" +
		"0\x0E0\u0333\v0\x030\x030\x031\x031\x031\x031\x031\x031\x051\u033D\n1" +
		"\x032\x032\x032\x052\u0342\n2\x032\x032\x052\u0346\n2\x033\x033\x033\x03" +
		"3\x073\u034C\n3\f3\x0E3\u034F\v3\x053\u0351\n3\x033\x033\x034\x034\x03" +
		"4\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x03" +
		"4\x034\x034\x034\x034\x034\x034\x034\x034\x054\u036E\n4\x035\x035\x03" +
		"5\x075\u0373\n5\f5\x0E5\u0376\v5\x036\x036\x036\x056\u037B\n6\x037\x03" +
		"7\x037\x037\x077\u0381\n7\f7\x0E7\u0384\v7\x067\u0386\n7\r7\x0E7\u0387" +
		"\x057\u038A\n7\x038\x038\x038\x058\u038F\n8\x038\x038\x038\x058\u0394" +
		"\n8\x038\x038\x039\x039\x039\x039\x02\x02\x03V:\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
		"\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x02" +
		"4\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02" +
		"P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02" +
		"l\x02n\x02p\x02\x02\v\x03\x02\x16\x17\x03\x02\x1A\x1E\x03\x02+1\x03\x02" +
		"!#\x03\x02\x1F \x03\x02;<\x03\x029:\x03\x02\'*\x03\x02%&\x02\u040C\x02" +
		"u\x03\x02\x02\x02\x04\x8C\x03\x02\x02\x02\x06\x8E\x03\x02\x02\x02\b\x91" +
		"\x03\x02\x02\x02\n\x9A\x03\x02\x02\x02\f\x9D\x03\x02\x02\x02\x0E\xA1\x03" +
		"\x02\x02\x02\x10\xB3\x03\x02\x02\x02\x12\xB8\x03\x02\x02\x02\x14\xC9\x03" +
		"\x02\x02\x02\x16\xD9\x03\x02\x02\x02\x18\xEA\x03\x02\x02\x02\x1A\xFB\x03" +
		"\x02\x02\x02\x1C\u011C\x03\x02\x02\x02\x1E\u012E\x03\x02\x02\x02 \u0136" +
		"\x03\x02\x02\x02\"\u0144\x03\x02\x02\x02$\u0146\x03\x02\x02\x02&\u0148" +
		"\x03\x02\x02\x02(\u0157\x03\x02\x02\x02*\u0174\x03\x02\x02\x02,\u0196" +
		"\x03\x02\x02\x02.\u01A0\x03\x02\x02\x020\u01A2\x03\x02\x02\x022\u01A7" +
		"\x03\x02\x02\x024\u01C1\x03\x02\x02\x026\u01C7\x03\x02\x02\x028\u01CD" +
		"\x03\x02\x02\x02:\u01CF\x03\x02\x02\x02<\u01DA\x03\x02\x02\x02>\u01ED" +
		"\x03\x02\x02\x02@\u01FB\x03\x02\x02\x02B\u0200\x03\x02\x02\x02D\u0216" +
		"\x03\x02\x02\x02F\u022C\x03\x02\x02\x02H\u0248\x03\x02\x02\x02J\u025C" +
		"\x03\x02\x02\x02L\u0276\x03\x02\x02\x02N\u027A\x03\x02\x02\x02P\u0284" +
		"\x03\x02\x02\x02R\u028B\x03\x02\x02\x02T\u0296\x03\x02\x02\x02V\u02BA" +
		"\x03\x02\x02\x02X\u0320\x03\x02\x02\x02Z\u0326\x03\x02\x02\x02\\\u032B" +
		"\x03\x02\x02\x02^\u032D\x03\x02\x02\x02`\u033C\x03\x02\x02\x02b\u033E" +
		"\x03\x02\x02\x02d\u0347\x03\x02\x02\x02f\u036D\x03\x02\x02\x02h\u036F" +
		"\x03\x02\x02\x02j\u0377\x03\x02\x02\x02l\u0389\x03\x02\x02\x02n\u038B" +
		"\x03\x02\x02\x02p\u0397\x03\x02\x02\x02rt\x07\x04\x02\x02sr\x03\x02\x02" +
		"\x02tw\x03\x02\x02\x02us\x03\x02\x02\x02uv\x03\x02\x02\x02vx\x03\x02\x02" +
		"\x02wu\x03\x02\x02\x02x~\x05\x04\x03\x02yz\x05\f\x07\x02z{\x05\x04\x03" +
		"\x02{}\x03\x02\x02\x02|y\x03\x02\x02\x02}\x80\x03\x02\x02\x02~|\x03\x02" +
		"\x02\x02~\x7F\x03\x02\x02\x02\x7F\x84\x03\x02\x02\x02\x80~\x03\x02\x02" +
		"\x02\x81\x83\x07\x04\x02\x02\x82\x81\x03\x02\x02\x02\x83\x86\x03\x02\x02" +
		"\x02\x84\x82\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x87\x03\x02\x02" +
		"\x02\x86\x84\x03\x02\x02\x02\x87\x88\x07\x02\x02\x03\x88\x03\x03\x02\x02" +
		"\x02\x89\x8D\x05\x06\x04\x02\x8A\x8D\x05\b\x05\x02\x8B\x8D\x05\x10\t\x02" +
		"\x8C\x89\x03\x02\x02\x02\x8C\x8A\x03\x02\x02\x02\x8C\x8B\x03\x02\x02\x02" +
		"\x8D\x05\x03\x02\x02\x02\x8E\x8F\x07\x07\x02\x02\x8F\x90\x05\\/\x02\x90" +
		"\x07\x03\x02\x02\x02\x91\x92\x07\x11\x02\x02\x92\x93\x07R\x02\x02\x93" +
		"\t\x03\x02\x02\x02\x94\x9B\x07H\x02\x02\x95\x9B\x07\x04\x02\x02\x96\x97" +
		"\x07H\x02\x02\x97\x9B\x07\x04\x02\x02\x98\x99\x07\x04\x02\x02\x99\x9B" +
		"\x07H\x02\x02\x9A\x94\x03\x02\x02\x02\x9A\x95\x03\x02\x02\x02\x9A\x96" +
		"\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02\x9B\v\x03\x02\x02\x02\x9C\x9E" +
		"\x05\n\x06\x02\x9D\x9C\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\x9D" +
		"\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\r\x03\x02\x02\x02\xA1\xA7" +
		"\x05\x10\t\x02\xA2\xA3\x05\f\x07\x02\xA3\xA4\x05\x10\t\x02\xA4\xA6\x03" +
		"\x02\x02\x02\xA5\xA2\x03\x02\x02\x02\xA6\xA9\x03\x02\x02\x02\xA7\xA5\x03" +
		"\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\x0F\x03\x02\x02\x02\xA9\xA7\x03" +
		"\x02\x02\x02\xAA\xB4\x05\x12\n\x02\xAB\xB4\x05\x14\v\x02\xAC\xB4\x05\x16" +
		"\f\x02\xAD\xB4\x05\x18\r\x02\xAE\xB4\x05\x1C\x0F\x02\xAF\xB4\x05\x1A\x0E" +
		"\x02\xB0\xB4\x054\x1B\x02\xB1\xB4\x056\x1C\x02\xB2\xB4\x05R*\x02\xB3\xAA" +
		"\x03\x02\x02\x02\xB3\xAB\x03\x02\x02\x02\xB3\xAC\x03\x02\x02\x02\xB3\xAD" +
		"\x03\x02\x02\x02\xB3\xAE\x03\x02\x02\x02\xB3\xAF\x03\x02\x02\x02\xB3\xB0" +
		"\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB3\xB2\x03\x02\x02\x02\xB4\x11" +
		"\x03\x02\x02\x02\xB5\xB7\x05b2\x02\xB6\xB5\x03\x02\x02\x02\xB7\xBA\x03" +
		"\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBE\x03" +
		"\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBB\xBD\x07\x04\x02\x02\xBC\xBB\x03" +
		"\x02\x02\x02\xBD\xC0\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBF\x03" +
		"\x02\x02\x02\xBF\xC1\x03\x02\x02\x02\xC0\xBE\x03\x02\x02\x02\xC1\xC4\x07" +
		"\t\x02\x02\xC2\xC5\x05(\x15\x02\xC3\xC5\x05\\/\x02\xC4\xC2\x03\x02\x02" +
		"\x02\xC4\xC3\x03\x02\x02\x02\xC5\x13\x03\x02\x02\x02\xC6\xC8\x05b2\x02" +
		"\xC7\xC6\x03\x02\x02\x02\xC8\xCB\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02" +
		"\xC9\xCA\x03\x02\x02\x02\xCA\xCF\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02" +
		"\xCC\xCE\x07\x04\x02\x02\xCD\xCC\x03\x02\x02\x02\xCE\xD1\x03\x02\x02\x02" +
		"\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD2\x03\x02\x02\x02" +
		"\xD1\xCF\x03\x02\x02\x02\xD2\xD3\x07\n\x02\x02\xD3\xD4\x07R\x02\x02\xD4" +
		"\xD5\x05*\x16\x02\xD5\x15\x03\x02\x02\x02\xD6\xD8\x05b2\x02\xD7\xD6\x03" +
		"\x02\x02\x02\xD8\xDB\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xD9\xDA\x03" +
		"\x02\x02\x02\xDA\xDF\x03\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDC\xDE\x07" +
		"\x04\x02\x02\xDD\xDC\x03\x02\x02\x02\xDE\xE1\x03\x02\x02\x02\xDF\xDD\x03" +
		"\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE2\x03\x02\x02\x02\xE1\xDF\x03" +
		"\x02\x02\x02\xE2\xE3\x07\v\x02\x02\xE3\xE4\x07R\x02\x02\xE4\xE5\x07+\x02" +
		"\x02\xE5\xE6\x05\x1E\x10\x02\xE6\x17\x03\x02\x02\x02\xE7\xE9\x05b2\x02" +
		"\xE8\xE7\x03\x02\x02\x02\xE9\xEC\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02" +
		"\xEA\xEB\x03\x02\x02\x02\xEB\xF0\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02" +
		"\xED\xEF\x07\x04\x02\x02\xEE\xED\x03\x02\x02\x02\xEF\xF2\x03\x02\x02\x02" +
		"\xF0\xEE\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF3\x03\x02\x02\x02" +
		"\xF2\xF0\x03\x02\x02\x02\xF3\xF4\x07\f\x02\x02\xF4\xF5\x07R\x02\x02\xF5" +
		"\xF6\x07+\x02\x02\xF6\xF7\x05 \x11\x02\xF7\x19\x03\x02\x02\x02\xF8\xFA" +
		"\x05b2\x02\xF9\xF8\x03\x02\x02\x02\xFA\xFD\x03\x02\x02\x02\xFB\xF9\x03" +
		"\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\u0101\x03\x02\x02\x02\xFD\xFB" +
		"\x03\x02\x02\x02\xFE\u0100\x07\x04\x02\x02\xFF\xFE\x03\x02\x02\x02\u0100" +
		"\u0103\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0101\u0102\x03\x02\x02" +
		"\x02\u0102\u010C\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0104\u0105" +
		"\x07\x19\x02\x02\u0105\u0106\x07\x18\x02\x02\u0106\u0107\x05 \x11\x02" +
		"\u0107\u0108\x07E\x02\x02\u0108\u0109\x07R\x02\x02\u0109\u010D\x03\x02" +
		"\x02\x02\u010A\u010B\x07\x18\x02\x02\u010B\u010D\x07R\x02\x02\u010C\u0104" +
		"\x03\x02\x02\x02\u010C\u010A\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02" +
		"\u010E\u0110\x07A\x02\x02\u010F\u0111\x05N(\x02\u0110\u010F\x03\x02\x02" +
		"\x02\u0110\u0111\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0115" +
		"\x07B\x02\x02\u0113\u0114\x07G\x02\x02\u0114\u0116\x05 \x11\x02\u0115" +
		"\u0113\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\u0117\x03\x02" +
		"\x02\x02\u0117\u0118\x05(\x15\x02\u0118\x1B\x03\x02\x02\x02\u0119\u011B" +
		"\x05b2\x02\u011A\u0119\x03\x02\x02\x02\u011B\u011E\x03\x02\x02\x02\u011C" +
		"\u011A\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\u0122\x03\x02" +
		"\x02\x02\u011E\u011C\x03\x02\x02\x02\u011F\u0121\x07\x04\x02\x02\u0120" +
		"\u011F\x03\x02\x02\x02\u0121\u0124\x03\x02\x02\x02\u0122\u0120\x03\x02" +
		"\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0125\x03\x02\x02\x02\u0124" +
		"\u0122\x03\x02\x02\x02\u0125\u0126\t\x02\x02\x02\u0126\u0129\x07R\x02" +
		"\x02\u0127\u0128\x07G\x02\x02\u0128\u012A\x05 \x11\x02\u0129\u0127\x03" +
		"\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B" +
		"\u012C\x07+\x02\x02\u012C\u012D\x05V,\x02\u012D\x1D\x03\x02\x02\x02\u012E" +
		"\u0133\x05 \x11\x02\u012F\u0130\x076\x02\x02\u0130\u0132\x05 \x11\x02" +
		"\u0131\u012F\x03\x02\x02\x02\u0132\u0135\x03\x02\x02\x02\u0133\u0131\x03" +
		"\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\x1F\x03\x02\x02\x02\u0135" +
		"\u0133\x03\x02\x02\x02\u0136\u013B\x05\"\x12\x02\u0137\u0138\x07C\x02" +
		"\x02\u0138\u013A\x07D\x02\x02\u0139\u0137\x03\x02\x02\x02\u013A\u013D" +
		"\x03\x02\x02\x02\u013B\u0139\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02" +
		"\u013C\u013F\x03\x02\x02\x02\u013D\u013B\x03\x02\x02\x02\u013E\u0140\x07" +
		"I\x02\x02\u013F\u013E\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140" +
		"!\x03\x02\x02\x02\u0141\u0145\x05$\x13\x02\u0142\u0145\x07R\x02\x02\u0143" +
		"\u0145\x05&\x14\x02\u0144\u0141\x03\x02\x02\x02\u0144\u0142\x03\x02\x02" +
		"\x02\u0144\u0143\x03\x02\x02\x02\u0145#\x03\x02\x02\x02\u0146\u0147\t" +
		"\x03\x02\x02\u0147%\x03\x02\x02\x02\u0148\u0151\x07A\x02\x02\u0149\u014E" +
		"\x05 \x11\x02\u014A\u014B\x07F\x02\x02\u014B\u014D\x05 \x11\x02\u014C" +
		"\u014A\x03\x02\x02\x02\u014D\u0150\x03\x02\x02\x02\u014E\u014C\x03\x02" +
		"\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F\u0152\x03\x02\x02\x02\u0150" +
		"\u014E\x03\x02\x02\x02\u0151\u0149\x03\x02\x02\x02\u0151\u0152\x03\x02" +
		"\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153\u0154\x07B\x02\x02\u0154\u0155" +
		"\x07J\x02\x02\u0155\u0156\x05 \x11\x02\u0156\'\x03\x02\x02\x02\u0157\u015B" +
		"\x07?\x02\x02\u0158\u015A\x07\x04\x02\x02\u0159\u0158\x03\x02\x02\x02" +
		"\u015A\u015D\x03\x02\x02\x02\u015B\u0159\x03\x02\x02\x02\u015B\u015C\x03" +
		"\x02\x02\x02\u015C\u0169\x03\x02\x02\x02\u015D\u015B\x03\x02\x02\x02\u015E" +
		"\u0164\x05.\x18\x02\u015F\u0160\x05\f\x07\x02\u0160\u0161\x05.\x18\x02" +
		"\u0161\u0163\x03\x02\x02\x02\u0162\u015F\x03\x02\x02\x02\u0163\u0166\x03" +
		"\x02\x02\x02\u0164\u0162\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165" +
		"\u0168\x03\x02\x02\x02\u0166\u0164\x03\x02\x02\x02\u0167\u015E\x03\x02" +
		"\x02\x02\u0168\u016B\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02\u0169" +
		"\u016A\x03\x02\x02\x02\u016A\u016F\x03\x02\x02\x02\u016B\u0169\x03\x02" +
		"\x02\x02\u016C\u016E\x07\x04\x02\x02\u016D\u016C\x03\x02\x02\x02\u016E" +
		"\u0171\x03\x02\x02\x02\u016F\u016D\x03\x02\x02\x02\u016F\u0170\x03\x02" +
		"\x02\x02\u0170\u0172\x03\x02\x02\x02\u0171\u016F\x03\x02\x02\x02\u0172" +
		"\u0173\x07@\x02\x02\u0173)\x03\x02\x02\x02\u0174\u0178\x07?\x02\x02\u0175" +
		"\u0177\x07\x04\x02\x02\u0176\u0175\x03\x02\x02\x02\u0177\u017A\x03\x02" +
		"\x02\x02\u0178\u0176\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179" +
		"\u0186\x03\x02\x02\x02\u017A\u0178\x03\x02\x02\x02\u017B\u0181\x05,\x17" +
		"\x02\u017C\u017D\x05\f\x07\x02\u017D\u017E\x05,\x17\x02\u017E\u0180\x03" +
		"\x02\x02\x02\u017F\u017C\x03\x02\x02\x02\u0180\u0183\x03\x02\x02\x02\u0181" +
		"\u017F\x03\x02\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182\u0185\x03\x02" +
		"\x02\x02\u0183\u0181\x03\x02\x02\x02\u0184\u017B\x03\x02\x02\x02\u0185" +
		"\u0188\x03\x02\x02\x02\u0186\u0184\x03\x02\x02\x02\u0186\u0187\x03\x02" +
		"\x02\x02\u0187\u018C\x03\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0189" +
		"\u018B\x07\x04\x02\x02\u018A\u0189\x03\x02\x02\x02\u018B\u018E\x03\x02" +
		"\x02\x02\u018C\u018A\x03\x02\x02\x02\u018C\u018D\x03\x02\x02\x02\u018D" +
		"\u018F\x03\x02\x02\x02\u018E\u018C\x03\x02\x02\x02\u018F\u0190\x07@\x02" +
		"\x02\u0190+\x03\x02\x02\x02\u0191\u0197\x052\x1A\x02\u0192\u0197\x05B" +
		"\"\x02\u0193\u0197\x05D#\x02\u0194\u0197\x05F$\x02\u0195\u0197\x05H%\x02" +
		"\u0196\u0191\x03\x02\x02\x02\u0196\u0192\x03\x02\x02\x02\u0196\u0193\x03" +
		"\x02\x02\x02\u0196\u0194\x03\x02\x02\x02\u0196\u0195\x03\x02\x02\x02\u0197" +
		"-\x03\x02\x02\x02\u0198\u01A1\x054\x1B\x02\u0199\u01A1\x050\x19\x02\u019A" +
		"\u01A1\x052\x1A\x02\u019B\u01A1\x05B\"\x02\u019C\u01A1\x05D#\x02\u019D" +
		"\u01A1\x05F$\x02\u019E\u01A1\x05H%\x02\u019F\u01A1\x05\x1C\x0F\x02\u01A0" +
		"\u0198\x03\x02\x02\x02\u01A0\u0199\x03\x02\x02\x02\u01A0\u019A\x03\x02" +
		"\x02\x02\u01A0\u019B\x03\x02\x02\x02\u01A0\u019C\x03\x02\x02\x02\u01A0" +
		"\u019D\x03\x02\x02\x02\u01A0\u019E\x03\x02\x02\x02\u01A0\u019F\x03\x02" +
		"\x02\x02\u01A1/\x03\x02\x02\x02\u01A2\u01A3\x05V,\x02\u01A31\x03\x02\x02" +
		"\x02\u01A4\u01A6\x05b2\x02\u01A5\u01A4\x03\x02\x02\x02\u01A6\u01A9\x03" +
		"\x02\x02\x02\u01A7\u01A5\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8" +
		"\u01AD\x03\x02\x02\x02\u01A9\u01A7\x03\x02\x02\x02\u01AA\u01AC\x07\x04" +
		"\x02\x02\u01AB\u01AA\x03\x02\x02\x02\u01AC\u01AF\x03\x02\x02\x02\u01AD" +
		"\u01AB\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01B1\x03\x02" +
		"\x02\x02\u01AF\u01AD\x03\x02\x02\x02\u01B0\u01B2\x07\x0E\x02\x02\u01B1" +
		"\u01B0\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2\u01B3\x03\x02" +
		"\x02\x02\u01B3\u01BD\x07R\x02\x02\u01B4\u01B6\x07I\x02\x02\u01B5\u01B4" +
		"\x03\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02" +
		"\u01B7\u01B8\x07G\x02\x02\u01B8\u01BB\x05 \x11\x02\u01B9\u01BA\x07+\x02" +
		"\x02\u01BA\u01BC\x05V,\x02\u01BB\u01B9\x03\x02\x02\x02\u01BB\u01BC\x03" +
		"\x02\x02\x02\u01BC\u01BE\x03\x02\x02\x02\u01BD\u01B5\x03\x02\x02\x02\u01BD" +
		"\u01BE\x03\x02\x02\x02\u01BE3\x03\x02\x02\x02\u01BF\u01C0\x07\x15\x02" +
		"\x02\u01C0\u01C2\x07E\x02\x02\u01C1\u01BF\x03\x02\x02\x02\u01C1\u01C2" +
		"\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C4\x07R\x02\x02" +
		"\u01C4\u01C5\t\x04\x02\x02\u01C5\u01C6\x05V,\x02\u01C65\x03\x02\x02\x02" +
		"\u01C7\u01C8\x058\x1D\x02\u01C8\u01C9\x07+\x02\x02\u01C9\u01CA\x05V,\x02" +
		"\u01CA7\x03\x02\x02\x02\u01CB\u01CE\x05:\x1E\x02\u01CC\u01CE\x05<\x1F" +
		"\x02\u01CD\u01CB\x03\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u01CD\u01CC\x03\x02\x02\x02\u01CE9\x03\x02\x02\x02\u01CF\u01D0" +
		"\x07C\x02\x02\u01D0\u01D5\x05> \x02\u01D1\u01D2\x07F\x02\x02\u01D2\u01D4" +
		"\x05> \x02\u01D3\u01D1\x03\x02\x02\x02\u01D4\u01D7\x03\x02\x02\x02\u01D5" +
		"\u01D3\x03\x02\x02\x02\u01D5\u01D6\x03\x02\x02\x02\u01D6\u01D8\x03\x02" +
		"\x02\x02\u01D7\u01D5\x03\x02\x02\x02\u01D8\u01D9\x07D\x02\x02\u01D9;\x03" +
		"\x02\x02\x02\u01DA\u01DB\x07?\x02\x02\u01DB\u01E0\x05@!\x02\u01DC\u01DD" +
		"\x07F\x02\x02\u01DD\u01DF\x05@!\x02\u01DE\u01DC\x03\x02\x02\x02\u01DF" +
		"\u01E2\x03\x02\x02\x02\u01E0\u01DE\x03\x02\x02\x02\u01E0\u01E1\x03\x02" +
		"\x02\x02\u01E1\u01E3\x03\x02\x02\x02\u01E2\u01E0\x03\x02\x02\x02\u01E3" +
		"\u01E4\x07@\x02\x02\u01E4=\x03\x02\x02\x02\u01E5\u01E8\x07R\x02\x02\u01E6" +
		"\u01E7\x07+\x02\x02\u01E7\u01E9\x05V,\x02\u01E8\u01E6\x03\x02\x02\x02" +
		"\u01E8\u01E9\x03\x02\x02\x02\u01E9\u01EE\x03\x02\x02\x02\u01EA\u01EE\x05" +
		"8\x1D\x02\u01EB\u01EC\x07=\x02\x02\u01EC\u01EE\x07R\x02\x02\u01ED\u01E5" +
		"\x03\x02\x02\x02\u01ED\u01EA\x03\x02\x02\x02\u01ED\u01EB\x03\x02\x02\x02" +
		"\u01EE?\x03\x02\x02\x02\u01EF\u01F2\x07R\x02\x02\u01F0\u01F1\x07+\x02" +
		"\x02\u01F1\u01F3\x05V,\x02\u01F2\u01F0\x03\x02\x02\x02\u01F2\u01F3\x03" +
		"\x02\x02\x02\u01F3\u01FC\x03\x02\x02\x02\u01F4\u01F5\x07R\x02\x02\u01F5" +
		"\u01F6\x07G\x02\x02\u01F6\u01F9\x07R\x02\x02\u01F7\u01F8\x07+\x02\x02" +
		"\u01F8\u01FA\x05V,\x02\u01F9\u01F7\x03\x02\x02\x02\u01F9\u01FA\x03\x02" +
		"\x02\x02\u01FA\u01FC\x03\x02\x02\x02\u01FB\u01EF\x03\x02\x02\x02\u01FB" +
		"\u01F4\x03\x02\x02\x02\u01FCA\x03\x02\x02\x02\u01FD\u01FF\x05b2\x02\u01FE" +
		"\u01FD\x03\x02\x02\x02\u01FF\u0202\x03\x02\x02\x02\u0200\u01FE\x03\x02" +
		"\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201\u0206\x03\x02\x02\x02\u0202" +
		"\u0200\x03\x02\x02\x02\u0203\u0205\x07\x04\x02\x02\u0204\u0203\x03\x02" +
		"\x02\x02\u0205\u0208\x03\x02\x02\x02\u0206\u0204\x03\x02\x02\x02\u0206" +
		"\u0207\x03\x02\x02\x02\u0207\u0209\x03\x02\x02\x02\u0208\u0206\x03\x02" +
		"\x02\x02\u0209\u020F\x07\r\x02\x02\u020A\u020C\x07A\x02\x02\u020B\u020D" +
		"\x05N(\x02\u020C\u020B\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02\u020D" +
		"\u020E\x03\x02\x02\x02\u020E\u0210\x07B\x02\x02\u020F\u020A\x03\x02\x02" +
		"\x02\u020F\u0210\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211\u0212" +
		"\x05(\x15\x02\u0212C\x03\x02\x02\x02\u0213\u0215\x05b2\x02\u0214\u0213" +
		"\x03\x02\x02\x02\u0215\u0218\x03\x02\x02\x02\u0216\u0214\x03\x02\x02\x02" +
		"\u0216\u0217\x03\x02\x02\x02\u0217\u021C\x03\x02\x02\x02\u0218\u0216\x03" +
		"\x02\x02\x02\u0219\u021B\x07\x04\x02\x02\u021A\u0219\x03\x02\x02\x02\u021B" +
		"\u021E\x03\x02\x02\x02\u021C\u021A\x03\x02\x02\x02\u021C\u021D\x03\x02" +
		"\x02\x02\u021D\u021F\x03\x02\x02\x02\u021E\u021C\x03\x02\x02\x02\u021F" +
		"\u0220\x07\x0F\x02\x02\u0220\u0221\x07R\x02\x02\u0221\u0222\x07A\x02\x02" +
		"\u0222\u0225\x07B\x02\x02\u0223\u0224\x07G\x02\x02\u0224\u0226\x05 \x11" +
		"\x02\u0225\u0223\x03\x02\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226\u0227" +
		"\x03\x02\x02\x02\u0227\u0228\x05(\x15\x02\u0228E\x03\x02\x02\x02\u0229" +
		"\u022B\x05b2\x02\u022A\u0229\x03\x02\x02\x02\u022B\u022E\x03\x02\x02\x02" +
		"\u022C\u022A\x03\x02\x02\x02\u022C\u022D\x03\x02\x02\x02\u022D\u0232\x03" +
		"\x02\x02\x02\u022E\u022C\x03\x02\x02\x02\u022F\u0231\x07\x04\x02\x02\u0230" +
		"\u022F\x03\x02\x02\x02\u0231\u0234\x03\x02\x02\x02\u0232\u0230\x03\x02" +
		"\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233\u0236\x03\x02\x02\x02\u0234" +
		"\u0232\x03\x02\x02\x02\u0235\u0237\x07\x0E\x02\x02\u0236\u0235\x03\x02" +
		"\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02\u0238" +
		"\u0239\x07\x18\x02\x02\u0239\u023A\x07R\x02\x02\u023A\u023C\x07A\x02\x02" +
		"\u023B\u023D\x05N(\x02\u023C\u023B\x03\x02\x02\x02\u023C\u023D\x03\x02" +
		"\x02\x02\u023D\u023E\x03\x02\x02\x02\u023E\u0241\x07B\x02\x02\u023F\u0240" +
		"\x07G\x02\x02\u0240\u0242\x05 \x11\x02\u0241\u023F\x03\x02\x02\x02\u0241" +
		"\u0242\x03\x02\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243\u0244\x05(\x15" +
		"\x02\u0244G\x03\x02\x02\x02\u0245\u0247\x05b2\x02\u0246\u0245\x03\x02" +
		"\x02\x02\u0247\u024A\x03\x02\x02\x02\u0248\u0246\x03\x02\x02\x02\u0248" +
		"\u0249\x03\x02\x02\x02\u0249\u024E\x03\x02\x02\x02\u024A\u0248\x03\x02" +
		"\x02\x02\u024B\u024D\x07\x04\x02\x02\u024C\u024B\x03\x02\x02\x02\u024D" +
		"\u0250\x03\x02\x02\x02\u024E\u024C\x03\x02\x02\x02\u024E\u024F\x03\x02" +
		"\x02\x02\u024F\u0251\x03\x02\x02\x02\u0250\u024E\x03\x02\x02\x02\u0251" +
		"\u0252\x07\x10\x02\x02\u0252\u0253\x07R\x02\x02\u0253\u0254\x07G\x02\x02" +
		"\u0254\u0256\x05 \x11\x02\u0255\u0257\x05J&\x02\u0256\u0255\x03\x02\x02" +
		"\x02\u0256\u0257\x03\x02\x02\x02\u0257\u025A\x03\x02\x02\x02\u0258\u0259" +
		"\x07+\x02\x02\u0259\u025B\x05V,\x02\u025A\u0258\x03\x02\x02\x02\u025A" +
		"\u025B\x03\x02\x02\x02\u025BI\x03\x02\x02\x02\u025C\u0260\x07?\x02\x02" +
		"\u025D\u025F\x07\x04\x02\x02\u025E\u025D\x03\x02\x02\x02\u025F\u0262\x03" +
		"\x02\x02\x02\u0260\u025E\x03\x02\x02\x02\u0260\u0261\x03\x02\x02\x02\u0261" +
		"\u026C\x03\x02\x02\x02\u0262\u0260\x03\x02\x02\x02\u0263\u0269\x05L\'" +
		"\x02\u0264\u0265\x05\f\x07\x02\u0265\u0266\x05L\'\x02\u0266\u0268\x03" +
		"\x02\x02\x02\u0267\u0264\x03\x02\x02\x02\u0268\u026B\x03\x02\x02\x02\u0269" +
		"\u0267\x03\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A\u026D\x03\x02" +
		"\x02\x02\u026B\u0269\x03\x02\x02\x02\u026C\u0263\x03\x02\x02\x02\u026C" +
		"\u026D\x03\x02\x02\x02\u026D\u0271\x03\x02\x02\x02\u026E\u0270\x07\x04" +
		"\x02\x02\u026F\u026E\x03\x02\x02\x02\u0270\u0273\x03\x02\x02\x02\u0271" +
		"\u026F\x03\x02\x02\x02\u0271\u0272\x03\x02\x02\x02\u0272\u0274\x03\x02" +
		"\x02\x02\u0273\u0271\x03\x02\x02\x02\u0274\u0275\x07@\x02\x02\u0275K\x03" +
		"\x02\x02\x02\u0276\u0277\x07R\x02\x02\u0277\u0278\x07J\x02\x02\u0278\u0279" +
		"\x07R\x02\x02\u0279M\x03\x02\x02\x02\u027A\u027F\x05P)\x02\u027B\u027C" +
		"\x07F\x02\x02\u027C\u027E\x05P)\x02\u027D\u027B\x03\x02\x02\x02\u027E" +
		"\u0281\x03\x02\x02\x02\u027F\u027D\x03\x02\x02\x02\u027F\u0280\x03\x02" +
		"\x02\x02\u0280O\x03\x02\x02\x02\u0281\u027F\x03\x02\x02\x02\u0282\u0283" +
		"\x07\x15\x02\x02\u0283\u0285\x07E\x02\x02\u0284\u0282\x03\x02\x02\x02" +
		"\u0284\u0285\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286\u0289\x07" +
		"R\x02\x02\u0287\u0288\x07G\x02\x02\u0288\u028A\x05 \x11\x02\u0289\u0287" +
		"\x03\x02\x02\x02\u0289\u028A\x03\x02\x02\x02\u028AQ\x03\x02\x02\x02\u028B" +
		"\u0291\x07R\x02\x02\u028C\u028E\x07A\x02\x02\u028D\u028F\x05T+\x02\u028E" +
		"\u028D\x03\x02\x02\x02\u028E\u028F\x03\x02\x02\x02\u028F\u0290\x03\x02" +
		"\x02\x02\u0290\u0292\x07B\x02\x02\u0291\u028C\x03\x02\x02\x02\u0291\u0292" +
		"\x03\x02\x02\x02\u0292\u0294\x03\x02\x02\x02\u0293\u0295\x05(\x15\x02" +
		"\u0294\u0293\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295S\x03\x02" +
		"\x02\x02\u0296\u029B\x05V,\x02\u0297\u0298\x07F\x02\x02\u0298\u029A\x05" +
		"V,\x02\u0299\u0297\x03\x02\x02\x02\u029A\u029D\x03\x02\x02\x02\u029B\u0299" +
		"\x03\x02\x02\x02\u029B\u029C\x03\x02\x02\x02\u029CU\x03\x02\x02\x02\u029D" +
		"\u029B\x03\x02\x02\x02\u029E\u029F\b,\x01\x02\u029F\u02BB\x05X-\x02\u02A0" +
		"\u02A1\x07 \x02\x02\u02A1\u02BB\x05V,\x1C\u02A2\u02A3\x07\x14\x02\x02" +
		"\u02A3\u02BB\x05V,\x1B\u02A4\u02A5\x078\x02\x02\u02A5\u02BB\x05V,\x1A" +
		"\u02A6\u02A7\x07\x1B\x02\x02\u02A7\u02A8\x07A\x02\x02\u02A8\u02A9\x05" +
		"V,\x02\u02A9\u02AA\x07B\x02\x02\u02AA\u02BB\x03\x02\x02\x02\u02AB\u02AC" +
		"\x07\x1C\x02\x02\u02AC\u02AD\x07A\x02\x02\u02AD\u02AE\x05V,\x02\u02AE" +
		"\u02AF\x07B\x02\x02\u02AF\u02BB\x03\x02\x02\x02\u02B0\u02B1\x07\x1A\x02" +
		"\x02\u02B1\u02B2\x07A\x02\x02\u02B2\u02B3\x05V,\x02\u02B3\u02B4\x07B\x02" +
		"\x02\u02B4\u02BB\x03\x02\x02\x02\u02B5\u02B6\x07\x1D\x02\x02\u02B6\u02B7" +
		"\x07A\x02\x02\u02B7\u02B8\x05V,\x02\u02B8\u02B9\x07B\x02\x02\u02B9\u02BB" +
		"\x03\x02\x02\x02\u02BA\u029E\x03\x02\x02\x02\u02BA\u02A0\x03\x02\x02\x02" +
		"\u02BA\u02A2\x03\x02\x02\x02\u02BA\u02A4\x03\x02\x02\x02\u02BA\u02A6\x03" +
		"\x02\x02\x02\u02BA\u02AB\x03\x02\x02\x02\u02BA\u02B0\x03\x02\x02\x02\u02BA" +
		"\u02B5\x03\x02\x02\x02\u02BB\u0302\x03\x02\x02\x02\u02BC\u02BD\f\x10\x02" +
		"\x02\u02BD\u02BE\x07$\x02\x02\u02BE\u0301\x05V,\x11\u02BF\u02C0\f\x0F" +
		"\x02\x02\u02C0\u02C1\t\x05\x02\x02\u02C1\u0301\x05V,\x10\u02C2\u02C3\f" +
		"\x0E\x02\x02\u02C3\u02C4\t\x06\x02\x02\u02C4\u0301\x05V,\x0F\u02C5\u02C6" +
		"\f\r\x02\x02\u02C6\u02C7\t\x07\x02\x02\u02C7\u0301\x05V,\x0E\u02C8\u02C9" +
		"\f\f\x02\x02\u02C9\u02CA\x07R\x02\x02\u02CA\u0301\x05V,\r\u02CB\u02CC" +
		"\f\v\x02\x02\u02CC\u02CD\t\b\x02\x02\u02CD\u0301\x05V,\f\u02CE\u02CF\f" +
		"\n\x02\x02\u02CF\u02D0\t\t\x02\x02\u02D0\u0301\x05V,\v\u02D1\u02D2\f\t" +
		"\x02\x02\u02D2\u02D3\t\n\x02\x02\u02D3\u0301\x05V,\n\u02D4\u02D5\f\b\x02" +
		"\x02\u02D5\u02D6\x075\x02\x02\u02D6\u0301\x05V,\t\u02D7\u02D8\f\x07\x02" +
		"\x02\u02D8\u02D9\x077\x02\x02\u02D9\u0301\x05V,\b\u02DA\u02DB\f\x06\x02" +
		"\x02\u02DB\u02DC\x076\x02\x02\u02DC\u0301\x05V,\x07\u02DD\u02DE\f\x05" +
		"\x02\x02\u02DE\u02DF\x072\x02\x02\u02DF\u0301\x05V,\x06\u02E0\u02E1\f" +
		"\x04\x02\x02\u02E1\u02E2\x073\x02\x02\u02E2\u0301\x05V,\x05\u02E3\u02E4" +
		"\f\x03\x02\x02\u02E4\u02E5\x074\x02\x02\u02E5\u0301\x05V,\x04\u02E6\u02E7" +
		"\f\x15\x02\x02\u02E7\u02E8\x07E\x02\x02\u02E8\u0301\x07R\x02\x02\u02E9" +
		"\u02EA\f\x14\x02\x02\u02EA\u02EB\x07C\x02\x02\u02EB\u02EC\x05V,\x02\u02EC" +
		"\u02ED\x07D\x02\x02\u02ED\u0301\x03\x02\x02\x02\u02EE\u02EF\f\x13\x02" +
		"\x02\u02EF\u02F1\x07C\x02\x02\u02F0\u02F2\x05V,\x02\u02F1\u02F0\x03\x02" +
		"\x02\x02\u02F1\u02F2\x03\x02\x02\x02\u02F2\u02F3\x03\x02\x02\x02\u02F3" +
		"\u02F5\x07<\x02\x02\u02F4\u02F6\x05V,\x02\u02F5\u02F4\x03\x02\x02\x02" +
		"\u02F5\u02F6\x03\x02\x02\x02\u02F6\u02F7\x03\x02\x02\x02\u02F7\u0301\x07" +
		"D\x02\x02\u02F8\u02F9\f\x12\x02\x02\u02F9\u02FB\x07A\x02\x02\u02FA\u02FC" +
		"\x05T+\x02\u02FB\u02FA\x03\x02\x02\x02\u02FB\u02FC\x03\x02\x02\x02\u02FC" +
		"\u02FD\x03\x02\x02\x02\u02FD\u0301\x07B\x02\x02\u02FE\u02FF\f\x11\x02" +
		"\x02\u02FF\u0301\x07>\x02\x02\u0300\u02BC\x03\x02\x02\x02\u0300\u02BF" +
		"\x03\x02\x02\x02\u0300\u02C2\x03\x02\x02\x02\u0300\u02C5\x03\x02\x02\x02" +
		"\u0300\u02C8\x03\x02\x02\x02\u0300\u02CB\x03\x02\x02\x02\u0300\u02CE\x03" +
		"\x02\x02\x02\u0300\u02D1\x03\x02\x02\x02\u0300\u02D4\x03\x02\x02\x02\u0300" +
		"\u02D7\x03\x02\x02\x02\u0300\u02DA\x03\x02\x02\x02\u0300\u02DD\x03\x02" +
		"\x02\x02\u0300\u02E0\x03\x02\x02\x02\u0300\u02E3\x03\x02\x02\x02\u0300" +
		"\u02E6\x03\x02\x02\x02\u0300\u02E9\x03\x02\x02\x02\u0300\u02EE\x03\x02" +
		"\x02\x02\u0300\u02F8\x03\x02\x02\x02\u0300\u02FE\x03\x02\x02\x02\u0301" +
		"\u0304\x03\x02\x02\x02\u0302\u0300\x03\x02\x02\x02\u0302\u0303\x03\x02" +
		"\x02\x02\u0303W\x03\x02\x02\x02\u0304\u0302\x03\x02\x02\x02\u0305\u0321" +
		"\x05Z.\x02\u0306\u0321\x05d3\x02\u0307\u0321\x05f4\x02\u0308\u0321\x05" +
		"n8\x02\u0309\u0321\x05p9\x02\u030A\u0321\x07R\x02\x02\u030B\u0321\x07" +
		"\x15\x02\x02\u030C\u030D\x07\x12\x02\x02\u030D\u030E\x07A\x02\x02\u030E" +
		"\u030F\x05V,\x02\u030F\u0312\x07B\x02\x02\u0310\u0313\x05V,\x02\u0311" +
		"\u0313\x05(\x15\x02\u0312\u0310\x03\x02\x02\x02\u0312\u0311\x03\x02\x02" +
		"\x02\u0313\u0319\x03\x02\x02\x02\u0314\u0317\x07\x13\x02\x02\u0315\u0318" +
		"\x05V,\x02\u0316\u0318\x05(\x15\x02\u0317\u0315\x03\x02\x02\x02\u0317" +
		"\u0316\x03\x02\x02\x02\u0318\u031A\x03\x02\x02\x02\u0319\u0314\x03\x02" +
		"\x02\x02\u0319\u031A\x03\x02\x02\x02\u031A\u0321\x03\x02\x02\x02\u031B" +
		"\u031C\x07A\x02\x02\u031C\u031D\x05V,\x02\u031D\u031E\x07B\x02\x02\u031E" +
		"\u0321\x03\x02\x02\x02\u031F\u0321\x05R*\x02\u0320\u0305\x03\x02\x02\x02" +
		"\u0320\u0306\x03\x02\x02\x02\u0320\u0307\x03\x02\x02\x02\u0320\u0308\x03" +
		"\x02\x02\x02\u0320\u0309\x03\x02\x02\x02\u0320\u030A\x03\x02\x02\x02\u0320" +
		"\u030B\x03\x02\x02\x02\u0320\u030C\x03\x02\x02\x02\u0320\u031B\x03\x02" +
		"\x02\x02\u0320\u031F\x03\x02\x02\x02\u0321Y\x03\x02\x02\x02\u0322\u0327" +
		"\x05\\/\x02\u0323\u0327\x07N\x02\x02\u0324\u0327\x07O\x02\x02\u0325\u0327" +
		"\x07P\x02\x02\u0326\u0322\x03\x02\x02\x02\u0326\u0323\x03\x02\x02\x02" +
		"\u0326\u0324\x03\x02\x02\x02\u0326\u0325\x03\x02\x02\x02\u0327[\x03\x02" +
		"\x02\x02\u0328\u032C\x07K\x02\x02\u0329\u032C\x07L\x02\x02\u032A\u032C" +
		"\x05^0\x02\u032B\u0328\x03\x02\x02\x02\u032B\u0329\x03\x02\x02\x02\u032B" +
		"\u032A\x03\x02\x02\x02\u032C]\x03\x02\x02\x02\u032D\u0331\x07M\x02\x02" +
		"\u032E\u0330\x05`1\x02\u032F\u032E\x03\x02\x02\x02\u0330\u0333\x03\x02" +
		"\x02\x02\u0331\u032F\x03\x02\x02\x02\u0331\u0332\x03\x02\x02\x02\u0332" +
		"\u0334\x03\x02\x02\x02\u0333\u0331\x03\x02\x02\x02\u0334\u0335\x07S\x02" +
		"\x02\u0335_\x03\x02\x02\x02\u0336\u033D\x07T\x02\x02\u0337\u033D\x07V" +
		"\x02\x02\u0338\u0339\x07U\x02\x02\u0339\u033A\x05V,\x02\u033A\u033B\x07" +
		"W\x02\x02\u033B\u033D\x03\x02\x02\x02\u033C\u0336\x03\x02\x02\x02\u033C" +
		"\u0337\x03\x02\x02\x02\u033C\u0338\x03\x02\x02\x02\u033Da\x03\x02\x02" +
		"\x02\u033E\u0345\x07Q\x02\x02\u033F\u0341\x07A\x02\x02\u0340\u0342\x05" +
		"T+\x02\u0341\u0340\x03\x02\x02\x02\u0341\u0342\x03\x02\x02\x02\u0342\u0343" +
		"\x03\x02\x02\x02\u0343\u0346\x07B\x02\x02\u0344\u0346\x05\\/\x02\u0345" +
		"\u033F\x03\x02\x02\x02\u0345\u0344\x03\x02\x02\x02\u0345\u0346\x03\x02" +
		"\x02\x02\u0346c\x03\x02\x02\x02\u0347\u0350\x07C\x02\x02\u0348\u034D\x05" +
		"V,\x02\u0349\u034A\x07F\x02\x02\u034A\u034C\x05V,\x02\u034B\u0349\x03" +
		"\x02\x02\x02\u034C\u034F\x03\x02\x02\x02\u034D\u034B\x03\x02\x02\x02\u034D" +
		"\u034E\x03\x02\x02\x02\u034E\u0351\x03\x02\x02\x02\u034F\u034D\x03\x02" +
		"\x02\x02\u0350\u0348\x03\x02\x02\x02\u0350\u0351\x03\x02\x02\x02\u0351" +
		"\u0352\x03\x02\x02\x02\u0352\u0353\x07D\x02\x02\u0353e\x03\x02\x02\x02" +
		"\u0354\u0355\x07?\x02\x02\u0355\u036E\x07@\x02\x02\u0356\u0357\x07?\x02" +
		"\x02\u0357\u0358\x07J\x02\x02\u0358\u036E\x07@\x02\x02\u0359\u035A\x07" +
		"?\x02\x02\u035A\u035B\x07J\x02\x02\u035B\u035C\x05l7\x02\u035C\u035D\x07" +
		"@\x02\x02\u035D\u036E\x03\x02\x02\x02\u035E\u035F\x07?\x02\x02\u035F\u0360" +
		"\x05h5\x02\u0360\u0361\x07J\x02\x02\u0361\u0362\x07@\x02\x02\u0362\u036E" +
		"\x03\x02\x02\x02\u0363\u0364\x07?\x02\x02\u0364\u0365\x05h5\x02\u0365" +
		"\u0366\x07J\x02\x02\u0366\u0367\x05l7\x02\u0367\u0368\x07@\x02\x02\u0368" +
		"\u036E\x03\x02\x02\x02\u0369\u036A\x07?\x02\x02\u036A\u036B\x05l7\x02" +
		"\u036B\u036C\x07@\x02\x02\u036C\u036E\x03\x02\x02\x02\u036D\u0354\x03" +
		"\x02\x02\x02\u036D\u0356\x03\x02\x02\x02\u036D\u0359\x03\x02\x02\x02\u036D" +
		"\u035E\x03\x02\x02\x02\u036D\u0363\x03\x02\x02\x02\u036D\u0369\x03\x02" +
		"\x02\x02\u036Eg\x03\x02\x02\x02\u036F\u0374\x05j6\x02\u0370\u0371\x07" +
		"F\x02\x02\u0371\u0373\x05j6\x02\u0372\u0370\x03\x02\x02\x02\u0373\u0376" +
		"\x03\x02\x02\x02\u0374\u0372\x03\x02\x02\x02\u0374\u0375\x03\x02\x02\x02" +
		"\u0375i\x03\x02\x02\x02\u0376\u0374\x03\x02\x02\x02\u0377\u037A\x07R\x02" +
		"\x02\u0378\u0379\x07G\x02\x02\u0379\u037B\x05 \x11\x02\u037A\u0378\x03" +
		"\x02\x02\x02\u037A\u037B\x03\x02\x02\x02\u037Bk\x03\x02\x02\x02\u037C" +
		"\u038A\x05V,\x02\u037D\u0382\x05.\x18\x02\u037E\u037F\x07H\x02\x02\u037F" +
		"\u0381\x05.\x18\x02\u0380\u037E\x03\x02\x02\x02\u0381\u0384\x03\x02\x02" +
		"\x02\u0382\u0380\x03\x02\x02\x02\u0382\u0383\x03\x02\x02\x02\u0383\u0386" +
		"\x03\x02\x02\x02\u0384\u0382\x03\x02\x02\x02\u0385\u037D\x03\x02\x02\x02" +
		"\u0386\u0387\x03\x02\x02\x02\u0387\u0385\x03\x02\x02\x02\u0387\u0388\x03" +
		"\x02\x02\x02\u0388\u038A\x03\x02\x02\x02\u0389\u037C\x03\x02\x02\x02\u0389" +
		"\u0385\x03\x02\x02\x02\u038Am\x03\x02\x02\x02\u038B\u038C\x07\x18\x02" +
		"\x02\u038C\u038E\x07A\x02\x02\u038D\u038F\x05N(\x02\u038E\u038D\x03\x02" +
		"\x02\x02\u038E\u038F\x03\x02\x02\x02\u038F\u0390\x03\x02\x02\x02\u0390" +
		"\u0393\x07B\x02\x02\u0391\u0392\x07G\x02\x02\u0392\u0394\x05 \x11\x02" +
		"\u0393\u0391\x03\x02\x02\x02\u0393\u0394\x03\x02\x02\x02\u0394\u0395\x03" +
		"\x02\x02\x02\u0395\u0396\x05(\x15\x02\u0396o\x03\x02\x02\x02\u0397\u0398" +
		"\x07=\x02\x02\u0398\u0399\x05V,\x02\u0399q\x03\x02\x02\x02ou~\x84\x8C" +
		"\x9A\x9F\xA7\xB3\xB8\xBE\xC4\xC9\xCF\xD9\xDF\xEA\xF0\xFB\u0101\u010C\u0110" +
		"\u0115\u011C\u0122\u0129\u0133\u013B\u013F\u0144\u014E\u0151\u015B\u0164" +
		"\u0169\u016F\u0178\u0181\u0186\u018C\u0196\u01A0\u01A7\u01AD\u01B1\u01B5" +
		"\u01BB\u01BD\u01C1\u01CD\u01D5\u01E0\u01E8\u01ED\u01F2\u01F9\u01FB\u0200" +
		"\u0206\u020C\u020F\u0216\u021C\u0225\u022C\u0232\u0236\u023C\u0241\u0248" +
		"\u024E\u0256\u025A\u0260\u0269\u026C\u0271\u027F\u0284\u0289\u028E\u0291" +
		"\u0294\u029B\u02BA\u02F1\u02F5\u02FB\u0300\u0302\u0312\u0317\u0319\u0320" +
		"\u0326\u032B\u0331\u033C\u0341\u0345\u034D\u0350\u036D\u0374\u037A\u0382" +
		"\u0387\u0389\u038E\u0393";
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


