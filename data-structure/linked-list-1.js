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

    if (!this.isEmpty()) {
      node.next = this.head;
    }
    this.head = node;
    this.size++;
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

const list = new LinkedList();

console.log(list.isEmpty());
console.log(list.getSize());
list.print();

list.prepend(5);
list.print();

list.prepend(10);
list.prepend(20);
list.print();

// time complexity: O(1)
// space complexity: O(n) where n is the number of elements in the linked list
