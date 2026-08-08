class Solution {
  minEdgesReq(n, edges) {
    if (edges.length < n - 1) {
      return -1;
    }

    const graph = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
      graph[u].push(v);
      graph[v].push(u);
    }

    const visited = new Array(n).fill(false);

    const dfs = (node) => {
      visited[node] = true;

      for (const next of graph[node]) {
        if (!visited[next]) {
          dfs(next);
        }
      }
    };

    let components = 0;

    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        components++;
        dfs(i);
      }
    }

    return components - 1;
  }
}
