# Count Prefix-Balanced Binary Strings

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/geek-and-his-binary-strings1951/1)
📊 Difficulty: Medium
📂 Category: String

## 📝 Description

Given an integer **n**, count the number of binary strings of length 2 * n that contain exactly n ones and n zeros such that every prefix of the string contains at least as many ones as zeros. Since the answer can be very large, return it modulo 10<sup>9</sup> + 7.

Example:

```
Input: n = 2

Output: 2

Explanation: "1100", "1010" are two such strings of size 4 which have exactly two 1's in each.
```
```
Input: n = 3

Output: 5

Explanation: "111000", "101100", "101010", "110010", "110100" are such 5 strings which have exactly three 1's in each.
```
