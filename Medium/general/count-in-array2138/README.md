# Sequences where Adjacent Divide

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/count-in-array2138/1)
📊 Difficulty: Medium
📂 Category: General

## 📝 Description

Given two positive integer **n** and **m.** Find the number of arrays of size n that can be formed such that:

*   Each element is in the range [1, m].
*   All adjacent are such that one of them divide the another i.e element A<sub>i</sub> divides A<sub>i + 1</sub> or A<sub>i+1</sub> divides A<sub>i</sub>.

Example:

```
Input: n = 3, m = 3

Output : 17

Explanation: The possible arrays are [1, 1, 1], [1, 1, 2], [1, 1, 3], [1, 2, 1], [1, 2, 2], [1, 3, 1], [1, 3, 3], [2, 1, 1], [2, 1, 2], [2, 1, 3], [2, 2, 1], [2, 2, 2], [3, 1, 1], [3, 1, 2], [3, 1, 3], [3, 3, 1] and [3, 3, 3].
```
```
Input: n = 1, m = 10 

Output: 10

Explanation: The possible arrays are [1], [2], [3], [4], [5], [6], [7], [8], [9] and [10].
```
