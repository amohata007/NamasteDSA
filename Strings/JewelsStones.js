/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
// LC_771
// TC - O(n)
// SC - O(1) - Because sets don't have duplicates and max alphabets 26+26 that is 52 so ignored if set of 
// numbers then O(n) but in strings its O(1) - IMPPPPPPPPP
var numJewelsInStones = function(jewels, stones) {
    let storeJewels = new Set();
    for(let i=0;i<jewels.length;i++){
        storeJewels.add(jewels[i]);
    }

    let count = 0;
    for(let i=0;i<stones.length;i++){
        if(storeJewels.has(stones[i])){
            count++;
        }
    }   
    return count;
};