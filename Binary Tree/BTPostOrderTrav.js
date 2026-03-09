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
//LC-145
var postorderTraversal = function(root) {
    let ans = [];
    function traversal(curr){
        if(!curr) return;
        traversal(curr.left);
        traversal(curr.right);
        ans.push(curr.val);
    }
    traversal(root);
    return ans;
};

//Iterative using 2 stacks
// if(!root) return [];
//     let s1 = [root];
//     let s2 = [];

//     while(s1.length){
//         let curr = s1.pop();
//         s2.push(curr);
//         curr.left && s1.push(curr.left);
//         curr.right && s1.push(curr.right);
//     }
//     let ans = [];
//     while(s2.length){
//         ans.push(s2.pop().val);
//     }
//     return ans;

//Using single stack
    // let ans = [];
    // let stack = [];
    // let curr = root;
    // let lastTraverse = null;

    // while(stack.length || curr){
    //     while(curr){
    //         stack.push(curr);
    //         curr = curr.left;
    //     }
    //     let peekNode = stack[stack.length-1];
    //     if(peekNode.right && peekNode.right != lastTraverse){
    //         curr = peekNode.right;
    //     }
    //     else{
    //         ans.push(peekNode.val);
    //         lastTraverse = stack.pop();
    //     }
    // }
    // return ans;