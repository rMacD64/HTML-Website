let potentials = new Array(9) // An array of the potential numbers in each box
const grid = new Array(9); // List of rows. Most representative form of the grid.
const colList = new Array(9); // List of each column
const cubeList = new Array(9); // List of each 3x3 box
let unfound = new Set(); // Set of all numbers which have not all been found

function solve() {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (grid[row][col] == null) {   // Element empty?
                // Do further checks
                checker();

            }
        }
    }
}

function checker() {
    for (x in unfound) {

    }
}

/*
    Organizes input data in a list of rows and a list of columns.
*/
function listParser() {
    for (let x = 0; x < 9; x++) {
        tempRow = new Array(9);
        tempCol = new Array(9);

        for (let y = 0; y < 9; y++) {
            tempRow[y] = document.getElementById(x + "-" + y).value;
            tempCol[y] = document.getElementById(y + "-" + x).value;
        }
        grid[x] = tempRow;
        colList[x] = tempCol;
    }
    window.alert(colList);
}

/*
    Updates cubeList array with the input values.
*/
function cubeParser() {
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            for (let z = 0; z < 3; z++) {
                cubeList[(3 * x + y)] = document.getElementById((3 * x + z) + "-" + (3 * y + z)).value;
            }
        }
    }
}

/*
    Creates a grid.
    @param {number} size - the size of the grid.
    @returns {object} gridList - an array of arrays.
*/
function createGrid(size) {
    gridList = new Array(size);
    for (let x = 0; x < size; x++) {
        gridList[x] = new Array(size);
    }
    return gridList;
}

/*
    Checks the grid is not empty.
*/
function emptyChecker(array) {

}