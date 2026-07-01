# Max Subarray Sum by Removing At Most One

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/max-sum-subarray-by-removing-at-most-one-element/1)
📊 Difficulty: Medium
📂 Category: Array

## 📝 Description

Given an array arr[], find the maximum sum of a non-empty subarray. You are allowed to skip at most one element in the subarray.

**Note:** After skipping the element, the subarray must still be non-empty.

Example:

```
Input: arr[] = [1, 2, 3, -4, 5]

Output: 11

Explanation: We can get maximum sum subarray by skipping -4.
```
```
Input: arr[] = [-2, -3, 4, -1, -2, 1, 5, -3]

Output: 9

Explanation: We can get maximum sum subarray by skipping -2 as [4,-1,1,5] sums to 9, which is the maximum achievable sum.
```

**Constraints:**  
1 ≤ arr.size() ≤ 10<sup>6</sup>  
\-10<sup>3</sup> ≤ arr[i] ≤ 10<sup>3</sup>
