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
  
  extractMax(){
    const max = this.value[0];
    const end = this.value.pop();
    this.value[0] = end;
    this.sinkDown();
    return max;
  }

  sinkDown(){
    let idx = 0;
    const length = this.value.length;
    const element = this.value[0];
    while(true){
      let leftChildIndex = 2 * idx + 1;
      let rightChildIndex = 2* idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if(leftChildIndex < length){
        leftChild = this.value[leftChildIndex];
        if(leftChild > element){
          swap = leftChildIndex;
        }
      }
      if(rightChildIndex < length){
        rightChild = this.value[rightChildIndex];
        if((swap === null && rightChild > element) ||
        (swap !== null && rightChild > leftChild)
        ){
            swap = rightChildIndex;
        }
      }
      if(swap === null) break;
      this.value[idx] = this.value[swap];
      this.value[swap] = element;
      idx = swap;

    }
  }
}

let heap = new MaxBinaryHeaps();
heap.insert(55);