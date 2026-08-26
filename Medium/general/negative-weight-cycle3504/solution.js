class Solution {
  /**
   * @param {number} V
   * @param {number[][]} edges
   * @return {boolean}
   */
  isNegativeWeightCycle(V, edges) {
    const dist = new Int32Array(V);

    const relax = (iteration) => {
      if (iteration === V) {
        for (let i = 0; i < edges.length; i++) {
          const [u, v, w] = edges[i];

          if (dist[u] + w < dist[v]) {
            return true;
          }
        }

        return false;
      }

      let updated = false;

      for (let i = 0; i < edges.length; i++) {
        const [u, v, w] = edges[i];

        if (dist[u] + w < dist[v]) {
          dist[v] = dist[u] + w;
          updated = true;
        }
      }

      if (!updated) {
        return false;
      }

      return relax(iteration + 1);
    };

    return relax(0);
  }
}
