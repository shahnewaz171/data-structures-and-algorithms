const LinkedList = require("./linked-list-with-tail");

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.append(value);
  }

  pop() {
    this.list.removeFromEnd();
  }

  peek() {
    return this.list.tail.value;
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

const stack = new LinkedListStack();
console.log(stack.isEmpty());
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.getSize());
stack.print();

stack.pop();
stack.print();

console.log(stack.peek());
