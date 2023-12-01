class Tasks {
}
window.onload = function () {
    let addBtn = document.querySelector("#add_button");
    addBtn.onclick = addTask;
};
function addTask() {
    let taskBox = document.querySelector("#task");
    let task = taskBox.value;
    let taskImportanceBox = document.querySelector("#importance");
    let taskImportance = taskImportanceBox.value;
    if (task == "") {
        alert("You need to enter your Task");
        return;
    }
    if (taskImportance == "") {
        alert("You need to enter due date");
        return;
    }
    let newTasks = new Tasks();
    newTasks.task = task;
    newTasks.importance = taskImportance;
    let taskDiv = document.createElement("div");
    let taskHeading = document.createElement("h2");
    let taskImportancePara = document.createElement("p");
    taskHeading.textContent = newTasks.task;
    taskImportancePara.textContent = newTasks.importance;
    taskHeading.textContent = "• " + task;
    taskImportancePara.textContent = "Due: " + taskImportance;
    taskDiv.appendChild(taskHeading);
    taskDiv.appendChild(taskImportancePara);
    let displayDiv = document.querySelector("#display");
    displayDiv.appendChild(taskDiv);
    taskDiv.onclick = taskDivClicker;
}
function taskDivClicker() {
    let currTaskDiv = this;
    currTaskDiv.classList.toggle("added");
}
