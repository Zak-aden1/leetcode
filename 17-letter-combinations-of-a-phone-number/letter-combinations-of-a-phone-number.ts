function letterCombinations(digits: string): string[] {
    if(digits.length === 0) return []
    const keyboard = {
"2": "abc",
"3": "def",
"4": "ghi",
"5": "jkl",
"6": "mno",
"7": "pqrs",
"8": "tuv",
"9": "wxyz"
}

    const res = []

    const backtraking = (idx, curr) => {
        if(curr.length === digits.length) {
            res.push(curr)
            return
        }

        if(idx > digits.length) return

        for(let letter of keyboard[digits[idx]]) {
            backtraking(idx + 1, curr + letter)
        }
    }

    backtraking(0, '')

    return res

};