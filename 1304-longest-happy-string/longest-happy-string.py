class Solution:
    def longestDiverseString(self, a: int, b: int, c: int) -> str:
        max_heap = []

        # Push characters with their frequencies into the max-heap (using negative values to simulate max-heap)
        if a > 0:
            heapq.heappush(max_heap, (-a, "a"))
        if b > 0:
            heapq.heappush(max_heap, (-b, "b"))
        if c > 0:
            heapq.heappush(max_heap, (-c, "c"))

        result = ""  # Stores the resulting happy string

        # Process the heap to build the longest happy string
        while max_heap:
            freq, char = heapq.heappop(max_heap)  # Get the character with the highest frequency
            freq = -freq  # Convert back to positive frequency

            # Check if adding this character would create three consecutive identical characters
            if len(result) > 1 and result[-1] == char and result[-2] == char:
                # If no other character is available, return the result so far
                if not max_heap:
                    break

                # Pop the next most frequent character
                next_freq, next_char = heapq.heappop(max_heap)
                next_freq = -next_freq

                # Add one occurrence of the next most frequent character
                result += next_char
                next_freq -= 1

                # Push the next character back into the heap if there are remaining occurrences
                if next_freq > 0:
                    heapq.heappush(max_heap, (-next_freq, next_char))

                # Re-add the original character back to the heap for future use
                heapq.heappush(max_heap, (-freq, char))
            else:
                # Add up to two occurrences of the current character
                add_count = min(2, freq)
                result += char * add_count
                freq -= add_count

                # Push the character back into the heap if there are remaining occurrences
                if freq > 0:
                    heapq.heappush(max_heap, (-freq, char))

        return result