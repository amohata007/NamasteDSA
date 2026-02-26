let nums = [3,4,5,1,2];

//cleaner versio because here no check on mid-1 which can be -1 for [2,1]
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return nums[left];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length-1;

    while(left<=right){
        

        //check if left is less than right means arr is sorted, equals to check if single element
        if(nums[left]<=nums[right]){
            return nums[left];
        }

        let mid = left + Math.floor((right-left)/2);

        //This is the min case point
        if(nums[mid]<nums[mid-1]){
            return nums[mid];
        }

        //Check right sorted or left sorted
        //If right sorted then pick left part
        if(nums[left]>nums[mid]){
            right = mid-1;
        }
        //If left sorted then pick right part
        else{
            left = mid+1;
        }
    }
};

