/*
  Creates the suduko grid made of input boxes.
  @param {string} formID - the id of the form being developed
*/
function formMaker(formID) {
  sudukoForm = document.getElementById(formID);
  
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      let divi = document.createElement("div");
      divi.appendChild(inputBox(row, col));
      sudukoForm.appendChild(divi);
    }
  }
}

/*
  Makes an input with the name and id "row"-"col".
  @param {number} row - first number in name/id
  @param {number} col - second number in name/id
  @returns {object} input object 
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
