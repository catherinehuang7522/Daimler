module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/components/Answers.js":
/*!*************************************!*\
  !*** ./pages/components/Answers.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stylesheet.js */ "./pages/stylesheet.js");
var _jsxFileName = "/Users/jack/Google Drive/Winter Quarter 2020/CS 210/Daimler/CabanaTrivia/pages/components/Answers.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Entities = __webpack_require__(/*! html-entities */ "html-entities").AllHtmlEntities;


const entities = new Entities();

class AnswersComponent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.onPressAnswer = this.onPressAnswer.bind(this);
  }

  onPressAnswer(answerObj) {
    let correctAnswer;

    for (let i in this.props.answers) {
      let currAnswerObj = this.props.answers[i];

      if (currAnswerObj.correct) {
        correctAnswer = entities.decode(currAnswerObj.text);
        break;
      }
    }

    this.props.callback(answerObj.correct, correctAnswer);
  }

  render() {
    const answer1 = this.props.answers == null ? "Answer 1" : this.props.answers[0];
    const answer2 = this.props.answers == null ? "Answer 2" : this.props.answers[1];
    const answer3 = this.props.answers == null ? "Answer 3" : this.props.answers[2];
    const answer4 = this.props.answers == null ? "Answer 4" : this.props.answers[3];
    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      rowGrid: true,
      spacing: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].unselectedButton,
      onClick: () => this.onPressAnswer(answer1),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, entities.decode(answer1.text), " "), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].unselectedButton,
      onClick: () => this.onPressAnswer(answer2),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, entities.decode(answer2.text))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      rowGrid: true,
      spacing: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].unselectedButton,
      onClick: () => this.onPressAnswer(answer3),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, entities.decode(answer3.text), " "), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].unselectedButton,
      onClick: () => this.onPressAnswer(answer4),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, entities.decode(answer4.text))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AnswersComponent);

/***/ }),

/***/ "./pages/components/DangerButton.js":
/*!******************************************!*\
  !*** ./pages/components/DangerButton.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jack/Google Drive/Winter Quarter 2020/CS 210/Daimler/CabanaTrivia/pages/components/DangerButton.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const styles = {
  selectedButton: {
    backgroundColor: 'white',
    color: '#1F1F55',
    boxShadow: '0px 0px 4px #ffffff',
    borderRadius: 20,
    borderTop: '5px solid #4DFAFA',
    borderBottom: '5px solid #4DFAFA',
    borderLeft: '5px solid #4DFAFA',
    borderRight: '5px solid #4DFAFA',
    width: 332,
    height: 78,
    fontFamily: 'Kontakt'
  }
};

class DangerButton extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: styles.selectedButton,
      variant: "contained",
      color: "secondary",
      onClick: this.props.onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, this.props.text);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DangerButton);

/***/ }),

/***/ "./pages/components/Feedback.js":
/*!**************************************!*\
  !*** ./pages/components/Feedback.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stylesheet.js */ "./pages/stylesheet.js");
var _jsxFileName = "/Users/jack/Google Drive/Winter Quarter 2020/CS 210/Daimler/CabanaTrivia/pages/components/Feedback.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Entities = __webpack_require__(/*! html-entities */ "html-entities").AllHtmlEntities;


const entities = new Entities();

class FeedbackComponent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.onPressDismiss = this.onPressDismiss.bind(this);
  }

  onPressDismiss() {
    this.props.callback();
  }

  render() {
    let headerText;
    let bodyText;

    if (this.props.wasCorrect) {
      headerText = "Correct!";
      bodyText = "Way to go! You were right! " + this.props.correctAnswer + " is correct.";
    } else {
      headerText = "Incorrect";
      bodyText = "Oh no, that wasn't right. The correct answer was " + this.props.correctAnswer + ".";
    }

    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      columnGrid: true,
      direction: "column",
      justify: "center",
      alignItems: "center",
      spacing: 2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      rowGrid: true,
      spacing: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("p", {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].feedbackHeaderText,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, headerText)), __jsx("p", {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].feedbackBodyText,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, bodyText));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FeedbackComponent);

/***/ }),

/***/ "./pages/components/GameOver.js":
/*!**************************************!*\
  !*** ./pages/components/GameOver.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DangerButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DangerButton */ "./pages/components/DangerButton.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Answers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Answers */ "./pages/components/Answers.js");
