/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./config/development.js":
/*!*******************************!*\
  !*** ./config/development.js ***!
  \*******************************/
/***/ ((module) => {

module.exports = {
    apiUrl: "/"
}

/***/ }),

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

if (false) {}
else {
    module.exports = __webpack_require__(/*! ./development.js */ "./config/development.js");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/mahal-webpack-loader/lib/plugin/scoped_css_loader.js!./node_modules/mahal-webpack-loader/lib/index.js!./src/app.mahal?mahal&type=style&lang=css&index=0&id=901e8188&scoped=":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/mahal-webpack-loader/lib/plugin/scoped_css_loader.js!./node_modules/mahal-webpack-loader/lib/index.js!./src/app.mahal?mahal&type=style&lang=css&index=0&id=901e8188&scoped= ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "\n", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/mahal-webpack-loader/lib/plugin/scoped_css_loader.js!./node_modules/mahal-webpack-loader/lib/index.js!./src/components/count.mahal?mahal&type=style&lang=css&index=0&id=a52bbdac&scoped=":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/mahal-webpack-loader/lib/plugin/scoped_css_loader.js!./node_modules/mahal-webpack-loader/lib/index.js!./src/components/count.mahal?mahal&type=style&lang=css&index=0&id=a52bbdac&scoped= ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

/***/ "./src/app.mahal":
/*!***********************!*\
  !*** ./src/app.mahal ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_mahal_mahal_type_html_id_901e8188_scoped_false__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.mahal?mahal&type=html&id=901e8188&scoped=false */ "./src/app.mahal?mahal&type=html&id=901e8188&scoped=false");
/* harmony import */ var _app_mahal_mahal_type_style_lang_css_index_0_id_901e8188_scoped___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.mahal?mahal&type=style&lang=css&index=0&id=901e8188&scoped= */ "./src/app.mahal?mahal&type=style&lang=css&index=0&id=901e8188&scoped=");
/* harmony import */ var _app_mahal_mahal_type_script_lang_ts_id_901e8188__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.mahal?mahal&type=script&lang=ts&id=901e8188 */ "./src/app.mahal?mahal&type=script&lang=ts&id=901e8188");
/* harmony import */ var _node_modules_mahal_webpack_loader_lib_runtime_render_component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/mahal-webpack-loader/lib/runtime/render_component.js */ "./node_modules/mahal-webpack-loader/lib/runtime/render_component.js");






;
    var component = (0,_node_modules_mahal_webpack_loader_lib_runtime_render_component_js__WEBPACK_IMPORTED_MODULE_3__.renderComponent)({
        script:_app_mahal_mahal_type_script_lang_ts_id_901e8188__WEBPACK_IMPORTED_MODULE_2__["default"],
        render:_app_mahal_mahal_type_html_id_901e8188_scoped_false__WEBPACK_IMPORTED_MODULE_0__["default"]
    })
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component);

/***/ }),

/***/ "./src/components/count.mahal":
/*!************************************!*\
  !*** ./src/components/count.mahal ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _count_mahal_mahal_type_html_id_a52bbdac_scoped_false__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./count.mahal?mahal&type=html&id=a52bbdac&scoped=false */ "./src/components/count.mahal?mahal&type=html&id=a52bbdac&scoped=false");
/* harmony import */ var _count_mahal_mahal_type_style_lang_css_index_0_id_a52bbdac_scoped___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./count.mahal?mahal&type=style&lang=css&index=0&id=a52bbdac&scoped= */ "./src/components/count.mahal?mahal&type=style&lang=css&index=0&id=a52bbdac&scoped=");
/* harmony import */ var _count_mahal_mahal_type_script_lang_ts_id_a52bbdac__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./count.mahal?mahal&type=script&lang=ts&id=a52bbdac */ "./src/components/count.mahal?mahal&type=script&lang=ts&id=a52bbdac");
/* harmony import */ var _node_modules_mahal_webpack_loader_lib_runtime_render_component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/mahal-webpack-loader/lib/runtime/render_component.js */ "./node_modules/mahal-webpack-loader/lib/runtime/render_component.js");






;
    var component = (0,_node_modules_mahal_webpack_loader_lib_runtime_render_component_js__WEBPACK_IMPORTED_MODULE_3__.renderComponent)({
        script:_count_mahal_mahal_type_script_lang_ts_id_a52bbdac__WEBPACK_IMPORTED_MODULE_2__["default"],
        render:_count_mahal_mahal_type_html_id_a52bbdac_scoped_false__WEBPACK_IMPORTED_MODULE_0__["default"]
    })
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component);

/***/ }),

/***/ "./src/app.mahal?mahal&type=html&id=901e8188&scoped=false":
/*!****************************************************************!*\
  !*** ./src/app.mahal?mahal&type=html&id=901e8188&scoped=false ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(renderer
) {
const ctx = this;
const ce = renderer.createElement;
const ct = renderer.createTextNode;
const f = renderer.format;
const he = renderer.runExp;
return ce('Count', [], {})
}

/***/ }),

/***/ "./src/components/count.mahal?mahal&type=html&id=a52bbdac&scoped=false":
/*!*****************************************************************************!*\
  !*** ./src/components/count.mahal?mahal&type=html&id=a52bbdac&scoped=false ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anonymous)
/* harmony export */ });
function anonymous(renderer
) {
const ctx = this;
const ce = renderer.createElement;
const ct = renderer.createTextNode;
const f = renderer.format;
const he = renderer.runExp;
return ce('div', [ce('div', [he(() => {
    return ct(ctx.count)
}, ['count'])], {}), ce('button', [ct("Increment count")], {
    on: {
        click: {
            handlers: [ctx.incrementCount],
            isNative: false,
            option: {},
            modifiers: []
        }
    }
}), ce('button', [ct("Decrement count")], {
    on: {
        click: {
            handlers: [ctx.decrementCount],
            isNative: false,
            option: {},
            modifiers: []
        }
    }
})], {})
}

/***/ }),

/***/ "./src/app.mahal?mahal&type=style&lang=css&index=0&id=901e8188&scoped=":
/*!*****************************************************************************!*\
  !*** ./src/app.mahal?mahal&type=style&lang=css&index=0&id=901e8188&scoped= ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_mahal_webpack_loader_lib_plugin_scoped_css_loader_js_node_modules_mahal_webpack_loader_lib_index_js_app_mahal_mahal_type_style_lang_css_index_0_id_901e8188_scoped___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/style-loader/dist/cjs.js!../node_modules/css-loader/dist/cjs.js!../node_modules/mahal-webpack-loader/lib/plugin/scoped_css_loader.js!../node_modules/mahal-webpack-loader/lib/index.js!./app.mahal?mahal&type=style&lang=css&index=0&id=901e8188&scoped= */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/mahal-webpack-loader/lib/plugin/scoped_css_loader.js!./node_modules/mahal-webpack-loader/lib/index.js!./src/app.mahal?mahal&type=style&lang=css&index=0&id=901e8188&scoped=");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_mahal_webpack_loader_lib_plugin_scoped_css_loader_js_node_modules_mahal_webpack_loader_lib_index_js_app_mahal_mahal_type_style_lang_css_index_0_id_901e8188_scoped___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/count.mahal?mahal&type=style&lang=css&index=0&id=a52bbdac&scoped=":
/*!******************************************************************************************!*\
  !*** ./src/components/count.mahal?mahal&type=style&lang=css&index=0&id=a52bbdac&scoped= ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_mahal_webpack_loader_lib_plugin_scoped_css_loader_js_node_modules_mahal_webpack_loader_lib_index_js_count_mahal_mahal_type_style_lang_css_index_0_id_a52bbdac_scoped___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/mahal-webpack-loader/lib/plugin/scoped_css_loader.js!../../node_modules/mahal-webpack-loader/lib/index.js!./count.mahal?mahal&type=style&lang=css&index=0&id=a52bbdac&scoped= */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/mahal-webpack-loader/lib/plugin/scoped_css_loader.js!./node_modules/mahal-webpack-loader/lib/index.js!./src/components/count.mahal?mahal&type=style&lang=css&index=0&id=a52bbdac&scoped=");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_mahal_webpack_loader_lib_plugin_scoped_css_loader_js_node_modules_mahal_webpack_loader_lib_index_js_count_mahal_mahal_type_style_lang_css_index_0_id_a52bbdac_scoped___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/app.mahal?mahal&type=script&lang=ts&id=901e8188":
/*!*************************************************************!*\
  !*** ./src/app.mahal?mahal&type=script&lang=ts&id=901e8188 ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mahal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mahal */ "./node_modules/mahal/dist/npm.export.js");
/* harmony import */ var mahal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mahal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_count_mahal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/count.mahal */ "./src/components/count.mahal");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let default_1 = class extends mahal__WEBPACK_IMPORTED_MODULE_0__.Component {
};
default_1 = __decorate([
    (0,mahal__WEBPACK_IMPORTED_MODULE_0__.Children)({
        Count: _components_count_mahal__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], default_1);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (default_1);


/***/ }),

/***/ "./src/components/count.mahal?mahal&type=script&lang=ts&id=a52bbdac":
/*!**************************************************************************!*\
  !*** ./src/components/count.mahal?mahal&type=script&lang=ts&id=a52bbdac ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ default_1)
/* harmony export */ });
/* harmony import */ var mahal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mahal */ "./node_modules/mahal/dist/npm.export.js");
/* harmony import */ var mahal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mahal__WEBPACK_IMPORTED_MODULE_0__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

class default_1 extends mahal__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor() {
        super(...arguments);
        this.count = 0;
    }
    incrementCount() {
        this.count++;
    }
    decrementCount() {
        this.count--;
    }
}
__decorate([
    mahal__WEBPACK_IMPORTED_MODULE_0__.Reactive,
    __metadata("design:type", Object)
], default_1.prototype, "count", void 0);


/***/ }),

/***/ "./node_modules/mahal-webpack-loader/lib/runtime/render_component.js":
/*!***************************************************************************!*\
  !*** ./node_modules/mahal-webpack-loader/lib/runtime/render_component.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.renderComponent = function ({
    render, script
}) {
    script.prototype.render = render;
    return script;
}

/***/ }),

/***/ "./node_modules/mahal/dist/mahal.commonjs2.js":
/*!****************************************************!*\
  !*** ./node_modules/mahal/dist/mahal.commonjs2.js ***!
  \****************************************************/
