class TimeMap {
    private map: object;

    constructor() {
        this.map = {}
    }

    set(key: string, value: string, timestamp: number): void {
        if(!this.map[key]) this.map[key] = []
        this.map[key].push([value, timestamp])
    }

    get(key: string, timestamp: number): string {
        if(!this.map[key]) return ""

        let res = ""
        let left = 0
        let right = this.map[key].length - 1

        while (left <= right) {
            let m = left + Math.floor(((right - left) / 2))

            const [val, stamp] = this.map[key][m]

            if(stamp <= timestamp) {
                res = val
                left = m + 1
            } else {
                right = m - 1
            }
        }

        return res
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */