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
var goodNodes = function(root) {
    let count = 0;
    let traverse = (curr, maxSoFar) => {
        if(!curr) return;
        if (curr.val >= maxSoFar) {
            count++;
        }
        maxSoFar = Math.max(maxSoFar, curr.val);

        traverse(curr.left, maxSoFar);
        traverse(curr.right, maxSoFar);
    }
    traverse(root, root.val);
    return count;
};