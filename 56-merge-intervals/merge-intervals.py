class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        if len(intervals) < 2:
            return intervals
        arr = []
        intervals.sort(key = lambda x : x[0])

        for i in range(1, len(intervals)):
            if intervals[i -1][1] < intervals[i][0]:
                arr.append(intervals[i - 1])
            else:
                intervals[i] = [
                    min(intervals[i - 1][0], intervals[i][0]),
                    max(intervals[i - 1][1], intervals[i][1])
                ]

        arr.append(intervals[-1])
        
        return arr