# Number of Turns in Binary Tree

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/number-of-turns-in-binary-tree/1)
📊 Difficulty: Medium
📂 Category: Tree

## 📝 Description

Given root of a binary tree and the values of its two nodes **p** and **q**, count turns required to travel from node p to q.

*   A turn occurs whenever the direction of movement changes from left to right or right to left while traversing the tree.
*   If the path between the two nodes does not involve any turns (i.e., the nodes lie on the same straight path), return **\-1**.

**Note:** All node values are distinct.

**Examples :**

```
Input: root[] = [1, 2, 3, 4, 5, 6, 7, 8, N, N, N, 9, 10], p = 5, q = 10
Output: 4

Explanation: The path from node 5 to node 10 is: 5 -> 2 -> 1 -> 3 -> 6 → 10. Direction changes occur at nodes 2, 1, 3, and 6. Therefore, the number of turns is 4.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/930714/Web/Other/blobid1_1783765557.webp)

```
Input: root[] = [1, 2, 3, 4, 5, 6, 7, 8, N, N, N, 9, 10], p = 1, q = 4
Output: -1

Explanation: No turn is required since they are in a straight line.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/930714/Web/Other/blobid3_1783765642.webp)

**Constraints:**  
1 ≤ n ≤ 10<sup>4</sup>, n is the number of nodes  
1 ≤ node->data ≤ 10<sup>4</sup>  
1 ≤ p, q ≤ n
