class Node{
  constructor(val){
    this.val = val
    this.next = null;
    this.prev = null;
  }
}


class DoublyLinkdList{
  constructor(){
    this.head = null,
    this.tail = null,
    this.length = 0
  }

push(val){
  // if(!this.head){
  //   let newNode = new Node(val);
  //   this.head = newNode;
  //   this.tail = this.head;
  // } else {
  //   let end = new Node(val);
  //   let prev = this.tail;
  //   this.tail.next = end;
  //   this.tail = end;
  //   end.prev = prev;
  //   this.length++;
  // }
  // --------------------------
  // Both works differece is first solution is confusing and not a DRY solution.
  // ---------------------------
  let newNode = new Node(val);
  if(!this.head){
    this.head = newNode;
    this.tail = this.head;
  } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
  this.length++;
  return this;
}
pop(){
  if(!this.head) return "No Node!!! to remove"
  let currentTail = this.tail;
  if(this.length === 1){
    let val = this.head;
    this.head = null;
    this.tail = null;
    return val;
  }else{
    this.tail = this.tail.prev;
    this.tail.next = null;
    currentTail.prev = null;
  }
  this.length--;
  return currentTail;
}
}


let list = new DoublyLinkdList();

list.push(100)
list.push(200)
list.push("last Item")
