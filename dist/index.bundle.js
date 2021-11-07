/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

    const toString = () => {
        return `${myTitle}, ${myDate}, ${myPriority}`;
    }

    return {getTitle, getDes, setDes, setDate, getDate, 
                    getPriorty, setPriorty, toString};
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

    const showList = () => {
        let result = "";
        items.forEach(item => {
            result += item.toString() + '\n';
        });
        return result;
    }

    return {addItem, removeItem, showList};
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



(function() {
    let list = (0,_toDoList__WEBPACK_IMPORTED_MODULE_1__["default"])();

    let a = (0,_toDoItem__WEBPACK_IMPORTED_MODULE_0__["default"])('testing', 'sth abt this', 'testing date', 'top');
    let b = (0,_toDoItem__WEBPACK_IMPORTED_MODULE_0__["default"])('toRemove', 'waiting', 'removingDate', 'mid');

    list.addItem(a);
    list.addItem(b);
    console.log(list.showList());
    list.removeItem(b);
    console.log(list.showList());
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLFFBQVEsSUFBSSxPQUFPLElBQUksV0FBVztBQUNwRDs7QUFFQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQzFDdkI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7O1VDNUJ2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNBOztBQUVsQztBQUNBLGVBQWUscURBQVE7O0FBRXZCLFlBQVkscURBQVE7QUFDcEIsWUFBWSxxREFBUTs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvdG9Eb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy90b0RvTGlzdC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0b0RvSXRlbSA9ICh0aXRsZSwgZGVzLCBkYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIGxldCBteVRpdGxlID0gdGl0bGU7XG4gICAgbGV0IG15RGVzID0gZGVzO1xuICAgIGxldCBteURhdGUgPSBkYXRlO1xuICAgIGxldCBteVByaW9yaXR5ID0gcHJpb3JpdHk7XG5cbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG15VGl0bGU7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGdldERlcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG15RGVzO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXREZXMgPSAobmV3RGVzKSA9PiB7XG4gICAgICAgIG15RGVzID0gbmV3RGVzO1xuICAgIH1cblxuICAgIGNvbnN0IGdldERhdGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBteURhdGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RGF0ZSA9IChuZXdEYXRlKSA9PiB7XG4gICAgICAgIG15RGF0ZSA9IG5ld0RhdGU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJpb3J0eSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG15UHJpb3JpdHk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UHJpb3J0eSA9IChuZXdQcmlvcnR5KSA9PiB7XG4gICAgICAgIG15UHJpb3JpdHkgPSBuZXdQcmlvcnR5O1xuICAgIH1cblxuICAgIGNvbnN0IHRvU3RyaW5nID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYCR7bXlUaXRsZX0sICR7bXlEYXRlfSwgJHtteVByaW9yaXR5fWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtnZXRUaXRsZSwgZ2V0RGVzLCBzZXREZXMsIHNldERhdGUsIGdldERhdGUsIFxuICAgICAgICAgICAgICAgICAgICBnZXRQcmlvcnR5LCBzZXRQcmlvcnR5LCB0b1N0cmluZ307XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b0RvSXRlbTsiLCIvLyBvYmplY3QgdGhhdCBzdG9yZSBhbGwgaXRlbVxuXG5jb25zdCB0b0RvTGlzdCA9ICgpID0+IHtcbiAgICBsZXQgaXRlbXMgPSBbXTtcblxuICAgIGNvbnN0IGFkZEl0ZW0gPSAobmV3SXRlbSkgPT4ge1xuICAgICAgICBpdGVtcy5wdXNoKG5ld0l0ZW0pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSAodGFyZ2V0KSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpdGVtc1tpXS5nZXRUaXRsZSgpID09IHRhcmdldC5nZXRUaXRsZSgpKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0xpc3QgPSAoKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGl0ZW0udG9TdHJpbmcoKSArICdcXG4nO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4ge2FkZEl0ZW0sIHJlbW92ZUl0ZW0sIHNob3dMaXN0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvRG9MaXN0OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHRvRG9JdGVtIGZyb20gXCIuL3RvRG9JdGVtXCI7XG5pbXBvcnQgdG9Eb0xpc3QgZnJvbSBcIi4vdG9Eb0xpc3RcIjtcblxuKGZ1bmN0aW9uKCkge1xuICAgIGxldCBsaXN0ID0gdG9Eb0xpc3QoKTtcblxuICAgIGxldCBhID0gdG9Eb0l0ZW0oJ3Rlc3RpbmcnLCAnc3RoIGFidCB0aGlzJywgJ3Rlc3RpbmcgZGF0ZScsICd0b3AnKTtcbiAgICBsZXQgYiA9IHRvRG9JdGVtKCd0b1JlbW92ZScsICd3YWl0aW5nJywgJ3JlbW92aW5nRGF0ZScsICdtaWQnKTtcblxuICAgIGxpc3QuYWRkSXRlbShhKTtcbiAgICBsaXN0LmFkZEl0ZW0oYik7XG4gICAgY29uc29sZS5sb2cobGlzdC5zaG93TGlzdCgpKTtcbiAgICBsaXN0LnJlbW92ZUl0ZW0oYik7XG4gICAgY29uc29sZS5sb2cobGlzdC5zaG93TGlzdCgpKTtcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9