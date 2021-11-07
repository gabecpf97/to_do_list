/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/createOnScreen.js":
/*!**********************************!*\
  !*** ./src/js/createOnScreen.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// show item and other on html file
// DOM stuff

function showItem(item) {
    const list = document.querySelector('.list');
    list.appendChild(_appendItem(_getItem(item)));
}

function _appendItem (item) {
    const itemDiv = _createDiv('', 'item');
    itemDiv.appendChild(item.title);
    itemDiv.appendChild(item.des);
    itemDiv.appendChild(item.date);
    itemDiv.appendChild(item.priority);
    itemDiv.appendChild(item.status);
    return itemDiv;
}

function _getItem(item) {
    const title = _createDiv(item.getTitle(), 'title');
    const des = _createDiv(item.getDes(), 'des');
    const date = _createDiv(item.getDate(), 'date');
    const priority = _createDiv(item.getPriorty(), 'priorty');
    const status = _createDiv(item.getStatus(), 'status');
    return {title, des, date, priority, status};
}

function _createDiv(value, className) {
    const target = document.createElement('div');
    target.textContent = value;
    target.classList.add(className);
    return target;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showItem);

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




(function() {
    const list = (0,_toDoList__WEBPACK_IMPORTED_MODULE_1__["default"])();

    list.addItem((0,_toDoItem__WEBPACK_IMPORTED_MODULE_0__["default"])('test1', 'testing 1', 'today', 'low'));
    list.addItem((0,_toDoItem__WEBPACK_IMPORTED_MODULE_0__["default"])('test2', 'testing 2', 'today', 'low'));

    list.getList().forEach(item => {
        (0,_createOnScreen__WEBPACK_IMPORTED_MODULE_2__["default"])(item);
    });

    document.querySelector('.add').addEventListener('click', () => {
        inputControl();
        (0,_createOnScreen__WEBPACK_IMPORTED_MODULE_2__["default"])(inputControl.getItem());
    });
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQ2xDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixRQUFRLElBQUksT0FBTyxJQUFJLFdBQVc7QUFDcEQ7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUNuRHZCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7O1VDcEN2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOa0M7QUFDQTtBQUNJOztBQUV0QztBQUNBLGlCQUFpQixxREFBUTs7QUFFekIsaUJBQWlCLHFEQUFRO0FBQ3pCLGlCQUFpQixxREFBUTs7QUFFekI7QUFDQSxRQUFRLDJEQUFNO0FBQ2QsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsUUFBUSwyREFBTTtBQUNkLEtBQUs7QUFDTCxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL2NyZWF0ZU9uU2NyZWVuLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvdG9Eb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy90b0RvTGlzdC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzaG93IGl0ZW0gYW5kIG90aGVyIG9uIGh0bWwgZmlsZVxuLy8gRE9NIHN0dWZmXG5cbmZ1bmN0aW9uIHNob3dJdGVtKGl0ZW0pIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKF9hcHBlbmRJdGVtKF9nZXRJdGVtKGl0ZW0pKSk7XG59XG5cbmZ1bmN0aW9uIF9hcHBlbmRJdGVtIChpdGVtKSB7XG4gICAgY29uc3QgaXRlbURpdiA9IF9jcmVhdGVEaXYoJycsICdpdGVtJyk7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtLnRpdGxlKTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW0uZGVzKTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW0uZGF0ZSk7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtLnByaW9yaXR5KTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW0uc3RhdHVzKTtcbiAgICByZXR1cm4gaXRlbURpdjtcbn1cblxuZnVuY3Rpb24gX2dldEl0ZW0oaXRlbSkge1xuICAgIGNvbnN0IHRpdGxlID0gX2NyZWF0ZURpdihpdGVtLmdldFRpdGxlKCksICd0aXRsZScpO1xuICAgIGNvbnN0IGRlcyA9IF9jcmVhdGVEaXYoaXRlbS5nZXREZXMoKSwgJ2RlcycpO1xuICAgIGNvbnN0IGRhdGUgPSBfY3JlYXRlRGl2KGl0ZW0uZ2V0RGF0ZSgpLCAnZGF0ZScpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gX2NyZWF0ZURpdihpdGVtLmdldFByaW9ydHkoKSwgJ3ByaW9ydHknKTtcbiAgICBjb25zdCBzdGF0dXMgPSBfY3JlYXRlRGl2KGl0ZW0uZ2V0U3RhdHVzKCksICdzdGF0dXMnKTtcbiAgICByZXR1cm4ge3RpdGxlLCBkZXMsIGRhdGUsIHByaW9yaXR5LCBzdGF0dXN9O1xufVxuXG5mdW5jdGlvbiBfY3JlYXRlRGl2KHZhbHVlLCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXJnZXQudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dJdGVtOyIsImNvbnN0IHRvRG9JdGVtID0gKHRpdGxlLCBkZXMsIGRhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgbGV0IG15VGl0bGUgPSB0aXRsZTtcbiAgICBsZXQgbXlEZXMgPSBkZXM7XG4gICAgbGV0IG15RGF0ZSA9IGRhdGU7XG4gICAgbGV0IG15UHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBsZXQgbXlTdGF0dXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbXlUaXRsZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZ2V0RGVzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbXlEZXM7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldERlcyA9IChuZXdEZXMpID0+IHtcbiAgICAgICAgbXlEZXMgPSBuZXdEZXM7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG15RGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXREYXRlID0gKG5ld0RhdGUpID0+IHtcbiAgICAgICAgbXlEYXRlID0gbmV3RGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcmlvcnR5ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbXlQcmlvcml0eTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQcmlvcnR5ID0gKG5ld1ByaW9ydHkpID0+IHtcbiAgICAgICAgbXlQcmlvcml0eSA9IG5ld1ByaW9ydHk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U3RhdHVzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbXlTdGF0dXM7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0U3RhdHVzID0gKG5ld1N0YXR1cykgPT4ge1xuICAgICAgICBteVN0YXR1cyA9IG5ld1N0YXR1cztcbiAgICB9XG5cbiAgICBjb25zdCB0b1N0cmluZyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGAke215VGl0bGV9LCAke215RGF0ZX0sICR7bXlQcmlvcml0eX1gO1xuICAgIH1cblxuICAgIHJldHVybiB7Z2V0VGl0bGUsIGdldERlcywgc2V0RGVzLCBzZXREYXRlLCBnZXREYXRlLCBcbiAgICAgICAgICAgICAgICBnZXRQcmlvcnR5LCBzZXRQcmlvcnR5LCBnZXRTdGF0dXMsIHNldFN0YXR1cywgdG9TdHJpbmd9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9Eb0l0ZW07IiwiLy8gb2JqZWN0IHRoYXQgc3RvcmUgYWxsIGl0ZW1cblxuY29uc3QgdG9Eb0xpc3QgPSAoKSA9PiB7XG4gICAgbGV0IGl0ZW1zID0gW107XG5cbiAgICBjb25zdCBnZXRMaXN0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkSXRlbSA9IChuZXdJdGVtKSA9PiB7XG4gICAgICAgIGl0ZW1zLnB1c2gobmV3SXRlbSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlSXRlbSA9ICh0YXJnZXQpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGl0ZW1zW2ldLmdldFRpdGxlKCkgPT0gdGFyZ2V0LmdldFRpdGxlKCkpIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVBbGwgPSAoKSA9PiB7XG4gICAgICAgIGl0ZW1zID0gW107XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0xpc3QgPSAoKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGl0ZW0udG9TdHJpbmcoKSArICdcXG4nO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4ge2dldExpc3QsIGFkZEl0ZW0sIHJlbW92ZUl0ZW0sIHJlbW92ZUFsbCwgc2hvd0xpc3R9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9Eb0xpc3Q7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdG9Eb0l0ZW0gZnJvbSBcIi4vdG9Eb0l0ZW1cIjtcbmltcG9ydCB0b0RvTGlzdCBmcm9tIFwiLi90b0RvTGlzdFwiO1xuaW1wb3J0IHNob3dJdCBmcm9tIFwiLi9jcmVhdGVPblNjcmVlblwiO1xuXG4oZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbGlzdCA9IHRvRG9MaXN0KCk7XG5cbiAgICBsaXN0LmFkZEl0ZW0odG9Eb0l0ZW0oJ3Rlc3QxJywgJ3Rlc3RpbmcgMScsICd0b2RheScsICdsb3cnKSk7XG4gICAgbGlzdC5hZGRJdGVtKHRvRG9JdGVtKCd0ZXN0MicsICd0ZXN0aW5nIDInLCAndG9kYXknLCAnbG93JykpO1xuXG4gICAgbGlzdC5nZXRMaXN0KCkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgc2hvd0l0KGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpbnB1dENvbnRyb2woKTtcbiAgICAgICAgc2hvd0l0KGlucHV0Q29udHJvbC5nZXRJdGVtKCkpO1xuICAgIH0pO1xufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=