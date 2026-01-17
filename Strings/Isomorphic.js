// LC - 205
// TC - O(N)
// SC - O(1)

let a = "foo";
let b = "baa";

function isIsomorphic(s,t){
    if(s.length !== t.length) return false;
    let mapStoT = {};
    let mapTtoS = {};

    for(let i=0;i<s.length;i++){
        if(!mapStoT[s[i]] && !mapTtoS[t[i]]){
            mapStoT[s[i]] = t[i];
            mapTtoS[t[i]] = s[i];
        }
        else if(mapStoT[s[i]]!==t[i] || mapTtoS[t[i]]!==s[i]){
            return false;
        }
    };

    return true;
}

console.log(isIsomorphic(a,b));