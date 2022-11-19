console.log("Tic Tac Toe");

const gameState = {
  cells: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  // Two players, X and O
  currentPlayer: "X",
};

// 1. Add a listener to each cell that calls a function `play` when clicked
// 2. In the `play` function, retrieve the row and column of the cell that was clicked
//    using element id
// 3. Create a variable the current state of the cell
// 4. Update the game state:
//    - If the cell is empty, update the cell with the current player
//    - If the cell is not empty, do nothing
//    - Update the DOM to reflect the new state of the game
//      you can use ⭕️ and ❌ to represent the players
// 5. Update the current player
//    - Add a message to the DOM to indicate whose turn it is
//
// NOW: The game should be functional but without win conditions
//
// 6. Create a function `checkWin` that checks if the current player has won
//   - Check if the current player has three in a row
//   - Check if the current player has three in a column
//   - Check if the current player has three in a diagonal
//   - If the current player has won, add a message to the DOM to indicate that
//   - If the game is a draw, add a message to the DOM to indicate that
// 7. Transform this code to uses classes
