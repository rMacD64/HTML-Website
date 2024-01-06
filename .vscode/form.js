/*
  Creates the suduko grid made of input boxes.
  @param {string} divID - the id of the grid container
*/
function formMaker(divID) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      let divi = document.createElement("div");
      divi.appendChild(inputBox(row, col));
      document.getElementById(divID).appendChild(divi);
    }
  }
}

/*
  Makes an input with the name and id "row"-"col".
  @param {number} row - first number in name/id
  @param {number} col - second number in name/id
*/
function inputBox(row, col) {
  let inbox = document.createElement("input");
  inbox.id = row + "-" + col;
  inbox.name = row + "-" + col;
  inbox.type = "number";
  inbox.setAttribute("max", 9);
  inbox.setAttribute("min", 1);

  return inbox;
}
