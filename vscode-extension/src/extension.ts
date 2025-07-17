import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { CanonLanguageServer, CompletionItem, ErrorInfo } from './canonLanguageServer';

let canonLanguageServer: CanonLanguageServer;

export function activate(context: vscode.ExtensionContext) {
  console.log('Canon Language Support is now active!');

  // Initialize the language server
  canonLanguageServer = new CanonLanguageServer();

  // Register commands
  const parseFileCommand = vscode.commands.registerCommand('canon.parseFile', parseFile);
  const validateFileCommand = vscode.commands.registerCommand('canon.validateFile', validateFile);
  const formatFileCommand = vscode.commands.registerCommand('canon.formatFile', formatFile);

  // Register providers
  const documentFormattingProvider = vscode.languages.registerDocumentFormattingEditProvider(
    'canon',
    new CanonFormattingProvider()
  );

  const hoverProvider = vscode.languages.registerHoverProvider('canon', new CanonHoverProvider());

  const completionProvider = vscode.languages.registerCompletionItemProvider(
    'canon',
    new CanonCompletionProvider(),
    '.', // Trigger completion on dot
    ':', // Trigger completion on colon
    '@' // Trigger completion on @
  );

  const diagnosticsCollection = vscode.languages.createDiagnosticCollection('canon');

  // Auto-validate on save
  const onDidSaveDocument = vscode.workspace.onDidSaveTextDocument((document) => {
    if (document.languageId === 'canon') {
      validateDocument(document, diagnosticsCollection);
    }
  });

  // Auto-validate on open
  const onDidOpenDocument = vscode.workspace.onDidOpenTextDocument((document) => {
    if (document.languageId === 'canon') {
      validateDocument(document, diagnosticsCollection);
    }
  });

  // Auto-validate on change (with debouncing)
  let timeout: NodeJS.Timeout | undefined;
  const onDidChangeDocument = vscode.workspace.onDidChangeTextDocument((event) => {
    if (event.document.languageId === 'canon') {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        validateDocument(event.document, diagnosticsCollection);
      }, 500); // 500ms debounce
    }
  });

  context.subscriptions.push(
    parseFileCommand,
    validateFileCommand,
    formatFileCommand,
    documentFormattingProvider,
    hoverProvider,
    completionProvider,
    diagnosticsCollection,
    onDidSaveDocument,
    onDidOpenDocument,
    onDidChangeDocument
  );

  // Show welcome message
  vscode.window.showInformationMessage('Canon Language Support is ready!');
}

export function deactivate() {
  // Cleanup if needed
}

async function parseFile() {
  const editor = vscode.window.activeTextEditor;
  if (!editor || editor.document.languageId !== 'canon') {
    vscode.window.showWarningMessage('Please open a Canon file (.canon) to parse');
    return;
  }

  try {
    const result = await canonLanguageServer.parseDocument(editor.document);
    if (result.success) {
      vscode.window.showInformationMessage('✅ Canon file parsed successfully!');

      // Show AST in output channel
      const outputChannel = vscode.window.createOutputChannel('Canon Parser');
      outputChannel.clear();
      outputChannel.appendLine('Canon AST:');
      outputChannel.appendLine(JSON.stringify(result.ast, null, 2));
      outputChannel.show();
    } else {
      vscode.window.showErrorMessage(
        `❌ Parse failed: ${result.errors.map((e) => e.message).join(', ')}`
      );
    }
  } catch (error) {
    vscode.window.showErrorMessage(`Parse error: ${error}`);
  }
}

async function validateFile() {
  const editor = vscode.window.activeTextEditor;
  if (!editor || editor.document.languageId !== 'canon') {
    vscode.window.showWarningMessage('Please open a Canon file (.canon) to validate');
    return;
  }

  try {
    const result = await canonLanguageServer.validateDocument(editor.document);
    if (result.isValid) {
      vscode.window.showInformationMessage('✅ Canon file is valid!');
    } else {
      vscode.window.showErrorMessage(
        `❌ Validation failed: ${result.errors.map((e) => e.message).join(', ')}`
      );
    }
  } catch (error) {
    vscode.window.showErrorMessage(`Validation error: ${error}`);
  }
}

