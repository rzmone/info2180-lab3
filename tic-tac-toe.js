
document.addEventListener("DOMContentLoaded", () => {

  let currentPlayer = "X";

  const squares = document.querySelectorAll("#board div");

  squares.forEach(square => {

    // Exercise 1: Layout the board
    square.classList.add("square");

    // Exercise 2: Add X or O when clicked
    square.addEventListener("click", () => {

      // Prevent changing an occupied square
      if (square.textContent !== "") return;

      square.textContent = currentPlayer;
      square.classList.add(currentPlayer);

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

});
