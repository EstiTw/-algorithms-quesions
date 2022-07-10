/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const findKthLargest = function (nums, k) {
  const soredDecreasing = nums.sort((a, b) => b - a);

  return soredDecreasing[k - 1];
};
