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
/* harmony import */ var _stylesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stylesheet */ "./pages/stylesheet.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/johnsonsong/Desktop/Daimler/CabanaTrivia/pages/components/Answers.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Entities = __webpack_require__(/*! html-entities */ "html-entities").AllHtmlEntities;

const entities = new Entities(); // component that displays the answers

class AnswersComponent extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.onPressAnswer = this.onPressAnswer.bind(this);
  } // executed when answer is pressed


  onPressAnswer(answerObj) {
    let correctAnswer;

    for (let i in this.props.answers) {
      let currAnswerObj = this.props.answers[i];
      console.log("current answer is: ");
      console.log(currAnswerObj);

      if (currAnswerObj.correct) {
        correctAnswer = entities.decode(currAnswerObj.text); // decoding because some of the questions and answers have HTML entities e.g. &quot;

        break;
      }
    }

    this.props.callback(answerObj.correct, correctAnswer);
  }

  render() {
    //did the null check because it may take time for the API to return the values
    if (!this.props.answers) return null;
    const answer1 = this.props.answers[0];
    const answer2 = this.props.answers[1]; // initialize these and set  when we have 4 choice multiple choice questions rather than true/false questions

    let answer3 = null;
    let answer4 = null;

    if (this.props.answers.length === 4) {
      answer3 = this.props.answers[2];
      answer4 = this.props.answers[3];
    }

    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      columnGrid: true,
      direction: "column",
      justify: "center",
      alignItems: "center",
      spacing: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      rowGrid: true,
      spacing: 1,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      style: _stylesheet__WEBPACK_IMPORTED_MODULE_0__["styles"].unselectedButton,
      onClick: () => this.onPressAnswer(answer1),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    }, entities.decode(answer1.text), " "), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      style: _stylesheet__WEBPACK_IMPORTED_MODULE_0__["styles"].unselectedButton,
      onClick: () => this.onPressAnswer(answer2),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }
    }, entities.decode(answer2.text))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      rowGrid: true,
      spacing: 1,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }
    }, this.props.answers.length === 4 && __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      style: _stylesheet__WEBPACK_IMPORTED_MODULE_0__["styles"].unselectedButton,
      onClick: () => this.onPressAnswer(answer3),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 50
      }
    }, entities.decode(answer3.text), " "), this.props.answers.length === 4 && __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      style: _stylesheet__WEBPACK_IMPORTED_MODULE_0__["styles"].unselectedButton,
      onClick: () => this.onPressAnswer(answer4),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 50
      }
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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_DoubleArrow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/DoubleArrow */ "@material-ui/icons/DoubleArrow");
/* harmony import */ var _material_ui_icons_DoubleArrow__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DoubleArrow__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants */ "./pages/constants.js");
var _jsxFileName = "/Users/johnsonsong/Desktop/Daimler/CabanaTrivia/pages/components/Categories.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









/* shown when user first starts playing - they can choose what type of game they want to play
initializes the state
*/

