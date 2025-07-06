// Generated from definition/CanonParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { PrimaryExpressionContext } from "./CanonParser";
import { MemberAccessExpressionContext } from "./CanonParser";
import { FunctionCallExpressionContext } from "./CanonParser";
import { UnaryMinusExpressionContext } from "./CanonParser";
import { LogicalNotExpressionContext } from "./CanonParser";
import { MultiplicativeExpressionContext } from "./CanonParser";
import { AdditiveExpressionContext } from "./CanonParser";
import { RelationalExpressionContext } from "./CanonParser";
import { EqualityExpressionContext } from "./CanonParser";
import { LogicalAndExpressionContext } from "./CanonParser";
import { LogicalOrExpressionContext } from "./CanonParser";
import { ProgramContext } from "./CanonParser";
import { SchemaDirectiveContext } from "./CanonParser";
import { UseStatementContext } from "./CanonParser";
import { TopLevelElementContext } from "./CanonParser";
import { SchemaDeclarationContext } from "./CanonParser";
import { StructDeclarationContext } from "./CanonParser";
import { UnionDeclarationContext } from "./CanonParser";
import { TypeDeclarationContext } from "./CanonParser";
import { UnionTypeContext } from "./CanonParser";
import { TypeContext } from "./CanonParser";
import { BaseTypeContext } from "./CanonParser";
import { PrimitiveTypeContext } from "./CanonParser";
import { BlockContext } from "./CanonParser";
import { BlockContentContext } from "./CanonParser";
import { PropertyDeclarationContext } from "./CanonParser";
import { AssignmentStatementContext } from "./CanonParser";
import { InitDeclarationContext } from "./CanonParser";
import { FunctionDeclarationContext } from "./CanonParser";
import { GetterDeclarationContext } from "./CanonParser";
import { RepeatedDeclarationContext } from "./CanonParser";
import { MappingBlockContext } from "./CanonParser";
import { MappingEntryContext } from "./CanonParser";
import { ParameterListContext } from "./CanonParser";
import { ParameterContext } from "./CanonParser";
import { ObjectInstantiationContext } from "./CanonParser";
import { ArgumentListContext } from "./CanonParser";
import { IfStatementContext } from "./CanonParser";
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
	 * Visit a parse tree produced by `CanonParser.blockContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockContent?: (ctx: BlockContentContext) => Result;

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
	 * Visit a parse tree produced by `CanonParser.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;

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
	 * Visit a parse tree produced by `CanonParser.objectInstantiation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectInstantiation?: (ctx: ObjectInstantiationContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.argumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentList?: (ctx: ArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

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

