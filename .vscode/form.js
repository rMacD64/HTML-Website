function formMaker() {
  const sudukoForm = document.createElement("form");
  sudukoForm.id = "suduko";

  for (let i = 0; i < 9; i++) {
    let inbox = document.createElement("input");
    inbox.id = "box" + i;
    inbox.name = "box" + i;
    inbox.type = "number";
    inbox.setAttribute("max", 9);
    inbox.setAttribute("min", 0);
    sudukoForm.appendChild(inbox);
  }

  return sudukoForm;
}
