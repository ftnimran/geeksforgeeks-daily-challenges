/**
 * @param {number} V
 * @param {number} src
 * @param {number} dest
 * @param {number[][]} edges
 * @return {number}
 */

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(x) {
    this.heap.push(x);
    let i = this.heap.length - 1;

    while (i > 0) {
      let p = (i - 1) >> 1;
      if (this.heap[p][0] <= this.heap[i][0]) break;
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
      i = p;
    }
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();

    let i = 0;

    while (true) {
      let l = 2 * i + 1;
      let r = 2 * i + 2;
      let s = i;

      if (l < this.heap.length && this.heap[l][0] < this.heap[s][0]) s = l;

      if (r < this.heap.length && this.heap[r][0] < this.heap[s][0]) s = r;

      if (s === i) break;

      [this.heap[i], this.heap[s]] = [this.heap[s], this.heap[i]];
      i = s;
    }

    return root;
  }

  size() {
    return this.heap.length;
  }
}

class Solution {
  shortestPath(V, src, dest, edges) {
    const graph = Array.from({ length: V }, () => []);

    for (const [u, v, w] of edges) {
      graph[u].push([v, w]);
      graph[v].push([u, w]);
    }

    const dist = Array(V).fill(Infinity);
    dist[src] = 0;

    const pq = new MinHeap();
    pq.push([0, src]);

    while (pq.size()) {
      const [d, node] = pq.pop();

      if (d !== dist[node]) continue;

      if (node === dest) return d;

      for (const [next, wt] of graph[node]) {
        const nd = d + wt;

        if (nd < dist[next]) {
          dist[next] = nd;
          pq.push([nd, next]);
        }
      }
    }

    return -1;
  }
}
