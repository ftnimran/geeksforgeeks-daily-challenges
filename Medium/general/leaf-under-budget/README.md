# Visit Leaves with Budget

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/leaf-under-budget/1)
📊 Difficulty: Medium
📂 Category: General

## 📝 Description

Given a binary tree and an integer **k**, where you start from the root at level 1. The cost of visiting a leaf node is equal to the level of that leaf node. You can visit any number of leaf nodes, but the total cost of visiting them must not exceed k.

Return the maximum number of leaf nodes that can be visited within the given budget.

Example:

```
Input: root[] = [10, 8, 2, 3, N, 3, 6, N, N, N, 4], k = 8

Output: 2

Explanation:
Cost For visiting Leaf Node 3: 3
Cost For visiting Leaf Node 4: 4
Cost For visiting Leaf Node 6: 3
To maximize the number of visited leaves, choose the two cheapest leaves: Cost = 3 + 3 = 6 ≤ 8. Thus, the maximum number of leaf nodes that can be visited is 2.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/926895/Web/Other/blobid1_1776856866.png)

```
Input: root[] = [1, 2, 3, 4, 5, 6, 7], k = 5
Output: 1
Explanation: The leaf nodes are 4, 5, 6 and 7, and all are at level 3. Therefore, visiting each leaf costs 3. With a budget of 5, we can visit only one leaf because: 3 ≤ 5, but 3 + 3 > 5. Thus, the maximum number of leaf nodes that can be visited is 1.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/926895/Web/Other/blobid2_1776856916.png)

```
Input: root[] = [1], k = 1         
Output: 1
Explanation: The root node is also a leaf node and is at level 1. Therefore, its visiting cost is 1. Thus, the maximum number of leaf nodes that can be visited is 1.
```
