//LC-744
//O(n)
//O(1)

var nextGreatestLetter = function(letters, target) {

    for(let i=0;i<letters.length;i++){
        if(letters[i]>target){
            return letters[i];
        }
    }
    return letters[0];
};

// Can be optimised using binary search in O(logn)}