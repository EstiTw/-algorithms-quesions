/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

const getDist = function ([x, y]) {
  return x * x + y * y;
};

// immadiatly sort by dist
const kClosest = function (points, k) {
  const sortedPoints = points.sort((a, b) => getDist(a) - getDist(b));

  return sortedPoints.slice(0, k);
};
