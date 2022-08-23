const projects = (() => {
	let projects = [
		{
			name: "My list",
			color: "Gray",
			tasks: [
				{
					state: "",
					title: "Fill to-do list",
					desc: "",
					due: "",
					priority: "Normal"
				},
				{
					state: "",
					title: "Go shopping",
					desc: "",
					due: "",
					priority: "Normal"
				}
			]
		},
		{
			name: "My list 2",
			color: "red",
			tasks: [
				{
					state: "",
					title: "Eat bread",
					desc: "",
					due: "",
					priority: "Normal"
				}
			]
		}
	];

	let activeProject = 0;

	function getActiveProject() {
		return activeProject;
	};

	function setActiveProject(project) {
		activeProject = project;
		localStorage.activeProject = JSON.stringify(activeProject);
	};

	function changeProjectName(index, projectName) {
		projects[index].name = projectName;
	};

	function getProjects() {
		return projects;
	};

	function getTasks() {
		if (!projects[activeProject]) {
			return 0;
		}
		return projects[activeProject].tasks;
	};

	function addProject(name, color) {
		const project = (name, color) => {
			let tasks = [];
			return {name, color, tasks};
		};
		projects.push(project(name, color));
		saveProjects();
	};

	function deleteProject(index) {
		projects.splice(index, 1);
		if (index < activeProject) {
			activeProject -= 1;
		};
		saveProjects();
	};

	function _loadProjects() {
		if (localStorage.projects) {
			projects = JSON.parse(localStorage.projects);
		};
		if (localStorage.activeProject) {
			activeProject = JSON.parse(localStorage.activeProject);
		};
	};

	function saveProjects() {
		localStorage.projects = JSON.stringify(projects);
	};

	_loadProjects();
	return {getActiveProject, setActiveProject, changeProjectName, getProjects, getTasks, addProject, deleteProject, saveProjects};
})();

export { projects };