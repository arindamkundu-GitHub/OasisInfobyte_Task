const pendingList = document.getElementById("pendingTasks");
const completedList = document.getElementById("completedTasks");
const taskInput = document.getElementById("taskInput");

function getCurrentTimestamp() {
  const now = new Date();
  return now.toLocaleString();
}

function createTaskElement(text, timestamp, isCompleted = false) {
  const li = document.createElement("li");

  const taskText = document.createElement("div");
  taskText.className = "task-text";
  taskText.textContent = text;

  const meta = document.createElement("div");
  meta.className = "task-meta";
  meta.textContent = isCompleted ? `Completed: ${timestamp}` : `Added: ${timestamp}`;

  const actions = document.createElement("div");
  actions.className = "actions";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = isCompleted ? "Undo" : "Complete";
  completeBtn.className = "complete";
  completeBtn.onclick = () => toggleComplete(li, text);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit";
  editBtn.onclick = () => editTask(li, text);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete";
  deleteBtn.onclick = () => li.remove();

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(taskText);
  li.appendChild(meta);
  li.appendChild(actions);

  return li;
}

function addTask() {
  const task = taskInput.value.trim();
  if (task === "") return;
  const timestamp = getCurrentTimestamp();
  const li = createTaskElement(task, timestamp, false);
  pendingList.appendChild(li);
  taskInput.value = "";
}

function toggleComplete(taskElement, text) {
  taskElement.remove();
  const newTimestamp = getCurrentTimestamp();

  const isCompleted = taskElement.parentElement.id === "pendingTasks";
  const targetList = isCompleted ? completedList : pendingList;

  const newTask = createTaskElement(text, newTimestamp, isCompleted);
  targetList.appendChild(newTask);
}

function editTask(taskElement, oldText) {
  const newText = prompt("Edit your task:", oldText);
  if (newText && newText.trim() !== "") {
    const updatedTimestamp = getCurrentTimestamp();
    const isCompleted = taskElement.parentElement.id === "completedTasks";
    taskElement.remove();
    const updatedTask = createTaskElement(newText, updatedTimestamp, isCompleted);
    (isCompleted ? completedList : pendingList).appendChild(updatedTask);
  }
}
