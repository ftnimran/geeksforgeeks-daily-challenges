# Pairs with Given GCD and LCM

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/possible-pairs1550/1)
📊 Difficulty: Medium
📂 Category: General

## 📝 Description

Given two integers **x** and **y** representing the GCD and LCM of two unknown positive integers **a** and **b**, count the number of valid pairs **(a, b)** satisfying these conditions. Note that **(a, b)** and **(b, a)** are counted as distinct pairs when **a ≠ b**.

Example:

```
Input: x = 2, y = 12

Output: 4

Explanation: The valid pairs are (2, 12), (4, 6), (6, 4), and (12, 2), since each pair has GCD = 2 and LCM = 12.
```
```
Input: x = 6, y = 4

Output: 0

Explanation: LCM must always be a multiple of GCD. Since y is not divisible by x, no valid pair exists.
```

**Constraints:**  
1 ≤ x, y ≤ 10<sup>4</sup>
