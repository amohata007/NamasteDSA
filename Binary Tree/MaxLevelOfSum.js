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
var maxLevelSum = function(root) {
    let queue = [root];
    let maxSum = root.val;
    let resLevel = 1;
     let currentLevel = 1;
    while(queue.length){
        let level = queue.length;
        let levelSum = 0;
        for(let i=0;i<level;i++){
            let q = queue.shift();
            levelSum += q.val;
            q.left && queue.push(q.left);
            q.right && queue.push(q.right);  
        }
        if(levelSum>maxSum){
                maxSum = levelSum;
                resLevel = currentLevel;
            }
            currentLevel++;
    }
    return resLevel;
};