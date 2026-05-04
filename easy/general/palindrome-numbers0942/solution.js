class Solution {
  isBinaryPalindrome(n) {
    let binary = n.toString(2);

    let left = 0;
    let right = binary.length - 1;

    while (left < right) {
      if (binary[left] !== binary[right]) {
        return false;
      }
      left++;
      right--;
    }

    return true;
  }
}
