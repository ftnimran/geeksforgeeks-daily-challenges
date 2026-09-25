/**
 * @param {number[]} height
 * @param {number[]} width
 * @param {number[]} length
 * @returns {number}
 */

class Solution {
  maxHeight(height, width, length) {
    let n = height.length;
    let boxes = new Array(n * 3);
    let idx = 0;

    for (let i = 0; i < n; i++) {
      let h = height[i],
        w = width[i],
        l = length[i];
      boxes[idx++] = [h, Math.min(w, l), Math.max(w, l)];
      boxes[idx++] = [w, Math.min(h, l), Math.max(h, l)];
      boxes[idx++] = [l, Math.min(h, w), Math.max(h, w)];
    }

    boxes.sort((a, b) => b[1] * b[2] - a[1] * a[2]);

    let len = boxes.length;
    let memo = new Int32Array(len).fill(-1);

    const dfs = (curr) => {
      if (memo[curr] !== -1) return memo[curr];

      let maxH = 0;
      for (let next = curr + 1; next < len; next++) {
        if (
          boxes[next][1] < boxes[curr][1] &&
          boxes[next][2] < boxes[curr][2]
        ) {
          let childHeight = dfs(next);
          if (childHeight > maxH) {
            maxH = childHeight;
          }
        }
      }

      return (memo[curr] = maxH + boxes[curr][0]);
    };

    let maxStackHeight = 0;
    for (let i = 0; i < len; i++) {
      let currentHeight = dfs(i);
      if (currentHeight > maxStackHeight) {
        maxStackHeight = currentHeight;
      }
    }

    return maxStackHeight;
  }
}
