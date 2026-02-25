/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;

    while(left<=right){
        let mid = left + Math.floor((right-left)/2);

        if(target===nums[mid]){
            return mid;
        }

        //Is this left sorted / = equal if array has just 2 values
        if(nums[left]<=nums[mid]){
            if(target<nums[mid] && target>=nums[left]){
                right = mid-1;
            }
            else{
                left = mid+1;
            }
        }
        //right sorted
        else{
            if(target>nums[mid] && target<=nums[right]){
                left = mid+1;
            }
            else{
                right = mid-1;
            }
        }
    }
    return -1;
};