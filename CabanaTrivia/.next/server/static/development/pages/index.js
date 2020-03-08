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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
var _jsxFileName = "/Users/ken/Documents/Daimler/CabanaTrivia/pages/components/Answers.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  container: {
    display: 'grid',
    direction: 'column'
  },
  minicontainer: {
    display: 'grid',
    direction: 'row'
  }
}));

class AnswersComponent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const answer1 = this.props.answers == null ? "Answer 1" : this.props.answers[0].text;
    const answer2 = this.props.answers == null ? "Answer 2" : this.props.answers[1].text;
    const answer3 = this.props.answers == null ? "Answer 3" : this.props.answers[2].text;
    const answer4 = this.props.answers == null ? "Answer 4" : this.props.answers[3].text;
    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      container: true,
      spacing: 2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      minicontainer: true,
      spacing: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, answer1, " "), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, answer2)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      minicontainer: true,
      spacing: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, answer3, " "), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, answer4)));
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
var _jsxFileName = "/Users/ken/Documents/Daimler/CabanaTrivia/pages/components/DangerButton.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class DangerButton extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      variant: "contained",
      color: "secondary",
      onClick: this.props.onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, this.props.text);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DangerButton);

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
/* harmony import */ var _Answers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Answers */ "./pages/components/Answers.js");
var _jsxFileName = "/Users/ken/Documents/Daimler/CabanaTrivia/pages/components/Questions.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const styles = {
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

class QuestionsComponent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      startGame: true,
      singlePlayer: true,
      duration: 1
    };
  }

  componentWillMount() {
    this.onGetQuestions();
  }

  async onGetQuestions(category) {
    const finalCateg = category == null ? "entertainment-music" : category;
    console.log("Starting out"); //fetch questions

    const response = await fetch("https://cocktail-trivia-api.herokuapp.com/api/category/" + finalCateg);
    console.log("response is: ");
    console.log(response);
    const allData = await response.json();
    console.log("All Data: ");
    console.log(allData);
    this.setState({
      questionsArr: allData
    });
    this.setState({
      currentQ: allData[0].text
    });
    this.setState({
      currentAnswers: allData[0].answers
    });
    console.log("The State:");
    console.log(this.state);
  }

  render() {
    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      container: true,
      direction: "column",
      justify: "center",
      alignItems: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, this.state.currentQ), __jsx(_Answers__WEBPACK_IMPORTED_MODULE_4__["default"], {
      answers: this.state.currentAnswers,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (QuestionsComponent); // import React, { Component } from 'react';
// import Button from '@material-ui/core/Button'
// import Grid from '@material-ui/core/Grid';
// class QuestionsComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { questionsArr: [] };
//     this.onGetQuestions = this.onGetQuestions.bind(this);
//     this.onClickAnswer = this.onClickAnswer.bind(this);
//   }
//   async onGetQuestions(category) {
//     const finalCateg = category == null ? category : "entertainment-music";
//     console.log("Starting out");
//     //fetch questions
//     //https://cocktail-trivia-api.herokuapp.com/api/category/entertainment-music
//     // const response = await fetch("https://cocktail-trivia-api.herokuapp.com/api/category/" + finalCateg)
//     // const allData = await response.json()
//     const allData = []
//     this.setState({ questionsArr: allData })
//     this.setState({ currentQ: allData[0].text })
//     this.setState({ currentAnswers: allData[0].answers })
//     console.log("Got the data:")
//     console.log(allData)
//   }
//   onClickAnswer() {
//   }
//   async render() {
//    // await this.onGetQuestions()
//     // <AnswersComponent answers={this.state.currentAnswers}></AnswersComponent>
//     return  <p>First Question</p>
//   }
// }
// export default QuestionsComponent;

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
var _jsxFileName = "/Users/ken/Documents/Daimler/CabanaTrivia/pages/components/Start.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const styles = {
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
    const startButton = this.state.startGame ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      variant: "contained",
      onClick: this.onClickStartGame,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "Start Game") : __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "End Game",
      onClick: this.onClickStartGame,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    });
    const singlePlayerSelector = this.state.singlePlayer ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Single Player",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      variant: "contained",
      onClick: this.onClickSingle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "Single Player");
    const multiPlayerSelector = this.state.singlePlayer ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      variant: "contained",
      onClick: this.onClickMulti,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, "Multi Player") : __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Multi Player",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    });
    const shortDurationSelector = this.state.duration === 1 ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Short Game [10 min]",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      variant: "contained",
      onClick: () => this.onSelectDuration(1),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, "Short Game [10 min]");
    const medDurationSelector = this.state.duration === 2 ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Medium Game [20 min]",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      variant: "contained",
      onClick: () => this.onSelectDuration(2),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, "Medium Game [20 min]");
    const longDurationSelector = this.state.duration === 3 ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Long Game [30 min]",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      variant: "contained",
      onClick: () => this.onSelectDuration(3),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, "Long Game [30 min]");
    return __jsx("div", {
      style: styles.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      container: true,
      spacing: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      item: true,
      xs: 12,
      sm: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, singlePlayerSelector), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      item: true,
      xs: 12,
      sm: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, multiPlayerSelector)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      container: true,
      spacing: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      item: true,
      xs: 12,
      sm: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, shortDurationSelector), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      item: true,
      xs: 12,
      sm: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, medDurationSelector), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      item: true,
      xs: 12,
      sm: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, longDurationSelector)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      container: true,
      spacing: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, startButton)));
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
var _jsxFileName = "/Users/ken/Documents/Daimler/CabanaTrivia/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const styles = {};
class IndexPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      gameState: "START"
    };
    this.renderSwitch = this.renderSwitch.bind(this);
  }

  renderSwitch(gameState) {
    console.log("State is: ");
    console.log(gameState);

    switch (gameState) {
      case 'START':
        return __jsx(_components_Start__WEBPACK_IMPORTED_MODULE_4__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        });

      case 'QUESTIONS':
        return __jsx(_components_Questions__WEBPACK_IMPORTED_MODULE_5__["default"], {
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

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ken/Documents/Daimler/CabanaTrivia/pages/index.js */"./pages/index.js");


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