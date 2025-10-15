class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
    return this.items;
  }

  pop() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const stack = new Stack();
console.log(stack.push(50)); // [50]
console.log(stack.push(25)); // [25, 50]
console.log(stack.push(75)); // [75, 25, 50]
console.log(stack.pop()); // 75
console.log(stack.size()); // 2
console.log(stack.peek()); // 25
console.log(stack.items); // Stack { items: [25, 50] }

// time complexity: O(1) for push, pop, peek, isEmpty, and size operations
// space complexity: O(n) where n is the number of elements in the stack
