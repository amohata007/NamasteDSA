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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
//t - O(n*m)
//s - O(n*m)
var isSubtree = function (root, subRoot) {
    var isSameTree = function (p, q) {
        if (!p && !q) return true;
        if (!p || !q) return false;
        return p.val === q.val &&
            isSameTree(p.left, q.left) &&
            isSameTree(p.right, q.right);
    };
    if (!root) return false;

    if (isSameTree(root, subRoot)) return true;

    return isSubtree(root.left, subRoot) ||
        isSubtree(root.right, subRoot);
};

var isSubtree = function(root, subRoot) {
//     var isSameTree = function(p, q) {
//     if(!p && !q) return true;
//     if(!p || !q) return false;
//     return p.val === q.val &&
//     isSameTree(p.left,q.left) &&
//     isSameTree(p.right,q.right);
// };
// if (!root) return false;

//     if (isSameTree(root, subRoot)) return true;

//     return isSubtree(root.left, subRoot) || 
//            isSubtree(root.right, subRoot);
        
    let hash1 = serialize(root);
    let hash2 = serialize(subRoot);
    // console.log(hash1);
    // console.log(hash2)
    return hash1.includes(hash2);
};

let serialize = (root) => {
    let hash = "";
    let traversal = (curr) => {
        if(!curr){
            hash += '-#';
            return;
        }
        hash += '-' + curr.val 
        traversal(curr.left);
        traversal(curr.right);
    }
    traversal(root);
    return hash;
}