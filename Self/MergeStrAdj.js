//1768

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
//O(n+m)
//O(n+m)
var mergeAlternately = function(word1, word2) {
    let res = '';
    let len = word1.length>word2.length ? word1.length : word2.length;

    for(let i=0;i<len;i++){
        if(i<word1.length){
            res += word1[i];
        }
        if(i<word2.length){
            res += word2[i];
        }
    }
    return res;
};