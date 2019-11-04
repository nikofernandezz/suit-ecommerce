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

/***/ "./components/clientComponents/Layout.js":
/*!***********************************************!*\
  !*** ./components/clientComponents/Layout.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _navigation_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/Navbar */ "./components/clientComponents/navigation/Navbar.js");
var _jsxFileName = "/Users/friday/web_dev/sir-shallum/components/clientComponents/Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Layout = props => {
  return __jsx("div", {
    className: "jsx-608043595",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("title", {
    className: "jsx-608043595",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Sir Shallum"), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Anton&display=swap",
    rel: "stylesheet",
    className: "jsx-608043595",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Anton&display=swap",
    rel: "stylesheet",
    className: "jsx-608043595",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  })), __jsx(_navigation_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "608043595",
    __self: undefined
  }, "@import \"~antd/dist/antd.css\";html,body{margin:0px;padding:0px;border:0px;}ul{list-style:none;}.ant-popover-message-title{padding-left:8px;}.ant-popover-inner-content{padding:12px 23px 16px 16px;}.menuBar{padding:0 20px;border-bottom:solid 1px #e8e8e8;overflow:auto;box-shadow:0 0 30px #f3f1f1;}.logo{width:150px;float:left;}.logo a{display:inline-block;font-size:24px;padding:19px 20px;text-transform:capitalize;color:black;font-family:\"Anton\",sans-serif;}.menuCon{width:calc(100% - 150px);float:left;margin-top:0.3%;}.menuCon .ant-menu-item{padding:0px 5px;}.menuCon .ant-menu-submenu-title{padding:10px 20px;}.menuCon .ant-menu-item a,.menuCon .ant-menu-submenu-title a{padding:10px 15px;}.menuCon .ant-menu-horizontal{border-bottom:none;}.menuCon .leftMenu{float:left;}.menuCon .rightMenu{float:right;}.barsMenu{float:right;height:32px;padding:6px;margin-top:8px;display:none;background:none;border-width:0px;}.barsBtn{display:block;width:20px;height:2px;background:black;position:relative;}.barsBtn:after,.barsBtn:before{content:attr(x);width:20px;position:absolute;top:-6px;left:0;height:2px;background:black;}.barsBtn:after{top:auto;bottom:-6px;}.ant-drawer-body{padding:0;}.ant-drawer-body .ant-menu-horizontal>.ant-menu-item,.ant-drawer-body .ant-menu-horizontal>.ant-menu-submenu{display:inline-block;width:100%;}.ant-drawer-body .ant-menu-horizontal{border-bottom:none;}.ant-drawer-body .ant-menu-horizontal>.ant-menu-item:hover{border-bottom-color:transparent;}.modified-item:hover{border-bottom:2px solid black !important;color:red;}@media (max-width:767px){.barsMenu{display:inline-block;}.leftMenu,.rightMenu{display:none;}.logo a{margin-left:-20px;}.menuCon .ant-menu-item,.menuCon .ant-menu-submenu-title{padding:1px 20px;}.logo a{padding:10px 20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmlkYXkvd2ViX2Rldi9zaXItc2hhbGx1bS9jb21wb25lbnRzL2NsaWVudENvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCeUIsQUFJc0IsQUFNSyxBQUdXLEFBR1YsQUFJVyxBQUliLEFBTUgsQUFLUyxBQVFJLEFBS1QsQUFJRSxBQUlBLEFBR0MsQUFHUixBQUdDLEFBR0EsQUFTRSxBQVNFLEFBU1AsQUFJQyxBQUlXLEFBSUYsQUFHYSxBQUlTLEFBTWxCLEFBSVIsQUFHSyxBQUlELEFBR0MsU0F0Q1IsQ0FJZCxDQS9GYyxBQTBEZCxDQWhDYSxBQW1DYixBQUdjLENBd0RaLENBOUNXLENBdERxQixDQWRsQyxBQXNDQSxBQXNDYSxDQXRFYixBQW1IRSxDQS9FRixBQUlBLEFBdUVFLEFBT0EsQ0EzRUYsQUFnREEsRUF4RWlCLEFBNkRqQixBQU9hLEFBaUJYLEVBbkhXLEFBMEJiLENBc0NjLENBMUJELEFBb0NBLEVBUU8sQ0FuRXBCLElBb0ZBLEFBTUEsRUF4R0EsRUE4Qm9CLEFBUUYsQUEwQkQsQUFVRSxLQWtDUCxJQTFCRCxFQS9ESyxJQThDRCxBQTRDZixDQXRFQSxDQW9Db0IsQ0E1Q1EsQUFvRG5CLE9BL0RxQixBQWdFakIsR0FsQkssT0FVbEIsQ0FTbUIsUUFyREwsQUFtQ0ssU0E5Q25CLEFBaUVBLEdBckRrQyxLQW1DbEMsMEJBbENBIiwiZmlsZSI6Ii9Vc2Vycy9mcmlkYXkvd2ViX2Rldi9zaXItc2hhbGx1bS9jb21wb25lbnRzL2NsaWVudENvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9uYXZpZ2F0aW9uL05hdmJhclwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcblxuY29uc3QgTGF5b3V0ID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNpciBTaGFsbHVtPC90aXRsZT5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFudG9uJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgID48L2xpbms+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbnRvbiZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICA+PC9saW5rPlxuICAgICAgPC9IZWFkPlxuICAgICAgPE5hdmJhciAvPlxuXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgQGltcG9ydCBcIn5hbnRkL2Rpc3QvYW50ZC5jc3NcIjtcblxuICAgICAgICAuYW50LXBvcG92ZXItbWVzc2FnZS10aXRsZSB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYW50LXBvcG92ZXItaW5uZXItY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMTJweCAyM3B4IDE2cHggMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZW51QmFyIHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNlOGU4ZTg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDMwcHggI2YzZjFmMTtcbiAgICAgICAgfVxuICAgICAgICAubG9nbyB7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28gYSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICBwYWRkaW5nOiAxOXB4IDIwcHg7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFudG9uXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cbiAgICAgICAgLm1lbnVDb24ge1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNTBweCk7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMC4zJTtcbiAgICAgICAgfVxuICAgICAgICAubWVudUNvbiAuYW50LW1lbnUtaXRlbSB7XG4gICAgICAgICAgcGFkZGluZzogMHB4IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZW51Q29uIC5hbnQtbWVudS1zdWJtZW51LXRpdGxlIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm1lbnVDb24gLmFudC1tZW51LWl0ZW0gYSxcbiAgICAgICAgLm1lbnVDb24gLmFudC1tZW51LXN1Ym1lbnUtdGl0bGUgYSB7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5tZW51Q29uIC5hbnQtbWVudS1ob3Jpem9udGFsIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5tZW51Q29uIC5sZWZ0TWVudSB7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgLm1lbnVDb24gLnJpZ2h0TWVudSB7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIC5iYXJzTWVudSB7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICBib3JkZXItd2lkdGg6IDBweDtcbiAgICAgICAgfVxuICAgICAgICAuYmFyc0J0biB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLmJhcnNCdG46YWZ0ZXIsXG4gICAgICAgIC5iYXJzQnRuOmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogYXR0cih4KTtcbiAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAtNnB4O1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIH1cbiAgICAgICAgLmJhcnNCdG46YWZ0ZXIge1xuICAgICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgICBib3R0b206IC02cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmFudC1kcmF3ZXItYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICAuYW50LWRyYXdlci1ib2R5IC5hbnQtbWVudS1ob3Jpem9udGFsID4gLmFudC1tZW51LWl0ZW0sXG4gICAgICAgIC5hbnQtZHJhd2VyLWJvZHkgLmFudC1tZW51LWhvcml6b250YWwgPiAuYW50LW1lbnUtc3VibWVudSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5hbnQtZHJhd2VyLWJvZHkgLmFudC1tZW51LWhvcml6b250YWwge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmFudC1kcmF3ZXItYm9keSAuYW50LW1lbnUtaG9yaXpvbnRhbCA+IC5hbnQtbWVudS1pdGVtOmhvdmVyIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tb2RpZmllZC1pdGVtOmhvdmVyIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgLmJhcnNNZW51IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxlZnRNZW51LFxuICAgICAgICAgIC5yaWdodE1lbnUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxvZ28gYSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tZW51Q29uIC5hbnQtbWVudS1pdGVtLFxuICAgICAgICAgIC5tZW51Q29uIC5hbnQtbWVudS1zdWJtZW51LXRpdGxlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFweCAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubG9nbyBhIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/friday/web_dev/sir-shallum/components/clientComponents/Layout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/clientComponents/cart/Cart.js":
/*!**************************************************!*\
  !*** ./components/clientComponents/cart/Cart.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style */ "./node_modules/antd/lib/icon/style/index.js");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/select/style */ "./node_modules/antd/lib/select/style/index.js");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/select */ "antd/lib/select");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "/Users/friday/web_dev/sir-shallum/components/clientComponents/cart/Cart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;


