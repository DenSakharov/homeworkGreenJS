class TreeNode{
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(value: number){
        this.value=value
        this.left=null
        this.right=null
    }
    add(value){
        if(this.value === value) return
        if(value<this.value){
            this.addLeft(value)
        }
        else{
            this.addRight(value)
        }
    }
    addLeft(value){
        if(this.left){
            return this.left.add(value)
        }
        this.left=new TreeNode(value)
    }
    addRight(value){
        if(this.right){
            return this.right.add(value)
        }
        this.right=new TreeNode(value)
    }
}

class BinarySearchTree{
    head: TreeNode | null
    constructor(head?: TreeNode) {
        this.head = head || null
    }
    insert(node: TreeNode | null = this.head, value: number): TreeNode{
        if(node === null){
            const root = new TreeNode(value)
            return root
        }
        else{
            if(value<node.value){
                node.left = this.insert(node.left,value)
            }
            else{
                node.right = this.insert(node.right,value)
            }
            return node
        }
    }
    inorderTraversal(root: TreeNode | null = this.head): void{
        let temp = root
        if(temp!==null){
            this.inorderTraversal(temp.left)
            console.log(temp.value)
            this.inorderTraversal(temp.right)
        }
    }
    preoderTraversal(root: TreeNode | null = this.head): void{
        let temp = root
        if(temp!==null){
            console.log(temp.value)
            this.inorderTraversal(temp.left)
            this.inorderTraversal(temp.right)
        }
    }
    postTraversal(root: TreeNode | null = this.head): void{
        let temp = root
        if(temp!==null){
            this.inorderTraversal(temp.left)
            this.inorderTraversal(temp.right)
            console.log(temp.value)
        }
    }
    search(node: TreeNode | null = this.head, value: number): TreeNode | null{
        let temp = node
        if (temp ===null ){
            return null
        }
        else if( temp.value === value){
            return temp
        }
        else {
            if( value < temp.value){
                return this.search(temp.left,value)
            }
            else {
                return this.search(temp.right,value)
            }
        }
    }
}
const rootNode = new TreeNode(50)
rootNode.left= new TreeNode(35)
rootNode.right= new TreeNode(60)

const tree = new BinarySearchTree(rootNode)
tree.insert(tree.head,30)
tree.insert(tree.head,20)
tree.insert(tree.head,40)
tree.insert(tree.head,20)
tree.insert(tree.head,60)
tree.insert(tree.head,70)
tree.insert(tree.head,80)
//console.log(tree)
//tree.inorderTraversal()
console.log(tree.search(tree.head,70))


