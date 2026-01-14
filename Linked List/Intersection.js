/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

//LC-160
// time-O(n+m)
// space-O(n)
var getIntersectionNode = function(headA, headB) {
    let setNodes = new Set();

    while(headA!=null){
        setNodes.add(headA);
        headA = headA.next;
    }

    while(headB!=null){
        if(setNodes.has(headB)){
            return headB;
        }
        headB = headB.next;
    }
    return null;
};

//Two Pointer
var getIntersectionNode = function(headA, headB) {
    let pA = headA;
    let pB = headB;

    while (pA !== pB) {
        pA = (pA === null) ? headB : pA.next;
        pB = (pB === null) ? headA : pB.next;
    }

    return pA; // either intersection node or null
};