document.getElementById('add-task').addEventListener('click', function() {
    let taskInput = document.getElementById('new-task');
    let taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        let li = document.createElement('li');
        li.textContent = taskText;

        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.className = 'delete-btn';

        deleteButton.addEventListener('click', function() {
            this.parentElement.remove();
        });

        li.appendChild(deleteButton);
        document.getElementById('task-list').appendChild(li);

        taskInput.value = '';
    }
});
