class TreeNode {
  constructor(value) {
    this.value = value;
    this.descendents = [];
  }
}
const one = new TreeNode(1);
const two = new TreeNode(2);
const three = new TreeNode(3);

one.descendents.push(two, three);

function Fizzbuzztree (tree){
  //now some magic happens
}
