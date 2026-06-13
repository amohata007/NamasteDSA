/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function(num1, num2) {
    function calc(limit) {
        if (limit < 0) return 0;

        const digits = String(limit).split('').map(Number);
        const memo = new Map();

        function dfs(pos, prev2, prev1, started, tight) {
            if (pos === digits.length) {
                return [1, 0]; // [count, wavinessSum]
            }

            const key = tight
                ? null
                : `${pos},${prev2},${prev1},${started}`;

            if (key !== null && memo.has(key)) {
                return memo.get(key);
            }

            const maxDigit = tight ? digits[pos] : 9;

            let count = 0;
            let sum = 0;

            for (let d = 0; d <= maxDigit; d++) {
                const nextTight = tight && d === maxDigit;

                if (!started) {
                    if (d === 0) {
                        const [c, s] = dfs(
                            pos + 1,
                            -1,
                            -1,
                            false,
                            nextTight
                        );
                        count += c;
                        sum += s;
                    } else {
                        const [c, s] = dfs(
                            pos + 1,
                            -1,
                            d,
                            true,
                            nextTight
                        );
                        count += c;
                        sum += s;
                    }
                } else {
                    let add = 0;

                    if (
                        prev2 !== -1 &&
                        (
                            (prev1 > prev2 && prev1 > d) ||
                            (prev1 < prev2 && prev1 < d)
                        )
                    ) {
                        add = 1;
                    }

                    const [c, s] = dfs(
                        pos + 1,
                        prev1,
                        d,
                        true,
                        nextTight
                    );

                    count += c;
                    sum += s + add * c;
                }
            }

            const res = [count, sum];

            if (key !== null) {
                memo.set(key, res);
            }

            return res;
        }

        return dfs(0, -1, -1, false, true)[1];
    }

    return calc(num2) - calc(num1 - 1);
};