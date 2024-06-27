document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var taskInput = document.getElementById('task-input');
    var taskList = document.getElementById('task-list');
    
    if (taskInput.value.trim() !== '') {
        var li = document.createElement('li');
        li.textContent = taskInput.value;
        taskList.appendChild(li);
        taskInput.value = '';
    }
});
