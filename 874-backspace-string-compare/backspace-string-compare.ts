const stack = (str: string): string => {
    const arr = [] 
    for(let char of str) {
        if(char === '#') {
            arr.pop()
        } else {
            arr.push(char)
        }
    }

    return arr.join('')
}

function backspaceCompare(s: string, t: string): boolean {
    const first = stack(s)
    const second = stack(t)

    return first === second
};