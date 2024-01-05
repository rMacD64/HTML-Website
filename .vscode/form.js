function formMaker(formID) {
  sudukoForm = document.getElementById(formID);
  
  for (let i = 0; i < 9; i++) {
    let inbox = document.createElement("input");
    inbox.id = "box" + i;
    inbox.name = "box" + i;
    inbox.type = "number";
    inbox.setAttribute("max", 9);
    inbox.setAttribute("min", 0);
    sudukoForm.appendChild(inbox);
  }
}
