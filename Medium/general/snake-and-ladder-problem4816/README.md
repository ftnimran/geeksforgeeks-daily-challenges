# Snake and Ladder Problem

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/snake-and-ladder-problem4816/1)
📊 Difficulty: Medium
📂 Category: General

## 📝 Description

Given an integer n such that there is **n × n** Snakes and Ladders board with cells numbered from 1 to n*n, find the minimum number of dice throws required to reach cell n*n starting from cell 1. Given two arrays of even lengths:

*   **lad[]**, where each pair (lad[2*i], lad[2*i + 1]) represents the start and end of a ladder.
*   **sn[]**, where each pair (sn[2*i], sn[2*i + 1]) represents the start and end of a snake.  
    

If you land on the start cell of a snake or ladder, you must immediately move to its corresponding end cell.

You have complete control over the outcome of each dice throw i.e., in a single move,  you can move forward by any number of cells from 1 to 6. 

If it is impossible to reach cell n*n, return **\-1.**

Example:

```
Input: n = 6, lad[] = [3, 22, 5, 8, 11, 35, 20, 32], sn[] = [17, 4, 19, 7, 34, 1, 21, 9]

Output: 3

Explanation: For the 6 × 6 board, the minimum number of dice throws needed to reach cell 36 from cell 1 is 3.
One optimal path is:
Throw 4 to move from 1 to 5, then take the ladder to 8
Throw 3 to move from 8 to 11, then take the ladder to 35
Throw 1 to move from 35 to 36
So the destination is reached in 3 dice throws.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/926473/Web/Other/blobid0_1781263877.webp)

```
Input: n = 3, lad[] = [2, 8], sn[] = [7, 3]

Output: 2

Explanation: For the 3 × 3 board, the minimum number of dice throws needed to reach cell 9 from cell 1 is 2.
One optimal path is:
Throw 1 to move from 1 to 2, then take the ladder to 8.
Throw 1 to move from 8 to 9.So the destination is reached in 2 dice throws.
```

**Constraints:**  
1 ≤ n ≤ 10<sup>3</sup>  
1 ≤ lad.size(), sn.size(), lad[i], sn[i] ≤ n<sup>2</sup>
