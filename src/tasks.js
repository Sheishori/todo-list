import { render } from "./render";
import { forms } from "./forms";

function tasks() {

	const task = (title, desc, due, priority) => {
		return {title, desc, due, priority};
	};

	const allTasks = (() => {
		let tasks = [];
	
		function getTasks() {
			return tasks;
		};
	
		function addTask(newTask) {
			tasks.push(newTask);
		};
	
		return {getTasks, addTask};
	})();

	allTasks.addTask(task("Buy milk", "", "August 10", "Normal"));

	render().updateTasksList(allTasks.getTasks());
};

export { tasks };