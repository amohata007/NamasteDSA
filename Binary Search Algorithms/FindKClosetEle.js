/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    //LC-658
    //linear
    // for (let i = 0; i <= arr.length - k; i++) {
    //     if (i === arr.length - k || 
    //         x - arr[i] <= arr[i + k] - x) {
    //         return arr.slice(i, i + k);
    //     }
    // }

    //BS
    let left = 0;
    let right = arr.length-1;

    while(left<right){
        let mid = left + Math.floor((right-left)/2);

        if(x-arr[mid]>arr[mid+k]-x){
            left = mid+1;
        }
        else{
            right = mid;
        }
    }
    return arr.slice(left,left+k)
};