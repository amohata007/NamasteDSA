//LC - 2942

let words = ["leet","code"];
let x = "e";
let res = [];

//with builtin
// for(let i=0;i<words.length;i++){
//     if(words[i].includes(x)){
//         res.push(i);
//     }
// }

// console.log(res);

//without
// O(n2)
// O(1) --> Output space is NOT counted in space complexity unless explicitly asked.
for(let i=0;i<words.length;i++){
    for(let j=0;j<words[i].length;j++){
        if(words[i][j]===x){
            res.push(i);
            break;
        }
    }
}

console.log(res);