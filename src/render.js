import { projects } from "./projects"
import { tasks } from "./tasks";

const render = (() => {
	const projectsList = document.querySelector("#projects");
	const tasksList = document.querySelector("#tasks");
	
	function bindProjects() {
		let domProjects = projectsList.querySelectorAll("li");
		domProjects.forEach(project => {
			project.addEventListener("click", openActiveProject);
		});
	};

	function openActiveProject(event) {
		projects.setActiveProject(this.className);
		tasks.setTasks();
		render.updateTasksList();
	};

	function updateProjectsList() {
		projectsList.textContent = "";
		let list = projects.getProjects();
		for (let index in list) {
			_generateProject(index, list[index]);
		};
		bindProjects();
	};
	
	function _generateProject(index, project) {
		let li = document.createElement("li");
		let color = document.createElement("div");
		let name = document.createElement("div");

		li.classList.add(index);

		color.classList.add("color");
		color.textContent = "●";
		color.style.color = project.color;
		
		name.classList.add("project");
		name.textContent = project.name;
	
		li.append(color, name);
		projectsList.appendChild(li);
	};

	function updateTasksList() {
		tasksList.textContent = "";
		let list = tasks.getTasks();
		for (let task in list) {
			_generateTask(list[task]);
		};
	};

	function _generateTask(task) {
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

	return {updateProjectsList, updateTasksList};
})();

export { render };