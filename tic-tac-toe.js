document.addEventListener("DOMContentLoaded", () => {
  let currentPlayer = "X";
  const squares = document.querySelectorAll("#board div");

  squares.forEach(square => {
    square.classList.add("square");
    square.addEventListener("click", () => {
      if (square.textContent === "") {
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    });
  });
});
