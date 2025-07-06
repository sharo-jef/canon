import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { CanonLexer } from './generated/CanonLexer';
// Import specific Context types for type safety
import {
  CanonParser,
  ProgramContext,
  VariableDeclarationContext,
  AssignmentContext,
  LiteralContext,
  MemberAccessContext,
  FunctionCallContext,
  TypeReferenceContext,
  SchemaDirectiveContext,
  AnnotationContext,
  StructDefinitionContext,
  SchemaMemberContext,
  MixinDeclarationContext,
  StructMemberContext,
  FunctionDefinitionContext,
  MethodDefinitionContext,
  ConfigurationCallContext,
  ForStatementContext,
  ParameterContext,
  ExpressionContext,
  AdditiveExpressionContext,
  MultiplicativeExpressionContext,
  ComparisonExpressionContext,
} from './generated/CanonParser';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { CanonParserVisitor } from './generated/CanonParserVisitor';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import { CanonErrorListener, ErrorFormatter, DEFAULT_FORMATTER_OPTIONS } from './error';

interface ASTLocation {
  start: { line: number; column: number };
  end: { line: number; column: number };
}

interface ASTNode {
  type: string;
  text?: string;
  children?: ASTNode[];
  loc?: ASTLocation;
  [key: string]: any;
}

class ASTBuilder extends AbstractParseTreeVisitor<ASTNode> implements CanonParserVisitor<ASTNode> {
  defaultResult(): ASTNode {
    return { type: 'Unknown' };
  }

  private getLocationInfo(node: any): ASTLocation | undefined {
    try {
      if (node && node.start && node.stop) {
        return {
          start: {
            line: node.start.line,
            column: node.start.charPositionInLine,
          },
          end: {
            line: node.stop.line,
            column: node.stop.charPositionInLine + (node.stop.text?.length || 0),
          },
        };
      }
    } catch {
      // If location extraction fails, return undefined
    }
    return undefined;
  }

  private createIdentifierWithLocation(name: string, sourceNode?: any): ASTNode {
    const identifier: ASTNode = {
      type: 'Identifier',
      name: name,
    };

    if (sourceNode) {
      const loc = this.getLocationInfo(sourceNode);
      if (loc) {
        identifier.loc = loc;
      }
    }

    return identifier;
  }

  private unquote(text: string): string {
    if (
      (text.startsWith("'") && text.endsWith("'")) ||
      (text.startsWith('"') && text.endsWith('"'))
    ) {
      return text.slice(1, -1);
    }
    return text;
  }

  visitTerminal(node: TerminalNode): ASTNode {
    // 重要な情報を持つTerminalのみ、簡潔な形で返す
    const result: ASTNode = {
      type: 'Terminal',
      text: node.text,
    };

    const loc = this.getLocationInfo(node);
    if (loc) {
      result.loc = loc;
    }

    return result;
  }

  visitChildren(node: RuleNode): ASTNode {
    const children: ASTNode[] = [];
    for (let i = 0; i < node.childCount; i++) {
      const childResult = this.visit(node.getChild(i));
      // visitTerminal が返す 'Terminal' 型や、その他の不要なノードを除外
      if (childResult && childResult.type !== 'Terminal' && childResult.type !== 'Unknown') {
        children.push(childResult);
      }
    }

    // 子が1つだけなら、その子を直接返す（階層をフラットにする）
    if (children.length === 1) {
      return children[0];
    }

    // 複数の子を持つ場合は、汎用的なノードとして返す
    const ruleName = (node as any).constructor.name.replace('Context', '');
    return {
      type: ruleName,
      children: children,
      loc: this.getLocationInfo(node),
    };
  }

  private extractParameters(parameterList: any): any[] {
    const parameters: any[] = [];
    const params = parameterList.parameter();

    if (params) {
      const paramArray = Array.isArray(params) ? params : [params];
      for (const param of paramArray) {
        const identifier = param.IDENTIFIER();
        const typeRef = param.typeReference();

        if (identifier && typeRef) {
          parameters.push({
            name: this.createIdentifierWithLocation(identifier.text, identifier),
            type: {
              type: 'TypeReference',
              typeName: typeRef.text,
            },
          });
        }
      }
    }

    return parameters;
  }

