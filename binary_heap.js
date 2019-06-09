class MaxBinaryHeaps{
  constructor(){
    this.value = [41,39,33,18,27,12];
  }
  insert(elements){
    // Push the newly inserted elements to array.
    this.value.push(elements);
    // call bubbleUp
    this.bubbleUp();
  }
  bubbleUp(){
    // get the index of newly added element
    let idx = this.value.length - 1 ;
    // get the value of newly added element
    const element = this.value[idx];
    // while index of newly added element is less than 0 continue the loop
    while(idx > 0){
      // get the parent index.
      let parentIdx = Math.floor((idx - 1)/ 2);
      // get the value of parent element
      let parent = this.value[parentIdx];
      if(element <= parent) break;
      // swap the value of both the elements if child element node value is larger than the parent node element value
      this.value[parentIdx] = element;
      this.value[idx] = parent;
      // re-assign the new index value.
      idx = parentIdx;
    }
  }
  
}

let heap = new MaxBinaryHeaps();
heap.insert(55);