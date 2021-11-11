/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/listControl.js":
/*!*******************************!*\
  !*** ./src/js/listControl.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const listControl = () => {
    const projects = [];

    const getProjects = () => {
        return projects;
    }

    const addList = (list) => {
        projects.push(list);
    }

    const toString = () => {
        let projectString = "";
        projects.forEach(list => {
            projectString += '{' + list.toString() + '}|';
        })
        projectString = projectString.substring(0, projectString.length - 1);
        return projectString;
    }    

    return {getProjects, addList, toString};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listControl);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/js/storeLocally.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _listControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listControl */ "./src/js/listControl.js");


const localProjects = () => {
    function storeProject(projects) {
        localStorage.setItem('toDoProjects', JSON.stringify(projects.toString()));
    }

    function getFromLocal() {
        // let localProjects = localStorage.getItem('toDoProjects');
        // const projects = listControl();
        // _getListFromProject(localProjects);
    }

    return {storeProject, getFromLocal};
}

// function _getListFromProject(str) {
//     return str.substring(1, str.length - 1).split('|');
// }

// function _getItemFromList(str) {
//     const itemArr = [];
//     const name, items = str.substring(1, str.length - 1).split(':');
//     items = items.split('.');
//     items.forEach(item => {

//     });
//     return itemArr;
// }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localProjects);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVMb2NhbGx5LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isd0JBQXdCO0FBQ3ZELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsaUVBQWUsV0FBVzs7Ozs7O1VDdkIxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsYUFBYSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy9saXN0Q29udHJvbC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy9zdG9yZUxvY2FsbHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbGlzdENvbnRyb2wgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IFtdO1xyXG5cclxuICAgIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBwcm9qZWN0cztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgICBwcm9qZWN0cy5wdXNoKGxpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvU3RyaW5nID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBwcm9qZWN0U3RyaW5nID0gXCJcIjtcclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKGxpc3QgPT4ge1xyXG4gICAgICAgICAgICBwcm9qZWN0U3RyaW5nICs9ICd7JyArIGxpc3QudG9TdHJpbmcoKSArICd9fCc7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBwcm9qZWN0U3RyaW5nID0gcHJvamVjdFN0cmluZy5zdWJzdHJpbmcoMCwgcHJvamVjdFN0cmluZy5sZW5ndGggLSAxKTtcclxuICAgICAgICByZXR1cm4gcHJvamVjdFN0cmluZztcclxuICAgIH0gICAgXHJcblxyXG4gICAgcmV0dXJuIHtnZXRQcm9qZWN0cywgYWRkTGlzdCwgdG9TdHJpbmd9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsaXN0Q29udHJvbDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsaXN0Q29udHJvbCBmcm9tIFwiLi9saXN0Q29udHJvbFwiO1xyXG5cclxuY29uc3QgbG9jYWxQcm9qZWN0cyA9ICgpID0+IHtcclxuICAgIGZ1bmN0aW9uIHN0b3JlUHJvamVjdChwcm9qZWN0cykge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cy50b1N0cmluZygpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RnJvbUxvY2FsKCkge1xyXG4gICAgICAgIC8vIGxldCBsb2NhbFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9Qcm9qZWN0cycpO1xyXG4gICAgICAgIC8vIGNvbnN0IHByb2plY3RzID0gbGlzdENvbnRyb2woKTtcclxuICAgICAgICAvLyBfZ2V0TGlzdEZyb21Qcm9qZWN0KGxvY2FsUHJvamVjdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7c3RvcmVQcm9qZWN0LCBnZXRGcm9tTG9jYWx9O1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBfZ2V0TGlzdEZyb21Qcm9qZWN0KHN0cikge1xyXG4vLyAgICAgcmV0dXJuIHN0ci5zdWJzdHJpbmcoMSwgc3RyLmxlbmd0aCAtIDEpLnNwbGl0KCd8Jyk7XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIF9nZXRJdGVtRnJvbUxpc3Qoc3RyKSB7XHJcbi8vICAgICBjb25zdCBpdGVtQXJyID0gW107XHJcbi8vICAgICBjb25zdCBuYW1lLCBpdGVtcyA9IHN0ci5zdWJzdHJpbmcoMSwgc3RyLmxlbmd0aCAtIDEpLnNwbGl0KCc6Jyk7XHJcbi8vICAgICBpdGVtcyA9IGl0ZW1zLnNwbGl0KCcuJyk7XHJcbi8vICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cclxuLy8gICAgIH0pO1xyXG4vLyAgICAgcmV0dXJuIGl0ZW1BcnI7XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvY2FsUHJvamVjdHM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9