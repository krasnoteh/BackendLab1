const STORAGE_KEY = "taskListData";

const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

let tasks = [];

loadFromStorage();
render();


form.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskName = input.value.trim();
    if (taskName.length < 3) {
        alert("Task name must be at least 3 characters.");
        return;
    }

    addTask(taskName);
    input.value = "";
});

function addTask(name) {
    const task = {
        id: Date.now(),
        name: name
    };

    tasks.push(task);
    saveToStorage();
    render();
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    saveToStorage();
    render();
}

function render() {
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.className = "task-list__item";

        const span = document.createElement("span");
        span.textContent = task.name;
        span.className = "task-list__text";

        const btn = document.createElement("button");
        btn.textContent = "Удалить";
        btn.className = "task-list__delete";
        btn.addEventListener("click", () => deleteTask(task.id));

        li.appendChild(span);
        li.appendChild(btn);
        taskList.appendChild(li);
    });
}

function saveToStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function loadFromStorage() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
        try {
            tasks = JSON.parse(raw);
        } catch (_) {
            tasks = [];
        }
    }
}
