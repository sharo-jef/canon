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

  // Standard children property
  if (node.children && Array.isArray(node.children)) {
    node.children.forEach((child, index) => {
      children.push({ node: child, propertyKey: 'children', arrayIndex: index });
    });
  }

  // Common properties that contain child nodes
  const childProperties = [
    'body',
    'arguments',
    'expression',
    'target',
    'functionName',
    'left',
    'right',
    'condition',
    'thenBranch',
    'elseBranch',
    'object',
    'member',
    'variableName',
    'iteratorVariable',
    'parameters',
    'returnType',
    'dataType',
    'mixinType',
    'name',
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

  // Terminal nodes
  if (node.type === 'Terminal' && node.text) {
    return `"${node.text}"`;
  }

  // Schema-related nodes
  if (node.schema) {
    info.push(`schema: ${node.schema}`);
  }

  if (node.namespace) {
    info.push(`namespace: ${node.namespace}`);
  }

  // Structure-related - handle both string and object forms
  if (node.name) {
    if (typeof node.name === 'object' && node.name.name) {
      info.push(`name: ${node.name.name}`);
    } else if (typeof node.name === 'string') {
      info.push(`name: ${node.name}`);
    }
  }

  if (node.structName) {
    info.push(`struct: ${node.structName}`);
  }

  if (node.mixinType) {
    if (typeof node.mixinType === 'object' && node.mixinType.typeName) {
      info.push(`mixin: ${node.mixinType.typeName}`);
    } else if (typeof node.mixinType === 'string') {
      info.push(`mixin: ${node.mixinType}`);
    }
  }

  if (node.fieldName) {
    info.push(`field: ${node.fieldName}`);
  }

  if (node.methodName) {
    info.push(`method: ${node.methodName}`);
  }

  // Type-related - handle both string and object forms
  if (node.typeName) {
    info.push(`type: ${node.typeName}`);
  }

  if (node.dataType) {
    if (typeof node.dataType === 'object' && node.dataType.typeName) {
      info.push(`dataType: ${node.dataType.typeName}`);
    } else if (typeof node.dataType === 'string') {
      info.push(`dataType: ${node.dataType}`);
    }
  }

  if (node.returnType) {
    if (typeof node.returnType === 'object' && node.returnType.typeName) {
      info.push(`returnType: ${node.returnType.typeName}`);
    } else if (typeof node.returnType === 'string') {
      info.push(`returnType: ${node.returnType}`);
    }
  }

  // Iterator variable for ForStatement
  if (node.iteratorVariable) {
    if (typeof node.iteratorVariable === 'object' && node.iteratorVariable.name) {
      info.push(`iterator: ${node.iteratorVariable.name}`);
    } else if (typeof node.iteratorVariable === 'string') {
      info.push(`iterator: ${node.iteratorVariable}`);
    }
  }

  // Variable names
  if (node.variableName) {
    if (typeof node.variableName === 'object' && node.variableName.name) {
      info.push(`var: ${node.variableName.name}`);
    } else if (typeof node.variableName === 'string') {
      info.push(`var: ${node.variableName}`);
    }
  }

  if (node.variableType) {
    info.push(`varType: ${node.variableType}`);
  }

  if (node.isMutable !== undefined) {
    info.push(`mutable: ${node.isMutable}`);
  }

  // Boolean flags
  if (node.multiple !== undefined) {
    info.push(`multiple: ${node.multiple}`);
  }

  if (node.required !== undefined) {
    info.push(`required: ${node.required}`);
  }

  if (node.isDeclare !== undefined) {
    info.push(`declare: ${node.isDeclare}`);
  }

  if (node.isMethodCall !== undefined) {
    info.push(`methodCall: ${node.isMethodCall}`);
  }

  if (node.isObjectConstruction !== undefined) {
    info.push(`objectConstruction: ${node.isObjectConstruction}`);
  }

  if (node.hasArguments !== undefined) {
    info.push(`hasArgs: ${node.hasArguments}`);
  }

  if (node.hasBody !== undefined) {
    info.push(`hasBody: ${node.hasBody}`);
  }

  // Value-related
  if (node.value !== undefined && node.value !== null) {
    info.push(`value: ${JSON.stringify(node.value)}`);
  }

  if (node.literalType) {
    info.push(`literal: ${node.literalType}`);
  }

  // Expression operators
  if (node.operator) {
    info.push(`op: ${node.operator}`);
  }

  // Function-related - handle both string and object forms
  if (node.functionName) {
    if (typeof node.functionName === 'object' && node.functionName.name) {
      info.push(`function: ${node.functionName.name}`);
    } else if (typeof node.functionName === 'string') {
      info.push(`function: ${node.functionName}`);
    }
  }

  if (node.argumentCount !== undefined) {
    info.push(`argCount: ${node.argumentCount}`);
  }

  if (node.parameters && Array.isArray(node.parameters)) {
    if (node.parameters.length > 0) {
      const paramNames = node.parameters
        .map((p) => {
          const name = typeof p.name === 'object' ? p.name.name : p.name;
          const type = typeof p.type === 'object' ? p.type.typeName : p.type;
          return `${name}: ${type}`;
        })
        .join(', ');
      info.push(`params: (${paramNames})`);
    } else {
      info.push('params: ()');
    }
  }

  // Access-related - handle both string and object forms
  if (node.target) {
    if (typeof node.target === 'object') {
      if (node.target.type === 'Identifier' && node.target.name) {
        info.push(`target: ${node.target.name}`);
      } else if (node.target.type === 'MemberAccess' && node.target.fullAccess) {
        info.push(`target: ${node.target.fullAccess}`);
      } else {
        info.push(`target: ${node.target.type}`);
      }
    } else if (typeof node.target === 'string') {
      info.push(`target: ${node.target}`);
    }
  }

  if (node.fullAccess) {
    info.push(`access: ${node.fullAccess}`);
  }

  if (node.object) {
    if (typeof node.object === 'object' && node.object.type) {
      info.push(`object: ${node.object.type}`);
    } else if (typeof node.object === 'string') {
      info.push(`object: ${node.object}`);
    }
  }

  if (node.member) {
    if (typeof node.member === 'object' && node.member.name) {
      info.push(`member: ${node.member.name}`);
    } else if (typeof node.member === 'string') {
      info.push(`member: ${node.member}`);
    }
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
                            <a href="hierarchy.html" class="bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 text-xs hover:bg-gray-400 dark:hover:bg-gray-500">Hierarchy</a>
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
            
            // Initially collapse some levels for better overview
            setTimeout(() => expandToLevel(3), 100);
        });
    </script>
</body>
</html>`;
}

function main() {
  try {
    console.log('🚀 Starting AST documentation generation...');

    // Read AST YAML file
    const astYamlPath = path.join(process.cwd(), 'ast.yaml');
    if (!fs.existsSync(astYamlPath)) {
      console.error('AST YAML file not found. Please run "npm run parse:ast" first.');
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
