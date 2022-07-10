/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const exist = function (board, word) {
  const ROWS = board.length,
    COLS = board[0].length;

  const dfs = function (r, c, i) {
    if (word.length === i) return true;

    if (r < 0 || c < 0 || r >= ROWS || c >= COLS || board[r][c] != word[i])
      return false;

    board[r][c] = "#"; // mark as visited

    if (
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1)
    )
      return true;

    board[r][c] = word[i]; //reset the board
  };

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (board[r][c] == word[0] && dfs(r, c, 0)) return true;
    }
  }

  return false;
};