/***/ ((module) => {

/*!
 * @license :mahal - V1.1.1 - 13/03/2022
 * https://github.com/ujjwalguptaofficial/mahal
 * Copyright (c) 2022 @Ujjwal Gupta; Licensed APACHE 2.0
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_341__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_341__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_341__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_341__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_341__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_341__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_341__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_341__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_341__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_341__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_341__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_341__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_341__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_341__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_341__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_341__(__nested_webpack_require_341__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_3817__) {

"use strict";
__nested_webpack_require_3817__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_3817__(1);
/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "isPrimitive", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "isNull", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isNull"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "isArray", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isArray"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "isArrayIndex", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isArrayIndex"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "isObject", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isObject"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "isString", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isString"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "getFromWindow", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["getFromWindow"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "nextTick", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["nextTick"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "getObjectLength", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["getObjectLength"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "merge", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["merge"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "setAttribute", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["setAttribute"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "forOwn", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["forOwn"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "isKeyExist", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isKeyExist"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "getDataype", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["getDataype"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "EventBus", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["EventBus"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "getAttribute", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["getAttribute"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "replaceEl", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["replaceEl"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "clone", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["clone"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "executeRender", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["executeRender"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "initComponent", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["initComponent"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "Timer", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["Timer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "createComponent", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["createComponent"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "hashifyArray", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["hashifyArray"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "promiseResolve", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["promiseResolve"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "lazyComponent", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["lazyComponent"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "emitStateChange", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["emitStateChange"]; });

/* harmony import */ var _abstracts__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_3817__(40);
/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "Component", function() { return _abstracts__WEBPACK_IMPORTED_MODULE_1__["Component"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "Plugin", function() { return _abstracts__WEBPACK_IMPORTED_MODULE_1__["Plugin"]; });

/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_3817__(66);
/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "Template", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["Template"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "Prop", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["Prop"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "Children", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["Children"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "Formatter", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["Formatter"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "Reactive", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["Reactive"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "Directive", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["Directive"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "Computed", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["Computed"]; });

/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_3817__(30);
/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "ERROR_TYPE", function() { return _enums__WEBPACK_IMPORTED_MODULE_3__["ERROR_TYPE"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "HTML_TAG", function() { return _enums__WEBPACK_IMPORTED_MODULE_3__["HTML_TAG"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "LIFECYCLE_EVENT", function() { return _enums__WEBPACK_IMPORTED_MODULE_3__["LIFECYCLE_EVENT"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "DATA_TYPE", function() { return _enums__WEBPACK_IMPORTED_MODULE_3__["DATA_TYPE"]; });

/* harmony import */ var _mahal__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_3817__(51);
/* harmony reexport (safe) */ __nested_webpack_require_3817__.d(__webpack_exports__, "Mahal", function() { return _mahal__WEBPACK_IMPORTED_MODULE_4__["Mahal"]; });








/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_10942__) {

"use strict";
__nested_webpack_require_10942__.r(__webpack_exports__);
/* harmony import */ var _is_primitive__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_10942__(2);
/* harmony reexport (safe) */ __nested_webpack_require_10942__.d(__webpack_exports__, "isPrimitive", function() { return _is_primitive__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"]; });

/* harmony import */ var _is_null__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_10942__(3);
/* harmony reexport (safe) */ __nested_webpack_require_10942__.d(__webpack_exports__, "isNull", function() { return _is_null__WEBPACK_IMPORTED_MODULE_1__["isNull"]; });

/* harmony import */ var _is_array__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_10942__(4);
/* harmony reexport (safe) */ __nested_webpack_require_10942__.d(__webpack_exports__, "isArray", function() { return _is_array__WEBPACK_IMPORTED_MODULE_2__["isArray"]; });

/* harmony import */ var _is_array_index__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_10942__(5);
/* harmony reexport (safe) */ __nested_webpack_require_10942__.d(__webpack_exports__, "isArrayIndex", function() { return _is_array_index__WEBPACK_IMPORTED_MODULE_3__["isArrayIndex"]; });

/* harmony import */ var _is_object__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_10942__(6);
/* harmony reexport (safe) */ __nested_webpack_require_10942__.d(__webpack_exports__, "isObject", function() { return _is_object__WEBPACK_IMPORTED_MODULE_4__["isObject"]; });

/* harmony import */ var _is_string__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_10942__(7);
/* harmony reexport (safe) */ __nested_webpack_require_10942__.d(__webpack_exports__, "isString", function() { return _is_string__WEBPACK_IMPORTED_MODULE_5__["isString"]; });

/* harmony import */ var _get_from_window__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_10942__(8);
/* harmony reexport (safe) */ __nested_webpack_require_10942__.d(__webpack_exports__, "getFromWindow", function() { return _get_from_window__WEBPACK_IMPORTED_MODULE_6__["getFromWindow"]; });

/* harmony import */ var _next_tick__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_10942__(9);
/* harmony reexport (safe) */ __nested_webpack_require_10942__.d(__webpack_exports__, "nextTick", function() { return _next_tick__WEBPACK_IMPORTED_MODULE_7__["nextTick"]; });

/* harmony import */ var _get_object_length__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_10942__(10);
/* harmony reexport (safe) */ __nested_webpack_require_10942__.d(__webpack_exports__, "getObjectLength", function() { return _get_object_length__WEBPACK_IMPORTED_MODULE_8__["getObjectLength"]; });

/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_10942__(11);
/* harmony reexport (safe) */ __nested_webpack_require_10942__.d(__webpack_exports__, "merge", function() { return _merge__WEBPACK_IMPORTED_MODULE_9__["merge"]; });

/* harmony import */ var _set_attribute__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_10942__(12);
/* harmony reexport (safe) */ __nested_webpack_require_10942__.d(__webpack_exports__, "setAttribute", function() { return _set_attribute__WEBPACK_IMPORTED_MODULE_10__["setAttribute"]; });

/* harmony import */ var _for_own__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_10942__(13);
/* harmony reexport (safe) */ __nested_webpack_require_10942__.d(__webpack_exports__, "forOwn", function() { return _for_own__WEBPACK_IMPORTED_MODULE_11__["forOwn"]; });

/* harmony import */ var _is_key_exist__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_10942__(14);
/* harmony reexport (safe) */ __nested_webpack_require_10942__.d(__webpack_exports__, "isKeyExist", function() { return _is_key_exist__WEBPACK_IMPORTED_MODULE_12__["isKeyExist"]; });

/* harmony import */ var _get_data_type__WEBPACK_IMPORTED_MODULE_13__ = __nested_webpack_require_10942__(15);
/* harmony reexport (safe) */ __nested_webpack_require_10942__.d(__webpack_exports__, "getDataype", function() { return _get_data_type__WEBPACK_IMPORTED_MODULE_13__["getDataype"]; });

/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_14__ = __nested_webpack_require_10942__(16);
/* harmony reexport (safe) */ __nested_webpack_require_10942__.d(__webpack_exports__, "EventBus", function() { return _event_bus__WEBPACK_IMPORTED_MODULE_14__["EventBus"]; });

/* harmony import */ var _get_attribute__WEBPACK_IMPORTED_MODULE_15__ = __nested_webpack_require_10942__(18);
/* harmony reexport (safe) */ __nested_webpack_require_10942__.d(__webpack_exports__, "getAttribute", function() { return _get_attribute__WEBPACK_IMPORTED_MODULE_15__["getAttribute"]; });

/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_16__ = __nested_webpack_require_10942__(19);
/* harmony reexport (safe) */ __nested_webpack_require_10942__.d(__webpack_exports__, "replaceEl", function() { return _dom__WEBPACK_IMPORTED_MODULE_16__["replaceEl"]; });

/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_17__ = __nested_webpack_require_10942__(17);
/* harmony reexport (safe) */ __nested_webpack_require_10942__.d(__webpack_exports__, "clone", function() { return _clone__WEBPACK_IMPORTED_MODULE_17__["clone"]; });

/* harmony import */ var _exeute_render__WEBPACK_IMPORTED_MODULE_18__ = __nested_webpack_require_10942__(20);
/* harmony reexport (safe) */ __nested_webpack_require_10942__.d(__webpack_exports__, "executeRender", function() { return _exeute_render__WEBPACK_IMPORTED_MODULE_18__["executeRender"]; });

/* harmony import */ var _init_component__WEBPACK_IMPORTED_MODULE_19__ = __nested_webpack_require_10942__(59);
/* harmony reexport (safe) */ __nested_webpack_require_10942__.d(__webpack_exports__, "initComponent", function() { return _init_component__WEBPACK_IMPORTED_MODULE_19__["initComponent"]; });

/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_20__ = __nested_webpack_require_10942__(60);
/* harmony reexport (safe) */ __nested_webpack_require_10942__.d(__webpack_exports__, "Timer", function() { return _timer__WEBPACK_IMPORTED_MODULE_20__["Timer"]; });

/* harmony import */ var _create_component__WEBPACK_IMPORTED_MODULE_21__ = __nested_webpack_require_10942__(61);
/* harmony reexport (safe) */ __nested_webpack_require_10942__.d(__webpack_exports__, "createComponent", function() { return _create_component__WEBPACK_IMPORTED_MODULE_21__["createComponent"]; });

/* harmony import */ var _hashify_array__WEBPACK_IMPORTED_MODULE_22__ = __nested_webpack_require_10942__(63);
/* harmony reexport (safe) */ __nested_webpack_require_10942__.d(__webpack_exports__, "hashifyArray", function() { return _hashify_array__WEBPACK_IMPORTED_MODULE_22__["hashifyArray"]; });

/* harmony import */ var _promise_resolve__WEBPACK_IMPORTED_MODULE_23__ = __nested_webpack_require_10942__(64);
/* harmony reexport (safe) */ __nested_webpack_require_10942__.d(__webpack_exports__, "promiseResolve", function() { return _promise_resolve__WEBPACK_IMPORTED_MODULE_23__["promiseResolve"]; });

/* harmony import */ var _lazy_component__WEBPACK_IMPORTED_MODULE_24__ = __nested_webpack_require_10942__(65);
/* harmony reexport (safe) */ __nested_webpack_require_10942__.d(__webpack_exports__, "lazyComponent", function() { return _lazy_component__WEBPACK_IMPORTED_MODULE_24__["lazyComponent"]; });

/* harmony import */ var _emit_state_change__WEBPACK_IMPORTED_MODULE_25__ = __nested_webpack_require_10942__(62);
/* harmony reexport (safe) */ __nested_webpack_require_10942__.d(__webpack_exports__, "emitStateChange", function() { return _emit_state_change__WEBPACK_IMPORTED_MODULE_25__["emitStateChange"]; });





























/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_17989__) {

"use strict";
__nested_webpack_require_17989__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_17989__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
const isPrimitive = (value) => {
    switch (typeof value) {
        case 'undefined':
        case 'object':
            return false;
    }
    return true;
};


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_18424__) {

"use strict";
__nested_webpack_require_18424__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_18424__.d(__webpack_exports__, "isNull", function() { return isNull; });
const isNull = (value) => {
    return value == null;
};


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_18744__) {

"use strict";
__nested_webpack_require_18744__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_18744__.d(__webpack_exports__, "isArray", function() { return isArray; });
const isArray = (value) => {
    return Array.isArray(value);
};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_19074__) {

"use strict";
__nested_webpack_require_19074__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_19074__.d(__webpack_exports__, "isArrayIndex", function() { return isArrayIndex; });
const isArrayIndex = (value) => {
    return value === parseInt(value, 10);
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_19428__) {

"use strict";
__nested_webpack_require_19428__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_19428__.d(__webpack_exports__, "isObject", function() { return isObject; });
const isObject = (value) => {
    return value != null && typeof value === "object";
};


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_19783__) {

"use strict";
__nested_webpack_require_19783__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_19783__.d(__webpack_exports__, "isString", function() { return isString; });
const isString = (value) => {
    return typeof value === "string";
};


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_20121__) {

"use strict";
__nested_webpack_require_20121__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_20121__.d(__webpack_exports__, "getFromWindow", function() { return getFromWindow; });
const getFromWindow = (prop) => {
    return window[prop];
};


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_20460__) {

"use strict";
__nested_webpack_require_20460__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_20460__.d(__webpack_exports__, "nextTick", function() { return nextTick; });
let isExecuting = false;
let callbacks = [];
const microTaskExecutor = window.queueMicrotask || ((cb) => {
    setTimeout(cb, 0);
});
const flushCallbacks = () => {
    microTaskExecutor(() => {
        const copies = callbacks.slice(0);
        callbacks = [];
        isExecuting = false;
        copies.forEach(cb => {
            cb();
        });
    });
};
const nextTick = (cb) => {
    let promise;
    if (cb == null) {
        promise = new Promise((res) => {
            cb = res;
        });
    }
    callbacks.push(cb);
    if (!isExecuting) {
        isExecuting = true;
        flushCallbacks();
    }
    if (promise) {
        return promise;
    }
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_21398__) {

"use strict";
__nested_webpack_require_21398__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_21398__.d(__webpack_exports__, "getObjectLength", function() { return getObjectLength; });
const getObjectLength = (value) => {
    return value.length || Object.keys(value).length;
};


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_21774__) {

"use strict";
__nested_webpack_require_21774__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_21774__.d(__webpack_exports__, "merge", function() { return merge; });
const merge = (...obj) => {
    return Object.assign({}, ...obj);
};


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_22105__) {

"use strict";
__nested_webpack_require_22105__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_22105__.d(__webpack_exports__, "setAttribute", function() { return setAttribute; });
const setAttribute = (element, key, value) => {
    // if (element.nodeType === 8) return;
    if (element.nodeType === 1 && key === "value") {
        return element.value = value;
    }
    return element.setAttribute(key, value);
};


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_22617__) {

"use strict";
__nested_webpack_require_22617__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_22617__.d(__webpack_exports__, "forOwn", function() { return forOwn; });
const forOwn = (obj, cb) => {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            cb(key, obj[key]);
        }
    }
};


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_23029__) {

"use strict";
__nested_webpack_require_23029__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_23029__.d(__webpack_exports__, "isKeyExist", function() { return isKeyExist; });
const isKeyExist = (obj, key) => {
    return obj[key] != null;
};


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_23368__) {

"use strict";
__nested_webpack_require_23368__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_23368__.d(__webpack_exports__, "getDataype", function() { return getDataype; });
const getDataype = (value) => {
    if (value == null) {
        return "null";
    }
    const type = typeof value;
    switch (type) {
        case 'object':
            if (Array.isArray(value)) {
                return "array";
            }
        default:
            return type;
    }
};


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_23937__) {

"use strict";
__nested_webpack_require_23937__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_23937__.d(__webpack_exports__, "EventBus", function() { return EventBus; });
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_23937__(17);

class EventBus {
    constructor(ctx) {
        this._events = {};
        this._ctx = ctx;
    }
    /**
     * subscribe to event
     *
     * @param {string} event
     * @param {Function} cb
     * @return {*}
     * @memberof EventBus
     */
    on(event, cb) {
        if (this._events[event] == null) {
            this._events[event] = [];
        }
        this._events[event].push(cb);
        return this;
    }
    /**
     * unsubscribe to event
     *
     * if callback is provided, then only callback is removed otherwise all events subscriber for that event
     *
     * @param {string} event
     * @param {Function} cb
     * @memberof EventBus
     */
    off(event, cb) {
        if (this._events[event]) {
            if (cb) {
                const index = this._events[event].indexOf(cb);
                this._events[event].splice(index, 1);
            }
            else {
                this._events[event] = [];
            }
        }
    }
    /**
     * emit event to all listener at a time
     *
     * @param {string} event
     * @param {*} args
     * @return {*}
     * @memberof EventBus
     */
    emit(event, ...args) {
        const events = this._events[event] || [];
        return Promise.all(events.map(cb => {
            const result = cb.call(this._ctx, ...args);
            return result && result.then ? result : Promise.resolve(result);
        }));
    }
    /**
     * linearly calls events - in case of async: wait for one's completion and then call next
     *
     * @param {string} event
     * @param {*} args
     * @return {*}
     * @memberof EventBus
     */
    emitLinear(event, ...args) {
        const events = Object(_clone__WEBPACK_IMPORTED_MODULE_0__["clone"])(this._events[event]) || [];
        let index = 0;
        const length = events.length;
        const results = [];
        const callMethod = () => {
            const eventCb = events[index++];
            if (eventCb) {
                const result = eventCb.call(this._ctx, ...args);
                return result && result.then ? result : Promise.resolve(result);
            }
            return Promise.resolve(null);
        };
        return new Promise((res) => {
            const checkAndCall = () => {
                if (index < length) {
                    callMethod().then(result => {
                        results.push(result);
                        checkAndCall();
                    });
                }
                else {
                    res(results);
                }
            };
            checkAndCall();
        });
    }
    destroy() {
        this._events = null;
        this._ctx = null;
    }
    getEvent(eventName) {
        return this._events[eventName];
    }
}


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_27050__) {

"use strict";
__nested_webpack_require_27050__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_27050__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony import */ var _is_object__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_27050__(6);
/* harmony import */ var _is_array__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_27050__(4);


const clone = (obj) => {
    if (Object(_is_object__WEBPACK_IMPORTED_MODULE_0__["isObject"])(obj)) {
        // if (isArray(obj)) {
        //     const copy = [];
        //     for (const i in obj) {
        //         copy[i] = obj[i] != null && isObject(obj[i]) ? clone(obj[i]) : obj[i];
        //     }
        //     return copy;
        // }
        const copy = Object(_is_array__WEBPACK_IMPORTED_MODULE_1__["isArray"])(obj) ? [] : {};
        for (const i in obj) {
            copy[i] = obj[i] != null && Object(_is_object__WEBPACK_IMPORTED_MODULE_0__["isObject"])(obj[i]) ? clone(obj[i]) : obj[i];
        }
        return copy;
    }
    return obj;
};


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_28161__) {

"use strict";
__nested_webpack_require_28161__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_28161__.d(__webpack_exports__, "getAttribute", function() { return getAttribute; });
const getAttribute = (element, key) => {
    if (element.nodeType === 8) {
        return null;
    }
    return element.getAttribute(key);
};


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_28580__) {

"use strict";
__nested_webpack_require_28580__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_28580__.d(__webpack_exports__, "replaceEl", function() { return replaceEl; });
// export const destroyEl = (el: HTMLElement) => {
// }
const replaceEl = (oldEl, newEl) => {
    oldEl.parentNode.replaceChild(newEl, oldEl);
};


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_28996__) {

"use strict";
__nested_webpack_require_28996__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_28996__.d(__webpack_exports__, "executeRender", function() { return executeRender; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_28996__(21);
/* harmony import */ var _mahal__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_28996__(51);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_28996__(30);



function getRender() {
    return this.render || (() => {
        if (true) {
            if (!_mahal__WEBPACK_IMPORTED_MODULE_1__["Mahal"].createRenderer) {
                new _helpers__WEBPACK_IMPORTED_MODULE_0__["Logger"](_enums__WEBPACK_IMPORTED_MODULE_2__["ERROR_TYPE"].RendererNotFound).throwPlain();
            }
        }
        return _mahal__WEBPACK_IMPORTED_MODULE_1__["Mahal"].createRenderer(this.template);
    })();
}
const executeRender = (comp, children) => {
    const renderFn = getRender.call(comp);
    return renderFn.call(comp, {
        createElement: _helpers__WEBPACK_IMPORTED_MODULE_0__["createElement"].bind(comp),
        createTextNode: _helpers__WEBPACK_IMPORTED_MODULE_0__["createTextNode"].bind(comp),
        format: comp.format.bind(comp),
        runExp: _helpers__WEBPACK_IMPORTED_MODULE_0__["handleExpression"].bind(comp),
        children: children || []
        // runForExp: this.handleForExp_.bind(this)
    }).then((el) => {
        comp.element = el;
        const clear = _helpers__WEBPACK_IMPORTED_MODULE_0__["clearAll"].bind(comp);
        el.addEventListener(_enums__WEBPACK_IMPORTED_MODULE_2__["LIFECYCLE_EVENT"].Destroy, clear);
        comp.emit(_enums__WEBPACK_IMPORTED_MODULE_2__["LIFECYCLE_EVENT"].Mount);
        comp.isMounted = true;
        comp.on(_enums__WEBPACK_IMPORTED_MODULE_2__["LIFECYCLE_EVENT"].Destroy, () => {
            el.removeEventListener(_enums__WEBPACK_IMPORTED_MODULE_2__["LIFECYCLE_EVENT"].Destroy, clear);
        });
        return el;
    });
};


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_31073__) {

"use strict";
__nested_webpack_require_31073__.r(__webpack_exports__);
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_31073__(22);
/* harmony reexport (safe) */ __nested_webpack_require_31073__.d(__webpack_exports__, "Observer", function() { return _observer__WEBPACK_IMPORTED_MODULE_0__["Observer"]; });

/* harmony import */ var _do_nothing__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_31073__(25);
/* harmony reexport (safe) */ __nested_webpack_require_31073__.d(__webpack_exports__, "doNothing", function() { return _do_nothing__WEBPACK_IMPORTED_MODULE_1__["doNothing"]; });

/* harmony import */ var _create_coment_node__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_31073__(26);
/* harmony reexport (safe) */ __nested_webpack_require_31073__.d(__webpack_exports__, "createCommentNode", function() { return _create_coment_node__WEBPACK_IMPORTED_MODULE_2__["createCommentNode"]; });

/* harmony import */ var _run_promises_in_sequence__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_31073__(27);
/* harmony reexport (safe) */ __nested_webpack_require_31073__.d(__webpack_exports__, "runPromisesInSequence", function() { return _run_promises_in_sequence__WEBPACK_IMPORTED_MODULE_3__["runPromisesInSequence"]; });

/* harmony import */ var _create_text_node__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_31073__(28);
/* harmony reexport (safe) */ __nested_webpack_require_31073__.d(__webpack_exports__, "createTextNode", function() { return _create_text_node__WEBPACK_IMPORTED_MODULE_4__["createTextNode"]; });

/* harmony import */ var _handle_expression__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_31073__(29);
/* harmony reexport (safe) */ __nested_webpack_require_31073__.d(__webpack_exports__, "handleExpression", function() { return _handle_expression__WEBPACK_IMPORTED_MODULE_5__["handleExpression"]; });

/* harmony import */ var _handle_attribute__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_31073__(39);
/* harmony reexport (safe) */ __nested_webpack_require_31073__.d(__webpack_exports__, "handleAttribute", function() { return _handle_attribute__WEBPACK_IMPORTED_MODULE_6__["handleAttribute"]; });

/* harmony import */ var _handle_directive__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_31073__(44);
/* harmony reexport (safe) */ __nested_webpack_require_31073__.d(__webpack_exports__, "handleDirective", function() { return _handle_directive__WEBPACK_IMPORTED_MODULE_7__["handleDirective"]; });

/* harmony import */ var _handle_in_place__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_31073__(47);
/* harmony reexport (safe) */ __nested_webpack_require_31073__.d(__webpack_exports__, "handleInPlace", function() { return _handle_in_place__WEBPACK_IMPORTED_MODULE_8__["handleInPlace"]; });

/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_31073__(48);
/* harmony reexport (safe) */ __nested_webpack_require_31073__.d(__webpack_exports__, "createElement", function() { return _create_element__WEBPACK_IMPORTED_MODULE_9__["createElement"]; });

/* harmony import */ var _emit_update__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_31073__(36);
/* harmony reexport (safe) */ __nested_webpack_require_31073__.d(__webpack_exports__, "emitUpdate", function() { return _emit_update__WEBPACK_IMPORTED_MODULE_10__["emitUpdate"]; });

/* harmony import */ var _comp_clear_all__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_31073__(49);
/* harmony reexport (safe) */ __nested_webpack_require_31073__.d(__webpack_exports__, "clearAll", function() { return _comp_clear_all__WEBPACK_IMPORTED_MODULE_11__["clearAll"]; });

/* harmony import */ var _get_expression_value__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_31073__(43);
/* harmony reexport (safe) */ __nested_webpack_require_31073__.d(__webpack_exports__, "getAttributeValue", function() { return _get_expression_value__WEBPACK_IMPORTED_MODULE_12__["getAttributeValue"]; });

/* harmony import */ var _emit_error__WEBPACK_IMPORTED_MODULE_13__ = __nested_webpack_require_31073__(37);
/* harmony reexport (safe) */ __nested_webpack_require_31073__.d(__webpack_exports__, "emitError", function() { return _emit_error__WEBPACK_IMPORTED_MODULE_13__["emitError"]; });

/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_14__ = __nested_webpack_require_31073__(38);
/* harmony reexport (safe) */ __nested_webpack_require_31073__.d(__webpack_exports__, "Logger", function() { return _logger__WEBPACK_IMPORTED_MODULE_14__["Logger"]; });

/* harmony import */ var _index_of__WEBPACK_IMPORTED_MODULE_15__ = __nested_webpack_require_31073__(24);
/* harmony reexport (safe) */ __nested_webpack_require_31073__.d(__webpack_exports__, "indexOf", function() { return _index_of__WEBPACK_IMPORTED_MODULE_15__["indexOf"]; });

/* harmony import */ var _replace_if_null__WEBPACK_IMPORTED_MODULE_16__ = __nested_webpack_require_31073__(50);
/* harmony reexport (safe) */ __nested_webpack_require_31073__.d(__webpack_exports__, "replaceIfNull", function() { return _replace_if_null__WEBPACK_IMPORTED_MODULE_16__["replaceIfNull"]; });




















/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_35907__) {

"use strict";
__nested_webpack_require_35907__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_35907__.d(__webpack_exports__, "Observer", function() { return Observer; });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_35907__(23);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_35907__(1);
/* harmony import */ var _index_of__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_35907__(24);



class Observer {
    constructor(onChange, component) {
        this.onChange = onChange;
        this.component = component;
    }
    create(input, keys, prefix = "") {
        const onChange = this.onChange;
        const isInputArray = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(input);
        keys = keys || (isInputArray ? _constant__WEBPACK_IMPORTED_MODULE_0__["ARRAY_MUTABLE_METHODS"] : Object.keys(input));
        keys.forEach(key => {
            this.component['__reactives__'][prefix + key] = true;
        });
        const hashkeys = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["hashifyArray"])(keys);
        const registerChild = (key, newValue, oldValue) => {
            const objectValKeyWithPrefix = `${prefix}${key}.`;
            if (oldValue != null) {
                const mergedNewValue = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["merge"])(oldValue, newValue || {});
                for (const valKey in mergedNewValue) {
                    onChange(`${objectValKeyWithPrefix}${valKey}`, mergedNewValue[valKey], oldValue[valKey]);
                }
            }
            return this.create(newValue, null, objectValKeyWithPrefix);
        };
        if (isInputArray) {
            const arrProxy = new Proxy(input, {
                get(target, prop, receiver) {
                    if (hashkeys[prop]) {
                        return (...args) => {
                            const result = target[prop](...args);
                            onChange(prefix + prop, args);
                            return result;
                        };
                    }
                    return Reflect.get(target, prop, receiver);
                },
                set: (target, prop, newValue, receiver) => {
                    const setValue = Reflect.set(target, prop, newValue, receiver);
                    onChange(`${prefix}update`, { key: Number(prop), value: newValue });
                    return setValue;
                }
            });
            return arrProxy;
        }
        const proxy = new Proxy(input, {
            deleteProperty(target, prop) {
                const index = Object(_index_of__WEBPACK_IMPORTED_MODULE_2__["indexOf"])(target, prop);
                const isValueDeleted = Reflect.deleteProperty(target, prop);
                onChange(`${prefix}delete`, { key: prop, index });
                return isValueDeleted;
            },
            set: (target, prop, newValue, receiver) => {
                const oldValue = target[prop];
                let isValueSetted;
                const setValue = () => {
                    if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(newValue)) {
                        const proxyChild = registerChild(prop, newValue, oldValue);
                        return Reflect.set(target, prop, proxyChild, receiver);
                    }
                    else {
                        return Reflect.set(target, prop, newValue, receiver);
                    }
                };
                if (hashkeys[prop]) {
                    isValueSetted = setValue();
                    onChange(prefix + prop, newValue, oldValue);
                    if (prefix) {
                        onChange(`${prefix}update`, { key: prop, value: newValue });
                    }
                    return isValueSetted;
                }
                if (prefix) {
                    isValueSetted = setValue();
                    if (oldValue !== undefined) {
                        if (target.hasOwnProperty(prop)) {
                            onChange(`${prefix}update`, { key: prop, value: newValue });
                        }
                    }
                    else {
                        onChange(`${prefix}add`, {
                            value: newValue,
                            key: prop,
                        });
                    }
                    return isValueSetted;
                }
                return Reflect.set(target, prop, newValue, receiver);
            },
        });
        keys.forEach((key) => {
            if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(input[key])) {
                input[key] = registerChild(key, input[key], null);
            }
        });
        return proxy;
    }
    destroy() {
        this.onChange = null;
    }
}


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_40818__) {

"use strict";
__nested_webpack_require_40818__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_40818__.d(__webpack_exports__, "defaultSlotName", function() { return defaultSlotName; });
/* harmony export (binding) */ __nested_webpack_require_40818__.d(__webpack_exports__, "ARRAY_MUTABLE_METHODS", function() { return ARRAY_MUTABLE_METHODS; });
const defaultSlotName = "default";
const ARRAY_MUTABLE_METHODS = ["push", "pop", "splice", "shift", "unshift", "reverse"];


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_41369__) {

"use strict";
__nested_webpack_require_41369__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_41369__.d(__webpack_exports__, "indexOf", function() { return indexOf; });
const indexOf = (value, key) => {
    let index = -1;
    for (const item in value) {
        ++index;
        if (item === key) {
            return index;
        }
    }
    return -1;
};


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_41826__) {

"use strict";
__nested_webpack_require_41826__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_41826__.d(__webpack_exports__, "doNothing", function() { return doNothing; });
const doNothing = () => {
};


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_42125__) {

"use strict";
__nested_webpack_require_42125__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_42125__.d(__webpack_exports__, "createCommentNode", function() { return createCommentNode; });
const createCommentNode = (text) => {
    return document.createComment(text || "");
};


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_42499__) {

"use strict";
__nested_webpack_require_42499__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_42499__.d(__webpack_exports__, "runPromisesInSequence", function() { return runPromisesInSequence; });
const runPromisesInSequence = (promises, param) => {
    promises.reduce((p, promise) => {
        return p.then((result) => promise(result));
    }, Promise.resolve(param));
};


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_42971__) {

"use strict";
__nested_webpack_require_42971__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_42971__.d(__webpack_exports__, "createTextNode", function() { return createTextNode; });
function createTextNode(val) {
    return Promise.resolve(document.createTextNode(val));
}


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_43342__) {

"use strict";
__nested_webpack_require_43342__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_43342__.d(__webpack_exports__, "handleExpression", function() { return handleExpression; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_43342__(30);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_43342__(1);
/* harmony import */ var _handle_for_expression__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_43342__(35);
/* harmony import */ var _emit_update__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_43342__(36);
/* harmony import */ var _emit_error__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_43342__(37);





function handleExpression(method, keys, type) {
    if (type === "for") {
        return _handle_for_expression__WEBPACK_IMPORTED_MODULE_2__["handleForExp"].call(this, keys[0], method);
    }
    return method().then(el => {
        const changesQueue = [];
        const handleChange = () => {
            changesQueue.shift();
            const onChange = () => {
                Object(_utils__WEBPACK_IMPORTED_MODULE_1__["nextTick"])(() => {
                    method().then(newEl => {
                        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["replaceEl"])(el, newEl);
                        el = newEl;
                        handleChange();
                    }).catch(err => {
                        _emit_error__WEBPACK_IMPORTED_MODULE_4__["emitError"].call(this, err);
                    });
                });
            };
            const watchCallBack = () => {
                changesQueue.push(1);
                if (changesQueue.length === 1) {
                    onChange();
                }
            };
            keys.forEach(item => {
                this.watch(item, watchCallBack);
            });
            const onElDestroyed = function () {
                el.removeEventListener(_enums__WEBPACK_IMPORTED_MODULE_0__["LIFECYCLE_EVENT"].Destroy, onElDestroyed);
                keys.forEach(item => {
                    this.unwatch(item, watchCallBack);
                });
            }.bind(this);
            el.addEventListener(_enums__WEBPACK_IMPORTED_MODULE_0__["LIFECYCLE_EVENT"].Destroy, onElDestroyed);
            if (changesQueue.length > 0) {
                onChange();
            }
            Object(_emit_update__WEBPACK_IMPORTED_MODULE_3__["emitUpdate"])(this);
        };
        handleChange();
        return el;
    });
}


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_45894__) {

"use strict";
__nested_webpack_require_45894__.r(__webpack_exports__);
/* harmony import */ var _error_type__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_45894__(31);
/* harmony reexport (safe) */ __nested_webpack_require_45894__.d(__webpack_exports__, "ERROR_TYPE", function() { return _error_type__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE"]; });

/* harmony import */ var _html_tag__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_45894__(32);
/* harmony reexport (safe) */ __nested_webpack_require_45894__.d(__webpack_exports__, "HTML_TAG", function() { return _html_tag__WEBPACK_IMPORTED_MODULE_1__["HTML_TAG"]; });

/* harmony import */ var _life_cycle_event__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_45894__(33);
/* harmony reexport (safe) */ __nested_webpack_require_45894__.d(__webpack_exports__, "LIFECYCLE_EVENT", function() { return _life_cycle_event__WEBPACK_IMPORTED_MODULE_2__["LIFECYCLE_EVENT"]; });

/* harmony import */ var _data_type__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_45894__(34);
/* harmony reexport (safe) */ __nested_webpack_require_45894__.d(__webpack_exports__, "DATA_TYPE", function() { return _data_type__WEBPACK_IMPORTED_MODULE_3__["DATA_TYPE"]; });







/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_47100__) {

"use strict";
__nested_webpack_require_47100__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_47100__.d(__webpack_exports__, "ERROR_TYPE", function() { return ERROR_TYPE; });
var ERROR_TYPE;
(function (ERROR_TYPE) {
    ERROR_TYPE["InvalidComponent"] = "invalid_component";
    ERROR_TYPE["SynTaxError"] = "syntax_error";
    ERROR_TYPE["ForExpAsRoot"] = "for_exp_as_root";
    ERROR_TYPE["ForOnPrimitiveOrNull"] = "for_on_primitive|null";
    ERROR_TYPE["InvalidEventHandler"] = "invalid_event_handler";
    ERROR_TYPE["InvalidFormatter"] = "invalid_formatter";
    ERROR_TYPE["PropDataTypeMismatch"] = "prop_data_type_mismatch";
    ERROR_TYPE["RendererNotFound"] = "createRenderer_not_found";
    ERROR_TYPE["MutatingProp"] = "mutating_prop";
})(ERROR_TYPE || (ERROR_TYPE = {}));


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_47980__) {

"use strict";
__nested_webpack_require_47980__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_47980__.d(__webpack_exports__, "HTML_TAG", function() { return HTML_TAG; });
const tags = [
    "div", "p", "b", "u", "i", "span", "input", "button",
    "table", "tr", "th", "td", "thead", "tbody", "tfoot", "slot",
    "target", "a", "h1", "h2", "h3", "h4", "h5", "h6", "pre",
    "section", "video", "audio", "ul", "ol", "li", "img", "nav", "br"
];
const HTML_TAG = {};
tags.forEach(tag => HTML_TAG[tag] = true);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_48586__) {

"use strict";
__nested_webpack_require_48586__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_48586__.d(__webpack_exports__, "LIFECYCLE_EVENT", function() { return LIFECYCLE_EVENT; });
var LIFECYCLE_EVENT;
(function (LIFECYCLE_EVENT) {
    LIFECYCLE_EVENT["Create"] = "create";
    LIFECYCLE_EVENT["Destroy"] = "destroy";
    LIFECYCLE_EVENT["Update"] = "update";
    LIFECYCLE_EVENT["Mount"] = "mount";
    LIFECYCLE_EVENT["Error"] = "error";
})(LIFECYCLE_EVENT || (LIFECYCLE_EVENT = {}));


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_49174__) {

"use strict";
__nested_webpack_require_49174__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_49174__.d(__webpack_exports__, "DATA_TYPE", function() { return DATA_TYPE; });
var DATA_TYPE;
(function (DATA_TYPE) {
    DATA_TYPE["String"] = "string";
    DATA_TYPE["Object"] = "object";
    DATA_TYPE["Array"] = "array";
    DATA_TYPE["Number"] = "number";
    DATA_TYPE["Boolean"] = "boolean";
    DATA_TYPE["Null"] = "null";
    DATA_TYPE["Function"] = "function";
})(DATA_TYPE || (DATA_TYPE = {}));


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_49770__) {

"use strict";
__nested_webpack_require_49770__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_49770__.d(__webpack_exports__, "runForExp", function() { return runForExp; });
/* harmony export (binding) */ __nested_webpack_require_49770__.d(__webpack_exports__, "handleForExp", function() { return handleForExp; });
/* harmony import */ var _create_coment_node__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_49770__(26);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_49770__(1);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_49770__(30);
/* harmony import */ var _emit_update__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_49770__(36);
/* harmony import */ var _emit_error__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_49770__(37);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_49770__(38);
/* harmony import */ var _index_of__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_49770__(24);







const runForExp = (key, value, method) => {
    const els = [];
    if (true) {
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isPrimitive"])(value) || Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isNull"])(value)) {
            new _logger__WEBPACK_IMPORTED_MODULE_5__["Logger"](_enums__WEBPACK_IMPORTED_MODULE_2__["ERROR_TYPE"].ForOnPrimitiveOrNull, key).throwPlain();
        }
    }
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value)) {
        value.map((item, i) => {
            els.push(method(item, i));
        });
    }
    else if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(value)) {
        for (const prop in value) {
            els.push(method(value[prop], prop));
        }
    }
    return els;
};
function handleForExp(key, method) {
    let cmNode = Object(_create_coment_node__WEBPACK_IMPORTED_MODULE_0__["createCommentNode"])();
    let els = [cmNode];
    let resolvedValue = this.getState(key);
    els = els.concat(runForExp(key, resolvedValue, method));
    const isValueArray = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(resolvedValue);
    let callBacks = {
        [key]: (newValue) => {
            // value resetted
            runForExp(key, newValue, method);
            const parent = cmNode.parentNode;
            // remove all nodes
            // for (let i = 0, len = getObjectLength(oldValue); i < len; i++) {
            //     parent.removeChild(cmNode.nextSibling);
            // }
            let nextSibling = cmNode.nextSibling;
            while (nextSibling != null) {
                parent.removeChild(nextSibling);
                nextSibling = cmNode.nextSibling;
            }
            // add all node
            if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(newValue)) {
                callBacks[`${key}.push`](newValue);
            }
            else {
                let index = 0;
                Object(_utils__WEBPACK_IMPORTED_MODULE_1__["forOwn"])(newValue, (prop, value) => {
                    index++;
                    handleChange("add", {
                        value,
                        key: prop,
                        length: index + 1
                    });
                });
            }
            Object(_emit_update__WEBPACK_IMPORTED_MODULE_3__["emitUpdate"])(this);
        },
        [`${key}.push`]: (values) => {
            handleChange("splice", [Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getObjectLength"])(this.getState(key)) - values.length, 0, ...values]);
        },
        [`${key}.add`]: (newValue) => {
            handleChange("add", newValue);
        },
        [`${key}.pop`]: () => {
            const length = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getObjectLength"])(this.getState(key));
            handleChange("splice", [length, 1]);
        },
        [`${key}.shift`]: () => {
            handleChange("splice", [0, 1]);
        },
        [`${key}.unshift`]: (newValue) => {
            handleChange("splice", [0, 0, newValue]);
        },
        [`${key}.reverse`]: () => {
            const reversedResult = this.getState(key);
            const length = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getObjectLength"])(reversedResult);
            handleChange("splice", [0, length, ...reversedResult]);
        },
        [`${key}.splice`]: (newValue) => {
            handleChange("splice", newValue);
        },
        [`${key}.delete`]: (args) => {
            handleChange("splice", [args.index, 1]);
        },
        [`${key}.update`]: (newValue) => {
            handleChange("update", newValue);
        }
    };
    const onElDestroyed = () => {
        cmNode.removeEventListener(_enums__WEBPACK_IMPORTED_MODULE_2__["LIFECYCLE_EVENT"].Destroy, onElDestroyed);
        cmNode = null;
        for (const ev in callBacks) {
            this.unwatch(ev, callBacks[ev]);
        }
        callBacks = null;
    };
    cmNode.addEventListener(_enums__WEBPACK_IMPORTED_MODULE_2__["LIFECYCLE_EVENT"].Destroy, onElDestroyed);
    const handleChange = (prop, params) => {
        const parent = cmNode.parentNode;
        const indexOfRef = Array.prototype.indexOf.call(parent.childNodes, cmNode);
        switch (prop) {
            case 'add':
                const savedValue = this.getState(key);
                const length = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getObjectLength"])(savedValue);
                method(params.value, params.key).then(newElement => {
                    parent.insertBefore(newElement, parent.childNodes[indexOfRef + length]);
                }).catch(err => {
                    _emit_error__WEBPACK_IMPORTED_MODULE_4__["emitError"].call(this, err);
                });
                break;
            case 'splice':
                // i==1 for comment nodes 
                const relativeIndex = indexOfRef + params[0];
                for (let i = 1; i <= params[1]; i++) {
                    const child = parent.childNodes[relativeIndex + 1];
                    if (child) {
                        parent.removeChild(child);
                    }
                }
                const promises = [];
                for (let i = 2, j = params[0], paramLength = params.length; i < paramLength; i++, j++) {
                    promises.push(method(params[i], j).then(newElement => {
                        parent.insertBefore(newElement, parent.childNodes[indexOfRef + 1 + j]);
                    }));
                }
                if (!isValueArray)
                    break;
                const from = (params.length - 2) + params[0];
                // resolvedValue = this.resolve(key);
                const sliced = this.getState(key).slice(from);
                // const asyncElements = runForExp(key, sliced, method);
                Promise.all(promises).then(_ => {
                    return Promise.all(sliced.map((item, itemIndex) => {
                        return method(item, from + itemIndex);
                    }));
                }).then(elements => {
                    const spliceRefIndex = indexOfRef + 1 + params[0] + params.length - 2;
                    elements.forEach((newEl, elementIndex) => {
                        const el = parent.childNodes[spliceRefIndex + elementIndex];
                        parent.replaceChild(newEl, el);
                    });
                }).catch(err => {
                    _emit_error__WEBPACK_IMPORTED_MODULE_4__["emitError"].call(this, err);
                });
                break;
            case 'update':
                resolvedValue = this.getState(key);
                const paramKey = params.key;
                const index = isValueArray ? paramKey : Object(_index_of__WEBPACK_IMPORTED_MODULE_6__["indexOf"])(resolvedValue, paramKey);
                if (index >= 0) {
                    method(params.value, paramKey).then(newElement => {
                        parent.replaceChild(newElement, parent.childNodes[indexOfRef + 1 + index]);
                    }).catch(err => {
                        _emit_error__WEBPACK_IMPORTED_MODULE_4__["emitError"].call(this, err);
                    });
                }
                break;
        }
        Object(_emit_update__WEBPACK_IMPORTED_MODULE_3__["emitUpdate"])(this);
    };
    this.watch(key, callBacks[key]).
        watch(`${key}.push`, callBacks[`${key}.push`]).
        watch(`${key}.add`, callBacks[`${key}.add`]).
        watch(`${key}.splice`, callBacks[`${key}.splice`]).
        watch(`${key}.update`, callBacks[`${key}.update`]).
        watch(`${key}.delete`, callBacks[`${key}.delete`]).
        watch(`${key}.pop`, callBacks[`${key}.pop`]).
        watch(`${key}.shift`, callBacks[`${key}.shift`]).
        watch(`${key}.unshift`, callBacks[`${key}.unshift`]).
        watch(`${key}.reverse`, callBacks[`${key}.reverse`]);
    return els;
}


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_58698__) {

"use strict";
__nested_webpack_require_58698__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_58698__.d(__webpack_exports__, "emitUpdate", function() { return emitUpdate; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_58698__(30);

const emitUpdate = (comp) => {
    if (comp.isMounted) {
        comp['timer'].debounce(() => {
            comp.emit(_enums__WEBPACK_IMPORTED_MODULE_0__["LIFECYCLE_EVENT"].Update);
        });
    }
};


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_59262__) {

"use strict";
__nested_webpack_require_59262__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_59262__.d(__webpack_exports__, "emitError", function() { return emitError; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_59262__(30);

function emitError(err, shouldLog) {
    if (true) {
        console.error(err);
    }
    this['__app__'].emit(_enums__WEBPACK_IMPORTED_MODULE_0__["LIFECYCLE_EVENT"].Error, err);
    this.emit(_enums__WEBPACK_IMPORTED_MODULE_0__["LIFECYCLE_EVENT"].Error, err);
}


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_59885__) {

"use strict";
__nested_webpack_require_59885__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_59885__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_59885__(30);

const libName = "Palace";
const newLine = "\n\n";
class Logger {
    constructor(type, info) {
        this.type = type;
        this.info_ = info;
        this.msg = this.getMsg_();
    }
    logError() {
        Logger.error(this.get());
    }
    logPlainError() {
        Logger.error(this.getPlain());
    }
    logWarning() {
        Logger.warn(this.get());
    }
    get() {
        return {
            msg: this.msg,
            type: this.type
        };
    }
    getPlain() {
        const err = this.get();
        return ` ${err.msg}${newLine}type : ${err.type}`;
    }
    getMsg_() {
        switch (this.type) {
            case _enums__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE"].PropDataTypeMismatch:
                let str = `Expected Data type of property ${this.info_.prop} is ${this.info_.exp} but received ${this.info_.got}.${newLine}`;
                if (this.info_.template) {
                    str += `in template -${newLine}"${this.info_.html}"${newLine}`;
                }
                if (this.info_.file) {
                    str += `in file - ${this.info_.file} `;
                }
                return str;
            case _enums__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE"].SynTaxError:
                return this.info_;
            case _enums__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE"].ForExpAsRoot:
                return `For is not allowed in root element. Create a child element instead.`;
            case _enums__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE"].ForOnPrimitiveOrNull:
                return `For expression can not be run on null or primitive datatype. Initiate variable ${this.info_} as array or object.`;
            case _enums__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE"].InvalidEventHandler:
                return `Invalid event handler for event "${this.info_.ev}", Handler does not exist in component.`;
            case _enums__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE"].InvalidComponent:
                return `Component "${this.info_.tag}" is not registered. Make sure you have registered component either in parent component or globally.`;
            case _enums__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE"].InvalidFormatter:
                return `Can not find Formatter "${this.info_.formatter}". Make sure you have registered formatter either in component or globally.`;
            case _enums__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE"].MutatingProp:
                return `Do not mutate prop "${this.info_.key}" directly. Instead use a reactive property.`
                    + newLine + `found in -` + newLine +
                    `${this.info_.html}`;
            default:
                return this.msg;
        }
    }
    static warn(...args) {
        console.warn(`{${libName} warn}:`, ...args);
    }
    static error(...args) {
        if (args[0] === "return") {
        }
        console.error(`{${libName} error}:`, ...args);
    }
    throwPlain(shouldReturn) {
        const err = `{${libName} throw}:` + this.getPlain();
        if (shouldReturn) {
            return err;
        }
        throw err;
    }
}


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_63343__) {

"use strict";
__nested_webpack_require_63343__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_63343__.d(__webpack_exports__, "handleAttribute", function() { return handleAttribute; });
/* harmony import */ var _abstracts__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_63343__(40);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_63343__(1);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_63343__(30);
/* harmony import */ var _emit_update__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_63343__(36);
/* harmony import */ var _get_expression_value__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_63343__(43);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_63343__(38);






function handleAttribute(component, attr, isComponent) {
    if (isComponent) {
        const htmlAttributes = [];
        if (!attr)
            return htmlAttributes;
        for (const key in attr) {
            const value = attr[key];
            if (component.__props__[key]) {
                const attrValue = Object(_get_expression_value__WEBPACK_IMPORTED_MODULE_4__["getAttributeValue"])(value, value.v);
                if (component.__props__[key].type) {
                    const expected = component.__props__[key].type;
                    const received = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getDataype"])(attrValue);
                    if (expected !== received) {
                        this.waitFor(_enums__WEBPACK_IMPORTED_MODULE_2__["LIFECYCLE_EVENT"].Mount).then(_ => {
                            new _logger__WEBPACK_IMPORTED_MODULE_5__["Logger"](_enums__WEBPACK_IMPORTED_MODULE_2__["ERROR_TYPE"].PropDataTypeMismatch, {
                                prop: key,
                                exp: expected,
                                got: received,
                                html: this.outerHTML,
                                file: this.file_
                            }).logPlainError();
                        });
                    }
                }
                component[key] = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["clone"])(attrValue);
                if (value.k) {
                    this.watch(value.k, (newValue, oldValue) => {
                        if (oldValue === newValue)
                            return;
                        _abstracts__WEBPACK_IMPORTED_MODULE_0__["Component"].shouldCheckProp = false;
                        component.setState(key, Object(_get_expression_value__WEBPACK_IMPORTED_MODULE_4__["getAttributeValue"])(value, newValue));
                        _abstracts__WEBPACK_IMPORTED_MODULE_0__["Component"].shouldCheckProp = true;
                    });
                }
            }
            else {
                htmlAttributes.push({
                    key,
                    value: Object(_get_expression_value__WEBPACK_IMPORTED_MODULE_4__["getAttributeValue"])(value, value.v)
                });
            }
        }
        return htmlAttributes;
    }
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["forOwn"])(attr, (key, attrItem) => {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["setAttribute"])(component, key, Object(_get_expression_value__WEBPACK_IMPORTED_MODULE_4__["getAttributeValue"])(attrItem, attrItem.v));
        if (attrItem.k) {
            this.watch(attrItem.k, (newValue) => {
                Object(_utils__WEBPACK_IMPORTED_MODULE_1__["setAttribute"])(component, key, Object(_get_expression_value__WEBPACK_IMPORTED_MODULE_4__["getAttributeValue"])(attrItem, newValue));
                Object(_emit_update__WEBPACK_IMPORTED_MODULE_3__["emitUpdate"])(this);
            });
        }
    });
}


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_67137__) {

"use strict";
__nested_webpack_require_67137__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_67137__(41);
/* harmony reexport (safe) */ __nested_webpack_require_67137__.d(__webpack_exports__, "Component", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["Component"]; });

/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_67137__(42);
/* harmony reexport (safe) */ __nested_webpack_require_67137__.d(__webpack_exports__, "Plugin", function() { return _plugin__WEBPACK_IMPORTED_MODULE_1__["Plugin"]; });





/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_67789__) {

"use strict";
__nested_webpack_require_67789__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_67789__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_67789__(30);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_67789__(21);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_67789__(1);



// do not rename this, this has been done to merge Component
// // tslint:disable-next-line
// export interface Component {
// }
class Component {
    constructor() {
        /**
         * Boolean value - true if component mounted
         *
         * @memberof Component
         */
        this.isMounted = false;
        /**
         * used for events
         *
         * @private
         * @memberof Component
         */
        // tslint:disable-next-line
        this.__eventBus__ = new _utils__WEBPACK_IMPORTED_MODULE_2__["EventBus"]();
        /**
         * used for property watching
         *
         * @private
         * @memberof Component
         */
        // tslint:disable-next-line
        this.__watchBus__ = new _utils__WEBPACK_IMPORTED_MODULE_2__["EventBus"]();
        this.timer = new _utils__WEBPACK_IMPORTED_MODULE_2__["Timer"]();
        this.children = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["replaceIfNull"])(this.children, {});
        this.__formatters__ = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["replaceIfNull"])(this.__formatters__, {});
        this.__directive__ = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["replaceIfNull"])(this.__directive__, {});
        this.__props__ = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["replaceIfNull"])(this.__props__, {});
        this.__computed__ = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["replaceIfNull"])(this.__computed__, {});
        this.__reactives__ = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["replaceIfNull"])(this.__reactives__, {});
    }
    /**
     * called just after the constructor - can be used to listen events
     *
     * @memberof Component
     */
    onInit() {
    }
    /**
     *  set state
     *
     * @param {string} key
     * @param {*} args
     * @return {*}
     * @memberof Component
     */
    setState(key, ...args) {
        const splittedKey = key.split(".");
        const emitChange = (propToEmit, value1, value2) => {
            if (this.__reactives__[key])
                return;
            if (true) {
                const componentProps = this.__props__;
                if (Component.shouldCheckProp && componentProps[key]) {
                    new _helpers__WEBPACK_IMPORTED_MODULE_1__["Logger"](_enums__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE"].MutatingProp, {
                        html: this.outerHTML,
                        key: key
                    }).logPlainError();
                }
            }
            _utils__WEBPACK_IMPORTED_MODULE_2__["emitStateChange"].call(this, propToEmit, value1, value2);
        };
        const firstValue = args[0];
        let oldValue;
        if (splittedKey.length > 1) {
            const storedValue = this.getState(key);
            const prop = splittedKey.pop();
            const targetKey = splittedKey.join(".");
            const prefix = targetKey + ".";
            const target = this.getState(targetKey);
            if (typeof storedValue === "function") {
                const result = target[prop](...args);
                emitChange(prefix + prop, args);
            }
            else {
                oldValue = target && target[prop];
                target[prop] = firstValue;
                if (oldValue !== undefined) {
                    emitChange(`${prefix}update`, { key: prop, value: firstValue });
                }
                else {
                    emitChange(`${prefix}add`, {
                        value: firstValue,
                        key: prop,
                    });
                }
                // emitChange(prefix + (prop as string), firstValue, oldValue);
            }
            return;
        }
        oldValue = this[key];
        this[key] = firstValue;
        emitChange(key, firstValue, oldValue);
    }
    deleteState(key) {
        const splittedKey = key.split(".");
        const prop = splittedKey.pop();
        const targetKey = splittedKey.join(".");
        const prefix = targetKey + ".";
        const target = this.getState(targetKey);
        const index = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(target, prop);
        Reflect.deleteProperty(target, prop);
        _utils__WEBPACK_IMPORTED_MODULE_2__["emitStateChange"].call(this, prefix + 'delete', { index, key: prop });
    }
    /**
     * subscribe to state changes
     *
     * @param {string} propName
     * @param {(newValue, oldValue) => void} cb
     * @return {*}
     * @memberof Component
     */
    watch(propName, cb) {
        this.__watchBus__.on(propName, cb);
        return this;
    }
    /**
     * unsubscribe to state changes
     *
     * @param {string} propName
     * @param {(newValue, oldValue) => void} [cb]
     * @return {*}
     * @memberof Component
     */
    unwatch(propName, cb) {
        this.__watchBus__.off(propName, cb);
        return this;
    }
    /**
     * subscribe to events
     *
     * @param {string} event
     * @param {Function} cb
     * @return {*}
     * @memberof Component
     */
    on(event, cb) {
        this.__eventBus__.on(event, cb);
        return this;
    }
    /**
     * unsubscribe to events
     *
     * @param {string} event
     * @param {Function} cb
     * @memberof Component
     */
    off(event, cb) {
        this.__eventBus__.off(event, cb);
    }
    /**
     * wait for an event
     *
     * @template T
     * @param {string} eventName
     * @return {*}
     * @memberof Component
     */
    waitFor(eventName) {
        let eventCallback;
        return new Promise((res) => {
            eventCallback = () => {
                res(null);
            };
            this.on(eventName, eventCallback);
        }).then(_ => {
            this.off(eventName, eventCallback);
        });
    }
    /**
     * emit event to all listener at a time
     *
     * @param {string} event
     * @param {*} args
     * @return {*}
     * @memberof Component
     */
    emit(event, ...args) {
        return this.__eventBus__.emit(event, ...args);
    }
    /**
     * linearly calls events - in case of async: wait for one's completion and then call next
     *
     * @param {string} event
     * @param {*} args
     * @return {*}
     * @memberof Component
     */
    emitLinear(event, ...args) {
        return this.__eventBus__.emitLinear(event, ...args);
    }
    /**
     * find first child element using selector
     *
     * @param {string} selector
     * @return {*}
     * @memberof Component
     */
    find(selector) {
        // nodetype 8 is comment
        if (this.element.nodeType === 8)
            return;
        return this.element.querySelector(selector);
    }
    /**
     * find all child elements using selector
     *
     * @param {string} selector
     * @return {*}
     * @memberof Component
     */
    findAll(selector) {
        return this.element.querySelectorAll(selector);
    }
    /**
     * returns outer html of component
     *
     * @readonly
     * @memberof Component
     */
    get outerHTML() {
        return this.element.outerHTML;
    }
    /**
     * call specified formatter and return result
     *
     * @param {string} formatterName
     * @param {*} value
     * @return {*}
     * @memberof Component
     */
    format(formatterName, value) {
        const globalFormatter = this.__app__['_formatter'];
        if (globalFormatter[formatterName]) {
            return globalFormatter[formatterName](value);
        }
        else if (this.__formatters__[formatterName]) {
            return this.__formatters__[formatterName](value);
        }
        new _helpers__WEBPACK_IMPORTED_MODULE_1__["Logger"](_enums__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE"].InvalidFormatter, {
            formatter: formatterName
        }).throwPlain();
    }
    /**
     * resolve a state by string path
     *
     * useful for nested object
     * e.g - this.resolve('user.name.first')
     *
     *
     * @param {*} path
     * @return {*}
     * @memberof Component
     */
    getState(path) {
        const properties = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isArray"])(path) ? path : path.split(".");
        return properties.reduce((prev, curr) => prev && prev[curr], this);
    }
    /**
     * global application value
     *
     * @readonly
     * @memberof Component
     */
    get global() {
        return this.__app__.global;
    }
    getMethod(methodName) {
        return this[methodName];
    }
}
Component.shouldCheckProp = true;


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_76806__) {

"use strict";
__nested_webpack_require_76806__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_76806__.d(__webpack_exports__, "Plugin", function() { return Plugin; });
class Plugin {
    constructor() {
    }
}


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_77113__) {

"use strict";
__nested_webpack_require_77113__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_77113__.d(__webpack_exports__, "getAttributeValue", function() { return getAttributeValue; });
const getAttributeValue = (value, valueToSet) => {
    const attrValue = value.v;
    return value.m ? attrValue() : valueToSet;
};


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_77531__) {

"use strict";
__nested_webpack_require_77531__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_77531__.d(__webpack_exports__, "handleDirective", function() { return handleDirective; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_77531__(1);
/* harmony import */ var _generics__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_77531__(45);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_77531__(30);



function handleDirective(element, dir, isComponent) {
    if (!dir)
        return;
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["forOwn"])(dir, (name, compiledDir) => {
        const storedDirective = this['__directive__'][name] || this['__app__']['_directives'][name];
        if (storedDirective) {
            const binding = compiledDir;
            binding.isComponent = isComponent;
            const directive = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["merge"])(_generics__WEBPACK_IMPORTED_MODULE_1__["genericDirective"], storedDirective.call(this, element, binding));
            let eventCbs = [];
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["nextTick"])(() => {
                const onDestroyed = () => {
                    directive.destroyed();
                    if (!isComponent) {
                        element.removeEventListener(_enums__WEBPACK_IMPORTED_MODULE_2__["LIFECYCLE_EVENT"].Destroy, onDestroyed);
                    }
                    compiledDir.props.forEach((prop, index) => {
                        this.unwatch(prop, eventCbs[index]);
                    });
                    element = null;
                    eventCbs = null;
                };
                if (isComponent) {
                    element.on(_enums__WEBPACK_IMPORTED_MODULE_2__["LIFECYCLE_EVENT"].Destroy, onDestroyed);
                }
                else {
                    element.addEventListener(_enums__WEBPACK_IMPORTED_MODULE_2__["LIFECYCLE_EVENT"].Destroy, onDestroyed);
                }
                compiledDir.props.forEach((prop, index) => {
                    const ev = (newValue, oldValue) => {
                        if (oldValue === newValue)
                            return;
                        binding.value[index] = newValue;
                        directive.valueUpdated();
                    };
                    this.watch(prop, ev);
                    eventCbs.push(ev);
                });
                directive.inserted();
            });
        }
    });
}


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_80128__) {

"use strict";
__nested_webpack_require_80128__.r(__webpack_exports__);
/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_80128__(46);
/* harmony reexport (safe) */ __nested_webpack_require_80128__.d(__webpack_exports__, "genericDirective", function() { return _directive__WEBPACK_IMPORTED_MODULE_0__["genericDirective"]; });




/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_80548__) {

"use strict";
__nested_webpack_require_80548__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_80548__.d(__webpack_exports__, "genericDirective", function() { return genericDirective; });
/* harmony import */ var _helpers_do_nothing__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_80548__(25);

const genericDirective = {
    inserted: _helpers_do_nothing__WEBPACK_IMPORTED_MODULE_0__["doNothing"],
    valueUpdated: _helpers_do_nothing__WEBPACK_IMPORTED_MODULE_0__["doNothing"],
    destroyed: _helpers_do_nothing__WEBPACK_IMPORTED_MODULE_0__["doNothing"]
};


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_81199__) {

"use strict";
__nested_webpack_require_81199__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_81199__.d(__webpack_exports__, "handleInPlace", function() { return handleInPlace; });
/* harmony import */ var _create_coment_node__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_81199__(26);
/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_81199__(48);
/* harmony import */ var _handle_expression__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_81199__(29);



function handleInPlace(childs, option) {
    const of = option.attr.of;
    if (!of)
        return Object(_create_coment_node__WEBPACK_IMPORTED_MODULE_0__["createCommentNode"])();
    delete option.attr.of;
    const key = of.k;
    return _handle_expression__WEBPACK_IMPORTED_MODULE_2__["handleExpression"].call(this, () => {
        return _create_element__WEBPACK_IMPORTED_MODULE_1__["createElement"].call(this, this.getState(key), childs, option);
    }, key ? [key] : []);
}


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_82259__) {

"use strict";
__nested_webpack_require_82259__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_82259__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony import */ var _create_coment_node__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_82259__(26);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_82259__(30);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_82259__(23);
/* harmony import */ var _handle_attribute__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_82259__(39);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_82259__(1);
/* harmony import */ var _run_promises_in_sequence__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_82259__(27);
/* harmony import */ var _handle_directive__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_82259__(44);
/* harmony import */ var _handle_in_place__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_82259__(47);
/* harmony import */ var _emit_error__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_82259__(37);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_82259__(38);










function createNativeComponent(tag, htmlChilds, option) {
    switch (tag) {
        case "slot":
        case "target":
            if (!option.attr.name) {
                option.attr.name = {
                    v: _constant__WEBPACK_IMPORTED_MODULE_2__["defaultSlotName"]
                };
            }
    }
    const element = document.createElement(tag);
    htmlChilds.forEach((item) => {
        element.appendChild(item);
    });
    _handle_attribute__WEBPACK_IMPORTED_MODULE_3__["handleAttribute"].call(this, element, option.attr, false);
    if (option.on) {
        const evListener = {};
        const events = option.on;
        for (const eventName in events) {
            const ev = events[eventName];
            const methods = [];
            ev.modifiers.forEach(item => {
                switch (item) {
                    case 'prevent':
                        methods.push((e) => {
                            e.preventDefault();
                            return e;
                        });
                        break;
                    case 'stop':
                        methods.push((e) => {
                            e.stopPropagation();
                            return e;
                        });
                        break;
                }
            });
            ev.handlers.forEach(item => {
                if (item != null) {
                    methods.push(item.bind(this));
                }
                else {
                    new _logger__WEBPACK_IMPORTED_MODULE_9__["Logger"](_enums__WEBPACK_IMPORTED_MODULE_1__["ERROR_TYPE"].InvalidEventHandler, {
                        ev: eventName,
                    }).throwPlain();
                }
            });
            // if (eventName === "input" && !ev.isNative) {
            //     methods.unshift((e) => {
            //         return e.target.value;
            //     });
            // }
            evListener[eventName] = methods.length > 1 ?
                (e) => {
                    Object(_run_promises_in_sequence__WEBPACK_IMPORTED_MODULE_5__["runPromisesInSequence"])(methods, e);
                } :
                (e) => {
                    methods[0].call(this, e);
                };
            element.addEventListener(eventName, evListener[eventName], {
                capture: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isKeyExist"])(ev.option, 'capture'),
                once: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isKeyExist"])(ev.option, 'once'),
                passive: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isKeyExist"])(ev.option, 'passive'),
            });
        }
        const onElDestroyed = () => {
            element.removeEventListener(_enums__WEBPACK_IMPORTED_MODULE_1__["LIFECYCLE_EVENT"].Destroy, onElDestroyed);
            for (const ev in evListener) {
                element.removeEventListener(ev, evListener[ev]);
            }
        };
        element.addEventListener(_enums__WEBPACK_IMPORTED_MODULE_1__["LIFECYCLE_EVENT"].Destroy, onElDestroyed);
    }
    _handle_directive__WEBPACK_IMPORTED_MODULE_6__["handleDirective"].call(this, element, option.dir, false);
    return element;
}
const loadComponent = (savedComponent) => {
    if (savedComponent instanceof Promise) {
        return savedComponent.then(comp => {
            return comp.default;
        });
    }
    else if (savedComponent.isLazy) {
        return loadComponent(savedComponent.component());
    }
    return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["promiseResolve"])(savedComponent);
};
function createElement(tag, childs, option) {
    return new Promise((res, rej) => {
        if (tag == null) {
            return res(Object(_create_coment_node__WEBPACK_IMPORTED_MODULE_0__["createCommentNode"])());
        }
        if (!option.attr) {
            option.attr = {};
        }
        Promise.all(childs).then(htmlChilds => {
            if (_enums__WEBPACK_IMPORTED_MODULE_1__["HTML_TAG"][tag]) {
                res(createNativeComponent.call(this, tag, htmlChilds, option));
                return;
            }
            const savedComponent = this.children[tag] || this['__app__']['_components'][tag];
            if (savedComponent) {
                loadComponent(savedComponent).then((comp) => {
                    const component = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["createComponent"])(comp, this['__app__']);
                    const htmlAttributes = _utils__WEBPACK_IMPORTED_MODULE_4__["initComponent"].call(this, component, option);
                    Object(_utils__WEBPACK_IMPORTED_MODULE_4__["executeRender"])(component, childs).then(_ => {
                        let element = component.element;
                        let targetSlot = component.find(`slot[name='default']`) || (element.tagName.match(/slot/i) ? element : null);
                        if (targetSlot) {
                            htmlChilds.forEach(item => {
                                if (item.tagName === "TARGET") {
                                    const namedSlot = component.find(`slot[name='${item.getAttribute("name")}']`);
                                    if (namedSlot) {
                                        targetSlot = namedSlot;
                                    }
                                }
                                const targetSlotParent = targetSlot.parentElement;
                                if (targetSlotParent) {
                                    // nodeType -3 : TextNode
                                    if (item.nodeType === 3) {
                                        targetSlotParent.insertBefore(item, targetSlot.nextSibling);
                                    }
                                    else {
                                        item.childNodes.forEach(child => {
                                            targetSlotParent.insertBefore(child, targetSlot.nextSibling);
                                        });
                                    }
                                    targetSlotParent.removeChild(targetSlot);
                                }
                                else {
                                    element = component.element = item;
                                }
                            });
                        }
                        (htmlAttributes || []).forEach(item => {
                            switch (item.key) {
                                case 'class':
                                    item.value = (Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getAttribute"])(element, item.key) || '') + ' ' + item.value;
                                    break;
                                case 'style':
                                    item.value = (Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getAttribute"])(element, item.key) || '') + item.value;
                            }
                            Object(_utils__WEBPACK_IMPORTED_MODULE_4__["setAttribute"])(element, item.key, item.value);
                        });
                        res(element);
                    }).catch(rej);
                }).catch((err) => {
                    _emit_error__WEBPACK_IMPORTED_MODULE_8__["emitError"].call(this, err, true);
                });
            }
            else if (tag === "in-place") {
                res(_handle_in_place__WEBPACK_IMPORTED_MODULE_7__["handleInPlace"].call(this, childs, option));
            }
            else {
                rej(new _logger__WEBPACK_IMPORTED_MODULE_9__["Logger"](_enums__WEBPACK_IMPORTED_MODULE_1__["ERROR_TYPE"].InvalidComponent, {
                    tag: tag
                }).throwPlain(true));
            }
        }).catch(rej);
    });
}


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_91262__) {

"use strict";
__nested_webpack_require_91262__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_91262__.d(__webpack_exports__, "clearAll", function() { return clearAll; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_91262__(30);

function clearAll() {
    // need to emit before clearing events
    this.emit(_enums__WEBPACK_IMPORTED_MODULE_0__["LIFECYCLE_EVENT"].Destroy).then(_ => {
        this['__eventBus__'].destroy();
        this['__watchBus__'].destroy();
        if (this['__ob__']) {
            this['__ob__'].destroy();
        }
        this.element = this['__eventBus__'] =
            this['__ob__'] = null;
    });
}


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_92023__) {

"use strict";
__nested_webpack_require_92023__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_92023__.d(__webpack_exports__, "replaceIfNull", function() { return replaceIfNull; });
const replaceIfNull = (value, replaceValue) => {
    return value == null ? replaceValue : value;
};


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_92402__) {

"use strict";
__nested_webpack_require_92402__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_92402__.d(__webpack_exports__, "Mahal", function() { return Mahal; });
/* harmony import */ var _abstracts_component__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_92402__(41);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_92402__(1);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_92402__(30);
/* harmony import */ var _ready_made__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_92402__(52);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_92402__(21);





const destroyedEvent = new window.CustomEvent(_enums__WEBPACK_IMPORTED_MODULE_2__["LIFECYCLE_EVENT"].Destroy);
function dispatchDestroyed(node) {
    node.dispatchEvent(destroyedEvent);
    node.childNodes.forEach(item => {
        dispatchDestroyed(item);
    });
}
class Mahal {
    constructor(component, element) {
        this.__eventBus__ = new _utils__WEBPACK_IMPORTED_MODULE_1__["EventBus"]();
        this.global = {};
        this.extend = {
            plugin: (plugin, options) => {
                const pluginInstane = new plugin();
                const apis = pluginInstane.setup(this, options);
                if (apis && Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(apis)) {
                    for (const api in apis) {
                        const apiValue = apis[api];
                        if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getDataype"])(apiValue) === "function") {
                            _abstracts_component__WEBPACK_IMPORTED_MODULE_0__["Component"].prototype[api] = apiValue;
                        }
                    }
                }
                this._plugins.push(plugin);
            },
            component: (name, component) => {
                this._components[name] = component;
            },
            formatter: (name, cb) => {
                this._formatter[name] = cb;
            },
            directive: (name, directive) => {
                this._directives[name] = directive;
            },
            set renderer(val) {
                Mahal.createRenderer = val;
            }
        };
        this._plugins = [];
        this._components = {
            fragment: _ready_made__WEBPACK_IMPORTED_MODULE_3__["FragmentComponent"]
        };
        this._directives = {};
        this._formatter = {
            toS(value) {
                switch (typeof value) {
                    case 'string':
                        return value;
                    case 'number':
                        return value.toString();
                    default:
                        return JSON.stringify(value);
                }
            }
        };
        this.__componentClass__ = component;
        this.element = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isString"])(element) ? document.querySelector(element) : element;
        if (this.element == null) {
            const defaultId = 'mahal-app';
            let el = document.querySelector(defaultId);
            if (el) {
                el.innerHTML = "";
            }
            else {
                el = document.createElement('div');
                el.id = defaultId;
                document.body.appendChild(el);
            }
            this.element = el;
            if (true) {
                _helpers__WEBPACK_IMPORTED_MODULE_4__["Logger"].warn("Provided element or element selector is not valid. Using 'mahal-app' as default");
            }
        }
        new window.MutationObserver((mutations) => {
            mutations.forEach(mutation => {
                if (mutation.removedNodes) {
                    mutation.removedNodes.forEach(removedNode => {
                        dispatchDestroyed(removedNode);
                    });
                }
            });
        }).observe(this.element, {
            childList: true, subtree: true
        });
        // register global directive
        this.extend.directive("model", Object(_ready_made__WEBPACK_IMPORTED_MODULE_3__["createModelDirective"])("input", "value"));
        this.extend.directive("show", _ready_made__WEBPACK_IMPORTED_MODULE_3__["showDirective"]);
        this.extend.directive("class", _ready_made__WEBPACK_IMPORTED_MODULE_3__["classDirective"]);
        this.extend.directive("ref", _ready_made__WEBPACK_IMPORTED_MODULE_3__["refDirective"]);
        this.extend.directive("html", _ready_made__WEBPACK_IMPORTED_MODULE_3__["htmlDirective"]);
    }
    create() {
        let componentInstance = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createComponent"])(this.__componentClass__, this);
        _utils__WEBPACK_IMPORTED_MODULE_1__["initComponent"].call(this, componentInstance, {});
        this.emit(_enums__WEBPACK_IMPORTED_MODULE_2__["LIFECYCLE_EVENT"].Create);
        return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["executeRender"])(componentInstance).then(el => {
            this.element.appendChild(el);
            this.emit(_enums__WEBPACK_IMPORTED_MODULE_2__["LIFECYCLE_EVENT"].Mount);
            return componentInstance;
        });
    }
    on(event, cb) {
        this.__eventBus__.on(event, cb);
        return this;
    }
    off(event, cb) {
        this.__eventBus__.off(event, cb);
    }
    emit(event, ...args) {
        return this.__eventBus__.emit(event, ...args);
    }
}


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_97894__) {

"use strict";
__nested_webpack_require_97894__.r(__webpack_exports__);
/* harmony import */ var _model_directive__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_97894__(53);
/* harmony reexport (safe) */ __nested_webpack_require_97894__.d(__webpack_exports__, "createModelDirective", function() { return _model_directive__WEBPACK_IMPORTED_MODULE_0__["createModelDirective"]; });

/* harmony import */ var _show_directive__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_97894__(54);
/* harmony reexport (safe) */ __nested_webpack_require_97894__.d(__webpack_exports__, "showDirective", function() { return _show_directive__WEBPACK_IMPORTED_MODULE_1__["showDirective"]; });

/* harmony import */ var _add_class_directive__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_97894__(55);
/* harmony reexport (safe) */ __nested_webpack_require_97894__.d(__webpack_exports__, "classDirective", function() { return _add_class_directive__WEBPACK_IMPORTED_MODULE_2__["classDirective"]; });

/* harmony import */ var _ref_directive__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_97894__(56);
/* harmony reexport (safe) */ __nested_webpack_require_97894__.d(__webpack_exports__, "refDirective", function() { return _ref_directive__WEBPACK_IMPORTED_MODULE_3__["refDirective"]; });

/* harmony import */ var _fragment_comp__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_97894__(57);
/* harmony reexport (safe) */ __nested_webpack_require_97894__.d(__webpack_exports__, "FragmentComponent", function() { return _fragment_comp__WEBPACK_IMPORTED_MODULE_4__["FragmentComponent"]; });

/* harmony import */ var _html_directive__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_97894__(58);
/* harmony reexport (safe) */ __nested_webpack_require_97894__.d(__webpack_exports__, "htmlDirective", function() { return _html_directive__WEBPACK_IMPORTED_MODULE_5__["htmlDirective"]; });









/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_99728__) {

"use strict";
__nested_webpack_require_99728__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_99728__.d(__webpack_exports__, "createModelDirective", function() { return createModelDirective; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_99728__(21);

// tslint:disable-next-line
function createModelDirective(eventName, propToUse) {
    return function modelDirective(el, binding) {
        const key = binding.props[0];
        _helpers__WEBPACK_IMPORTED_MODULE_0__["handleAttribute"].call(this, el, {
            value: {
                k: key,
                v: binding[propToUse][0]
            }
        }, binding.isComponent);
        if (binding.isComponent) {
            el.on(eventName, (val) => {
                binding.value = [val];
            });
        }
        else {
            el.oninput = (event) => {
                binding.value = [
                    event.target[propToUse]
                ];
            };
        }
    };
}


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_100820__) {

"use strict";
__nested_webpack_require_100820__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_100820__.d(__webpack_exports__, "showDirective", function() { return showDirective; });
const showDirective = (el, binding) => {
    const setElementShowHide = () => {
        const value = binding.value[0];
        el.style.display = value ? 'unset' : 'none';
    };
    setElementShowHide();
    return {
        valueUpdated() {
            setElementShowHide();
        }
    };
};


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_101396__) {

"use strict";
__nested_webpack_require_101396__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_101396__.d(__webpack_exports__, "classDirective", function() { return classDirective; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_101396__(1);

const classDirective = (el, binding) => {
    const applyClass = (classes) => {
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(classes)) {
            for (const name in classes) {
                if (classes[name]) {
                    applyClass(name);
                }
                else {
                    el.classList.remove(name);
                }
            }
        }
        else {
            el.classList.add(classes);
        }
    };
    const addClass = () => {
        binding.value.forEach(value => {
            applyClass(value);
        });
    };
    addClass();
    return {
        valueUpdated() {
            addClass();
        }
    };
};


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_102460__) {

"use strict";
__nested_webpack_require_102460__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_102460__.d(__webpack_exports__, "refDirective", function() { return refDirective; });
// tslint:disable-next-line
const refDirective = function (el, binding) {
    const key = binding.props[0];
    this[key] = el;
    return {
        destroyed: () => {
            this[key] = null;
        }
    };
};


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_102954__) {

"use strict";
__nested_webpack_require_102954__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_102954__.d(__webpack_exports__, "FragmentComponent", function() { return FragmentComponent; });
/* harmony import */ var _abstracts_component__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_102954__(41);

class FragmentComponent extends _abstracts_component__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super();
        this.template = `<slot></slot>`;
    }
    render(renderer) {
        const ctx = this;
        const ce = renderer.createElement;
        return ce.call(ctx, 'slot', [], {});
    }
}


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_103669__) {

"use strict";
__nested_webpack_require_103669__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_103669__.d(__webpack_exports__, "htmlDirective", function() { return htmlDirective; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_103669__(21);

// tslint:disable-next-line
function htmlDirective(el, binding) {
    if (binding.isComponent)
        return;
    const addClass = () => {
        el.innerHTML = binding.value[0] || '';
        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["emitUpdate"])(this);
    };
    addClass();
    return {
        valueUpdated() {
            addClass();
        }
    };
}


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_104404__) {

"use strict";
__nested_webpack_require_104404__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_104404__.d(__webpack_exports__, "initComponent", function() { return initComponent; });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_104404__(23);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_104404__(30);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_104404__(21);
/* harmony import */ var _get_data_type__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_104404__(15);




function initComponent(component, option) {
    const htmlAttributes = _helpers__WEBPACK_IMPORTED_MODULE_2__["handleAttribute"].call(this, component, option.attr, true);
    _helpers__WEBPACK_IMPORTED_MODULE_2__["handleDirective"].call(this, component, option.dir, true);
    if (option.on) {
        const events = option.on;
        for (const eventName in events) {
            const ev = events[eventName];
            const methods = [];
            ev.handlers.forEach(item => {
                if (item != null) {
                    methods.push(item.bind(this));
                }
                else {
                    new _helpers__WEBPACK_IMPORTED_MODULE_2__["Logger"](_enums__WEBPACK_IMPORTED_MODULE_1__["ERROR_TYPE"].InvalidEventHandler, {
                        eventName,
                    }).logPlainError();
                }
            });
            component.on(eventName, (args) => {
                Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["runPromisesInSequence"])(methods, args);
            });
        }
    }
    const computed = component['__computed__'];
    for (const key in computed) {
        const data = computed[key];
        let computedValue = data.fn.call(component);
        Object.defineProperty(component, key, {
            get() {
                return computedValue;
            },
            set(newValue) {
                computedValue = newValue;
            }
        });
        data.args.forEach(arg => {
            let eventsToWatch = [arg];
            switch (Object(_get_data_type__WEBPACK_IMPORTED_MODULE_3__["getDataype"])(component[arg])) {
                case "array":
                    const evs = [..._constant__WEBPACK_IMPORTED_MODULE_0__["ARRAY_MUTABLE_METHODS"], "update"].map(ev => {
                        return `${arg}.${ev}`;
                    });
                    eventsToWatch = eventsToWatch.concat(evs);
                    break;
                case "object":
                    eventsToWatch = eventsToWatch.concat(["add", "update", "delete"].map(ev => {
                        return `${arg}.${ev}`;
                    }));
                    break;
            }
            eventsToWatch.forEach(ev => {
                component.watch(ev, () => {
                    const newValue = data.fn.call(component);
                    component.setState(key, newValue, computedValue);
                    computedValue = newValue;
                });
            });
        });
    }
    // attachGetterSetter(component);
    component.emit(_enums__WEBPACK_IMPORTED_MODULE_1__["LIFECYCLE_EVENT"].Create);
    component.on(_enums__WEBPACK_IMPORTED_MODULE_1__["LIFECYCLE_EVENT"].Destroy, () => {
        component = null;
    });
    return htmlAttributes;
}


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_107814__) {

"use strict";
__nested_webpack_require_107814__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_107814__.d(__webpack_exports__, "Timer", function() { return Timer; });
class Timer {
    timeout(delay) {
        return new Promise((res) => {
            setTimeout(res, delay || 0);
        });
    }
    throttle(fn, delay = 0) {
        if (this.throttleTimer)
            return;
        this.throttleTimer = setTimeout(() => {
            this.throttleTimer = null;
            fn();
        }, delay);
    }
    debounce(fn, delay = 0) {
        clearTimeout(this.throttleTimer);
        this.throttleTimer = setTimeout(() => {
            this.throttleTimer = null;
            fn();
        }, delay);
    }
}


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_108624__) {

"use strict";
__nested_webpack_require_108624__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_108624__.d(__webpack_exports__, "createComponent", function() { return createComponent; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_108624__(21);
/* harmony import */ var _emit_state_change__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_108624__(62);


const createComponent = (componentConstructor, app) => {
    let component = new componentConstructor();
    const keys = Object.keys(component['__reactives__'] || {});
    component['__app__'] = app;
    if (keys.length > 0) {
        component = new _helpers__WEBPACK_IMPORTED_MODULE_0__["Observer"](_emit_state_change__WEBPACK_IMPORTED_MODULE_1__["emitStateChange"].bind(component), component).
            create(component, keys);
    }
    component['__eventBus__']['_ctx'] = component;
    component['__watchBus__']['_ctx'] = component;
    component.onInit();
    return component;
};


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_109690__) {

"use strict";
__nested_webpack_require_109690__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_109690__.d(__webpack_exports__, "emitStateChange", function() { return emitStateChange; });
function emitStateChange(key, newValue, oldValue) {
    this['__watchBus__'].emit(key, newValue, oldValue);
}


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_110082__) {

"use strict";
__nested_webpack_require_110082__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_110082__.d(__webpack_exports__, "hashifyArray", function() { return hashifyArray; });
const hashifyArray = (input) => {
    const obj = {};
    input.forEach(item => {
        obj[item] = true;
    });
    return obj;
};


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_110493__) {

"use strict";
__nested_webpack_require_110493__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_110493__.d(__webpack_exports__, "promiseResolve", function() { return promiseResolve; });
const promiseResolve = (value) => {
    return Promise.resolve(value);
};


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_110847__) {

"use strict";
__nested_webpack_require_110847__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_110847__.d(__webpack_exports__, "lazyComponent", function() { return lazyComponent; });
const lazyComponent = (component) => {
    if (typeof component === 'function') {
        return {
            isLazy: true,
            component: component
        };
    }
};


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_111303__) {

"use strict";
__nested_webpack_require_111303__.r(__webpack_exports__);
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_111303__(67);
/* harmony reexport (safe) */ __nested_webpack_require_111303__.d(__webpack_exports__, "Template", function() { return _template__WEBPACK_IMPORTED_MODULE_0__["Template"]; });

/* harmony import */ var _prop__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_111303__(68);
/* harmony reexport (safe) */ __nested_webpack_require_111303__.d(__webpack_exports__, "Prop", function() { return _prop__WEBPACK_IMPORTED_MODULE_1__["Prop"]; });

/* harmony import */ var _children__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_111303__(69);
/* harmony reexport (safe) */ __nested_webpack_require_111303__.d(__webpack_exports__, "Children", function() { return _children__WEBPACK_IMPORTED_MODULE_2__["Children"]; });

/* harmony import */ var _formatter__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_111303__(70);
/* harmony reexport (safe) */ __nested_webpack_require_111303__.d(__webpack_exports__, "Formatter", function() { return _formatter__WEBPACK_IMPORTED_MODULE_3__["Formatter"]; });

/* harmony import */ var _reactive__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_111303__(71);
/* harmony reexport (safe) */ __nested_webpack_require_111303__.d(__webpack_exports__, "Reactive", function() { return _reactive__WEBPACK_IMPORTED_MODULE_4__["Reactive"]; });

/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_111303__(72);
/* harmony reexport (safe) */ __nested_webpack_require_111303__.d(__webpack_exports__, "Directive", function() { return _directive__WEBPACK_IMPORTED_MODULE_5__["Directive"]; });

/* harmony import */ var _computed__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_111303__(73);
/* harmony reexport (safe) */ __nested_webpack_require_111303__.d(__webpack_exports__, "Computed", function() { return _computed__WEBPACK_IMPORTED_MODULE_6__["Computed"]; });










/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_113221__) {

"use strict";
__nested_webpack_require_113221__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_113221__.d(__webpack_exports__, "Template", function() { return Template; });
// tslint:disable-next-line
const Template = (stringTemplate) => {
    // tslint:disable-next-line
    return function Template(constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.template = stringTemplate;
            }
        };
    };
};


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_113823__) {

"use strict";
__nested_webpack_require_113823__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_113823__.d(__webpack_exports__, "Prop", function() { return Prop; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_113823__(30);

// tslint:disable-next-line
const Prop = (options) => {
    return (target, key) => {
        if (!target.__props__) {
            target.__props__ = {};
        }
        if (typeof options === _enums__WEBPACK_IMPORTED_MODULE_0__["DATA_TYPE"].Function) {
            const name = options.name;
            if (_enums__WEBPACK_IMPORTED_MODULE_0__["DATA_TYPE"][name]) {
                options = name.toLowerCase();
            }
        }
        if (options && !options.type) {
            options = {
                type: options
            };
        }
        target.__props__[key] = options || {};
    };
};


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_114787__) {

"use strict";
__nested_webpack_require_114787__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_114787__.d(__webpack_exports__, "Children", function() { return Children; });
// tslint:disable-next-line
const Children = (value) => {
    // tslint:disable-next-line
    return function Template(constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.children = value;
            }
        };
    };
};


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_115371__) {

"use strict";
__nested_webpack_require_115371__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_115371__.d(__webpack_exports__, "Formatter", function() { return Formatter; });
// tslint:disable-next-line
const Formatter = (name) => {
    return ((target, methodName, descriptor) => {
        if (!target.__formatters__) {
            target.__formatters__ = {};
        }
        target.__formatters__[name || methodName] = target[methodName];
    });
};


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_115920__) {

"use strict";
__nested_webpack_require_115920__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_115920__.d(__webpack_exports__, "Reactive", function() { return Reactive; });
// tslint:disable-next-line
const Reactive = (target, key) => {
    if (!target.__reactives__) {
        target.__reactives__ = {};
    }
    target.__reactives__[key] = true;
};


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_116367__) {

"use strict";
__nested_webpack_require_116367__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_116367__.d(__webpack_exports__, "Directive", function() { return Directive; });
// tslint:disable-next-line
const Directive = (name) => {
    return ((target, methodName, descriptor) => {
        if (!target.__directive__) {
            target.__directive__ = {};
        }
        target.__directive__[name || methodName] = target[methodName];
    });
};


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_116913__) {

"use strict";
__nested_webpack_require_116913__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_116913__.d(__webpack_exports__, "Computed", function() { return Computed; });
// tslint:disable-next-line
const Computed = (...args) => {
    return ((target, methodName, descriptor) => {
        if (!target.__computed__) {
            target.__computed__ = {};
        }
        target.__computed__[methodName] = { args, fn: descriptor.value || descriptor.get };
    });
};


/***/ })
/******/ ]);
//# sourceMappingURL=mahal.commonjs2.js.map

