/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //uding 2 pass
    // let count = 0;
    // let curr=head;
    // while(curr){
    //     curr=curr.next;
    //     count++;
    // }
    // let sentinal = new ListNode(null);
    // sentinal.next = head;
    // let prev = sentinal;
    // for(let i=0;i<count-n;i++){
    //     prev = prev.next;
    // }
    // prev.next = prev.next.next;
    // return sentinal.next;


    //Using 1 pass
    let sentinal = new ListNode(null);
    sentinal.next = head;
    let first = sentinal;

    for(let i=0;i<n;i++){
        first = first.next;
    }

    let second = sentinal;
    while(first && first.next){
        first = first.next;
        second=second.next;
    }
    second.next = second.next.next;
    return sentinal.next;
};