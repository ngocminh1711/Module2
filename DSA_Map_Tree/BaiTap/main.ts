import {BinaryTree} from "./BinaryTree";

let tree = new BinaryTree();

tree.insert(25);
tree.insert(15);
tree.insert(14);
tree.insert(16);
tree.insert(30);
tree.insert(28);
tree.insert(35);

console.log(tree.root);

console.log(tree.inoder());