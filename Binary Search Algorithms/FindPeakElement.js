// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.

//Array not sorted still can use Binary search here

/**
 * @param {number[]} nums
 * @return {number}
 */
//LC-162
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length-1;

    while(left<right){
        let mid = left+Math.floor((right-left)/2);

        if(nums[mid]<nums[mid+1]){
            left = mid+1;
        }
        else{
            right = mid;
        }
    }
    return right;
};