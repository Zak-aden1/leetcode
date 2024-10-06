class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        # Perform binary search to find the leftmost (starting) position of the target
        left = self.binSearch(nums, target, True)
        # Perform binary search to find the rightmost (ending) position of the target
        right = self.binSearch(nums, target, False)
        # Return the found positions as a list. If not found, both values will be -1
        return [left, right]

    # Helper function to perform a binary search with bias (left or right)
    def binSearch(self, nums, target, leftBias):
        # Initialize the search boundaries: 'l' is the left boundary, 'r' is the right boundary
        l, r = 0, len(nums) - 1
        # Variable 'i' stores the found index of the target (-1 means target not found)
        i = -1
        
        # Continue searching while there is a valid search range
        while l <= r:
            # Calculate the midpoint to avoid overflow with (l + r) // 2
            m = l + ((r - l) // 2)

            # If the target is found at index 'm'
            if target == nums[m]:
                # Store the found index 'm' in 'i'
                i = m
                # Adjust search range based on bias: if looking for the leftmost index, search the left half
                if leftBias:
                    r = m - 1
                # Otherwise, search the right half for the rightmost index
                else:
                    l = m + 1
            # If the target is greater than the current midpoint, search the right half
            elif target > nums[m]:
                l = m + 1
            # If the target is smaller than the current midpoint, search the left half
            else:
                r = m - 1
        
        # Return the index of the target (or -1 if not found)
        return i