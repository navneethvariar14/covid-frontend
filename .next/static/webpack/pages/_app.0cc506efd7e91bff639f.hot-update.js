self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NavBar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/hi */ "./node_modules/react-icons/hi/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\app dev\\projects\\covid-focus-frontend-master (2)\\covid-focus-frontend-master\\app1\\components\\Navbar.jsx",
    _s = $RefreshSig$();




function NavBar() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      sideBar = _useState[0],
      setSidebar = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("d-sm-block d-md-none sidebar"),
      sideNavClass = _useState2[0],
      setSideNavClass = _useState2[1];

  var navLinks = [{
    pageName: "Home",
    route: "/"
  }, {
    pageName: "Home",
    route: "/"
  }];

  var toggleSideBar = function toggleSideBar() {
    setSidebar(!sideBar); //  if(sideBar===true){
    //    setSidebar(false);
    //  }else {
    //   setSidebar(true);
    //  }

    console.log(sideBar);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    // //sidebar properties
    // const sidebar=document.querySelector(".sidebar");
    // if(sideBar) sidebar.classList.add("active");
    //   else sidebar.classList.remove("active");
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
      class: "navbar fixed-top navbar-expand-md d-none d-sm-none d-md-block  ",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "container-fluid",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          class: "navbar-brand",
          href: "#",
          children: "PSYCHOS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "collapse navbar-collapse",
          id: "navbarSupportedContent",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            class: "navbar-nav me-auto mb-2 mb-lg-0",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              class: "nav-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                class: "nav-link active",
                "aria-current": "page",
                href: "#",
                children: "Dashboard"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              class: "nav-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                class: "nav-link",
                href: "#",
                children: "Statistics"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              class: "nav-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                class: "nav-link",
                href: "#",
                children: "Medical"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              class: "nav-item dropdown",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                class: "nav-link dropdown-toggle",
                href: "#",
                id: "navbarDropdown",
                role: "button",
                "data-bs-toggle": "dropdown",
                "aria-expanded": "false",
                children: "Contacts"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                class: "dropdown-menu",
                "aria-labelledby": "navbarDropdown",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    class: "dropdown-item",
                    href: "#",
                    children: "Action"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    class: "dropdown-item",
                    href: "#",
                    children: "Another action"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
                    class: "dropdown-divider"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    class: "dropdown-item",
                    href: "#",
                    children: "Something else here"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              class: "nav-item dropdown",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                class: "nav-link dropdown-toggle",
                c: true,
                href: "#",
                id: "navbarDropdown",
                role: "button",
                "data-bs-toggle": "dropdown",
                "aria-expanded": "false",
                children: "Emergency"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                class: "dropdown-menu",
                "aria-labelledby": "navbarDropdown",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    class: "dropdown-item",
                    href: "#",
                    children: "Action"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    class: "dropdown-item",
                    href: "#",
                    children: "Another action"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 126,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
                    class: "dropdown-divider"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    class: "dropdown-item",
                    href: "#",
                    children: "Something else here"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              class: "nav-item dropdown",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                class: "nav-link dropdown-toggle",
                href: "#",
                id: "navbarDropdown",
                role: "button",
                "data-bs-toggle": "dropdown",
                "aria-expanded": "false",
                children: "More"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                class: "dropdown-menu",
                "aria-labelledby": "navbarDropdown",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    class: "dropdown-item",
                    href: "#",
                    children: "How To"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 153,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    class: "dropdown-item",
                    href: "#",
                    children: "Fact Check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 158,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
                    class: "dropdown-divider"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 163,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    class: "dropdown-item",
                    href: "#",
                    children: "Something else here"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 166,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            class: "d-flex search",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              class: "form-control me-2 search-bar",
              type: "search",
              placeholder: "Search",
              "aria-label": "Search"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              class: "btn ",
              type: "submit",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiSearch, {
                style: {
                  color: "gray"
                },
                size: 30
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 50
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "spot d-none d-md-block "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "d-sm-block d-md-none sidenav",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "toggle-icon",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiMenu, {
          onClick: toggleSideBar()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 86
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 54
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: sideBar ? "d-sm-block d-md-none sidebar active" : "d-sm-block d-md-none sidebar",
      id: "mySidebar",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#",
        className: "selected",
        children: "About"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#",
        children: "Services"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#",
        children: "Clients"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#",
        children: "Contact"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(NavBar, "xHJT0tJHjtoyGAyv1TNFmDlUEMM=");

_c = NavBar;

var _c;

$RefreshReg$(_c, "NavBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanN4Il0sIm5hbWVzIjpbIk5hdkJhciIsInVzZVN0YXRlIiwic2lkZUJhciIsInNldFNpZGViYXIiLCJzaWRlTmF2Q2xhc3MiLCJzZXRTaWRlTmF2Q2xhc3MiLCJuYXZMaW5rcyIsInBhZ2VOYW1lIiwicm91dGUiLCJ0b2dnbGVTaWRlQmFyIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIm5hdmJhciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNwb3QiLCJoYW5kbGVTY3JvbGwiLCJlbnRyaWVzIiwic3BvdElzVmlzaWJsZSIsImlzSW50ZXJzZWN0aW5nIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwib3B0aW9ucyIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNoaG9sZCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFFTkMsK0NBQVEsQ0FBQyxJQUFELENBRkY7QUFBQSxNQUUxQkMsT0FGMEI7QUFBQSxNQUVsQkMsVUFGa0I7O0FBQUEsbUJBR0tGLCtDQUFRLENBQUMsOEJBQUQsQ0FIYjtBQUFBLE1BRzFCRyxZQUgwQjtBQUFBLE1BR1pDLGVBSFk7O0FBS2pDLE1BQU1DLFFBQVEsR0FBQyxDQUFDO0FBQUNDLFlBQVEsRUFBQyxNQUFWO0FBQWlCQyxTQUFLLEVBQUM7QUFBdkIsR0FBRCxFQUE2QjtBQUFDRCxZQUFRLEVBQUMsTUFBVjtBQUFpQkMsU0FBSyxFQUFDO0FBQXZCLEdBQTdCLENBQWY7O0FBRUEsTUFBTUMsYUFBYSxHQUFDLFNBQWRBLGFBQWMsR0FBSTtBQUN2Qk4sY0FBVSxDQUFDLENBQUNELE9BQUYsQ0FBVixDQUR1QixDQUV4QjtBQUNBO0FBQ0E7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QUFBWSxpQkFBUyxFQUFDLFVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRTtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFLRTtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeklKO0FBQUEsa0JBREY7QUFtSkQ7O0dBaE11QkYsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjBjYzUwNmVmZDdlOTFiZmY2MzlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBIaU1lbnUsIEhpU2VhcmNoIH0gZnJvbSBcInJlYWN0LWljb25zL2hpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkJhcigpIHtcbiAgXG5jb25zdCBbc2lkZUJhcixzZXRTaWRlYmFyXT11c2VTdGF0ZSh0cnVlKTtcbmNvbnN0IFtzaWRlTmF2Q2xhc3MsIHNldFNpZGVOYXZDbGFzc109dXNlU3RhdGUoXCJkLXNtLWJsb2NrIGQtbWQtbm9uZSBzaWRlYmFyXCIpO1xuICBcbmNvbnN0IG5hdkxpbmtzPVt7cGFnZU5hbWU6XCJIb21lXCIscm91dGU6XCIvXCJ9LHtwYWdlTmFtZTpcIkhvbWVcIixyb3V0ZTpcIi9cIn1dO1xuXG5jb25zdCB0b2dnbGVTaWRlQmFyPSgpPT57XG4gc2V0U2lkZWJhcighc2lkZUJhcikgOyBcbi8vICBpZihzaWRlQmFyPT09dHJ1ZSl7XG4vLyAgICBzZXRTaWRlYmFyKGZhbHNlKTtcbi8vICB9ZWxzZSB7XG4vLyAgIHNldFNpZGViYXIodHJ1ZSk7XG4vLyAgfVxuIGNvbnNvbGUubG9nKHNpZGVCYXIpO1xufSBcbiAgICBcbiBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAvL3NpZGViYXIgcHJvcGVydGllc1xuICAgIC8vIGNvbnN0IHNpZGViYXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xuXG4gICAgLy8gaWYoc2lkZUJhcikgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIC8vICAgZWxzZSBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cbiAgICAgIFxuICAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpO1xuICAgIGNvbnN0IHNwb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwb3RcIik7XG5cbiAgICAvL0ludGVyc2VjdGlvbiBvYnNlcnZlclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9IChlbnRyaWVzKSA9PiB7XG4gICAgICBjb25zdCBzcG90SXNWaXNpYmxlID0gZW50cmllc1swXS5pc0ludGVyc2VjdGluZztcbiAgICAgIGlmIChzcG90SXNWaXNpYmxlKSBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZShcInNjcm9sbGVkLW5hdlwiKTtcbiAgICAgIGVsc2UgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGxlZC1uYXZcIik7XG4gICAgfTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgcm9vdDogbnVsbCxcbiAgICAgIHJvb3RNYXJnaW46IFwiMHB4XCIsIFxuICAgICAgdGhyZXNoaG9sZDogMCwgXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihoYW5kbGVTY3JvbGwsIG9wdGlvbnMpO1xuICAgIG9ic2VydmVyLm9ic2VydmUoc3BvdCk7XG4gIH0sW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgZml4ZWQtdG9wIG5hdmJhci1leHBhbmQtbWQgZC1ub25lIGQtc20tbm9uZSBkLW1kLWJsb2NrICBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgIFBTWUNIT1NcbiAgICAgICAgICA8L2E+XG4gICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2IG1lLWF1dG8gbWItMiBtYi1sZy0wXCI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayBhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgIERhc2hib2FyZFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgIFN0YXRpc3RpY3NcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICBNZWRpY2FsXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbSBkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVwiXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICBpZD1cIm5hdmJhckRyb3Bkb3duXCJcbiAgICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENvbnRhY3RzXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiBhcmlhLWxhYmVsbGVkYnk9XCJuYXZiYXJEcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgIEFjdGlvblxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgIEFub3RoZXIgYWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxociBjbGFzcz1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2hyPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICBTb21ldGhpbmcgZWxzZSBoZXJlXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcIlxuICAgICAgICAgICAgICAgICAgY1xuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJuYXZiYXJEcm9wZG93blwiXG4gICAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBFbWVyZ2VuY3lcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIGFyaWEtbGFiZWxsZWRieT1cIm5hdmJhckRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgQWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgQW5vdGhlciBhY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvaHI+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgIFNvbWV0aGluZyBlbHNlIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbSBkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVwiXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICBpZD1cIm5hdmJhckRyb3Bkb3duXCJcbiAgICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIE1vcmVcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIGFyaWEtbGFiZWxsZWRieT1cIm5hdmJhckRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgSG93IFRvXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgRmFjdCBDaGVja1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3M9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9ocj5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgU29tZXRoaW5nIGVsc2UgaGVyZVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJkLWZsZXggc2VhcmNoXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIG1lLTIgc2VhcmNoLWJhclwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2hcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIFwiIHR5cGU9XCJzdWJtaXRcIj48SGlTZWFyY2ggc3R5bGU9e3tjb2xvciA6IFwiZ3JheVwifX0gc2l6ZT17MzB9Lz48L2J1dHRvbj5cblxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcG90IGQtbm9uZSBkLW1kLWJsb2NrIFwiPjwvZGl2PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJkLXNtLWJsb2NrIGQtbWQtbm9uZSBzaWRlbmF2XCIgPjxidXR0b24gY2xhc3NOYW1lPVwidG9nZ2xlLWljb25cIj48SGlNZW51IG9uQ2xpY2s9e3RvZ2dsZVNpZGVCYXIoKX0vPjwvYnV0dG9uPjwvbmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2lkZUJhcj9cImQtc20tYmxvY2sgZC1tZC1ub25lIHNpZGViYXIgYWN0aXZlXCI6XCJkLXNtLWJsb2NrIGQtbWQtbm9uZSBzaWRlYmFyXCJ9IGlkPVwibXlTaWRlYmFyXCIgPlxuXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzZWxlY3RlZFwiPkFib3V0PC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+U2VydmljZXM8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5DbGllbnRzPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Q29udGFjdDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9