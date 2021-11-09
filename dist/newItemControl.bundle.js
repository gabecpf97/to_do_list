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

/***/ "./src/js/createOnScreen.js":
/*!**********************************!*\
  !*** ./src/js/createOnScreen.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createEle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createEle */ "./src/js/createEle.js");
// show item and other on html file
// DOM stuff


function showList(list) {
    const list_div = document.querySelector('.list');
    _clearScreen(list_div);
    list.getList().forEach(item => {
        _showItem(list_div, item);
    });
}

function _showItem(list, item) {
    list.appendChild(_appendItem(_getItem(item)));
}

function _appendItem (item) {
    const itemDiv = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'item');
    itemDiv.appendChild(item.title);
    itemDiv.appendChild(item.des);
    itemDiv.appendChild(item.date);
    itemDiv.appendChild(item.priority);
    itemDiv.appendChild(item.status);
    return itemDiv;
}

function _getItem(item) {
    const title = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', item.getTitle(), 'title');
    const des = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', item.getDes(), 'des');
    const date = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', item.getDate(), 'date');
    const priority = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', item.getPriorty(), 'priorty');
    const status = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', item.getStatus(), 'status');
    return {title, des, date, priority, status};
}
function _clearScreen(list_div) {
    while(list_div.firstChild != null)
        list_div.removeChild(list_div.firstChild);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showList);

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
/* harmony import */ var _createOnScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createOnScreen */ "./src/js/createOnScreen.js");




const  newItemControl = () => {
    const storeNewItem = (list) => {
        _displayPrompt();
        _storeItem(list);
    }

    return {storeNewItem};
}

function _displayPrompt() {
    const content = document.querySelector('.content');
    const prompt_div = _appendPrompts(_promptQ());
    const fin_butt = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'Create', 'fin');
    content.appendChild(prompt_div);
    content.appendChild(fin_butt);
}

const _promptQ = () => {
    const askTitle = "To do item name";
    const askDes = "to do item description";
    const askDate = "item due date";
    const askPriority = "item's priority";

    return {askTitle, askDes, askDate, askPriority};
}

function _appendPrompts(prompts) {
    const prompt_div = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'prompts');
    const title_div = _createLableInput(prompts.askTitle, 'in_title');
    const des_div = _createLableInput(prompts.askDes, 'in_des');
    const date_div = _createLableInput(prompts.askDate, 'in_date');
    const priority_div = _createLableInput(prompts.askPriority, 'in_priority');
    prompt_div.appendChild(title_div);
    prompt_div.appendChild(des_div);
    prompt_div.appendChild(date_div);
    prompt_div.appendChild(priority_div);
    
    return prompt_div;
}

function _createLableInput(question, className) {
    const q_div = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'q_div');
    const label = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('label', question, className);
    const answer = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('input', '', `${className}_ans`);
    q_div.appendChild(label);
    q_div.appendChild(answer);
    
    return q_div;
}

function _storeItem (list) {
    document.querySelector('.fin').addEventListener('click', () => {
        const newItem = _getItem();
        _storeIt(list, newItem);
    });
}

function _getItem() {
    let input = _promptA();
    _removePrompt();
    return inputToItem(input);
}

const _promptA = () => {
    const title = document.querySelector('.in_title_ans').value;
    const des = document.querySelector('.in_des_ans').value;
    const date = document.querySelector('.in_date_ans').value;
    const priority = document.querySelector('.in_priority_ans').value;

    return {title, des, date, priority};
}

function inputToItem(input) {
    return (0,_toDoItem__WEBPACK_IMPORTED_MODULE_1__["default"])(input.title, input.des, input.date, input.priority);
}

function _removePrompt() {
    const content = document.querySelector('.content');
    content.removeChild(document.querySelector('.prompts'));
    content.removeChild(document.querySelector('.fin'));
}

