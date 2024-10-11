class TimeMap:

    def __init__(self):
        self.map = {}

    def set(self, key: str, value: str, timestamp: int) -> None:
        if key not in self.map:
            self.map[key] = []
        
        self.map[key].append([value, timestamp])
        

    def get(self, key: str, timestamp: int) -> str:
        if key not in self.map:
            return ""
        
        res = ""

        l, r = 0, len(self.map[key]) - 1

        while l <= r:
            m = l + ((r - l) // 2)

            arr = self.map[key][m]

            if arr[1] <= timestamp:
                res = arr[0]
                l = m + 1
            else:
                r = m - 1
        
        return res
        


# Your TimeMap object will be instantiated and called as such:
# obj = TimeMap()
# obj.set(key,value,timestamp)
# param_2 = obj.get(key,timestamp)