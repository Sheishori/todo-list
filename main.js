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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"forms\": () => (/* binding */ forms)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\n\n\n\nconst forms = (() => {\n\tconst projectFormContainer = document.querySelector(\"#new-project\");\n\tconst projectForm = projectFormContainer.querySelector(\"form\");\n\tconst newProjectButton = document.querySelector(\"#new-project-button\");\n\tconst cancelProjectButton = projectForm.querySelector(\".cancel\");\n\tconst taskFormContainer = document.querySelector(\"#new-task\");\n\tconst taskForm = taskFormContainer.querySelector(\"form\");\n\tconst newTaskButton = document.querySelector(\"#new-task-button\");\n\tconst cancelTaskButton = taskForm.querySelector('.cancel');\n\n\tnewProjectButton.addEventListener(\"click\", () => {\n\t\tprojectFormContainer.style.display = 'inherit';\n\t});\n\n\tcancelProjectButton.addEventListener(\"click\", (e) => {\n\t\te.preventDefault();\n\t\tprojectFormContainer.style.display = 'none';\n\t\tprojectForm.reset();\n\t});\n\t\n\tprojectForm.addEventListener(\"submit\", (e) => {\n\t\te.preventDefault();\n\t\t_projects__WEBPACK_IMPORTED_MODULE_0__.projects.addProject(\n\t\t\tprojectForm.querySelector('#name').value,\n\t\t\tprojectForm.querySelector('#color').value);\n\t\tprojectFormContainer.style.display = 'none';\n\t\tprojectForm.reset();\n\t\t_render__WEBPACK_IMPORTED_MODULE_2__.render.updateProjectsList();\n\t});\n\n\tnewTaskButton.addEventListener(\"click\", () => {\n\t\ttaskFormContainer.style.display = 'inherit';\n\t});\n\n\tcancelTaskButton.addEventListener(\"click\", (e) => {\n\t\te.preventDefault();\n\t\ttaskFormContainer.style.display = 'none';\n\t\ttaskForm.reset();\n\t});\n\n\ttaskForm.addEventListener(\"submit\", (e) => {\n\t\te.preventDefault();\n\t\t_tasks__WEBPACK_IMPORTED_MODULE_1__.tasks.addTask(\n\t\t\ttaskForm.querySelector('#title').value,\n\t\t\ttaskForm.querySelector('#desc').value,\n\t\t\ttaskForm.querySelector('#due').value,\n\t\t\ttaskForm.querySelector('#priority').value);\n\t\ttaskFormContainer.style.display = 'none';\n\t\ttaskForm.reset();\n\t\t_render__WEBPACK_IMPORTED_MODULE_2__.render.updateTasksList();\n\t});\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/forms.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": () => (/* binding */ projects)\n/* harmony export */ });\nconst projects = (() => {\n\tlet projects = [\n\t\t{\n\t\t\tname: \"My list\",\n\t\t\tcolor: \"Gray\",\n\t\t\ttasks: [{\n\t\t\t\ttitle: \"Fill to-do list\",\n\t\t\t\tdesc: \"\",\n\t\t\t\tdue: \"\",\n\t\t\t\tpriority: \"normal\"\n\t\t\t}]\n\t\t},\n\t\t{\n\t\t\tname: \"My list 2\",\n\t\t\tcolor: \"red\",\n\t\t\ttasks: [{\n\t\t\t\ttitle: \"Eat bread\",\n\t\t\t\tdesc: \"\",\n\t\t\t\tdue: \"\",\n\t\t\t\tpriority: \"normal\"\n\t\t\t}]\n\t\t}\n\t];\n\n\tlet activeProject = 0;\n\n\tfunction getActiveProject() {\n\t\treturn activeProject;\n\t}\n\n\tfunction setgetActiveProject(project) {\n\t\tactiveProject = project;\n\t}\n\n\tfunction getProjects() {\n\t\treturn projects;\n\t};\n\n\tfunction getTasks() {\n\t\treturn projects[activeProject].tasks;\n\t}\n\n\tfunction setTasks(tasks) {\n\t\tprojects[activeProject].tasks = tasks;\n\t}\n\n\tfunction addProject(name, color) {\n\t\tconst project = (name, color) => {\n\t\t\tlet tasks = [];\n\t\t\treturn {name, color, tasks};\n\t\t};\n\t\tprojects.push(project(name, color));\n\t};\n\n\treturn {getActiveProject, setgetActiveProject, getProjects, getTasks, setTasks, addProject};\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\n\nconst render = (() => {\n\tconst projectsList = document.querySelector(\"#projects\");\n\tconst tasksList = document.querySelector(\"#tasks\");\n\t\n\tfunction bindProjects() {\n\t\tlet domProjects = document.querySelectorAll(\".project\");\n\t\tdomProjects.forEach(project => {\n\t\t\tproject.addEventListener(\"click\", function(e) {\n\t\t\t\t_projects__WEBPACK_IMPORTED_MODULE_0__.projects.setgetActiveProject(this.classList[1]);\n\t\t\t\t_tasks__WEBPACK_IMPORTED_MODULE_1__.tasks.setTasks();\n\t\t\t\trender.updateTasksList();\n\t\t\t});\n\t\t});\n\t};\n\n\tfunction updateProjectsList() {\n\t\tprojectsList.textContent = \"\";\n\t\tlet list = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.getProjects();\n\t\tfor (let index in list) {\n\t\t\t_generateProject(index, list[index]);\n\t\t};\n\t\tbindProjects();\n\t};\n\t\n\tfunction _generateProject(index, project) {\n\t\tlet li = document.createElement(\"li\");\n\t\tlet color = document.createElement(\"div\");\n\t\tlet name = document.createElement(\"div\");\n\n\t\tcolor.classList.add(\"color\");\n\t\tcolor.textContent = \"●\";\n\t\tcolor.style.color = project.color;\n\t\t\n\t\tname.classList.add(\"project\");\n\t\tname.classList.add(index);\n\t\tname.textContent = project.name;\n\t\n\t\tli.append(color, name);\n\t\tprojectsList.appendChild(li);\n\t};\n\n\tfunction updateTasksList() {\n\t\ttasksList.textContent = \"\";\n\t\tlet list = _tasks__WEBPACK_IMPORTED_MODULE_1__.tasks.getTasks();\n\t\tfor (let task in list) {\n\t\t\t_generateTask(list[task]);\n\t\t};\n\t};\n\n\tfunction _generateTask(task) {\n\t\tlet li = document.createElement(\"li\");\n\t\tlet input = document.createElement(\"input\");\n\t\tlet label = document.createElement(\"label\");\n\t\tlet edit = document.createElement(\"div\");\n\t\tlet due = document.createElement(\"div\");\n\t\tlet del = document.createElement(\"div\");\n\n\t\tinput.type = \"checkbox\";\n\t\tinput.name = task.title;\n\t\tlabel.setAttribute(\"for\", task.title);\n\t\tlabel.textContent = task.title;\n\t\tedit.classList.add(\"edit\");\n\t\tdue.classList.add(\"due\");\n\t\tif (task.due) due.textContent = \"Due \" + task.due;\n\t\tdel.classList.add(\"delete\");\n\t\tdel.textContent = \"X\";\n\n\t\tif (task.priority === \"Urgent\") {\n\t\t\tli.classList.add(\"urgent\");\n\t\t} else if (task.priority === \"High\") {\n\t\t\tli.classList.add(\"high\");\n\t\t};\n\n\t\tli.append(input, label, edit, due, del);\n\t\ttasksList.appendChild(li);\n\t};\n\n\treturn {updateProjectsList, updateTasksList};\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/render.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tasks\": () => (/* binding */ tasks)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\nconst tasks = (() => {\n\tlet tasks = [];\n\n\tfunction setTasks() {\n\t\ttasks = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.getTasks();\n\t};\n\n\tfunction getTasks() {\n\t\treturn tasks;\n\t};\n\n\tfunction addTask(title, desc, due, priority) {\n\t\tconst task = (title, desc, due, priority) => {\n\t\t\treturn {title, desc, due, priority};\n\t\t};\n\t\ttasks.push(task(title, desc, due, priority));\n\t\t_projects__WEBPACK_IMPORTED_MODULE_0__.projects.setTasks(tasks);\n\t};\n\n\tsetTasks();\n\n\treturn {setTasks, getTasks, addTask};\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/tasks.js?");

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