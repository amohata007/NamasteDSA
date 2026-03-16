/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var evaluateTree = function(root) {
    if(!root.right && !root.left){
        return root.val === 1;
    }
    const left = evaluateTree(root.left)
    const right = evaluateTree(root.right)

    if(root.val===2){
        return left || right;
    }
    else{
        return left && right;
    }
};