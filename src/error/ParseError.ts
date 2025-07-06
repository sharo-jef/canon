import { ErrorCode } from './ErrorCode';

/**
 * Represents a location in source code
 */
export interface SourceLocation {
  line: number;
  column: number;
  length?: number;
}

/**
 * Represents a span of source code
 */
export interface SourceSpan {
  start: SourceLocation;
  end: SourceLocation;
}

/**
 * Additional information for error messages
 */
export interface ErrorNote {
  message: string;
  type: 'note' | 'help' | 'warning';
}

/**
 * Represents a compilation error in Canon
 */
export class ParseError {
  constructor(
    public readonly code: ErrorCode,
    public readonly message: string,
    public readonly filename: string,
    public readonly location: SourceLocation,
    public readonly span?: SourceSpan,
    public readonly notes: ErrorNote[] = [],
    public readonly relatedErrors: ParseError[] = []
  ) {}

  /**
   * Creates a new error with additional notes
   */
  withNote(message: string, type: 'note' | 'help' | 'warning' = 'note'): ParseError {
    return new ParseError(
      this.code,
      this.message,
      this.filename,
      this.location,
      this.span,
      [...this.notes, { message, type }],
      this.relatedErrors
    );
  }

  /**
   * Creates a new error with related errors
   */
  withRelatedError(error: ParseError): ParseError {
    return new ParseError(
      this.code,
      this.message,
      this.filename,
      this.location,
      this.span,
      this.notes,
      [...this.relatedErrors, error]
    );
  }

  /**
   * Creates a new error with a source span
   */
  withSpan(span: SourceSpan): ParseError {
    return new ParseError(
      this.code,
      this.message,
      this.filename,
      this.location,
      span,
      this.notes,
      this.relatedErrors
    );
  }
}

/**
 * Collection of parse errors
 */
export class ErrorCollection {
  private errors: ParseError[] = [];

  add(error: ParseError): void {
    this.errors.push(error);
  }

  addAll(errors: ParseError[]): void {
    this.errors.push(...errors);
  }

  getErrors(): readonly ParseError[] {
    return this.errors;
  }

  hasErrors(): boolean {
    return this.errors.length > 0;
  }

  clear(): void {
    this.errors = [];
  }

  /**
   * Gets errors sorted by location (line, then column)
   */
  getSortedErrors(): readonly ParseError[] {
    return [...this.errors].sort((a, b) => {
      if (a.location.line !== b.location.line) {
        return a.location.line - b.location.line;
      }
      return a.location.column - b.location.column;
    });
  }
}
