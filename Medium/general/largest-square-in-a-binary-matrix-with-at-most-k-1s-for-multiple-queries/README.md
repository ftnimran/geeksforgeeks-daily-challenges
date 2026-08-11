# Largest Odd Squares with Limited 1s

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/largest-square-in-a-binary-matrix-with-at-most-k-1s-for-multiple-queries/1)
📊 Difficulty: Medium
📂 Category: General

## 📝 Description

Given a binary matrix **mat[][]** of size n*m and an integer **k**, process a list of queries **queries[][]**. Each query contains coordinates [i, j] of the center of a square.

*   For every query, find the side length of the largest odd-sized square centered at cell (i, j) such that the square contains at most k ones.
*    A square centered at (i, j) expands outward symmetrically in all four directions by the same number of cells, so its side length is always odd.

**Note:** If no odd-sized square centered at the given cell satisfies the condition of containing at most k ones, return -1 for that query.

Example:

```
Input: mat[][] = [[1, 0, 1, 0, 0], [1, 0, 1, 1, 1], [1, 1, 1, 1, 1], [1, 0, 0, 1, 0]], queries[][] = [[1, 2]], k = 9

Output: [3]

Explanation: The largest odd-sized square centered at (1, 2) is the 3 × 3 square spanning rows 0 to 2 and columns 1 to 3. It contains 6 ones, which is at most k = 9. Hence, the answer is 3.
```
```
Input: mat[][] = [[1, 1, 1], [1, 1, 1], [1, 1, 1]], queries[][] = [[1, 1], [2, 2]], K = 9
Output: [3, 1]

Explanation: For query (1, 1), the largest valid square is the entire 3 × 3 matrix, which contains 9 ones. Hence, the answer is 3.
For query (2, 2), no expansion is possible without going outside the matrix, so only the 1 × 1 square centered at (2, 2) is valid. Hence, the answer is 1.
```

**Constraints:  
**1 ≤ mat.size(), mat[0].size() ≤ 500  
1 ≤ queries.size() ≤ 10<sup>4</sup>  
0 ≤ queries[q][0] < mat.size()  
0 ≤ queries[q][1] < mat[0].size()  
0 ≤ k ≤ mat.size() * mat[0].size()
