/**
 * Canon言語の構造体値クラス
 */

import { CanonValue } from './CanonValue';
import { ASTNode } from '../../parser';
import { UserFunctionValue } from './FunctionValue';

export class StructValue extends CanonValue {
  readonly type = 'struct';

  private memberAnnotations: Map<string, any[]> = new Map();
  private interpreter?: any;
  private fieldsRequiringValidation: Set<string> = new Set();

  constructor(
    private readonly structName: string,
    private readonly fields: Map<string, CanonValue>,
    private readonly annotations: ASTNode[] = []
  ) {
    super();
  }

  setInterpreter(interpreter: any): void {
    this.interpreter = interpreter;
  }

  toString(): string {
    const fieldEntries = Array.from(this.fields.entries());
    const fieldStrings = fieldEntries.map(([key, value]) => `${key}: ${value.toString()}`);
    return `${this.structName} { ${fieldStrings.join(', ')} }`;
  }

  toNative(): any {
    // Check for struct-level @serialize annotation
    const serializeAnnotation = this.annotations.find(
      (annotation: any) => annotation.name?.name === 'serialize'
    );

    if (serializeAnnotation && serializeAnnotation.arguments?.length > 0) {
      const serializeTarget = serializeAnnotation.arguments[0];

      if (serializeTarget.type === 'StringLiteral') {
        const methodName = serializeTarget.value;

        // Look for the method/getter in the struct fields
        const method = this.fields.get(methodName);

        if (method) {
          // If it's a method/getter, call it and return the result
          if (method.type === 'function' && method instanceof UserFunctionValue) {
            if (this.interpreter) {
              try {
                // Create a scope that includes the struct fields
                const structScope = new Map<string, CanonValue>();

                // Add all struct fields to the scope (except the function itself)
                for (const [key, value] of this.fields) {
                  if (key !== methodName) {
                    structScope.set(key, value);
                  }
                }

                // Call the function with the struct scope
                const result = this.interpreter.evaluateWithScope(
                  (method as UserFunctionValue).getBody(),
                  structScope
                );
                return result.toNative();
              } catch (error) {
                console.warn(`Error calling serialize method '${methodName}':`, error);
              }
            } else {
              console.warn(
                `@serialize on function '${methodName}' requires interpreter access to call`
              );
            }
            return method.toNative();
          } else {
            // If it's a field, return its value
            return method.toNative();
          }
        } else {
          // If the method/getter doesn't exist, log warning and fall back to default
          console.warn(`Serialize target '${methodName}' not found in struct '${this.structName}'`);
        }
      }
    }

    // Default behavior: return all fields, excluding functions unless they have @serialize
    const result: Record<string, any> = {};
    for (const [key, value] of this.fields) {
      try {
        // Skip functions unless they have @serialize annotation
        if (value.type === 'function') {
          const hasSerializeAnnotation = this.hasSerializeAnnotationForMember(key);
          if (hasSerializeAnnotation) {
            // If it's a function with @serialize, call it and include the result
            if (value instanceof UserFunctionValue) {
              if (this.interpreter) {
                try {
                  // Create a scope that includes the struct fields
                  const structScope = new Map<string, CanonValue>();
                  // Add all struct fields to the scope (except the function itself)
                  for (const [scopeKey, scopeValue] of this.fields) {
                    if (scopeKey !== key && scopeValue.type !== 'function') {
                      structScope.set(scopeKey, scopeValue);
                    }
                  }
                  // Call the function with the struct scope
                  const functionResult = this.interpreter.evaluateWithScope(
                    (value as UserFunctionValue).getBody(),
                    structScope
                  );
                  result[key] = functionResult.toNative();
                } catch (error) {
                  console.warn(`Error calling function '${key}':`, error);
                }
              } else {
                console.warn(`@serialize on function '${key}' requires interpreter access to call`);
              }
            }
          }
          // If it's a function without @serialize, skip it (don't include in output)
        } else {
          // If it's not a function, include it in the output
          result[key] = value.toNative();
        }
      } catch (error) {
        console.error(`Error converting field '${key}' in struct '${this.structName}':`, error);
        result[key] = `[Error: ${error}]`;
      }
    }
    return result;
  }

  toBool(): boolean {
    return this.fields.size > 0;
  }

  equals(other: CanonValue): boolean {
    if (!(other instanceof StructValue)) {
      return false;
    }
    if (this.structName !== other.structName) {
      return false;
    }
    if (this.fields.size !== other.fields.size) {
      return false;
    }
    for (const [key, value] of this.fields) {
      const otherValue = other.fields.get(key);
      if (!otherValue || !value.equals(otherValue)) {
        return false;
      }
    }
    return true;
  }

  clone(): CanonValue {
    const clonedFields = new Map<string, CanonValue>();
    for (const [key, value] of this.fields) {
      clonedFields.set(key, value.clone());
    }
    return new StructValue(this.structName, clonedFields);
  }

  // 構造体操作メソッド
  getStructName(): string {
    return this.structName;
  }

  getField(name: string): CanonValue | undefined {
    return this.fields.get(name);
  }

  /**
   * すべてのフィールドを取得
   */
  getFields(): Map<string, CanonValue> {
    return this.fields;
  }

  /**
   * フィールド値を設定
   */
  setField(name: string, value: CanonValue): void {
    this.fields.set(name, value);
  }

  /**
   * 構造体名を取得
   */
  getFieldNames(): string[] {
    return Array.from(this.fields.keys());
  }

  // 新しいフィールドを追加した構造体を返す
  withField(name: string, value: CanonValue): StructValue {
    const newFields = new Map(this.fields);
    newFields.set(name, value);
    return new StructValue(this.structName, newFields);
  }

  // フィールドを削除した構造体を返す
  withoutField(name: string): StructValue {
    const newFields = new Map(this.fields);
    newFields.delete(name);
    return new StructValue(this.structName, newFields);
  }

  setMemberAnnotations(memberName: string, annotations: any[]): void {
    this.memberAnnotations.set(memberName, annotations);
  }

  getMemberAnnotations(): Map<string, any[]> {
    return this.memberAnnotations;
  }

  hasSerializeAnnotationForMember(memberName: string): boolean {
    const annotations = this.memberAnnotations.get(memberName) || [];
    return annotations.some((annotation: any) => annotation.name?.name === 'serialize');
  }

  /**
   * Check if a field exists
   */
  hasField(name: string): boolean {
    return this.fields.has(name);
  }

  /**
   * Mark a field as requiring validation
   */
  setFieldRequiresValidation(name: string): void {
    this.fieldsRequiringValidation.add(name);
  }

  /**
   * Get fields that require validation
   */
  getFieldsRequiringValidation(): Set<string> {
    return this.fieldsRequiringValidation;
  }

  /**
   * Clear validation requirement for a field
   */
  clearFieldValidationRequirement(name: string): void {
    this.fieldsRequiringValidation.delete(name);
  }
}
