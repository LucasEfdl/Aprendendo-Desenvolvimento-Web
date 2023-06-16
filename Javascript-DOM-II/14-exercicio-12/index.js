function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.htmlFor = htmlFor;
  label.innerText = text;
  return label;
}

function createInput(id, value, name, type = "text", placeholder = "") {
  const input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  input.placeholder = placeholder;
  return input;
}

const addTechBtn = document.getElementById("addTechBtn");
const form = document.getElementById("devForm");
const developers = [];
let inputRow = 0;

addTechBtn.addEventListener("click", () => {
  const stackInput = document.getElementById("stackInputs");

  const newRow = document.createElement("li");
  const rowIndex = inputRow;
  inputRow++;
  newRow.id = "inputRow-" + rowIndex;
  newRow.className = "inputRow";

  const techNameLabel = createLabel("Nome: ", "techName-" + rowIndex);
  const techNameInput = createInput("techName-" + rowIndex, null, "techName");

  const expLabel = createLabel("Experiencia: "); //Pq não passou o htmlFor
  const expTechName = "techExp-" + rowIndex;
  const id1 = "expRadio-" + rowIndex + ".1";
  const expLabel1 = createLabel("0-2 anos", id1);
  const expRadio1 = createInput(id1, "0-2 anos", expTechName, "radio");
  const id2 = "expRadio-" + rowIndex + ".2";
  const expLabel2 = createLabel("3-4 anos", id2);
  const expRadio2 = createInput(id2, "3-4 anos", expTechName, "radio");
  const id3 = "expRadio-" + rowIndex + ".3";
  const expLabel3 = createLabel("5+ anos", id3);
  const expRadio3 = createInput(id3, "5+ anos", expTechName, "radio");

  newRow.append(
    techNameLabel,
    techNameInput,
    expLabel,
    expLabel1,
    expRadio1,
    expLabel2,
    expRadio2,
    expLabel3,
    expRadio3
  );

  stackInput.appendChild(newRow);
});
