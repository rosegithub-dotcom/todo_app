const myToDo = [];

function addToDo() {
    const taskInput = document.getElementById("taskInput");
    const todotask = taskInput.value.trim();
    const length = myToDo.length;
    myToDo.push({text: todotask, done: false, id: length + 1});
    displayToDos();
}

function displayToDos() {
    const toDoList = document.getElementById('toDoList');
    toDoList.innerHTML = '';

    myToDo.forEach((todo, index) => {
        const listItem = document.createElement("li");
        listItem.className = 'todoItem';
        listItem.innerHTML = `
            <input type="checkbox">
            <span>${todo.text}</span>
        `;
        toDoList.appendChild(listItem);
    });
}

console.log(myToDo);

