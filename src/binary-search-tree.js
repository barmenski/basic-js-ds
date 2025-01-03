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
    if (!this.root) return null;

    let current = this.root;
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

    if (!found) return undefined;
    return found;
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    // a recursive function to insert a new data in binary search tree

    function removeNode(current, data) {
      // base case, if the tree is empty

      if (current === null) return current;

      // when data is the same as current's data, this is the node to be deleted

      if (data === current.data) {
        // for case 1 and 2, node without child or with one child

        if (current.left === null && current.right === null) {
          return null;
        } else if (current.left === null) {
          return current.right;
        } else if (current.right === null) {
          return current.left;
        } else {
          /// node with two children, get the inorder successor,
          //smallest in the right subtree

          let tempNode = kthSmallestNode(current.right);
          current.data = tempNode.data;

          /// delete the inorder successor

          current.right = removeNode(current.right, tempNode.data);
          return current;
        }

        // recur down the tree
      } else if (data < current.data) {
        current.left = removeNode(current.left, data);
        return current;
      } else {
        current.right = removeNode(current.right, data);
        return current;
      }
    }

    /// helper function to find the smallest node

    function kthSmallestNode(node) {
      while (!node.left === null) node = node.left;

      return node;
    }
  }
  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
