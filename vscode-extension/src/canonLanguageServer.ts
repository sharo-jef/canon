import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { spawn } from 'child_process';

export interface ParseResult {
  success: boolean;
  ast?: any;
  errors: ErrorInfo[];
}

export interface ErrorInfo {
  code: string;
  message: string;
  filename: string;
  location: {
    line: number;
    column: number;
  };
}

export interface ValidationResult {
  isValid: boolean;
  errors: ErrorInfo[];
}

export interface CompletionItem {
  label: string;
  kind: vscode.CompletionItemKind;
  detail?: string;
  documentation?: string;
  insertText?: string;
}

export class CanonLanguageServer {
  private workspaceRoot: string;
  private tmpDir: string;

  constructor() {
    // Find workspace root (canon project root)
    this.workspaceRoot = this.findCanonProjectRoot();

    // Setup tmp directory
    this.tmpDir = path.join(this.workspaceRoot, 'tmp');
    this.ensureTmpDir();

    console.log('Canon Language Server initialized with real Canon interpreter');
    console.log(`Workspace root: ${this.workspaceRoot}`);
    console.log(`Tmp directory: ${this.tmpDir}`);
  }

  private findCanonProjectRoot(): string {
    const workspaceFolders = vscode.workspace.workspaceFolders;

    if (workspaceFolders) {
      for (const folder of workspaceFolders) {
        const folderPath = folder.uri.fsPath;

        // Check if this is the canon project root by looking for key files
        const packageJsonPath = path.join(folderPath, 'package.json');
        const srcPath = path.join(folderPath, 'src');
        const definitionPath = path.join(folderPath, 'definition');

        if (
          fs.existsSync(packageJsonPath) &&
          fs.existsSync(srcPath) &&
          fs.existsSync(definitionPath)
        ) {
          // Check if package.json contains canon-related content
          try {
            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
            if (
              packageJson.name === 'canon' ||
              (packageJson.scripts && packageJson.scripts['interpreter'])
            ) {
              return folderPath;
            }
          } catch (error) {
            // Continue searching if package.json is malformed
          }
        }

        // Also check parent directory in case we're in a subdirectory
        const parentPath = path.dirname(folderPath);
        const parentPackageJsonPath = path.join(parentPath, 'package.json');
        const parentSrcPath = path.join(parentPath, 'src');
        const parentDefinitionPath = path.join(parentPath, 'definition');

        if (
          fs.existsSync(parentPackageJsonPath) &&
          fs.existsSync(parentSrcPath) &&
          fs.existsSync(parentDefinitionPath)
        ) {
          try {
            const packageJson = JSON.parse(fs.readFileSync(parentPackageJsonPath, 'utf8'));
            if (
              packageJson.name === 'canon' ||
              (packageJson.scripts && packageJson.scripts['interpreter'])
            ) {
              return parentPath;
            }
          } catch (error) {
            // Continue searching
          }
        }
      }

      // Fallback to first workspace folder
      return workspaceFolders[0].uri.fsPath;
    }

    // Last resort fallback
    return process.cwd();
  }

  private ensureTmpDir(): void {
    try {
      if (!fs.existsSync(this.tmpDir)) {
        fs.mkdirSync(this.tmpDir, { recursive: true });
        console.log(`Created tmp directory: ${this.tmpDir}`);
      }
    } catch (error) {
      console.error(`Failed to create tmp directory: ${this.tmpDir}`, error);
      // Fallback to system temp directory
      const os = require('os');
      this.tmpDir = path.join(os.tmpdir(), 'canon-vscode-extension');
      if (!fs.existsSync(this.tmpDir)) {
        fs.mkdirSync(this.tmpDir, { recursive: true });
      }
      console.log(`Using fallback tmp directory: ${this.tmpDir}`);
    }
  }

  async parseDocument(document: vscode.TextDocument): Promise<ParseResult> {
    try {
      const content = document.getText();
      console.log(`Parsing Canon file: ${document.uri.toString()}`);

      // Get the original file path from the document URI
      let originalFilePath: string | undefined;
      if (document.uri.scheme === 'file') {
        originalFilePath = document.uri.fsPath;
        console.log(`Original file path: ${originalFilePath}`);
      } else {
        console.log(`Document URI scheme: ${document.uri.scheme}, no original file path`);
      }

      // Always use real Canon interpreter
      return await this.performRealValidation(content, originalFilePath);
    } catch (error: any) {
      console.error('Error in parseDocument:', error);
      return {
        success: false,
        errors: [
          {
            code: 'PARSE_ERROR',
            message: error.message || 'Unknown parsing error',
            stack: error.stack || 'No stack trace available',
          },
        ],
      };
    }
  }

