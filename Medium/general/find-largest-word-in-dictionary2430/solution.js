class Solution {
  findLongestWord(s, d) {
    let best = "";

    const isSub = (word, charIndex, searchStart) => {
      if (charIndex === word.length) return true;

      let nextPos = s.indexOf(word[charIndex], searchStart);

      if (nextPos === -1) return false;

      return isSub(word, charIndex + 1, nextPos + 1);
    };

    for (let word of d) {
      let lenW = word.length;
      let lenB = best.length;

      if (lenW > lenB || (lenW === lenB && word < best)) {
        if (isSub(word, 0, 0)) {
          best = word;
        }
      }
    }

    return best;
  }
}