  private countArguments(argumentList: any): number {
    const expressions = argumentList.expression();
    if (!expressions) return 0;
    return Array.isArray(expressions) ? expressions.length : 1;
  }

  private extractArgumentsFromList(argumentList: any): ASTNode[] {
    const expressions = argumentList.expression();
    if (!expressions) return [];

    if (Array.isArray(expressions)) {
      return expressions.map((expr: any) => this.visit(expr));
    } else {
      return [this.visit(expressions)];
    }
  }

  private extractStatementsFromBody(constructionBody: any): ASTNode[] {
    const statements: ASTNode[] = [];

    // ConstructionBodyの各ステートメントを処理
    const assignments = constructionBody.assignment();
    if (assignments) {
      const assignmentList = Array.isArray(assignments) ? assignments : [assignments];
      statements.push(...assignmentList.map((stmt: any) => this.visit(stmt)));
    }

    const variableDeclarations = constructionBody.variableDeclaration();
    if (variableDeclarations) {
      const varDeclList = Array.isArray(variableDeclarations)
        ? variableDeclarations
        : [variableDeclarations];
      statements.push(...varDeclList.map((stmt: any) => this.visit(stmt)));
    }

    const forStatements = constructionBody.forStatement();
    if (forStatements) {
      const forStmtList = Array.isArray(forStatements) ? forStatements : [forStatements];
      statements.push(...forStmtList.map((stmt: any) => this.visit(stmt)));
    }

    const configurationCalls = constructionBody.configurationCall();
    if (configurationCalls) {
      const configCallList = Array.isArray(configurationCalls)
        ? configurationCalls
        : [configurationCalls];
      statements.push(...configCallList.map((stmt: any) => this.visit(stmt)));
    }

    return statements;
  }

  // Visitor methods implementation
  visitProgram(ctx: ProgramContext): ASTNode {
    return this.visitChildren(ctx);
  }

  visitVariableDeclaration(ctx: VariableDeclarationContext): ASTNode {
    const identifier = ctx.IDENTIFIER();
    const expression = ctx.expression();

    return {
      type: 'VariableDeclaration',
      isMutable: !!ctx.VAR(), // true for 'var', false for 'val'
      variableName: this.createIdentifierWithLocation(identifier.text, identifier),
      expression: expression ? this.visit(expression) : undefined,
      loc: this.getLocationInfo(ctx),
    };
  }

  visitAssignment(ctx: AssignmentContext): ASTNode {
    const identifiers = ctx.IDENTIFIER();
    const thisToken = ctx.THIS();
    const expression = ctx.expression();

    let target: any;
    if (thisToken && identifiers?.[0]) {
      // this.property pattern
      target = {
        type: 'MemberAccess',
        object: {
          type: 'ThisReference',
        },
        member: this.createIdentifierWithLocation(identifiers[0].text, identifiers[0]),
      };
    } else if (identifiers?.length >= 2) {
      // object.property pattern
      target = {
        type: 'MemberAccess',
        object: this.createIdentifierWithLocation(identifiers[0].text, identifiers[0]),
        member: this.createIdentifierWithLocation(identifiers[1].text, identifiers[1]),
      };
    } else if (identifiers?.[0]) {
      // Simple identifier pattern
      target = this.createIdentifierWithLocation(identifiers[0].text, identifiers[0]);
    } else {
      // Fallback for unknown patterns
      target = {
        type: 'Identifier',
        name: 'unknown',
      };
    }

    return {
      type: 'Assignment',
      target: target,
      expression: expression ? this.visit(expression) : undefined,
      loc: this.getLocationInfo(ctx),
    };
  }

