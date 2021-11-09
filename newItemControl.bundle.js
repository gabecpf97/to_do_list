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
    itemDiv.appendChild(_createDeleteButt());
    return itemDiv;
}

function _getItem(item) {
    const title = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', item.getTitle(), 'title');
    const des = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', item.getDes(), 'des');
    const date = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', item.getDate(), 'date');
    const priority = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', item.getPriorty(), 'priorty');
    const status = _createStatusDiv(item);
    return {title, des, date, priority, status};
}

function _clearScreen(list_div) {
    while(list_div.firstChild != null)
        list_div.removeChild(list_div.firstChild);
}

function _createStatusDiv(item) {
    const statusDiv = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'status');
    const statusLabel = _createLabel();
    const statusCheck = _createCheck(item);
    statusDiv.appendChild(statusLabel);
    statusDiv.appendChild(statusCheck);
    return statusDiv;
}

function _createLabel() {
    const statusLabel = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('label', 'Completed?', 'status_l');
    statusLabel.htmlFor = 'status';
    return statusLabel;
}

function _createCheck(item) {
    const statusCheck = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('input', '', 'status_c');
    statusCheck.type = 'checkbox';
    statusCheck.name = 'status';
    if (item.getStatus())
        statusCheck.checked = true;
    statusCheck.addEventListener('change', item.setStatus());
    return statusCheck;
}

function _createDeleteButt() {
    const deleButt = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'Delete', 'delete');
    deleButt.addEventListener('click', e => _removeItem(e));
    return deleButt;
}

