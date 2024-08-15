const loadTask = (data) => {
	const toDoList = document.querySelector(".todo__list");

	const task = document.createElement("li");
	task.classList.add("todo__task");
	task.innerHTML = `
        <input class="todo__checkbox" type="checkbox" />
        <p class="todo__details">
            <span class="todo__details-name">${data.name}</span>
            <span class="todo__details-date">/ ${data.date} /</span>
            <span class="todo__details-task">${data.task}</span>
        </p>
        <button class="todo__delete">X</button>
    `;

	toDoList.appendChild(task);
	isEmptyList();
};

const registerTask = () => {
	const data = {
		name: document.querySelector("#name").value,
		date: document.querySelector("#date").value,
		task: document.querySelector("#task").value,
	};

	console.log(` Datos de la tarea:
		Name: ${data.name}
		Date: ${data.date}
		Tarea: ${data.task}`);

	form.reset();
	loadTask(data);
};

const deleteTask = (task) => {
	task.remove();
	isEmptyList();
};

const isEmptyList = () => {
	const emptyMssg = document.querySelector(".todo__empty");
	document.querySelector(".todo__task")
		? (emptyMssg.style.display = "none")
		: (emptyMssg.style.display = "block");
};

const prepareListeners = () => {
	form = document.querySelector(".register");
	toDoList = document.querySelector(".todo__list");
	task = document.querySelector(".todo");

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		registerTask();
	});

	task.addEventListener("click", (e) => {
		e.target.classList.contains("todo__delete")
			? deleteTask(e.target.parentElement)
			: null;
	});
};

const startApp = () => {
	console.log("App Started");
	prepareListeners();
};

document.addEventListener("DOMContentLoaded", function () {
	startApp();
});
