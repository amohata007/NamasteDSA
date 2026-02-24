var calPoints = function(operations) {
    let stack = [];
    let sum = 0;

    for (let op of operations) {
        if (op === "C") {
            sum -= stack.pop();
        } 
        else if (op === "D") {
            let val = stack[stack.length - 1] * 2;
            stack.push(val);
            sum += val;
        } 
        else if (op === "+") {
            let val = stack[stack.length - 1] + stack[stack.length - 2];
            stack.push(val);
            sum += val;
        } 
        else {
            let val = Number(op);
            stack.push(val);
            sum += val;
        }
    }

    return sum;
};