class CategoriesComponent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      categoriesChosen: [],
      //PREVIOUSLY:
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
    this.onClickShowDifficultyScreen = this.onClickShowDifficultyScreen.bind(this);
  }

  onClickShowDifficultyScreen() {
    //Checks if user has selected at least one category
    const currentCount = this.state.count;

    if (currentCount == 1 || currentCount == 2 || currentCount == 3) {
      this.props.callback("DIFFICULTY", this.state.categoriesChosen);
      console.log("Ready to start");
    } else {
      console.log("Select 3 categories or less");
    }
  }

  onClickGeneralKnowledge() {
    this.setState({
      generalKnowledge: !this.state.generalKnowledge
    });
    !this.state.generalKnowledge ? this.incrementCount("GENERAL_KNOWLEDGE") : this.decrementCount("GENERAL_KNOWLEDGE");
  }

  onClickFilm() {
    this.setState({
      film: !this.state.film
    });
    !this.state.film ? this.incrementCount("FILM") : this.decrementCount("FILM");
  }

  onClickScienceNature() {
    this.setState({
      scienceNature: !this.state.scienceNature
    });
    !this.state.scienceNature ? this.incrementCount("SCIENCE_NATURE") : this.decrementCount("SCIENCE_NATURE");
  }

  onClickSports() {
    this.setState({
      sports: !this.state.sports
    });
    !this.state.sports ? this.incrementCount("SPORTS") : this.decrementCount("SPORTS");
  }

  onClickHistory() {
    this.setState({
      history: !this.state.history
    });
    !this.state.history ? this.incrementCount("HISTORY") : this.decrementCount("HISTORY");
  }

  onClickTV() {
    this.setState({
      tv: !this.state.tv
    });
    !this.state.tv ? this.incrementCount("TELEVISION") : this.decrementCount("TELEVISION");
  }

  onClickBooks() {
    this.setState({
      books: !this.state.books
    });
    !this.state.books ? this.incrementCount("BOOKS") : this.decrementCount("BOOKS");
  }

  onClickMusic() {
    this.setState({
      music: !this.state.music
    });
    !this.state.music ? this.incrementCount("MUSIC") : this.decrementCount("MUSIC");
  }

  onClickMythology() {
    this.setState({
      mythology: !this.state.mythology
    });
    !this.state.music ? this.incrementCount("MYTHOLOGY") : this.decrementCount("MYTHOLOGY");
  }

  onClickGeography() {
    this.setState({
      geography: !this.state.geography
    });
    !this.state.geography ? this.incrementCount("GEOGRAPHY") : this.decrementCount("GEOGRAPHY");
  }

  onClickArt() {
    this.setState({
      art: !this.state.art
    });
    !this.state.art ? this.incrementCount("ART") : this.decrementCount("ART");
  }

  onClickVideoGames() {
    this.setState({
      videoGames: !this.state.videoGames
    });
    !this.state.videoGames ? this.incrementCount("VIDEO_GAMES") : this.decrementCount("VIDEO_GAMES");
  }

  incrementCount(catName) {
    this.setState({
      count: this.state.count + 1
    }); //Add category to array

    var input = this.state.categoriesChosen.concat(catName);
    this.setState({
      categoriesChosen: input
    });
  }

  decrementCount(index) {
    this.setState({
      count: this.state.count - 1
    }); //Remove a category

    var currentCategories = this.state.categoriesChosen;
    var unwantedCategory = currentCategories.indexOf(index);
    currentCategories.splice(unwantedCategory, 1);
    this.setState({
      categoriesChosen: currentCategories
    });
  }

  render() {
    //By default, our categoty buttons are all unselected. When selected, the button looks selected
    //DEBUGGING PURPOSES, DELETE ME
    const myEmptyArray = this.state.categoriesChosen;
    const emptyArraySize = this.state.categoriesChosen.length; //DEBUGGING PURPOSES, DELETE ME

    console.log("Array of current categories content  " + myEmptyArray);
    console.log("Array of current categories size " + emptyArraySize);
    const generalKnowledgeButton = this.state.generalKnowledge ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "General Knowledge",
      onClick: this.onClickGeneralKnowledge,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 7
      }
    }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "General Knowledge",
      onClick: this.onClickGeneralKnowledge,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 7
      }
    });
    const filmButton = this.state.film ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Film",
      onClick: this.onClickFilm,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 7
      }
    }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "Film",
      onClick: this.onClickFilm,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 7
      }
    });
    const scienceNatureButton = this.state.scienceNature ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Science and Nature",
      onClick: this.onClickScienceNature,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 7
      }
    }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "Science and Nature",
      onClick: this.onClickScienceNature,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 7
      }
    });
    const sportsButton = this.state.sports ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Sports",
      onClick: this.onClickSports,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 7
      }
    }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "Sports",
      onClick: this.onClickSports,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 7
      }
    });
    const historyButton = this.state.history ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "History",
      onClick: this.onClickHistory,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 7
      }
    }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "History",
      onClick: this.onClickHistory,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 7
      }
    });
    const tvButton = this.state.tv ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Television",
      onClick: this.onClickTV,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 7
      }
    }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "Television",
      onClick: this.onClickTV,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 7
      }
    });
    const booksButton = this.state.books ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Books",
      onClick: this.onClickBooks,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 7
      }
    }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "Books",
      onClick: this.onClickBooks,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 7
      }
    });
    const musicButton = this.state.music ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Music",
      onClick: this.onClickMusic,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 7
      }
    }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "Music",
      onClick: this.onClickMusic,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 7
      }
    });
    const mythologyButton = this.state.mythology ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Mythology",
      onClick: this.onClickMythology,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 7
      }
    }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "Mythology",
      onClick: this.onClickMythology,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 7
      }
    });
    const geographyButton = this.state.geography ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Geography",
      onClick: this.onClickGeography,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 7
      }
    }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "Geography",
      onClick: this.onClickGeography,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 7
      }
    });
    const artButton = this.state.art ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Art",
      onClick: this.onClickArt,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 7
      }
    }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "Art",
      onClick: this.onClickArt,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 7
      }
    });
    const videoGamesButton = this.state.videoGames ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Video Games",
      onClick: this.onClickVideoGames,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 7
      }
    }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "Video Games",
      onClick: this.onClickVideoGames,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 7
      }
    }); // TODO: Add arrow button that would mean "Next".
    // TODO: Limit selection to three categories.
    // TODO: Keep track of which categories were selected for future API calls

    return __jsx("div", {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__["styles"].root,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__["styles"].title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 9
      }
    }, " SELECT UP TO 3 CATEGORIES "), __jsx("div", {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__["styles"].categoryButtonsContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__["styles"].categoryRow,
      spacing: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 11
      }
    }, generalKnowledgeButton, filmButton), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__["styles"].categoryRow,
      spacing: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 11
      }
    }, scienceNatureButton, sportsButton), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__["styles"].categoryRow,
      spacing: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 11
      }
    }, historyButton, tvButton), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__["styles"].categoryRow,
      spacing: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 11
      }
    }, booksButton, musicButton), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__["styles"].categoryRow,
      spacing: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 11
      }
    }, mythologyButton, geographyButton), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__["styles"].categoryRow,
      spacing: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 11
      }
    }, artButton, videoGamesButton)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__["styles"].nextButton,
      onClick: this.onClickShowDifficultyScreen,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 9
      }
    }, __jsx(_material_ui_icons_DoubleArrow__WEBPACK_IMPORTED_MODULE_7___default.a, {
      fontSize: "large",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 11
      }
    })));
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
var _jsxFileName = "/Users/johnsonsong/Desktop/Daimler/CabanaTrivia/pages/components/CategoriesButton.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 //Recycle Category Button, by default the button is unselected

