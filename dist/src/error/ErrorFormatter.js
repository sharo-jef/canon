"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorFormatter = exports.DEFAULT_FORMATTER_OPTIONS = void 0;
const SourceCodeHighlighter_1 = require("./SourceCodeHighlighter");
const ErrorCode_1 = require("./ErrorCode");
/**
 * Default formatting options
 */
exports.DEFAULT_FORMATTER_OPTIONS = {
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
};
/**
 * Formats Canon parse errors in a Rust-like style
 */
class ErrorFormatter {
    constructor(sourceCode, filename, options = exports.DEFAULT_FORMATTER_OPTIONS) {
        this.sourceCode = sourceCode;
        this.filename = filename;
        this.options = options;
    }
    /**
     * Applies color to text if colors are enabled
     */
    colorize(text, color) {
        if (!this.options.showColors) {
            return text;
        }
        return `${Colors[color]}${text}${Colors.reset}`;
    }
    /**
     * Formats a single parse error
     */
    formatError(error) {
        const lines = [];
        // Error header: error[E0001]: description
        const header = `error[${error.code}]: ${(0, ErrorCode_1.getErrorDescription)(error.code)}`;
        lines.push(this.colorize(header, 'red'));
        // Source code highlight
        const highlighter = new SourceCodeHighlighter_1.SourceCodeHighlighter(this.sourceCode, this.filename);
        const isParenthesisError = error.code === ErrorCode_1.ErrorCode.E0002; // Missing closing parenthesis
        const sourceLines = highlighter.generateHighlight(error.location, error.span, this.options.contextLines, isParenthesisError, error.code // Pass the error code
        );
        sourceLines.forEach((line) => {
            var _a;
            if (line.startsWith('-->')) {
                lines.push(this.colorize(line, 'blue'));
            }
            else if (line.includes('|')) {
                if (line.includes('^')) {
                    // Highlight line with caret - color everything blue except the ^
                    const parts = line.split('|');
                    if (parts.length >= 2) {
                        const prefix = this.colorize(parts[0] + '|', 'blue');
                        const content = parts.slice(1).join('|');
                        // Split content by ^ to color separately
                        const beforeCaret = content.substring(0, content.indexOf('^'));
                        const caretPart = ((_a = content.match(/\^+/)) === null || _a === void 0 ? void 0 : _a[0]) || '^';
                        const afterCaret = content.substring(content.indexOf('^') + caretPart.length);
                        const coloredContent = this.colorize(beforeCaret, 'blue') +
                            this.colorize(caretPart, 'red') +
                            this.colorize(afterCaret, 'blue');
                        lines.push(prefix + coloredContent);
                    }
                    else {
                        lines.push(this.colorize(line, 'blue'));
                    }
                }
                else {
                    lines.push(this.colorize(line, 'blue'));
                }
            }
            else {
                lines.push(this.colorize(line, 'blue'));
            }
        });
        // Add empty line with proper alignment (always 2 spaces for empty lines)
        lines.push(this.colorize(`  |`, 'blue'));
        // Add custom error message if different from default
        if (error.message !== (0, ErrorCode_1.getErrorDescription)(error.code)) {
            lines.push(this.colorize(`  = note: ${error.message}`, 'cyan'));
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
     * Formats multiple parse errors
     */
    formatErrors(errors) {
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
    formatSimpleError(error) {
        const header = `error[${error.code}]: ${(0, ErrorCode_1.getErrorDescription)(error.code)}`;
        const location = ` --> ${this.filename}:${error.location.line}:${error.location.column}`;
        let result = this.colorize(header, 'red') + '\n';
        result += this.colorize(location, 'blue');
        if (error.message !== (0, ErrorCode_1.getErrorDescription)(error.code)) {
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
    formatErrorsPlain(errors) {
        const plainFormatter = new ErrorFormatter(this.sourceCode, this.filename, {
            ...this.options,
            showColors: false,
        });
        return plainFormatter.formatErrors(errors);
    }
}
exports.ErrorFormatter = ErrorFormatter;