const MainLayout = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "Cart__MainLayout",
  componentId: "sc-19740wo-0"
})(["height:98vh;padding:7%;margin-top:2%;display:flex;flex-direction:column;align-content:space-between;.cartContainer{max-height:520px;overflow:auto;.cartItem{display:flex;margin-top:3%;}}.totalContainer{margin-top:15%;.subtotal{border-color:#949494;border-style:solid;border-width:0.5px;display:flex;justify-content:space-between;align-items:center;margin-bottom:3%;height:60px;padding:5%;span{font-size:20px;font-weight:bold;}}}#imageRow{flex:1;img{width:90px;}}#detailRow{height:100%;flex:3;display:flex;flex-direction:column;align-content:space-around;padding-left:2%;.trash{font-size:18px;margin-top:4%;}}#priceRow{flex:1;display:flex;align-items:center;span{font-size:20px;font-weight:bold;}}"]);

class Cart extends react__WEBPACK_IMPORTED_MODULE_7___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "state", {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "handleChange", value => {
      console.log(`selected ${value}`);
    });
  }

  render() {
    return __jsx(MainLayout, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx("heading", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "Cart")), __jsx("div", {
      className: "cartContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }), __jsx("div", {
      className: "cartItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx("div", {
      id: "imageRow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx("img", {
      src: "../../static/images/testShirt.jpg",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    })), __jsx("div", {
      id: "detailRow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, "The Avalon Navy Plain Jacket"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, "Size: Small"), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, "QTY:", " ", __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a, {
      defaultValue: "1",
      style: {
        width: 60
      },
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx(Option, {
      value: "1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, "1"), __jsx(Option, {
      value: "2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, "2"), __jsx(Option, {
      value: "3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, "3"), __jsx(Option, {
      value: "4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, "4"), __jsx(Option, {
      value: "5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, "5"), __jsx(Option, {
      value: "6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, "6"), __jsx(Option, {
      value: "7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, "7"), __jsx(Option, {
      value: "8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, "8"))), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
      type: "delete",
      className: "trash",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }))), __jsx("div", {
      id: "priceRow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, "\u20B17500")))), __jsx("div", {
      className: "totalContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, __jsx("div", {
      className: "subtotal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, __jsx("div", {
      className: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, "Subtotal :"), __jsx("div", {
      className: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, "\u20B112900"))), __jsx("div", {
      className: "checkout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: {
        backgroundColor: "green",
        borderColor: "green",
        borderRadius: "0px"
      },
      type: "primary",
      block: true,
      size: "large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, "Review and Check Out"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ "./components/clientComponents/footer/Footer.js":
/*!******************************************************!*\
  !*** ./components/clientComponents/footer/Footer.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon/style */ "./node_modules/antd/lib/icon/style/index.js");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "/Users/friday/web_dev/sir-shallum/components/clientComponents/footer/Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;


