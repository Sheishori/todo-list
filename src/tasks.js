import { projects } from "./projects"

const tasks = (() => {
	let tasks = [];
	let activeTaskId = "";

	function setActiveTaskId(id){
		activeTaskId = id;
	};

	function getActiveTaskId(){
		return activeTaskId;
	};

	function getTaskDetails(taskId) {
		return tasks[taskId];
	};

	function saveTaskDetails(taskDetails) {
		tasks[taskId] = taskDetails;
	};

	function completeTask(taskId) {
		tasks[taskId].state = "Done";
	};

	function undoTask(taskId) {
		tasks[taskId].state = "";
	};

	function setTasks() {
		tasks = projects.getTasks();
	};

	function getTasks() {
		return tasks;
	};

	function addTask(state, title, desc, due, priority) {
		const task = (state, title, desc, due, priority) => {
			return {state, title, desc, due, priority};
		};
		tasks.push(task(state, title, desc, due, priority));
		projects.saveProjects();
	};

	function deleteTask(index) {
		tasks.splice(index, 1);
		projects.saveProjects();
	};

	setTasks();

	return {setActiveTaskId, getActiveTaskId, getTaskDetails, saveTaskDetails, completeTask, undoTask, setTasks, getTasks, addTask, deleteTask};
})();

export { tasks };