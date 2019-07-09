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
        className: "jsx-70219302" + " " + "page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-70219302" + " " + "index",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        id: "name",
        className: "jsx-70219302",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Traci Thompson ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        id: "divide",
        className: "jsx-70219302",
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
        className: "jsx-70219302" + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, this.pageComponent()), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "70219302",
        __self: this
      }, "body.jsx-70219302{font-family:'Cinzel',serif;}.content.jsx-70219302{margin-top:25px;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:500px;}.index.jsx-70219302{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h3.jsx-70219302{width:75%;text-align:center;color:white;font-size:2.2em;line-height:.5;font-family:'Cinzel',serif;margin-top:50px;}h1.jsx-70219302{line-height:0;}@media screen and (max-width:981px){#name.jsx-70219302{line-height:1em;width:40%;}#divide.jsx-70219302{display:none;}}@media screen and (max-width:755px){#name.jsx-70219302{width:40%;}}@media screen and (max-width:545px){#name.jsx-70219302{width:80%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYWNpL3Byb2plY3RzL3BlcnNvbmFsLzIwMTlfcG9ydGZvbGlvL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Eb0IsQUFHeUMsQUFHWixBQVNILEFBT0gsQUFVSSxBQUtJLEFBSUgsQUFNSCxBQU1BLFVBOUJNLEFBeUJsQixBQU1BLEdBWkEsQ0FURixFQTFCb0IsQUErQk4sVUFDWixDQW5DRixDQW9CYyxNQWhCQyxNQWlCRyxnQkFDRCxlQUNhLEdBWE4sd0JBWU4sVUFuQkcsTUFvQnJCLHNDQVp5QixpREFQRCxrREFRSCw0QkFQRixpQkFDbkIsZ0RBT0EiLCJmaWxlIjoiL2hvbWUvdHJhY2kvcHJvamVjdHMvcGVyc29uYWwvMjAxOV9wb3J0Zm9saW8vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIb21lIGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZSc7XG5pbXBvcnQgTmF2TGlua3MgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZsaW5rcyc7XG5pbXBvcnQgUmVzdW1lIGZyb20gJy4uL2NvbXBvbmVudHMvcmVzdW1lJztcbmltcG9ydCBDb250YWN0IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFjdCc7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9hYm91dCc7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlOiAnSG9tZScsXG4gICAgICBoYW1idXJnZXI6IHRydWUsXG4gICAgfTtcbiAgfVxuXG4gIHRvZ2dsZU1lbnUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBoYW1idXJnZXI6ICF0aGlzLnN0YXRlLmhhbWJ1cmdlclxuICAgIH0pO1xuICB9XG5cbiAgZm9jdXMgPSAoZXZlbnQpID0+IHt9XG5cbiAgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlOiBlXG4gICAgfSk7XG4gIH1cblxuICBwYWdlQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgIHN3aXRjaCh0aGlzLnN0YXRlLmFjdGl2ZSkge1xuICAgICAgY2FzZSAnSG9tZSc6IHJldHVybiA8SG9tZSBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVDbGlja30vPjtcbiAgICAgIGNhc2UgJ1Jlc3VtZSc6IHJldHVybiA8UmVzdW1lIGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfS8+O1xuICAgICAgY2FzZSAnQWJvdXQnOiByZXR1cm4gPEFib3V0IGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfS8+O1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kZXhcIj5cbiAgICAgICAgICA8aDMgaWQ9XCJuYW1lXCI+VHJhY2kgVGhvbXBzb24gPHNwYW4gaWQ9XCJkaXZpZGVcIj58IDwvc3Bhbj5GdWxsIFN0YWNrIERldmVsb3BlcjwvaDM+XG4gICAgICAgICAgPE5hdkxpbmtzIGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICB7dGhpcy5wYWdlQ29tcG9uZW50KCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0NpbnplbCcsIHNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmluZGV4IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuMmVtOyBcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAuNTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ2luemVsJywgc2VyaWY7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MXB4KSB7XG4gICAgICAgICAgICAjbmFtZSB7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjZGl2aWRlIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTVweCkge1xuICAgICAgICAgICAgI25hbWUge1xuICAgICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0NXB4KSB7XG4gICAgICAgICAgICAjbmFtZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=/home/traci/projects/personal/2019_portfolio/pages/index.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.74f4c1523c62b697cf0c.hot-update.js.map