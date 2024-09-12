function countConsistentStrings(allowed: string, words: string[]): number {
    const allowedKeys = getmap(allowed)
    let count = 0

    for (let i = 0; i < words.length; i++) {
        let add = true
        for (let j = 0; j < words[i].length; j++) {
            if(!allowedKeys[words[i][j]]) add = false
        }

        if(add == true) count++
    }

    return count
};

function getmap(str){
    const map = {}

    for (let c of str) {
        map[c] = 1
    }

    return map
}