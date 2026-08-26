# Negative Weight Cycle

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/negative-weight-cycle3504/1)
📊 Difficulty: Medium
📂 Category: General

## 📝 Description

Given a weighted directed graph containing **V** vertices numbered from 0 to V - 1 and a list of **E** directed edges **edges[][]**, determine whether the graph contains a negative weight cycle or not.

Each edge is represented as: [u, v, w], where there is a directed edge from vertex u to vertex v having the given weight w.

**Note:** A negative-weight cycle is a cycle in a graph whose edges sum to a negative value.

Example:

```
Input: V = 4, E = 4, edges[][] = [[0, 3, 6], [1, 0, 4], [1, 2, 6], [3, 1, 2]]

Output: false

Explanation: Cycle 1 -> 0 -> 3 -> 1 has total weight 6 + 4 + 2 = 12, which is positive, so no negative weight cycle exists.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/705719/Web/Other/blobid3_1787650457.png)

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/705719/Web/Other/blobid2_1787650381.png)

```
Input: V = 4, E = 4, edges[][] = [[1, 0, 4], [3, 1, -2], [1, 2, -6], [2, 3, 5]]

Output: true

Explanation: There is a cycle 1 -> 2 -> 3 -> 1 with total weight -3, which is negative, so a negative weight cycle exists.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/705719/Web/Other/blobid5_1787650506.png)

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/705719/Web/Other/blobid4_1787650481.png)

 **Constraints:**  
1 ≤ V ≤ 10<sup>3</sup>  
0 ≤ E ≤ 10<sup>5</sup>  
0 ≤ u, v < V  
\-10<sup>6</sup> ≤ w ≤ 10<sup>6</sup>
