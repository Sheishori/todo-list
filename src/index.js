import { addTask } from "./addTask";

addTask();

const allProjects = (() => {
	let projects = [];

	function getProjects() {
		return projects;
	};

	function addProject(newProject) {
		projects.push(newProject);
	};

	return {getProjects, addProject};
})();

const project = (name, color) => {
	return {name, color};
};

const projectsList = document.querySelector("#projects");

function updateProjectsList() {
	projectsList.textContent = "";
	let projects = allProjects.getProjects();
	for (let project in projects) {
		generateProject(projects[project]);
	};
};

function generateProject(project) {
	let li = document.createElement("li");
	let img = document.createElement("img");
	let name = document.createElement("div");
	img.src = "./list.png";
	img.alt = "📝";
	name.textContent = project.name;
	name.classList.add("list");

	li.append(img, name);
	projectsList.appendChild(li);
};

let list1 = project("Home", "gray");
let list2 = project("Work", "gray");
allProjects.addProject(list1);
allProjects.addProject(list2);

updateProjectsList();