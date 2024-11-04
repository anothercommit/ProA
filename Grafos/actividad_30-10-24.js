import BinaryTree from "./BinaryTree.js";

const arbol = new BinaryTree();

arbol.insert(123, 101, 90, 70, 55, 75, 125, 124, 127, 130, 150);
console.log(arbol.root.value);
console.log(arbol.root.left.value);
console.log(arbol.root.right.value);

const to_find = 130;
console.log("find", to_find, arbol.find(to_find));

console.log("in-order:", arbol.inOrder());
console.log("pre-order:", arbol.preOrder());
console.log("post-order:", arbol.inOrder());
