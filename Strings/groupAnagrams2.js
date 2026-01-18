
let str = ["eat","tea","tan","ate","nat","bat"];

let map = {};

for(let i=0;i<str.length;i++){
    let freq = Array(26).fill(0);
    let s = str[i];
    for(let j=0;j<s.length;j++){
        let index = s[j].charCodeAt() - "a".charCodeAt();
        freq[index]++;
    }

    let key = "";
    for(let k=0;k<26;k++){
        key = key+String.fromCharCode(k+"a".charCodeAt(0))+freq[k];
    }

    if(!map[key]){
        map[key] = [s];
    }
    else{
        map[key].push(s);
    }
}
console.log(Object.values(map));
