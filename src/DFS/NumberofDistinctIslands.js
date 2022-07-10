/**
 * @param {number[][]} grid
 * @return {number}
 */
// X = start
// O = out of bound OR water (0)
// D = down
// U = up
// R = right
// L = left

//dfs with string path
const numDistinctIslands = function (grid) {
  if (grid === null || grid.length === 0) return 0;

  const ROWS = grid.length,
    COLS = grid[0].length;
  const distinctIslands = new Set();

  for (let r = 0; r < ROWS; r++)
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] == 1) {
        const path = computePath(grid, r, c, ROWS, COLS, "X");
        distinctIslands.add(path);
      }
    }

  return distinctIslands.size;
};

const computePath = function (grid, r, c, rows, cols, direction) {
  // the base case occurs when row or col is of the the matrix bound or when the value is 0
  if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 0) return "O";
  grid[r][c] = 0; //mark as visited

  const right = computePath(grid, r, c + 1, rows, cols, "R");
  const left = computePath(grid, r, c - 1, rows, cols, "L");
  const up = computePath(grid, r - 1, c, rows, cols, "U");
  const down = computePath(grid, r + 1, c, rows, cols, "D");

  return direction + right + left + up + down;
};
