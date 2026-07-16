
let tasks = [];
document.addEventListener('DOMContentLoaded', ()=>{

    tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.forEach(element => {
        renderTask(element);
    });

})

const homeView = document.getElementById("home-view");
const tempView = document.getElementById("temporary-view");

const tempViewButton = document.getElementById("temporary-btn");

tempViewButton.addEventListener('click', () => {
    homeView.classList.add('hidden');
    tempView.classList.remove('hidden');
})

const backButton = document.getElementById("back-btn");

backButton.addEventListener('click', () => {
    homeView.classList.remove('hidden');
    tempView.classList.add('hidden');
})



const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

addTaskButton.addEventListener('click', ()=>{
    const taskText = todoInput.value.trim();
    if(taskText === "") return;

    const newTask = {
        id : Date.now(),
        text : taskText,
        completed : false
    };

    tasks.push(newTask);
    renderTask(newTask);
    saveTasks();
    todoInput.value = "";
})

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTask(task){
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    li.innerHTML = `
        <span>${task.text}</span>
        <button>Delete</button>
    `;

    li.addEventListener('click', (e)=>{
        if(e.target.tagName === "BUTTON"){
            tasks = tasks.filter(t => t !== task);
            li.remove();
        }
        else{
            task.completed = !task.completed;
            li.classList.toggle("completed");
        }
        saveTasks();
    })
    todoList.appendChild(li);
}