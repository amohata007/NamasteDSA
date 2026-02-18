/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    const storeVowels = [];

    for(let char of s){
        if(vowels.has(char)){
            storeVowels.push(char)
        }
    }

    storeVowels.sort();

    let result = "";
    let index = 0;

    for(let char of s){
        if(vowels.has(char)){
            result += storeVowels[index];
            index++;
        }
        else{
            result += char;
        }
    }
    return result;
};