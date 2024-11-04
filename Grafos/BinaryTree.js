import Node from "./Node.js";

export default class BinaryTree {
    constructor() {
        this.root = null;
    }

    postOrder(node = this.root) {
        if (!node) return;

        return (
            this.inOrder(node.left) +
            this.inOrder(node.right) +
            node.value +
            " "
        );
    }

    preOrder(node = this.root) {
        if (!node) return;

        return (
            node.value +
            " " +
            this.inOrder(node.left) +
            this.inOrder(node.right)
        );
    }

    inOrder(node = this.root) {
        if (!node) return "";

        return (
            this.inOrder(node.left) +
            node.value +
            " " +
            this.inOrder(node.right)
        );
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

    find(value) {
        return this.root ? this._findRecursively(value) : false;
    }

    _findRecursively(value, currentNode = this.root) {
        if (currentNode.value == null) return false;
        if (currentNode.value == value) return true;

        return value > currentNode.value
            ? currentNode.right
                ? this._findRecursively(value, currentNode.right)
                : false
            : currentNode.left
              ? this._findRecursively(value, currentNode.left)
              : false;
    }
}
