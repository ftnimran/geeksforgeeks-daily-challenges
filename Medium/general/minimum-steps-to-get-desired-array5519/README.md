# Minimum Increment or Double Operations to Convert

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/minimum-steps-to-get-desired-array5519/1)
📊 Difficulty: Medium
📂 Category: General

## 📝 Description

Given an array **arr[]**. Initially, you have another array containing only 0s.  
In one operation, you may either:

*   Choose any one element and increase its value by 1, or
*   Double the values of all elements in the array simultaneously.

Find the minimum number of operations required to transform the initial all-zero array into the given array arr[].

Example:

```
Input: arr[] = [16, 16, 16]

Output: 7

Explanation: First, increase each element to make the array [1, 1, 1] (3 steps).
Then, multiply the whole array by 2 four times:
[1,1,1] -> [2,2,2] -> [4,4,4] -> [8,8,8] -> [16,16,16]
Total steps = 3 + 4 = 7.
```
```
Input: arr[] = [2, 3]

Output: 4

Explanation: Start from [0, 0].
Increase both elements to get [1, 1] (2 steps)
Multiply once: [2, 2] (1 step)
Increase second element once: [2, 3] (1 step)
Total steps = 2 + 1 + 1 = 4.
```

**Constraints:**  
1 ≤ arr.size() ≤ 10<sup>5</sup>  
0 ≤ arr[i] ≤ 10<sup>9</sup>
