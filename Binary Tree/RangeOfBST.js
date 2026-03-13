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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let sum = 0;
    let sumTree = (curr) => {
        if(curr.val>=low && curr.val<=high){
            sum += curr.val;
        }
        curr.left && sumTree(curr.left);
        curr.right && sumTree(curr.right);
    }
    sumTree(root,sum);
    return sum;
};