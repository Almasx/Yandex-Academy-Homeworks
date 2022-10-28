/*! For license information please see home.9297ef419c3d98fb0b4d.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./src/components/TodoItem.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "TodoItem": () => (/* binding */ TodoItem)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./src/store.js");\n/* harmony import */ var _utils_uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/uuid */ "./src/utils/uuid.js");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ "./src/components/index.module.css");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");\n\n\n\n\n\n\n\nvar TodoItem = function TodoItem(props) {\n  var index = props.index;\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  var text = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {\n    return state.items[index];\n  });\n  var done = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {\n    return state.done[index];\n  });\n  var onChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {\n    return dispatch((0,_store__WEBPACK_IMPORTED_MODULE_2__.setDone)(index, !done));\n  }, [index, done, dispatch]);\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {\n    "data-testid": (0,_utils_uuid__WEBPACK_IMPORTED_MODULE_3__.UUID)(),\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].item,\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {\n      "data-testid": "list-item",\n      className: done ? "done" : "",\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {\n        type: "checkbox",\n        checked: done,\n        onChange: onChange\n      }), text]\n    })\n  });\n};\n\n//# sourceURL=webpack://unit-demo-cra/./src/components/TodoItem.js?')},"./src/components/TodoList.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "TodoList": () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./src/store.js");\n/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TodoItem */ "./src/components/TodoItem.js");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");\n\n\n\n\n\n\n\nvar TodoList = function TodoList() {\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n  var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {\n    return state.items;\n  });\n  var text = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {\n    return state.text;\n  });\n  var onChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_ref) {\n    var target = _ref.target;\n    dispatch((0,_store__WEBPACK_IMPORTED_MODULE_3__.setText)(target.value));\n  }, [dispatch]);\n  var onClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {\n    dispatch((0,_store__WEBPACK_IMPORTED_MODULE_3__.addItem)(text));\n  }, [dispatch, text]);\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {\n        "data-testid": "input-add",\n        value: text,\n        onChange: onChange\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {\n        "data-testid": "button-add",\n        onClick: onClick,\n        children: "\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C"\n      })]\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {\n      "data-testid": "list",\n      className: "list",\n      children: lodash__WEBPACK_IMPORTED_MODULE_1___default().map(items, function (text, i) {\n        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_TodoItem__WEBPACK_IMPORTED_MODULE_4__.TodoItem, {\n          index: i\n        }, i);\n      })\n    })]\n  });\n};\n\n//# sourceURL=webpack://unit-demo-cra/./src/components/TodoList.js?')},"./src/config/crypto-fallback.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  randomUUID: function randomUUID() {\n    return uuid__WEBPACK_IMPORTED_MODULE_0__["default"];\n  }\n});\n\n//# sourceURL=webpack://unit-demo-cra/./src/config/crypto-fallback.js?')},"./src/pages/Home.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Home": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/TodoList */ "./src/components/TodoList.js");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");\n\n\n\n\nvar Home = function Home() {\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {\n      "data-testid": "page-title",\n      children: "Home"\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {\n      children: "This is the list."\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_TodoList__WEBPACK_IMPORTED_MODULE_0__.TodoList, {})]\n  });\n};\n\n//# sourceURL=webpack://unit-demo-cra/./src/pages/Home.js?')},"./src/store.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "addItem": () => (/* binding */ addItem),\n/* harmony export */   "initStore": () => (/* binding */ initStore),\n/* harmony export */   "setDone": () => (/* binding */ setDone),\n/* harmony export */   "setText": () => (/* binding */ setText)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar items = [\'Позавтракать\', \'Сходить в магазин\', \'Покормить кота\'];\nvar DEFAULT_STATE = {\n  items: items,\n  done: {},\n  text: \'\'\n};\n\n// actions\nvar addItem = function addItem(text) {\n  return {\n    type: \'ADD_ITEM\',\n    text: text\n  };\n};\nvar setText = function setText(text) {\n  return {\n    type: \'SET_TEXT\',\n    text: text\n  };\n};\nvar setDone = function setDone(index, done) {\n  return {\n    type: \'SET_DONE\',\n    index: index,\n    done: done\n  };\n};\n\n// reducer\nvar rootReducer = function rootReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  switch (action.type) {\n    case \'ADD_ITEM\':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        text: \'\',\n        items: [].concat(_toConsumableArray(state.items), [action.text])\n      });\n    case \'SET_TEXT\':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        text: action.text\n      });\n    case \'SET_DONE\':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        done: _objectSpread(_objectSpread({}, state.done), {}, _defineProperty({}, action.index, action.done))\n      });\n    default:\n      return state;\n  }\n};\n\n// epics\n\nfunction initStore() {\n  var store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(rootReducer);\n  return store;\n}\n\n//# sourceURL=webpack://unit-demo-cra/./src/store.js?')},"./src/utils/uuid.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "UUID": () => (/* binding */ UUID)\n/* harmony export */ });\n/* harmony import */ var crypto_browserify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-browserify */ "./src/config/crypto-fallback.js");\n\n\n// генерируем какой-то идентификатор для запуска\nvar UUID = crypto_browserify__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();\n\n//# sourceURL=webpack://unit-demo-cra/./src/utils/uuid.js?')},"./node_modules/css-loader/dist/cjs.js!./src/components/index.module.css":(module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ".EPk3EXERT5xyM_B8zf0P {\\r\\n    padding: 0px;\\r\\n}\\r\\n", ""]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t"item": "EPk3EXERT5xyM_B8zf0P"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://unit-demo-cra/./src/components/index.module.css?./node_modules/css-loader/dist/cjs.js')},"./src/components/index.module.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.module.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/index.module.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_module_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_module_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_module_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_module_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://unit-demo-cra/./src/components/index.module.css?')}},__webpack_module_cache__={},deferred;function __webpack_require__(_){var e=__webpack_module_cache__[_];if(void 0!==e)return e.exports;var r=__webpack_module_cache__[_]={id:_,loaded:!1,exports:{}};return __webpack_modules__[_].call(r.exports,r,r.exports,__webpack_require__),r.loaded=!0,r.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(_,e,r,t)=>{if(!e){var n=1/0;for(i=0;i<deferred.length;i++){for(var[e,r,t]=deferred[i],o=!0,s=0;s<e.length;s++)(!1&t||n>=t)&&Object.keys(__webpack_require__.O).every((_=>__webpack_require__.O[_](e[s])))?e.splice(s--,1):(o=!1,t<n&&(n=t));if(o){deferred.splice(i--,1);var a=r();void 0!==a&&(_=a)}}return _}t=t||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>t;i--)deferred[i]=deferred[i-1];deferred[i]=[e,r,t]},__webpack_require__.n=_=>{var e=_&&_.__esModule?()=>_.default:()=>_;return __webpack_require__.d(e,{a:e}),e},__webpack_require__.d=(_,e)=>{for(var r in e)__webpack_require__.o(e,r)&&!__webpack_require__.o(_,r)&&Object.defineProperty(_,r,{enumerable:!0,get:e[r]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(_){if("object"==typeof window)return window}}(),__webpack_require__.o=(_,e)=>Object.prototype.hasOwnProperty.call(_,e),__webpack_require__.r=_=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})},__webpack_require__.nmd=_=>(_.paths=[],_.children||(_.children=[]),_),(()=>{var _={home:0};__webpack_require__.O.j=e=>0===_[e];var e=(e,r)=>{var t,n,[o,s,a]=r,i=0;if(o.some((e=>0!==_[e]))){for(t in s)__webpack_require__.o(s,t)&&(__webpack_require__.m[t]=s[t]);if(a)var d=a(__webpack_require__)}for(e&&e(r);i<o.length;i++)n=o[i],__webpack_require__.o(_,n)&&_[n]&&_[n][0](),_[n]=0;return __webpack_require__.O(d)},r=self.webpackChunkunit_demo_cra=self.webpackChunkunit_demo_cra||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),__webpack_require__.nc=void 0;var __webpack_exports__=__webpack_require__.O(void 0,["vendors"],(()=>__webpack_require__("./src/pages/Home.js")));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();