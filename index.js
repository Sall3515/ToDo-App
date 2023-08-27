const addButton = document.getElementById("add");
const saveToDo = document.querySelector(".save-all");
const addTodoItems = document.getElementById("add");
const inputText = document.querySelector(".text");
const listContainer = document.querySelector(".list");
const checkBox = document.querySelectorAll(".list-checkbox");
const taskName = document.querySelectorAll(".taskname");

//todo app

let toDoItemsArray = [];

addTodoItems.addEventListener("click", createListObject);

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    createListObject();
  }
});

function createListObject() {
  const inputTextValue = inputText.value;

  const todo = {
    description: inputTextValue,
    checked: false,
    id: Date.now(),
  };

  toDoItemsArray.push(todo);
  // console.log(toDoItemsArray);
  addTodoHtml();
}

function addTodoHtml() {
  let newEl = document.createElement("div");
  toDoItemsArray.forEach((item) => {
    newEl.innerHTML = `<div  class="task" id="${item.id}" >
                          <div  class="text task-text">
                            <input class="list-checkbox" type="checkbox"  ${
                              !item.checked ? "" : "checked"
                            }>
                            <label></label>
                            <span class="taskname" ${
                              !item.checked ? "" : "checked"
                            }">
                               ${item.description}
                            </span>
                          </div>
                           <span class="x" >
                           X
                           </span>
                         </div> `;
  });

  listContainer.appendChild(newEl);

  const taskTexts = Array.from(listContainer.querySelectorAll(".task-text"));

  taskTexts.map((taskText) => {
    taskText.addEventListener("click", (event) => {
      let listId = Number(
        event.target.parentNode.parentNode.getAttribute("id")
      );
      let spanTxt = document.getElementById(listId);
      // console.log(spanTxt);

      let checkedText = spanTxt.querySelector(".taskname");

      if (checkedText.classList.contains("checked")) {
        checkedText.classList.remove("checked");
      } else {
        checkedText.classList.add("checked");
      }
    });
  });

  const deleteButtons = Array.from(listContainer.querySelectorAll(".x"));

  deleteButtons.map((deleteButton) => {
    deleteButton.addEventListener("click", (event) => {
      let listId = Number(event.target.parentNode.getAttribute("id"));

      let span = document.getElementById(listId).parentNode;

      listContainer.removeChild(span);
    });
  });
}
