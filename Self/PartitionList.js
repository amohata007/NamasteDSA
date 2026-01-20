/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
//o(n)
//o(1)

// lc-86
var partition = function(head, x) {
    let sentinelLess = new ListNode();
    let sentinelMore = new ListNode();

    let less = sentinelLess;
    let more = sentinelMore;

    let curr = head;

    while(curr){
        if (curr.val < x) {
            less.next = curr;      
            less = less.next;      
        } else {
            more.next = curr;       
            more = more.next;     
        }
        curr = curr.next;
    }
    more.next = null;
    less.next = sentinelMore.next;
    return sentinelLess.next;
};