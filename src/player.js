import { board, receiveAtk } from "./gameboard"
import ships from "./ship"

let player = (gameboard, ships) => {
    
    let cpuMoves = () => {

        let result = "bad moves"
        
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        result = receiveAtk(gameboard, x,y)
        
        if (result === "H" || result === "M"){
            return result
        }

        if (result === " "){
            board[x][y] = "M"
            return "miss"
        }

        if (result === " S"){
            ship.setHit()
            board[x][y] = "H"
            return "hit"
    }
        
    }

    return { gameboard, ships, cpuMoves }

} 

export default player