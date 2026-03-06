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
 * @return {number[]}
 */
//LC-144
var preorderTraversal = function(root) {
    let ans = [];

    function traversal(curr){
        if(!curr) return;
        ans.push(curr.val);
        traversal(curr.left);
        traversal(curr.right);
    }

    traversal(root);
    return ans;

    //Iterative Approach

    // if(!root) return [];
    // let stack = [root];
    // let ans = [];
    // while(stack.length){
    //     let res = stack.pop();
    //     ans.push(res.val);
    //     res.right && stack.push(res.right);
    //     res.left && stack.push(res.left);
    // }
    // return ans;
};