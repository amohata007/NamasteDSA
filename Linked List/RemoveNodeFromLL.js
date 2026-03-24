/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function(head) {
    let prev = null;
    let curr = head;

    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    let currVal = prev;
    let max = currVal.val;
    while(currVal && currVal.next){
        if(currVal.next.val < max){
            currVal.next = currVal.next.next;
        } else {
            currVal = currVal.next;
            max = currVal.val;
        }
    }

    let prev2 = null;
    let currLast = prev;

    while(currLast){
        let temp2 = currLast.next;
        currLast.next = prev2;
        prev2 = currLast;
        currLast = temp2;
    }
    return prev2;
};