class CategoriesButton extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_2__["styles"].unselectedButton,
      variant: "contained",
      color: "secondary",
      onClick: this.props.onClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }
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
var _jsxFileName = "/Users/johnsonsong/Desktop/Daimler/CabanaTrivia/pages/components/DangerButton.js";
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
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    }, this.props.text);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DangerButton);

/***/ }),

/***/ "./pages/components/Difficulty.js":
/*!****************************************!*\
  !*** ./pages/components/Difficulty.js ***!
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
var _jsxFileName = "/Users/johnsonsong/Desktop/Daimler/CabanaTrivia/pages/components/Difficulty.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class DifficultyComponent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      chosenDifficulty: "",
      easy: false,
      medium: false,
      hard: false,
      startGame: false
    };
    this.onClickEasy = this.onClickEasy.bind(this);
    this.onClickMedium = this.onClickMedium.bind(this);
    this.onClickHard = this.onClickHard.bind(this);
    this.onClickStartGame = this.onClickStartGame.bind(this);
  }

  onClickEasy() {
    this.setState({
      easy: !this.state.easy
    });
    this.setState({
      chosenDifficulty: "easy"
    });
    this.setState({
      medium: false
    });
    this.setState({
      hard: false
    });
  }

  onClickMedium() {
    this.setState({
      medium: !this.state.medium
    });
    this.setState({
      chosenDifficulty: "medium"
    });
    this.setState({
      easy: false
    });
    this.setState({
      hard: false
    });
  }

  onClickHard() {
    this.setState({
      hard: !this.state.hard
    });
    this.setState({
      chosenDifficulty: "hard"
    });
    this.setState({
      easy: false
    });
    this.setState({
      medium: false
    });
  }

  onClickStartGame() {
    //Send to Questions screen the chosen difficulty
    this.setState({
      startGame: !this.state.startGame
    }); //Send to Questions screen

    this.props.callback("QUESTIONS", this.state.chosenDifficulty); //this.props.callback("QUESTIONS")
  }

  render() {
    const easyButton = this.state.easy ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Easy",
      onClick: this.onClickEasy,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }
    }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "Easy",
      onClick: this.onClickEasy,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 5
      }
    });
    const mediumButton = this.state.medium ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Medium",
      onClick: this.onClickMedium,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 5
      }
    }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "Medium",
      onClick: this.onClickMedium,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 5
      }
    });
    const hardButton = this.state.hard ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Hard",
      onClick: this.onClickHard,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }
    }) : __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "Hard",
      onClick: this.onClickHard,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 5
      }
    }); //Currently the Start Button will look the same as the other buttons

    const startButton = __jsx(_CategoriesButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: "START",
      onClick: this.onClickStartGame,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 5
      }
    });

    return __jsx("div", {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__["styles"].root,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__["styles"].title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 7
      }
    }, " CHOOSE A DIFFICULTY "), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__["styles"].row,
      spacing: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 7
      }
    }, easyButton, mediumButton, hardButton), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__["styles"].row,
      spacing: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 7
      }
    }, startButton));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DifficultyComponent);

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
var _jsxFileName = "/Users/johnsonsong/Desktop/Daimler/CabanaTrivia/pages/components/Feedback.js";
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
      headerText = __jsx("p", {
        style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].feedbackHeaderTextCorrect,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 20
        }
      }, "Correct!");
      bodyText = "Way to go! You were right! " + this.props.correctAnswer + " is correct.";
    } else {
      headerText = __jsx("p", {
        style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].feedbackHeaderTextIncorrect,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 20
        }
      }, "Incorrect");
      bodyText = "Oh no, that wasn't right. The correct answer was " + this.props.correctAnswer + ".";
    }

    return __jsx("div", {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].feedbackContent,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      columnGrid: true,
      direction: "column",
      justify: "center",
      alignItems: "center",
      spacing: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      rowGrid: true,
      spacing: 1,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }
    }, headerText), __jsx("p", {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].feedbackBodyText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    }, bodyText)));
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
var _jsxFileName = "/Users/johnsonsong/Desktop/Daimler/CabanaTrivia/pages/components/GameOver.js";
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
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }
    }, __jsx("p", {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__["styles"].questionText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }
    }, "Game Over. You scored: ", this.props.score), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_5__["styles"].unselectedButton,
      onClick: this.onGoHome,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }
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
/* harmony import */ var _stylesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stylesheet */ "./pages/stylesheet.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "@material-ui/core/Backdrop");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Answers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Answers */ "./pages/components/Answers.js");
/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Categories */ "./pages/components/Categories.js");
/* harmony import */ var _GameOver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GameOver */ "./pages/components/GameOver.js");
/* harmony import */ var _Feedback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Feedback */ "./pages/components/Feedback.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../index */ "./pages/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants */ "./pages/constants.js");
var _jsxFileName = "/Users/johnsonsong/Desktop/Daimler/CabanaTrivia/pages/components/Questions.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











