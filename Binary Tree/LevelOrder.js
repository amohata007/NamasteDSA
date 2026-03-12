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
 * @return {number[][]}
 */
//Uses Queues
var levelOrder = function(root) {
    if(!root) return [];
    let queue = [root];
    let ans = [];

    while(queue.length){
        let levelArr = [];
        let levelSize = queue.length;
        for(let i=0;i<levelSize;i++){
        let curr = queue.shift();
        curr.left && queue.push(curr.left);
        curr.right && queue.push(curr.right);
        levelArr.push(curr.val);
        }
        ans.push(levelArr);
    }
    return ans;

    //Using recursion
    
    // if(!root) return [];
    // let ans = [];
    // function traversal(curr,level){
    //     if(!ans[level]) ans[level] = [];
    //     ans[level].push(curr.val);
    //     curr.left && traversal(curr.left,level+1);
    //     curr.right && traversal(curr.right,level+1);
    // }
    // traversal(root,0);
    // return ans;
};