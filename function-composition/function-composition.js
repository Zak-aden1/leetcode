/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        // if(functions.length === 0) return x

        // let val = x
        // let length = functions.length
        // for(let i = 0; i < length; i++) {
        //     val = functions[length - i - 1](val)
        // }
        // return val
        return functions.reduceRight((acc, val) => val(acc), x)
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */