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


function showItem(item) {
    const list = document.querySelector('.list');
    list.appendChild(_appendItem(_getItem(item)));
}

function _appendItem (item) {
    const itemDiv = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'item');
    itemDiv.appendChild(item.title);
    itemDiv.appendChild(item.des);
    itemDiv.appendChild(item.date);
    itemDiv.appendChild(item.priority);
    itemDiv.appendChild(item.status);
    return itemDiv;
}

function _getItem(item) {
    const title = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', item.getTitle(), 'title');
    const des = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', item.getDes(), 'des');
    const date = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', item.getDate(), 'date');
    const priority = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', item.getPriorty(), 'priorty');
    const status = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', item.getStatus(), 'status');
    return {title, des, date, priority, status};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showItem);

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
/* harmony import */ var _createEle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createEle */ "./src/js/createEle.js");
/* harmony import */ var _toDoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoItem */ "./src/js/toDoItem.js");



const  newItemControl = () => {
    const showPrompt = () => {
        _displayPrompt();
    }

    const getItem = () => {
        _getItem();
    }

    return {showPrompt, getItem};
}

function _displayPrompt() {
    const content = document.querySelector('.content');
    const prompt_div = _appendPrompts(_promptQ());
    const fin_butt = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'Create', 'fin');
    fin_butt.addEventListener('click', _finClicked());
    content.appendChild(prompt_div);
    content.appendChild(fin_butt);
}

const _promptQ = () => {
    const askTitle = "";
    const askDes = "";
    const askDate = "";
    const askPriority = "";
    const askStatus = "";

    return {askTitle, askDes, askDate, askPriority, askStatus};
}

function _appendPrompts(prompts) {
    const prompt_div = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'prompts');
    const title_div = _createLableInput(prompts.askTitle, 'in_title');
    const des_div = _createLableInput(prompts.askDes, 'in_des');
    const date_div = _createLableInput(prompts.askDate, 'in_date');
    const priority_div = _createLableInput(prompts.askPriority, 'in_priority');
    const status_div = _createLableInput(prompts.askStatus, 'in_status');
    prompt_div.appendChild(title_div);
    prompt_div.appendChild(des_div);
    prompt_div.appendChild(date_div);
    prompt_div.appendChild(priority_div);
    prompt_div.appendChild(status_div);
    
    return prompt_div;
}

function _finClicked() {
    const input = _promptA();
    _removePrompt;
    // how to store it w/o global
}

function _createLableInput(question, className) {
    const q_div = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'q_div');
    const label = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('label', question, className);
    const answer = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('input', '', `${className}_ans`);
    q_div.appendChild(label);
    q_div.appendChild(answer);
    
    return q_div;
}

const _promptA = () => {
    const title = document.querySelector('.in_title_ans').value;
    const des = document.querySelector('.in_des_ans').value;
    const date = document.querySelector('.in_date_ans').value;
    const priority = document.querySelector('.in_priority_ans').value;
    const status = document.querySelector('.in_status_ans').value;

    return {title, des, date, priority, status};
}

function _removePrompt() {
    const content = document.querySelector('.content');
    content.removeChild(document.querySelector('.prompts'));
    content.removeChild(document.querySelector('.fin'));
}

function _getItem() {
    
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

    const setStatus = (newStatus) => {
        myStatus = newStatus;
    }

    const toString = () => {
        return `${myTitle}, ${myDate}, ${myPriority}`;
    }

    return {getTitle, getDes, setDes, setDate, getDate, 
                getPriorty, setPriorty, getStatus, setStatus, toString};
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

const toDoList = () => {
    let items = [];

    const getList = () => {
        return items;
    }

    const addItem = (newItem) => {
        items.push(newItem);
    }

    const removeItem = (target) => {
        for (let i = 0; i < items.length; i++) {
            if (items[i].getTitle() == target.getTitle()) {
                items.splice(i, 1);
            }
        }
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

    return {getList, addItem, removeItem, removeAll, showList};
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
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toDoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoItem */ "./src/js/toDoItem.js");
/* harmony import */ var _toDoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoList */ "./src/js/toDoList.js");
/* harmony import */ var _createOnScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createOnScreen */ "./src/js/createOnScreen.js");
/* harmony import */ var _newItemControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newItemControl */ "./src/js/newItemControl.js");





