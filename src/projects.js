function projects() {
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
		let color = document.createElement("div");
		let name = document.createElement("div");
		color.textContent = "●";
		color.style.color = project.color;
		color.classList.add("color");
		name.textContent = project.name;
		name.classList.add("list");
	
		li.append(color, name);
		projectsList.appendChild(li);
	};
	
	let list1 = project("Home", "blue");
	let list2 = project("Work", "orange");
	allProjects.addProject(list1);
	allProjects.addProject(list2);
	
	updateProjectsList();
};

export { projects };