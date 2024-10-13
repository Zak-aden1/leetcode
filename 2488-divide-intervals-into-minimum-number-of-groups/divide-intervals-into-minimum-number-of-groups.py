class Solution:
    def minGroups(self, intervals: List[List[int]]) -> int:
        start, end = [], []

        for l, r in intervals:
            start.append(l)
            end.append(r)
        
        start.sort()
        end.sort()

        i, j = 0, 0
        res = 0
        group = 0

        while i < len(intervals):
            if start[i] <= end[j]:
                i+= 1
                group += 1
            else:
                j+= 1
                group -=1
            res = max(res, group)
        
        return res

# 1,5,
# o-----o
# 1,10
# o------------------o
# 2,3
#  o--o
# 5-10
#       o----------------o
# 6-8
#        o------o


# sort in chronological order
# sep arr, start, end