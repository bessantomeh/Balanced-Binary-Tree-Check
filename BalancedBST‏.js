function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}
var isBalanced = function(root) {
    function checkHeight(node) {
        if (node === null) {
            return 0;
        }
        
        let leftHeight = checkHeight(node.left);
        let rightHeight = checkHeight(node.right);

        if (leftHeight === -1 || rightHeight === -1) {
            return -1;
        }
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }
     
        return Math.max(leftHeight, rightHeight) + 1;
    }
    
    return checkHeight(root) !== -1;
};
// input [3,9,20,null,null,15,7]
let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(isBalanced(root));  // true
