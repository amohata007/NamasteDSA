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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    let ans = false;
    function trav(curr,currSum){
        let newSum = currSum+curr.val;
        if(!curr.left && !curr.right){
            if(newSum === targetSum){
                ans = ans || true;
            }
        }
        curr.left && trav(curr.left,newSum);
        curr.right && trav(curr.right, newSum);
    }
    trav(root,0);
    return ans;
};