/* harmony import */ var _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stylesheet.js */ "./pages/stylesheet.js");
var _jsxFileName = "/Users/jack/Google Drive/Winter Quarter 2020/CS 210/Daimler/CabanaTrivia/pages/components/GameOver.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class GameOverComponent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {};
    this.onGoHome = this.onGoHome.bind(this);
  }

  onGoHome() {
    this.props.callback("START");
  }

  render() {
    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      container: true,
      direction: "column",
      justify: "center",
      alignItems: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("p", {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__["styles"].questionText,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Game Over. You scored: ", this.props.score), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__["styles"].unselectedButton,
      Click: this.onGoHome,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "Back to Home"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (GameOverComponent);

/***/ }),

/***/ "./pages/components/Questions.js":
/*!***************************************!*\
  !*** ./pages/components/Questions.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DangerButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DangerButton */ "./pages/components/DangerButton.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "@material-ui/core/Backdrop");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Answers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Answers */ "./pages/components/Answers.js");
/* harmony import */ var _GameOver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GameOver */ "./pages/components/GameOver.js");
/* harmony import */ var _Feedback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Feedback */ "./pages/components/Feedback.js");
/* harmony import */ var _stylesheet_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../stylesheet.js */ "./pages/stylesheet.js");
var _jsxFileName = "/Users/jack/Google Drive/Winter Quarter 2020/CS 210/Daimler/CabanaTrivia/pages/components/Questions.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Entities = __webpack_require__(/*! html-entities */ "html-entities").AllHtmlEntities;


const entities = new Entities();
const MAX_NUM_QUESTIONS = 3;
const FEEDBACK_SHOW_TIME_SECS = 2;

class QuestionsComponent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      startGame: true,
      singlePlayer: true,
      duration: 1,
      questionIndex: 0,
      currentScore: 0,
      showFeedback: false,
      lastQuestionCorrect: false,
      lastQuestionAnswer: ""
    };
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  componentWillMount() {
    this.onGetQuestions();
  }

  async onGetQuestions(category) {
    const finalCateg = category == null ? "entertainment-music" : category; //fetch questions

    const response = await fetch("https://cocktail-trivia-api.herokuapp.com/api/category/" + finalCateg);
    const allData = await response.json();
    this.setState({
      questionsArr: allData
    });
  }

  nextQuestion(isCorrect, correctAnswer) {
    const score = isCorrect ? this.state.currentScore + 1 : this.state.currentScore;
    const nextQIndex = this.state.questionIndex + 1;
    this.setState({
      lastQuestionCorrect: isCorrect
    });
    this.setState({
      lastQuestionAnswer: correctAnswer
    });
    this.setState({
      showFeedback: true
    });
    setTimeout(() => {
      this.setState({
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

  render() {
    return __jsx("div", {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_8__["styles"].root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_4___default.a, {
      open: this.state.showFeedback,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx(_Feedback__WEBPACK_IMPORTED_MODULE_7__["default"], {
      wasCorrect: this.state.lastQuestionCorrect,
      correctAnswer: this.state.lastQuestionAnswer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      container: true,
      direction: "column",
      justify: "center",
      alignItems: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, this.state.questionIndex < MAX_NUM_QUESTIONS && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_8__["styles"].questionText,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, this.state.questionsArr && entities.decode(this.state.questionsArr[this.state.questionIndex].text), "   "), __jsx(_Answers__WEBPACK_IMPORTED_MODULE_5__["default"], {
      answers: this.state.questionsArr && this.state.questionsArr[this.state.questionIndex].answers,
      callback: this.nextQuestion,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    })), this.state.questionIndex >= MAX_NUM_QUESTIONS && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_GameOver__WEBPACK_IMPORTED_MODULE_6__["default"], {
      score: this.state.currentScore,
      callback: this.props.callback,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (QuestionsComponent);

/***/ }),

/***/ "./pages/components/Start.js":
/*!***********************************!*\
  !*** ./pages/components/Start.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DangerButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DangerButton */ "./pages/components/DangerButton.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stylesheet.js */ "./pages/stylesheet.js");
var _jsxFileName = "/Users/jack/Google Drive/Winter Quarter 2020/CS 210/Daimler/CabanaTrivia/pages/components/Start.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class StartComponent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      startGame: true,
      singlePlayer: true,
      duration: 1
    };
    this.onClickStartGame = this.onClickStartGame.bind(this);
    this.onClickSingle = this.onClickSingle.bind(this);
    this.onClickMulti = this.onClickMulti.bind(this);
  }

  onClickStartGame() {
    this.setState({
      startGame: !this.state.startGame
    });
    this.props.callback("QUESTIONS");
  }

  onClickSingle() {
    this.setState({
      singlePlayer: true
    });
  }

  onClickMulti() {
    this.setState({
      singlePlayer: false
    });
  }

  onSelectDuration(dur) {
    this.setState({
      duration: dur
    });
  }

  render() {
    const startButton = __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].unselectedButton,
      variant: "contained",
      onClick: this.onClickStartGame,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Start Game");

    const singlePlayerSelector = this.state.singlePlayer ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Single Player",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].unselectedButton,
      variant: "contained",
      onClick: this.onClickSingle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Single Player");
    const multiPlayerSelector = this.state.singlePlayer ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].unselectedButton,
      variant: "contained",
      onClick: this.onClickMulti,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "Multi Player") : __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Multi Player",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    });
    const shortDurationSelector = this.state.duration === 1 ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Short Game [10 min]",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].unselectedButton,
      variant: "contained",
      onClick: () => this.onSelectDuration(1),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "Short Game [10 min]");
    const medDurationSelector = this.state.duration === 2 ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Medium Game [20 min]",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].unselectedButton,
      variant: "contained",
      onClick: () => this.onSelectDuration(2),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "Medium Game [20 min]");
    const longDurationSelector = this.state.duration === 3 ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Long Game [30 min]",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].unselectedButton,
      variant: "contained",
      onClick: () => this.onSelectDuration(3),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, "Long Game [30 min]");
    return __jsx("div", {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, " TRIVIA "), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].row,
      spacing: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, singlePlayerSelector, multiPlayerSelector), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].row,
      spacing: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, shortDurationSelector, medDurationSelector, longDurationSelector), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].row,
      spacing: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, startButton));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (StartComponent);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_DangerButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/DangerButton */ "./pages/components/DangerButton.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Start__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Start */ "./pages/components/Start.js");
