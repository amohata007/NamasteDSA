var minimumDistance = function(nums) {
    let map = new Map();
    let minDist = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], []);
        }

        let arr = map.get(nums[i]);
        arr.push(i);

        // Only check last 3 occurrences
        if (arr.length >= 3) {
            let n = arr.length;
            let dist = 2 * (arr[n - 1] - arr[n - 3]);
            minDist = Math.min(minDist, dist);
        }
    }

    return minDist === Infinity ? -1 : minDist;
};