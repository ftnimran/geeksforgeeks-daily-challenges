# Shortest Path in 1-2 Graph

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/level-of-nodes1147/1)
📊 Difficulty: Medium
📂 Category: Graph

## 📝 Description

Given a weighted undirected graph with **V** vertices numbered from **0** to **V - 1**, represented by an array edges, where **edges[i] = [u<sub>i</sub>, v<sub>i</sub>, w<sub>i</sub>]** indicates that there is an edge between vertices u<sub>i</sub> and v<sub>i</sub> with a weight of w<sub>i</sub>. (w<sub>i</sub> can only be 1 or 2), and two vertices **src** and **dest**, find the shortest distance from src to dest.

The shortest distance is defined as the minimum total weight required to reach dest starting from src.

Return the shortest distance from src to dest. If dest is not reachable from src, return -1.

Example:

```
Input: V = 4, edges[][] = [[0, 1, 1], [0, 2, 2], [2, 3, 1], [1, 2, 1], [1, 3, 2]], src = 0, dest = 3

Output: 3

Explanation: One of the shortest paths from vertex 0 to vertex 3 is 0 -> 1 -> 3 with a total weight of 1 + 2 = 3.
Another shortest path is 0 -> 2 -> 3 with a total weight of 2 + 1 = 3.
Hence, the shortest distance from 0 to 3 is 3.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/929545/Web/Other/blobid0_1781262007.png)

```
Input: V = 5, edges[][] = [[0, 1, 1], [0, 2, 2], [1, 2, 1], [3, 4, 2]], src = 1, dest = 3
 
Output: -1

Explanation: There is no path from vertex 1 to vertex 3, so the answer is -1.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/929545/Web/Other/blobid1_1781262339.png)

```
Input: V = 5, edges[][] = [[1, 0, 1], [0, 3, 2], [1, 3, 1], [1, 2, 2], [2, 3, 2], [3, 4, 1], [2, 4, 1]], src = 1, dest = 4

Output: 2

Explanation: The shortest path from vertex 1 to vertex 4 is 1 -> 3 -> 4 with a total weight of 1 + 1 = 2.
Hence, the shortest distance from 1 to 4 is 2.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/929545/Web/Other/blobid2_1781262429.png)

**Constraints:**  
2 ≤ V ≤ 10<sup>5  
</sup>1 ≤ edges.size() ≤ min(2*10<sup>5</sup>,  V*(V-1)/2)  
0 ≤ edges[i][0], edges[i][1] ≤ V-1  
edges[i][0] != edges[i][1]  
1 ≤ edges[i][1] ≤ 2
