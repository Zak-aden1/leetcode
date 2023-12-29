function isValid(s: string): boolean {
    const stack = []

    for(let char of s) {
        if(char === '(') {
            stack.push(')')
        } else if(char === '{') {
            stack.push('}')
        } else if(char === '[') {
            stack.push(']')
        } else {
            if (char !== stack.pop()) return false
        }
    }

    return stack.length === 0
};