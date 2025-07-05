// Error handling exports for Canon
export { ErrorCode, ERROR_DESCRIPTIONS, getErrorDescription } from './ErrorCode';
export { 
    ParseError, 
    ErrorCollection, 
    SourceLocation, 
    SourceSpan, 
    ErrorNote 
} from './ParseError';
export { SourceCodeHighlighter } from './SourceCodeHighlighter';
export { 
    ErrorFormatter, 
    ErrorFormatterOptions, 
    DEFAULT_FORMATTER_OPTIONS 
} from './ErrorFormatter';
export { CanonErrorListener } from './CanonErrorListener';
