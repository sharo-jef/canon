import { ParseError } from './ParseError';
import { SourceCodeHighlighter } from './SourceCodeHighlighter';
import {
  ErrorCode,
  getErrorDescription,
  getErrorHelpMessage,
  getErrorSuggestion,
} from './ErrorCode';

/**
 * Formatting options for error messages
 */
export interface ErrorFormatterOptions {
  showColors: boolean;
  contextLines: number;
  showHelp: boolean;
  showNotes: boolean;
}

/**
 * Default formatting options
 */
export const DEFAULT_FORMATTER_OPTIONS: ErrorFormatterOptions = {
  showColors: true,
  contextLines: 2,
  showHelp: true,
  showNotes: true,
};

/**
 * ANSI color codes for terminal output
 */
const Colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
} as const;

/**
 * Formats Canon parse errors in a Rust-like style
 */
export class ErrorFormatter {
  constructor(
    private readonly sourceCode: string,
    private readonly filename: string,
    private readonly options: ErrorFormatterOptions = DEFAULT_FORMATTER_OPTIONS
  ) {}

  /**
   * Applies color to text if colors are enabled
   */
  private colorize(text: string, color: keyof typeof Colors): string {
    if (!this.options.showColors) {
      return text;
    }
    return `${Colors[color]}${text}${Colors.reset}`;
  }

  /**
   * Formats a single parse error
   */
  formatError(error: ParseError): string {
    const lines: string[] = [];

    // Error header: error[E0001]: description
    const header = `error[${error.code}]: ${getErrorDescription(error.code)}`;
    lines.push(this.colorize(header, 'red'));

    // Source code highlight
    const highlighter = new SourceCodeHighlighter(this.sourceCode, this.filename);
    const isParenthesisError = error.code === ErrorCode.E0002; // Missing closing parenthesis
    const sourceLines = highlighter.generateHighlight(
      error.location,
      error.span,
      this.options.contextLines,
      isParenthesisError,
      error.code // Pass the error code
    );

    sourceLines.forEach((line) => {
      if (line.startsWith(' --> ')) {
        lines.push(this.colorize(line, 'blue'));
      } else if (line.includes(' | ')) {
        if (line.includes('^') || line.includes('~')) {
          // Highlight line with caret or tilde - color everything blue except the ^ or ~
          const parts = line.split(' | ');
          if (parts.length >= 2) {
            const prefix = this.colorize(parts[0] + ' |', 'blue');
            const content = ' ' + parts.slice(1).join(' | ');

            // Find caret/tilde positions and color them red
            const caretMatch = content.match(/[\^~]+/);
            if (caretMatch) {
              const caretStart = content.indexOf(caretMatch[0]);
              const beforeCaret = content.substring(0, caretStart);
              const caretPart = caretMatch[0];
              const afterCaret = content.substring(caretStart + caretPart.length);

              const coloredContent =
                this.colorize(beforeCaret, 'blue') +
                this.colorize(caretPart, 'red') +
                this.colorize(afterCaret, 'blue');

              lines.push(prefix + coloredContent);
            } else {
              lines.push(this.colorize(line, 'blue'));
            }
          } else {
            lines.push(this.colorize(line, 'blue'));
          }
        } else {
          lines.push(this.colorize(line, 'blue'));
        }
      } else {
        lines.push(this.colorize(line, 'blue'));
      }
    });

    // Add empty line with proper alignment
    if (sourceLines.length > 0) {
      const maxLineNumberWidth = this.getMaxLineNumberWidth(
        error.location.line,
        this.options.contextLines
      );
      const emptyPrefix = ' '.repeat(maxLineNumberWidth);
      lines.push(this.colorize(`${emptyPrefix} |`, 'blue'));
    }

    // Add custom error message if different from default
    if (error.message !== getErrorDescription(error.code)) {
      lines.push(this.colorize(`  = note: ${error.message}`, 'cyan'));
    }

    // Add user-friendly help message (avoid duplication)
    if (this.options.showHelp) {
      const helpMessage = getErrorHelpMessage(error.code);
      const suggestion = getErrorSuggestion(error.code);

      // Only add help message if it's different from the custom message
      if (helpMessage !== 'no additional help available' && error.message !== helpMessage) {
        lines.push(this.colorize(`  = note: ${helpMessage}`, 'cyan'));
      }

      if (suggestion !== 'no suggestions available') {
        lines.push(this.colorize(`  = help: ${suggestion}`, 'cyan'));
      }
    }

    // Add notes and help messages
    if (this.options.showNotes) {
      error.notes.forEach((note) => {
        const prefix = note.type === 'help' ? 'help' : note.type;
        const color = note.type === 'help' ? 'cyan' : note.type === 'warning' ? 'yellow' : 'cyan';
        lines.push(this.colorize(`  = ${prefix}: ${note.message}`, color));
      });
    }

    // Add related errors
    error.relatedErrors.forEach((relatedError) => {
      lines.push('');
      lines.push(this.formatError(relatedError));
    });

    return lines.join('\n');
  }

  /**
   * Gets the maximum line number width for proper alignment
   */
  private getMaxLineNumberWidth(errorLine: number, contextLines: number): number {
    const maxLine = errorLine + contextLines;
    return maxLine.toString().length;
  }

  /**
   * Formats multiple parse errors
   */
  formatErrors(errors: ParseError[]): string {
    if (errors.length === 0) {
      return '';
    }

    const formattedErrors = errors.map((error) => this.formatError(error));
    let result = formattedErrors.join('\n\n');

    // Add summary
    if (errors.length > 1) {
      result += '\n\n';
      const summary = `error: aborting due to ${errors.length} previous error${errors.length > 1 ? 's' : ''}`;
      result += this.colorize(summary, 'red');
    }

    return result;
  }

  /**
   * Creates a simple error message without source highlighting
   */
  formatSimpleError(error: ParseError): string {
    const header = `error[${error.code}]: ${getErrorDescription(error.code)}`;
    const location = ` --> ${this.filename}:${error.location.line}:${error.location.column}`;

    let result = this.colorize(header, 'red') + '\n';
    result += this.colorize(location, 'blue');

    if (error.message !== getErrorDescription(error.code)) {
      result += '\n' + this.colorize(` = note: ${error.message}`, 'cyan');
    }

    error.notes.forEach((note) => {
      const prefix = note.type === 'help' ? 'help' : note.type;
      const color = note.type === 'help' ? 'cyan' : note.type === 'warning' ? 'yellow' : 'cyan';
      result += '\n' + this.colorize(` = ${prefix}: ${note.message}`, color);
    });

    return result;
  }

  /**
   * Formats errors for plain text output (no colors)
   */
  formatErrorsPlain(errors: ParseError[]): string {
    const plainFormatter = new ErrorFormatter(this.sourceCode, this.filename, {
      ...this.options,
      showColors: false,
    });
    return plainFormatter.formatErrors(errors);
  }
}
