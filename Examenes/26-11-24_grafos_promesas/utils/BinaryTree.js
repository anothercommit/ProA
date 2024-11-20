import Node from "./Node.js";

export default class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert() {
        this.root
            ? this._insertRecursively(new Node(arguments[0]))
            : (this.root = new Node(arguments[0]));

        for (let i = 1; i < arguments.length; ++i)
            this._insertRecursively(new Node(arguments[i]));
    }

    _insertRecursively(newNode, currentNode = this.root) {
        newNode.value > currentNode.value
            ? currentNode.right
                ? this._insertRecursively(newNode, currentNode.right)
                : (currentNode.right = newNode)
            : currentNode.left
              ? this._insertRecursively(newNode, currentNode.left)
              : (currentNode.left = newNode);
    }

    preOrder(node = this.root, result = []) {
        if (!node) return result;

        result.push(node.value);

        result = this.preOrder(node.left, result);
        result = this.preOrder(node.right, result);

        return result;
    }

    inOrder(node = this.root, result = []) {
        if (!node) return result;

        result = this.inOrder(node.left, result);
        result.push(node.value);
        result = this.inOrder(node.right, result);

        return result;
    }

    postOrder(node = this.root, result = []) {
        if (!node) return result;

        result = this.postOrder(node.left, result);
        result = this.postOrder(node.right, result);

        result.push(node.value);

        return result;
    }

    sumNodes() {
        return {
            preOrder: this.preOrder().reduce((n, acc) => acc + n, 0),
            inOrder: this.inOrder().reduce((n, acc) => acc + n, 0),
            postOrder: this.postOrder().reduce((n, acc) => acc + n, 0),
        };
    }
}
