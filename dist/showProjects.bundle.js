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
    const listName = list.getName();
    const itemDiv = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', `item_${listName}`);
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
    const createIt = (name, listName) => {
        _displayPrompt(name, listName);
    }

    return {createIt};
}

function _displayPrompt(name, listName) {
    const elements = _createPromptEle(name, listName);
    elements.prompt_div.appendChild(elements.butt_div);
    elements.newItemDiv.appendChild(elements.prompt_div);
}

function _createPromptEle(name, listName) {
    const newItemDiv = document.querySelector(`.newItem_${listName}`);
    const prompt_div = _appendPrompts(_promptQ(), listName);
    const fin_butt = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('button', name, 'fin');
    const cancel_butt = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'Cancel', 'cancel');
    const butt_div = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'butt_div');
    butt_div.appendChild(fin_butt);
    butt_div.appendChild(cancel_butt);
    _clickToCancel(cancel_butt, listName);
    _clickedOutside(listName);
    return {newItemDiv, prompt_div, butt_div};
}

const _promptQ = () => {
    const askTitle = "To do item name";
    const askDes = "to do item description";
    const askDate = "item due date";
    const askPriority = "item's priority";

    return {askTitle, askDes, askDate, askPriority};
}

function _appendPrompts(prompts, name) {
    const prompt_div = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', `prompts_${name}`);
    prompt_div.classList.add('prompts');
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

function _clickToCancel(butt, listName) {
    butt.addEventListener('click', () => _removePrompt(listName), {once: true});
}

function _clickedOutside(listName) {
    const newItem = document.querySelector(`.newItem_${listName}`);
    newItem.addEventListener('click', (e) => {
        if (e.currentTarget == e.target)
            _removePrompt(listName);
    }, {once: true});

}

function _removePrompt(listName) {
    const newItemDiv = document.querySelector(`.newItem_${listName}`);
    newItemDiv.removeChild(document.querySelector(`.prompts_${listName}`));
    newItemDiv.classList.add('hide');
    _enableNewButt(listName);
}

function _enableNewButt(listName) {
    document.querySelector(`.add_${listName}`).disabled = false;
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
        _showForm(list.getName());
        (0,_createPrompt__WEBPACK_IMPORTED_MODULE_1__["default"])().createIt(name, list.getName());
        _fillData(item);
        _changeData(item, list);
    }
    return {editIt};
}

function _showForm(name) {
    document.querySelector(`.newItem_${name}`).classList.remove('hide');
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
        _removePrompt(list.getName());
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

function _removePrompt(name) {
    const newItemDiv = document.querySelector(`.newItem_${name}`);
    newItemDiv.removeChild(document.querySelector(`.prompts_${name}`));
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
        _disableNewButt(list.getName());
        (0,_createPrompt__WEBPACK_IMPORTED_MODULE_2__["default"])().createIt('add', list.getName());
        _storeItem(list);
    }

    return {storeNewItem};
}

function _disableNewButt(name) {
    document.querySelector(`.add_${name}`).disabled = true;
}

function _enableNewButt(name) {
    document.querySelector(`.add_${name}`).disabled = false;
}

function _storeItem (list) {
    document.querySelector('.fin').addEventListener('click', () => {
        const newItem = _getItem(list.getName());
        _storeIt(list, newItem);
    });
}

function _getItem(name) {
    let input = _promptA();
    _removePrompt(name);
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

function _removePrompt(name) {
    const newItemDiv = document.querySelector('.newItem');
    newItemDiv.removeChild(document.querySelector('.prompts'));
    newItemDiv.classList.add('hide');
    _enableNewButt(name);
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
    const projectName = list.getName();
    const addButt = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'add', `add_${projectName}`);
    addButt.classList.add('add');
    addButt.addEventListener('click', () => _clickToAdd(list));
    const newItemDiv = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', `newItem_${projectName}`);
    newItemDiv.classList.add('newItem');
    newItemDiv.classList.add('hide');
    const listDiv = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', `list_${projectName}`);
    listDiv.classList.add('list');
    return {addButt, newItemDiv, listDiv};
}

function _createTab(projects) {
    const tabDiv = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'tab');
    projects.getProjects().forEach(list => {
        const name = list.getName();
        const nameButt = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('button', `${name}`, `${name}_butt`);
        nameButt.classList.add('project_butt');
        nameButt.addEventListener('click', () => _changeToProject(list));
        tabDiv.appendChild(nameButt);
    })
    tabDiv.appendChild(_createAddProjectButt(projects));
    return tabDiv;
}

function _createAddProjectButt(projects) {
    const addButt = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'new Project', 'add_project');
    addButt.addEventListener('click', () => _addProject(projects));
    return addButt;
}

function _addProject(projects) {
    const proj_prompt = prompt('Project Name:', 'Enter Name');
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
    _showForm(list);
    const newItem = (0,_newItemControl__WEBPACK_IMPORTED_MODULE_2__["default"])();
    newItem.storeNewItem(list);
}

function _showForm(list) {
    const projectName = list.getName();
    document.querySelector(`.newItem_${projectName}`).classList.remove('hide');
}

