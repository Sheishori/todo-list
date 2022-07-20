import { projects } from "./projects"

const tasks = (() => {
	let tasks = [];

	function setTasks() {
		tasks = projects.getTasks();
	};

	function getTasks() {
		return tasks;
	};

	function addTask(title, desc, due, priority) {
		const task = (title, desc, due, priority) => {
			return {title, desc, due, priority};
		};
		tasks.push(task(title, desc, due, priority));
		projects.setTasks(tasks);
	};

	setTasks();

	return {setTasks, getTasks, addTask};
})();

export { tasks };