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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let count = 0;
    let ans = null;
    let traverse =  (curr) => {
        if(ans!=null) return;
        curr.left && traverse(curr.left);
        count++;
        if(count==k){
            ans = curr.val;
            return;
        }
        curr.right && traverse(curr.right);
    }
    traverse(root);
    return ans;
};