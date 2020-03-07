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
        lineNumber: 62
      },
      __self: this
    }, "Start Game") : __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "End Game",
      onClick: this.onClickStartGame,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    });
    const singlePlayerSelector = this.state.singlePlayer ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Single Player",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      variant: "contained",
      onClick: this.onClickSingle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "Single Player");
    const multiPlayerSelector = this.state.singlePlayer ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      variant: "contained",
      onClick: this.onClickMulti,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Multi Player") : __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Multi Player",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    });
    const shortDurationSelector = this.state.duration === 1 ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Short Game [10 min]",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      variant: "contained",
      onClick: () => this.onSelectDuration(1),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, "Short Game [10 min]");
    const medDurationSelector = this.state.duration === 2 ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Medium Game [20 min]",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      variant: "contained",
      onClick: () => this.onSelectDuration(2),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, "Medium Game [20 min]");
    const longDurationSelector = this.state.duration === 3 ? __jsx(_DangerButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Long Game [30 min]",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      variant: "contained",
      onClick: () => this.onSelectDuration(3),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, "Long Game [30 min]");
    return __jsx("div", {
      style: styles.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      container: true,
      spacing: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      item: true,
      xs: 12,
      sm: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, singlePlayerSelector), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      item: true,
      xs: 12,
      sm: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, multiPlayerSelector)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      container: true,
      spacing: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      item: true,
      xs: 12,
      sm: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, shortDurationSelector), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      item: true,
      xs: 12,
      sm: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, medDurationSelector), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      item: true,
      xs: 12,
      sm: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, longDurationSelector)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      container: true,
      spacing: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
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
var _jsxFileName = "/Users/ken/Documents/Daimler/CabanaTrivia/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const styles = {};
class IndexPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      startGame: true,
      singlePlayer: true,
      duration: 1
    };
  }

  render() {
    return __jsx(_components_Start__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    });
  }

}

/***/ }),

/***/ 3:
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