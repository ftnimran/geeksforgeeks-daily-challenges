# Check Level Anagrams in Binary Trees

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/check-if-all-levels-of-two-trees-are-anagrams-or-not/1)
📊 Difficulty: Medium
📂 Category: Tree

## 📝 Description

Given the roots of two binary trees ****root1**** and ****root2****, check whether the nodes at every corresponding level of the two trees are anagrams of each other.

Two levels are considered anagrams if they contain the same node values with the same frequencies, regardless of their order.

Example:

```
Input: root1 = [1, 3, 2, N, N, 5, 4], root2 = [1, 2, 3, 4, 5, N, N]
Output: true

Explanation: 
Level 0: [1] and [1]
Level 1: [3, 2] and [2, 3]
Level 2: [5, 4] and [4, 5]
The node values at every corresponding level are anagrams of each other. Hence, the answer is true.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/930979/Web/Other/blobid1_1784721837.png)

```
Input: root1 = [1, 2, 3, 5, 4], root2 = [1, 2, 4, 5, 3]

Output: false

Explanation: Level 0: [1] and [1]
Level 1: [2, 3] and [2, 4]
Since the node values at level 1 are not anagrams, the answer is false.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/930979/Web/Other/blobid2_1784721874.png)
