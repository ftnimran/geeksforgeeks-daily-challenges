# Maximum Height Disc Stack

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/stacking-up-discs1315/1)
📊 Difficulty: Medium
📂 Category: Stack

## 📝 Description

Given two arrays **r[]** and **h[]** of size **n**, where **r[i]** and **h[i]** represent the radius and height of the i-th circular disc, respectively.

A disc can be placed above another disc only if both its radius and height are strictly smaller than those of the disc below it.

Find the maximum possible height of a stack that can be formed using the given discs. Each disc can be used at most once.

Example:

```
Input: r[] = [5, 7, 3], h[] = [6, 5, 4]

Output: 10

Explanation: The discs (3, 4) and (5, 6) form a valid stack. Therefore, the maximum possible height is 4 + 6 = 10.
```
```
Input: r[] = [3, 7], h[] = [7, 4]

Output: 7

Explanation: Neither disc can be placed above the other because both required dimensions are not strictly smaller. Therefore, the maximum possible height is 7.
```
