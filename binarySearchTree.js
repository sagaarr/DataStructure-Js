class Node{
  constructor(value){
    this.value= value;
    this.left = null;
    this.right = null;
  }
}

class BST{
  constructor(){
    this.root = null;
  }
  insert(value){
    let newNode = new Node(value);
    if(!this.root){
      this.root = newNode;
      return this;
    }
      let current = this.root;
      while(true){
        if(value == current.value) return undefined;
          if(value < current.value){
              if(current.left === null){
                  current.left = newNode;
                  return this;
              }
              current = current.left;
          } else {
              if(current.right === null){
                  current.right = newNode;
                  return this;
              } 
              current = current.right;
          }
      }
      
  }
}

let tree = new BST();