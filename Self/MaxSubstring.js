/**
 * @param {string} s
 * @return {number}
 */
//LC-3760
//O(n)
//O(k) - 26 - O(1)
var maxDistinct = function(s) {
    // let freq = {};
    // for(let i=0;i<s.length;i++){
    //     if(freq[s[i]]){
    //         freq[s[i]]++;
    //     }
    //     else{
    //         freq[s[i]]=1;
    //     }
    // }
    // let res = Object.keys(freq);
    // return res.length;
    return new Set(s).size;
};