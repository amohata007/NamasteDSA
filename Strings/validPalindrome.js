//LC-125
//O(n)
//O(n)
let s = "A man, a plan,  a canal: Panama";

s = s.toLowerCase();
let filterString = "";
let revString = "";

for(let i=0;i<s.length;i++){
    if(s[i].match(/[a-z0-9]/)){
        filterString += s[i];
        revString = s[i] + revString;
    }
}
console.log(filterString === revString);