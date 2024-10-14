class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        col = Counter(nums)
        max_heap = []

        for key, v in col.items():
            heapq.heappush(max_heap, (v, key))
            if len(max_heap) > k:
                heapq.heappop(max_heap)
        
        res = []

        while max_heap:
            res.append(heapq.heappop(max_heap)[1])

        return res[::-1] 
        
