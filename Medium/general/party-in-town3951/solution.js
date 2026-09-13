/*
 * @param {number[][]} adj
 * @return {number}
 */
class Solution {
  partyHouse(adj) {
    const n = adj.length;

    const bfs = (start) => {
      const dist = new Int32Array(n);
      dist.fill(-1);

      const queue = new Int32Array(n);
      let front = 0;
      let rear = 0;

      queue[rear++] = start;
      dist[start] = 0;

      let farthest = start;

      while (front < rear) {
        const u = queue[front++];

        if (dist[u] > dist[farthest]) {
          farthest = u;
        }

        for (const v of adj[u]) {
          const next = v - 1;

          if (dist[next] === -1) {
            dist[next] = dist[u] + 1;
            queue[rear++] = next;
          }
        }
      }

      return [farthest, dist[farthest]];
    };

    const [a] = bfs(0);
    const [, diameter] = bfs(a);

    return Math.ceil(diameter / 2);
  }
}
