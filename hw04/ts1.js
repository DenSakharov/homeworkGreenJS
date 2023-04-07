var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    TreeNode.prototype.add = function (value) {
        if (this.value === value)
            return;
        if (value < this.value) {
            this.addLeft(value);
        }
        else {
            this.addRight(value);
        }
    };
    TreeNode.prototype.addLeft = function (value) {
        if (this.left) {
            return this.left.add(value);
        }
        this.left = new TreeNode(value);
    };
    TreeNode.prototype.addRight = function (value) {
        if (this.right) {
            return this.right.add(value);
        }
        this.right = new TreeNode(value);
    };
    return TreeNode;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree(head) {
        this.head = head || null;
    }
    BinarySearchTree.prototype.insert = function (node, value) {
        if (node === void 0) { node = this.head; }
        if (node === null) {
            var root = new TreeNode(value);
            return root;
        }
        else {
            if (value < node.value) {
                node.left = this.insert(node.left, value);
            }
            else {
                node.right = this.insert(node.right, value);
            }
            return node;
        }
    };
    BinarySearchTree.prototype.inorderTraversal = function (root) {
        if (root === void 0) { root = this.head; }
        var temp = root;
        if (temp !== null) {
            this.inorderTraversal(temp.left);
            console.log(temp.value);
            this.inorderTraversal(temp.right);
        }
    };
    BinarySearchTree.prototype.preoderTraversal = function (root) {
        if (root === void 0) { root = this.head; }
        var temp = root;
        if (temp !== null) {
            console.log(temp.value);
            this.inorderTraversal(temp.left);
            this.inorderTraversal(temp.right);
        }
    };
    BinarySearchTree.prototype.postTraversal = function (root) {
        if (root === void 0) { root = this.head; }
        var temp = root;
        if (temp !== null) {
            this.inorderTraversal(temp.left);
            this.inorderTraversal(temp.right);
            console.log(temp.value);
        }
    };
    BinarySearchTree.prototype.search = function (node, value) {
        if (node === void 0) { node = this.head; }
        var temp = node;
        if (temp === null) {
            return null;
        }
        else if (temp.value === value) {
            return temp;
        }
        else {
            if (value < temp.value) {
                return this.search(temp.left, value);
            }
            else {
                return this.search(temp.right, value);
            }
        }
    };
    return BinarySearchTree;
}());
var rootNode = new TreeNode(50);
rootNode.left = new TreeNode(35);
rootNode.right = new TreeNode(60);
var tree = new BinarySearchTree(rootNode);
tree.insert(tree.head, 30);
tree.insert(tree.head, 20);
tree.insert(tree.head, 40);
tree.insert(tree.head, 20);
tree.insert(tree.head, 60);
tree.insert(tree.head, 70);
tree.insert(tree.head, 80);
//console.log(tree)
//tree.inorderTraversal()
console.log(tree.search(tree.head, 70));
