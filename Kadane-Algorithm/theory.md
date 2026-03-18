# Kadane's Algorithm

Find the **maximum sum** of a contiguous subarray in an array of integers (can be negative).

## Idea

At each index `i`, either:

- start a new subarray at `nums[i]`, or
- extend the subarray that ended at `i - 1` by adding `nums[i]`.

The better choice is the larger of the two: `max(nums[i], curr + nums[i])`.

Track the best sum seen so far in `best`.

## State

- `curr` — max sum of a subarray **ending** at the current index.
- `best` — max sum over **all** subarrays seen so far.

## Walkthrough: `[-2, 1, -3, 4, -1, 2, 1, -5, 4]`

| i | nums[i] | curr (end here) | best |
|---|---------|-----------------|------|
| 0 | -2      | -2              | -2   |
| 1 | 1       | max(1, -2+1)=1  | 1    |
| 2 | -3      | max(-3, 1-3)=-2 | 1    |
| 3 | 4       | max(4, -2+4)=4  | 4    |
| 4 | -1      | max(-1, 4-1)=3  | 4    |
| 5 | 2       | max(2, 3+2)=5   | 5    |
| 6 | 1       | max(1, 5+1)=6   | **6** |
| 7 | -5      | max(-5, 6-5)=1  | 6    |
| 8 | 4       | max(4, 1+4)=5   | 6    |

Answer **6** — subarray `[4, -1, 2, 1]`.

## Edge cases

- All negative: the answer is the **largest single element** (e.g. `[-3, -1, -2]` → `-1`).
- One element: that element.

## Complexity

- Time **O(n)**, space **O(1)**.

---

Code: `53-maximum-subarray.js`.
