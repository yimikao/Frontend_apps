//VIEW
const update_text = document.getElementById("todo-update");
const todo_history = document.getElementById('todo-list');
const text_space = document.getElementById('text-space');
// const add_todo_btn = document.getElementById("submit-btn");
const form = document.getElementById('form');

//MODEL

function updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

const localStorageTodos = JSON.parse(localStorage.getItem('todos'));

let todos = localStorage.getItem('todos') !== null ? localStorageTodos : [];

function randomID() {
    return Math.floor(Math.random() * 10000);
}

//CONTROLLER

function addTodo(e) {
    e.preventDefault();

    const todo = {
        id: randomID(),
        text: text_space.value
    };

    todos.push(todo);
    
    addTodoDOM(todo);
    updateLocalStorage();

    text_space.value = '';

}

function addTodoDOM(todo) {
    const todo_item = document.createElement('li');
    todo_item.innerHTML = `
            <input type="checkbox" class="check-box">${todo.text}</input>
            <span><a href="" onclick= "removeTodo(${todo.id})">x</a></span>
            
    `;

    todo_history.appendChild(todo_item);
}

// function addTodoDOM(todo) {
//     // const todo_item = document.createElement('li');
//     todo_history.innerHTML = `
//                 <li class="todo-item">
//                     <input type="checkbox" class="check-box">${todo.text}</input>
//                     <span><a href="" onclick= "removeTodo(${todo.id})">x</a></span>
                    
//                 </li>
//     `
// }

function removeTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    updateLocalStorage();
    initializeApp();///check
}

function initializeApp() {
    todo_history.innerHTML = '';

    todos.forEach(addTodoDOM);
}

initializeApp();


form.addEventListener('submit', addTodo);
// console.log(todos);
