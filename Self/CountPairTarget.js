/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let count = 0;
    for(let i=0;i<nums.length;i++){
        for(let j = i+1;j<nums.length;j++){
            if(nums[i]+nums[j]<target){
                count++;
            }
        }
    }
    return count;
};

//O(nlogn)
var countPairs = function(nums, target) {
    nums.sort((a, b) => a - b);

    let left = 0, right = nums.length - 1;
    let count = 0;

    while (left < right) {
        if (nums[left] + nums[right] < target) {
            count += (right - left); // magic line
            left++;
        } else {
            right--;
        }
    }

    return count;
};