// example of a linked list to create a node at the beginning of the list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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

  prepend(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      this.head = this.head.next;

      if (!this.head) this.tail = null;
      this.size--;
    }
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        let prev = this.head;

        while (prev.next !== this.tail) {
          prev = prev.next;
        }
        prev.next = null;
        this.tail = prev;
      }
      this.size--;
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let current = this.head;
      let listValues = "";

      while (current) {
        listValues += `${current.value} `;
        current = current.next;
      }
      console.log(listValues);
    }
  }
}

// const list = new LinkedList();

// console.log(list.isEmpty());
// console.log(list.getSize());
// list.prepend(5);
// list.prepend(10);
// list.append(12);
// list.append(20);
// list.append(25);
// list.print();

// list.removeFromFront();
// list.removeFromFront();
// list.print();

// list.removeFromEnd();
// list.print();

module.exports = LinkedList;

// time complexity: O(1)
// space complexity: O(n) where n is the number of elements in the linked list
