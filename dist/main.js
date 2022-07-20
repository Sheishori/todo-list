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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\n\n(0,_projects__WEBPACK_IMPORTED_MODULE_0__.projects)();\n(0,_tasks__WEBPACK_IMPORTED_MODULE_1__.tasks)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": () => (/* binding */ projects)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\n\nfunction projects() {\n\n\tconst project = (name, color) => {\n\t\treturn {name, color};\n\t};\n\n\tconst allProjects = (() => {\n\t\tlet projects = [];\n\t\n\t\tfunction getProjects() {\n\t\t\treturn projects;\n\t\t};\n\t\n\t\tfunction addProject(newProject) {\n\t\t\tprojects.push(newProject);\n\t\t};\n\t\n\t\treturn {getProjects, addProject};\n\t})();\n\t\n\tallProjects.addProject(project(\"Home\", \"blue\"));\n\tallProjects.addProject(project(\"Work\", \"orange\"));\n\t\n\t(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)().updateProjectsList(allProjects.getProjects());\n\n\tconst projectFormContainer = document.querySelector(\"#new-project\");\n\tconst projectForm = projectFormContainer.querySelector(\"form\");\n\tconst newButton = document.querySelector(\"#new-project-button\");\n\tconst cancelButton = projectForm.querySelector(\".cancel\");\n\n\tnewButton.addEventListener(\"click\", () => {\n\t\tprojectFormContainer.style.display = 'inherit';\n\t});\n\n\tcancelButton.addEventListener(\"click\", (e) => {\n\t\te.preventDefault();\n\t\tprojectFormContainer.style.display = 'none';\n\t\tprojectForm.reset();\n\t});\n\t\n\tprojectForm.addEventListener(\"submit\", (e) => {\n\t\te.preventDefault();\n\t\tallProjects.addProject(project(\n\t\t\tprojectForm.querySelector('#name').value,\n\t\t\tprojectForm.querySelector('#color').value));\n\t\tprojectFormContainer.style.display = 'none';\n\t\tprojectForm.reset();\n\t\t(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)().updateProjectsList(allProjects.getProjects());\n\t\tupdateProjectsList();\n\t});\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\nfunction render() {\n\tconst projectsList = document.querySelector(\"#projects\");\n\tconst tasksList = document.querySelector(\"#tasks\");\n\n\tfunction updateProjectsList(list) {\n\t\tprojectsList.textContent = \"\";\n\t\tfor (let project in list) {\n\t\t\t_generateProject(list[project]);\n\t\t};\n\t};\n\t\n\tfunction _generateProject(project) {\n\t\tlet li = document.createElement(\"li\");\n\t\tlet color = document.createElement(\"div\");\n\t\tlet name = document.createElement(\"div\");\n\n\t\tcolor.classList.add(\"color\");\n\t\tcolor.textContent = \"●\";\n\t\tcolor.style.color = project.color;\n\t\t\n\t\tname.classList.add(\"project\");\n\t\tname.textContent = project.name;\n\t\n\t\tli.append(color, name);\n\t\tprojectsList.appendChild(li);\n\t};\n\n\tfunction updateTasksList(list) {\n\t\ttasksList.textContent = \"\";\n\t\tfor (let task in list) {\n\t\t\t_generateTask(list[task]);\n\t\t};\n\t};\n\n\tfunction _generateTask(task) {\n\t\tlet li = document.createElement(\"li\");\n\t\tlet input = document.createElement(\"input\");\n\t\tlet label = document.createElement(\"label\");\n\t\tlet edit = document.createElement(\"div\");\n\t\tlet due = document.createElement(\"div\");\n\t\tlet del = document.createElement(\"div\");\n\n\t\tinput.type = \"checkbox\";\n\t\tinput.name = task.title;\n\t\tlabel.setAttribute(\"for\", task.title);\n\t\tlabel.textContent = task.title;\n\t\tedit.classList.add(\"edit\");\n\t\tdue.classList.add(\"due\");\n\t\tif (task.due) due.textContent = \"Due \" + task.due;\n\t\tdel.classList.add(\"delete\");\n\t\tdel.textContent = \"X\";\n\n\t\tif (task.priority === \"Urgent\") {\n\t\t\tli.classList.add(\"urgent\");\n\t\t} else if (task.priority === \"High\") {\n\t\t\tli.classList.add(\"high\");\n\t\t};\n\n\t\tli.append(input, label, edit, due, del);\n\t\ttasksList.appendChild(li);\n\t};\n\n\treturn {updateProjectsList, updateTasksList};\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/render.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tasks\": () => (/* binding */ tasks)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\n\nfunction tasks() {\n\n\tconst task = (title, desc, due, priority) => {\n\t\treturn {title, desc, due, priority};\n\t};\n\n\tconst allTasks = (() => {\n\t\tlet tasks = [];\n\t\n\t\tfunction getTasks() {\n\t\t\treturn tasks;\n\t\t};\n\t\n\t\tfunction addTask(newTask) {\n\t\t\ttasks.push(newTask);\n\t\t};\n\t\n\t\treturn {getTasks, addTask};\n\t})();\n\n\tallTasks.addTask(task(\"Buy milk\", \"\", \"August 10\", \"Normal\"));\n\n\t(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)().updateTasksList(allTasks.getTasks());\n\n\tconst taskFormContainer = document.querySelector(\"#new-task\");\n\tconst taskForm = taskFormContainer.querySelector(\"form\");\n\tconst newButton = document.querySelector(\"#new-task-button\");\n\tconst cancelButton = taskForm.querySelector('.cancel');\n\n\tnewButton.addEventListener(\"click\", () => {\n\t\ttaskFormContainer.style.display = 'inherit';\n\t});\n\n\tcancelButton.addEventListener(\"click\", (e) => {\n\t\te.preventDefault();\n\t\ttaskFormContainer.style.display = 'none';\n\t\ttaskForm.reset();\n\t});\n\n\ttaskForm.addEventListener(\"submit\", (e) => {\n\t\te.preventDefault();\n\t\tallTasks.addTask(task(\n\t\t\ttaskForm.querySelector('#title').value,\n\t\t\ttaskForm.querySelector('#desc').value,\n\t\t\ttaskForm.querySelector('#due').value,\n\t\t\ttaskForm.querySelector('#priority').value));\n\t\ttaskFormContainer.style.display = 'none';\n\t\ttaskForm.reset();\n\t\t(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)().updateTasksList(allTasks.getTasks());\n\t});\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/tasks.js?");

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