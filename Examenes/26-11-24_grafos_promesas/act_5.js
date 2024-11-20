import BinaryTree from "./utils/BinaryTree.js";

function validateTraversals(arbol) {
    return {
        preOrder: arbol.preOrder(),
        inOrder: arbol.inOrder(),
        postOrder: arbol.postOrder(),
    };
}

const arbol = new BinaryTree();
arbol.insert(10, 5, 3, 7, 20, 15, 25);

const validation = validateTraversals(arbol);

console.log(...validation.preOrder);
console.log(...validation.inOrder);
console.log(...validation.postOrder);
