/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
//LC-234
var isPalindrome = function(head) {
    //O(n)-Time
    //O(n)-Space
    // let curr = head;
    // let res = [];
    // while(curr!==null){
    //     res.push(curr.val);
    //     curr = curr.next;
    // }
    // for(let i=0;i<res.length;i++){
    //     if(res[i]!==res[res.length-1-i]){
    //         return false;
    //     }
    // }
    // return true;


    //O(n)-Time
    //O(1)-Space
    //1->Find the Mid Element
    let slow=fast=head;
    while(fast!=null && fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;
    }

    //2->Reverse the second half
    let prev = null;
    let curr = slow;

    while(curr!==null){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
     //check for palindrome
     let firstHead = head;
     let secondHead = prev;

     while(secondHead!=null){
        if(firstHead.val!=secondHead.val){
            return false;
        }
        firstHead = firstHead.next;
        secondHead = secondHead.next;
     }
     return true;
};