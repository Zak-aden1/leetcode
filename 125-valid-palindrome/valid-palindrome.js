/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    str = s.replace(/[\W_]+/g, '').toLowerCase()
    let min = 0
    let max = str.length - 1

    while(min < max) {
        if(str[min] !== str[max]) return false

        min++
        max--
    }

    return true
};