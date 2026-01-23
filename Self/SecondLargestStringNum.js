//LC-1796
// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
//O(n)
//O(1)

var secondHighest = function(s) {
    let largest = -1;
    let second = -1;

    for (let i = 0; i < s.length; i++) {
        let digit = s[i] - '0'; // converts char to number //for 'a' it will be NaN

        if (digit >= 0 && digit <= 9) {
            if (digit > largest) {
                second = largest;
                largest = digit;
            } else if (digit > second && digit < largest) {
                second = digit;
            }
        }
    }

    return second;
};
