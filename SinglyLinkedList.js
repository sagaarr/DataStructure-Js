class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    let NewNode = new Node(val)
    
    if(!this.head){
      this.head = NewNode;
      // here we stored a instance of newNode inside of tail as well
      this.tail = NewNode;
      // this.tail = this.head;
    }else{
      // Because of storing NewNode instance inside of tail we can use next on it.
      // here we assign what to point next and assigning the next which will point to what it should look next
      this.tail.next = NewNode;
      // So, After that we are updating tail with the last node which was passed to make it new tail;
      this.tail = NewNode;
    }
    
    this.length ++;
    return this;
  }

  pop(){
    if(!this.head) return undefined;

    let Pre = this.head;
    let current = Pre;

    while(current.next){
      // 1   2   3
      // 1.[Pre(1),current(2)]  2.[Pre(2), current(3)]
      Pre = current;
      current = current.next;
    }

    this.tail = Pre;
    this.tail.next = null;
    this.length--;
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }

    return Pre;
  }

  shift(){
    if(!this.head) return undefined;
    let oldHead = this.head;
    let newHead = oldHead.next;
    this.head = newHead;
    this.length--;
    if(this.length === 0){
      this.tail = null
    }
    return oldHead;
  }

  unshift(val){
    if(!this.head){
      this.head = new Node(val);
      this.tail = this.head;
    }else{
      let oldHead = this.head;
      this.head = new Node(val);
      this.head.next = oldHead;
    }
    this.length++;
    return this.head;
  }

  get(loc){
    if(loc < 0 || loc >= this.length) return "Invalid input";
    let count = 0;
    let current = this.head;

    while(count !== loc){
      current = current.next;
      count++;
    }
    return current;
 }

 set(value,index){
   let found = this.get(index);
   if(found){
     found.val = value;
     return true;
   }
   return false;

 }
insert(index,val){
  if(index < 0 || index > this.length) return "Invalid Input"
  if(index == 0) return !! this.unshift(val)
  if(index == this.length) return !! this.push(val)


  let pre = this.get(index -1);
  let next = pre.next;
  let inputVal = new Node(val);
  pre.next = inputVal;
  inputVal.next = next;
  this.length++;
  return true

}
remove(index){
  if(index < 0 || index >= this.length) return "Invalid Index"
  if(index == 0) return this.shift()
  if(index == this.length -1) return this.pop();
  
  let Pre = this.get(index -1)
  let aheadVal = Pre.next;
  Pre.next = aheadVal.next;
  this.length--;
  return aheadVal

}
 reverse(){
  var node = this.head;
  this.head = this.tail;
  this.tail = node;
  var next;
  var prev = null;
  for(var i = 0; i < this.length; i++){
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return this;
}
 print(){
    var arr = [];
    var current = this.head
    while(current){
        arr.push(current.val)
        current = current.next
    }
    console.log(arr);
}

}


var list = new SinglyLinkedList()

list.push(100)
list.push(200)
list.push(300)

// this is the bad way of representing singly linked list
/*
let first = new Node("hi");
first.next = new Node("there")
first.next.next = new Node("How")
first.next.next.next = new Node("Are")
first.next.next.next.next = new Node("You?")

console.log(first)

*/