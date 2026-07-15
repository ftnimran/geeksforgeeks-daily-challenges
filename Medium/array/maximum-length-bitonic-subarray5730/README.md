# Longest Bitonic Subarray

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/maximum-length-bitonic-subarray5730/1)
📊 Difficulty: Medium
📂 Category: Array

## 📝 Description

Given an array **arr[]** containing positive integers, return the maximum length of the bitonic subarray.

A subarray **arr[i...j]** is considered bitonic if its elements first monotonically increase, and then monotonically decrease. Formally, there exists an index **k** (where **i <= k <= j**) such that:

*   arr[i] <= arr[i+1] <= . . . <= arr[k] 
*   arr[k] >= arr[k+1] >= . . . >= arr[j]

Example: 

```
Input: arr[] = [12, 4, 78, 90, 45, 23]

Output: 5

Explanation: The longest bitonic subarray is [4, 78, 90, 45, 23], it starts increasing at 4, peaks at 90, and decreases to 23, giving length of 5.
```
```
Input: arr[] = [10, 20, 30, 40]

Output: 4

Explanation: The array [10, 20, 30, 40] is striclty increasing with no decreasing part, so longest bitonic subarray is the entire array itself, giving a length of 4.
```
```
Input: arr[] = [10, 10, 10, 10]

Output: 4
```
