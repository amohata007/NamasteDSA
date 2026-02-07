//LC-2181

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var mergeNodes = function(head) {
    let res = new ListNode();
    let tail = res;
    let sum = 0;
    let curr = head.next;
    while(curr){
        if(curr.val===0){
            tail.next = new ListNode(sum);
            tail = tail.next;
            sum = 0;
        }
        else{
            sum += curr.val;
        }
        curr = curr.next;
    }
    return res.next;
};