  private async performRealValidation(
    content: string,
    originalFilePath?: string
  ): Promise<ParseResult> {
    let tempFilePath: string | null = null;

    try {
      // Ensure tmp directory exists
      this.ensureTmpDir();

      // Create temporary file
      const tempFileName = `temp_canon_${crypto.randomUUID()}.canon`;
      tempFilePath = path.join(this.tmpDir, tempFileName);

      console.log(`Creating temporary file: ${tempFilePath}`);

      // Verify tmp directory exists before writing
      if (!fs.existsSync(this.tmpDir)) {
        throw new Error(`Temporary directory does not exist: ${this.tmpDir}`);
      }

      // Write content to temporary file
      fs.writeFileSync(tempFilePath, content, 'utf8');

      // Verify file was created
      if (!fs.existsSync(tempFilePath)) {
        throw new Error(`Failed to create temporary file: ${tempFilePath}`);
      }

      // Run Canon interpreter with original file path information
      const result = await this.runCanonInterpreter(tempFilePath, originalFilePath);

      // Clean up temporary file
      this.cleanupTempFile(tempFilePath);

      return result;
    } catch (error: any) {
      // Make sure to clean up even if interpreter fails
      if (tempFilePath) {
        this.cleanupTempFile(tempFilePath);
      }

      console.error('Error in performRealValidation:', error);
      return {
        success: false,
        errors: [error.message || 'Failed to validate Canon file'],
      };
    }
  }

  private async runCanonInterpreter(
    filePath: string,
    originalFilePath?: string
  ): Promise<ParseResult> {
    return new Promise((resolve) => {
      const interpreterPath = path.join(this.workspaceRoot, 'src', 'interpreter.ts'); // Check if interpreter exists
      if (!fs.existsSync(interpreterPath)) {
        resolve({
          success: false,
          errors: [
            {
              code: 'E0000',
              message: `Canon interpreter not found at: ${interpreterPath}`,
              filename: filePath,
              location: { line: 1, column: 1 },
            },
          ],
        });
        return;
      }

      console.log(`Running Canon interpreter: ${interpreterPath}`);
      console.log(`Validating file: ${filePath}`);
      console.log(`Original file path: ${originalFilePath}`);

      // Prepare command arguments
      const args = ['-r', 'tsx/cjs', interpreterPath, filePath, '--json-output'];

      // Add original file path as metadata if available
      if (originalFilePath) {
        args.push('--original-file-path', originalFilePath);
        console.log(`Added original file path argument: ${originalFilePath}`);
      } else {
        console.log('No original file path provided');
      }

      console.log(`Command args: ${args.join(' ')}`);

      // Use node.js directly with tsx/register instead of external tsx command
      const child = spawn('node', args, {
        cwd: this.workspaceRoot,
        stdio: ['ignore', 'pipe', 'pipe'],
        timeout: 15000,
        env: { ...process.env, DEBUG: 'true' }, // Enable debug logging
      });

      let stdout = '';
      let stderr = '';

      child.stdout?.on('data', (data) => {
        stdout += data.toString();
      });

      child.stderr?.on('data', (data) => {
        stderr += data.toString();
      });

      child.on('close', (code) => {
        console.log(`Canon interpreter exited with code: ${code}`);
        console.log(`Stdout: ${stdout}`);
        console.log(`Stderr: ${stderr}`);

        if (code === 0) {
          // Validation successful
          resolve({
            success: true,
            errors: [],
          });
        } else {
          // Try to parse JSON error output from stdout
          try {
            const errorData = JSON.parse(stdout);
            if (errorData.success === false && errorData.errors) {
              resolve({
                success: false,
                errors: errorData.errors,
              });
              return;
            }
          } catch (jsonError) {
            // If JSON parsing fails, fall back to stderr parsing
            console.log('Failed to parse JSON output, falling back to stderr parsing');
          }

          // Fallback: Parse errors from stderr
          const errorLines = stderr
            .split('\n')
            .filter((line) => line.trim() && !line.includes('[DEBUG]'))
            .map((line) => line.replace(/^.*?error:\s*/i, '').trim())
            .filter((line) => line);

          const fallbackErrors: ErrorInfo[] = errorLines.map((errorLine) => ({
            code: 'E0000',
            message: errorLine,
            filename: filePath,
            location: { line: 1, column: 1 },
          }));

          resolve({
            success: false,
            errors:
              fallbackErrors.length > 0
                ? fallbackErrors
                : [
                    {
                      code: 'E0000',
                      message: `Canon validation failed with exit code ${code}`,
                      filename: filePath,
                      location: { line: 1, column: 1 },
                    },
                  ],
          });
        }
      });

      child.on('error', (error) => {
        console.error(`Error spawning Canon interpreter: ${error.message}`);
        resolve({
          success: false,
          errors: [
            {
              code: 'E0000',
              message: `Failed to run Canon interpreter: ${error.message}`,
              filename: filePath,
              location: { line: 1, column: 1 },
            },
          ],
        });
      });
    });
  }

  private cleanupTempFile(filePath: string): void {
    try {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }

      // If tmp directory is empty, remove it
      if (fs.existsSync(this.tmpDir)) {
        const files = fs.readdirSync(this.tmpDir);
        if (files.length === 0) {
          fs.rmdirSync(this.tmpDir);
        }
      }
    } catch (error) {
      console.warn('Failed to cleanup temp file:', error);
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
        errors: [
          {
            code: 'E0000',
            message: error.message || 'Unknown validation error',
            filename: document.uri.fsPath,
            location: { line: 1, column: 1 },
          },
        ],
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
