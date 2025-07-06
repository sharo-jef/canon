"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERROR_DESCRIPTIONS = exports.ErrorCode = void 0;
exports.getErrorDescription = getErrorDescription;
/**
 * Canon error codes following Rust's error code style (E0001, E0002, etc.)
 */
var ErrorCode;
(function (ErrorCode) {
    // Syntax Errors (E0001-E0099)
    ErrorCode["E0001"] = "E0001";
    ErrorCode["E0002"] = "E0002";
    ErrorCode["E0003"] = "E0003";
    ErrorCode["E0004"] = "E0004";
    ErrorCode["E0005"] = "E0005";
    ErrorCode["E0006"] = "E0006";
    ErrorCode["E0007"] = "E0007";
    ErrorCode["E0008"] = "E0008";
    ErrorCode["E0009"] = "E0009";
    ErrorCode["E0010"] = "E0010";
    ErrorCode["E0011"] = "E0011";
    // Type Errors (E0100-E0199)
    ErrorCode["E0100"] = "E0100";
    ErrorCode["E0101"] = "E0101";
    ErrorCode["E0102"] = "E0102";
    ErrorCode["E0103"] = "E0103";
    ErrorCode["E0104"] = "E0104";
    ErrorCode["E0105"] = "E0105";
    ErrorCode["E0106"] = "E0106";
    ErrorCode["E0107"] = "E0107";
    ErrorCode["E0108"] = "E0108";
    // Schema Errors (E0200-E0299)
    ErrorCode["E0200"] = "E0200";
    ErrorCode["E0201"] = "E0201";
    ErrorCode["E0202"] = "E0202";
    ErrorCode["E0203"] = "E0203";
    ErrorCode["E0204"] = "E0204";
    // Configuration Errors (E0300-E0399)
    ErrorCode["E0300"] = "E0300";
    ErrorCode["E0301"] = "E0301";
    ErrorCode["E0302"] = "E0302";
    ErrorCode["E0303"] = "E0303";
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
/**
 * Maps error codes to human-readable descriptions
 */
exports.ERROR_DESCRIPTIONS = {
    [ErrorCode.E0001]: "expected expression after '='",
    [ErrorCode.E0002]: 'missing closing parenthesis',
    [ErrorCode.E0003]: 'missing closing brace',
    [ErrorCode.E0004]: 'missing closing bracket',
    [ErrorCode.E0005]: 'unexpected token',
    [ErrorCode.E0006]: 'incomplete configuration call',
    [ErrorCode.E0007]: 'invalid identifier',
    [ErrorCode.E0008]: 'invalid literal',
    [ErrorCode.E0009]: 'invalid operator',
    [ErrorCode.E0010]: 'missing semicolon',
    [ErrorCode.E0011]: 'invalid assignment target',
    [ErrorCode.E0100]: 'type mismatch',
    [ErrorCode.E0101]: 'undefined variable',
    [ErrorCode.E0102]: 'undefined function',
    [ErrorCode.E0103]: 'invalid argument count',
    [ErrorCode.E0104]: 'invalid argument type',
    [ErrorCode.E0105]: 'invalid return type',
    [ErrorCode.E0106]: 'missing required property',
    [ErrorCode.E0107]: 'property does not exist',
    [ErrorCode.E0108]: 'cannot assign to immutable variable',
    [ErrorCode.E0200]: 'schema not found',
    [ErrorCode.E0201]: 'invalid schema format',
    [ErrorCode.E0202]: 'schema validation failed',
    [ErrorCode.E0203]: 'missing schema directive',
    [ErrorCode.E0204]: 'circular schema dependency',
    [ErrorCode.E0300]: 'invalid configuration structure',
    [ErrorCode.E0301]: 'missing required configuration',
    [ErrorCode.E0302]: 'invalid configuration value',
    [ErrorCode.E0303]: 'configuration constraint violation',
};
/**
 * Gets the description for an error code
 */
function getErrorDescription(code) {
    return exports.ERROR_DESCRIPTIONS[code] || 'unknown error';
}
