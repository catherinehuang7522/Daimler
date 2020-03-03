webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _components_DangerButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/DangerButton */ "./pages/components/DangerButton.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");






var _jsxFileName = "/Users/jack/Google Drive/Winter Quarter 2020/CS 210/Daimler/CabanaTrivia/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




var styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
};

var IndexPage = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(IndexPage, _Component);

  function IndexPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IndexPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(IndexPage).call(this, props));
    _this.state = {
      startGame: true,
      singlePlayer: true,
      duration: 1
    };
    _this.onClickStartGame = _this.onClickStartGame.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onClickSingle = _this.onClickSingle.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onClickMulti = _this.onClickMulti.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onSelectDuration = _this.onSelectDuration.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(IndexPage, [{
    key: "onClickStartGame",
    value: function onClickStartGame() {
      //change the state when the user clicks start game
      if (this.state.startGame === true) {
        this.setState({
          startGame: false
        });
      } else {
        this.setState({
          startGame: true
        });
      }
    }
  }, {
    key: "onClickSingle",
    value: function onClickSingle() {
      this.setState({
        singlePlayer: true
      });
    }
  }, {
    key: "onClickMulti",
    value: function onClickMulti() {
      this.setState({
        singlePlayer: false
      });
    }
  }, {
    key: "onSelectDuration",
    value: function onSelectDuration(dur) {
      this.setState({
        duration: dur
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var startButton = this.state.startGame ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "contained",
        onClick: this.onClickStartGame,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Start Game") : __jsx(_components_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "End Game",
        onClick: this.onClickStartGame,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      });
      var singlePlayerSelector = this.state.singlePlayer ? __jsx(_components_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Single Player",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "contained",
        onClick: this.onClickSingle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Single Player");
      var multiPlayerSelector = this.state.singlePlayer ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "contained",
        onClick: this.onClickMulti,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Multi Player") : __jsx(_components_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Multi Player",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      });
      var shortDurationSelector = this.state.duration === 1 ? __jsx(_components_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Short Game [10 min]",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "contained",
        onClick: function onClick() {
          return _this2.onSelectDuration(1);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Short Game [10 min]");
      var medDurationSelector = this.state.duration === 2 ? __jsx(_components_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Medium Game [20 min]",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "contained",
        onClick: function onClick() {
          return _this2.onSelectDuration(2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Medium Game [20 min]");
      var longDurationSelector = this.state.duration === 3 ? __jsx(_components_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Long Game [30 min]",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "contained",
        onClick: function onClick() {
          return _this2.onSelectDuration(3);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Long Game [30 min]");
      return __jsx("div", {
        style: styles.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
        container: true,
        flexGrow: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, singlePlayerSelector, multiPlayerSelector), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
        container: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, shortDurationSelector, medDurationSelector, longDurationSelector), startButton);
    }
  }]);

  return IndexPage;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.ea94eb1030d7816b1e47.hot-update.js.map