/***/ }),

/***/ "./node_modules/mahal/dist/npm.export.js":
/*!***********************************************!*\
  !*** ./node_modules/mahal/dist/npm.export.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

if (false) {}
else if (false) {}
else {
    module.exports = __webpack_require__(/*! ./mahal.commonjs2.js */ "./node_modules/mahal/dist/mahal.commonjs2.js");
}


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/mahal-webpack-loader/lib/plugin/scoped_css_loader.js!./node_modules/mahal-webpack-loader/lib/index.js!./src/app.mahal?mahal&type=style&lang=css&index=0&id=901e8188&scoped=":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/mahal-webpack-loader/lib/plugin/scoped_css_loader.js!./node_modules/mahal-webpack-loader/lib/index.js!./src/app.mahal?mahal&type=style&lang=css&index=0&id=901e8188&scoped= ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_mahal_webpack_loader_lib_plugin_scoped_css_loader_js_node_modules_mahal_webpack_loader_lib_index_js_app_mahal_mahal_type_style_lang_css_index_0_id_901e8188_scoped___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/mahal-webpack-loader/lib/plugin/scoped_css_loader.js!../node_modules/mahal-webpack-loader/lib/index.js!./app.mahal?mahal&type=style&lang=css&index=0&id=901e8188&scoped= */ "./node_modules/css-loader/dist/cjs.js!./node_modules/mahal-webpack-loader/lib/plugin/scoped_css_loader.js!./node_modules/mahal-webpack-loader/lib/index.js!./src/app.mahal?mahal&type=style&lang=css&index=0&id=901e8188&scoped=");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_mahal_webpack_loader_lib_plugin_scoped_css_loader_js_node_modules_mahal_webpack_loader_lib_index_js_app_mahal_mahal_type_style_lang_css_index_0_id_901e8188_scoped___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_mahal_webpack_loader_lib_plugin_scoped_css_loader_js_node_modules_mahal_webpack_loader_lib_index_js_app_mahal_mahal_type_style_lang_css_index_0_id_901e8188_scoped___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_mahal_webpack_loader_lib_plugin_scoped_css_loader_js_node_modules_mahal_webpack_loader_lib_index_js_app_mahal_mahal_type_style_lang_css_index_0_id_901e8188_scoped___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_mahal_webpack_loader_lib_plugin_scoped_css_loader_js_node_modules_mahal_webpack_loader_lib_index_js_app_mahal_mahal_type_style_lang_css_index_0_id_901e8188_scoped___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/mahal-webpack-loader/lib/plugin/scoped_css_loader.js!./node_modules/mahal-webpack-loader/lib/index.js!./src/components/count.mahal?mahal&type=style&lang=css&index=0&id=a52bbdac&scoped=":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/mahal-webpack-loader/lib/plugin/scoped_css_loader.js!./node_modules/mahal-webpack-loader/lib/index.js!./src/components/count.mahal?mahal&type=style&lang=css&index=0&id=a52bbdac&scoped= ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_mahal_webpack_loader_lib_plugin_scoped_css_loader_js_node_modules_mahal_webpack_loader_lib_index_js_count_mahal_mahal_type_style_lang_css_index_0_id_a52bbdac_scoped___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/mahal-webpack-loader/lib/plugin/scoped_css_loader.js!../../node_modules/mahal-webpack-loader/lib/index.js!./count.mahal?mahal&type=style&lang=css&index=0&id=a52bbdac&scoped= */ "./node_modules/css-loader/dist/cjs.js!./node_modules/mahal-webpack-loader/lib/plugin/scoped_css_loader.js!./node_modules/mahal-webpack-loader/lib/index.js!./src/components/count.mahal?mahal&type=style&lang=css&index=0&id=a52bbdac&scoped=");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_mahal_webpack_loader_lib_plugin_scoped_css_loader_js_node_modules_mahal_webpack_loader_lib_index_js_count_mahal_mahal_type_style_lang_css_index_0_id_a52bbdac_scoped___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_mahal_webpack_loader_lib_plugin_scoped_css_loader_js_node_modules_mahal_webpack_loader_lib_index_js_count_mahal_mahal_type_style_lang_css_index_0_id_a52bbdac_scoped___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_mahal_webpack_loader_lib_plugin_scoped_css_loader_js_node_modules_mahal_webpack_loader_lib_index_js_count_mahal_mahal_type_style_lang_css_index_0_id_a52bbdac_scoped___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_mahal_webpack_loader_lib_plugin_scoped_css_loader_js_node_modules_mahal_webpack_loader_lib_index_js_count_mahal_mahal_type_style_lang_css_index_0_id_a52bbdac_scoped___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/formatters/img_path.ts":
/*!************************************!*\
  !*** ./src/formatters/img_path.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "imgPath": () => (/* binding */ imgPath)
