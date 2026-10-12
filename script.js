let board = ["","","","","","","","",""];
let currentPlayer = "X";
let cells = document.querySelectorAll(".cell")

cells.forEach((cell, index) => {
   cell.addEventListener("click", () =>{
      if(cell.textContent !== "") return
      board[index] = currentPlayer
      cell.textContent = currentPlayer
      if(currentPlayer === "X")
         currentPlayer = "O"
      else{
         currentPlayer = "X"
      }
   })
})