function Node(data) {
  this.data = data;
  this.parent = null;
  this.children = [];
}
function Tree(data) {
  const node = new Node(data);
  this._root = node;
}

const tree = new Tree(3);
 
tree._root.children.push(new Node(5));
tree._root.children[0].parent = tree;
 
tree._root.children.push(new Node(15));
tree._root.children[1].parent = tree;
 
tree._root.children.push(new Node(4));
tree._root.children[2].parent = tree;
 
tree._root.children[0].children.push(new Node(17));
tree._root.children[0].children[0].parent = tree._root.children[0];
 
tree._root.children[0].children.push(new Node(60));
tree._root.children[0].children[1].parent = tree._root.children[0];
 
tree._root.children[2].children.push(new Node(25));
tree._root.children[2].children[0].parent = tree._root.children[2];

console.log(tree);

// Create an empty queue.
var queue = [];
// Add values to the end of the queue.
queue.push(1);                      // queue is now [1]
queue.push(2);                      // queue is now [1, 2]
// Remove the value at the top of the queue.
var topOfQueueValue = queue.shift(); 
console.log(topOfQueueValue);    // returns 1 
// The queue now has just one element in it.
console.log(queue);             // returns [2]

function breadthFirst(rootNode) {
  // Check that a root node exists.
  if (rootNode === null) {
    return;
  }
  
  // Create our queue and push our root node into it.
  var queue = [];
  queue.push(rootNode);
  
  // Continue searching through as queue as long as it's not empty.
  while (queue.length > 0) {
    // Create a reference to currentNode, at the top of the queue.
    var currentNode = queue[0];
    
    // If currentNode has a left child node, add it to the queue.
    if (currentNode.left !== null) {
      queue.push(currentNode.left)
    }
    // If currentNode has a right child node, add it to the queue.
    if (currentNode.right !== null) {
      queue.push(currentNode.right)
    }
    // Remove the currentNode from the queue.
    queue.shift()
  }
  
  // Continue looping through the queue until it's empty!
}