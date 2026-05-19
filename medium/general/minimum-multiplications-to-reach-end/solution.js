class Solution {
  minSteps(arr, start, end) {
    if (start === end) return 0;

    const dist = new Array(1000).fill(-1);

    const q = [start];

    dist[start] = 0;

    let front = 0;

    while (front < q.length) {
      const node = q[front++];

      for (let x of arr) {
        const next = (node * x) % 1000;

        if (dist[next] === -1) {
          dist[next] = dist[node] + 1;

          if (next === end) return dist[next];

          q.push(next);
        }
      }
    }

    return -1;
  }
}
