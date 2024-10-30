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

    find(value) {
        return this.root ? this._findRecursively(value) : false;
    }

    _findRecursively(value, currentNode = this.root) {
        if (currentNode.value == null) return false;
        if (currentNode.value == value) return true;

        return value > currentNode.value
            ? currentNode.right
                ? this._findRecursively(value, currentNode.right)
                : true
            : currentNode.left
              ? this._findRecursively(value, currentNode.left)
              : true;
    }
}
