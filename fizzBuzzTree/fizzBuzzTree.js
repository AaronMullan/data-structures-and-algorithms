function Node(data) {
  this.data = data;
  this.parent = null;
  this.children = [];
}
function Tree(data) {
  var node = new Node(data);
  this._root = node;
}

const tree = new Tree('one');
 
tree._root.children.push(new Node('two'));
tree._root.children[0].parent = tree;
 
tree._root.children.push(new Node('three'));
tree._root.children[1].parent = tree;
 
tree._root.children.push(new Node('four'));
tree._root.children[2].parent = tree;
 
tree._root.children[0].children.push(new Node('five'));
tree._root.children[0].children[0].parent = tree._root.children[0];
 
tree._root.children[0].children.push(new Node('six'));
tree._root.children[0].children[1].parent = tree._root.children[0];
 
tree._root.children[2].children.push(new Node('seven'));
tree._root.children[2].children[0].parent = tree._root.children[2];

console.log(tree);

// function Fizzbuzztree (tree){
//   //now some magic happens
// }
