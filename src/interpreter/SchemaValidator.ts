/**
 * Canon言語のスキーマ検証とJSON出力
 */

import { CanonValue } from './values/CanonValue';
import { StructValue } from './values/StructValue';
import { CanonRuntimeError } from './builtins/ErrorBuiltins';

export interface SchemaValidationResult {
  isValid: boolean;
  errors: string[];
  data: any;
}

export class SchemaValidator {
  private schemaStruct: StructValue | null = null;

  /**
   * スキーマ定義を設定
   */
  setSchema(schema: StructValue): void {
    this.schemaStruct = schema;
  }

  /**
   * 値をスキーマに対して検証し、JSON形式で出力
   */
  validateAndConvert(value: CanonValue): SchemaValidationResult {
    const errors: string[] = [];

    try {
      // スキーマが設定されていない場合は値をそのまま変換
      if (!this.schemaStruct) {
        return {
          isValid: true,
          errors: [],
          data: this.canonValueToJSON(value),
        };
      }

      // スキーマに対して値を検証
      const validatedData = this.validateAgainstSchema(value, this.schemaStruct, '');
      return {
        isValid: errors.length === 0,
        errors,
        data: validatedData,
      };
    } catch (error) {
      errors.push(`Validation error: ${error}`);
      return {
        isValid: false,
        errors,
        data: null,
      };
    }
  }

  /**
   * Canon値をJSON形式に変換
   */
  private canonValueToJSON(value: CanonValue): any {
    switch (value.getTypeName()) {
      case 'int':
      case 'float':
      case 'string':
      case 'bool':
        return value.toNative();

      case 'null':
        return null;

      case 'list':
        return (value as any).getElements().map((elem: CanonValue) => this.canonValueToJSON(elem));

      case 'struct':
        const structValue = value as StructValue;
        const result: Record<string, any> = {};
        for (const [key, val] of structValue.getFields()) {
          result[key] = this.canonValueToJSON(val);
        }
        return result;

      case 'IntRange':
      case 'FloatRange':
        return value.toNative();

      case 'function':
      case 'builtin_function':
        // 関数は出力しない
        return `[Function: ${(value as any).getFunctionName?.() || 'anonymous'}]`;

      default:
        throw new CanonRuntimeError(`Cannot convert ${value.getTypeName()} to JSON`);
    }
  }

  /**
   * スキーマに対して値を検証
   */
  private validateAgainstSchema(value: CanonValue, schema: StructValue, path: string): any {
    // 基本的な実装：スキーマの構造に合わせて値を変換
    // より高度な検証ロジックは必要に応じて追加

    if (!(value instanceof StructValue)) {
      throw new CanonRuntimeError(`Expected struct at ${path}, got ${value.getTypeName()}`);
    }

    const result: Record<string, any> = {};
    const schemaFields = schema.getFields();
    const valueFields = value.getFields();

    // スキーマのフィールドをチェック
    for (const [fieldName, schemaFieldValue] of schemaFields) {
      const fieldPath = path ? `${path}.${fieldName}` : fieldName;
      const valueField = valueFields.get(fieldName);

      if (!valueField) {
        // 必須フィールドがない場合はエラー（簡単な実装）
        throw new CanonRuntimeError(`Missing required field: ${fieldPath}`);
      }

      result[fieldName] = this.canonValueToJSON(valueField);
    }

    // 値に余分なフィールドがないかチェック
    for (const [fieldName] of valueFields) {
      if (!schemaFields.has(fieldName)) {
        const fieldPath = path ? `${path}.${fieldName}` : fieldName;
        console.warn(`Unexpected field: ${fieldPath}`);
      }
    }

    return result;
  }

  /**
   * スキーマ情報を取得
   */
  getSchemaInfo(): any {
    if (!this.schemaStruct) {
      return null;
    }
    return this.canonValueToJSON(this.schemaStruct);
  }
}