  visitLiteral(ctx: LiteralContext): ASTNode {
    const stringLiteral = ctx.STRING_LITERAL();
    const integerLiteral = ctx.INTEGER_LITERAL();

    let literalType: string;
    let value: any;

    if (stringLiteral) {
      literalType = 'string';
      value = this.unquote(stringLiteral.text);
    } else if (integerLiteral) {
      literalType = 'integer';
      value = parseInt(integerLiteral.text);
    } else {
      literalType = 'unknown';
      value = null;
    }

    return {
      type: 'Literal',
      literalType: literalType,
      value: value,
      loc: this.getLocationInfo(ctx),
    };
  }

  visitMemberAccess(ctx: MemberAccessContext): ASTNode {
    const identifiers = ctx.IDENTIFIER();
    const thisToken = ctx.THIS();

    let object: any;
    let member: any;

    if (thisToken && identifiers?.[0]) {
      object = {
        type: 'ThisReference',
      };
      member = this.createIdentifierWithLocation(identifiers[0].text, identifiers[0]);
    } else if (identifiers?.length >= 2) {
      object = this.createIdentifierWithLocation(identifiers[0].text, identifiers[0]);
      member = this.createIdentifierWithLocation(identifiers[1].text, identifiers[1]);
    } else {
      object = { type: 'Unknown' };
      member = { type: 'Unknown' };
    }

    return {
      type: 'MemberAccess',
      object: object,
      member: member,
      loc: this.getLocationInfo(ctx),
    };
  }

  visitFunctionCall(ctx: FunctionCallContext): ASTNode {
    const identifier = ctx.IDENTIFIER();
    const memberAccess = ctx.memberAccess();
    const argumentList = ctx.argumentList();
    const constructionBody = ctx.constructionBody();

    let functionName: any;
    let target: any = undefined;
    let isMethodCall = false;

    if (memberAccess) {
      // Member function call (e.g., version.toString())
      isMethodCall = true;
      const memberAccessCtx = memberAccess as any;
      const identifiers = memberAccessCtx.IDENTIFIER();
      const thisToken = memberAccessCtx.THIS();

      if (thisToken && identifiers?.[0]) {
        functionName = `this.${identifiers[0].text}`;
        target = {
          type: 'MemberAccess',
          object: {
            type: 'ThisReference',
          },
          member: this.createIdentifierWithLocation(identifiers[0].text, identifiers[0]),
        };
      } else if (identifiers?.length >= 2) {
        functionName = `${identifiers[0].text}.${identifiers[1].text}`;
        target = {
          type: 'MemberAccess',
          object: this.createIdentifierWithLocation(identifiers[0].text, identifiers[0]),
          member: this.createIdentifierWithLocation(identifiers[1].text, identifiers[1]),
        };
      }
    } else if (identifier) {
      // Normal function call (e.g., data2(), apply())
      if (Array.isArray(identifier)) {
        functionName = this.createIdentifierWithLocation(identifier[0]?.text, identifier[0]);
      } else {
        functionName = this.createIdentifierWithLocation(identifier.text, identifier);
      }
    }

    const result: ASTNode = {
      type: 'FunctionCall',
      functionName: functionName,
      arguments: argumentList ? this.extractArgumentsFromList(argumentList) : [],
      loc: this.getLocationInfo(ctx),
    };

    if (isMethodCall && target) {
      result.isMethodCall = true;
      result.target = target;
    }

    if (constructionBody) {
      // This is actually an object construction with trailing lambda
      result.isObjectConstruction = true;
      result.body = this.extractStatementsFromBody(constructionBody);
    } else {
      result.body = [];
    }

    return result;
  }

  visitTypeReference(ctx: TypeReferenceContext): ASTNode {
    const stringType = ctx.STRING_TYPE();
    const intType = ctx.INT_TYPE();
    const identifier = ctx.IDENTIFIER();

    let typeName: string;
    if (stringType) {
      typeName = 'string';
    } else if (intType) {
      typeName = 'int';
    } else if (identifier) {
      typeName = identifier.text;
    } else {
      typeName = 'unknown';
    }

    return {
      type: 'TypeReference',
      typeName: typeName,
      loc: this.getLocationInfo(ctx),
    };
  }

