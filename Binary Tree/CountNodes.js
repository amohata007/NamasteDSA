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
var countNodes = function(root) {
    // if(!root) return 0;
    // let count = 0;

    // let traverse = (curr) => {
    //     if(!curr) return;
    //     curr.left && traverse(curr.left);
    //     curr.right && traverse(curr.right);
    //     count++;
    // }
    // traverse(root);
    // return count;

    if (!root) return 0;
    
    return 1 + countNodes(root.left) + countNodes(root.right);
};