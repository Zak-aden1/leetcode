class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        lo, hi = 0, len(numbers) - 1

        while lo <= hi:
            m = (hi + lo) // 2
            ans = numbers[lo] + numbers[hi]
            print(lo, hi, ans, target > ans)

            if ans == target:
                return [lo + 1, hi + 1]
            
            if target < ans:
                hi -= 1
            else:
                lo += 1
        

            