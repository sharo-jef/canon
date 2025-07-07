// Generated from definition/CanonParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { PrimaryExpressionContext } from "./CanonParser";
import { MemberAccessExpressionContext } from "./CanonParser";
import { FunctionCallExpressionContext } from "./CanonParser";
import { NonNullAssertionExpressionContext } from "./CanonParser";
import { UnaryMinusExpressionContext } from "./CanonParser";
import { LogicalNotExpressionContext } from "./CanonParser";
import { MultiplicativeExpressionContext } from "./CanonParser";
import { AdditiveExpressionContext } from "./CanonParser";
import { RelationalExpressionContext } from "./CanonParser";
import { EqualityExpressionContext } from "./CanonParser";
import { LogicalAndExpressionContext } from "./CanonParser";
import { LogicalOrExpressionContext } from "./CanonParser";
import { LiteralExpressionContext } from "./CanonParser";
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


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CanonParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CanonParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `primaryExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `memberAccessExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberAccessExpression?: (ctx: MemberAccessExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionCallExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `nonNullAssertionExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonNullAssertionExpression?: (ctx: NonNullAssertionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryMinusExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalNotExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalNotExpression?: (ctx: LogicalNotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `multiplicativeExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `additiveExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `relationalExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `equalityExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalAndExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalOrExpression`
	 * labeled alternative in `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `literalExpression`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpression?: (ctx: LiteralExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `identifierExpression`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierExpression?: (ctx: IdentifierExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `thisExpression`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThisExpression?: (ctx: ThisExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ifExpression`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfExpression?: (ctx: IfExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `callExpressionPrimary`
	 * labeled alternative in `CanonParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallExpressionPrimary?: (ctx: CallExpressionPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

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
	 * Visit a parse tree produced by `CanonParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

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
	 * Visit a parse tree produced by `CanonParser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

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
}

