//LC-14
// Time comp is O(s) - s is sum of length of all words
//Space - O(1)
let str = ["flo","flewer","flowed"];

let x = 0;

function longPrefix(str){
while(x<str[0].length){
    let ch = str[0][x];
    for(let i=1;i<str.length;i++){
        if(ch !== str[i][x] || x==str[i].length){
            return str[0].substring(0,x);
        }
    }
    x++;
}
return str[0];
}

console.log(longPrefix(str));