/**
 * @param {number[]} nums
 * @return {number}
 */
var minMirrorPairDistance = function(nums) {
    function reverseNum(x) {
        let rev = 0;
        while (x > 0) {
            rev = rev * 10 + (x % 10);
            x = Math.floor(x / 10);
        }
        return rev;
    }

    const indexMap = new Map();
    let minDist = Infinity;

    for (let j = 0; j < nums.length; j++) {
        const num = nums[j];
        const rev = reverseNum(num);

        // check if THIS number was seen as a reversed value before
        if (indexMap.has(num)) {
            minDist = Math.min(minDist, j - indexMap.get(num));
        }

        // store reversed version
        indexMap.set(rev, j);
    }

    return minDist === Infinity ? -1 : minDist;
};