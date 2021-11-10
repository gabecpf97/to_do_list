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
    for (let i = 0; i < list.getList().length; i++) {
        _showItem(list_div, list, list.getList()[i], i);
    }
}

function _showItem(list_div, list, item, i) {
    list_div.appendChild(_appendItem(list, _getItem(item), i));
}

function _appendItem (list, item, i) {
    const itemDiv = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'item');
    itemDiv.appendChild((0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', i + 1, 'num_entry'));
    itemDiv.appendChild(item.title);
    itemDiv.appendChild(item.des);
    itemDiv.appendChild(item.date);
    itemDiv.appendChild(item.priority);
    itemDiv.appendChild(item.status);
    itemDiv.appendChild(_createDeleteButt(list, i));
    return itemDiv;
}

function _getItem(item) {
    const title = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', item.getTitle(), 'title');
    const des = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', item.getDes(), 'des');
    const date = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', item.getDate(), 'date');
    const priority = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', item.getPriority(), 'priority');
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
    const statusLabel = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('label', 'Completed', 'status_l');
    statusLabel.htmlFor = 'status';
    return statusLabel;
}

function _createCheck(item) {
    const statusCheck = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('input', '', 'status_c');
    statusCheck.type = 'checkbox';
    statusCheck.name = 'status';
    if (item.getStatus())
        statusCheck.checked = true;
    statusCheck.addEventListener('change', () => {
        item.setStatus();
    });
    return statusCheck;
}

function _createDeleteButt(list, i) {
    const deleButt = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'Delete', 'delete');
    deleButt.addEventListener('click', e => _deleteEntry(list, i));
    return deleButt;
}

function _deleteEntry(list, i) {
    _removeItem(list, i);
    showList(list);
}

function _removeItem(list, i) {
    const list_div = document.querySelector('.list');
    while (list_div.firstChild != null) 
        list_div.removeChild(list_div.firstChild);
    list.removeItem(i);
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

    const getPriority = () => {
        return myPriority;
    }

    const setPriority = (newPriority) => {
        myPriority = newPriority;
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
                getPriority, setPriority, getStatus, setStatus, toString};
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
        _disableNewButt();
        _displayPrompt();
        _storeItem(list);
    }

    return {storeNewItem};
}

function _disableNewButt() {
    document.querySelector('.add').disabled = true;
}

function _enableNewButt() {
    document.querySelector('.add').disabled = false;
}

function _clickedOutside() {
    const newItem = document.querySelector('.newItem');
    newItem.addEventListener('click', (e) => {
        if (e.currentTarget == e.target)
            _removePrompt();
    }, {once: true});

}

function _displayPrompt() {
    const elements = _createPromptEle();
    elements.prompt_div.appendChild(elements.butt_div);
    elements.newItemDiv.appendChild(elements.prompt_div);
}

function _createPromptEle() {
    const newItemDiv = document.querySelector('.newItem');
    const prompt_div = _appendPrompts(_promptQ());
    const fin_butt = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'Add', 'fin');
    const cancel_butt = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'Cancel', 'cancel');
    const butt_div = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'butt_div');
    butt_div.appendChild(fin_butt);
    butt_div.appendChild(cancel_butt);
    _clickToCancel(cancel_butt);
    _clickedOutside();
    return {newItemDiv, prompt_div, butt_div};
}

function _clickToCancel(butt) {
    butt.addEventListener('click', _removePrompt, {once: true});
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
    const title_div = _createLableInput(prompts.askTitle, 'input', 'in_title');
    const des_div = _createLableInput(prompts.askDes, 'textarea', 'in_des');
    const date_div = _createLableInput(prompts.askDate, 'input', 'in_date');
    const priority_div = _createPriorityDiv(prompts.askPriority);
    prompt_div.appendChild(title_div);
    prompt_div.appendChild(des_div);
    prompt_div.appendChild(date_div);
    prompt_div.appendChild(priority_div);
    
    return prompt_div;
}

function _createLableInput(question, type, className) {
    const q_div = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'q_div');
    const label = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('label', question, 'in');
    const answer = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])(type, '', `${className}_ans`);
    q_div.appendChild(label);
    q_div.appendChild(answer);
    
    return q_div;
}

