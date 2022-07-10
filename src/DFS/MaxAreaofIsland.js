/**
 * @param {number[][]} grid
 * @return {number}
 */

const maxAreaOfIsland = function (grid) {
  if (grid === null || grid.length === 0) return 0;
  let maxArea = 0;

  const ROWS = grid.length,
    COLS = grid[0].length;
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] == 1) {
        const area = computeArea(grid, r, c, ROWS, COLS);
        maxArea = Math.max(maxArea, area);
      }
    }
  }
  return maxArea;
};

const computeArea = function (grid, r, c, rows, cols) {
  // the base case occurs when row or col is of the the matrix bound or when the value is 0
  if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 0) return 0;

  grid[r][c] = 0; //mark as visited
  let count = 1;

  count += computeArea(grid, r, c + 1, rows, cols);
  count += computeArea(grid, r, c - 1, rows, cols);
  count += computeArea(grid, r - 1, c, rows, cols);
  count += computeArea(grid, r + 1, c, rows, cols);

  return count;
};