const Entities = __webpack_require__(/*! html-entities */ "html-entities").AllHtmlEntities;

const entities = new Entities();
const MAX_NUM_QUESTIONS = 10;
const FEEDBACK_SHOW_TIME_SECS = 2; // component that displays the questions or the game over component

class QuestionsComponent extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
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
    this.getUrls = this.getUrls.bind(this);
    this.parseQuestionAnswerFormat = this.parseQuestionAnswerFormat.bind(this);
    this.shuffleArray = this.shuffleArray.bind(this);
  } // calls function to fetch the questions before the component mounts


  componentWillMount() {
    this.onGetQuestions(this.props.cat);
  }
  /*
  function: getUrls
  Iterates over the user's selected categories (stored in this.props.cat)
  Creates a custom URL for each category
  Returns an array with all the URLS to fetch
  */


  getUrls(categories) {
    var urls = [];
    var customURL = "";
    const numQs = MAX_NUM_QUESTIONS; // TODO: HOW MANY QUESTIONS SHOULD WE ASK? this or pass it into the function DUMMY FUNCTION

    for (var i = 0; i < categories.length; i++) {
      customURL = "https://opentdb.com/api.php?amount=" + numQs + "&category=" + _constants__WEBPACK_IMPORTED_MODULE_9__["CATEGORIES_MAP"][categories[i]] + "&difficulty=" + this.props.diff; //Add URL LINK to array

      urls.push(customURL);
    }

    return urls;
  } // fetch quesions from cocktail trivia


  async onGetQuestions(category) {
    var chosenCategories = this.props.cat;
    const allUrls = this.getUrls(chosenCategories);
    const finalCateg = category == null ? "MUSIC" : category; // pass in the array of categories.

    const difficulty = this.props.diff;
    const numQs = MAX_NUM_QUESTIONS; // change this or pass it into the function

    let json;
    var allData = [];
    let catQuestionsAndAnswers;
    let fetchRequest;

    for (var i = 0; i < allUrls.length; i++) {
      fetchRequest = await fetch(allUrls[i]);
      json = await fetchRequest.json();
      catQuestionsAndAnswers = this.parseQuestionAnswerFormat(json.results);
      allData = allData.concat(catQuestionsAndAnswers);
    }

    this.shuffleArray(allData);
    allData.slice(0, MAX_NUM_QUESTIONS);
    console.log(allData);
    this.setState({
      questionsArr: allData
    });
  } // shuffles the array of answers for randomness


  shuffleArray(a) {
    var j, x, i;

    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }

    return a;
  }
  /*This function parses the result from the API to the same format that was used in the previous API*/


  parseQuestionAnswerFormat(arr) {
    const finalArr = [];

    for (const item of arr) {
      const questionObj = {};
      questionObj.text = item.question;
      const answers = [{
        text: item.correct_answer,
        correct: true
      }];

      for (const answerObj of item.incorrect_answers) {
        answers.push({
          text: answerObj,
          correct: false
        });
      }

      this.shuffleArray(answers);
      questionObj.answers = answers;
      finalArr.push(questionObj);
    }

    return finalArr;
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
      style: _stylesheet__WEBPACK_IMPORTED_MODULE_0__["styles"].root,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_3___default.a, {
      open: this.state.showFeedback,
      style: _stylesheet__WEBPACK_IMPORTED_MODULE_0__["styles"].feedbackWrapper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }
    }, __jsx(_Feedback__WEBPACK_IMPORTED_MODULE_7__["default"], {
      wasCorrect: this.state.lastQuestionCorrect,
      correctAnswer: this.state.lastQuestionAnswer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 11
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      container: true,
      direction: "column",
      justify: "center",
      alignItems: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }
    }, this.state.questionIndex < MAX_NUM_QUESTIONS && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("p", {
      style: _stylesheet__WEBPACK_IMPORTED_MODULE_0__["styles"].questionText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 15
      }
    }, this.state.questionsArr && entities.decode(this.state.questionsArr[this.state.questionIndex].text), " "), __jsx(_Answers__WEBPACK_IMPORTED_MODULE_4__["default"], {
      answers: this.state.questionsArr && this.state.questionsArr[this.state.questionIndex].answers,
      callback: this.nextQuestion,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 15
      }
    })), this.state.questionIndex >= MAX_NUM_QUESTIONS && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_GameOver__WEBPACK_IMPORTED_MODULE_6__["default"], {
      score: this.state.currentScore,
      callback: this.props.callback,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 15
      }
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
var _jsxFileName = "/Users/johnsonsong/Desktop/Daimler/CabanaTrivia/pages/components/Start.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const NUM_QUESTIONS_PER_MINUTE = 10;
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
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 7
      }
    }, "Start Game");

    const singlePlayerSelector = this.state.singlePlayer ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Single Player",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 7
      }
    }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].unselectedButton,
      variant: "contained",
      onClick: this.onClickSingle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 7
      }
    }, "Single Player");
    const multiPlayerSelector = this.state.singlePlayer ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].unselectedButton,
      variant: "contained",
      onClick: this.onClickMulti,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 7
      }
    }, "Multi Player") : __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Multi Player",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 7
      }
    });
    const shortDurationSelector = this.state.duration === 1 ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Short Game [10 min]",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 7
      }
    }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].unselectedButton,
      variant: "contained",
      onClick: () => this.onSelectDuration(1),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 7
      }
    }, "Short Game [10 min]");
    const medDurationSelector = this.state.duration === 2 ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Medium Game [20 min]",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 7
      }
    }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].unselectedButton,
      variant: "contained",
      onClick: () => this.onSelectDuration(2),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 7
      }
    }, "Medium Game [20 min]");
    const longDurationSelector = this.state.duration === 3 ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Long Game [30 min]",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 7
      }
    }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].unselectedButton,
      variant: "contained",
      onClick: () => this.onSelectDuration(3),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 7
      }
    }, "Long Game [30 min]");
    return __jsx("div", {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].root,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }
    }, " TRIVIA "), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].row,
      spacing: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }
    }, singlePlayerSelector, multiPlayerSelector), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].row,
      spacing: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }
    }, shortDurationSelector, medDurationSelector, longDurationSelector), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      style: _stylesheet_js__WEBPACK_IMPORTED_MODULE_4__["styles"].row,
      spacing: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }
    }, startButton));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (StartComponent);

