"strict";

const tBody = document.querySelector(".tbody");
const nameInput = document.querySelector("#name");
const dateInput = document.querySelector("#date");
const priceInput = document.querySelector("#price");
const addBtn = document.querySelector(".add-btn");

addBtn.addEventListener("click", addButton);

function addButton(e) {
  e.preventDefault();

  const newTr = document.createElement("tr");
  const newTd1 = document.createElement("td");
  const newTd2 = document.createElement("td");
  const newTd3 = document.createElement("td");
  const newTd4 = document.createElement("td");

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerText = "X";

  if (
    nameInput.value === "" ||
    dateInput.value === "" ||
    priceInput.value === ""
  ) {
    alert("You have to fill out everything");
  } else if (priceInput.value <= 0) {
    alert("Price can't be negative number");
  } else {
    //append tr to table
    tBody.appendChild(newTr);

    //append td*3 to tr
    newTr.appendChild(newTd1);
    newTr.appendChild(newTd2);
    newTr.appendChild(newTd3);
    newTr.appendChild(newTd4);

    let nameValue = nameInput.value;
    let dateValue = dateInput.value;
    let priceValue = priceInput.value;

    //td values
    newTd1.innerText = nameValue;
    newTd2.innerText = dateValue;
    newTd3.innerText = `${priceValue}$`;
    newTd4.appendChild(deleteBtn);

    //clear inputs
    nameInput.value = "";
    priceInput.value = "";
    dateInput.value = "";

    //delete btn
    deleteBtn.addEventListener("click", function () {
      deleteBtn.parentElement.parentElement.remove();
    });
  }
}
