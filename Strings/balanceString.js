/**
 * @param {string} s
 * @return {number}
 */
//LC - 1221
//O(n)
//O(1)
var balancedStringSplit = function(s) {
    let count = 0;
    let left = 0;
    let right = 0;

    for(let i=0;i<s.length;i++){
        s[i]==="R" ? right++ : left++;
        if(right==left){
            count++;
        }
    }
    return count;
};