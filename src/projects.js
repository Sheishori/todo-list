const projects = (() => {
	let projects = [{
		name: "My list",
		color: "Gray"
	}];

	function getProjects() {
		return projects;
	};

	function addProject(name, color) {
		const project = (name, color) => {
			return {name, color};
		};
		projects.push(project(name, color));
	};

	return {getProjects, addProject};
})();

export { projects };