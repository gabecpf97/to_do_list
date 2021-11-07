/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/createEle.js":
/*!*****************************!*\
  !*** ./src/js/createEle.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createEle (type, value, className) {
    const target = document.createElement(type);
    target.textContent = value;
    target.classList.add(className);
    return target;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEle);

/***/ }),

/***/ "./src/js/toDoItem.js":
/*!****************************!*\
  !*** ./src/js/toDoItem.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const toDoItem = (title, des, date, priority) => {
    let myTitle = title;
    let myDes = des;
    let myDate = date;
    let myPriority = priority;
    let myStatus = false;

    const getTitle = () => {
        return myTitle;
    }
    
    const getDes = () => {
        return myDes;
    };

    const setDes = (newDes) => {
        myDes = newDes;
    }

    const getDate = () => {
        return myDate;
    }

    const setDate = (newDate) => {
        myDate = newDate;
    }

    const getPriorty = () => {
        return myPriority;
    }

    const setPriorty = (newPriorty) => {
        myPriority = newPriorty;
    }

    const getStatus = () => {
        return myStatus;
    }

    const setStatus = (newStatus) => {
        myStatus = newStatus;
    }

    const toString = () => {
        return `${myTitle}, ${myDate}, ${myPriority}`;
    }

    return {getTitle, getDes, setDes, setDate, getDate, 
                getPriorty, setPriorty, getStatus, setStatus, toString};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDoItem);

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
/*!**********************************!*\
  !*** ./src/js/newItemControl.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createEle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createEle */ "./src/js/createEle.js");
/* harmony import */ var _toDoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoItem */ "./src/js/toDoItem.js");



const  newItemControl = () => {
    const showPrompt = () => {
        _displayPrompt();
    }

    const getItem = () => {
        _getItem();
    }

    return {showPrompt, getItem};
}

function _displayPrompt() {
    const content = document.querySelector('.content');
    const prompt_div = _appendPrompts(_promptQ());
    const fin_butt = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'Create', 'fin');
    fin_butt.addEventListener('click', _finClicked());
    content.appendChild(prompt_div);
    content.appendChild(fin_butt);
}

const _promptQ = () => {
    const askTitle = "";
    const askDes = "";
    const askDate = "";
    const askPriority = "";
    const askStatus = "";

    return {askTitle, askDes, askDate, askPriority, askStatus};
}

function _appendPrompts(prompts) {
    const prompt_div = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'prompts');
    const title_div = _createLableInput(prompts.askTitle, 'in_title');
    const des_div = _createLableInput(prompts.askDes, 'in_des');
    const date_div = _createLableInput(prompts.askDate, 'in_date');
    const priority_div = _createLableInput(prompts.askPriority, 'in_priority');
    const status_div = _createLableInput(prompts.askStatus, 'in_status');
    prompt_div.appendChild(title_div);
    prompt_div.appendChild(des_div);
    prompt_div.appendChild(date_div);
    prompt_div.appendChild(priority_div);
    prompt_div.appendChild(status_div);
    
    return prompt_div;
}

function _finClicked() {
    const input = _promptA();
    _removePrompt;
    // how to store it w/o global
}

function _createLableInput(question, className) {
    const q_div = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'q_div');
    const label = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('label', question, className);
    const answer = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('input', '', `${className}_ans`);
    q_div.appendChild(label);
    q_div.appendChild(answer);
    
    return q_div;
}

const _promptA = () => {
    const title = document.querySelector('.in_title_ans').value;
    const des = document.querySelector('.in_des_ans').value;
    const date = document.querySelector('.in_date_ans').value;
    const priority = document.querySelector('.in_priority_ans').value;
    const status = document.querySelector('.in_status_ans').value;

    return {title, des, date, priority, status};
}

function _removePrompt() {
    const content = document.querySelector('.content');
    content.removeChild(document.querySelector('.prompts'));
    content.removeChild(document.querySelector('.fin'));
}

