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
 * @return {number}
 */
var findTilt = function(root) {
    if(!root) return 0;
    let sum = 0;
    let traverse = (curr) => {
        if(!curr) return 0;
        let leftPath =traverse(curr.left);
        let rightPath =traverse(curr.right);
        sum += Math.abs(leftPath - rightPath);
        return leftPath +rightPath+curr.val;
    }
    traverse(root);
    return sum;
};