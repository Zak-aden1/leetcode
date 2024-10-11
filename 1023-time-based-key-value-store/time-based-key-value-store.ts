class TimeMap {
    private map: object;

    constructor() {
        this.map = {} // key: arr of [val, timestamp]
    }

    set(key: string, value: string, timestamp: number): void {
        // if undefined set value to empty array
        if (!this.map[key]) this.map[key] = []

        // push new additions to the array
        this.map[key].push([value, timestamp]) 
        
    }

    get(key: string, timestamp: number): string {
        // if nullish return empty string
        if (!this.map[key]) return ""

        let left = 0
        let right = this.map[key].length - 1

        let res = ""
        // binary search for (logn) time
        while (left <= right) {
            const m = left + (Math.floor((right - left) / 2))

            const [val, stamp] = this.map[key][m]
            if (stamp <= timestamp) {
                // update val as this is the closest to timestamp we've seen
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