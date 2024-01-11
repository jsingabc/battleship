import ships from "./ship";
import board from "./gameboard"

let test = ships("Destroyer", 2, 0, false)

console.log(test)

test.setHit()
test.setHit()

test.setSunk()

console.log(test)         

console.log(board())
