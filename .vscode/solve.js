let _potentials = createPotentials(); // An array of the potential numbers in each box array(array(set))
const _grid = createGrid(9, False); // List of rows. Most representative form of the grid.
const _colList = createGrid(9, True); // List of each column
const _cubeList = createGrid(9, True); // List of each 3x3 box
let _unfound = new Set(); // Set of all numbers which have not all been found

function solve() {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            cube = cubePos(row, col);
            if (_grid[row][col] == null) {   // Element empty?
                // Do further checks
                for (num in _unfound) {
                    if (potentialCheck(num, row, col, cube)) { // Potential answer?
                        _potentials[row][col].add(num);
                    }
                }

                if (_potentials[row][col].size == 1) { // Only one possible answer?
                    update(num, row, col, cube);
                }
            }
        }
    }
}

function createPotentials() {
    temp = new Array(9);
    for (let x = 0; x < 9; x++) {
        temp[x] = createGrid(9);
    }
    return temp;
}

/*
    Updates all global grids with the new number.
*/
function update(num, row, col, cube) {
    _grid[row][col] = num;
    _colList[col][row] = num;
    _cubeList[cube][col] = num;
}

/*
    Identifies the current 3x3 the element is located in based on the row and colummn number.
    @param {number} row - the row number (0-8 inclusive).
    @param {number} col - the col number (0-8 inclusive).
*/
function cubePos(row, col) {
    return 3 * Math.floor(row / 3) + Math.floor(col / 3);
}

/*
    Checks if a number can be placed in the current 1x1 box.
    @param {number} num - the number being checked for (1-9 inclusive).
    @param {number} row - the row number (0-8 inclusive).
    @param {number} col - the col number (0-8 inclusive).
    @return {boolean} - returns true if the number is not found in the current row, column or 3x3 box.
*/
function potentialCheck(num, row, col, cube) {
    if (!_grid[row].include(num)) { // num not in the row
        if (!_colList[col].include(num)) { // num not in the column
            if (!_cubeList[cube].include(num)) { // num not in the 3x3 box
                return true;
            }
        }
    }
    return false;
}


/*
    Organizes input data in a list of rows, a list of columns and a list of 3x3 boxes.
*/
function inputParser() {
    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            currentElement = document.getElementById(x + "-" + y).value;
            _grid[x][y] = currentElement;
            _colList[x][y] = document.getElementById(y + "-" + x).value;
            _cubeList[cubePos(x, y)][y] = currentElement;
        }
    }
}

// /*
//     Updates cubeList array with the input values.
// */
// function cubeParser() {
//     for (let x = 0; x < 3; x++) {
//         for (let y = 0; y < 3; y++) {
//             for (let z = 0; z < 3; z++) {
//                 cubeList[(3 * x + y)] = document.getElementById((3 * x + z) + "-" + (3 * y + z)).value;
//             }
//         }
//     }
// }

/*
    Creates a grid; a list of arrays or a list of sets with a certain size.
    @param {number} size - the size of the grid.
    @param {boolean} set - whether to create an array of sets or an array of arrays
    @returns {object} gridList - an array of arrays.
*/
function createGrid(size, set) {
    gridList = new Array(size);
    for (let x = 0; x < size; x++) {
        if (set) {
            gridList[x] = new Set();
        }
        else {
            gridList[x] = new Array(size);
        }
    }
    return gridList;
}
