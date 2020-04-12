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
      generalKnowledge: false,
      film: false,
      scienceNature: false,
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
    _this.onClickGeneralKnowledge = _this.onClickGeneralKnowledge.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CategoriesComponent, [{
    key: "onClickGeneralKnowledge",
    value: function onClickGeneralKnowledge() {
      this.setState({
        generalKnowledge: !this.state.generalKnowledge
      });
    }
  }, {
    key: "onClickFilm",
    value: function onClickFilm() {
      this.setState({
        film: !this.state.film
      });
    }
  }, {
    key: "onClickScienceNature",
    value: function onClickScienceNature() {
      this.setState({
        scienceNature: !this.state.scienceNature
      });
    }
  }, {
    key: "onClickGeneralKnowledge",
    value: function onClickGeneralKnowledge() {
      if (this.state.generalKnowledge) {
        this.setState({
          generalKnowledge: false
        });
      } else {
        this.setState({
          generalKnowledge: true
        });
      }
    }
  }, {
    key: "onClickGeneralKnowledge",
    value: function onClickGeneralKnowledge() {
      if (this.state.generalKnowledge) {
        this.setState({
          generalKnowledge: false
        });
      } else {
        this.setState({
          generalKnowledge: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      //By default, our categoty buttons are all unselected. When selected, the button looks selected
      //TODO: Pass a function that will change the boolen of individual category
      //Example is given on General Knowledge
      var generalKnowledgeButton = this.state.generalKnowledge ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "General Knowledge",
        onClick: this.onClickGeneralKnowledge,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "General Knowledge",
        onClick: this.onClickGeneralKnowledge,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      });
      var filmButton = this.state.film ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Film",
        onClick: this.onClickFilm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "Film",
        onClick: this.onClickFilm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      });
      var scienceNatureButton = this.state.scienceNature ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Science and Nature",
        onClick: this.onClickScienceNature,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "Science and Nature",
        onClick: this.onClickScienceNature,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      });
      var sportsButton = this.state.sports ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Sports",
        onClick: this.onClickSports,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "Sports",
        onClick: this.onClickSports,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      });
      var historyButton = this.state.history ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "History",
        onClick: this.onClickHistory,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "History",
        onClick: this.onClickHistory,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      });
      var tvButton = this.state.tv ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Television",
        onClick: this.onClickTV,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "Television",
        onClick: this.onClickTV,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      });
      var booksButton = this.state.books ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Books",
        onClick: this.onClickBooks,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "Books",
        onClick: this.onClickBooks,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      });
      var musicButton = this.state.music ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Music",
        onClick: this.onClickMusic,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "Music",
        onClick: this.onClickMusic,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      });
      var mythologyButton = this.state.mythology ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Mythology",
        onClick: this.onClickMythology,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "Mythology",
        onClick: this.onClickMythology,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      });
      var geographyButton = this.state.geography ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Geography",
        onClick: this.onClickGeography,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "Geography",
        onClick: this.onClickGeography,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      });
      var artButton = this.state.art ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Art",
        onClick: this.onClickArt,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "Art",
        onClick: this.onClickArt,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      });
      var videoGamesButton = this.state.videoGames ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Video Games",
        onClick: this.onClickVideoGames,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "Video Games",
        onClick: this.onClickVideoGames,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }); //TODO: Make sure that styles.column does actually style to 2 columns. Check the stylesheet.js file
      //TODO:
      //Add some arrow button that would mean "Next".
      //Not yet implemented

      return __jsx("div", {
        style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_11__["styles"].root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_11__["styles"].title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, " SELECT UP TO 3 CATEGORIES "), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_11__["styles"].column,
        spacing: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, generalKnowledgeButton, filmButton, scienceNatureButton, sportsButton, historyButton, tvButton), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_11__["styles"].column,
        spacing: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, booksButton, musicButton, mythologyButton, geographyButton, artButton, videoGamesButton));
    }
  }]);

  return CategoriesComponent;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CategoriesComponent);

/***/ })

})
//# sourceMappingURL=index.js.f055044f481e90b93584.hot-update.js.map