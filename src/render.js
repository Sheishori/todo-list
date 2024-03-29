import { projects } from "./projects";
import { tasks } from "./tasks";
import { format } from 'date-fns';

const render = (() => {
	const projectsList = document.querySelector("#projects");
	const tasksList = document.querySelector("#tasks");
	const taskDetailsContainer = document.querySelector("#expand");
	
	function _bindProjects() {
		let domProjects = projectsList.querySelectorAll("li");
		domProjects.forEach(project => {
			project.addEventListener("click", _openActiveProject);
		});
	};

	function _openActiveProject(event) {
		projects.setActiveProject(this.className);
		tasks.setTasks();
		updateTasksList();
	};

	function updateProjectsList() {
		projectsList.textContent = "";
		let list = projects.getProjects();
		for (let index in list) {
			_generateProject(index, list[index]);
		};
		_bindProjects();
	};
	
	function _generateProject(index, project) {
		let li = document.createElement("li");
		let color = document.createElement("div");
		let name = document.createElement("div");
		let del = document.createElement("div");

		li.classList.add(index);

		color.classList.add("color");
		color.textContent = "●";
		color.style.color = project.color;
		
		name.classList.add("project");
		name.textContent = project.name;

		del.classList.add("delete-project");
		del.textContent = "X";

		del.addEventListener("click", (e) => {
			e.stopPropagation();
			projects.deleteProject(index);
			tasks.setTasks();
			updateProjectsList();
			updateTasksList();
		});

		li.append(color, name, del);
		projectsList.appendChild(li);
	};

	function _renderProjectName() {
		let currentProject = document.querySelector("#current-project");
		const newTaskButton = document.querySelector("#new-task-button");
		currentProject.textContent = "";
		if (projects.getProjects() === undefined || projects.getProjects().length == 0) {
			newTaskButton.style.display = "none";
			return;
		};
		newTaskButton.style.display = "inherit";
		let projectName = document.createElement("h2");
		let currentProjectName = projects.getProjects()[projects.getActiveProject()].name;
		projectName.textContent = currentProjectName;
		projectName.setAttribute("contentEditable", "true");
		currentProject.appendChild(projectName);
		projectName.addEventListener("blur", () => {
			projectName.textContent = currentProjectName;
			updateProjectsList();
			updateTasksList();
		});

		projectName.addEventListener("keypress", (e) => {
			if (e.keyCode === 13 ) {
				e.preventDefault();
				if (projectName.textContent) {
					projects.changeProjectName(projects.getActiveProject(), projectName.textContent);
				};
				projectName.blur();
			}
		});
	};

	function _bindTasks() {
		let domTasks = tasksList.querySelectorAll("li");
		domTasks.forEach(task => {
			task.addEventListener("click", _expandTask);
		});
	};

	function _expandTask() {
		tasks.setActiveTaskId(this.className[0]);
		renderOpenTask();
	};

	function renderOpenTask() {
		taskDetailsContainer.textContent = "";
		let activeTask = tasks.getActiveTaskId();
		let openTask = tasks.getTaskDetails(activeTask);
		let expandedTask = document.createElement("div");
		expandedTask.id = "expanded-task";
		let task = document.createElement("div");
		task.id = "task";
		let domTaskDetails = document.createElement("div");
		domTaskDetails.id = "details";
		for (let property in openTask) {
			if (property === "state") {
				let taskState = document.createElement("input");
				taskState.type = "checkbox";
				taskState.name = openTask[property];
				if (openTask.state === "Done") taskState.checked = true;
				taskState.addEventListener("click", (e) => {
					if (taskState.checked) tasks.completeTask(activeTask);
					else tasks.undoTask(activeTask);
					updateTasksList();
				});
				task.appendChild(taskState);
			} else if (property === "title") {
				let taskTitle = document.createElement("h3");
				taskTitle.classList.add("task-title");
				taskTitle.textContent = openTask[property];
				task.appendChild(taskTitle);
			} else {
				let propertyName = document.createElement("span");
				propertyName.classList.add('property-name');
				if (property === "desc") {
					propertyName.textContent = "Description:";
				}	else {
					propertyName.textContent = `${property.charAt(0).toUpperCase() + property.slice(1)}: `;
				};
				let propertyValue = document.createElement("span");
				propertyValue.classList.add(property);
				if (property === "due" && openTask[property]) {
					propertyValue.textContent = format(new Date(openTask[property]), "PPPP");
				} else {
					propertyValue.textContent = openTask[property];
				};
				if (openTask[property] === "Urgent") {
					propertyValue.classList.add("urgent");
				} else if (openTask[property] === "High") {
					propertyValue.classList.add("high");
				};
				domTaskDetails.append(propertyName, propertyValue);
			};
		};
		let edit = document.createElement("button");
		edit.classList.add("edit");
		edit.textContent = "Edit";
		edit.addEventListener("click", (e) => {
			const taskFormContainer = document.querySelector("#task-form");
			taskFormContainer.classList.add("edit");
		});
		task.appendChild(edit);
		taskDetailsContainer.appendChild(expandedTask);
		expandedTask.append(task, domTaskDetails);
		taskDetailsContainer.style.display = 'inherit';
		let close = document.createElement("button");
		close.classList.add("close");
		close.textContent = "X";
		close.addEventListener("click", (e) => {
			taskDetailsContainer.style.display = 'none';
			taskDetailsContainer.textContent = "";
		});
		domTaskDetails.appendChild(close);
	};

	function updateTasksList() {
		_renderProjectName();
		tasksList.textContent = "";
		let list = tasks.getTasks();
		for (let index in list) {
			_generateTask(index, list[index]);
		};
		_bindTasks();
	};

	function _generateTask(index, task) {
		let li = document.createElement("li");
		let input = document.createElement("input");
		let label = document.createElement("label");
		let edit = document.createElement("div");
		let due = document.createElement("div");
		let del = document.createElement("div");

		li.classList.add(index);
		
		input.type = "checkbox";
		input.name = task.title;
		if (task.state === "Done") input.checked = true;
		label.setAttribute("for", task.title);
		label.setAttribute("contentEditable", "true");
		label.textContent = task.title;
		edit.classList.add("edit");
		due.classList.add("due");
		if (task.due) due.textContent = "Due " + format(new Date(task.due), "PP");
		del.classList.add("delete");
		del.textContent = "X";

		input.addEventListener("click", (e) => {
			e.stopPropagation();
			if (input.checked) tasks.completeTask(index);
			else tasks.undoTask(index);
		});

		label.addEventListener("click", (e) => {
			e.stopPropagation();
		});
		
		label.addEventListener("blur", () => {
			label.textContent = task.title;
			updateTasksList();
		});

		label.addEventListener("keypress", (e) => {
			if (e.keyCode === 13 ) {
				e.preventDefault();
				if (label.textContent) {
					task.title = label.textContent;
				};
				label.blur();
			}
		});

		del.addEventListener("click", (e) => {
			e.stopPropagation();
			tasks.deleteTask(index);
			updateTasksList();
		});

		if (task.priority === "Urgent") {
			li.classList.add("urgent");
		} else if (task.priority === "High") {
			li.classList.add("high");
		};

		li.append(input, label, edit, due, del);
		tasksList.appendChild(li);
	};

	return {updateProjectsList, updateTasksList, renderOpenTask};
})();

export { render };