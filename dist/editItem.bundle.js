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
/* harmony import */ var _editItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editItem */ "./src/js/editItem.js");
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
    list_div.appendChild(_appendItem(list, _getItem(item), item, i));
}

function _appendItem (list, item_div, item, i) {
    const itemDiv = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'item');
    itemDiv.appendChild(_createBasicDiv(list, item_div, item, i));
    itemDiv.appendChild(_createDes(item_div.des));
    return itemDiv;
}

function _createBasicDiv(list, item_div, item, i) {
    const basicDiv = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'basic');
    basicDiv.appendChild(item_div.status);
    basicDiv.appendChild(item_div.title);
    basicDiv.appendChild(item_div.date);
    basicDiv.appendChild(item_div.priority);
    basicDiv.appendChild(_createEditButt(item, list));
    basicDiv.appendChild(_createDeleteButt(list, i));
    basicDiv.appendChild(_createExpandButt(item_div.des));
    return basicDiv;
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
    // statusDiv.appendChild(statusLabel);
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

function _createEditButt(item, list) {
    const editButt = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'edit', 'edit');
    editButt.addEventListener('click', () => (0,_editItem__WEBPACK_IMPORTED_MODULE_1__["default"])().editIt('edit', item, list));
    return editButt;
}

function _createExpandButt(des) {
    const expandButt = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'expand', 'expand');
    expandButt.addEventListener('click', () => _showDes(expandButt, des.parentNode));
    return expandButt;
}

function _showDes(expandButt, des_container) {
    if (des_container.classList[1] == undefined) {
        des_container.classList.add('hide');
        expandButt.textContent = 'expand';
    } else {
        des_container.classList.remove('hide');
        expandButt.textContent = 'hide';
    }
}

function _createDes(desDiv) {
    const des_container = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'des_div');
    des_container.classList.add('hide');
    des_container.appendChild(desDiv);
    return des_container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showList);

/***/ }),

/***/ "./src/js/createPrompt.js":
/*!********************************!*\
  !*** ./src/js/createPrompt.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createEle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createEle */ "./src/js/createEle.js");


const createPrompt = () => {
    const createIt = (name) => {
        _displayPrompt(name);
    }

    return {createIt};
}

function _displayPrompt(name) {
    const elements = _createPromptEle(name);
    elements.prompt_div.appendChild(elements.butt_div);
    elements.newItemDiv.appendChild(elements.prompt_div);
}

function _createPromptEle(name) {
    const newItemDiv = document.querySelector('.newItem');
    const prompt_div = _appendPrompts(_promptQ());
    const fin_butt = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('button', name, 'fin');
    const cancel_butt = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'Cancel', 'cancel');
    const butt_div = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'butt_div');
    butt_div.appendChild(fin_butt);
    butt_div.appendChild(cancel_butt);
    _clickToCancel(cancel_butt);
    _clickedOutside();
    return {newItemDiv, prompt_div, butt_div};
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

function _clickToCancel(butt) {
    butt.addEventListener('click', _removePrompt, {once: true});
}

function _clickedOutside() {
    const newItem = document.querySelector('.newItem');
    newItem.addEventListener('click', (e) => {
        if (e.currentTarget == e.target)
            _removePrompt();
    }, {once: true});

}

function _removePrompt() {
    const newItemDiv = document.querySelector('.newItem');
    newItemDiv.removeChild(document.querySelector('.prompts'));
    newItemDiv.classList.add('hide');
    _enableNewButt();
}

function _enableNewButt() {
    document.querySelector('.add').disabled = false;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPrompt);

/***/ }),

/***/ "./src/js/editItem.js":
/*!****************************!*\
  !*** ./src/js/editItem.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createOnScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createOnScreen */ "./src/js/createOnScreen.js");
/* harmony import */ var _createPrompt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createPrompt */ "./src/js/createPrompt.js");



const editItem = () => {
    const editIt = (name, item, list) => {
        _showForm();
        (0,_createPrompt__WEBPACK_IMPORTED_MODULE_1__["default"])().createIt(name);
        _fillData(item);
        _changeData(item, list);
    }
    return {editIt};
}

