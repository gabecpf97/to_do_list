/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!**********************************!*\
  !*** ./src/js/createOnScreen.js ***!
  \**********************************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlT25TY3JlZW4uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy9jcmVhdGVPblNjcmVlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHNob3cgaXRlbSBhbmQgb3RoZXIgb24gaHRtbCBmaWxlXG4vLyBET00gc3R1ZmZcblxuZnVuY3Rpb24gc2hvd0l0ZW0oaXRlbSkge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoX2FwcGVuZEl0ZW0oX2dldEl0ZW0oaXRlbSkpKTtcbn1cblxuZnVuY3Rpb24gX2FwcGVuZEl0ZW0gKGl0ZW0pIHtcbiAgICBjb25zdCBpdGVtRGl2ID0gX2NyZWF0ZURpdignJywgJ2l0ZW0nKTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW0udGl0bGUpO1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbS5kZXMpO1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbS5kYXRlKTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW0ucHJpb3JpdHkpO1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbS5zdGF0dXMpO1xuICAgIHJldHVybiBpdGVtRGl2O1xufVxuXG5mdW5jdGlvbiBfZ2V0SXRlbShpdGVtKSB7XG4gICAgY29uc3QgdGl0bGUgPSBfY3JlYXRlRGl2KGl0ZW0uZ2V0VGl0bGUoKSwgJ3RpdGxlJyk7XG4gICAgY29uc3QgZGVzID0gX2NyZWF0ZURpdihpdGVtLmdldERlcygpLCAnZGVzJyk7XG4gICAgY29uc3QgZGF0ZSA9IF9jcmVhdGVEaXYoaXRlbS5nZXREYXRlKCksICdkYXRlJyk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBfY3JlYXRlRGl2KGl0ZW0uZ2V0UHJpb3J0eSgpLCAncHJpb3J0eScpO1xuICAgIGNvbnN0IHN0YXR1cyA9IF9jcmVhdGVEaXYoaXRlbS5nZXRTdGF0dXMoKSwgJ3N0YXR1cycpO1xuICAgIHJldHVybiB7dGl0bGUsIGRlcywgZGF0ZSwgcHJpb3JpdHksIHN0YXR1c307XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVEaXYodmFsdWUsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhcmdldC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hvd0l0ZW07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9