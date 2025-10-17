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

  // depth first search
  preOrder(root) {
    if (root) {
      console.log("pre-order", root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log("in-order", root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log("post-order", root.value);
    }
  }

  print() {
    console.log("dasdasd", this.root);
  }
}

const bst = new BinarySearchTree();
console.log(bst.isEmpty());

bst.insertValue(10);
bst.insertValue(5);
bst.insertValue(15);
bst.insertValue(3);
bst.insertValue(7);
// bst.print();

// bst.preOrder(bst.root);
// bst.inOrder(bst.root);
bst.postOrder(bst.root);

// console.log(bst.search(bst.root, 5));
// console.log(bst.search(bst.root, 5));
// console.log(bst.search(bst.root, 15));
