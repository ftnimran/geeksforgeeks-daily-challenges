# Complete Binary Tree Traversal with Array Input

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/print-binary-tree-levels-in-sorted-order3241/1)
📊 Difficulty: Medium
📂 Category: Tree

## 📝 Description

Given an integer array **arr[]** representing the nodes of a Complete Binary Tree in level order traversal, return the nodes at each level in sorted ascending order.

For every level of the binary tree, sort the values present at that level independently and return the resulting levels as a 2D array, where the i-th row contains the sorted values of the i-th level.

Example:

```
Input: arr[] = [7, 6, 5, 4, 3, 2, 1]

Output: [[7], [5, 6], [1, 2, 3, 4]]

Explanation: The complete binary tree formed from the given level order traversal is:           The nodes at each level after sorting are:
Level 0: [7]
Level 1: [5, 6]
Level 2: [1, 2, 3, 4]
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/929604/Web/Other/blobid2_1781250162.png)

```
Input: arr[] = [7, 16, 1, 4, 13]

Output: [[7], [1, 16], [4, 13]]

Explanation: The complete binary tree formed from the given level order traversal is:                 The nodes at each level after sorting are:
Level 0: [7]
Level 1: [1, 16]
Level 2: [4, 13]
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/929604/Web/Other/blobid4_1781250381.png)
