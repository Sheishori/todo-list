import { projects } from "./projects"
import { tasks } from "./tasks";
import { render } from "./render";

const forms = (() => {
	const projectFormContainer = document.querySelector("#new-project");
	const projectForm = projectFormContainer.querySelector("form");
	const newProjectButton = document.querySelector("#new-project-button");
	const cancelProjectButton = projectForm.querySelector(".cancel");
	const taskFormContainer = document.querySelector("#task-form");
	const taskForm = taskFormContainer.querySelector("form");
	const newTaskButton = document.querySelector("#new-task-button");
	const taskFormTitle = taskFormContainer.querySelector("p");
	const submitTaskButton = taskFormContainer.querySelector(".submit");
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
		render.updateTasksList();
	});

	function callback(mutationList, observer) {
		mutationList.forEach(function(mutation) {
			if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
				if (taskFormContainer.classList[1] === "edit") {
					taskFormTitle.textContent = "Edit task";
					submitTaskButton.textContent = 'Save';
					let task = tasks.getTaskDetails(tasks.getActiveTaskId());
					taskForm.querySelector('#title').value = task.title;
					taskForm.querySelector('#desc').value = task.desc;
					taskForm.querySelector('#due').value = task.due;
					taskForm.querySelector('#priority').value = task.priority;
					taskFormContainer.style.display = 'inherit';
				};
			};
		});
	};

	const options = {
		attributes: true
	};
	const observer = new MutationObserver(callback)
	observer.observe(taskFormContainer, options)

	newTaskButton.addEventListener("click", () => {
		taskFormTitle.textContent = "Add task";
		taskFormContainer.style.display = 'inherit';
		submitTaskButton.textContent = 'Add';
	});

	cancelTaskButton.addEventListener("click", (e) => {
		e.preventDefault();
		taskFormContainer.style.display = 'none';
		taskForm.reset();
	});

	taskForm.addEventListener("submit", (e) => {
		e.preventDefault();
		if (taskFormContainer.classList[1] === "edit") {
			let task = tasks.getTaskDetails(tasks.getActiveTaskId());
			task.title = taskForm.querySelector('#title').value;
			task.desc = taskForm.querySelector('#desc').value;
			task.due = taskForm.querySelector('#due').value;
			task.priority = taskForm.querySelector('#priority').value;
			taskFormContainer.classList.remove("edit");
			render.renderOpenTask();
		} else {
			tasks.addTask(
				"",
				taskForm.querySelector('#title').value,
				taskForm.querySelector('#desc').value,
				taskForm.querySelector('#due').value,
				taskForm.querySelector('#priority').value);
		}
		taskFormContainer.style.display = 'none';
		taskForm.reset();
		render.updateTasksList();
	});
})();

export { forms };