function tasks() {
	const tasksList = document.querySelector("#tasks");

	const task = (title, desc, due, priority) => {
		return {title, desc, due, priority};
	};

	const allTasks = (() => {
		let tasks = [];
	
		function getTasks() {
			return tasks;
		};
	
		function addTask(newTask) {
			tasks.push(newTask);
		};
	
		return {getTasks, addTask};
	})();

	function updateTasksList() {
		tasksList.textContent = "";
		let tasks = allTasks.getTasks();
		for (let task in tasks) {
			generateTask(tasks[task]);
		};
	};

	function generateTask(task) {
		let li = document.createElement("li");
		let input = document.createElement("input");
		let label = document.createElement("label");
		let edit = document.createElement("div");
		let due = document.createElement("div");
		let del = document.createElement("div");

		input.type = "checkbox";
		input.name = task.title;
		label.setAttribute("for", task.title);
		label.textContent = task.title;
		edit.classList.add("edit");
		due.classList.add("due");
		if (task.due) due.textContent = "Due " + task.due;
		del.classList.add("delete");
		del.textContent = "X";

		if (task.priority === "Urgent") {
			li.classList.add("urgent");
		} else if (task.priority === "High") {
			li.classList.add("high");
		};

		li.append(input, label, edit, due, del);
		tasksList.appendChild(li);
	};

	allTasks.addTask(task("Buy milk", "", "August 10", "Normal"));

	updateTasksList();

	const taskFormContainer = document.querySelector("#new-task");
	const taskForm = taskFormContainer.querySelector("form");
	const newButton = document.querySelector("#new-task-button");
	const cancelButton = taskForm.querySelector('.cancel');

	newButton.addEventListener("click", () => {
		taskFormContainer.style.display = 'inherit';
	});

	cancelButton.addEventListener("click", (e) => {
		e.preventDefault();
		taskFormContainer.style.display = 'none';
		taskForm.reset();
	});

	taskForm.addEventListener("submit", (e) => {
		e.preventDefault();
		allTasks.addTask(task(
			taskForm.querySelector('#title').value,
			taskForm.querySelector('#desc').value,
			taskForm.querySelector('#due').value,
			taskForm.querySelector('#priority').value));
		taskFormContainer.style.display = 'none';
		taskForm.reset();
		updateTasksList();
	});
};

export { tasks };