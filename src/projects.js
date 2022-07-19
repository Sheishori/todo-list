function projects() {
	const projectsList = document.querySelector("#projects");

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
	
	function updateProjectsList() {
		projectsList.textContent = "";
		let projects = allProjects.getProjects();
		for (let project in projects) {
			generateProject(projects[project]);
		};
	};
	
	function generateProject(project) {
		let li = document.createElement("li");
		let color = document.createElement("div");
		let name = document.createElement("div");

		color.classList.add("color");
		color.textContent = "●";
		color.style.color = project.color;
		
		name.classList.add("project");
		name.textContent = project.name;
	
		li.append(color, name);
		projectsList.appendChild(li);
	};
	
	allProjects.addProject(project("Home", "blue"));
	allProjects.addProject(project("Work", "orange"));
	
	updateProjectsList();


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
		updateProjectsList();
	});
};

export { projects };