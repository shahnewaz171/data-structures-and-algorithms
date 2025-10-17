class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.items[0];
  }

  dequeue() {
    if (this.isEmpty()) return "Queue is empty!";
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items);
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);
console.log(queue.size());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());

// time complexity: O(n) for dequeue because of shift operation
// space complexity: O(n) where n is the number of elements in the queue
