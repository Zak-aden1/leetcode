class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        # non overlapping
        # loop through array
        # if new interval end is less than interval[i]start
        # - add in interval
        # - add rest of intervals and return
        # if new interval start > interval[i] end
        # - continue
        # last one is overlapping so merge

        # time complexity 0(N)

        arr = []

        for i in range(len(intervals)):
            if newInterval[1] < intervals[i][0]:
                arr.append(newInterval)
                arr.extend(intervals[i:])
                return arr
            elif newInterval[0] > intervals[i][1]:
                arr.append(intervals[i])
            else:
                newInterval = [
                    min(newInterval[0], intervals[i][0]),
                    max(newInterval[1], intervals[i][1])
                ]
        
        arr.append(newInterval)
        return arr