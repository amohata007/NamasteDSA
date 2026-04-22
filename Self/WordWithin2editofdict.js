function twoEditWords(queries, dictionary) {
    function isWithinTwoEdits(a, b) {
        let diff = 0;
        
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                diff++;
                if (diff > 2) return false;
            }
        }
        
        return true;
    }

    const result = [];

    for (const q of queries) {
        for (const d of dictionary) {
            if (isWithinTwoEdits(q, d)) {
                result.push(q);
                break; // stop once a match is found
            }
        }
    }

    return result;
}