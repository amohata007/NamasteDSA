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
//Top Down Approach
var maxDepth = function(root) {
    // if(!root) return 0;
    // let level = 0;
    // let maxLevel = 0;

    // function traverse(curr,level){
    //     maxLevel = Math.max(maxLevel,level);
    //     curr.left && traverse(curr.left,level+1);
    //     curr.right && traverse(curr.right, level+1);
        
    // }
    // traverse(root,level);
    // return maxLevel+1;

    //Bottom up approach
    if(!root) return 0;
    let leftNode = maxDepth(root.left)
    let rightNode = maxDepth(root.right)
    return 1+Math.max(leftNode,rightNode);
};