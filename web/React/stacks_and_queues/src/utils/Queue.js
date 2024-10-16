export default class Queue {
  constructor() {
    this.elements = [];
  }

  enqueue(element) {
    this.elements.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Tried to .dequeue() empty queue");
    } else {
      this.elements.shift();
    }
  }

  size() {
    return this.elements.length;
  }

  front() {
    return this.elements[0];
  }

  back() {
    return this.elements[this.elements.length - 1];
  }

  isEmpty() {
    return this.elements.length == 0 ? true : false;
  }
}
