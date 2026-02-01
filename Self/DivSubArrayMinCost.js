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

//If have to show subarray

/**
 * @param {number[]} nums
 * @return {{ cost: number, subarrays: number[][] }}
 */
var minimumCostWithSubarrays = function(nums) {
    let firstMin = Infinity, secondMin = Infinity;
    let firstIdx = -1, secondIdx = -1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < firstMin) {
            secondMin = firstMin;
            secondIdx = firstIdx;
            firstMin = nums[i];
            firstIdx = i;
        } else if (nums[i] < secondMin) {
            secondMin = nums[i];
            secondIdx = i;
        }
    }

    // Ensure correct order for splitting
    let cuts = [firstIdx, secondIdx].sort((a, b) => a - b);

    let sub1 = nums.slice(0, cuts[0]);
    let sub2 = nums.slice(cuts[0], cuts[1]);
    let sub3 = nums.slice(cuts[1]);

    return {
        cost: nums[0] + firstMin + secondMin,
        subarrays: [sub1, sub2, sub3]
    };
};