async function formatFile() {
  const editor = vscode.window.activeTextEditor;
  if (!editor || editor.document.languageId !== 'canon') {
    vscode.window.showWarningMessage('Please open a Canon file (.canon) to format');
    return;
  }

  try {
    const formatted = await canonLanguageServer.formatDocument(editor.document);
    if (formatted) {
      const edit = new vscode.WorkspaceEdit();
      const fullRange = new vscode.Range(
        editor.document.positionAt(0),
        editor.document.positionAt(editor.document.getText().length)
      );
      edit.replace(editor.document.uri, fullRange, formatted);
      await vscode.workspace.applyEdit(edit);
      vscode.window.showInformationMessage('✅ Canon file formatted successfully!');
    }
  } catch (error) {
    vscode.window.showErrorMessage(`Format error: ${error}`);
  }
}

async function validateDocument(
  document: vscode.TextDocument,
  diagnosticsCollection: vscode.DiagnosticCollection
) {
  if (!vscode.workspace.getConfiguration('canon').get('enableValidation', true)) {
    return;
  }

  try {
    const result = await canonLanguageServer.validateDocument(document);
    const diagnostics: vscode.Diagnostic[] = [];

    if (!result.isValid) {
      result.errors.forEach((error: ErrorInfo) => {
        // Convert structured error to VSCode Diagnostic
        const line = Math.max(0, error.location.line - 1); // Convert to 0-based
        const col = Math.max(0, error.location.column - 1); // Convert to 0-based

        // Ensure line is within document bounds
        const safeLine = Math.min(line, document.lineCount - 1);
        const lineLength = document.lineAt(safeLine).text.length;
        const safeCol = Math.min(col, lineLength);

        const range = new vscode.Range(
          new vscode.Position(safeLine, safeCol),
          new vscode.Position(safeLine, Math.max(safeCol + 1, lineLength))
        );

        const diagnostic = new vscode.Diagnostic(
          range,
          error.message,
          vscode.DiagnosticSeverity.Error
        );
        diagnostic.source = 'canon';
        diagnostic.code = error.code;
        diagnostics.push(diagnostic);
      });
    }

    diagnosticsCollection.set(document.uri, diagnostics);
    console.log(
      `Validation complete for ${document.uri.toString()}: ${diagnostics.length} errors found`
    );
  } catch (error) {
    console.error('Validation error:', error);
  }
}

class CanonFormattingProvider implements vscode.DocumentFormattingEditProvider {
  async provideDocumentFormattingEdits(
    document: vscode.TextDocument,
    options: vscode.FormattingOptions,
    token: vscode.CancellationToken
  ): Promise<vscode.TextEdit[]> {
    try {
      const formatted = await canonLanguageServer.formatDocument(document);
      if (formatted && formatted !== document.getText()) {
        const fullRange = new vscode.Range(
          document.positionAt(0),
          document.positionAt(document.getText().length)
        );
        return [vscode.TextEdit.replace(fullRange, formatted)];
      }
    } catch (error) {
      console.error('Formatting error:', error);
    }
    return [];
  }
}

class CanonHoverProvider implements vscode.HoverProvider {
  async provideHover(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken
  ): Promise<vscode.Hover | undefined> {
    if (!vscode.workspace.getConfiguration('canon').get('enableHover', true)) {
      return undefined;
    }

    try {
      const hoverInfo = await canonLanguageServer.getHoverInfo(document, position);
      if (hoverInfo) {
        return hoverInfo;
      }
    } catch (error) {
      console.error('Hover error:', error);
    }
    return undefined;
  }
}

class CanonCompletionProvider implements vscode.CompletionItemProvider {
  async provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken,
    context: vscode.CompletionContext
  ): Promise<vscode.CompletionItem[]> {
    if (!vscode.workspace.getConfiguration('canon').get('enableCompletion', true)) {
      return [];
    }

    try {
      const completions = await canonLanguageServer.getCompletionItems(document, position);
      return completions.map((completion: CompletionItem) => {
        const item = new vscode.CompletionItem(completion.label, completion.kind);
        item.detail = completion.detail;
        item.documentation = completion.documentation;
        item.insertText = completion.insertText;
        return item;
      });
    } catch (error) {
      console.error('Completion error:', error);
    }
    return [];
  }
}
