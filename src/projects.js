import { render } from "./render";

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

	const projectFormContainer = document.querySelector("#new-project");
	const projectForm = projectFormContainer.querySelector("form");
	const newButton = document.querySelector("#new-project-button");
	const cancelButton = projectForm.querySelector(".cancel");

	newButton.addEventListener("click", () => {
		projectFormContainer.style.display = 'inherit';
	});

	cancelButton.addEventListener("click", (e) => {
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
};

export { projects };