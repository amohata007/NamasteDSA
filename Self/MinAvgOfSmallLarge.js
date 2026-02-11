/**
 * @param {number[]} nums
 * @return {number}
 */
//O(n2logn)
//O(1)
var minimumAverage = function(nums) {
    let avg = 0;
    let smallest = Infinity;
    while(nums.length>0){
        nums = nums.sort((a,b)=>a-b);
        avg = (nums[0]+nums[nums.length-1])/2;
        if(avg<smallest){
            smallest = avg;
        }
        nums.pop();
        nums.shift();
        console.log(nums)
    }
    return smallest;
};

//Optimized
//O(nlogn)
//O(1)
var minimumAverage = function(nums) {
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1;
    let smallest = Infinity;

    while (left < right) {
        const avg = (nums[left] + nums[right]) / 2;
        smallest = Math.min(smallest, avg);
        left++;
        right--;
    }

    return smallest;
};