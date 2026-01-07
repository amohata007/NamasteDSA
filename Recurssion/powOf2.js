let n = 128;

function pow(n){
    if(n==1) return true;
    if(n%2!=0) return false;
    return pow(n/2);
}

console.log(pow(n));