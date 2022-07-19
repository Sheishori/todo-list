function tasks() {
	const taskFormContainer = document.querySelector("#new-task");
	const taskForm = taskFormContainer.querySelector("form");
	const tasksList = document.querySelector("#tasks");
	const tasks = tasksList.querySelectorAll("li");

	function newToDo(title, desc, dueDate, priority) {
		let li = document.createElement("li");
		let input = document.createElement("input");
		let label = document.createElement("label");
		let edit = document.createElement("div");
		let due = document.createElement("div");
		let del = document.createElement("div");

		input.type = "checkbox";
		input.name = title;
		label.setAttribute("for", title);
		label.textContent = title;
		edit.classList.add("edit");
		due.classList.add("due");
		if (dueDate) due.textContent = "Due " + dueDate;
		del.classList.add("delete");
		del.textContent = "X";

		if (priority === "Urgent") {
			li.classList.add("urgent");
		} else if (priority === "High") {
			li.classList.add("high");
		};

		li.append(input, label, edit, due, del);
		tasksList.appendChild(li);
	};

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
		newToDo(taskForm.querySelector('#title').value,
						taskForm.querySelector('#desc').value,
						taskForm.querySelector('#due').value,
						taskForm.querySelector('#priority').value);
		taskFormContainer.style.display = 'none';
		taskForm.reset();
	});
};

export { tasks };