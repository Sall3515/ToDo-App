const addButton = document.getElementById("add");
const saveToDo = document.querySelector(".save-all");
const addTodoItems = document.getElementById("add");
const inputText = document.querySelector(".text");
const listContainer = document.querySelector(".list");
const checkBox = document.querySelectorAll(".list-checkbox");
const taskName = document.querySelectorAll(".taskname");

//თემის ცვლილება
const switcher = document.getElementById("switcher");
const body = document.querySelector("body");
const KEY_WORD = "theme"; //კონფიგურაციის ცვლადი

switcher.addEventListener("click", () => {
  const currentTheme = localStorage.getItem(KEY_WORD);
  if (currentTheme === "dark-theme") {
    setTheme("light-theme");
  } else {
    setTheme("dark-theme");
  }
});
function setTheme(className) {
  body.setAttribute("class", className);
  localStorage.setItem(KEY_WORD, className);
}
function changeTheme() {
  const theme = localStorage.getItem(KEY_WORD);
  console.log(theme);
  if (theme) {
    setTheme(theme);
  }
}
changeTheme();

//todo app

let toDoItemsArray = [];

addTodoItems.addEventListener("click", createListObject);

function createListObject() {
  const inputTextValue = inputText.value;

  const todo = {
    description: inputTextValue,
    checked: false,
    id: Date.now(),
  };

  toDoItemsArray.push(todo);
  console.log(toDoItemsArray);

  addTodoHtml();
}

function addTodoHtml() {
  let newEl = document.createElement("div");
  toDoItemsArray.forEach((item) => {
    newEl.innerHTML = `<div  class="task" id="${item.id}" >
                          <div >
                            <input class="list-checkbox" type="checkbox"  ${
                              !item.checked ? "" : "checked"
                            }>
                            <label></label>
                            <span class="taskname ${
                              !item.checked ? "" : "checked"
                            }">
                               ${item.description}
                            </span>
                          </div>
                           <span class="x">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                              <path fill="#494C6B" fill-rule="evenodd"
                               d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/>
                           </svg>
                           </span>
                         </div> `;
  });

  listContainer.appendChild(newEl);
}

listContainer.addEventListener("click", (event) => {
  let listId = Number(event.target.parentNode.parentNode.getAttribute("id"));
  let a = document.getElementById(listId);
  let checkedText = a.querySelector("span");

  if (checkedText.classList.contains("checked")) {
    checkedText.classList.remove("checked");
  } else {
    checkedText.classList.add("checked");
  }
  console.log(checkedText);
});
