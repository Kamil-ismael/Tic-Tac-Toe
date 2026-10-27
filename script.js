let board = ["","","","","","","","",""];
let currentPlayer = "X";
let cells = document.querySelectorAll(".cell")
let gameOver = false;
let resetButton = document.getElementById("reset")

cells.forEach((cell, index) => {
   cell.addEventListener("click", () =>{
      if(cell.textContent !== "" || gameOver == true) return
      board[index] = currentPlayer
      cell.textContent = currentPlayer
      checkWinner()
      if (!gameOver) {
         currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
   })
   
});

resetButton.addEventListener("click", () => {
   resetGame()
})

const checkWinner = () => {
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
         showResult(`Joueur ${board[a]} a gagné !`, true);
         gameOver = true;
         return;
      }
   }
   const isBoardFull = board.every(element => element !== "");
      if (isBoardFull){
         showResult("Match nul !", false);
         gameOver = true;
      }
}

const resetGame = () => {
   board = ["", "", "", "", "", "", "", "", ""];
   currentPlayer = "X";
   gameOver = false;
   cells.forEach((cell) => cell.textContent = "")

   const resultDiv = document.getElementById("result-message");
   if (resultDiv) {
      resultDiv.style.top = "-150px";
      setTimeout(() => resultDiv.remove(), 600);
   }
}

const showResult = (message, isWin) => {
   const existing = document.getElementById("result-message");
   if(existing) existing.remove();

   const resultDiv = document.createElement("div");
   resultDiv.id = "result-message";
   resultDiv.innerHTML = `
      <div class = "result-content">
         ${isWin ? "🎉" : "😐"}
         <span>${message}</span>
         ${isWin ? "🎉" : "😐"}
      </div>
   `;
   resultDiv.style.cssText = `
      position: fixed;
      top: -150px;
      left: 50%;
      transform: translateX(-50%);
      background: ${isWin ? "linear-gradient(135deg, #4CAF50, #2E7D32)" : "linear-gradient(135deg, #9E9E9E, #616161)"};
      color: white;
      padding: 18px 40px;
      border-radius: 16px;
      font-size: 1.6rem;
      font-weight: 700;
      z-index: 1000;
      box-shadow: 0 10px 30px rgba(0,0,0,0.25);
      transition: top 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
      text-align: center;
      letter-spacing: 0.5px;
      white-space: nowrap;
   `;

   document.body.appendChild(resultDiv);

   requestAnimationFrame(() => {
      resultDiv.style.top = "40px";
   });
}



