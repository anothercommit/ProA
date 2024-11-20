import BinaryTree from "./utils/BinaryTree.js";

const arbol = new BinaryTree();
arbol.insert(10, 5, 3, 7, 20, 15, 25);

console.log(arbol.sumNodes());
