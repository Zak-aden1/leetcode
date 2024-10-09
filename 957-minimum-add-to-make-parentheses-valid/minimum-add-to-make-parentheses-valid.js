/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    const stack = []

    let counter = 0
    for (let char of s) {
        if (char == "(") {
            stack.push("(")
        } else {
            if (stack.length > 0) {
                stack.pop()
            } else {
                counter++
            }
        }
    }
    
    return stack.length + counter
};