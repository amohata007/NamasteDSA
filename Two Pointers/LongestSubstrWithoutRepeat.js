//LC - 3

let s = "abcabcbbd"
// 3 - output 

let i = 0;
let map = {};
let max = 0;

function longestStr(s){
    for(let j = 0;j<s.length;j++){
        if(map[s[j]]!=undefined && map[s[j]]>=i){
            i = map[s[j]] + 1;
        }
        map[s[j]] = j;
        max = Math.max(max,j-i+1);
    }
    return max;
}

console.log(longestStr(s));