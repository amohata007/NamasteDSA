nums = [3,2,4]
target = 5

//LC-1
function twoSum(nums,target){
    //Brute force Approach
    //O(n2)
    // for(let i=0;i<nums.length-1;i++){
    //     for(let j=i+1;j<nums.length;j++){
    //         if(nums[i]+nums[j]===target){
    //             return [i,j]
    //         }
    //     }
    // }

    //Optimal Using Map
    //O(n)

    let map = {};
    for(let i=0;i<nums.length;i++){
        map[nums[i]] = i;
    }
    // console.log(map)

    for(let i=0;i<nums.length;i++){
        let pairToFind = target - nums[i];
        if(map[pairToFind] && map[pairToFind]!=i){
            return [i,map[pairToFind]]
        }
    }
}

console.log(twoSum(nums,target))