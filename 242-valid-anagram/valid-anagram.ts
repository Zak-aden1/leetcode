function isAnagram(s: string, t: string): boolean {
    let s_map = Counter(s)
    let t_map = Counter(t)

    if (Object.keys(s_map).length != Object.keys(t_map).length) {
        return false
    }

    for (let key in s_map) {
        if (s_map[key] !== t_map[key]) return false
    }

    return true
};


function Counter(s) {
    const map = {}

    for (let char of s) {
        map[char] = map[char] + 1 || 1
    }
    return map
}