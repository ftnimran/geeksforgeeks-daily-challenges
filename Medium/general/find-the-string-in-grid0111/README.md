# Word in Grid - All Occurrences

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/find-the-string-in-grid0111/1)
📊 Difficulty: Medium
📂 Category: General

## 📝 Description

Given a 2D grid **mat[][]** of size **n × m** consisting of characters and a string **word**, find all starting positions where the word occurs in the grid.

*   The word can be formed from any cell by moving in any of the 8 directions (2 horizontal, 2 vertical, and 4 diagonal) in a straight line without changing direction.
*   Each cell can be used at most once per occurrence.
*   Return all unique starting coordinates in lexicographically smallest order.

**Examples :**

```
Input: mat[][] = {{a,b,a,b},{a,b,e,b},{e,b,e,b}}, word = "abe"

Output: {{0,0}, {0,2}, {1,0}}

Explanation: From (0,0) we can find "abe" in right-down diagonal. From (0,2) we can find "abe" in left-down diagonal. From (1,0) we can find "abe" in horizontally right direction.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/926518/Web/Other/blobid0_1780662652.png)

```
Input: mat[][] = {{G,E,E,K,S,F,O,R,G,E,E,K,S}, {G,E,E,K,S,Q,U,I,Z,G,E,E,K}, {I,D,E,Q,A,P,R,A,C,T,I,C,E}}, word = "GEEKS"

Output: {{0,0}, {0,8}, {1,0}}

Explanation: From (0,0) we can find "GEEKS" horizontally right. From (0,8) we can find "GEEKS" horizontally right. From (1,0) we can find "GEEKS" horizontally right.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/926518/Web/Other/blobid1_1780663080.png)

**Constraints:**  
1 <= n <= m <= 50  
1 <= |word| <= 20
