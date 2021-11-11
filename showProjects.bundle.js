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
        return `${myTitle},${myDes},${myDate},${myPriority},${myStatus}`;
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

    function toString() {
        let listString = `${myName}:`;
        items.forEach(item => {
            listString += '[' + item.toString() + ']';
            listString += '.';
        });
        listString = listString.substring(0, listString.length - 1);
        return listString;
    }

    return {getName, setName, getList, addItem, removeItem, removeAll, 
                showList, toString};
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
    return {newItemDiv, listDiv, addButt};
}

function _createTab(projects) {
    const tabDiv = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'tab');
    projects.getProjects().forEach(list => {
        const name = list.getName();
        const nameButt = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('button', `${name}`, `project_butt`);
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
    // content.removeChild(document.querySelector('.add'));
    // content.removeChild(document.querySelector('.newItem'));
    // content.removeChild(document.querySelector('.list'));
    content.removeChild(document.querySelector('.listDiv'));
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
    const str = JSON.stringify(projects.toString())
    checkJson(str);
    _clearHeader();
    document.querySelector('.headerDiv').appendChild(_createTab(projects));
}

function checkJson(str) {
    const projects = str.substring(1, str.length - 1).split('|');
    console.log(projects);
    const nameitems = projects[0].substring(1, projects[0].length - 1).split(':');
    console.log(nameitems[0]);
    console.log(nameitems[1]);
    const itemArr = [];
    const items = nameitems[1].split('.');
    items.forEach(item => {
        console.log(item.substring(1, item.length - 1));
        itemArr.push()
    })
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
    const listDiv = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'listDiv');
    for (const element in ele) {
        listDiv.appendChild(ele[element]);
    }
    content.appendChild(listDiv);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showProjects);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSxvQkFBb0Isc0RBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy9jcmVhdGVFbGUuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy9jcmVhdGVPblNjcmVlbi5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL2NyZWF0ZVByb21wdC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL2VkaXRJdGVtLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvbmV3SXRlbUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy90b0RvSXRlbS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL3RvRG9MaXN0LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL3Nob3dQcm9qZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVFbGUgKHR5cGUsIHZhbHVlLCBjbGFzc05hbWUpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgICB0YXJnZXQudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGUgOyIsIi8vIHNob3cgaXRlbSBhbmQgb3RoZXIgb24gaHRtbCBmaWxlXHJcbi8vIERPTSBzdHVmZlxyXG5pbXBvcnQgY3JlYXRlRWxlIGZyb20gXCIuL2NyZWF0ZUVsZVwiO1xyXG5pbXBvcnQgZWRpdEl0ZW0gZnJvbSBcIi4vZWRpdEl0ZW1cIjtcclxuaW1wb3J0IG5ld0l0ZW1Db250cm9sIGZyb20gXCIuL25ld0l0ZW1Db250cm9sXCI7XHJcblxyXG5mdW5jdGlvbiBzaG93TGlzdChsaXN0KSB7XHJcbiAgICBjb25zdCBsaXN0X2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XHJcbiAgICBfY2xlYXJTY3JlZW4obGlzdF9kaXYpO1xyXG4gICAgaWYgKGxpc3QuZ2V0TGlzdCgpWzBdID09IHVuZGVmaW5lZClcclxuICAgICAgICBfc2hvd0VtcHR5KGxpc3RfZGl2LCBsaXN0KTtcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5nZXRMaXN0KCkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgX3Nob3dJdGVtKGxpc3RfZGl2LCBsaXN0LCBsaXN0LmdldExpc3QoKVtpXSwgaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBfc2hvd0VtcHR5KGxpc3RfZGl2LCBsaXN0KSB7XHJcbiAgICBjb25zdCBlbXB0eURpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJ2NsaWNrIGhlcmUgdG8gYWRkIG5ldyBpdGVtJywgJ2VtcHR5X2l0ZW0nKTtcclxuICAgIGxpc3RfZGl2LmFwcGVuZENoaWxkKGVtcHR5RGl2KTtcclxuICAgIGVtcHR5RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbmV3SXRlbUNvbnRyb2woKS5zdG9yZU5ld0l0ZW0obGlzdCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfc2hvd0l0ZW0obGlzdF9kaXYsIGxpc3QsIGl0ZW0sIGkpIHtcclxuICAgIGxpc3RfZGl2LmFwcGVuZENoaWxkKF9hcHBlbmRJdGVtKGxpc3QsIF9nZXRJdGVtKGl0ZW0pLCBpdGVtLCBpKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9hcHBlbmRJdGVtIChsaXN0LCBpdGVtX2RpdiwgaXRlbSwgaSkge1xyXG4gICAgY29uc3QgaXRlbURpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsIGBpdGVtYCk7XHJcbiAgICBpdGVtRGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcclxuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoX2NyZWF0ZUJhc2ljRGl2KGxpc3QsIGl0ZW1fZGl2LCBpdGVtLCBpKSk7XHJcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKF9jcmVhdGVEZXMoaXRlbV9kaXYuZGVzKSk7XHJcbiAgICByZXR1cm4gaXRlbURpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUJhc2ljRGl2KGxpc3QsIGl0ZW1fZGl2LCBpdGVtLCBpKSB7XHJcbiAgICBjb25zdCBiYXNpY0RpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdiYXNpYycpO1xyXG4gICAgYmFzaWNEaXYuYXBwZW5kQ2hpbGQoaXRlbV9kaXYuc3RhdHVzKTtcclxuICAgIGJhc2ljRGl2LmFwcGVuZENoaWxkKGl0ZW1fZGl2LnRpdGxlKTtcclxuICAgIGJhc2ljRGl2LmFwcGVuZENoaWxkKGl0ZW1fZGl2LmRhdGUpO1xyXG4gICAgYmFzaWNEaXYuYXBwZW5kQ2hpbGQoaXRlbV9kaXYucHJpb3JpdHkpO1xyXG4gICAgYmFzaWNEaXYuYXBwZW5kQ2hpbGQoX2NyZWF0ZUVkaXRCdXR0KGl0ZW0sIGxpc3QpKTtcclxuICAgIGJhc2ljRGl2LmFwcGVuZENoaWxkKF9jcmVhdGVEZWxldGVCdXR0KGxpc3QsIGkpKTtcclxuICAgIGJhc2ljRGl2LmFwcGVuZENoaWxkKF9jcmVhdGVFeHBhbmRCdXR0KGl0ZW1fZGl2LmRlcykpO1xyXG4gICAgcmV0dXJuIGJhc2ljRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZ2V0SXRlbShpdGVtKSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZSgnZGl2JywgaXRlbS5nZXRUaXRsZSgpLCAndGl0bGUnKTtcclxuICAgIGNvbnN0IGRlcyA9IGNyZWF0ZUVsZSgnZGl2JywgaXRlbS5nZXREZXMoKSwgJ2RlcycpO1xyXG4gICAgY29uc3QgZGF0ZSA9IGNyZWF0ZUVsZSgnZGl2JywgaXRlbS5nZXREYXRlKCksICdkYXRlJyk7XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGNyZWF0ZUVsZSgnZGl2JywgaXRlbS5nZXRQcmlvcml0eSgpLCAncHJpb3JpdHknKTtcclxuICAgIGNvbnN0IHN0YXR1cyA9IF9jcmVhdGVTdGF0dXNEaXYoaXRlbSk7XHJcbiAgICByZXR1cm4ge3RpdGxlLCBkZXMsIGRhdGUsIHByaW9yaXR5LCBzdGF0dXN9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY2xlYXJTY3JlZW4obGlzdF9kaXYpIHtcclxuICAgIHdoaWxlKGxpc3RfZGl2LmZpcnN0Q2hpbGQgIT0gbnVsbClcclxuICAgICAgICBsaXN0X2Rpdi5yZW1vdmVDaGlsZChsaXN0X2Rpdi5maXJzdENoaWxkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZVN0YXR1c0RpdihpdGVtKSB7XHJcbiAgICBjb25zdCBzdGF0dXNEaXYgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCAnc3RhdHVzJyk7XHJcbiAgICBjb25zdCBzdGF0dXNMYWJlbCA9IF9jcmVhdGVMYWJlbCgpO1xyXG4gICAgY29uc3Qgc3RhdHVzQ2hlY2sgPSBfY3JlYXRlQ2hlY2soaXRlbSk7XHJcbiAgICBzdGF0dXNEaXYuYXBwZW5kQ2hpbGQoc3RhdHVzQ2hlY2spO1xyXG4gICAgcmV0dXJuIHN0YXR1c0RpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUxhYmVsKCkge1xyXG4gICAgY29uc3Qgc3RhdHVzTGFiZWwgPSBjcmVhdGVFbGUoJ2xhYmVsJywgJ0NvbXBsZXRlZCcsICdzdGF0dXNfbCcpO1xyXG4gICAgc3RhdHVzTGFiZWwuaHRtbEZvciA9ICdzdGF0dXMnO1xyXG4gICAgcmV0dXJuIHN0YXR1c0xhYmVsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlQ2hlY2soaXRlbSkge1xyXG4gICAgY29uc3Qgc3RhdHVzQ2hlY2sgPSBjcmVhdGVFbGUoJ2lucHV0JywgJycsICdzdGF0dXNfYycpO1xyXG4gICAgc3RhdHVzQ2hlY2sudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgICBzdGF0dXNDaGVjay5uYW1lID0gJ3N0YXR1cyc7XHJcbiAgICBpZiAoaXRlbS5nZXRTdGF0dXMoKSlcclxuICAgICAgICBzdGF0dXNDaGVjay5jaGVja2VkID0gdHJ1ZTtcclxuICAgIHN0YXR1c0NoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICBpdGVtLnNldFN0YXR1cygpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc3RhdHVzQ2hlY2s7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVEZWxldGVCdXR0KGxpc3QsIGkpIHtcclxuICAgIGNvbnN0IGRlbGVCdXR0ID0gY3JlYXRlRWxlKCdidXR0b24nLCAnRGVsZXRlJywgJ2RlbGV0ZScpO1xyXG4gICAgZGVsZUJ1dHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IF9kZWxldGVFbnRyeShsaXN0LCBpKSk7XHJcbiAgICByZXR1cm4gZGVsZUJ1dHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9kZWxldGVFbnRyeShsaXN0LCBpKSB7XHJcbiAgICBfcmVtb3ZlSXRlbShsaXN0LCBpKTtcclxuICAgIHNob3dMaXN0KGxpc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfcmVtb3ZlSXRlbShsaXN0LCBpKSB7XHJcbiAgICBjb25zdCBsaXN0X2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XHJcbiAgICB3aGlsZSAobGlzdF9kaXYuZmlyc3RDaGlsZCAhPSBudWxsKSBcclxuICAgICAgICBsaXN0X2Rpdi5yZW1vdmVDaGlsZChsaXN0X2Rpdi5maXJzdENoaWxkKTtcclxuICAgIGxpc3QucmVtb3ZlSXRlbShpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUVkaXRCdXR0KGl0ZW0sIGxpc3QpIHtcclxuICAgIGNvbnN0IGVkaXRCdXR0ID0gY3JlYXRlRWxlKCdidXR0b24nLCAnZWRpdCcsICdlZGl0Jyk7XHJcbiAgICBlZGl0QnV0dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGVkaXRJdGVtKCkuZWRpdEl0KGl0ZW0sIGxpc3QpKTtcclxuICAgIHJldHVybiBlZGl0QnV0dDtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUV4cGFuZEJ1dHQoZGVzKSB7XHJcbiAgICBjb25zdCBleHBhbmRCdXR0ID0gY3JlYXRlRWxlKCdidXR0b24nLCAnZXhwYW5kJywgJ2V4cGFuZCcpO1xyXG4gICAgZXhwYW5kQnV0dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9zaG93RGVzKGV4cGFuZEJ1dHQsIGRlcy5wYXJlbnROb2RlKSk7XHJcbiAgICByZXR1cm4gZXhwYW5kQnV0dDtcclxufVxyXG5cclxuZnVuY3Rpb24gX3Nob3dEZXMoZXhwYW5kQnV0dCwgZGVzX2NvbnRhaW5lcikge1xyXG4gICAgaWYgKGRlc19jb250YWluZXIuY2xhc3NMaXN0WzFdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGRlc19jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIGV4cGFuZEJ1dHQudGV4dENvbnRlbnQgPSAnZXhwYW5kJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVzX2NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgZXhwYW5kQnV0dC50ZXh0Q29udGVudCA9ICdoaWRlJztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZURlcyhkZXNEaXYpIHtcclxuICAgIGNvbnN0IGRlc19jb250YWluZXIgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCAnZGVzX2RpdicpO1xyXG4gICAgZGVzX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICBkZXNfY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc0Rpdik7XHJcbiAgICByZXR1cm4gZGVzX2NvbnRhaW5lcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd0xpc3Q7IiwiaW1wb3J0IGNyZWF0ZUVsZSBmcm9tIFwiLi9jcmVhdGVFbGVcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZVByb21wdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNyZWF0ZUl0ID0gKG5hbWUpID0+IHtcclxuICAgICAgICBfZGlzcGxheVByb21wdChuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2NyZWF0ZUl0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2Rpc3BsYXlQcm9tcHQobmFtZSkge1xyXG4gICAgX3Nob3dGb3JtKCk7XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IF9jcmVhdGVQcm9tcHRFbGUobmFtZSk7XHJcbiAgICBlbGVtZW50cy5wcm9tcHRfZGl2LmFwcGVuZENoaWxkKGVsZW1lbnRzLmJ1dHRfZGl2KTtcclxuICAgIGVsZW1lbnRzLm5ld0l0ZW1EaXYuYXBwZW5kQ2hpbGQoZWxlbWVudHMucHJvbXB0X2Rpdik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9zaG93Rm9ybSgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5uZXdJdGVtYCkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlUHJvbXB0RWxlKG5hbWUpIHtcclxuICAgIGNvbnN0IG5ld0l0ZW1EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubmV3SXRlbWApO1xyXG4gICAgY29uc3QgcHJvbXB0X2RpdiA9IF9hcHBlbmRQcm9tcHRzKF9wcm9tcHRRKCkpO1xyXG4gICAgY29uc3QgZmluX2J1dHQgPSBjcmVhdGVFbGUoJ2J1dHRvbicsIG5hbWUsICdmaW4nKTtcclxuICAgIGNvbnN0IGNhbmNlbF9idXR0ID0gY3JlYXRlRWxlKCdidXR0b24nLCAnQ2FuY2VsJywgJ2NhbmNlbCcpO1xyXG4gICAgY29uc3QgYnV0dF9kaXYgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCAnYnV0dF9kaXYnKTtcclxuICAgIGJ1dHRfZGl2LmFwcGVuZENoaWxkKGZpbl9idXR0KTtcclxuICAgIGJ1dHRfZGl2LmFwcGVuZENoaWxkKGNhbmNlbF9idXR0KTtcclxuICAgIF9jbGlja1RvQ2FuY2VsKGNhbmNlbF9idXR0KTtcclxuICAgIF9jbGlja2VkT3V0c2lkZSgpO1xyXG4gICAgcmV0dXJuIHtuZXdJdGVtRGl2LCBwcm9tcHRfZGl2LCBidXR0X2Rpdn07XHJcbn1cclxuXHJcbmNvbnN0IF9wcm9tcHRRID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYXNrVGl0bGUgPSBcIlRvIGRvIGl0ZW0gbmFtZVwiO1xyXG4gICAgY29uc3QgYXNrRGVzID0gXCJ0byBkbyBpdGVtIGRlc2NyaXB0aW9uXCI7XHJcbiAgICBjb25zdCBhc2tEYXRlID0gXCJpdGVtIGR1ZSBkYXRlXCI7XHJcbiAgICBjb25zdCBhc2tQcmlvcml0eSA9IFwiaXRlbSdzIHByaW9yaXR5XCI7XHJcblxyXG4gICAgcmV0dXJuIHthc2tUaXRsZSwgYXNrRGVzLCBhc2tEYXRlLCBhc2tQcmlvcml0eX07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9hcHBlbmRQcm9tcHRzKHByb21wdHMpIHtcclxuICAgIGNvbnN0IHByb21wdF9kaXYgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCBgcHJvbXB0c2ApO1xyXG4gICAgY29uc3QgdGl0bGVfZGl2ID0gX2NyZWF0ZUxhYmxlSW5wdXQocHJvbXB0cy5hc2tUaXRsZSwgJ2lucHV0JywgJ2luX3RpdGxlJyk7XHJcbiAgICBjb25zdCBkZXNfZGl2ID0gX2NyZWF0ZUxhYmxlSW5wdXQocHJvbXB0cy5hc2tEZXMsICd0ZXh0YXJlYScsICdpbl9kZXMnKTtcclxuICAgIGNvbnN0IGRhdGVfZGl2ID0gX2NyZWF0ZUxhYmxlSW5wdXQocHJvbXB0cy5hc2tEYXRlLCAnaW5wdXQnLCAnaW5fZGF0ZScpO1xyXG4gICAgY29uc3QgcHJpb3JpdHlfZGl2ID0gX2NyZWF0ZVByaW9yaXR5RGl2KHByb21wdHMuYXNrUHJpb3JpdHkpO1xyXG4gICAgcHJvbXB0X2Rpdi5hcHBlbmRDaGlsZCh0aXRsZV9kaXYpO1xyXG4gICAgcHJvbXB0X2Rpdi5hcHBlbmRDaGlsZChkZXNfZGl2KTtcclxuICAgIHByb21wdF9kaXYuYXBwZW5kQ2hpbGQoZGF0ZV9kaXYpO1xyXG4gICAgcHJvbXB0X2Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eV9kaXYpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gcHJvbXB0X2RpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUxhYmxlSW5wdXQocXVlc3Rpb24sIHR5cGUsIGNsYXNzTmFtZSkge1xyXG4gICAgY29uc3QgcV9kaXYgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCAncV9kaXYnKTtcclxuICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlRWxlKCdsYWJlbCcsIHF1ZXN0aW9uLCAnaW4nKTtcclxuICAgIGNvbnN0IGFuc3dlciA9IGNyZWF0ZUVsZSh0eXBlLCAnJywgYCR7Y2xhc3NOYW1lfV9hbnNgKTtcclxuICAgIHFfZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgIHFfZGl2LmFwcGVuZENoaWxkKGFuc3dlcik7XHJcbiAgICBcclxuICAgIHJldHVybiBxX2RpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZVByaW9yaXR5RGl2KHF1ZXN0aW9uKSB7XHJcbiAgICBjb25zdCBwcmlvcml0eURpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdxX2RpdicpO1xyXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGNyZWF0ZUVsZSgnbGFiZWwnLCBxdWVzdGlvbiwgJ2luJyk7XHJcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGNyZWF0ZUVsZSgnc2VsZWN0JywgJycsICdpbl9wcmlvcml0eV9hbnMnKTtcclxuICAgIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSAncHJpb3JpdHknO1xyXG4gICAgY29uc3Qgb3B0aW9uVG9wID0gX2NyZWF0ZU9wdGlvbigndG9wJyk7XHJcbiAgICBjb25zdCBvcHRpb25NaWQgPSBfY3JlYXRlT3B0aW9uKCdtaWRkbGUnKTtcclxuICAgIGNvbnN0IG9wdGlvbkxvdyA9IF9jcmVhdGVPcHRpb24oJ2xvdycpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uVG9wKTtcclxuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbk1pZCk7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25Mb3cpO1xyXG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XHJcbiAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdCk7XHJcbiAgICBcclxuICAgIHJldHVybiBwcmlvcml0eURpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZU9wdGlvbihwcmlvcml0eSkge1xyXG4gICAgY29uc3Qgb3B0aW9uID0gY3JlYXRlRWxlKCdvcHRpb24nLCBwcmlvcml0eSwgYGluX29wdGlvbnNfJHtwcmlvcml0eX1gKTtcclxuICAgIG9wdGlvbi52YWx1ZSA9IHByaW9yaXR5O1xyXG4gICAgcmV0dXJuIG9wdGlvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NsaWNrVG9DYW5jZWwoYnV0dCkge1xyXG4gICAgYnV0dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9yZW1vdmVQcm9tcHQoKSwge29uY2U6IHRydWV9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NsaWNrZWRPdXRzaWRlKCkge1xyXG4gICAgY29uc3QgbmV3SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5uZXdJdGVtYCk7XHJcbiAgICBuZXdJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0ID09IGUudGFyZ2V0KVxyXG4gICAgICAgICAgICBfcmVtb3ZlUHJvbXB0KCk7XHJcbiAgICB9LCB7b25jZTogdHJ1ZX0pO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gX3JlbW92ZVByb21wdCgpIHtcclxuICAgIGNvbnN0IG5ld0l0ZW1EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubmV3SXRlbWApO1xyXG4gICAgbmV3SXRlbURpdi5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvbXB0c2ApKTtcclxuICAgIG5ld0l0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgX2VuYWJsZU5ld0J1dHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2VuYWJsZU5ld0J1dHQoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYWRkYCkuZGlzYWJsZWQgPSBmYWxzZTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb21wdDsiLCJpbXBvcnQgc2hvd0xpc3QgZnJvbSBcIi4vY3JlYXRlT25TY3JlZW5cIjtcclxuaW1wb3J0IGNyZWF0ZVByb21wdCBmcm9tICcuL2NyZWF0ZVByb21wdCc7XHJcblxyXG5jb25zdCBlZGl0SXRlbSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGVkaXRJdCA9IChpdGVtLCBsaXN0KSA9PiB7XHJcbiAgICAgICAgX3Nob3dGb3JtKCk7XHJcbiAgICAgICAgY3JlYXRlUHJvbXB0KCkuY3JlYXRlSXQoJ1NBVkUnKTtcclxuICAgICAgICBfZmlsbERhdGEoaXRlbSk7XHJcbiAgICAgICAgX2NoYW5nZURhdGEoaXRlbSwgbGlzdCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge2VkaXRJdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9zaG93Rm9ybSgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5uZXdJdGVtYCkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZmlsbERhdGEoaXRlbSkge1xyXG4gICAgbGV0IGZlaWxkcyA9IF9wcm9tcHRBKCk7XHJcbiAgICBmZWlsZHMudGl0bGUudmFsdWUgPSBpdGVtLmdldFRpdGxlKCk7XHJcbiAgICBmZWlsZHMuZGVzLnZhbHVlID0gaXRlbS5nZXREZXMoKTtcclxuICAgIGZlaWxkcy5kYXRlLnZhbHVlID0gaXRlbS5nZXREYXRlKCk7XHJcbiAgICBmZWlsZHMucHJpb3JpdHkudmFsdWUgPSBpdGVtLmdldFByaW9yaXR5KCk7XHJcbn1cclxuXHJcbmNvbnN0IF9wcm9tcHRBID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5fdGl0bGVfYW5zJyk7XHJcbiAgICBjb25zdCBkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5fZGVzX2FucycpO1xyXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbl9kYXRlX2FucycpO1xyXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5fcHJpb3JpdHlfYW5zJyk7XHJcblxyXG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzLCBkYXRlLCBwcmlvcml0eX07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jaGFuZ2VEYXRhKGl0ZW0sIGxpc3QpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+ICB7XHJcbiAgICAgICAgX3N0b3JlQ2hhbmdlcyhpdGVtKTtcclxuICAgICAgICBfcmVtb3ZlUHJvbXB0KCk7XHJcbiAgICAgICAgaWYgKGxpc3QuZ2V0TGlzdCgpICE9IG51bGwpXHJcbiAgICAgICAgICAgIHNob3dMaXN0KGxpc3QpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9zdG9yZUNoYW5nZXMoaXRlbSkge1xyXG4gICAgbGV0IGlucHV0ID0gX3Byb21wdEEoKTtcclxuICAgIGl0ZW0uc2V0VGl0bGUoaW5wdXQudGl0bGUudmFsdWUpO1xyXG4gICAgaXRlbS5zZXREZXMoaW5wdXQuZGVzLnZhbHVlKTtcclxuICAgIGl0ZW0uc2V0RGF0ZShpbnB1dC5kYXRlLnZhbHVlKTtcclxuICAgIGl0ZW0uc2V0UHJpb3JpdHkoaW5wdXQucHJpb3JpdHkudmFsdWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfcmVtb3ZlUHJvbXB0KCkge1xyXG4gICAgY29uc3QgbmV3SXRlbURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5uZXdJdGVtYCk7XHJcbiAgICBuZXdJdGVtRGl2LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9tcHRzYCkpO1xyXG4gICAgbmV3SXRlbURpdi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVkaXRJdGVtOyIsImltcG9ydCB0b0RvSXRlbSBmcm9tIFwiLi90b0RvSXRlbVwiO1xyXG5pbXBvcnQgc2hvd0l0IGZyb20gXCIuL2NyZWF0ZU9uU2NyZWVuXCI7XHJcbmltcG9ydCBjcmVhdGVQcm9tcHQgZnJvbSBcIi4vY3JlYXRlUHJvbXB0XCI7XHJcblxyXG5jb25zdCAgbmV3SXRlbUNvbnRyb2wgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZU5ld0l0ZW0gPSAobGlzdCkgPT4ge1xyXG4gICAgICAgIF9kaXNhYmxlTmV3QnV0dCgpO1xyXG4gICAgICAgIGNyZWF0ZVByb21wdCgpLmNyZWF0ZUl0KCdhZGQnKTtcclxuICAgICAgICBfc3RvcmVJdGVtKGxpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7c3RvcmVOZXdJdGVtfTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2Rpc2FibGVOZXdCdXR0KCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmFkZGApLmRpc2FibGVkID0gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2VuYWJsZU5ld0J1dHQoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYWRkYCkuZGlzYWJsZWQgPSBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3N0b3JlSXRlbSAobGlzdCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBfZ2V0SXRlbSgpO1xyXG4gICAgICAgIF9zdG9yZUl0KGxpc3QsIG5ld0l0ZW0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9nZXRJdGVtKCkge1xyXG4gICAgbGV0IGlucHV0ID0gX3Byb21wdEEoKTtcclxuICAgIF9yZW1vdmVQcm9tcHQoKTtcclxuICAgIHJldHVybiBpbnB1dFRvSXRlbShpbnB1dCk7XHJcbn1cclxuXHJcbmNvbnN0IF9wcm9tcHRBID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5fdGl0bGVfYW5zJykudmFsdWU7XHJcbiAgICBjb25zdCBkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5fZGVzX2FucycpLnZhbHVlO1xyXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbl9kYXRlX2FucycpLnZhbHVlO1xyXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5fcHJpb3JpdHlfYW5zJykudmFsdWU7XHJcblxyXG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzLCBkYXRlLCBwcmlvcml0eX07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlucHV0VG9JdGVtKGlucHV0KSB7XHJcbiAgICByZXR1cm4gdG9Eb0l0ZW0oaW5wdXQudGl0bGUsIGlucHV0LmRlcywgaW5wdXQuZGF0ZSwgaW5wdXQucHJpb3JpdHkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfcmVtb3ZlUHJvbXB0KCkge1xyXG4gICAgY29uc3QgbmV3SXRlbURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdJdGVtJyk7XHJcbiAgICBuZXdJdGVtRGl2LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9tcHRzJykpO1xyXG4gICAgbmV3SXRlbURpdi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICBfZW5hYmxlTmV3QnV0dCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfc3RvcmVJdChsaXN0LCBuZXdJdGVtKSB7XHJcbiAgICBsaXN0LmFkZEl0ZW0obmV3SXRlbSk7XHJcbiAgICBzaG93SXQobGlzdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ld0l0ZW1Db250cm9sOyIsImNvbnN0IHRvRG9JdGVtID0gKHRpdGxlLCBkZXMsIGRhdGUsIHByaW9yaXR5KSA9PiB7XHJcbiAgICBsZXQgbXlUaXRsZSA9IHRpdGxlO1xyXG4gICAgbGV0IG15RGVzID0gZGVzO1xyXG4gICAgbGV0IG15RGF0ZSA9IGRhdGU7XHJcbiAgICBsZXQgbXlQcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgbGV0IG15U3RhdHVzID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG15VGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHtcclxuICAgICAgICBteVRpdGxlID0gbmV3VGl0bGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGdldERlcyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbXlEZXM7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldERlcyA9IChuZXdEZXMpID0+IHtcclxuICAgICAgICBteURlcyA9IG5ld0RlcztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXREYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBteURhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0RGF0ZSA9IChuZXdEYXRlKSA9PiB7XHJcbiAgICAgICAgbXlEYXRlID0gbmV3RGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbXlQcmlvcml0eTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRQcmlvcml0eSA9IChuZXdQcmlvcml0eSkgPT4ge1xyXG4gICAgICAgIG15UHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRTdGF0dXMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG15U3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldFN0YXR1cyA9ICgpID0+IHtcclxuICAgICAgICBteVN0YXR1cyA9ICFteVN0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b1N0cmluZyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gYCR7bXlUaXRsZX0sJHtteURlc30sJHtteURhdGV9LCR7bXlQcmlvcml0eX0sJHtteVN0YXR1c31gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7Z2V0VGl0bGUsIHNldFRpdGxlLCBnZXREZXMsIHNldERlcywgc2V0RGF0ZSwgZ2V0RGF0ZSwgXHJcbiAgICAgICAgICAgICAgICBnZXRQcmlvcml0eSwgc2V0UHJpb3JpdHksIGdldFN0YXR1cywgc2V0U3RhdHVzLCB0b1N0cmluZ307XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b0RvSXRlbTsiLCIvLyBvYmplY3QgdGhhdCBzdG9yZSBhbGwgaXRlbVxyXG5cclxuY29uc3QgdG9Eb0xpc3QgPSAobmFtZSkgPT4ge1xyXG4gICAgbGV0IG15TmFtZSA9IG5hbWU7XHJcbiAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgIGxldCBtaWRJbmRleCA9IGl0ZW1zLmxlbmd0aDtcclxuICAgIGxldCBsb3dJbmRleCA9IGl0ZW1zLmxlbmd0aDtcclxuXHJcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBteU5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0TmFtZSA9IChuZXdOYW1lKSA9PiB7XHJcbiAgICAgICAgbXlOYW1lID0gbmV3TmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRMaXN0ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRJdGVtID0gKG5ld0l0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBwcmkgPSBuZXdJdGVtLmdldFByaW9yaXR5KCk7XHJcbiAgICAgICAgX3BsYWNlSXRlbUJ5UHJpb3JpdHkocHJpLCBuZXdJdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVJdGVtID0gKHRhcmdldCkgPT4ge1xyXG4gICAgICAgIF91cGRhdGVJbmRleChpdGVtc1t0YXJnZXRdLmdldFByaW9yaXR5KCkpO1xyXG4gICAgICAgIGl0ZW1zLnNwbGljZSh0YXJnZXQsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZUFsbCA9ICgpID0+IHtcclxuICAgICAgICBpdGVtcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dMaXN0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSBpdGVtLnRvU3RyaW5nKCkgKyAnXFxuJztcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9wbGFjZUl0ZW1CeVByaW9yaXR5KHByaSwgaXRlbSkge1xyXG4gICAgICAgIHN3aXRjaCAocHJpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3RvcCc6XHJcbiAgICAgICAgICAgICAgICBpdGVtcy5zcGxpY2UobWlkSW5kZXgsIDAsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgbWlkSW5kZXggKz0gMTtcclxuICAgICAgICAgICAgICAgIGxvd0luZGV4ICs9IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgICAgICAgICBjYXNlICdtaWRkbGUnOlxyXG4gICAgICAgICAgICAgICAgaXRlbXMuc3BsaWNlKGxvd0luZGV4LCAwLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgIGxvd0luZGV4ICs9IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgICAgICAgICBjYXNlICdsb3cnOlxyXG4gICAgICAgICAgICAgICAgaXRlbXMuc3BsaWNlKGl0ZW1zLmxlbmd0aCwgMCwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX3VwZGF0ZUluZGV4KHByaSkge1xyXG4gICAgICAgIHN3aXRjaCAocHJpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3RvcCc6XHJcbiAgICAgICAgICAgICAgICBtaWRJbmRleCAtPSAxO1xyXG4gICAgICAgICAgICAgICAgbG93SW5kZXggLT0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnbWlkZGxlJzpcclxuICAgICAgICAgICAgICAgIGxvd0luZGV4IC09IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgbGV0IGxpc3RTdHJpbmcgPSBgJHtteU5hbWV9OmA7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgbGlzdFN0cmluZyArPSAnWycgKyBpdGVtLnRvU3RyaW5nKCkgKyAnXSc7XHJcbiAgICAgICAgICAgIGxpc3RTdHJpbmcgKz0gJy4nO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxpc3RTdHJpbmcgPSBsaXN0U3RyaW5nLnN1YnN0cmluZygwLCBsaXN0U3RyaW5nLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIHJldHVybiBsaXN0U3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7Z2V0TmFtZSwgc2V0TmFtZSwgZ2V0TGlzdCwgYWRkSXRlbSwgcmVtb3ZlSXRlbSwgcmVtb3ZlQWxsLCBcclxuICAgICAgICAgICAgICAgIHNob3dMaXN0LCB0b1N0cmluZ307XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b0RvTGlzdDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVFbGUgZnJvbSBcIi4vY3JlYXRlRWxlXCI7XHJcbmltcG9ydCBzaG93TGlzdCBmcm9tIFwiLi9jcmVhdGVPblNjcmVlblwiO1xyXG5pbXBvcnQgbmV3SXRlbUNvbnRyb2wgZnJvbSAnLi9uZXdJdGVtQ29udHJvbCc7XHJcbmltcG9ydCB0b0RvTGlzdCBmcm9tIFwiLi90b0RvTGlzdFwiO1xyXG5cclxuZnVuY3Rpb24gc2hvd1Byb2plY3RzKHByb2plY3RzKSB7XHJcbiAgICBfY3JlYXRlSGVhZGVyKHByb2plY3RzKTtcclxuICAgIHByb2plY3RzLmdldFByb2plY3RzKCkuZm9yRWFjaChsaXN0ID0+IHtcclxuICAgICAgICBfZGlzcGxheUhlYWRlcihsaXN0KTtcclxuICAgICAgICBzaG93TGlzdChsaXN0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlSGVhZGVyKHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdoZWFkZXJEaXYnKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChfY3JlYXRlVGFiKHByb2plY3RzKSk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9kaXNwbGF5SGVhZGVyKGxpc3QpIHtcclxuICAgIGNvbnN0IGVsZSA9IF9jcmVhdGVMaXN0SGVhZGVyKGxpc3QpO1xyXG4gICAgX2FwcGVuZEVsZShlbGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlTGlzdEhlYWRlcihsaXN0KSB7XHJcbiAgICBjb25zdCBuYW1lID0gbGlzdC5nZXROYW1lKCkucmVwbGFjZSgnICcsICdfJyk7XHJcbiAgICBjb25zdCBhZGRCdXR0ID0gY3JlYXRlRWxlKCdidXR0b24nLCAnYWRkIGl0ZW0nLCBgYWRkJHtuYW1lfWApO1xyXG4gICAgYWRkQnV0dC5jbGFzc0xpc3QuYWRkKCdhZGQnKTtcclxuICAgIGFkZEJ1dHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfY2xpY2tUb0FkZChsaXN0KSk7XHJcbiAgICBjb25zdCBuZXdJdGVtRGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgYG5ld0l0ZW1gKTtcclxuICAgIG5ld0l0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgY29uc3QgbGlzdERpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsIGBsaXN0YCk7XHJcbiAgICByZXR1cm4ge25ld0l0ZW1EaXYsIGxpc3REaXYsIGFkZEJ1dHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlVGFiKHByb2plY3RzKSB7XHJcbiAgICBjb25zdCB0YWJEaXYgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCAndGFiJyk7XHJcbiAgICBwcm9qZWN0cy5nZXRQcm9qZWN0cygpLmZvckVhY2gobGlzdCA9PiB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGxpc3QuZ2V0TmFtZSgpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVCdXR0ID0gY3JlYXRlRWxlKCdidXR0b24nLCBgJHtuYW1lfWAsIGBwcm9qZWN0X2J1dHRgKTtcclxuICAgICAgICBuYW1lQnV0dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9jaGFuZ2VUb1Byb2plY3QobGlzdCkpO1xyXG4gICAgICAgIHRhYkRpdi5hcHBlbmRDaGlsZChuYW1lQnV0dCk7XHJcbiAgICB9KVxyXG4gICAgdGFiRGl2LmFwcGVuZENoaWxkKF9jcmVhdGVBZGRQcm9qZWN0QnV0dChwcm9qZWN0cykpO1xyXG4gICAgcmV0dXJuIHRhYkRpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NoYW5nZVRvUHJvamVjdChsaXN0KSB7XHJcbiAgICBfY2xlYXJMaXN0KCk7XHJcbiAgICBfZGlzcGxheUhlYWRlcihsaXN0KTtcclxuICAgIHNob3dMaXN0KGxpc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY2xlYXJMaXN0KCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICAvLyBjb250ZW50LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQnKSk7XHJcbiAgICAvLyBjb250ZW50LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdJdGVtJykpO1xyXG4gICAgLy8gY29udGVudC5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpKTtcclxuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3REaXYnKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVBZGRQcm9qZWN0QnV0dChwcm9qZWN0cykge1xyXG4gICAgY29uc3QgYWRkQnV0dCA9IGNyZWF0ZUVsZSgnYnV0dG9uJywgJ25ldyBQcm9qZWN0JywgJ2FkZF9wcm9qZWN0Jyk7XHJcbiAgICBhZGRCdXR0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX2FkZFByb2plY3QocHJvamVjdHMpKTtcclxuICAgIHJldHVybiBhZGRCdXR0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfYWRkUHJvamVjdChwcm9qZWN0cykge1xyXG4gICAgY29uc3QgcHJval9wcm9tcHQgPSBwcm9tcHQoJ1Byb2plY3QgTmFtZTonLCAnTmV3X3Byb2plY3QnKTtcclxuICAgIGNvbnN0IG5ld0xpc3QgPSB0b0RvTGlzdChwcm9qX3Byb21wdCk7XHJcbiAgICBwcm9qZWN0cy5hZGRMaXN0KG5ld0xpc3QpO1xyXG4gICAgY29uc3Qgc3RyID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdHMudG9TdHJpbmcoKSlcclxuICAgIGNoZWNrSnNvbihzdHIpO1xyXG4gICAgX2NsZWFySGVhZGVyKCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyRGl2JykuYXBwZW5kQ2hpbGQoX2NyZWF0ZVRhYihwcm9qZWN0cykpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0pzb24oc3RyKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IHN0ci5zdWJzdHJpbmcoMSwgc3RyLmxlbmd0aCAtIDEpLnNwbGl0KCd8Jyk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcbiAgICBjb25zdCBuYW1laXRlbXMgPSBwcm9qZWN0c1swXS5zdWJzdHJpbmcoMSwgcHJvamVjdHNbMF0ubGVuZ3RoIC0gMSkuc3BsaXQoJzonKTtcclxuICAgIGNvbnNvbGUubG9nKG5hbWVpdGVtc1swXSk7XHJcbiAgICBjb25zb2xlLmxvZyhuYW1laXRlbXNbMV0pO1xyXG4gICAgY29uc3QgaXRlbUFyciA9IFtdO1xyXG4gICAgY29uc3QgaXRlbXMgPSBuYW1laXRlbXNbMV0uc3BsaXQoJy4nKTtcclxuICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbS5zdWJzdHJpbmcoMSwgaXRlbS5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgaXRlbUFyci5wdXNoKClcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jbGVhckhlYWRlcigpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJEaXYnKTtcclxuICAgIHdoaWxlIChoZWFkZXIuZmlyc3RDaGlsZCAhPSBudWxsKVxyXG4gICAgICAgIGhlYWRlci5yZW1vdmVDaGlsZChoZWFkZXIuZmlyc3RDaGlsZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jbGlja1RvQWRkKGxpc3QpIHtcclxuICAgIGNvbnN0IG5ld0l0ZW0gPSBuZXdJdGVtQ29udHJvbCgpO1xyXG4gICAgY29uc29sZS5sb2cobGlzdC5nZXRMaXN0KCkpO1xyXG4gICAgbmV3SXRlbS5zdG9yZU5ld0l0ZW0obGlzdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9hcHBlbmRFbGUgKGVsZSkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICBjb25zdCBsaXN0RGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgJ2xpc3REaXYnKTtcclxuICAgIGZvciAoY29uc3QgZWxlbWVudCBpbiBlbGUpIHtcclxuICAgICAgICBsaXN0RGl2LmFwcGVuZENoaWxkKGVsZVtlbGVtZW50XSk7XHJcbiAgICB9XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGxpc3REaXYpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93UHJvamVjdHM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9