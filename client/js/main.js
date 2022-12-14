const addButton = document.getElementById('add-btn');
const addTodoInput = document.getElementById('add-todo');
const todos = document.getElementById('todos');

let allTheTodos = [];

fetch('http://ec2-43-205-214-104.ap-south-1.compute.amazonaws.com:3000/todos')
.then(data => data.json())
.then(data => {
    for (let todoItem of data.todos) {
        const todo = document.createElement('li');
        todo.innerText = todoItem;
        todo.className = "list-group-item";
        todos.appendChild(todo);
    }
});

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    const todo = document.createElement('li');
    todo.innerText = addTodoInput.value;
    todo.className = "list-group-item";
    todos.appendChild(todo);
    const addedTodo = addTodoInput.value;
    fetch('http://ec2-43-205-214-104.ap-south-1.compute.amazonaws.com:3000/todos?todo=' + addedTodo , {
        method: "POST"
    })
    addTodoInput.value = "";
})

