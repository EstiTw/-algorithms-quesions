/**
 * @param {character[][]} grid
 * @return {number}
 */

const numIslands = function (grid) {
  if (grid === null || grid.length === 0) return 0;

  let numOfIslands = 0;
  const ROWS = grid.length,
    COLS = grid[0].length;

  const dfs = function (r, c) {
    // the base case occurs when row or col is of the the matrix bound or when the value is 0
    if (r < 0 || r >= ROWS || c < 0 || c >= COLS || grid[r][c] == "0") return 0;

    grid[r][c] = "0"; //mark as visited

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);

    return 1;
  };

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] == "1") numOfIslands += dfs(r, c);
    }
  }

  return numOfIslands;
};
