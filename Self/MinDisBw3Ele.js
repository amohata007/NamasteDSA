var minimumDistance = function(nums) {
    let freq = {};
    
    // Count frequency
    for (let i = 0; i < nums.length; i++) {
        if (freq[nums[i]]) {
            freq[nums[i]]++;
        } else {
            freq[nums[i]] = 1;
        }
    }

    let minDist = Infinity;

    // Check every value
    for (let key in freq) {
        if (freq[key] >= 3) {

            // collect indices of this value
            let res = [];
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] == key) {
                    res.push(i);
                }
            }

            // check all triplets (only consecutive needed)
            for (let i = 0; i <= res.length - 3; i++) {
                let ans = 0;
                ans += Math.abs(res[i] - res[i+1]);
                ans += Math.abs(res[i+1] - res[i+2]);
                ans += Math.abs(res[i+2] - res[i]);

                minDist = Math.min(minDist, ans);
            }
        }
    }

    return minDist === Infinity ? -1 : minDist;
};