const tree = {
  name: "Root",
  children: [
    {
      name: "us_tv_and_film.txt",
      children: [
        {
          name: "us_tv_and_film.txt",
          children: [
            {
              name: "us_tv_and_film.txt",
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

// Função para exibir a árvore
function displayTree(node, prefix = "", isLast = true) {
  const marker = isLast ? "└─ " : "├─ ";
  console.log(prefix + marker + node.name);

  const childrenCount = node.children.length;
  node.children.forEach((child, index) => {
    const newPrefix = prefix + (isLast ? "    " : "│   ");
    const newIsLast = index === childrenCount - 1;
    displayTree(child, newPrefix, newIsLast);
  });
}

// Função para converter a árvore em uma representação em string
function displayTreeToString(node, prefix = "", isLast = true) {
  let treeString = ""; // Initialize empty string

  const marker = isLast ? "└─ " : "├─ ";
  treeString += prefix + marker + node.name + "\n"; // Append node line

  const childrenCount = node.children.length;
  node.children.forEach((child, index) => {
    const newPrefix = prefix + (isLast ? "    " : "│   ");
    const newIsLast = index === childrenCount - 1;
    treeString += displayTreeToString(child, newPrefix, newIsLast); // Recursive call
  });

  return treeString;
}

// Exemplo de uso:
const treeString = displayTreeToString(tree);
console.log(treeString); // Irá conter a representação da árvore como uma string

// Função para reconstruir a árvore a partir da saída de texto
function reverseEngineerTreeDisplay(outputText) {
  const lines = outputText.split("\n");
  const root = { name: "Root", children: [] };
  const stack = [{ node: root, depth: -1 }];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) {
      continue; // Ignore empty lines
    }

    const depth = (line.match(/│   /g) || []).length;
    const newNode = { name: line.trim(), children: [] };

    while (stack.length > 0 && stack[stack.length - 1].depth >= depth) {
      stack.pop();
    }

    const parent = stack[stack.length - 1].node;
    parent.children.push(newNode);

    stack.push({ node: newNode, depth });
  }

  return root.children[0]; // Retorna a raiz da árvore reconstruída
}

// Reversão da representação em string para a árvore
const reconstructedTree = reverseEngineerTreeDisplay(treeString);

// Exibir a árvore reconstruída
console.log(JSON.stringify(reconstructedTree, null, 2));
