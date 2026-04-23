// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var distance = function(nums) {
//     let res = [];
//     for(let i=0;i<nums.length;i++){
//         let sum = 0;
//         for(let j=0;j<nums.length;j++){
//             if(nums[i]===nums[j] && i!=j){
//                 sum += Math.abs(i-j);
//             }
//         }
//         res.push(sum);
//     }
//     return res;
// };

var distance = function(nums) {
    const map = new Map();
    
    // Step 1: group indices by value
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) map.set(nums[i], []);
        map.get(nums[i]).push(i);
    }

    const res = new Array(nums.length).fill(0);

    // Step 2: process each group
    for (let indices of map.values()) {
        let n = indices.length;
        let prefix = new Array(n).fill(0);

        // prefix sum of indices
        prefix[0] = indices[0];
        for (let i = 1; i < n; i++) {
            prefix[i] = prefix[i - 1] + indices[i];
        }

        for (let i = 0; i < n; i++) {
            let idx = indices[i];

            let leftSum = i > 0 ? prefix[i - 1] : 0;
            let rightSum = prefix[n - 1] - prefix[i];

            let leftCount = i;
            let rightCount = n - i - 1;

            let leftDist = idx * leftCount - leftSum;
            let rightDist = rightSum - idx * rightCount;

            res[idx] = leftDist + rightDist;
        }
    }

    return res;
};