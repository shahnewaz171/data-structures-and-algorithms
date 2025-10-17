class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insertValue(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else if (root.right === null) {
      root.right = newNode;
    } else {
      this.insertNode(root.right, newNode);
    }
  }

  search(root, value) {
    if (!root) return false;
    if (root.value === value) return true;
    if (value < root.value) {
      return this.search(root.left, value);
    }
    return this.search(root.right, value);
  }

  // Breadth First Search - Level Order Traversal
  // Uses queue with index tracking for O(1) dequeue operations
  levelOrder() {
    const queue = [];
    queue.push(this.root);

    while (queue.length) {
      const current = queue.shift();
      console.log(current.value);

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }
}

const bst = new BinarySearchTree();
console.log(bst.isEmpty());

bst.insertValue(10);
bst.insertValue(5);
bst.insertValue(15);
bst.insertValue(3);
bst.insertValue(7);

bst.levelOrder();

// console.log(bst.search(bst.root, 5));
// console.log(bst.search(bst.root, 5));
// console.log(bst.search(bst.root, 15));
