class Tasks{
    task:string;
    importance:string;
}

window.onload = function(){
    let addBtn = document.querySelector("#add_button") as HTMLButtonElement;
    addBtn.onclick = addTask;
}
function addTask(){
    

    // Get the data from the form
    let taskBox = document.querySelector("#task") as HTMLInputElement;
    let task = taskBox.value;
    let taskImportanceBox = document.querySelector("#importance") as HTMLInputElement;
    let taskImportance = taskImportanceBox.value;
    if (task == ""){
        alert("You need to enter your Task");
        return;
    }
    if (taskImportance == ""){
        alert("You need to enter due date")
        return;
    }

    

    // Populate object
    let newTasks = new Tasks();
    newTasks.task = task;
    newTasks.importance = taskImportance;
    

    // Display the new product

   let taskDiv = document.createElement("div");
   let taskHeading = document.createElement("h2");
   let taskImportancePara = document.createElement("p");
   taskHeading.textContent = newTasks.task;
   taskImportancePara.textContent = newTasks.importance;
   taskHeading.textContent = "• " + task;
   taskImportancePara.textContent = "Due: " + taskImportance;

   // Add elements to product div
   taskDiv.appendChild(taskHeading);
   taskDiv.appendChild(taskImportancePara);

   // Add product to the page
   let displayDiv = document.querySelector("#display") as HTMLDivElement;
   displayDiv.appendChild(taskDiv);

   // Add onclick to the prod div
   taskDiv.onclick = taskDivClicker;
}
function taskDivClicker(){
    // The this keyword will hold the <div> element
    // that triggered this function call
    let currTaskDiv = this as HTMLDivElement;
    currTaskDiv.classList.toggle("added");
   
}