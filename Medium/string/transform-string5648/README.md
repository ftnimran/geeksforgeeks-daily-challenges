# Transform String

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/transform-string5648/1)
📊 Difficulty: Medium
📂 Category: String

## 📝 Description

Given two strings **s1** and **s2**. Find the minimum number of steps required to transform string s1 into string s2. The only allowed operation for the transformation is selecting a character from string s1 and inserting it in the beginning of string s1.

If transformation is not possible return **\-1**.

Example:

```
Input: s1 = "abd", s2 = "bad"

Output: 1

Explanation: The conversion can take place in 1 operation: Pick 'b' and place it at the front.
```
```
Input: s1 = "GeeksForGeeks", s2 = "ForGeeksGeeks"

Output: 3

Explanation: The conversion can take place in 3 operations: Pick 'r' and place it at the front.
s1 = "rGeeksFoGeeks"
Pick 'o' and place it at the front.
s1 = "orGeeksFGeeks"
Pick 'F' and place it at the front.
s1 = "ForGeeksGeeks"
```

**Constraints:**  
1<= s1.length(), s2.length() <= 10<sup>4</sup>
