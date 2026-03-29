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
var rightSideView = function(root) {
    if(!root) return [];
    let ans = [];
    let queue = [root];

    while(queue.length){
        let levelSize = queue.length;
        for(let i=0;i<levelSize;i++){
            let q = queue.shift();
            q.right && queue.push(q.right);
            q.left && queue.push(q.left);
            if(i==0){
                ans.push(q.val);
            } 
        }
    }
    return ans;
};