# Values with Equal Array Remainders

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/k-modulus-array-element0255/1)
📊 Difficulty: Medium
📂 Category: Array

## 📝 Description

Given an integer array **arr[]**, count the number of positive integers **k** such that all elements of the array leave the same remainder when divided by k.

If there are infinitely many such values of k, return **\-1**.

Example:

```
Input: arr[] = [38, 6, 34]

Output: 3

Explanation: The values of k for which all elements leave the same remainder when divided by k are 1, 2, and 4.
For k = 1, all elements leave remainder 0.
For k = 2, all elements leave remainder 0.
For k = 4, all elements leave remainder 2.
No other positive integer satisfies the required condition. Hence, the answer is 3.
```
```
Input: arr[] = [3, 2]

Output: 1
Explanation: The only positive integer for which both elements leave the same remainder is 1, since both numbers leave remainder 0 when divided by 1.
```
```
Input: arr[] = [5, 5, 5]

Output: -1
Explanation: All elements in the array are equal. Therefore, for every positive integer k, all elements leave the same remainder when divided by k.
Since there are infinitely many such values of k, the answer is -1.
```
