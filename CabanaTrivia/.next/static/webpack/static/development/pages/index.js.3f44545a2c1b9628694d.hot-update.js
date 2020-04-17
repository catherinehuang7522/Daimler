webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/Start.js":
/*!***********************************!*\
  !*** ./pages/components/Start.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _DangerButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DangerButton */ "./pages/components/DangerButton.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _stylesheet_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../stylesheet.js */ "./pages/stylesheet.js");






var _jsxFileName = "/Users/johnsonsong/Desktop/Daimler/CabanaTrivia/pages/components/Start.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var NUM_QUESTIONS_PER_MINUTE = 10;
/* shown when user first starts playing - they can choose what type of game they want to play
initializes the state
*/

var StartComponent = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(StartComponent, _Component);

  var _super = _createSuper(StartComponent);

  function StartComponent(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StartComponent);

    _this = _super.call(this, props);
    _this.state = {
      randomvar: '',
      startGame: true,
      singlePlayer: true,
      duration: 1
    };
    _this.onClickStartGame = _this.onClickStartGame.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.onClickSingle = _this.onClickSingle.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.onClickMulti = _this.onClickMulti.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  } // sets up the state to play a game for the prototype. Calls a callback function that will call the backhome function


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StartComponent, [{
    key: "onClickStartGame",
    value: function onClickStartGame() {
      this.setState({
        startGame: !this.state.startGame
      });
      this.props.callback("CATEGORIES");
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

      var startButton = __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_10__["styles"].unselectedButton,
        variant: "contained",
        onClick: this.onClickStartGame,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 7
        }
      }, "Start Game");

      var singlePlayerSelector = this.state.singlePlayer ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Single Player",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 7
        }
      }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_10__["styles"].unselectedButton,
        variant: "contained",
        onClick: this.onClickSingle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 7
        }
      }, "Single Player");
      var multiPlayerSelector = this.state.singlePlayer ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_10__["styles"].unselectedButton,
        variant: "contained",
        onClick: this.onClickMulti,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 7
        }
      }, "Multi Player") : __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Multi Player",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 7
        }
      });
      var shortDurationSelector = this.state.duration === 1 ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Short Game [10 min]",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 7
        }
      }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_10__["styles"].unselectedButton,
        variant: "contained",
        onClick: function onClick() {
          return _this2.onSelectDuration(1);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 7
        }
      }, "Short Game [10 min]");
      var medDurationSelector = this.state.duration === 2 ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Medium Game [20 min]",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 7
        }
      }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_10__["styles"].unselectedButton,
        variant: "contained",
        onClick: function onClick() {
          return _this2.onSelectDuration(2);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 7
        }
      }, "Medium Game [20 min]");
      var longDurationSelector = this.state.duration === 3 ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Long Game [30 min]",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 7
        }
      }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_10__["styles"].unselectedButton,
        variant: "contained",
        onClick: function onClick() {
          return _this2.onSelectDuration(3);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 7
        }
      }, "Long Game [30 min]");
      return __jsx("div", {
        style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_10__["styles"].root,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
        style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_10__["styles"].title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 9
        }
      }, " TRIVIA "), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
        style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_10__["styles"].row,
        spacing: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 9
        }
      }, singlePlayerSelector, multiPlayerSelector), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
        style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_10__["styles"].row,
        spacing: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 9
        }
      }, shortDurationSelector, medDurationSelector, longDurationSelector), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
        style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_10__["styles"].row,
        spacing: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 9
        }
      }, startButton));
    }
  }]);

  return StartComponent;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (StartComponent);

/***/ })

})
//# sourceMappingURL=index.js.3f44545a2c1b9628694d.hot-update.js.map