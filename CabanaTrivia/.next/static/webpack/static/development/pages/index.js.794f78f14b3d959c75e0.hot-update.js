webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/Answers.js":
/*!*************************************!*\
  !*** ./pages/components/Answers.js ***!
  \*************************************/
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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _stylesheet_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../stylesheet.js */ "./pages/stylesheet.js");






var _jsxFileName = "/Users/jack/Google Drive/Winter Quarter 2020/CS 210/Daimler/CabanaTrivia/pages/components/Answers.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





var Entities = __webpack_require__(/*! html-entities */ "./node_modules/html-entities/index.js").AllHtmlEntities;


var entities = new Entities();

var AnswersComponent = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AnswersComponent, _Component);

  function AnswersComponent(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AnswersComponent);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AnswersComponent).call(this, props));
    _this.onPressAnswer = _this.onPressAnswer.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AnswersComponent, [{
    key: "onPressAnswer",
    value: function onPressAnswer(answerObj) {
      var correctAnswer;

      for (var i in this.props.answers) {
        var currAnswerObj = this.props.answers[i];

        if (currAnswerObj.correct) {
          correctAnswer = entities.decode(currAnswerObj.text);
          break;
        }
      }

      this.props.callback(answerObj.correct, correctAnswer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var answer1 = this.props.answers == null ? "Answer 1" : this.props.answers[0];
      var answer2 = this.props.answers == null ? "Answer 2" : this.props.answers[1];
      var answer3 = this.props.answers == null ? "Answer 3" : this.props.answers[2];
      var answer4 = this.props.answers == null ? "Answer 4" : this.props.answers[3];
      return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
        columnGrid: true,
        direction: "column",
        justify: "center",
        alignItems: "center",
        spacing: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
        rowGrid: true,
        spacing: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_10__["styles"].unselectedButton,
        onClick: function onClick() {
          return _this2.onPressAnswer(answer1);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, entities.decode(answer1.text), " "), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_10__["styles"].unselectedButton,
        onClick: function onClick() {
          return _this2.onPressAnswer(answer2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, entities.decode(answer2.text))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
        rowGrid: true,
        spacing: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_10__["styles"].unselectedButton,
        onClick: function onClick() {
          return _this2.onPressAnswer(answer3);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, entities.decode(answer3.text), " "), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_10__["styles"].unselectedButton,
        onClick: function onClick() {
          return _this2.onPressAnswer(answer4);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, entities.decode(answer4.text))));
    }
  }]);

  return AnswersComponent;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AnswersComponent);

/***/ })

})
//# sourceMappingURL=index.js.794f78f14b3d959c75e0.hot-update.js.map