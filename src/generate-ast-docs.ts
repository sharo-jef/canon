import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

interface ASTNode {
  type: string;
  text?: string;
  children?: ASTNode[];
  [key: string]: any;
}

interface ChildNodeInfo {
  node: ASTNode;
  propertyKey: string;
  arrayIndex?: number;
}

function getChildNodes(node: ASTNode): ChildNodeInfo[] {
  const children: ChildNodeInfo[] = [];

  // Standard children property (rarely used in our AST)
  if (node.children && Array.isArray(node.children)) {
    node.children.forEach((child, index) => {
      children.push({ node: child, propertyKey: 'children', arrayIndex: index });
    });
  }

  // Properties that contain child nodes based on our parser.ts AST structure
  const childProperties = [
    'body', // Block, etc.
    'lambdaBody', // CallExpression with lambda block
    'arguments', // CallExpression, etc.
    'value', // AssignmentStatement, PropertyDeclaration, etc.
    'expression', // ExpressionStatement, TemplateInterpolation
    'callee', // CallExpression (function reference)
    'functionName', // CallExpression (function name as identifier)
    'left', // BinaryExpression
    'right', // BinaryExpression
    'operand', // UnaryExpression
    'object', // MemberAccessExpression
    'property', // MemberAccessExpression
    'condition', // IfStatement
    'then', // IfStatement
    'else', // IfExpression
    'typeRef', // PropertyDeclaration, Parameter, etc.
    'defaultValue', // PropertyDeclaration, RepeatedDeclaration
    'annotations', // Various declaration types
    'types', // UnionDeclaration
    'elementType', // ArrayType
    'parameters', // Function-related nodes
    'mapping', // RepeatedDeclaration
    'entries', // MappingBlock
    'parts', // TemplateLiteral
    'from', // MappingEntry
    'to', // MappingEntry
    'name', // Various declaration types (now Identifier nodes)
    'identifier', // UseStatement (now Identifier node)
  ];

  for (const prop of childProperties) {
    const value = node[prop];
    if (value) {
      if (Array.isArray(value)) {
        // Array of nodes
        value.forEach((item, index) => {
          if (item && typeof item === 'object' && item.type) {
            children.push({ node: item, propertyKey: prop, arrayIndex: index });
          }
        });
      } else if (typeof value === 'object' && value.type) {
        // Single node
        children.push({ node: value, propertyKey: prop });
      }
    }
  }

  return children;
}

