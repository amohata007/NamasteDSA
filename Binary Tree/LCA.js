/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
//Very Important
var lowestCommonAncestor = function(root, p, q) {
    let lca = null;
    let traverse = (curr) =>{
        let count = 0;
        if(!curr) return 0;

        let rightPath = traverse(curr.right);
        let leftPath = traverse(curr.left);

        if(curr.val === p.val || curr.val===q.val){
            count++;
        }

        count = count + rightPath + leftPath;

        if(count===2 && !lca){
            lca = curr;
        }
        return count;
    }
    traverse(root);
    return lca;
};