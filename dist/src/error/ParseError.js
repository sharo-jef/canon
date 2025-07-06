"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCollection = exports.ParseError = void 0;
/**
 * Represents a compilation error in Canon
 */
class ParseError {
    constructor(code, message, filename, location, span, notes = [], relatedErrors = []) {
        this.code = code;
        this.message = message;
        this.filename = filename;
        this.location = location;
        this.span = span;
        this.notes = notes;
        this.relatedErrors = relatedErrors;
    }
    /**
     * Creates a new error with additional notes
     */
    withNote(message, type = 'note') {
        return new ParseError(this.code, this.message, this.filename, this.location, this.span, [...this.notes, { message, type }], this.relatedErrors);
    }
    /**
     * Creates a new error with related errors
     */
    withRelatedError(error) {
        return new ParseError(this.code, this.message, this.filename, this.location, this.span, this.notes, [...this.relatedErrors, error]);
    }
    /**
     * Creates a new error with a source span
     */
    withSpan(span) {
        return new ParseError(this.code, this.message, this.filename, this.location, span, this.notes, this.relatedErrors);
    }
}
exports.ParseError = ParseError;
/**
 * Collection of parse errors
 */
class ErrorCollection {
    constructor() {
        this.errors = [];
    }
    add(error) {
        this.errors.push(error);
    }
    addAll(errors) {
        this.errors.push(...errors);
    }
    getErrors() {
        return this.errors;
    }
    hasErrors() {
        return this.errors.length > 0;
    }
    clear() {
        this.errors = [];
    }
    /**
     * Gets errors sorted by location (line, then column)
     */
    getSortedErrors() {
        return [...this.errors].sort((a, b) => {
            if (a.location.line !== b.location.line) {
                return a.location.line - b.location.line;
            }
            return a.location.column - b.location.column;
        });
    }
}
exports.ErrorCollection = ErrorCollection;
