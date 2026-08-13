class Solution {
  maxDistance(V, src, edges) {
    const adj = Array.from({ length: V }, () => []);

    for (const [u, v, w] of edges) {
      adj[u].push([v, w]);
    }

    const visited = new Array(V).fill(false);
    const topo = [];

    const dfs = (u) => {
      visited[u] = true;

      for (const [v] of adj[u]) {
        if (!visited[v]) {
          dfs(v);
        }
      }

      topo.push(u);
    };

    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        dfs(i);
      }
    }

    const INF = -2147483648;
    const dist = new Array(V).fill(INF);

    dist[src] = 0;

    for (let i = topo.length - 1; i >= 0; i--) {
      const u = topo[i];

      if (dist[u] === INF) continue;

      for (const [v, w] of adj[u]) {
        dist[v] = Math.max(dist[v], dist[u] + w);
      }
    }

    return dist;
  }
}