  visitSchemaDirective(ctx: SchemaDirectiveContext): ASTNode {
    const stringLiteral = ctx.STRING_LITERAL();

    return {
      type: 'SchemaDirective',
      schema: stringLiteral ? this.unquote(stringLiteral.text) : '',
      loc: this.getLocationInfo(ctx),
    };
  }

  visitAnnotation(ctx: AnnotationContext): ASTNode {
    const identifier = ctx.IDENTIFIER();
    const stringLiteral = ctx.STRING_LITERAL();

    const result: ASTNode = {
      type: 'Annotation',
      loc: this.getLocationInfo(ctx),
    };

    if (identifier) {
      result.name = this.createIdentifierWithLocation(identifier.text, identifier);
      if (stringLiteral) {
        result.value = this.unquote(stringLiteral.text);
      }
    }

    return result;
  }

  visitStructDefinition(ctx: StructDefinitionContext): ASTNode {
    const identifier = ctx.IDENTIFIER();

    return {
      type: 'StructDefinition',
      name: identifier ? this.createIdentifierWithLocation(identifier.text, identifier) : undefined,
      loc: this.getLocationInfo(ctx),
    };
  }

  visitSchemaMember(ctx: SchemaMemberContext): ASTNode {
    const identifier = ctx.IDENTIFIER();
    const multiply = ctx.MULTIPLY();
    const question = ctx.QUESTION();
    const plus = ctx.PLUS();
    const typeRef = ctx.typeReference();

    const result: ASTNode = {
      type: 'SchemaMember',
      loc: this.getLocationInfo(ctx),
    };

    if (identifier) {
      result.name = this.createIdentifierWithLocation(identifier.text, identifier);
      result.multiple = !!multiply || !!plus; // * または + の場合は複数

      // * は multiple: true, required: false
      // + は multiple: true, required: true
      // ? は multiple: false, required: false
      // 修飾子なしは multiple: false, required: true
      if (multiply) {
        result.required = false; // * は0個以上（任意）
      } else if (plus) {
        result.required = true; // + は1個以上必須
      } else if (question) {
        result.required = false; // ? は任意
      } else {
        result.required = true; // 修飾子なしは必須
      }

      if (typeRef) {
        result.dataType = this.visit(typeRef);
      }
    }

    return result;
  }

  visitMixinDeclaration(ctx: MixinDeclarationContext): ASTNode {
    const identifier = ctx.IDENTIFIER();

    return {
      type: 'MixinDeclaration',
      mixinType: identifier
        ? {
            type: 'TypeReference',
            typeName: identifier.text,
          }
        : undefined,
      loc: this.getLocationInfo(ctx),
    };
  }

  visitStructMember(ctx: StructMemberContext): ASTNode {
    const identifier = ctx.IDENTIFIER();
    const question = ctx.QUESTION();
    const typeRef = ctx.typeReference();

    return {
      type: 'StructMember',
      name: identifier ? this.createIdentifierWithLocation(identifier.text, identifier) : undefined,
      required: !question, // ? があれば任意、なければ必須
      dataType: typeRef ? this.visit(typeRef) : undefined,
      loc: this.getLocationInfo(ctx),
    };
  }

  visitFunctionDefinition(ctx: FunctionDefinitionContext): ASTNode {
    const identifier = ctx.IDENTIFIER();
    const isDeclare = ctx.DECLARE();
    const returnType = ctx.typeReference();
    const parameterList = ctx.parameterList();
    const functionBody = ctx.functionBody();

    return {
      type: 'FunctionDefinition',
      name: identifier ? this.createIdentifierWithLocation(identifier.text, identifier) : undefined,
      isDeclare: !!isDeclare,
      returnType: returnType ? this.visit(returnType) : undefined,
      parameters: parameterList ? this.extractParameters(parameterList) : [],
      functionBody: functionBody ? this.visit(functionBody) : undefined,
      loc: this.getLocationInfo(ctx),
    };
  }

