webpackHotUpdate(4,{

/***/ "./components/vendorStyle/homeStyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_index_css__ = __webpack_require__("./styles/index.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_index_css__);




/* harmony default export */ __webpack_exports__["a"] = (homeStyle = __WEBPACK_IMPORTED_MODULE_0__styles_index_css___default.a + __WEBPACK_IMPORTED_MODULE_0__styles_index_css___default.a);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_homeContainer_js__ = __webpack_require__("./components/homeContainer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_vendorStyle_homeStyle__ = __webpack_require__("./components/vendorStyle/homeStyle.js");


var _jsxFileName = "C:\\Users\\sydne_000\\Documents\\site\\test\\node\\with-global-stylesheet\\pages\\index.js";

 //import stylesheet from 'styles/index.css'


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: __WEBPACK_IMPORTED_MODULE_2__components_vendorStyle_homeStyle__["a" /* default */]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_homeContainer_js__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }));
});
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.f6c76bc15e6b6aeeb738.hot-update.js.map