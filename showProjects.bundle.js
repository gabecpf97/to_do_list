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

/***/ }),

/***/ "./src/js/toDoList.js":
/*!****************************!*\
  !*** ./src/js/toDoList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// object that store all item

const toDoList = (name) => {
    let myName = name;
    let items = [];
    let midIndex = items.length;
    let lowIndex = items.length;

    const getName = () => {
        return myName;
    }

    const setName = (newName) => {
        myName = newName;
    }

    const getList = () => {
        return items;
    }

    const addItem = (newItem) => {
        const pri = newItem.getPriority();
        _placeItemByPriority(pri, newItem);
    }

    const removeItem = (target) => {
        _updateIndex(items[target].getPriority());
        items.splice(target, 1);
    }

    const removeAll = () => {
        items = [];
    }

    const showList = () => {
        let result = "";
        items.forEach(item => {
            result += item.toString() + '\n';
        });
        return result;
    }

    function _placeItemByPriority(pri, item) {
        switch (pri) {
            case 'top':
                items.splice(midIndex, 0, item);
                midIndex += 1;
                lowIndex += 1;
                break;
    
            case 'middle':
                items.splice(lowIndex, 0, item);
                lowIndex += 1;
                break;
    
            case 'low':
                items.splice(items.length, 0, item);
                break;
        }
    }

    function _updateIndex(pri) {
        switch (pri) {
            case 'top':
                midIndex -= 1;
                lowIndex -= 1;
                break;

            case 'middle':
                lowIndex -= 1;
                break;
        }
    }

    return {getName, setName, getList, addItem, removeItem, removeAll, showList};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDoList);

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
  !*** ./src/js/showProjects.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createEle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createEle */ "./src/js/createEle.js");
/* harmony import */ var _createOnScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createOnScreen */ "./src/js/createOnScreen.js");
/* harmony import */ var _newItemControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newItemControl */ "./src/js/newItemControl.js");
/* harmony import */ var _toDoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDoList */ "./src/js/toDoList.js");





function showProjects(projects) {
    _createHeader(projects);
    projects.getProjects().forEach(list => {
        _displayHeader(list);
        (0,_createOnScreen__WEBPACK_IMPORTED_MODULE_1__["default"])(list);
    });
}

function _createHeader(projects) {
    const content = document.querySelector('.content');
    const header = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'headerDiv');
    header.appendChild(_createTab(projects));
    content.appendChild(header);
}

function _displayHeader(list) {
    const ele = _createListHeader(list);
    _appendEle(ele);
}

function _createListHeader(list) {
    const name = list.getName().replace(' ', '_');
    const addButt = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'add item', `add${name}`);
    addButt.classList.add('add');
    addButt.addEventListener('click', () => _clickToAdd(list));
    const newItemDiv = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', `newItem`);
    newItemDiv.classList.add('hide');
    const listDiv = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', `list`);
    return {addButt, newItemDiv, listDiv};
}

function _createTab(projects) {
    const tabDiv = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'tab');
    projects.getProjects().forEach(list => {
        const name = list.getName();
        const nameButt = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('button', `${name}`, `project_butt`);
        // nameButt.classList.add('project_butt');
        nameButt.addEventListener('click', () => _changeToProject(list));
        tabDiv.appendChild(nameButt);
    })
    tabDiv.appendChild(_createAddProjectButt(projects));
    return tabDiv;
}

function _changeToProject(list) {
    _clearList();
    _displayHeader(list);
    (0,_createOnScreen__WEBPACK_IMPORTED_MODULE_1__["default"])(list);
}

function _clearList() {
    const content = document.querySelector('.content');
    content.removeChild(document.querySelector('.add'));
    content.removeChild(document.querySelector('.newItem'));
    content.removeChild(document.querySelector('.list'));
}

function _createAddProjectButt(projects) {
    const addButt = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'new Project', 'add_project');
    addButt.addEventListener('click', () => _addProject(projects));
    return addButt;
}

function _addProject(projects) {
    const proj_prompt = prompt('Project Name:', 'New_project');
    const newList = (0,_toDoList__WEBPACK_IMPORTED_MODULE_3__["default"])(proj_prompt);
    projects.addList(newList);
    _clearHeader();
    document.querySelector('.headerDiv').appendChild(_createTab(projects));
}

function _clearHeader() {
    const header = document.querySelector('.headerDiv');
    while (header.firstChild != null)
        header.removeChild(header.firstChild);
}

function _clickToAdd(list) {
    const newItem = (0,_newItemControl__WEBPACK_IMPORTED_MODULE_2__["default"])();
    console.log(list.getList());
    newItem.storeNewItem(list);
}

