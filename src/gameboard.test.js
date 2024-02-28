import { board, placeShip, checkCoords, receiveAtk } from "./gameboard";
import ships from "./ship";

let array = []
let rows = 10
let columns = 10

let gameBoard2 = board(array, rows, columns)

test('gameboard', () => {
    expect(gameBoard2[1][1]).toEqual(" ");
  });

let testShip = ships("Meridain", 2, 0, false)

test('ship name', () => {
    expect(testShip.name).toBe('Meridain')
})

placeShip(gameBoard2, testShip, 5,5)

/*test('placeShip', () => {
    expect(gameBoard2[5][5]).toBe(' S')
})*/

receiveAtk(gameBoard2, 5,5,testShip)

test('receive Attack', () => {
    expect(gameBoard2[5][5]).toBe('H')
})

test('was the ship hit', () => {
    expect(testShip.hits).toEqual(1)
})

receiveAtk(gameBoard2, 7, 7, testShip)

test('miss is equal to M', () => {
    expect(gameBoard2[7][7]).toBe('M')
})