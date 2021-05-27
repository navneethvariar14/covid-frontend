self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Navbar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/hi */ "./node_modules/react-icons/hi/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\TOW_EVERYTHING\\TOW_WEBSITES\\Web10_Nextjs\\app1\\covid-focus-frontend\\components\\Navbar.jsx",
    _s = $RefreshSig$();




function Navbar() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      sideBar = _useState[0],
      setSidebar = _useState[1];

  var navLinks = [{
    pageName: "Home",
    route: "/"
  }, {
    pageName: "Statistics",
    route: "/Stats"
  }, {
    pageName: "Medical",
    route: "/medical"
  }];
  var drops = [{
    droptitle: "Contacts",
    dropItems: ["Action", "Another", "Yet Another"]
  }, {
    droptitle: "Emergency",
    dropItems: ["Action", "Another", "Yet Another"]
  }, {
    droptitle: "More",
    dropItems: ["Action", "Another", "Yet Another"]
  }];

  function NavOptions() {
    var _this = this;

    return navLinks.map(function (link) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        "class": "nav-item",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: link.route,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            "class": "nav-link active",
            "aria-current": "page",
            children: link.pageName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }, _this);
    });
  }

  function Dropdown() {
    var _this2 = this;

    return drops.map(function (drop) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        "class": "nav-item dropdown",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          "class": "nav-link dropdown-toggle",
          href: "#",
          id: "navbarDropdown",
          role: "button",
          "data-bs-toggle": "dropdown",
          "aria-expanded": "false",
          children: drop.droptitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 9
        }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          "class": "dropdown-menu",
          "aria-labelledby": "navbarDropdown",
          children: drop.dropItems.map(function (item) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "dropdown-item",
                  href: "#",
                  children: item
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 19
                }, _this2)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, _this2)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, _this2);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }, _this2)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 7
      }, _this2);
    });
  }

  function Sidenav(objectArray) {
    var _this3 = this;

    return onjectArray.map(function (link) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: link.pageName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 11
          }, _this3)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 9
        }, _this3)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 7
      }, _this3);
    });
  }

  function SideDropDown() {
    var _this4 = this;

    return drops.map(function (index, drop) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "accordion-item",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          "class": "accordion-header",
          id: "headingOne",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            "class": "accordion-button",
            type: "button",
            "data-bs-toggle": "collapse",
            "data-bs-target": "#collapseOne",
            "aria-expanded": "true",
            "aria-controls": "collapseOne",
            children: drop.droptitle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 11
          }, _this4)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 9
        }, _this4), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          id: index,
          "class": "accordion-collapse collapse show",
          "aria-labelledby": "headingOne",
          "data-bs-parent": "#accordionExample",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "accordion-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
              children: "This is the first item's accordion body."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 13
            }, _this4), " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("code", {
              children: ".accordion-body"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 46
            }, _this4), ", though the transition does limit overflow."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 11
          }, _this4)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 9
        }, _this4)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 7
      }, _this4);
    });
  }

  var toggleSideBar = function toggleSideBar() {
    setSidebar(!sideBar);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var navbar = document.querySelector(".navbar");
    var spot = document.querySelector(".spot"); //Intersection observer

    var handleScroll = function handleScroll(entries) {
      var spotIsVisible = entries[0].isIntersecting;
      if (spotIsVisible) navbar.classList.remove("scrolled-nav");else navbar.classList.add("scrolled-nav");
    };

    var options = {
      root: null,
      rootMargin: "0px",
      threshhold: 0
    };
    var observer = new IntersectionObserver(handleScroll, options);
    observer.observe(spot);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      "class": "navbar fixed-top navbar-expand-md d-none d-sm-none d-md-block  ",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "container-fluid",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          "class": "navbar-brand",
          href: "#",
          children: "PSYCHOS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "collapse navbar-collapse",
          id: "navbarSupportedContent",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            "class": "navbar-nav me-auto mb-2 mb-lg-0",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavOptions, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Dropdown, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            "class": "d-flex search",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              "class": "form-control me-2 search-bar",
              type: "search",
              placeholder: "Search",
              "aria-label": "Search"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              "class": "btn ",
              type: "submit",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiSearch, {
                style: {
                  color: "gray"
                },
                size: 30
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "spot d-none d-md-block "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "d-sm-block d-md-none sidenav",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "toggle-icon",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiMenu, {
          color: sideBar && "white",
          onClick: function onClick() {
            toggleSideBar();
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: sideBar ? "d-sm-block d-md-none sidebar active" : "d-sm-block d-md-none sidebar ",
      id: "mySidebar",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sidenav, {
        props: navLinks
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "accordion",
        id: "accordionExample"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Navbar, "EZG8MTXmziN8/iGRGjrpMKefweo=");

_c = Navbar;

var _c;

$RefreshReg$(_c, "Navbar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanN4Il0sIm5hbWVzIjpbIk5hdmJhciIsInVzZVN0YXRlIiwic2lkZUJhciIsInNldFNpZGViYXIiLCJuYXZMaW5rcyIsInBhZ2VOYW1lIiwicm91dGUiLCJkcm9wcyIsImRyb3B0aXRsZSIsImRyb3BJdGVtcyIsIk5hdk9wdGlvbnMiLCJtYXAiLCJsaW5rIiwiRHJvcGRvd24iLCJkcm9wIiwiaXRlbSIsIlNpZGVuYXYiLCJvYmplY3RBcnJheSIsIm9uamVjdEFycmF5IiwiU2lkZURyb3BEb3duIiwiaW5kZXgiLCJ0b2dnbGVTaWRlQmFyIiwidXNlRWZmZWN0IiwibmF2YmFyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3BvdCIsImhhbmRsZVNjcm9sbCIsImVudHJpZXMiLCJzcG90SXNWaXNpYmxlIiwiaXNJbnRlcnNlY3RpbmciLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJvcHRpb25zIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hob2xkIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIm9ic2VydmUiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUNEQywrQ0FBUSxDQUFDLEtBQUQsQ0FEUDtBQUFBLE1BQ3hCQyxPQUR3QjtBQUFBLE1BQ2ZDLFVBRGU7O0FBRy9CLE1BQU1DLFFBQVEsR0FBRyxDQUNmO0FBQUVDLFlBQVEsRUFBRSxNQUFaO0FBQW9CQyxTQUFLLEVBQUU7QUFBM0IsR0FEZSxFQUVmO0FBQUVELFlBQVEsRUFBRSxZQUFaO0FBQTBCQyxTQUFLLEVBQUU7QUFBakMsR0FGZSxFQUdmO0FBQUVELFlBQVEsRUFBRSxTQUFaO0FBQXVCQyxTQUFLLEVBQUU7QUFBOUIsR0FIZSxDQUFqQjtBQU1BLE1BQU1DLEtBQUss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LGtCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUEwQkU7QUFBSyxlQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUJGLGVBMkJFO0FBQUssZUFBUyxFQUFDLDhCQUFmO0FBQUEsNkJBQ0U7QUFBUSxpQkFBUyxFQUFDLGFBQWxCO0FBQUEsK0JBQ0UsOERBQUMsa0RBQUQ7QUFDRSxlQUFLLEVBQUV2QyxPQUFPLElBQUksT0FEcEI7QUFFRSxpQkFBTyxFQUFFLG1CQUFNO0FBQ2JtQix5QkFBYTtBQUNkO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0JGLGVBcUNFO0FBQ0UsZUFBUyxFQUNQbkIsT0FBTyxHQUNILHFDQURHLEdBRUgsK0JBSlI7QUFNRSxRQUFFLEVBQUMsV0FOTDtBQUFBLDhCQVFFLDhEQUFDLE9BQUQ7QUFBUyxhQUFLLEVBQUVFO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixlQVNFO0FBQUssaUJBQU0sV0FBWDtBQUF1QixVQUFFLEVBQUM7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJDRjtBQUFBLGtCQURGO0FBbUREOztHQW5MdUJKLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43NTYwYTc3MDJjYmI3ZTZhMzYzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBIaU1lbnUsIEhpU2VhcmNoIH0gZnJvbSBcInJlYWN0LWljb25zL2hpXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICBjb25zdCBbc2lkZUJhciwgc2V0U2lkZWJhcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG5hdkxpbmtzID0gW1xyXG4gICAgeyBwYWdlTmFtZTogXCJIb21lXCIsIHJvdXRlOiBcIi9cIiB9LFxyXG4gICAgeyBwYWdlTmFtZTogXCJTdGF0aXN0aWNzXCIsIHJvdXRlOiBcIi9TdGF0c1wiIH0sXHJcbiAgICB7IHBhZ2VOYW1lOiBcIk1lZGljYWxcIiwgcm91dGU6IFwiL21lZGljYWxcIiB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGRyb3BzID0gW1xyXG4gICAgeyBkcm9wdGl0bGU6IFwiQ29udGFjdHNcIiwgZHJvcEl0ZW1zOiBbXCJBY3Rpb25cIiwgXCJBbm90aGVyXCIsIFwiWWV0IEFub3RoZXJcIl0gfSxcclxuICAgIHsgZHJvcHRpdGxlOiBcIkVtZXJnZW5jeVwiLCBkcm9wSXRlbXM6IFtcIkFjdGlvblwiLCBcIkFub3RoZXJcIiwgXCJZZXQgQW5vdGhlclwiXSB9LFxyXG4gICAgeyBkcm9wdGl0bGU6IFwiTW9yZVwiLCBkcm9wSXRlbXM6IFtcIkFjdGlvblwiLCBcIkFub3RoZXJcIiwgXCJZZXQgQW5vdGhlclwiXSB9LFxyXG4gIF07XHJcblxyXG4gIGZ1bmN0aW9uIE5hdk9wdGlvbnMoKSB7XHJcbiAgICByZXR1cm4gbmF2TGlua3MubWFwKChsaW5rKSA9PiAoXHJcbiAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17bGluay5yb3V0ZX0+XHJcbiAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rIGFjdGl2ZVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIj5cclxuICAgICAgICAgICAge2xpbmsucGFnZU5hbWV9XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBEcm9wZG93bigpIHtcclxuICAgIHJldHVybiBkcm9wcy5tYXAoKGRyb3ApID0+IChcclxuICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gZHJvcGRvd25cIj5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgY2xhc3M9XCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcIlxyXG4gICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgaWQ9XCJuYXZiYXJEcm9wZG93blwiXHJcbiAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIlxyXG4gICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7ZHJvcC5kcm9wdGl0bGV9XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiBhcmlhLWxhYmVsbGVkYnk9XCJuYXZiYXJEcm9wZG93blwiPlxyXG4gICAgICAgICAge2Ryb3AuZHJvcEl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbGk+XHJcbiAgICApKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFNpZGVuYXYob2JqZWN0QXJyYXkpIHtcclxuICAgIHJldHVybiBvbmplY3RBcnJheS5tYXAoKGxpbmspID0+IChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhPntsaW5rLnBhZ2VOYW1lfTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBTaWRlRHJvcERvd24oKSB7XHJcbiAgICByZXR1cm4gZHJvcHMubWFwKChpbmRleCwgZHJvcCkgPT4gKFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uLWl0ZW1cIj5cclxuICAgICAgICA8aDIgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyXCIgaWQ9XCJoZWFkaW5nT25lXCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzPVwiYWNjb3JkaW9uLWJ1dHRvblwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjY29sbGFwc2VPbmVcIlxyXG4gICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZU9uZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtkcm9wLmRyb3B0aXRsZX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgaWQ9e2luZGV4fVxyXG4gICAgICAgICAgY2xhc3M9XCJhY2NvcmRpb24tY29sbGFwc2UgY29sbGFwc2Ugc2hvd1wiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJoZWFkaW5nT25lXCJcclxuICAgICAgICAgIGRhdGEtYnMtcGFyZW50PVwiI2FjY29yZGlvbkV4YW1wbGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY2NvcmRpb24tYm9keVwiPlxyXG4gICAgICAgICAgICA8c3Ryb25nPlRoaXMgaXMgdGhlIGZpcnN0IGl0ZW0ncyBhY2NvcmRpb24gYm9keS48L3N0cm9uZz4gSXQgaXNcclxuICAgICAgICAgICAgc2hvd24gYnkgZGVmYXVsdCwgdW50aWwgdGhlIGNvbGxhcHNlIHBsdWdpbiBhZGRzIHRoZSBhcHByb3ByaWF0ZVxyXG4gICAgICAgICAgICBjbGFzc2VzIHRoYXQgd2UgdXNlIHRvIHN0eWxlIGVhY2ggZWxlbWVudC4gVGhlc2UgY2xhc3NlcyBjb250cm9sIHRoZVxyXG4gICAgICAgICAgICBvdmVyYWxsIGFwcGVhcmFuY2UsIGFzIHdlbGwgYXMgdGhlIHNob3dpbmcgYW5kIGhpZGluZyB2aWEgQ1NTXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb25zLiBZb3UgY2FuIG1vZGlmeSBhbnkgb2YgdGhpcyB3aXRoIGN1c3RvbSBDU1Mgb3JcclxuICAgICAgICAgICAgb3ZlcnJpZGluZyBvdXIgZGVmYXVsdCB2YXJpYWJsZXMuIEl0J3MgYWxzbyB3b3J0aCBub3RpbmcgdGhhdCBqdXN0XHJcbiAgICAgICAgICAgIGFib3V0IGFueSBIVE1MIGNhbiBnbyB3aXRoaW4gdGhlIDxjb2RlPi5hY2NvcmRpb24tYm9keTwvY29kZT4sXHJcbiAgICAgICAgICAgIHRob3VnaCB0aGUgdHJhbnNpdGlvbiBkb2VzIGxpbWl0IG92ZXJmbG93LlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0b2dnbGVTaWRlQmFyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lkZWJhcighc2lkZUJhcik7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpO1xyXG4gICAgY29uc3Qgc3BvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3BvdFwiKTtcclxuXHJcbiAgICAvL0ludGVyc2VjdGlvbiBvYnNlcnZlclxyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKGVudHJpZXMpID0+IHtcclxuICAgICAgY29uc3Qgc3BvdElzVmlzaWJsZSA9IGVudHJpZXNbMF0uaXNJbnRlcnNlY3Rpbmc7XHJcbiAgICAgIGlmIChzcG90SXNWaXNpYmxlKSBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZShcInNjcm9sbGVkLW5hdlwiKTtcclxuICAgICAgZWxzZSBuYXZiYXIuY2xhc3NMaXN0LmFkZChcInNjcm9sbGVkLW5hdlwiKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICByb290OiBudWxsLFxyXG4gICAgICByb290TWFyZ2luOiBcIjBweFwiLFxyXG4gICAgICB0aHJlc2hob2xkOiAwLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihoYW5kbGVTY3JvbGwsIG9wdGlvbnMpO1xyXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShzcG90KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8bmF2IGNsYXNzPVwibmF2YmFyIGZpeGVkLXRvcCBuYXZiYXItZXhwYW5kLW1kIGQtbm9uZSBkLXNtLW5vbmUgZC1tZC1ibG9jayAgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBQU1lDSE9TXHJcbiAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2IG1lLWF1dG8gbWItMiBtYi1sZy0wXCI+XHJcbiAgICAgICAgICAgICAgPE5hdk9wdGlvbnMgLz5cclxuICAgICAgICAgICAgICA8RHJvcGRvd24gLz5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJkLWZsZXggc2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBtZS0yIHNlYXJjaC1iYXJcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgPEhpU2VhcmNoIHN0eWxlPXt7IGNvbG9yOiBcImdyYXlcIiB9fSBzaXplPXszMH0gLz5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwb3QgZC1ub25lIGQtbWQtYmxvY2sgXCI+PC9kaXY+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZC1zbS1ibG9jayBkLW1kLW5vbmUgc2lkZW5hdlwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidG9nZ2xlLWljb25cIj5cclxuICAgICAgICAgIDxIaU1lbnVcclxuICAgICAgICAgICAgY29sb3I9e3NpZGVCYXIgJiYgXCJ3aGl0ZVwifVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdG9nZ2xlU2lkZUJhcigpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9uYXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgc2lkZUJhclxyXG4gICAgICAgICAgICA/IFwiZC1zbS1ibG9jayBkLW1kLW5vbmUgc2lkZWJhciBhY3RpdmVcIlxyXG4gICAgICAgICAgICA6IFwiZC1zbS1ibG9jayBkLW1kLW5vbmUgc2lkZWJhciBcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZD1cIm15U2lkZWJhclwiXHJcbiAgICAgID5cclxuICAgICAgICA8U2lkZW5hdiBwcm9wcz17bmF2TGlua3N9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFjY29yZGlvblwiIGlkPVwiYWNjb3JkaW9uRXhhbXBsZVwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==