/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    // let ans = 0;
    // for(let i=0;i<s.length;i++){
    //     let ch = 123 - s.charCodeAt(i);
    //     console.log(ch)
    //     ans = ans + ((i+1)*ch);
    // }
    // return ans;

    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        const reverseVal = 'z'.charCodeAt(0) - s.charCodeAt(i) + 1;
        ans += (i + 1) * reverseVal;
    }
    return ans;
};