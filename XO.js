/*
const winning = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],  
    [1,4,7],
    [2,5,8]
];
*/
const tictactoe = new TicTacToeGame();
tictactoe.start();

function TicTacToeGame(){
    const gameboard = new Gameboard();
    const xplayer = new Xplayer(gameboard);
    const yplayer = new Yplayer(gameboard);
    let turn = 0;

    this.start = function(){
        const config = {childList:true};
        const observer = new MutationObserver(() => takeTurn());
        gameboard.position.forEach((el) => observer.observe(el,config));
        takeTurn();
    }
    /*เงื่อนไขตาการเล่น*/
    function takeTurn(){
        if(turn % 2 === 0){
            xplayer.takeTurn();
        }
        else{
            yplayer.takeTurn();
        }
        turn++;
    }
}
function Gameboard(){
    this.position = Array.from(document.querySelectorAll('.col'));

}

function Xplayer(gameboard){
    this.takeTurn = function(){
        gameboard.position.forEach(el => el.addEventListener('click',Turntaking));
    }
    function Turntaking(event){
        event.target.innerText='X';
        gameboard.position.forEach(el => el.removeEventListener('click',Turntaking));
    }
}
function Yplayer(gameboard){
    this.takeTurn = function(){
        
    }
}

/*
function changex(){
    const humanclick = document.querySelector("#b1,#b2");
    humanclick.src ="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Letter_x.svg/1200px-Letter_x.svg.png";
    
}
const humanclick = document.querySelector("#b1,#b2");
humanclick.addEventListener('click',changex)
*/
