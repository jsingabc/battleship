import ships from "./ship";
import { board, placeShip, checkCoords, receiveAtk } from "./gameboard"
import player from "./player";
import Dom from "./doms"


let gameLoop = () => {

    

    //dom.renderhead()
    
// create 2 players and all of my ships
    let play1 = player()
    let play2 = player()

    let array = []
    let rows = 10
    let columns = 10

    let array2  = []
    let rows2 = 10
    let columns2 = 10


    let gameBoard = board(array, rows, columns)
    let gameBoard2 = board(array2, rows2, columns2)

    //et ships = (name, length, hits, sunk) => {
    //const placeShip = (board, ship, x, y, direction, fleet) => {
    
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

    let doms = Dom()
    doms.renderBoard()

    receiveAtk(gameBoard, 5, 5, ships)
    
    doms.renderReceiveAtk(5, 5)
    doms.renderReceiveAtk(2, 1)


    return {
        gameBoard,
        gameBoard2
        
    }
    
}

console.log(gameLoop())

let mainDiv = document.getElementById('content')
//mainDiv.innerText += JSON.stringify(gameLoop())


export default gameLoop