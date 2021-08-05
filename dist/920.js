exports.id = 920;
exports.ids = [920];
exports.modules = {

/***/ "./build/optimized.wasm":
/*!******************************!*\
  !*** ./build/optimized.wasm ***!
  \******************************/
/*! namespace exports */
/*! export add [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export memory [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module, module.id, __webpack_exports__, __webpack_require__.v, __webpack_require__.* */
/***/ ((module, exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.v(exports, module.id, "138adff1d6675d505eeb")

/***/ }),

/***/ "./src/domain/WasmModel.js":
/*!*********************************!*\
  !*** ./src/domain/WasmModel.js ***!
  \*********************************/
/*! namespace exports */
/*! export WasmModel [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, module, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
module.exports = (async () => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WasmModel": () => /* binding */ WasmModel
/* harmony export */ });
/* harmony import */ var _build_optimized_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../build/optimized.wasm */ "./build/optimized.wasm");
_build_optimized_wasm__WEBPACK_IMPORTED_MODULE_0__ = await Promise.resolve(_build_optimized_wasm__WEBPACK_IMPORTED_MODULE_0__);

var WasmModel = {
  modelName: "wasmmodel",
  endpoint: "wasmmodels",
  factory: function factory(dependencies) {
    return console.log("wasm output", (0,_build_optimized_wasm__WEBPACK_IMPORTED_MODULE_0__.add)(1, 2), dependencies);
  }
};
return __webpack_exports__;
})();

/***/ }),

/***/ "./src/domain/index.js":
/*!*****************************!*\
  !*** ./src/domain/index.js ***!
  \*****************************/
/*! namespace exports */
/*! export WasmModel [provided] [no usage info] [missing usage info prevents renaming] -> ./src/domain/WasmModel.js .WasmModel */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, module, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
module.exports = (async () => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WasmModel": () => /* reexport safe */ _WasmModel__WEBPACK_IMPORTED_MODULE_0__.WasmModel
/* harmony export */ });
/* harmony import */ var _WasmModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WasmModel */ "./src/domain/WasmModel.js");
_WasmModel__WEBPACK_IMPORTED_MODULE_0__ = await Promise.resolve(_WasmModel__WEBPACK_IMPORTED_MODULE_0__);

return __webpack_exports__;
})();

/***/ })

};
;
//# sourceMappingURL=920.js.map