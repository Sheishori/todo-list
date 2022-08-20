import { projects } from "./projects"

const tasks = (() => {
	let tasks = [];

	function getTaskDetails(taskId) {
		return tasks[taskId];
	}

	function saveTaskDetails(taskDetails) {
		tasks[taskId] = taskDetails;
	}

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

	return {getTaskDetails, saveTaskDetails, setTasks, getTasks, addTask};
})();

export { tasks };