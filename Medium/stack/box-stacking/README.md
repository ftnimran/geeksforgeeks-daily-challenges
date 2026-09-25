# Box Stacking

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/box-stacking/1)
📊 Difficulty: Medium
📂 Category: Stack

## 📝 Description

Given three arrays **height[]**, **width[]**, and **length[]** of size n, where height[i], width[i], and length[i] represent the dimensions of the ith box, find the maximum possible height of a stack formed using these boxes.

*   A box can be rotated so that any of its dimensions becomes its height.
*    A box can be placed on top of another only if both dimensions of its base are strictly smaller than those of the box below. 
*   Multiple instances of the same box can be used.

Example:

```
Input: height[] = [4, 1, 4, 10], width[] = [6, 2, 5, 12], length[] = [7, 3, 6, 32]

Output: 60

Explanation: One possible arrangement of the boxes from bottom to top is shown below. Note that there can be multiple instances of a box type. Hence, the total height of this stack is 10 + 32 + 4 + 4 + 6 + 1 + 3 = 60. No other combination of boxes produces a height greater than this.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/933228/Web/Other/blobid0_1787736038.webp)

```
Input: height[] = [1, 4, 3], width[] = [2, 5, 4], length[] = [3, 6, 1]

Output: 15

Explanation: One possible arrangement of the boxes from bottom to top is shown below: Hence, the total height of this stack is 4 + 6 + 1 + 1 + 3 = 15 No other combination of boxes produces a height greater than this.
```

![Problem Image](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/933228/Web/Other/blobid1_1787736128.webp)
