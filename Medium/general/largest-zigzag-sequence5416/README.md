# Largest Zigzag Sequence

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/largest-zigzag-sequence5416/1)
📊 Difficulty: Medium
📂 Category: General

## 📝 Description

Given a square matrix **mat[][]** of size **n × n**. A zigzag sequence starts from the top and ends at the bottom. Two consecutive elements of sequence cannot belong to the same column.

Return the maximum sum of such a zigzag sequence.

Example:

```
Input: mat[][] = [[3, 1, 2], [4, 8, 5], [6, 9, 7]]

Output: 18

Explanation:One optimal zigzag sequence is: 3 -> 8 -> 7, where the sum = 3 + 8 + 7 = 18.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/929925/Web/Other/blobid5_1782911641.png)

```
Input: mat[][] = [[1, 2, 4], [3, 9, 6], [11, 3, 15]]

Output: 28

Explanation:
One optimal zigzag sequence is: 4 -> 9 -> 15, where the sum = 4 + 9 + 15 = 28.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/929925/Web/Other/blobid8_1782911811.png)

**Constraints:**  
1 ≤ n ≤ 100  
1 ≤ mat[i][j] ≤ 1000
