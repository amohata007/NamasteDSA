/**
 * @param {number} n
 * @return {boolean}
 */
//O1
//O1
// Input: n = 9
// Output: false
// Explanation: In base 2: 9 = 1001 (base 2), which is palindromic.
// In base 3: 9 = 100 (base 3), which is not palindromic.
// Therefore, 9 is not strictly palindromic so we return false.
// Note that in bases 4, 5, 6, and 7, n = 9 is also not palindromic.

// for n-2, it will be 12 which is not palindrome so false always ans
var isStrictlyPalindromic = function(n) {
    return false;
};