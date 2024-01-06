function solve() {

}

/*
    Organizes input data in a usable grid array.
*/
function inputParser() {
    const grid = new Array(9);
    for (let row = 0; row < 9; row++) {
        curRow = new Array(9);
        for (let col = 0; col < 9; col++) {
            curRow[col] = document.getElementById(row + "-" + col).value;
        }
        grid[row] = curRow;
    }

    window.alert(grid);
}

/*
    Checks the inputted values are not blank
*/
function emptyChecker(array) {

}