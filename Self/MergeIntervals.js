/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [];
    let current = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const next = intervals[i];

        // 2. Check overlap
        if (next[0] <= current[1]) {
            // Merge intervals
            current[1] = Math.max(current[1], next[1]);
        } else {
            // No overlap, push current and move on
            result.push(current);
            current = next;
        }
    }

    // Push the last interval
    result.push(current);

    return result;

};