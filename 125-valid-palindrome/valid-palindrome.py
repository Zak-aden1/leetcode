class Solution:
    def isPalindrome(self, s: str) -> bool:
        clean_str = ""

        for char in s:
            if char.isalnum():
                clean_str += char.lower()

        reverse = ""

        for char in clean_str:
            reverse = char + reverse

        return reverse == clean_str
