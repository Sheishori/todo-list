import { render } from "./render";

function tasks() {

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

	allTasks.addTask(task("Buy milk", "", "August 10", "Normal"));

	render().updateTasksList(allTasks.getTasks());

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
		render().updateTasksList(allTasks.getTasks());
	});
};

export { tasks };