/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h1 {\n    text-align: center;\n}\n\n.list {\n    display: flex;\n    flex-direction: column;\n}\n\n.item {\n    padding: 10px;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,aAAa;IACb,6BAA6B;AACjC","sourcesContent":["h1 {\n    text-align: center;\n}\n\n.list {\n    display: flex;\n    flex-direction: column;\n}\n\n.item {\n    padding: 10px;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

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


function showList(list) {
    const list_div = document.querySelector('.list');
    _clearScreen(list_div);
    for (let i = 0; i < list.getList().length; i++) {
        _showItem(list_div, list, list.getList()[i], i);
    }
}

function _showItem(list_div, list, item, i) {
    list_div.appendChild(_appendItem(list, _getItem(item), i));
}

function _appendItem (list, item, i) {
    const itemDiv = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'item');
    itemDiv.appendChild(item.title);
    itemDiv.appendChild(item.des);
    itemDiv.appendChild(item.date);
    itemDiv.appendChild(item.priority);
    itemDiv.appendChild(item.status);
    itemDiv.appendChild(_createDeleteButt(list, i));
    return itemDiv;
}

function _getItem(item) {
    const title = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', item.getTitle(), 'title');
    const des = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', item.getDes(), 'des');
    const date = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', item.getDate(), 'date');
    const priority = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', item.getPriorty(), 'priorty');
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
    statusDiv.appendChild(statusLabel);
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
    deleButt.addEventListener('click', e => _removeItem(e, list, i));
    return deleButt;
}

function _removeItem(e, list, i) {
    const list_div = document.querySelector('.list');
    list_div.removeChild(e.target.parentNode);
    list.removeItem(i);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showList);

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
/* harmony import */ var _createOnScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createOnScreen */ "./src/js/createOnScreen.js");




const  newItemControl = () => {
    const storeNewItem = (list) => {
        _disableNewButt();
        _displayPrompt();
        _storeItem(list);
    }

    return {storeNewItem};
}

function _disableNewButt() {
    document.querySelector('.add').disabled = true;
}

function _enableNewButt() {
    document.querySelector('.add').disabled = false;
}

function _displayPrompt() {
    const content = document.querySelector('.content');
    const prompt_div = _appendPrompts(_promptQ());
    const fin_butt = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'Create', 'fin');
    content.appendChild(prompt_div);
    content.appendChild(fin_butt);
}

const _promptQ = () => {
    const askTitle = "To do item name";
    const askDes = "to do item description";
    const askDate = "item due date";
    const askPriority = "item's priority";

    return {askTitle, askDes, askDate, askPriority};
}

function _appendPrompts(prompts) {
    const prompt_div = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'prompts');
    const title_div = _createLableInput(prompts.askTitle, 'in_title');
    const des_div = _createLableInput(prompts.askDes, 'in_des');
    const date_div = _createLableInput(prompts.askDate, 'in_date');
    const priority_div = _createLableInput(prompts.askPriority, 'in_priority');
    prompt_div.appendChild(title_div);
    prompt_div.appendChild(des_div);
    prompt_div.appendChild(date_div);
    prompt_div.appendChild(priority_div);
    
    return prompt_div;
}

function _createLableInput(question, className) {
    const q_div = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'q_div');
    const label = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('label', question, className);
    const answer = (0,_createEle__WEBPACK_IMPORTED_MODULE_0__["default"])('input', '', `${className}_ans`);
    q_div.appendChild(label);
    q_div.appendChild(answer);
    
    return q_div;
}

