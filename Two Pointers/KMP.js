let h = "onionionsky";
let n = "nsky";

let lps = [0];
let x = 0;
let y = 1;

while (y < n.length) {
    if (n[x] === n[y]) {
        lps[y] = x + 1;
        ++x;
        ++y;
    }
    else {
        if (x === 0) {
            lps[y] = 0;
            ++y;
        }
        else {
            x = lps[x - 1];
        }
    }
}

i = j = 0;
while(i<h.length){
    if(h[i]===n[j]){
        ++i;
        ++j;
    }
    else{
        if(j==0){
           ++i;
        }
        else{
             j = lps[j-1];
        }
    }
    if(j===n.length){
        console.log(i-n.length);
        break;
    }
}
// console.log(lps);