//LC-3010
//O(n)
//O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
    let min = Infinity;
    let secondMin = Infinity;

    for(let i=1;i<nums.length;i++){
        if(nums[i]<min){
            secondMin = min;
            min = nums[i];
        }
        else if(nums[i]<secondMin){
            secondMin = nums[i];
        }
    }
    return nums[0]+min+secondMin;
};