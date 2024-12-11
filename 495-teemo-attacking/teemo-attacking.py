class Solution:
    def findPoisonedDuration(self, timeSeries: List[int], duration: int) -> int:
        ans = 0
        
        for i in range(len(timeSeries)):
            if i + 1 < len(timeSeries) and timeSeries[i] + duration > timeSeries[i + 1]:
                # reset at time
                ans += abs(timeSeries[i] - timeSeries[i + 1])
            else:
                ans += duration

        return ans