function _appendEle (ele) {
    const content = document.querySelector('.content');
    for (const element in ele) {
        content.appendChild(ele[element]);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showProjects);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd1Byb2plY3RzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQeEI7QUFDQTtBQUNvQztBQUNGO0FBQ1k7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMkJBQTJCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzREFBUztBQUM5QjtBQUNBLDZDQUE2QywyREFBYztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzREFBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzREFBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNEQUFTO0FBQzNCLGdCQUFnQixzREFBUztBQUN6QixpQkFBaUIsc0RBQVM7QUFDMUIscUJBQXFCLHNEQUFTO0FBQzlCO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isc0RBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0RBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzREFBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0RBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzREFBUztBQUM5Qiw2Q0FBNkMscURBQVE7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0RBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsc0RBQVM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7OztBQ3ZJYTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0RBQVM7QUFDOUIsd0JBQXdCLHNEQUFTO0FBQ2pDLHFCQUFxQixzREFBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzREFBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixzREFBUztBQUMzQixrQkFBa0Isc0RBQVM7QUFDM0IsbUJBQW1CLHNEQUFTLGNBQWMsVUFBVTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzREFBUztBQUNqQywwQkFBMEIsc0RBQVM7QUFDbkMsMkJBQTJCLHNEQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0RBQVMsbUNBQW1DLFNBQVM7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxXQUFXO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxHQUFHLFdBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7OztBQ25IYTtBQUNFO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBWTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkRBQVE7QUFDcEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RFc7QUFDSTtBQUNJO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBWTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFdBQVcscURBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQU07QUFDVjtBQUNBO0FBQ0EsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7QUM1RDdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixRQUFRLElBQUksT0FBTyxJQUFJLFdBQVc7QUFDcEQ7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQ3ZEdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxpRUFBZSxRQUFROzs7Ozs7VUM3RXZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOb0M7QUFDSTtBQUNNO0FBQ1o7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQVE7QUFDaEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNEQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0RBQVMsNkJBQTZCLEtBQUs7QUFDL0Q7QUFDQTtBQUNBLHVCQUF1QixzREFBUztBQUNoQztBQUNBLG9CQUFvQixzREFBUztBQUM3QixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNEQUFTO0FBQzVCO0FBQ0E7QUFDQSx5QkFBeUIsc0RBQVMsY0FBYyxLQUFLO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzREFBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscURBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJEQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxZQUFZLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL2NyZWF0ZUVsZS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL2NyZWF0ZU9uU2NyZWVuLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvY3JlYXRlUHJvbXB0LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvZWRpdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy9uZXdJdGVtQ29udHJvbC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL3RvRG9JdGVtLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvdG9Eb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvc2hvd1Byb2plY3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUVsZSAodHlwZSwgdmFsdWUsIGNsYXNzTmFtZSkge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuICAgIHRhcmdldC50ZXh0Q29udGVudCA9IHZhbHVlO1xyXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZSA7IiwiLy8gc2hvdyBpdGVtIGFuZCBvdGhlciBvbiBodG1sIGZpbGVcclxuLy8gRE9NIHN0dWZmXHJcbmltcG9ydCBjcmVhdGVFbGUgZnJvbSBcIi4vY3JlYXRlRWxlXCI7XHJcbmltcG9ydCBlZGl0SXRlbSBmcm9tIFwiLi9lZGl0SXRlbVwiO1xyXG5pbXBvcnQgbmV3SXRlbUNvbnRyb2wgZnJvbSBcIi4vbmV3SXRlbUNvbnRyb2xcIjtcclxuXHJcbmZ1bmN0aW9uIHNob3dMaXN0KGxpc3QpIHtcclxuICAgIGNvbnN0IGxpc3RfZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKTtcclxuICAgIF9jbGVhclNjcmVlbihsaXN0X2Rpdik7XHJcbiAgICBpZiAobGlzdC5nZXRMaXN0KClbMF0gPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIF9zaG93RW1wdHkobGlzdF9kaXYsIGxpc3QpO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0LmdldExpc3QoKS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBfc2hvd0l0ZW0obGlzdF9kaXYsIGxpc3QsIGxpc3QuZ2V0TGlzdCgpW2ldLCBpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9zaG93RW1wdHkobGlzdF9kaXYsIGxpc3QpIHtcclxuICAgIGNvbnN0IGVtcHR5RGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnY2xpY2sgaGVyZSB0byBhZGQgbmV3IGl0ZW0nLCAnZW1wdHlfaXRlbScpO1xyXG4gICAgbGlzdF9kaXYuYXBwZW5kQ2hpbGQoZW1wdHlEaXYpO1xyXG4gICAgZW1wdHlEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBuZXdJdGVtQ29udHJvbCgpLnN0b3JlTmV3SXRlbShsaXN0KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9zaG93SXRlbShsaXN0X2RpdiwgbGlzdCwgaXRlbSwgaSkge1xyXG4gICAgbGlzdF9kaXYuYXBwZW5kQ2hpbGQoX2FwcGVuZEl0ZW0obGlzdCwgX2dldEl0ZW0oaXRlbSksIGl0ZW0sIGkpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2FwcGVuZEl0ZW0gKGxpc3QsIGl0ZW1fZGl2LCBpdGVtLCBpKSB7XHJcbiAgICBjb25zdCBpdGVtRGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgYGl0ZW1gKTtcclxuICAgIGl0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xyXG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChfY3JlYXRlQmFzaWNEaXYobGlzdCwgaXRlbV9kaXYsIGl0ZW0sIGkpKTtcclxuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoX2NyZWF0ZURlcyhpdGVtX2Rpdi5kZXMpKTtcclxuICAgIHJldHVybiBpdGVtRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlQmFzaWNEaXYobGlzdCwgaXRlbV9kaXYsIGl0ZW0sIGkpIHtcclxuICAgIGNvbnN0IGJhc2ljRGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgJ2Jhc2ljJyk7XHJcbiAgICBiYXNpY0Rpdi5hcHBlbmRDaGlsZChpdGVtX2Rpdi5zdGF0dXMpO1xyXG4gICAgYmFzaWNEaXYuYXBwZW5kQ2hpbGQoaXRlbV9kaXYudGl0bGUpO1xyXG4gICAgYmFzaWNEaXYuYXBwZW5kQ2hpbGQoaXRlbV9kaXYuZGF0ZSk7XHJcbiAgICBiYXNpY0Rpdi5hcHBlbmRDaGlsZChpdGVtX2Rpdi5wcmlvcml0eSk7XHJcbiAgICBiYXNpY0Rpdi5hcHBlbmRDaGlsZChfY3JlYXRlRWRpdEJ1dHQoaXRlbSwgbGlzdCkpO1xyXG4gICAgYmFzaWNEaXYuYXBwZW5kQ2hpbGQoX2NyZWF0ZURlbGV0ZUJ1dHQobGlzdCwgaSkpO1xyXG4gICAgYmFzaWNEaXYuYXBwZW5kQ2hpbGQoX2NyZWF0ZUV4cGFuZEJ1dHQoaXRlbV9kaXYuZGVzKSk7XHJcbiAgICByZXR1cm4gYmFzaWNEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9nZXRJdGVtKGl0ZW0pIHtcclxuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlKCdkaXYnLCBpdGVtLmdldFRpdGxlKCksICd0aXRsZScpO1xyXG4gICAgY29uc3QgZGVzID0gY3JlYXRlRWxlKCdkaXYnLCBpdGVtLmdldERlcygpLCAnZGVzJyk7XHJcbiAgICBjb25zdCBkYXRlID0gY3JlYXRlRWxlKCdkaXYnLCBpdGVtLmdldERhdGUoKSwgJ2RhdGUnKTtcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gY3JlYXRlRWxlKCdkaXYnLCBpdGVtLmdldFByaW9yaXR5KCksICdwcmlvcml0eScpO1xyXG4gICAgY29uc3Qgc3RhdHVzID0gX2NyZWF0ZVN0YXR1c0RpdihpdGVtKTtcclxuICAgIHJldHVybiB7dGl0bGUsIGRlcywgZGF0ZSwgcHJpb3JpdHksIHN0YXR1c307XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jbGVhclNjcmVlbihsaXN0X2Rpdikge1xyXG4gICAgd2hpbGUobGlzdF9kaXYuZmlyc3RDaGlsZCAhPSBudWxsKVxyXG4gICAgICAgIGxpc3RfZGl2LnJlbW92ZUNoaWxkKGxpc3RfZGl2LmZpcnN0Q2hpbGQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlU3RhdHVzRGl2KGl0ZW0pIHtcclxuICAgIGNvbnN0IHN0YXR1c0RpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdzdGF0dXMnKTtcclxuICAgIGNvbnN0IHN0YXR1c0xhYmVsID0gX2NyZWF0ZUxhYmVsKCk7XHJcbiAgICBjb25zdCBzdGF0dXNDaGVjayA9IF9jcmVhdGVDaGVjayhpdGVtKTtcclxuICAgIHN0YXR1c0Rpdi5hcHBlbmRDaGlsZChzdGF0dXNDaGVjayk7XHJcbiAgICByZXR1cm4gc3RhdHVzRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlTGFiZWwoKSB7XHJcbiAgICBjb25zdCBzdGF0dXNMYWJlbCA9IGNyZWF0ZUVsZSgnbGFiZWwnLCAnQ29tcGxldGVkJywgJ3N0YXR1c19sJyk7XHJcbiAgICBzdGF0dXNMYWJlbC5odG1sRm9yID0gJ3N0YXR1cyc7XHJcbiAgICByZXR1cm4gc3RhdHVzTGFiZWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVDaGVjayhpdGVtKSB7XHJcbiAgICBjb25zdCBzdGF0dXNDaGVjayA9IGNyZWF0ZUVsZSgnaW5wdXQnLCAnJywgJ3N0YXR1c19jJyk7XHJcbiAgICBzdGF0dXNDaGVjay50eXBlID0gJ2NoZWNrYm94JztcclxuICAgIHN0YXR1c0NoZWNrLm5hbWUgPSAnc3RhdHVzJztcclxuICAgIGlmIChpdGVtLmdldFN0YXR1cygpKVxyXG4gICAgICAgIHN0YXR1c0NoZWNrLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgc3RhdHVzQ2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGl0ZW0uc2V0U3RhdHVzKCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBzdGF0dXNDaGVjaztcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZURlbGV0ZUJ1dHQobGlzdCwgaSkge1xyXG4gICAgY29uc3QgZGVsZUJ1dHQgPSBjcmVhdGVFbGUoJ2J1dHRvbicsICdEZWxldGUnLCAnZGVsZXRlJyk7XHJcbiAgICBkZWxlQnV0dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gX2RlbGV0ZUVudHJ5KGxpc3QsIGkpKTtcclxuICAgIHJldHVybiBkZWxlQnV0dDtcclxufVxyXG5cclxuZnVuY3Rpb24gX2RlbGV0ZUVudHJ5KGxpc3QsIGkpIHtcclxuICAgIF9yZW1vdmVJdGVtKGxpc3QsIGkpO1xyXG4gICAgc2hvd0xpc3QobGlzdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9yZW1vdmVJdGVtKGxpc3QsIGkpIHtcclxuICAgIGNvbnN0IGxpc3RfZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKTtcclxuICAgIHdoaWxlIChsaXN0X2Rpdi5maXJzdENoaWxkICE9IG51bGwpIFxyXG4gICAgICAgIGxpc3RfZGl2LnJlbW92ZUNoaWxkKGxpc3RfZGl2LmZpcnN0Q2hpbGQpO1xyXG4gICAgbGlzdC5yZW1vdmVJdGVtKGkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlRWRpdEJ1dHQoaXRlbSwgbGlzdCkge1xyXG4gICAgY29uc3QgZWRpdEJ1dHQgPSBjcmVhdGVFbGUoJ2J1dHRvbicsICdlZGl0JywgJ2VkaXQnKTtcclxuICAgIGVkaXRCdXR0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZWRpdEl0ZW0oKS5lZGl0SXQoaXRlbSwgbGlzdCkpO1xyXG4gICAgcmV0dXJuIGVkaXRCdXR0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlRXhwYW5kQnV0dChkZXMpIHtcclxuICAgIGNvbnN0IGV4cGFuZEJ1dHQgPSBjcmVhdGVFbGUoJ2J1dHRvbicsICdleHBhbmQnLCAnZXhwYW5kJyk7XHJcbiAgICBleHBhbmRCdXR0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX3Nob3dEZXMoZXhwYW5kQnV0dCwgZGVzLnBhcmVudE5vZGUpKTtcclxuICAgIHJldHVybiBleHBhbmRCdXR0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfc2hvd0RlcyhleHBhbmRCdXR0LCBkZXNfY29udGFpbmVyKSB7XHJcbiAgICBpZiAoZGVzX2NvbnRhaW5lci5jbGFzc0xpc3RbMV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZGVzX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgZXhwYW5kQnV0dC50ZXh0Q29udGVudCA9ICdleHBhbmQnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkZXNfY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICBleHBhbmRCdXR0LnRleHRDb250ZW50ID0gJ2hpZGUnO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlRGVzKGRlc0Rpdikge1xyXG4gICAgY29uc3QgZGVzX2NvbnRhaW5lciA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdkZXNfZGl2Jyk7XHJcbiAgICBkZXNfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgIGRlc19jb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzRGl2KTtcclxuICAgIHJldHVybiBkZXNfY29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93TGlzdDsiLCJpbXBvcnQgY3JlYXRlRWxlIGZyb20gXCIuL2NyZWF0ZUVsZVwiO1xyXG5cclxuY29uc3QgY3JlYXRlUHJvbXB0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY3JlYXRlSXQgPSAobmFtZSkgPT4ge1xyXG4gICAgICAgIF9kaXNwbGF5UHJvbXB0KG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7Y3JlYXRlSXR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZGlzcGxheVByb21wdChuYW1lKSB7XHJcbiAgICBfc2hvd0Zvcm0oKTtcclxuICAgIGNvbnN0IGVsZW1lbnRzID0gX2NyZWF0ZVByb21wdEVsZShuYW1lKTtcclxuICAgIGVsZW1lbnRzLnByb21wdF9kaXYuYXBwZW5kQ2hpbGQoZWxlbWVudHMuYnV0dF9kaXYpO1xyXG4gICAgZWxlbWVudHMubmV3SXRlbURpdi5hcHBlbmRDaGlsZChlbGVtZW50cy5wcm9tcHRfZGl2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3Nob3dGb3JtKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm5ld0l0ZW1gKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVQcm9tcHRFbGUobmFtZSkge1xyXG4gICAgY29uc3QgbmV3SXRlbURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5uZXdJdGVtYCk7XHJcbiAgICBjb25zdCBwcm9tcHRfZGl2ID0gX2FwcGVuZFByb21wdHMoX3Byb21wdFEoKSk7XHJcbiAgICBjb25zdCBmaW5fYnV0dCA9IGNyZWF0ZUVsZSgnYnV0dG9uJywgbmFtZSwgJ2ZpbicpO1xyXG4gICAgY29uc3QgY2FuY2VsX2J1dHQgPSBjcmVhdGVFbGUoJ2J1dHRvbicsICdDYW5jZWwnLCAnY2FuY2VsJyk7XHJcbiAgICBjb25zdCBidXR0X2RpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdidXR0X2RpdicpO1xyXG4gICAgYnV0dF9kaXYuYXBwZW5kQ2hpbGQoZmluX2J1dHQpO1xyXG4gICAgYnV0dF9kaXYuYXBwZW5kQ2hpbGQoY2FuY2VsX2J1dHQpO1xyXG4gICAgX2NsaWNrVG9DYW5jZWwoY2FuY2VsX2J1dHQpO1xyXG4gICAgX2NsaWNrZWRPdXRzaWRlKCk7XHJcbiAgICByZXR1cm4ge25ld0l0ZW1EaXYsIHByb21wdF9kaXYsIGJ1dHRfZGl2fTtcclxufVxyXG5cclxuY29uc3QgX3Byb21wdFEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhc2tUaXRsZSA9IFwiVG8gZG8gaXRlbSBuYW1lXCI7XHJcbiAgICBjb25zdCBhc2tEZXMgPSBcInRvIGRvIGl0ZW0gZGVzY3JpcHRpb25cIjtcclxuICAgIGNvbnN0IGFza0RhdGUgPSBcIml0ZW0gZHVlIGRhdGVcIjtcclxuICAgIGNvbnN0IGFza1ByaW9yaXR5ID0gXCJpdGVtJ3MgcHJpb3JpdHlcIjtcclxuXHJcbiAgICByZXR1cm4ge2Fza1RpdGxlLCBhc2tEZXMsIGFza0RhdGUsIGFza1ByaW9yaXR5fTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2FwcGVuZFByb21wdHMocHJvbXB0cykge1xyXG4gICAgY29uc3QgcHJvbXB0X2RpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsIGBwcm9tcHRzYCk7XHJcbiAgICBjb25zdCB0aXRsZV9kaXYgPSBfY3JlYXRlTGFibGVJbnB1dChwcm9tcHRzLmFza1RpdGxlLCAnaW5wdXQnLCAnaW5fdGl0bGUnKTtcclxuICAgIGNvbnN0IGRlc19kaXYgPSBfY3JlYXRlTGFibGVJbnB1dChwcm9tcHRzLmFza0RlcywgJ3RleHRhcmVhJywgJ2luX2RlcycpO1xyXG4gICAgY29uc3QgZGF0ZV9kaXYgPSBfY3JlYXRlTGFibGVJbnB1dChwcm9tcHRzLmFza0RhdGUsICdpbnB1dCcsICdpbl9kYXRlJyk7XHJcbiAgICBjb25zdCBwcmlvcml0eV9kaXYgPSBfY3JlYXRlUHJpb3JpdHlEaXYocHJvbXB0cy5hc2tQcmlvcml0eSk7XHJcbiAgICBwcm9tcHRfZGl2LmFwcGVuZENoaWxkKHRpdGxlX2Rpdik7XHJcbiAgICBwcm9tcHRfZGl2LmFwcGVuZENoaWxkKGRlc19kaXYpO1xyXG4gICAgcHJvbXB0X2Rpdi5hcHBlbmRDaGlsZChkYXRlX2Rpdik7XHJcbiAgICBwcm9tcHRfZGl2LmFwcGVuZENoaWxkKHByaW9yaXR5X2Rpdik7XHJcbiAgICBcclxuICAgIHJldHVybiBwcm9tcHRfZGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlTGFibGVJbnB1dChxdWVzdGlvbiwgdHlwZSwgY2xhc3NOYW1lKSB7XHJcbiAgICBjb25zdCBxX2RpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdxX2RpdicpO1xyXG4gICAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGUoJ2xhYmVsJywgcXVlc3Rpb24sICdpbicpO1xyXG4gICAgY29uc3QgYW5zd2VyID0gY3JlYXRlRWxlKHR5cGUsICcnLCBgJHtjbGFzc05hbWV9X2Fuc2ApO1xyXG4gICAgcV9kaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gICAgcV9kaXYuYXBwZW5kQ2hpbGQoYW5zd2VyKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHFfZGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlUHJpb3JpdHlEaXYocXVlc3Rpb24pIHtcclxuICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgJ3FfZGl2Jyk7XHJcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gY3JlYXRlRWxlKCdsYWJlbCcsIHF1ZXN0aW9uLCAnaW4nKTtcclxuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gY3JlYXRlRWxlKCdzZWxlY3QnLCAnJywgJ2luX3ByaW9yaXR5X2FucycpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QubmFtZSA9ICdwcmlvcml0eSc7XHJcbiAgICBjb25zdCBvcHRpb25Ub3AgPSBfY3JlYXRlT3B0aW9uKCd0b3AnKTtcclxuICAgIGNvbnN0IG9wdGlvbk1pZCA9IF9jcmVhdGVPcHRpb24oJ21pZGRsZScpO1xyXG4gICAgY29uc3Qgb3B0aW9uTG93ID0gX2NyZWF0ZU9wdGlvbignbG93Jyk7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25Ub3ApO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uTWlkKTtcclxuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkxvdyk7XHJcbiAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcclxuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHByaW9yaXR5RGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlT3B0aW9uKHByaW9yaXR5KSB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBjcmVhdGVFbGUoJ29wdGlvbicsIHByaW9yaXR5LCBgaW5fb3B0aW9uc18ke3ByaW9yaXR5fWApO1xyXG4gICAgb3B0aW9uLnZhbHVlID0gcHJpb3JpdHk7XHJcbiAgICByZXR1cm4gb3B0aW9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY2xpY2tUb0NhbmNlbChidXR0KSB7XHJcbiAgICBidXR0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX3JlbW92ZVByb21wdCgpLCB7b25jZTogdHJ1ZX0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY2xpY2tlZE91dHNpZGUoKSB7XHJcbiAgICBjb25zdCBuZXdJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm5ld0l0ZW1gKTtcclxuICAgIG5ld0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQgPT0gZS50YXJnZXQpXHJcbiAgICAgICAgICAgIF9yZW1vdmVQcm9tcHQoKTtcclxuICAgIH0sIHtvbmNlOiB0cnVlfSk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBfcmVtb3ZlUHJvbXB0KCkge1xyXG4gICAgY29uc3QgbmV3SXRlbURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5uZXdJdGVtYCk7XHJcbiAgICBuZXdJdGVtRGl2LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9tcHRzYCkpO1xyXG4gICAgbmV3SXRlbURpdi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICBfZW5hYmxlTmV3QnV0dCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZW5hYmxlTmV3QnV0dCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5hZGRgKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvbXB0OyIsImltcG9ydCBzaG93TGlzdCBmcm9tIFwiLi9jcmVhdGVPblNjcmVlblwiO1xyXG5pbXBvcnQgY3JlYXRlUHJvbXB0IGZyb20gJy4vY3JlYXRlUHJvbXB0JztcclxuXHJcbmNvbnN0IGVkaXRJdGVtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZWRpdEl0ID0gKGl0ZW0sIGxpc3QpID0+IHtcclxuICAgICAgICBfc2hvd0Zvcm0oKTtcclxuICAgICAgICBjcmVhdGVQcm9tcHQoKS5jcmVhdGVJdCgnU0FWRScpO1xyXG4gICAgICAgIF9maWxsRGF0YShpdGVtKTtcclxuICAgICAgICBfY2hhbmdlRGF0YShpdGVtLCBsaXN0KTtcclxuICAgIH1cclxuICAgIHJldHVybiB7ZWRpdEl0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3Nob3dGb3JtKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm5ld0l0ZW1gKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9maWxsRGF0YShpdGVtKSB7XHJcbiAgICBsZXQgZmVpbGRzID0gX3Byb21wdEEoKTtcclxuICAgIGZlaWxkcy50aXRsZS52YWx1ZSA9IGl0ZW0uZ2V0VGl0bGUoKTtcclxuICAgIGZlaWxkcy5kZXMudmFsdWUgPSBpdGVtLmdldERlcygpO1xyXG4gICAgZmVpbGRzLmRhdGUudmFsdWUgPSBpdGVtLmdldERhdGUoKTtcclxuICAgIGZlaWxkcy5wcmlvcml0eS52YWx1ZSA9IGl0ZW0uZ2V0UHJpb3JpdHkoKTtcclxufVxyXG5cclxuY29uc3QgX3Byb21wdEEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbl90aXRsZV9hbnMnKTtcclxuICAgIGNvbnN0IGRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbl9kZXNfYW5zJyk7XHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX2RhdGVfYW5zJyk7XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbl9wcmlvcml0eV9hbnMnKTtcclxuXHJcbiAgICByZXR1cm4ge3RpdGxlLCBkZXMsIGRhdGUsIHByaW9yaXR5fTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NoYW5nZURhdGEoaXRlbSwgbGlzdCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gIHtcclxuICAgICAgICBfc3RvcmVDaGFuZ2VzKGl0ZW0pO1xyXG4gICAgICAgIF9yZW1vdmVQcm9tcHQoKTtcclxuICAgICAgICBpZiAobGlzdC5nZXRMaXN0KCkgIT0gbnVsbClcclxuICAgICAgICAgICAgc2hvd0xpc3QobGlzdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3N0b3JlQ2hhbmdlcyhpdGVtKSB7XHJcbiAgICBsZXQgaW5wdXQgPSBfcHJvbXB0QSgpO1xyXG4gICAgaXRlbS5zZXRUaXRsZShpbnB1dC50aXRsZS52YWx1ZSk7XHJcbiAgICBpdGVtLnNldERlcyhpbnB1dC5kZXMudmFsdWUpO1xyXG4gICAgaXRlbS5zZXREYXRlKGlucHV0LmRhdGUudmFsdWUpO1xyXG4gICAgaXRlbS5zZXRQcmlvcml0eShpbnB1dC5wcmlvcml0eS52YWx1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9yZW1vdmVQcm9tcHQoKSB7XHJcbiAgICBjb25zdCBuZXdJdGVtRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm5ld0l0ZW1gKTtcclxuICAgIG5ld0l0ZW1EaXYucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb21wdHNgKSk7XHJcbiAgICBuZXdJdGVtRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZWRpdEl0ZW07IiwiaW1wb3J0IHRvRG9JdGVtIGZyb20gXCIuL3RvRG9JdGVtXCI7XHJcbmltcG9ydCBzaG93SXQgZnJvbSBcIi4vY3JlYXRlT25TY3JlZW5cIjtcclxuaW1wb3J0IGNyZWF0ZVByb21wdCBmcm9tIFwiLi9jcmVhdGVQcm9tcHRcIjtcclxuXHJcbmNvbnN0ICBuZXdJdGVtQ29udHJvbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlTmV3SXRlbSA9IChsaXN0KSA9PiB7XHJcbiAgICAgICAgX2Rpc2FibGVOZXdCdXR0KCk7XHJcbiAgICAgICAgY3JlYXRlUHJvbXB0KCkuY3JlYXRlSXQoJ2FkZCcpO1xyXG4gICAgICAgIF9zdG9yZUl0ZW0obGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtzdG9yZU5ld0l0ZW19O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZGlzYWJsZU5ld0J1dHQoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYWRkYCkuZGlzYWJsZWQgPSB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZW5hYmxlTmV3QnV0dCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5hZGRgKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfc3RvcmVJdGVtIChsaXN0KSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmluJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3SXRlbSA9IF9nZXRJdGVtKCk7XHJcbiAgICAgICAgX3N0b3JlSXQobGlzdCwgbmV3SXRlbSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2dldEl0ZW0oKSB7XHJcbiAgICBsZXQgaW5wdXQgPSBfcHJvbXB0QSgpO1xyXG4gICAgX3JlbW92ZVByb21wdCgpO1xyXG4gICAgcmV0dXJuIGlucHV0VG9JdGVtKGlucHV0KTtcclxufVxyXG5cclxuY29uc3QgX3Byb21wdEEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbl90aXRsZV9hbnMnKS52YWx1ZTtcclxuICAgIGNvbnN0IGRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbl9kZXNfYW5zJykudmFsdWU7XHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX2RhdGVfYW5zJykudmFsdWU7XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbl9wcmlvcml0eV9hbnMnKS52YWx1ZTtcclxuXHJcbiAgICByZXR1cm4ge3RpdGxlLCBkZXMsIGRhdGUsIHByaW9yaXR5fTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5wdXRUb0l0ZW0oaW5wdXQpIHtcclxuICAgIHJldHVybiB0b0RvSXRlbShpbnB1dC50aXRsZSwgaW5wdXQuZGVzLCBpbnB1dC5kYXRlLCBpbnB1dC5wcmlvcml0eSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9yZW1vdmVQcm9tcHQoKSB7XHJcbiAgICBjb25zdCBuZXdJdGVtRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld0l0ZW0nKTtcclxuICAgIG5ld0l0ZW1EaXYucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb21wdHMnKSk7XHJcbiAgICBuZXdJdGVtRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgIF9lbmFibGVOZXdCdXR0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9zdG9yZUl0KGxpc3QsIG5ld0l0ZW0pIHtcclxuICAgIGxpc3QuYWRkSXRlbShuZXdJdGVtKTtcclxuICAgIHNob3dJdChsaXN0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3SXRlbUNvbnRyb2w7IiwiY29uc3QgdG9Eb0l0ZW0gPSAodGl0bGUsIGRlcywgZGF0ZSwgcHJpb3JpdHkpID0+IHtcclxuICAgIGxldCBteVRpdGxlID0gdGl0bGU7XHJcbiAgICBsZXQgbXlEZXMgPSBkZXM7XHJcbiAgICBsZXQgbXlEYXRlID0gZGF0ZTtcclxuICAgIGxldCBteVByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICBsZXQgbXlTdGF0dXMgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbXlUaXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xyXG4gICAgICAgIG15VGl0bGUgPSBuZXdUaXRsZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgZ2V0RGVzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBteURlcztcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2V0RGVzID0gKG5ld0RlcykgPT4ge1xyXG4gICAgICAgIG15RGVzID0gbmV3RGVzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldERhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG15RGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXREYXRlID0gKG5ld0RhdGUpID0+IHtcclxuICAgICAgICBteURhdGUgPSBuZXdEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBteVByaW9yaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiB7XHJcbiAgICAgICAgbXlQcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFN0YXR1cyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbXlTdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0U3RhdHVzID0gKCkgPT4ge1xyXG4gICAgICAgIG15U3RhdHVzID0gIW15U3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvU3RyaW5nID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBgJHtteVRpdGxlfSwgJHtteURhdGV9LCAke215UHJpb3JpdHl9YDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2dldFRpdGxlLCBzZXRUaXRsZSwgZ2V0RGVzLCBzZXREZXMsIHNldERhdGUsIGdldERhdGUsIFxyXG4gICAgICAgICAgICAgICAgZ2V0UHJpb3JpdHksIHNldFByaW9yaXR5LCBnZXRTdGF0dXMsIHNldFN0YXR1cywgdG9TdHJpbmd9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9Eb0l0ZW07IiwiLy8gb2JqZWN0IHRoYXQgc3RvcmUgYWxsIGl0ZW1cclxuXHJcbmNvbnN0IHRvRG9MaXN0ID0gKG5hbWUpID0+IHtcclxuICAgIGxldCBteU5hbWUgPSBuYW1lO1xyXG4gICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICBsZXQgbWlkSW5kZXggPSBpdGVtcy5sZW5ndGg7XHJcbiAgICBsZXQgbG93SW5kZXggPSBpdGVtcy5sZW5ndGg7XHJcblxyXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbXlOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldE5hbWUgPSAobmV3TmFtZSkgPT4ge1xyXG4gICAgICAgIG15TmFtZSA9IG5ld05hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0TGlzdCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkSXRlbSA9IChuZXdJdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJpID0gbmV3SXRlbS5nZXRQcmlvcml0eSgpO1xyXG4gICAgICAgIF9wbGFjZUl0ZW1CeVByaW9yaXR5KHByaSwgbmV3SXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlSXRlbSA9ICh0YXJnZXQpID0+IHtcclxuICAgICAgICBfdXBkYXRlSW5kZXgoaXRlbXNbdGFyZ2V0XS5nZXRQcmlvcml0eSgpKTtcclxuICAgICAgICBpdGVtcy5zcGxpY2UodGFyZ2V0LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVBbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgaXRlbXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93TGlzdCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gXCJcIjtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gaXRlbS50b1N0cmluZygpICsgJ1xcbic7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfcGxhY2VJdGVtQnlQcmlvcml0eShwcmksIGl0ZW0pIHtcclxuICAgICAgICBzd2l0Y2ggKHByaSkge1xyXG4gICAgICAgICAgICBjYXNlICd0b3AnOlxyXG4gICAgICAgICAgICAgICAgaXRlbXMuc3BsaWNlKG1pZEluZGV4LCAwLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgIG1pZEluZGV4ICs9IDE7XHJcbiAgICAgICAgICAgICAgICBsb3dJbmRleCArPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgY2FzZSAnbWlkZGxlJzpcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnNwbGljZShsb3dJbmRleCwgMCwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICBsb3dJbmRleCArPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgY2FzZSAnbG93JzpcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnNwbGljZShpdGVtcy5sZW5ndGgsIDAsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF91cGRhdGVJbmRleChwcmkpIHtcclxuICAgICAgICBzd2l0Y2ggKHByaSkge1xyXG4gICAgICAgICAgICBjYXNlICd0b3AnOlxyXG4gICAgICAgICAgICAgICAgbWlkSW5kZXggLT0gMTtcclxuICAgICAgICAgICAgICAgIGxvd0luZGV4IC09IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ21pZGRsZSc6XHJcbiAgICAgICAgICAgICAgICBsb3dJbmRleCAtPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7Z2V0TmFtZSwgc2V0TmFtZSwgZ2V0TGlzdCwgYWRkSXRlbSwgcmVtb3ZlSXRlbSwgcmVtb3ZlQWxsLCBzaG93TGlzdH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b0RvTGlzdDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVFbGUgZnJvbSBcIi4vY3JlYXRlRWxlXCI7XHJcbmltcG9ydCBzaG93TGlzdCBmcm9tIFwiLi9jcmVhdGVPblNjcmVlblwiO1xyXG5pbXBvcnQgbmV3SXRlbUNvbnRyb2wgZnJvbSAnLi9uZXdJdGVtQ29udHJvbCc7XHJcbmltcG9ydCB0b0RvTGlzdCBmcm9tIFwiLi90b0RvTGlzdFwiO1xyXG5cclxuZnVuY3Rpb24gc2hvd1Byb2plY3RzKHByb2plY3RzKSB7XHJcbiAgICBfY3JlYXRlSGVhZGVyKHByb2plY3RzKTtcclxuICAgIHByb2plY3RzLmdldFByb2plY3RzKCkuZm9yRWFjaChsaXN0ID0+IHtcclxuICAgICAgICBfZGlzcGxheUhlYWRlcihsaXN0KTtcclxuICAgICAgICBzaG93TGlzdChsaXN0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlSGVhZGVyKHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdoZWFkZXJEaXYnKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChfY3JlYXRlVGFiKHByb2plY3RzKSk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9kaXNwbGF5SGVhZGVyKGxpc3QpIHtcclxuICAgIGNvbnN0IGVsZSA9IF9jcmVhdGVMaXN0SGVhZGVyKGxpc3QpO1xyXG4gICAgX2FwcGVuZEVsZShlbGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlTGlzdEhlYWRlcihsaXN0KSB7XHJcbiAgICBjb25zdCBuYW1lID0gbGlzdC5nZXROYW1lKCkucmVwbGFjZSgnICcsICdfJyk7XHJcbiAgICBjb25zdCBhZGRCdXR0ID0gY3JlYXRlRWxlKCdidXR0b24nLCAnYWRkIGl0ZW0nLCBgYWRkJHtuYW1lfWApO1xyXG4gICAgYWRkQnV0dC5jbGFzc0xpc3QuYWRkKCdhZGQnKTtcclxuICAgIGFkZEJ1dHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfY2xpY2tUb0FkZChsaXN0KSk7XHJcbiAgICBjb25zdCBuZXdJdGVtRGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgYG5ld0l0ZW1gKTtcclxuICAgIG5ld0l0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgY29uc3QgbGlzdERpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsIGBsaXN0YCk7XHJcbiAgICByZXR1cm4ge2FkZEJ1dHQsIG5ld0l0ZW1EaXYsIGxpc3REaXZ9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlVGFiKHByb2plY3RzKSB7XHJcbiAgICBjb25zdCB0YWJEaXYgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCAndGFiJyk7XHJcbiAgICBwcm9qZWN0cy5nZXRQcm9qZWN0cygpLmZvckVhY2gobGlzdCA9PiB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGxpc3QuZ2V0TmFtZSgpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVCdXR0ID0gY3JlYXRlRWxlKCdidXR0b24nLCBgJHtuYW1lfWAsIGBwcm9qZWN0X2J1dHRgKTtcclxuICAgICAgICAvLyBuYW1lQnV0dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0X2J1dHQnKTtcclxuICAgICAgICBuYW1lQnV0dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9jaGFuZ2VUb1Byb2plY3QobGlzdCkpO1xyXG4gICAgICAgIHRhYkRpdi5hcHBlbmRDaGlsZChuYW1lQnV0dCk7XHJcbiAgICB9KVxyXG4gICAgdGFiRGl2LmFwcGVuZENoaWxkKF9jcmVhdGVBZGRQcm9qZWN0QnV0dChwcm9qZWN0cykpO1xyXG4gICAgcmV0dXJuIHRhYkRpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NoYW5nZVRvUHJvamVjdChsaXN0KSB7XHJcbiAgICBfY2xlYXJMaXN0KCk7XHJcbiAgICBfZGlzcGxheUhlYWRlcihsaXN0KTtcclxuICAgIHNob3dMaXN0KGxpc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY2xlYXJMaXN0KCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQnKSk7XHJcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdJdGVtJykpO1xyXG4gICAgY29udGVudC5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUFkZFByb2plY3RCdXR0KHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBhZGRCdXR0ID0gY3JlYXRlRWxlKCdidXR0b24nLCAnbmV3IFByb2plY3QnLCAnYWRkX3Byb2plY3QnKTtcclxuICAgIGFkZEJ1dHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfYWRkUHJvamVjdChwcm9qZWN0cykpO1xyXG4gICAgcmV0dXJuIGFkZEJ1dHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9hZGRQcm9qZWN0KHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBwcm9qX3Byb21wdCA9IHByb21wdCgnUHJvamVjdCBOYW1lOicsICdOZXdfcHJvamVjdCcpO1xyXG4gICAgY29uc3QgbmV3TGlzdCA9IHRvRG9MaXN0KHByb2pfcHJvbXB0KTtcclxuICAgIHByb2plY3RzLmFkZExpc3QobmV3TGlzdCk7XHJcbiAgICBfY2xlYXJIZWFkZXIoKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJEaXYnKS5hcHBlbmRDaGlsZChfY3JlYXRlVGFiKHByb2plY3RzKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jbGVhckhlYWRlcigpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJEaXYnKTtcclxuICAgIHdoaWxlIChoZWFkZXIuZmlyc3RDaGlsZCAhPSBudWxsKVxyXG4gICAgICAgIGhlYWRlci5yZW1vdmVDaGlsZChoZWFkZXIuZmlyc3RDaGlsZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jbGlja1RvQWRkKGxpc3QpIHtcclxuICAgIGNvbnN0IG5ld0l0ZW0gPSBuZXdJdGVtQ29udHJvbCgpO1xyXG4gICAgY29uc29sZS5sb2cobGlzdC5nZXRMaXN0KCkpO1xyXG4gICAgbmV3SXRlbS5zdG9yZU5ld0l0ZW0obGlzdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9hcHBlbmRFbGUgKGVsZSkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgaW4gZWxlKSB7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChlbGVbZWxlbWVudF0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93UHJvamVjdHM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9