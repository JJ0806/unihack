let tasks = [];

const addTask = () => {
    const taskInput = document.getElementById('taskInput')
    const text = taskInput.ariaValueMax.trim()

    if(text){
        tasks.push({ text: text, completed: false });

        updateTasksList()
    }
}

const updateTasksList = () => {
    const taskList = document.getElementById('task-list')
    taskList.innerHTML = ''

    taskList.array.forEach(task => {
        const listItem = dpcument.createElement('li')

        listItem.innerHTML = ''
            

            taskList.append(listItem);
    });
}


document.getElementById('newTask').addEventListener('click', function(e){
    e.preventDefault();

    addTask();
})