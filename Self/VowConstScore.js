//LC - 3813
/**
 * @param {string} s
 * @return {number}
 */
var vowelConsonantScore = function(s) {
    let v = 0;
    let c = 0;
    let vowels = ["a","e","i","o","u"]
    for(let i=0;i<s.length;i++){
        if(s.charCodeAt(i) >= "a".charCodeAt(0) && s.charCodeAt(i) <= "z".charCodeAt(0)){
            if(vowels.includes(s[i])){
                v++;
            }
            else{
                c++
            }

}
    }
    return c > 0 ? Math.floor(v / c) : 0;
};

//optimal
var vowelConsonantScore = function(s) {
    let v = 0, c = 0;
    const vowels = new Set(['a','e','i','o','u']);

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (ch >= 'a' && ch <= 'z') {
            vowels.has(ch) ? v++ : c++;
        }
    }

    return c > 0 ? Math.floor(v / c) : 0;
};