function _storeItem (list) {
    document.querySelector('.fin').addEventListener('click', () => {
        const newItem = _getItem();
        _storeIt(list, newItem);
        _enableNewButt();
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
    return (0,_toDoItem__WEBPACK_IMPORTED_MODULE_1__["default"])(input.title, input.des, input.date, input.priority);
}

function _removePrompt() {
    const content = document.querySelector('.content');
    content.removeChild(document.querySelector('.prompts'));
    content.removeChild(document.querySelector('.fin'));
}

function _storeIt(list, newItem) {
    list.addItem(newItem);
    (0,_createOnScreen__WEBPACK_IMPORTED_MODULE_2__["default"])(list);
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

    const setStatus = () => {
        myStatus = !myStatus;
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style.css */ "./src/style.css");






(function() {
    const list = (0,_toDoList__WEBPACK_IMPORTED_MODULE_1__["default"])();

    list.addItem((0,_toDoItem__WEBPACK_IMPORTED_MODULE_0__["default"])('test1', 'testing 1', 'today', 'low'));
    list.addItem((0,_toDoItem__WEBPACK_IMPORTED_MODULE_0__["default"])('test2', 'testing 2', 'today', 'low'));

    (0,_createOnScreen__WEBPACK_IMPORTED_MODULE_2__["default"])(list);

    document.querySelector('.add').addEventListener('click', () => {
        const newItem = (0,_newItemControl__WEBPACK_IMPORTED_MODULE_3__["default"])();
        newItem.storeNewItem(list);
    });
    
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw4Q0FBOEMseUJBQXlCLEdBQUcsV0FBVyxvQkFBb0IsNkJBQTZCLEdBQUcsV0FBVyxvQkFBb0Isb0JBQW9CLG9DQUFvQyxHQUFHLFdBQVcsZ0ZBQWdGLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksOEJBQThCLHlCQUF5QixHQUFHLFdBQVcsb0JBQW9CLDZCQUE2QixHQUFHLFdBQVcsb0JBQW9CLG9CQUFvQixvQ0FBb0MsR0FBRyx1QkFBdUI7QUFDbG9CO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7OztBQ1B4QjtBQUNBO0FBQ29DOztBQUVwQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkJBQTJCO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isc0RBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixzREFBUztBQUMzQixnQkFBZ0Isc0RBQVM7QUFDekIsaUJBQWlCLHNEQUFTO0FBQzFCLHFCQUFxQixzREFBUztBQUM5QjtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixzREFBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isc0RBQVM7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLHNEQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLHNEQUFTO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZhO0FBQ0Y7QUFDSTs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzREFBUztBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQSx1QkFBdUIsc0RBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixzREFBUztBQUMzQixrQkFBa0Isc0RBQVM7QUFDM0IsbUJBQW1CLHNEQUFTLGlCQUFpQixVQUFVO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBO0FBQ0EsV0FBVyxxREFBUTtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDJEQUFNO0FBQ1Y7O0FBRUEsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7QUNyRzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsUUFBUSxJQUFJLE9BQU8sSUFBSSxXQUFXO0FBQ3BEOztBQUVBLFlBQVk7QUFDWjtBQUNBOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7O0FDbkR2Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7VUNoQ3ZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ0E7QUFDSTtBQUNRO0FBQ3pCOztBQUVyQjtBQUNBLGlCQUFpQixxREFBUTs7QUFFekIsaUJBQWlCLHFEQUFRO0FBQ3pCLGlCQUFpQixxREFBUTs7QUFFekIsSUFBSSwyREFBTTs7QUFFVjtBQUNBLHdCQUF3QiwyREFBYztBQUN0QztBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy9jcmVhdGVFbGUuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy9jcmVhdGVPblNjcmVlbi5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL25ld0l0ZW1Db250cm9sLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvanMvdG9Eb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qcy90b0RvTGlzdC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLml0ZW0ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJoMSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaXRlbSB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGNyZWF0ZUVsZSAodHlwZSwgdmFsdWUsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgdGFyZ2V0LnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGUgOyIsIi8vIHNob3cgaXRlbSBhbmQgb3RoZXIgb24gaHRtbCBmaWxlXG4vLyBET00gc3R1ZmZcbmltcG9ydCBjcmVhdGVFbGUgZnJvbSBcIi4vY3JlYXRlRWxlXCI7XG5cbmZ1bmN0aW9uIHNob3dMaXN0KGxpc3QpIHtcbiAgICBjb25zdCBsaXN0X2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XG4gICAgX2NsZWFyU2NyZWVuKGxpc3RfZGl2KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QuZ2V0TGlzdCgpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIF9zaG93SXRlbShsaXN0X2RpdiwgbGlzdCwgbGlzdC5nZXRMaXN0KClbaV0sIGkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gX3Nob3dJdGVtKGxpc3RfZGl2LCBsaXN0LCBpdGVtLCBpKSB7XG4gICAgbGlzdF9kaXYuYXBwZW5kQ2hpbGQoX2FwcGVuZEl0ZW0obGlzdCwgX2dldEl0ZW0oaXRlbSksIGkpKTtcbn1cblxuZnVuY3Rpb24gX2FwcGVuZEl0ZW0gKGxpc3QsIGl0ZW0sIGkpIHtcbiAgICBjb25zdCBpdGVtRGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgJ2l0ZW0nKTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW0udGl0bGUpO1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbS5kZXMpO1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbS5kYXRlKTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW0ucHJpb3JpdHkpO1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbS5zdGF0dXMpO1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoX2NyZWF0ZURlbGV0ZUJ1dHQobGlzdCwgaSkpO1xuICAgIHJldHVybiBpdGVtRGl2O1xufVxuXG5mdW5jdGlvbiBfZ2V0SXRlbShpdGVtKSB7XG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGUoJ2RpdicsIGl0ZW0uZ2V0VGl0bGUoKSwgJ3RpdGxlJyk7XG4gICAgY29uc3QgZGVzID0gY3JlYXRlRWxlKCdkaXYnLCBpdGVtLmdldERlcygpLCAnZGVzJyk7XG4gICAgY29uc3QgZGF0ZSA9IGNyZWF0ZUVsZSgnZGl2JywgaXRlbS5nZXREYXRlKCksICdkYXRlJyk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBjcmVhdGVFbGUoJ2RpdicsIGl0ZW0uZ2V0UHJpb3J0eSgpLCAncHJpb3J0eScpO1xuICAgIGNvbnN0IHN0YXR1cyA9IF9jcmVhdGVTdGF0dXNEaXYoaXRlbSk7XG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzLCBkYXRlLCBwcmlvcml0eSwgc3RhdHVzfTtcbn1cblxuZnVuY3Rpb24gX2NsZWFyU2NyZWVuKGxpc3RfZGl2KSB7XG4gICAgd2hpbGUobGlzdF9kaXYuZmlyc3RDaGlsZCAhPSBudWxsKVxuICAgICAgICBsaXN0X2Rpdi5yZW1vdmVDaGlsZChsaXN0X2Rpdi5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVN0YXR1c0RpdihpdGVtKSB7XG4gICAgY29uc3Qgc3RhdHVzRGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgJ3N0YXR1cycpO1xuICAgIGNvbnN0IHN0YXR1c0xhYmVsID0gX2NyZWF0ZUxhYmVsKCk7XG4gICAgY29uc3Qgc3RhdHVzQ2hlY2sgPSBfY3JlYXRlQ2hlY2soaXRlbSk7XG4gICAgc3RhdHVzRGl2LmFwcGVuZENoaWxkKHN0YXR1c0xhYmVsKTtcbiAgICBzdGF0dXNEaXYuYXBwZW5kQ2hpbGQoc3RhdHVzQ2hlY2spO1xuICAgIHJldHVybiBzdGF0dXNEaXY7XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVMYWJlbCgpIHtcbiAgICBjb25zdCBzdGF0dXNMYWJlbCA9IGNyZWF0ZUVsZSgnbGFiZWwnLCAnQ29tcGxldGVkJywgJ3N0YXR1c19sJyk7XG4gICAgc3RhdHVzTGFiZWwuaHRtbEZvciA9ICdzdGF0dXMnO1xuICAgIHJldHVybiBzdGF0dXNMYWJlbDtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNoZWNrKGl0ZW0pIHtcbiAgICBjb25zdCBzdGF0dXNDaGVjayA9IGNyZWF0ZUVsZSgnaW5wdXQnLCAnJywgJ3N0YXR1c19jJyk7XG4gICAgc3RhdHVzQ2hlY2sudHlwZSA9ICdjaGVja2JveCc7XG4gICAgc3RhdHVzQ2hlY2submFtZSA9ICdzdGF0dXMnO1xuICAgIGlmIChpdGVtLmdldFN0YXR1cygpKVxuICAgICAgICBzdGF0dXNDaGVjay5jaGVja2VkID0gdHJ1ZTtcbiAgICBzdGF0dXNDaGVjay5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGl0ZW0uc2V0U3RhdHVzKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0YXR1c0NoZWNrO1xufVxuXG5mdW5jdGlvbiBfY3JlYXRlRGVsZXRlQnV0dChsaXN0LCBpKSB7XG4gICAgY29uc3QgZGVsZUJ1dHQgPSBjcmVhdGVFbGUoJ2J1dHRvbicsICdEZWxldGUnLCAnZGVsZXRlJyk7XG4gICAgZGVsZUJ1dHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IF9yZW1vdmVJdGVtKGUsIGxpc3QsIGkpKTtcbiAgICByZXR1cm4gZGVsZUJ1dHQ7XG59XG5cbmZ1bmN0aW9uIF9yZW1vdmVJdGVtKGUsIGxpc3QsIGkpIHtcbiAgICBjb25zdCBsaXN0X2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XG4gICAgbGlzdF9kaXYucmVtb3ZlQ2hpbGQoZS50YXJnZXQucGFyZW50Tm9kZSk7XG4gICAgbGlzdC5yZW1vdmVJdGVtKGkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaG93TGlzdDsiLCJpbXBvcnQgY3JlYXRlRWxlIGZyb20gXCIuL2NyZWF0ZUVsZVwiO1xuaW1wb3J0IHRvRG9JdGVtIGZyb20gXCIuL3RvRG9JdGVtXCI7XG5pbXBvcnQgc2hvd0l0IGZyb20gXCIuL2NyZWF0ZU9uU2NyZWVuXCI7XG5cbmNvbnN0ICBuZXdJdGVtQ29udHJvbCA9ICgpID0+IHtcbiAgICBjb25zdCBzdG9yZU5ld0l0ZW0gPSAobGlzdCkgPT4ge1xuICAgICAgICBfZGlzYWJsZU5ld0J1dHQoKTtcbiAgICAgICAgX2Rpc3BsYXlQcm9tcHQoKTtcbiAgICAgICAgX3N0b3JlSXRlbShsaXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3N0b3JlTmV3SXRlbX07XG59XG5cbmZ1bmN0aW9uIF9kaXNhYmxlTmV3QnV0dCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkJykuZGlzYWJsZWQgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBfZW5hYmxlTmV3QnV0dCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkJykuZGlzYWJsZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gX2Rpc3BsYXlQcm9tcHQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgcHJvbXB0X2RpdiA9IF9hcHBlbmRQcm9tcHRzKF9wcm9tcHRRKCkpO1xuICAgIGNvbnN0IGZpbl9idXR0ID0gY3JlYXRlRWxlKCdidXR0b24nLCAnQ3JlYXRlJywgJ2ZpbicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvbXB0X2Rpdik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmaW5fYnV0dCk7XG59XG5cbmNvbnN0IF9wcm9tcHRRID0gKCkgPT4ge1xuICAgIGNvbnN0IGFza1RpdGxlID0gXCJUbyBkbyBpdGVtIG5hbWVcIjtcbiAgICBjb25zdCBhc2tEZXMgPSBcInRvIGRvIGl0ZW0gZGVzY3JpcHRpb25cIjtcbiAgICBjb25zdCBhc2tEYXRlID0gXCJpdGVtIGR1ZSBkYXRlXCI7XG4gICAgY29uc3QgYXNrUHJpb3JpdHkgPSBcIml0ZW0ncyBwcmlvcml0eVwiO1xuXG4gICAgcmV0dXJuIHthc2tUaXRsZSwgYXNrRGVzLCBhc2tEYXRlLCBhc2tQcmlvcml0eX07XG59XG5cbmZ1bmN0aW9uIF9hcHBlbmRQcm9tcHRzKHByb21wdHMpIHtcbiAgICBjb25zdCBwcm9tcHRfZGl2ID0gY3JlYXRlRWxlKCdkaXYnLCAnJywgJ3Byb21wdHMnKTtcbiAgICBjb25zdCB0aXRsZV9kaXYgPSBfY3JlYXRlTGFibGVJbnB1dChwcm9tcHRzLmFza1RpdGxlLCAnaW5fdGl0bGUnKTtcbiAgICBjb25zdCBkZXNfZGl2ID0gX2NyZWF0ZUxhYmxlSW5wdXQocHJvbXB0cy5hc2tEZXMsICdpbl9kZXMnKTtcbiAgICBjb25zdCBkYXRlX2RpdiA9IF9jcmVhdGVMYWJsZUlucHV0KHByb21wdHMuYXNrRGF0ZSwgJ2luX2RhdGUnKTtcbiAgICBjb25zdCBwcmlvcml0eV9kaXYgPSBfY3JlYXRlTGFibGVJbnB1dChwcm9tcHRzLmFza1ByaW9yaXR5LCAnaW5fcHJpb3JpdHknKTtcbiAgICBwcm9tcHRfZGl2LmFwcGVuZENoaWxkKHRpdGxlX2Rpdik7XG4gICAgcHJvbXB0X2Rpdi5hcHBlbmRDaGlsZChkZXNfZGl2KTtcbiAgICBwcm9tcHRfZGl2LmFwcGVuZENoaWxkKGRhdGVfZGl2KTtcbiAgICBwcm9tcHRfZGl2LmFwcGVuZENoaWxkKHByaW9yaXR5X2Rpdik7XG4gICAgXG4gICAgcmV0dXJuIHByb21wdF9kaXY7XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVMYWJsZUlucHV0KHF1ZXN0aW9uLCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBxX2RpdiA9IGNyZWF0ZUVsZSgnZGl2JywgJycsICdxX2RpdicpO1xuICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlRWxlKCdsYWJlbCcsIHF1ZXN0aW9uLCBjbGFzc05hbWUpO1xuICAgIGNvbnN0IGFuc3dlciA9IGNyZWF0ZUVsZSgnaW5wdXQnLCAnJywgYCR7Y2xhc3NOYW1lfV9hbnNgKTtcbiAgICBxX2Rpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgcV9kaXYuYXBwZW5kQ2hpbGQoYW5zd2VyKTtcbiAgICBcbiAgICByZXR1cm4gcV9kaXY7XG59XG5cbmZ1bmN0aW9uIF9zdG9yZUl0ZW0gKGxpc3QpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmluJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBfZ2V0SXRlbSgpO1xuICAgICAgICBfc3RvcmVJdChsaXN0LCBuZXdJdGVtKTtcbiAgICAgICAgX2VuYWJsZU5ld0J1dHQoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gX2dldEl0ZW0oKSB7XG4gICAgbGV0IGlucHV0ID0gX3Byb21wdEEoKTtcbiAgICBfcmVtb3ZlUHJvbXB0KCk7XG4gICAgcmV0dXJuIGlucHV0VG9JdGVtKGlucHV0KTtcbn1cblxuY29uc3QgX3Byb21wdEEgPSAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5fdGl0bGVfYW5zJykudmFsdWU7XG4gICAgY29uc3QgZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX2Rlc19hbnMnKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluX2RhdGVfYW5zJykudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5fcHJpb3JpdHlfYW5zJykudmFsdWU7XG5cbiAgICByZXR1cm4ge3RpdGxlLCBkZXMsIGRhdGUsIHByaW9yaXR5fTtcbn1cblxuZnVuY3Rpb24gaW5wdXRUb0l0ZW0oaW5wdXQpIHtcbiAgICByZXR1cm4gdG9Eb0l0ZW0oaW5wdXQudGl0bGUsIGlucHV0LmRlcywgaW5wdXQuZGF0ZSwgaW5wdXQucHJpb3JpdHkpO1xufVxuXG5mdW5jdGlvbiBfcmVtb3ZlUHJvbXB0KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb21wdHMnKSk7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmluJykpO1xufVxuXG5mdW5jdGlvbiBfc3RvcmVJdChsaXN0LCBuZXdJdGVtKSB7XG4gICAgbGlzdC5hZGRJdGVtKG5ld0l0ZW0pO1xuICAgIHNob3dJdChsaXN0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3SXRlbUNvbnRyb2w7IiwiY29uc3QgdG9Eb0l0ZW0gPSAodGl0bGUsIGRlcywgZGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICBsZXQgbXlUaXRsZSA9IHRpdGxlO1xuICAgIGxldCBteURlcyA9IGRlcztcbiAgICBsZXQgbXlEYXRlID0gZGF0ZTtcbiAgICBsZXQgbXlQcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIGxldCBteVN0YXR1cyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBteVRpdGxlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBnZXREZXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBteURlcztcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0RGVzID0gKG5ld0RlcykgPT4ge1xuICAgICAgICBteURlcyA9IG5ld0RlcztcbiAgICB9XG5cbiAgICBjb25zdCBnZXREYXRlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbXlEYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldERhdGUgPSAobmV3RGF0ZSkgPT4ge1xuICAgICAgICBteURhdGUgPSBuZXdEYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFByaW9ydHkgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBteVByaW9yaXR5O1xuICAgIH1cblxuICAgIGNvbnN0IHNldFByaW9ydHkgPSAobmV3UHJpb3J0eSkgPT4ge1xuICAgICAgICBteVByaW9yaXR5ID0gbmV3UHJpb3J0eTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTdGF0dXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBteVN0YXR1cztcbiAgICB9XG5cbiAgICBjb25zdCBzZXRTdGF0dXMgPSAoKSA9PiB7XG4gICAgICAgIG15U3RhdHVzID0gIW15U3RhdHVzO1xuICAgIH1cblxuICAgIGNvbnN0IHRvU3RyaW5nID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYCR7bXlUaXRsZX0sICR7bXlEYXRlfSwgJHtteVByaW9yaXR5fWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtnZXRUaXRsZSwgZ2V0RGVzLCBzZXREZXMsIHNldERhdGUsIGdldERhdGUsIFxuICAgICAgICAgICAgICAgIGdldFByaW9ydHksIHNldFByaW9ydHksIGdldFN0YXR1cywgc2V0U3RhdHVzLCB0b1N0cmluZ307XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b0RvSXRlbTsiLCIvLyBvYmplY3QgdGhhdCBzdG9yZSBhbGwgaXRlbVxuXG5jb25zdCB0b0RvTGlzdCA9ICgpID0+IHtcbiAgICBsZXQgaXRlbXMgPSBbXTtcblxuICAgIGNvbnN0IGdldExpc3QgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG5cbiAgICBjb25zdCBhZGRJdGVtID0gKG5ld0l0ZW0pID0+IHtcbiAgICAgICAgaXRlbXMucHVzaChuZXdJdGVtKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVJdGVtID0gKHRhcmdldCkgPT4ge1xuICAgICAgICBpdGVtcy5zcGxpY2UodGFyZ2V0LCAxKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVBbGwgPSAoKSA9PiB7XG4gICAgICAgIGl0ZW1zID0gW107XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0xpc3QgPSAoKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGl0ZW0udG9TdHJpbmcoKSArICdcXG4nO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4ge2dldExpc3QsIGFkZEl0ZW0sIHJlbW92ZUl0ZW0sIHJlbW92ZUFsbCwgc2hvd0xpc3R9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9Eb0xpc3Q7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0b0RvSXRlbSBmcm9tIFwiLi90b0RvSXRlbVwiO1xuaW1wb3J0IHRvRG9MaXN0IGZyb20gXCIuL3RvRG9MaXN0XCI7XG5pbXBvcnQgc2hvd0l0IGZyb20gXCIuL2NyZWF0ZU9uU2NyZWVuXCI7XG5pbXBvcnQgbmV3SXRlbUNvbnRyb2wgZnJvbSBcIi4vbmV3SXRlbUNvbnRyb2xcIjtcbmltcG9ydCAnLi4vc3R5bGUuY3NzJ1xuXG4oZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbGlzdCA9IHRvRG9MaXN0KCk7XG5cbiAgICBsaXN0LmFkZEl0ZW0odG9Eb0l0ZW0oJ3Rlc3QxJywgJ3Rlc3RpbmcgMScsICd0b2RheScsICdsb3cnKSk7XG4gICAgbGlzdC5hZGRJdGVtKHRvRG9JdGVtKCd0ZXN0MicsICd0ZXN0aW5nIDInLCAndG9kYXknLCAnbG93JykpO1xuXG4gICAgc2hvd0l0KGxpc3QpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdJdGVtID0gbmV3SXRlbUNvbnRyb2woKTtcbiAgICAgICAgbmV3SXRlbS5zdG9yZU5ld0l0ZW0obGlzdCk7XG4gICAgfSk7XG4gICAgXG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==