const FooterLayout = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Footer__FooterLayout",
  componentId: "sc-11om6pz-0"
})(["background:yellow;height:50vh;display:flex;flex-direction:column;.top-footer{background:#fff;height:43vh;border-top:1px solid lightgrey;padding:5% 10% 5% 10%;.content-container{display:flex;justify-content:space-around;}}h1{font-family:\"Anton\",sans-serif;}.bottom-footer{background:#f3f3f3;padding-left:10%;padding-top:1.2%;padding-right:10%;height:9vh;.content-container{display:flex;justify-content:space-between;}}"]);

class Footer extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "state", {});
  }

  render() {
    return __jsx(FooterLayout, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("div", {
      className: "top-footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("div", {
      className: "content-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("div", {
      className: "c1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Sir Shallum")), __jsx("div", {
      className: "c2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Navigation"), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("a", {
      href: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Home")), " "), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("a", {
      href: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Shop"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx("a", {
      href: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Customize"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("a", {
      href: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "Contact Us"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("a", {
      href: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "Cart"))))), __jsx("div", {
      className: "c3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "Services"), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, "Online Customization")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, "Altering and Resizing")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "Walk In Repairs")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, "1 on 1 Consultation")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "Home Delivery"))))), __jsx("div", {
      className: "c4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, "Contact Us"), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, "Del Monte Avenue, Araw St. 1120, Quezon City "), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, "(63) 949-769-2393 "), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, "SirShallumTailor@gmail.com "), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, "Monday - Saturday: 7:00 AM to 9:00 PM"), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, __jsx("a", {
      href: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
      type: "facebook",
      style: {
        fontSize: "3em",
        color: "#1877f2",
        marginRight: "3%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }))), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, __jsx("a", {
      href: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
      type: "twitter",
      style: {
        fontSize: "3em",
        color: "lightblue"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }))), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, __jsx("a", {
      href: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, " ", __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
      type: "instagram",
      style: {
        fontSize: "3em",
        color: "#c32aa3"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    })))))), __jsx("div", {
      className: "bottom-footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, __jsx("div", {
      className: "content-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, "Copyright Sir Shallum 2019"), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, "Made by: me"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/clientComponents/navigation/Navbar.js":
/*!**********************************************************!*\
  !*** ./components/clientComponents/navigation/Navbar.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/drawer/style */ "./node_modules/antd/lib/drawer/style/index.js");
/* harmony import */ var antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/drawer */ "antd/lib/drawer");
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _RightMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RightMenu */ "./components/clientComponents/navigation/RightMenu.js");





