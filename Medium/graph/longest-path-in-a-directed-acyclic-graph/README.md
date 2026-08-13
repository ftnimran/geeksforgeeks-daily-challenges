# Longest Path in a Directed Acyclic Graph

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/longest-path-in-a-directed-acyclic-graph/1)
📊 Difficulty: Medium
📂 Category: Graph

## 📝 Description

Given a weighted Directed Acyclic Graph (DAG) with **V** vertices numbered from 0 to V - 1, represented by **edges[][]**, where edges[i] = [u, v, w] denotes a directed edge from u to v with weight w, and a source vertex **src**.

*   Return the distance array, where the value at index i represents the longest distance from s to vertex i.
*   If a vertex is unreachable from s, store INT_MIN for that vertex. The driver code will automatically display INT_MIN as INF.

**Examples :**

```
Input: V = 4, src = 0, edges[][] = [[0, 1, 1], [0, 2, 1], [1, 2, 5], [3, 1, 2], [3, 2, -1]]

Output: [0, 1, 6, INF]

Explanation: The longest distance of vertex 1 from 0 is 1, vertex 2 is 6 and vertex 3 is unreachable so INF.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/929699/Web/Other/blobid0_1781593057.webp)

```
Input: V = 5, src = 1, edges[][] = [[0, 1, 1], [0, 2, 2], [1, 4, 4], [3, 2, -1], [4, 2, 3], [4, 3, 6]]

Output: [INF, 0, 9, 10, 4]

Explanation: The vertex 0 is not reachable from vertex 1 so its distance is INF, for 2 it is 9, for 3 it is 10, and for 4 it is 4.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/929699/Web/Other/blobid2_1781591927.webp)

**Constraints:**  
1 ≤ V ≤ 10<sup>4  
</sup>0 ≤ src ≤ V-1  
1 ≤ edges.size() ≤ V * (V - 1) / 2  
0 ≤ edges[i][0], edges[i][1] < V  
\-100 ≤ edges[i][2] ≤ 100
