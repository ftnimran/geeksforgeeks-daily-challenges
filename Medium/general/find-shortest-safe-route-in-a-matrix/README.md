# Shortest Safe Route in Grid

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/find-shortest-safe-route-in-a-matrix/1)
📊 Difficulty: Medium
📂 Category: General

## 📝 Description

Given a 2D matrix **mat[][]** of size **n** × **m**, where each cell is either 0 (landmine) or 1 (safe), find the minimum number of steps required to travel from any cell in the leftmost column to any cell in the rightmost column.

*   You can move only in four directions: up, down, left, and right.
*   A cell is unsafe if it contains a landmine or is directly adjacent (up, down, left, or right) to a landmine, and such cells must be avoided.
*   Return -1 if no safe path exists.

Example:

```
Input: mat[][] = [[1, 0, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 0, 1], [1, 1, 1, 1, 0]]
Output: 6

Explanation: We can see that length of shortest safe route is 6.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/710037/Web/Other/blobid1_1789323413.png)

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/710037/Web/Other/blobid0_1789323379.png)

```
Input: mat[][] = [[1, 1, 1, 1, 1], [1, 1, 0, 1, 1], [1, 1, 1, 1, 1]]
Output: \-1

Explanation: There is no possible path from first column to last column.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/710037/Web/Other/blobid2_1789323530.png)
