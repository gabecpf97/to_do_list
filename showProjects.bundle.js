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




function showList(list, projects) {
    const list_div = document.querySelector('.list');
    _clearScreen(list_div);
    if (list.getList()[0] == undefined)
        _showEmpty(list_div, list, projects);
    else {
        for (let i = 0; i < list.getList().length; i++) {
            _showItem(list_div, list, list.getList()[i], i, projects);
        }
    }
}

function _showEmpty(list_div, list, projects) {
    const emptyDiv = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'click here to add new item', 'empty_item');
    list_div.appendChild(emptyDiv);
    emptyDiv.addEventListener('click', () => (0,_newItemControl__WEBPACK_IMPORTED_MODULE_2__["default"])().storeNewItem(list, projects));
}

function _showItem(list_div, list, item, i, projects) {
    list_div.appendChild(_appendItem(list, _getItem(item), item, i), projects);
}

function _appendItem (list, item_div, item, i, projects) {
    const itemDiv = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', `item`);
    itemDiv.classList.add('item');
    itemDiv.appendChild(_createBasicDiv(list, item_div, item, i, projects));
    itemDiv.appendChild(_createDes(item_div.des));
    return itemDiv;
}

function _createBasicDiv(list, item_div, item, i, projects) {
    const basicDiv = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'basic');
    basicDiv.appendChild(item_div.status);
    basicDiv.appendChild(item_div.title);
    basicDiv.appendChild(item_div.date);
    basicDiv.appendChild(item_div.priority);
    basicDiv.appendChild(_createEditButt(item, list, projects));
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

function _createEditButt(item, list, projects) {
    const editButt = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'edit', 'edit');
    editButt.addEventListener('click', () => (0,_editItem__WEBPACK_IMPORTED_MODULE_1__["default"])().editIt(item, list, projects));
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
/* harmony import */ var _storeLocally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storeLocally */ "./src/js/storeLocally.js");




const editItem = () => {
    const editIt = (item, list, projects) => {
        _showForm();
        (0,_createPrompt__WEBPACK_IMPORTED_MODULE_1__["default"])().createIt('SAVE');
        _fillData(item);
        _changeData(item, list);
        (0,_storeLocally__WEBPACK_IMPORTED_MODULE_2__["default"])().storeProject(projects);
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
/* harmony import */ var _storeLocally__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storeLocally */ "./src/js/storeLocally.js");





const  newItemControl = () => {
    const storeNewItem = (list, projects) => {
        _disableNewButt();
        (0,_createPrompt__WEBPACK_IMPORTED_MODULE_2__["default"])().createIt('add');
        _storeItem(list, projects);
    }

    return {storeNewItem};
}

function _disableNewButt() {
    document.querySelector(`.add`).disabled = true;
}

function _enableNewButt() {
    document.querySelector(`.add`).disabled = false;
}

function _storeItem (list, projects) {
    document.querySelector('.fin').addEventListener('click', () => {
        const newItem = _getItem();
        _storeIt(list, newItem, projects);
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

function _storeIt(list, newItem, projects) {
    list.addItem(newItem);
    (0,_createOnScreen__WEBPACK_IMPORTED_MODULE_1__["default"])(list, projects);
    (0,_storeLocally__WEBPACK_IMPORTED_MODULE_3__["default"])().storeProject(projects);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newItemControl);

/***/ }),

/***/ "./src/js/storeLocally.js":
/*!********************************!*\
  !*** ./src/js/storeLocally.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _listControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listControl */ "./src/js/listControl.js");
/* harmony import */ var _toDoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoItem */ "./src/js/toDoItem.js");
/* harmony import */ var _toDoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDoList */ "./src/js/toDoList.js");




const localProjects = () => {
    function storeProject(projects) {
        localStorage.setItem('toDoProjects', JSON.stringify(projects.toString()));
    }

    function getFromLocal() {
        let localProjects = localStorage.getItem('toDoProjects');
        if (localProjects != undefined) {
            const listArr = _getListFromProject(localProjects);
            const nameList = _getItemFromList(listArr);
            const projects = _createProjects(nameList);
            return projects
        }
        return undefined;
    }

    return {storeProject, getFromLocal};
}

function _getListFromProject(str) {
    return str.substring(1, str.length - 1).split('|');
}

function _getItemFromList(listArr) {
    const itemArr = [];
    listArr.forEach(list => {
        const nameItem = list.substring(1, list.length - 1).split(':');
        itemArr.push(nameItem);
    });
    return itemArr;
}

function _createProjects(nameList) {
    const projects = (0,_listControl__WEBPACK_IMPORTED_MODULE_0__["default"])();
    nameList.forEach(project => {
        const listName = project[0];
        const newList = (0,_toDoList__WEBPACK_IMPORTED_MODULE_2__["default"])(listName);
        if (project[1] != undefined) {
            if (project[1].includes('.')) {
                const list = project[1].split('.');
                list.forEach(itemAttr => {
                    newList.addItem(_createNewItem(itemAttr));
                });
            } else {
                newList.addItem(_createNewItem(project[1]));
            }
        }
        projects.addList(newList);
    });
    return projects;
}

function _createNewItem(itemAttr) {
    const item = itemAttr.split(',');
    const title = item[0].substring(1);
    const des = item[1];
    const date = item[2];
    const priority = item[3];
    const status = item[4].substring(0, item[4].length - 1);
    const newItem = (0,_toDoItem__WEBPACK_IMPORTED_MODULE_1__["default"])(title, des, date, priority);
    _checkStatus(newItem, status);
    return newItem;
}

function _checkStatus(item, status) {
    if (status != item.getStatus())
        item.setStatus();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localProjects);

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
/* harmony import */ var _storeLocally__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storeLocally */ "./src/js/storeLocally.js");






function showProjects(projects) {
    _createHeader(projects);
    projects.getProjects().forEach(list => {
        if (document.querySelector('.listDiv') == null)
            _displayHeader(list, projects);
        (0,_createOnScreen__WEBPACK_IMPORTED_MODULE_1__["default"])(list, projects);
    });
}

function _createHeader(projects) {
    const content = document.querySelector('.content');
    const header = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'headerDiv');
    header.appendChild(_createTab(projects));
    content.appendChild(header);
}

function _displayHeader(list, projects) {
    const ele = _createListHeader(list, projects);
    _appendEle(ele);
}

function _createListHeader(list, projects) {
    const name = list.getName().replace(' ', '_');
    const addButt = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'add item', `add${name}`);
    addButt.classList.add('add');
    addButt.addEventListener('click', () => _clickToAdd(list, projects));
    const newItemDiv = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', `newItem`);
    newItemDiv.classList.add('hide');
    const listDiv = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', `list`);
    const editProjectButt = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'Change Project Name', 'changePName');
    editProjectButt.addEventListener('click', () => _changePName(list, projects));
    return {newItemDiv, listDiv, addButt, editProjectButt};
}

