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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let arr = [];
    let traverse = (curr, path) => {
        if(!curr) return;
        path += curr.val;

        if (!curr.left && !curr.right) {
            arr.push(path);
            return;
        }
        path += "->";

        traverse(curr.left, path);
        traverse(curr.right, path);
    }
    traverse(root,"");
    return arr;
};