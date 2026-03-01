haystack = "sedbutsad", needle = "sad"
// Output: 6

function indexFirst(h,n){
    //return h.indexOf(n); //Direct approach but not acceptable in interviews

    //Sliding Window Approach
    //O(n2)
    //O(n) - space as well
    for(let i=0;i<=h.length-n.length;i++){
        if(h.slice(i,n.length+i)===n){
            return i; 
        }
    }
    return -1;
}

console.log(indexFirst(haystack,needle));