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

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
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