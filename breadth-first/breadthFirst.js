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

