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

var nextGreatestLetter = function(letters, target) {
    let left = 0;
    let right = letters.length - 1;
    let result = letters[0]; // wrap-around default

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (letters[mid] > target) {
            result = letters[mid];   // possible answer
            right = mid - 1;         // look for smaller valid char
        } else {
            left = mid + 1;
        }
    }

    return result;
};