"use strict";
exports.__esModule = true;
exports.BinaryTree = void 0;
var TreeNode_1 = require("./TreeNode");
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
    }
    BinaryTree.prototype.insert = function (data) {
        this.root = this.insertRec(this.root, data);
    };
    BinaryTree.prototype.insertRec = function (root, data) {
        if (root == null) {
            root = new TreeNode_1.TreeNode(data);
            return root;
        }
        if (data < root.data)
            root.left = this.insertRec(root.left, data);
        else if (data > root.data)
            root.right = this.insertRec(root.right, data);
        return root;
    };
    BinaryTree.prototype.inoder = function () {
        this.inoderRec(this.root);
    };
    BinaryTree.prototype.inoderRec = function (root) {
        if (root != null) {
            this.inoderRec(root.left);
            console.log(root.data + " ");
            this.inoderRec(root.right);
        }
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
