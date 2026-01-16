/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// O(n)
// O(n)
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let newNode = new ListNode();
    let curr = newNode;
    while(l1 || l2 || carry){
        let sum = carry;
        
            if(l1){
                sum +=l1.val;
                l1 = l1.next
            }
            if(l2){
                 sum +=l2.val;
                l2 = l2.next
            }
            carry = Math.floor(sum/10);
            curr.next = new ListNode(sum%10);
            curr = curr.next;
    }
    return newNode.next;
};