/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    const stack = [s[0]]
    const map = new Set(["AB", "CD"])

    for (let i = 1; i < s.length; i++) {
        if(map.has(stack[stack.length - 1] + s[i])){
            stack.pop()
        }  else {
            stack.push(s[i])
        }
    }

    console.log(stack)
    return stack.length
};