function _createTab(projects) {
    const tabDiv = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'tab');
    projects.getProjects().forEach(list => {
        const name = list.getName();
        const nameButt = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('button', `${name}`, `project_butt`);
        nameButt.addEventListener('click', () => _changeToProject(list, projects));
        tabDiv.appendChild(nameButt);
    })
    tabDiv.appendChild(_createAddProjectButt(projects));
    return tabDiv;
}

function _changeToProject(list, projects) {
    _clearList();
    _displayHeader(list);
    (0,_createOnScreen__WEBPACK_IMPORTED_MODULE_1__["default"])(list, projects);
}

function _clearList() {
    const content = document.querySelector('.content');
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
    (0,_storeLocally__WEBPACK_IMPORTED_MODULE_4__["default"])().storeProject(projects);
    _clearHeader();
    document.querySelector('.headerDiv').appendChild(_createTab(projects));
}

function _clearHeader() {
    const header = document.querySelector('.headerDiv');
    while (header.firstChild != null)
        header.removeChild(header.firstChild);
}

function _clickToAdd(list, projects) {
    const newItem = (0,_newItemControl__WEBPACK_IMPORTED_MODULE_2__["default"])();
    console.log(list.getList());
    newItem.storeNewItem(list, projects);
}

function _changePName(list, projects) {
    const newName = prompt('What is the new name of the project?', list.getName());
    list.setName(newName);
    (0,_storeLocally__WEBPACK_IMPORTED_MODULE_4__["default"])().storeProject(projects);
    _clearAll();
    showProjects(projects);
}

