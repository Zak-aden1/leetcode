class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        # time = distance / speed
        # calc time
        # if next car time quicker
        # increase fleet
        # newTime = slowe

        # better to sort by position
        cars = [None] * len(position)

        for i in range(len(position)):
            cars[i] = (position[i], speed[i])
        
        cars.sort(key = lambda x: -x[0])
        
        fleets = 0
        curr_time = 0
        stack = []
        # keep track of prev highest

        for pos, sp in cars:
            time = (target - pos) / sp
            if not stack:
                stack.append(time)
            elif time > stack[-1]:
                # fleets += 1
                # curr_time = time
                stack.append(time)
        
        return len(stack)

