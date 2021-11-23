init();

function init() {
    document.getElementById('f').addEventListener('submit', addToDo);
    document.getElementById('clear').addEventListener('click', clearTodoList);
    document.querySelector('ul').addEventListener('click', deleteOrCheck);
}

function deleteOrCheck(e) {
    if(e.target.className == 'delete') {
        deleteToDo(e);
    }
    else {
        checkToDo(e);
    }
}

function deleteToDo(e) {
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
}

function checkToDo(e) {
    const todo = e.target.nextSibiling;
    if(e.target.checked) {
        todo.style.color = "#dddddd";
    } else {
        todo.style.color = "#000000";
    }
}

function clearTodoList(e) {
    let ul = document.querySelector('ul').innerHTML = '';
}

function addToDo(e) {
    e.preventDefault();
    let toDoValue = document.querySelector('input');
    if(toDoValue.value !== '') {
        addTask(toDoValue.value);
        toDoValue.value = '';
    }
}

function addTask(value) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<span class="delete">x</span><input type="checkbox"><label>${value}</label>`;
    ul.appendChild(li);
    document.querySelector('.todolist').style.display = 'block';
}