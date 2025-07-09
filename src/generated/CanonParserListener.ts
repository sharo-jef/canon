// Generated from definition/CanonParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { LiteralExprContext } from "./CanonParser";
import { ListLiteralExprContext } from "./CanonParser";
import { LambdaExprContext } from "./CanonParser";
import { AnonFuncExprContext } from "./CanonParser";
import { SpreadExprContext } from "./CanonParser";
import { IdentifierExprContext } from "./CanonParser";
import { ThisExprContext } from "./CanonParser";
import { IfExprContext } from "./CanonParser";
import { ParenExprContext } from "./CanonParser";
import { CallExprPrimaryContext } from "./CanonParser";
import { PrimaryExprContext } from "./CanonParser";
import { UnaryMinusExprContext } from "./CanonParser";
import { LogicalNotExprContext } from "./CanonParser";
import { BitwiseNotExprContext } from "./CanonParser";
import { TypeCastExprContext } from "./CanonParser";
import { MemberAccessExprContext } from "./CanonParser";
import { IndexAccessExprContext } from "./CanonParser";
import { SliceExprContext } from "./CanonParser";
import { FuncCallExprContext } from "./CanonParser";
import { NonNullAssertExprContext } from "./CanonParser";
import { PowerExprContext } from "./CanonParser";
import { MulDivModExprContext } from "./CanonParser";
import { AddSubExprContext } from "./CanonParser";
import { RangeExprContext } from "./CanonParser";
import { InfixCallExprContext } from "./CanonParser";
import { ShiftExprContext } from "./CanonParser";
import { RelationalExprContext } from "./CanonParser";
import { EqualityExprContext } from "./CanonParser";
import { BitwiseAndExprContext } from "./CanonParser";
import { BitwiseXorExprContext } from "./CanonParser";
import { BitwiseOrExprContext } from "./CanonParser";
import { LogicalAndExprContext } from "./CanonParser";
import { LogicalOrExprContext } from "./CanonParser";
import { PipelineExprContext } from "./CanonParser";
import { ProgramContext } from "./CanonParser";
import { ProgramElementContext } from "./CanonParser";
import { SchemaDirectiveContext } from "./CanonParser";
import { UseStatementContext } from "./CanonParser";
import { StatementSeparatorContext } from "./CanonParser";
import { StatementSeparatorsContext } from "./CanonParser";
import { TopLevelStatementContext } from "./CanonParser";
import { TopLevelElementContext } from "./CanonParser";
import { SchemaDeclarationContext } from "./CanonParser";
import { StructDeclarationContext } from "./CanonParser";
import { UnionDeclarationContext } from "./CanonParser";
import { TypeDeclarationContext } from "./CanonParser";
import { FunctionDeclarationContext } from "./CanonParser";
import { VariableDeclarationContext } from "./CanonParser";
import { UnionTypeContext } from "./CanonParser";
import { TypeContext } from "./CanonParser";
import { BaseTypeContext } from "./CanonParser";
import { PrimitiveTypeContext } from "./CanonParser";
import { BlockContext } from "./CanonParser";
import { StructBodyContext } from "./CanonParser";
import { StructMemberContext } from "./CanonParser";
import { StatementContext } from "./CanonParser";
import { ExpressionStatementContext } from "./CanonParser";
import { PropertyDeclarationContext } from "./CanonParser";
import { AssignmentStatementContext } from "./CanonParser";
import { DestructuringAssignmentContext } from "./CanonParser";
import { DestructuringPatternContext } from "./CanonParser";
import { ArrayDestructuringPatternContext } from "./CanonParser";
import { ObjectDestructuringPatternContext } from "./CanonParser";
import { DestructuringElementContext } from "./CanonParser";
import { DestructuringPropertyContext } from "./CanonParser";
import { InitDeclarationContext } from "./CanonParser";
import { GetterDeclarationContext } from "./CanonParser";
import { MethodDeclarationContext } from "./CanonParser";
import { RepeatedDeclarationContext } from "./CanonParser";
import { MappingBlockContext } from "./CanonParser";
import { MappingEntryContext } from "./CanonParser";
import { ParameterListContext } from "./CanonParser";
import { ParameterContext } from "./CanonParser";
import { CallExpressionContext } from "./CanonParser";
import { ArgumentListContext } from "./CanonParser";
import { ExpressionContext } from "./CanonParser";
import { PrimaryContext } from "./CanonParser";
import { LiteralContext } from "./CanonParser";
import { StringLiteralContext } from "./CanonParser";
import { TemplateStringContext } from "./CanonParser";
import { TemplateStringContentContext } from "./CanonParser";
import { AnnotationContext } from "./CanonParser";
import { ListLiteralContext } from "./CanonParser";
import { LambdaExpressionContext } from "./CanonParser";
import { LambdaParametersContext } from "./CanonParser";
import { LambdaParameterContext } from "./CanonParser";
import { LambdaBodyContext } from "./CanonParser";
import { AnonymousFunctionContext } from "./CanonParser";
import { SpreadExpressionContext } from "./CanonParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CanonParser`.
 */
