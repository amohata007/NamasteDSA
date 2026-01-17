// LC - 49
// TC - n * mlogm
// SC - n*m
// n - no of strings 
// m = max length of each string
let str = ["eat","tea","tan","ate","nat","bat"];

let map = {};

for(let i=0;i<str.length;i++){
    let sortedStr = str[i].split("").sort().join("");
    if(map[sortedStr]){
        map[sortedStr].push(str[i]);
    }
    else{
        map[sortedStr] = [str[i]];
    }
}
console.log(map);
console.log(Object.values(map));