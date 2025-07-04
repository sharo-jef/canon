import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

interface HierarchyNode {
    type: string;
    details?: string;
    children: HierarchyNode[];
}

function renderNode(node: HierarchyNode, depth = 0): string {
    const nodeId = `node-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const hasChildren = node.children && node.children.length > 0;
    const indentClass = depth > 0 ? `ml-${Math.min(depth * 2, 8)}` : '';
    
    let html = `<div class="node group cursor-pointer py-0.5 px-1 hover:bg-gray-200 dark:hover:bg-gray-800 ${indentClass}" id="${nodeId}" onclick="toggleNode('${nodeId}')">`;
    
    // Minimal expand/collapse indicator
    html += `<span class="toggle inline-block w-3 text-xs text-gray-500 dark:text-gray-600">${hasChildren ? '▼' : ' '}</span>`;
    
    // Node type - ultra minimal
    html += `<span class="node-type text-xs text-green-700 dark:text-green-400 bg-gray-200 dark:bg-gray-800 px-1 py-0 mr-1">${escapeHtml(node.type)}</span>`;
    
    if (node.details) {
        html += `<span class="node-details text-xs text-gray-600 dark:text-gray-500 bg-gray-100 dark:bg-gray-850 px-1 py-0">${escapeHtml(node.details)}</span>`;
    }
    html += '</div>';
    
    if (hasChildren) {
        html += `<div class="children border-l border-gray-300 dark:border-gray-700 pl-2 ml-1" id="${nodeId}-children">`;
        for (const child of node.children) {
            html += renderNode(child, depth + 1);
        }
        html += '</div>';
    }
    
    return html;
}

function escapeHtml(text: string): string {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function generateHtml(hierarchy: HierarchyNode): string {
    return `<!DOCTYPE html>
<html lang="en" class="h-full">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Canon Schema</title>
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
        .highlight { background-color: #22c55e !important; color: #ffffff !important; }
        .dark .highlight { background-color: #16a34a !important; color: #ffffff !important; }
    </style>
</head>
<body class="h-full bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
    <div class="min-h-screen">
        <!-- Ultra Minimal Header -->
        <header class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
            <div class="max-w-full px-3 py-2">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <h1 class="text-sm font-medium text-gray-900 dark:text-white">Canon Schema</h1>
                        <nav class="flex">
                            <a href="index.html" class="bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 text-xs hover:bg-gray-400 dark:hover:bg-gray-500">AST</a>
                            <a href="hierarchy.html" class="bg-gray-900 dark:bg-gray-700 text-white px-2 py-1 text-xs">Hierarchy</a>
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

            <!-- Hierarchy Tree -->
            <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <div class="bg-gray-100 dark:bg-gray-850 px-3 py-1 border-b border-gray-200 dark:border-gray-800">
                    <h2 class="text-xs font-medium text-gray-900 dark:text-white">Hierarchy</h2>
                </div>
                <div class="hierarchy-tree p-2 overflow-x-auto max-h-screen overflow-y-auto">
                    <div id="hierarchy-root">${renderNode(hierarchy)}</div>
                </div>
            </div>
        </div>
    </div>
    
    <script>
        const hierarchyData = ${JSON.stringify(hierarchy, null, 2)};
        
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
        
        function countNodes(node) {
            let count = 1;
            if (node.children) {
                for (const child of node.children) {
                    count += countNodes(child);
                }
            }
            return count;
        }
        
        function getNodeTypes(node, types = new Set()) {
            types.add(node.type);
            if (node.children) {
                for (const child of node.children) {
                    getNodeTypes(child, types);
                }
            }
            return types;
        }
        
        function updateStats() {
            const nodeCount = countNodes(hierarchyData);
            const nodeTypes = getNodeTypes(hierarchyData);
            document.getElementById('stats-content').textContent = \`\${nodeCount} nodes, \${nodeTypes.size} types\`;
        }
        
        function toggleNode(nodeId) {
            const childrenDiv = document.getElementById(nodeId + '-children');
            const toggleSpan = document.querySelector(\`#\${nodeId} .toggle\`);
            
            if (childrenDiv) {
                if (childrenDiv.style.display === 'none') {
                    childrenDiv.style.display = '';
                    toggleSpan.textContent = '▼';
                } else {
                    childrenDiv.style.display = 'none';
                    toggleSpan.textContent = '▶';
                }
            }
        }
        
        function expandAll() {
            document.querySelectorAll('.children').forEach(el => {
                el.style.display = '';
            });
            document.querySelectorAll('.toggle').forEach(el => {
                if (el.textContent.trim() === '▶') {
                    el.textContent = '▼';
                }
            });
        }
        
        function collapseAll() {
            document.querySelectorAll('.children').forEach(el => {
                el.style.display = 'none';
            });
            document.querySelectorAll('.toggle').forEach(el => {
                if (el.textContent.trim() === '▼') {
                    el.textContent = '▶';
                }
            });
        }
        
        function expandToLevel(level) {
            document.querySelectorAll('.children').forEach(el => {
                el.style.display = 'none';
            });
            document.querySelectorAll('.toggle').forEach(el => {
                if (el.textContent.trim() === '▼') {
                    el.textContent = '▶';
                }
            });
            
            for (let i = 0; i < level; i++) {
                document.querySelectorAll(\`.ml-\${i * 2} + .children, .children\`).forEach((el, index) => {
                    if (index < Math.pow(2, i)) {
                        el.style.display = '';
                        const nodeId = el.id.replace('-children', '');
                        const toggleSpan = document.querySelector(\`#\${nodeId} .toggle\`);
                        if (toggleSpan) {
                            toggleSpan.textContent = '▼';
                        }
                    }
                });
            }
        }
        
        function searchNodes() {
            const searchTerm = document.getElementById('search-input').value.toLowerCase();
            const allNodes = document.querySelectorAll('.node');
            
            allNodes.forEach(node => {
                node.classList.remove('highlight');
                if (searchTerm && node.textContent.toLowerCase().includes(searchTerm)) {
                    node.classList.add('highlight');
                }
            });
        }
        
        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            initTheme();
            updateStats();
            
            document.getElementById('search-input').addEventListener('input', searchNodes);
            
            // Collapse all initially except root
            collapseAll();
            const rootChildren = document.querySelector('#hierarchy-root > .children');
            if (rootChildren) {
                rootChildren.style.display = '';
                const rootToggle = document.querySelector('#hierarchy-root > .node .toggle');
                if (rootToggle) {
                    rootToggle.textContent = '▼';
                }
            }
        });
    </script>
</body>
</html>`;
}

function parseSchemaFile(filePath: string): HierarchyNode {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const schema = yaml.load(content) as any;
        
        return {
            type: 'Schema',
            details: \`File: \${path.basename(filePath)}\`,
            children: parseSchemaContent(schema)
        };
    } catch (error) {
        console.error(\`Error parsing schema file \${filePath}:\`, error);
        return {
            type: 'Error',
            details: \`Failed to parse \${path.basename(filePath)}\`,
            children: []
        };
    }
}

function parseSchemaContent(obj: any, currentKey?: string): HierarchyNode[] {
    const nodes: HierarchyNode[] = [];
    
    if (obj === null || obj === undefined) {
        return nodes;
    }
    
    if (Array.isArray(obj)) {
        obj.forEach((item, index) => {
            nodes.push({
                type: 'ArrayItem',
                details: \`[\${index}]\`,
                children: parseSchemaContent(item)
            });
        });
    } else if (typeof obj === 'object') {
        Object.entries(obj).forEach(([key, value]) => {
            const node: HierarchyNode = {
                type: getNodeType(key, value),
                details: getNodeDetails(key, value),
                children: parseSchemaContent(value, key)
            };
            nodes.push(node);
        });
    } else {
        // Primitive value
        nodes.push({
            type: 'Value',
            details: String(obj),
            children: []
        });
    }
    
    return nodes;
}

function getNodeType(key: string, value: any): string {
    // Determine node type based on key patterns
    if (key === 'type') return 'TypeDefinition';
    if (key === 'properties') return 'Properties';
    if (key === 'items') return 'ArrayItems';
    if (key === 'enum') return 'Enumeration';
    if (key === 'required') return 'RequiredFields';
    if (key === 'description') return 'Description';
    if (key === 'default') return 'DefaultValue';
    if (key === 'examples') return 'Examples';
    if (key === 'definitions' || key === '$defs') return 'Definitions';
    if (key === 'allOf') return 'AllOf';
    if (key === 'anyOf') return 'AnyOf';
    if (key === 'oneOf') return 'OneOf';
    if (key === 'not') return 'Not';
    if (key === 'if') return 'Conditional';
    if (key === 'then') return 'Then';
    if (key === 'else') return 'Else';
    
    // Type-based classification
    if (typeof value === 'object' && value !== null) {
        if (Array.isArray(value)) {
            return 'Array';
        }
        if (value.type) {
            return 'SchemaObject';
        }
        return 'Object';
    }
    
    return 'Property';
}

function getNodeDetails(key: string, value: any): string {
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        return \`\${key}: \${String(value)}\`;
    }
    
    if (Array.isArray(value)) {
        return \`\${key} [\${value.length} items]\`;
    }
    
    if (typeof value === 'object' && value !== null) {
        const keys = Object.keys(value);
        if (keys.length === 0) {
            return \`\${key}: {}\`;
        }
        return \`\${key} {\${keys.length} properties}\`;
    }
    
    return key;
}

export function generateDocsFromSchema() {
    const schemaPath = path.join(__dirname, '..', 'definition', 'schema.canon');
    
    if (!fs.existsSync(schemaPath)) {
        console.error('Schema file not found:', schemaPath);
        return;
    }
    
    const hierarchy = parseSchemaFile(schemaPath);
    const html = generateHtml(hierarchy);
    
    const outputPath = path.join(__dirname, '..', 'docs', 'hierarchy.html');
    const docsDir = path.dirname(outputPath);
    
    if (!fs.existsSync(docsDir)) {
        fs.mkdirSync(docsDir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, html);
    console.log(\`Documentation generated: \${outputPath}\`);
}

if (require.main === module) {
    generateDocsFromSchema();
}
