export default class Stack {
  constructor() {
    this.elements = [];
  }

  push(el) {
    this.elements.push(el);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Tried to .pop() empty stack");
    } else {
      this.elements.pop();
    }
  }

  size() {
    return this.elements.length;
  }

  top() {
    return this.elements[this.elements.length - 1];
  }

  bottom() {
    return this.elements[0];
  }

  isEmpty() {
    return this.elements.length == 0 ? true : false;
  }
}