(function() {
    const list = (0,_toDoList__WEBPACK_IMPORTED_MODULE_1__["default"])();

    list.addItem((0,_toDoItem__WEBPACK_IMPORTED_MODULE_0__["default"])('test1', 'testing 1', 'today', 'low'));
    list.addItem((0,_toDoItem__WEBPACK_IMPORTED_MODULE_0__["default"])('test2', 'testing 2', 'today', 'low'));

    list.getList().forEach(item => {
        (0,_createOnScreen__WEBPACK_IMPORTED_MODULE_2__["default"])(item);
    });

    document.querySelector('.add').addEventListener('click', () => {
        const newItem = (0,_newItemControl__WEBPACK_IMPORTED_MODULE_3__["default"])();
        newItem.showPrompt();
        (0,_createOnScreen__WEBPACK_IMPORTED_MODULE_2__["default"])(newItem.getItem());
    });
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IjpbIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL2NyZWF0ZUVsZS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL2NyZWF0ZU9uU2NyZWVuLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvbmV3SXRlbUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy90b0RvSXRlbS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL3RvRG9MaXN0LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUVsZSAodHlwZSwgdmFsdWUsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgdGFyZ2V0LnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGUgOyIsIi8vIHNob3cgaXRlbSBhbmQgb3RoZXIgb24gaHRtbCBmaWxlXG4vLyBET00gc3R1ZmZcbmltcG9ydCBjcmVhdGVFbGUgZnJvbSBcIi4vY3JlYXRlRWxlXCI7XG5cbmZ1bmN0aW9uIHNob3dJdGVtKGl0ZW0pIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKF9hcHBlbmRJdGVtKF9nZXRJdGVtKGl0ZW0pKSk7XG59XG5cbmZ1bmN0aW9uIF9hcHBlbmRJdGVtIChpdGVtKSB7XG4gICAgY29uc3QgaXRlbURpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdpdGVtJyk7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtLnRpdGxlKTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW0uZGVzKTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW0uZGF0ZSk7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtLnByaW9yaXR5KTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW0uc3RhdHVzKTtcbiAgICByZXR1cm4gaXRlbURpdjtcbn1cblxuZnVuY3Rpb24gX2dldEl0ZW0oaXRlbSkge1xuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlKCdkaXYnLCBpdGVtLmdldFRpdGxlKCksICd0aXRsZScpO1xuICAgIGNvbnN0IGRlcyA9IGNyZWF0ZUVsZSgnZGl2JywgaXRlbS5nZXREZXMoKSwgJ2RlcycpO1xuICAgIGNvbnN0IGRhdGUgPSBjcmVhdGVFbGUoJ2RpdicsIGl0ZW0uZ2V0RGF0ZSgpLCAnZGF0ZScpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gY3JlYXRlRWxlKCdkaXYnLCBpdGVtLmdldFByaW9ydHkoKSwgJ3ByaW9ydHknKTtcbiAgICBjb25zdCBzdGF0dXMgPSBjcmVhdGVFbGUoJ2RpdicsIGl0ZW0uZ2V0U3RhdHVzKCksICdzdGF0dXMnKTtcbiAgICByZXR1cm4ge3RpdGxlLCBkZXMsIGRhdGUsIHByaW9yaXR5LCBzdGF0dXN9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaG93SXRlbTsiLCJpbXBvcnQgY3JlYXRlRWxlIGZyb20gXCIuL2NyZWF0ZUVsZVwiO1xuaW1wb3J0IHRvRG9JdGVtIGZyb20gXCIuL3RvRG9JdGVtXCI7XG5cbmNvbnN0ICBuZXdJdGVtQ29udHJvbCA9ICgpID0+IHtcbiAgICBjb25zdCBzaG93UHJvbXB0ID0gKCkgPT4ge1xuICAgICAgICBfZGlzcGxheVByb21wdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldEl0ZW0gPSAoKSA9PiB7XG4gICAgICAgIF9nZXRJdGVtKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtzaG93UHJvbXB0LCBnZXRJdGVtfTtcbn1cblxuZnVuY3Rpb24gX2Rpc3BsYXlQcm9tcHQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgcHJvbXB0X2RpdiA9IF9hcHBlbmRQcm9tcHRzKF9wcm9tcHRRKCkpO1xuICAgIGNvbnN0IGZpbl9idXR0ID0gY3JlYXRlRWxlKCdidXR0b24nLCAnQ3JlYXRlJywgJ2ZpbicpO1xuICAgIGZpbl9idXR0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX2ZpbkNsaWNrZWQoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9tcHRfZGl2KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZpbl9idXR0KTtcbn1cblxuY29uc3QgX3Byb21wdFEgPSAoKSA9PiB7XG4gICAgY29uc3QgYXNrVGl0bGUgPSBcIlwiO1xuICAgIGNvbnN0IGFza0RlcyA9IFwiXCI7XG4gICAgY29uc3QgYXNrRGF0ZSA9IFwiXCI7XG4gICAgY29uc3QgYXNrUHJpb3JpdHkgPSBcIlwiO1xuICAgIGNvbnN0IGFza1N0YXR1cyA9IFwiXCI7XG5cbiAgICByZXR1cm4ge2Fza1RpdGxlLCBhc2tEZXMsIGFza0RhdGUsIGFza1ByaW9yaXR5LCBhc2tTdGF0dXN9O1xufVxuXG5mdW5jdGlvbiBfYXBwZW5kUHJvbXB0cyhwcm9tcHRzKSB7XG4gICAgY29uc3QgcHJvbXB0X2RpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdwcm9tcHRzJyk7XG4gICAgY29uc3QgdGl0bGVfZGl2ID0gX2NyZWF0ZUxhYmxlSW5wdXQocHJvbXB0cy5hc2tUaXRsZSwgJ2luX3RpdGxlJyk7XG4gICAgY29uc3QgZGVzX2RpdiA9IF9jcmVhdGVMYWJsZUlucHV0KHByb21wdHMuYXNrRGVzLCAnaW5fZGVzJyk7XG4gICAgY29uc3QgZGF0ZV9kaXYgPSBfY3JlYXRlTGFibGVJbnB1dChwcm9tcHRzLmFza0RhdGUsICdpbl9kYXRlJyk7XG4gICAgY29uc3QgcHJpb3JpdHlfZGl2ID0gX2NyZWF0ZUxhYmxlSW5wdXQocHJvbXB0cy5hc2tQcmlvcml0eSwgJ2luX3ByaW9yaXR5Jyk7XG4gICAgY29uc3Qgc3RhdHVzX2RpdiA9IF9jcmVhdGVMYWJsZUlucHV0KHByb21wdHMuYXNrU3RhdHVzLCAnaW5fc3RhdHVzJyk7XG4gICAgcHJvbXB0X2Rpdi5hcHBlbmRDaGlsZCh0aXRsZV9kaXYpO1xuICAgIHByb21wdF9kaXYuYXBwZW5kQ2hpbGQoZGVzX2Rpdik7XG4gICAgcHJvbXB0X2Rpdi5hcHBlbmRDaGlsZChkYXRlX2Rpdik7XG4gICAgcHJvbXB0X2Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eV9kaXYpO1xuICAgIHByb21wdF9kaXYuYXBwZW5kQ2hpbGQoc3RhdHVzX2Rpdik7XG4gICAgXG4gICAgcmV0dXJuIHByb21wdF9kaXY7XG59XG5cbmZ1bmN0aW9uIF9maW5DbGlja2VkKCkge1xuICAgIGNvbnN0IGlucHV0ID0gX3Byb21wdEEoKTtcbiAgICBfcmVtb3ZlUHJvbXB0O1xuICAgIC8vIGhvdyB0byBzdG9yZSBpdCB3L28gZ2xvYmFsXG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVMYWJsZUlucHV0KHF1ZXN0aW9uLCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBxX2RpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdxX2RpdicpO1xuICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlRWxlKCdsYWJlbCcsIHF1ZXN0aW9uLCBjbGFzc05hbWUpO1xuICAgIGNvbnN0IGFuc3dlciA9IGNyZWF0ZUVsZSgnaW5wdXQnLCAnJywgYCR7Y2xhc3NOYW1lfV9hbnNgKTtcbiAgICBxX2Rpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgcV9kaXYuYXBwZW5kQ2hpbGQoYW5zd2VyKTtcbiAgICBcbiAgICByZXR1cm4gcV9kaXY7XG59XG5cbmNvbnN0IF9wcm9tcHRBID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX3RpdGxlX2FucycpLnZhbHVlO1xuICAgIGNvbnN0IGRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbl9kZXNfYW5zJykudmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbl9kYXRlX2FucycpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX3ByaW9yaXR5X2FucycpLnZhbHVlO1xuICAgIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbl9zdGF0dXNfYW5zJykudmFsdWU7XG5cbiAgICByZXR1cm4ge3RpdGxlLCBkZXMsIGRhdGUsIHByaW9yaXR5LCBzdGF0dXN9O1xufVxuXG5mdW5jdGlvbiBfcmVtb3ZlUHJvbXB0KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb21wdHMnKSk7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmluJykpO1xufVxuXG5mdW5jdGlvbiBfZ2V0SXRlbSgpIHtcbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3SXRlbUNvbnRyb2w7IiwiY29uc3QgdG9Eb0l0ZW0gPSAodGl0bGUsIGRlcywgZGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICBsZXQgbXlUaXRsZSA9IHRpdGxlO1xuICAgIGxldCBteURlcyA9IGRlcztcbiAgICBsZXQgbXlEYXRlID0gZGF0ZTtcbiAgICBsZXQgbXlQcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIGxldCBteVN0YXR1cyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBteVRpdGxlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBnZXREZXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBteURlcztcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0RGVzID0gKG5ld0RlcykgPT4ge1xuICAgICAgICBteURlcyA9IG5ld0RlcztcbiAgICB9XG5cbiAgICBjb25zdCBnZXREYXRlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbXlEYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldERhdGUgPSAobmV3RGF0ZSkgPT4ge1xuICAgICAgICBteURhdGUgPSBuZXdEYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFByaW9ydHkgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBteVByaW9yaXR5O1xuICAgIH1cblxuICAgIGNvbnN0IHNldFByaW9ydHkgPSAobmV3UHJpb3J0eSkgPT4ge1xuICAgICAgICBteVByaW9yaXR5ID0gbmV3UHJpb3J0eTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTdGF0dXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBteVN0YXR1cztcbiAgICB9XG5cbiAgICBjb25zdCBzZXRTdGF0dXMgPSAobmV3U3RhdHVzKSA9PiB7XG4gICAgICAgIG15U3RhdHVzID0gbmV3U3RhdHVzO1xuICAgIH1cblxuICAgIGNvbnN0IHRvU3RyaW5nID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYCR7bXlUaXRsZX0sICR7bXlEYXRlfSwgJHtteVByaW9yaXR5fWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtnZXRUaXRsZSwgZ2V0RGVzLCBzZXREZXMsIHNldERhdGUsIGdldERhdGUsIFxuICAgICAgICAgICAgICAgIGdldFByaW9ydHksIHNldFByaW9ydHksIGdldFN0YXR1cywgc2V0U3RhdHVzLCB0b1N0cmluZ307XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b0RvSXRlbTsiLCIvLyBvYmplY3QgdGhhdCBzdG9yZSBhbGwgaXRlbVxuXG5jb25zdCB0b0RvTGlzdCA9ICgpID0+IHtcbiAgICBsZXQgaXRlbXMgPSBbXTtcblxuICAgIGNvbnN0IGdldExpc3QgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG5cbiAgICBjb25zdCBhZGRJdGVtID0gKG5ld0l0ZW0pID0+IHtcbiAgICAgICAgaXRlbXMucHVzaChuZXdJdGVtKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVJdGVtID0gKHRhcmdldCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXRlbXNbaV0uZ2V0VGl0bGUoKSA9PSB0YXJnZXQuZ2V0VGl0bGUoKSkge1xuICAgICAgICAgICAgICAgIGl0ZW1zLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUFsbCA9ICgpID0+IHtcbiAgICAgICAgaXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBzaG93TGlzdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICByZXN1bHQgKz0gaXRlbS50b1N0cmluZygpICsgJ1xcbic7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiB7Z2V0TGlzdCwgYWRkSXRlbSwgcmVtb3ZlSXRlbSwgcmVtb3ZlQWxsLCBzaG93TGlzdH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b0RvTGlzdDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0b0RvSXRlbSBmcm9tIFwiLi90b0RvSXRlbVwiO1xuaW1wb3J0IHRvRG9MaXN0IGZyb20gXCIuL3RvRG9MaXN0XCI7XG5pbXBvcnQgc2hvd0l0IGZyb20gXCIuL2NyZWF0ZU9uU2NyZWVuXCI7XG5pbXBvcnQgbmV3SXRlbUNvbnRyb2wgZnJvbSBcIi4vbmV3SXRlbUNvbnRyb2xcIjtcblxuKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGxpc3QgPSB0b0RvTGlzdCgpO1xuXG4gICAgbGlzdC5hZGRJdGVtKHRvRG9JdGVtKCd0ZXN0MScsICd0ZXN0aW5nIDEnLCAndG9kYXknLCAnbG93JykpO1xuICAgIGxpc3QuYWRkSXRlbSh0b0RvSXRlbSgndGVzdDInLCAndGVzdGluZyAyJywgJ3RvZGF5JywgJ2xvdycpKTtcblxuICAgIGxpc3QuZ2V0TGlzdCgpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIHNob3dJdChpdGVtKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3SXRlbSA9IG5ld0l0ZW1Db250cm9sKCk7XG4gICAgICAgIG5ld0l0ZW0uc2hvd1Byb21wdCgpO1xuICAgICAgICBzaG93SXQobmV3SXRlbS5nZXRJdGVtKCkpO1xuICAgIH0pO1xufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=