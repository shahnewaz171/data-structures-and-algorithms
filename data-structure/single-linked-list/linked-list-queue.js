const LinkedList = require("./linked-list-with-tail");

class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(element) {
    this.list.append(element);
  }

  dequeue() {
    return this.list.removeFromFront();
  }

  peak() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    this.list.print();
  }
}

const queue = new LinkedListQueue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();

queue.dequeue();
queue.print();
console.log(queue.peak());
