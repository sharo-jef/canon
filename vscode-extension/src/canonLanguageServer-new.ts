import * as vscode from 'vscode';

export interface ParseResult {
  success: boolean;
  ast?: any;
  errors: string[];
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface CompletionItem {
  label: string;
  kind: vscode.CompletionItemKind;
  detail?: string;
  documentation?: string;
  insertText?: string;
}

export class CanonLanguageServer {
  constructor() {
    console.log('Canon Language Server initialized with mock implementation');
  }

  async parseDocument(document: vscode.TextDocument): Promise<ParseResult> {
    try {
      const content = document.getText();
      console.log(`Parsing Canon file: ${document.uri.toString()}`);

      // Mock implementation - always return success
      return {
        success: true,
        errors: [],
        ast: { type: 'Program', statements: [] },
      };
    } catch (error: any) {
      return {
        success: false,
        errors: [error.message || 'Unknown parsing error'],
      };
    }
  }

  async validateDocument(document: vscode.TextDocument): Promise<ValidationResult> {
    try {
      const parseResult = await this.parseDocument(document);
      return {
        isValid: parseResult.success,
        errors: parseResult.errors,
      };
    } catch (error: any) {
      return {
        isValid: false,
        errors: [error.message || 'Unknown validation error'],
      };
    }
  }

  async formatDocument(document: vscode.TextDocument): Promise<string | undefined> {
    try {
      // Basic formatting: fix indentation
      const content = document.getText();
      const lines = content.split('\n');
      let indent = 0;
      const formatted: string[] = [];

      for (const line of lines) {
        const trimmed = line.trim();

        if (trimmed.endsWith('{')) {
          formatted.push('  '.repeat(indent) + trimmed);
          indent++;
        } else if (trimmed.startsWith('}')) {
          indent = Math.max(0, indent - 1);
          formatted.push('  '.repeat(indent) + trimmed);
        } else if (trimmed) {
          formatted.push('  '.repeat(indent) + trimmed);
        } else {
          formatted.push('');
        }
      }

      return formatted.join('\n');
    } catch (error: any) {
      console.error('Error formatting document:', error);
      return undefined;
    }
  }

  async getHoverInfo(
    document: vscode.TextDocument,
    position: vscode.Position
  ): Promise<vscode.Hover | undefined> {
    try {
      const range = document.getWordRangeAtPosition(position);
      if (!range) {
        return undefined;
      }

      const word = document.getText(range);
      const keywords: { [key: string]: string } = {
        schema: 'Defines a configuration schema with typed fields',
        struct: 'Defines a structured data type',
        union: 'Defines a union type (one of several types)',
        fun: 'Defines a function',
        val: 'Declares an immutable value',
        var: 'Declares a mutable variable',
        string: 'Text data type',
        int: 'Integer number type',
        bool: 'Boolean true/false type',
      };

      const hoverInfo = keywords[word];
      if (hoverInfo) {
        return new vscode.Hover(hoverInfo, range);
      }

      return undefined;
    } catch (error: any) {
      console.error('Error getting hover info:', error);
      return undefined;
    }
  }

  async getCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position
  ): Promise<CompletionItem[]> {
    try {
      return [
        {
          label: 'schema',
          kind: vscode.CompletionItemKind.Keyword,
          detail: 'Schema declaration',
          documentation: 'Define a configuration schema',
          insertText: 'schema ${1:Name} {\n\t${2}\n}',
        },
        {
          label: 'struct',
          kind: vscode.CompletionItemKind.Keyword,
          detail: 'Struct declaration',
          documentation: 'Define a structured data type',
          insertText: 'struct ${1:Name} {\n\t${2}\n}',
        },
        {
          label: 'fun',
          kind: vscode.CompletionItemKind.Function,
          detail: 'Function declaration',
          documentation: 'Define a function',
          insertText: 'fun ${1:name}(${2:params}) {\n\t${3}\n}',
        },
        {
          label: 'string',
          kind: vscode.CompletionItemKind.TypeParameter,
          detail: 'String type',
          documentation: 'Text data type',
        },
        {
          label: 'int',
          kind: vscode.CompletionItemKind.TypeParameter,
          detail: 'Integer type',
          documentation: 'Integer number type',
        },
        {
          label: 'bool',
          kind: vscode.CompletionItemKind.TypeParameter,
          detail: 'Boolean type',
          documentation: 'Boolean true/false type',
        },
      ];
    } catch (error: any) {
      console.error('Error getting completions:', error);
      return [];
    }
  }
}
