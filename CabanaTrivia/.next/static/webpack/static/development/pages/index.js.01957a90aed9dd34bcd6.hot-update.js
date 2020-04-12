webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/Categories.js":
/*!****************************************!*\
  !*** ./pages/components/Categories.js ***!
  \****************************************/
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
/* harmony import */ var _CategoriesButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CategoriesButton */ "./pages/components/CategoriesButton.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _stylesheet_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../stylesheet.js */ "./pages/stylesheet.js");






var _jsxFileName = "/Users/johnsonsong/Desktop/Daimler/CabanaTrivia/pages/components/Categories.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;






/* shown when user first starts playing - they can choose what type of game they want to play
initializes the state
*/

var CategoriesComponent = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CategoriesComponent, _Component);

  function CategoriesComponent(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CategoriesComponent);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CategoriesComponent).call(this, props));
    _this.state = {
      isUnselected: true,
      generalKnowledge: false,
      film: false,
      switchcienceNature: false,
      sports: false,
      history: false,
      tv: false,
      books: false,
      music: false,
      mythology: false,
      geography: false,
      art: false,
      videoGames: false
    };
    _this.onClickCat = _this.onClickCat.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  } //Set the value of the category chosen as true


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CategoriesComponent, [{
    key: "onClickCat",
    value: function onClickCat(someCategory) {
      this.setState({
        someCategory: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      //By default, our categoty buttons are all unselected. When selected, the button looks selected
      //TODO: Pass a function that will change the boolen of individual category
      //Example is given on General Knowledge
      var generalKnowledgeButton = this.state.isUnselected ? __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "General Knowledge",
        hasChosenCategory: this.onClickCat("generalKnowledge"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }) : __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "General Knowledge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      });
      var filmButton = this.state.isUnselected ? __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "Film",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }) : __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Film",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      });
      var scienceNatureButton = this.state.isUnselected ? __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "Science and Nature",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }) : __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Science and Nature",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      });
      var sportsButton = this.state.isUnselected ? __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "Sports",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }) : __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Sports",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      });
      var historyButton = this.state.isUnselected ? __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "History",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }) : __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "History",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      });
      var tvButton = this.state.isUnselected ? __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "Television",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }) : __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Television",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      });
      var booksButton = this.state.isUnselected ? __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "Books",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }) : __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Books",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      });
      var musicButton = this.state.isUnselected ? __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "Books",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }) : __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Books",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      });
      var mythologyButton = this.state.isUnselected ? __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "Mythology",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }) : __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Mythology",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      });
      var geographyButton = this.state.isUnselected ? __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "Geography",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }) : __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Geography",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      });
      var artButton = this.state.isUnselected ? __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "Art",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }) : __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Art",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      });
      var videoGamesButton = this.state.isUnselected ? __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "Art",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }) : __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Art",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      });
      return (//TODO: Make sure that styles.column does actually style to 2 columns. Check the stylesheet.js file
        __jsx("div", {
          style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_11__["styles"].root,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
          style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_11__["styles"].title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, " SELECT UP TO 3 CATEGORIES "), "//Column 1", __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
          style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_11__["styles"].column,
          spacing: 3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, generalKnowledgeButton, filmButton, scienceNatureButton, sportsButton, historyButton, tvButton), "//Column 2", __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
          style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_11__["styles"].column,
          spacing: 3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, booksButton, musicButton, mythologyButton, geographyButton, artButton, videoGamesButton), "//TODO: //Add some arrow button that would mean \"Next\". //Not yet implemented")
      );
    }
  }]);

  return CategoriesComponent;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CategoriesComponent);

/***/ })

})
//# sourceMappingURL=index.js.01957a90aed9dd34bcd6.hot-update.js.map