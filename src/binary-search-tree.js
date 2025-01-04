const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    //this.rootNode = new Node(null);
  }

  root() {
    if(!this.rootNode) return null;
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addWithin(this.rootNode, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchWithin(this.rootNode, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data
        ? searchWithin(node.left, data)
        : searchWithin(node.right, data);
    }
  }

  find(data) {
    if (!this.rootNode) return null;

    let current = this.rootNode;
    let found = false;
    while (current && !found) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        found = current;
      }
    }

    if (!found) return null;
    return found;
  }

  remove(/*data*/) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  min() {
    return minNode(this.rootNode).data;

    function minNode(node){

    if (node.left === null)
        return node;
    else
        return minNode(node.left);
    }
  }

  max() {
    return maxNode(this.rootNode).data;

    function maxNode(node){

    if (node.right === null)
        return node;
    else
        return maxNode(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree,
};
