# Minimum Cost Pizza Selection

🔗 [Problem Link](https://www.geeksforgeeks.org/problems/pizza-mania0155/1)
📊 Difficulty: Medium
📂 Category: General

## 📝 Description

Given the area of Small, Medium, and Large pizzas as **s**, **m**, and **l** units, and their respective costs as **cs**, **cm**, and **cl**, find the minimum amount of money required to buy pizzas whose total area is at least **x**. You may buy any number of pizzas of each type.

Example:

```
Input: x = 16, s = 3, m = 6, l = 9, cs = 50, cm = 150, cl = 300

Output: 300

Explanation: We want at least 16 sq. units of Pizza. One unit of each s, m and l = 3 + 6 + 9 = 18 sq units, Cost = 500. 6 units of s = 18 sq units, Cost = 300 2 units of l = 18 sq units, Cost = 600 etc. Of all the Arrangements, Minimum Cost is Rs. 300.
```
```
Input: x = 10, s = 1, m = 3, l = 10, cs = 10, cm = 20, cl = 50

Output: 50

Explanation: Of all the Arrangements possible, Minimum Cost is Rs. 50.
```

**Constraints:  
**1 ≤ x ≤ 500  
1 ≤ s ≤ m ≤ l ≤ 100  
1 ≤ cs ≤ cm ≤ cl ≤ 100
