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
	}

	function setActiveProject(project) {
		activeProject = project;
	}

	function getProjects() {
		return projects;
	};

	function getTasks() {
		return projects[activeProject].tasks;
	}

	function addProject(name, color) {
		const project = (name, color) => {
			let tasks = [];
			return {name, color, tasks};
		};
		projects.push(project(name, color));
	};

	return {getActiveProject, setActiveProject, getProjects, getTasks, addProject};
})();

export { projects };