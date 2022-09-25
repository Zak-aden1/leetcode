/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.replace(/[\W_]+/g, '').toLowerCase()
    let min = 0
    let max = str.length -1
    
    while(min < max) {
        if(str[min] !== str[max]) {
            return false
        } else {
            min ++
            max --
        }
    }
    return true
};

// const cleanStr = (str) => str.replace('/[^\w]/g', '')