/* harmony export */ });
function imgPath(src) {
    return "/img/" + src;
}


/***/ }),

/***/ "./src/formatters/index.ts":
/*!*********************************!*\
  !*** ./src/formatters/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerGlobalFormatter": () => (/* binding */ registerGlobalFormatter)
/* harmony export */ });
/* harmony import */ var _img_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img_path */ "./src/formatters/img_path.ts");

function registerGlobalFormatter(app) {
    app.extend.formatter("imgPath", _img_path__WEBPACK_IMPORTED_MODULE_0__.imgPath);
}


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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mahal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mahal */ "./node_modules/mahal/dist/npm.export.js");
/* harmony import */ var mahal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mahal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_mahal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app.mahal */ "./src/app.mahal");
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/formatters */ "./src/formatters/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/config */ "./config/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_3__);




const app = new mahal__WEBPACK_IMPORTED_MODULE_0__.Mahal(_app_mahal__WEBPACK_IMPORTED_MODULE_1__["default"], '#app');
// register global formatter
(0,_formatters__WEBPACK_IMPORTED_MODULE_2__.registerGlobalFormatter)(app);
// set config to be available globally
app.global.config = (_config__WEBPACK_IMPORTED_MODULE_3___default());
app.create();

})();

/******/ })()
;
//# sourceMappingURL=bundles.js.map