/***/ }),

/***/ "./pages/constants.js":
/*!****************************!*\
  !*** ./pages/constants.js ***!
  \****************************/
/*! exports provided: CATEGORIES_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORIES_MAP", function() { return CATEGORIES_MAP; });
const CATEGORIES_MAP = {
  "GENERAL_KNOWLEDGE": "9",
  "MYTHOLOGY": "20",
  "MUSIC": "12",
  "FILM": "11",
  "SPORTS": "21",
  "ART": "25",
  "MUSICAL_AND_THEATRES": "13",
  "TELEVISION": "14",
  "VIDEO_GAMES": "15",
  "BOARD_GAMES": "16",
  "SCIENCE_NATURE": "17",
  "SCIENCE_COMPUTERS": "18",
  "SCIENCE_MATH": "19",
  "GEOGRAPHY": "22",
  "HISTORY": "23",
  "CELEBRITIES": "26",
  "VEHICLES": "28"
};

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
/* harmony import */ var _components_Difficulty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Difficulty */ "./pages/components/Difficulty.js");
var _jsxFileName = "/Users/johnsonsong/Desktop/Daimler/CabanaTrivia/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const styles = {};
class IndexPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props); // initialize the game state

    this.state = {
      gameState: "START",
      catArray: [],
      gameDifficulty: ""
    };
    this.renderSwitch = this.renderSwitch.bind(this);
    this.backHome = this.backHome.bind(this);
    this.fromDifficultyToQuestions = this.fromDifficultyToQuestions.bind(this);
    this.fromCategoriestoDifficulty = this.fromCategoriestoDifficulty.bind(this);
  }

  fromCategoriestoDifficulty(nextActions, updatedArray) {
    this.setState({
      catArray: updatedArray
    });
    this.setState({
      gameState: nextActions
    });
  }

  fromDifficultyToQuestions(nextActions, difficulty) {
    this.setState({
      gameDifficulty: difficulty
    });
    this.setState({
      gameState: nextActions
    });
  } // changes the state of the game to whatever is passed as "nextActions". Can be e.g. START or QUESTIONS


  backHome(nextActions) {
    this.setState({
      gameState: nextActions
    });
  } // sets the number of questions


  setNumQuestions(numQuestions) {
    this.setState({
      numQuestions: numQuestions
    });
  } // reder the desired componenent based on the state


  renderSwitch(gameState) {
    switch (gameState) {
      case 'START':
        return __jsx(_components_Start__WEBPACK_IMPORTED_MODULE_4__["default"], {
          callback: this.backHome,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 16
          }
        });

      case 'CATEGORIES':
        return __jsx(_components_Categories__WEBPACK_IMPORTED_MODULE_6__["default"], {
          callback: this.fromCategoriestoDifficulty,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 16
          }
        });

      case 'QUESTIONS':
        return __jsx(_components_Questions__WEBPACK_IMPORTED_MODULE_5__["default"], {
          callback: this.backHome,
          cat: this.state.catArray,
          diff: this.state.gameDifficulty,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 16
          }
        }, " ");

      case 'DIFFICULTY':
        return __jsx(_components_Difficulty__WEBPACK_IMPORTED_MODULE_7__["default"], {
          callback: this.fromDifficultyToQuestions,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 16
          }
        });

      default:
        return __jsx(_components_Start__WEBPACK_IMPORTED_MODULE_4__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 16
          }
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
    overflow: 'scroll',
    zIndex: 1
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
  nextButton: {
    color: 'white',
    position: 'fixed',
    top: 420,
    left: 980
  },
  title: {
    color: 'white',
    fontSize: 48,
    display: 'flex',
    justifyContent: 'center'
  },
  feedbackWrapper: {
    zIndex: 10,
    width: 1062,
    height: 484
  },
  feedbackContent: {
    display: 'flex',
    textAlign: 'center'
  },
  questionText: {
    color: 'white'
  },
  feedbackHeaderTextCorrect: {
    color: '#379634',
    fontSize: 60
  },
  feedbackHeaderTextIncorrect: {
    color: '#F06449',
    fontSize: 60
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

module.exports = __webpack_require__(/*! /Users/johnsonsong/Desktop/Daimler/CabanaTrivia/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

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

/***/ "@material-ui/icons/DoubleArrow":
/*!*************************************************!*\
  !*** external "@material-ui/icons/DoubleArrow" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DoubleArrow");

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