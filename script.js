const textBox = document.querySelector("#text-box");
textBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

const submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", addTask);

function addTask() {
  const inputText = textBox.value;
  textBox.value = "";

  const list = document.querySelector("ul");
  const listItem = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.style.marginRight = "10px";
  listItem.appendChild(checkbox);

  const span = document.createElement("span");
  span.textContent = inputText;
  listItem.appendChild(span);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  listItem.appendChild(deleteBtn);
  
  list.appendChild(listItem);

  deleteBtn.addEventListener("click", () => {
    list.removeChild(listItem);
  });
}