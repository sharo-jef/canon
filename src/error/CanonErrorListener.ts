import { ANTLRErrorListener, RecognitionException } from 'antlr4ts';
import { Token } from 'antlr4ts/Token';
import { Recognizer } from 'antlr4ts/Recognizer';
import { ParseError, ErrorCollection, SourceLocation } from './ParseError';
import { ErrorCode, getErrorDescription } from './ErrorCode';
import * as fs from 'fs';

/**
 * Custom error listener for Canon parser that collects errors in a structured way
 */
export class CanonErrorListener implements ANTLRErrorListener<Token> {
  private errorCollection = new ErrorCollection();

  constructor(private readonly filename: string) {}

  /**
   * Called when a syntax error occurs during parsing
   */
  syntaxError<T extends Token>(
    recognizer: Recognizer<T, any>,
    offendingSymbol: T | undefined,
    line: number,
    charPositionInLine: number,
    msg: string,
    _e: RecognitionException | undefined
  ): void {
    // Adjust location for better error reporting
    const adjustedLocation = this.adjustErrorLocation(
      { line, column: charPositionInLine },
      msg,
      offendingSymbol
    );

    const errorCode = this.determineErrorCode(msg, offendingSymbol);
    const customMessage = this.enhanceErrorMessage(msg, offendingSymbol, errorCode);

    let error = new ParseError(errorCode, customMessage, this.filename, adjustedLocation);

    // Add helpful notes based on the error type
    error = this.addContextualNotes(error, msg, offendingSymbol);

    this.errorCollection.add(error);
  }

  /**
   * Adjusts error location to point to a more meaningful position
   */
  private adjustErrorLocation(
    originalLocation: SourceLocation,
    msg: string,
    offendingSymbol?: Token
  ): SourceLocation {
    const lowerMsg = msg.toLowerCase();

    // For incomplete configuration calls, point to the identifier instead of EOF
    if (this.isIncompleteConfigurationCall(msg, offendingSymbol)) {
      const identifierLocation = this.findIdentifierLocation();
      if (identifierLocation) {
        return identifierLocation;
      }
    }

    // For "no viable alternative" errors with closing brace,
    // try to find the actual problem location (missing expression after =)
    if (lowerMsg.includes('no viable alternative') && offendingSymbol?.text === '}') {
      const adjustedLocation = this.findMissingExpressionLocation(originalLocation);
      if (adjustedLocation) {
        return adjustedLocation;
      }
    }

    // Also check for other patterns that might indicate missing expression
    if (
      lowerMsg.includes('expecting') &&
      (lowerMsg.includes('string_literal') ||
        lowerMsg.includes('integer_literal') ||
        lowerMsg.includes('identifier')) &&
      offendingSymbol?.text === '}'
    ) {
      const adjustedLocation = this.findMissingExpressionLocation(originalLocation);
      if (adjustedLocation) {
        return adjustedLocation;
      }
    }

    return originalLocation;
  }

  /**
   * Tries to find the location where an expression is missing after =
   */
  private findMissingExpressionLocation(braceLocation: SourceLocation): SourceLocation | null {
    try {
      // Read the source file to analyze
      const sourceContent = fs.readFileSync(this.filename, 'utf-8');
      const lines = sourceContent.split(/\r?\n/);

      // Look backwards from the brace location to find a line with assignment but missing value
      for (let i = braceLocation.line - 2; i >= 0; i--) {
        // -2 because lines are 1-indexed and we want to check previous lines
        const line = lines[i];

        if (line) {
          const equalIndex = line.lastIndexOf('=');
          if (equalIndex !== -1) {
            // Found an = sign, check what comes after it
            const afterEqual = line.substring(equalIndex + 1);
            const trimmedAfterEqual = afterEqual.trim();

            // Check if there's no value or only comment after =
            if (trimmedAfterEqual === '' || trimmedAfterEqual.startsWith('//')) {
              // Point right after the = sign
              const targetColumn = equalIndex + 2; // +1 for 0-based to 1-based, +1 to point after =

              return {
                line: i + 1,
                column: targetColumn,
              };
            }
          }
        }
      }
    } catch {
      // If we can't read the file or parse it, fall back to original location
    }

    return null;
  }

