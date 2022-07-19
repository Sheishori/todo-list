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
		
		name.classList.add("list");
		name.textContent = project.name;
	
		li.append(color, name);
		projectsList.appendChild(li);
	};
	
	allProjects.addProject(project("Home", "blue"));
	allProjects.addProject(project("Work", "orange"));
	
	updateProjectsList();
};

export { projects };