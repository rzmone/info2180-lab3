document.addEventListener("DOMContentLoaded", () => {
  let currentPlayer = "X";

  const squares = document.querySelectorAll("#board div");
  const statusEl = document.getElementById("status");
  const newGameBtn = document.querySelector(".btn");

  squares.forEach(square => {
    square.classList.add("square");

    square.addEventListener("mouseover", () => square.classList.add("hover"));
    square.addEventListener("mouseout", () => square.classList.remove("hover"));

    square.addEventListener("click", () => {
      if (square.textContent !== "") return;

      square.textContent = currentPlayer;
      square.classList.add(currentPlayer);

      const winner = checkWinner(squares);
      if (winner) {
        statusEl.textContent = `Congratulations! ${winner} is the Winner!`;
        statusEl.classList.add("you-won");
      }

      currentPlayer = currentPlayer === "X" ? "O" : "X";
    });
  });

  newGameBtn.addEventListener("click", () => {
    squares.forEach(sq => {
      sq.textContent = "";
      sq.classList.remove("X", "O", "hover");
    });
    statusEl.textContent = "Move your mouse over a square and click to play an X or an O.";
    statusEl.classList.remove("you-won");
    currentPlayer = "X";
  });

  function checkWinner(sq) {
    const combos = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6],
    ];
    for (const [a,b,c] of combos) {
      if (sq[a].textContent &&
          sq[a].textContent === sq[b].textContent &&
          sq[a].textContent === sq[c].textContent) {
        return sq[a].textContent;
      }
    }
    return null;
  }
});
