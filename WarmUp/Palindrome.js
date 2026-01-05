function isPaindrome(num){
    if(num<0) return false;
    let dup = num;
    let rev = 0;
    while(num>0){
        let rem = num%10;
        rev = (10*rev) + rem;
        num = Math.floor(num/10);
    }
    return dup===rev;
}

let num = 121;

console.log(isPaindrome(num));