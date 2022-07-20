const tasks = (() => {
	let tasks = [];

	function getTasks() {
		return tasks;
	};

	function addTask(title, desc, due, priority) {
		const task = (title, desc, due, priority) => {
			return {title, desc, due, priority};
		};
		tasks.push(task(title, desc, due, priority));
	};

	return {getTasks, addTask};
})();

export { tasks };