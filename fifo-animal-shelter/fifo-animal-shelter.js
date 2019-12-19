import { isModuleSpecifier } from '@babel/types';

class Animal {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class AnimalShelter {
  constructor() {
    this.front = null;
    this.back = null;
  }
  
  enqueue(value) {
    const node = new Node(value, null);
    if(this.isEmpty()) {
      this.front = node;
    } else {
      this.back.next = node;
    }
    this.back = node;
  }
  
  dequeue(pref) {
    if(this.isEmpty()) return null;
  
    const front = this.front;
    this.front = this.front.next;
    if(this.isEmpty()) this.back = null;
  
    if(pref === front.value) return front;
  }
  
  peek() {
    if(this.isEmpty()) return null;
    return this.front.value;
  }
  
  isEmpty() {
    return !this.front;
  }
}
module.export(AnimalShelter);
