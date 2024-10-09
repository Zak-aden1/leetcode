/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    const stack = [s[0]]

    let open_bracket = 0
    let min_adds_required = 0
    for (let char of s) {
        if (char === "(") {
            open_bracket +=1
        } else {
            if (open_bracket > 0) {
                open_bracket--
            } else {
                min_adds_required++
            }
        }
    }

    return open_bracket + min_adds_required

    return counter
    
};