function _removeItem(e) {
    const list = document.querySelector('.list');
    list.removeChild(e.target.parentNode);
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

    const setStatus = () => {
        myStatus = !myStatus;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3SXRlbUNvbnRyb2wuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7OztBQ1B4QjtBQUNBO0FBQ29DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixzREFBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHNEQUFTO0FBQzNCLGdCQUFnQixzREFBUztBQUN6QixpQkFBaUIsc0RBQVM7QUFDMUIscUJBQXFCLHNEQUFTO0FBQzlCO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHNEQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixzREFBUztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isc0RBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsc0RBQVM7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7O0FDN0V2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLFFBQVEsSUFBSSxPQUFPLElBQUksV0FBVztBQUNwRDs7QUFFQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7VUNuRHZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNGO0FBQ0k7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzREFBUztBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQSx1QkFBdUIsc0RBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixzREFBUztBQUMzQixrQkFBa0Isc0RBQVM7QUFDM0IsbUJBQW1CLHNEQUFTLGlCQUFpQixVQUFVO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFdBQVcscURBQVE7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSwyREFBTTtBQUNWOztBQUVBLGlFQUFlLGNBQWMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvY3JlYXRlRWxlLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvY3JlYXRlT25TY3JlZW4uanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy90b0RvSXRlbS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy9uZXdJdGVtQ29udHJvbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVFbGUgKHR5cGUsIHZhbHVlLCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIHRhcmdldC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlIDsiLCIvLyBzaG93IGl0ZW0gYW5kIG90aGVyIG9uIGh0bWwgZmlsZVxuLy8gRE9NIHN0dWZmXG5pbXBvcnQgY3JlYXRlRWxlIGZyb20gXCIuL2NyZWF0ZUVsZVwiO1xuXG5mdW5jdGlvbiBzaG93TGlzdChsaXN0KSB7XG4gICAgY29uc3QgbGlzdF9kaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpO1xuICAgIF9jbGVhclNjcmVlbihsaXN0X2Rpdik7XG4gICAgbGlzdC5nZXRMaXN0KCkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgX3Nob3dJdGVtKGxpc3RfZGl2LCBpdGVtKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gX3Nob3dJdGVtKGxpc3QsIGl0ZW0pIHtcbiAgICBsaXN0LmFwcGVuZENoaWxkKF9hcHBlbmRJdGVtKF9nZXRJdGVtKGl0ZW0pKSk7XG59XG5cbmZ1bmN0aW9uIF9hcHBlbmRJdGVtIChpdGVtKSB7XG4gICAgY29uc3QgaXRlbURpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdpdGVtJyk7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtLnRpdGxlKTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW0uZGVzKTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW0uZGF0ZSk7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtLnByaW9yaXR5KTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW0uc3RhdHVzKTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKF9jcmVhdGVEZWxldGVCdXR0KCkpO1xuICAgIHJldHVybiBpdGVtRGl2O1xufVxuXG5mdW5jdGlvbiBfZ2V0SXRlbShpdGVtKSB7XG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGUoJ2RpdicsIGl0ZW0uZ2V0VGl0bGUoKSwgJ3RpdGxlJyk7XG4gICAgY29uc3QgZGVzID0gY3JlYXRlRWxlKCdkaXYnLCBpdGVtLmdldERlcygpLCAnZGVzJyk7XG4gICAgY29uc3QgZGF0ZSA9IGNyZWF0ZUVsZSgnZGl2JywgaXRlbS5nZXREYXRlKCksICdkYXRlJyk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBjcmVhdGVFbGUoJ2RpdicsIGl0ZW0uZ2V0UHJpb3J0eSgpLCAncHJpb3J0eScpO1xuICAgIGNvbnN0IHN0YXR1cyA9IF9jcmVhdGVTdGF0dXNEaXYoaXRlbSk7XG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzLCBkYXRlLCBwcmlvcml0eSwgc3RhdHVzfTtcbn1cblxuZnVuY3Rpb24gX2NsZWFyU2NyZWVuKGxpc3RfZGl2KSB7XG4gICAgd2hpbGUobGlzdF9kaXYuZmlyc3RDaGlsZCAhPSBudWxsKVxuICAgICAgICBsaXN0X2Rpdi5yZW1vdmVDaGlsZChsaXN0X2Rpdi5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVN0YXR1c0RpdihpdGVtKSB7XG4gICAgY29uc3Qgc3RhdHVzRGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgJ3N0YXR1cycpO1xuICAgIGNvbnN0IHN0YXR1c0xhYmVsID0gX2NyZWF0ZUxhYmVsKCk7XG4gICAgY29uc3Qgc3RhdHVzQ2hlY2sgPSBfY3JlYXRlQ2hlY2soaXRlbSk7XG4gICAgc3RhdHVzRGl2LmFwcGVuZENoaWxkKHN0YXR1c0xhYmVsKTtcbiAgICBzdGF0dXNEaXYuYXBwZW5kQ2hpbGQoc3RhdHVzQ2hlY2spO1xuICAgIHJldHVybiBzdGF0dXNEaXY7XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVMYWJlbCgpIHtcbiAgICBjb25zdCBzdGF0dXNMYWJlbCA9IGNyZWF0ZUVsZSgnbGFiZWwnLCAnQ29tcGxldGVkPycsICdzdGF0dXNfbCcpO1xuICAgIHN0YXR1c0xhYmVsLmh0bWxGb3IgPSAnc3RhdHVzJztcbiAgICByZXR1cm4gc3RhdHVzTGFiZWw7XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDaGVjayhpdGVtKSB7XG4gICAgY29uc3Qgc3RhdHVzQ2hlY2sgPSBjcmVhdGVFbGUoJ2lucHV0JywgJycsICdzdGF0dXNfYycpO1xuICAgIHN0YXR1c0NoZWNrLnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIHN0YXR1c0NoZWNrLm5hbWUgPSAnc3RhdHVzJztcbiAgICBpZiAoaXRlbS5nZXRTdGF0dXMoKSlcbiAgICAgICAgc3RhdHVzQ2hlY2suY2hlY2tlZCA9IHRydWU7XG4gICAgc3RhdHVzQ2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaXRlbS5zZXRTdGF0dXMoKSk7XG4gICAgcmV0dXJuIHN0YXR1c0NoZWNrO1xufVxuXG5mdW5jdGlvbiBfY3JlYXRlRGVsZXRlQnV0dCgpIHtcbiAgICBjb25zdCBkZWxlQnV0dCA9IGNyZWF0ZUVsZSgnYnV0dG9uJywgJ0RlbGV0ZScsICdkZWxldGUnKTtcbiAgICBkZWxlQnV0dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gX3JlbW92ZUl0ZW0oZSkpO1xuICAgIHJldHVybiBkZWxlQnV0dDtcbn1cblxuZnVuY3Rpb24gX3JlbW92ZUl0ZW0oZSkge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpO1xuICAgIGxpc3QucmVtb3ZlQ2hpbGQoZS50YXJnZXQucGFyZW50Tm9kZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dMaXN0OyIsImNvbnN0IHRvRG9JdGVtID0gKHRpdGxlLCBkZXMsIGRhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgbGV0IG15VGl0bGUgPSB0aXRsZTtcbiAgICBsZXQgbXlEZXMgPSBkZXM7XG4gICAgbGV0IG15RGF0ZSA9IGRhdGU7XG4gICAgbGV0IG15UHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBsZXQgbXlTdGF0dXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbXlUaXRsZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZ2V0RGVzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbXlEZXM7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldERlcyA9IChuZXdEZXMpID0+IHtcbiAgICAgICAgbXlEZXMgPSBuZXdEZXM7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG15RGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXREYXRlID0gKG5ld0RhdGUpID0+IHtcbiAgICAgICAgbXlEYXRlID0gbmV3RGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcmlvcnR5ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbXlQcmlvcml0eTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQcmlvcnR5ID0gKG5ld1ByaW9ydHkpID0+IHtcbiAgICAgICAgbXlQcmlvcml0eSA9IG5ld1ByaW9ydHk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U3RhdHVzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbXlTdGF0dXM7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0U3RhdHVzID0gKCkgPT4ge1xuICAgICAgICBteVN0YXR1cyA9ICFteVN0YXR1cztcbiAgICB9XG5cbiAgICBjb25zdCB0b1N0cmluZyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGAke215VGl0bGV9LCAke215RGF0ZX0sICR7bXlQcmlvcml0eX1gO1xuICAgIH1cblxuICAgIHJldHVybiB7Z2V0VGl0bGUsIGdldERlcywgc2V0RGVzLCBzZXREYXRlLCBnZXREYXRlLCBcbiAgICAgICAgICAgICAgICBnZXRQcmlvcnR5LCBzZXRQcmlvcnR5LCBnZXRTdGF0dXMsIHNldFN0YXR1cywgdG9TdHJpbmd9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9Eb0l0ZW07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlRWxlIGZyb20gXCIuL2NyZWF0ZUVsZVwiO1xuaW1wb3J0IHRvRG9JdGVtIGZyb20gXCIuL3RvRG9JdGVtXCI7XG5pbXBvcnQgc2hvd0l0IGZyb20gXCIuL2NyZWF0ZU9uU2NyZWVuXCI7XG5cbmNvbnN0ICBuZXdJdGVtQ29udHJvbCA9ICgpID0+IHtcbiAgICBjb25zdCBzdG9yZU5ld0l0ZW0gPSAobGlzdCkgPT4ge1xuICAgICAgICBfZGlzcGxheVByb21wdCgpO1xuICAgICAgICBfc3RvcmVJdGVtKGxpc3QpO1xuICAgIH1cblxuICAgIHJldHVybiB7c3RvcmVOZXdJdGVtfTtcbn1cblxuZnVuY3Rpb24gX2Rpc3BsYXlQcm9tcHQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgcHJvbXB0X2RpdiA9IF9hcHBlbmRQcm9tcHRzKF9wcm9tcHRRKCkpO1xuICAgIGNvbnN0IGZpbl9idXR0ID0gY3JlYXRlRWxlKCdidXR0b24nLCAnQ3JlYXRlJywgJ2ZpbicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvbXB0X2Rpdik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmaW5fYnV0dCk7XG59XG5cbmNvbnN0IF9wcm9tcHRRID0gKCkgPT4ge1xuICAgIGNvbnN0IGFza1RpdGxlID0gXCJUbyBkbyBpdGVtIG5hbWVcIjtcbiAgICBjb25zdCBhc2tEZXMgPSBcInRvIGRvIGl0ZW0gZGVzY3JpcHRpb25cIjtcbiAgICBjb25zdCBhc2tEYXRlID0gXCJpdGVtIGR1ZSBkYXRlXCI7XG4gICAgY29uc3QgYXNrUHJpb3JpdHkgPSBcIml0ZW0ncyBwcmlvcml0eVwiO1xuXG4gICAgcmV0dXJuIHthc2tUaXRsZSwgYXNrRGVzLCBhc2tEYXRlLCBhc2tQcmlvcml0eX07XG59XG5cbmZ1bmN0aW9uIF9hcHBlbmRQcm9tcHRzKHByb21wdHMpIHtcbiAgICBjb25zdCBwcm9tcHRfZGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgJ3Byb21wdHMnKTtcbiAgICBjb25zdCB0aXRsZV9kaXYgPSBfY3JlYXRlTGFibGVJbnB1dChwcm9tcHRzLmFza1RpdGxlLCAnaW5fdGl0bGUnKTtcbiAgICBjb25zdCBkZXNfZGl2ID0gX2NyZWF0ZUxhYmxlSW5wdXQocHJvbXB0cy5hc2tEZXMsICdpbl9kZXMnKTtcbiAgICBjb25zdCBkYXRlX2RpdiA9IF9jcmVhdGVMYWJsZUlucHV0KHByb21wdHMuYXNrRGF0ZSwgJ2luX2RhdGUnKTtcbiAgICBjb25zdCBwcmlvcml0eV9kaXYgPSBfY3JlYXRlTGFibGVJbnB1dChwcm9tcHRzLmFza1ByaW9yaXR5LCAnaW5fcHJpb3JpdHknKTtcbiAgICBwcm9tcHRfZGl2LmFwcGVuZENoaWxkKHRpdGxlX2Rpdik7XG4gICAgcHJvbXB0X2Rpdi5hcHBlbmRDaGlsZChkZXNfZGl2KTtcbiAgICBwcm9tcHRfZGl2LmFwcGVuZENoaWxkKGRhdGVfZGl2KTtcbiAgICBwcm9tcHRfZGl2LmFwcGVuZENoaWxkKHByaW9yaXR5X2Rpdik7XG4gICAgXG4gICAgcmV0dXJuIHByb21wdF9kaXY7XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVMYWJsZUlucHV0KHF1ZXN0aW9uLCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBxX2RpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdxX2RpdicpO1xuICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlRWxlKCdsYWJlbCcsIHF1ZXN0aW9uLCBjbGFzc05hbWUpO1xuICAgIGNvbnN0IGFuc3dlciA9IGNyZWF0ZUVsZSgnaW5wdXQnLCAnJywgYCR7Y2xhc3NOYW1lfV9hbnNgKTtcbiAgICBxX2Rpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgcV9kaXYuYXBwZW5kQ2hpbGQoYW5zd2VyKTtcbiAgICBcbiAgICByZXR1cm4gcV9kaXY7XG59XG5cbmZ1bmN0aW9uIF9zdG9yZUl0ZW0gKGxpc3QpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmluJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBfZ2V0SXRlbSgpO1xuICAgICAgICBfc3RvcmVJdChsaXN0LCBuZXdJdGVtKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gX2dldEl0ZW0oKSB7XG4gICAgbGV0IGlucHV0ID0gX3Byb21wdEEoKTtcbiAgICBfcmVtb3ZlUHJvbXB0KCk7XG4gICAgcmV0dXJuIGlucHV0VG9JdGVtKGlucHV0KTtcbn1cblxuY29uc3QgX3Byb21wdEEgPSAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5fdGl0bGVfYW5zJykudmFsdWU7XG4gICAgY29uc3QgZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX2Rlc19hbnMnKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX2RhdGVfYW5zJykudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5fcHJpb3JpdHlfYW5zJykudmFsdWU7XG5cbiAgICByZXR1cm4ge3RpdGxlLCBkZXMsIGRhdGUsIHByaW9yaXR5fTtcbn1cblxuZnVuY3Rpb24gaW5wdXRUb0l0ZW0oaW5wdXQpIHtcbiAgICByZXR1cm4gdG9Eb0l0ZW0oaW5wdXQudGl0bGUsIGlucHV0LmRlcywgaW5wdXQuZGF0ZSwgaW5wdXQucHJpb3JpdHkpO1xufVxuXG5mdW5jdGlvbiBfcmVtb3ZlUHJvbXB0KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb21wdHMnKSk7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmluJykpO1xufVxuXG5mdW5jdGlvbiBfc3RvcmVJdChsaXN0LCBuZXdJdGVtKSB7XG4gICAgbGlzdC5hZGRJdGVtKG5ld0l0ZW0pO1xuICAgIHNob3dJdChsaXN0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3SXRlbUNvbnRyb2w7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9