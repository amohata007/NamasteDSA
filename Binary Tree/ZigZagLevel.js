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
var zigzagLevelOrder = function(root) {
    // if(!root) return [];
    // let queue = [root];
    // let res = [];
    // let level = 0;
    // while(queue.length){
    //     let levelSize = queue.length;
    //     let levelArr = [];

    //     for(let i=0;i<levelSize;i++){
    //         let q = queue.shift();
    //         if(level%2==0){
    //             levelArr.push(q.val);
    //         }
    //         else{
    //             levelArr.unshift(q.val);
    //         }
    //         q.left && queue.push(q.left);
    //         q.right && queue.push(q.right);
    //     }
    //     level += 1;
    //     res.push(levelArr);
    // }
    // return res;

    //recursion
    if(!root) return [];
    let ans = [];

    let traversal = (curr,level) => {
        if(!ans[level]) ans[level] = [];
        if(level%2==0){
            ans[level].push(curr.val);
        }
        else{
            ans[level].unshift(curr.val);
        }
        
        curr.left && traversal(curr.left,level+1);
        curr.right && traversal(curr.right,level+1);
    }
    traversal(root,0);
    return ans;
};
