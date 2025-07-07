// Generated from definition/CanonParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { PrimaryExpressionContext } from "./CanonParser";
import { MemberAccessExpressionContext } from "./CanonParser";
import { IndexAccessExpressionContext } from "./CanonParser";
import { SliceExpressionContext } from "./CanonParser";
import { FunctionCallExpressionContext } from "./CanonParser";
import { NonNullAssertionExpressionContext } from "./CanonParser";
import { UnaryMinusExpressionContext } from "./CanonParser";
import { LogicalNotExpressionContext } from "./CanonParser";
import { BitwiseNotExpressionContext } from "./CanonParser";
import { PowerExpressionContext } from "./CanonParser";
import { MultiplicativeExpressionContext } from "./CanonParser";
import { AdditiveExpressionContext } from "./CanonParser";
import { ShiftExpressionContext } from "./CanonParser";
import { RelationalExpressionContext } from "./CanonParser";
import { EqualityExpressionContext } from "./CanonParser";
import { BitwiseAndExpressionContext } from "./CanonParser";
import { BitwiseXorExpressionContext } from "./CanonParser";
import { BitwiseOrExpressionContext } from "./CanonParser";
import { LogicalAndExpressionContext } from "./CanonParser";
import { LogicalOrExpressionContext } from "./CanonParser";
import { PipelineExpressionContext } from "./CanonParser";
import { RangeExpressionContext } from "./CanonParser";
import { LiteralExpressionContext } from "./CanonParser";
import { ListLiteralExpressionContext } from "./CanonParser";
import { LambdaExpressionPrimaryContext } from "./CanonParser";
import { AnonymousFunctionPrimaryContext } from "./CanonParser";
import { SpreadExpressionPrimaryContext } from "./CanonParser";
import { IdentifierExpressionContext } from "./CanonParser";
import { ThisExpressionContext } from "./CanonParser";
import { IfExpressionContext } from "./CanonParser";
import { ParenthesizedExpressionContext } from "./CanonParser";
import { CallExpressionPrimaryContext } from "./CanonParser";
import { ProgramContext } from "./CanonParser";
import { SchemaDirectiveContext } from "./CanonParser";
import { UseStatementContext } from "./CanonParser";
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
import { StatementContext } from "./CanonParser";
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
import { RepeatedDeclarationContext } from "./CanonParser";
import { MappingBlockContext } from "./CanonParser";
import { MappingEntryContext } from "./CanonParser";
import { ParameterListContext } from "./CanonParser";
import { ParameterContext } from "./CanonParser";
import { CallExpressionContext } from "./CanonParser";
import { ArgumentListContext } from "./CanonParser";
import { ExpressionStatementContext } from "./CanonParser";
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
import { LambdaBodyContext } from "./CanonParser";
import { AnonymousFunctionContext } from "./CanonParser";
import { SpreadExpressionContext } from "./CanonParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CanonParser`.
 */
export interface CanonParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `primaryExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `primaryExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `memberAccessExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMemberAccessExpression?: (ctx: MemberAccessExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `memberAccessExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMemberAccessExpression?: (ctx: MemberAccessExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `indexAccessExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterIndexAccessExpression?: (ctx: IndexAccessExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `indexAccessExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitIndexAccessExpression?: (ctx: IndexAccessExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `sliceExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSliceExpression?: (ctx: SliceExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `sliceExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSliceExpression?: (ctx: SliceExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `functionCallExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `functionCallExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `nonNullAssertionExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNonNullAssertionExpression?: (ctx: NonNullAssertionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `nonNullAssertionExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNonNullAssertionExpression?: (ctx: NonNullAssertionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `unaryMinusExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryMinusExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalNotExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogicalNotExpression?: (ctx: LogicalNotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalNotExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogicalNotExpression?: (ctx: LogicalNotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `bitwiseNotExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseNotExpression?: (ctx: BitwiseNotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `bitwiseNotExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseNotExpression?: (ctx: BitwiseNotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `powerExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPowerExpression?: (ctx: PowerExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `powerExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPowerExpression?: (ctx: PowerExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `multiplicativeExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `multiplicativeExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `additiveExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `additiveExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `shiftExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterShiftExpression?: (ctx: ShiftExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `shiftExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitShiftExpression?: (ctx: ShiftExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `relationalExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `relationalExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpression?: (ctx: RelationalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `equalityExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `equalityExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `bitwiseAndExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseAndExpression?: (ctx: BitwiseAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `bitwiseAndExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseAndExpression?: (ctx: BitwiseAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `bitwiseXorExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseXorExpression?: (ctx: BitwiseXorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `bitwiseXorExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseXorExpression?: (ctx: BitwiseXorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `bitwiseOrExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseOrExpression?: (ctx: BitwiseOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `bitwiseOrExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseOrExpression?: (ctx: BitwiseOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalAndExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalAndExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalOrExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalOrExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `pipelineExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPipelineExpression?: (ctx: PipelineExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `pipelineExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPipelineExpression?: (ctx: PipelineExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `rangeExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterRangeExpression?: (ctx: RangeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `rangeExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitRangeExpression?: (ctx: RangeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `literalExpression`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	enterLiteralExpression?: (ctx: LiteralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `literalExpression`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	exitLiteralExpression?: (ctx: LiteralExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `listLiteralExpression`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	enterListLiteralExpression?: (ctx: ListLiteralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `listLiteralExpression`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	exitListLiteralExpression?: (ctx: ListLiteralExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `lambdaExpressionPrimary`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	enterLambdaExpressionPrimary?: (ctx: LambdaExpressionPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by the `lambdaExpressionPrimary`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	exitLambdaExpressionPrimary?: (ctx: LambdaExpressionPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by the `anonymousFunctionPrimary`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	enterAnonymousFunctionPrimary?: (ctx: AnonymousFunctionPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by the `anonymousFunctionPrimary`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	exitAnonymousFunctionPrimary?: (ctx: AnonymousFunctionPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by the `spreadExpressionPrimary`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	enterSpreadExpressionPrimary?: (ctx: SpreadExpressionPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by the `spreadExpressionPrimary`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	exitSpreadExpressionPrimary?: (ctx: SpreadExpressionPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by the `identifierExpression`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	enterIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `identifierExpression`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	exitIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `thisExpression`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	enterThisExpression?: (ctx: ThisExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `thisExpression`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	exitThisExpression?: (ctx: ThisExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ifExpression`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	enterIfExpression?: (ctx: IfExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ifExpression`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	exitIfExpression?: (ctx: IfExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `callExpressionPrimary`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	enterCallExpressionPrimary?: (ctx: CallExpressionPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by the `callExpressionPrimary`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 */
	exitCallExpressionPrimary?: (ctx: CallExpressionPrimaryContext) => void;

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

