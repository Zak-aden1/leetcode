class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        # loop through arr
        # if intervals[i] overlap merge
        # else add intevals[i]
        if len(intervals) == 0:
            return intervals
        
        intervals.sort()

        arr = [intervals[0]]

        for i in range(1, len(intervals)):
            if arr[-1][1] >= intervals[i][0]:
                arr[-1] = [
                    min(arr[-1][0], intervals[i][0]),
                    max(arr[-1][1], intervals[i][1])
                ]
            else:
                arr.append(intervals[i])

        return arr