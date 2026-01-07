// let nums = [2,2,1,1,3,4,3];

// //using hashMap
// let freq = {};
// function missingNum(nums){
//     for(let i=0;i<nums.length;i++){
//         if(!freq[nums[i]]){
//             freq[nums[i]] = 1;
//         }
//         else{
//             freq[nums[i]]++;
//         }
//     }
//     for(let i=0;i<nums.length;i++){
//         if(freq[nums[i]]==1){
//             return nums[i];
//         }
//     }
// }

// console.log(missingNum(nums));

let nums = [2,1,1,3,3];
let xor = 0;

//using Xor, No extra space
function missingNum(nums){
    for(let i=0;i<nums.length;i++){
        xor = xor ^ nums[i];
    }
    return xor;
}

console.log(missingNum(nums));