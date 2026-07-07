# Largest Unblocked Submatrix

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/largest-unblocked-submatrix/1)
📊 Difficulty: Medium
📂 Category: General

## 📝 Description

Given two integers **n** and **m**, and an array **arr[][]** of size **k**, where **arr[i]** = **[r, c]** represents a blocked cell (1-based indexing) in an **n × m** grid. Each blocked cell blocks its entire row and column. Find the **largest continuous** unblocked area in the grid.

**Note:** No two blocked cells are in the same row or the same column.

Example:

```
Input: n = 5, m = 5, arr[][] = [[2, 3], [5, 1]]
Output: 4

Explanation:\- Blocked cells (2, 3) and (5, 1) block rows 2, 5 and columns 1, 3.
- The longest unblocked row segment has length 2 (rows 3–4).
- The longest unblocked column segment has length 2 (columns 4–5).
- Therefore, the largest unblocked rectangle has area 2 × 2 = 4.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/930583/Web/Other/blobid0_1783402221.png)

```
Input: n = 2, m = 2, arr[][] = [[2, 2]]

Output: 1

Explanation: Since only (1,1) cell is free from the enemy hence answer is 1.
```

**Constraints:**  
1 ≤ n, m ≤ 10<sup>4</sup>  
0 ≤ k ≤ min(n, m)  
1 ≤ r ≤ n  
1 ≤ c ≤ m
