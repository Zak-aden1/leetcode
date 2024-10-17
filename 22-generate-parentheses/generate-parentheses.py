class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        options = []
    
        def backtrack(comb, open_count, close):
            # base case
            if len(comb) == n * 2:
                options.append(comb)
                return
            
            # option 1 adding a open bracket
            if open_count < n:
                backtrack(comb + "(", open_count + 1, close)

            # option 2 adding a close bracket - only add ) if ( is added
            if close < open_count:
                backtrack(comb + ")", open_count, close + 1)
            
        backtrack("", 0, 0)

        return options