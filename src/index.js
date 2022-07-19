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