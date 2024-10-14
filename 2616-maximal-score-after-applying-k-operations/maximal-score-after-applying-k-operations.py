class Solution:
    def maxKelements(self, nums: List[int], k: int) -> int:
        max_heap = []

        for num in nums:
            heapq.heappush(max_heap, -num)
        

        res = 0
        for i in range(k):
            val = -heapq.heappop(max_heap)
            res += val
            new_val = ceil(val / 3)
            heapq.heappush(max_heap, -new_val)
        
        return res