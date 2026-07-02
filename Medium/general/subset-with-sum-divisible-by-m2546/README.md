# Check Subset sum divisible by k

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/subset-with-sum-divisible-by-m2546/1)
📊 Difficulty: Medium
📂 Category: General

## 📝 Description

Given an array **arr[]** of positive integers and a value **k.** Return **true** if the sum of any non-empty subset of the given array is divisible by k otherwise, return **false**.

Example:

```
Input: arr[] = [3, 1, 7, 5] , k = 6

Output: true

Explanation: If we take the subset {7, 5} then sum will be 12 which is divisible by 6.
```
```
Input: arr[] = [1, 2, 6] , k = 5

Output: false

Explanation: All possible subsets of the given set are {1}, {2}, {6}, {1, 2}, {2, 6}, {1, 6} and {1, 2, 6}. There is no subset whose sum is divisible by 5.
```

**Constraints:**  
1 ≤ arr.size(), k ≤ 10<sup>3</sup>  
1 ≤ arr[i] ≤ 10<sup>3</sup>
