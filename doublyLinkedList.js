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

shift(){
  if(!this.head) return "Nothing to Remove"
  let shiftHead = this.head.next ;
  if(this.length == 1){
    this.head = null,
    this.tail = null
  } else{
    this.head.next = null;
    shiftHead.prev = null;
    this.head = shiftHead;
  }
  this.length--;
  return this;
}

unshift(val){
  let newHeader = new Node(val);
  if(!this.head){
    //if(this.length == 0)
    this.head = newHeader;
    this.tail = this.head
  }else{
    newHeader.next = this.head;
    this.head.prev = newHeader;
    this.head = newHeader;
  }
  this.length++;
  return this;
}

// get(index){
//   if(index < 0 || index >= this.length) return "Invalid input"
//   let middle = Math.floor(this.length / 2);
//   let start = this.head
//   let end = this.tail;

//   for(let i = 0 ; i<= middle + 1 ; i++){
//     if(i == index){
//       return start
//     }else{
//       start = this.head.next
//     }
//   }

//   for(let j = this.length + 1; j > middle ; j--){
//     if(j == index){
//       return end
//     }else{
//       end = this.tail.prev
//     }
//   }
// }
get(index){
  if(index < 0 || index >= this.length) return null;
  var count, current;
  if(index <= this.length/2){
      count = 0;
      current = this.head;
      while(count !== index){
          current = current.next;
          count++;
      }
  } else {
      count = this.length - 1;
      current = this.tail;
      while(count !== index){
          current = current.prev;
          count--;
      }
  }
  return current;
}

set(index, val){
  if(index < 0 || index >= this.length){
    return "Invalid Input"
  } 
  let changeVal = this.get(index);
  changeVal.val = val;
  return true
  // let changeVal = this.get(index);
  // if(changeVal !== null){
  //   changeVal.val = val;
  //   return true
  // }
  // return false
  // }
}

insert(index, val){
  if(index < 0 || index > this.length) return "Invalid input"
  if(index == 0) return !!this.unshift(val)
  if(index === this.length) return !!this.push(val)
  let newVal = new Node(val);
  let location = this.get(index -1);
  let nextLocation = location.next;
  newVal.next = nextLocation, newVal.prev = location;
  location.next = newVal, nextLocation.prev = newVal;
  this.length++ ;
  return true;
}

}


let list = new DoublyLinkdList();

list.push(100)
list.push(200)
list.push("sagar")
list.push("chinchorkar")
list.push("last Item")