var _jsxFileName = "/Users/friday/web_dev/sir-shallum/components/clientComponents/navigation/Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



class Navbar extends react__WEBPACK_IMPORTED_MODULE_5__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "state", {
      current: "mail",
      visible: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "showDrawer", () => {
      this.setState({
        visible: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "onClose", () => {
      this.setState({
        visible: false
      });
    });
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("nav", {
      className: "menuBar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("div", {
      className: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("a", {
      href: "",
      style: {
        color: "#1d1d1d"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Sir Shallum")), __jsx("div", {
      className: "menuCon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("div", {
      className: "rightMenu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx(_RightMenu__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    })), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "barsMenu",
      type: "primary",
      onClick: this.showDrawer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("span", {
      className: "barsBtn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    })), __jsx(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1___default.a, {
      title: "Basic Drawer",
      placement: "right",
      closable: false,
      onClose: this.onClose,
      visible: this.state.visible,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx(_RightMenu__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/clientComponents/navigation/RightMenu.js":
/*!*************************************************************!*\
  !*** ./components/clientComponents/navigation/RightMenu.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/drawer/style */ "./node_modules/antd/lib/drawer/style/index.js");
/* harmony import */ var antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/drawer */ "antd/lib/drawer");
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/modal/style */ "./node_modules/antd/lib/modal/style/index.js");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/modal */ "antd/lib/modal");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/icon/style */ "./node_modules/antd/lib/icon/style/index.js");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/menu/style */ "./node_modules/antd/lib/menu/style/index.js");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _registrationForms_SignInForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../registrationForms/SignInForm */ "./components/clientComponents/registrationForms/SignInForm.js");
/* harmony import */ var _registrationForms_SignUpForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../registrationForms/SignUpForm */ "./components/clientComponents/registrationForms/SignUpForm.js");
/* harmony import */ var _cart_Cart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../cart/Cart */ "./components/clientComponents/cart/Cart.js");











var _jsxFileName = "/Users/friday/web_dev/sir-shallum/components/clientComponents/navigation/RightMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;





const SubMenu = antd_lib_menu__WEBPACK_IMPORTED_MODULE_10___default.a.SubMenu;
const MenuItemGroup = antd_lib_menu__WEBPACK_IMPORTED_MODULE_10___default.a.ItemGroup;

class RightMenu extends react__WEBPACK_IMPORTED_MODULE_11__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(this, "showDrawer", () => {
      this.setState({
        drawerVisible: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(this, "onClose", () => {
      this.setState({
        drawerVisible: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(this, "showModal", e => {
      console.log(e);
      this.setState({
        visible: true,
        selected: e.key
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(this, "handleOk", e => {
      this.setState({
        visible: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(this, "handleCancel", e => {
      this.setState({
        visible: false
      });
    });

    this.state = {
      visible: false,
      selected: null,
      drawerVisible: false
    };
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_10___default.a, {
      mode: "horizontal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_10___default.a.Item, {
      key: "home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("a", {
      href: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Home")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_10___default.a.Item, {
      key: "shop",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx("a", {
      href: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "Shop")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_10___default.a.Item, {
      key: "customize",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("a", {
      href: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "Customize")), __jsx(SubMenu, {
      title: __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "User"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx(MenuItemGroup, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_10___default.a.Item, {
      key: "signIn",
      onClick: this.showModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "Sign In"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_10___default.a.Item, {
      key: "signUp",
      onClick: this.showModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "Register"))), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_10___default.a.Item, {
      key: "cart",
      onClick: this.showDrawer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
      style: {
        fontSize: "28px"
      },
      type: "shopping-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }))), __jsx(antd_lib_modal__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: "test",
      bodyStyle: {
        height: "100%",
        backgroundColor: "#fff"
      },
      centered: true,
      footer: null,
      width: 550,
      visible: this.state.visible,
      onOk: this.handleOk,
      onCancel: this.handleCancel,
      maskClosable: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, this.state.selected === "signIn" ? __jsx("div", {
      className: "signInWrapper",
      style: {
        padding: "5%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, __jsx(_registrationForms_SignInForm__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }), " ", __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      style: {
        marginTop: "2%"
      },
      size: "large",
      type: "button",
      className: "login-form-button",
      block: true,
      key: "signUp",
      onClick: this.showModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "Dont have an account yet? Register Now!")) : __jsx(_registrationForms_SignUpForm__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    })), __jsx(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1___default.a, {
      width: 456,
      placement: "right",
      closable: false,
      onClose: this.onClose,
      visible: this.state.drawerVisible,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, __jsx(_cart_Cart__WEBPACK_IMPORTED_MODULE_15__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RightMenu);

/***/ }),

/***/ "./components/clientComponents/registrationForms/SignInForm.js":
/*!*********************************************************************!*\
  !*** ./components/clientComponents/registrationForms/SignInForm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/checkbox/style */ "./node_modules/antd/lib/checkbox/style/index.js");
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/checkbox */ "antd/lib/checkbox");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/form */ "antd/lib/form");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/icon/style */ "./node_modules/antd/lib/icon/style/index.js");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _SignUpForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SignUpForm */ "./components/clientComponents/registrationForms/SignUpForm.js");











var _jsxFileName = "/Users/friday/web_dev/sir-shallum/components/clientComponents/registrationForms/SignInForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;



const MainLayout = styled_components__WEBPACK_IMPORTED_MODULE_12___default.a.div.withConfig({
  displayName: "SignInForm__MainLayout",
  componentId: "sc-11erzwp-0"
})(["height:100%;h1{text-align:center;}"]);

class SignInForm extends react__WEBPACK_IMPORTED_MODULE_11___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(this, "state", {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(this, "handleSubmit", e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    });
  }

  render() {
    const {
      getFieldDecorator
    } = this.props.form;
    return __jsx(MainLayout, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Sign In"), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a, {
      onSubmit: this.handleSubmit,
      className: "login-form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
      hasFeedback: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, getFieldDecorator("username", {
      rules: [{
        required: true,
        message: "Please input your username!"
      }]
    })(__jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default.a, {
      size: "large",
      prefix: __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_9___default.a, {
        type: "user",
        style: {
          color: "rgba(0,0,0,.25)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }),
      placeholder: "Username",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }))), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
      hasFeedback: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, getFieldDecorator("password", {
      rules: [{
        required: true,
        message: "Please input your Password!"
      }]
    })(__jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default.a, {
      size: "large",
      prefix: __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_9___default.a, {
        type: "lock",
        style: {
          color: "rgba(0,0,0,.25)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }),
      type: "password",
      placeholder: "Password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }))), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
      style: {
        display: "flex",
        flexDirection: "column"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx("div", {
      style: {
        display: "flex",
        justifyContent: "space-between"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, getFieldDecorator("remember", {
      valuePropName: "checked",
      initialValue: false
    })(__jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "Remember me")), __jsx("a", {
      className: "login-form-forgot",
      href: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "Forgot password")), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      size: "large",
      type: "primary",
      htmlType: "submit",
      className: "login-form-button",
      block: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, "Log in")))));
  }

}

const WrappedNormalLoginForm = antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.create({
  name: "sign_in"
})(SignInForm);

/* harmony default export */ __webpack_exports__["default"] = (WrappedNormalLoginForm);

/***/ }),

/***/ "./components/clientComponents/registrationForms/SignUpForm.js":
/*!*********************************************************************!*\
  !*** ./components/clientComponents/registrationForms/SignUpForm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/checkbox/style */ "./node_modules/antd/lib/checkbox/style/index.js");
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/checkbox */ "antd/lib/checkbox");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var antd_lib_auto_complete_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/auto-complete/style */ "./node_modules/antd/lib/auto-complete/style/index.js");
/* harmony import */ var antd_lib_auto_complete_style__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_auto_complete_style__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/auto-complete */ "antd/lib/auto-complete");
/* harmony import */ var antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/select/style */ "./node_modules/antd/lib/select/style/index.js");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/select */ "antd/lib/select");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd/lib/form */ "antd/lib/form");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_19__);


















var _jsxFileName = "/Users/friday/web_dev/sir-shallum/components/clientComponents/registrationForms/SignUpForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement;


const FormItem = antd_lib_form__WEBPACK_IMPORTED_MODULE_17___default.a.Item;
const Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_15___default.a.Option;
const AutoCompleteOption = antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_13___default.a.Option;
const MainLayout = styled_components__WEBPACK_IMPORTED_MODULE_19___default.a.div.withConfig({
  displayName: "SignUpForm__MainLayout",
  componentId: "sy4mh2-0"
})(["height:100%;padding:2%;h1{text-align:center;}"]);

class SignUpForm extends react__WEBPACK_IMPORTED_MODULE_18___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "state", {
      confirmDirty: false,
      autoCompleteResult: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "handleSubmit", e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "handleConfirmBlur", e => {
      const value = e.target.value;
      this.setState({
        confirmDirty: this.state.confirmDirty || !!value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "checkPassword", (rule, value, callback) => {
      const form = this.props.form;

      if (value && value !== form.getFieldValue("password")) {
        callback("Two passwords that you enter is inconsistent!");
      } else {
        callback();
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "checkConfirm", (rule, value, callback) => {
      const form = this.props.form;

      if (value && this.state.confirmDirty) {
        form.validateFields(["confirm"], {
          force: true
        });
      }

      callback();
    });
  }

  render() {
    const {
      getFieldDecorator
    } = this.props.form;
    const {
      autoCompleteResult
    } = this.state;
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 6
        }
      },
      wrapperCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 14
        }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 14,
          offset: 6
        }
      }
    };
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "+639"
    })(__jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_15___default.a, {
      style: {
        width: 75
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx(Option, {
      value: "639",
      default: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "+639")));
    return __jsx(MainLayout, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, "Sign Up"), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_17___default.a, {
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx(FormItem, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({}, formItemLayout, {
      label: "E-mail",
      hasFeedback: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }), getFieldDecorator("email", {
      rules: [{
        type: "email",
        message: "The input is not valid E-mail!"
      }, {
        required: true,
        message: "Please input your E-mail!"
      }]
    })(__jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }))), __jsx(FormItem, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({}, formItemLayout, {
      label: __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Full Name\xA0"),
      hasFeedback: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }), getFieldDecorator("fullName", {
      rules: [{
        required: true,
        message: "Please input your Full Name!",
        whitespace: true
      }]
    })(__jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }))), __jsx(FormItem, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({}, formItemLayout, {
      label: "Password",
      hasFeedback: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }), getFieldDecorator("password", {
      rules: [{
        required: true,
        message: "Please input your password!"
      }, {
        validator: this.checkConfirm
      }]
    })(__jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_10___default.a, {
      type: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }))), __jsx(FormItem, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({}, formItemLayout, {
      label: "Confirm Password",
      hasFeedback: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }), getFieldDecorator("confirm", {
      rules: [{
        required: true,
        message: "Please confirm your password!"
      }, {
        validator: this.checkPassword
      }]
    })(__jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_10___default.a, {
      type: "password",
      onBlur: this.handleConfirmBlur,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }))), __jsx(FormItem, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({}, formItemLayout, {
      label: "Phone Number",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }), getFieldDecorator("phone", {
      rules: [{
        required: true,
        message: "Please input your phone number!"
      }]
    })(__jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_10___default.a, {
      addonBefore: prefixSelector,
      style: {
        width: "100%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }))), __jsx(FormItem, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({}, formItemLayout, {
      label: __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, "Address\xA0"),
      hasFeedback: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }), getFieldDecorator("address", {
      rules: [{
        required: true,
        message: "Please input your Address",
        whitespace: true
      }]
    })(__jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }))), __jsx(FormItem, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({}, formItemLayout, {
      label: "Captcha",
      extra: "We must make sure that your are a human.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
      gutter: 8,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
      span: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, getFieldDecorator("captcha", {
      rules: [{
        required: true,
        message: "Please input the captcha you got!"
      }]
    })(__jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_10___default.a, {
      size: "large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
      span: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      size: "large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }, "Get captcha")))), __jsx(FormItem, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({}, tailFormItemLayout, {
      style: {
        marginBottom: 8
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }), getFieldDecorator("agreement", {
      valuePropName: "checked"
    })(__jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }, "I have read the ", __jsx("a", {
      href: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    }, "agreement")))), __jsx(FormItem, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({}, tailFormItemLayout, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      type: "primary",
      htmlType: "submit",
      block: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }, "Sign Up!"))));
  }

}

