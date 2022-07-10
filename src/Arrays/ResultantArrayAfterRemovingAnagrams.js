/**
 * @param {string[]} words
 * @return {string[]}
 */

const removeAnagrams = function (words) {
  let n = words.length,
    i;
  let sortedPrev, sortedCurr;

  // each iteration sort word[i] and word[i-1] and compare
  for (i = 1; i < n && words[i]; i++) {
    sortedPrev = words[i - 1].split("").sort().join("");
    sortedCurr = words[i].split("").sort().join("");

    // if the words are anagrams (same when they sorted)
    //remove the current element and decrease i (- to stay in the same position in next iteration)
    if (sortedCurr == sortedPrev) {
      words.splice(i, 1);
      i--;
    }
  }
  return words;
};
