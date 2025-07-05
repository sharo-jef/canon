// Generated from definition/CanonParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./CanonParser";
import { ConfigurationCallContext } from "./CanonParser";
import { SchemaDirectiveContext } from "./CanonParser";
import { SchemaDefinitionContext } from "./CanonParser";
import { SchemaMemberContext } from "./CanonParser";
import { StructDefinitionContext } from "./CanonParser";
import { StructContentContext } from "./CanonParser";
import { MixinDeclarationContext } from "./CanonParser";
import { StructMemberContext } from "./CanonParser";
import { MethodDefinitionContext } from "./CanonParser";
import { FunctionDefinitionContext } from "./CanonParser";
import { FunctionBodyContext } from "./CanonParser";
import { ParameterListContext } from "./CanonParser";
import { ParameterContext } from "./CanonParser";
import { TypeReferenceContext } from "./CanonParser";
import { StatementContext } from "./CanonParser";
import { VariableDeclarationContext } from "./CanonParser";
import { AssignmentContext } from "./CanonParser";
import { ExpressionStatementContext } from "./CanonParser";
import { ReturnStatementContext } from "./CanonParser";
import { ForStatementContext } from "./CanonParser";
import { ConstructionBodyContext } from "./CanonParser";
import { ExpressionContext } from "./CanonParser";
import { ComparisonExpressionContext } from "./CanonParser";
import { AdditiveExpressionContext } from "./CanonParser";
import { MultiplicativeExpressionContext } from "./CanonParser";
import { PrimaryExpressionContext } from "./CanonParser";
import { FunctionCallContext } from "./CanonParser";
import { ArgumentListContext } from "./CanonParser";
import { MemberAccessContext } from "./CanonParser";
import { StringInterpolationContext } from "./CanonParser";
import { StringContentContext } from "./CanonParser";
import { InterpolationExpressionContext } from "./CanonParser";
import { LiteralContext } from "./CanonParser";
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
	 * Visit a parse tree produced by `CanonParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.configurationCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConfigurationCall?: (ctx: ConfigurationCallContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.schemaDirective`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaDirective?: (ctx: SchemaDirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.schemaDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaDefinition?: (ctx: SchemaDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.schemaMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaMember?: (ctx: SchemaMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.structDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructDefinition?: (ctx: StructDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.structContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructContent?: (ctx: StructContentContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.mixinDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMixinDeclaration?: (ctx: MixinDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.structMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructMember?: (ctx: StructMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.methodDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDefinition?: (ctx: MethodDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.functionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDefinition?: (ctx: FunctionDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.functionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionBody?: (ctx: FunctionBodyContext) => Result;

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
	 * Visit a parse tree produced by `CanonParser.typeReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeReference?: (ctx: TypeReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.forStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.constructionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructionBody?: (ctx: ConstructionBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.comparisonExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonExpression?: (ctx: ComparisonExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.additiveExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.argumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentList?: (ctx: ArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.memberAccess`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberAccess?: (ctx: MemberAccessContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.stringInterpolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringInterpolation?: (ctx: StringInterpolationContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.stringContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringContent?: (ctx: StringContentContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.interpolationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterpolationExpression?: (ctx: InterpolationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CanonParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;
}

