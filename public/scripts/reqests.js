document.querySelector('.fetch-btn').addEventListener('click', fetchTodos);

async function fetchTodos() {
    const userId = document.querySelector('.user-id').value;
    const completed = document.querySelector('.completed').value;

    const loader = document.querySelector('.loader');
    const errorBlock = document.querySelector('.error');
    const table = document.querySelector('.todos-table');
    const tbody = document.querySelector('.todos-body');

    errorBlock.style.display = 'none';
    table.style.display = 'none';
    tbody.innerHTML = '';

    loader.style.display = 'block';

    let url = 'https://jsonplaceholder.typicode.com/todos?';
    if (userId) url += `userId=${userId}&`;
    if (completed) url += `completed=${completed}`;

    try {
        const response = await fetch(url);

        const data = await response.json();

        if (data.length === 0) {
            throw new Error();
        }

        const template = document.querySelector('.todo-row-template');

        data.forEach(item => {
            const row = template.content.cloneNode(true);
            row.querySelector('.todo-id').textContent = item.id;
            row.querySelector('.todo-userid').textContent = item.userId;
            row.querySelector('.todo-title').textContent = item.title;
            row.querySelector('.todo-completed').textContent = item.completed;
            tbody.appendChild(row);
        });

        table.style.display = 'table';

    } catch (err) {
        errorBlock.textContent = 'Произошла ошибка';
        errorBlock.style.display = 'block';
    } finally {
        loader.style.display = 'none';
    }
}
