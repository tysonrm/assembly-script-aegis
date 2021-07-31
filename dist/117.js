exports.id = 117;
exports.ids = [117];
exports.modules = {

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
  add: add
};
var wasmModule = loader.instantiateSync(fs.readFileSync(__dirname + "/build/optimized.wasm"), imports);
module.exports = wasmModule.exports;

/***/ })

};
;
//# sourceMappingURL=117.js.map