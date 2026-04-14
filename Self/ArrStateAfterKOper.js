/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    let index = 0;
    let minValue = (nums) => {
        let min = Infinity;
        for(let i=0;i<nums.length;i++){
            if(nums[i]<min){
                min = nums[i];
                index = i;
            }
        }
        return index;
    }

    for(let i=0;i<k;i++){
        let changeVal = minValue(nums);
        nums[index] = nums[index]*multiplier;
    }
    return nums;
};