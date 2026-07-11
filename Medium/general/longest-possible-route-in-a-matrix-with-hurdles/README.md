# Longest Possible Route in a Matrix with Hurdles

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/longest-possible-route-in-a-matrix-with-hurdles/1)
📊 Difficulty: Medium
📂 Category: General

## 📝 Description

Given a binary matrix **mat[][]** of size **n × m** containing values 0 and 1, and four integers **xs**, **ys**, **xd**, and **yd** representing the source cell (xs, ys) and destination cell (xd, yd), find the length of the longest possible path from the source cell to the destination cell. From any cell, you can move to its adjacent cells in the up, down, left, and right directions.

*   1 represents a traversable cell.
*   0 represents a blocked cell that cannot be visited.
*   A cell can be visited at most once in a path.
*   If the destination cannot be reached from the source, return -1.

Example:

```
Input: mat[][] = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 0, 1, 1, 0, 1, 1, 0, 1],[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], xs = 0, ys = 0, xd = 1, yd = 7

Output: 24 

Explanation: The longest valid path from (0, 0) to (1, 7) without revisiting any cell has length 24.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/930022/Web/Other/blobid1_1782119611.png)

```
Input: mat[][] = [[1, 0, 0, 1, 0],[0, 0, 0, 1, 0],[0, 1, 1, 0, 0]], xs = 0, ys = 3, xd = 2, yd = 2

Output: \-1

Explanation: The destination cell (2, 2) cannot be reached from the source cell (0, 3), so the answer is -1.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/930022/Web/Other/blobid2_1782119632.png)

**Constraints:  
**1 ≤ n, m ≤ 10  
mat[i][j] == 0 or mat[i][j] == 1  
The source and destination cells are always inside the matrix.