function _appendEle (ele) {
    const content = document.querySelector('.content');
    for (const element in ele) {
        content.append(ele[element]);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showProjects);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd1Byb2plY3RzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQ1B4QjtBQUNBO0FBQ29DO0FBQ0Y7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkJBQTJCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNEQUFTLG9CQUFvQixTQUFTO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNEQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0RBQVM7QUFDM0IsZ0JBQWdCLHNEQUFTO0FBQ3pCLGlCQUFpQixzREFBUztBQUMxQixxQkFBcUIsc0RBQVM7QUFDOUI7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzREFBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzREFBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNEQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzREFBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNEQUFTO0FBQzlCLDZDQUE2QyxxREFBUTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzREFBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixzREFBUztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7O0FDN0hhO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsU0FBUztBQUNuRTtBQUNBLHFCQUFxQixzREFBUztBQUM5Qix3QkFBd0Isc0RBQVM7QUFDakMscUJBQXFCLHNEQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNEQUFTLHVCQUF1QixLQUFLO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0RBQVM7QUFDM0Isa0JBQWtCLHNEQUFTO0FBQzNCLG1CQUFtQixzREFBUyxjQUFjLFVBQVU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0RBQVM7QUFDakMsMEJBQTBCLHNEQUFTO0FBQ25DLDJCQUEyQixzREFBUztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNEQUFTLG1DQUFtQyxTQUFTO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsV0FBVztBQUM5RTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsU0FBUztBQUNoRTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEdBQUcsV0FBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxTQUFTO0FBQ25FLDhEQUE4RCxTQUFTO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7QUFDQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0dhO0FBQ0U7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFZO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsS0FBSztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkRBQVE7QUFDcEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsS0FBSztBQUMvRCw4REFBOEQsS0FBSztBQUNuRTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEVztBQUNJO0FBQ0k7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFZO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsS0FBSztBQUN4QztBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsS0FBSztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFEQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJEQUFNO0FBQ1Y7QUFDQTtBQUNBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7O0FDNUQ3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUSxJQUFJLE9BQU8sSUFBSSxXQUFXO0FBQ3BEO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUN2RHZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7O1VDN0V2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm9DO0FBQ0k7QUFDTTtBQUNaO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFRO0FBQ2hCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzREFBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNEQUFTLHlCQUF5QixZQUFZO0FBQ2xFO0FBQ0E7QUFDQSx1QkFBdUIsc0RBQVMsdUJBQXVCLFlBQVk7QUFDbkU7QUFDQTtBQUNBLG9CQUFvQixzREFBUyxvQkFBb0IsWUFBWTtBQUM3RDtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0RBQVM7QUFDNUI7QUFDQTtBQUNBLHlCQUF5QixzREFBUyxjQUFjLEtBQUssTUFBTSxLQUFLO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNEQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxREFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyREFBYztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFlBQVk7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy9jcmVhdGVFbGUuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy9jcmVhdGVPblNjcmVlbi5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL2NyZWF0ZVByb21wdC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL2VkaXRJdGVtLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvbmV3SXRlbUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy90b0RvSXRlbS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL3RvRG9MaXN0LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL3Nob3dQcm9qZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVFbGUgKHR5cGUsIHZhbHVlLCBjbGFzc05hbWUpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgICB0YXJnZXQudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGUgOyIsIi8vIHNob3cgaXRlbSBhbmQgb3RoZXIgb24gaHRtbCBmaWxlXHJcbi8vIERPTSBzdHVmZlxyXG5pbXBvcnQgY3JlYXRlRWxlIGZyb20gXCIuL2NyZWF0ZUVsZVwiO1xyXG5pbXBvcnQgZWRpdEl0ZW0gZnJvbSBcIi4vZWRpdEl0ZW1cIjtcclxuXHJcbmZ1bmN0aW9uIHNob3dMaXN0KGxpc3QpIHtcclxuICAgIGNvbnN0IGxpc3RfZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKTtcclxuICAgIF9jbGVhclNjcmVlbihsaXN0X2Rpdik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QuZ2V0TGlzdCgpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgX3Nob3dJdGVtKGxpc3RfZGl2LCBsaXN0LCBsaXN0LmdldExpc3QoKVtpXSwgaSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9zaG93SXRlbShsaXN0X2RpdiwgbGlzdCwgaXRlbSwgaSkge1xyXG4gICAgbGlzdF9kaXYuYXBwZW5kQ2hpbGQoX2FwcGVuZEl0ZW0obGlzdCwgX2dldEl0ZW0oaXRlbSksIGl0ZW0sIGkpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2FwcGVuZEl0ZW0gKGxpc3QsIGl0ZW1fZGl2LCBpdGVtLCBpKSB7XHJcbiAgICBjb25zdCBsaXN0TmFtZSA9IGxpc3QuZ2V0TmFtZSgpO1xyXG4gICAgY29uc3QgaXRlbURpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsIGBpdGVtXyR7bGlzdE5hbWV9YCk7XHJcbiAgICBpdGVtRGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcclxuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoX2NyZWF0ZUJhc2ljRGl2KGxpc3QsIGl0ZW1fZGl2LCBpdGVtLCBpKSk7XHJcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKF9jcmVhdGVEZXMoaXRlbV9kaXYuZGVzKSk7XHJcbiAgICByZXR1cm4gaXRlbURpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUJhc2ljRGl2KGxpc3QsIGl0ZW1fZGl2LCBpdGVtLCBpKSB7XHJcbiAgICBjb25zdCBiYXNpY0RpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdiYXNpYycpO1xyXG4gICAgYmFzaWNEaXYuYXBwZW5kQ2hpbGQoaXRlbV9kaXYuc3RhdHVzKTtcclxuICAgIGJhc2ljRGl2LmFwcGVuZENoaWxkKGl0ZW1fZGl2LnRpdGxlKTtcclxuICAgIGJhc2ljRGl2LmFwcGVuZENoaWxkKGl0ZW1fZGl2LmRhdGUpO1xyXG4gICAgYmFzaWNEaXYuYXBwZW5kQ2hpbGQoaXRlbV9kaXYucHJpb3JpdHkpO1xyXG4gICAgYmFzaWNEaXYuYXBwZW5kQ2hpbGQoX2NyZWF0ZUVkaXRCdXR0KGl0ZW0sIGxpc3QpKTtcclxuICAgIGJhc2ljRGl2LmFwcGVuZENoaWxkKF9jcmVhdGVEZWxldGVCdXR0KGxpc3QsIGkpKTtcclxuICAgIGJhc2ljRGl2LmFwcGVuZENoaWxkKF9jcmVhdGVFeHBhbmRCdXR0KGl0ZW1fZGl2LmRlcykpO1xyXG4gICAgcmV0dXJuIGJhc2ljRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZ2V0SXRlbShpdGVtKSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZSgnZGl2JywgaXRlbS5nZXRUaXRsZSgpLCAndGl0bGUnKTtcclxuICAgIGNvbnN0IGRlcyA9IGNyZWF0ZUVsZSgnZGl2JywgaXRlbS5nZXREZXMoKSwgJ2RlcycpO1xyXG4gICAgY29uc3QgZGF0ZSA9IGNyZWF0ZUVsZSgnZGl2JywgaXRlbS5nZXREYXRlKCksICdkYXRlJyk7XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGNyZWF0ZUVsZSgnZGl2JywgaXRlbS5nZXRQcmlvcml0eSgpLCAncHJpb3JpdHknKTtcclxuICAgIGNvbnN0IHN0YXR1cyA9IF9jcmVhdGVTdGF0dXNEaXYoaXRlbSk7XHJcbiAgICByZXR1cm4ge3RpdGxlLCBkZXMsIGRhdGUsIHByaW9yaXR5LCBzdGF0dXN9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY2xlYXJTY3JlZW4obGlzdF9kaXYpIHtcclxuICAgIHdoaWxlKGxpc3RfZGl2LmZpcnN0Q2hpbGQgIT0gbnVsbClcclxuICAgICAgICBsaXN0X2Rpdi5yZW1vdmVDaGlsZChsaXN0X2Rpdi5maXJzdENoaWxkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZVN0YXR1c0RpdihpdGVtKSB7XHJcbiAgICBjb25zdCBzdGF0dXNEaXYgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCAnc3RhdHVzJyk7XHJcbiAgICBjb25zdCBzdGF0dXNMYWJlbCA9IF9jcmVhdGVMYWJlbCgpO1xyXG4gICAgY29uc3Qgc3RhdHVzQ2hlY2sgPSBfY3JlYXRlQ2hlY2soaXRlbSk7XHJcbiAgICBzdGF0dXNEaXYuYXBwZW5kQ2hpbGQoc3RhdHVzQ2hlY2spO1xyXG4gICAgcmV0dXJuIHN0YXR1c0RpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUxhYmVsKCkge1xyXG4gICAgY29uc3Qgc3RhdHVzTGFiZWwgPSBjcmVhdGVFbGUoJ2xhYmVsJywgJ0NvbXBsZXRlZCcsICdzdGF0dXNfbCcpO1xyXG4gICAgc3RhdHVzTGFiZWwuaHRtbEZvciA9ICdzdGF0dXMnO1xyXG4gICAgcmV0dXJuIHN0YXR1c0xhYmVsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlQ2hlY2soaXRlbSkge1xyXG4gICAgY29uc3Qgc3RhdHVzQ2hlY2sgPSBjcmVhdGVFbGUoJ2lucHV0JywgJycsICdzdGF0dXNfYycpO1xyXG4gICAgc3RhdHVzQ2hlY2sudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgICBzdGF0dXNDaGVjay5uYW1lID0gJ3N0YXR1cyc7XHJcbiAgICBpZiAoaXRlbS5nZXRTdGF0dXMoKSlcclxuICAgICAgICBzdGF0dXNDaGVjay5jaGVja2VkID0gdHJ1ZTtcclxuICAgIHN0YXR1c0NoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICBpdGVtLnNldFN0YXR1cygpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc3RhdHVzQ2hlY2s7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVEZWxldGVCdXR0KGxpc3QsIGkpIHtcclxuICAgIGNvbnN0IGRlbGVCdXR0ID0gY3JlYXRlRWxlKCdidXR0b24nLCAnRGVsZXRlJywgJ2RlbGV0ZScpO1xyXG4gICAgZGVsZUJ1dHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IF9kZWxldGVFbnRyeShsaXN0LCBpKSk7XHJcbiAgICByZXR1cm4gZGVsZUJ1dHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9kZWxldGVFbnRyeShsaXN0LCBpKSB7XHJcbiAgICBfcmVtb3ZlSXRlbShsaXN0LCBpKTtcclxuICAgIHNob3dMaXN0KGxpc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfcmVtb3ZlSXRlbShsaXN0LCBpKSB7XHJcbiAgICBjb25zdCBsaXN0X2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XHJcbiAgICB3aGlsZSAobGlzdF9kaXYuZmlyc3RDaGlsZCAhPSBudWxsKSBcclxuICAgICAgICBsaXN0X2Rpdi5yZW1vdmVDaGlsZChsaXN0X2Rpdi5maXJzdENoaWxkKTtcclxuICAgIGxpc3QucmVtb3ZlSXRlbShpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUVkaXRCdXR0KGl0ZW0sIGxpc3QpIHtcclxuICAgIGNvbnN0IGVkaXRCdXR0ID0gY3JlYXRlRWxlKCdidXR0b24nLCAnZWRpdCcsICdlZGl0Jyk7XHJcbiAgICBlZGl0QnV0dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGVkaXRJdGVtKCkuZWRpdEl0KCdlZGl0JywgaXRlbSwgbGlzdCkpO1xyXG4gICAgcmV0dXJuIGVkaXRCdXR0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlRXhwYW5kQnV0dChkZXMpIHtcclxuICAgIGNvbnN0IGV4cGFuZEJ1dHQgPSBjcmVhdGVFbGUoJ2J1dHRvbicsICdleHBhbmQnLCAnZXhwYW5kJyk7XHJcbiAgICBleHBhbmRCdXR0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX3Nob3dEZXMoZXhwYW5kQnV0dCwgZGVzLnBhcmVudE5vZGUpKTtcclxuICAgIHJldHVybiBleHBhbmRCdXR0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfc2hvd0RlcyhleHBhbmRCdXR0LCBkZXNfY29udGFpbmVyKSB7XHJcbiAgICBpZiAoZGVzX2NvbnRhaW5lci5jbGFzc0xpc3RbMV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZGVzX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgZXhwYW5kQnV0dC50ZXh0Q29udGVudCA9ICdleHBhbmQnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkZXNfY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICBleHBhbmRCdXR0LnRleHRDb250ZW50ID0gJ2hpZGUnO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlRGVzKGRlc0Rpdikge1xyXG4gICAgY29uc3QgZGVzX2NvbnRhaW5lciA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdkZXNfZGl2Jyk7XHJcbiAgICBkZXNfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgIGRlc19jb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzRGl2KTtcclxuICAgIHJldHVybiBkZXNfY29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93TGlzdDsiLCJpbXBvcnQgY3JlYXRlRWxlIGZyb20gXCIuL2NyZWF0ZUVsZVwiO1xyXG5cclxuY29uc3QgY3JlYXRlUHJvbXB0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY3JlYXRlSXQgPSAobmFtZSwgbGlzdE5hbWUpID0+IHtcclxuICAgICAgICBfZGlzcGxheVByb21wdChuYW1lLCBsaXN0TmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtjcmVhdGVJdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9kaXNwbGF5UHJvbXB0KG5hbWUsIGxpc3ROYW1lKSB7XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IF9jcmVhdGVQcm9tcHRFbGUobmFtZSwgbGlzdE5hbWUpO1xyXG4gICAgZWxlbWVudHMucHJvbXB0X2Rpdi5hcHBlbmRDaGlsZChlbGVtZW50cy5idXR0X2Rpdik7XHJcbiAgICBlbGVtZW50cy5uZXdJdGVtRGl2LmFwcGVuZENoaWxkKGVsZW1lbnRzLnByb21wdF9kaXYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlUHJvbXB0RWxlKG5hbWUsIGxpc3ROYW1lKSB7XHJcbiAgICBjb25zdCBuZXdJdGVtRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm5ld0l0ZW1fJHtsaXN0TmFtZX1gKTtcclxuICAgIGNvbnN0IHByb21wdF9kaXYgPSBfYXBwZW5kUHJvbXB0cyhfcHJvbXB0USgpLCBsaXN0TmFtZSk7XHJcbiAgICBjb25zdCBmaW5fYnV0dCA9IGNyZWF0ZUVsZSgnYnV0dG9uJywgbmFtZSwgJ2ZpbicpO1xyXG4gICAgY29uc3QgY2FuY2VsX2J1dHQgPSBjcmVhdGVFbGUoJ2J1dHRvbicsICdDYW5jZWwnLCAnY2FuY2VsJyk7XHJcbiAgICBjb25zdCBidXR0X2RpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdidXR0X2RpdicpO1xyXG4gICAgYnV0dF9kaXYuYXBwZW5kQ2hpbGQoZmluX2J1dHQpO1xyXG4gICAgYnV0dF9kaXYuYXBwZW5kQ2hpbGQoY2FuY2VsX2J1dHQpO1xyXG4gICAgX2NsaWNrVG9DYW5jZWwoY2FuY2VsX2J1dHQsIGxpc3ROYW1lKTtcclxuICAgIF9jbGlja2VkT3V0c2lkZShsaXN0TmFtZSk7XHJcbiAgICByZXR1cm4ge25ld0l0ZW1EaXYsIHByb21wdF9kaXYsIGJ1dHRfZGl2fTtcclxufVxyXG5cclxuY29uc3QgX3Byb21wdFEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhc2tUaXRsZSA9IFwiVG8gZG8gaXRlbSBuYW1lXCI7XHJcbiAgICBjb25zdCBhc2tEZXMgPSBcInRvIGRvIGl0ZW0gZGVzY3JpcHRpb25cIjtcclxuICAgIGNvbnN0IGFza0RhdGUgPSBcIml0ZW0gZHVlIGRhdGVcIjtcclxuICAgIGNvbnN0IGFza1ByaW9yaXR5ID0gXCJpdGVtJ3MgcHJpb3JpdHlcIjtcclxuXHJcbiAgICByZXR1cm4ge2Fza1RpdGxlLCBhc2tEZXMsIGFza0RhdGUsIGFza1ByaW9yaXR5fTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2FwcGVuZFByb21wdHMocHJvbXB0cywgbmFtZSkge1xyXG4gICAgY29uc3QgcHJvbXB0X2RpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsIGBwcm9tcHRzXyR7bmFtZX1gKTtcclxuICAgIHByb21wdF9kaXYuY2xhc3NMaXN0LmFkZCgncHJvbXB0cycpO1xyXG4gICAgY29uc3QgdGl0bGVfZGl2ID0gX2NyZWF0ZUxhYmxlSW5wdXQocHJvbXB0cy5hc2tUaXRsZSwgJ2lucHV0JywgJ2luX3RpdGxlJyk7XHJcbiAgICBjb25zdCBkZXNfZGl2ID0gX2NyZWF0ZUxhYmxlSW5wdXQocHJvbXB0cy5hc2tEZXMsICd0ZXh0YXJlYScsICdpbl9kZXMnKTtcclxuICAgIGNvbnN0IGRhdGVfZGl2ID0gX2NyZWF0ZUxhYmxlSW5wdXQocHJvbXB0cy5hc2tEYXRlLCAnaW5wdXQnLCAnaW5fZGF0ZScpO1xyXG4gICAgY29uc3QgcHJpb3JpdHlfZGl2ID0gX2NyZWF0ZVByaW9yaXR5RGl2KHByb21wdHMuYXNrUHJpb3JpdHkpO1xyXG4gICAgcHJvbXB0X2Rpdi5hcHBlbmRDaGlsZCh0aXRsZV9kaXYpO1xyXG4gICAgcHJvbXB0X2Rpdi5hcHBlbmRDaGlsZChkZXNfZGl2KTtcclxuICAgIHByb21wdF9kaXYuYXBwZW5kQ2hpbGQoZGF0ZV9kaXYpO1xyXG4gICAgcHJvbXB0X2Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eV9kaXYpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gcHJvbXB0X2RpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUxhYmxlSW5wdXQocXVlc3Rpb24sIHR5cGUsIGNsYXNzTmFtZSkge1xyXG4gICAgY29uc3QgcV9kaXYgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCAncV9kaXYnKTtcclxuICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlRWxlKCdsYWJlbCcsIHF1ZXN0aW9uLCAnaW4nKTtcclxuICAgIGNvbnN0IGFuc3dlciA9IGNyZWF0ZUVsZSh0eXBlLCAnJywgYCR7Y2xhc3NOYW1lfV9hbnNgKTtcclxuICAgIHFfZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgIHFfZGl2LmFwcGVuZENoaWxkKGFuc3dlcik7XHJcbiAgICBcclxuICAgIHJldHVybiBxX2RpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZVByaW9yaXR5RGl2KHF1ZXN0aW9uKSB7XHJcbiAgICBjb25zdCBwcmlvcml0eURpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdxX2RpdicpO1xyXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGNyZWF0ZUVsZSgnbGFiZWwnLCBxdWVzdGlvbiwgJ2luJyk7XHJcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGNyZWF0ZUVsZSgnc2VsZWN0JywgJycsICdpbl9wcmlvcml0eV9hbnMnKTtcclxuICAgIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSAncHJpb3JpdHknO1xyXG4gICAgY29uc3Qgb3B0aW9uVG9wID0gX2NyZWF0ZU9wdGlvbigndG9wJyk7XHJcbiAgICBjb25zdCBvcHRpb25NaWQgPSBfY3JlYXRlT3B0aW9uKCdtaWRkbGUnKTtcclxuICAgIGNvbnN0IG9wdGlvbkxvdyA9IF9jcmVhdGVPcHRpb24oJ2xvdycpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uVG9wKTtcclxuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbk1pZCk7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25Mb3cpO1xyXG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XHJcbiAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdCk7XHJcbiAgICBcclxuICAgIHJldHVybiBwcmlvcml0eURpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZU9wdGlvbihwcmlvcml0eSkge1xyXG4gICAgY29uc3Qgb3B0aW9uID0gY3JlYXRlRWxlKCdvcHRpb24nLCBwcmlvcml0eSwgYGluX29wdGlvbnNfJHtwcmlvcml0eX1gKTtcclxuICAgIG9wdGlvbi52YWx1ZSA9IHByaW9yaXR5O1xyXG4gICAgcmV0dXJuIG9wdGlvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NsaWNrVG9DYW5jZWwoYnV0dCwgbGlzdE5hbWUpIHtcclxuICAgIGJ1dHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfcmVtb3ZlUHJvbXB0KGxpc3ROYW1lKSwge29uY2U6IHRydWV9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NsaWNrZWRPdXRzaWRlKGxpc3ROYW1lKSB7XHJcbiAgICBjb25zdCBuZXdJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm5ld0l0ZW1fJHtsaXN0TmFtZX1gKTtcclxuICAgIG5ld0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQgPT0gZS50YXJnZXQpXHJcbiAgICAgICAgICAgIF9yZW1vdmVQcm9tcHQobGlzdE5hbWUpO1xyXG4gICAgfSwge29uY2U6IHRydWV9KTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9yZW1vdmVQcm9tcHQobGlzdE5hbWUpIHtcclxuICAgIGNvbnN0IG5ld0l0ZW1EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubmV3SXRlbV8ke2xpc3ROYW1lfWApO1xyXG4gICAgbmV3SXRlbURpdi5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvbXB0c18ke2xpc3ROYW1lfWApKTtcclxuICAgIG5ld0l0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgX2VuYWJsZU5ld0J1dHQobGlzdE5hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZW5hYmxlTmV3QnV0dChsaXN0TmFtZSkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmFkZF8ke2xpc3ROYW1lfWApLmRpc2FibGVkID0gZmFsc2U7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9tcHQ7IiwiaW1wb3J0IHNob3dMaXN0IGZyb20gXCIuL2NyZWF0ZU9uU2NyZWVuXCI7XHJcbmltcG9ydCBjcmVhdGVQcm9tcHQgZnJvbSAnLi9jcmVhdGVQcm9tcHQnO1xyXG5cclxuY29uc3QgZWRpdEl0ZW0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBlZGl0SXQgPSAobmFtZSwgaXRlbSwgbGlzdCkgPT4ge1xyXG4gICAgICAgIF9zaG93Rm9ybShsaXN0LmdldE5hbWUoKSk7XHJcbiAgICAgICAgY3JlYXRlUHJvbXB0KCkuY3JlYXRlSXQobmFtZSwgbGlzdC5nZXROYW1lKCkpO1xyXG4gICAgICAgIF9maWxsRGF0YShpdGVtKTtcclxuICAgICAgICBfY2hhbmdlRGF0YShpdGVtLCBsaXN0KTtcclxuICAgIH1cclxuICAgIHJldHVybiB7ZWRpdEl0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3Nob3dGb3JtKG5hbWUpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5uZXdJdGVtXyR7bmFtZX1gKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9maWxsRGF0YShpdGVtKSB7XHJcbiAgICBsZXQgZmVpbGRzID0gX3Byb21wdEEoKTtcclxuICAgIGZlaWxkcy50aXRsZS52YWx1ZSA9IGl0ZW0uZ2V0VGl0bGUoKTtcclxuICAgIGZlaWxkcy5kZXMudmFsdWUgPSBpdGVtLmdldERlcygpO1xyXG4gICAgZmVpbGRzLmRhdGUudmFsdWUgPSBpdGVtLmdldERhdGUoKTtcclxuICAgIGZlaWxkcy5wcmlvcml0eS52YWx1ZSA9IGl0ZW0uZ2V0UHJpb3JpdHkoKTtcclxufVxyXG5cclxuY29uc3QgX3Byb21wdEEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbl90aXRsZV9hbnMnKTtcclxuICAgIGNvbnN0IGRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbl9kZXNfYW5zJyk7XHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX2RhdGVfYW5zJyk7XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbl9wcmlvcml0eV9hbnMnKTtcclxuXHJcbiAgICByZXR1cm4ge3RpdGxlLCBkZXMsIGRhdGUsIHByaW9yaXR5fTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NoYW5nZURhdGEoaXRlbSwgbGlzdCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gIHtcclxuICAgICAgICBfc3RvcmVDaGFuZ2VzKGl0ZW0pO1xyXG4gICAgICAgIF9yZW1vdmVQcm9tcHQobGlzdC5nZXROYW1lKCkpO1xyXG4gICAgICAgIGlmIChsaXN0LmdldExpc3QoKSAhPSBudWxsKVxyXG4gICAgICAgICAgICBzaG93TGlzdChsaXN0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfc3RvcmVDaGFuZ2VzKGl0ZW0pIHtcclxuICAgIGxldCBpbnB1dCA9IF9wcm9tcHRBKCk7XHJcbiAgICBpdGVtLnNldFRpdGxlKGlucHV0LnRpdGxlLnZhbHVlKTtcclxuICAgIGl0ZW0uc2V0RGVzKGlucHV0LmRlcy52YWx1ZSk7XHJcbiAgICBpdGVtLnNldERhdGUoaW5wdXQuZGF0ZS52YWx1ZSk7XHJcbiAgICBpdGVtLnNldFByaW9yaXR5KGlucHV0LnByaW9yaXR5LnZhbHVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3JlbW92ZVByb21wdChuYW1lKSB7XHJcbiAgICBjb25zdCBuZXdJdGVtRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm5ld0l0ZW1fJHtuYW1lfWApO1xyXG4gICAgbmV3SXRlbURpdi5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvbXB0c18ke25hbWV9YCkpO1xyXG4gICAgbmV3SXRlbURpdi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVkaXRJdGVtOyIsImltcG9ydCB0b0RvSXRlbSBmcm9tIFwiLi90b0RvSXRlbVwiO1xyXG5pbXBvcnQgc2hvd0l0IGZyb20gXCIuL2NyZWF0ZU9uU2NyZWVuXCI7XHJcbmltcG9ydCBjcmVhdGVQcm9tcHQgZnJvbSBcIi4vY3JlYXRlUHJvbXB0XCI7XHJcblxyXG5jb25zdCAgbmV3SXRlbUNvbnRyb2wgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZU5ld0l0ZW0gPSAobGlzdCkgPT4ge1xyXG4gICAgICAgIF9kaXNhYmxlTmV3QnV0dChsaXN0LmdldE5hbWUoKSk7XHJcbiAgICAgICAgY3JlYXRlUHJvbXB0KCkuY3JlYXRlSXQoJ2FkZCcsIGxpc3QuZ2V0TmFtZSgpKTtcclxuICAgICAgICBfc3RvcmVJdGVtKGxpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7c3RvcmVOZXdJdGVtfTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2Rpc2FibGVOZXdCdXR0KG5hbWUpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5hZGRfJHtuYW1lfWApLmRpc2FibGVkID0gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2VuYWJsZU5ld0J1dHQobmFtZSkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmFkZF8ke25hbWV9YCkuZGlzYWJsZWQgPSBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3N0b3JlSXRlbSAobGlzdCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBfZ2V0SXRlbShsaXN0LmdldE5hbWUoKSk7XHJcbiAgICAgICAgX3N0b3JlSXQobGlzdCwgbmV3SXRlbSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2dldEl0ZW0obmFtZSkge1xyXG4gICAgbGV0IGlucHV0ID0gX3Byb21wdEEoKTtcclxuICAgIF9yZW1vdmVQcm9tcHQobmFtZSk7XHJcbiAgICByZXR1cm4gaW5wdXRUb0l0ZW0oaW5wdXQpO1xyXG59XHJcblxyXG5jb25zdCBfcHJvbXB0QSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX3RpdGxlX2FucycpLnZhbHVlO1xyXG4gICAgY29uc3QgZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX2Rlc19hbnMnKS52YWx1ZTtcclxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5fZGF0ZV9hbnMnKS52YWx1ZTtcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX3ByaW9yaXR5X2FucycpLnZhbHVlO1xyXG5cclxuICAgIHJldHVybiB7dGl0bGUsIGRlcywgZGF0ZSwgcHJpb3JpdHl9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnB1dFRvSXRlbShpbnB1dCkge1xyXG4gICAgcmV0dXJuIHRvRG9JdGVtKGlucHV0LnRpdGxlLCBpbnB1dC5kZXMsIGlucHV0LmRhdGUsIGlucHV0LnByaW9yaXR5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3JlbW92ZVByb21wdChuYW1lKSB7XHJcbiAgICBjb25zdCBuZXdJdGVtRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld0l0ZW0nKTtcclxuICAgIG5ld0l0ZW1EaXYucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb21wdHMnKSk7XHJcbiAgICBuZXdJdGVtRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgIF9lbmFibGVOZXdCdXR0KG5hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfc3RvcmVJdChsaXN0LCBuZXdJdGVtKSB7XHJcbiAgICBsaXN0LmFkZEl0ZW0obmV3SXRlbSk7XHJcbiAgICBzaG93SXQobGlzdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ld0l0ZW1Db250cm9sOyIsImNvbnN0IHRvRG9JdGVtID0gKHRpdGxlLCBkZXMsIGRhdGUsIHByaW9yaXR5KSA9PiB7XHJcbiAgICBsZXQgbXlUaXRsZSA9IHRpdGxlO1xyXG4gICAgbGV0IG15RGVzID0gZGVzO1xyXG4gICAgbGV0IG15RGF0ZSA9IGRhdGU7XHJcbiAgICBsZXQgbXlQcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgbGV0IG15U3RhdHVzID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG15VGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHtcclxuICAgICAgICBteVRpdGxlID0gbmV3VGl0bGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGdldERlcyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbXlEZXM7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldERlcyA9IChuZXdEZXMpID0+IHtcclxuICAgICAgICBteURlcyA9IG5ld0RlcztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXREYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBteURhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0RGF0ZSA9IChuZXdEYXRlKSA9PiB7XHJcbiAgICAgICAgbXlEYXRlID0gbmV3RGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbXlQcmlvcml0eTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRQcmlvcml0eSA9IChuZXdQcmlvcml0eSkgPT4ge1xyXG4gICAgICAgIG15UHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRTdGF0dXMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG15U3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldFN0YXR1cyA9ICgpID0+IHtcclxuICAgICAgICBteVN0YXR1cyA9ICFteVN0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b1N0cmluZyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gYCR7bXlUaXRsZX0sICR7bXlEYXRlfSwgJHtteVByaW9yaXR5fWA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtnZXRUaXRsZSwgc2V0VGl0bGUsIGdldERlcywgc2V0RGVzLCBzZXREYXRlLCBnZXREYXRlLCBcclxuICAgICAgICAgICAgICAgIGdldFByaW9yaXR5LCBzZXRQcmlvcml0eSwgZ2V0U3RhdHVzLCBzZXRTdGF0dXMsIHRvU3RyaW5nfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvRG9JdGVtOyIsIi8vIG9iamVjdCB0aGF0IHN0b3JlIGFsbCBpdGVtXHJcblxyXG5jb25zdCB0b0RvTGlzdCA9IChuYW1lKSA9PiB7XHJcbiAgICBsZXQgbXlOYW1lID0gbmFtZTtcclxuICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgbGV0IG1pZEluZGV4ID0gaXRlbXMubGVuZ3RoO1xyXG4gICAgbGV0IGxvd0luZGV4ID0gaXRlbXMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG15TmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXROYW1lID0gKG5ld05hbWUpID0+IHtcclxuICAgICAgICBteU5hbWUgPSBuZXdOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldExpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZEl0ZW0gPSAobmV3SXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByaSA9IG5ld0l0ZW0uZ2V0UHJpb3JpdHkoKTtcclxuICAgICAgICBfcGxhY2VJdGVtQnlQcmlvcml0eShwcmksIG5ld0l0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSAodGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgX3VwZGF0ZUluZGV4KGl0ZW1zW3RhcmdldF0uZ2V0UHJpb3JpdHkoKSk7XHJcbiAgICAgICAgaXRlbXMuc3BsaWNlKHRhcmdldCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlQWxsID0gKCkgPT4ge1xyXG4gICAgICAgIGl0ZW1zID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd0xpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IGl0ZW0udG9TdHJpbmcoKSArICdcXG4nO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX3BsYWNlSXRlbUJ5UHJpb3JpdHkocHJpLCBpdGVtKSB7XHJcbiAgICAgICAgc3dpdGNoIChwcmkpIHtcclxuICAgICAgICAgICAgY2FzZSAndG9wJzpcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnNwbGljZShtaWRJbmRleCwgMCwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICBtaWRJbmRleCArPSAxO1xyXG4gICAgICAgICAgICAgICAgbG93SW5kZXggKz0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNhc2UgJ21pZGRsZSc6XHJcbiAgICAgICAgICAgICAgICBpdGVtcy5zcGxpY2UobG93SW5kZXgsIDAsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgbG93SW5kZXggKz0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNhc2UgJ2xvdyc6XHJcbiAgICAgICAgICAgICAgICBpdGVtcy5zcGxpY2UoaXRlbXMubGVuZ3RoLCAwLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfdXBkYXRlSW5kZXgocHJpKSB7XHJcbiAgICAgICAgc3dpdGNoIChwcmkpIHtcclxuICAgICAgICAgICAgY2FzZSAndG9wJzpcclxuICAgICAgICAgICAgICAgIG1pZEluZGV4IC09IDE7XHJcbiAgICAgICAgICAgICAgICBsb3dJbmRleCAtPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdtaWRkbGUnOlxyXG4gICAgICAgICAgICAgICAgbG93SW5kZXggLT0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2dldE5hbWUsIHNldE5hbWUsIGdldExpc3QsIGFkZEl0ZW0sIHJlbW92ZUl0ZW0sIHJlbW92ZUFsbCwgc2hvd0xpc3R9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9Eb0xpc3Q7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlRWxlIGZyb20gXCIuL2NyZWF0ZUVsZVwiO1xyXG5pbXBvcnQgc2hvd0xpc3QgZnJvbSBcIi4vY3JlYXRlT25TY3JlZW5cIjtcclxuaW1wb3J0IG5ld0l0ZW1Db250cm9sIGZyb20gJy4vbmV3SXRlbUNvbnRyb2wnO1xyXG5pbXBvcnQgdG9Eb0xpc3QgZnJvbSBcIi4vdG9Eb0xpc3RcIjtcclxuXHJcbmZ1bmN0aW9uIHNob3dQcm9qZWN0cyhwcm9qZWN0cykge1xyXG4gICAgX2NyZWF0ZUhlYWRlcihwcm9qZWN0cyk7XHJcbiAgICBwcm9qZWN0cy5nZXRQcm9qZWN0cygpLmZvckVhY2gobGlzdCA9PiB7XHJcbiAgICAgICAgX2Rpc3BsYXlIZWFkZXIobGlzdCk7XHJcbiAgICAgICAgc2hvd0xpc3QobGlzdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUhlYWRlcihwcm9qZWN0cykge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCAnaGVhZGVyRGl2Jyk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoX2NyZWF0ZVRhYihwcm9qZWN0cykpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZGlzcGxheUhlYWRlcihsaXN0KSB7XHJcbiAgICBjb25zdCBlbGUgPSBfY3JlYXRlTGlzdEhlYWRlcihsaXN0KTtcclxuICAgIF9hcHBlbmRFbGUoZWxlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUxpc3RIZWFkZXIobGlzdCkge1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBsaXN0LmdldE5hbWUoKTtcclxuICAgIGNvbnN0IGFkZEJ1dHQgPSBjcmVhdGVFbGUoJ2J1dHRvbicsICdhZGQnLCBgYWRkXyR7cHJvamVjdE5hbWV9YCk7XHJcbiAgICBhZGRCdXR0LmNsYXNzTGlzdC5hZGQoJ2FkZCcpO1xyXG4gICAgYWRkQnV0dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9jbGlja1RvQWRkKGxpc3QpKTtcclxuICAgIGNvbnN0IG5ld0l0ZW1EaXYgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCBgbmV3SXRlbV8ke3Byb2plY3ROYW1lfWApO1xyXG4gICAgbmV3SXRlbURpdi5jbGFzc0xpc3QuYWRkKCduZXdJdGVtJyk7XHJcbiAgICBuZXdJdGVtRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgIGNvbnN0IGxpc3REaXYgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCBgbGlzdF8ke3Byb2plY3ROYW1lfWApO1xyXG4gICAgbGlzdERpdi5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XHJcbiAgICByZXR1cm4ge2FkZEJ1dHQsIG5ld0l0ZW1EaXYsIGxpc3REaXZ9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlVGFiKHByb2plY3RzKSB7XHJcbiAgICBjb25zdCB0YWJEaXYgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCAndGFiJyk7XHJcbiAgICBwcm9qZWN0cy5nZXRQcm9qZWN0cygpLmZvckVhY2gobGlzdCA9PiB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGxpc3QuZ2V0TmFtZSgpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVCdXR0ID0gY3JlYXRlRWxlKCdidXR0b24nLCBgJHtuYW1lfWAsIGAke25hbWV9X2J1dHRgKTtcclxuICAgICAgICBuYW1lQnV0dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0X2J1dHQnKTtcclxuICAgICAgICBuYW1lQnV0dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9jaGFuZ2VUb1Byb2plY3QobGlzdCkpO1xyXG4gICAgICAgIHRhYkRpdi5hcHBlbmRDaGlsZChuYW1lQnV0dCk7XHJcbiAgICB9KVxyXG4gICAgdGFiRGl2LmFwcGVuZENoaWxkKF9jcmVhdGVBZGRQcm9qZWN0QnV0dChwcm9qZWN0cykpO1xyXG4gICAgcmV0dXJuIHRhYkRpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUFkZFByb2plY3RCdXR0KHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBhZGRCdXR0ID0gY3JlYXRlRWxlKCdidXR0b24nLCAnbmV3IFByb2plY3QnLCAnYWRkX3Byb2plY3QnKTtcclxuICAgIGFkZEJ1dHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfYWRkUHJvamVjdChwcm9qZWN0cykpO1xyXG4gICAgcmV0dXJuIGFkZEJ1dHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9hZGRQcm9qZWN0KHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBwcm9qX3Byb21wdCA9IHByb21wdCgnUHJvamVjdCBOYW1lOicsICdFbnRlciBOYW1lJyk7XHJcbiAgICBjb25zdCBuZXdMaXN0ID0gdG9Eb0xpc3QocHJval9wcm9tcHQpO1xyXG4gICAgcHJvamVjdHMuYWRkTGlzdChuZXdMaXN0KTtcclxuICAgIF9jbGVhckhlYWRlcigpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlckRpdicpLmFwcGVuZENoaWxkKF9jcmVhdGVUYWIocHJvamVjdHMpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NsZWFySGVhZGVyKCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlckRpdicpO1xyXG4gICAgd2hpbGUgKGhlYWRlci5maXJzdENoaWxkICE9IG51bGwpXHJcbiAgICAgICAgaGVhZGVyLnJlbW92ZUNoaWxkKGhlYWRlci5maXJzdENoaWxkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NsaWNrVG9BZGQobGlzdCkge1xyXG4gICAgX3Nob3dGb3JtKGxpc3QpO1xyXG4gICAgY29uc3QgbmV3SXRlbSA9IG5ld0l0ZW1Db250cm9sKCk7XHJcbiAgICBuZXdJdGVtLnN0b3JlTmV3SXRlbShsaXN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3Nob3dGb3JtKGxpc3QpIHtcclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gbGlzdC5nZXROYW1lKCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubmV3SXRlbV8ke3Byb2plY3ROYW1lfWApLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2FwcGVuZEVsZSAoZWxlKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICAgIGZvciAoY29uc3QgZWxlbWVudCBpbiBlbGUpIHtcclxuICAgICAgICBjb250ZW50LmFwcGVuZChlbGVbZWxlbWVudF0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93UHJvamVjdHM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9