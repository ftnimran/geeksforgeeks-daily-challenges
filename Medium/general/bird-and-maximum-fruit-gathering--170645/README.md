# Bird and Max Fruit Gathering

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/bird-and-maximum-fruit-gathering--170645/1)
📊 Difficulty: Medium
📂 Category: General

## 📝 Description

Given an array **arr[]** representing the fruit values of trees arranged in a circle and an integer **m**, find the maximum total fruits the bird can collect by visiting at most **m** trees.

*   Bird can start from any tree and move to a neighboring tree.
*   The first and last trees are also considered neighbors.
*   The bird collects the fruit value of every tree it visits.

Example:

```
Input: arr[] = [2, 1, 3, 5, 0, 1, 4], m = 3
Output: 9

Explanation: The bird can start from the second tree and visit the second, third, and fourth trees.The total fruit value collected is 1 + 3 + 5 = 9.
```
```
Input: arr[] = [1, 6, 2, 5, 3, 4], m = 2
Output: 8

Explanation: The bird can start from the second tree and visit the second and third trees, collecting 6 + 2 = 8. It can also start from the fourth tree and visit the fourth and fifth trees, collecting 5 + 3 = 8. The maximum total fruit value is 8.
```
```
Input: arr[] = [7, 2, 1, 3, 4], m = 2
Output: 11

Explanation: The bird can start from the fifth tree and visit the fifth and first trees, collecting 4 + 7 = 11. These trees are neighbors because the trees are arranged in a circle. The maximum total fruit value is 11.
```
