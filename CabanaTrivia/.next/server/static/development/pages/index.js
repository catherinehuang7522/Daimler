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
var _jsxFileName = "/Users/paulinaanzaldo/Daimler/CabanaTrivia/pages/components/Answers.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Entities = __webpack_require__(/*! html-entities */ "html-entities").AllHtmlEntities;


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
      spacing: 2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      rowGrid: true,
      spacing: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].unselectedButton,
      onClick: () => this.onPressAnswer(answer1),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, entities.decode(answer1.text), " "), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].unselectedButton,
      onClick: () => this.onPressAnswer(answer2),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, entities.decode(answer2.text))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      rowGrid: true,
      spacing: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].unselectedButton,
      onClick: () => this.onPressAnswer(answer3),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, entities.decode(answer3.text), " "), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].unselectedButton,
      onClick: () => this.onPressAnswer(answer4),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, entities.decode(answer4.text))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AnswersComponent);

/***/ }),

/***/ "./pages/components/Categories.js":
/*!****************************************!*\
  !*** ./pages/components/Categories.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DangerButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DangerButton */ "./pages/components/DangerButton.js");
/* harmony import */ var _CategoriesButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CategoriesButton */ "./pages/components/CategoriesButton.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stylesheet.js */ "./pages/stylesheet.js");
var _jsxFileName = "/Users/paulinaanzaldo/Daimler/CabanaTrivia/pages/components/Categories.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






/* shown when user first starts playing - they can choose what type of game they want to play
initializes the state
*/

class CategoriesComponent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
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
    this.onClickGeneralKnowledge = this.onClickGeneralKnowledge.bind(this);
    this.onClickFilm = this.onClickFilm.bind(this);
    this.onClickScienceNature = this.onClickScienceNature.bind(this);
    this.onClickSports = this.onClickSports.bind(this);
    this.onClickHistory = this.onClickHistory.bind(this);
    this.onClickTV = this.onClickTV.bind(this);
    this.onClickBooks = this.onClickBooks.bind(this);
    this.onClickMusic = this.onClickMusic.bind(this);
    this.onClickMythology = this.onClickMythology.bind(this);
    this.onClickGeography = this.onClickGeography.bind(this);
    this.onClickArt = this.onClickArt.bind(this);
    this.onClickVideoGames = this.onClickVideoGames.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  onClickGeneralKnowledge() {
    this.setState({
      generalKnowledge: !this.state.generalKnowledge
    });
    !this.state.generalKnowledge ? this.incrementCount() : this.decrementCount();
  }

  onClickFilm() {
    this.setState({
      film: !this.state.film
    });
    !this.state.film ? this.incrementCount() : this.decrementCount();
  }

  onClickScienceNature() {
    this.setState({
      scienceNature: !this.state.scienceNature
    });
    !this.state.scienceNature ? this.incrementCount() : this.decrementCount();
  }

  onClickSports() {
    this.setState({
      sports: !this.state.sports
    });
    !this.state.sports ? this.incrementCount() : this.decrementCount();
  }

  onClickHistory() {
    this.setState({
      history: !this.state.history
    });
    !this.state.history ? this.incrementCount() : this.decrementCount();
  }

  onClickTV() {
    this.setState({
      tv: !this.state.tv
    });
    !this.state.tv ? this.incrementCount() : this.decrementCount();
  }

  onClickBooks() {
    this.setState({
      books: !this.state.books
    });
    !this.state.books ? this.incrementCount() : this.decrementCount();
  }

  onClickMusic() {
    this.setState({
      music: !this.state.music
    });
    !this.state.music ? this.incrementCount() : this.decrementCount();
  }

  onClickMythology() {
    this.setState({
      mythology: !this.state.mythology
    });
    !this.state.music ? this.incrementCount() : this.decrementCount();
  }

  onClickGeography() {
    this.setState({
      geography: !this.state.geography
    });
    !this.state.geography ? this.incrementCount() : this.decrementCount();
  }

  onClickArt() {
    this.setState({
      art: !this.state.art
    });
    !this.state.art ? this.incrementCount() : this.decrementCount();
  }

  onClickVideoGames() {
    this.setState({
      videoGames: !this.state.videoGames
    });
    !this.state.videoGames ? this.incrementCount() : this.decrementCount();
  }

  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrementCount() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    //By default, our categoty buttons are all unselected. When selected, the button looks selected
    //Prints current number of categories selected
    const currentCount = this.state.count;
    console.log(currentCount); //Checks if user has selected at least one category

    if (currentCount == 1 || currentCount == 2 || currentCount == 3) {
      console.log("Ready to start!");
    } else {
      console.log("Select 3 categories or less");
    }

    const generalKnowledgeButton = this.state.generalKnowledge ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "General Knowledge",
      onClick: this.onClickGeneralKnowledge,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "General Knowledge",
      onClick: this.onClickGeneralKnowledge,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    });
    const filmButton = this.state.film ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Film",
      onClick: this.onClickFilm,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "Film",
      onClick: this.onClickFilm,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    });
    const scienceNatureButton = this.state.scienceNature ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Science and Nature",
      onClick: this.onClickScienceNature,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "Science and Nature",
      onClick: this.onClickScienceNature,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    });
    const sportsButton = this.state.sports ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Sports",
      onClick: this.onClickSports,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "Sports",
      onClick: this.onClickSports,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    });
    const historyButton = this.state.history ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "History",
      onClick: this.onClickHistory,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "History",
      onClick: this.onClickHistory,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    });
    const tvButton = this.state.tv ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Television",
      onClick: this.onClickTV,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "Television",
      onClick: this.onClickTV,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    });
    const booksButton = this.state.books ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Books",
      onClick: this.onClickBooks,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "Books",
      onClick: this.onClickBooks,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    });
    const musicButton = this.state.music ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Music",
      onClick: this.onClickMusic,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "Music",
      onClick: this.onClickMusic,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    });
    const mythologyButton = this.state.mythology ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Mythology",
      onClick: this.onClickMythology,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "Mythology",
      onClick: this.onClickMythology,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    });
    const geographyButton = this.state.geography ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Geography",
      onClick: this.onClickGeography,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "Geography",
      onClick: this.onClickGeography,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    });
    const artButton = this.state.art ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Art",
      onClick: this.onClickArt,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "Art",
      onClick: this.onClickArt,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    });
    const videoGamesButton = this.state.videoGames ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Video Games",
      onClick: this.onClickVideoGames,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "Video Games",
      onClick: this.onClickVideoGames,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }); // TODO: Add arrow button that would mean "Next".
    // TODO: Limit selection to three categories.
    // TODO: Keep track of which categories were selected for future API calls

    return __jsx("div", {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__["styles"].root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__["styles"].title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, " SELECT UP TO 3 CATEGORIES "), __jsx("div", {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__["styles"].categoryButtonsContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__["styles"].categoryRow,
      spacing: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }, generalKnowledgeButton, filmButton), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__["styles"].categoryRow,
      spacing: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }, scienceNatureButton, sportsButton), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__["styles"].categoryRow,
      spacing: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208
      },
      __self: this
    }, historyButton, tvButton), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__["styles"].categoryRow,
      spacing: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, booksButton, musicButton), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__["styles"].categoryRow,
      spacing: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }, mythologyButton, geographyButton), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__["styles"].categoryRow,
      spacing: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      },
      __self: this
    }, artButton, videoGamesButton)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CategoriesComponent);

