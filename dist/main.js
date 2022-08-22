/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"forms\": () => (/* binding */ forms)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\n\n\n\nconst forms = (() => {\n\tconst projectFormContainer = document.querySelector(\"#new-project\");\n\tconst projectForm = projectFormContainer.querySelector(\"form\");\n\tconst newProjectButton = document.querySelector(\"#new-project-button\");\n\tconst cancelProjectButton = projectForm.querySelector(\".cancel\");\n\tconst taskFormContainer = document.querySelector(\"#task-form\");\n\tconst taskForm = taskFormContainer.querySelector(\"form\");\n\tconst newTaskButton = document.querySelector(\"#new-task-button\");\n\tconst taskFormTitle = taskFormContainer.querySelector(\"p\");\n\tconst submitTaskButton = taskFormContainer.querySelector(\".submit\");\n\tconst cancelTaskButton = taskForm.querySelector('.cancel');\n\n\tnewProjectButton.addEventListener(\"click\", () => {\n\t\tprojectFormContainer.style.display = 'inherit';\n\t});\n\n\tcancelProjectButton.addEventListener(\"click\", (e) => {\n\t\te.preventDefault();\n\t\tprojectFormContainer.style.display = 'none';\n\t\tprojectForm.reset();\n\t});\n\t\n\tprojectForm.addEventListener(\"submit\", (e) => {\n\t\te.preventDefault();\n\t\t_projects__WEBPACK_IMPORTED_MODULE_0__.projects.addProject(\n\t\t\tprojectForm.querySelector('#name').value,\n\t\t\tprojectForm.querySelector('#color').value);\n\t\tprojectFormContainer.style.display = 'none';\n\t\tprojectForm.reset();\n\t\t_render__WEBPACK_IMPORTED_MODULE_2__.render.updateProjectsList();\n\t});\n\n\tfunction callback(mutationList, observer) {\n\t\tmutationList.forEach(function(mutation) {\n\t\t\tif (mutation.type === 'attributes' && mutation.attributeName === 'class') {\n\t\t\t\tif (taskFormContainer.classList[1] === \"edit\") {\n\t\t\t\t\ttaskFormTitle.textContent = \"Edit task\";\n\t\t\t\t\tsubmitTaskButton.textContent = 'Save';\n\t\t\t\t\tlet task = _tasks__WEBPACK_IMPORTED_MODULE_1__.tasks.getTaskDetails(_tasks__WEBPACK_IMPORTED_MODULE_1__.tasks.getActiveTaskId());\n\t\t\t\t\ttaskForm.querySelector('#title').value = task.title;\n\t\t\t\t\ttaskForm.querySelector('#desc').value = task.desc;\n\t\t\t\t\ttaskForm.querySelector('#due').value = task.due;\n\t\t\t\t\ttaskForm.querySelector('#priority').value = task.priority;\n\t\t\t\t\ttaskFormContainer.style.display = 'inherit';\n\t\t\t\t};\n\t\t\t};\n\t\t});\n\t};\n\n\tconst options = {\n\t\tattributes: true\n\t};\n\tconst observer = new MutationObserver(callback)\n\tobserver.observe(taskFormContainer, options)\n\n\tnewTaskButton.addEventListener(\"click\", () => {\n\t\ttaskFormTitle.textContent = \"Add task\";\n\t\ttaskFormContainer.style.display = 'inherit';\n\t\tsubmitTaskButton.textContent = 'Add';\n\t});\n\n\tcancelTaskButton.addEventListener(\"click\", (e) => {\n\t\te.preventDefault();\n\t\ttaskFormContainer.style.display = 'none';\n\t\ttaskForm.reset();\n\t});\n\n\ttaskForm.addEventListener(\"submit\", (e) => {\n\t\te.preventDefault();\n\t\tif (taskFormContainer.classList[1] === \"edit\") {\n\t\t\tlet task = _tasks__WEBPACK_IMPORTED_MODULE_1__.tasks.getTaskDetails(_tasks__WEBPACK_IMPORTED_MODULE_1__.tasks.getActiveTaskId());\n\t\t\ttask.title = taskForm.querySelector('#title').value;\n\t\t\ttask.desc = taskForm.querySelector('#desc').value;\n\t\t\ttask.due = taskForm.querySelector('#due').value;\n\t\t\ttask.priority = taskForm.querySelector('#priority').value;\n\t\t\ttaskFormContainer.classList.remove(\"edit\");\n\t\t\t_render__WEBPACK_IMPORTED_MODULE_2__.render.renderOpenTask();\n\t\t} else {\n\t\t\t_tasks__WEBPACK_IMPORTED_MODULE_1__.tasks.addTask(\n\t\t\t\t\"\",\n\t\t\t\ttaskForm.querySelector('#title').value,\n\t\t\t\ttaskForm.querySelector('#desc').value,\n\t\t\t\ttaskForm.querySelector('#due').value,\n\t\t\t\ttaskForm.querySelector('#priority').value);\n\t\t}\n\t\ttaskFormContainer.style.display = 'none';\n\t\ttaskForm.reset();\n\t\t_render__WEBPACK_IMPORTED_MODULE_2__.render.updateTasksList();\n\t});\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/forms.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms */ \"./src/forms.js\");\n\n\n\n_render__WEBPACK_IMPORTED_MODULE_0__.render.updateProjectsList();\n_render__WEBPACK_IMPORTED_MODULE_0__.render.updateTasksList();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": () => (/* binding */ projects)\n/* harmony export */ });\nconst projects = (() => {\n\tlet projects = [\n\t\t{\n\t\t\tname: \"My list\",\n\t\t\tcolor: \"Gray\",\n\t\t\ttasks: [\n\t\t\t\t{\n\t\t\t\t\tstate: \"\",\n\t\t\t\t\ttitle: \"Fill to-do list\",\n\t\t\t\t\tdesc: \"\",\n\t\t\t\t\tdue: \"\",\n\t\t\t\t\tpriority: \"Normal\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tstate: \"\",\n\t\t\t\t\ttitle: \"Go shopping\",\n\t\t\t\t\tdesc: \"\",\n\t\t\t\t\tdue: \"\",\n\t\t\t\t\tpriority: \"Normal\"\n\t\t\t\t}\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\tname: \"My list 2\",\n\t\t\tcolor: \"red\",\n\t\t\ttasks: [\n\t\t\t\t{\n\t\t\t\t\tstate: \"\",\n\t\t\t\t\ttitle: \"Eat bread\",\n\t\t\t\t\tdesc: \"\",\n\t\t\t\t\tdue: \"\",\n\t\t\t\t\tpriority: \"Normal\"\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t];\n\n\tlet activeProject = 0;\n\n\tfunction getActiveProject() {\n\t\treturn activeProject;\n\t};\n\n\tfunction setActiveProject(project) {\n\t\tactiveProject = project;\n\t};\n\n\tfunction changeProjectName(index, projectName) {\n\t\tprojects[index].name = projectName;\n\t};\n\n\tfunction getProjects() {\n\t\treturn projects;\n\t};\n\n\tfunction getTasks() {\n\t\treturn projects[activeProject].tasks;\n\t};\n\n\tfunction addProject(name, color) {\n\t\tconst project = (name, color) => {\n\t\t\tlet tasks = [];\n\t\t\treturn {name, color, tasks};\n\t\t};\n\t\tprojects.push(project(name, color));\n\t};\n\n\treturn {getActiveProject, setActiveProject, changeProjectName, getProjects, getTasks, addProject};\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\n\nconst render = (() => {\n\tconst projectsList = document.querySelector(\"#projects\");\n\tconst tasksList = document.querySelector(\"#tasks\");\n\tconst taskDetailsContainer = document.querySelector(\"#expand\");\n\t\n\tfunction bindProjects() {\n\t\tlet domProjects = projectsList.querySelectorAll(\"li\");\n\t\tdomProjects.forEach(project => {\n\t\t\tproject.addEventListener(\"click\", openActiveProject);\n\t\t});\n\t};\n\n\tfunction openActiveProject(event) {\n\t\t_projects__WEBPACK_IMPORTED_MODULE_0__.projects.setActiveProject(this.className);\n\t\t_tasks__WEBPACK_IMPORTED_MODULE_1__.tasks.setTasks();\n\t\trender.updateTasksList();\n\t};\n\n\tfunction updateProjectsList() {\n\t\tprojectsList.textContent = \"\";\n\t\tlet list = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.getProjects();\n\t\tfor (let index in list) {\n\t\t\t_generateProject(index, list[index]);\n\t\t};\n\t\tbindProjects();\n\t};\n\t\n\tfunction _generateProject(index, project) {\n\t\tlet li = document.createElement(\"li\");\n\t\tlet color = document.createElement(\"div\");\n\t\tlet name = document.createElement(\"div\");\n\n\t\tli.classList.add(index);\n\n\t\tcolor.classList.add(\"color\");\n\t\tcolor.textContent = \"●\";\n\t\tcolor.style.color = project.color;\n\t\t\n\t\tname.classList.add(\"project\");\n\t\tname.textContent = project.name;\n\n\t\tli.append(color, name);\n\t\tprojectsList.appendChild(li);\n\t};\n\n\tfunction renderProjectName() {\n\t\tlet currentProject = document.querySelector(\"#current-project\");\n\t\tcurrentProject.textContent = \"\";\n\t\tlet projectName = document.createElement(\"h2\");\n\t\tlet currentProjectName = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.getProjects()[_projects__WEBPACK_IMPORTED_MODULE_0__.projects.getActiveProject()].name;\n\t\tprojectName.textContent = currentProjectName;\n\t\tprojectName.setAttribute(\"contentEditable\", \"true\");\n\t\tcurrentProject.appendChild(projectName);\n\t\tprojectName.addEventListener(\"blur\", () => {\n\t\t\tprojectName.textContent = currentProjectName;\n\t\t\tupdateProjectsList();\n\t\t\tupdateTasksList();\n\t\t});\n\n\t\tprojectName.addEventListener(\"keypress\", (e) => {\n\t\t\tif (e.keyCode === 13 ) {\n\t\t\t\te.preventDefault();\n\t\t\t\t_projects__WEBPACK_IMPORTED_MODULE_0__.projects.changeProjectName(_projects__WEBPACK_IMPORTED_MODULE_0__.projects.getActiveProject(), projectName.textContent);\n\t\t\t\tprojectName.blur();\n\t\t\t}\n\t\t});\n\t};\n\n\tfunction bindTasks() {\n\t\tlet domTasks = tasksList.querySelectorAll(\"li\");\n\t\tdomTasks.forEach(task => {\n\t\t\ttask.addEventListener(\"click\", expandTask);\n\t\t});\n\t};\n\n\tfunction expandTask() {\n\t\t_tasks__WEBPACK_IMPORTED_MODULE_1__.tasks.setActiveTaskId(this.className[0]);\n\t\trenderOpenTask();\n\t};\n\n\tfunction renderOpenTask() {\n\t\ttaskDetailsContainer.textContent = \"\";\n\t\tlet openTask = _tasks__WEBPACK_IMPORTED_MODULE_1__.tasks.getTaskDetails(_tasks__WEBPACK_IMPORTED_MODULE_1__.tasks.getActiveTaskId());\n\t\tlet expandedTask = document.createElement(\"div\");\n\t\texpandedTask.id = \"expanded-task\";\n\t\tlet task = document.createElement(\"div\");\n\t\ttask.id = \"task\";\n\t\tlet domTaskDetails = document.createElement(\"div\");\n\t\tdomTaskDetails.id = \"details\";\n\t\tfor (let property in openTask) {\n\t\t\tif (property === \"state\") {\n\t\t\t\tlet taskState = document.createElement(\"input\");\n\t\t\t\ttaskState.type = \"checkbox\";\n\t\t\t\ttaskState.name = openTask[property];\n\t\t\t\tif (openTask.state === \"Done\") taskState.checked = true;\n\t\t\t\ttaskState.addEventListener(\"click\", (e) => {\n\t\t\t\t\tif (taskState.checked) _tasks__WEBPACK_IMPORTED_MODULE_1__.tasks.completeTask(this.className[0]);\n\t\t\t\t\telse _tasks__WEBPACK_IMPORTED_MODULE_1__.tasks.undoTask(this.className[0]);\n\t\t\t\t\trender.updateTasksList();\n\t\t\t\t});\n\t\t\t\ttask.appendChild(taskState);\n\t\t\t} else if (property === \"title\") {\n\t\t\t\tlet taskTitle = document.createElement(\"h3\");\n\t\t\t\ttaskTitle.classList.add(\"task-title\");\n\t\t\t\ttaskTitle.textContent = openTask[property];\n\t\t\t\ttask.appendChild(taskTitle);\n\t\t\t} else {\n\t\t\t\tlet propertyName = document.createElement(\"span\");\n\t\t\t\tpropertyName.classList.add('property-name');\n\t\t\t\tif (property === \"desc\") {\n\t\t\t\t\tpropertyName.textContent = \"Description:\";\n\t\t\t\t}\telse {\n\t\t\t\t\tpropertyName.textContent = `${property.charAt(0).toUpperCase() + property.slice(1)}: `;\n\t\t\t\t};\n\t\t\t\tlet propertyValue = document.createElement(\"span\");\n\t\t\t\tpropertyValue.classList.add(property);\n\t\t\t\tpropertyValue.textContent = openTask[property];\n\t\t\t\tif (openTask[property] === \"Urgent\") {\n\t\t\t\t\tpropertyValue.classList.add(\"urgent\");\n\t\t\t\t} else if (openTask[property] === \"High\") {\n\t\t\t\t\tpropertyValue.classList.add(\"high\");\n\t\t\t\t};\n\t\t\t\tdomTaskDetails.append(propertyName, propertyValue);\n\t\t\t};\n\t\t};\n\t\tlet edit = document.createElement(\"button\");\n\t\tedit.classList.add(\"edit\");\n\t\tedit.textContent = \"Edit\";\n\t\tedit.addEventListener(\"click\", (e) => {\n\t\t\tconst taskFormContainer = document.querySelector(\"#task-form\");\n\t\t\ttaskFormContainer.classList.add(\"edit\");\n\t\t});\n\t\ttask.appendChild(edit);\n\t\ttaskDetailsContainer.appendChild(expandedTask);\n\t\texpandedTask.append(task, domTaskDetails);\n\t\ttaskDetailsContainer.style.display = 'inherit';\n\t\tlet close = document.createElement(\"button\");\n\t\tclose.classList.add(\"close\");\n\t\tclose.textContent = \"X\";\n\t\tclose.addEventListener(\"click\", (e) => {\n\t\t\ttaskDetailsContainer.style.display = 'none';\n\t\t\ttaskDetailsContainer.textContent = \"\";\n\t\t});\n\t\tdomTaskDetails.appendChild(close);\n\t};\n\n\tfunction updateTasksList() {\n\t\trenderProjectName();\n\t\ttasksList.textContent = \"\";\n\t\tlet list = _tasks__WEBPACK_IMPORTED_MODULE_1__.tasks.getTasks();\n\t\tfor (let index in list) {\n\t\t\t_generateTask(index, list[index]);\n\t\t};\n\t\tbindTasks();\n\t};\n\n\tfunction _generateTask(index, task) {\n\t\tlet li = document.createElement(\"li\");\n\t\tlet input = document.createElement(\"input\");\n\t\tlet label = document.createElement(\"label\");\n\t\tlet edit = document.createElement(\"div\");\n\t\tlet due = document.createElement(\"div\");\n\t\tlet del = document.createElement(\"div\");\n\n\t\tli.classList.add(index);\n\t\t\n\t\tinput.type = \"checkbox\";\n\t\tinput.name = task.title;\n\t\tif (task.state === \"Done\") input.checked = true;\n\t\tlabel.setAttribute(\"for\", task.title);\n\t\tlabel.setAttribute(\"contentEditable\", \"true\");\n\t\tlabel.textContent = task.title;\n\t\tedit.classList.add(\"edit\");\n\t\tdue.classList.add(\"due\");\n\t\tif (task.due) due.textContent = \"Due \" + task.due;\n\t\tdel.classList.add(\"delete\");\n\t\tdel.textContent = \"X\";\n\n\t\tinput.addEventListener(\"click\", (e) => {\n\t\t\te.stopPropagation();\n\t\t\tif (input.checked) _tasks__WEBPACK_IMPORTED_MODULE_1__.tasks.completeTask(index);\n\t\t\telse _tasks__WEBPACK_IMPORTED_MODULE_1__.tasks.undoTask(index);\n\t\t});\n\n\t\tlabel.addEventListener(\"click\", (e) => {\n\t\t\te.stopPropagation();\n\t\t});\n\t\t\n\t\tlabel.addEventListener(\"blur\", () => {\n\t\t\tlabel.textContent = task.title;\n\t\t\trender.updateTasksList();\n\t\t});\n\n\t\tlabel.addEventListener(\"keypress\", (e) => {\n\t\t\tif (e.keyCode === 13 ) {\n\t\t\t\te.preventDefault();\n\t\t\t\ttask.title = label.textContent;\n\t\t\t\tlabel.blur();\n\t\t\t}\n\t\t});\n\n\t\tdel.addEventListener(\"click\", (e) => {\n\t\t\te.stopPropagation();\n\t\t\t_tasks__WEBPACK_IMPORTED_MODULE_1__.tasks.deleteTask(index);\n\t\t\trender.updateTasksList();\n\t\t});\n\n\t\tif (task.priority === \"Urgent\") {\n\t\t\tli.classList.add(\"urgent\");\n\t\t} else if (task.priority === \"High\") {\n\t\t\tli.classList.add(\"high\");\n\t\t};\n\n\t\tli.append(input, label, edit, due, del);\n\t\ttasksList.appendChild(li);\n\t};\n\n\treturn {updateProjectsList, updateTasksList, renderOpenTask};\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/render.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tasks\": () => (/* binding */ tasks)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\nconst tasks = (() => {\n\tlet tasks = [];\n\tlet activeTaskId = \"\";\n\n\tfunction setActiveTaskId(id){\n\t\tactiveTaskId = id;\n\t};\n\n\tfunction getActiveTaskId(){\n\t\treturn activeTaskId;\n\t};\n\n\tfunction getTaskDetails(taskId) {\n\t\treturn tasks[taskId];\n\t};\n\n\tfunction saveTaskDetails(taskDetails) {\n\t\ttasks[taskId] = taskDetails;\n\t};\n\n\tfunction completeTask(taskId) {\n\t\ttasks[taskId].state = \"Done\";\n\t};\n\n\tfunction undoTask(taskId) {\n\t\ttasks[taskId].state = \"\";\n\t};\n\n\tfunction setTasks() {\n\t\ttasks = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.getTasks();\n\t};\n\n\tfunction getTasks() {\n\t\treturn tasks;\n\t};\n\n\tfunction addTask(state, title, desc, due, priority) {\n\t\tconst task = (state, title, desc, due, priority) => {\n\t\t\treturn {state, title, desc, due, priority};\n\t\t};\n\t\ttasks.push(task(state, title, desc, due, priority));\n\t};\n\n\tfunction deleteTask(index) {\n\t\ttasks.splice(index, 1);\n\t};\n\n\tsetTasks();\n\n\treturn {setActiveTaskId, getActiveTaskId, getTaskDetails, saveTaskDetails, completeTask, undoTask, setTasks, getTasks, addTask, deleteTask};\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/tasks.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;