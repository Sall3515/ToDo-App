const setup = (tasks, rootElementId) => {
  let taskList = "";
  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    taskList += `<div  class="task"  data-id="${i}"  
    }>
          <div class="text task-text">
            <input  id="task-${i}" class="list-checkbox" type="checkbox" ${
      task.active ? " " : "checked"
    } >
            <label for="task-${i}"></label>
            <span class="taskname ${task.active ? " " : "task-completed"}" >
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
