class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        if not intervals:
            return []

        res = []
        intervals.sort()
        prev = intervals.pop(0)

        while len(intervals) > 0:
            second = intervals.pop(0)
            if prev[1] < second[0]:
                res.append(prev)
                prev = second
            else:
                prev = self.mSort(prev, second)
        
        res.append(prev)
        return res

    
    def mSort(self, arrA, arrB):
        return [
            min(arrA[0], arrB[0]),
            max(arrA[1], arrB[1]),
        ]