function _getItem() {
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newItemControl);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3SXRlbUNvbnRyb2wuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7O0FDUHhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsUUFBUSxJQUFJLE9BQU8sSUFBSSxXQUFXO0FBQ3BEOztBQUVBLFlBQVk7QUFDWjtBQUNBOztBQUVBLGlFQUFlLFFBQVE7Ozs7OztVQ25EdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOb0M7QUFDRjs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0RBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLHVCQUF1QixzREFBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHNEQUFTO0FBQzNCLGtCQUFrQixzREFBUztBQUMzQixtQkFBbUIsc0RBQVMsaUJBQWlCLFVBQVU7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvY3JlYXRlRWxlLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvdG9Eb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvbmV3SXRlbUNvbnRyb2wuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlRWxlICh0eXBlLCB2YWx1ZSwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICB0YXJnZXQudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZSA7IiwiY29uc3QgdG9Eb0l0ZW0gPSAodGl0bGUsIGRlcywgZGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICBsZXQgbXlUaXRsZSA9IHRpdGxlO1xuICAgIGxldCBteURlcyA9IGRlcztcbiAgICBsZXQgbXlEYXRlID0gZGF0ZTtcbiAgICBsZXQgbXlQcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIGxldCBteVN0YXR1cyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBteVRpdGxlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBnZXREZXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBteURlcztcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0RGVzID0gKG5ld0RlcykgPT4ge1xuICAgICAgICBteURlcyA9IG5ld0RlcztcbiAgICB9XG5cbiAgICBjb25zdCBnZXREYXRlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbXlEYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldERhdGUgPSAobmV3RGF0ZSkgPT4ge1xuICAgICAgICBteURhdGUgPSBuZXdEYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFByaW9ydHkgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBteVByaW9yaXR5O1xuICAgIH1cblxuICAgIGNvbnN0IHNldFByaW9ydHkgPSAobmV3UHJpb3J0eSkgPT4ge1xuICAgICAgICBteVByaW9yaXR5ID0gbmV3UHJpb3J0eTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTdGF0dXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBteVN0YXR1cztcbiAgICB9XG5cbiAgICBjb25zdCBzZXRTdGF0dXMgPSAobmV3U3RhdHVzKSA9PiB7XG4gICAgICAgIG15U3RhdHVzID0gbmV3U3RhdHVzO1xuICAgIH1cblxuICAgIGNvbnN0IHRvU3RyaW5nID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYCR7bXlUaXRsZX0sICR7bXlEYXRlfSwgJHtteVByaW9yaXR5fWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtnZXRUaXRsZSwgZ2V0RGVzLCBzZXREZXMsIHNldERhdGUsIGdldERhdGUsIFxuICAgICAgICAgICAgICAgIGdldFByaW9ydHksIHNldFByaW9ydHksIGdldFN0YXR1cywgc2V0U3RhdHVzLCB0b1N0cmluZ307XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b0RvSXRlbTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVFbGUgZnJvbSBcIi4vY3JlYXRlRWxlXCI7XG5pbXBvcnQgdG9Eb0l0ZW0gZnJvbSBcIi4vdG9Eb0l0ZW1cIjtcblxuY29uc3QgIG5ld0l0ZW1Db250cm9sID0gKCkgPT4ge1xuICAgIGNvbnN0IHNob3dQcm9tcHQgPSAoKSA9PiB7XG4gICAgICAgIF9kaXNwbGF5UHJvbXB0KCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SXRlbSA9ICgpID0+IHtcbiAgICAgICAgX2dldEl0ZW0oKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3Nob3dQcm9tcHQsIGdldEl0ZW19O1xufVxuXG5mdW5jdGlvbiBfZGlzcGxheVByb21wdCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBwcm9tcHRfZGl2ID0gX2FwcGVuZFByb21wdHMoX3Byb21wdFEoKSk7XG4gICAgY29uc3QgZmluX2J1dHQgPSBjcmVhdGVFbGUoJ2J1dHRvbicsICdDcmVhdGUnLCAnZmluJyk7XG4gICAgZmluX2J1dHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfZmluQ2xpY2tlZCgpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb21wdF9kaXYpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZmluX2J1dHQpO1xufVxuXG5jb25zdCBfcHJvbXB0USA9ICgpID0+IHtcbiAgICBjb25zdCBhc2tUaXRsZSA9IFwiXCI7XG4gICAgY29uc3QgYXNrRGVzID0gXCJcIjtcbiAgICBjb25zdCBhc2tEYXRlID0gXCJcIjtcbiAgICBjb25zdCBhc2tQcmlvcml0eSA9IFwiXCI7XG4gICAgY29uc3QgYXNrU3RhdHVzID0gXCJcIjtcblxuICAgIHJldHVybiB7YXNrVGl0bGUsIGFza0RlcywgYXNrRGF0ZSwgYXNrUHJpb3JpdHksIGFza1N0YXR1c307XG59XG5cbmZ1bmN0aW9uIF9hcHBlbmRQcm9tcHRzKHByb21wdHMpIHtcbiAgICBjb25zdCBwcm9tcHRfZGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgJ3Byb21wdHMnKTtcbiAgICBjb25zdCB0aXRsZV9kaXYgPSBfY3JlYXRlTGFibGVJbnB1dChwcm9tcHRzLmFza1RpdGxlLCAnaW5fdGl0bGUnKTtcbiAgICBjb25zdCBkZXNfZGl2ID0gX2NyZWF0ZUxhYmxlSW5wdXQocHJvbXB0cy5hc2tEZXMsICdpbl9kZXMnKTtcbiAgICBjb25zdCBkYXRlX2RpdiA9IF9jcmVhdGVMYWJsZUlucHV0KHByb21wdHMuYXNrRGF0ZSwgJ2luX2RhdGUnKTtcbiAgICBjb25zdCBwcmlvcml0eV9kaXYgPSBfY3JlYXRlTGFibGVJbnB1dChwcm9tcHRzLmFza1ByaW9yaXR5LCAnaW5fcHJpb3JpdHknKTtcbiAgICBjb25zdCBzdGF0dXNfZGl2ID0gX2NyZWF0ZUxhYmxlSW5wdXQocHJvbXB0cy5hc2tTdGF0dXMsICdpbl9zdGF0dXMnKTtcbiAgICBwcm9tcHRfZGl2LmFwcGVuZENoaWxkKHRpdGxlX2Rpdik7XG4gICAgcHJvbXB0X2Rpdi5hcHBlbmRDaGlsZChkZXNfZGl2KTtcbiAgICBwcm9tcHRfZGl2LmFwcGVuZENoaWxkKGRhdGVfZGl2KTtcbiAgICBwcm9tcHRfZGl2LmFwcGVuZENoaWxkKHByaW9yaXR5X2Rpdik7XG4gICAgcHJvbXB0X2Rpdi5hcHBlbmRDaGlsZChzdGF0dXNfZGl2KTtcbiAgICBcbiAgICByZXR1cm4gcHJvbXB0X2Rpdjtcbn1cblxuZnVuY3Rpb24gX2ZpbkNsaWNrZWQoKSB7XG4gICAgY29uc3QgaW5wdXQgPSBfcHJvbXB0QSgpO1xuICAgIF9yZW1vdmVQcm9tcHQ7XG4gICAgLy8gaG93IHRvIHN0b3JlIGl0IHcvbyBnbG9iYWxcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUxhYmxlSW5wdXQocXVlc3Rpb24sIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IHFfZGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgJ3FfZGl2Jyk7XG4gICAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGUoJ2xhYmVsJywgcXVlc3Rpb24sIGNsYXNzTmFtZSk7XG4gICAgY29uc3QgYW5zd2VyID0gY3JlYXRlRWxlKCdpbnB1dCcsICcnLCBgJHtjbGFzc05hbWV9X2Fuc2ApO1xuICAgIHFfZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBxX2Rpdi5hcHBlbmRDaGlsZChhbnN3ZXIpO1xuICAgIFxuICAgIHJldHVybiBxX2Rpdjtcbn1cblxuY29uc3QgX3Byb21wdEEgPSAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5fdGl0bGVfYW5zJykudmFsdWU7XG4gICAgY29uc3QgZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX2Rlc19hbnMnKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX2RhdGVfYW5zJykudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5fcHJpb3JpdHlfYW5zJykudmFsdWU7XG4gICAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX3N0YXR1c19hbnMnKS52YWx1ZTtcblxuICAgIHJldHVybiB7dGl0bGUsIGRlcywgZGF0ZSwgcHJpb3JpdHksIHN0YXR1c307XG59XG5cbmZ1bmN0aW9uIF9yZW1vdmVQcm9tcHQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvbXB0cycpKTtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maW4nKSk7XG59XG5cbmZ1bmN0aW9uIF9nZXRJdGVtKCkge1xuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXdJdGVtQ29udHJvbDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=