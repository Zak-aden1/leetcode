class Solution:
    def minLength(self, s: str) -> int:
        m = set(["AB", "CD"])

        stack = []

        for char in s:
            if not stack:
                stack.append(char)
                continue
            
            print(stack[-1] + char)
            if (stack[-1] + char) in m:
                stack.pop()
            else:
                stack.append(char)
        
        return len(stack)