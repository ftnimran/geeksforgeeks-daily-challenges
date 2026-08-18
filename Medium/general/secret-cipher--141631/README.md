# Secret Cipher

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/secret-cipher--141631/1)
📊 Difficulty: Medium
📂 Category: General

## 📝 Description

Geek wants to send a secret message to his friend Keeg. Instead of sending the original message directly, he encrypts it by inserting the character '*'.

Keeg decodes the message as follows:

*   Traverse the encoded string from left to right and initialize the original string as empty.
*   Whenever a normal character appears, append it to the current original string.
*   Whenever '*' is encountered, remove it and append all characters before it to the end of the current original string.
*   Repeat until no '*' remains.

Given the original string s, find the lexicographically smallest encrypted string that decodes to s.

**Examples :**

```
Input: s = "ababcababcd"

Output: ab*c*d

Explanation: We can encrypt the string in following way : "ababcababcd" -> "ababc*d" -> "ab*c*d"
```
```
Input: s = "zzzzzzz"

Output: z*z*z

Explanation: The string can be encrypted in 2 ways: "z*z*z" and "zzzz". Out of the two "z*z*z" is smaller in length.
```

**Constraints:**   
1 ≤ |s| ≤ 10<sup>5</sup>
