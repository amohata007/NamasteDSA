/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//Brute force O(n2)
var nextGreaterElement = function(nums1, nums2) {
    let res = [];
    for(let i=0;i<nums1.length;i++){
        let index = nums2.indexOf(nums1[i]); 
        let found = false;

        for(let j=index;j<nums2.length;j++){
            if(nums2[j]>nums1[i]){
                res.push(nums2[j]);
                found = true;
                break;
            }
        }
        if (!found) {
            res.push(-1);
        }
    }
    return res;
};

//Optimal O(n+m)
// space O(n)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    // let res = [];
    // for(let i=0;i<nums1.length;i++){
    //     let index = nums2.indexOf(nums1[i]); 
    //     let found = false;

    //     for(let j=index;j<nums2.length;j++){
    //         if(nums2[j]>nums1[i]){
    //             res.push(nums2[j]);
    //             found = true;
    //             break;
    //         }
    //     }
    //     if (!found) {
    //         res.push(-1);
    //     }
    // }
    // return res;

    let map = {};
    let stack = [];
    let n = nums2.length;
    stack.push(nums2[n-1]);
    map[nums2[n-1]] = -1;

    for(let i=n-2;i>=0;i--){
        let top = stack[stack.length-1];
        if(nums2[i]<top){
            map[nums2[i]] = top;
           
        }
        else{
            while(stack.length){
                if(stack[stack.length-1]<nums2[i]){
                    stack.pop();
                }else{
                    map[nums2[i]] = stack[stack.length-1];
                    break;
                }
            }
            if(stack.length===0){
                map[nums2[i]] = -1;
            }
        }
         stack.push(nums2[i])
    }

    let ans = [];
    for(let i=0;i<nums1.length;i++){
        ans.push(map[nums1[i]]);
    }
    return ans;
};

//More cleaner
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    // let res = [];
    // for(let i=0;i<nums1.length;i++){
    //     let index = nums2.indexOf(nums1[i]); 
    //     let found = false;

    //     for(let j=index;j<nums2.length;j++){
    //         if(nums2[j]>nums1[i]){
    //             res.push(nums2[j]);
    //             found = true;
    //             break;
    //         }
    //     }
    //     if (!found) {
    //         res.push(-1);
    //     }
    // }
    // return res;

    let map = {};
    let stack = [];
    let n = nums2.length;
    stack.push(nums2[n-1]);
    map[nums2[n-1]] = -1;

    for(let i=n-2;i>=0;i--){
            while(stack.length){
                if(stack[stack.length-1]<nums2[i]){
                    stack.pop();
                }else{
                    map[nums2[i]] = stack[stack.length-1];
                    break;
                }
            }
            if(stack.length===0){
                map[nums2[i]] = -1;
            }
         stack.push(nums2[i])
    }

    let ans = [];
    for(let i=0;i<nums1.length;i++){
        ans.push(map[nums1[i]]);
    }
    return ans;
};