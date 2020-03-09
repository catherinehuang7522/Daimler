webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/Feedback.js":
/*!**************************************!*\
  !*** ./pages/components/Feedback.js ***!
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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");






var _jsxFileName = "/Users/jack/Google Drive/Winter Quarter 2020/CS 210/Daimler/CabanaTrivia/pages/components/Feedback.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





var Entities = __webpack_require__(/*! html-entities */ "./node_modules/html-entities/index.js").AllHtmlEntities;

var entities = new Entities();
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  return {
    container: {
      display: 'grid',
      direction: 'column'
    },
    minicontainer: {
      display: 'grid',
      direction: 'row'
    }
  };
});

var FeedbackComponent = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(FeedbackComponent, _Component);

  function FeedbackComponent(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FeedbackComponent);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(FeedbackComponent).call(this, props));
    _this.onPressDismiss = _this.onPressDismiss.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      wasCorrect: props.wasCorrect,
      correctAnswer: props.correctAnswer
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FeedbackComponent, [{
    key: "onPressDismiss",
    value: function onPressDismiss() {
      this.props.callback();
    }
  }, {
    key: "render",
    value: function render() {
      var headerText;

      if (this.state.wasCorrect) {
        headerText = "Correct";
      } else {
        headerText = "Wrong";
      }

      return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
        container: true,
        direction: "column",
        justify: "center",
        alignItems: "center",
        spacing: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
        minicontainer: true,
        spacing: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, headerText)), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "The correct answer was: ", this.state.correctAnswer));
    }
  }]);

  return FeedbackComponent;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FeedbackComponent);

/***/ })

})
//# sourceMappingURL=index.js.205b1cccf7bf67ffc22d.hot-update.js.map