  /**
   * Finds the variable name in an assignment statement at the given location
   */
  private findVariableNameInAssignment(location: SourceLocation): string | null {
    try {
      const sourceContent = fs.readFileSync(this.filename, 'utf-8');
      const lines = sourceContent.split(/\r?\n/);

      // Look at the line with the error
      const errorLine = lines[location.line - 1]; // Convert to 0-based index
      if (!errorLine) return null;

      // Find the equals sign and extract the variable name before it
      const equalIndex = errorLine.indexOf('=');
      if (equalIndex === -1) return null;

      const beforeEqual = errorLine.substring(0, equalIndex).trim();
      // Extract the last word (variable name)
      const variableMatch = beforeEqual.match(/(\w+)\s*$/);
      return variableMatch ? variableMatch[1] : null;
    } catch {
      return null;
    }
  }

  /**
   * Determines the appropriate error code based on the error message and context
   */
  private determineErrorCode(msg: string, offendingSymbol?: Token): ErrorCode {
    const lowerMsg = msg.toLowerCase();

    // Check for EOF-related errors first
    if (offendingSymbol?.type === Token.EOF || lowerMsg.includes('<eof>')) {
      // Check if this is an incomplete configuration call
      if (this.isIncompleteConfigurationCall(msg, offendingSymbol)) {
        return ErrorCode.E0012; // Missing block after call expression
      }
      return ErrorCode.E0014; // Unexpected end of file
    }

    // Check for specific error patterns
    if (lowerMsg.includes('missing') && (lowerMsg.includes("')'") || lowerMsg.includes('rparen'))) {
      return ErrorCode.E0002; // Missing closing parenthesis
    }

    if (lowerMsg.includes('missing') && lowerMsg.includes("'}'")) {
      return ErrorCode.E0003; // Missing closing brace
    }

    if (lowerMsg.includes('missing') && lowerMsg.includes("']'")) {
      return ErrorCode.E0004; // Missing closing bracket
    }

    if (lowerMsg.includes('extraneous') || lowerMsg.includes('unexpected')) {
      return ErrorCode.E0005; // Unexpected token
    }

    // Check for missing parenthesis pattern: unexpected '{' in function call context
    if (
      (lowerMsg.includes('expecting') && lowerMsg.includes("')'")) ||
      (lowerMsg.includes('mismatched') && lowerMsg.includes("'{'") && offendingSymbol?.text === '{')
    ) {
      return ErrorCode.E0002; // Missing closing parenthesis
    }

    if (lowerMsg.includes('no viable alternative') || lowerMsg.includes('mismatched input')) {
      // Check if this looks like a missing closing parenthesis in function call
      if (
        offendingSymbol &&
        offendingSymbol.text === '{' &&
        lowerMsg.includes('at input') &&
        lowerMsg.includes('(')
      ) {
        // This pattern suggests a function call with missing closing parenthesis
        return ErrorCode.E0002;
      }

      // Check if this looks like a missing expression after assignment
      if (offendingSymbol && offendingSymbol.text === '}') {
        // Look for patterns that suggest missing expression
        return ErrorCode.E0001; // Missing expression after assignment
      }
      return ErrorCode.E0013; // Invalid token sequence
    }

    if (lowerMsg.includes('expecting')) {
      // Parse what was expected
      if (
        lowerMsg.includes('string_literal') ||
        lowerMsg.includes('integer_literal') ||
        lowerMsg.includes('identifier') ||
        lowerMsg.includes('expression')
      ) {
        return ErrorCode.E0001; // Missing expression
      }
      return ErrorCode.E0005; // Unexpected token
    }

    if (lowerMsg.includes('mismatched')) {
      return ErrorCode.E0005; // Unexpected token
    }

    // Default to generic syntax error
    return ErrorCode.E0005;
  }

