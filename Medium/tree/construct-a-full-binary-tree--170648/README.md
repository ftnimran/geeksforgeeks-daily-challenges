# Construct a Full Binary Tree

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/construct-a-full-binary-tree--170648/1)
📊 Difficulty: Medium
📂 Category: Tree

## 📝 Description

Given two arrays **pre[]** and **preMirror[]** of size **n** containing unique elements, where pre[] represents the preorder traversal of a full binary tree and preMirror[] represents the preorder traversal of its mirror tree, construct the original full binary tree using these traversals.

**Note**: A general binary tree cannot be uniquely constructed using these two traversals. However, a full binary tree can be constructed uniquely from the given traversals without any ambiguity.

Example:

```
Input: pre[] = [0,1,2], preMirror[] = [0,2,1] 
Output: [0, 1, 2]
Explanation: The tree will look like
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/928499/Web/Other/blobid0_1779796828.png)

```
Input: pre[] = [1, 2, 4, 5, 3, 6, 7], preMirror[] = [1, 3, 7, 6, 2, 5, 4]

Output: [1, 2, 4, 5, 3, 6, 7]
Explanation: The tree will look like
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/928499/Web/Other/blobid0_1778931597.webp)
