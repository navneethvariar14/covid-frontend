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

  function Sidenav(_ref) {
    var _this3 = this;

    var objectArray = _ref.objectArray;
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
        objectArray: navLinks
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanN4Il0sIm5hbWVzIjpbIk5hdmJhciIsInVzZVN0YXRlIiwic2lkZUJhciIsInNldFNpZGViYXIiLCJuYXZMaW5rcyIsInBhZ2VOYW1lIiwicm91dGUiLCJkcm9wcyIsImRyb3B0aXRsZSIsImRyb3BJdGVtcyIsIk5hdk9wdGlvbnMiLCJtYXAiLCJsaW5rIiwiRHJvcGRvd24iLCJkcm9wIiwiaXRlbSIsIlNpZGVuYXYiLCJvYmplY3RBcnJheSIsIlNpZGVEcm9wRG93biIsImluZGV4IiwidG9nZ2xlU2lkZUJhciIsInVzZUVmZmVjdCIsIm5hdmJhciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNwb3QiLCJoYW5kbGVTY3JvbGwiLCJlbnRyaWVzIiwic3BvdElzVmlzaWJsZSIsImlzSW50ZXJzZWN0aW5nIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwib3B0aW9ucyIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNoaG9sZCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFDREMsK0NBQVEsQ0FBQyxLQUFELENBRFA7QUFBQSxNQUN4QkMsT0FEd0I7QUFBQSxNQUNmQyxVQURlOztBQUcvQixNQUFNQyxRQUFRLEdBQUcsQ0FDZjtBQUFFQyxZQUFRLEVBQUUsTUFBWjtBQUFvQkMsU0FBSyxFQUFFO0FBQTNCLEdBRGUsRUFFZjtBQUFFRCxZQUFRLEVBQUUsWUFBWjtBQUEwQkMsU0FBSyxFQUFFO0FBQWpDLEdBRmUsRUFHZjtBQUFFRCxZQUFRLEVBQUUsU0FBWjtBQUF1QkMsU0FBSyxFQUFFO0FBQTlCLEdBSGUsQ0FBakI7QUFNQSxNQUFNQyxLQUFLLEdBQUcsQ0FDWjtBQUFF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LGtCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUEwQkU7QUFBSyxlQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUJGLGVBMkJFO0FBQUssZUFBUyxFQUFDLDhCQUFmO0FBQUEsNkJBQ0U7QUFBUSxpQkFBUyxFQUFDLGFBQWxCO0FBQUEsK0JBQ0UsOERBQUMsa0RBQUQ7QUFDRSxlQUFLLEVBQUV0QyxPQUFPLElBQUksT0FEcEI7QUFFRSxpQkFBTyxFQUFFLG1CQUFNO0FBQ2JrQix5QkFBYTtBQUNkO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0JGLGVBcUNFO0FBQ0UsZUFBUyxFQUNQbEIsT0FBTyxHQUNILHFDQURHLEdBRUgsK0JBSlI7QUFNRSxRQUFFLEVBQUMsV0FOTDtBQUFBLDhCQVFFLDhEQUFDLE9BQUQ7QUFBUyxtQkFBVyxFQUFFRTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkYsZUFTRTtBQUFLLGlCQUFNLFdBQVg7QUFBdUIsVUFBRSxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQ0Y7QUFBQSxrQkFERjtBQW1ERDs7R0FuTHVCSixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuODA3MTUzMDJiYTI3Y2MzNWZhMjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgSGlNZW51LCBIaVNlYXJjaCB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGViYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBuYXZMaW5rcyA9IFtcclxuICAgIHsgcGFnZU5hbWU6IFwiSG9tZVwiLCByb3V0ZTogXCIvXCIgfSxcclxuICAgIHsgcGFnZU5hbWU6IFwiU3RhdGlzdGljc1wiLCByb3V0ZTogXCIvU3RhdHNcIiB9LFxyXG4gICAgeyBwYWdlTmFtZTogXCJNZWRpY2FsXCIsIHJvdXRlOiBcIi9tZWRpY2FsXCIgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBkcm9wcyA9IFtcclxuICAgIHsgZHJvcHRpdGxlOiBcIkNvbnRhY3RzXCIsIGRyb3BJdGVtczogW1wiQWN0aW9uXCIsIFwiQW5vdGhlclwiLCBcIllldCBBbm90aGVyXCJdIH0sXHJcbiAgICB7IGRyb3B0aXRsZTogXCJFbWVyZ2VuY3lcIiwgZHJvcEl0ZW1zOiBbXCJBY3Rpb25cIiwgXCJBbm90aGVyXCIsIFwiWWV0IEFub3RoZXJcIl0gfSxcclxuICAgIHsgZHJvcHRpdGxlOiBcIk1vcmVcIiwgZHJvcEl0ZW1zOiBbXCJBY3Rpb25cIiwgXCJBbm90aGVyXCIsIFwiWWV0IEFub3RoZXJcIl0gfSxcclxuICBdO1xyXG5cclxuICBmdW5jdGlvbiBOYXZPcHRpb25zKCkge1xyXG4gICAgcmV0dXJuIG5hdkxpbmtzLm1hcCgobGluaykgPT4gKFxyXG4gICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2xpbmsucm91dGV9PlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayBhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+XHJcbiAgICAgICAgICAgIHtsaW5rLnBhZ2VOYW1lfVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9saT5cclxuICAgICkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gRHJvcGRvd24oKSB7XHJcbiAgICByZXR1cm4gZHJvcHMubWFwKChkcm9wKSA9PiAoXHJcbiAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtIGRyb3Bkb3duXCI+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzPVwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXCJcclxuICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgIGlkPVwibmF2YmFyRHJvcGRvd25cIlxyXG4gICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCJcclxuICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2Ryb3AuZHJvcHRpdGxlfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwibmF2YmFyRHJvcGRvd25cIj5cclxuICAgICAgICAgIHtkcm9wLmRyb3BJdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBTaWRlbmF2KHsgb2JqZWN0QXJyYXkgfSkge1xyXG4gICAgcmV0dXJuIG9iamVjdEFycmF5Lm1hcCgobGluaykgPT4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtcIiBcIn1cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGE+e2xpbmsucGFnZU5hbWV9PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFNpZGVEcm9wRG93bigpIHtcclxuICAgIHJldHVybiBkcm9wcy5tYXAoKGluZGV4LCBkcm9wKSA9PiAoXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhY2NvcmRpb24taXRlbVwiPlxyXG4gICAgICAgIDxoMiBjbGFzcz1cImFjY29yZGlvbi1oZWFkZXJcIiBpZD1cImhlYWRpbmdPbmVcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3M9XCJhY2NvcmRpb24tYnV0dG9uXCJcclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNjb2xsYXBzZU9uZVwiXHJcbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJcclxuICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImNvbGxhcHNlT25lXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2Ryb3AuZHJvcHRpdGxlfVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBpZD17aW5kZXh9XHJcbiAgICAgICAgICBjbGFzcz1cImFjY29yZGlvbi1jb2xsYXBzZSBjb2xsYXBzZSBzaG93XCJcclxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImhlYWRpbmdPbmVcIlxyXG4gICAgICAgICAgZGF0YS1icy1wYXJlbnQ9XCIjYWNjb3JkaW9uRXhhbXBsZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFjY29yZGlvbi1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+VGhpcyBpcyB0aGUgZmlyc3QgaXRlbSdzIGFjY29yZGlvbiBib2R5Ljwvc3Ryb25nPiBJdCBpc1xyXG4gICAgICAgICAgICBzaG93biBieSBkZWZhdWx0LCB1bnRpbCB0aGUgY29sbGFwc2UgcGx1Z2luIGFkZHMgdGhlIGFwcHJvcHJpYXRlXHJcbiAgICAgICAgICAgIGNsYXNzZXMgdGhhdCB3ZSB1c2UgdG8gc3R5bGUgZWFjaCBlbGVtZW50LiBUaGVzZSBjbGFzc2VzIGNvbnRyb2wgdGhlXHJcbiAgICAgICAgICAgIG92ZXJhbGwgYXBwZWFyYW5jZSwgYXMgd2VsbCBhcyB0aGUgc2hvd2luZyBhbmQgaGlkaW5nIHZpYSBDU1NcclxuICAgICAgICAgICAgdHJhbnNpdGlvbnMuIFlvdSBjYW4gbW9kaWZ5IGFueSBvZiB0aGlzIHdpdGggY3VzdG9tIENTUyBvclxyXG4gICAgICAgICAgICBvdmVycmlkaW5nIG91ciBkZWZhdWx0IHZhcmlhYmxlcy4gSXQncyBhbHNvIHdvcnRoIG5vdGluZyB0aGF0IGp1c3RcclxuICAgICAgICAgICAgYWJvdXQgYW55IEhUTUwgY2FuIGdvIHdpdGhpbiB0aGUgPGNvZGU+LmFjY29yZGlvbi1ib2R5PC9jb2RlPixcclxuICAgICAgICAgICAgdGhvdWdoIHRoZSB0cmFuc2l0aW9uIGRvZXMgbGltaXQgb3ZlcmZsb3cuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNpZGVCYXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWRlYmFyKCFzaWRlQmFyKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIik7XHJcbiAgICBjb25zdCBzcG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcG90XCIpO1xyXG5cclxuICAgIC8vSW50ZXJzZWN0aW9uIG9ic2VydmVyXHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoZW50cmllcykgPT4ge1xyXG4gICAgICBjb25zdCBzcG90SXNWaXNpYmxlID0gZW50cmllc1swXS5pc0ludGVyc2VjdGluZztcclxuICAgICAgaWYgKHNwb3RJc1Zpc2libGUpIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwic2Nyb2xsZWQtbmF2XCIpO1xyXG4gICAgICBlbHNlIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsZWQtbmF2XCIpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIHJvb3Q6IG51bGwsXHJcbiAgICAgIHJvb3RNYXJnaW46IFwiMHB4XCIsXHJcbiAgICAgIHRocmVzaGhvbGQ6IDAsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGhhbmRsZVNjcm9sbCwgb3B0aW9ucyk7XHJcbiAgICBvYnNlcnZlci5vYnNlcnZlKHNwb3QpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgZml4ZWQtdG9wIG5hdmJhci1leHBhbmQtbWQgZC1ub25lIGQtc20tbm9uZSBkLW1kLWJsb2NrICBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIFBTWUNIT1NcclxuICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdmJhci1uYXYgbWUtYXV0byBtYi0yIG1iLWxnLTBcIj5cclxuICAgICAgICAgICAgICA8TmF2T3B0aW9ucyAvPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93biAvPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImQtZmxleCBzZWFyY2hcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIG1lLTIgc2VhcmNoLWJhclwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICA8SGlTZWFyY2ggc3R5bGU9e3sgY29sb3I6IFwiZ3JheVwiIH19IHNpemU9ezMwfSAvPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BvdCBkLW5vbmUgZC1tZC1ibG9jayBcIj48L2Rpdj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJkLXNtLWJsb2NrIGQtbWQtbm9uZSBzaWRlbmF2XCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0b2dnbGUtaWNvblwiPlxyXG4gICAgICAgICAgPEhpTWVudVxyXG4gICAgICAgICAgICBjb2xvcj17c2lkZUJhciAmJiBcIndoaXRlXCJ9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICB0b2dnbGVTaWRlQmFyKCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L25hdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICBzaWRlQmFyXHJcbiAgICAgICAgICAgID8gXCJkLXNtLWJsb2NrIGQtbWQtbm9uZSBzaWRlYmFyIGFjdGl2ZVwiXHJcbiAgICAgICAgICAgIDogXCJkLXNtLWJsb2NrIGQtbWQtbm9uZSBzaWRlYmFyIFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlkPVwibXlTaWRlYmFyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxTaWRlbmF2IG9iamVjdEFycmF5PXtuYXZMaW5rc30gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uXCIgaWQ9XCJhY2NvcmRpb25FeGFtcGxlXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9