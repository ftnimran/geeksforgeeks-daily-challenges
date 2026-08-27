# Largest Rectangle with Column Swaps

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/find-the-largest-rectangle-of-1s-with-swapping-of-columns-allowed0243/1)
📊 Difficulty: Medium
📂 Category: General

## 📝 Description

Given a binary matrix **mat[][]** of size n × m containing only 0s and 1s, any pair of columns may be swapped any number of times. Return the maximum area of a rectangle consisting entirely of 1's that can be formed after performing the column swaps.

Example:

```
Input: mat[][] = [[0, 1, 0, 1, 0], [0, 1, 0, 1, 1], [1, 1, 0, 1, 0]]

Output: 6

Explanation: After swapping the 2nd and 3rd columns, the largest rectangle of 1s has an area of 6.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/930248/Web/Other/blobid0_1786000306.png)

```
Input: mat[][] = [[0, 1, 1, 0, 0], [1, 1, 1, 0, 1], [1, 1, 1, 0, 1], [1, 1, 1, 1, 1]]

Output: 12
Explanation: After swapping the 4th and 5th columns, the largest rectangle of 1s has an area of 12.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/930248/Web/Other/blobid1_1786000363.png)
