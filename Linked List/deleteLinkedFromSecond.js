// Input: nums = [1,2,3], head = [1,2,3,4,5]

// Output: [4,5]


// Example 2:

// Input: nums = [1], head = [1,2,1,2,1,2]

// Output: [2,2,2]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */

// Time complexity: O(n + m)
// Space complexity: O(m)
var modifiedList = function(nums, head) {
    let setNums = new Set(nums);
    
    let sentinal = new ListNode(null);
    sentinal.next = head;
    let prev = sentinal;
    while(prev && prev.next){
        if(setNums.has(prev.next.val)){
            prev.next = prev.next.next;

        }
        else{
            prev = prev.next;
        }
    }
    return sentinal.next;
};