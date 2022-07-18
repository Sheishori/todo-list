taskFormContainer = document.querySelector("#new-task");
taskForm = taskFormContainer.querySelector("form");

newButton = document.querySelector("#new-task-button");
cancelButton = taskForm.querySelector('.cancel');

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
	taskFormContainer.style.display = 'none';
	taskForm.reset();
});