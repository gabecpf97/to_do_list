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
    const deleteProject = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'Delete project', 'delPButt');
    deleteProject.addEventListener('click', () => _deleteProject(list, projects));
    return {newItemDiv, listDiv, addButt, editProjectButt, deleteProject};
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
    _displayHeader(list, projects);
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
    newItem.storeNewItem(list, projects);
}

function _changePName(list, projects) {
    const newName = prompt('What is the new name of the project?', list.getName());
    list.setName(newName);
    (0,_storeLocally__WEBPACK_IMPORTED_MODULE_4__["default"])().storeProject(projects);
    _clearAll();
    showProjects(projects);
}

function _deleteProject(list, projects) {
    projects.removeList(list.getName());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy9jcmVhdGVFbGUuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy9jcmVhdGVPblNjcmVlbi5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL2NyZWF0ZVByb21wdC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL2VkaXRJdGVtLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvbGlzdENvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy9uZXdJdGVtQ29udHJvbC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL3N0b3JlTG9jYWxseS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL3RvRG9JdGVtLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvdG9Eb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvc2hvd1Byb2plY3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUVsZSAodHlwZSwgdmFsdWUsIGNsYXNzTmFtZSkge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuICAgIHRhcmdldC50ZXh0Q29udGVudCA9IHZhbHVlO1xyXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZSA7IiwiLy8gc2hvdyBpdGVtIGFuZCBvdGhlciBvbiBodG1sIGZpbGVcclxuLy8gRE9NIHN0dWZmXHJcbmltcG9ydCBjcmVhdGVFbGUgZnJvbSBcIi4vY3JlYXRlRWxlXCI7XHJcbmltcG9ydCBlZGl0SXRlbSBmcm9tIFwiLi9lZGl0SXRlbVwiO1xyXG5pbXBvcnQgbmV3SXRlbUNvbnRyb2wgZnJvbSBcIi4vbmV3SXRlbUNvbnRyb2xcIjtcclxuaW1wb3J0IHN0b3JlTG9jYWxseSBmcm9tICcuL3N0b3JlTG9jYWxseSc7XHJcblxyXG5mdW5jdGlvbiBzaG93TGlzdChsaXN0LCBwcm9qZWN0cykge1xyXG4gICAgY29uc3QgbGlzdF9kaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpO1xyXG4gICAgX2NsZWFyU2NyZWVuKGxpc3RfZGl2KTtcclxuICAgIGlmIChsaXN0LmdldExpc3QoKVswXSA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgX3Nob3dFbXB0eShsaXN0X2RpdiwgbGlzdCwgcHJvamVjdHMpO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0LmdldExpc3QoKS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBfc2hvd0l0ZW0obGlzdF9kaXYsIGxpc3QsIGxpc3QuZ2V0TGlzdCgpW2ldLCBpLCBwcm9qZWN0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBfc2hvd0VtcHR5KGxpc3RfZGl2LCBsaXN0LCBwcm9qZWN0cykge1xyXG4gICAgY29uc3QgZW1wdHlEaXYgPSBjcmVhdGVFbGUoJ2RpdicsICdjbGljayBoZXJlIHRvIGFkZCBuZXcgaXRlbScsICdlbXB0eV9pdGVtJyk7XHJcbiAgICBsaXN0X2Rpdi5hcHBlbmRDaGlsZChlbXB0eURpdik7XHJcbiAgICBlbXB0eURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG5ld0l0ZW1Db250cm9sKCkuc3RvcmVOZXdJdGVtKGxpc3QsIHByb2plY3RzKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9zaG93SXRlbShsaXN0X2RpdiwgbGlzdCwgaXRlbSwgaSwgcHJvamVjdHMpIHtcclxuICAgIGxpc3RfZGl2LmFwcGVuZENoaWxkKF9hcHBlbmRJdGVtKGxpc3QsIF9nZXRJdGVtKGl0ZW0pLCBpdGVtLCBpLCBwcm9qZWN0cykpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfYXBwZW5kSXRlbSAobGlzdCwgaXRlbV9kaXYsIGl0ZW0sIGksIHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBpdGVtRGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgYGl0ZW1gKTtcclxuICAgIGl0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xyXG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChfY3JlYXRlQmFzaWNEaXYobGlzdCwgaXRlbV9kaXYsIGl0ZW0sIGksIHByb2plY3RzKSk7XHJcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKF9jcmVhdGVEZXMoaXRlbV9kaXYuZGVzKSk7XHJcbiAgICByZXR1cm4gaXRlbURpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUJhc2ljRGl2KGxpc3QsIGl0ZW1fZGl2LCBpdGVtLCBpLCBwcm9qZWN0cykge1xyXG4gICAgY29uc3QgYmFzaWNEaXYgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCAnYmFzaWMnKTtcclxuICAgIGJhc2ljRGl2LmFwcGVuZENoaWxkKGl0ZW1fZGl2LnN0YXR1cyk7XHJcbiAgICBiYXNpY0Rpdi5hcHBlbmRDaGlsZChpdGVtX2Rpdi50aXRsZSk7XHJcbiAgICBiYXNpY0Rpdi5hcHBlbmRDaGlsZChpdGVtX2Rpdi5kYXRlKTtcclxuICAgIGJhc2ljRGl2LmFwcGVuZENoaWxkKGl0ZW1fZGl2LnByaW9yaXR5KTtcclxuICAgIGJhc2ljRGl2LmFwcGVuZENoaWxkKF9jcmVhdGVFZGl0QnV0dChpdGVtLCBsaXN0LCBwcm9qZWN0cykpO1xyXG4gICAgYmFzaWNEaXYuYXBwZW5kQ2hpbGQoX2NyZWF0ZURlbGV0ZUJ1dHQobGlzdCwgaSwgcHJvamVjdHMpKTtcclxuICAgIGJhc2ljRGl2LmFwcGVuZENoaWxkKF9jcmVhdGVFeHBhbmRCdXR0KGl0ZW1fZGl2LmRlcykpO1xyXG4gICAgcmV0dXJuIGJhc2ljRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZ2V0SXRlbShpdGVtKSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZSgnZGl2JywgaXRlbS5nZXRUaXRsZSgpLCAndGl0bGUnKTtcclxuICAgIGNvbnN0IGRlcyA9IGNyZWF0ZUVsZSgnZGl2JywgaXRlbS5nZXREZXMoKSwgJ2RlcycpO1xyXG4gICAgY29uc3QgZGF0ZSA9IGNyZWF0ZUVsZSgnZGl2JywgaXRlbS5nZXREYXRlKCksICdkYXRlJyk7XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGNyZWF0ZUVsZSgnZGl2JywgaXRlbS5nZXRQcmlvcml0eSgpLCAncHJpb3JpdHknKTtcclxuICAgIGNvbnN0IHN0YXR1cyA9IF9jcmVhdGVTdGF0dXNEaXYoaXRlbSk7XHJcbiAgICByZXR1cm4ge3RpdGxlLCBkZXMsIGRhdGUsIHByaW9yaXR5LCBzdGF0dXN9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY2xlYXJTY3JlZW4obGlzdF9kaXYpIHtcclxuICAgIHdoaWxlKGxpc3RfZGl2LmZpcnN0Q2hpbGQgIT0gbnVsbClcclxuICAgICAgICBsaXN0X2Rpdi5yZW1vdmVDaGlsZChsaXN0X2Rpdi5maXJzdENoaWxkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZVN0YXR1c0RpdihpdGVtKSB7XHJcbiAgICBjb25zdCBzdGF0dXNEaXYgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCAnc3RhdHVzJyk7XHJcbiAgICBjb25zdCBzdGF0dXNMYWJlbCA9IF9jcmVhdGVMYWJlbCgpO1xyXG4gICAgY29uc3Qgc3RhdHVzQ2hlY2sgPSBfY3JlYXRlQ2hlY2soaXRlbSk7XHJcbiAgICBzdGF0dXNEaXYuYXBwZW5kQ2hpbGQoc3RhdHVzQ2hlY2spO1xyXG4gICAgcmV0dXJuIHN0YXR1c0RpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUxhYmVsKCkge1xyXG4gICAgY29uc3Qgc3RhdHVzTGFiZWwgPSBjcmVhdGVFbGUoJ2xhYmVsJywgJ0NvbXBsZXRlZCcsICdzdGF0dXNfbCcpO1xyXG4gICAgc3RhdHVzTGFiZWwuaHRtbEZvciA9ICdzdGF0dXMnO1xyXG4gICAgcmV0dXJuIHN0YXR1c0xhYmVsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlQ2hlY2soaXRlbSkge1xyXG4gICAgY29uc3Qgc3RhdHVzQ2hlY2sgPSBjcmVhdGVFbGUoJ2lucHV0JywgJycsICdzdGF0dXNfYycpO1xyXG4gICAgc3RhdHVzQ2hlY2sudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgICBzdGF0dXNDaGVjay5uYW1lID0gJ3N0YXR1cyc7XHJcbiAgICBpZiAoaXRlbS5nZXRTdGF0dXMoKSlcclxuICAgICAgICBzdGF0dXNDaGVjay5jaGVja2VkID0gdHJ1ZTtcclxuICAgIHN0YXR1c0NoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICBpdGVtLnNldFN0YXR1cygpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc3RhdHVzQ2hlY2s7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVEZWxldGVCdXR0KGxpc3QsIGksIHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBkZWxlQnV0dCA9IGNyZWF0ZUVsZSgnYnV0dG9uJywgJ0RlbGV0ZScsICdkZWxldGUnKTtcclxuICAgIGRlbGVCdXR0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBfZGVsZXRlRW50cnkobGlzdCwgaSwgcHJvamVjdHMpKTtcclxuICAgIHJldHVybiBkZWxlQnV0dDtcclxufVxyXG5cclxuZnVuY3Rpb24gX2RlbGV0ZUVudHJ5KGxpc3QsIGksIHByb2plY3RzKSB7XHJcbiAgICBfcmVtb3ZlSXRlbShsaXN0LCBpLCBwcm9qZWN0cyk7XHJcbiAgICBzaG93TGlzdChsaXN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3JlbW92ZUl0ZW0obGlzdCwgaSwgcHJvamVjdHMpIHtcclxuICAgIGNvbnN0IGxpc3RfZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKTtcclxuICAgIHdoaWxlIChsaXN0X2Rpdi5maXJzdENoaWxkICE9IG51bGwpIFxyXG4gICAgICAgIGxpc3RfZGl2LnJlbW92ZUNoaWxkKGxpc3RfZGl2LmZpcnN0Q2hpbGQpO1xyXG4gICAgbGlzdC5yZW1vdmVJdGVtKGkpO1xyXG4gICAgc3RvcmVMb2NhbGx5KCkuc3RvcmVQcm9qZWN0KHByb2plY3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUVkaXRCdXR0KGl0ZW0sIGxpc3QsIHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBlZGl0QnV0dCA9IGNyZWF0ZUVsZSgnYnV0dG9uJywgJ2VkaXQnLCAnZWRpdCcpO1xyXG4gICAgZWRpdEJ1dHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBlZGl0SXRlbSgpLmVkaXRJdChpdGVtLCBsaXN0LCBwcm9qZWN0cykpO1xyXG4gICAgcmV0dXJuIGVkaXRCdXR0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlRXhwYW5kQnV0dChkZXMpIHtcclxuICAgIGNvbnN0IGV4cGFuZEJ1dHQgPSBjcmVhdGVFbGUoJ2J1dHRvbicsICdleHBhbmQnLCAnZXhwYW5kJyk7XHJcbiAgICBleHBhbmRCdXR0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX3Nob3dEZXMoZXhwYW5kQnV0dCwgZGVzLnBhcmVudE5vZGUpKTtcclxuICAgIHJldHVybiBleHBhbmRCdXR0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfc2hvd0RlcyhleHBhbmRCdXR0LCBkZXNfY29udGFpbmVyKSB7XHJcbiAgICBpZiAoZGVzX2NvbnRhaW5lci5jbGFzc0xpc3RbMV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZGVzX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgZXhwYW5kQnV0dC50ZXh0Q29udGVudCA9ICdleHBhbmQnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkZXNfY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICBleHBhbmRCdXR0LnRleHRDb250ZW50ID0gJ2hpZGUnO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlRGVzKGRlc0Rpdikge1xyXG4gICAgY29uc3QgZGVzX2NvbnRhaW5lciA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdkZXNfZGl2Jyk7XHJcbiAgICBkZXNfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgIGRlc19jb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzRGl2KTtcclxuICAgIHJldHVybiBkZXNfY29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93TGlzdDsiLCJpbXBvcnQgY3JlYXRlRWxlIGZyb20gXCIuL2NyZWF0ZUVsZVwiO1xyXG5cclxuY29uc3QgY3JlYXRlUHJvbXB0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY3JlYXRlSXQgPSAobmFtZSkgPT4ge1xyXG4gICAgICAgIF9kaXNwbGF5UHJvbXB0KG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7Y3JlYXRlSXR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZGlzcGxheVByb21wdChuYW1lKSB7XHJcbiAgICBfc2hvd0Zvcm0oKTtcclxuICAgIGNvbnN0IGVsZW1lbnRzID0gX2NyZWF0ZVByb21wdEVsZShuYW1lKTtcclxuICAgIGVsZW1lbnRzLnByb21wdF9kaXYuYXBwZW5kQ2hpbGQoZWxlbWVudHMuYnV0dF9kaXYpO1xyXG4gICAgZWxlbWVudHMubmV3SXRlbURpdi5hcHBlbmRDaGlsZChlbGVtZW50cy5wcm9tcHRfZGl2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3Nob3dGb3JtKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm5ld0l0ZW1gKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVQcm9tcHRFbGUobmFtZSkge1xyXG4gICAgY29uc3QgbmV3SXRlbURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5uZXdJdGVtYCk7XHJcbiAgICBjb25zdCBwcm9tcHRfZGl2ID0gX2FwcGVuZFByb21wdHMoX3Byb21wdFEoKSk7XHJcbiAgICBjb25zdCBmaW5fYnV0dCA9IGNyZWF0ZUVsZSgnYnV0dG9uJywgbmFtZSwgJ2ZpbicpO1xyXG4gICAgY29uc3QgY2FuY2VsX2J1dHQgPSBjcmVhdGVFbGUoJ2J1dHRvbicsICdDYW5jZWwnLCAnY2FuY2VsJyk7XHJcbiAgICBjb25zdCBidXR0X2RpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdidXR0X2RpdicpO1xyXG4gICAgYnV0dF9kaXYuYXBwZW5kQ2hpbGQoZmluX2J1dHQpO1xyXG4gICAgYnV0dF9kaXYuYXBwZW5kQ2hpbGQoY2FuY2VsX2J1dHQpO1xyXG4gICAgX2NsaWNrVG9DYW5jZWwoY2FuY2VsX2J1dHQpO1xyXG4gICAgX2NsaWNrZWRPdXRzaWRlKCk7XHJcbiAgICByZXR1cm4ge25ld0l0ZW1EaXYsIHByb21wdF9kaXYsIGJ1dHRfZGl2fTtcclxufVxyXG5cclxuY29uc3QgX3Byb21wdFEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhc2tUaXRsZSA9IFwiVG8gZG8gaXRlbSBuYW1lXCI7XHJcbiAgICBjb25zdCBhc2tEZXMgPSBcInRvIGRvIGl0ZW0gZGVzY3JpcHRpb25cIjtcclxuICAgIGNvbnN0IGFza0RhdGUgPSBcIml0ZW0gZHVlIGRhdGVcIjtcclxuICAgIGNvbnN0IGFza1ByaW9yaXR5ID0gXCJpdGVtJ3MgcHJpb3JpdHlcIjtcclxuXHJcbiAgICByZXR1cm4ge2Fza1RpdGxlLCBhc2tEZXMsIGFza0RhdGUsIGFza1ByaW9yaXR5fTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2FwcGVuZFByb21wdHMocHJvbXB0cykge1xyXG4gICAgY29uc3QgcHJvbXB0X2RpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsIGBwcm9tcHRzYCk7XHJcbiAgICBjb25zdCB0aXRsZV9kaXYgPSBfY3JlYXRlTGFibGVJbnB1dChwcm9tcHRzLmFza1RpdGxlLCAnaW5wdXQnLCAnaW5fdGl0bGUnKTtcclxuICAgIGNvbnN0IGRlc19kaXYgPSBfY3JlYXRlTGFibGVJbnB1dChwcm9tcHRzLmFza0RlcywgJ3RleHRhcmVhJywgJ2luX2RlcycpO1xyXG4gICAgY29uc3QgZGF0ZV9kaXYgPSBfY3JlYXRlTGFibGVJbnB1dChwcm9tcHRzLmFza0RhdGUsICdpbnB1dCcsICdpbl9kYXRlJyk7XHJcbiAgICBjb25zdCBwcmlvcml0eV9kaXYgPSBfY3JlYXRlUHJpb3JpdHlEaXYocHJvbXB0cy5hc2tQcmlvcml0eSk7XHJcbiAgICBwcm9tcHRfZGl2LmFwcGVuZENoaWxkKHRpdGxlX2Rpdik7XHJcbiAgICBwcm9tcHRfZGl2LmFwcGVuZENoaWxkKGRlc19kaXYpO1xyXG4gICAgcHJvbXB0X2Rpdi5hcHBlbmRDaGlsZChkYXRlX2Rpdik7XHJcbiAgICBwcm9tcHRfZGl2LmFwcGVuZENoaWxkKHByaW9yaXR5X2Rpdik7XHJcbiAgICBcclxuICAgIHJldHVybiBwcm9tcHRfZGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlTGFibGVJbnB1dChxdWVzdGlvbiwgdHlwZSwgY2xhc3NOYW1lKSB7XHJcbiAgICBjb25zdCBxX2RpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdxX2RpdicpO1xyXG4gICAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGUoJ2xhYmVsJywgcXVlc3Rpb24sICdpbicpO1xyXG4gICAgY29uc3QgYW5zd2VyID0gY3JlYXRlRWxlKHR5cGUsICcnLCBgJHtjbGFzc05hbWV9X2Fuc2ApO1xyXG4gICAgcV9kaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gICAgcV9kaXYuYXBwZW5kQ2hpbGQoYW5zd2VyKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHFfZGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlUHJpb3JpdHlEaXYocXVlc3Rpb24pIHtcclxuICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgJ3FfZGl2Jyk7XHJcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gY3JlYXRlRWxlKCdsYWJlbCcsIHF1ZXN0aW9uLCAnaW4nKTtcclxuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gY3JlYXRlRWxlKCdzZWxlY3QnLCAnJywgJ2luX3ByaW9yaXR5X2FucycpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QubmFtZSA9ICdwcmlvcml0eSc7XHJcbiAgICBjb25zdCBvcHRpb25Ub3AgPSBfY3JlYXRlT3B0aW9uKCd0b3AnKTtcclxuICAgIGNvbnN0IG9wdGlvbk1pZCA9IF9jcmVhdGVPcHRpb24oJ21pZGRsZScpO1xyXG4gICAgY29uc3Qgb3B0aW9uTG93ID0gX2NyZWF0ZU9wdGlvbignbG93Jyk7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25Ub3ApO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uTWlkKTtcclxuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkxvdyk7XHJcbiAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcclxuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHByaW9yaXR5RGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlT3B0aW9uKHByaW9yaXR5KSB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBjcmVhdGVFbGUoJ29wdGlvbicsIHByaW9yaXR5LCBgaW5fb3B0aW9uc18ke3ByaW9yaXR5fWApO1xyXG4gICAgb3B0aW9uLnZhbHVlID0gcHJpb3JpdHk7XHJcbiAgICByZXR1cm4gb3B0aW9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY2xpY2tUb0NhbmNlbChidXR0KSB7XHJcbiAgICBidXR0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX3JlbW92ZVByb21wdCgpLCB7b25jZTogdHJ1ZX0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY2xpY2tlZE91dHNpZGUoKSB7XHJcbiAgICBjb25zdCBuZXdJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm5ld0l0ZW1gKTtcclxuICAgIG5ld0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQgPT0gZS50YXJnZXQpXHJcbiAgICAgICAgICAgIF9yZW1vdmVQcm9tcHQoKTtcclxuICAgIH0sIHtvbmNlOiB0cnVlfSk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBfcmVtb3ZlUHJvbXB0KCkge1xyXG4gICAgY29uc3QgbmV3SXRlbURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5uZXdJdGVtYCk7XHJcbiAgICBuZXdJdGVtRGl2LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9tcHRzYCkpO1xyXG4gICAgbmV3SXRlbURpdi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICBfZW5hYmxlTmV3QnV0dCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZW5hYmxlTmV3QnV0dCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5hZGRgKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvbXB0OyIsImltcG9ydCBzaG93TGlzdCBmcm9tIFwiLi9jcmVhdGVPblNjcmVlblwiO1xyXG5pbXBvcnQgY3JlYXRlUHJvbXB0IGZyb20gJy4vY3JlYXRlUHJvbXB0JztcclxuaW1wb3J0IHN0b3JlTG9jYWxseSBmcm9tICcuL3N0b3JlTG9jYWxseSc7XHJcblxyXG5jb25zdCBlZGl0SXRlbSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGVkaXRJdCA9IChpdGVtLCBsaXN0LCBwcm9qZWN0cykgPT4ge1xyXG4gICAgICAgIF9zaG93Rm9ybSgpO1xyXG4gICAgICAgIGNyZWF0ZVByb21wdCgpLmNyZWF0ZUl0KCdTQVZFJyk7XHJcbiAgICAgICAgX2ZpbGxEYXRhKGl0ZW0pO1xyXG4gICAgICAgIF9jaGFuZ2VEYXRhKGl0ZW0sIGxpc3QsIHByb2plY3RzKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7ZWRpdEl0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3Nob3dGb3JtKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm5ld0l0ZW1gKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9maWxsRGF0YShpdGVtKSB7XHJcbiAgICBsZXQgZmVpbGRzID0gX3Byb21wdEEoKTtcclxuICAgIGZlaWxkcy50aXRsZS52YWx1ZSA9IGl0ZW0uZ2V0VGl0bGUoKTtcclxuICAgIGZlaWxkcy5kZXMudmFsdWUgPSBpdGVtLmdldERlcygpO1xyXG4gICAgZmVpbGRzLmRhdGUudmFsdWUgPSBpdGVtLmdldERhdGUoKTtcclxuICAgIGZlaWxkcy5wcmlvcml0eS52YWx1ZSA9IGl0ZW0uZ2V0UHJpb3JpdHkoKTtcclxufVxyXG5cclxuY29uc3QgX3Byb21wdEEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbl90aXRsZV9hbnMnKTtcclxuICAgIGNvbnN0IGRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbl9kZXNfYW5zJyk7XHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX2RhdGVfYW5zJyk7XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbl9wcmlvcml0eV9hbnMnKTtcclxuXHJcbiAgICByZXR1cm4ge3RpdGxlLCBkZXMsIGRhdGUsIHByaW9yaXR5fTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NoYW5nZURhdGEoaXRlbSwgbGlzdCwgcHJvamVjdHMpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+ICB7XHJcbiAgICAgICAgX3N0b3JlQ2hhbmdlcyhpdGVtKTtcclxuICAgICAgICBfcmVtb3ZlUHJvbXB0KCk7XHJcbiAgICAgICAgaWYgKGxpc3QuZ2V0TGlzdCgpICE9IG51bGwpXHJcbiAgICAgICAgICAgIHNob3dMaXN0KGxpc3QpO1xyXG4gICAgICAgIHN0b3JlTG9jYWxseSgpLnN0b3JlUHJvamVjdChwcm9qZWN0cyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3N0b3JlQ2hhbmdlcyhpdGVtKSB7XHJcbiAgICBsZXQgaW5wdXQgPSBfcHJvbXB0QSgpO1xyXG4gICAgaXRlbS5zZXRUaXRsZShpbnB1dC50aXRsZS52YWx1ZSk7XHJcbiAgICBpdGVtLnNldERlcyhpbnB1dC5kZXMudmFsdWUpO1xyXG4gICAgaXRlbS5zZXREYXRlKGlucHV0LmRhdGUudmFsdWUpO1xyXG4gICAgaXRlbS5zZXRQcmlvcml0eShpbnB1dC5wcmlvcml0eS52YWx1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9yZW1vdmVQcm9tcHQoKSB7XHJcbiAgICBjb25zdCBuZXdJdGVtRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm5ld0l0ZW1gKTtcclxuICAgIG5ld0l0ZW1EaXYucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb21wdHNgKSk7XHJcbiAgICBuZXdJdGVtRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZWRpdEl0ZW07IiwiY29uc3QgbGlzdENvbnRyb2wgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IFtdO1xyXG5cclxuICAgIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBwcm9qZWN0cztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgICBwcm9qZWN0cy5wdXNoKGxpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvU3RyaW5nID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBwcm9qZWN0U3RyaW5nID0gXCJcIjtcclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKGxpc3QgPT4ge1xyXG4gICAgICAgICAgICBwcm9qZWN0U3RyaW5nICs9ICd7JyArIGxpc3QudG9TdHJpbmcoKSArICd9fCc7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBwcm9qZWN0U3RyaW5nID0gcHJvamVjdFN0cmluZy5zdWJzdHJpbmcoMCwgcHJvamVjdFN0cmluZy5sZW5ndGggLSAxKTtcclxuICAgICAgICByZXR1cm4gcHJvamVjdFN0cmluZztcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgcmVtb3ZlTGlzdCA9IChsaXN0TmFtZSkgPT4ge1xyXG4gICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAocHJvamVjdHNbaV0uZ2V0TmFtZSgpID09IGxpc3ROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7Z2V0UHJvamVjdHMsIGFkZExpc3QsIHRvU3RyaW5nLCByZW1vdmVMaXN0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGlzdENvbnRyb2w7IiwiaW1wb3J0IHRvRG9JdGVtIGZyb20gXCIuL3RvRG9JdGVtXCI7XHJcbmltcG9ydCBzaG93SXQgZnJvbSBcIi4vY3JlYXRlT25TY3JlZW5cIjtcclxuaW1wb3J0IGNyZWF0ZVByb21wdCBmcm9tIFwiLi9jcmVhdGVQcm9tcHRcIjtcclxuaW1wb3J0IHN0b3JlTG9jYWxseSBmcm9tIFwiLi9zdG9yZUxvY2FsbHlcIjtcclxuXHJcbmNvbnN0ICBuZXdJdGVtQ29udHJvbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlTmV3SXRlbSA9IChsaXN0LCBwcm9qZWN0cykgPT4ge1xyXG4gICAgICAgIF9kaXNhYmxlTmV3QnV0dCgpO1xyXG4gICAgICAgIGNyZWF0ZVByb21wdCgpLmNyZWF0ZUl0KCdhZGQnKTtcclxuICAgICAgICBfc3RvcmVJdGVtKGxpc3QsIHByb2plY3RzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge3N0b3JlTmV3SXRlbX07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9kaXNhYmxlTmV3QnV0dCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5hZGRgKS5kaXNhYmxlZCA9IHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9lbmFibGVOZXdCdXR0KCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmFkZGApLmRpc2FibGVkID0gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9zdG9yZUl0ZW0gKGxpc3QsIHByb2plY3RzKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmluJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3SXRlbSA9IF9nZXRJdGVtKCk7XHJcbiAgICAgICAgX3N0b3JlSXQobGlzdCwgbmV3SXRlbSwgcHJvamVjdHMpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9nZXRJdGVtKCkge1xyXG4gICAgbGV0IGlucHV0ID0gX3Byb21wdEEoKTtcclxuICAgIF9yZW1vdmVQcm9tcHQoKTtcclxuICAgIHJldHVybiBpbnB1dFRvSXRlbShpbnB1dCk7XHJcbn1cclxuXHJcbmNvbnN0IF9wcm9tcHRBID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5fdGl0bGVfYW5zJykudmFsdWU7XHJcbiAgICBjb25zdCBkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5fZGVzX2FucycpLnZhbHVlO1xyXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbl9kYXRlX2FucycpLnZhbHVlO1xyXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5fcHJpb3JpdHlfYW5zJykudmFsdWU7XHJcblxyXG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzLCBkYXRlLCBwcmlvcml0eX07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlucHV0VG9JdGVtKGlucHV0KSB7XHJcbiAgICByZXR1cm4gdG9Eb0l0ZW0oaW5wdXQudGl0bGUsIGlucHV0LmRlcywgaW5wdXQuZGF0ZSwgaW5wdXQucHJpb3JpdHkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfcmVtb3ZlUHJvbXB0KCkge1xyXG4gICAgY29uc3QgbmV3SXRlbURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdJdGVtJyk7XHJcbiAgICBuZXdJdGVtRGl2LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9tcHRzJykpO1xyXG4gICAgbmV3SXRlbURpdi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICBfZW5hYmxlTmV3QnV0dCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfc3RvcmVJdChsaXN0LCBuZXdJdGVtLCBwcm9qZWN0cykge1xyXG4gICAgbGlzdC5hZGRJdGVtKG5ld0l0ZW0pO1xyXG4gICAgc2hvd0l0KGxpc3QsIHByb2plY3RzKTtcclxuICAgIHN0b3JlTG9jYWxseSgpLnN0b3JlUHJvamVjdChwcm9qZWN0cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ld0l0ZW1Db250cm9sOyIsImltcG9ydCBsaXN0Q29udHJvbCBmcm9tIFwiLi9saXN0Q29udHJvbFwiO1xyXG5pbXBvcnQgdG9Eb0l0ZW0gZnJvbSBcIi4vdG9Eb0l0ZW1cIjtcclxuaW1wb3J0IHRvRG9MaXN0IGZyb20gXCIuL3RvRG9MaXN0XCI7XHJcblxyXG5jb25zdCBsb2NhbFByb2plY3RzID0gKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gc3RvcmVQcm9qZWN0KHByb2plY3RzKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9Qcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzLnRvU3RyaW5nKCkpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRGcm9tTG9jYWwoKSB7XHJcbiAgICAgICAgbGV0IGxvY2FsUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb1Byb2plY3RzJyk7XHJcbiAgICAgICAgaWYgKGxvY2FsUHJvamVjdHMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3RBcnIgPSBfZ2V0TGlzdEZyb21Qcm9qZWN0KGxvY2FsUHJvamVjdHMpO1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lTGlzdCA9IF9nZXRJdGVtRnJvbUxpc3QobGlzdEFycik7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RzID0gX2NyZWF0ZVByb2plY3RzKG5hbWVMaXN0KTtcclxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtzdG9yZVByb2plY3QsIGdldEZyb21Mb2NhbH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9nZXRMaXN0RnJvbVByb2plY3Qoc3RyKSB7XHJcbiAgICByZXR1cm4gc3RyLnN1YnN0cmluZygxLCBzdHIubGVuZ3RoIC0gMSkuc3BsaXQoJ3wnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2dldEl0ZW1Gcm9tTGlzdChsaXN0QXJyKSB7XHJcbiAgICBjb25zdCBpdGVtQXJyID0gW107XHJcbiAgICBsaXN0QXJyLmZvckVhY2gobGlzdCA9PiB7XHJcbiAgICAgICAgY29uc3QgbmFtZUl0ZW0gPSBsaXN0LnN1YnN0cmluZygxLCBsaXN0Lmxlbmd0aCAtIDEpLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgaXRlbUFyci5wdXNoKG5hbWVJdGVtKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGl0ZW1BcnI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVQcm9qZWN0cyhuYW1lTGlzdCkge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSBsaXN0Q29udHJvbCgpO1xyXG4gICAgbmFtZUxpc3QuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICBjb25zdCBsaXN0TmFtZSA9IHByb2plY3RbMF07XHJcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IHRvRG9MaXN0KGxpc3ROYW1lKTtcclxuICAgICAgICBpZiAocHJvamVjdFsxXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKHByb2plY3RbMV0uaW5jbHVkZXMoJy4nKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IHByb2plY3RbMV0uc3BsaXQoJy4nKTtcclxuICAgICAgICAgICAgICAgIGxpc3QuZm9yRWFjaChpdGVtQXR0ciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TGlzdC5hZGRJdGVtKF9jcmVhdGVOZXdJdGVtKGl0ZW1BdHRyKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld0xpc3QuYWRkSXRlbShfY3JlYXRlTmV3SXRlbShwcm9qZWN0WzFdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvamVjdHMuYWRkTGlzdChuZXdMaXN0KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHByb2plY3RzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlTmV3SXRlbShpdGVtQXR0cikge1xyXG4gICAgY29uc3QgaXRlbSA9IGl0ZW1BdHRyLnNwbGl0KCcsJyk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGl0ZW1bMF0uc3Vic3RyaW5nKDEpO1xyXG4gICAgY29uc3QgZGVzID0gaXRlbVsxXTtcclxuICAgIGNvbnN0IGRhdGUgPSBpdGVtWzJdO1xyXG4gICAgY29uc3QgcHJpb3JpdHkgPSBpdGVtWzNdO1xyXG4gICAgY29uc3Qgc3RhdHVzID0gaXRlbVs0XS5zdWJzdHJpbmcoMCwgaXRlbVs0XS5sZW5ndGggLSAxKTtcclxuICAgIGNvbnN0IG5ld0l0ZW0gPSB0b0RvSXRlbSh0aXRsZSwgZGVzLCBkYXRlLCBwcmlvcml0eSk7XHJcbiAgICBfY2hlY2tTdGF0dXMobmV3SXRlbSwgc3RhdHVzKTtcclxuICAgIHJldHVybiBuZXdJdGVtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY2hlY2tTdGF0dXMoaXRlbSwgc3RhdHVzKSB7XHJcbiAgICBpZiAoc3RhdHVzICE9IGl0ZW0uZ2V0U3RhdHVzKCkpXHJcbiAgICAgICAgaXRlbS5zZXRTdGF0dXMoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9jYWxQcm9qZWN0czsiLCJjb25zdCB0b0RvSXRlbSA9ICh0aXRsZSwgZGVzLCBkYXRlLCBwcmlvcml0eSkgPT4ge1xyXG4gICAgbGV0IG15VGl0bGUgPSB0aXRsZTtcclxuICAgIGxldCBteURlcyA9IGRlcztcclxuICAgIGxldCBteURhdGUgPSBkYXRlO1xyXG4gICAgbGV0IG15UHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIGxldCBteVN0YXR1cyA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBteVRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XHJcbiAgICAgICAgbXlUaXRsZSA9IG5ld1RpdGxlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBnZXREZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG15RGVzO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZXREZXMgPSAobmV3RGVzKSA9PiB7XHJcbiAgICAgICAgbXlEZXMgPSBuZXdEZXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbXlEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldERhdGUgPSAobmV3RGF0ZSkgPT4ge1xyXG4gICAgICAgIG15RGF0ZSA9IG5ld0RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG15UHJpb3JpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0UHJpb3JpdHkgPSAobmV3UHJpb3JpdHkpID0+IHtcclxuICAgICAgICBteVByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0U3RhdHVzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBteVN0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRTdGF0dXMgPSAoKSA9PiB7XHJcbiAgICAgICAgbXlTdGF0dXMgPSAhbXlTdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGAke215VGl0bGV9LCR7bXlEZXN9LCR7bXlEYXRlfSwke215UHJpb3JpdHl9LCR7bXlTdGF0dXN9YDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2dldFRpdGxlLCBzZXRUaXRsZSwgZ2V0RGVzLCBzZXREZXMsIHNldERhdGUsIGdldERhdGUsIFxyXG4gICAgICAgICAgICAgICAgZ2V0UHJpb3JpdHksIHNldFByaW9yaXR5LCBnZXRTdGF0dXMsIHNldFN0YXR1cywgdG9TdHJpbmd9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9Eb0l0ZW07IiwiLy8gb2JqZWN0IHRoYXQgc3RvcmUgYWxsIGl0ZW1cclxuXHJcbmNvbnN0IHRvRG9MaXN0ID0gKG5hbWUpID0+IHtcclxuICAgIGxldCBteU5hbWUgPSBuYW1lO1xyXG4gICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICBsZXQgbWlkSW5kZXggPSBpdGVtcy5sZW5ndGg7XHJcbiAgICBsZXQgbG93SW5kZXggPSBpdGVtcy5sZW5ndGg7XHJcblxyXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbXlOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldE5hbWUgPSAobmV3TmFtZSkgPT4ge1xyXG4gICAgICAgIG15TmFtZSA9IG5ld05hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0TGlzdCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkSXRlbSA9IChuZXdJdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJpID0gbmV3SXRlbS5nZXRQcmlvcml0eSgpO1xyXG4gICAgICAgIF9wbGFjZUl0ZW1CeVByaW9yaXR5KHByaSwgbmV3SXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlSXRlbSA9ICh0YXJnZXQpID0+IHtcclxuICAgICAgICBfdXBkYXRlSW5kZXgoaXRlbXNbdGFyZ2V0XS5nZXRQcmlvcml0eSgpKTtcclxuICAgICAgICBpdGVtcy5zcGxpY2UodGFyZ2V0LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVBbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgaXRlbXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93TGlzdCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gXCJcIjtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gaXRlbS50b1N0cmluZygpICsgJ1xcbic7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfcGxhY2VJdGVtQnlQcmlvcml0eShwcmksIGl0ZW0pIHtcclxuICAgICAgICBzd2l0Y2ggKHByaSkge1xyXG4gICAgICAgICAgICBjYXNlICd0b3AnOlxyXG4gICAgICAgICAgICAgICAgaXRlbXMuc3BsaWNlKG1pZEluZGV4LCAwLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgIG1pZEluZGV4ICs9IDE7XHJcbiAgICAgICAgICAgICAgICBsb3dJbmRleCArPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgY2FzZSAnbWlkZGxlJzpcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnNwbGljZShsb3dJbmRleCwgMCwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICBsb3dJbmRleCArPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgY2FzZSAnbG93JzpcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnNwbGljZShpdGVtcy5sZW5ndGgsIDAsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF91cGRhdGVJbmRleChwcmkpIHtcclxuICAgICAgICBzd2l0Y2ggKHByaSkge1xyXG4gICAgICAgICAgICBjYXNlICd0b3AnOlxyXG4gICAgICAgICAgICAgICAgbWlkSW5kZXggLT0gMTtcclxuICAgICAgICAgICAgICAgIGxvd0luZGV4IC09IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ21pZGRsZSc6XHJcbiAgICAgICAgICAgICAgICBsb3dJbmRleCAtPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIGxldCBsaXN0U3RyaW5nID0gYCR7bXlOYW1lfTpgO1xyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGxpc3RTdHJpbmcgKz0gJ1snICsgaXRlbS50b1N0cmluZygpICsgJ10nO1xyXG4gICAgICAgICAgICBsaXN0U3RyaW5nICs9ICcuJztcclxuICAgICAgICB9KTtcclxuICAgICAgICBsaXN0U3RyaW5nID0gbGlzdFN0cmluZy5zdWJzdHJpbmcoMCwgbGlzdFN0cmluZy5sZW5ndGggLSAxKTtcclxuICAgICAgICByZXR1cm4gbGlzdFN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2dldE5hbWUsIHNldE5hbWUsIGdldExpc3QsIGFkZEl0ZW0sIHJlbW92ZUl0ZW0sIHJlbW92ZUFsbCwgXHJcbiAgICAgICAgICAgICAgICBzaG93TGlzdCwgdG9TdHJpbmd9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9Eb0xpc3Q7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlRWxlIGZyb20gXCIuL2NyZWF0ZUVsZVwiO1xyXG5pbXBvcnQgc2hvd0xpc3QgZnJvbSBcIi4vY3JlYXRlT25TY3JlZW5cIjtcclxuaW1wb3J0IG5ld0l0ZW1Db250cm9sIGZyb20gJy4vbmV3SXRlbUNvbnRyb2wnO1xyXG5pbXBvcnQgdG9Eb0xpc3QgZnJvbSBcIi4vdG9Eb0xpc3RcIjtcclxuaW1wb3J0IHN0b3JlTG9jYWxseSBmcm9tICcuL3N0b3JlTG9jYWxseSc7XHJcblxyXG5mdW5jdGlvbiBzaG93UHJvamVjdHMocHJvamVjdHMpIHtcclxuICAgIF9jcmVhdGVIZWFkZXIocHJvamVjdHMpO1xyXG4gICAgcHJvamVjdHMuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKGxpc3QgPT4ge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdERpdicpID09IG51bGwpXHJcbiAgICAgICAgICAgIF9kaXNwbGF5SGVhZGVyKGxpc3QsIHByb2plY3RzKTtcclxuICAgICAgICBzaG93TGlzdChsaXN0LCBwcm9qZWN0cyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUhlYWRlcihwcm9qZWN0cykge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCAnaGVhZGVyRGl2Jyk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoX2NyZWF0ZVRhYihwcm9qZWN0cykpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZGlzcGxheUhlYWRlcihsaXN0LCBwcm9qZWN0cykge1xyXG4gICAgY29uc3QgZWxlID0gX2NyZWF0ZUxpc3RIZWFkZXIobGlzdCwgcHJvamVjdHMpO1xyXG4gICAgX2FwcGVuZEVsZShlbGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlTGlzdEhlYWRlcihsaXN0LCBwcm9qZWN0cykge1xyXG4gICAgY29uc3QgbmFtZSA9IGxpc3QuZ2V0TmFtZSgpLnJlcGxhY2UoJyAnLCAnXycpO1xyXG4gICAgY29uc3QgYWRkQnV0dCA9IGNyZWF0ZUVsZSgnYnV0dG9uJywgJ2FkZCBpdGVtJywgYGFkZCR7bmFtZX1gKTtcclxuICAgIGFkZEJ1dHQuY2xhc3NMaXN0LmFkZCgnYWRkJyk7XHJcbiAgICBhZGRCdXR0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX2NsaWNrVG9BZGQobGlzdCwgcHJvamVjdHMpKTtcclxuICAgIGNvbnN0IG5ld0l0ZW1EaXYgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCBgbmV3SXRlbWApO1xyXG4gICAgbmV3SXRlbURpdi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICBjb25zdCBsaXN0RGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgYGxpc3RgKTtcclxuICAgIGNvbnN0IGVkaXRQcm9qZWN0QnV0dCA9IGNyZWF0ZUVsZSgnYnV0dG9uJywgJ0NoYW5nZSBQcm9qZWN0IE5hbWUnLCAnY2hhbmdlUE5hbWUnKTtcclxuICAgIGVkaXRQcm9qZWN0QnV0dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9jaGFuZ2VQTmFtZShsaXN0LCBwcm9qZWN0cykpO1xyXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IGNyZWF0ZUVsZSgnYnV0dG9uJywgJ0RlbGV0ZSBwcm9qZWN0JywgJ2RlbFBCdXR0Jyk7XHJcbiAgICBkZWxldGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX2RlbGV0ZVByb2plY3QobGlzdCwgcHJvamVjdHMpKTtcclxuICAgIHJldHVybiB7bmV3SXRlbURpdiwgbGlzdERpdiwgYWRkQnV0dCwgZWRpdFByb2plY3RCdXR0LCBkZWxldGVQcm9qZWN0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZVRhYihwcm9qZWN0cykge1xyXG4gICAgY29uc3QgdGFiRGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgJ3RhYicpO1xyXG4gICAgcHJvamVjdHMuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKGxpc3QgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBsaXN0LmdldE5hbWUoKTtcclxuICAgICAgICBjb25zdCBuYW1lQnV0dCA9IGNyZWF0ZUVsZSgnYnV0dG9uJywgYCR7bmFtZX1gLCBgcHJvamVjdF9idXR0YCk7XHJcbiAgICAgICAgbmFtZUJ1dHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfY2hhbmdlVG9Qcm9qZWN0KGxpc3QsIHByb2plY3RzKSk7XHJcbiAgICAgICAgdGFiRGl2LmFwcGVuZENoaWxkKG5hbWVCdXR0KTtcclxuICAgIH0pXHJcbiAgICB0YWJEaXYuYXBwZW5kQ2hpbGQoX2NyZWF0ZUFkZFByb2plY3RCdXR0KHByb2plY3RzKSk7XHJcbiAgICByZXR1cm4gdGFiRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY2hhbmdlVG9Qcm9qZWN0KGxpc3QsIHByb2plY3RzKSB7XHJcbiAgICBfY2xlYXJMaXN0KCk7XHJcbiAgICBfZGlzcGxheUhlYWRlcihsaXN0LCBwcm9qZWN0cyk7XHJcbiAgICBzaG93TGlzdChsaXN0LCBwcm9qZWN0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jbGVhckxpc3QoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3REaXYnKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVBZGRQcm9qZWN0QnV0dChwcm9qZWN0cykge1xyXG4gICAgY29uc3QgYWRkQnV0dCA9IGNyZWF0ZUVsZSgnYnV0dG9uJywgJ25ldyBQcm9qZWN0JywgJ2FkZF9wcm9qZWN0Jyk7XHJcbiAgICBhZGRCdXR0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX2FkZFByb2plY3QocHJvamVjdHMpKTtcclxuICAgIHJldHVybiBhZGRCdXR0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfYWRkUHJvamVjdChwcm9qZWN0cykge1xyXG4gICAgY29uc3QgcHJval9wcm9tcHQgPSBwcm9tcHQoJ1Byb2plY3QgTmFtZTonLCAnTmV3X3Byb2plY3QnKTtcclxuICAgIGNvbnN0IG5ld0xpc3QgPSB0b0RvTGlzdChwcm9qX3Byb21wdCk7XHJcbiAgICBwcm9qZWN0cy5hZGRMaXN0KG5ld0xpc3QpO1xyXG4gICAgc3RvcmVMb2NhbGx5KCkuc3RvcmVQcm9qZWN0KHByb2plY3RzKTtcclxuICAgIF9jbGVhckhlYWRlcigpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlckRpdicpLmFwcGVuZENoaWxkKF9jcmVhdGVUYWIocHJvamVjdHMpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NsZWFySGVhZGVyKCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlckRpdicpO1xyXG4gICAgd2hpbGUgKGhlYWRlci5maXJzdENoaWxkICE9IG51bGwpXHJcbiAgICAgICAgaGVhZGVyLnJlbW92ZUNoaWxkKGhlYWRlci5maXJzdENoaWxkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NsaWNrVG9BZGQobGlzdCwgcHJvamVjdHMpIHtcclxuICAgIGNvbnN0IG5ld0l0ZW0gPSBuZXdJdGVtQ29udHJvbCgpO1xyXG4gICAgbmV3SXRlbS5zdG9yZU5ld0l0ZW0obGlzdCwgcHJvamVjdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY2hhbmdlUE5hbWUobGlzdCwgcHJvamVjdHMpIHtcclxuICAgIGNvbnN0IG5ld05hbWUgPSBwcm9tcHQoJ1doYXQgaXMgdGhlIG5ldyBuYW1lIG9mIHRoZSBwcm9qZWN0PycsIGxpc3QuZ2V0TmFtZSgpKTtcclxuICAgIGxpc3Quc2V0TmFtZShuZXdOYW1lKTtcclxuICAgIHN0b3JlTG9jYWxseSgpLnN0b3JlUHJvamVjdChwcm9qZWN0cyk7XHJcbiAgICBfY2xlYXJBbGwoKTtcclxuICAgIHNob3dQcm9qZWN0cyhwcm9qZWN0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9kZWxldGVQcm9qZWN0KGxpc3QsIHByb2plY3RzKSB7XHJcbiAgICBwcm9qZWN0cy5yZW1vdmVMaXN0KGxpc3QuZ2V0TmFtZSgpKTtcclxuICAgIHN0b3JlTG9jYWxseSgpLnN0b3JlUHJvamVjdChwcm9qZWN0cyk7XHJcbiAgICBfY2xlYXJBbGwoKTtcclxuICAgIHNob3dQcm9qZWN0cyhwcm9qZWN0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jbGVhckFsbCgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCAhPSBudWxsKVxyXG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2FwcGVuZEVsZSAoZWxlKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICAgIGNvbnN0IGxpc3REaXYgPSBjcmVhdGVFbGUoJ2RpdicsICcnLCAnbGlzdERpdicpO1xyXG4gICAgZm9yIChjb25zdCBlbGVtZW50IGluIGVsZSkge1xyXG4gICAgICAgIGxpc3REaXYuYXBwZW5kQ2hpbGQoZWxlW2VsZW1lbnRdKTtcclxuICAgIH1cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGlzdERpdik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dQcm9qZWN0czsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=