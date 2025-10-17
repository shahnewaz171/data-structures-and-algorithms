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

  // the min-max nodes
  minValue(root) {
    if (!root) return null;
    if (!root.left) return root.value;
    return this.minValue(root.left);
  }

  maxValue(root) {
    if (!root) return null;
    if (!root.right) return root.value;
    return this.maxValue(root.right);
  }

  // delete value and node
  deleteValue(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) return root;
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) return null;
      if (!root.left) return root.left;
      if (!root.right) return root.right;
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
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
bst.deleteValue(7);
bst.levelOrder();
