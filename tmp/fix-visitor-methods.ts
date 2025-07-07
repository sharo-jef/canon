import * as fs from 'fs';

const filePath = 'src/parser.ts';
const content = fs.readFileSync(filePath, 'utf8');

// Mapping of old method names to new ones
const methodMappings = [
  // Expression visitor methods
  [
    'visitUnaryMinusExpression(ctx: UnaryMinusExpressionContext)',
    'visitUnaryMinusExpr(ctx: UnaryMinusExprContext)',
  ],
  [
    'visitLogicalNotExpression(ctx: LogicalNotExpressionContext)',
    'visitLogicalNotExpr(ctx: LogicalNotExprContext)',
  ],
  [
    'visitMultiplicativeExpression(ctx: MultiplicativeExpressionContext)',
    'visitMulDivModExpr(ctx: MulDivModExprContext)',
  ],
  [
    'visitAdditiveExpression(ctx: AdditiveExpressionContext)',
    'visitAddSubExpr(ctx: AddSubExprContext)',
  ],
  [
    'visitRelationalExpression(ctx: RelationalExpressionContext)',
    'visitRelationalExpr(ctx: RelationalExprContext)',
  ],
  [
    'visitEqualityExpression(ctx: EqualityExpressionContext)',
    'visitEqualityExpr(ctx: EqualityExprContext)',
  ],
  [
    'visitLogicalAndExpression(ctx: LogicalAndExpressionContext)',
    'visitLogicalAndExpr(ctx: LogicalAndExprContext)',
  ],
  [
    'visitLogicalOrExpression(ctx: LogicalOrExpressionContext)',
    'visitLogicalOrExpr(ctx: LogicalOrExprContext)',
  ],
  [
    'visitLiteralExpression(ctx: LiteralExpressionContext)',
    'visitLiteralExpr(ctx: LiteralExprContext)',
  ],
  [
    'visitIdentifierExpression(ctx: IdentifierExpressionContext)',
    'visitIdentifierExpr(ctx: IdentifierExprContext)',
  ],
  ['visitThisExpression(ctx: ThisExpressionContext)', 'visitThisExpr(ctx: ThisExprContext)'],
  ['visitIfExpression(ctx: IfExpressionContext)', 'visitIfExpr(ctx: IfExprContext)'],
  [
    'visitParenthesizedExpression(ctx: ParenthesizedExpressionContext)',
    'visitParenExpr(ctx: ParenExprContext)',
  ],
  [
    'visitCallExpressionPrimary(ctx: CallExpressionPrimaryContext)',
    'visitCallExprPrimary(ctx: CallExprPrimaryContext)',
  ],
  [
    'visitListLiteralExpression(ctx: ListLiteralExpressionContext)',
    'visitListLiteralExpr(ctx: ListLiteralExprContext)',
  ],
  [
    'visitLambdaExpressionPrimary(ctx: LambdaExpressionPrimaryContext)',
    'visitLambdaExpr(ctx: LambdaExprContext)',
  ],
  [
    'visitAnonymousFunctionPrimary(ctx: AnonymousFunctionPrimaryContext)',
    'visitAnonFuncExpr(ctx: AnonFuncExprContext)',
  ],
  [
    'visitSpreadExpressionPrimary(ctx: SpreadExpressionPrimaryContext)',
    'visitSpreadExpr(ctx: SpreadExprContext)',
  ],
  [
    'visitPipelineExpression(ctx: PipelineExpressionContext)',
    'visitPipelineExpr(ctx: PipelineExprContext)',
  ],
  ['visitRangeExpression(ctx: RangeExpressionContext)', 'visitSliceExpr(ctx: SliceExprContext)'],
  [
    'visitBitwiseAndExpression(ctx: BitwiseAndExpressionContext)',
    'visitBitwiseAndExpr(ctx: BitwiseAndExprContext)',
  ],
  [
    'visitBitwiseXorExpression(ctx: BitwiseXorExpressionContext)',
    'visitBitwiseXorExpr(ctx: BitwiseXorExprContext)',
  ],
  [
    'visitBitwiseOrExpression(ctx: BitwiseOrExpressionContext)',
    'visitBitwiseOrExpr(ctx: BitwiseOrExprContext)',
  ],
  ['visitShiftExpression(ctx: ShiftExpressionContext)', 'visitShiftExpr(ctx: ShiftExprContext)'],
  [
    'visitIndexAccessExpression(ctx: IndexAccessExpressionContext)',
    'visitIndexAccessExpr(ctx: IndexAccessExprContext)',
  ],
  ['visitSliceExpression(ctx: SliceExpressionContext)', 'visitSliceExpr(ctx: SliceExprContext)'],
  [
    'visitBitwiseNotExpression(ctx: BitwiseNotExpressionContext)',
    'visitBitwiseNotExpr(ctx: BitwiseNotExprContext)',
  ],
  ['visitPowerExpression(ctx: PowerExpressionContext)', 'visitPowerExpr(ctx: PowerExprContext)'],
];

let updatedContent = content;

for (const [oldMethod, newMethod] of methodMappings) {
  updatedContent = updatedContent.replace(oldMethod, newMethod);
}

fs.writeFileSync(filePath, updatedContent);
console.log('Fixed all visitor method names!');
