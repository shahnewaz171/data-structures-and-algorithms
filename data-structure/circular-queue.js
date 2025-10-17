class CircularQueue {
  constructor(capacity = 1) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  enqueue(element) {
    if (this.isFull()) return "Capacity is full!";
    this.rear = (this.rear + 1) % this.capacity;
    this.items[this.rear] = element;
    this.currentLength += 1;
    if (this.front === -1) {
      this.front = this.rear;
    }
  }

  dequeue() {
    if (this.isEmpty()) return "Queue is empty!";

    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;

    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  peek() {
    if (this.isEmpty()) return "Queue is empty!";
    return this.items[this.front];
  }

  size() {
    return this.currentLength;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty!");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += `${this.items[i]} `;
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const queue = new CircularQueue(5);
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log(queue.isFull());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());
queue.print();

queue.enqueue(60);
queue.print();

console.log("test for newly added element:", queue.dequeue());
console.log(queue.peek());
queue.print();

// time complexity: O(1)
// space complexity: O(n) where n is the number of elements in the queue
