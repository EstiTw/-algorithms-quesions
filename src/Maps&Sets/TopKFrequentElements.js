/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const freqMap = new Map(),
    res = [],
    bucket = [];
  let i;

  // Map the nums by frequency
  nums.forEach((num) => freqMap.set(num, freqMap.get(num) + 1 || 1));

  // bucket index is the values of the Map. for each index add set with the keys of this value
  freqMap.forEach(
    (freq, num) =>
      (bucket[freq] = bucket[freq] ? bucket[freq].add(num) : new Set().add(num))
  );

  //traverse the bucket in decrease order and add the first k arguments to the res array
  for (i = bucket.length; i > 0 && res.length < k; i--) {
    if (bucket[i]) res.push(...bucket[i]);
  }

  return res;
};
