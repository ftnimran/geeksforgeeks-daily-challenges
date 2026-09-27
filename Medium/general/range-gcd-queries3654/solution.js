/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @returns {number[]}
 */
class Solution {
  processQueries(arr, queries) {
    const n = arr.length;
    const tree = new Int32Array(4 * n + 1);
    const result = [];

    function gcd(a, b) {
      while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    }

    function build(node, start, end) {
      if (start === end) {
        tree[node] = arr[start];
        return;
      }
      let mid = (start + end) >> 1;
      build(node * 2, start, mid);
      build(node * 2 + 1, mid + 1, end);
      tree[node] = gcd(tree[node * 2], tree[node * 2 + 1]);
    }

    function update(node, start, end, idx, val) {
      if (start === end) {
        tree[node] = val;
        return;
      }
      let mid = (start + end) >> 1;
      if (idx <= mid) {
        update(node * 2, start, mid, idx, val);
      } else {
        update(node * 2 + 1, mid + 1, end, idx, val);
      }
      tree[node] = gcd(tree[node * 2], tree[node * 2 + 1]);
    }

    function query(node, start, end, l, r) {
      if (r < start || l > end) {
        return 0;
      }
      if (l <= start && end <= r) {
        return tree[node];
      }
      let mid = (start + end) >> 1;
      let leftGCD = query(node * 2, start, mid, l, r);
      let rightGCD = query(node * 2 + 1, mid + 1, end, l, r);
      return gcd(leftGCD, rightGCD);
    }

    build(1, 0, n - 1);

    for (let i = 0; i < queries.length; i++) {
      let q = queries[i];
      if (q[0] === 0) {
        result.push(query(1, 0, n - 1, q[1], q[2]));
      } else {
        update(1, 0, n - 1, q[1], q[2]);
      }
    }

    return result;
  }
}
