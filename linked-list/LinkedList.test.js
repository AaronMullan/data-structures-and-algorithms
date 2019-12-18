const LinkedList = require('./linkedList');
describe('LinkedList methods', () => {
  
  it('instantiates an empty list', () => {
    const list = new LinkedList();
    expect(list).toEqual({ head: null });
  });
  it('Can properly insert into the linked list', () => {
    const list = new LinkedList();
    list.insert(10);
    expect(list.head.value).toEqual(10);
  });
  it('returns true if the value is present in a node', () => {
    const list = new LinkedList();
    list.insert(10);
    list.insert(5);
    list.insert(3);
    expect(list.includes(10)).toEqual(true);
  });
  it('returns false if the value is not present in a node', () => {
    const list = new LinkedList();
    list.insert(10);
    list.insert(5);
    list.insert(3);
    expect(list.includes(20)).toEqual(false);
  });
  it('returns a string with all of the nodes', () => {
    const list = new LinkedList();
    let nodes = [];
    list.insert(10);
    list.insert(5);
    list.insert(3);    
    expect(list.toString(nodes)).toEqual('3 -> 5 -> 10');
  });
  it('adds a node to the end of the linked list', () => {
    const list = new LinkedList();
    list.insert(10);
    list.insert(5);
    list.insert(3); 
    list.append(9); 
    expect(list.toString()).toEqual('3 -> 5 -> 10 -> 9');
  });
  it('adds multiple nodes to the end of the linked list', () => {
    const list = new LinkedList();
    list.insert(10);
    list.insert(5);
    list.insert(3); 
    list.append(9); 
    list.append(15);
    list.append(22);
    expect(list.toString()).toEqual('3 -> 5 -> 10 -> 9 -> 15 -> 22');
  });
  it('inserts a node before a node located in the middle of a linked list', () => {
    const list = new LinkedList();
    list.insert(10);
    list.insert(5);
    list.insert(3); 
    list.insertBefore(5, 9); 
    expect(list.toString()).toEqual('3 -> 9 -> 5 -> 10');
  });
  it('inserts a node before the first node of a linked list', () => {
    const list = new LinkedList();
    list.insert(10);
    list.insert(5);
    list.insert(3); 
    list.insertBefore(3, 9); 
    expect(list.toString()).toEqual('9 -> 3 -> 5 -> 10');
  });
  it('inserts after a node in the middle of the linked list', () => {
    const list = new LinkedList();
    list.insert(10);
    list.insert(5);
    list.insert(3); 
    list.insertAfter(5, 9); 
    expect(list.toString()).toEqual('3 -> 5 -> 9 -> 10');
  });
  it('inserts a node after the last node of the linked list', () => {
    const list = new LinkedList();
    list.insert(10);
    list.insert(5);
    list.insert(3); 
    list.insertAfter(10, 9); 
    expect(list.toString()).toEqual('3 -> 5 -> 10 -> 9');
  });
  it('deletes a node of given value from the linked list', () => {
    const list = new LinkedList();
    list.insert(10);
    list.insert(5);
    list.insert(3); 
    list.deleteNode(10); 
    expect(list.toString()).toEqual('3 -> 5');
  });
  it('returns EXCEPTION if k is greater than the length of the linkedlist', () => {
    const list = new LinkedList();
    list.insert(10);
    list.insert(5);
    list.insert(3); 
    expect(list.kthFromEnd(5)).toEqual('exception');
  });
  it('returns k where k and the length of the list are the same', () => {
    const list = new LinkedList();
    list.insert(10);
    list.insert(5);
    list.insert(3); 
    expect(list.kthFromEnd(3)).toEqual(3);
  });
  it('returns EXCEPTION if k is a negative integer', () => {
    const list = new LinkedList();
    list.insert(10);
    list.insert(5);
    list.insert(3); 
    expect(list.kthFromEnd(-2)).toEqual('exception');
  });
  it('returns something if the linked list 1 node long', () => {
    const list = new LinkedList();
    list.insert(10);
    expect(list.kthFromEnd(0)).toEqual(10);
  });
  it('returns the correct number if k is somewhere in the middle of the linked list', () => {
    const list = new LinkedList();
    list.insert(10);
    list.insert(5);
    list.insert(7); 
    list.insert(12); 
    list.insert(13); 
    expect(list.kthFromEnd(3)).toEqual(7);
  });
  it('finds the node at the middle of the linked list', () => {
    //Once you've achieved a working solution, implement a method that finds the node at the middle of the Linked List.
  });
});
