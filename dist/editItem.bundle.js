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
/* harmony import */ var _newItemControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newItemControl */ "./src/js/newItemControl.js");
// show item and other on html file
// DOM stuff




function showList(list) {
    const list_div = document.querySelector('.list');
    _clearScreen(list_div);
    if (list.getList()[0] == undefined)
        _showEmpty(list_div, list);
    else {
        for (let i = 0; i < list.getList().length; i++) {
            _showItem(list_div, list, list.getList()[i], i);
        }
    }
}

function _showEmpty(list_div, list) {
    const emptyDiv = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'click here to add new item', 'empty_item');
    list_div.appendChild(emptyDiv);
    emptyDiv.addEventListener('click', () => (0,_newItemControl__WEBPACK_IMPORTED_MODULE_2__["default"])().storeNewItem(list));
}

function _showItem(list_div, list, item, i) {
    list_div.appendChild(_appendItem(list, _getItem(item), item, i));
}

function _appendItem (list, item_div, item, i) {
    const itemDiv = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', `item`);
    itemDiv.classList.add('item');
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
    editButt.addEventListener('click', () => (0,_editItem__WEBPACK_IMPORTED_MODULE_1__["default"])().editIt(item, list));
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
    _showForm();
    const elements = _createPromptEle(name);
    elements.prompt_div.appendChild(elements.butt_div);
    elements.newItemDiv.appendChild(elements.prompt_div);
}

function _showForm() {
    document.querySelector(`.newItem`).classList.remove('hide');
}

function _createPromptEle(name) {
    const newItemDiv = document.querySelector(`.newItem`);
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
    const prompt_div = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', `prompts`);
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
    butt.addEventListener('click', () => _removePrompt(), {once: true});
}

function _clickedOutside() {
    const newItem = document.querySelector(`.newItem`);
    newItem.addEventListener('click', (e) => {
        if (e.currentTarget == e.target)
            _removePrompt();
    }, {once: true});

}

function _removePrompt() {
    const newItemDiv = document.querySelector(`.newItem`);
    newItemDiv.removeChild(document.querySelector(`.prompts`));
    newItemDiv.classList.add('hide');
    _enableNewButt();
}

function _enableNewButt() {
    document.querySelector(`.add`).disabled = false;
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
    const editIt = (item, list) => {
        _showForm();
        (0,_createPrompt__WEBPACK_IMPORTED_MODULE_1__["default"])().createIt('SAVE');
        _fillData(item);
        _changeData(item, list);
    }
    return {editIt};
}

function _showForm() {
    document.querySelector(`.newItem`).classList.remove('hide');
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
    const newItemDiv = document.querySelector(`.newItem`);
    newItemDiv.removeChild(document.querySelector(`.prompts`));
    newItemDiv.classList.add('hide');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editItem);

/***/ }),

/***/ "./src/js/newItemControl.js":
/*!**********************************!*\
  !*** ./src/js/newItemControl.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoItem */ "./src/js/toDoItem.js");
/* harmony import */ var _createOnScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createOnScreen */ "./src/js/createOnScreen.js");
/* harmony import */ var _createPrompt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPrompt */ "./src/js/createPrompt.js");




const  newItemControl = () => {
    const storeNewItem = (list) => {
        _disableNewButt();
        (0,_createPrompt__WEBPACK_IMPORTED_MODULE_2__["default"])().createIt('add');
        _storeItem(list);
    }

    return {storeNewItem};
}

function _disableNewButt() {
    document.querySelector(`.add`).disabled = true;
}

function _enableNewButt() {
    document.querySelector(`.add`).disabled = false;
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
    return (0,_toDoItem__WEBPACK_IMPORTED_MODULE_0__["default"])(input.title, input.des, input.date, input.priority);
}

function _removePrompt() {
    const newItemDiv = document.querySelector('.newItem');
    newItemDiv.removeChild(document.querySelector('.prompts'));
    newItemDiv.classList.add('hide');
    _enableNewButt();
}

