# Longest Colored Path

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/longest-colored-path--151454/1)
📊 Difficulty: Medium
📂 Category: General

## 📝 Description

Given an undirected acyclic graph (tree) with **n** nodes numbered from 1 to n. Each node is colored either Red (R) or Blue (B).

The colors of the nodes are given by a string **s** of length n, where:

*   s[i] = 'R' means node i + 1 is Red.
*   s[i] = 'B' means node i + 1 is Blue.

You are also given a list of n - 1 edges **edges[][]**, where each edges[i] = [u, v] represents an undirected edge between nodes u and v.

You can start from any node and traverse along the edges to form a path.

A path is called valid if, once you visit a Blue node, you cannot visit any Red node after it on the same path.

In other words, a valid path must have the following form:

*   Only Red nodes, or
*   Only Blue nodes, or
*   Some Red nodes followed by some Blue nodes.
*   A path containing a pattern like Blue -> Red is invalid.

Find the maximum number of nodes in a valid path.

Example:

```
Input: s = "RBB", edges = [[1, 2], [1, 3]]   
Output: 2
Explanation: The longest path is either 1 -> 2 or 1 -> 3. In both cases, the length of the path is 2.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/916087/Web/Other/blobid1_1786448279.webp)

```
Input: s = "BB", edges = [[1, 2]]
  
Output: 2
Explanation: The longest path is 1 -> 2. The length of the path is 2.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/916087/Web/Other/blobid0_1786448279.webp)
