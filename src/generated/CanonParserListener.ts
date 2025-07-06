// Generated from definition/CanonParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./CanonParser";
import { ConfigurationCallContext } from "./CanonParser";
import { SchemaImportContext } from "./CanonParser";
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
import { InterpolationContentContext } from "./CanonParser";
import { InterpolationExpressionContext } from "./CanonParser";
import { ExprModeExpressionContext } from "./CanonParser";
import { ExprModeComparisonContext } from "./CanonParser";
import { ExprModeAdditiveContext } from "./CanonParser";
import { ExprModeMultiplicativeContext } from "./CanonParser";
import { ExprModePrimaryContext } from "./CanonParser";
import { ExprModeMemberAccessContext } from "./CanonParser";
import { ExprModeArgumentListContext } from "./CanonParser";
import { LiteralContext } from "./CanonParser";
import { AnnotationContext } from "./CanonParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CanonParser`.
 */
export interface CanonParserListener extends ParseTreeListener {
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
	 * Enter a parse tree produced by `CanonParser.configurationCall`.
	 * @param ctx the parse tree
	 */
	enterConfigurationCall?: (ctx: ConfigurationCallContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.configurationCall`.
	 * @param ctx the parse tree
	 */
	exitConfigurationCall?: (ctx: ConfigurationCallContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.schemaImport`.
	 * @param ctx the parse tree
	 */
	enterSchemaImport?: (ctx: SchemaImportContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.schemaImport`.
	 * @param ctx the parse tree
	 */
	exitSchemaImport?: (ctx: SchemaImportContext) => void;

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
	 * Enter a parse tree produced by `CanonParser.schemaDefinition`.
	 * @param ctx the parse tree
	 */
	enterSchemaDefinition?: (ctx: SchemaDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.schemaDefinition`.
	 * @param ctx the parse tree
	 */
	exitSchemaDefinition?: (ctx: SchemaDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.schemaMember`.
	 * @param ctx the parse tree
	 */
	enterSchemaMember?: (ctx: SchemaMemberContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.schemaMember`.
	 * @param ctx the parse tree
	 */
	exitSchemaMember?: (ctx: SchemaMemberContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.structDefinition`.
	 * @param ctx the parse tree
	 */
	enterStructDefinition?: (ctx: StructDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.structDefinition`.
	 * @param ctx the parse tree
	 */
	exitStructDefinition?: (ctx: StructDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.structContent`.
	 * @param ctx the parse tree
	 */
	enterStructContent?: (ctx: StructContentContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.structContent`.
	 * @param ctx the parse tree
	 */
	exitStructContent?: (ctx: StructContentContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.mixinDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMixinDeclaration?: (ctx: MixinDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.mixinDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMixinDeclaration?: (ctx: MixinDeclarationContext) => void;

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
	 * Enter a parse tree produced by `CanonParser.methodDefinition`.
	 * @param ctx the parse tree
	 */
	enterMethodDefinition?: (ctx: MethodDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.methodDefinition`.
	 * @param ctx the parse tree
	 */
	exitMethodDefinition?: (ctx: MethodDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.functionDefinition`.
	 * @param ctx the parse tree
	 */
	enterFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.functionDefinition`.
	 * @param ctx the parse tree
	 */
	exitFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.functionBody`.
	 * @param ctx the parse tree
	 */
	enterFunctionBody?: (ctx: FunctionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.functionBody`.
	 * @param ctx the parse tree
	 */
	exitFunctionBody?: (ctx: FunctionBodyContext) => void;

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
	 * Enter a parse tree produced by `CanonParser.typeReference`.
	 * @param ctx the parse tree
	 */
	enterTypeReference?: (ctx: TypeReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.typeReference`.
	 * @param ctx the parse tree
	 */
	exitTypeReference?: (ctx: TypeReferenceContext) => void;

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
	 * Enter a parse tree produced by `CanonParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

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
	 * Enter a parse tree produced by `CanonParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.forStatement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.forStatement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.constructionBody`.
	 * @param ctx the parse tree
	 */
	enterConstructionBody?: (ctx: ConstructionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.constructionBody`.
	 * @param ctx the parse tree
	 */
	exitConstructionBody?: (ctx: ConstructionBodyContext) => void;

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
	 * Enter a parse tree produced by `CanonParser.comparisonExpression`.
	 * @param ctx the parse tree
	 */
	enterComparisonExpression?: (ctx: ComparisonExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.comparisonExpression`.
	 * @param ctx the parse tree
	 */
	exitComparisonExpression?: (ctx: ComparisonExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

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
	 * Enter a parse tree produced by `CanonParser.memberAccess`.
	 * @param ctx the parse tree
	 */
	enterMemberAccess?: (ctx: MemberAccessContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.memberAccess`.
	 * @param ctx the parse tree
	 */
	exitMemberAccess?: (ctx: MemberAccessContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.stringInterpolation`.
	 * @param ctx the parse tree
	 */
	enterStringInterpolation?: (ctx: StringInterpolationContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.stringInterpolation`.
	 * @param ctx the parse tree
	 */
	exitStringInterpolation?: (ctx: StringInterpolationContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.interpolationContent`.
	 * @param ctx the parse tree
	 */
	enterInterpolationContent?: (ctx: InterpolationContentContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.interpolationContent`.
	 * @param ctx the parse tree
	 */
	exitInterpolationContent?: (ctx: InterpolationContentContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.interpolationExpression`.
	 * @param ctx the parse tree
	 */
	enterInterpolationExpression?: (ctx: InterpolationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.interpolationExpression`.
	 * @param ctx the parse tree
	 */
	exitInterpolationExpression?: (ctx: InterpolationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.exprModeExpression`.
	 * @param ctx the parse tree
	 */
	enterExprModeExpression?: (ctx: ExprModeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.exprModeExpression`.
	 * @param ctx the parse tree
	 */
	exitExprModeExpression?: (ctx: ExprModeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.exprModeComparison`.
	 * @param ctx the parse tree
	 */
	enterExprModeComparison?: (ctx: ExprModeComparisonContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.exprModeComparison`.
	 * @param ctx the parse tree
	 */
	exitExprModeComparison?: (ctx: ExprModeComparisonContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.exprModeAdditive`.
	 * @param ctx the parse tree
	 */
	enterExprModeAdditive?: (ctx: ExprModeAdditiveContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.exprModeAdditive`.
	 * @param ctx the parse tree
	 */
	exitExprModeAdditive?: (ctx: ExprModeAdditiveContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.exprModeMultiplicative`.
	 * @param ctx the parse tree
	 */
	enterExprModeMultiplicative?: (ctx: ExprModeMultiplicativeContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.exprModeMultiplicative`.
	 * @param ctx the parse tree
	 */
	exitExprModeMultiplicative?: (ctx: ExprModeMultiplicativeContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.exprModePrimary`.
	 * @param ctx the parse tree
	 */
	enterExprModePrimary?: (ctx: ExprModePrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.exprModePrimary`.
	 * @param ctx the parse tree
	 */
	exitExprModePrimary?: (ctx: ExprModePrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.exprModeMemberAccess`.
	 * @param ctx the parse tree
	 */
	enterExprModeMemberAccess?: (ctx: ExprModeMemberAccessContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.exprModeMemberAccess`.
	 * @param ctx the parse tree
	 */
	exitExprModeMemberAccess?: (ctx: ExprModeMemberAccessContext) => void;

	/**
	 * Enter a parse tree produced by `CanonParser.exprModeArgumentList`.
	 * @param ctx the parse tree
	 */
	enterExprModeArgumentList?: (ctx: ExprModeArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.exprModeArgumentList`.
	 * @param ctx the parse tree
	 */
	exitExprModeArgumentList?: (ctx: ExprModeArgumentListContext) => void;

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
	 * Enter a parse tree produced by `CanonParser.annotation`.
	 * @param ctx the parse tree
	 */
	enterAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `CanonParser.annotation`.
	 * @param ctx the parse tree
	 */
	exitAnnotation?: (ctx: AnnotationContext) => void;
}

