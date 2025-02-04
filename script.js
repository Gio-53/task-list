const addTaskBtn = document.querySelector("#add-task");
const taskList = document.querySelector("#list-tasks");
//"✔"

addTaskBtn.addEventListener('click', createTask);

function createTask(){
    const li = document.createElement('li');
    const input = document.createElement("input"); 
    input.type = "text"; 
    input.placeholder = "Digite sua tarefa..."; 
    input.classList = "task-field undone"

    const finishBtn = document.createElement("button");
    finishBtn.textContent = "✔"; 
    finishBtn.classList.add("edit-btn");

    finishBtn.addEventListener("click", () => {
        li.classList.toggle("undone"); 
        li.classList.toggle("done"); 
    });

    li.appendChild(input);
    li.appendChild(finishBtn);
    taskList.appendChild(li);
}