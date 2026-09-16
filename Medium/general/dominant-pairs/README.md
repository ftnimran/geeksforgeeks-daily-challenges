# Dominant Pairs

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/dominant-pairs/1)
📊 Difficulty: Medium
📂 Category: General

## 📝 Description

Given an even-sized integer array **arr[]**, count the number of dominant pairs. A pair of indices (i, j) is called dominant if all of the following conditions hold:

*   0 ≤ i < arr.size() / 2
*   arr.size() / 2 ≤ j < arr.size() 
*   arr[i] ≥ 5 × arr[j] 

Return the total number of dominant pairs.

**Note:** 0-based indexing is used.

**Example:**

```
Input: arr[] = [10, 2, 2, 1]

Output: 2

Explanation: First half: [10, 2], Second half: [2, 1]. So valid two pairs are: {0, 2}: 10 >= 5 × 2 {0, 3}: 10 >= 5 × 1
```
```
Input: arr[] = [10, 8, 2, 1, 1, 2]

Output: 5

Explanation: First half: [10, 8, 2], Second half: [1, 1, 2]. So valid five pairs are: {0, 3}: 10 >= 5 × 1{0, 4}: 10 >= 5 × 1 {0, 5}: 10 >= 5 × 2{1, 3}: 8 >= 5 × 1 {1, 4}: 8 >= 5 × 1
```
