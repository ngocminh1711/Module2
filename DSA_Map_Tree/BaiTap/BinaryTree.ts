import {TreeNode} from "./TreeNode"


export class BinaryTree {
    root : any;
    constructor(){
        this.root = null;
    }
    insert(data){
        this.root = this.insertRec(this.root, data);
    }
    insertRec(root,data) {
        if (root == null) {
        root = new TreeNode(data);
        return root;
        }
        if (data < root.data)
            root.left = this.insertRec(root.left, data);
        else if (data > root.data)
            root.right = this.insertRec(root.right,data);
        return root;
    }
    inoder() {
        this.inoderRec(this.root);
    }
    inoderRec(root) {
        if (root != null) {
            this.inoderRec(root.left)
            console.log(root.data + " ");
            this.inoderRec(root.right);
        }
    }
}