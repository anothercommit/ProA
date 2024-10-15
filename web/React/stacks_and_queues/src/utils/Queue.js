export default class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      // raise error
    }
  }

  isEmpty() {
    return queue.length() == 0 ? true : false;
  }
}
