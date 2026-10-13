let board = ["","","","","","","","",""];
let currentPlayer = "X";
let cells = document.querySelectorAll(".cell")
let gameOver = false;
cells.forEach((cell, index) => {
   cell.addEventListener("click", () =>{
      if(cell.textContent !== "" || gameOver == true) return
      board[index] = currentPlayer
      cell.textContent = currentPlayer
      if(currentPlayer === "X")
         currentPlayer = "O"
      else{
         currentPlayer = "X"
      }
      checkWinner()
      
   })
   
});

function checkWinner(){
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

   for (const combinaison of winningCombinations) {
      const [a, b, c] = combinaison;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
         alert(`Player ${board[a]} wins!`);
         gameOver = true;
         return;
      }
   }
   const isBoardFull = board.every(element => element !== "");
      if (isBoardFull) {
         alert ("It's a draw!");
   }
}

