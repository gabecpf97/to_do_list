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
/* harmony import */ var _storeLocally__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storeLocally */ "./src/js/storeLocally.js");
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
    list_div.appendChild(_appendItem(list, _getItem(item), item, i, projects));
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
    basicDiv.appendChild(_createDeleteButt(list, i, projects));
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

function _createDeleteButt(list, i, projects) {
    const deleButt = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'Delete', 'delete');
    deleButt.addEventListener('click', e => _deleteEntry(list, i, projects));
    return deleButt;
}

function _deleteEntry(list, i, projects) {
    _removeItem(list, i, projects);
    showList(list);
}

function _removeItem(list, i, projects) {
    const list_div = document.querySelector('.list');
    while (list_div.firstChild != null) 
        list_div.removeChild(list_div.firstChild);
    list.removeItem(i);
    (0,_storeLocally__WEBPACK_IMPORTED_MODULE_3__["default"])().storeProject(projects);
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
        _changeData(item, list, projects);
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

function _changeData(item, list, projects) {
    document.querySelector('.fin').addEventListener('click', () =>  {
        _storeChanges(item);
        _removePrompt();
        if (list.getList() != null)
            (0,_createOnScreen__WEBPACK_IMPORTED_MODULE_0__["default"])(list);
        (0,_storeLocally__WEBPACK_IMPORTED_MODULE_2__["default"])().storeProject(projects);
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
    
    const removeList = (listName) => {
       for (let i = 0; i < projects.length; i++) {
            if (projects[i].getName() == listName) {
                projects.splice(i, 1);
            }
        };
    }

    return {getProjects, addList, toString, removeList};
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/createOnScreen.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvY3JlYXRlRWxlLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvY3JlYXRlT25TY3JlZW4uanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy9jcmVhdGVQcm9tcHQuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy9lZGl0SXRlbS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL2xpc3RDb250cm9sLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvbmV3SXRlbUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy9zdG9yZUxvY2FsbHkuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy90b0RvSXRlbS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL3RvRG9MaXN0LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlRWxlICh0eXBlLCB2YWx1ZSwgY2xhc3NOYW1lKSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xyXG4gICAgdGFyZ2V0LnRleHRDb250ZW50ID0gdmFsdWU7XHJcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlIDsiLCIvLyBzaG93IGl0ZW0gYW5kIG90aGVyIG9uIGh0bWwgZmlsZVxyXG4vLyBET00gc3R1ZmZcclxuaW1wb3J0IGNyZWF0ZUVsZSBmcm9tIFwiLi9jcmVhdGVFbGVcIjtcclxuaW1wb3J0IGVkaXRJdGVtIGZyb20gXCIuL2VkaXRJdGVtXCI7XHJcbmltcG9ydCBuZXdJdGVtQ29udHJvbCBmcm9tIFwiLi9uZXdJdGVtQ29udHJvbFwiO1xyXG5pbXBvcnQgc3RvcmVMb2NhbGx5IGZyb20gJy4vc3RvcmVMb2NhbGx5JztcclxuXHJcbmZ1bmN0aW9uIHNob3dMaXN0KGxpc3QsIHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBsaXN0X2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XHJcbiAgICBfY2xlYXJTY3JlZW4obGlzdF9kaXYpO1xyXG4gICAgaWYgKGxpc3QuZ2V0TGlzdCgpWzBdID09IHVuZGVmaW5lZClcclxuICAgICAgICBfc2hvd0VtcHR5KGxpc3RfZGl2LCBsaXN0LCBwcm9qZWN0cyk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QuZ2V0TGlzdCgpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIF9zaG93SXRlbShsaXN0X2RpdiwgbGlzdCwgbGlzdC5nZXRMaXN0KClbaV0sIGksIHByb2plY3RzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9zaG93RW1wdHkobGlzdF9kaXYsIGxpc3QsIHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBlbXB0eURpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJ2NsaWNrIGhlcmUgdG8gYWRkIG5ldyBpdGVtJywgJ2VtcHR5X2l0ZW0nKTtcclxuICAgIGxpc3RfZGl2LmFwcGVuZENoaWxkKGVtcHR5RGl2KTtcclxuICAgIGVtcHR5RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbmV3SXRlbUNvbnRyb2woKS5zdG9yZU5ld0l0ZW0obGlzdCwgcHJvamVjdHMpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3Nob3dJdGVtKGxpc3RfZGl2LCBsaXN0LCBpdGVtLCBpLCBwcm9qZWN0cykge1xyXG4gICAgbGlzdF9kaXYuYXBwZW5kQ2hpbGQoX2FwcGVuZEl0ZW0obGlzdCwgX2dldEl0ZW0oaXRlbSksIGl0ZW0sIGksIHByb2plY3RzKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9hcHBlbmRJdGVtIChsaXN0LCBpdGVtX2RpdiwgaXRlbSwgaSwgcHJvamVjdHMpIHtcclxuICAgIGNvbnN0IGl0ZW1EaXYgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCBgaXRlbWApO1xyXG4gICAgaXRlbURpdi5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XHJcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKF9jcmVhdGVCYXNpY0RpdihsaXN0LCBpdGVtX2RpdiwgaXRlbSwgaSwgcHJvamVjdHMpKTtcclxuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoX2NyZWF0ZURlcyhpdGVtX2Rpdi5kZXMpKTtcclxuICAgIHJldHVybiBpdGVtRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlQmFzaWNEaXYobGlzdCwgaXRlbV9kaXYsIGl0ZW0sIGksIHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBiYXNpY0RpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdiYXNpYycpO1xyXG4gICAgYmFzaWNEaXYuYXBwZW5kQ2hpbGQoaXRlbV9kaXYuc3RhdHVzKTtcclxuICAgIGJhc2ljRGl2LmFwcGVuZENoaWxkKGl0ZW1fZGl2LnRpdGxlKTtcclxuICAgIGJhc2ljRGl2LmFwcGVuZENoaWxkKGl0ZW1fZGl2LmRhdGUpO1xyXG4gICAgYmFzaWNEaXYuYXBwZW5kQ2hpbGQoaXRlbV9kaXYucHJpb3JpdHkpO1xyXG4gICAgYmFzaWNEaXYuYXBwZW5kQ2hpbGQoX2NyZWF0ZUVkaXRCdXR0KGl0ZW0sIGxpc3QsIHByb2plY3RzKSk7XHJcbiAgICBiYXNpY0Rpdi5hcHBlbmRDaGlsZChfY3JlYXRlRGVsZXRlQnV0dChsaXN0LCBpLCBwcm9qZWN0cykpO1xyXG4gICAgYmFzaWNEaXYuYXBwZW5kQ2hpbGQoX2NyZWF0ZUV4cGFuZEJ1dHQoaXRlbV9kaXYuZGVzKSk7XHJcbiAgICByZXR1cm4gYmFzaWNEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9nZXRJdGVtKGl0ZW0pIHtcclxuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlKCdkaXYnLCBpdGVtLmdldFRpdGxlKCksICd0aXRsZScpO1xyXG4gICAgY29uc3QgZGVzID0gY3JlYXRlRWxlKCdkaXYnLCBpdGVtLmdldERlcygpLCAnZGVzJyk7XHJcbiAgICBjb25zdCBkYXRlID0gY3JlYXRlRWxlKCdkaXYnLCBpdGVtLmdldERhdGUoKSwgJ2RhdGUnKTtcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gY3JlYXRlRWxlKCdkaXYnLCBpdGVtLmdldFByaW9yaXR5KCksICdwcmlvcml0eScpO1xyXG4gICAgY29uc3Qgc3RhdHVzID0gX2NyZWF0ZVN0YXR1c0RpdihpdGVtKTtcclxuICAgIHJldHVybiB7dGl0bGUsIGRlcywgZGF0ZSwgcHJpb3JpdHksIHN0YXR1c307XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jbGVhclNjcmVlbihsaXN0X2Rpdikge1xyXG4gICAgd2hpbGUobGlzdF9kaXYuZmlyc3RDaGlsZCAhPSBudWxsKVxyXG4gICAgICAgIGxpc3RfZGl2LnJlbW92ZUNoaWxkKGxpc3RfZGl2LmZpcnN0Q2hpbGQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlU3RhdHVzRGl2KGl0ZW0pIHtcclxuICAgIGNvbnN0IHN0YXR1c0RpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdzdGF0dXMnKTtcclxuICAgIGNvbnN0IHN0YXR1c0xhYmVsID0gX2NyZWF0ZUxhYmVsKCk7XHJcbiAgICBjb25zdCBzdGF0dXNDaGVjayA9IF9jcmVhdGVDaGVjayhpdGVtKTtcclxuICAgIHN0YXR1c0Rpdi5hcHBlbmRDaGlsZChzdGF0dXNDaGVjayk7XHJcbiAgICByZXR1cm4gc3RhdHVzRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlTGFiZWwoKSB7XHJcbiAgICBjb25zdCBzdGF0dXNMYWJlbCA9IGNyZWF0ZUVsZSgnbGFiZWwnLCAnQ29tcGxldGVkJywgJ3N0YXR1c19sJyk7XHJcbiAgICBzdGF0dXNMYWJlbC5odG1sRm9yID0gJ3N0YXR1cyc7XHJcbiAgICByZXR1cm4gc3RhdHVzTGFiZWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVDaGVjayhpdGVtKSB7XHJcbiAgICBjb25zdCBzdGF0dXNDaGVjayA9IGNyZWF0ZUVsZSgnaW5wdXQnLCAnJywgJ3N0YXR1c19jJyk7XHJcbiAgICBzdGF0dXNDaGVjay50eXBlID0gJ2NoZWNrYm94JztcclxuICAgIHN0YXR1c0NoZWNrLm5hbWUgPSAnc3RhdHVzJztcclxuICAgIGlmIChpdGVtLmdldFN0YXR1cygpKVxyXG4gICAgICAgIHN0YXR1c0NoZWNrLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgc3RhdHVzQ2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGl0ZW0uc2V0U3RhdHVzKCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBzdGF0dXNDaGVjaztcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZURlbGV0ZUJ1dHQobGlzdCwgaSwgcHJvamVjdHMpIHtcclxuICAgIGNvbnN0IGRlbGVCdXR0ID0gY3JlYXRlRWxlKCdidXR0b24nLCAnRGVsZXRlJywgJ2RlbGV0ZScpO1xyXG4gICAgZGVsZUJ1dHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IF9kZWxldGVFbnRyeShsaXN0LCBpLCBwcm9qZWN0cykpO1xyXG4gICAgcmV0dXJuIGRlbGVCdXR0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZGVsZXRlRW50cnkobGlzdCwgaSwgcHJvamVjdHMpIHtcclxuICAgIF9yZW1vdmVJdGVtKGxpc3QsIGksIHByb2plY3RzKTtcclxuICAgIHNob3dMaXN0KGxpc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfcmVtb3ZlSXRlbShsaXN0LCBpLCBwcm9qZWN0cykge1xyXG4gICAgY29uc3QgbGlzdF9kaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpO1xyXG4gICAgd2hpbGUgKGxpc3RfZGl2LmZpcnN0Q2hpbGQgIT0gbnVsbCkgXHJcbiAgICAgICAgbGlzdF9kaXYucmVtb3ZlQ2hpbGQobGlzdF9kaXYuZmlyc3RDaGlsZCk7XHJcbiAgICBsaXN0LnJlbW92ZUl0ZW0oaSk7XHJcbiAgICBzdG9yZUxvY2FsbHkoKS5zdG9yZVByb2plY3QocHJvamVjdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlRWRpdEJ1dHQoaXRlbSwgbGlzdCwgcHJvamVjdHMpIHtcclxuICAgIGNvbnN0IGVkaXRCdXR0ID0gY3JlYXRlRWxlKCdidXR0b24nLCAnZWRpdCcsICdlZGl0Jyk7XHJcbiAgICBlZGl0QnV0dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGVkaXRJdGVtKCkuZWRpdEl0KGl0ZW0sIGxpc3QsIHByb2plY3RzKSk7XHJcbiAgICByZXR1cm4gZWRpdEJ1dHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVFeHBhbmRCdXR0KGRlcykge1xyXG4gICAgY29uc3QgZXhwYW5kQnV0dCA9IGNyZWF0ZUVsZSgnYnV0dG9uJywgJ2V4cGFuZCcsICdleHBhbmQnKTtcclxuICAgIGV4cGFuZEJ1dHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfc2hvd0RlcyhleHBhbmRCdXR0LCBkZXMucGFyZW50Tm9kZSkpO1xyXG4gICAgcmV0dXJuIGV4cGFuZEJ1dHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9zaG93RGVzKGV4cGFuZEJ1dHQsIGRlc19jb250YWluZXIpIHtcclxuICAgIGlmIChkZXNfY29udGFpbmVyLmNsYXNzTGlzdFsxXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBkZXNfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBleHBhbmRCdXR0LnRleHRDb250ZW50ID0gJ2V4cGFuZCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlc19jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgIGV4cGFuZEJ1dHQudGV4dENvbnRlbnQgPSAnaGlkZSc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVEZXMoZGVzRGl2KSB7XHJcbiAgICBjb25zdCBkZXNfY29udGFpbmVyID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgJ2Rlc19kaXYnKTtcclxuICAgIGRlc19jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgZGVzX2NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNEaXYpO1xyXG4gICAgcmV0dXJuIGRlc19jb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dMaXN0OyIsImltcG9ydCBjcmVhdGVFbGUgZnJvbSBcIi4vY3JlYXRlRWxlXCI7XHJcblxyXG5jb25zdCBjcmVhdGVQcm9tcHQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjcmVhdGVJdCA9IChuYW1lKSA9PiB7XHJcbiAgICAgICAgX2Rpc3BsYXlQcm9tcHQobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtjcmVhdGVJdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9kaXNwbGF5UHJvbXB0KG5hbWUpIHtcclxuICAgIF9zaG93Rm9ybSgpO1xyXG4gICAgY29uc3QgZWxlbWVudHMgPSBfY3JlYXRlUHJvbXB0RWxlKG5hbWUpO1xyXG4gICAgZWxlbWVudHMucHJvbXB0X2Rpdi5hcHBlbmRDaGlsZChlbGVtZW50cy5idXR0X2Rpdik7XHJcbiAgICBlbGVtZW50cy5uZXdJdGVtRGl2LmFwcGVuZENoaWxkKGVsZW1lbnRzLnByb21wdF9kaXYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfc2hvd0Zvcm0oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubmV3SXRlbWApLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZVByb21wdEVsZShuYW1lKSB7XHJcbiAgICBjb25zdCBuZXdJdGVtRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm5ld0l0ZW1gKTtcclxuICAgIGNvbnN0IHByb21wdF9kaXYgPSBfYXBwZW5kUHJvbXB0cyhfcHJvbXB0USgpKTtcclxuICAgIGNvbnN0IGZpbl9idXR0ID0gY3JlYXRlRWxlKCdidXR0b24nLCBuYW1lLCAnZmluJyk7XHJcbiAgICBjb25zdCBjYW5jZWxfYnV0dCA9IGNyZWF0ZUVsZSgnYnV0dG9uJywgJ0NhbmNlbCcsICdjYW5jZWwnKTtcclxuICAgIGNvbnN0IGJ1dHRfZGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgJ2J1dHRfZGl2Jyk7XHJcbiAgICBidXR0X2Rpdi5hcHBlbmRDaGlsZChmaW5fYnV0dCk7XHJcbiAgICBidXR0X2Rpdi5hcHBlbmRDaGlsZChjYW5jZWxfYnV0dCk7XHJcbiAgICBfY2xpY2tUb0NhbmNlbChjYW5jZWxfYnV0dCk7XHJcbiAgICBfY2xpY2tlZE91dHNpZGUoKTtcclxuICAgIHJldHVybiB7bmV3SXRlbURpdiwgcHJvbXB0X2RpdiwgYnV0dF9kaXZ9O1xyXG59XHJcblxyXG5jb25zdCBfcHJvbXB0USA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFza1RpdGxlID0gXCJUbyBkbyBpdGVtIG5hbWVcIjtcclxuICAgIGNvbnN0IGFza0RlcyA9IFwidG8gZG8gaXRlbSBkZXNjcmlwdGlvblwiO1xyXG4gICAgY29uc3QgYXNrRGF0ZSA9IFwiaXRlbSBkdWUgZGF0ZVwiO1xyXG4gICAgY29uc3QgYXNrUHJpb3JpdHkgPSBcIml0ZW0ncyBwcmlvcml0eVwiO1xyXG5cclxuICAgIHJldHVybiB7YXNrVGl0bGUsIGFza0RlcywgYXNrRGF0ZSwgYXNrUHJpb3JpdHl9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfYXBwZW5kUHJvbXB0cyhwcm9tcHRzKSB7XHJcbiAgICBjb25zdCBwcm9tcHRfZGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgYHByb21wdHNgKTtcclxuICAgIGNvbnN0IHRpdGxlX2RpdiA9IF9jcmVhdGVMYWJsZUlucHV0KHByb21wdHMuYXNrVGl0bGUsICdpbnB1dCcsICdpbl90aXRsZScpO1xyXG4gICAgY29uc3QgZGVzX2RpdiA9IF9jcmVhdGVMYWJsZUlucHV0KHByb21wdHMuYXNrRGVzLCAndGV4dGFyZWEnLCAnaW5fZGVzJyk7XHJcbiAgICBjb25zdCBkYXRlX2RpdiA9IF9jcmVhdGVMYWJsZUlucHV0KHByb21wdHMuYXNrRGF0ZSwgJ2lucHV0JywgJ2luX2RhdGUnKTtcclxuICAgIGNvbnN0IHByaW9yaXR5X2RpdiA9IF9jcmVhdGVQcmlvcml0eURpdihwcm9tcHRzLmFza1ByaW9yaXR5KTtcclxuICAgIHByb21wdF9kaXYuYXBwZW5kQ2hpbGQodGl0bGVfZGl2KTtcclxuICAgIHByb21wdF9kaXYuYXBwZW5kQ2hpbGQoZGVzX2Rpdik7XHJcbiAgICBwcm9tcHRfZGl2LmFwcGVuZENoaWxkKGRhdGVfZGl2KTtcclxuICAgIHByb21wdF9kaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlfZGl2KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHByb21wdF9kaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVMYWJsZUlucHV0KHF1ZXN0aW9uLCB0eXBlLCBjbGFzc05hbWUpIHtcclxuICAgIGNvbnN0IHFfZGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgJ3FfZGl2Jyk7XHJcbiAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUVsZSgnbGFiZWwnLCBxdWVzdGlvbiwgJ2luJyk7XHJcbiAgICBjb25zdCBhbnN3ZXIgPSBjcmVhdGVFbGUodHlwZSwgJycsIGAke2NsYXNzTmFtZX1fYW5zYCk7XHJcbiAgICBxX2Rpdi5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgICBxX2Rpdi5hcHBlbmRDaGlsZChhbnN3ZXIpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gcV9kaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVQcmlvcml0eURpdihxdWVzdGlvbikge1xyXG4gICAgY29uc3QgcHJpb3JpdHlEaXYgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCAncV9kaXYnKTtcclxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBjcmVhdGVFbGUoJ2xhYmVsJywgcXVlc3Rpb24sICdpbicpO1xyXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBjcmVhdGVFbGUoJ3NlbGVjdCcsICcnLCAnaW5fcHJpb3JpdHlfYW5zJyk7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5uYW1lID0gJ3ByaW9yaXR5JztcclxuICAgIGNvbnN0IG9wdGlvblRvcCA9IF9jcmVhdGVPcHRpb24oJ3RvcCcpO1xyXG4gICAgY29uc3Qgb3B0aW9uTWlkID0gX2NyZWF0ZU9wdGlvbignbWlkZGxlJyk7XHJcbiAgICBjb25zdCBvcHRpb25Mb3cgPSBfY3JlYXRlT3B0aW9uKCdsb3cnKTtcclxuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvblRvcCk7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25NaWQpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uTG93KTtcclxuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xyXG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gcHJpb3JpdHlEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVPcHRpb24ocHJpb3JpdHkpIHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGNyZWF0ZUVsZSgnb3B0aW9uJywgcHJpb3JpdHksIGBpbl9vcHRpb25zXyR7cHJpb3JpdHl9YCk7XHJcbiAgICBvcHRpb24udmFsdWUgPSBwcmlvcml0eTtcclxuICAgIHJldHVybiBvcHRpb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jbGlja1RvQ2FuY2VsKGJ1dHQpIHtcclxuICAgIGJ1dHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfcmVtb3ZlUHJvbXB0KCksIHtvbmNlOiB0cnVlfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jbGlja2VkT3V0c2lkZSgpIHtcclxuICAgIGNvbnN0IG5ld0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubmV3SXRlbWApO1xyXG4gICAgbmV3SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldCA9PSBlLnRhcmdldClcclxuICAgICAgICAgICAgX3JlbW92ZVByb21wdCgpO1xyXG4gICAgfSwge29uY2U6IHRydWV9KTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9yZW1vdmVQcm9tcHQoKSB7XHJcbiAgICBjb25zdCBuZXdJdGVtRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm5ld0l0ZW1gKTtcclxuICAgIG5ld0l0ZW1EaXYucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb21wdHNgKSk7XHJcbiAgICBuZXdJdGVtRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgIF9lbmFibGVOZXdCdXR0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9lbmFibGVOZXdCdXR0KCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmFkZGApLmRpc2FibGVkID0gZmFsc2U7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9tcHQ7IiwiaW1wb3J0IHNob3dMaXN0IGZyb20gXCIuL2NyZWF0ZU9uU2NyZWVuXCI7XHJcbmltcG9ydCBjcmVhdGVQcm9tcHQgZnJvbSAnLi9jcmVhdGVQcm9tcHQnO1xyXG5pbXBvcnQgc3RvcmVMb2NhbGx5IGZyb20gJy4vc3RvcmVMb2NhbGx5JztcclxuXHJcbmNvbnN0IGVkaXRJdGVtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZWRpdEl0ID0gKGl0ZW0sIGxpc3QsIHByb2plY3RzKSA9PiB7XHJcbiAgICAgICAgX3Nob3dGb3JtKCk7XHJcbiAgICAgICAgY3JlYXRlUHJvbXB0KCkuY3JlYXRlSXQoJ1NBVkUnKTtcclxuICAgICAgICBfZmlsbERhdGEoaXRlbSk7XHJcbiAgICAgICAgX2NoYW5nZURhdGEoaXRlbSwgbGlzdCwgcHJvamVjdHMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtlZGl0SXR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfc2hvd0Zvcm0oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubmV3SXRlbWApLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2ZpbGxEYXRhKGl0ZW0pIHtcclxuICAgIGxldCBmZWlsZHMgPSBfcHJvbXB0QSgpO1xyXG4gICAgZmVpbGRzLnRpdGxlLnZhbHVlID0gaXRlbS5nZXRUaXRsZSgpO1xyXG4gICAgZmVpbGRzLmRlcy52YWx1ZSA9IGl0ZW0uZ2V0RGVzKCk7XHJcbiAgICBmZWlsZHMuZGF0ZS52YWx1ZSA9IGl0ZW0uZ2V0RGF0ZSgpO1xyXG4gICAgZmVpbGRzLnByaW9yaXR5LnZhbHVlID0gaXRlbS5nZXRQcmlvcml0eSgpO1xyXG59XHJcblxyXG5jb25zdCBfcHJvbXB0QSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX3RpdGxlX2FucycpO1xyXG4gICAgY29uc3QgZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX2Rlc19hbnMnKTtcclxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5fZGF0ZV9hbnMnKTtcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX3ByaW9yaXR5X2FucycpO1xyXG5cclxuICAgIHJldHVybiB7dGl0bGUsIGRlcywgZGF0ZSwgcHJpb3JpdHl9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY2hhbmdlRGF0YShpdGVtLCBsaXN0LCBwcm9qZWN0cykge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gIHtcclxuICAgICAgICBfc3RvcmVDaGFuZ2VzKGl0ZW0pO1xyXG4gICAgICAgIF9yZW1vdmVQcm9tcHQoKTtcclxuICAgICAgICBpZiAobGlzdC5nZXRMaXN0KCkgIT0gbnVsbClcclxuICAgICAgICAgICAgc2hvd0xpc3QobGlzdCk7XHJcbiAgICAgICAgc3RvcmVMb2NhbGx5KCkuc3RvcmVQcm9qZWN0KHByb2plY3RzKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfc3RvcmVDaGFuZ2VzKGl0ZW0pIHtcclxuICAgIGxldCBpbnB1dCA9IF9wcm9tcHRBKCk7XHJcbiAgICBpdGVtLnNldFRpdGxlKGlucHV0LnRpdGxlLnZhbHVlKTtcclxuICAgIGl0ZW0uc2V0RGVzKGlucHV0LmRlcy52YWx1ZSk7XHJcbiAgICBpdGVtLnNldERhdGUoaW5wdXQuZGF0ZS52YWx1ZSk7XHJcbiAgICBpdGVtLnNldFByaW9yaXR5KGlucHV0LnByaW9yaXR5LnZhbHVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3JlbW92ZVByb21wdCgpIHtcclxuICAgIGNvbnN0IG5ld0l0ZW1EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubmV3SXRlbWApO1xyXG4gICAgbmV3SXRlbURpdi5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvbXB0c2ApKTtcclxuICAgIG5ld0l0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlZGl0SXRlbTsiLCJjb25zdCBsaXN0Q29udHJvbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RzID0gW107XHJcblxyXG4gICAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZExpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICAgIHByb2plY3RzLnB1c2gobGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHByb2plY3RTdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIHByb2plY3RzLmZvckVhY2gobGlzdCA9PiB7XHJcbiAgICAgICAgICAgIHByb2plY3RTdHJpbmcgKz0gJ3snICsgbGlzdC50b1N0cmluZygpICsgJ318JztcclxuICAgICAgICB9KVxyXG4gICAgICAgIHByb2plY3RTdHJpbmcgPSBwcm9qZWN0U3RyaW5nLnN1YnN0cmluZygwLCBwcm9qZWN0U3RyaW5nLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIHJldHVybiBwcm9qZWN0U3RyaW5nO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCByZW1vdmVMaXN0ID0gKGxpc3ROYW1lKSA9PiB7XHJcbiAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9qZWN0c1tpXS5nZXROYW1lKCkgPT0gbGlzdE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtnZXRQcm9qZWN0cywgYWRkTGlzdCwgdG9TdHJpbmcsIHJlbW92ZUxpc3R9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsaXN0Q29udHJvbDsiLCJpbXBvcnQgdG9Eb0l0ZW0gZnJvbSBcIi4vdG9Eb0l0ZW1cIjtcclxuaW1wb3J0IHNob3dJdCBmcm9tIFwiLi9jcmVhdGVPblNjcmVlblwiO1xyXG5pbXBvcnQgY3JlYXRlUHJvbXB0IGZyb20gXCIuL2NyZWF0ZVByb21wdFwiO1xyXG5pbXBvcnQgc3RvcmVMb2NhbGx5IGZyb20gXCIuL3N0b3JlTG9jYWxseVwiO1xyXG5cclxuY29uc3QgIG5ld0l0ZW1Db250cm9sID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVOZXdJdGVtID0gKGxpc3QsIHByb2plY3RzKSA9PiB7XHJcbiAgICAgICAgX2Rpc2FibGVOZXdCdXR0KCk7XHJcbiAgICAgICAgY3JlYXRlUHJvbXB0KCkuY3JlYXRlSXQoJ2FkZCcpO1xyXG4gICAgICAgIF9zdG9yZUl0ZW0obGlzdCwgcHJvamVjdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7c3RvcmVOZXdJdGVtfTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2Rpc2FibGVOZXdCdXR0KCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmFkZGApLmRpc2FibGVkID0gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2VuYWJsZU5ld0J1dHQoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYWRkYCkuZGlzYWJsZWQgPSBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3N0b3JlSXRlbSAobGlzdCwgcHJvamVjdHMpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdJdGVtID0gX2dldEl0ZW0oKTtcclxuICAgICAgICBfc3RvcmVJdChsaXN0LCBuZXdJdGVtLCBwcm9qZWN0cyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2dldEl0ZW0oKSB7XHJcbiAgICBsZXQgaW5wdXQgPSBfcHJvbXB0QSgpO1xyXG4gICAgX3JlbW92ZVByb21wdCgpO1xyXG4gICAgcmV0dXJuIGlucHV0VG9JdGVtKGlucHV0KTtcclxufVxyXG5cclxuY29uc3QgX3Byb21wdEEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbl90aXRsZV9hbnMnKS52YWx1ZTtcclxuICAgIGNvbnN0IGRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbl9kZXNfYW5zJykudmFsdWU7XHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX2RhdGVfYW5zJykudmFsdWU7XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbl9wcmlvcml0eV9hbnMnKS52YWx1ZTtcclxuXHJcbiAgICByZXR1cm4ge3RpdGxlLCBkZXMsIGRhdGUsIHByaW9yaXR5fTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5wdXRUb0l0ZW0oaW5wdXQpIHtcclxuICAgIHJldHVybiB0b0RvSXRlbShpbnB1dC50aXRsZSwgaW5wdXQuZGVzLCBpbnB1dC5kYXRlLCBpbnB1dC5wcmlvcml0eSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9yZW1vdmVQcm9tcHQoKSB7XHJcbiAgICBjb25zdCBuZXdJdGVtRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld0l0ZW0nKTtcclxuICAgIG5ld0l0ZW1EaXYucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb21wdHMnKSk7XHJcbiAgICBuZXdJdGVtRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgIF9lbmFibGVOZXdCdXR0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9zdG9yZUl0KGxpc3QsIG5ld0l0ZW0sIHByb2plY3RzKSB7XHJcbiAgICBsaXN0LmFkZEl0ZW0obmV3SXRlbSk7XHJcbiAgICBzaG93SXQobGlzdCwgcHJvamVjdHMpO1xyXG4gICAgc3RvcmVMb2NhbGx5KCkuc3RvcmVQcm9qZWN0KHByb2plY3RzKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3SXRlbUNvbnRyb2w7IiwiaW1wb3J0IGxpc3RDb250cm9sIGZyb20gXCIuL2xpc3RDb250cm9sXCI7XHJcbmltcG9ydCB0b0RvSXRlbSBmcm9tIFwiLi90b0RvSXRlbVwiO1xyXG5pbXBvcnQgdG9Eb0xpc3QgZnJvbSBcIi4vdG9Eb0xpc3RcIjtcclxuXHJcbmNvbnN0IGxvY2FsUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBzdG9yZVByb2plY3QocHJvamVjdHMpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb1Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMudG9TdHJpbmcoKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEZyb21Mb2NhbCgpIHtcclxuICAgICAgICBsZXQgbG9jYWxQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvUHJvamVjdHMnKTtcclxuICAgICAgICBpZiAobG9jYWxQcm9qZWN0cyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgbGlzdEFyciA9IF9nZXRMaXN0RnJvbVByb2plY3QobG9jYWxQcm9qZWN0cyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWVMaXN0ID0gX2dldEl0ZW1Gcm9tTGlzdChsaXN0QXJyKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdHMgPSBfY3JlYXRlUHJvamVjdHMobmFtZUxpc3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdHNcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge3N0b3JlUHJvamVjdCwgZ2V0RnJvbUxvY2FsfTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2dldExpc3RGcm9tUHJvamVjdChzdHIpIHtcclxuICAgIHJldHVybiBzdHIuc3Vic3RyaW5nKDEsIHN0ci5sZW5ndGggLSAxKS5zcGxpdCgnfCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZ2V0SXRlbUZyb21MaXN0KGxpc3RBcnIpIHtcclxuICAgIGNvbnN0IGl0ZW1BcnIgPSBbXTtcclxuICAgIGxpc3RBcnIuZm9yRWFjaChsaXN0ID0+IHtcclxuICAgICAgICBjb25zdCBuYW1lSXRlbSA9IGxpc3Quc3Vic3RyaW5nKDEsIGxpc3QubGVuZ3RoIC0gMSkuc3BsaXQoJzonKTtcclxuICAgICAgICBpdGVtQXJyLnB1c2gobmFtZUl0ZW0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gaXRlbUFycjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZVByb2plY3RzKG5hbWVMaXN0KSB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IGxpc3RDb250cm9sKCk7XHJcbiAgICBuYW1lTGlzdC5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpc3ROYW1lID0gcHJvamVjdFswXTtcclxuICAgICAgICBjb25zdCBuZXdMaXN0ID0gdG9Eb0xpc3QobGlzdE5hbWUpO1xyXG4gICAgICAgIGlmIChwcm9qZWN0WzFdICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAocHJvamVjdFsxXS5pbmNsdWRlcygnLicpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gcHJvamVjdFsxXS5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKGl0ZW1BdHRyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdMaXN0LmFkZEl0ZW0oX2NyZWF0ZU5ld0l0ZW0oaXRlbUF0dHIpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3TGlzdC5hZGRJdGVtKF9jcmVhdGVOZXdJdGVtKHByb2plY3RbMV0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9qZWN0cy5hZGRMaXN0KG5ld0xpc3QpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcHJvamVjdHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVOZXdJdGVtKGl0ZW1BdHRyKSB7XHJcbiAgICBjb25zdCBpdGVtID0gaXRlbUF0dHIuc3BsaXQoJywnKTtcclxuICAgIGNvbnN0IHRpdGxlID0gaXRlbVswXS5zdWJzdHJpbmcoMSk7XHJcbiAgICBjb25zdCBkZXMgPSBpdGVtWzFdO1xyXG4gICAgY29uc3QgZGF0ZSA9IGl0ZW1bMl07XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGl0ZW1bM107XHJcbiAgICBjb25zdCBzdGF0dXMgPSBpdGVtWzRdLnN1YnN0cmluZygwLCBpdGVtWzRdLmxlbmd0aCAtIDEpO1xyXG4gICAgY29uc3QgbmV3SXRlbSA9IHRvRG9JdGVtKHRpdGxlLCBkZXMsIGRhdGUsIHByaW9yaXR5KTtcclxuICAgIF9jaGVja1N0YXR1cyhuZXdJdGVtLCBzdGF0dXMpO1xyXG4gICAgcmV0dXJuIG5ld0l0ZW07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jaGVja1N0YXR1cyhpdGVtLCBzdGF0dXMpIHtcclxuICAgIGlmIChzdGF0dXMgIT0gaXRlbS5nZXRTdGF0dXMoKSlcclxuICAgICAgICBpdGVtLnNldFN0YXR1cygpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2NhbFByb2plY3RzOyIsImNvbnN0IHRvRG9JdGVtID0gKHRpdGxlLCBkZXMsIGRhdGUsIHByaW9yaXR5KSA9PiB7XHJcbiAgICBsZXQgbXlUaXRsZSA9IHRpdGxlO1xyXG4gICAgbGV0IG15RGVzID0gZGVzO1xyXG4gICAgbGV0IG15RGF0ZSA9IGRhdGU7XHJcbiAgICBsZXQgbXlQcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgbGV0IG15U3RhdHVzID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG15VGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHtcclxuICAgICAgICBteVRpdGxlID0gbmV3VGl0bGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGdldERlcyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbXlEZXM7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldERlcyA9IChuZXdEZXMpID0+IHtcclxuICAgICAgICBteURlcyA9IG5ld0RlcztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXREYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBteURhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0RGF0ZSA9IChuZXdEYXRlKSA9PiB7XHJcbiAgICAgICAgbXlEYXRlID0gbmV3RGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbXlQcmlvcml0eTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRQcmlvcml0eSA9IChuZXdQcmlvcml0eSkgPT4ge1xyXG4gICAgICAgIG15UHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRTdGF0dXMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG15U3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldFN0YXR1cyA9ICgpID0+IHtcclxuICAgICAgICBteVN0YXR1cyA9ICFteVN0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b1N0cmluZyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gYCR7bXlUaXRsZX0sJHtteURlc30sJHtteURhdGV9LCR7bXlQcmlvcml0eX0sJHtteVN0YXR1c31gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7Z2V0VGl0bGUsIHNldFRpdGxlLCBnZXREZXMsIHNldERlcywgc2V0RGF0ZSwgZ2V0RGF0ZSwgXHJcbiAgICAgICAgICAgICAgICBnZXRQcmlvcml0eSwgc2V0UHJpb3JpdHksIGdldFN0YXR1cywgc2V0U3RhdHVzLCB0b1N0cmluZ307XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b0RvSXRlbTsiLCIvLyBvYmplY3QgdGhhdCBzdG9yZSBhbGwgaXRlbVxyXG5cclxuY29uc3QgdG9Eb0xpc3QgPSAobmFtZSkgPT4ge1xyXG4gICAgbGV0IG15TmFtZSA9IG5hbWU7XHJcbiAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgIGxldCBtaWRJbmRleCA9IGl0ZW1zLmxlbmd0aDtcclxuICAgIGxldCBsb3dJbmRleCA9IGl0ZW1zLmxlbmd0aDtcclxuXHJcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBteU5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0TmFtZSA9IChuZXdOYW1lKSA9PiB7XHJcbiAgICAgICAgbXlOYW1lID0gbmV3TmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRMaXN0ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRJdGVtID0gKG5ld0l0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBwcmkgPSBuZXdJdGVtLmdldFByaW9yaXR5KCk7XHJcbiAgICAgICAgX3BsYWNlSXRlbUJ5UHJpb3JpdHkocHJpLCBuZXdJdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVJdGVtID0gKHRhcmdldCkgPT4ge1xyXG4gICAgICAgIF91cGRhdGVJbmRleChpdGVtc1t0YXJnZXRdLmdldFByaW9yaXR5KCkpO1xyXG4gICAgICAgIGl0ZW1zLnNwbGljZSh0YXJnZXQsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZUFsbCA9ICgpID0+IHtcclxuICAgICAgICBpdGVtcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dMaXN0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSBpdGVtLnRvU3RyaW5nKCkgKyAnXFxuJztcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9wbGFjZUl0ZW1CeVByaW9yaXR5KHByaSwgaXRlbSkge1xyXG4gICAgICAgIHN3aXRjaCAocHJpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3RvcCc6XHJcbiAgICAgICAgICAgICAgICBpdGVtcy5zcGxpY2UobWlkSW5kZXgsIDAsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgbWlkSW5kZXggKz0gMTtcclxuICAgICAgICAgICAgICAgIGxvd0luZGV4ICs9IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgICAgICAgICBjYXNlICdtaWRkbGUnOlxyXG4gICAgICAgICAgICAgICAgaXRlbXMuc3BsaWNlKGxvd0luZGV4LCAwLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgIGxvd0luZGV4ICs9IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgICAgICAgICBjYXNlICdsb3cnOlxyXG4gICAgICAgICAgICAgICAgaXRlbXMuc3BsaWNlKGl0ZW1zLmxlbmd0aCwgMCwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX3VwZGF0ZUluZGV4KHByaSkge1xyXG4gICAgICAgIHN3aXRjaCAocHJpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3RvcCc6XHJcbiAgICAgICAgICAgICAgICBtaWRJbmRleCAtPSAxO1xyXG4gICAgICAgICAgICAgICAgbG93SW5kZXggLT0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnbWlkZGxlJzpcclxuICAgICAgICAgICAgICAgIGxvd0luZGV4IC09IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgbGV0IGxpc3RTdHJpbmcgPSBgJHtteU5hbWV9OmA7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgbGlzdFN0cmluZyArPSAnWycgKyBpdGVtLnRvU3RyaW5nKCkgKyAnXSc7XHJcbiAgICAgICAgICAgIGxpc3RTdHJpbmcgKz0gJy4nO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxpc3RTdHJpbmcgPSBsaXN0U3RyaW5nLnN1YnN0cmluZygwLCBsaXN0U3RyaW5nLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIHJldHVybiBsaXN0U3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7Z2V0TmFtZSwgc2V0TmFtZSwgZ2V0TGlzdCwgYWRkSXRlbSwgcmVtb3ZlSXRlbSwgcmVtb3ZlQWxsLCBcclxuICAgICAgICAgICAgICAgIHNob3dMaXN0LCB0b1N0cmluZ307XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b0RvTGlzdDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL2NyZWF0ZU9uU2NyZWVuLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9