/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next || k==0) return head;
    let length = 1;
    let curr = head;

    while(curr.next){
        curr = curr.next;
        length++;
    }

    k = k%length;
    if (k === 0) return head;
    point = length-k-1;
    let currHead = head;

    for(let i=0;i<point;i++){
        currHead = currHead.next;
    }
    let newHead = currHead.next;
    currHead.next = null;
    let newCurr = newHead;

    while(newCurr.next){
        newCurr = newCurr.next;
    }
    newCurr.next = head

    return newHead;
};