/***/ }),

/***/ "./pages/components/CategoriesButton.js":
/*!**********************************************!*\
  !*** ./pages/components/CategoriesButton.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stylesheet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stylesheet.js */ "./pages/stylesheet.js");
var _jsxFileName = "/Users/paulinaanzaldo/Daimler/CabanaTrivia/pages/components/CategoriesButton.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 //Recycle Category Button, by default the button is unselected

class CategoriesButton extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_2__["styles"].unselectedButton,
      variant: "contained",
      color: "secondary",
      onClick: this.props.onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, this.props.text);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CategoriesButton);

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
var _jsxFileName = "/Users/paulinaanzaldo/Daimler/CabanaTrivia/pages/components/DangerButton.js";
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
var _jsxFileName = "/Users/paulinaanzaldo/Daimler/CabanaTrivia/pages/components/Feedback.js";
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
var _jsxFileName = "/Users/paulinaanzaldo/Daimler/CabanaTrivia/pages/components/GameOver.js";
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
      alignItems: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("p", {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__["styles"].questionText,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Game Over. You scored: ", this.props.score), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__["styles"].unselectedButton,
      onClick: this.onGoHome,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
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
var _jsxFileName = "/Users/paulinaanzaldo/Daimler/CabanaTrivia/pages/components/Questions.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Entities = __webpack_require__(/*! html-entities */ "html-entities").AllHtmlEntities;


const entities = new Entities();
const MAX_NUM_QUESTIONS = 3;
const FEEDBACK_SHOW_TIME_SECS = 2; // component that displays the questions or the game over component

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
  } // calls function to fetch the questions before the component mounts


  componentWillMount() {
    this.onGetQuestions();
  } // fetch quesions from cocktail trivia


  async onGetQuestions(category) {
    const finalCateg = category == null ? "entertainment-music" : category; //fetch questions

    const response = await fetch("https://cocktail-trivia-api.herokuapp.com/api/category/" + finalCateg);
    const allData = await response.json();
    this.setState({
      questionsArr: allData
    });
  } //changes to the next question. isCorrect ia a bool for if the previous value was correct. correctAnswer is the correct answer


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
        lineNumber: 72
      },
      __self: this
    }, __jsx(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_4___default.a, {
      open: this.state.showFeedback,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx(_Feedback__WEBPACK_IMPORTED_MODULE_7__["default"], {
      wasCorrect: this.state.lastQuestionCorrect,
      correctAnswer: this.state.lastQuestionAnswer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      container: true,
      direction: "column",
      justify: "center",
      alignItems: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, this.state.questionIndex < MAX_NUM_QUESTIONS && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_8__["styles"].questionText,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, this.state.questionsArr && entities.decode(this.state.questionsArr[this.state.questionIndex].text), "   "), __jsx(_Answers__WEBPACK_IMPORTED_MODULE_5__["default"], {
      answers: this.state.questionsArr && this.state.questionsArr[this.state.questionIndex].answers,
      callback: this.nextQuestion,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    })), this.state.questionIndex >= MAX_NUM_QUESTIONS && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_GameOver__WEBPACK_IMPORTED_MODULE_6__["default"], {
      score: this.state.currentScore,
      callback: this.props.callback,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
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
var _jsxFileName = "/Users/paulinaanzaldo/Daimler/CabanaTrivia/pages/components/Start.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* shown when user first starts playing - they can choose what type of game they want to play
initializes the state
*/

class StartComponent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      randomvar: '',
      startGame: true,
      singlePlayer: true,
      duration: 1
    };
    this.onClickStartGame = this.onClickStartGame.bind(this);
    this.onClickSingle = this.onClickSingle.bind(this);
    this.onClickMulti = this.onClickMulti.bind(this);
  } // sets up the state to play a game for the prototype. Calls a callback function that will call the backhome function


  onClickStartGame() {
    this.setState({
      startGame: !this.state.startGame
    });
    this.props.callback("CATEGORIES");
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
        lineNumber: 48
      },
      __self: this
    }, "Start Game");

    const singlePlayerSelector = this.state.singlePlayer ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Single Player",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].unselectedButton,
      variant: "contained",
      onClick: this.onClickSingle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "Single Player");
    const multiPlayerSelector = this.state.singlePlayer ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].unselectedButton,
      variant: "contained",
      onClick: this.onClickMulti,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "Multi Player") : __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Multi Player",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    });
    const shortDurationSelector = this.state.duration === 1 ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Short Game [10 min]",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].unselectedButton,
      variant: "contained",
      onClick: () => this.onSelectDuration(1),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "Short Game [10 min]");
    const medDurationSelector = this.state.duration === 2 ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Medium Game [20 min]",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].unselectedButton,
      variant: "contained",
      onClick: () => this.onSelectDuration(2),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Medium Game [20 min]");
    const longDurationSelector = this.state.duration === 3 ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Long Game [30 min]",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].unselectedButton,
      variant: "contained",
      onClick: () => this.onSelectDuration(3),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "Long Game [30 min]");
    return __jsx("div", {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, " TRIVIA "), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].row,
      spacing: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, singlePlayerSelector, multiPlayerSelector), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].row,
      spacing: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, shortDurationSelector, medDurationSelector, longDurationSelector), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].row,
      spacing: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
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
/* harmony import */ var _components_Categories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Categories */ "./pages/components/Categories.js");
var _jsxFileName = "/Users/paulinaanzaldo/Daimler/CabanaTrivia/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const styles = {};
class IndexPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props); // initialize the game state

    this.state = {
      gameState: "START"
    };
    this.renderSwitch = this.renderSwitch.bind(this);
    this.backHome = this.backHome.bind(this);
  } // changes the state of the game to whatever is passed as "nextActions". Can be e.g. START or QUESTIONS


  backHome(nextActions) {
    this.setState({
      gameState: nextActions
    });
  } // reder the desired componenent based on the state


  renderSwitch(gameState) {
    switch (gameState) {
      case 'START':
        return __jsx(_components_Start__WEBPACK_IMPORTED_MODULE_4__["default"], {
          callback: this.backHome,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        });

      case 'CATEGORIES':
        return __jsx(_components_Categories__WEBPACK_IMPORTED_MODULE_6__["default"], {
          callback: this.backHome,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        });

      case 'QUESTIONS':
        return __jsx(_components_Questions__WEBPACK_IMPORTED_MODULE_5__["default"], {
          callback: this.backHome,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        });

      default:
        return __jsx(_components_Start__WEBPACK_IMPORTED_MODULE_4__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
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
    fontFamily: 'Kontakt',
    overflow: 'scroll'
  },
  row: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20
  },
  categoryButtonsContainer: {
    paddingLeft: 166,
    paddingRight: 166
  },
  categoryRow: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20
  },
  //NOTE: Not sure if this is the right formatting for a column
  column: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
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

module.exports = __webpack_require__(/*! /Users/paulinaanzaldo/Daimler/CabanaTrivia/pages/index.js */"./pages/index.js");


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