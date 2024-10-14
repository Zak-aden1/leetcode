class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        col = Counter(nums)
        min_heap = []

        for key, v in col.items():
            heapq.heappush(min_heap, (v, key))
            if len(min_heap) > k:
                heapq.heappop(min_heap)
        
        res = []

        while min_heap:
            res.append(heapq.heappop(min_heap)[1])

        return res[::-1] 
        
