const text = document.querySelector("#text-box");
const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", () => {
  const inputText = text.value;
  text.value = "";

  const list = document.querySelector("ul");
  const listItem = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  listItem.appendChild(checkbox);

  const span = document.createElement("span");
  span.textContent = inputText;
  listItem.appendChild(span);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  listItem.appendChild(deleteBtn);
  
  list.appendChild(listItem);
});