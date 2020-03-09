webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/Questions.js":
/*!***************************************!*\
  !*** ./pages/components/Questions.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _DangerButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DangerButton */ "./pages/components/DangerButton.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/index.js");
/* harmony import */ var _Answers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Answers */ "./pages/components/Answers.js");
/* harmony import */ var _GameOver__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./GameOver */ "./pages/components/GameOver.js");
/* harmony import */ var _Feedback__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Feedback */ "./pages/components/Feedback.js");







var _jsxFileName = "/Users/jack/Google Drive/Winter Quarter 2020/CS 210/Daimler/CabanaTrivia/pages/components/Questions.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;









var Entities = __webpack_require__(/*! html-entities */ "./node_modules/html-entities/index.js").AllHtmlEntities;

var entities = new Entities();
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
var MAX_NUM_QUESTIONS = 3;
var FEEDBACK_SHOW_TIME_SECS = 2;

var QuestionsComponent = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(QuestionsComponent, _Component);

  function QuestionsComponent(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, QuestionsComponent);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(QuestionsComponent).call(this, props));
    _this.state = {
      startGame: true,
      singlePlayer: true,
      duration: 1,
      questionIndex: 0,
      currentScore: 0,
      showFeedback: false,
      lastQuestionCorrect: false,
      lastQuestionAnswer: ""
    };
    _this.nextQuestion = _this.nextQuestion.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(QuestionsComponent, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.onGetQuestions();
    }
  }, {
    key: "onGetQuestions",
    value: function onGetQuestions(category) {
      var finalCateg, response, allData;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function onGetQuestions$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              finalCateg = category == null ? "entertainment-music" : category; //fetch questions

              _context.next = 3;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("https://cocktail-trivia-api.herokuapp.com/api/category/" + finalCateg));

            case 3:
              response = _context.sent;
              _context.next = 6;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());

            case 6:
              allData = _context.sent;
              this.setState({
                questionsArr: allData
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "nextQuestion",
    value: function nextQuestion(isCorrect, correctAnswer) {
      var _this2 = this;

      var score = isCorrect ? this.state.currentScore + 1 : this.state.currentScore;
      var nextQIndex = this.state.questionIndex + 1;
      this.setState({
        lastQuestionCorrect: isCorrect
      });
      this.setState({
        lastQuestionAnswer: correctAnswer
      });
      this.setState({
        showFeedback: true
      });
      setTimeout(function () {
        _this2.setState({
          showFeedback: false
        });
      }, FEEDBACK_SHOW_TIME_SECS * 1000);
      this.setState({
        currentScore: score
      });
      this.setState({
        questionIndex: nextQIndex
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_11__["default"], {
        open: this.state.showFeedback,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx(_Feedback__WEBPACK_IMPORTED_MODULE_14__["default"], {
        wasCorrect: this.state.lastQuestionCorrect,
        correctAnswer: this.state.lastQuestionAnswer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
        container: true,
        direction: "column",
        justify: "center",
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, this.state.questionIndex < MAX_NUM_QUESTIONS && __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, this.state.questionsArr && entities.decode(this.state.questionsArr[this.state.questionIndex].text), "   "), __jsx(_Answers__WEBPACK_IMPORTED_MODULE_12__["default"], {
        answers: this.state.questionsArr && this.state.questionsArr[this.state.questionIndex].answers,
        callback: this.nextQuestion,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      })), this.state.questionIndex >= MAX_NUM_QUESTIONS && __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_GameOver__WEBPACK_IMPORTED_MODULE_13__["default"], {
        score: this.state.currentScore,
        callback: this.props.callback,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }))));
    }
  }]);

  return QuestionsComponent;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (QuestionsComponent);

/***/ })

})
//# sourceMappingURL=index.js.6e60a804881f43115dd3.hot-update.js.map