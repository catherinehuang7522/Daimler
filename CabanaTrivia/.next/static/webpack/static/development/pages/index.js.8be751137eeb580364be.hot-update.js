webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/GameOver.js":
/*!**************************************!*\
  !*** ./pages/components/GameOver.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _DangerButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DangerButton */ "./pages/components/DangerButton.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _Answers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Answers */ "./pages/components/Answers.js");






var _jsxFileName = "/Users/ken/Documents/Daimler/CabanaTrivia/pages/components/GameOver.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





var styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  root: {
    flexGrow: 1
  }
};

var GameOverComponent = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(GameOverComponent, _Component);

  function GameOverComponent(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GameOverComponent);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(GameOverComponent).call(this, props));
    _this.state = {};
    _this.onGoHome = _this.onGoHome.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GameOverComponent, [{
    key: "onGoHome",
    value: function onGoHome() {
      this.props.callback("START");
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
        container: true,
        direction: "column",
        justify: "center",
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Game Over. You scored: ", this.props.score), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onClick: this.onGoHome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Back to Home"));
    }
  }]);

  return GameOverComponent;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (GameOverComponent);

/***/ })

})
//# sourceMappingURL=index.js.8be751137eeb580364be.hot-update.js.map