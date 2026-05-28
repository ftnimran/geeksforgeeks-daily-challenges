/* Structure of binary tree node
class Node{
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/
class Solution {
  verticalSum(root) {
    const map = new Map();

    const q = [[root, 0]];

    let front = 0;

    while (front < q.length) {
      const [node, hd] = q[front++];

      map.set(hd, (map.get(hd) || 0) + node.data);

      if (node.left) q.push([node.left, hd - 1]);

      if (node.right) q.push([node.right, hd + 1]);
    }

    const keys = [...map.keys()].sort((a, b) => a - b);

    const ans = [];

    for (let k of keys) {
      ans.push(map.get(k));
    }

    return ans;
  }
}
