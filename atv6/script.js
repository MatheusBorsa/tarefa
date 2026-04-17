const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

const addTask = () => {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <div class="btn-group">
                <button class="edit-btn">Editar</button>
                <button class="remove-btn">Excluir</button>
            </div>
        `;

        taskList.appendChild(li);

        taskInput.value = '';
        taskInput.focus();
    }
};

taskList.addEventListener('click', (event) => {
    const target = event.target;
    const li = target.closest('li');
    if (!li) return;

    if (target.classList.contains('task-text') || target.classList.contains('remove-btn')) {
        li.remove();
    }

    if (target.classList.contains('edit-btn')) {
        const span = li.querySelector('.task-text');
        const novoTexto = prompt('Edite sua tarefa:', span.textContent);
        
        if (novoTexto !== null && novoTexto.trim() !== '') {
            span.textContent = novoTexto.trim();
        }
    }
});

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
