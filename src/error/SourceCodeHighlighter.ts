import { SourceLocation, SourceSpan } from './ParseError';

/**
 * Utilities for highlighting source code in error messages
 */
export class SourceCodeHighlighter {
  constructor(
    private readonly sourceCode: string,
    private readonly filename: string
  ) {}

  /**
   * Gets the lines of source code as an array
   */
  private getLines(): string[] {
    return this.sourceCode.split(/\r?\n/);
  }

  /**
   * Gets a specific line (1-indexed)
   */
  private getLine(lineNumber: number): string {
    const lines = this.getLines();
    return lines[lineNumber - 1] || '';
  }

  /**
   * Creates a line number prefix with proper padding
   */
  private createLinePrefix(lineNumber: number, maxLineNumber: number): string {
    const maxWidth = maxLineNumber.toString().length;
    const currentWidth = lineNumber.toString().length;
    const padding = ' '.repeat(maxWidth - currentWidth);
    return `${padding}${lineNumber}`;
  }

  /**
   * Creates an empty line prefix for continuation lines
   */
  private createEmptyPrefix(maxLineNumber: number): string {
    const maxWidth = maxLineNumber.toString().length;
    return ' '.repeat(maxWidth);
  }

  /**
   * Creates a highlight line with carets (^) or tildes (~)
   */
  private createHighlightLine(
    line: string,
    startColumn: number,
    endColumn?: number,
    highlightChar: string = '^'
  ): string {
    // Convert from 1-based column to 0-based index
    const start = Math.max(0, startColumn - 1);
    const end = endColumn !== undefined ? Math.min(line.length, endColumn - 1) : start + 1;

    let result = ' '.repeat(start);

    if (end > start) {
      // Multi-character highlight
      result += highlightChar.repeat(end - start);
    } else {
      // Single character highlight
      result += highlightChar;
    }

    return result;
  }

  /**
   * Generates highlighted source code for an error
   */
  generateHighlight(
    location: SourceLocation,
    span?: SourceSpan,
    contextLines: number = 2,
    isParenthesisError: boolean = false,
    errorCode?: string
  ): string[] {
    const lines = this.getLines();
    const targetLine = location.line;

    // Calculate the range of lines to show
    const startLine = Math.max(1, targetLine - contextLines);
    const endLine = Math.min(lines.length, targetLine + contextLines);
    const maxLineNumber = endLine;

    const result: string[] = [];

    // Add the location header
    result.push(` --> ${this.filename}:${location.line}:${location.column}`);

    // Only add empty line if we have context to show
    if (startLine < targetLine || targetLine < endLine) {
      const emptyPrefix = ' '.repeat(maxLineNumber.toString().length);
      result.push(`${emptyPrefix} |`);
    }

    // Add context lines before the error
    for (let i = startLine; i < targetLine; i++) {
      const linePrefix = this.createLinePrefix(i, maxLineNumber);
      result.push(`${linePrefix} | ${this.getLine(i)}`);
    }

    // Add the error line
    const errorLine = this.getLine(targetLine);
    const errorLinePrefix = this.createLinePrefix(targetLine, maxLineNumber);
    result.push(`${errorLinePrefix} | ${errorLine}`);

    // Add the highlight line
    const emptyPrefix = '  '; // Always use 2 spaces for empty lines

    // Check for parenthesis matching error
    if (isParenthesisError) {
      const openParenColumn = this.findMatchingOpenParen(errorLine, location.column);
      if (openParenColumn) {
        const parenHighlights = this.generateParenMatchHighlight(
          errorLine,
          location.column,
          openParenColumn,
          maxLineNumber
        );
        result.push(...parenHighlights);
      } else {
        // Fallback to regular highlight
        const highlightLine = this.createHighlightLine(errorLine, location.column, undefined, '^');
        result.push(`${emptyPrefix} | ${highlightLine}`);
      }
    } else {
      let highlightLine: string;

      if (span) {
        // Multi-line or multi-character span
        if (span.start.line === span.end.line) {
          // Single line span
          highlightLine = this.createHighlightLine(
            errorLine,
            span.start.column,
            span.end.column,
            '^'
          );
        } else {
          // Multi-line span (show start only)
          highlightLine = this.createHighlightLine(
            errorLine,
            span.start.column,
            errorLine.length,
            '^'
          );
        }
      } else {
        // Single character highlight
        highlightLine = this.createHighlightLine(errorLine, location.column, undefined, '^');

        // Add descriptive text for certain error types
        if (errorCode === 'E0001') {
          highlightLine += ' expected an expression here';
        }
      }

      result.push(`  | ${highlightLine}`);
    }

    // Add context lines after the error
    for (let i = targetLine + 1; i <= endLine; i++) {
      const linePrefix = this.createLinePrefix(i, maxLineNumber);
      result.push(`${linePrefix} | ${this.getLine(i)}`);
    }

    return result;
  }

