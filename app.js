"strict";

const tBody = document.querySelector(".tbody");
const nameInput = document.querySelector("#name");
const dateInput = document.querySelector("#date");
const priceInput = document.querySelector("#price");
const addBtn = document.querySelector(".add-btn");
const deleteAllBtn = document.querySelector(".delete-all-btn");
const currency = document.querySelector(".currency");

const newExpense = (e) => {
  //input validation
  if (
    nameInput.value.trim().length == 0 ||
    dateInput.value.trim().length == 0 ||
    priceInput.value.trim().length == 0
  ) {
    alert("You have to fill out everything");
    e.preventDefault();
    return;
  }
  if (priceInput.value <= 0) {
    alert("Price can't be negative number");
    e.preventDefault();
    return;
  }

  // max item limit is 20
  if (tBody.children.length > 19) {
    alert("Maximum list item limit is 20");
    e.preventDefault();
    return;
  }

  // display deleteAll btn if items > 2
  if (tBody.children.length > 0) {
    deleteAllBtn.style.display = "block";
  }

  //create delete btn
  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerHTML = "&#10006";

  //input values
  const date = dateInput.value;
  const price = priceInput.value;
  const item = nameInput.value;

  // new tablerow html
  const tableRowHtml = ` <tr class='table-row'>
  <td>${item}</td>
  <td>${date}</td>
  <td>${price}${currency.value}</td>
  <td class='delete-btn-container'>${deleteBtn.outerHTML}</td>
  </tr>`;

  //new row
  e.preventDefault();
  tBody.innerHTML += tableRowHtml;

  // delete row with fade-out
  const button = document.querySelectorAll(".delete-btn");

  button.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.classList.add("fade-out");

      setTimeout(() => e.target.parentElement.parentElement.remove(), 200);
    });
  });

  // clear inputs
  dateInput.value = "";
  priceInput.value = "";
  nameInput.value = "";
};

addBtn.addEventListener("click", newExpense);

//delete all item
deleteAllBtn.addEventListener("click", (e) => {
  const items = Array.from(document.querySelectorAll(".table-row"));
  const td = Array.from(document.getElementsByTagName("td"));

  td.forEach((td) => (td.style.border = "0"));

  items.forEach((item) => {
    item.classList.add("fade-out");
    setTimeout(() => item.remove(), 200);
  });
});
