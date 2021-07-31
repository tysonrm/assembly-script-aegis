exports.id = 96;
exports.ids = [96];
exports.modules = {

/***/ "./build/index.js":
/*!************************!*\
  !*** ./build/index.js ***!
  \************************/
/*! default exports */
/*! export myModule [provided] [no usage info] [provision prevents renaming (no use info)] -> ./index.js */
/*!   exports [maybe provided (runtime-defined)] [maybe used in main (runtime-defined)] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.myModule = __webpack_require__(/*! .. */ "./index.js");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __dirname = "/";
var fs = __webpack_require__(/*! fs */ "fs");

var loader = __webpack_require__(/*! @assemblyscript/loader */ "./node_modules/@assemblyscript/loader/umd/index.js");

var imports = {
  /* imports go here */
};
var wasmModule = loader.instantiateSync(fs.readFileSync(__dirname + "/build/optimized.wasm"), imports);
module.exports = wasmModule.exports;

/***/ })

};
;
//# sourceMappingURL=96.js.map