const WrappedSignUpForm = antd_lib_form__WEBPACK_IMPORTED_MODULE_17___default.a.create()(SignUpForm);

/* harmony default export */ __webpack_exports__["default"] = (WrappedSignUpForm);

/***/ }),

/***/ "./components/clientComponents/shop/ProductCard.js":
/*!*********************************************************!*\
  !*** ./components/clientComponents/shop/ProductCard.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_popconfirm_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/popconfirm/style */ "./node_modules/antd/lib/popconfirm/style/index.js");
/* harmony import */ var antd_lib_popconfirm_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popconfirm_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/popconfirm */ "antd/lib/popconfirm");
/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style */ "./node_modules/antd/lib/icon/style/index.js");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/select/style */ "./node_modules/antd/lib/select/style/index.js");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/select */ "antd/lib/select");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/card/style */ "./node_modules/antd/lib/card/style/index.js");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);








var _jsxFileName = "/Users/friday/web_dev/sir-shallum/components/clientComponents/shop/ProductCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

const MainLayout = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div.withConfig({
  displayName: "ProductCard__MainLayout",
  componentId: "n7pnp3-0"
})([".dot{position:absolute;top:70%;right:5%;height:45px;width:45px;background-color:#607d8b;border-radius:50%;}"]);

const ProductCard = props => {
  const {
    Meta
  } = antd_lib_card__WEBPACK_IMPORTED_MODULE_7___default.a;
  const {
    title,
    price,
    image
  } = props.item;

  const renderAddToCartOption = () => {
    const {
      Option
    } = antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a;
    return __jsx("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: undefined
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: undefined
    }, "Select Size"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a, {
      defaultValue: "lucy",
      style: {
        width: "100%"
      } // onChange={handleChange}
      ,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: undefined
    }, __jsx(Option, {
      value: "jack",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    }, "Extra Small"), __jsx(Option, {
      value: "jacssk",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: undefined
    }, "Small"), __jsx(Option, {
      value: "lucy",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: undefined
    }, "Medium"), __jsx(Option, {
      value: "Yiminghe",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: undefined
    }, "Large"), __jsx(Option, {
      value: "Yimissnghe",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: undefined
    }, "Extra Large")));
  };

  return __jsx(MainLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_7___default.a, {
    hoverable: true,
    style: {
      width: 240,
      marginTop: "5%",
      borderColor: "rgba(0, 0, 0, 0.09)",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.09)"
    },
    cover: __jsx("img", {
      alt: "example",
      src: image,
      style: {
        height: "290px",
        width: 205,
        marginLeft: "7%",
        marginTop: "2%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx(antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_1___default.a, {
    icon: null,
    title: renderAddToCartOption(),
    onConfirm: () => props.addItemToCart(props.item),
    okText: "Quick Add",
    cancelText: "Cancel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("span", {
    className: "dot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "shopping-cart",
    style: {
      fontSize: "24px",
      position: "absolute",
      top: "24%",
      left: "20%",
      color: "white"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }))), __jsx(Meta, {
    title: title,
    description: `Price: ₱${price}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductCard);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/antd/lib/auto-complete/style/index.js":
/*!************************************************************!*\
  !*** ./node_modules/antd/lib/auto-complete/style/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/button/style/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/button/style/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/card/style/index.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/card/style/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/checkbox/style/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/antd/lib/checkbox/style/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/col/style/index.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/col/style/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/drawer/style/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/drawer/style/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/form/style/index.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/form/style/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/icon/style/index.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/icon/style/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/input/style/index.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/input/style/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/menu/style/index.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/menu/style/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/message/style/index.js":
/*!******************************************************!*\
  !*** ./node_modules/antd/lib/message/style/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/modal/style/index.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/modal/style/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/popconfirm/style/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/antd/lib/popconfirm/style/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/row/style/index.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/row/style/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/select/style/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/select/style/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/shop.js":
/*!***********************!*\
  !*** ./pages/shop.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/message/style */ "./node_modules/antd/lib/message/style/index.js");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_clientComponents_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/clientComponents/Layout */ "./components/clientComponents/Layout.js");
/* harmony import */ var _components_clientComponents_shop_ProductCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/clientComponents/shop/ProductCard */ "./components/clientComponents/shop/ProductCard.js");
/* harmony import */ var _components_clientComponents_footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/clientComponents/footer/Footer */ "./components/clientComponents/footer/Footer.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _testData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../testData */ "./testData.js");



var _jsxFileName = "/Users/friday/web_dev/sir-shallum/pages/shop.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






const MainWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "shop__MainWrapper",
  componentId: "sc-78y3xq-0"
})(["background:rgb(249,250,252);overflow-x:hidden;width:100%;display:flex;padding:2% 5% 5% 5%;.right{width:100%;display:flex;justify-content:space-evenly;flex-direction:row;flex-wrap:wrap;}.left{padding:2%;margin-top:1%;display:flex;height:100vh;width:300px;background:#fff;border-color:rgba(0,0,0,0.09);box-shadow:0 2px 8px rgba(0,0,0,0.09);}"]);
const BackgroundHeader = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "shop__BackgroundHeader",
  componentId: "sc-78y3xq-1"
})(["background:url(\"../static/images/shop-cover.jpg\");width:100%;background-size:cover;background-repeat:no-repeat;background-position:0px -200px;height:250px;"]);

class Shop extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "state", {
      cart: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "handleAddItemToCart", item => {
      const newCart = [...this.state.cart, item];
      this.setState({
        cart: newCart
      });

      antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.success(`You've added ${item.title} to your cart`, 5);
    });
  }

  render() {
    return __jsx(_components_clientComponents_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx(BackgroundHeader, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), __jsx(MainWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx("div", {
      className: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Filter"), __jsx("div", {
      className: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, _testData__WEBPACK_IMPORTED_MODULE_8__["default"].map(item => __jsx(_components_clientComponents_shop_ProductCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      item: item,
      addItemToCart: this.handleAddItemToCart,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    })))), __jsx(_components_clientComponents_footer_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Shop);

/***/ }),

