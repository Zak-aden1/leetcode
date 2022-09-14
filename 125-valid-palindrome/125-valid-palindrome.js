/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.replace(/[\W_]+/g, '').toLowerCase()
    let leftIndex = 0
    let rightIndex = str.length - 1
    
    while(leftIndex < rightIndex) {
        if(str[leftIndex] !== str[rightIndex]) return false
        leftIndex ++
        rightIndex --
    }
    return true
    
};

// const cleanStr = (str) => str.replace('/[^\w]/g', '')