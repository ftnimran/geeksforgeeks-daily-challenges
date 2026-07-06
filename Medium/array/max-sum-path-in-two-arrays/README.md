# Max Sum Path in Two Arrays

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/max-sum-path-in-two-arrays/1)
📊 Difficulty: Medium
📂 Category: Array

## 📝 Description

Given two sorted arrays of distinct integers in increasing order **a[]** and **b[]**, which may have some common elements, find the **maximum sum** of a path from the beginning of any array to the end of any array. You may switch from one array to the other only at common elements.

**Note:**  When switching, count the **common** element only once.  

**Examples :** 

```
Input: a[] = [2, 3, 7, 10, 12], b[] = [1, 5, 7, 8]

Output: 35

Explanation: The path will be (1 + 5 + 7 + 10 + 12) = 35, where 1 and 5 come from arr2 and then 7 is common so we switch to arr1 and add 10 and 12.
```
```
Input: a[] = [1, 2, 3], b[] = [3, 4, 5]

Output: 15

Explanation: The path will be (1 + 2 + 3 + 4 + 5) = 15.
```

**Constraints:**  
1 ≤ a.size(), b.size() ≤ 10<sup>4  
</sup>1 ≤ a[i], b[i] ≤ 10<sup>5</sup>
