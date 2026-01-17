//O(n)
//O(1)
// LC-125

let s = "A man, a plan,  a canal: Panama";
s = s.toLowerCase();

let l = 0;
let r = s.length-1;

while(l<r){
    if(!s[l].match(/[a-z0-9]/)){
        l++;
    }
    else if(!s[r].match(/[a-z0-9]/)){
        r--;
    }
    else if(s[l]===s[r]){
        l++;
        r--
    }
    else{
         console.log(false);
         return;
    }
}
// return true;
console.log(true);
