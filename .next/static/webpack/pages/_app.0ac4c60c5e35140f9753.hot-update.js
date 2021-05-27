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

  function Sidenav() {
    var _this3 = this;

    return navLinks.map(function (link) {
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

    return drops.map(function (index, link) {
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
            children: drops.droptitle
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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sidenav, {}, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanN4Il0sIm5hbWVzIjpbIk5hdmJhciIsInVzZVN0YXRlIiwic2lkZUJhciIsInNldFNpZGViYXIiLCJuYXZMaW5rcyIsInBhZ2VOYW1lIiwicm91dGUiLCJkcm9wcyIsImRyb3B0aXRsZSIsImRyb3BJdGVtcyIsIk5hdk9wdGlvbnMiLCJtYXAiLCJsaW5rIiwiRHJvcGRvd24iLCJkcm9wIiwiaXRlbSIsIlNpZGVuYXYiLCJTaWRlRHJvcERvd24iLCJpbmRleCIsInRvZ2dsZVNpZGVCYXIiLCJ1c2VFZmZlY3QiLCJuYXZiYXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzcG90IiwiaGFuZGxlU2Nyb2xsIiwiZW50cmllcyIsInNwb3RJc1Zpc2libGUiLCJpc0ludGVyc2VjdGluZyIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIm9wdGlvbnMiLCJyb290Iiwicm9vdE1hcmdpbiIsInRocmVzaGhvbGQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBQ0RDLCtDQUFRLENBQUMsS0FBRCxDQURQO0FBQUEsTUFDeEJDLE9BRHdCO0FBQUEsTUFDZkMsVUFEZTs7QUFHL0IsTUFBTUMsUUFBUSxHQUFHLENBQ2Y7QUFBRUMsWUFBUSxFQUFFLE1BQVo7QUFBb0JDLFNBQUssRUFBRTtBQUEzQixHQURlLEVBRWY7QUFBRUQsWUFBUSxFQUFFLFlBQVo7QUFBMEJDLFNBQUssRUFBRTtBQUFqQyxHQUZlLEVBR2Y7QUFBRUQsWUFBUSxFQUFFLFNBQVo7QUFBdUJDLFNBQUssRUFBRTtBQUE5QixHQUhlLENBQWpCO0FBTUEsTUFBTUMsS0FBSyxHQUFHLENBQ1o7QUFBRUMsYUFBUyxFQUFFLFVB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQTBCRTtBQUFLLGVBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQkYsZUEyQkU7QUFBSyxlQUFTLEVBQUMsOEJBQWY7QUFBQSw2QkFDRTtBQUFRLGlCQUFTLEVBQUMsYUFBbEI7QUFBQSwrQkFDRSw4REFBQyxrREFBRDtBQUNFLGVBQUssRUFBRXJDLE9BQU8sSUFBSSxPQURwQjtBQUVFLGlCQUFPLEVBQUUsbUJBQU07QUFDYmlCLHlCQUFhO0FBQ2Q7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEzQkYsZUFxQ0U7QUFDRSxlQUFTLEVBQ1BqQixPQUFPLEdBQ0gscUNBREcsR0FFSCwrQkFKUjtBQU1FLFFBQUUsRUFBQyxXQU5MO0FBQUEsOEJBUUUsOERBQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkYsZUFTRTtBQUFLLGlCQUFNLFdBQVg7QUFBdUIsVUFBRSxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQ0Y7QUFBQSxrQkFERjtBQW1ERDs7R0FuTHVCRixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMGFjNGM2MGM1ZTM1MTQwZjk3NTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgSGlNZW51LCBIaVNlYXJjaCB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGViYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBuYXZMaW5rcyA9IFtcclxuICAgIHsgcGFnZU5hbWU6IFwiSG9tZVwiLCByb3V0ZTogXCIvXCIgfSxcclxuICAgIHsgcGFnZU5hbWU6IFwiU3RhdGlzdGljc1wiLCByb3V0ZTogXCIvU3RhdHNcIiB9LFxyXG4gICAgeyBwYWdlTmFtZTogXCJNZWRpY2FsXCIsIHJvdXRlOiBcIi9tZWRpY2FsXCIgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBkcm9wcyA9IFtcclxuICAgIHsgZHJvcHRpdGxlOiBcIkNvbnRhY3RzXCIsIGRyb3BJdGVtczogW1wiQWN0aW9uXCIsIFwiQW5vdGhlclwiLCBcIllldCBBbm90aGVyXCJdIH0sXHJcbiAgICB7IGRyb3B0aXRsZTogXCJFbWVyZ2VuY3lcIiwgZHJvcEl0ZW1zOiBbXCJBY3Rpb25cIiwgXCJBbm90aGVyXCIsIFwiWWV0IEFub3RoZXJcIl0gfSxcclxuICAgIHsgZHJvcHRpdGxlOiBcIk1vcmVcIiwgZHJvcEl0ZW1zOiBbXCJBY3Rpb25cIiwgXCJBbm90aGVyXCIsIFwiWWV0IEFub3RoZXJcIl0gfSxcclxuICBdO1xyXG5cclxuICBmdW5jdGlvbiBOYXZPcHRpb25zKCkge1xyXG4gICAgcmV0dXJuIG5hdkxpbmtzLm1hcCgobGluaykgPT4gKFxyXG4gICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2xpbmsucm91dGV9PlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayBhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+XHJcbiAgICAgICAgICAgIHtsaW5rLnBhZ2VOYW1lfVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9saT5cclxuICAgICkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gRHJvcGRvd24oKSB7XHJcbiAgICByZXR1cm4gZHJvcHMubWFwKChkcm9wKSA9PiAoXHJcbiAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtIGRyb3Bkb3duXCI+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzPVwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXCJcclxuICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgIGlkPVwibmF2YmFyRHJvcGRvd25cIlxyXG4gICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCJcclxuICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2Ryb3AuZHJvcHRpdGxlfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwibmF2YmFyRHJvcGRvd25cIj5cclxuICAgICAgICAgIHtkcm9wLmRyb3BJdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBTaWRlbmF2KCkge1xyXG4gICAgcmV0dXJuIG5hdkxpbmtzLm1hcCgobGluaykgPT4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtcIiBcIn1cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGE+e2xpbmsucGFnZU5hbWV9PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFNpZGVEcm9wRG93bigpIHtcclxuICAgIHJldHVybiBkcm9wcy5tYXAoKGluZGV4LCBsaW5rKSA9PiAoXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhY2NvcmRpb24taXRlbVwiPlxyXG4gICAgICAgIDxoMiBjbGFzcz1cImFjY29yZGlvbi1oZWFkZXJcIiBpZD1cImhlYWRpbmdPbmVcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3M9XCJhY2NvcmRpb24tYnV0dG9uXCJcclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNjb2xsYXBzZU9uZVwiXHJcbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJcclxuICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImNvbGxhcHNlT25lXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2Ryb3BzLmRyb3B0aXRsZX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgaWQ9e2luZGV4fVxyXG4gICAgICAgICAgY2xhc3M9XCJhY2NvcmRpb24tY29sbGFwc2UgY29sbGFwc2Ugc2hvd1wiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJoZWFkaW5nT25lXCJcclxuICAgICAgICAgIGRhdGEtYnMtcGFyZW50PVwiI2FjY29yZGlvbkV4YW1wbGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY2NvcmRpb24tYm9keVwiPlxyXG4gICAgICAgICAgICA8c3Ryb25nPlRoaXMgaXMgdGhlIGZpcnN0IGl0ZW0ncyBhY2NvcmRpb24gYm9keS48L3N0cm9uZz4gSXQgaXNcclxuICAgICAgICAgICAgc2hvd24gYnkgZGVmYXVsdCwgdW50aWwgdGhlIGNvbGxhcHNlIHBsdWdpbiBhZGRzIHRoZSBhcHByb3ByaWF0ZVxyXG4gICAgICAgICAgICBjbGFzc2VzIHRoYXQgd2UgdXNlIHRvIHN0eWxlIGVhY2ggZWxlbWVudC4gVGhlc2UgY2xhc3NlcyBjb250cm9sIHRoZVxyXG4gICAgICAgICAgICBvdmVyYWxsIGFwcGVhcmFuY2UsIGFzIHdlbGwgYXMgdGhlIHNob3dpbmcgYW5kIGhpZGluZyB2aWEgQ1NTXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb25zLiBZb3UgY2FuIG1vZGlmeSBhbnkgb2YgdGhpcyB3aXRoIGN1c3RvbSBDU1Mgb3JcclxuICAgICAgICAgICAgb3ZlcnJpZGluZyBvdXIgZGVmYXVsdCB2YXJpYWJsZXMuIEl0J3MgYWxzbyB3b3J0aCBub3RpbmcgdGhhdCBqdXN0XHJcbiAgICAgICAgICAgIGFib3V0IGFueSBIVE1MIGNhbiBnbyB3aXRoaW4gdGhlIDxjb2RlPi5hY2NvcmRpb24tYm9keTwvY29kZT4sXHJcbiAgICAgICAgICAgIHRob3VnaCB0aGUgdHJhbnNpdGlvbiBkb2VzIGxpbWl0IG92ZXJmbG93LlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0b2dnbGVTaWRlQmFyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lkZWJhcighc2lkZUJhcik7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpO1xyXG4gICAgY29uc3Qgc3BvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3BvdFwiKTtcclxuXHJcbiAgICAvL0ludGVyc2VjdGlvbiBvYnNlcnZlclxyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKGVudHJpZXMpID0+IHtcclxuICAgICAgY29uc3Qgc3BvdElzVmlzaWJsZSA9IGVudHJpZXNbMF0uaXNJbnRlcnNlY3Rpbmc7XHJcbiAgICAgIGlmIChzcG90SXNWaXNpYmxlKSBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZShcInNjcm9sbGVkLW5hdlwiKTtcclxuICAgICAgZWxzZSBuYXZiYXIuY2xhc3NMaXN0LmFkZChcInNjcm9sbGVkLW5hdlwiKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICByb290OiBudWxsLFxyXG4gICAgICByb290TWFyZ2luOiBcIjBweFwiLFxyXG4gICAgICB0aHJlc2hob2xkOiAwLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihoYW5kbGVTY3JvbGwsIG9wdGlvbnMpO1xyXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShzcG90KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8bmF2IGNsYXNzPVwibmF2YmFyIGZpeGVkLXRvcCBuYXZiYXItZXhwYW5kLW1kIGQtbm9uZSBkLXNtLW5vbmUgZC1tZC1ibG9jayAgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBQU1lDSE9TXHJcbiAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2IG1lLWF1dG8gbWItMiBtYi1sZy0wXCI+XHJcbiAgICAgICAgICAgICAgPE5hdk9wdGlvbnMgLz5cclxuICAgICAgICAgICAgICA8RHJvcGRvd24gLz5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJkLWZsZXggc2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBtZS0yIHNlYXJjaC1iYXJcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgPEhpU2VhcmNoIHN0eWxlPXt7IGNvbG9yOiBcImdyYXlcIiB9fSBzaXplPXszMH0gLz5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwb3QgZC1ub25lIGQtbWQtYmxvY2sgXCI+PC9kaXY+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZC1zbS1ibG9jayBkLW1kLW5vbmUgc2lkZW5hdlwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidG9nZ2xlLWljb25cIj5cclxuICAgICAgICAgIDxIaU1lbnVcclxuICAgICAgICAgICAgY29sb3I9e3NpZGVCYXIgJiYgXCJ3aGl0ZVwifVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdG9nZ2xlU2lkZUJhcigpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9uYXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgc2lkZUJhclxyXG4gICAgICAgICAgICA/IFwiZC1zbS1ibG9jayBkLW1kLW5vbmUgc2lkZWJhciBhY3RpdmVcIlxyXG4gICAgICAgICAgICA6IFwiZC1zbS1ibG9jayBkLW1kLW5vbmUgc2lkZWJhciBcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZD1cIm15U2lkZWJhclwiXHJcbiAgICAgID5cclxuICAgICAgICA8U2lkZW5hdiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhY2NvcmRpb25cIiBpZD1cImFjY29yZGlvbkV4YW1wbGVcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=