  visitMethodDefinition(ctx: MethodDefinitionContext): ASTNode {
    const identifier = ctx.IDENTIFIER();
    const returnType = ctx.typeReference();
    const parameterList = ctx.parameterList();
    const functionBody = ctx.functionBody();

    return {
      type: 'MethodDefinition',
      name: identifier ? this.createIdentifierWithLocation(identifier.text, identifier) : undefined,
      returnType: returnType ? this.visit(returnType) : undefined,
      parameters: parameterList ? this.extractParameters(parameterList) : [],
      functionBody: functionBody ? this.visit(functionBody) : undefined,
      loc: this.getLocationInfo(ctx),
    };
  }

  visitConfigurationCall(ctx: ConfigurationCallContext): ASTNode {
    const identifier = ctx.IDENTIFIER();
    const argumentList = ctx.argumentList();
    const constructionBody = ctx.constructionBody();

    return {
      type: 'ConfigurationCall',
      functionName: identifier
        ? this.createIdentifierWithLocation(identifier.text, identifier)
        : undefined,
      arguments: argumentList ? this.extractArgumentsFromList(argumentList) : [],
      body: constructionBody ? this.extractStatementsFromBody(constructionBody) : [],
      loc: this.getLocationInfo(ctx),
    };
  }

  visitForStatement(ctx: ForStatementContext): ASTNode {
    const identifier = ctx.IDENTIFIER();
    const expression = ctx.expression();
    const statements = ctx.statement();

    return {
      type: 'ForStatement',
      iteratorVariable: identifier
        ? this.createIdentifierWithLocation(identifier.text, identifier)
        : undefined,
      iterable: expression ? this.visit(expression) : undefined,
      body:
        statements && statements.length > 0 ? statements.map((stmt: any) => this.visit(stmt)) : [],
      loc: this.getLocationInfo(ctx),
    };
  }

  visitParameter(ctx: ParameterContext): ASTNode {
    const identifier = ctx.IDENTIFIER();
    const typeRef = ctx.typeReference();

    return {
      type: 'Parameter',
      parameterName: identifier ? identifier.text : undefined,
      parameterType: typeRef ? typeRef.text : undefined,
      loc: this.getLocationInfo(ctx),
    };
  }

  visitExpression(ctx: ExpressionContext): ASTNode {
    if (ctx.childCount >= 3) {
      // Range expression: left .. right
      const leftChild = ctx.getChild(0);
      const operatorChild = ctx.getChild(1);
      const rightChild = ctx.getChild(2);

      if (leftChild && operatorChild && rightChild && operatorChild.text === '..') {
        return {
          type: 'BinaryExpression',
          left: this.visit(leftChild),
          operator: operatorChild.text, // RANGE (..)
          right: this.visit(rightChild),
          loc: this.getLocationInfo(ctx),
        };
      }
    }
    // For other cases, delegate to default behavior
    return this.visitChildren(ctx);
  }

  visitAdditiveExpression(ctx: AdditiveExpressionContext): ASTNode {
    if (ctx.childCount >= 3) {
      // 左結合で複数の加算/減算を処理
      let currentLeft = this.visit(ctx.getChild(0));

      for (let i = 1; i < ctx.childCount; i += 2) {
        const operatorChild = ctx.getChild(i);
        const rightChild = ctx.getChild(i + 1);

        if (operatorChild && rightChild) {
          const rightNode = this.visit(rightChild);
          currentLeft = {
            type: 'BinaryExpression',
            left: currentLeft,
            operator: operatorChild.text,
            right: rightNode,
            loc: this.getLocationInfo(ctx),
          };
        }
      }

      return currentLeft;
    }
    // For other cases, delegate to default behavior
    return this.visitChildren(ctx);
  }

  visitMultiplicativeExpression(ctx: MultiplicativeExpressionContext): ASTNode {
    if (ctx.childCount >= 3) {
      // 左結合で複数の乗算/除算を処理
      let currentLeft = this.visit(ctx.getChild(0));

      for (let i = 1; i < ctx.childCount; i += 2) {
        const operatorChild = ctx.getChild(i);
        const rightChild = ctx.getChild(i + 1);

        if (operatorChild && rightChild) {
          const rightNode = this.visit(rightChild);
          currentLeft = {
            type: 'BinaryExpression',
            left: currentLeft,
            operator: operatorChild.text,
            right: rightNode,
            loc: this.getLocationInfo(ctx),
          };
        }
      }

      return currentLeft;
    }
    // For other cases, delegate to default behavior
    return this.visitChildren(ctx);
  }

