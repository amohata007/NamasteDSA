// LC-3541
// O(n) time
// o(1) space 
var maxFreqSum = function(s) {
    let freq = {};
    for(let i=0;i<s.length;i++){
        freq[s[i]] = freq[s[i]] ? ++freq[s[i]] : 1;
    }

    let vowels = ['a','e','i','o','u'];
    let maxVowels = 0;
    let maxCons = 0;
    let freqKeys = Object.keys(freq);
    for(let i=0;i<freqKeys.length;i++){      //O(1) time comp because max 26 time loop
        if(vowels.includes(freqKeys[i])){ //O(1) time comp because includes runs max 5 times
            maxVowels = Math.max(maxVowels,freq[freqKeys[i]])
        }
        else{
            maxCons = Math.max(maxCons,freq[freqKeys[i]]);
        }
    }   
    return maxVowels + maxCons;
};