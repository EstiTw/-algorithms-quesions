/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */

const xorQueries = function (arr, queries) {
  const xorValues = [];

  queries.forEach((query) => {
    const leftIdx = query[0];
    const rightIdx = query[1];
    let xorValue = arr[leftIdx];

    for (let i = leftIdx + 1; i <= rightIdx; i++) {
      xorValue ^= arr[i];
    }
    xorValues.push(xorValue);
  });

  return xorValues;
};
