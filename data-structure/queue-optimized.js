class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }
  dequeue() {
    if (this.isEmpty()) return "Queue is empty!";
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front] || null;
  }

  size() {
    return this.rear - this.front;
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

// time complexity: O(1) for all operations (enqueue, dequeue, peek, isEmpty, size)
// space complexity: O(n) where n is the number of elements in the queue
