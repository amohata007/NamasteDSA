//58

//using built in function
s = "  fly me   to the   moon    ";

// s = s.trim();
// s = s.split(" ");

// console.log(s[s.length-1].length);

// O(n)
// O(1)
let count = 0;  
for(let i=s.length-1;i>=0;i--){
    if(s[i] !== " "){
        count++;
    }
    else if(count>0){
        break;
    }
}
console.log(count);