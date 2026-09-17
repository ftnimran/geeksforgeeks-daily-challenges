/*
 @param {number[][]}
 @param {number}
 @param {number}
 @param {number}
 @return {number}
*/

class Solution {
  minimumEdgeReversal(edges, n, src, dst) {
    const adj = Array.from({ length: n + 1 }, () => []);

    for (let i = 0; i < edges.length; i++) {
      adj[edges[i][0]].push(edges[i][1]);
      adj[edges[i][1]].push(-edges[i][0]);
    }

    const dist = new Int32Array(n + 1).fill(1e9);
    dist[src] = 0;

    let currLevel = [src];
    let nextLevel = [];

    while (currLevel.length > 0) {
      const u = currLevel.pop();

      const neighbors = adj[u];
      for (let i = 0; i < neighbors.length; i++) {
        let v = neighbors[i];
        let weight = 0;

        if (v < 0) {
          v = -v;
          weight = 1;
        }

        if (dist[u] + weight < dist[v]) {
          dist[v] = dist[u] + weight;
          if (weight === 0) {
            currLevel.push(v);
          } else {
            nextLevel.push(v);
          }
        }
      }

      if (currLevel.length === 0 && nextLevel.length > 0) {
        currLevel = nextLevel;
        nextLevel = [];
      }
    }

    return dist[dst] === 1e9 ? -1 : dist[dst];
  }
}
