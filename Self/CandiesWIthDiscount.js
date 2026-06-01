/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    cost.sort((a, b) => b - a); // sort in descending order

    let total = 0;

    for (let i = 0; i < cost.length; i++) {
        // Every third candy is free
        if (i % 3 !== 2) {
            total += cost[i];
        }
    }

    return total;
};