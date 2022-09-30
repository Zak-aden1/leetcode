/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    
    for(let char of s) {
        switch(char) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                if (char !== stack.pop()) {
                    return false;
                }
        }
    }
    
    return stack.length === 0;
    
    
};