/***/ "./testData.js":
/*!*********************!*\
  !*** ./testData.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const testData = [{
  id: 1,
  title: "THE ROYSTON SOLID NAVY BUSINESS SUIT",
  image: "./static/images/testShirt.jpg",
  price: 5000,
  detail: "Laboris sit enim minim labore minim ipsum incididunt ipsum qui dolor.",
  fabric: "test fabric"
}, {
  id: 2,
  title: "THE ROYSTON SOLID NAVY BUSINESS SUIT",
  image: "./static/images/testShirt.jpg",
  price: 5000,
  detail: "Laboris sit enim minim labore minim ipsum incididunt ipsum qui dolor.",
  fabric: "test fabric"
}, {
  id: 3,
  title: "THE ROYSTON SOLID NAVY BUSINESS SUIT",
  image: "./static/images/testShirt.jpg",
  price: 5000,
  detail: "Laboris sit enim minim labore minim ipsum incididunt ipsum qui dolor.",
  fabric: "test fabric"
}, {
  id: 4,
  title: "THE ROYSTON SOLID NAVY BUSINESS SUIT",
  image: "./static/images/testShirt.jpg",
  price: 5000,
  detail: "Laboris sit enim minim labore minim ipsum incididunt ipsum qui dolor.",
  fabric: "test fabric"
}, {
  id: 5,
  title: "THE ROYSTON SOLID NAVY BUSINESS SUIT",
  image: "./static/images/testShirt.jpg",
  price: 5000,
  detail: "Laboris sit enim minim labore minim ipsum incididunt ipsum qui dolor.",
  fabric: "test fabric"
}, {
  id: 6,
  title: "THE ROYSTON SOLID NAVY BUSINESS SUIT",
  image: "./static/images/testShirt.jpg",
  price: 5000,
  detail: "Laboris sit enim minim labore minim ipsum incididunt ipsum qui dolor.",
  fabric: "test fabric"
}, {
  id: 7,
  title: "THE ROYSTON SOLID NAVY BUSINESS SUIT",
  image: "./static/images/testShirt.jpg",
  price: 5000,
  detail: "Laboris sit enim minim labore minim ipsum incididunt ipsum qui dolor.",
  fabric: "test fabric"
}, {
  id: 8,
  title: "THE ROYSTON SOLID NAVY BUSINESS SUIT",
  image: "./static/images/testShirt.jpg",
  price: 5000,
  detail: "Laboris sit enim minim labore minim ipsum incididunt ipsum qui dolor.",
  fabric: "test fabric"
}];
/* harmony default export */ __webpack_exports__["default"] = (testData);

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/shop.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/friday/web_dev/sir-shallum/pages/shop.js */"./pages/shop.js");


