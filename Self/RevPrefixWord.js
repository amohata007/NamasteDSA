/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    for(let i=0;i<word.length;i++){
        if(word[i]===ch){
            return word.slice(0,i+1).split("").reverse().join("") + word.slice(i+1);
        }
    }
    return word;
};