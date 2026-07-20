# Shortest Unique Prefix for Every Word

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/shortest-unique-prefix-for-every-word/1)
📊 Difficulty: Medium
📂 Category: General

## 📝 Description

Given an array of strings **arr[ ]**, find the shortest prefix of each string that uniquely identifies it among all strings in the array. A prefix is unique if it is not a prefix of any other string in the array.

**Note:** No string in the given array is a prefix of another string.

**Examples :**

```
Input: arr[] = ["zebra", "dog", "duck", "dove"]

Output: ["z", "dog", "du", "dov"]

Explanation: z => zebra, dog => dog, duck => du, dove => dov
```
```
Input: arr[] = ["geeksgeeks", "geeksquiz", "geeksforgeeks"]

Output: ["geeksg", "geeksq", "geeksf"]
Explanation: geeksgeeks => geeksg, geeksquiz => geeksq, geeksforgeeks => geeksf
```
