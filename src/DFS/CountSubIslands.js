/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
const countSubIslands = function (grid1, grid2) {
  const ROWS = grid2.length,
    COLS = grid2[0].length;
  let subs = 0;
  let isIsland;

  const foundSubIslands = function (r, c) {
    // the base case occurs when row or col is of the the matrix bound or when the value is 0
    if (r < 0 || c < 0 || r >= ROWS || c >= COLS || grid2[r][c] === 0) return;

    grid2[r][c] = 0; //mark as visited
    // assign false to mark that there is at least one corresponding cell in grid1 is not 1
    if (grid1[r][c] != 1) isIsland = false;

    // we continue exploring to change all adjacent 1 cells to value 0, which is useful for counting new subisland
    foundSubIslands(r, c + 1);
    foundSubIslands(r, c - 1);
    foundSubIslands(r - 1, c);
    foundSubIslands(r + 1, c);
  };

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid2[r][c] == 1) {
        isIsland = true;
        foundSubIslands(r, c);
        if (isIsland) subs++;
      }
    }
  }

  return subs;
};