function renderASTNode(
  node: ASTNode,
  depth = 0,
  propertyKey?: string,
  arrayIndex?: number
): string {
  const nodeId = `ast-node-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const childNodeInfos = getChildNodes(node);
  const hasChildren = childNodeInfos.length > 0;
  const indentClass = depth > 0 ? `ml-${Math.min(depth * 2, 8)}` : '';

  let html = `<div class="ast-node group cursor-pointer py-0.5 px-1 hover:bg-gray-200 dark:hover:bg-gray-800 ${indentClass}" id="${nodeId}" onclick="toggleASTNode('${nodeId}')">`;

  // Minimal expand/collapse indicator
  html += `<span class="toggle inline-block w-3 text-xs text-gray-500 dark:text-gray-600">${hasChildren ? '▼' : ' '}</span>`;

  // Property key indicator (if this node is a child)
  if (propertyKey && propertyKey !== 'children') {
    const keyDisplay = arrayIndex !== undefined ? `${propertyKey}[${arrayIndex}]` : propertyKey;
    html += `<span class="property-key text-xs text-purple-600 dark:text-purple-400 mr-1">${escapeHtml(keyDisplay)}:</span>`;
  }

  // Node type - ultra minimal
  html += `<span class="node-type text-xs text-blue-700 dark:text-blue-400 bg-gray-200 dark:bg-gray-800 px-1 py-0 mr-1">${escapeHtml(node.type)}</span>`;

  // Additional information - minimal
  const additionalInfo = getNodeAdditionalInfo(node);
  if (additionalInfo) {
    html += `<span class="node-details text-xs text-gray-600 dark:text-gray-500 bg-gray-100 dark:bg-gray-850 px-1 py-0">${escapeHtml(additionalInfo)}</span>`;
  }

  html += '</div>';

  if (hasChildren) {
    html += `<div class="children border-l border-gray-300 dark:border-gray-700 pl-2 ml-1" id="${nodeId}-children">`;
    for (const childInfo of childNodeInfos) {
      html += renderASTNode(childInfo.node, depth + 1, childInfo.propertyKey, childInfo.arrayIndex);
    }
    html += '</div>';
  }

  return html;
}

function getNodeAdditionalInfo(node: ASTNode): string {
  const info: string[] = [];

  // String and literal values - only show value directly for leaf nodes (strings/numbers/booleans)
  if (node.value !== undefined && node.value !== null) {
    // Only show value inline if it's a primitive type, not an object/node
    if (
      typeof node.value === 'string' ||
      typeof node.value === 'number' ||
      typeof node.value === 'boolean'
    ) {
      if (typeof node.value === 'string') {
        info.push(`"${node.value}"`);
      } else {
        info.push(`${node.value}`);
      }
    }
    // If value is an object (like a child node), don't show it here - it will be shown as a child
  }

  if (node.raw !== undefined) {
    info.push(`raw: ${node.raw}`);
  }

  // Names and identifiers
  if (node.name) {
    if (typeof node.name === 'string') {
      info.push(`name: ${node.name}`);
    } else if (node.name.type === 'Identifier') {
      info.push(`name: ${node.name.name}`);
    }
  }

  if (node.identifier) {
    if (typeof node.identifier === 'string') {
      info.push(`id: ${node.identifier}`);
    } else if (node.identifier.type === 'Identifier') {
      info.push(`id: ${node.identifier.name}`);
    }
  }

  if (node.typeName && typeof node.typeName === 'string') {
    info.push(`type: ${node.typeName}`);
  }

  if (node.path && typeof node.path === 'string') {
    info.push(`path: ${node.path}`);
  }

  if (node.property) {
    if (typeof node.property === 'string') {
      info.push(`prop: ${node.property}`);
    } else if (node.property.type === 'Identifier') {
      info.push(`prop: ${node.property.name}`);
    }
  }

  if (node.functionName && typeof node.functionName === 'string') {
    info.push(`fn: ${node.functionName}`);
  }

  // Operators and expressions
  if (node.operator && typeof node.operator === 'string') {
    info.push(`op: ${node.operator}`);
  }

  // Boolean flags
  if (node.isThisAccess !== undefined) {
    info.push(`thisAccess: ${node.isThisAccess}`);
  }

  if (node.isPrivate !== undefined) {
    info.push(`private: ${node.isPrivate}`);
  }

  if (node.isOptional !== undefined) {
    info.push(`optional: ${node.isOptional}`);
  }

  // Dimensions for arrays
  if (node.dimensions !== undefined) {
    info.push(`dims: ${node.dimensions}`);
  }

  // Template string specific
  if (node.type === 'TemplateInterpolation' && node.expression) {
    if (node.expression.type === 'Identifier') {
      info.push(`$${node.expression.name}`);
    } else {
      info.push(`\${${node.expression.type}}`);
    }
  }

  // Function call argument count
  if (node.arguments && Array.isArray(node.arguments)) {
    info.push(`args: ${node.arguments.length}`);
  }

  // Body content count
  if (node.body && Array.isArray(node.body)) {
    info.push(`body: ${node.body.length}`);
  }

  // Lambda body content count
  if (node.lambdaBody && Array.isArray(node.lambdaBody)) {
    info.push(`lambda: ${node.lambdaBody.length}`);
  }

  // Annotation specific
  if (node.type === 'Annotation' && node.name) {
    const annotationName = node.name.type === 'Identifier' ? node.name.name : node.name;
    info.push(`@${annotationName}`);
  }

  return info.join(', ');
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function generateASTHtml(ast: ASTNode): string {
  return `<!DOCTYPE html>
<html lang="en" class="h-full">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Canon</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        gray: {
                            950: '#0a0b0f',
                            900: '#0f1419',
                            850: '#191d25',
                            800: '#24292e',
                            700: '#374151',
                        }
                    }
                }
            }
        }
    </script>
    <style>
        * { font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Consolas', monospace; }
        .highlight { background-color: #0366d6 !important; color: #ffffff !important; }
        .dark .highlight { background-color: #1f6feb !important; color: #ffffff !important; }
    </style>
</head>
<body class="h-full bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
    <div class="min-h-screen">
        <!-- Ultra Minimal Header -->
        <header class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
            <div class="max-w-full px-3 py-2">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <h1 class="text-sm font-medium text-gray-900 dark:text-white">Canon</h1>
                        <nav class="flex">
                            <a href="index.html" class="bg-gray-900 dark:bg-gray-700 text-white px-2 py-1 text-xs">AST</a>
                        </nav>
                    </div>
                    <button onclick="toggleTheme()" class="p-1 text-gray-600 dark:text-gray-300">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path class="dark:hidden" d="M10 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6l2-6z"/>
                            <path class="hidden dark:block" d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
        
        <div class="max-w-full px-3 py-2">
            <!-- Ultra Compact Controls -->
            <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-2 mb-2">
                <div class="flex items-center gap-2 text-xs">
                    <input 
                        type="text" 
                        id="search-input" 
                        class="flex-1 px-2 py-1 text-xs border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" 
                        placeholder="Search..." 
                    />
                    <div class="flex gap-1">
                        <button onclick="expandAll()" class="bg-gray-800 dark:bg-gray-700 text-white px-2 py-1 text-xs">+</button>
                        <button onclick="collapseAll()" class="bg-gray-800 dark:bg-gray-700 text-white px-2 py-1 text-xs">-</button>
                        <button onclick="expandToLevel(2)" class="bg-gray-600 dark:bg-gray-600 text-white px-2 py-1 text-xs">2</button>
                        <button onclick="expandToLevel(3)" class="bg-gray-600 dark:bg-gray-600 text-white px-2 py-1 text-xs">3</button>
                    </div>
                    <div id="stats-content" class="text-xs text-gray-600 dark:text-gray-400"></div>
                </div>
            </div>

            <!-- AST Tree -->
            <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <div class="bg-gray-100 dark:bg-gray-850 px-3 py-1 border-b border-gray-200 dark:border-gray-800">
                    <h2 class="text-xs font-medium text-gray-900 dark:text-white">AST</h2>
                </div>
                <div class="ast-tree p-2 overflow-x-auto max-h-screen overflow-y-auto">
                    <div id="ast-root">${renderASTNode(ast)}</div>
                </div>
            </div>
        </div>
    </div>
    
    <script>
        const astData = ${JSON.stringify(ast, null, 2)};
        
        // Theme functionality
        function initTheme() {
            const savedTheme = localStorage.getItem('theme');
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            const theme = savedTheme || systemTheme;
            
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
        
        function toggleTheme() {
            const isDark = document.documentElement.classList.contains('dark');
            if (isDark) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        }
        
        function getChildNodesJS(node) {
            const children = [];
            
            // Standard children property
            if (node.children && Array.isArray(node.children)) {
                children.push(...node.children);
            }
            
            // Common properties that contain child nodes
            const childProperties = [
                'body', 'arguments', 'expression', 'target', 'functionName', 
                'left', 'right', 'condition', 'thenBranch', 'elseBranch',
                'object', 'member', 'variableName', 'iteratorVariable',
                'parameters', 'returnType', 'dataType', 'mixinType', 'name'
            ];
            
            for (const prop of childProperties) {
                const value = node[prop];
                if (value) {
                    if (Array.isArray(value)) {
                        // Array of nodes
                        for (const item of value) {
                            if (item && typeof item === 'object' && item.type) {
                                children.push(item);
                            }
                        }
                    } else if (typeof value === 'object' && value.type) {
                        // Single node
                        children.push(value);
                    }
                }
            }
            
            return children;
        }
        
        function countNodes(node) {
            let count = 1;
            const children = getChildNodesJS(node);
            for (const child of children) {
                count += countNodes(child);
            }
            return count;
        }
        
        function getNodeTypes(node, types = new Set()) {
            types.add(node.type);
            const children = getChildNodesJS(node);
            for (const child of children) {
                getNodeTypes(child, types);
            }
            return types;
        }
        
        function updateStats() {
            const totalNodes = countNodes(astData);
            const nodeTypes = getNodeTypes(astData);
            const uniqueTypes = nodeTypes.size;
            
            document.getElementById('stats-content').textContent = 
                'Total nodes: ' + totalNodes + ', Unique types: ' + uniqueTypes;
        }
        
        function toggleASTNode(nodeId) {
            const node = document.getElementById(nodeId);
            const children = document.getElementById(nodeId + '-children');
            
            if (children) {
                if (children.style.display === 'none') {
                    children.style.display = 'block';
                    node.classList.remove('collapsed');
                    node.classList.add('expanded');
                    node.querySelector('.toggle').textContent = '▼';
                } else {
                    children.style.display = 'none';
                    node.classList.remove('expanded');
                    node.classList.add('collapsed');
                    node.querySelector('.toggle').textContent = '▶';
                }
            }
        }
        
        function expandAll() {
            const childrenDivs = document.querySelectorAll('.children');
            const nodes = document.querySelectorAll('.ast-node');
            
            childrenDivs.forEach(div => {
                div.style.display = 'block';
            });
            
            nodes.forEach(node => {
                node.classList.remove('collapsed');
                node.classList.add('expanded');
                const toggle = node.querySelector('.toggle');
                if (toggle && toggle.textContent.trim() === '▶') {
                    toggle.textContent = '▼';
                }
            });
        }
        
        function collapseAll() {
            const childrenDivs = document.querySelectorAll('.children');
            const nodes = document.querySelectorAll('.ast-node');
            
            childrenDivs.forEach(div => {
                div.style.display = 'none';
            });
            
            nodes.forEach(node => {
                node.classList.remove('expanded');
                node.classList.add('collapsed');
                const toggle = node.querySelector('.toggle');
                if (toggle && toggle.textContent.trim() === '▼') {
                    toggle.textContent = '▶';
                }
            });
        }
        
        function expandToLevel(maxLevel) {
            const allNodes = document.querySelectorAll('.ast-node');
            
            allNodes.forEach(node => {
                const classes = node.className;
                const mlMatch = classes.match(/ml-(\\d+)/);
                const depth = mlMatch ? parseInt(mlMatch[1]) : 0;
                const nodeLevel = Math.floor(depth / 4) + 1;
                const children = document.getElementById(node.id + '-children');
                
                if (children) {
                    if (nodeLevel < maxLevel) {
                        children.style.display = 'block';
                        node.classList.remove('collapsed');
                        node.classList.add('expanded');
                        node.querySelector('.toggle').textContent = '▼';
                    } else {
                        children.style.display = 'none';
                        node.classList.remove('expanded');
                        node.classList.add('collapsed');
                        node.querySelector('.toggle').textContent = '▶';
                    }
                }
            });
        }
        
        function searchNodes() {
            const query = document.getElementById('search-input').value.toLowerCase();
            const nodes = document.querySelectorAll('.ast-node');
            
            nodes.forEach(node => {
                const text = node.textContent.toLowerCase();
                node.classList.remove('highlight');
                
                if (query && text.includes(query)) {
                    node.classList.add('highlight');
                    
                    // Show path to highlighted node
                    let parent = node.parentElement;
                    while (parent && parent.classList.contains('children')) {
                        parent.style.display = 'block';
                        const parentNode = parent.previousElementSibling;
                        if (parentNode && parentNode.classList.contains('ast-node')) {
                            parentNode.classList.remove('collapsed');
                            parentNode.classList.add('expanded');
                            const toggle = parentNode.querySelector('.toggle');
                            if (toggle) toggle.textContent = '▼';
                        }
                        parent = parent.parentElement;
                    }
                }
            });
        }
        
        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            initTheme();
            updateStats();
            
            // Search functionality
            const searchInput = document.getElementById('search-input');
            let searchTimeout;
            searchInput.addEventListener('input', function() {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(searchNodes, 300);
            });
            
            // Initially expand all nodes for full visibility
            setTimeout(() => expandAll(), 100);
        });
    </script>
</body>
</html>`;
}

function main() {
  try {
    console.log('🚀 Starting AST documentation generation...');

    // Check if AST YAML file exists
    const astYamlPath = path.join(process.cwd(), 'ast.yaml');
    if (!fs.existsSync(astYamlPath)) {
      console.error('❌ AST YAML file not found: ast.yaml');
      console.error('Please run the parser first to generate the AST file.');
      process.exit(1);
    }

    const astContent = fs.readFileSync(astYamlPath, 'utf8');
    const ast = yaml.load(astContent) as ASTNode;

    // Generate HTML documentation
    const html = generateASTHtml(ast);

    // Ensure docs directory exists
    const docsDir = path.join(process.cwd(), 'docs');
    if (!fs.existsSync(docsDir)) {
      fs.mkdirSync(docsDir, { recursive: true });
    }

    // Write HTML file
    const outputPath = path.join(docsDir, 'index.html');
    fs.writeFileSync(outputPath, html, 'utf8');

    console.log('✅ AST documentation generated successfully!');
    console.log(`📁 Output: ${outputPath}`);
  } catch (error) {
    console.error('❌ Error generating AST documentation:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
