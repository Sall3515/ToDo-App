const setup = (tasks, rootElementId) => {
  let taskList = "";
  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    taskList += `<div class="task" id="${task.id}" data-id="${i}">
          <div class="text task-text">
            <input class="list-checkbox" type="checkbox" ${
              task.active ? "" : "checked"
            } >
            <label></label>
            <span class="taskname" }>
              ${task.description}
            </span>
          </div>
          <span onclick="deleteTask(listContainer)" class="x">
            X
          </span>
        </div>`;
  }
  document.getElementById(rootElementId).innerHTML = taskList;
};
