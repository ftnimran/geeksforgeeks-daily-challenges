# Longest Consecutive Path in Binary tree

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/longest-consecutive-sequence-in-binary-tree/1)
📊 Difficulty: Medium
📂 Category: Tree

## 📝 Description

Given the root of a Binary Tree, find the length of the **longest** path consisting of connected nodes such that each next node has a value exactly 1 greater than its parent.

The path must move from parent to child only and follow increasing consecutive values.

If no such path exists, return -1.

Example:

```
Input: root[] = [1, 2, 3]                                

Output: 2

Explanation : Longest sequence is 1, 2. So answer for this test case is 2.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/928570/Web/Other/blobid0_1779268664.png)

```
Input : root[] = [10, 20, 30, 40, N, 60, 90]

Output : -1

Explanation: For the above test case no sequence is possible. So output is -1.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/928570/Web/Other/blobid2_1779268917.png)