/***/ }),

/***/ "antd/lib/auto-complete":
/*!*****************************************!*\
  !*** external "antd/lib/auto-complete" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/auto-complete");

/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/card":
/*!********************************!*\
  !*** external "antd/lib/card" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),

/***/ "antd/lib/checkbox":
/*!************************************!*\
  !*** external "antd/lib/checkbox" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/checkbox");

/***/ }),

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/drawer":
/*!**********************************!*\
  !*** external "antd/lib/drawer" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/drawer");

/***/ }),

/***/ "antd/lib/form":
/*!********************************!*\
  !*** external "antd/lib/form" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),

/***/ "antd/lib/icon":
/*!********************************!*\
  !*** external "antd/lib/icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/menu":
/*!********************************!*\
  !*** external "antd/lib/menu" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "antd/lib/message":
/*!***********************************!*\
  !*** external "antd/lib/message" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "antd/lib/modal":
/*!*********************************!*\
  !*** external "antd/lib/modal" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "antd/lib/popconfirm":
/*!**************************************!*\
  !*** external "antd/lib/popconfirm" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/popconfirm");

/***/ }),

/***/ "antd/lib/row":
/*!*******************************!*\
  !*** external "antd/lib/row" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "antd/lib/select":
/*!**********************************!*\
  !*** external "antd/lib/select" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=shop.js.map