function _clearAll() {
    const content = document.querySelector('.content');
    while (content.firstChild != null)
        content.removeChild(content.firstChild);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFRO0FBQ2hCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzREFBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNEQUFTLDZCQUE2QixLQUFLO0FBQy9EO0FBQ0E7QUFDQSx1QkFBdUIsc0RBQVM7QUFDaEM7QUFDQSxvQkFBb0Isc0RBQVM7QUFDN0IsNEJBQTRCLHNEQUFTO0FBQ3JDO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzREFBUztBQUM1QjtBQUNBO0FBQ0EseUJBQXlCLHNEQUFTLGNBQWMsS0FBSztBQUNyRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyREFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0RBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFEQUFRO0FBQzVCO0FBQ0EsSUFBSSx5REFBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJEQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0RBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy9jcmVhdGVFbGUuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy9jcmVhdGVPblNjcmVlbi5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL2NyZWF0ZVByb21wdC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL2VkaXRJdGVtLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvbGlzdENvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy9uZXdJdGVtQ29udHJvbC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL3N0b3JlTG9jYWxseS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL3RvRG9JdGVtLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvdG9Eb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvc2hvd1Byb2plY3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUVsZSAodHlwZSwgdmFsdWUsIGNsYXNzTmFtZSkge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuICAgIHRhcmdldC50ZXh0Q29udGVudCA9IHZhbHVlO1xyXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZSA7IiwiLy8gc2hvdyBpdGVtIGFuZCBvdGhlciBvbiBodG1sIGZpbGVcclxuLy8gRE9NIHN0dWZmXHJcbmltcG9ydCBjcmVhdGVFbGUgZnJvbSBcIi4vY3JlYXRlRWxlXCI7XHJcbmltcG9ydCBlZGl0SXRlbSBmcm9tIFwiLi9lZGl0SXRlbVwiO1xyXG5pbXBvcnQgbmV3SXRlbUNvbnRyb2wgZnJvbSBcIi4vbmV3SXRlbUNvbnRyb2xcIjtcclxuXHJcbmZ1bmN0aW9uIHNob3dMaXN0KGxpc3QsIHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBsaXN0X2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XHJcbiAgICBfY2xlYXJTY3JlZW4obGlzdF9kaXYpO1xyXG4gICAgaWYgKGxpc3QuZ2V0TGlzdCgpWzBdID09IHVuZGVmaW5lZClcclxuICAgICAgICBfc2hvd0VtcHR5KGxpc3RfZGl2LCBsaXN0LCBwcm9qZWN0cyk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QuZ2V0TGlzdCgpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIF9zaG93SXRlbShsaXN0X2RpdiwgbGlzdCwgbGlzdC5nZXRMaXN0KClbaV0sIGksIHByb2plY3RzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9zaG93RW1wdHkobGlzdF9kaXYsIGxpc3QsIHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBlbXB0eURpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJ2NsaWNrIGhlcmUgdG8gYWRkIG5ldyBpdGVtJywgJ2VtcHR5X2l0ZW0nKTtcclxuICAgIGxpc3RfZGl2LmFwcGVuZENoaWxkKGVtcHR5RGl2KTtcclxuICAgIGVtcHR5RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbmV3SXRlbUNvbnRyb2woKS5zdG9yZU5ld0l0ZW0obGlzdCwgcHJvamVjdHMpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3Nob3dJdGVtKGxpc3RfZGl2LCBsaXN0LCBpdGVtLCBpLCBwcm9qZWN0cykge1xyXG4gICAgbGlzdF9kaXYuYXBwZW5kQ2hpbGQoX2FwcGVuZEl0ZW0obGlzdCwgX2dldEl0ZW0oaXRlbSksIGl0ZW0sIGkpLCBwcm9qZWN0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9hcHBlbmRJdGVtIChsaXN0LCBpdGVtX2RpdiwgaXRlbSwgaSwgcHJvamVjdHMpIHtcclxuICAgIGNvbnN0IGl0ZW1EaXYgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCBgaXRlbWApO1xyXG4gICAgaXRlbURpdi5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XHJcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKF9jcmVhdGVCYXNpY0RpdihsaXN0LCBpdGVtX2RpdiwgaXRlbSwgaSwgcHJvamVjdHMpKTtcclxuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoX2NyZWF0ZURlcyhpdGVtX2Rpdi5kZXMpKTtcclxuICAgIHJldHVybiBpdGVtRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlQmFzaWNEaXYobGlzdCwgaXRlbV9kaXYsIGl0ZW0sIGksIHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBiYXNpY0RpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdiYXNpYycpO1xyXG4gICAgYmFzaWNEaXYuYXBwZW5kQ2hpbGQoaXRlbV9kaXYuc3RhdHVzKTtcclxuICAgIGJhc2ljRGl2LmFwcGVuZENoaWxkKGl0ZW1fZGl2LnRpdGxlKTtcclxuICAgIGJhc2ljRGl2LmFwcGVuZENoaWxkKGl0ZW1fZGl2LmRhdGUpO1xyXG4gICAgYmFzaWNEaXYuYXBwZW5kQ2hpbGQoaXRlbV9kaXYucHJpb3JpdHkpO1xyXG4gICAgYmFzaWNEaXYuYXBwZW5kQ2hpbGQoX2NyZWF0ZUVkaXRCdXR0KGl0ZW0sIGxpc3QsIHByb2plY3RzKSk7XHJcbiAgICBiYXNpY0Rpdi5hcHBlbmRDaGlsZChfY3JlYXRlRGVsZXRlQnV0dChsaXN0LCBpKSk7XHJcbiAgICBiYXNpY0Rpdi5hcHBlbmRDaGlsZChfY3JlYXRlRXhwYW5kQnV0dChpdGVtX2Rpdi5kZXMpKTtcclxuICAgIHJldHVybiBiYXNpY0RpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2dldEl0ZW0oaXRlbSkge1xyXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGUoJ2RpdicsIGl0ZW0uZ2V0VGl0bGUoKSwgJ3RpdGxlJyk7XHJcbiAgICBjb25zdCBkZXMgPSBjcmVhdGVFbGUoJ2RpdicsIGl0ZW0uZ2V0RGVzKCksICdkZXMnKTtcclxuICAgIGNvbnN0IGRhdGUgPSBjcmVhdGVFbGUoJ2RpdicsIGl0ZW0uZ2V0RGF0ZSgpLCAnZGF0ZScpO1xyXG4gICAgY29uc3QgcHJpb3JpdHkgPSBjcmVhdGVFbGUoJ2RpdicsIGl0ZW0uZ2V0UHJpb3JpdHkoKSwgJ3ByaW9yaXR5Jyk7XHJcbiAgICBjb25zdCBzdGF0dXMgPSBfY3JlYXRlU3RhdHVzRGl2KGl0ZW0pO1xyXG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzLCBkYXRlLCBwcmlvcml0eSwgc3RhdHVzfTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NsZWFyU2NyZWVuKGxpc3RfZGl2KSB7XHJcbiAgICB3aGlsZShsaXN0X2Rpdi5maXJzdENoaWxkICE9IG51bGwpXHJcbiAgICAgICAgbGlzdF9kaXYucmVtb3ZlQ2hpbGQobGlzdF9kaXYuZmlyc3RDaGlsZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVTdGF0dXNEaXYoaXRlbSkge1xyXG4gICAgY29uc3Qgc3RhdHVzRGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgJ3N0YXR1cycpO1xyXG4gICAgY29uc3Qgc3RhdHVzTGFiZWwgPSBfY3JlYXRlTGFiZWwoKTtcclxuICAgIGNvbnN0IHN0YXR1c0NoZWNrID0gX2NyZWF0ZUNoZWNrKGl0ZW0pO1xyXG4gICAgc3RhdHVzRGl2LmFwcGVuZENoaWxkKHN0YXR1c0NoZWNrKTtcclxuICAgIHJldHVybiBzdGF0dXNEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVMYWJlbCgpIHtcclxuICAgIGNvbnN0IHN0YXR1c0xhYmVsID0gY3JlYXRlRWxlKCdsYWJlbCcsICdDb21wbGV0ZWQnLCAnc3RhdHVzX2wnKTtcclxuICAgIHN0YXR1c0xhYmVsLmh0bWxGb3IgPSAnc3RhdHVzJztcclxuICAgIHJldHVybiBzdGF0dXNMYWJlbDtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUNoZWNrKGl0ZW0pIHtcclxuICAgIGNvbnN0IHN0YXR1c0NoZWNrID0gY3JlYXRlRWxlKCdpbnB1dCcsICcnLCAnc3RhdHVzX2MnKTtcclxuICAgIHN0YXR1c0NoZWNrLnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gICAgc3RhdHVzQ2hlY2submFtZSA9ICdzdGF0dXMnO1xyXG4gICAgaWYgKGl0ZW0uZ2V0U3RhdHVzKCkpXHJcbiAgICAgICAgc3RhdHVzQ2hlY2suY2hlY2tlZCA9IHRydWU7XHJcbiAgICBzdGF0dXNDaGVjay5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgaXRlbS5zZXRTdGF0dXMoKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHN0YXR1c0NoZWNrO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlRGVsZXRlQnV0dChsaXN0LCBpKSB7XHJcbiAgICBjb25zdCBkZWxlQnV0dCA9IGNyZWF0ZUVsZSgnYnV0dG9uJywgJ0RlbGV0ZScsICdkZWxldGUnKTtcclxuICAgIGRlbGVCdXR0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBfZGVsZXRlRW50cnkobGlzdCwgaSkpO1xyXG4gICAgcmV0dXJuIGRlbGVCdXR0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZGVsZXRlRW50cnkobGlzdCwgaSkge1xyXG4gICAgX3JlbW92ZUl0ZW0obGlzdCwgaSk7XHJcbiAgICBzaG93TGlzdChsaXN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3JlbW92ZUl0ZW0obGlzdCwgaSkge1xyXG4gICAgY29uc3QgbGlzdF9kaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpO1xyXG4gICAgd2hpbGUgKGxpc3RfZGl2LmZpcnN0Q2hpbGQgIT0gbnVsbCkgXHJcbiAgICAgICAgbGlzdF9kaXYucmVtb3ZlQ2hpbGQobGlzdF9kaXYuZmlyc3RDaGlsZCk7XHJcbiAgICBsaXN0LnJlbW92ZUl0ZW0oaSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVFZGl0QnV0dChpdGVtLCBsaXN0LCBwcm9qZWN0cykge1xyXG4gICAgY29uc3QgZWRpdEJ1dHQgPSBjcmVhdGVFbGUoJ2J1dHRvbicsICdlZGl0JywgJ2VkaXQnKTtcclxuICAgIGVkaXRCdXR0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZWRpdEl0ZW0oKS5lZGl0SXQoaXRlbSwgbGlzdCwgcHJvamVjdHMpKTtcclxuICAgIHJldHVybiBlZGl0QnV0dDtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUV4cGFuZEJ1dHQoZGVzKSB7XHJcbiAgICBjb25zdCBleHBhbmRCdXR0ID0gY3JlYXRlRWxlKCdidXR0b24nLCAnZXhwYW5kJywgJ2V4cGFuZCcpO1xyXG4gICAgZXhwYW5kQnV0dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9zaG93RGVzKGV4cGFuZEJ1dHQsIGRlcy5wYXJlbnROb2RlKSk7XHJcbiAgICByZXR1cm4gZXhwYW5kQnV0dDtcclxufVxyXG5cclxuZnVuY3Rpb24gX3Nob3dEZXMoZXhwYW5kQnV0dCwgZGVzX2NvbnRhaW5lcikge1xyXG4gICAgaWYgKGRlc19jb250YWluZXIuY2xhc3NMaXN0WzFdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGRlc19jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIGV4cGFuZEJ1dHQudGV4dENvbnRlbnQgPSAnZXhwYW5kJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVzX2NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgZXhwYW5kQnV0dC50ZXh0Q29udGVudCA9ICdoaWRlJztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZURlcyhkZXNEaXYpIHtcclxuICAgIGNvbnN0IGRlc19jb250YWluZXIgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCAnZGVzX2RpdicpO1xyXG4gICAgZGVzX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICBkZXNfY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc0Rpdik7XHJcbiAgICByZXR1cm4gZGVzX2NvbnRhaW5lcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd0xpc3Q7IiwiaW1wb3J0IGNyZWF0ZUVsZSBmcm9tIFwiLi9jcmVhdGVFbGVcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZVByb21wdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNyZWF0ZUl0ID0gKG5hbWUpID0+IHtcclxuICAgICAgICBfZGlzcGxheVByb21wdChuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2NyZWF0ZUl0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2Rpc3BsYXlQcm9tcHQobmFtZSkge1xyXG4gICAgX3Nob3dGb3JtKCk7XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IF9jcmVhdGVQcm9tcHRFbGUobmFtZSk7XHJcbiAgICBlbGVtZW50cy5wcm9tcHRfZGl2LmFwcGVuZENoaWxkKGVsZW1lbnRzLmJ1dHRfZGl2KTtcclxuICAgIGVsZW1lbnRzLm5ld0l0ZW1EaXYuYXBwZW5kQ2hpbGQoZWxlbWVudHMucHJvbXB0X2Rpdik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9zaG93Rm9ybSgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5uZXdJdGVtYCkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlUHJvbXB0RWxlKG5hbWUpIHtcclxuICAgIGNvbnN0IG5ld0l0ZW1EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubmV3SXRlbWApO1xyXG4gICAgY29uc3QgcHJvbXB0X2RpdiA9IF9hcHBlbmRQcm9tcHRzKF9wcm9tcHRRKCkpO1xyXG4gICAgY29uc3QgZmluX2J1dHQgPSBjcmVhdGVFbGUoJ2J1dHRvbicsIG5hbWUsICdmaW4nKTtcclxuICAgIGNvbnN0IGNhbmNlbF9idXR0ID0gY3JlYXRlRWxlKCdidXR0b24nLCAnQ2FuY2VsJywgJ2NhbmNlbCcpO1xyXG4gICAgY29uc3QgYnV0dF9kaXYgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCAnYnV0dF9kaXYnKTtcclxuICAgIGJ1dHRfZGl2LmFwcGVuZENoaWxkKGZpbl9idXR0KTtcclxuICAgIGJ1dHRfZGl2LmFwcGVuZENoaWxkKGNhbmNlbF9idXR0KTtcclxuICAgIF9jbGlja1RvQ2FuY2VsKGNhbmNlbF9idXR0KTtcclxuICAgIF9jbGlja2VkT3V0c2lkZSgpO1xyXG4gICAgcmV0dXJuIHtuZXdJdGVtRGl2LCBwcm9tcHRfZGl2LCBidXR0X2Rpdn07XHJcbn1cclxuXHJcbmNvbnN0IF9wcm9tcHRRID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYXNrVGl0bGUgPSBcIlRvIGRvIGl0ZW0gbmFtZVwiO1xyXG4gICAgY29uc3QgYXNrRGVzID0gXCJ0byBkbyBpdGVtIGRlc2NyaXB0aW9uXCI7XHJcbiAgICBjb25zdCBhc2tEYXRlID0gXCJpdGVtIGR1ZSBkYXRlXCI7XHJcbiAgICBjb25zdCBhc2tQcmlvcml0eSA9IFwiaXRlbSdzIHByaW9yaXR5XCI7XHJcblxyXG4gICAgcmV0dXJuIHthc2tUaXRsZSwgYXNrRGVzLCBhc2tEYXRlLCBhc2tQcmlvcml0eX07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9hcHBlbmRQcm9tcHRzKHByb21wdHMpIHtcclxuICAgIGNvbnN0IHByb21wdF9kaXYgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCBgcHJvbXB0c2ApO1xyXG4gICAgY29uc3QgdGl0bGVfZGl2ID0gX2NyZWF0ZUxhYmxlSW5wdXQocHJvbXB0cy5hc2tUaXRsZSwgJ2lucHV0JywgJ2luX3RpdGxlJyk7XHJcbiAgICBjb25zdCBkZXNfZGl2ID0gX2NyZWF0ZUxhYmxlSW5wdXQocHJvbXB0cy5hc2tEZXMsICd0ZXh0YXJlYScsICdpbl9kZXMnKTtcclxuICAgIGNvbnN0IGRhdGVfZGl2ID0gX2NyZWF0ZUxhYmxlSW5wdXQocHJvbXB0cy5hc2tEYXRlLCAnaW5wdXQnLCAnaW5fZGF0ZScpO1xyXG4gICAgY29uc3QgcHJpb3JpdHlfZGl2ID0gX2NyZWF0ZVByaW9yaXR5RGl2KHByb21wdHMuYXNrUHJpb3JpdHkpO1xyXG4gICAgcHJvbXB0X2Rpdi5hcHBlbmRDaGlsZCh0aXRsZV9kaXYpO1xyXG4gICAgcHJvbXB0X2Rpdi5hcHBlbmRDaGlsZChkZXNfZGl2KTtcclxuICAgIHByb21wdF9kaXYuYXBwZW5kQ2hpbGQoZGF0ZV9kaXYpO1xyXG4gICAgcHJvbXB0X2Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eV9kaXYpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gcHJvbXB0X2RpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUxhYmxlSW5wdXQocXVlc3Rpb24sIHR5cGUsIGNsYXNzTmFtZSkge1xyXG4gICAgY29uc3QgcV9kaXYgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCAncV9kaXYnKTtcclxuICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlRWxlKCdsYWJlbCcsIHF1ZXN0aW9uLCAnaW4nKTtcclxuICAgIGNvbnN0IGFuc3dlciA9IGNyZWF0ZUVsZSh0eXBlLCAnJywgYCR7Y2xhc3NOYW1lfV9hbnNgKTtcclxuICAgIHFfZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgIHFfZGl2LmFwcGVuZENoaWxkKGFuc3dlcik7XHJcbiAgICBcclxuICAgIHJldHVybiBxX2RpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZVByaW9yaXR5RGl2KHF1ZXN0aW9uKSB7XHJcbiAgICBjb25zdCBwcmlvcml0eURpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdxX2RpdicpO1xyXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGNyZWF0ZUVsZSgnbGFiZWwnLCBxdWVzdGlvbiwgJ2luJyk7XHJcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGNyZWF0ZUVsZSgnc2VsZWN0JywgJycsICdpbl9wcmlvcml0eV9hbnMnKTtcclxuICAgIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSAncHJpb3JpdHknO1xyXG4gICAgY29uc3Qgb3B0aW9uVG9wID0gX2NyZWF0ZU9wdGlvbigndG9wJyk7XHJcbiAgICBjb25zdCBvcHRpb25NaWQgPSBfY3JlYXRlT3B0aW9uKCdtaWRkbGUnKTtcclxuICAgIGNvbnN0IG9wdGlvbkxvdyA9IF9jcmVhdGVPcHRpb24oJ2xvdycpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uVG9wKTtcclxuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbk1pZCk7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25Mb3cpO1xyXG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XHJcbiAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdCk7XHJcbiAgICBcclxuICAgIHJldHVybiBwcmlvcml0eURpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZU9wdGlvbihwcmlvcml0eSkge1xyXG4gICAgY29uc3Qgb3B0aW9uID0gY3JlYXRlRWxlKCdvcHRpb24nLCBwcmlvcml0eSwgYGluX29wdGlvbnNfJHtwcmlvcml0eX1gKTtcclxuICAgIG9wdGlvbi52YWx1ZSA9IHByaW9yaXR5O1xyXG4gICAgcmV0dXJuIG9wdGlvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NsaWNrVG9DYW5jZWwoYnV0dCkge1xyXG4gICAgYnV0dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9yZW1vdmVQcm9tcHQoKSwge29uY2U6IHRydWV9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NsaWNrZWRPdXRzaWRlKCkge1xyXG4gICAgY29uc3QgbmV3SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5uZXdJdGVtYCk7XHJcbiAgICBuZXdJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0ID09IGUudGFyZ2V0KVxyXG4gICAgICAgICAgICBfcmVtb3ZlUHJvbXB0KCk7XHJcbiAgICB9LCB7b25jZTogdHJ1ZX0pO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gX3JlbW92ZVByb21wdCgpIHtcclxuICAgIGNvbnN0IG5ld0l0ZW1EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubmV3SXRlbWApO1xyXG4gICAgbmV3SXRlbURpdi5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvbXB0c2ApKTtcclxuICAgIG5ld0l0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgX2VuYWJsZU5ld0J1dHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2VuYWJsZU5ld0J1dHQoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYWRkYCkuZGlzYWJsZWQgPSBmYWxzZTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb21wdDsiLCJpbXBvcnQgc2hvd0xpc3QgZnJvbSBcIi4vY3JlYXRlT25TY3JlZW5cIjtcclxuaW1wb3J0IGNyZWF0ZVByb21wdCBmcm9tICcuL2NyZWF0ZVByb21wdCc7XHJcbmltcG9ydCBzdG9yZUxvY2FsbHkgZnJvbSAnLi9zdG9yZUxvY2FsbHknO1xyXG5cclxuY29uc3QgZWRpdEl0ZW0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBlZGl0SXQgPSAoaXRlbSwgbGlzdCwgcHJvamVjdHMpID0+IHtcclxuICAgICAgICBfc2hvd0Zvcm0oKTtcclxuICAgICAgICBjcmVhdGVQcm9tcHQoKS5jcmVhdGVJdCgnU0FWRScpO1xyXG4gICAgICAgIF9maWxsRGF0YShpdGVtKTtcclxuICAgICAgICBfY2hhbmdlRGF0YShpdGVtLCBsaXN0KTtcclxuICAgICAgICBzdG9yZUxvY2FsbHkoKS5zdG9yZVByb2plY3QocHJvamVjdHMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtlZGl0SXR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfc2hvd0Zvcm0oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubmV3SXRlbWApLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2ZpbGxEYXRhKGl0ZW0pIHtcclxuICAgIGxldCBmZWlsZHMgPSBfcHJvbXB0QSgpO1xyXG4gICAgZmVpbGRzLnRpdGxlLnZhbHVlID0gaXRlbS5nZXRUaXRsZSgpO1xyXG4gICAgZmVpbGRzLmRlcy52YWx1ZSA9IGl0ZW0uZ2V0RGVzKCk7XHJcbiAgICBmZWlsZHMuZGF0ZS52YWx1ZSA9IGl0ZW0uZ2V0RGF0ZSgpO1xyXG4gICAgZmVpbGRzLnByaW9yaXR5LnZhbHVlID0gaXRlbS5nZXRQcmlvcml0eSgpO1xyXG59XHJcblxyXG5jb25zdCBfcHJvbXB0QSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX3RpdGxlX2FucycpO1xyXG4gICAgY29uc3QgZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX2Rlc19hbnMnKTtcclxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5fZGF0ZV9hbnMnKTtcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX3ByaW9yaXR5X2FucycpO1xyXG5cclxuICAgIHJldHVybiB7dGl0bGUsIGRlcywgZGF0ZSwgcHJpb3JpdHl9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY2hhbmdlRGF0YShpdGVtLCBsaXN0KSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmluJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiAge1xyXG4gICAgICAgIF9zdG9yZUNoYW5nZXMoaXRlbSk7XHJcbiAgICAgICAgX3JlbW92ZVByb21wdCgpO1xyXG4gICAgICAgIGlmIChsaXN0LmdldExpc3QoKSAhPSBudWxsKVxyXG4gICAgICAgICAgICBzaG93TGlzdChsaXN0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfc3RvcmVDaGFuZ2VzKGl0ZW0pIHtcclxuICAgIGxldCBpbnB1dCA9IF9wcm9tcHRBKCk7XHJcbiAgICBpdGVtLnNldFRpdGxlKGlucHV0LnRpdGxlLnZhbHVlKTtcclxuICAgIGl0ZW0uc2V0RGVzKGlucHV0LmRlcy52YWx1ZSk7XHJcbiAgICBpdGVtLnNldERhdGUoaW5wdXQuZGF0ZS52YWx1ZSk7XHJcbiAgICBpdGVtLnNldFByaW9yaXR5KGlucHV0LnByaW9yaXR5LnZhbHVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3JlbW92ZVByb21wdCgpIHtcclxuICAgIGNvbnN0IG5ld0l0ZW1EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubmV3SXRlbWApO1xyXG4gICAgbmV3SXRlbURpdi5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvbXB0c2ApKTtcclxuICAgIG5ld0l0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlZGl0SXRlbTsiLCJjb25zdCBsaXN0Q29udHJvbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RzID0gW107XHJcblxyXG4gICAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZExpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICAgIHByb2plY3RzLnB1c2gobGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHByb2plY3RTdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIHByb2plY3RzLmZvckVhY2gobGlzdCA9PiB7XHJcbiAgICAgICAgICAgIHByb2plY3RTdHJpbmcgKz0gJ3snICsgbGlzdC50b1N0cmluZygpICsgJ318JztcclxuICAgICAgICB9KVxyXG4gICAgICAgIHByb2plY3RTdHJpbmcgPSBwcm9qZWN0U3RyaW5nLnN1YnN0cmluZygwLCBwcm9qZWN0U3RyaW5nLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIHJldHVybiBwcm9qZWN0U3RyaW5nO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICByZXR1cm4ge2dldFByb2plY3RzLCBhZGRMaXN0LCB0b1N0cmluZ307XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxpc3RDb250cm9sOyIsImltcG9ydCB0b0RvSXRlbSBmcm9tIFwiLi90b0RvSXRlbVwiO1xyXG5pbXBvcnQgc2hvd0l0IGZyb20gXCIuL2NyZWF0ZU9uU2NyZWVuXCI7XHJcbmltcG9ydCBjcmVhdGVQcm9tcHQgZnJvbSBcIi4vY3JlYXRlUHJvbXB0XCI7XHJcbmltcG9ydCBzdG9yZUxvY2FsbHkgZnJvbSBcIi4vc3RvcmVMb2NhbGx5XCI7XHJcblxyXG5jb25zdCAgbmV3SXRlbUNvbnRyb2wgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZU5ld0l0ZW0gPSAobGlzdCwgcHJvamVjdHMpID0+IHtcclxuICAgICAgICBfZGlzYWJsZU5ld0J1dHQoKTtcclxuICAgICAgICBjcmVhdGVQcm9tcHQoKS5jcmVhdGVJdCgnYWRkJyk7XHJcbiAgICAgICAgX3N0b3JlSXRlbShsaXN0LCBwcm9qZWN0cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtzdG9yZU5ld0l0ZW19O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZGlzYWJsZU5ld0J1dHQoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYWRkYCkuZGlzYWJsZWQgPSB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZW5hYmxlTmV3QnV0dCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5hZGRgKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfc3RvcmVJdGVtIChsaXN0LCBwcm9qZWN0cykge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBfZ2V0SXRlbSgpO1xyXG4gICAgICAgIF9zdG9yZUl0KGxpc3QsIG5ld0l0ZW0sIHByb2plY3RzKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZ2V0SXRlbSgpIHtcclxuICAgIGxldCBpbnB1dCA9IF9wcm9tcHRBKCk7XHJcbiAgICBfcmVtb3ZlUHJvbXB0KCk7XHJcbiAgICByZXR1cm4gaW5wdXRUb0l0ZW0oaW5wdXQpO1xyXG59XHJcblxyXG5jb25zdCBfcHJvbXB0QSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX3RpdGxlX2FucycpLnZhbHVlO1xyXG4gICAgY29uc3QgZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX2Rlc19hbnMnKS52YWx1ZTtcclxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5fZGF0ZV9hbnMnKS52YWx1ZTtcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX3ByaW9yaXR5X2FucycpLnZhbHVlO1xyXG5cclxuICAgIHJldHVybiB7dGl0bGUsIGRlcywgZGF0ZSwgcHJpb3JpdHl9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnB1dFRvSXRlbShpbnB1dCkge1xyXG4gICAgcmV0dXJuIHRvRG9JdGVtKGlucHV0LnRpdGxlLCBpbnB1dC5kZXMsIGlucHV0LmRhdGUsIGlucHV0LnByaW9yaXR5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3JlbW92ZVByb21wdCgpIHtcclxuICAgIGNvbnN0IG5ld0l0ZW1EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3SXRlbScpO1xyXG4gICAgbmV3SXRlbURpdi5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvbXB0cycpKTtcclxuICAgIG5ld0l0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgX2VuYWJsZU5ld0J1dHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3N0b3JlSXQobGlzdCwgbmV3SXRlbSwgcHJvamVjdHMpIHtcclxuICAgIGxpc3QuYWRkSXRlbShuZXdJdGVtKTtcclxuICAgIHNob3dJdChsaXN0LCBwcm9qZWN0cyk7XHJcbiAgICBzdG9yZUxvY2FsbHkoKS5zdG9yZVByb2plY3QocHJvamVjdHMpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXdJdGVtQ29udHJvbDsiLCJpbXBvcnQgbGlzdENvbnRyb2wgZnJvbSBcIi4vbGlzdENvbnRyb2xcIjtcclxuaW1wb3J0IHRvRG9JdGVtIGZyb20gXCIuL3RvRG9JdGVtXCI7XHJcbmltcG9ydCB0b0RvTGlzdCBmcm9tIFwiLi90b0RvTGlzdFwiO1xyXG5cclxuY29uc3QgbG9jYWxQcm9qZWN0cyA9ICgpID0+IHtcclxuICAgIGZ1bmN0aW9uIHN0b3JlUHJvamVjdChwcm9qZWN0cykge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cy50b1N0cmluZygpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RnJvbUxvY2FsKCkge1xyXG4gICAgICAgIGxldCBsb2NhbFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9Qcm9qZWN0cycpO1xyXG4gICAgICAgIGlmIChsb2NhbFByb2plY3RzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0QXJyID0gX2dldExpc3RGcm9tUHJvamVjdChsb2NhbFByb2plY3RzKTtcclxuICAgICAgICAgICAgY29uc3QgbmFtZUxpc3QgPSBfZ2V0SXRlbUZyb21MaXN0KGxpc3RBcnIpO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0cyA9IF9jcmVhdGVQcm9qZWN0cyhuYW1lTGlzdCk7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0c1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7c3RvcmVQcm9qZWN0LCBnZXRGcm9tTG9jYWx9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZ2V0TGlzdEZyb21Qcm9qZWN0KHN0cikge1xyXG4gICAgcmV0dXJuIHN0ci5zdWJzdHJpbmcoMSwgc3RyLmxlbmd0aCAtIDEpLnNwbGl0KCd8Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9nZXRJdGVtRnJvbUxpc3QobGlzdEFycikge1xyXG4gICAgY29uc3QgaXRlbUFyciA9IFtdO1xyXG4gICAgbGlzdEFyci5mb3JFYWNoKGxpc3QgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hbWVJdGVtID0gbGlzdC5zdWJzdHJpbmcoMSwgbGlzdC5sZW5ndGggLSAxKS5zcGxpdCgnOicpO1xyXG4gICAgICAgIGl0ZW1BcnIucHVzaChuYW1lSXRlbSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBpdGVtQXJyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlUHJvamVjdHMobmFtZUxpc3QpIHtcclxuICAgIGNvbnN0IHByb2plY3RzID0gbGlzdENvbnRyb2woKTtcclxuICAgIG5hbWVMaXN0LmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlzdE5hbWUgPSBwcm9qZWN0WzBdO1xyXG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSB0b0RvTGlzdChsaXN0TmFtZSk7XHJcbiAgICAgICAgaWYgKHByb2plY3RbMV0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9qZWN0WzFdLmluY2x1ZGVzKCcuJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBwcm9qZWN0WzFdLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgICAgICBsaXN0LmZvckVhY2goaXRlbUF0dHIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0xpc3QuYWRkSXRlbShfY3JlYXRlTmV3SXRlbShpdGVtQXR0cikpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdMaXN0LmFkZEl0ZW0oX2NyZWF0ZU5ld0l0ZW0ocHJvamVjdFsxXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb2plY3RzLmFkZExpc3QobmV3TGlzdCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBwcm9qZWN0cztcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZU5ld0l0ZW0oaXRlbUF0dHIpIHtcclxuICAgIGNvbnN0IGl0ZW0gPSBpdGVtQXR0ci5zcGxpdCgnLCcpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBpdGVtWzBdLnN1YnN0cmluZygxKTtcclxuICAgIGNvbnN0IGRlcyA9IGl0ZW1bMV07XHJcbiAgICBjb25zdCBkYXRlID0gaXRlbVsyXTtcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gaXRlbVszXTtcclxuICAgIGNvbnN0IHN0YXR1cyA9IGl0ZW1bNF0uc3Vic3RyaW5nKDAsIGl0ZW1bNF0ubGVuZ3RoIC0gMSk7XHJcbiAgICBjb25zdCBuZXdJdGVtID0gdG9Eb0l0ZW0odGl0bGUsIGRlcywgZGF0ZSwgcHJpb3JpdHkpO1xyXG4gICAgX2NoZWNrU3RhdHVzKG5ld0l0ZW0sIHN0YXR1cyk7XHJcbiAgICByZXR1cm4gbmV3SXRlbTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NoZWNrU3RhdHVzKGl0ZW0sIHN0YXR1cykge1xyXG4gICAgaWYgKHN0YXR1cyAhPSBpdGVtLmdldFN0YXR1cygpKVxyXG4gICAgICAgIGl0ZW0uc2V0U3RhdHVzKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvY2FsUHJvamVjdHM7IiwiY29uc3QgdG9Eb0l0ZW0gPSAodGl0bGUsIGRlcywgZGF0ZSwgcHJpb3JpdHkpID0+IHtcclxuICAgIGxldCBteVRpdGxlID0gdGl0bGU7XHJcbiAgICBsZXQgbXlEZXMgPSBkZXM7XHJcbiAgICBsZXQgbXlEYXRlID0gZGF0ZTtcclxuICAgIGxldCBteVByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICBsZXQgbXlTdGF0dXMgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbXlUaXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xyXG4gICAgICAgIG15VGl0bGUgPSBuZXdUaXRsZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgZ2V0RGVzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBteURlcztcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2V0RGVzID0gKG5ld0RlcykgPT4ge1xyXG4gICAgICAgIG15RGVzID0gbmV3RGVzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldERhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG15RGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXREYXRlID0gKG5ld0RhdGUpID0+IHtcclxuICAgICAgICBteURhdGUgPSBuZXdEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBteVByaW9yaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiB7XHJcbiAgICAgICAgbXlQcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFN0YXR1cyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbXlTdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0U3RhdHVzID0gKCkgPT4ge1xyXG4gICAgICAgIG15U3RhdHVzID0gIW15U3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvU3RyaW5nID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBgJHtteVRpdGxlfSwke215RGVzfSwke215RGF0ZX0sJHtteVByaW9yaXR5fSwke215U3RhdHVzfWA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtnZXRUaXRsZSwgc2V0VGl0bGUsIGdldERlcywgc2V0RGVzLCBzZXREYXRlLCBnZXREYXRlLCBcclxuICAgICAgICAgICAgICAgIGdldFByaW9yaXR5LCBzZXRQcmlvcml0eSwgZ2V0U3RhdHVzLCBzZXRTdGF0dXMsIHRvU3RyaW5nfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvRG9JdGVtOyIsIi8vIG9iamVjdCB0aGF0IHN0b3JlIGFsbCBpdGVtXHJcblxyXG5jb25zdCB0b0RvTGlzdCA9IChuYW1lKSA9PiB7XHJcbiAgICBsZXQgbXlOYW1lID0gbmFtZTtcclxuICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgbGV0IG1pZEluZGV4ID0gaXRlbXMubGVuZ3RoO1xyXG4gICAgbGV0IGxvd0luZGV4ID0gaXRlbXMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG15TmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXROYW1lID0gKG5ld05hbWUpID0+IHtcclxuICAgICAgICBteU5hbWUgPSBuZXdOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldExpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZEl0ZW0gPSAobmV3SXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByaSA9IG5ld0l0ZW0uZ2V0UHJpb3JpdHkoKTtcclxuICAgICAgICBfcGxhY2VJdGVtQnlQcmlvcml0eShwcmksIG5ld0l0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSAodGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgX3VwZGF0ZUluZGV4KGl0ZW1zW3RhcmdldF0uZ2V0UHJpb3JpdHkoKSk7XHJcbiAgICAgICAgaXRlbXMuc3BsaWNlKHRhcmdldCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlQWxsID0gKCkgPT4ge1xyXG4gICAgICAgIGl0ZW1zID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd0xpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IGl0ZW0udG9TdHJpbmcoKSArICdcXG4nO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX3BsYWNlSXRlbUJ5UHJpb3JpdHkocHJpLCBpdGVtKSB7XHJcbiAgICAgICAgc3dpdGNoIChwcmkpIHtcclxuICAgICAgICAgICAgY2FzZSAndG9wJzpcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnNwbGljZShtaWRJbmRleCwgMCwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICBtaWRJbmRleCArPSAxO1xyXG4gICAgICAgICAgICAgICAgbG93SW5kZXggKz0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNhc2UgJ21pZGRsZSc6XHJcbiAgICAgICAgICAgICAgICBpdGVtcy5zcGxpY2UobG93SW5kZXgsIDAsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgbG93SW5kZXggKz0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNhc2UgJ2xvdyc6XHJcbiAgICAgICAgICAgICAgICBpdGVtcy5zcGxpY2UoaXRlbXMubGVuZ3RoLCAwLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfdXBkYXRlSW5kZXgocHJpKSB7XHJcbiAgICAgICAgc3dpdGNoIChwcmkpIHtcclxuICAgICAgICAgICAgY2FzZSAndG9wJzpcclxuICAgICAgICAgICAgICAgIG1pZEluZGV4IC09IDE7XHJcbiAgICAgICAgICAgICAgICBsb3dJbmRleCAtPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdtaWRkbGUnOlxyXG4gICAgICAgICAgICAgICAgbG93SW5kZXggLT0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuICAgICAgICBsZXQgbGlzdFN0cmluZyA9IGAke215TmFtZX06YDtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBsaXN0U3RyaW5nICs9ICdbJyArIGl0ZW0udG9TdHJpbmcoKSArICddJztcclxuICAgICAgICAgICAgbGlzdFN0cmluZyArPSAnLic7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGlzdFN0cmluZyA9IGxpc3RTdHJpbmcuc3Vic3RyaW5nKDAsIGxpc3RTdHJpbmcubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgcmV0dXJuIGxpc3RTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtnZXROYW1lLCBzZXROYW1lLCBnZXRMaXN0LCBhZGRJdGVtLCByZW1vdmVJdGVtLCByZW1vdmVBbGwsIFxyXG4gICAgICAgICAgICAgICAgc2hvd0xpc3QsIHRvU3RyaW5nfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvRG9MaXN0OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZUVsZSBmcm9tIFwiLi9jcmVhdGVFbGVcIjtcclxuaW1wb3J0IHNob3dMaXN0IGZyb20gXCIuL2NyZWF0ZU9uU2NyZWVuXCI7XHJcbmltcG9ydCBuZXdJdGVtQ29udHJvbCBmcm9tICcuL25ld0l0ZW1Db250cm9sJztcclxuaW1wb3J0IHRvRG9MaXN0IGZyb20gXCIuL3RvRG9MaXN0XCI7XHJcbmltcG9ydCBzdG9yZUxvY2FsbHkgZnJvbSAnLi9zdG9yZUxvY2FsbHknO1xyXG5cclxuZnVuY3Rpb24gc2hvd1Byb2plY3RzKHByb2plY3RzKSB7XHJcbiAgICBfY3JlYXRlSGVhZGVyKHByb2plY3RzKTtcclxuICAgIHByb2plY3RzLmdldFByb2plY3RzKCkuZm9yRWFjaChsaXN0ID0+IHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3REaXYnKSA9PSBudWxsKVxyXG4gICAgICAgICAgICBfZGlzcGxheUhlYWRlcihsaXN0LCBwcm9qZWN0cyk7XHJcbiAgICAgICAgc2hvd0xpc3QobGlzdCwgcHJvamVjdHMpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVIZWFkZXIocHJvamVjdHMpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgJ2hlYWRlckRpdicpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKF9jcmVhdGVUYWIocHJvamVjdHMpKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2Rpc3BsYXlIZWFkZXIobGlzdCwgcHJvamVjdHMpIHtcclxuICAgIGNvbnN0IGVsZSA9IF9jcmVhdGVMaXN0SGVhZGVyKGxpc3QsIHByb2plY3RzKTtcclxuICAgIF9hcHBlbmRFbGUoZWxlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUxpc3RIZWFkZXIobGlzdCwgcHJvamVjdHMpIHtcclxuICAgIGNvbnN0IG5hbWUgPSBsaXN0LmdldE5hbWUoKS5yZXBsYWNlKCcgJywgJ18nKTtcclxuICAgIGNvbnN0IGFkZEJ1dHQgPSBjcmVhdGVFbGUoJ2J1dHRvbicsICdhZGQgaXRlbScsIGBhZGQke25hbWV9YCk7XHJcbiAgICBhZGRCdXR0LmNsYXNzTGlzdC5hZGQoJ2FkZCcpO1xyXG4gICAgYWRkQnV0dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9jbGlja1RvQWRkKGxpc3QsIHByb2plY3RzKSk7XHJcbiAgICBjb25zdCBuZXdJdGVtRGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgYG5ld0l0ZW1gKTtcclxuICAgIG5ld0l0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgY29uc3QgbGlzdERpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsIGBsaXN0YCk7XHJcbiAgICBjb25zdCBlZGl0UHJvamVjdEJ1dHQgPSBjcmVhdGVFbGUoJ2J1dHRvbicsICdDaGFuZ2UgUHJvamVjdCBOYW1lJywgJ2NoYW5nZVBOYW1lJyk7XHJcbiAgICBlZGl0UHJvamVjdEJ1dHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfY2hhbmdlUE5hbWUobGlzdCwgcHJvamVjdHMpKTtcclxuICAgIHJldHVybiB7bmV3SXRlbURpdiwgbGlzdERpdiwgYWRkQnV0dCwgZWRpdFByb2plY3RCdXR0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZVRhYihwcm9qZWN0cykge1xyXG4gICAgY29uc3QgdGFiRGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgJ3RhYicpO1xyXG4gICAgcHJvamVjdHMuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKGxpc3QgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBsaXN0LmdldE5hbWUoKTtcclxuICAgICAgICBjb25zdCBuYW1lQnV0dCA9IGNyZWF0ZUVsZSgnYnV0dG9uJywgYCR7bmFtZX1gLCBgcHJvamVjdF9idXR0YCk7XHJcbiAgICAgICAgbmFtZUJ1dHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfY2hhbmdlVG9Qcm9qZWN0KGxpc3QsIHByb2plY3RzKSk7XHJcbiAgICAgICAgdGFiRGl2LmFwcGVuZENoaWxkKG5hbWVCdXR0KTtcclxuICAgIH0pXHJcbiAgICB0YWJEaXYuYXBwZW5kQ2hpbGQoX2NyZWF0ZUFkZFByb2plY3RCdXR0KHByb2plY3RzKSk7XHJcbiAgICByZXR1cm4gdGFiRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY2hhbmdlVG9Qcm9qZWN0KGxpc3QsIHByb2plY3RzKSB7XHJcbiAgICBfY2xlYXJMaXN0KCk7XHJcbiAgICBfZGlzcGxheUhlYWRlcihsaXN0KTtcclxuICAgIHNob3dMaXN0KGxpc3QsIHByb2plY3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NsZWFyTGlzdCgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgY29udGVudC5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdERpdicpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUFkZFByb2plY3RCdXR0KHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBhZGRCdXR0ID0gY3JlYXRlRWxlKCdidXR0b24nLCAnbmV3IFByb2plY3QnLCAnYWRkX3Byb2plY3QnKTtcclxuICAgIGFkZEJ1dHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfYWRkUHJvamVjdChwcm9qZWN0cykpO1xyXG4gICAgcmV0dXJuIGFkZEJ1dHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9hZGRQcm9qZWN0KHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBwcm9qX3Byb21wdCA9IHByb21wdCgnUHJvamVjdCBOYW1lOicsICdOZXdfcHJvamVjdCcpO1xyXG4gICAgY29uc3QgbmV3TGlzdCA9IHRvRG9MaXN0KHByb2pfcHJvbXB0KTtcclxuICAgIHByb2plY3RzLmFkZExpc3QobmV3TGlzdCk7XHJcbiAgICBzdG9yZUxvY2FsbHkoKS5zdG9yZVByb2plY3QocHJvamVjdHMpO1xyXG4gICAgX2NsZWFySGVhZGVyKCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyRGl2JykuYXBwZW5kQ2hpbGQoX2NyZWF0ZVRhYihwcm9qZWN0cykpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY2xlYXJIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyRGl2Jyk7XHJcbiAgICB3aGlsZSAoaGVhZGVyLmZpcnN0Q2hpbGQgIT0gbnVsbClcclxuICAgICAgICBoZWFkZXIucmVtb3ZlQ2hpbGQoaGVhZGVyLmZpcnN0Q2hpbGQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY2xpY2tUb0FkZChsaXN0LCBwcm9qZWN0cykge1xyXG4gICAgY29uc3QgbmV3SXRlbSA9IG5ld0l0ZW1Db250cm9sKCk7XHJcbiAgICBjb25zb2xlLmxvZyhsaXN0LmdldExpc3QoKSk7XHJcbiAgICBuZXdJdGVtLnN0b3JlTmV3SXRlbShsaXN0LCBwcm9qZWN0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jaGFuZ2VQTmFtZShsaXN0LCBwcm9qZWN0cykge1xyXG4gICAgY29uc3QgbmV3TmFtZSA9IHByb21wdCgnV2hhdCBpcyB0aGUgbmV3IG5hbWUgb2YgdGhlIHByb2plY3Q/JywgbGlzdC5nZXROYW1lKCkpO1xyXG4gICAgbGlzdC5zZXROYW1lKG5ld05hbWUpO1xyXG4gICAgc3RvcmVMb2NhbGx5KCkuc3RvcmVQcm9qZWN0KHByb2plY3RzKTtcclxuICAgIF9jbGVhckFsbCgpO1xyXG4gICAgc2hvd1Byb2plY3RzKHByb2plY3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NsZWFyQWxsKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkICE9IG51bGwpXHJcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfYXBwZW5kRWxlIChlbGUpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgY29uc3QgbGlzdERpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdsaXN0RGl2Jyk7XHJcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgaW4gZWxlKSB7XHJcbiAgICAgICAgbGlzdERpdi5hcHBlbmRDaGlsZChlbGVbZWxlbWVudF0pO1xyXG4gICAgfVxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsaXN0RGl2KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd1Byb2plY3RzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==