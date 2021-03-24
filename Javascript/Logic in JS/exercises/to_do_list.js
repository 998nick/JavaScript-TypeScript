
const inputTask = document.querySelector('.input-task')
const btnTask = document.querySelector('.btn-task')
const task = document.querySelector('.task')



function createLi() {
    const li = document.createElement('li');
    return li
}

function createDeleteButton(li) {
    li.innerText += ' ';
   const deleteButton = document.createElement('button');
   deleteButton.innerText = 'Apagar';
   deleteButton.setAttribute('class', 'delete')
   li.appendChild(deleteButton);
}


function getTask(textInput) {
    const li = createLi();
    li.innerText = textInput;
    task.appendChild(li)
    clearInput();
    createDeleteButton(li);
    saveTasks();
}

inputTask.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTask.value) return;
        getTask(inputTask.value)
    }
});

function clearInput() {
    inputTask.value = '';
    inputTask.focus();
}


btnTask.addEventListener('click', function () {
    if (!inputTask.value) return;
    getTask(inputTask.value)
})

document.addEventListener('click', function(e) {
    const el = e.target;
    if(el.classList.contains('delete')) {
        el.parentElement.remove();
        saveTasks();
    }
});

function  saveTasks() {
    const liTasks = task.querySelectorAll('li');
    const taskList = [];

    for(let task of liTasks) {
        let textTask = task.innerText;
        textTask = textTask.replace('Apagar', '').trim();
        taskList.push(textTask);
    }

    const taskJSON = JSON.stringify(taskList);
    localStorage.setItem('tasks', taskJSON);
}

function addSavedTasks() {
    const task = localStorage.getItem('tasks');
    const taskList = JSON.parse(task);
    
    for(let task of taskList) {
        getTask(task);
    }
}

addSavedTasks();
