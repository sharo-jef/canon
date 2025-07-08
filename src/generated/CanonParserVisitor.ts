// Generated from definition/CanonParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
import { LambdaBodyContext } from "./CanonParser";
import { AnonymousFunctionContext } from "./CanonParser";
import { SpreadExpressionContext } from "./CanonParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CanonParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CanonParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `literalExpr`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpr?: (ctx: LiteralExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `listLiteralExpr`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListLiteralExpr?: (ctx: ListLiteralExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `lambdaExpr`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaExpr?: (ctx: LambdaExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `anonFuncExpr`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnonFuncExpr?: (ctx: AnonFuncExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `spreadExpr`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpreadExpr?: (ctx: SpreadExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `identifierExpr`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierExpr?: (ctx: IdentifierExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `thisExpr`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThisExpr?: (ctx: ThisExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ifExpr`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfExpr?: (ctx: IfExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenExpr`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenExpr?: (ctx: ParenExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `callExprPrimary`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallExprPrimary?: (ctx: CallExprPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `primaryExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpr?: (ctx: PrimaryExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryMinusExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryMinusExpr?: (ctx: UnaryMinusExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalNotExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalNotExpr?: (ctx: LogicalNotExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `bitwiseNotExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseNotExpr?: (ctx: BitwiseNotExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeCastExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeCastExpr?: (ctx: TypeCastExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `memberAccessExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberAccessExpr?: (ctx: MemberAccessExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `indexAccessExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexAccessExpr?: (ctx: IndexAccessExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `sliceExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSliceExpr?: (ctx: SliceExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `funcCallExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncCallExpr?: (ctx: FuncCallExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `nonNullAssertExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonNullAssertExpr?: (ctx: NonNullAssertExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `powerExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPowerExpr?: (ctx: PowerExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `mulDivModExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulDivModExpr?: (ctx: MulDivModExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `addSubExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddSubExpr?: (ctx: AddSubExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `rangeExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRangeExpr?: (ctx: RangeExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `infixCallExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfixCallExpr?: (ctx: InfixCallExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `shiftExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShiftExpr?: (ctx: ShiftExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `relationalExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpr?: (ctx: RelationalExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `equalityExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpr?: (ctx: EqualityExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `bitwiseAndExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseAndExpr?: (ctx: BitwiseAndExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `bitwiseXorExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseXorExpr?: (ctx: BitwiseXorExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `bitwiseOrExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseOrExpr?: (ctx: BitwiseOrExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalAndExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalAndExpr?: (ctx: LogicalAndExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalOrExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOrExpr?: (ctx: LogicalOrExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `pipelineExpr`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPipelineExpr?: (ctx: PipelineExprContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.programElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgramElement?: (ctx: ProgramElementContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.schemaDirective`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaDirective?: (ctx: SchemaDirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.useStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUseStatement?: (ctx: UseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.statementSeparator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementSeparator?: (ctx: StatementSeparatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.statementSeparators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementSeparators?: (ctx: StatementSeparatorsContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.topLevelStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTopLevelStatement?: (ctx: TopLevelStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.topLevelElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTopLevelElement?: (ctx: TopLevelElementContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.schemaDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaDeclaration?: (ctx: SchemaDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.structDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructDeclaration?: (ctx: StructDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.unionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionDeclaration?: (ctx: UnionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.typeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.unionType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionType?: (ctx: UnionTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.baseType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBaseType?: (ctx: BaseTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.structBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructBody?: (ctx: StructBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.structMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructMember?: (ctx: StructMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.propertyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyDeclaration?: (ctx: PropertyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.assignmentStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentStatement?: (ctx: AssignmentStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.destructuringAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDestructuringAssignment?: (ctx: DestructuringAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.destructuringPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDestructuringPattern?: (ctx: DestructuringPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.arrayDestructuringPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayDestructuringPattern?: (ctx: ArrayDestructuringPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.objectDestructuringPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectDestructuringPattern?: (ctx: ObjectDestructuringPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.destructuringElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDestructuringElement?: (ctx: DestructuringElementContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.destructuringProperty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDestructuringProperty?: (ctx: DestructuringPropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.initDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitDeclaration?: (ctx: InitDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.getterDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetterDeclaration?: (ctx: GetterDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.methodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDeclaration?: (ctx: MethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.repeatedDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeatedDeclaration?: (ctx: RepeatedDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.mappingBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMappingBlock?: (ctx: MappingBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.mappingEntry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMappingEntry?: (ctx: MappingEntryContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.parameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterList?: (ctx: ParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.callExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallExpression?: (ctx: CallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.argumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentList?: (ctx: ArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.stringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.templateString`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateString?: (ctx: TemplateStringContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.templateStringContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateStringContent?: (ctx: TemplateStringContentContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.listLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListLiteral?: (ctx: ListLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.lambdaExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaExpression?: (ctx: LambdaExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.lambdaParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaParameters?: (ctx: LambdaParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.lambdaBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaBody?: (ctx: LambdaBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.anonymousFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnonymousFunction?: (ctx: AnonymousFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.spreadExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpreadExpression?: (ctx: SpreadExpressionContext) => Result;
}

