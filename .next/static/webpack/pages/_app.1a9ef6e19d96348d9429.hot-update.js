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

    return objectArray.map(function (link) {
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
            children: Sidenav(drop.dropItems)
          }, void 0, false, {
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
          lineNumber: 127,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "collapse navbar-collapse",
          id: "navbarSupportedContent",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            "class": "navbar-nav me-auto mb-2 mb-lg-0",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavOptions, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Dropdown, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 132,
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
              lineNumber: 137,
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
                lineNumber: 144,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "spot d-none d-md-block "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 150,
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
          lineNumber: 153,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: sideBar ? "d-sm-block d-md-none sidebar active" : "d-sm-block d-md-none sidebar ",
      id: "mySidebar",
      children: [Sidenav(navLinks), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "accordion",
        id: "accordionExample"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 161,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanN4Il0sIm5hbWVzIjpbIk5hdmJhciIsInVzZVN0YXRlIiwic2lkZUJhciIsInNldFNpZGViYXIiLCJuYXZMaW5rcyIsInBhZ2VOYW1lIiwicm91dGUiLCJkcm9wcyIsImRyb3B0aXRsZSIsImRyb3BJdGVtcyIsIk5hdk9wdGlvbnMiLCJtYXAiLCJsaW5rIiwiRHJvcGRvd24iLCJkcm9wIiwiaXRlbSIsIlNpZGVuYXYiLCJvYmplY3RBcnJheSIsIlNpZGVEcm9wRG93biIsImluZGV4IiwidG9nZ2xlU2lkZUJhciIsInVzZUVmZmVjdCIsIm5hdmJhciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNwb3QiLCJoYW5kbGVTY3JvbGwiLCJlbnRyaWVzIiwic3BvdElzVmlzaWJsZSIsImlzSW50ZXJzZWN0aW5nIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwib3B0aW9ucyIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNoaG9sZCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFDREMsK0NBQVEsQ0FBQyxLQUFELENBRFA7QUFBQSxNQUN4QkMsT0FEd0I7QUFBQSxNQUNmQyxVQURlOztBQUcvQixNQUFNQyxRQUFRLEdBQUcsQ0FDZjtBQUFFQyxZQUFRLEVBQUUsTUFBWjtBQUFvQkMsU0FBSyxFQUFFO0FBQTNCLEdBRGUsRUFFZjtBQUFFRCxZQUFRLEVBQUUsWUFBWjtBQUEwQkMsU0FBSyxFQUFFO0FBQWpDLEdBRmUsRUFHZjtBQUFFRCxZQUFRLEVBQUUsU0FBWjtBQUF1QkMsU0FBSyxFQUFFO0FBQTlCLEdBSGUsQ0FBakI7QUFNQSxNQUFNQyxLQUFLLEdBQUcsQ0FDWjtBQUFF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QURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQTBCRTtBQUFLLGVBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQkYsZUEyQkU7QUFBSyxlQUFTLEVBQUMsOEJBQWY7QUFBQSw2QkFDRTtBQUFRLGlCQUFTLEVBQUMsYUFBbEI7QUFBQSwrQkFDRSw4REFBQyxrREFBRDtBQUNFLGVBQUssRUFBRXRDLE9BQU8sSUFBSSxPQURwQjtBQUVFLGlCQUFPLEVBQUUsbUJBQU07QUFDYmtCLHlCQUFhO0FBQ2Q7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEzQkYsZUFxQ0U7QUFDRSxlQUFTLEVBQ1BsQixPQUFPLEdBQ0gscUNBREcsR0FFSCwrQkFKUjtBQU1FLFFBQUUsRUFBQyxXQU5MO0FBQUEsaUJBUUdjLE9BQU8sQ0FBQ1osUUFBRCxDQVJWLGVBU0U7QUFBSyxpQkFBTSxXQUFYO0FBQXVCLFVBQUUsRUFBQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckNGO0FBQUEsa0JBREY7QUFtREQ7O0dBMUt1QkosTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjFhOWVmNmUxOWQ5NjM0OGQ5NDI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEhpTWVudSwgSGlTZWFyY2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvaGlcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIGNvbnN0IFtzaWRlQmFyLCBzZXRTaWRlYmFyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgbmF2TGlua3MgPSBbXHJcbiAgICB7IHBhZ2VOYW1lOiBcIkhvbWVcIiwgcm91dGU6IFwiL1wiIH0sXHJcbiAgICB7IHBhZ2VOYW1lOiBcIlN0YXRpc3RpY3NcIiwgcm91dGU6IFwiL1N0YXRzXCIgfSxcclxuICAgIHsgcGFnZU5hbWU6IFwiTWVkaWNhbFwiLCByb3V0ZTogXCIvbWVkaWNhbFwiIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgZHJvcHMgPSBbXHJcbiAgICB7IGRyb3B0aXRsZTogXCJDb250YWN0c1wiLCBkcm9wSXRlbXM6IFtcIkFjdGlvblwiLCBcIkFub3RoZXJcIiwgXCJZZXQgQW5vdGhlclwiXSB9LFxyXG4gICAgeyBkcm9wdGl0bGU6IFwiRW1lcmdlbmN5XCIsIGRyb3BJdGVtczogW1wiQWN0aW9uXCIsIFwiQW5vdGhlclwiLCBcIllldCBBbm90aGVyXCJdIH0sXHJcbiAgICB7IGRyb3B0aXRsZTogXCJNb3JlXCIsIGRyb3BJdGVtczogW1wiQWN0aW9uXCIsIFwiQW5vdGhlclwiLCBcIllldCBBbm90aGVyXCJdIH0sXHJcbiAgXTtcclxuXHJcbiAgZnVuY3Rpb24gTmF2T3B0aW9ucygpIHtcclxuICAgIHJldHVybiBuYXZMaW5rcy5tYXAoKGxpbmspID0+IChcclxuICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICA8TGluayBocmVmPXtsaW5rLnJvdXRlfT5cclxuICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgYWN0aXZlXCIgYXJpYS1jdXJyZW50PVwicGFnZVwiPlxyXG4gICAgICAgICAgICB7bGluay5wYWdlTmFtZX1cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICApKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIERyb3Bkb3duKCkge1xyXG4gICAgcmV0dXJuIGRyb3BzLm1hcCgoZHJvcCkgPT4gKFxyXG4gICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbSBkcm9wZG93blwiPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBjbGFzcz1cIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVwiXHJcbiAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICBpZD1cIm5hdmJhckRyb3Bkb3duXCJcclxuICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiXHJcbiAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtkcm9wLmRyb3B0aXRsZX1cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIGFyaWEtbGFiZWxsZWRieT1cIm5hdmJhckRyb3Bkb3duXCI+XHJcbiAgICAgICAgICB7ZHJvcC5kcm9wSXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9saT5cclxuICAgICkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gU2lkZW5hdihvYmplY3RBcnJheSkge1xyXG4gICAgcmV0dXJuIG9iamVjdEFycmF5Lm1hcCgobGluaykgPT4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtcIiBcIn1cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGE+e2xpbmsucGFnZU5hbWV9PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFNpZGVEcm9wRG93bigpIHtcclxuICAgIHJldHVybiBkcm9wcy5tYXAoKGluZGV4LCBkcm9wKSA9PiAoXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhY2NvcmRpb24taXRlbVwiPlxyXG4gICAgICAgIDxoMiBjbGFzcz1cImFjY29yZGlvbi1oZWFkZXJcIiBpZD1cImhlYWRpbmdPbmVcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3M9XCJhY2NvcmRpb24tYnV0dG9uXCJcclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNjb2xsYXBzZU9uZVwiXHJcbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJcclxuICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImNvbGxhcHNlT25lXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2Ryb3AuZHJvcHRpdGxlfVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBpZD17aW5kZXh9XHJcbiAgICAgICAgICBjbGFzcz1cImFjY29yZGlvbi1jb2xsYXBzZSBjb2xsYXBzZSBzaG93XCJcclxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImhlYWRpbmdPbmVcIlxyXG4gICAgICAgICAgZGF0YS1icy1wYXJlbnQ9XCIjYWNjb3JkaW9uRXhhbXBsZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFjY29yZGlvbi1ib2R5XCI+e1NpZGVuYXYoZHJvcC5kcm9wSXRlbXMpfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICkpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdG9nZ2xlU2lkZUJhciA9ICgpID0+IHtcclxuICAgIHNldFNpZGViYXIoIXNpZGVCYXIpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKTtcclxuICAgIGNvbnN0IHNwb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwb3RcIik7XHJcblxyXG4gICAgLy9JbnRlcnNlY3Rpb24gb2JzZXJ2ZXJcclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9IChlbnRyaWVzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNwb3RJc1Zpc2libGUgPSBlbnRyaWVzWzBdLmlzSW50ZXJzZWN0aW5nO1xyXG4gICAgICBpZiAoc3BvdElzVmlzaWJsZSkgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJzY3JvbGxlZC1uYXZcIik7XHJcbiAgICAgIGVsc2UgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGxlZC1uYXZcIik7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgcm9vdDogbnVsbCxcclxuICAgICAgcm9vdE1hcmdpbjogXCIwcHhcIixcclxuICAgICAgdGhyZXNoaG9sZDogMCxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoaGFuZGxlU2Nyb2xsLCBvcHRpb25zKTtcclxuICAgIG9ic2VydmVyLm9ic2VydmUoc3BvdCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPG5hdiBjbGFzcz1cIm5hdmJhciBmaXhlZC10b3AgbmF2YmFyLWV4cGFuZC1tZCBkLW5vbmUgZC1zbS1ub25lIGQtbWQtYmxvY2sgIFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgUFNZQ0hPU1xyXG4gICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2YmFyLW5hdiBtZS1hdXRvIG1iLTIgbWItbGctMFwiPlxyXG4gICAgICAgICAgICAgIDxOYXZPcHRpb25zIC8+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duIC8+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZC1mbGV4IHNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbWUtMiBzZWFyY2gtYmFyXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIFwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgIDxIaVNlYXJjaCBzdHlsZT17eyBjb2xvcjogXCJncmF5XCIgfX0gc2l6ZT17MzB9IC8+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcG90IGQtbm9uZSBkLW1kLWJsb2NrIFwiPjwvZGl2PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImQtc20tYmxvY2sgZC1tZC1ub25lIHNpZGVuYXZcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRvZ2dsZS1pY29uXCI+XHJcbiAgICAgICAgICA8SGlNZW51XHJcbiAgICAgICAgICAgIGNvbG9yPXtzaWRlQmFyICYmIFwid2hpdGVcIn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRvZ2dsZVNpZGVCYXIoKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgIHNpZGVCYXJcclxuICAgICAgICAgICAgPyBcImQtc20tYmxvY2sgZC1tZC1ub25lIHNpZGViYXIgYWN0aXZlXCJcclxuICAgICAgICAgICAgOiBcImQtc20tYmxvY2sgZC1tZC1ub25lIHNpZGViYXIgXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgaWQ9XCJteVNpZGViYXJcIlxyXG4gICAgICA+XHJcbiAgICAgICAge1NpZGVuYXYobmF2TGlua3MpfVxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhY2NvcmRpb25cIiBpZD1cImFjY29yZGlvbkV4YW1wbGVcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=