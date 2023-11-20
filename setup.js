const setup = (tasks, rootElementId) => {
  let taskList = "";
  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    taskList += `<div  class="task"  data-id="${i}" }>
          <div class="text task-text">
            <input  id="task-${i}" class="list-checkbox" type="checkbox"
             ${task.active ? " " : "checked"} >
            <label for="task-${i}"></label>
            <span class="taskname ${task.active ? " " : "task-completed"}" >
              ${task.description}
            </span>
          </div>
          <span class="x">
            X</span>
        </div>`;
  }

  document.getElementById(rootElementId).innerHTML = taskList;

  const taskListElement = document.getElementById("tasks");
  const checkItems = Array.from(taskListElement.querySelectorAll(".text"));

  checkItems.map((checkItem) => {
    checkItem.addEventListener("click", (event) => {
      let id = Number(
        event.target.parentNode.parentNode.getAttribute("data-id")
      );

      tasks[id].active = !tasks[id].active;

      setup(tasks, "tasks");
    });
  });

  const deleteButtons = Array.from(taskListElement.querySelectorAll(".x"));

  deleteButtons.map((deleteButton) => {
    deleteButton.addEventListener("click", (event) => {
      let id = Number(event.target.parentNode.getAttribute("data-id"));

      let head = tasks.slice(0, id);
      let tail = tasks.slice(id + 1, tasks.length);
      // console.log(id);
      setup([...head, ...tail], "tasks");
    });
  });
};

let array = [12, 14, 1, 3, 19, 17, 45, 16, 19, 29, 31, 89, 86];
let evenNum = array.filter((num) => num % 2 === 0);
console.log(evenNum);
