function solve() {

}

/*
    Organizes input data in a usable array.
*/
function inputParser() {
    const grid = new Array(9);

    for (let col = 0; col < 9; col++) {
        column = new Array(9);
        for (let row = 0; row < 9; row++) {
            column[row] = document.getElementById(row + "-" + col).value;
        }
    }

    window.alert(grid);
}

/*
    Checks the inputted values are not blank
*/
function emptyChecker(array) {

}