/**
 * @param {number[]} nums
 * @return {number[]}
 */
//Using Two Pass Solution
var getSneakyNumbers = function(nums) {
    let freq = {};
    for(let i=0;i<nums.length;i++){
        if(freq[nums[i]]){
            freq[nums[i]]++;
        }
        else{
            freq[nums[i]] = 1;
        }
    }

    let res = [];

    for(let key in freq){
        if(freq[key]===2){
            res.push(Number(key))
        }
    }

    return res;
};