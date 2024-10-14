class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        max_heap = []

        for w in stones:
            heapq.heappush(max_heap, -w)
        
        while len(max_heap) > 1:
            x = -heapq.heappop(max_heap)
            y = -heapq.heappop(max_heap)

            s = x - y
            if s > 0:
                heapq.heappush(max_heap, -s)
        
        if len(max_heap) > 0:
            return -max_heap[0]
        else:
            return 0
        