  visitComparisonExpression(ctx: ComparisonExpressionContext): ASTNode {
    if (ctx.childCount >= 3) {
      const leftChild = ctx.getChild(0);
      const operatorChild = ctx.getChild(1);
      const rightChild = ctx.getChild(2);

      if (leftChild && operatorChild && rightChild) {
        return {
          type: 'BinaryExpression',
          left: this.visit(leftChild),
          operator: operatorChild.text, // Comparison operators
          right: this.visit(rightChild),
          loc: this.getLocationInfo(ctx),
        };
      }
    }
    // For other cases, delegate to default behavior
    return this.visitChildren(ctx);
  }
}

function parseCanonToAST(filename: string): void {
  try {
    // 指定されたファイルを読み込み
    const canonPath = path.join(__dirname, '..', 'definition', filename);
    const input = fs.readFileSync(canonPath, 'utf-8');

    console.log(`Parsing ${filename} to AST...\n`);

    // ANTLR4パーサーの設定
    const inputStream = CharStreams.fromString(input);
    const lexer = new CanonLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new CanonParser(tokenStream);

    // カスタムエラーリスナーを設定
    const errorListener = new CanonErrorListener(filename);
    parser.removeErrorListeners(); // デフォルトのエラーリスナーを削除
    parser.addErrorListener(errorListener);

    // パースツリーを構築
    const tree = parser.program();

    // エラーがあった場合の処理
    if (errorListener.hasErrors()) {
      const errors = errorListener.getErrors();
      const formatter = new ErrorFormatter(input, filename, DEFAULT_FORMATTER_OPTIONS);
      const formattedErrors = formatter.formatErrors([...errors.getSortedErrors()]);

      console.error('Canon compilation failed:\n');
      console.error(formattedErrors);

      // デバッグ情報の表示（詳細モード）
      if (process.env.CANON_DEBUG) {
        console.error('\nDebug Information:');
        console.error('==================');
        console.error(`Total syntax errors: ${parser.numberOfSyntaxErrors}`);
        console.error('Tokens:');
        for (let i = 0; i < Math.min(tokenStream.size, 50); i++) {
          const token = tokenStream.get(i);
          console.error(
            `Token ${i}: type=${token.type}, text='${token.text}', line=${token.line}, column=${token.charPositionInLine}`
          );
        }
      }

      return;
    }

    // ASTビルダーを使ってASTを構築
    const astBuilder = new ASTBuilder();
    const ast = astBuilder.visit(tree);

    // ASTをYAML形式で出力
    const yamlOutput = yaml.dump(ast, {
      indent: 2,
      lineWidth: -1,
      noRefs: true,
      skipInvalid: true,
    });

    // ast.yamlファイルに出力
    const astYamlPath = path.join(__dirname, '..', 'ast.yaml');
    fs.writeFileSync(astYamlPath, yamlOutput, 'utf-8');
    console.log(`\nAST saved to: ${astYamlPath}`);

    console.log('\nAST (YAML format):');
    console.log('==================');
    console.log(yamlOutput);

    console.log('\nAST parsing completed successfully!');
  } catch (error) {
    console.error(`Error parsing ${filename} to AST:`, error);
  }
}

function parseSchemaCanonToAST(): void {
  parseCanonToAST('schema.canon');
}

function parseConfigCanonToAST(): void {
  parseCanonToAST('config.canon');
}

// メイン実行
if (require.main === module) {
  parseSchemaCanonToAST();
  console.log('\n' + '='.repeat(80) + '\n');
  parseConfigCanonToAST();
}

export { parseSchemaCanonToAST, parseConfigCanonToAST, parseCanonToAST, ASTBuilder, ASTNode };
