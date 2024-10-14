class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # Step 1: Count the frequency of each element in nums
        col = Counter(nums)  # 'col' is a dictionary with elements as keys and their frequencies as values
        
        min_heap = []  # This will be used to store the 'k' most frequent elements

        # Step 2: Iterate over each element (key) and its frequency (v) in the counter dictionary
        for key, v in col.items():
            # Push the (frequency, element) pair into the min-heap
            heapq.heappush(min_heap, (v, key))
            
            # If the size of the heap exceeds k, pop the smallest frequency element
            # This ensures that we always keep the 'k' most frequent elements in the heap
            if len(min_heap) > k:
                heapq.heappop(min_heap)
        
        res = []  # This will store the result

        # Step 3: Pop elements from the heap (which are the 'k' most frequent elements) and append them to the result
        while min_heap:
            # Pop the element with the smallest frequency from the heap and append just the element (key) to 'res'
            res.append(heapq.heappop(min_heap)[1])

        # Step 4: Reverse the result list because elements are popped in increasing order of frequency
        return res[::-1]  # Reverse the result so the most frequent elements come first