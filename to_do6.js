const taskInput = document.getElementById("taskinput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("tasklist");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>
        <button class="deleteBtn">Delete</button>
    `;

    taskList.appendChild(li);

    taskInput.value = "";

    const deleteBtn = li.querySelector(".deleteBtn");

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });
}