function _createPriorityDiv(question) {
    const priorityDiv = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'q_div');
    const priorityLabel = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('label', question, 'in');
    const prioritySelect = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('select', '', 'in_priority_ans');
    prioritySelect.name = 'priority';
    const optionTop = _createOption('top');
    const optionMid = _createOption('middle');
    const optionLow = _createOption('low');
    prioritySelect.appendChild(optionTop);
    prioritySelect.appendChild(optionMid);
    prioritySelect.appendChild(optionLow);
    priorityDiv.appendChild(priorityLabel);
    priorityDiv.appendChild(prioritySelect);
    
    return priorityDiv;
}

function _createOption(priority) {
    const option = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('option', priority, `in_options_${priority}`);
    option.value = priority;
    return option;
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
    const newItemDiv = document.querySelector('.newItem');
    newItemDiv.removeChild(document.querySelector('.prompts'));
    newItemDiv.classList.add('hide');
    _enableNewButt();
}

function _storeIt(list, newItem) {
    list.addItem(newItem);
    (0,_createOnScreen__WEBPACK_IMPORTED_MODULE_2__["default"])(list);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newItemControl);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVM7QUFDakMsMEJBQTBCLHNEQUFTO0FBQ25DLDJCQUEyQixzREFBUztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsc0RBQVMsbUNBQW1DLFNBQVM7QUFDeEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxXQUFXLHFEQUFRO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSwyREFBTTtBQUNWOztBQUVBLGlFQUFlLGNBQWMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvY3JlYXRlRWxlLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvY3JlYXRlT25TY3JlZW4uanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy90b0RvSXRlbS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy9uZXdJdGVtQ29udHJvbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVFbGUgKHR5cGUsIHZhbHVlLCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIHRhcmdldC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlIDsiLCIvLyBzaG93IGl0ZW0gYW5kIG90aGVyIG9uIGh0bWwgZmlsZVxuLy8gRE9NIHN0dWZmXG5pbXBvcnQgY3JlYXRlRWxlIGZyb20gXCIuL2NyZWF0ZUVsZVwiO1xuXG5mdW5jdGlvbiBzaG93TGlzdChsaXN0KSB7XG4gICAgY29uc3QgbGlzdF9kaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpO1xuICAgIF9jbGVhclNjcmVlbihsaXN0X2Rpdik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0LmdldExpc3QoKS5sZW5ndGg7IGkrKykge1xuICAgICAgICBfc2hvd0l0ZW0obGlzdF9kaXYsIGxpc3QsIGxpc3QuZ2V0TGlzdCgpW2ldLCBpKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9zaG93SXRlbShsaXN0X2RpdiwgbGlzdCwgaXRlbSwgaSkge1xuICAgIGxpc3RfZGl2LmFwcGVuZENoaWxkKF9hcHBlbmRJdGVtKGxpc3QsIF9nZXRJdGVtKGl0ZW0pLCBpKSk7XG59XG5cbmZ1bmN0aW9uIF9hcHBlbmRJdGVtIChsaXN0LCBpdGVtLCBpKSB7XG4gICAgY29uc3QgaXRlbURpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdpdGVtJyk7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChjcmVhdGVFbGUoJ2RpdicsIGkgKyAxLCAnbnVtX2VudHJ5JykpO1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbS50aXRsZSk7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtLmRlcyk7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtLmRhdGUpO1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbS5wcmlvcml0eSk7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtLnN0YXR1cyk7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChfY3JlYXRlRGVsZXRlQnV0dChsaXN0LCBpKSk7XG4gICAgcmV0dXJuIGl0ZW1EaXY7XG59XG5cbmZ1bmN0aW9uIF9nZXRJdGVtKGl0ZW0pIHtcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZSgnZGl2JywgaXRlbS5nZXRUaXRsZSgpLCAndGl0bGUnKTtcbiAgICBjb25zdCBkZXMgPSBjcmVhdGVFbGUoJ2RpdicsIGl0ZW0uZ2V0RGVzKCksICdkZXMnKTtcbiAgICBjb25zdCBkYXRlID0gY3JlYXRlRWxlKCdkaXYnLCBpdGVtLmdldERhdGUoKSwgJ2RhdGUnKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGNyZWF0ZUVsZSgnZGl2JywgaXRlbS5nZXRQcmlvcml0eSgpLCAncHJpb3JpdHknKTtcbiAgICBjb25zdCBzdGF0dXMgPSBfY3JlYXRlU3RhdHVzRGl2KGl0ZW0pO1xuICAgIHJldHVybiB7dGl0bGUsIGRlcywgZGF0ZSwgcHJpb3JpdHksIHN0YXR1c307XG59XG5cbmZ1bmN0aW9uIF9jbGVhclNjcmVlbihsaXN0X2Rpdikge1xuICAgIHdoaWxlKGxpc3RfZGl2LmZpcnN0Q2hpbGQgIT0gbnVsbClcbiAgICAgICAgbGlzdF9kaXYucmVtb3ZlQ2hpbGQobGlzdF9kaXYuZmlyc3RDaGlsZCk7XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdGF0dXNEaXYoaXRlbSkge1xuICAgIGNvbnN0IHN0YXR1c0RpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdzdGF0dXMnKTtcbiAgICBjb25zdCBzdGF0dXNMYWJlbCA9IF9jcmVhdGVMYWJlbCgpO1xuICAgIGNvbnN0IHN0YXR1c0NoZWNrID0gX2NyZWF0ZUNoZWNrKGl0ZW0pO1xuICAgIHN0YXR1c0Rpdi5hcHBlbmRDaGlsZChzdGF0dXNMYWJlbCk7XG4gICAgc3RhdHVzRGl2LmFwcGVuZENoaWxkKHN0YXR1c0NoZWNrKTtcbiAgICByZXR1cm4gc3RhdHVzRGl2O1xufVxuXG5mdW5jdGlvbiBfY3JlYXRlTGFiZWwoKSB7XG4gICAgY29uc3Qgc3RhdHVzTGFiZWwgPSBjcmVhdGVFbGUoJ2xhYmVsJywgJ0NvbXBsZXRlZCcsICdzdGF0dXNfbCcpO1xuICAgIHN0YXR1c0xhYmVsLmh0bWxGb3IgPSAnc3RhdHVzJztcbiAgICByZXR1cm4gc3RhdHVzTGFiZWw7XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDaGVjayhpdGVtKSB7XG4gICAgY29uc3Qgc3RhdHVzQ2hlY2sgPSBjcmVhdGVFbGUoJ2lucHV0JywgJycsICdzdGF0dXNfYycpO1xuICAgIHN0YXR1c0NoZWNrLnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIHN0YXR1c0NoZWNrLm5hbWUgPSAnc3RhdHVzJztcbiAgICBpZiAoaXRlbS5nZXRTdGF0dXMoKSlcbiAgICAgICAgc3RhdHVzQ2hlY2suY2hlY2tlZCA9IHRydWU7XG4gICAgc3RhdHVzQ2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBpdGVtLnNldFN0YXR1cygpO1xuICAgIH0pO1xuICAgIHJldHVybiBzdGF0dXNDaGVjaztcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZURlbGV0ZUJ1dHQobGlzdCwgaSkge1xuICAgIGNvbnN0IGRlbGVCdXR0ID0gY3JlYXRlRWxlKCdidXR0b24nLCAnRGVsZXRlJywgJ2RlbGV0ZScpO1xuICAgIGRlbGVCdXR0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBfZGVsZXRlRW50cnkobGlzdCwgaSkpO1xuICAgIHJldHVybiBkZWxlQnV0dDtcbn1cblxuZnVuY3Rpb24gX2RlbGV0ZUVudHJ5KGxpc3QsIGkpIHtcbiAgICBfcmVtb3ZlSXRlbShsaXN0LCBpKTtcbiAgICBzaG93TGlzdChsaXN0KTtcbn1cblxuZnVuY3Rpb24gX3JlbW92ZUl0ZW0obGlzdCwgaSkge1xuICAgIGNvbnN0IGxpc3RfZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKTtcbiAgICB3aGlsZSAobGlzdF9kaXYuZmlyc3RDaGlsZCAhPSBudWxsKSBcbiAgICAgICAgbGlzdF9kaXYucmVtb3ZlQ2hpbGQobGlzdF9kaXYuZmlyc3RDaGlsZCk7XG4gICAgbGlzdC5yZW1vdmVJdGVtKGkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaG93TGlzdDsiLCJjb25zdCB0b0RvSXRlbSA9ICh0aXRsZSwgZGVzLCBkYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIGxldCBteVRpdGxlID0gdGl0bGU7XG4gICAgbGV0IG15RGVzID0gZGVzO1xuICAgIGxldCBteURhdGUgPSBkYXRlO1xuICAgIGxldCBteVByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgbGV0IG15U3RhdHVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG15VGl0bGU7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGdldERlcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG15RGVzO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXREZXMgPSAobmV3RGVzKSA9PiB7XG4gICAgICAgIG15RGVzID0gbmV3RGVzO1xuICAgIH1cblxuICAgIGNvbnN0IGdldERhdGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBteURhdGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RGF0ZSA9IChuZXdEYXRlKSA9PiB7XG4gICAgICAgIG15RGF0ZSA9IG5ld0RhdGU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBteVByaW9yaXR5O1xuICAgIH1cblxuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiB7XG4gICAgICAgIG15UHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTdGF0dXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBteVN0YXR1cztcbiAgICB9XG5cbiAgICBjb25zdCBzZXRTdGF0dXMgPSAoKSA9PiB7XG4gICAgICAgIG15U3RhdHVzID0gIW15U3RhdHVzO1xuICAgIH1cblxuICAgIGNvbnN0IHRvU3RyaW5nID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYCR7bXlUaXRsZX0sICR7bXlEYXRlfSwgJHtteVByaW9yaXR5fWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtnZXRUaXRsZSwgZ2V0RGVzLCBzZXREZXMsIHNldERhdGUsIGdldERhdGUsIFxuICAgICAgICAgICAgICAgIGdldFByaW9yaXR5LCBzZXRQcmlvcml0eSwgZ2V0U3RhdHVzLCBzZXRTdGF0dXMsIHRvU3RyaW5nfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvRG9JdGVtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZUVsZSBmcm9tIFwiLi9jcmVhdGVFbGVcIjtcbmltcG9ydCB0b0RvSXRlbSBmcm9tIFwiLi90b0RvSXRlbVwiO1xuaW1wb3J0IHNob3dJdCBmcm9tIFwiLi9jcmVhdGVPblNjcmVlblwiO1xuXG5jb25zdCAgbmV3SXRlbUNvbnRyb2wgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmVOZXdJdGVtID0gKGxpc3QpID0+IHtcbiAgICAgICAgX2Rpc2FibGVOZXdCdXR0KCk7XG4gICAgICAgIF9kaXNwbGF5UHJvbXB0KCk7XG4gICAgICAgIF9zdG9yZUl0ZW0obGlzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtzdG9yZU5ld0l0ZW19O1xufVxuXG5mdW5jdGlvbiBfZGlzYWJsZU5ld0J1dHQoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZCcpLmRpc2FibGVkID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gX2VuYWJsZU5ld0J1dHQoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZCcpLmRpc2FibGVkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIF9jbGlja2VkT3V0c2lkZSgpIHtcbiAgICBjb25zdCBuZXdJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld0l0ZW0nKTtcbiAgICBuZXdJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldCA9PSBlLnRhcmdldClcbiAgICAgICAgICAgIF9yZW1vdmVQcm9tcHQoKTtcbiAgICB9LCB7b25jZTogdHJ1ZX0pO1xuXG59XG5cbmZ1bmN0aW9uIF9kaXNwbGF5UHJvbXB0KCkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gX2NyZWF0ZVByb21wdEVsZSgpO1xuICAgIGVsZW1lbnRzLnByb21wdF9kaXYuYXBwZW5kQ2hpbGQoZWxlbWVudHMuYnV0dF9kaXYpO1xuICAgIGVsZW1lbnRzLm5ld0l0ZW1EaXYuYXBwZW5kQ2hpbGQoZWxlbWVudHMucHJvbXB0X2Rpdik7XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVQcm9tcHRFbGUoKSB7XG4gICAgY29uc3QgbmV3SXRlbURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdJdGVtJyk7XG4gICAgY29uc3QgcHJvbXB0X2RpdiA9IF9hcHBlbmRQcm9tcHRzKF9wcm9tcHRRKCkpO1xuICAgIGNvbnN0IGZpbl9idXR0ID0gY3JlYXRlRWxlKCdidXR0b24nLCAnQWRkJywgJ2ZpbicpO1xuICAgIGNvbnN0IGNhbmNlbF9idXR0ID0gY3JlYXRlRWxlKCdidXR0b24nLCAnQ2FuY2VsJywgJ2NhbmNlbCcpO1xuICAgIGNvbnN0IGJ1dHRfZGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgJ2J1dHRfZGl2Jyk7XG4gICAgYnV0dF9kaXYuYXBwZW5kQ2hpbGQoZmluX2J1dHQpO1xuICAgIGJ1dHRfZGl2LmFwcGVuZENoaWxkKGNhbmNlbF9idXR0KTtcbiAgICBfY2xpY2tUb0NhbmNlbChjYW5jZWxfYnV0dCk7XG4gICAgX2NsaWNrZWRPdXRzaWRlKCk7XG4gICAgcmV0dXJuIHtuZXdJdGVtRGl2LCBwcm9tcHRfZGl2LCBidXR0X2Rpdn07XG59XG5cbmZ1bmN0aW9uIF9jbGlja1RvQ2FuY2VsKGJ1dHQpIHtcbiAgICBidXR0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3JlbW92ZVByb21wdCwge29uY2U6IHRydWV9KTtcbn1cblxuY29uc3QgX3Byb21wdFEgPSAoKSA9PiB7XG4gICAgY29uc3QgYXNrVGl0bGUgPSBcIlRvIGRvIGl0ZW0gbmFtZVwiO1xuICAgIGNvbnN0IGFza0RlcyA9IFwidG8gZG8gaXRlbSBkZXNjcmlwdGlvblwiO1xuICAgIGNvbnN0IGFza0RhdGUgPSBcIml0ZW0gZHVlIGRhdGVcIjtcbiAgICBjb25zdCBhc2tQcmlvcml0eSA9IFwiaXRlbSdzIHByaW9yaXR5XCI7XG5cbiAgICByZXR1cm4ge2Fza1RpdGxlLCBhc2tEZXMsIGFza0RhdGUsIGFza1ByaW9yaXR5fTtcbn1cblxuZnVuY3Rpb24gX2FwcGVuZFByb21wdHMocHJvbXB0cykge1xuICAgIGNvbnN0IHByb21wdF9kaXYgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCAncHJvbXB0cycpO1xuICAgIGNvbnN0IHRpdGxlX2RpdiA9IF9jcmVhdGVMYWJsZUlucHV0KHByb21wdHMuYXNrVGl0bGUsICdpbnB1dCcsICdpbl90aXRsZScpO1xuICAgIGNvbnN0IGRlc19kaXYgPSBfY3JlYXRlTGFibGVJbnB1dChwcm9tcHRzLmFza0RlcywgJ3RleHRhcmVhJywgJ2luX2RlcycpO1xuICAgIGNvbnN0IGRhdGVfZGl2ID0gX2NyZWF0ZUxhYmxlSW5wdXQocHJvbXB0cy5hc2tEYXRlLCAnaW5wdXQnLCAnaW5fZGF0ZScpO1xuICAgIGNvbnN0IHByaW9yaXR5X2RpdiA9IF9jcmVhdGVQcmlvcml0eURpdihwcm9tcHRzLmFza1ByaW9yaXR5KTtcbiAgICBwcm9tcHRfZGl2LmFwcGVuZENoaWxkKHRpdGxlX2Rpdik7XG4gICAgcHJvbXB0X2Rpdi5hcHBlbmRDaGlsZChkZXNfZGl2KTtcbiAgICBwcm9tcHRfZGl2LmFwcGVuZENoaWxkKGRhdGVfZGl2KTtcbiAgICBwcm9tcHRfZGl2LmFwcGVuZENoaWxkKHByaW9yaXR5X2Rpdik7XG4gICAgXG4gICAgcmV0dXJuIHByb21wdF9kaXY7XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVMYWJsZUlucHV0KHF1ZXN0aW9uLCB0eXBlLCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBxX2RpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdxX2RpdicpO1xuICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlRWxlKCdsYWJlbCcsIHF1ZXN0aW9uLCAnaW4nKTtcbiAgICBjb25zdCBhbnN3ZXIgPSBjcmVhdGVFbGUodHlwZSwgJycsIGAke2NsYXNzTmFtZX1fYW5zYCk7XG4gICAgcV9kaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIHFfZGl2LmFwcGVuZENoaWxkKGFuc3dlcik7XG4gICAgXG4gICAgcmV0dXJuIHFfZGl2O1xufVxuXG5mdW5jdGlvbiBfY3JlYXRlUHJpb3JpdHlEaXYocXVlc3Rpb24pIHtcbiAgICBjb25zdCBwcmlvcml0eURpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdxX2RpdicpO1xuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBjcmVhdGVFbGUoJ2xhYmVsJywgcXVlc3Rpb24sICdpbicpO1xuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gY3JlYXRlRWxlKCdzZWxlY3QnLCAnJywgJ2luX3ByaW9yaXR5X2FucycpO1xuICAgIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSAncHJpb3JpdHknO1xuICAgIGNvbnN0IG9wdGlvblRvcCA9IF9jcmVhdGVPcHRpb24oJ3RvcCcpO1xuICAgIGNvbnN0IG9wdGlvbk1pZCA9IF9jcmVhdGVPcHRpb24oJ21pZGRsZScpO1xuICAgIGNvbnN0IG9wdGlvbkxvdyA9IF9jcmVhdGVPcHRpb24oJ2xvdycpO1xuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvblRvcCk7XG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uTWlkKTtcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25Mb3cpO1xuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcbiAgICBcbiAgICByZXR1cm4gcHJpb3JpdHlEaXY7XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVPcHRpb24ocHJpb3JpdHkpIHtcbiAgICBjb25zdCBvcHRpb24gPSBjcmVhdGVFbGUoJ29wdGlvbicsIHByaW9yaXR5LCBgaW5fb3B0aW9uc18ke3ByaW9yaXR5fWApO1xuICAgIG9wdGlvbi52YWx1ZSA9IHByaW9yaXR5O1xuICAgIHJldHVybiBvcHRpb247XG59XG5cbmZ1bmN0aW9uIF9zdG9yZUl0ZW0gKGxpc3QpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmluJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBfZ2V0SXRlbSgpO1xuICAgICAgICBfc3RvcmVJdChsaXN0LCBuZXdJdGVtKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gX2dldEl0ZW0oKSB7XG4gICAgbGV0IGlucHV0ID0gX3Byb21wdEEoKTtcbiAgICBfcmVtb3ZlUHJvbXB0KCk7XG4gICAgcmV0dXJuIGlucHV0VG9JdGVtKGlucHV0KTtcbn1cblxuY29uc3QgX3Byb21wdEEgPSAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5fdGl0bGVfYW5zJykudmFsdWU7XG4gICAgY29uc3QgZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX2Rlc19hbnMnKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX2RhdGVfYW5zJykudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5fcHJpb3JpdHlfYW5zJykudmFsdWU7XG5cbiAgICByZXR1cm4ge3RpdGxlLCBkZXMsIGRhdGUsIHByaW9yaXR5fTtcbn1cblxuZnVuY3Rpb24gaW5wdXRUb0l0ZW0oaW5wdXQpIHtcbiAgICByZXR1cm4gdG9Eb0l0ZW0oaW5wdXQudGl0bGUsIGlucHV0LmRlcywgaW5wdXQuZGF0ZSwgaW5wdXQucHJpb3JpdHkpO1xufVxuXG5mdW5jdGlvbiBfcmVtb3ZlUHJvbXB0KCkge1xuICAgIGNvbnN0IG5ld0l0ZW1EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3SXRlbScpO1xuICAgIG5ld0l0ZW1EaXYucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb21wdHMnKSk7XG4gICAgbmV3SXRlbURpdi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgX2VuYWJsZU5ld0J1dHQoKTtcbn1cblxuZnVuY3Rpb24gX3N0b3JlSXQobGlzdCwgbmV3SXRlbSkge1xuICAgIGxpc3QuYWRkSXRlbShuZXdJdGVtKTtcbiAgICBzaG93SXQobGlzdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ld0l0ZW1Db250cm9sOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==