const projects = (() => {
	let projects = [
		{
			name: "My list",
			color: "Gray",
			tasks: [{
				title: "Fill to-do list",
				desc: "",
				due: "",
				priority: "normal"
			},
			{
				title: "Go shopping",
				desc: "",
				due: "",
				priority: "normal"
			}]
		},
		{
			name: "My list 2",
			color: "red",
			tasks: [{
				title: "Eat bread",
				desc: "",
				due: "",
				priority: "normal"
			}]
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

	function setTasks(tasks) {
		projects[activeProject].tasks = tasks;
	}

	function addProject(name, color) {
		const project = (name, color) => {
			let tasks = [];
			return {name, color, tasks};
		};
		projects.push(project(name, color));
	};

	return {getActiveProject, setActiveProject, getProjects, getTasks, setTasks, addProject};
})();

export { projects };