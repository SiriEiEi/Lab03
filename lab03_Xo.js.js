//I confese that this Tictactoe is not done by myself 100%, 
//I have read a lot of information(also code) from internet to do this lab.
//And even i read a lot but my work also have a bug So sadddddd. 
//Thankyou for read me Kru Gas T^T
function Lab03Tictaotoe() {
    const result = document.querySelector(".result");
    const boardgame = document.querySelectorAll(".board");
    const gridArray = Array.from(boardgame);
    let Boardposition = [0, 1, 2, 
                         3, 4, 5, 
                         6, 7, 8];
    
    boardgame.forEach((block) =>
      block.addEventListener("click", (e) => {
        const index = gridArray.indexOf(e.target);
        if (
          boardgame[index].classList.contains("X") ||
          boardgame[index].classList.contains("O")
        ) {
          return;
        }
  
        boardgame[index].classList.add("X");
        const spliceNr = Boardposition.indexOf(index + 1);
        // slicing out the move from the tracking list
        Boardposition.splice(spliceNr, 1);
  
    
        if (WinnerCondition("X", boardgame)) {
          result.innerHTML = "Player X WIN!";
          return;
        }
  
        
        const random = Math.floor(Math.random() * Boardposition.length);
        const computerIndex = Boardposition[random];
        boardgame[computerIndex - 1].classList.add("O");
        Boardposition.splice(random, 1);
  
        if (WinnerCondition("O", boardgame)) {
          result.innerHTML = "Player O WIN!";
          return;
        }
      })
    );
  }

  function WinnerCondition(player, boardgame) {
    function check(ps1, ps2, ps3) {
      console.log(boardgame);
      if (
        boardgame[ps1].classList.contains(player) &
        boardgame[ps2].classList.contains(player) &
        boardgame[ps3].classList.contains(player)
      ) {
        return true;
      } else {
        return false;
      }
    }
  
    if (check(0, 3, 6)) return true;
    else if (check(1, 4, 7)) return true;
    else if (check(2, 5, 8)) return true;
    else if (check(0, 1, 2)) return true;
    else if (check(3, 4, 5)) return true;
    else if (check(6, 7, 8)) return true;
    else if (check(0, 4, 8)) return true;
    else if (check(2, 4, 6)) return true;
  }

  Lab03Tictaotoe();
  