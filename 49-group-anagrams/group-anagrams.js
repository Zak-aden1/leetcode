/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {}
    const ans = []

    for(let str of strs) {
        const s = str.split("").sort().join("")

        if(map[s] == undefined) {
            map[s] = [str]
        } else {
            map[s] = [...map[s], str]
        }
    }

    
    return Object.values(map)
};