  /**
   * Enhances the error message with more user-friendly text
   */
  private enhanceErrorMessage(msg: string, offendingSymbol?: Token, errorCode?: ErrorCode): string {
    const lowerMsg = msg.toLowerCase();

    // For some common errors, provide better messages
    switch (errorCode) {
      case ErrorCode.E0001:
        if (lowerMsg.includes('no viable alternative') && offendingSymbol?.text === '}') {
          return "expected expression after '='";
        }
        return "expected expression after '='";
      case ErrorCode.E0002:
        // For parenthesis errors, use the standard description from ErrorCode
        return getErrorDescription(ErrorCode.E0002);
      case ErrorCode.E0003:
        return "expected '}' to close brace";
      case ErrorCode.E0004:
        return "expected ']' to close bracket";
      case ErrorCode.E0006:
        return 'incomplete configuration call';
      default: {
        // Clean up ANTLR's default messages
        const cleanedMsg = msg
          .replace(/^line \d+:\d+ /, '') // Remove line prefix
          .replace(/at '<EOF>'/, 'at end of file')
          .replace(/token recognition error at: '([^']*)'/, "unexpected character '$1'");

        // For "no viable alternative" errors, provide more helpful message
        if (lowerMsg.includes('no viable alternative')) {
          if (offendingSymbol?.text === '}') {
            return 'unexpected closing brace';
          }
          return 'unexpected token sequence';
        }

        return cleanedMsg;
      }
    }
  }

  /**
   * Adds contextual notes and help messages based on the error
   */
  private addContextualNotes(error: ParseError, msg: string, offendingSymbol?: Token): ParseError {
    const lowerMsg = msg.toLowerCase();

    switch (error.code) {
      case ErrorCode.E0001: {
        const variableName = this.findVariableNameInAssignment(error.location);
        const helpExample = variableName || 'some_variable';

        if (lowerMsg.includes('no viable alternative') && offendingSymbol?.text === '}') {
          return error
            .withNote('assignment expressions require a value on the right side')
            .withNote(`try providing a value like: ${helpExample} = "some_value"`, 'help');
        }
        return error
          .withNote('assignment expressions require a value on the right side')
          .withNote(`try providing a value like: ${helpExample} = "some_value"`, 'help');
      }

      case ErrorCode.E0002:
        if (lowerMsg.includes('no viable alternative') && offendingSymbol?.text === '{') {
          return error
            .withNote('parentheses must be properly matched in function calls')
            .withNote("add the missing ')' before the opening brace '{'", 'help');
        }
        return error
          .withNote('parentheses must be properly matched in function calls')
          .withNote("add the missing ')' before the opening brace '{'", 'help');

      case ErrorCode.E0003:
        return error
          .withNote('braces must be properly matched in block statements')
          .withNote("add the missing '}' at the end of the block", 'help');

      case ErrorCode.E0004:
        return error
          .withNote('brackets must be properly matched in array/index expressions')
          .withNote("add the missing ']' to close the bracket", 'help');

      case ErrorCode.E0005:
        if (offendingSymbol) {
          const tokenText = offendingSymbol.text;
          if (tokenText === '<EOF>') {
            return error
              .withNote('the file ended unexpectedly')
              .withNote(
                "check if you're missing closing braces, parentheses, or other delimiters",
                'help'
              );
          } else if (tokenText === '}') {
            if (lowerMsg.includes('no viable alternative')) {
              return error
                .withNote('found closing brace in unexpected location')
                .withNote("check if you're missing a value in an assignment above", 'help');
            }
            return error
              .withNote(`found unexpected closing brace '${tokenText}'`)
              .withNote('check the syntax around this location', 'help');
          } else {
            return error
              .withNote(`found unexpected token '${tokenText}'`)
              .withNote('check the syntax around this location', 'help');
          }
        }
        break;

      case ErrorCode.E0006: {
        const identifierName = this.getIncompleteIdentifierName();
        return error
          .withNote('configuration calls require either parentheses or a body')
          .withNote(
            `try adding parentheses: ${identifierName}() or a body: ${identifierName} {}`,
            'help'
          );
      }
    }

    return error;
  }

  /**
   * Checks if the offending symbol appears after an assignment operator
   */
  private isAfterAssignment(_symbol: Token): boolean {
    // This is a simplified check - in a real implementation,
    // you might want to look at the token stream to find the previous tokens
    return false; // Placeholder implementation
  }

  /**
   * Checks if this is an incomplete configuration call (identifier followed by EOF)
   */
  private isIncompleteConfigurationCall(msg: string, _offendingSymbol?: Token): boolean {
    try {
      // Check if the error is related to unexpected token at EOF
      const lowerMsg = msg.toLowerCase();
      if (!lowerMsg.includes('unexpected') && !lowerMsg.includes('extraneous')) {
        return false;
      }

      // Read the source file to check what comes before EOF
      const sourceContent = fs.readFileSync(this.filename, 'utf-8');
      const lines = sourceContent.split(/\r?\n/);

      // Look for the last non-empty line
      for (let i = lines.length - 1; i >= 0; i--) {
        const line = lines[i].trim();
        if (line === '') continue; // Skip empty lines

        // Check if the line is just an identifier (no parentheses or braces)
        const identifierMatch = line.match(/^([a-zA-Z_][a-zA-Z0-9_]*)$/);
        if (identifierMatch) {
          return true; // This is likely an incomplete configuration call
        }
        break; // Stop at the first non-empty line
      }

      return false;
    } catch {
      return false;
    }
  }

  /**
   * Finds the location of the identifier in an incomplete configuration call
   */
  private findIdentifierLocation(): SourceLocation | null {
    try {
      const sourceContent = fs.readFileSync(this.filename, 'utf-8');
      const lines = sourceContent.split(/\r?\n/);

      // Look for the last non-empty line with just an identifier
      for (let i = lines.length - 1; i >= 0; i--) {
        const line = lines[i].trim();
        if (line === '') continue; // Skip empty lines

        // Check if the line is just an identifier
        const identifierMatch = line.match(/^([a-zA-Z_][a-zA-Z0-9_]*)$/);
        if (identifierMatch) {
          const originalLine = lines[i];
          const identifierStart = originalLine.indexOf(identifierMatch[1]);
          return {
            line: i + 1, // Convert to 1-based
            column: identifierStart + 1, // Convert to 1-based
          };
        }
        break; // Stop at the first non-empty line
      }

      return null;
    } catch {
      return null;
    }
  }

  /**
   * Gets the identifier name from an incomplete configuration call
   */
  private getIncompleteIdentifierName(): string {
    try {
      const sourceContent = fs.readFileSync(this.filename, 'utf-8');
      const lines = sourceContent.split(/\r?\n/);

      // Look for the last non-empty line with just an identifier
      for (let i = lines.length - 1; i >= 0; i--) {
        const line = lines[i].trim();
        if (line === '') continue; // Skip empty lines

        // Check if the line is just an identifier
        const identifierMatch = line.match(/^([a-zA-Z_][a-zA-Z0-9_]*)$/);
        if (identifierMatch) {
          return identifierMatch[1];
        }
        break; // Stop at the first non-empty line
      }

      return 'data1'; // Default fallback
    } catch {
      return 'data1'; // Default fallback
    }
  }

  /**
   * Gets all collected errors
   */
  getErrors(): ErrorCollection {
    return this.errorCollection;
  }

  /**
   * Clears all collected errors
   */
  clearErrors(): void {
    this.errorCollection.clear();
  }

  /**
   * Checks if any errors were collected
   */
  hasErrors(): boolean {
    return this.errorCollection.hasErrors();
  }
}
