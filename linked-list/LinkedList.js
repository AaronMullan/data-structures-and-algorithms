class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value){
    const newNode = new Node(value, this.head);
    this.head = newNode;
  }
  includes(searchValue){
    let current = this.head;
    while(current) {
      if(searchValue === current.value) return true;
      current = current.next;
    }
    return false;
  }
  toString(){
    const nodes = [];
    let current = this.head;
    while(current) {
      nodes.push(current.value);
      current = current.next;
    }
    return nodes.join(' -> ');
  }
  append(value){
    const newNode = new Node(value);
    let current = this.head;
    while(current.next !== null){
      current = current.next;
    }
    current.next = newNode;
  }
  insertBefore(value, newVal) {
    const node = new Node(newVal);
    let current = this.head;
    if(this.head.value === value) {
      node.next = this.head;
      return this.head = node;
    }
    while(current.next.value !== value){
      current = current.next; 
    }
    node.next = current.next;
    current.next = node;
  }
  insertAfter(value, newVal) {
    const node = new Node(newVal);
    let current = this.head;
    while(current.value !== value){
      current = current.next; 
    }
    node.next = current.next;
    current.next = node;
  }
  deleteNode(value) {
    let current = this.head;
    while(current) {
      if(current.next) {
        let next = current.next;
        if(next.value === value) {
          current.next = next.next;
          break;
        }
      }
      current = current.next;
    }
  }
  kthFromEnd(val){
    let counter = 1;
    let current = this.head;
    while(current.next !== null){
      current = current.next;
      counter ++;
    }
    if(val > counter || val < 0){
      return 'exception';
    }
    if(val === counter){
      return val;
    }
    current = this.head;
    for(let i = 1; i < counter - val; i ++){
      current = current.head;
    }
    return current.value;
    // return 'hi'
  }
};
  
