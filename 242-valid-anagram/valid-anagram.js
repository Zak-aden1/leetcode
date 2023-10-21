/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const mapS = toMap(s)
    const mapT = toMap(t)

    console.log(mapS, mapT)

    if(Object.keys(mapS).length !== Object.keys(mapT).length) return false

    for(let char in mapS) {
        if(mapS[char] !== mapT[char])return false
    }

    return true
};

const toMap = (string) => {
    const map = {}

    for(let char of string) {
        map[char] = map[char] + 1 || 1
    }

    return map
}