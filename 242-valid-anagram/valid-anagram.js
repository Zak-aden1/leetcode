/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const strA = toMap(s)
    const strB = toMap(t)

    if(Object.keys(strA).length !== Object.keys(strB).length) return false

    for (let char in strA) {
        if(strA[char] !== strB[char]) return false
    }

    return true
};

function toMap (str) {
    let map = {}
    for (let char of str) {
        map[char] = map[char] + 1 || 1
    }

    return map
}