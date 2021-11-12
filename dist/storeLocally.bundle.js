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

    return {getProjects, addList, toString};
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
    if (status != item.getStatus())
        item.setStatus();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localProjects);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy9saXN0Q29udHJvbC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL3RvRG9JdGVtLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvdG9Eb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvc3RvcmVMb2NhbGx5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxpc3RDb250cm9sID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSBbXTtcclxuXHJcbiAgICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gcHJvamVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgICAgcHJvamVjdHMucHVzaChsaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b1N0cmluZyA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcHJvamVjdFN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChsaXN0ID0+IHtcclxuICAgICAgICAgICAgcHJvamVjdFN0cmluZyArPSAneycgKyBsaXN0LnRvU3RyaW5nKCkgKyAnfXwnO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcHJvamVjdFN0cmluZyA9IHByb2plY3RTdHJpbmcuc3Vic3RyaW5nKDAsIHByb2plY3RTdHJpbmcubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RTdHJpbmc7XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIHJldHVybiB7Z2V0UHJvamVjdHMsIGFkZExpc3QsIHRvU3RyaW5nfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGlzdENvbnRyb2w7IiwiY29uc3QgdG9Eb0l0ZW0gPSAodGl0bGUsIGRlcywgZGF0ZSwgcHJpb3JpdHkpID0+IHtcclxuICAgIGxldCBteVRpdGxlID0gdGl0bGU7XHJcbiAgICBsZXQgbXlEZXMgPSBkZXM7XHJcbiAgICBsZXQgbXlEYXRlID0gZGF0ZTtcclxuICAgIGxldCBteVByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICBsZXQgbXlTdGF0dXMgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbXlUaXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xyXG4gICAgICAgIG15VGl0bGUgPSBuZXdUaXRsZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgZ2V0RGVzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBteURlcztcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2V0RGVzID0gKG5ld0RlcykgPT4ge1xyXG4gICAgICAgIG15RGVzID0gbmV3RGVzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldERhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG15RGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXREYXRlID0gKG5ld0RhdGUpID0+IHtcclxuICAgICAgICBteURhdGUgPSBuZXdEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBteVByaW9yaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiB7XHJcbiAgICAgICAgbXlQcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFN0YXR1cyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbXlTdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0U3RhdHVzID0gKCkgPT4ge1xyXG4gICAgICAgIG15U3RhdHVzID0gIW15U3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvU3RyaW5nID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBgJHtteVRpdGxlfSwke215RGVzfSwke215RGF0ZX0sJHtteVByaW9yaXR5fSwke215U3RhdHVzfWA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtnZXRUaXRsZSwgc2V0VGl0bGUsIGdldERlcywgc2V0RGVzLCBzZXREYXRlLCBnZXREYXRlLCBcclxuICAgICAgICAgICAgICAgIGdldFByaW9yaXR5LCBzZXRQcmlvcml0eSwgZ2V0U3RhdHVzLCBzZXRTdGF0dXMsIHRvU3RyaW5nfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvRG9JdGVtOyIsIi8vIG9iamVjdCB0aGF0IHN0b3JlIGFsbCBpdGVtXHJcblxyXG5jb25zdCB0b0RvTGlzdCA9IChuYW1lKSA9PiB7XHJcbiAgICBsZXQgbXlOYW1lID0gbmFtZTtcclxuICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgbGV0IG1pZEluZGV4ID0gaXRlbXMubGVuZ3RoO1xyXG4gICAgbGV0IGxvd0luZGV4ID0gaXRlbXMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG15TmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXROYW1lID0gKG5ld05hbWUpID0+IHtcclxuICAgICAgICBteU5hbWUgPSBuZXdOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldExpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZEl0ZW0gPSAobmV3SXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByaSA9IG5ld0l0ZW0uZ2V0UHJpb3JpdHkoKTtcclxuICAgICAgICBfcGxhY2VJdGVtQnlQcmlvcml0eShwcmksIG5ld0l0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSAodGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgX3VwZGF0ZUluZGV4KGl0ZW1zW3RhcmdldF0uZ2V0UHJpb3JpdHkoKSk7XHJcbiAgICAgICAgaXRlbXMuc3BsaWNlKHRhcmdldCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlQWxsID0gKCkgPT4ge1xyXG4gICAgICAgIGl0ZW1zID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd0xpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IGl0ZW0udG9TdHJpbmcoKSArICdcXG4nO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX3BsYWNlSXRlbUJ5UHJpb3JpdHkocHJpLCBpdGVtKSB7XHJcbiAgICAgICAgc3dpdGNoIChwcmkpIHtcclxuICAgICAgICAgICAgY2FzZSAndG9wJzpcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnNwbGljZShtaWRJbmRleCwgMCwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICBtaWRJbmRleCArPSAxO1xyXG4gICAgICAgICAgICAgICAgbG93SW5kZXggKz0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNhc2UgJ21pZGRsZSc6XHJcbiAgICAgICAgICAgICAgICBpdGVtcy5zcGxpY2UobG93SW5kZXgsIDAsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgbG93SW5kZXggKz0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNhc2UgJ2xvdyc6XHJcbiAgICAgICAgICAgICAgICBpdGVtcy5zcGxpY2UoaXRlbXMubGVuZ3RoLCAwLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfdXBkYXRlSW5kZXgocHJpKSB7XHJcbiAgICAgICAgc3dpdGNoIChwcmkpIHtcclxuICAgICAgICAgICAgY2FzZSAndG9wJzpcclxuICAgICAgICAgICAgICAgIG1pZEluZGV4IC09IDE7XHJcbiAgICAgICAgICAgICAgICBsb3dJbmRleCAtPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdtaWRkbGUnOlxyXG4gICAgICAgICAgICAgICAgbG93SW5kZXggLT0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuICAgICAgICBsZXQgbGlzdFN0cmluZyA9IGAke215TmFtZX06YDtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBsaXN0U3RyaW5nICs9ICdbJyArIGl0ZW0udG9TdHJpbmcoKSArICddJztcclxuICAgICAgICAgICAgbGlzdFN0cmluZyArPSAnLic7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGlzdFN0cmluZyA9IGxpc3RTdHJpbmcuc3Vic3RyaW5nKDAsIGxpc3RTdHJpbmcubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgcmV0dXJuIGxpc3RTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtnZXROYW1lLCBzZXROYW1lLCBnZXRMaXN0LCBhZGRJdGVtLCByZW1vdmVJdGVtLCByZW1vdmVBbGwsIFxyXG4gICAgICAgICAgICAgICAgc2hvd0xpc3QsIHRvU3RyaW5nfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvRG9MaXN0OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxpc3RDb250cm9sIGZyb20gXCIuL2xpc3RDb250cm9sXCI7XHJcbmltcG9ydCB0b0RvSXRlbSBmcm9tIFwiLi90b0RvSXRlbVwiO1xyXG5pbXBvcnQgdG9Eb0xpc3QgZnJvbSBcIi4vdG9Eb0xpc3RcIjtcclxuXHJcbmNvbnN0IGxvY2FsUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBzdG9yZVByb2plY3QocHJvamVjdHMpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb1Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMudG9TdHJpbmcoKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEZyb21Mb2NhbCgpIHtcclxuICAgICAgICBsZXQgbG9jYWxQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvUHJvamVjdHMnKTtcclxuICAgICAgICBpZiAobG9jYWxQcm9qZWN0cyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgbGlzdEFyciA9IF9nZXRMaXN0RnJvbVByb2plY3QobG9jYWxQcm9qZWN0cyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWVMaXN0ID0gX2dldEl0ZW1Gcm9tTGlzdChsaXN0QXJyKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdHMgPSBfY3JlYXRlUHJvamVjdHMobmFtZUxpc3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdHNcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge3N0b3JlUHJvamVjdCwgZ2V0RnJvbUxvY2FsfTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2dldExpc3RGcm9tUHJvamVjdChzdHIpIHtcclxuICAgIHJldHVybiBzdHIuc3Vic3RyaW5nKDEsIHN0ci5sZW5ndGggLSAxKS5zcGxpdCgnfCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZ2V0SXRlbUZyb21MaXN0KGxpc3RBcnIpIHtcclxuICAgIGNvbnN0IGl0ZW1BcnIgPSBbXTtcclxuICAgIGxpc3RBcnIuZm9yRWFjaChsaXN0ID0+IHtcclxuICAgICAgICBjb25zdCBuYW1lSXRlbSA9IGxpc3Quc3Vic3RyaW5nKDEsIGxpc3QubGVuZ3RoIC0gMSkuc3BsaXQoJzonKTtcclxuICAgICAgICBpdGVtQXJyLnB1c2gobmFtZUl0ZW0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gaXRlbUFycjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZVByb2plY3RzKG5hbWVMaXN0KSB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IGxpc3RDb250cm9sKCk7XHJcbiAgICBuYW1lTGlzdC5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpc3ROYW1lID0gcHJvamVjdFswXTtcclxuICAgICAgICBjb25zdCBuZXdMaXN0ID0gdG9Eb0xpc3QobGlzdE5hbWUpO1xyXG4gICAgICAgIGlmIChwcm9qZWN0WzFdICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAocHJvamVjdFsxXS5pbmNsdWRlcygnLicpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gcHJvamVjdFsxXS5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKGl0ZW1BdHRyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdMaXN0LmFkZEl0ZW0oX2NyZWF0ZU5ld0l0ZW0oaXRlbUF0dHIpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3TGlzdC5hZGRJdGVtKF9jcmVhdGVOZXdJdGVtKHByb2plY3RbMV0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9qZWN0cy5hZGRMaXN0KG5ld0xpc3QpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcHJvamVjdHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVOZXdJdGVtKGl0ZW1BdHRyKSB7XHJcbiAgICBjb25zdCBpdGVtID0gaXRlbUF0dHIuc3BsaXQoJywnKTtcclxuICAgIGNvbnN0IHRpdGxlID0gaXRlbVswXS5zdWJzdHJpbmcoMSk7XHJcbiAgICBjb25zdCBkZXMgPSBpdGVtWzFdO1xyXG4gICAgY29uc3QgZGF0ZSA9IGl0ZW1bMl07XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGl0ZW1bM107XHJcbiAgICBjb25zdCBzdGF0dXMgPSBpdGVtWzRdLnN1YnN0cmluZygwLCBpdGVtWzRdLmxlbmd0aCAtIDEpO1xyXG4gICAgY29uc3QgbmV3SXRlbSA9IHRvRG9JdGVtKHRpdGxlLCBkZXMsIGRhdGUsIHByaW9yaXR5KTtcclxuICAgIF9jaGVja1N0YXR1cyhuZXdJdGVtLCBzdGF0dXMpO1xyXG4gICAgcmV0dXJuIG5ld0l0ZW07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jaGVja1N0YXR1cyhpdGVtLCBzdGF0dXMpIHtcclxuICAgIGlmIChzdGF0dXMgIT0gaXRlbS5nZXRTdGF0dXMoKSlcclxuICAgICAgICBpdGVtLnNldFN0YXR1cygpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2NhbFByb2plY3RzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==