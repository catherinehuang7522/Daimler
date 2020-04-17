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
/* harmony import */ var _stylesheet_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../stylesheet.js */ "./pages/stylesheet.js");






var _jsxFileName = "/Users/johnsonsong/Desktop/Daimler/CabanaTrivia/pages/components/Feedback.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





var Entities = __webpack_require__(/*! html-entities */ "./node_modules/html-entities/index.js").AllHtmlEntities;


var entities = new Entities();

var FeedbackComponent = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(FeedbackComponent, _Component);

  function FeedbackComponent(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FeedbackComponent);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(FeedbackComponent).call(this, props));
    _this.onPressDismiss = _this.onPressDismiss.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
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
      var bodyText;

      if (this.props.wasCorrect) {
        headerText = __jsx("p", {
          style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_10__["styles"].feedbackHeaderTextCorrect,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, "Correct!");
        bodyText = "Way to go! You were right! " + this.props.correctAnswer + " is correct.";
      } else {
        headerText = __jsx("p", {
          style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_10__["styles"].feedbackHeaderTextIncorrect,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, "Incorrect");
        bodyText = "Oh no, that wasn't right. The correct answer was " + this.props.correctAnswer + ".";
      }

      return __jsx("div", {
        style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_10__["styles"].feedbackContent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
        columnGrid: true,
        direction: "column",
        justify: "center",
        alignItems: "center",
        spacing: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
        rowGrid: true,
        spacing: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, headerText), __jsx("p", {
        style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_10__["styles"].feedbackBodyText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, bodyText)));
    }
  }]);

  return FeedbackComponent;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FeedbackComponent);

/***/ })

})
//# sourceMappingURL=index.js.8e37cc6abf68fee22f21.hot-update.js.map