/* harmony import */ var _components_Questions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Questions */ "./pages/components/Questions.js");
var _jsxFileName = "/Users/jack/Google Drive/Winter Quarter 2020/CS 210/Daimler/CabanaTrivia/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const styles = {};
class IndexPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      gameState: "START"
    };
    this.renderSwitch = this.renderSwitch.bind(this);
    this.backHome = this.backHome.bind(this);
  }

  backHome(nextActions) {
    this.setState({
      gameState: nextActions
    });
  }

  renderSwitch(gameState) {
    switch (gameState) {
      case 'START':
        return __jsx(_components_Start__WEBPACK_IMPORTED_MODULE_4__["default"], {
          callback: this.backHome,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        });

      case 'QUESTIONS':
        return __jsx(_components_Questions__WEBPACK_IMPORTED_MODULE_5__["default"], {
          callback: this.backHome,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        });

      default:
        return __jsx(_components_Start__WEBPACK_IMPORTED_MODULE_4__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        });
    }
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, " ", this.renderSwitch(this.state.gameState));
  }

}

/***/ }),

/***/ "./pages/stylesheet.js":
/*!*****************************!*\
  !*** ./pages/stylesheet.js ***!
  \*****************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: '#07142B',
    width: 1062,
    height: 484,
    fontFamily: 'Kontakt'
  },
  row: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20
  },
  title: {
    color: 'white',
    fontSize: 48,
    display: 'flex',
    justifyContent: 'center'
  },
  questionText: {
    color: 'white'
  },
  feedbackHeaderText: {
    color: 'white',
    fontSize: 48
  },
  feedbackBodyText: {
    color: 'white'
  },
  unselectedButton: {
    backgroundColor: '#205B82',
    color: 'white',
    borderRadius: 20,
    width: 332,
    height: 78,
    fontFamily: 'Kontakt'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  columnGrid: {
    display: 'grid',
    direction: 'column'
  },
  rowGrid: {
    display: 'grid',
    direction: 'row'
  }
};


/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jack/Google Drive/Winter Quarter 2020/CS 210/Daimler/CabanaTrivia/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core/Backdrop":
/*!*********************************************!*\
  !*** external "@material-ui/core/Backdrop" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Backdrop");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "html-entities":
/*!********************************!*\
  !*** external "html-entities" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("html-entities");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map