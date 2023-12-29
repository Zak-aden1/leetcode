function evalRPN(tokens: string[]): number {
    const stack = []

    for (let char of tokens) {
        if(char == '+') {
            stack.push(stack.pop() + stack.pop())
        } else if (char == '-') {
            let a = stack.pop() 
            let b = stack.pop()
            stack.push(b - a)
        } else if (char == '*') {
            stack.push(stack.pop() * stack.pop())
        } else if (char == '/') {
            let a = stack.pop() 
            let b = stack.pop()
            stack.push(b / a | 0)
        } else {
            stack.push(+char)
        }
    }

    return stack.pop()
};