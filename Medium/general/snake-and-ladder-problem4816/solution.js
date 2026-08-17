class Solution {
  minThrows(n, lad, sn) {
    const N = n * n;

    const jump = new Int32Array(N + 1);

    for (let i = 0; i < lad.length; i += 2) {
      jump[lad[i]] = lad[i + 1];
    }

    for (let i = 0; i < sn.length; i += 2) {
      jump[sn[i]] = sn[i + 1];
    }

    const dist = new Int32Array(N + 1);
    dist.fill(-1);

    const queue = new Int32Array(N + 1);

    let front = 0;
    let rear = 0;

    queue[rear++] = 1;
    dist[1] = 0;

    while (front < rear) {
      const curr = queue[front++];

      for (let dice = 1; dice <= 6; dice++) {
        const next = curr + dice;

        if (next > N) break;

        const destination = jump[next] || next;

        if (destination === N) {
          return dist[curr] + 1;
        }

        if (dist[destination] === -1) {
          dist[destination] = dist[curr] + 1;
          queue[rear++] = destination;
        }
      }
    }

    return -1;
  }
}
