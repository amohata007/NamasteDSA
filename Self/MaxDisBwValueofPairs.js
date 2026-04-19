/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function (nums1, nums2) {
    //Brute force O(n2)
    let min = 0;
    // for(let i=0;i<nums1.length;i++){
    //     for(let j=i;j<nums2.length;j++){
    //         if(nums1[i]<=nums2[j]){
    //             if(j-i > min){
    //                 min = j-i;
    //             }
    //         }
    //     }
    // }
    // return min;

    //Two Pointers
    let i = 0, j = 0;
    let maxDist = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            maxDist = Math.max(maxDist, j - i);
            j++;
        } else {
            i++;
        }
    }

    return maxDist;
};