/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let stack = [];
    let res = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(s[i]);
            let len = stack.length;
            if (len > 1) {
                res += s[i];
            }
        }
        else {
            let len = stack.length;
            if (len > 1) {
                res += s[i];
            }
            stack.pop();
        }

    }
    return res;
};

//Without using stack
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let level = 0;
    let res = '';

    for(let i=0;i<s.length;i++){
        if(s[i]==="("){
            ++level;
        if(level>1){
            res += s[i];
        }
        }
        else{
        if(level>1){
            res += s[i];
        }
            --level;
        }
        
    }
    return res;
};