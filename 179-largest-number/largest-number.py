class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        # convert each integer to a str
        num_strings = [str(num) for num in nums]

        # sort strings based on concatenated values
        num_strings.sort(key=lambda a: a * 10, reverse=True)

        print(num_strings)

        # Handle the case where the largest number is zero
        if num_strings[0] == "0":
            return "0"

        return "".join(num_strings)