# Min Edge Reversals for Path

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/minimum-edges/1)
📊 Difficulty: Medium
📂 Category: General

## 📝 Description

Given a directed graph with ****n**** vertices numbered from 1 to n. The graph is represented using a 2D array ****edges[][]**** of size m, where each entry edges[i] = [u, v] denotes a directed edge from vertex u to vertex v. You are also given a source vertex **src** and a destination vertex **dst**.

Find the minimum number of edges that need to be reversed so that there exists at least one path from src to dst.

If it is not possible to create a path from src to dst, return -1.

Example:

```
Input: n = 3, edges[][] = [[1, 2], [3, 2]], src = 1, dst = 3 
Output: 1

Explanation: Reverse the edge 3 -> 2.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/930371/Web/Other/blobid0_1782732713.png)

```
Input: n = 4, edges[][] = [[1, 2], [2, 3], [3, 4]], src = 1, dst = 4 
Output: 0

Explanation: One path already exists between 1 to 4 i.e. 1 -> 2 -> 3 -> 4.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/930371/Web/Other/blobid2_1782732752.png)

**Constraints:**  
1 ≤ n, m ≤ 10<sup>5</sup>  
1 ≤ edges[i][0], edges[i][1] ≤ n  
1 ≤ src, dst ≤ n
