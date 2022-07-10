/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let frequencyMap = {},
    i,
    res = "";

  // traverse string and store the key with value in frequencyMap Object
  for (i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    frequencyMap[char] = frequencyMap[char] + 1 || 1;
  }

  // sort the object keys by their value (frequency) to array
  const sorted = Object.keys(frequencyMap).sort(
    (a, b) => frequencyMap[b] - frequencyMap[a]
  );

  // traverse the sorted array and add the keys to the result strings
  for (i = 0; i < sorted.length; i++) {
    const char = sorted[i];
    res += char.repeat(frequencyMap[char]);
  }

  return res;
};