  /**
   * Generates a simple single-line highlight
   */
  generateSimpleHighlight(location: SourceLocation): string[] {
    const line = this.getLine(location.line);
    const linePrefix = this.createLinePrefix(location.line, location.line);
    const emptyPrefix = this.createEmptyPrefix(location.line);
    const highlightLine = this.createHighlightLine(line, location.column);

    return [
      `--> ${this.filename}:${location.line}:${location.column}`,
      `${emptyPrefix} |`,
      `${linePrefix} | ${line}`,
      `${emptyPrefix} | ${highlightLine}`,
    ];
  }

  /**
   * Gets the text content at a specific span
   */
  getSpanText(span: SourceSpan): string {
    const lines = this.getLines();

    if (span.start.line === span.end.line) {
      // Single line
      const line = lines[span.start.line - 1] || '';
      return line.substring(span.start.column, span.end.column);
    } else {
      // Multi-line
      const result: string[] = [];

      // First line
      const firstLine = lines[span.start.line - 1] || '';
      result.push(firstLine.substring(span.start.column));

      // Middle lines
      for (let i = span.start.line; i < span.end.line - 1; i++) {
        result.push(lines[i] || '');
      }

      // Last line
      const lastLine = lines[span.end.line - 1] || '';
      result.push(lastLine.substring(0, span.end.column));

      return result.join('\n');
    }
  }

  /**
   * Finds the matching opening parenthesis for a given position
   */
  private findMatchingOpenParen(line: string, errorColumn: number): number | null {
    // Look backwards from the error position to find the opening parenthesis
    let parenCount = 0;
    for (let i = errorColumn - 2; i >= 0; i--) {
      // -2 because column is 1-based and we want to look before the error
      const char = line[i];
      if (char === '{' || char === '}') {
        // Skip braces for now
        continue;
      } else if (char === ')') {
        parenCount++;
      } else if (char === '(') {
        if (parenCount === 0) {
          return i + 1; // Return 1-based column
        }
        parenCount--;
      }
    }
    return null;
  }

  /**
   * Generates a multi-line highlight for parenthesis matching errors
   */
  private generateParenMatchHighlight(
    line: string,
    errorColumn: number,
    openParenColumn: number,
    _maxLineNumber: number
  ): string[] {
    const result: string[] = [];

    // Create the highlight line with both positions
    // Mark the opening parenthesis position directly (not after it)
    let highlightLine = ' '.repeat(openParenColumn - 1) + '-'; // Mark position of opening paren (0-based adjustment)
    const spacesToError = errorColumn - openParenColumn; // Distance from opening paren to error position

    // Preserve the actual spacing distance between opening paren and error
    // Add +1 to account for the dash character itself
    if (spacesToError > 0) {
      highlightLine += ' '.repeat(spacesToError) + '^'; // Keep actual spacing
    } else {
      highlightLine += '^'; // Adjacent positions
    }

    result.push(`  | ${highlightLine} expected ')' here`);
    result.push(`  | ${' '.repeat(openParenColumn - 1)}|`);
    result.push(`  | ${' '.repeat(openParenColumn - 1)}opening parenthesis found here`);

    return result;
  }
}
