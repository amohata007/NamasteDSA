//lc- 242
s = "anagram";
t = "nagaram";

//with sorting
//TC - O(NlogN)
//SC - O(N) bcoz sorting uses extra array in js/java
function anagram(s,t){
    return s.split("").sort().join("") === t.split("").sort().join("");
}

//Optimal
//TC - O(N)
//SC - O(1)
function anagramValid(s,t){
    if(s.length !== t.length) return false;
    let map = {};
    for(let i=0;i<s.length;i++){
        map[s[i]] = map[s[i]] ? ++map[s[i]] : 1;
    }
    
    for(let i=0;i<t.length;i++){
        if(!map[t[i]] || map[t[i]]<0){
            return false;
        }
        map[t[i]]--;
    }
    return true;
}

console.log(anagram(s,t))
console.log(anagramValid(s,t))