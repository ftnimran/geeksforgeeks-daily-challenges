# Count Pairs Divisible By K

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/count-pairs-in-array-divisible-by-k/1)
📊 Difficulty: Medium
📂 Category: General

## 📝 Description

Given an array **arr[]** and positive integer **k**, count total number of pairs in the array whose sum is divisible by **k**.

Example:

```
Input :  arr[] = [2, 2, 1, 7, 5, 3], k = 4

Output : 5

Explanation : There are five pairs possible whose sum is divisible by '4' i.e., (2, 2), (1, 7), (7, 5), (1, 3) and (5, 3).
```
```
Input : arr[] = [5, 9, 36, 74, 52, 31, 42], k = 3

Output : 7 

Explanation : There are seven pairs whose sum is divisible by 3, i.e, (9, 36), (9,42), (74, 52), (36, 42), (74, 31), (31, 5) and (5, 52).
```

**Constraints :**

1 ≤ |arr| ≤ 5*10<sup>4</sup>

1 ≤ arr[i] ≤ 10<sup>6</sup>

1 ≤ k ≤ 5*10<sup>4</sup>
