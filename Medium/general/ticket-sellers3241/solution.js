/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    let i = this.heap.length - 1;

    while (i > 0) {
      let p = (i - 1) >> 1;
      if (this.heap[p] >= this.heap[i]) break;
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
      i = p;
    }
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();

    const top = this.heap[0];
    this.heap[0] = this.heap.pop();

    let i = 0;

    while (true) {
      let l = 2 * i + 1;
      let r = 2 * i + 2;
      let largest = i;

      if (l < this.heap.length && this.heap[l] > this.heap[largest])
        largest = l;

      if (r < this.heap.length && this.heap[r] > this.heap[largest])
        largest = r;

      if (largest === i) break;

      [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];

      i = largest;
    }

    return top;
  }

  size() {
    return this.heap.length;
  }
}

class Solution {
  maxAmount(arr, k) {
    const MOD = 1000000007;

    const heap = new MaxHeap();

    for (const x of arr) if (x > 0) heap.push(x);

    let ans = 0;

    while (k > 0 && heap.size()) {
      let x = heap.pop();

      ans = (ans + x) % MOD;

      if (x > 1) heap.push(x - 1);

      k--;
    }

    return ans;
  }
}
