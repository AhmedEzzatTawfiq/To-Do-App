function createTaskElement(taskText: string){
  const li = document.createElement("li");
  const taskElement = document.createElement("span");
  taskElement.textContent = taskText;
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
editButton.addEventListener("click", () => {
  const newText = prompt('Edit the Task', taskText);
  if(newText !== null) {
    taskElement.textContent = newText;
  }
});
const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";
deleteButton.addEventListener("click", () => {
  li.remove();
});
li.appendChild(taskElement);
li.appendChild(editButton);
li.appendChild(deleteButton);
return li;
}
function addTask() {
  const taskInput = document.getElementById("taskInput") as HTMLInputElement;
  const taskText = taskInput.value.trim()
  if(taskText === ""){
    return;
  }
  const taskList = document.getElementById("taskList") as HTMLUListElement;
  const taskElement = createTaskElement(taskText);
  taskList.appendChild(taskElement);
  taskInput.value = "";
};
document.addEventListener("DOMContentLoaded", function() {
  const addButton = document.getElementById('addButton');
  if(addButton) {
    addButton.addEventListener("click" , addTask)
  }
})
