class TimeMap {
    private map: object;

    constructor() {
        this.map = {} // key: arr of [val, timestamp]
    }

    set(key: string, value: string, timestamp: number): void {
        if (!this.map[key]) this.map[key] = []

        this.map[key].push([value, timestamp]) 
        
    }

    get(key: string, timestamp: number): string {
        if (!this.map[key]) return ""

        let left = 0
        let right = this.map[key].length - 1

        let res = ""
        while (left <= right) {
            const m = left + (Math.floor((right - left) / 2))

            const [val, stamp] = this.map[key][m]
            if (stamp <= timestamp) {
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