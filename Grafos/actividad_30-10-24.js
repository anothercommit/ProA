import BinaryTree from "./BinaryTree.js";

const arbol = new BinaryTree();

arbol.insert(123, 101, 90, 70, 55, 75, 125, 124, 127, 130, 150);
console.log(arbol.root.value);
console.log(arbol.root.left.value);
console.log(arbol.root.right.value);
