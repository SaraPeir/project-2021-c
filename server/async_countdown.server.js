/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "async_countdown";
exports.ids = ["async_countdown"];
exports.modules = {

/***/ "./src/client/asyncComponents/Countdown/Countdown.js":
/*!***********************************************************!*\
  !*** ./src/client/asyncComponents/Countdown/Countdown.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shared_Headline_Headline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/Headline/Headline */ \"./src/client/shared/Headline/Headline.js\");\n\n\n\nfunction getDateDifference(date2, date1) {\n  var _MS_PER_DAY = 1000 * 60 * 60 * 24; // Discard the time and time-zone information.\n\n\n  var utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());\n  var utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());\n  return Math.floor((utc2 - utc1) / _MS_PER_DAY);\n}\n\nvar todayDate = new Date();\nvar nextYear = todayDate.getFullYear() + 1;\nvar nextYearDate = new Date(\"\".concat(nextYear, \"-01-01\"));\nvar dateDifference = getDateDifference(nextYearDate, todayDate);\n\nfunction Countdown() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_Headline_Headline__WEBPACK_IMPORTED_MODULE_1__.default, null, \"Count down to \".concat(nextYear)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"\".concat(dateDifference, \" days\")));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Countdown);\n\n//# sourceURL=webpack://project-2021-c/./src/client/asyncComponents/Countdown/Countdown.js?");

/***/ }),

/***/ "./src/client/shared/Headline/Headline.js":
/*!************************************************!*\
  !*** ./src/client/shared/Headline/Headline.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Headline_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Headline.scss */ \"./src/client/shared/Headline/Headline.scss\");\n/* harmony import */ var _Headline_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Headline_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Headline = function Headline(_ref) {\n  var children = _ref.children;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, children);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Headline);\n\n//# sourceURL=webpack://project-2021-c/./src/client/shared/Headline/Headline.js?");

/***/ }),

/***/ "./src/client/shared/Headline/Headline.scss":
/*!**************************************************!*\
  !*** ./src/client/shared/Headline/Headline.scss ***!
  \**************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://project-2021-c/./src/client/shared/Headline/Headline.scss?");

/***/ })

};
;