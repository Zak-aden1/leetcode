class Solution:
    def longestDiverseString(self, a: int, b: int, c: int) -> str:
        max_heap = []

        if a > 0:
            heapq.heappush(max_heap, (-a, "a"))
        if b > 0:
            heapq.heappush(max_heap, (-b, "b"))
        if c > 0:
            heapq.heappush(max_heap, (-c, "c"))

        res = ""
        print(max_heap)
        while max_heap:
            num, char = heapq.heappop(max_heap)
            num = -num
            l = len(res) - 1
            if len(res) > 1 and (res[-1] == char and res[-2] == char):
                # pop second one and add to char
                if not max_heap:
                    break
                tempNum, tempChar = heapq.heappop(max_heap)
                tempNum = -tempNum
                # add_count = min(2, num)
                res += tempChar
                tempNum -= 1
                if tempNum > 0:
                    heapq.heappush(max_heap, (-tempNum, tempChar))
            else:
                add_count = min(2, num)
                res += char * add_count
                num -= add_count
            if num > 0:
                heapq.heappush(max_heap, (-num, char))

            

        return res