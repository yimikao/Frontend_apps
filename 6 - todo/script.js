//VIEW
const update_text = document.getElementById("todo-update");
const todo_history = document.getElementById("todo-list");
const text_space = document.getElementById("text");
const add_todo_btn = document.getElementById("submit-btn");

//MODEL

function updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function localStorageTodos() {
    JSON.parse(localStorage.getItem('todos'));
}

let todos = (localStorage.getItem('todos') !== null ? localStorageTodos : [])

function randomID() {
    return Math.floor(Math.random() * 10000);
}

//CONTROLLER

function addTodo(event) {
    event.preventDefault();

    const todo = {
        id: randomID,
        text: text_space.value
    }

    todos.push(todo);
    updateLocalStorage();
    addTodoDOM(todo)

}
/*
function addTodoDOM(todo) {
    const todo_item = document.createElement('li');
    todo_item.innerHTML = `
                <li class="todo-item">
                    <input type="checkbox" class="check-box">Todo activity</input>
                    <span><a href="">x</a></span>
                    
                </li>
    `
}*/
function addTodoDOM(todo) {
    // const todo_item = document.createElement('li');
    todo_history.innerHTML = `
                <li class="todo-item">
                    <input type="checkbox" class="check-box">${todo.text}</input>
                    <span><a href="" onclick= "removeTodo(${todo.id})">x</a></span>
                    
                </li>
    `
}

function removeTodo(id) {
    
}
