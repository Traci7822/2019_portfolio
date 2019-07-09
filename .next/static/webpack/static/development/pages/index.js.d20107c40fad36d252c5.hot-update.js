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
        className: "jsx-3135456557" + " " + "page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3135456557" + " " + "index",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        id: "name",
        className: "jsx-3135456557",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Traci Thompson ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        id: "divide",
        className: "jsx-3135456557",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "| "), "Full Stack Developer"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_navlinks__WEBPACK_IMPORTED_MODULE_12__["default"], {
        handleClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3135456557" + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, this.pageComponent()), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3135456557",
        __self: this
      }, "body.jsx-3135456557{font-family:'Cinzel',serif;}.content.jsx-3135456557{margin-top:25px;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:500px;}.index.jsx-3135456557{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h3.jsx-3135456557{width:75%;text-align:center;color:white;font-size:2.2em;line-height:.5;font-family:'Cinzel',serif;margin-top:50px;}h1.jsx-3135456557{line-height:0;}@media screen and (max-width:981px){#name.jsx-3135456557{line-height:1em;width:40%;}#divide.jsx-3135456557{display:none;}}@media screen and (max-width:545px){#name.jsx-3135456557{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYWNpL3Byb2plY3RzL3BlcnNvbmFsLzIwMTlfcG9ydGZvbGlvL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Eb0IsQUFHeUMsQUFHWixBQVNILEFBT0gsQUFVSSxBQUtJLEFBSUgsQUFNRixVQXhCSyxDQXlCbEIsRUFOQSxDQVRGLEVBMUJvQixBQStCTixVQUNaLENBbkNGLENBb0JjLE1BaEJDLE1BaUJHLGdCQUNELGVBQ2EsR0FYTix3QkFZTixVQW5CRyxNQW9CckIsc0NBWnlCLGlEQVBELGtEQVFILDRCQVBGLGlCQUNuQixnREFPQSIsImZpbGUiOiIvaG9tZS90cmFjaS9wcm9qZWN0cy9wZXJzb25hbC8yMDE5X3BvcnRmb2xpby9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi4vY29tcG9uZW50cy9ob21lJztcbmltcG9ydCBOYXZMaW5rcyBmcm9tICcuLi9jb21wb25lbnRzL25hdmxpbmtzJztcbmltcG9ydCBSZXN1bWUgZnJvbSAnLi4vY29tcG9uZW50cy9yZXN1bWUnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWN0JztcbmltcG9ydCBBYm91dCBmcm9tICcuLi9jb21wb25lbnRzL2Fib3V0JztcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmU6ICdIb21lJyxcbiAgICAgIGhhbWJ1cmdlcjogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgdG9nZ2xlTWVudSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGhhbWJ1cmdlcjogIXRoaXMuc3RhdGUuaGFtYnVyZ2VyXG4gICAgfSk7XG4gIH1cblxuICBmb2N1cyA9IChldmVudCkgPT4ge31cblxuICBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmU6IGVcbiAgICB9KTtcbiAgfVxuXG4gIHBhZ2VDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgc3dpdGNoKHRoaXMuc3RhdGUuYWN0aXZlKSB7XG4gICAgICBjYXNlICdIb21lJzogcmV0dXJuIDxIb21lIGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfS8+O1xuICAgICAgY2FzZSAnUmVzdW1lJzogcmV0dXJuIDxSZXN1bWUgaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9Lz47XG4gICAgICBjYXNlICdBYm91dCc6IHJldHVybiA8QWJvdXQgaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9Lz47XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRleFwiPlxuICAgICAgICAgIDxoMyBpZD1cIm5hbWVcIj5UcmFjaSBUaG9tcHNvbiA8c3BhbiBpZD1cImRpdmlkZVwiPnwgPC9zcGFuPkZ1bGwgU3RhY2sgRGV2ZWxvcGVyPC9oMz5cbiAgICAgICAgICA8TmF2TGlua3MgaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIHt0aGlzLnBhZ2VDb21wb25lbnQoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ2luemVsJywgc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW5kZXgge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4yZW07IFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IC41O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDaW56ZWwnLCBzZXJpZjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgxcHgpIHtcbiAgICAgICAgICAgICNuYW1lIHtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNkaXZpZGUge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0NXB4KSB7XG4gICAgICAgICAgICAjbmFtZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=/home/traci/projects/personal/2019_portfolio/pages/index.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.d20107c40fad36d252c5.hot-update.js.map