var solveNQueens = function(n) {
    const result = [];
    // Create an n x n board filled with '.'
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    // Check if placing a queen at (row, col) is valid
    const isValid = (row, col) => {
        // Check vertical upwards
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        // Check upper left diagonal
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        // Check upper right diagonal
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    };

    // Backtracking function to try placing queens row by row
    const backtrack = (row) => {
        // If we've placed queens in all rows, record the solution.
        if (row === n) {
            result.push(board.map(r => r.join('')));
            return;
        }
        // Try placing a queen in each column of the current row.
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q';  // Place the queen.
                backtrack(row + 1);      // Move to the next row.
                board[row][col] = '.';   // Backtrack: remove the queen.
            }
        }
    };

    backtrack(0);
    return result;
};

// Example usage:
console.log(solveNQueens(4));
// Expected Output (order of solutions may vary):
// [
//   [".Q..", "...Q", "Q...", "..Q."],
//   ["..Q.", "Q...", "...Q", ".Q.."]
// ]
