class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  #createNode(value) {
    return new Node(value);
  }

  prepend(value) {
    const node = this.#createNode(value);

    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
    return this;
  }

  append(value) {
    const node = this.#createNode(value);

    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
    return this;
  }

  insert(value, position) {
    if (position < 0 || position > this.size) return false;
    if (position === 0) return !!this.prepend(value);
    if (position === this.size) return !!this.append(value);

    const node = this.#createNode(value);
    const current = this.#getNodeAt(position);

    node.prev = current.prev;
    node.next = current;
    current.prev.next = node;
    current.prev = node;

    this.size++;
    return true;
  }

  removeFromFront() {
    if (this.isEmpty()) return null;

    const value = this.head.value;
    this.head = this.head.next;

    if (this.head) this.head.prev = null;
    else this.tail = null;

    this.size--;
    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) return null;

    const value = this.tail.value;
    this.tail = this.tail.prev;

    if (this.tail) this.tail.next = null;
    else this.head = null;

    this.size--;
    return value;
  }

  removeFrom(position) {
    if (position < 0 || position >= this.size) return null;
    if (position === 0) return this.removeFromFront();
    if (position === this.size - 1) return this.removeFromEnd();

    const current = this.#getNodeAt(position);
    current.prev.next = current.next;
    current.next.prev = current.prev;
    this.size--;
    return current.value;
  }

  removeValue(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        if (current === this.head) return this.removeFromFront();
        if (current === this.tail) return this.removeFromEnd();

        current.prev.next = current.next;
        current.next.prev = current.prev;
        this.size--;
        return value;
      }
      current = current.next;
    }
    return null;
  }

  search(value) {
    let current = this.head,
      index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  reverse() {
    if (this.size < 2) return this;

    let current = this.head;
    while (current) {
      [current.next, current.prev] = [current.prev, current.next];
      current = current.prev;
    }
    [this.head, this.tail] = [this.tail, this.head];
    return this;
  }

  #getNodeAt(position) {
    if (position < this.size / 2) {
      let current = this.head;
      for (let i = 0; i < position; i++) current = current.next;
      return current;
    } else {
      let current = this.tail;
      for (let i = this.size - 1; i > position; i--) current = current.prev;
      return current;
    }
  }

  print() {
    const values = [];
    for (let curr = this.head; curr; curr = curr.next) values.push(curr.value);
    console.log(values.join(" <-> ") + " <-> null");
  }

  printReverse() {
    const values = [];
    for (let curr = this.tail; curr; curr = curr.prev) values.push(curr.value);
    console.log(values.join(" <-> ") + " <-> null");
  }
}

const list = new DoublyLinkedList();

list.prepend(30).prepend(20).prepend(10);
list.append(40);
list.insert(25, 2);

list.print();
list.printReverse();
