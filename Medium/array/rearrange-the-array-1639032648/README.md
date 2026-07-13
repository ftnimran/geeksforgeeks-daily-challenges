# Rearrange the Array

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/rearrange-the-array-1639032648/1)
📊 Difficulty: Medium
📂 Category: Array

## 📝 Description

Consider an array **a[]** = [1, 2, 3, ..., n] and a permutation **b[]** of size n containing all integers from 1 to n exactly once.

*   The array b[] defines a rearrangement operation.
*   During a single operation, every element at position i in a[] moves to position b[i] (1-based indexing).
*   We must do at least one operation on a[].

Find the **minimum** number of operations required for all elements to return to their original positions simultaneously, i.e., for a[] to become: [1, 2, 3, ..., n] again.

**Note:**  The answer can be large, so return the answer **modulo 10<sup>9</sup>+7.**

Example:

```
Input: b[] = [1, 2, 3]

Output: 1

Explanation: Initially, a[] = [1, 2, 3] and b[] = [1, 2, 3]
After one operation:a[1] = 1 goes to position 1 as b[1] = 1.a[2] = 2 goes to position 2.a[3] = 3 goes to position 3.
so, now a[] becomes [1, 2, 3].
All elements remain at their original positions. Hence, the answer is 1.
```
```
Input: b[] = [2, 3, 1, 5, 4]

Output: 6

Explanation: The sequence of arrays obtained after each operation is:
Initially : [1, 2, 3, 4, 5]
1 : [3, 1, 2, 5, 4]
2 : [2, 3, 1, 4, 5]
3 : [1, 2, 3, 5, 4]
4 : [3, 1, 2, 4, 5]
5 : [2, 3, 1, 5, 4]
6 : [1, 2, 3, 4, 5]
After 6 operations, all elements return to their original positions simultaneously. Therefore, the answer is 6.
```

**Constraints:**  
1 ≤ n ≤ 10<sup>4  
a.size() = b.size() = n  
</sup>b[] is a permutation of integers from 1 to n.
