"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const CanonLexer_1 = require("./src/generated/CanonLexer");
const CanonParser_1 = require("./src/generated/CanonParser");
const CanonErrorListener_1 = require("./src/error/CanonErrorListener");
const ErrorFormatter_1 = require("./src/error/ErrorFormatter");
// Test syntax-error-02
const input1 = `data1("arg1", "arg2" {
    datam1 = "value1"
}`;
console.log('=== syntax-error-02 actual output ===');
const inputStream1 = new antlr4ts_1.ANTLRInputStream(input1);
const lexer1 = new CanonLexer_1.CanonLexer(inputStream1);
const tokenStream1 = new antlr4ts_1.CommonTokenStream(lexer1);
const parser1 = new CanonParser_1.CanonParser(tokenStream1);
const errorListener1 = new CanonErrorListener_1.CanonErrorListener('input');
parser1.removeErrorListeners();
parser1.addErrorListener(errorListener1);
try {
    parser1.program();
}
catch (error) {
    // ignore
}
if (errorListener1.hasErrors()) {
    const errors = errorListener1.getErrors();
    const formatter = new ErrorFormatter_1.ErrorFormatter(input1, 'input', {
        ...ErrorFormatter_1.DEFAULT_FORMATTER_OPTIONS,
        showColors: false,
        contextLines: 1,
    });
    const formattedErrors = formatter.formatErrors([...errors.getSortedErrors()]);
    console.log(formattedErrors);
}
// Test syntax-error-04
const input2 = `data1(arg1, arg2      {
    datam1 = value1
}`;
console.log('=== syntax-error-04 actual output ===');
const inputStream2 = new antlr4ts_1.ANTLRInputStream(input2);
const lexer2 = new CanonLexer_1.CanonLexer(inputStream2);
const tokenStream2 = new antlr4ts_1.CommonTokenStream(lexer2);
const parser2 = new CanonParser_1.CanonParser(tokenStream2);
const errorListener2 = new CanonErrorListener_1.CanonErrorListener('input');
parser2.removeErrorListeners();
parser2.addErrorListener(errorListener2);
try {
    parser2.program();
}
catch (error) {
    // ignore
}
if (errorListener2.hasErrors()) {
    const errors = errorListener2.getErrors();
    const formatter = new ErrorFormatter_1.ErrorFormatter(input2, 'input', {
        ...ErrorFormatter_1.DEFAULT_FORMATTER_OPTIONS,
        showColors: false,
        contextLines: 1,
    });
    const formattedErrors = formatter.formatErrors([...errors.getSortedErrors()]);
    console.log(formattedErrors);
}
