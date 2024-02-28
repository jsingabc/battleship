import { board, placeShip, checkCoords, receiveAtk } from "./gameboard";
import ships from "./ship";
import player from "./player";
import gameLoop from "./index";




// add the board to the doms, next goal
// 2 gameboards are not the same thing
function Dom() {
    function renderhead() {
        const body = document.querySelector("body");
        
    } 

        //boardDiv.style.width = '152px';
        //boardDiv.style.fontSize = "31.8px";
    let gameBoard;
    let gameBoard2


    function renderBoard() {
        let mainDiv = document.getElementById("content")

        let boardDiv = document.createElement('div');
        boardDiv.setAttribute("id", "board")
        console.log(boardDiv)
        boardDiv.style.width = '5.025em';
        boardDiv.style.fontSize = '1.6875em';
        mainDiv.appendChild(boardDiv);

        let array = [];
        let rows = 10;
        let columns = 10;

        let array2  = [];
        let rows2 = 10;
        let columns2 = 10;

        gameBoard = board(array, rows, columns)
        gameBoard2 = board(array2, rows2, columns2)

        

        let submarine = ships("submarine", 1, 0, false )
        let destroyer = ships("destroyer", 2, 0, false)
        let cruiser = ships("cruiser", 3, 0, false)
        let battleship = ships("battleship", 4, 0, false)
        let aircraft = ships("aircraft", 5, 0, false)
    
        placeShip(gameBoard, submarine, 2, 1, "vertical" )
        placeShip(gameBoard, destroyer, 6, 6, "vertical")
        placeShip(gameBoard, cruiser, 6, 2, "horizontal")
        placeShip(gameBoard, battleship, 9, 1, "horizontal")
        placeShip(gameBoard, aircraft, 8, 1, "horizontal")

        placeShip(gameBoard2, submarine, 5, 5, "vertical" )
        placeShip(gameBoard2, destroyer, 1, 1, "vertical")
        placeShip(gameBoard2, cruiser, 3, 2, "horizontal")
        placeShip(gameBoard2, battleship, 7, 1, "horizontal")
        placeShip(gameBoard2, aircraft, 9, 0, "horizontal")

        let html1 = gameBoard
        let nSpace = "\n\n"
        let html2 = gameBoard2

        boardDiv.innerText += html1;
        boardDiv.innerText += nSpace
        boardDiv.innerText += html2;

        
    }

        function renderReceiveAtk(x, y ) {
            let mainDiv = document.getElementById("content")
            let boardDiv = document.getElementById('board');
            receiveAtk(gameBoard, x, y, ships)
            
            mainDiv.appendChild(boardDiv)
            
            let nSpace = ""
            let html2 = ""
            boardDiv.innerText = ""
            
            let html1 = gameBoard
            boardDiv.innerText = html1
        

        }

        

    return {
        renderhead,
        renderBoard,
        renderReceiveAtk
        }
    }   

export default Dom

