module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("OUhP");


/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "HY1F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Wh1t");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("JQ2V");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stylesheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("NdJi");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Entities = __webpack_require__("yVMD").AllHtmlEntities;


const entities = new Entities(); // component that displays the answers

class AnswersComponent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.onPressAnswer = this.onPressAnswer.bind(this);
  } // executed when answer is pressed


  onPressAnswer(answerObj) {
    let correctAnswer;

    for (let i in this.props.answers) {
      let currAnswerObj = this.props.answers[i];

      if (currAnswerObj.correct) {
        correctAnswer = entities.decode(currAnswerObj.text); // decoding because some of the questions and answers have HTML entities e.g. &quot;

        break;
      }
    }

    this.props.callback(answerObj.correct, correctAnswer);
  }

  render() {
    //did the null check because it takes time for the API to return the values
    const answer1 = this.props.answers == null ? "Answer 1" : this.props.answers[0];
    const answer2 = this.props.answers == null ? "Answer 2" : this.props.answers[1];
    const answer3 = this.props.answers == null ? "Answer 3" : this.props.answers[2];
    const answer4 = this.props.answers == null ? "Answer 4" : this.props.answers[3];
    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      columnGrid: true,
      direction: "column",
      justify: "center",
      alignItems: "center",
      spacing: 2
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      rowGrid: true,
      spacing: 1
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet__WEBPACK_IMPORTED_MODULE_4__[/* styles */ "a"].unselectedButton,
      onClick: () => this.onPressAnswer(answer1)
    }, entities.decode(answer1.text), " "), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet__WEBPACK_IMPORTED_MODULE_4__[/* styles */ "a"].unselectedButton,
      onClick: () => this.onPressAnswer(answer2)
    }, entities.decode(answer2.text))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      rowGrid: true,
      spacing: 1
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet__WEBPACK_IMPORTED_MODULE_4__[/* styles */ "a"].unselectedButton,
      onClick: () => this.onPressAnswer(answer3)
    }, entities.decode(answer3.text), " "), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet__WEBPACK_IMPORTED_MODULE_4__[/* styles */ "a"].unselectedButton,
      onClick: () => this.onPressAnswer(answer4)
    }, entities.decode(answer4.text))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AnswersComponent);

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "NdJi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
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

/***/ "OUhP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Wh1t");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DangerButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cMZM");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("JQ2V");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Answers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("HY1F");
/* harmony import */ var _stylesheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("NdJi");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // component shown when the game is over

class GameOverComponent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {};
    this.onGoHome = this.onGoHome.bind(this);
  } // calls the callback function from questions


  onGoHome() {
    //  this.setState({ startGame: !this.state.startGame })
    this.props.callback("START");
    console.log("Hello!!!");
  }

  render() {
    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      container: true,
      direction: "column",
      justify: "center",
      alignItems: "center"
    }, __jsx("p", {
      style: _stylesheet__WEBPACK_IMPORTED_MODULE_5__[/* styles */ "a"].questionText
    }, "Game Over. You scored: ", this.props.score), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet__WEBPACK_IMPORTED_MODULE_5__[/* styles */ "a"].unselectedButton,
      onClick: this.onGoHome
    }, "Back to Home"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (GameOverComponent);

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cMZM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Wh1t");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
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
      onClick: this.props.onClick
    }, this.props.text);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DangerButton);

/***/ }),

/***/ "yVMD":
/***/ (function(module, exports) {

module.exports = require("html-entities");

/***/ })

/******/ });