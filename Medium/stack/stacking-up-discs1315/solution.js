/**
 * @param {number[]} r
 * @param {number[]} h
 * @return {number}
 */

class Solution {
  maxStackHeight(r, h) {
    const n = r.length;
    const discs = new Array(n);
    let maxH = 0;

    for (let i = 0; i < n; i++) {
      discs[i] = { r: r[i], h: h[i] };
      if (h[i] > maxH) maxH = h[i];
    }

    discs.sort((a, b) => {
      if (a.r !== b.r) return a.r - b.r;
      return b.h - a.h;
    });

    const bit = new Array(maxH + 2).fill(0);
    let maxStack = 0;

    for (let i = 0; i < n; i++) {
      const currentH = discs[i].h;
      let maxPrev = 0;

      for (let j = currentH - 1; j > 0; j -= j & -j) {
        if (bit[j] > maxPrev) maxPrev = bit[j];
      }

      const newHeight = maxPrev + currentH;
      if (newHeight > maxStack) maxStack = newHeight;

      for (let j = currentH; j <= maxH; j += j & -j) {
        if (newHeight > bit[j]) bit[j] = newHeight;
      }
    }

    return maxStack;
  }
}
