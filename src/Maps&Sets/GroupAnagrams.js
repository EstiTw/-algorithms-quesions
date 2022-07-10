/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
  const map = new Map();

  strs.forEach((str) => {
    const sortedStr = str.split("").sort().join("");
    if (map.get(sortedStr)) {
      map.set(sortedStr, [...map.get(sortedStr), str]);
    } else {
      map.set(sortedStr, [str]);
    }
  });

  // Convert Map Values to an Array
  return Array.from(map.values());
};