function _storeIt(list, newItem) {
    list.addItem(newItem);
    (0,_createOnScreen__WEBPACK_IMPORTED_MODULE_2__["default"])(list);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newItemControl);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3SXRlbUNvbnRyb2wuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7OztBQ1B4QjtBQUNBO0FBQ29DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixzREFBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixzREFBUztBQUMzQixnQkFBZ0Isc0RBQVM7QUFDekIsaUJBQWlCLHNEQUFTO0FBQzFCLHFCQUFxQixzREFBUztBQUM5QixtQkFBbUIsc0RBQVM7QUFDNUIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUN2Q3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsUUFBUSxJQUFJLE9BQU8sSUFBSSxXQUFXO0FBQ3BEOztBQUVBLFlBQVk7QUFDWjtBQUNBOztBQUVBLGlFQUFlLFFBQVE7Ozs7OztVQ25EdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm9DO0FBQ0Y7QUFDSTs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNEQUFTO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLHVCQUF1QixzREFBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHNEQUFTO0FBQzNCLGtCQUFrQixzREFBUztBQUMzQixtQkFBbUIsc0RBQVMsaUJBQWlCLFVBQVU7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBO0FBQ0EsV0FBVyxxREFBUTtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDJEQUFNO0FBQ1Y7O0FBRUEsaUVBQWUsY0FBYyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy9jcmVhdGVFbGUuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy9jcmVhdGVPblNjcmVlbi5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL3RvRG9JdGVtLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL25ld0l0ZW1Db250cm9sLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUVsZSAodHlwZSwgdmFsdWUsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgdGFyZ2V0LnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGUgOyIsIi8vIHNob3cgaXRlbSBhbmQgb3RoZXIgb24gaHRtbCBmaWxlXG4vLyBET00gc3R1ZmZcbmltcG9ydCBjcmVhdGVFbGUgZnJvbSBcIi4vY3JlYXRlRWxlXCI7XG5cbmZ1bmN0aW9uIHNob3dMaXN0KGxpc3QpIHtcbiAgICBjb25zdCBsaXN0X2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XG4gICAgX2NsZWFyU2NyZWVuKGxpc3RfZGl2KTtcbiAgICBsaXN0LmdldExpc3QoKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBfc2hvd0l0ZW0obGlzdF9kaXYsIGl0ZW0pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBfc2hvd0l0ZW0obGlzdCwgaXRlbSkge1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoX2FwcGVuZEl0ZW0oX2dldEl0ZW0oaXRlbSkpKTtcbn1cblxuZnVuY3Rpb24gX2FwcGVuZEl0ZW0gKGl0ZW0pIHtcbiAgICBjb25zdCBpdGVtRGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgJ2l0ZW0nKTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW0udGl0bGUpO1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbS5kZXMpO1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbS5kYXRlKTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW0ucHJpb3JpdHkpO1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbS5zdGF0dXMpO1xuICAgIHJldHVybiBpdGVtRGl2O1xufVxuXG5mdW5jdGlvbiBfZ2V0SXRlbShpdGVtKSB7XG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGUoJ2RpdicsIGl0ZW0uZ2V0VGl0bGUoKSwgJ3RpdGxlJyk7XG4gICAgY29uc3QgZGVzID0gY3JlYXRlRWxlKCdkaXYnLCBpdGVtLmdldERlcygpLCAnZGVzJyk7XG4gICAgY29uc3QgZGF0ZSA9IGNyZWF0ZUVsZSgnZGl2JywgaXRlbS5nZXREYXRlKCksICdkYXRlJyk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBjcmVhdGVFbGUoJ2RpdicsIGl0ZW0uZ2V0UHJpb3J0eSgpLCAncHJpb3J0eScpO1xuICAgIGNvbnN0IHN0YXR1cyA9IGNyZWF0ZUVsZSgnZGl2JywgaXRlbS5nZXRTdGF0dXMoKSwgJ3N0YXR1cycpO1xuICAgIHJldHVybiB7dGl0bGUsIGRlcywgZGF0ZSwgcHJpb3JpdHksIHN0YXR1c307XG59XG5mdW5jdGlvbiBfY2xlYXJTY3JlZW4obGlzdF9kaXYpIHtcbiAgICB3aGlsZShsaXN0X2Rpdi5maXJzdENoaWxkICE9IG51bGwpXG4gICAgICAgIGxpc3RfZGl2LnJlbW92ZUNoaWxkKGxpc3RfZGl2LmZpcnN0Q2hpbGQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaG93TGlzdDsiLCJjb25zdCB0b0RvSXRlbSA9ICh0aXRsZSwgZGVzLCBkYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIGxldCBteVRpdGxlID0gdGl0bGU7XG4gICAgbGV0IG15RGVzID0gZGVzO1xuICAgIGxldCBteURhdGUgPSBkYXRlO1xuICAgIGxldCBteVByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgbGV0IG15U3RhdHVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG15VGl0bGU7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGdldERlcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG15RGVzO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXREZXMgPSAobmV3RGVzKSA9PiB7XG4gICAgICAgIG15RGVzID0gbmV3RGVzO1xuICAgIH1cblxuICAgIGNvbnN0IGdldERhdGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBteURhdGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RGF0ZSA9IChuZXdEYXRlKSA9PiB7XG4gICAgICAgIG15RGF0ZSA9IG5ld0RhdGU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJpb3J0eSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG15UHJpb3JpdHk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UHJpb3J0eSA9IChuZXdQcmlvcnR5KSA9PiB7XG4gICAgICAgIG15UHJpb3JpdHkgPSBuZXdQcmlvcnR5O1xuICAgIH1cblxuICAgIGNvbnN0IGdldFN0YXR1cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG15U3RhdHVzO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFN0YXR1cyA9IChuZXdTdGF0dXMpID0+IHtcbiAgICAgICAgbXlTdGF0dXMgPSBuZXdTdGF0dXM7XG4gICAgfVxuXG4gICAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBgJHtteVRpdGxlfSwgJHtteURhdGV9LCAke215UHJpb3JpdHl9YDtcbiAgICB9XG5cbiAgICByZXR1cm4ge2dldFRpdGxlLCBnZXREZXMsIHNldERlcywgc2V0RGF0ZSwgZ2V0RGF0ZSwgXG4gICAgICAgICAgICAgICAgZ2V0UHJpb3J0eSwgc2V0UHJpb3J0eSwgZ2V0U3RhdHVzLCBzZXRTdGF0dXMsIHRvU3RyaW5nfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvRG9JdGVtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZUVsZSBmcm9tIFwiLi9jcmVhdGVFbGVcIjtcbmltcG9ydCB0b0RvSXRlbSBmcm9tIFwiLi90b0RvSXRlbVwiO1xuaW1wb3J0IHNob3dJdCBmcm9tIFwiLi9jcmVhdGVPblNjcmVlblwiO1xuXG5jb25zdCAgbmV3SXRlbUNvbnRyb2wgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmVOZXdJdGVtID0gKGxpc3QpID0+IHtcbiAgICAgICAgX2Rpc3BsYXlQcm9tcHQoKTtcbiAgICAgICAgX3N0b3JlSXRlbShsaXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3N0b3JlTmV3SXRlbX07XG59XG5cbmZ1bmN0aW9uIF9kaXNwbGF5UHJvbXB0KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IHByb21wdF9kaXYgPSBfYXBwZW5kUHJvbXB0cyhfcHJvbXB0USgpKTtcbiAgICBjb25zdCBmaW5fYnV0dCA9IGNyZWF0ZUVsZSgnYnV0dG9uJywgJ0NyZWF0ZScsICdmaW4nKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb21wdF9kaXYpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZmluX2J1dHQpO1xufVxuXG5jb25zdCBfcHJvbXB0USA9ICgpID0+IHtcbiAgICBjb25zdCBhc2tUaXRsZSA9IFwiVG8gZG8gaXRlbSBuYW1lXCI7XG4gICAgY29uc3QgYXNrRGVzID0gXCJ0byBkbyBpdGVtIGRlc2NyaXB0aW9uXCI7XG4gICAgY29uc3QgYXNrRGF0ZSA9IFwiaXRlbSBkdWUgZGF0ZVwiO1xuICAgIGNvbnN0IGFza1ByaW9yaXR5ID0gXCJpdGVtJ3MgcHJpb3JpdHlcIjtcblxuICAgIHJldHVybiB7YXNrVGl0bGUsIGFza0RlcywgYXNrRGF0ZSwgYXNrUHJpb3JpdHl9O1xufVxuXG5mdW5jdGlvbiBfYXBwZW5kUHJvbXB0cyhwcm9tcHRzKSB7XG4gICAgY29uc3QgcHJvbXB0X2RpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdwcm9tcHRzJyk7XG4gICAgY29uc3QgdGl0bGVfZGl2ID0gX2NyZWF0ZUxhYmxlSW5wdXQocHJvbXB0cy5hc2tUaXRsZSwgJ2luX3RpdGxlJyk7XG4gICAgY29uc3QgZGVzX2RpdiA9IF9jcmVhdGVMYWJsZUlucHV0KHByb21wdHMuYXNrRGVzLCAnaW5fZGVzJyk7XG4gICAgY29uc3QgZGF0ZV9kaXYgPSBfY3JlYXRlTGFibGVJbnB1dChwcm9tcHRzLmFza0RhdGUsICdpbl9kYXRlJyk7XG4gICAgY29uc3QgcHJpb3JpdHlfZGl2ID0gX2NyZWF0ZUxhYmxlSW5wdXQocHJvbXB0cy5hc2tQcmlvcml0eSwgJ2luX3ByaW9yaXR5Jyk7XG4gICAgcHJvbXB0X2Rpdi5hcHBlbmRDaGlsZCh0aXRsZV9kaXYpO1xuICAgIHByb21wdF9kaXYuYXBwZW5kQ2hpbGQoZGVzX2Rpdik7XG4gICAgcHJvbXB0X2Rpdi5hcHBlbmRDaGlsZChkYXRlX2Rpdik7XG4gICAgcHJvbXB0X2Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eV9kaXYpO1xuICAgIFxuICAgIHJldHVybiBwcm9tcHRfZGl2O1xufVxuXG5mdW5jdGlvbiBfY3JlYXRlTGFibGVJbnB1dChxdWVzdGlvbiwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgcV9kaXYgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCAncV9kaXYnKTtcbiAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUVsZSgnbGFiZWwnLCBxdWVzdGlvbiwgY2xhc3NOYW1lKTtcbiAgICBjb25zdCBhbnN3ZXIgPSBjcmVhdGVFbGUoJ2lucHV0JywgJycsIGAke2NsYXNzTmFtZX1fYW5zYCk7XG4gICAgcV9kaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIHFfZGl2LmFwcGVuZENoaWxkKGFuc3dlcik7XG4gICAgXG4gICAgcmV0dXJuIHFfZGl2O1xufVxuXG5mdW5jdGlvbiBfc3RvcmVJdGVtIChsaXN0KSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdJdGVtID0gX2dldEl0ZW0oKTtcbiAgICAgICAgX3N0b3JlSXQobGlzdCwgbmV3SXRlbSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIF9nZXRJdGVtKCkge1xuICAgIGxldCBpbnB1dCA9IF9wcm9tcHRBKCk7XG4gICAgX3JlbW92ZVByb21wdCgpO1xuICAgIHJldHVybiBpbnB1dFRvSXRlbShpbnB1dCk7XG59XG5cbmNvbnN0IF9wcm9tcHRBID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX3RpdGxlX2FucycpLnZhbHVlO1xuICAgIGNvbnN0IGRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbl9kZXNfYW5zJykudmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbl9kYXRlX2FucycpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX3ByaW9yaXR5X2FucycpLnZhbHVlO1xuXG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzLCBkYXRlLCBwcmlvcml0eX07XG59XG5cbmZ1bmN0aW9uIGlucHV0VG9JdGVtKGlucHV0KSB7XG4gICAgcmV0dXJuIHRvRG9JdGVtKGlucHV0LnRpdGxlLCBpbnB1dC5kZXMsIGlucHV0LmRhdGUsIGlucHV0LnByaW9yaXR5KTtcbn1cblxuZnVuY3Rpb24gX3JlbW92ZVByb21wdCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9tcHRzJykpO1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbicpKTtcbn1cblxuZnVuY3Rpb24gX3N0b3JlSXQobGlzdCwgbmV3SXRlbSkge1xuICAgIGxpc3QuYWRkSXRlbShuZXdJdGVtKTtcbiAgICBzaG93SXQobGlzdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ld0l0ZW1Db250cm9sOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==