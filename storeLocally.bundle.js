/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  !*** ./src/js/storeLocally.js ***!
  \********************************/
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
    if (status != item.getStatus().toString())
        item.setStatus();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localProjects);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGFBQWEsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvbGlzdENvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy90b0RvSXRlbS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL3RvRG9MaXN0LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL3N0b3JlTG9jYWxseS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsaXN0Q29udHJvbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RzID0gW107XHJcblxyXG4gICAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZExpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICAgIHByb2plY3RzLnB1c2gobGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHByb2plY3RTdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIHByb2plY3RzLmZvckVhY2gobGlzdCA9PiB7XHJcbiAgICAgICAgICAgIHByb2plY3RTdHJpbmcgKz0gJ3snICsgbGlzdC50b1N0cmluZygpICsgJ318JztcclxuICAgICAgICB9KVxyXG4gICAgICAgIHByb2plY3RTdHJpbmcgPSBwcm9qZWN0U3RyaW5nLnN1YnN0cmluZygwLCBwcm9qZWN0U3RyaW5nLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIHJldHVybiBwcm9qZWN0U3RyaW5nO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCByZW1vdmVMaXN0ID0gKGxpc3ROYW1lKSA9PiB7XHJcbiAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9qZWN0c1tpXS5nZXROYW1lKCkgPT0gbGlzdE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtnZXRQcm9qZWN0cywgYWRkTGlzdCwgdG9TdHJpbmcsIHJlbW92ZUxpc3R9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsaXN0Q29udHJvbDsiLCJjb25zdCB0b0RvSXRlbSA9ICh0aXRsZSwgZGVzLCBkYXRlLCBwcmlvcml0eSkgPT4ge1xyXG4gICAgbGV0IG15VGl0bGUgPSB0aXRsZTtcclxuICAgIGxldCBteURlcyA9IGRlcztcclxuICAgIGxldCBteURhdGUgPSBkYXRlO1xyXG4gICAgbGV0IG15UHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIGxldCBteVN0YXR1cyA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBteVRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XHJcbiAgICAgICAgbXlUaXRsZSA9IG5ld1RpdGxlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBnZXREZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG15RGVzO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZXREZXMgPSAobmV3RGVzKSA9PiB7XHJcbiAgICAgICAgbXlEZXMgPSBuZXdEZXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbXlEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldERhdGUgPSAobmV3RGF0ZSkgPT4ge1xyXG4gICAgICAgIG15RGF0ZSA9IG5ld0RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG15UHJpb3JpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0UHJpb3JpdHkgPSAobmV3UHJpb3JpdHkpID0+IHtcclxuICAgICAgICBteVByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0U3RhdHVzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBteVN0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRTdGF0dXMgPSAoKSA9PiB7XHJcbiAgICAgICAgbXlTdGF0dXMgPSAhbXlTdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGAke215VGl0bGV9LCR7bXlEZXN9LCR7bXlEYXRlfSwke215UHJpb3JpdHl9LCR7bXlTdGF0dXN9YDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2dldFRpdGxlLCBzZXRUaXRsZSwgZ2V0RGVzLCBzZXREZXMsIHNldERhdGUsIGdldERhdGUsIFxyXG4gICAgICAgICAgICAgICAgZ2V0UHJpb3JpdHksIHNldFByaW9yaXR5LCBnZXRTdGF0dXMsIHNldFN0YXR1cywgdG9TdHJpbmd9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9Eb0l0ZW07IiwiLy8gb2JqZWN0IHRoYXQgc3RvcmUgYWxsIGl0ZW1cclxuXHJcbmNvbnN0IHRvRG9MaXN0ID0gKG5hbWUpID0+IHtcclxuICAgIGxldCBteU5hbWUgPSBuYW1lO1xyXG4gICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICBsZXQgbWlkSW5kZXggPSBpdGVtcy5sZW5ndGg7XHJcbiAgICBsZXQgbG93SW5kZXggPSBpdGVtcy5sZW5ndGg7XHJcblxyXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbXlOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldE5hbWUgPSAobmV3TmFtZSkgPT4ge1xyXG4gICAgICAgIG15TmFtZSA9IG5ld05hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0TGlzdCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkSXRlbSA9IChuZXdJdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJpID0gbmV3SXRlbS5nZXRQcmlvcml0eSgpO1xyXG4gICAgICAgIF9wbGFjZUl0ZW1CeVByaW9yaXR5KHByaSwgbmV3SXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlSXRlbSA9ICh0YXJnZXQpID0+IHtcclxuICAgICAgICBfdXBkYXRlSW5kZXgoaXRlbXNbdGFyZ2V0XS5nZXRQcmlvcml0eSgpKTtcclxuICAgICAgICBpdGVtcy5zcGxpY2UodGFyZ2V0LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVBbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgaXRlbXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93TGlzdCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gXCJcIjtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gaXRlbS50b1N0cmluZygpICsgJ1xcbic7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfcGxhY2VJdGVtQnlQcmlvcml0eShwcmksIGl0ZW0pIHtcclxuICAgICAgICBzd2l0Y2ggKHByaSkge1xyXG4gICAgICAgICAgICBjYXNlICd0b3AnOlxyXG4gICAgICAgICAgICAgICAgaXRlbXMuc3BsaWNlKG1pZEluZGV4LCAwLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgIG1pZEluZGV4ICs9IDE7XHJcbiAgICAgICAgICAgICAgICBsb3dJbmRleCArPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgY2FzZSAnbWlkZGxlJzpcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnNwbGljZShsb3dJbmRleCwgMCwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICBsb3dJbmRleCArPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgY2FzZSAnbG93JzpcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnNwbGljZShpdGVtcy5sZW5ndGgsIDAsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF91cGRhdGVJbmRleChwcmkpIHtcclxuICAgICAgICBzd2l0Y2ggKHByaSkge1xyXG4gICAgICAgICAgICBjYXNlICd0b3AnOlxyXG4gICAgICAgICAgICAgICAgbWlkSW5kZXggLT0gMTtcclxuICAgICAgICAgICAgICAgIGxvd0luZGV4IC09IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ21pZGRsZSc6XHJcbiAgICAgICAgICAgICAgICBsb3dJbmRleCAtPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIGxldCBsaXN0U3RyaW5nID0gYCR7bXlOYW1lfTpgO1xyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGxpc3RTdHJpbmcgKz0gJ1snICsgaXRlbS50b1N0cmluZygpICsgJ10nO1xyXG4gICAgICAgICAgICBsaXN0U3RyaW5nICs9ICcuJztcclxuICAgICAgICB9KTtcclxuICAgICAgICBsaXN0U3RyaW5nID0gbGlzdFN0cmluZy5zdWJzdHJpbmcoMCwgbGlzdFN0cmluZy5sZW5ndGggLSAxKTtcclxuICAgICAgICByZXR1cm4gbGlzdFN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2dldE5hbWUsIHNldE5hbWUsIGdldExpc3QsIGFkZEl0ZW0sIHJlbW92ZUl0ZW0sIHJlbW92ZUFsbCwgXHJcbiAgICAgICAgICAgICAgICBzaG93TGlzdCwgdG9TdHJpbmd9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9Eb0xpc3Q7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbGlzdENvbnRyb2wgZnJvbSBcIi4vbGlzdENvbnRyb2xcIjtcclxuaW1wb3J0IHRvRG9JdGVtIGZyb20gXCIuL3RvRG9JdGVtXCI7XHJcbmltcG9ydCB0b0RvTGlzdCBmcm9tIFwiLi90b0RvTGlzdFwiO1xyXG5cclxuY29uc3QgbG9jYWxQcm9qZWN0cyA9ICgpID0+IHtcclxuICAgIGZ1bmN0aW9uIHN0b3JlUHJvamVjdChwcm9qZWN0cykge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cy50b1N0cmluZygpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RnJvbUxvY2FsKCkge1xyXG4gICAgICAgIGxldCBsb2NhbFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9Qcm9qZWN0cycpO1xyXG4gICAgICAgIGlmIChsb2NhbFByb2plY3RzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0QXJyID0gX2dldExpc3RGcm9tUHJvamVjdChsb2NhbFByb2plY3RzKTtcclxuICAgICAgICAgICAgY29uc3QgbmFtZUxpc3QgPSBfZ2V0SXRlbUZyb21MaXN0KGxpc3RBcnIpO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0cyA9IF9jcmVhdGVQcm9qZWN0cyhuYW1lTGlzdCk7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0c1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7c3RvcmVQcm9qZWN0LCBnZXRGcm9tTG9jYWx9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZ2V0TGlzdEZyb21Qcm9qZWN0KHN0cikge1xyXG4gICAgcmV0dXJuIHN0ci5zdWJzdHJpbmcoMSwgc3RyLmxlbmd0aCAtIDEpLnNwbGl0KCd8Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9nZXRJdGVtRnJvbUxpc3QobGlzdEFycikge1xyXG4gICAgY29uc3QgaXRlbUFyciA9IFtdO1xyXG4gICAgbGlzdEFyci5mb3JFYWNoKGxpc3QgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hbWVJdGVtID0gbGlzdC5zdWJzdHJpbmcoMSwgbGlzdC5sZW5ndGggLSAxKS5zcGxpdCgnOicpO1xyXG4gICAgICAgIGl0ZW1BcnIucHVzaChuYW1lSXRlbSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBpdGVtQXJyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlUHJvamVjdHMobmFtZUxpc3QpIHtcclxuICAgIGNvbnN0IHByb2plY3RzID0gbGlzdENvbnRyb2woKTtcclxuICAgIG5hbWVMaXN0LmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlzdE5hbWUgPSBwcm9qZWN0WzBdO1xyXG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSB0b0RvTGlzdChsaXN0TmFtZSk7XHJcbiAgICAgICAgaWYgKHByb2plY3RbMV0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9qZWN0WzFdLmluY2x1ZGVzKCcuJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBwcm9qZWN0WzFdLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgICAgICBsaXN0LmZvckVhY2goaXRlbUF0dHIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0xpc3QuYWRkSXRlbShfY3JlYXRlTmV3SXRlbShpdGVtQXR0cikpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdMaXN0LmFkZEl0ZW0oX2NyZWF0ZU5ld0l0ZW0ocHJvamVjdFsxXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb2plY3RzLmFkZExpc3QobmV3TGlzdCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBwcm9qZWN0cztcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZU5ld0l0ZW0oaXRlbUF0dHIpIHtcclxuICAgIGNvbnN0IGl0ZW0gPSBpdGVtQXR0ci5zcGxpdCgnLCcpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBpdGVtWzBdLnN1YnN0cmluZygxKTtcclxuICAgIGNvbnN0IGRlcyA9IGl0ZW1bMV07XHJcbiAgICBjb25zdCBkYXRlID0gaXRlbVsyXTtcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gaXRlbVszXTtcclxuICAgIGNvbnN0IHN0YXR1cyA9IGl0ZW1bNF0uc3Vic3RyaW5nKDAsIGl0ZW1bNF0ubGVuZ3RoIC0gMSk7XHJcbiAgICBjb25zdCBuZXdJdGVtID0gdG9Eb0l0ZW0odGl0bGUsIGRlcywgZGF0ZSwgcHJpb3JpdHkpO1xyXG4gICAgX2NoZWNrU3RhdHVzKG5ld0l0ZW0sIHN0YXR1cyk7XHJcbiAgICByZXR1cm4gbmV3SXRlbTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NoZWNrU3RhdHVzKGl0ZW0sIHN0YXR1cykge1xyXG4gICAgaWYgKHN0YXR1cyAhPSBpdGVtLmdldFN0YXR1cygpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgaXRlbS5zZXRTdGF0dXMoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9jYWxQcm9qZWN0czsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=