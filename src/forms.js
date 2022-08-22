import { projects } from "./projects"
import { tasks } from "./tasks";
import { render } from "./render";

const forms = (() => {
	const projectFormContainer = document.querySelector("#new-project");
	const projectForm = projectFormContainer.querySelector("form");
	const newProjectButton = document.querySelector("#new-project-button");
	const cancelProjectButton = projectForm.querySelector(".cancel");
	const taskFormContainer = document.querySelector("#new-task");
	const taskForm = taskFormContainer.querySelector("form");
	const newTaskButton = document.querySelector("#new-task-button");
	const cancelTaskButton = taskForm.querySelector('.cancel');

	newProjectButton.addEventListener("click", () => {
		projectFormContainer.style.display = 'inherit';
	});

	cancelProjectButton.addEventListener("click", (e) => {
		e.preventDefault();
		projectFormContainer.style.display = 'none';
		projectForm.reset();
	});
	
	projectForm.addEventListener("submit", (e) => {
		e.preventDefault();
		projects.addProject(
			projectForm.querySelector('#name').value,
			projectForm.querySelector('#color').value);
		projectFormContainer.style.display = 'none';
		projectForm.reset();
		render.updateProjectsList();
	});

	newTaskButton.addEventListener("click", () => {
		taskFormContainer.style.display = 'inherit';
	});

	cancelTaskButton.addEventListener("click", (e) => {
		e.preventDefault();
		taskFormContainer.style.display = 'none';
		taskForm.reset();
	});

	taskForm.addEventListener("submit", (e) => {
		e.preventDefault();
		tasks.addTask(
			"",
			taskForm.querySelector('#title').value,
			taskForm.querySelector('#desc').value,
			taskForm.querySelector('#due').value,
			taskForm.querySelector('#priority').value);
		taskFormContainer.style.display = 'none';
		taskForm.reset();
		render.updateTasksList();
	});
})();

export { forms };