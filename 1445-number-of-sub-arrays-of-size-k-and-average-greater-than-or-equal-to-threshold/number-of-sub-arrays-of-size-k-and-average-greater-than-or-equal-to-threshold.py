class Solution:
    def numOfSubarrays(self, arr: List[int], k: int, threshold: int) -> int:
        l = 0
        total = 0
        output = 0

        for r in range(len(arr)):
            total += arr[r]
            if r >= k - 1:
                if total >= threshold * k:
                    output += 1
                total -= arr[l]
                l +=1
        

        return output

