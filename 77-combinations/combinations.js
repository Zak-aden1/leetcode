/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let arr = []

    let bt = (i, list) => {
        if(list.length === k) {
            arr.push([...list])
            return
        }

        for(; i <= n; i++) {
            list.push(i)
            bt(i + 1, list)
            list.pop()
        }
    }
    bt(1, [])

    return arr
};