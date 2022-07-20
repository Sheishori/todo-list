import { render } from "./render";
import { forms } from "./forms";

function projects() {

	const project = (name, color) => {
		return {name, color};
	};

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
	
	allProjects.addProject(project("Home", "blue"));
	allProjects.addProject(project("Work", "orange"));
	
	render().updateProjectsList(allProjects.getProjects());
};

export { projects };