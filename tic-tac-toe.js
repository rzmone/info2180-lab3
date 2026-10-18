
document.addEventListener("DOMContentLoaded", () => {

  let currentPlayer = "X";
  let gameActive = true;

  const squares = document.querySelectorAll("#board div");
  const statusEl = document.getElementById("status");
  const newGameBtn = document.querySelector(".btn");

  const originalStatus = statusEl.textContent;

  squares.forEach(square => {

    // Exercise 1: Layout the board
    square.classList.add("square");

    // Exercise 2: Add X or O when clicked
    square.addEventListener("click", () => {

      // Stop if the game is over
      if (!gameActive) return;

      // Exercise 6: Prevent cheating
      // Do not allow an occupied square to be changed
      if (square.textContent.trim() !== "") {
        return;
      }

      // Display the current player's symbol
      square.textContent = currentPlayer;
      square.classList.add(currentPlayer);

      // Exercise 4: Check for a winner
      const winner = checkWinner();

      if (winner) {
        statusEl.textContent =
          `Congratulations! ${winner} is the Winner!`;

        statusEl.classList.add("you-won");
        gameActive = false;
        return;
      }

      // Switch between X and O
      currentPlayer = currentPlayer === "X" ? "O" : "X";

    });

    // Exercise 3: Mouse hover effect
    square.addEventListener("mouseover", () => {
      square.classList.add("hover");
    });

    square.addEventListener("mouseout", () => {
      square.classList.remove("hover");
    });

  });

  // Exercise 4: Check for a winner
  function checkWinner() {

    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (const [a, b, c] of winningCombinations) {

      if (
        squares[a].textContent !== "" &&
        squares[a].textContent === squares[b].textContent &&
        squares[a].textContent === squares[c].textContent
      ) {
        return squares[a].textContent;
      }

    }

    return null;
  }

  // Exercise 5: Restart the game
  newGameBtn.addEventListener("click", () => {

    // Clear all nine squares
    squares.forEach(square => {
      square.textContent = "";
      square.classList.remove("X", "O", "hover");
    });

    // Reset the status message
    statusEl.textContent = originalStatus;
    statusEl.classList.remove("you-won");

    // Reset player and game state
    currentPlayer = "X";
    gameActive = true;

  });

});
