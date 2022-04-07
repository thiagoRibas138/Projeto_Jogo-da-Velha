document.addEventListener("DOMContentLoaded", () => {


    let squares = document.querySelectorAll(".square");
    let resetRoundBtn = document.querySelector(".resetRound");
    let resetGameBtn = document.querySelector(".resetGame");
  
  
  
    squares.forEach((square) => {
  
      square.addEventListener("click", handleClick);
  
    });
  
    updateScore();
  
    resetRoundBtn.addEventListener("click", resetRound);
    resetGameBtn.addEventListener("click", resetGame);
  
  });
  
  function handleClick(event) {
  
    let square = event.target;
    let position = square.id;
  
    if(handleMove(position)){
      setTimeout(() => {
        if (symbols[playerTime] == "o") {
          alert("O jogador vencedor foi: O");
          scoreP1++;
          updateScore();
          resetRound();
        }else{
          alert("O jogador vencedor foi: X");
          scoreP2++;
          updateScore();
          resetRound();
        }
      }, 30); 
    }
  
    if (isDraw()) {
      setTimeout(() => {
        alert("O jogo terminou em empate!");
        resetRound();
      }, 30);
  
    }
    updateSquare(position);
  }
  
  function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class="${symbol}"></div>`;
  
  
  
  }
  
  function updateScore(){
    let player1 = document.querySelector("#p1");
    let player2 = document.querySelector("#p2");
    player1.innerText = scoreP1;
    player2.innerText = scoreP2;
  }
  
  function resetRound() {
    board.fill("");
    for (let position = 0; position < board.length; position++){
      updateSquare(position);
    }
    playerTime = 0;
    gameOver = false;
  }
  
  function resetGame() {
    resetRound();
    scoreP1 = 0;
    scoreP2 = 0;
    updateScore();
  
  }