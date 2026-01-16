/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
//Efficeint
//inplace
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let newNode = new ListNode();
    let curr = newNode;
    while(l1 && l2){
        if(l1.val<=l2.val){
            curr.next = l1;
            l1 = l1.next;
            curr = curr.next;
        }
        else{
            curr.next = l2;
            l2=l2.next;
            curr=curr.next;
        }
    }
    if(!l1){
        curr.next = l2;
    }
    if(!l2){
        curr.next = l1;
    }
    return newNode.next
};

//Not efficient
var mergeTwoLists = function(list1, list2) {
    let newNode = new ListNode();
    let curr = newNode;
    while(list1 && list2){
        if(list1.val<=list2.val){
            curr.next = new ListNode(list1.val);
            list1 = list1.next;
        }
        else{
            curr.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        curr = curr.next;        
    }
     while (list1) {
        curr.next = new ListNode(list1.val);
        list1 = list1.next;
        curr = curr.next;
    }

    while (list2) {
        curr.next = new ListNode(list2.val);
        list2 = list2.next;
        curr = curr.next;
    }
    return newNode.next
};