
import ships from "./ship"

    

const board = (array, rows, columns) => {
    
    for (let x = 0; x < rows; x++) {
        array[x] = []
        for (let y = 0; y < columns; y++) {
            array[x][y] = " "
        }
    }
    return array
}

const checkCoords = (x, y) => {
    if (x < 0 || x > 9 || y < 0 || y > 9){
        return false
    }   
}

const placeShip = (board, ships, x, y, direction, fleet) => {
    fleet = []
    checkCoords(x, y)
    
    
    if( direction === "horizontal") {
        //I need to do some math to change the layout per direction
            let i = 0;
            while(i < ships.length){
            let piece = `S`
            if(board[x][y] === piece){
                return "something is there"
            }else{ 
            board[x][y + i] += piece
            i++
            }     
    }
        fleet.push(ships)
        return board
}

    else if( direction === "vertical") {
        let i = 0
        while(i < ships.length){
        let piece = 'S'
        if(board[x][y] === piece){
                return "something is there"
        }else{
        board[x + i][y] += piece
            i++
            }
        }
        fleet.push(ships)
        return board
    }

}

const receiveAtk = (board, x, y, ships) => {
    if (board[x][y] === " "){
        board[x][y] = "M"
        return "miss"
    }
    if (board[x][y] === " S"){
        board[x][y] = "H"
        
        ships.setHit
        return "hit"
    }

const checkAllShips = () => {
    fleet.every((ships) => ships.setSunk() === true)
}
    return { board, placeShip, receiveAtk, checkAllShips }
}

export { board, placeShip, checkCoords, receiveAtk }