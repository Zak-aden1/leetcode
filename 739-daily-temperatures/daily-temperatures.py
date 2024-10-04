class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        # Initialize the answer array with zeros
        ans = [0] * len(temperatures)
        
        # Stack to keep track of the indices of the temperatures
        stack = []
        
        # Iterate through the temperatures list
        for i in range(len(temperatures)):
            # While there are indices in the stack and the current temperature is 
            # greater than the temperature at the index on the top of the stack
            while stack and temperatures[i] > temperatures[stack[-1]]:
                # Pop the index from the stack
                prevIndex = stack.pop()
                # Calculate the number of days until a warmer temperature
                ans[prevIndex] = i - prevIndex
            
            # Push the current index onto the stack
            stack.append(i)
        
        # Return the answer array
        return ans