export interface CanonParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `literalExpr`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	enterLiteralExpr?: (ctx: LiteralExprContext) => void;
	/**
	 * Exit a parse tree produced by the `literalExpr`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	exitLiteralExpr?: (ctx: LiteralExprContext) => void;

	/**
	 * Enter a parse tree produced by the `listLiteralExpr`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	enterListLiteralExpr?: (ctx: ListLiteralExprContext) => void;
	/**
	 * Exit a parse tree produced by the `listLiteralExpr`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	exitListLiteralExpr?: (ctx: ListLiteralExprContext) => void;

	/**
	 * Enter a parse tree produced by the `lambdaExpr`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	enterLambdaExpr?: (ctx: LambdaExprContext) => void;
	/**
	 * Exit a parse tree produced by the `lambdaExpr`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	exitLambdaExpr?: (ctx: LambdaExprContext) => void;

	/**
	 * Enter a parse tree produced by the `anonFuncExpr`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	enterAnonFuncExpr?: (ctx: AnonFuncExprContext) => void;
	/**
	 * Exit a parse tree produced by the `anonFuncExpr`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	exitAnonFuncExpr?: (ctx: AnonFuncExprContext) => void;

	/**
	 * Enter a parse tree produced by the `spreadExpr`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	enterSpreadExpr?: (ctx: SpreadExprContext) => void;
	/**
	 * Exit a parse tree produced by the `spreadExpr`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	exitSpreadExpr?: (ctx: SpreadExprContext) => void;

	/**
	 * Enter a parse tree produced by the `identifierExpr`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	enterIdentifierExpr?: (ctx: IdentifierExprContext) => void;
	/**
	 * Exit a parse tree produced by the `identifierExpr`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	exitIdentifierExpr?: (ctx: IdentifierExprContext) => void;

	/**
	 * Enter a parse tree produced by the `thisExpr`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	enterThisExpr?: (ctx: ThisExprContext) => void;
	/**
	 * Exit a parse tree produced by the `thisExpr`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	exitThisExpr?: (ctx: ThisExprContext) => void;

	/**
	 * Enter a parse tree produced by the `ifExpr`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	enterIfExpr?: (ctx: IfExprContext) => void;
	/**
	 * Exit a parse tree produced by the `ifExpr`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	exitIfExpr?: (ctx: IfExprContext) => void;

	/**
	 * Enter a parse tree produced by the `parenExpr`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	enterParenExpr?: (ctx: ParenExprContext) => void;
	/**
	 * Exit a parse tree produced by the `parenExpr`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	exitParenExpr?: (ctx: ParenExprContext) => void;

	/**
	 * Enter a parse tree produced by the `callExprPrimary`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	enterCallExprPrimary?: (ctx: CallExprPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by the `callExprPrimary`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	exitCallExprPrimary?: (ctx: CallExprPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by the `primaryExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpr?: (ctx: PrimaryExprContext) => void;
	/**
	 * Exit a parse tree produced by the `primaryExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpr?: (ctx: PrimaryExprContext) => void;

	/**
	 * Enter a parse tree produced by the `unaryMinusExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterUnaryMinusExpr?: (ctx: UnaryMinusExprContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryMinusExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitUnaryMinusExpr?: (ctx: UnaryMinusExprContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalNotExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogicalNotExpr?: (ctx: LogicalNotExprContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalNotExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogicalNotExpr?: (ctx: LogicalNotExprContext) => void;

	/**
	 * Enter a parse tree produced by the `bitwiseNotExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseNotExpr?: (ctx: BitwiseNotExprContext) => void;
	/**
	 * Exit a parse tree produced by the `bitwiseNotExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseNotExpr?: (ctx: BitwiseNotExprContext) => void;

	/**
	 * Enter a parse tree produced by the `typeCastExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterTypeCastExpr?: (ctx: TypeCastExprContext) => void;
	/**
	 * Exit a parse tree produced by the `typeCastExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitTypeCastExpr?: (ctx: TypeCastExprContext) => void;

	/**
	 * Enter a parse tree produced by the `memberAccessExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMemberAccessExpr?: (ctx: MemberAccessExprContext) => void;
	/**
	 * Exit a parse tree produced by the `memberAccessExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMemberAccessExpr?: (ctx: MemberAccessExprContext) => void;

	/**
	 * Enter a parse tree produced by the `indexAccessExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterIndexAccessExpr?: (ctx: IndexAccessExprContext) => void;
	/**
	 * Exit a parse tree produced by the `indexAccessExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitIndexAccessExpr?: (ctx: IndexAccessExprContext) => void;

	/**
	 * Enter a parse tree produced by the `sliceExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSliceExpr?: (ctx: SliceExprContext) => void;
	/**
	 * Exit a parse tree produced by the `sliceExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSliceExpr?: (ctx: SliceExprContext) => void;

	/**
	 * Enter a parse tree produced by the `funcCallExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterFuncCallExpr?: (ctx: FuncCallExprContext) => void;
	/**
	 * Exit a parse tree produced by the `funcCallExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitFuncCallExpr?: (ctx: FuncCallExprContext) => void;

	/**
	 * Enter a parse tree produced by the `nonNullAssertExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNonNullAssertExpr?: (ctx: NonNullAssertExprContext) => void;
	/**
	 * Exit a parse tree produced by the `nonNullAssertExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNonNullAssertExpr?: (ctx: NonNullAssertExprContext) => void;

	/**
	 * Enter a parse tree produced by the `powerExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPowerExpr?: (ctx: PowerExprContext) => void;
	/**
	 * Exit a parse tree produced by the `powerExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPowerExpr?: (ctx: PowerExprContext) => void;

	/**
	 * Enter a parse tree produced by the `mulDivModExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMulDivModExpr?: (ctx: MulDivModExprContext) => void;
	/**
	 * Exit a parse tree produced by the `mulDivModExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMulDivModExpr?: (ctx: MulDivModExprContext) => void;

	/**
	 * Enter a parse tree produced by the `addSubExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAddSubExpr?: (ctx: AddSubExprContext) => void;
	/**
	 * Exit a parse tree produced by the `addSubExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAddSubExpr?: (ctx: AddSubExprContext) => void;

	/**
	 * Enter a parse tree produced by the `rangeExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterRangeExpr?: (ctx: RangeExprContext) => void;
	/**
	 * Exit a parse tree produced by the `rangeExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitRangeExpr?: (ctx: RangeExprContext) => void;

	/**
	 * Enter a parse tree produced by the `infixCallExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterInfixCallExpr?: (ctx: InfixCallExprContext) => void;
	/**
	 * Exit a parse tree produced by the `infixCallExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitInfixCallExpr?: (ctx: InfixCallExprContext) => void;

	/**
	 * Enter a parse tree produced by the `shiftExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterShiftExpr?: (ctx: ShiftExprContext) => void;
	/**
	 * Exit a parse tree produced by the `shiftExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitShiftExpr?: (ctx: ShiftExprContext) => void;

	/**
	 * Enter a parse tree produced by the `relationalExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpr?: (ctx: RelationalExprContext) => void;
	/**
	 * Exit a parse tree produced by the `relationalExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpr?: (ctx: RelationalExprContext) => void;

	/**
	 * Enter a parse tree produced by the `equalityExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpr?: (ctx: EqualityExprContext) => void;
	/**
	 * Exit a parse tree produced by the `equalityExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpr?: (ctx: EqualityExprContext) => void;

	/**
	 * Enter a parse tree produced by the `bitwiseAndExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseAndExpr?: (ctx: BitwiseAndExprContext) => void;
	/**
	 * Exit a parse tree produced by the `bitwiseAndExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseAndExpr?: (ctx: BitwiseAndExprContext) => void;

	/**
	 * Enter a parse tree produced by the `bitwiseXorExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseXorExpr?: (ctx: BitwiseXorExprContext) => void;
	/**
	 * Exit a parse tree produced by the `bitwiseXorExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseXorExpr?: (ctx: BitwiseXorExprContext) => void;

	/**
	 * Enter a parse tree produced by the `bitwiseOrExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseOrExpr?: (ctx: BitwiseOrExprContext) => void;
	/**
	 * Exit a parse tree produced by the `bitwiseOrExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseOrExpr?: (ctx: BitwiseOrExprContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalAndExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogicalAndExpr?: (ctx: LogicalAndExprContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalAndExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogicalAndExpr?: (ctx: LogicalAndExprContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalOrExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogicalOrExpr?: (ctx: LogicalOrExprContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalOrExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogicalOrExpr?: (ctx: LogicalOrExprContext) => void;

	/**
	 * Enter a parse tree produced by the `pipelineExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPipelineExpr?: (ctx: PipelineExprContext) => void;
	/**
	 * Exit a parse tree produced by the `pipelineExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPipelineExpr?: (ctx: PipelineExprContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.programElement`.
	 * @param ctx the parse tree
	 */
	enterProgramElement?: (ctx: ProgramElementContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.programElement`.
	 * @param ctx the parse tree
	 */
	exitProgramElement?: (ctx: ProgramElementContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.schemaDirective`.
	 * @param ctx the parse tree
	 */
	enterSchemaDirective?: (ctx: SchemaDirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.schemaDirective`.
	 * @param ctx the parse tree
	 */
	exitSchemaDirective?: (ctx: SchemaDirectiveContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.useStatement`.
	 * @param ctx the parse tree
	 */
	enterUseStatement?: (ctx: UseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.useStatement`.
	 * @param ctx the parse tree
	 */
	exitUseStatement?: (ctx: UseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.statementSeparator`.
	 * @param ctx the parse tree
	 */
	enterStatementSeparator?: (ctx: StatementSeparatorContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.statementSeparator`.
	 * @param ctx the parse tree
	 */
	exitStatementSeparator?: (ctx: StatementSeparatorContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.statementSeparators`.
	 * @param ctx the parse tree
	 */
	enterStatementSeparators?: (ctx: StatementSeparatorsContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.statementSeparators`.
	 * @param ctx the parse tree
	 */
	exitStatementSeparators?: (ctx: StatementSeparatorsContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.topLevelStatement`.
	 * @param ctx the parse tree
	 */
	enterTopLevelStatement?: (ctx: TopLevelStatementContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.topLevelStatement`.
	 * @param ctx the parse tree
	 */
	exitTopLevelStatement?: (ctx: TopLevelStatementContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.topLevelElement`.
	 * @param ctx the parse tree
	 */
	enterTopLevelElement?: (ctx: TopLevelElementContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.topLevelElement`.
	 * @param ctx the parse tree
	 */
	exitTopLevelElement?: (ctx: TopLevelElementContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.schemaDeclaration`.
	 * @param ctx the parse tree
	 */
	enterSchemaDeclaration?: (ctx: SchemaDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.schemaDeclaration`.
	 * @param ctx the parse tree
	 */
	exitSchemaDeclaration?: (ctx: SchemaDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.structDeclaration`.
	 * @param ctx the parse tree
	 */
	enterStructDeclaration?: (ctx: StructDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.structDeclaration`.
	 * @param ctx the parse tree
	 */
	exitStructDeclaration?: (ctx: StructDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.unionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterUnionDeclaration?: (ctx: UnionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.unionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitUnionDeclaration?: (ctx: UnionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.unionType`.
	 * @param ctx the parse tree
	 */
	enterUnionType?: (ctx: UnionTypeContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.unionType`.
	 * @param ctx the parse tree
	 */
	exitUnionType?: (ctx: UnionTypeContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.baseType`.
	 * @param ctx the parse tree
	 */
	enterBaseType?: (ctx: BaseTypeContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.baseType`.
	 * @param ctx the parse tree
	 */
	exitBaseType?: (ctx: BaseTypeContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.structBody`.
	 * @param ctx the parse tree
	 */
	enterStructBody?: (ctx: StructBodyContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.structBody`.
	 * @param ctx the parse tree
	 */
	exitStructBody?: (ctx: StructBodyContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.structMember`.
	 * @param ctx the parse tree
	 */
	enterStructMember?: (ctx: StructMemberContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.structMember`.
	 * @param ctx the parse tree
	 */
	exitStructMember?: (ctx: StructMemberContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.propertyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterPropertyDeclaration?: (ctx: PropertyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.propertyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitPropertyDeclaration?: (ctx: PropertyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.assignmentStatement`.
	 * @param ctx the parse tree
	 */
	enterAssignmentStatement?: (ctx: AssignmentStatementContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.assignmentStatement`.
	 * @param ctx the parse tree
	 */
	exitAssignmentStatement?: (ctx: AssignmentStatementContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.destructuringAssignment`.
	 * @param ctx the parse tree
	 */
	enterDestructuringAssignment?: (ctx: DestructuringAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.destructuringAssignment`.
	 * @param ctx the parse tree
	 */
	exitDestructuringAssignment?: (ctx: DestructuringAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.destructuringPattern`.
	 * @param ctx the parse tree
	 */
	enterDestructuringPattern?: (ctx: DestructuringPatternContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.destructuringPattern`.
	 * @param ctx the parse tree
	 */
	exitDestructuringPattern?: (ctx: DestructuringPatternContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.arrayDestructuringPattern`.
	 * @param ctx the parse tree
	 */
	enterArrayDestructuringPattern?: (ctx: ArrayDestructuringPatternContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.arrayDestructuringPattern`.
	 * @param ctx the parse tree
	 */
	exitArrayDestructuringPattern?: (ctx: ArrayDestructuringPatternContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.objectDestructuringPattern`.
	 * @param ctx the parse tree
	 */
	enterObjectDestructuringPattern?: (ctx: ObjectDestructuringPatternContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.objectDestructuringPattern`.
	 * @param ctx the parse tree
	 */
	exitObjectDestructuringPattern?: (ctx: ObjectDestructuringPatternContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.destructuringElement`.
	 * @param ctx the parse tree
	 */
	enterDestructuringElement?: (ctx: DestructuringElementContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.destructuringElement`.
	 * @param ctx the parse tree
	 */
	exitDestructuringElement?: (ctx: DestructuringElementContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.destructuringProperty`.
	 * @param ctx the parse tree
	 */
	enterDestructuringProperty?: (ctx: DestructuringPropertyContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.destructuringProperty`.
	 * @param ctx the parse tree
	 */
	exitDestructuringProperty?: (ctx: DestructuringPropertyContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.initDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInitDeclaration?: (ctx: InitDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.initDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInitDeclaration?: (ctx: InitDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.getterDeclaration`.
	 * @param ctx the parse tree
	 */
	enterGetterDeclaration?: (ctx: GetterDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.getterDeclaration`.
	 * @param ctx the parse tree
	 */
	exitGetterDeclaration?: (ctx: GetterDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMethodDeclaration?: (ctx: MethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMethodDeclaration?: (ctx: MethodDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.repeatedDeclaration`.
	 * @param ctx the parse tree
	 */
	enterRepeatedDeclaration?: (ctx: RepeatedDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.repeatedDeclaration`.
	 * @param ctx the parse tree
	 */
	exitRepeatedDeclaration?: (ctx: RepeatedDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.mappingBlock`.
	 * @param ctx the parse tree
	 */
	enterMappingBlock?: (ctx: MappingBlockContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.mappingBlock`.
	 * @param ctx the parse tree
	 */
	exitMappingBlock?: (ctx: MappingBlockContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.mappingEntry`.
	 * @param ctx the parse tree
	 */
	enterMappingEntry?: (ctx: MappingEntryContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.mappingEntry`.
	 * @param ctx the parse tree
	 */
	exitMappingEntry?: (ctx: MappingEntryContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.parameterList`.
	 * @param ctx the parse tree
	 */
	enterParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.parameterList`.
	 * @param ctx the parse tree
	 */
	exitParameterList?: (ctx: ParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.callExpression`.
	 * @param ctx the parse tree
	 */
	enterCallExpression?: (ctx: CallExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.callExpression`.
	 * @param ctx the parse tree
	 */
	exitCallExpression?: (ctx: CallExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.argumentList`.
	 * @param ctx the parse tree
	 */
	enterArgumentList?: (ctx: ArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.argumentList`.
	 * @param ctx the parse tree
	 */
	exitArgumentList?: (ctx: ArgumentListContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.templateString`.
	 * @param ctx the parse tree
	 */
	enterTemplateString?: (ctx: TemplateStringContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.templateString`.
	 * @param ctx the parse tree
	 */
	exitTemplateString?: (ctx: TemplateStringContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.templateStringContent`.
	 * @param ctx the parse tree
	 */
	enterTemplateStringContent?: (ctx: TemplateStringContentContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.templateStringContent`.
	 * @param ctx the parse tree
	 */
	exitTemplateStringContent?: (ctx: TemplateStringContentContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.annotation`.
	 * @param ctx the parse tree
	 */
	enterAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.annotation`.
	 * @param ctx the parse tree
	 */
	exitAnnotation?: (ctx: AnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.listLiteral`.
	 * @param ctx the parse tree
	 */
	enterListLiteral?: (ctx: ListLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.listLiteral`.
	 * @param ctx the parse tree
	 */
	exitListLiteral?: (ctx: ListLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.lambdaExpression`.
	 * @param ctx the parse tree
	 */
	enterLambdaExpression?: (ctx: LambdaExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.lambdaExpression`.
	 * @param ctx the parse tree
	 */
	exitLambdaExpression?: (ctx: LambdaExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.lambdaParameters`.
	 * @param ctx the parse tree
	 */
	enterLambdaParameters?: (ctx: LambdaParametersContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.lambdaParameters`.
	 * @param ctx the parse tree
	 */
	exitLambdaParameters?: (ctx: LambdaParametersContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.lambdaParameter`.
	 * @param ctx the parse tree
	 */
	enterLambdaParameter?: (ctx: LambdaParameterContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.lambdaParameter`.
	 * @param ctx the parse tree
	 */
	exitLambdaParameter?: (ctx: LambdaParameterContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.lambdaBody`.
	 * @param ctx the parse tree
	 */
	enterLambdaBody?: (ctx: LambdaBodyContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.lambdaBody`.
	 * @param ctx the parse tree
	 */
	exitLambdaBody?: (ctx: LambdaBodyContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.anonymousFunction`.
	 * @param ctx the parse tree
	 */
	enterAnonymousFunction?: (ctx: AnonymousFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.anonymousFunction`.
	 * @param ctx the parse tree
	 */
	exitAnonymousFunction?: (ctx: AnonymousFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.spreadExpression`.
	 * @param ctx the parse tree
	 */
	enterSpreadExpression?: (ctx: SpreadExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.spreadExpression`.
	 * @param ctx the parse tree
	 */
	exitSpreadExpression?: (ctx: SpreadExpressionContext) => void;
}

