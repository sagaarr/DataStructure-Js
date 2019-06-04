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

  find(value){
    if(!this.root) return false;
    let current = this.root,
        found = false;
    while(current && !found){
      // If value that user is trying to find is less than current value then move to the left side and change the current value to the current.left
      if(value < current.value){
        current = current.left;
      }else if(value > current.value){
         // If value that user is trying to find is greater than current value then move to the right side and change the current value to the current.right
        current = current.right;
      }else{
        // this condition only be executed if "value" nither greater than or less than the current.value !!!
        found = true;
      }
      return current;
    }
  }
}

let tree = new BST();