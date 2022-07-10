/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const freqMap = new Map(),
    bucket = [],
    res = [];
  let i;

  // Map the words by their frequency
  words.forEach((word) => freqMap.set(word, freqMap.get(word) + 1 || 1));

  // bucket index is the frequency. for each index add set with words of this frequency
  freqMap.forEach(
    (freq, word) => (bucket[freq] = (bucket[freq] || new Set()).add(word))
  );

  // traverse the bucket array by decrease order and add to res the first k word (each set of this iterations shoud be sorted)
  for (i = bucket.length - 1; i >= 0 && res.length < k; i--) {
    if (bucket[i]) res.push(...[...bucket[i]].sort());
  }

  return res.slice(0, k);
};
