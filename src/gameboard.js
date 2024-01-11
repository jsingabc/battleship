
const board = (rows, columns) => {
    let array = []
    rows = 10;
    columns = 10;

    let value = 0;

    for (let x = 0; x < rows; x++) {
        array[x] = []
        for (let y = 0; y < columns; y++) {
            array[x][y] = value++
        }
    }
    return array
}

export default board