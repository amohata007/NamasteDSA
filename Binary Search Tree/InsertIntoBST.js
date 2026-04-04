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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(curr, val) {
        if(!curr){
            return new TreeNode(val)
        }
        if(curr.val<val){
            curr.right = insertIntoBST(curr.right,val);
        }
        else{
            curr.left = insertIntoBST(curr.left,val);
        }
        return curr;
};