function _showForm() {
    document.querySelector('.newItem').classList.remove('hide');
}

function _fillData(item) {
    let feilds = _promptA();
    feilds.title.value = item.getTitle();
    feilds.des.value = item.getDes();
    feilds.date.value = item.getDate();
    feilds.priority.value = item.getPriority();
}

const _promptA = () => {
    const title = document.querySelector('.in_title_ans');
    const des = document.querySelector('.in_des_ans');
    const date = document.querySelector('.in_date_ans');
    const priority = document.querySelector('.in_priority_ans');

    return {title, des, date, priority};
}

function _changeData(item, list) {
    document.querySelector('.fin').addEventListener('click', () =>  {
        _storeChanges(item);
        _removePrompt();
        if (list.getList() != null)
            (0,_createOnScreen__WEBPACK_IMPORTED_MODULE_0__["default"])(list);
    });
}

function _storeChanges(item) {
    let input = _promptA();
    item.setTitle(input.title.value);
    item.setDes(input.des.value);
    item.setDate(input.date.value);
    item.setPriority(input.priority.value);
}

function _removePrompt() {
    const newItemDiv = document.querySelector('.newItem');
    newItemDiv.removeChild(document.querySelector('.prompts'));
    newItemDiv.classList.add('hide');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editItem);

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/editItem.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7QUM5R2E7QUFDRTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQVk7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJEQUFRO0FBQ3BCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVE7Ozs7OztVQ3pEdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL2NyZWF0ZUVsZS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL2NyZWF0ZU9uU2NyZWVuLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvY3JlYXRlUHJvbXB0LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvZWRpdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVFbGUgKHR5cGUsIHZhbHVlLCBjbGFzc05hbWUpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgICB0YXJnZXQudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGUgOyIsIi8vIHNob3cgaXRlbSBhbmQgb3RoZXIgb24gaHRtbCBmaWxlXHJcbi8vIERPTSBzdHVmZlxyXG5pbXBvcnQgY3JlYXRlRWxlIGZyb20gXCIuL2NyZWF0ZUVsZVwiO1xyXG5pbXBvcnQgZWRpdEl0ZW0gZnJvbSBcIi4vZWRpdEl0ZW1cIjtcclxuXHJcbmZ1bmN0aW9uIHNob3dMaXN0KGxpc3QpIHtcclxuICAgIGNvbnN0IGxpc3RfZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKTtcclxuICAgIF9jbGVhclNjcmVlbihsaXN0X2Rpdik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QuZ2V0TGlzdCgpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgX3Nob3dJdGVtKGxpc3RfZGl2LCBsaXN0LCBsaXN0LmdldExpc3QoKVtpXSwgaSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9zaG93SXRlbShsaXN0X2RpdiwgbGlzdCwgaXRlbSwgaSkge1xyXG4gICAgbGlzdF9kaXYuYXBwZW5kQ2hpbGQoX2FwcGVuZEl0ZW0obGlzdCwgX2dldEl0ZW0oaXRlbSksIGl0ZW0sIGkpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2FwcGVuZEl0ZW0gKGxpc3QsIGl0ZW1fZGl2LCBpdGVtLCBpKSB7XHJcbiAgICBjb25zdCBpdGVtRGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgJ2l0ZW0nKTtcclxuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoX2NyZWF0ZUJhc2ljRGl2KGxpc3QsIGl0ZW1fZGl2LCBpdGVtLCBpKSk7XHJcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKF9jcmVhdGVEZXMoaXRlbV9kaXYuZGVzKSk7XHJcbiAgICByZXR1cm4gaXRlbURpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUJhc2ljRGl2KGxpc3QsIGl0ZW1fZGl2LCBpdGVtLCBpKSB7XHJcbiAgICBjb25zdCBiYXNpY0RpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdiYXNpYycpO1xyXG4gICAgYmFzaWNEaXYuYXBwZW5kQ2hpbGQoaXRlbV9kaXYuc3RhdHVzKTtcclxuICAgIGJhc2ljRGl2LmFwcGVuZENoaWxkKGl0ZW1fZGl2LnRpdGxlKTtcclxuICAgIGJhc2ljRGl2LmFwcGVuZENoaWxkKGl0ZW1fZGl2LmRhdGUpO1xyXG4gICAgYmFzaWNEaXYuYXBwZW5kQ2hpbGQoaXRlbV9kaXYucHJpb3JpdHkpO1xyXG4gICAgYmFzaWNEaXYuYXBwZW5kQ2hpbGQoX2NyZWF0ZUVkaXRCdXR0KGl0ZW0sIGxpc3QpKTtcclxuICAgIGJhc2ljRGl2LmFwcGVuZENoaWxkKF9jcmVhdGVEZWxldGVCdXR0KGxpc3QsIGkpKTtcclxuICAgIGJhc2ljRGl2LmFwcGVuZENoaWxkKF9jcmVhdGVFeHBhbmRCdXR0KGl0ZW1fZGl2LmRlcykpO1xyXG4gICAgcmV0dXJuIGJhc2ljRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZ2V0SXRlbShpdGVtKSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZSgnZGl2JywgaXRlbS5nZXRUaXRsZSgpLCAndGl0bGUnKTtcclxuICAgIGNvbnN0IGRlcyA9IGNyZWF0ZUVsZSgnZGl2JywgaXRlbS5nZXREZXMoKSwgJ2RlcycpO1xyXG4gICAgY29uc3QgZGF0ZSA9IGNyZWF0ZUVsZSgnZGl2JywgaXRlbS5nZXREYXRlKCksICdkYXRlJyk7XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGNyZWF0ZUVsZSgnZGl2JywgaXRlbS5nZXRQcmlvcml0eSgpLCAncHJpb3JpdHknKTtcclxuICAgIGNvbnN0IHN0YXR1cyA9IF9jcmVhdGVTdGF0dXNEaXYoaXRlbSk7XHJcbiAgICByZXR1cm4ge3RpdGxlLCBkZXMsIGRhdGUsIHByaW9yaXR5LCBzdGF0dXN9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY2xlYXJTY3JlZW4obGlzdF9kaXYpIHtcclxuICAgIHdoaWxlKGxpc3RfZGl2LmZpcnN0Q2hpbGQgIT0gbnVsbClcclxuICAgICAgICBsaXN0X2Rpdi5yZW1vdmVDaGlsZChsaXN0X2Rpdi5maXJzdENoaWxkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZVN0YXR1c0RpdihpdGVtKSB7XHJcbiAgICBjb25zdCBzdGF0dXNEaXYgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCAnc3RhdHVzJyk7XHJcbiAgICBjb25zdCBzdGF0dXNMYWJlbCA9IF9jcmVhdGVMYWJlbCgpO1xyXG4gICAgY29uc3Qgc3RhdHVzQ2hlY2sgPSBfY3JlYXRlQ2hlY2soaXRlbSk7XHJcbiAgICAvLyBzdGF0dXNEaXYuYXBwZW5kQ2hpbGQoc3RhdHVzTGFiZWwpO1xyXG4gICAgc3RhdHVzRGl2LmFwcGVuZENoaWxkKHN0YXR1c0NoZWNrKTtcclxuICAgIHJldHVybiBzdGF0dXNEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVMYWJlbCgpIHtcclxuICAgIGNvbnN0IHN0YXR1c0xhYmVsID0gY3JlYXRlRWxlKCdsYWJlbCcsICdDb21wbGV0ZWQnLCAnc3RhdHVzX2wnKTtcclxuICAgIHN0YXR1c0xhYmVsLmh0bWxGb3IgPSAnc3RhdHVzJztcclxuICAgIHJldHVybiBzdGF0dXNMYWJlbDtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUNoZWNrKGl0ZW0pIHtcclxuICAgIGNvbnN0IHN0YXR1c0NoZWNrID0gY3JlYXRlRWxlKCdpbnB1dCcsICcnLCAnc3RhdHVzX2MnKTtcclxuICAgIHN0YXR1c0NoZWNrLnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gICAgc3RhdHVzQ2hlY2submFtZSA9ICdzdGF0dXMnO1xyXG4gICAgaWYgKGl0ZW0uZ2V0U3RhdHVzKCkpXHJcbiAgICAgICAgc3RhdHVzQ2hlY2suY2hlY2tlZCA9IHRydWU7XHJcbiAgICBzdGF0dXNDaGVjay5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgaXRlbS5zZXRTdGF0dXMoKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHN0YXR1c0NoZWNrO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlRGVsZXRlQnV0dChsaXN0LCBpKSB7XHJcbiAgICBjb25zdCBkZWxlQnV0dCA9IGNyZWF0ZUVsZSgnYnV0dG9uJywgJ0RlbGV0ZScsICdkZWxldGUnKTtcclxuICAgIGRlbGVCdXR0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBfZGVsZXRlRW50cnkobGlzdCwgaSkpO1xyXG4gICAgcmV0dXJuIGRlbGVCdXR0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZGVsZXRlRW50cnkobGlzdCwgaSkge1xyXG4gICAgX3JlbW92ZUl0ZW0obGlzdCwgaSk7XHJcbiAgICBzaG93TGlzdChsaXN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3JlbW92ZUl0ZW0obGlzdCwgaSkge1xyXG4gICAgY29uc3QgbGlzdF9kaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpO1xyXG4gICAgd2hpbGUgKGxpc3RfZGl2LmZpcnN0Q2hpbGQgIT0gbnVsbCkgXHJcbiAgICAgICAgbGlzdF9kaXYucmVtb3ZlQ2hpbGQobGlzdF9kaXYuZmlyc3RDaGlsZCk7XHJcbiAgICBsaXN0LnJlbW92ZUl0ZW0oaSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVFZGl0QnV0dChpdGVtLCBsaXN0KSB7XHJcbiAgICBjb25zdCBlZGl0QnV0dCA9IGNyZWF0ZUVsZSgnYnV0dG9uJywgJ2VkaXQnLCAnZWRpdCcpO1xyXG4gICAgZWRpdEJ1dHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBlZGl0SXRlbSgpLmVkaXRJdCgnZWRpdCcsIGl0ZW0sIGxpc3QpKTtcclxuICAgIHJldHVybiBlZGl0QnV0dDtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUV4cGFuZEJ1dHQoZGVzKSB7XHJcbiAgICBjb25zdCBleHBhbmRCdXR0ID0gY3JlYXRlRWxlKCdidXR0b24nLCAnZXhwYW5kJywgJ2V4cGFuZCcpO1xyXG4gICAgZXhwYW5kQnV0dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9zaG93RGVzKGV4cGFuZEJ1dHQsIGRlcy5wYXJlbnROb2RlKSk7XHJcbiAgICByZXR1cm4gZXhwYW5kQnV0dDtcclxufVxyXG5cclxuZnVuY3Rpb24gX3Nob3dEZXMoZXhwYW5kQnV0dCwgZGVzX2NvbnRhaW5lcikge1xyXG4gICAgaWYgKGRlc19jb250YWluZXIuY2xhc3NMaXN0WzFdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGRlc19jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIGV4cGFuZEJ1dHQudGV4dENvbnRlbnQgPSAnZXhwYW5kJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVzX2NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgZXhwYW5kQnV0dC50ZXh0Q29udGVudCA9ICdoaWRlJztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZURlcyhkZXNEaXYpIHtcclxuICAgIGNvbnN0IGRlc19jb250YWluZXIgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCAnZGVzX2RpdicpO1xyXG4gICAgZGVzX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICBkZXNfY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc0Rpdik7XHJcbiAgICByZXR1cm4gZGVzX2NvbnRhaW5lcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd0xpc3Q7IiwiaW1wb3J0IGNyZWF0ZUVsZSBmcm9tIFwiLi9jcmVhdGVFbGVcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZVByb21wdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNyZWF0ZUl0ID0gKG5hbWUpID0+IHtcclxuICAgICAgICBfZGlzcGxheVByb21wdChuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2NyZWF0ZUl0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2Rpc3BsYXlQcm9tcHQobmFtZSkge1xyXG4gICAgY29uc3QgZWxlbWVudHMgPSBfY3JlYXRlUHJvbXB0RWxlKG5hbWUpO1xyXG4gICAgZWxlbWVudHMucHJvbXB0X2Rpdi5hcHBlbmRDaGlsZChlbGVtZW50cy5idXR0X2Rpdik7XHJcbiAgICBlbGVtZW50cy5uZXdJdGVtRGl2LmFwcGVuZENoaWxkKGVsZW1lbnRzLnByb21wdF9kaXYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlUHJvbXB0RWxlKG5hbWUpIHtcclxuICAgIGNvbnN0IG5ld0l0ZW1EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3SXRlbScpO1xyXG4gICAgY29uc3QgcHJvbXB0X2RpdiA9IF9hcHBlbmRQcm9tcHRzKF9wcm9tcHRRKCkpO1xyXG4gICAgY29uc3QgZmluX2J1dHQgPSBjcmVhdGVFbGUoJ2J1dHRvbicsIG5hbWUsICdmaW4nKTtcclxuICAgIGNvbnN0IGNhbmNlbF9idXR0ID0gY3JlYXRlRWxlKCdidXR0b24nLCAnQ2FuY2VsJywgJ2NhbmNlbCcpO1xyXG4gICAgY29uc3QgYnV0dF9kaXYgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCAnYnV0dF9kaXYnKTtcclxuICAgIGJ1dHRfZGl2LmFwcGVuZENoaWxkKGZpbl9idXR0KTtcclxuICAgIGJ1dHRfZGl2LmFwcGVuZENoaWxkKGNhbmNlbF9idXR0KTtcclxuICAgIF9jbGlja1RvQ2FuY2VsKGNhbmNlbF9idXR0KTtcclxuICAgIF9jbGlja2VkT3V0c2lkZSgpO1xyXG4gICAgcmV0dXJuIHtuZXdJdGVtRGl2LCBwcm9tcHRfZGl2LCBidXR0X2Rpdn07XHJcbn1cclxuXHJcbmNvbnN0IF9wcm9tcHRRID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYXNrVGl0bGUgPSBcIlRvIGRvIGl0ZW0gbmFtZVwiO1xyXG4gICAgY29uc3QgYXNrRGVzID0gXCJ0byBkbyBpdGVtIGRlc2NyaXB0aW9uXCI7XHJcbiAgICBjb25zdCBhc2tEYXRlID0gXCJpdGVtIGR1ZSBkYXRlXCI7XHJcbiAgICBjb25zdCBhc2tQcmlvcml0eSA9IFwiaXRlbSdzIHByaW9yaXR5XCI7XHJcblxyXG4gICAgcmV0dXJuIHthc2tUaXRsZSwgYXNrRGVzLCBhc2tEYXRlLCBhc2tQcmlvcml0eX07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9hcHBlbmRQcm9tcHRzKHByb21wdHMpIHtcclxuICAgIGNvbnN0IHByb21wdF9kaXYgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCAncHJvbXB0cycpO1xyXG4gICAgY29uc3QgdGl0bGVfZGl2ID0gX2NyZWF0ZUxhYmxlSW5wdXQocHJvbXB0cy5hc2tUaXRsZSwgJ2lucHV0JywgJ2luX3RpdGxlJyk7XHJcbiAgICBjb25zdCBkZXNfZGl2ID0gX2NyZWF0ZUxhYmxlSW5wdXQocHJvbXB0cy5hc2tEZXMsICd0ZXh0YXJlYScsICdpbl9kZXMnKTtcclxuICAgIGNvbnN0IGRhdGVfZGl2ID0gX2NyZWF0ZUxhYmxlSW5wdXQocHJvbXB0cy5hc2tEYXRlLCAnaW5wdXQnLCAnaW5fZGF0ZScpO1xyXG4gICAgY29uc3QgcHJpb3JpdHlfZGl2ID0gX2NyZWF0ZVByaW9yaXR5RGl2KHByb21wdHMuYXNrUHJpb3JpdHkpO1xyXG4gICAgcHJvbXB0X2Rpdi5hcHBlbmRDaGlsZCh0aXRsZV9kaXYpO1xyXG4gICAgcHJvbXB0X2Rpdi5hcHBlbmRDaGlsZChkZXNfZGl2KTtcclxuICAgIHByb21wdF9kaXYuYXBwZW5kQ2hpbGQoZGF0ZV9kaXYpO1xyXG4gICAgcHJvbXB0X2Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eV9kaXYpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gcHJvbXB0X2RpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUxhYmxlSW5wdXQocXVlc3Rpb24sIHR5cGUsIGNsYXNzTmFtZSkge1xyXG4gICAgY29uc3QgcV9kaXYgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCAncV9kaXYnKTtcclxuICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlRWxlKCdsYWJlbCcsIHF1ZXN0aW9uLCAnaW4nKTtcclxuICAgIGNvbnN0IGFuc3dlciA9IGNyZWF0ZUVsZSh0eXBlLCAnJywgYCR7Y2xhc3NOYW1lfV9hbnNgKTtcclxuICAgIHFfZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgIHFfZGl2LmFwcGVuZENoaWxkKGFuc3dlcik7XHJcbiAgICBcclxuICAgIHJldHVybiBxX2RpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZVByaW9yaXR5RGl2KHF1ZXN0aW9uKSB7XHJcbiAgICBjb25zdCBwcmlvcml0eURpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdxX2RpdicpO1xyXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGNyZWF0ZUVsZSgnbGFiZWwnLCBxdWVzdGlvbiwgJ2luJyk7XHJcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGNyZWF0ZUVsZSgnc2VsZWN0JywgJycsICdpbl9wcmlvcml0eV9hbnMnKTtcclxuICAgIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSAncHJpb3JpdHknO1xyXG4gICAgY29uc3Qgb3B0aW9uVG9wID0gX2NyZWF0ZU9wdGlvbigndG9wJyk7XHJcbiAgICBjb25zdCBvcHRpb25NaWQgPSBfY3JlYXRlT3B0aW9uKCdtaWRkbGUnKTtcclxuICAgIGNvbnN0IG9wdGlvbkxvdyA9IF9jcmVhdGVPcHRpb24oJ2xvdycpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uVG9wKTtcclxuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbk1pZCk7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25Mb3cpO1xyXG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XHJcbiAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdCk7XHJcbiAgICBcclxuICAgIHJldHVybiBwcmlvcml0eURpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZU9wdGlvbihwcmlvcml0eSkge1xyXG4gICAgY29uc3Qgb3B0aW9uID0gY3JlYXRlRWxlKCdvcHRpb24nLCBwcmlvcml0eSwgYGluX29wdGlvbnNfJHtwcmlvcml0eX1gKTtcclxuICAgIG9wdGlvbi52YWx1ZSA9IHByaW9yaXR5O1xyXG4gICAgcmV0dXJuIG9wdGlvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NsaWNrVG9DYW5jZWwoYnV0dCkge1xyXG4gICAgYnV0dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9yZW1vdmVQcm9tcHQsIHtvbmNlOiB0cnVlfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jbGlja2VkT3V0c2lkZSgpIHtcclxuICAgIGNvbnN0IG5ld0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3SXRlbScpO1xyXG4gICAgbmV3SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldCA9PSBlLnRhcmdldClcclxuICAgICAgICAgICAgX3JlbW92ZVByb21wdCgpO1xyXG4gICAgfSwge29uY2U6IHRydWV9KTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9yZW1vdmVQcm9tcHQoKSB7XHJcbiAgICBjb25zdCBuZXdJdGVtRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld0l0ZW0nKTtcclxuICAgIG5ld0l0ZW1EaXYucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb21wdHMnKSk7XHJcbiAgICBuZXdJdGVtRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgIF9lbmFibGVOZXdCdXR0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9lbmFibGVOZXdCdXR0KCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZCcpLmRpc2FibGVkID0gZmFsc2U7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9tcHQ7IiwiaW1wb3J0IHNob3dMaXN0IGZyb20gXCIuL2NyZWF0ZU9uU2NyZWVuXCI7XHJcbmltcG9ydCBjcmVhdGVQcm9tcHQgZnJvbSAnLi9jcmVhdGVQcm9tcHQnO1xyXG5cclxuY29uc3QgZWRpdEl0ZW0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBlZGl0SXQgPSAobmFtZSwgaXRlbSwgbGlzdCkgPT4ge1xyXG4gICAgICAgIF9zaG93Rm9ybSgpO1xyXG4gICAgICAgIGNyZWF0ZVByb21wdCgpLmNyZWF0ZUl0KG5hbWUpO1xyXG4gICAgICAgIF9maWxsRGF0YShpdGVtKTtcclxuICAgICAgICBfY2hhbmdlRGF0YShpdGVtLCBsaXN0KTtcclxuICAgIH1cclxuICAgIHJldHVybiB7ZWRpdEl0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3Nob3dGb3JtKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld0l0ZW0nKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9maWxsRGF0YShpdGVtKSB7XHJcbiAgICBsZXQgZmVpbGRzID0gX3Byb21wdEEoKTtcclxuICAgIGZlaWxkcy50aXRsZS52YWx1ZSA9IGl0ZW0uZ2V0VGl0bGUoKTtcclxuICAgIGZlaWxkcy5kZXMudmFsdWUgPSBpdGVtLmdldERlcygpO1xyXG4gICAgZmVpbGRzLmRhdGUudmFsdWUgPSBpdGVtLmdldERhdGUoKTtcclxuICAgIGZlaWxkcy5wcmlvcml0eS52YWx1ZSA9IGl0ZW0uZ2V0UHJpb3JpdHkoKTtcclxufVxyXG5cclxuY29uc3QgX3Byb21wdEEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbl90aXRsZV9hbnMnKTtcclxuICAgIGNvbnN0IGRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbl9kZXNfYW5zJyk7XHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX2RhdGVfYW5zJyk7XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbl9wcmlvcml0eV9hbnMnKTtcclxuXHJcbiAgICByZXR1cm4ge3RpdGxlLCBkZXMsIGRhdGUsIHByaW9yaXR5fTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NoYW5nZURhdGEoaXRlbSwgbGlzdCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gIHtcclxuICAgICAgICBfc3RvcmVDaGFuZ2VzKGl0ZW0pO1xyXG4gICAgICAgIF9yZW1vdmVQcm9tcHQoKTtcclxuICAgICAgICBpZiAobGlzdC5nZXRMaXN0KCkgIT0gbnVsbClcclxuICAgICAgICAgICAgc2hvd0xpc3QobGlzdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3N0b3JlQ2hhbmdlcyhpdGVtKSB7XHJcbiAgICBsZXQgaW5wdXQgPSBfcHJvbXB0QSgpO1xyXG4gICAgaXRlbS5zZXRUaXRsZShpbnB1dC50aXRsZS52YWx1ZSk7XHJcbiAgICBpdGVtLnNldERlcyhpbnB1dC5kZXMudmFsdWUpO1xyXG4gICAgaXRlbS5zZXREYXRlKGlucHV0LmRhdGUudmFsdWUpO1xyXG4gICAgaXRlbS5zZXRQcmlvcml0eShpbnB1dC5wcmlvcml0eS52YWx1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9yZW1vdmVQcm9tcHQoKSB7XHJcbiAgICBjb25zdCBuZXdJdGVtRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld0l0ZW0nKTtcclxuICAgIG5ld0l0ZW1EaXYucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb21wdHMnKSk7XHJcbiAgICBuZXdJdGVtRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZWRpdEl0ZW07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9lZGl0SXRlbS5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==