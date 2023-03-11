/* Given a binary tree, determine if it is height-balanced */

// My Solution: 

var isBalanced = function(root) {

    if(root == null)return true;
    let lh = height(root.left);
    let rh = height(root.right);
    if(Math.abs(lh - rh) <= 1 && isBalanced(root.left) == true && isBalanced(root.right) == true) return true
    return false;
};
function height(root){
    if(root == null)
        return 0
    return Math.max(height(root.left), height(root.right)) + 1
}
