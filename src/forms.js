import { projects } from "./projects"
import { tasks } from "./tasks";

function forms() {
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
		allProjects.addProject(project(
			projectForm.querySelector('#name').value,
			projectForm.querySelector('#color').value));
		projectFormContainer.style.display = 'none';
		projectForm.reset();
		render().updateProjectsList(allProjects.getProjects());
		updateProjectsList();
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

export { forms };