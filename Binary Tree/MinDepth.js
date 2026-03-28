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
var minDepth = function(root) {
    if(!root) return 0;
    let minLevel = Infinity;
    let level = 1;
    let traverse = (curr,level)=>{
        if (level >= minLevel) return;
        if(!curr.left && !curr.right){
            minLevel = Math.min(minLevel, level);
            return;
        }
        let leftNode = curr.left && traverse(curr.left,level+1);
        let rightNode = curr.right && traverse(curr.right,level+1);
        
    }
    traverse(root,level);
    return minLevel;
};