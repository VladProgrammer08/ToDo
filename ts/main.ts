class Tasks{
    task:string;
    importance:string;
}

window.onload = function(){
    let addBtn = document.querySelector("#add_button") as HTMLButtonElement;
    addBtn.onclick = addTask;
}