# Unoccupied Computers

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/unoccupied-computers-1646661078/1)
📊 Difficulty: Medium
📂 Category: General

## 📝 Description

A cafe has n computers. The customer events are represented by a string s of uppercase English letters, where each distinct letter appears exactly twice:

*   The first occurrence denotes the customer's arrival.
*   The second occurrence denotes the customer's departure.

A customer is assigned a computer only if one is available at the time of arrival, otherwise the customer is rejected and does not use a computer.

Return the number of customers who could not be assigned a computer upon arrival.

Example:

```
Input: n = 3, s = "GACCBDDBAGEE"

Output: 1

Explanation: Only D will not be able to get any computer. So the answer is 1.
```
```
Input: n = 1, s = "ABCBAC"

Output: 2

Explanation: B and C will not be able to get any computers. So the answer is 2.
```
