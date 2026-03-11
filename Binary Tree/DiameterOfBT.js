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
var diameterOfBinaryTree = function(root) {
    let maxD = 0;
    let calDimater = (curr) => {
        if(!curr) return 0;
        let leftD = calDimater(curr.left);
        let rightD = calDimater(curr.right);
        let currD = leftD + rightD;
        maxD = Math.max(currD,maxD);
        return 1 + Math.max(leftD,rightD);
    }
    calDimater(root);
    return maxD;

};