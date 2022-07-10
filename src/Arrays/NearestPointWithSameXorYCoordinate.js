/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */

// O(n) time, O(1) space
const nearestValidPoint = function (x, y, points) {
  let min = Infinity;
  let index = -1;

  points.forEach(([a, b], i) => {
    if (a == x || b == y) {
      const dist = Math.abs(x - a) + Math.abs(y - b);
      if (dist < min) {
        min = dist;
        index = i;
      }
    }
  });

  return index;
};
