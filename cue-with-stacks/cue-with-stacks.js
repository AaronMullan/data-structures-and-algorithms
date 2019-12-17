class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
  

class  Stack {
  constructor() {
    this.top = null;
  }
  
  push(value) {
    const node = new Node(value, this.top);
    this.top = node;
  }
  
  pop() {
    if(!this.top) return null;
  
    const top = this.top;
    this.top = top.next;
    return top;
  }
  
  peek() {
    if(!this.top) return null;
    return this.top.value;
  }
  
  isEmpty() {
    return !this.top;
  }
}
class PseudoQueue {
  constructor(queue, arg){
    const stack1 = new Stack;
    const stack2 = new Stack;

    encue(){
        stack2.push(queue);
        stack1.push(stack2);
        stack1.push(arg);
        return stack1;
    }

    dequeue(){
        stack2.push(stack1);
        const poppedVal = stack2.pop;
        stack1.push(stack2);
        return poppedVal;
    };
};
}
