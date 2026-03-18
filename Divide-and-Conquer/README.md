# Divide and Conquer

A paradigm where a problem is solved by breaking it into smaller subproblems of the same type, solving them recursively, and combining the results.

## Steps

1. **Divide** — split the problem into smaller subproblems (often two halves).
2. **Conquer** — solve subproblems recursively; base case when size is small enough (e.g. 1 element).
3. **Combine** — merge subproblem results into the answer for the original problem.

## When to use

- Problem can be split into independent subproblems of the same kind.
- Combining solutions is straightforward.
- Often leads to O(n log n) or similar when “divide” and “combine” are linear.

## Examples

### Merge Sort (LC 912)

- **Divide:** split array into left and right halves.
- **Conquer:** recursively sort each half (base case: length ≤ 1).
- **Combine:** merge two sorted halves in O(n) with two pointers.

```
[5, 2, 4, 1, 3]
    → [5, 2]  [4, 1, 3]
    → [5] [2]  [4] [1, 3]
    → [2, 5]   [4] [1] [3]
    → [2, 5]   [1, 3, 4]
    → [1, 2, 3, 4, 5]
```

Time O(n log n), space O(n) for the merge.

### Binary Search

- **Divide:** compare target with middle element; keep only left or right half.
- **Conquer:** search in the chosen half (base case: one element or empty).
- **Combine:** no merge; return the result from the subproblem.

### Maximum Subarray (alternative to Kadane)

- **Divide:** split at mid; max subarray is either in left half, right half, or crossing mid.
- **Conquer:** recurse on left and right for “fully inside” max.
- **Combine:** compute max crossing mid (O(n)), then take max of left, right, and crossing.

---

Code: see `912-sort-an-array.js` (merge sort) in this folder.
