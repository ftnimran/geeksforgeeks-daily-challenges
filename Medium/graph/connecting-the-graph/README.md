# Min Edge Movements to Connect a Graph

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/connecting-the-graph/1)
📊 Difficulty: Medium
📂 Category: Graph

## 📝 Description

Given a graph with **n** vertices (0 to n-1) and **m** edges. You can remove one edge from anywhere and add that edge between any two vertices in one operation.

Find the minimum number of operations required to connect the graph. If it is not possible to connect the graph, return -1.

Example: 

```
Input: n = 4, edges[][] = [[0, 1], [0, 2], [1, 2]]
Output: 1
Explanation: Remove edge between vertices 1 and 2 and add between vertices 1 and 3.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/928116/Web/Other/blobid0_1778825062.webp)

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/928116/Web/Other/blobid0_1778825009.webp)

```
Input: n = 6, edges[][] = [[0,1], [0,2], [0,3], [1,2], [1,3]]
Output: 2
Explanation: Remove edge between (1,2) and (0,3), and add edge between (1,4) and (3,5)
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/928116/Web/Other/blobid2_1778825103.webp)

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/928116/Web/Other/blobid1_1778825082.webp)
