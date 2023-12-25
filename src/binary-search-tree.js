const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
    constructor() {
      this.head = null
    }
  root() {
    return this.head
  }

  add(data) {
    let newNode = new Node(data)
    if(!this.head){
      this.head = newNode
      return 
     }
     let currentNode = this.head;

     while(currentNode){
      if (newNode.data < currentNode.data) {
        if(!currentNode.left){
          currentNode.left = newNode
          return
        }
        currentNode = currentNode.left
      } else {
        if(!currentNode.right){
          currentNode.right = newNode
          return
        }
        currentNode = currentNode.right
      }
     }
  }

  has(data) {
    let currentNode = this.head;
    
    while (currentNode) {
      debugger
      if (!currentNode) {
          return false
        }
    if (currentNode.data === data ) {
      return true
    }
    if (currentNode.data && currentNode.data > data) {
      currentNode = currentNode.left
    } 
     else  {
      currentNode = currentNode.right
    } 
   
  }
  return false
  }

  find(data) {
    let currentNode = this.head;
    
    while (currentNode) {
      debugger
      if (!currentNode) {
          return null
        }
    if (currentNode.data === data ) {
      return currentNode
    }
    if (currentNode.data && currentNode.data > data) {
      currentNode = currentNode.left
    } 
     else  {
      currentNode = currentNode.right
    } 
   
  }
  return null
  }

  remove(data) {
    this.head = removeNode(this.head, data)

    function removeNode(node, data){
      if (!node) {
        return null
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } else if (node.data < data) {
        node.right = removeNode(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }
        if (!node.left) {
          node = node.right
          return node
        }
        if (!node.right) {
          node = node.left
          return node
        }

        let minFromRight = node.right;
        while(minFromRight.left) {
          minFromRight = minFromRight.left
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data)
        return node;
      }
    }
  }
 
  min() {
    if (!this.head) {
      return;
    }

    let correntNode = this.head

    while(correntNode.left){
      correntNode = correntNode.left
    }
    return correntNode.data
  }

  max() {
    if (!this.head) {
      return;
    }

    let correntNode = this.head

    while(correntNode.right){
      correntNode = correntNode.right
    }
    return correntNode.data
  }
}

module.exports = {
  BinarySearchTree
};