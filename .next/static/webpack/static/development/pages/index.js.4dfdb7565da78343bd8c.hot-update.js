webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/home */ "./components/home.js");
/* harmony import */ var _components_navlinks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/navlinks */ "./components/navlinks.js");
/* harmony import */ var _components_resume__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/resume */ "./components/resume.js");
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/contact */ "./components/contact.js");
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/about */ "./components/about.js");







var _jsxFileName = "/home/traci/projects/personal/2019_portfolio/pages/index.js";










var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleMenu", function () {
      _this.setState({
        hamburger: !_this.state.hamburger
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "focus", function (event) {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClick", function (e) {
      _this.setState({
        active: e
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "pageComponent", function () {
      switch (_this.state.active) {
        case 'Home':
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_home__WEBPACK_IMPORTED_MODULE_11__["default"], {
            handleClick: _this.handleClick,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          });

        case 'Resume':
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_resume__WEBPACK_IMPORTED_MODULE_13__["default"], {
            handleClick: _this.handleClick,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          });

        case 'About':
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_about__WEBPACK_IMPORTED_MODULE_15__["default"], {
            handleClick: _this.handleClick,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          });
      }
    });

    _this.state = {
      active: 'Home',
      hamburger: true
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1486987501" + " " + "page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1486987501" + " " + "index",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1486987501" + " " + "page_title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        id: "name",
        className: "jsx-1486987501",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Traci Thompson"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        id: "divide",
        className: "jsx-1486987501",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, " | "), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        id: "title",
        className: "jsx-1486987501",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Full Stack Developer")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_navlinks__WEBPACK_IMPORTED_MODULE_12__["default"], {
        handleClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1486987501" + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, this.pageComponent()), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1486987501",
        __self: this
      }, "body.jsx-1486987501{font-family:'Cinzel',serif;}.content.jsx-1486987501{margin-top:25px;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:500px;}.index.jsx-1486987501{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h3.jsx-1486987501{width:75%;text-align:center;color:white;font-size:2.2em;line-height:.5;font-family:'Cinzel',serif;margin-top:50px;}h1.jsx-1486987501{line-height:0;}.page_title.jsx-1486987501{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}@media screen and (max-width:981px){#name.jsx-1486987501{width:40%;}#divide.jsx-1486987501{display:none;}}@media screen and (max-width:545px){#name.jsx-1486987501{width:80%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYWNpL3Byb2plY3RzL3BlcnNvbmFsLzIwMTlfcG9ydGZvbGlvL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEb0IsQUFHeUMsQUFHWixBQVNILEFBT0gsQUFVSSxBQUlELEFBT0QsQUFHRyxBQU1ILFVBN0JNLEFBcUJsQixBQVNBLEdBTkEsQ0FkRixFQTFCb0IsV0FIcEIsQ0FvQmMsTUFoQkMsTUFpQkcsZ0JBQ0QsZUFDYSxHQVhOLEFBcUJILHdCQVRILFVBbkJHLE1Bb0JyQiw2QkFTQSxTQXJCeUIsaURBUEQsa0RBUUgsNEJBUEYsaUJBQ25CLGdEQU9BIiwiZmlsZSI6Ii9ob21lL3RyYWNpL3Byb2plY3RzL3BlcnNvbmFsLzIwMTlfcG9ydGZvbGlvL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSG9tZSBmcm9tICcuLi9jb21wb25lbnRzL2hvbWUnO1xuaW1wb3J0IE5hdkxpbmtzIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2bGlua3MnO1xuaW1wb3J0IFJlc3VtZSBmcm9tICcuLi9jb21wb25lbnRzL3Jlc3VtZSc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhY3QnO1xuaW1wb3J0IEFib3V0IGZyb20gJy4uL2NvbXBvbmVudHMvYWJvdXQnO1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZTogJ0hvbWUnLFxuICAgICAgaGFtYnVyZ2VyOiB0cnVlLFxuICAgIH07XG4gIH1cblxuICB0b2dnbGVNZW51ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaGFtYnVyZ2VyOiAhdGhpcy5zdGF0ZS5oYW1idXJnZXJcbiAgICB9KTtcbiAgfVxuXG4gIGZvY3VzID0gKGV2ZW50KSA9PiB7fVxuXG4gIGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZTogZVxuICAgIH0pO1xuICB9XG5cbiAgcGFnZUNvbXBvbmVudCA9ICgpID0+IHtcbiAgICBzd2l0Y2godGhpcy5zdGF0ZS5hY3RpdmUpIHtcbiAgICAgIGNhc2UgJ0hvbWUnOiByZXR1cm4gPEhvbWUgaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9Lz47XG4gICAgICBjYXNlICdSZXN1bWUnOiByZXR1cm4gPFJlc3VtZSBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVDbGlja30vPjtcbiAgICAgIGNhc2UgJ0Fib3V0JzogcmV0dXJuIDxBYm91dCBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVDbGlja30vPjtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGV4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlX3RpdGxlXCI+XG4gICAgICAgICAgICA8aDMgaWQ9XCJuYW1lXCI+VHJhY2kgVGhvbXBzb248L2gzPlxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJkaXZpZGVcIj4gfCA8L3NwYW4+XG4gICAgICAgICAgICA8aDMgaWQ9XCJ0aXRsZVwiPkZ1bGwgU3RhY2sgRGV2ZWxvcGVyPC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TmF2TGlua3MgaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIHt0aGlzLnBhZ2VDb21wb25lbnQoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ2luemVsJywgc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW5kZXgge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4yZW07IFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IC41O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDaW56ZWwnLCBzZXJpZjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBhZ2VfdGl0bGUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgxcHgpIHtcbiAgICAgICAgICAgICNuYW1lIHtcbiAgICAgICAgICAgICAgLy8gbGluZS1oZWlnaHQ6IDFlbTtcbiAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNkaXZpZGUge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0NXB4KSB7XG4gICAgICAgICAgICAjbmFtZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=/home/traci/projects/personal/2019_portfolio/pages/index.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.4dfdb7565da78343bd8c.hot-update.js.map