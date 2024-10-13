class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key = lambda x: x[0])

        res = []

        for i in range(1, len(intervals)):
            if intervals[i - 1][1] < intervals[i][0]:
                res.append(intervals[i - 1])
            else:
                intervals[i] = [
                    min(intervals[i - 1][0], intervals[i][0]),
                    max(intervals[i - 1][1], intervals[i][1])
                ]
        
        res.append(intervals[len(intervals) - 1])
        return res