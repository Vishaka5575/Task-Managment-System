// Task array to store tasks
let tasks = [];

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = ""; // Clear existing tasks

    tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.className = "task-item";

        const taskText = document.createElement("span");
        taskText.textContent = task;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteTask(index));

        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    });
}

// Function to add a task
function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText) {
        tasks.push(taskText);
        taskInput.value = ""; // Clear input
        renderTasks();
    } else {
        alert("Please enter a task.");
    }
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1); // Remove task from array
    renderTasks();
}

// Add event listener to the "Add Task" button
document.getElementById("add-task-button").addEventListener("click", addTask);

// Render tasks initially (in case of pre-existing data)
renderTasks();
