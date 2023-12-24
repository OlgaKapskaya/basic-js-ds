const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.node = null;
  }

  root() {
    return this.node;
  }

  add(data) {
    const newNode = new Node(data);
    (this.node === null) ? this.node = newNode : this.insertNode(this.node, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      (!node.left) ? node.left = newNode : this.insertNode(node.left, newNode)
    } else {
      (!node.right) ? node.right = newNode : this.insertNode(node.right, newNode);
    }
  }

  has(data) {
    return this.searchNode(this.node, data);
  }

  searchNode(node, data) {
    return (!node)
        ? false
        : (data === node.data)
            ? true
            : (data < node.data)
                ? this.searchNode(node.left, data)
                : this.searchNode(node.right, data)
  }

  find(data) {
    return this.findNode(this.node, data);
  }

  findNode(node, data) {
    return (!node)
        ? null
        : (data === node.data)
            ? node
            : (data < node.data)
                ? this.findNode(node.left, data)
                : this.findNode(node.right, data)
  }

  remove(data) {
    this.node = this.removeNode(this.node, data);
  }

  removeNode(node, data) {
    if (!node) {
      return null;
    }

    if (data === node.data) {

      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null) {
        return node.right;
      }

      if (node.right === null) {
        return node.left;
      }

      const minRightNode = this.findMinNode(node.right);
      node.data = minRightNode.data;
      node.right = this.removeNode(node.right, minRightNode.data);
      return node;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else {
      node.right = this.removeNode(node.right, data);
      return node;
    }
  }

  findMinNode(node) {
    return (!node.left) ? node : this.findMinNode(node.left);
  }

  min() {
    if (!this.node) {
      return null;
    }
    let current = this.node;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (!this.node) {
      return null;
    }
    let current = this.node;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};