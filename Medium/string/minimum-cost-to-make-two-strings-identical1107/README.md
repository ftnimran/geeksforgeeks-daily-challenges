# Min Cost To Make Two Strings Identical

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/minimum-cost-to-make-two-strings-identical1107/1)
📊 Difficulty: Medium
📂 Category: String

## 📝 Description

Given two strings **s1** and **s2**, and two integers **costS1** and **costS2**, where costS1 is the cost of deleting one character from s1 and costS2 is the cost of deleting one character from s2, find the minimum cost required to make the two strings identical.

You can delete any number of characters from either string, but the order of the remaining characters must be preserved.

Example:

```
Input: s1 = "abcd", s2 = "acdb", costS1 = 10, costS2 = 20

Output: 30

Explanation: Delete 'b' from both strings to obtain "acd". The total cost is 10 + 20 = 30.
```
```
Input: s1 = "ef", s2 = "gh", costS1 = 10, costS2 = 20

Output: 60

Explanation: The two strings have no common characters, so delete all characters from both strings. The total cost is (2 × 10) + (2 × 20) = 60.
```
