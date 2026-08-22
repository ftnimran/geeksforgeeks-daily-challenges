/* Structure of Binary Tree Node
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
} */

/**
 * @param {Node} root
 * @param {number} p
 * @param {number} q
 * @return {number}
 */

class Solution {
  numberOfTurns(root, p, q) {
    const pathP = [];
    const pathQ = [];

    if (!this.findPath(root, p, pathP) || !this.findPath(root, q, pathQ)) {
      return -1;
    }

    let i = 0;

    while (i < pathP.length && i < pathQ.length && pathP[i] === pathQ[i]) {
      i++;
    }

    const path = [];

    for (let j = pathP.length - 1; j >= i; j--) {
      path.push(pathP[j]);
    }

    for (let j = i; j < pathQ.length; j++) {
      path.push(pathQ[j]);
    }

    let turns = 0;

    for (let j = 1; j < path.length; j++) {
      if (path[j] !== path[j - 1]) {
        turns++;
      }
    }

    return turns === 0 ? -1 : turns;
  }

  findPath(root, target, path) {
    if (!root) return false;

    if (root.data === target) {
      return true;
    }

    if (root.left) {
      path.push(0);

      if (this.findPath(root.left, target, path)) {
        return true;
      }

      path.pop();
    }

    if (root.right) {
      path.push(1);

      if (this.findPath(root.right, target, path)) {
        return true;
      }

      path.pop();
    }

    return false;
  }
}
