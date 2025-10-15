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

  append(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;

      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, position) {
    if (position < 0 || position > this.size) return;

    if (position === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;

      for (let i = 0; i < position - 1; i++) {
        prev = prev.next;
      }

      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) return null;
    let removedNode;

    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      if (this.head.value === value) {
        this.head = this.head.next;
        this.size--;
      } else {
        let prev = this.head;
        while (prev.next && prev.next.value !== value) {
          prev = prev.next;
        }
        if (prev.next) {
          prev.next = prev.next.next;
          this.size--;
        }
      }
    }
  }

  searchValue(value) {
    if (this.isEmpty()) {
      console.log(-1);
    } else {
      let i = 0;
      let current = this.head;

      while (current) {
        if (current.value === value) {
          console.log(i);
          return;
        }
        i++;
        current = current.next;
      }
      console.log(-1);
    }
  }

  reverse() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let prev = null;
      let current = this.head;

      while (current) {
        const next = current.next;
        current.next = prev;

        prev = current;
        current = next;
      }
      this.head = prev;
    }
  }

  toReverse() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let current = this.head;
      let listValues = "";

      while (current) {
        listValues = `${current.value} ${listValues}`;
        current = current.next;
      }
      console.log("listValues", listValues);
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

const list = new LinkedList();

console.log(list.isEmpty());
console.log(list.getSize());
list.print();

list.prepend(40);
list.print();

list.prepend(30);
list.prepend(20);
list.insert(10, 0);
list.prepend(5);

list.append(5);
list.print();

// list.removeFrom(3);
// list.removeValue(10);
list.print();
list.searchValue(22);
list.toReverse();
// list.print();
list.reverse();
list.print();

// time complexity: O(1)
// space complexity: O(n) where n is the number of elements in the linked list