function _storeIt(list, newItem) {
    list.addItem(newItem);
    (0,_createOnScreen__WEBPACK_IMPORTED_MODULE_1__["default"])(list);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newItemControl);

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

    const setTitle = (newTitle) => {
        myTitle = newTitle;
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

    return {getTitle, setTitle, getDes, setDes, setDate, getDate, 
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/editItem.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVEsSUFBSSxPQUFPLElBQUksV0FBVztBQUNwRDtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVE7Ozs7OztVQ3ZEdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL2NyZWF0ZUVsZS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL2NyZWF0ZU9uU2NyZWVuLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvY3JlYXRlUHJvbXB0LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvZWRpdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy9uZXdJdGVtQ29udHJvbC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL3RvRG9JdGVtLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlRWxlICh0eXBlLCB2YWx1ZSwgY2xhc3NOYW1lKSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xyXG4gICAgdGFyZ2V0LnRleHRDb250ZW50ID0gdmFsdWU7XHJcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlIDsiLCIvLyBzaG93IGl0ZW0gYW5kIG90aGVyIG9uIGh0bWwgZmlsZVxyXG4vLyBET00gc3R1ZmZcclxuaW1wb3J0IGNyZWF0ZUVsZSBmcm9tIFwiLi9jcmVhdGVFbGVcIjtcclxuaW1wb3J0IGVkaXRJdGVtIGZyb20gXCIuL2VkaXRJdGVtXCI7XHJcbmltcG9ydCBuZXdJdGVtQ29udHJvbCBmcm9tIFwiLi9uZXdJdGVtQ29udHJvbFwiO1xyXG5cclxuZnVuY3Rpb24gc2hvd0xpc3QobGlzdCkge1xyXG4gICAgY29uc3QgbGlzdF9kaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpO1xyXG4gICAgX2NsZWFyU2NyZWVuKGxpc3RfZGl2KTtcclxuICAgIGlmIChsaXN0LmdldExpc3QoKVswXSA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgX3Nob3dFbXB0eShsaXN0X2RpdiwgbGlzdCk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QuZ2V0TGlzdCgpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIF9zaG93SXRlbShsaXN0X2RpdiwgbGlzdCwgbGlzdC5nZXRMaXN0KClbaV0sIGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gX3Nob3dFbXB0eShsaXN0X2RpdiwgbGlzdCkge1xyXG4gICAgY29uc3QgZW1wdHlEaXYgPSBjcmVhdGVFbGUoJ2RpdicsICdjbGljayBoZXJlIHRvIGFkZCBuZXcgaXRlbScsICdlbXB0eV9pdGVtJyk7XHJcbiAgICBsaXN0X2Rpdi5hcHBlbmRDaGlsZChlbXB0eURpdik7XHJcbiAgICBlbXB0eURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG5ld0l0ZW1Db250cm9sKCkuc3RvcmVOZXdJdGVtKGxpc3QpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3Nob3dJdGVtKGxpc3RfZGl2LCBsaXN0LCBpdGVtLCBpKSB7XHJcbiAgICBsaXN0X2Rpdi5hcHBlbmRDaGlsZChfYXBwZW5kSXRlbShsaXN0LCBfZ2V0SXRlbShpdGVtKSwgaXRlbSwgaSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfYXBwZW5kSXRlbSAobGlzdCwgaXRlbV9kaXYsIGl0ZW0sIGkpIHtcclxuICAgIGNvbnN0IGl0ZW1EaXYgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCBgaXRlbWApO1xyXG4gICAgaXRlbURpdi5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XHJcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKF9jcmVhdGVCYXNpY0RpdihsaXN0LCBpdGVtX2RpdiwgaXRlbSwgaSkpO1xyXG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChfY3JlYXRlRGVzKGl0ZW1fZGl2LmRlcykpO1xyXG4gICAgcmV0dXJuIGl0ZW1EaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVCYXNpY0RpdihsaXN0LCBpdGVtX2RpdiwgaXRlbSwgaSkge1xyXG4gICAgY29uc3QgYmFzaWNEaXYgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCAnYmFzaWMnKTtcclxuICAgIGJhc2ljRGl2LmFwcGVuZENoaWxkKGl0ZW1fZGl2LnN0YXR1cyk7XHJcbiAgICBiYXNpY0Rpdi5hcHBlbmRDaGlsZChpdGVtX2Rpdi50aXRsZSk7XHJcbiAgICBiYXNpY0Rpdi5hcHBlbmRDaGlsZChpdGVtX2Rpdi5kYXRlKTtcclxuICAgIGJhc2ljRGl2LmFwcGVuZENoaWxkKGl0ZW1fZGl2LnByaW9yaXR5KTtcclxuICAgIGJhc2ljRGl2LmFwcGVuZENoaWxkKF9jcmVhdGVFZGl0QnV0dChpdGVtLCBsaXN0KSk7XHJcbiAgICBiYXNpY0Rpdi5hcHBlbmRDaGlsZChfY3JlYXRlRGVsZXRlQnV0dChsaXN0LCBpKSk7XHJcbiAgICBiYXNpY0Rpdi5hcHBlbmRDaGlsZChfY3JlYXRlRXhwYW5kQnV0dChpdGVtX2Rpdi5kZXMpKTtcclxuICAgIHJldHVybiBiYXNpY0RpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2dldEl0ZW0oaXRlbSkge1xyXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGUoJ2RpdicsIGl0ZW0uZ2V0VGl0bGUoKSwgJ3RpdGxlJyk7XHJcbiAgICBjb25zdCBkZXMgPSBjcmVhdGVFbGUoJ2RpdicsIGl0ZW0uZ2V0RGVzKCksICdkZXMnKTtcclxuICAgIGNvbnN0IGRhdGUgPSBjcmVhdGVFbGUoJ2RpdicsIGl0ZW0uZ2V0RGF0ZSgpLCAnZGF0ZScpO1xyXG4gICAgY29uc3QgcHJpb3JpdHkgPSBjcmVhdGVFbGUoJ2RpdicsIGl0ZW0uZ2V0UHJpb3JpdHkoKSwgJ3ByaW9yaXR5Jyk7XHJcbiAgICBjb25zdCBzdGF0dXMgPSBfY3JlYXRlU3RhdHVzRGl2KGl0ZW0pO1xyXG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzLCBkYXRlLCBwcmlvcml0eSwgc3RhdHVzfTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NsZWFyU2NyZWVuKGxpc3RfZGl2KSB7XHJcbiAgICB3aGlsZShsaXN0X2Rpdi5maXJzdENoaWxkICE9IG51bGwpXHJcbiAgICAgICAgbGlzdF9kaXYucmVtb3ZlQ2hpbGQobGlzdF9kaXYuZmlyc3RDaGlsZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVTdGF0dXNEaXYoaXRlbSkge1xyXG4gICAgY29uc3Qgc3RhdHVzRGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgJ3N0YXR1cycpO1xyXG4gICAgY29uc3Qgc3RhdHVzTGFiZWwgPSBfY3JlYXRlTGFiZWwoKTtcclxuICAgIGNvbnN0IHN0YXR1c0NoZWNrID0gX2NyZWF0ZUNoZWNrKGl0ZW0pO1xyXG4gICAgc3RhdHVzRGl2LmFwcGVuZENoaWxkKHN0YXR1c0NoZWNrKTtcclxuICAgIHJldHVybiBzdGF0dXNEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVMYWJlbCgpIHtcclxuICAgIGNvbnN0IHN0YXR1c0xhYmVsID0gY3JlYXRlRWxlKCdsYWJlbCcsICdDb21wbGV0ZWQnLCAnc3RhdHVzX2wnKTtcclxuICAgIHN0YXR1c0xhYmVsLmh0bWxGb3IgPSAnc3RhdHVzJztcclxuICAgIHJldHVybiBzdGF0dXNMYWJlbDtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUNoZWNrKGl0ZW0pIHtcclxuICAgIGNvbnN0IHN0YXR1c0NoZWNrID0gY3JlYXRlRWxlKCdpbnB1dCcsICcnLCAnc3RhdHVzX2MnKTtcclxuICAgIHN0YXR1c0NoZWNrLnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gICAgc3RhdHVzQ2hlY2submFtZSA9ICdzdGF0dXMnO1xyXG4gICAgaWYgKGl0ZW0uZ2V0U3RhdHVzKCkpXHJcbiAgICAgICAgc3RhdHVzQ2hlY2suY2hlY2tlZCA9IHRydWU7XHJcbiAgICBzdGF0dXNDaGVjay5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgaXRlbS5zZXRTdGF0dXMoKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHN0YXR1c0NoZWNrO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlRGVsZXRlQnV0dChsaXN0LCBpKSB7XHJcbiAgICBjb25zdCBkZWxlQnV0dCA9IGNyZWF0ZUVsZSgnYnV0dG9uJywgJ0RlbGV0ZScsICdkZWxldGUnKTtcclxuICAgIGRlbGVCdXR0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBfZGVsZXRlRW50cnkobGlzdCwgaSkpO1xyXG4gICAgcmV0dXJuIGRlbGVCdXR0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZGVsZXRlRW50cnkobGlzdCwgaSkge1xyXG4gICAgX3JlbW92ZUl0ZW0obGlzdCwgaSk7XHJcbiAgICBzaG93TGlzdChsaXN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3JlbW92ZUl0ZW0obGlzdCwgaSkge1xyXG4gICAgY29uc3QgbGlzdF9kaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpO1xyXG4gICAgd2hpbGUgKGxpc3RfZGl2LmZpcnN0Q2hpbGQgIT0gbnVsbCkgXHJcbiAgICAgICAgbGlzdF9kaXYucmVtb3ZlQ2hpbGQobGlzdF9kaXYuZmlyc3RDaGlsZCk7XHJcbiAgICBsaXN0LnJlbW92ZUl0ZW0oaSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVFZGl0QnV0dChpdGVtLCBsaXN0KSB7XHJcbiAgICBjb25zdCBlZGl0QnV0dCA9IGNyZWF0ZUVsZSgnYnV0dG9uJywgJ2VkaXQnLCAnZWRpdCcpO1xyXG4gICAgZWRpdEJ1dHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBlZGl0SXRlbSgpLmVkaXRJdChpdGVtLCBsaXN0KSk7XHJcbiAgICByZXR1cm4gZWRpdEJ1dHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVFeHBhbmRCdXR0KGRlcykge1xyXG4gICAgY29uc3QgZXhwYW5kQnV0dCA9IGNyZWF0ZUVsZSgnYnV0dG9uJywgJ2V4cGFuZCcsICdleHBhbmQnKTtcclxuICAgIGV4cGFuZEJ1dHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfc2hvd0RlcyhleHBhbmRCdXR0LCBkZXMucGFyZW50Tm9kZSkpO1xyXG4gICAgcmV0dXJuIGV4cGFuZEJ1dHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9zaG93RGVzKGV4cGFuZEJ1dHQsIGRlc19jb250YWluZXIpIHtcclxuICAgIGlmIChkZXNfY29udGFpbmVyLmNsYXNzTGlzdFsxXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBkZXNfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBleHBhbmRCdXR0LnRleHRDb250ZW50ID0gJ2V4cGFuZCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlc19jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgIGV4cGFuZEJ1dHQudGV4dENvbnRlbnQgPSAnaGlkZSc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVEZXMoZGVzRGl2KSB7XHJcbiAgICBjb25zdCBkZXNfY29udGFpbmVyID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgJ2Rlc19kaXYnKTtcclxuICAgIGRlc19jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgZGVzX2NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNEaXYpO1xyXG4gICAgcmV0dXJuIGRlc19jb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dMaXN0OyIsImltcG9ydCBjcmVhdGVFbGUgZnJvbSBcIi4vY3JlYXRlRWxlXCI7XHJcblxyXG5jb25zdCBjcmVhdGVQcm9tcHQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjcmVhdGVJdCA9IChuYW1lKSA9PiB7XHJcbiAgICAgICAgX2Rpc3BsYXlQcm9tcHQobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtjcmVhdGVJdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9kaXNwbGF5UHJvbXB0KG5hbWUpIHtcclxuICAgIF9zaG93Rm9ybSgpO1xyXG4gICAgY29uc3QgZWxlbWVudHMgPSBfY3JlYXRlUHJvbXB0RWxlKG5hbWUpO1xyXG4gICAgZWxlbWVudHMucHJvbXB0X2Rpdi5hcHBlbmRDaGlsZChlbGVtZW50cy5idXR0X2Rpdik7XHJcbiAgICBlbGVtZW50cy5uZXdJdGVtRGl2LmFwcGVuZENoaWxkKGVsZW1lbnRzLnByb21wdF9kaXYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfc2hvd0Zvcm0oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubmV3SXRlbWApLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZVByb21wdEVsZShuYW1lKSB7XHJcbiAgICBjb25zdCBuZXdJdGVtRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm5ld0l0ZW1gKTtcclxuICAgIGNvbnN0IHByb21wdF9kaXYgPSBfYXBwZW5kUHJvbXB0cyhfcHJvbXB0USgpKTtcclxuICAgIGNvbnN0IGZpbl9idXR0ID0gY3JlYXRlRWxlKCdidXR0b24nLCBuYW1lLCAnZmluJyk7XHJcbiAgICBjb25zdCBjYW5jZWxfYnV0dCA9IGNyZWF0ZUVsZSgnYnV0dG9uJywgJ0NhbmNlbCcsICdjYW5jZWwnKTtcclxuICAgIGNvbnN0IGJ1dHRfZGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgJ2J1dHRfZGl2Jyk7XHJcbiAgICBidXR0X2Rpdi5hcHBlbmRDaGlsZChmaW5fYnV0dCk7XHJcbiAgICBidXR0X2Rpdi5hcHBlbmRDaGlsZChjYW5jZWxfYnV0dCk7XHJcbiAgICBfY2xpY2tUb0NhbmNlbChjYW5jZWxfYnV0dCk7XHJcbiAgICBfY2xpY2tlZE91dHNpZGUoKTtcclxuICAgIHJldHVybiB7bmV3SXRlbURpdiwgcHJvbXB0X2RpdiwgYnV0dF9kaXZ9O1xyXG59XHJcblxyXG5jb25zdCBfcHJvbXB0USA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFza1RpdGxlID0gXCJUbyBkbyBpdGVtIG5hbWVcIjtcclxuICAgIGNvbnN0IGFza0RlcyA9IFwidG8gZG8gaXRlbSBkZXNjcmlwdGlvblwiO1xyXG4gICAgY29uc3QgYXNrRGF0ZSA9IFwiaXRlbSBkdWUgZGF0ZVwiO1xyXG4gICAgY29uc3QgYXNrUHJpb3JpdHkgPSBcIml0ZW0ncyBwcmlvcml0eVwiO1xyXG5cclxuICAgIHJldHVybiB7YXNrVGl0bGUsIGFza0RlcywgYXNrRGF0ZSwgYXNrUHJpb3JpdHl9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfYXBwZW5kUHJvbXB0cyhwcm9tcHRzKSB7XHJcbiAgICBjb25zdCBwcm9tcHRfZGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgYHByb21wdHNgKTtcclxuICAgIGNvbnN0IHRpdGxlX2RpdiA9IF9jcmVhdGVMYWJsZUlucHV0KHByb21wdHMuYXNrVGl0bGUsICdpbnB1dCcsICdpbl90aXRsZScpO1xyXG4gICAgY29uc3QgZGVzX2RpdiA9IF9jcmVhdGVMYWJsZUlucHV0KHByb21wdHMuYXNrRGVzLCAndGV4dGFyZWEnLCAnaW5fZGVzJyk7XHJcbiAgICBjb25zdCBkYXRlX2RpdiA9IF9jcmVhdGVMYWJsZUlucHV0KHByb21wdHMuYXNrRGF0ZSwgJ2lucHV0JywgJ2luX2RhdGUnKTtcclxuICAgIGNvbnN0IHByaW9yaXR5X2RpdiA9IF9jcmVhdGVQcmlvcml0eURpdihwcm9tcHRzLmFza1ByaW9yaXR5KTtcclxuICAgIHByb21wdF9kaXYuYXBwZW5kQ2hpbGQodGl0bGVfZGl2KTtcclxuICAgIHByb21wdF9kaXYuYXBwZW5kQ2hpbGQoZGVzX2Rpdik7XHJcbiAgICBwcm9tcHRfZGl2LmFwcGVuZENoaWxkKGRhdGVfZGl2KTtcclxuICAgIHByb21wdF9kaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlfZGl2KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHByb21wdF9kaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVMYWJsZUlucHV0KHF1ZXN0aW9uLCB0eXBlLCBjbGFzc05hbWUpIHtcclxuICAgIGNvbnN0IHFfZGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgJ3FfZGl2Jyk7XHJcbiAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUVsZSgnbGFiZWwnLCBxdWVzdGlvbiwgJ2luJyk7XHJcbiAgICBjb25zdCBhbnN3ZXIgPSBjcmVhdGVFbGUodHlwZSwgJycsIGAke2NsYXNzTmFtZX1fYW5zYCk7XHJcbiAgICBxX2Rpdi5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgICBxX2Rpdi5hcHBlbmRDaGlsZChhbnN3ZXIpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gcV9kaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVQcmlvcml0eURpdihxdWVzdGlvbikge1xyXG4gICAgY29uc3QgcHJpb3JpdHlEaXYgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCAncV9kaXYnKTtcclxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBjcmVhdGVFbGUoJ2xhYmVsJywgcXVlc3Rpb24sICdpbicpO1xyXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBjcmVhdGVFbGUoJ3NlbGVjdCcsICcnLCAnaW5fcHJpb3JpdHlfYW5zJyk7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5uYW1lID0gJ3ByaW9yaXR5JztcclxuICAgIGNvbnN0IG9wdGlvblRvcCA9IF9jcmVhdGVPcHRpb24oJ3RvcCcpO1xyXG4gICAgY29uc3Qgb3B0aW9uTWlkID0gX2NyZWF0ZU9wdGlvbignbWlkZGxlJyk7XHJcbiAgICBjb25zdCBvcHRpb25Mb3cgPSBfY3JlYXRlT3B0aW9uKCdsb3cnKTtcclxuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvblRvcCk7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25NaWQpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uTG93KTtcclxuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xyXG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gcHJpb3JpdHlEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVPcHRpb24ocHJpb3JpdHkpIHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGNyZWF0ZUVsZSgnb3B0aW9uJywgcHJpb3JpdHksIGBpbl9vcHRpb25zXyR7cHJpb3JpdHl9YCk7XHJcbiAgICBvcHRpb24udmFsdWUgPSBwcmlvcml0eTtcclxuICAgIHJldHVybiBvcHRpb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jbGlja1RvQ2FuY2VsKGJ1dHQpIHtcclxuICAgIGJ1dHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfcmVtb3ZlUHJvbXB0KCksIHtvbmNlOiB0cnVlfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jbGlja2VkT3V0c2lkZSgpIHtcclxuICAgIGNvbnN0IG5ld0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubmV3SXRlbWApO1xyXG4gICAgbmV3SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldCA9PSBlLnRhcmdldClcclxuICAgICAgICAgICAgX3JlbW92ZVByb21wdCgpO1xyXG4gICAgfSwge29uY2U6IHRydWV9KTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9yZW1vdmVQcm9tcHQoKSB7XHJcbiAgICBjb25zdCBuZXdJdGVtRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm5ld0l0ZW1gKTtcclxuICAgIG5ld0l0ZW1EaXYucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb21wdHNgKSk7XHJcbiAgICBuZXdJdGVtRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgIF9lbmFibGVOZXdCdXR0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9lbmFibGVOZXdCdXR0KCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmFkZGApLmRpc2FibGVkID0gZmFsc2U7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9tcHQ7IiwiaW1wb3J0IHNob3dMaXN0IGZyb20gXCIuL2NyZWF0ZU9uU2NyZWVuXCI7XHJcbmltcG9ydCBjcmVhdGVQcm9tcHQgZnJvbSAnLi9jcmVhdGVQcm9tcHQnO1xyXG5cclxuY29uc3QgZWRpdEl0ZW0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBlZGl0SXQgPSAoaXRlbSwgbGlzdCkgPT4ge1xyXG4gICAgICAgIF9zaG93Rm9ybSgpO1xyXG4gICAgICAgIGNyZWF0ZVByb21wdCgpLmNyZWF0ZUl0KCdTQVZFJyk7XHJcbiAgICAgICAgX2ZpbGxEYXRhKGl0ZW0pO1xyXG4gICAgICAgIF9jaGFuZ2VEYXRhKGl0ZW0sIGxpc3QpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtlZGl0SXR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfc2hvd0Zvcm0oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubmV3SXRlbWApLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2ZpbGxEYXRhKGl0ZW0pIHtcclxuICAgIGxldCBmZWlsZHMgPSBfcHJvbXB0QSgpO1xyXG4gICAgZmVpbGRzLnRpdGxlLnZhbHVlID0gaXRlbS5nZXRUaXRsZSgpO1xyXG4gICAgZmVpbGRzLmRlcy52YWx1ZSA9IGl0ZW0uZ2V0RGVzKCk7XHJcbiAgICBmZWlsZHMuZGF0ZS52YWx1ZSA9IGl0ZW0uZ2V0RGF0ZSgpO1xyXG4gICAgZmVpbGRzLnByaW9yaXR5LnZhbHVlID0gaXRlbS5nZXRQcmlvcml0eSgpO1xyXG59XHJcblxyXG5jb25zdCBfcHJvbXB0QSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX3RpdGxlX2FucycpO1xyXG4gICAgY29uc3QgZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX2Rlc19hbnMnKTtcclxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5fZGF0ZV9hbnMnKTtcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX3ByaW9yaXR5X2FucycpO1xyXG5cclxuICAgIHJldHVybiB7dGl0bGUsIGRlcywgZGF0ZSwgcHJpb3JpdHl9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY2hhbmdlRGF0YShpdGVtLCBsaXN0KSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmluJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiAge1xyXG4gICAgICAgIF9zdG9yZUNoYW5nZXMoaXRlbSk7XHJcbiAgICAgICAgX3JlbW92ZVByb21wdCgpO1xyXG4gICAgICAgIGlmIChsaXN0LmdldExpc3QoKSAhPSBudWxsKVxyXG4gICAgICAgICAgICBzaG93TGlzdChsaXN0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfc3RvcmVDaGFuZ2VzKGl0ZW0pIHtcclxuICAgIGxldCBpbnB1dCA9IF9wcm9tcHRBKCk7XHJcbiAgICBpdGVtLnNldFRpdGxlKGlucHV0LnRpdGxlLnZhbHVlKTtcclxuICAgIGl0ZW0uc2V0RGVzKGlucHV0LmRlcy52YWx1ZSk7XHJcbiAgICBpdGVtLnNldERhdGUoaW5wdXQuZGF0ZS52YWx1ZSk7XHJcbiAgICBpdGVtLnNldFByaW9yaXR5KGlucHV0LnByaW9yaXR5LnZhbHVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3JlbW92ZVByb21wdCgpIHtcclxuICAgIGNvbnN0IG5ld0l0ZW1EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubmV3SXRlbWApO1xyXG4gICAgbmV3SXRlbURpdi5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvbXB0c2ApKTtcclxuICAgIG5ld0l0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlZGl0SXRlbTsiLCJpbXBvcnQgdG9Eb0l0ZW0gZnJvbSBcIi4vdG9Eb0l0ZW1cIjtcclxuaW1wb3J0IHNob3dJdCBmcm9tIFwiLi9jcmVhdGVPblNjcmVlblwiO1xyXG5pbXBvcnQgY3JlYXRlUHJvbXB0IGZyb20gXCIuL2NyZWF0ZVByb21wdFwiO1xyXG5cclxuY29uc3QgIG5ld0l0ZW1Db250cm9sID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVOZXdJdGVtID0gKGxpc3QpID0+IHtcclxuICAgICAgICBfZGlzYWJsZU5ld0J1dHQoKTtcclxuICAgICAgICBjcmVhdGVQcm9tcHQoKS5jcmVhdGVJdCgnYWRkJyk7XHJcbiAgICAgICAgX3N0b3JlSXRlbShsaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge3N0b3JlTmV3SXRlbX07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9kaXNhYmxlTmV3QnV0dCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5hZGRgKS5kaXNhYmxlZCA9IHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9lbmFibGVOZXdCdXR0KCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmFkZGApLmRpc2FibGVkID0gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9zdG9yZUl0ZW0gKGxpc3QpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdJdGVtID0gX2dldEl0ZW0oKTtcclxuICAgICAgICBfc3RvcmVJdChsaXN0LCBuZXdJdGVtKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZ2V0SXRlbSgpIHtcclxuICAgIGxldCBpbnB1dCA9IF9wcm9tcHRBKCk7XHJcbiAgICBfcmVtb3ZlUHJvbXB0KCk7XHJcbiAgICByZXR1cm4gaW5wdXRUb0l0ZW0oaW5wdXQpO1xyXG59XHJcblxyXG5jb25zdCBfcHJvbXB0QSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX3RpdGxlX2FucycpLnZhbHVlO1xyXG4gICAgY29uc3QgZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX2Rlc19hbnMnKS52YWx1ZTtcclxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5fZGF0ZV9hbnMnKS52YWx1ZTtcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX3ByaW9yaXR5X2FucycpLnZhbHVlO1xyXG5cclxuICAgIHJldHVybiB7dGl0bGUsIGRlcywgZGF0ZSwgcHJpb3JpdHl9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnB1dFRvSXRlbShpbnB1dCkge1xyXG4gICAgcmV0dXJuIHRvRG9JdGVtKGlucHV0LnRpdGxlLCBpbnB1dC5kZXMsIGlucHV0LmRhdGUsIGlucHV0LnByaW9yaXR5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3JlbW92ZVByb21wdCgpIHtcclxuICAgIGNvbnN0IG5ld0l0ZW1EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3SXRlbScpO1xyXG4gICAgbmV3SXRlbURpdi5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvbXB0cycpKTtcclxuICAgIG5ld0l0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgX2VuYWJsZU5ld0J1dHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3N0b3JlSXQobGlzdCwgbmV3SXRlbSkge1xyXG4gICAgbGlzdC5hZGRJdGVtKG5ld0l0ZW0pO1xyXG4gICAgc2hvd0l0KGxpc3QpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXdJdGVtQ29udHJvbDsiLCJjb25zdCB0b0RvSXRlbSA9ICh0aXRsZSwgZGVzLCBkYXRlLCBwcmlvcml0eSkgPT4ge1xyXG4gICAgbGV0IG15VGl0bGUgPSB0aXRsZTtcclxuICAgIGxldCBteURlcyA9IGRlcztcclxuICAgIGxldCBteURhdGUgPSBkYXRlO1xyXG4gICAgbGV0IG15UHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIGxldCBteVN0YXR1cyA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBteVRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XHJcbiAgICAgICAgbXlUaXRsZSA9IG5ld1RpdGxlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBnZXREZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG15RGVzO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZXREZXMgPSAobmV3RGVzKSA9PiB7XHJcbiAgICAgICAgbXlEZXMgPSBuZXdEZXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbXlEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldERhdGUgPSAobmV3RGF0ZSkgPT4ge1xyXG4gICAgICAgIG15RGF0ZSA9IG5ld0RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG15UHJpb3JpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0UHJpb3JpdHkgPSAobmV3UHJpb3JpdHkpID0+IHtcclxuICAgICAgICBteVByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0U3RhdHVzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBteVN0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRTdGF0dXMgPSAoKSA9PiB7XHJcbiAgICAgICAgbXlTdGF0dXMgPSAhbXlTdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGAke215VGl0bGV9LCAke215RGF0ZX0sICR7bXlQcmlvcml0eX1gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7Z2V0VGl0bGUsIHNldFRpdGxlLCBnZXREZXMsIHNldERlcywgc2V0RGF0ZSwgZ2V0RGF0ZSwgXHJcbiAgICAgICAgICAgICAgICBnZXRQcmlvcml0eSwgc2V0UHJpb3JpdHksIGdldFN0YXR1cywgc2V0U3RhdHVzLCB0b1N0cmluZ307XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b0RvSXRlbTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL2VkaXRJdGVtLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9