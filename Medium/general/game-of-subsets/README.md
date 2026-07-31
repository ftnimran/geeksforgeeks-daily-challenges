# Subsets with Products of Distinct Primes

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/game-of-subsets/1)
📊 Difficulty: Medium
📂 Category: General

## 📝 Description

Given an integer array **arr[]**, count the number of different subsets whose product can be represented as a product of one or more distinct prime numbers.  Two subsets are considered different if the set of chosen array indexes are not same.

Return the count modulo 10<sup>9</sup> + 7.

Example:

```
Input: arr[] = [1, 2, 3, 4]

Output: 6

Explanation: The subsets are:
[2], product = 2 = 2
[3], product = 3 = 3
[1, 2], product = 2 = 2
[1, 3], product = 3 = 3
[2, 3], product = 6 = 2 × 3
[1, 2, 3], product = 6 = 2 × 3
All these products can be expressed as a product of one or more distinct prime numbers. Hence, the count is 6.Note that [4] or any other subset with 4 are not chosen because prducts having 4 have repeated primes 2.
```
```
Input: arr[] = [2, 2, 3]

Output: 5

Explanation: Since subsets formed using different indices are considered different, the chosen subsets are:
[2] (using the first 2)
[2] (using the second 2)
[3]
[2, 3] (using the first 2)
[2, 3] (using the second 2)
Each subset has a product that can be expressed as a product of one or more distinct prime numbers. Therefore, the answer is 5.
```
