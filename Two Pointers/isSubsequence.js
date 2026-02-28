s = "abc", t = "ahbgdc"
// Output: false

function isSub(s,t){
    let i=j=0;

    while(j<t.length){
        if(s[i]===t[j]){
            i++;
        }
        j++;
    }
    return i===s.length;
}

console.log(isSub(s,t));