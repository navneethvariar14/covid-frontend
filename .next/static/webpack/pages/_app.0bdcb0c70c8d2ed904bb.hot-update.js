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
    dropItems: [{
      pageName: "Action",
      route: "#"
    }, {
      pageName: "Another",
      route: "#"
    }, {
      pageName: "Yet Another",
      route: "#"
    }]
  }, {
    droptitle: "Emergency",
    dropItems: [{
      pageName: "Action",
      route: "#"
    }, {
      pageName: "Another",
      route: "#"
    }, {
      pageName: "Yet Another",
      route: "#"
    }]
  }, {
    droptitle: "More",
    dropItems: [{
      pageName: "Action",
      route: "#"
    }, {
      pageName: "Another",
      route: "#"
    }, {
      pageName: "Yet Another",
      route: "#"
    }]
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
            lineNumber: 44,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
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
          lineNumber: 55,
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
                  children: item.pageName
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 19
                }, _this2)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 17
              }, _this2)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, _this2);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 9
        }, _this2)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
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
            lineNumber: 87,
            columnNumber: 11
          }, _this3)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 9
        }, _this3)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
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
            lineNumber: 97,
            columnNumber: 11
          }, _this4)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
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
            lineNumber: 114,
            columnNumber: 11
          }, _this4)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 9
        }, _this4)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
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
          lineNumber: 148,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "collapse navbar-collapse",
          id: "navbarSupportedContent",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            "class": "navbar-nav me-auto mb-2 mb-lg-0",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavOptions, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Dropdown, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 153,
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
              lineNumber: 158,
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
                lineNumber: 165,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "spot d-none d-md-block "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 171,
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
          lineNumber: 174,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: sideBar ? "d-sm-block d-md-none sidebar active" : "d-sm-block d-md-none sidebar ",
      id: "mySidebar",
      children: [Sidenav(navLinks), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "accordion",
        id: "accordionExample",
        children: SideDropDown()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 182,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanN4Il0sIm5hbWVzIjpbIk5hdmJhciIsInVzZVN0YXRlIiwic2lkZUJhciIsInNldFNpZGViYXIiLCJuYXZMaW5rcyIsInBhZ2VOYW1lIiwicm91dGUiLCJkcm9wcyIsImRyb3B0aXRsZSIsImRyb3BJdGVtcyIsIk5hdk9wdGlvbnMiLCJtYXAiLCJsaW5rIiwiRHJvcGRvd24iLCJkcm9wIiwiaXRlbSIsIlNpZGVuYXYiLCJvYmplY3RBcnJheSIsIlNpZGVEcm9wRG93biIsImluZGV4IiwidG9nZ2xlU2lkZUJhciIsInVzZUVmZmVjdCIsIm5hdmJhciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNwb3QiLCJoYW5kbGVTY3JvbGwiLCJlbnRyaWVzIiwic3BvdElzVmlzaWJsZSIsImlzSW50ZXJzZWN0aW5nIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwib3B0aW9ucyIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNoaG9sZCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFDREMsK0NBQVEsQ0FBQyxLQUFELENBRFA7QUFBQSxNQUN4QkMsT0FEd0I7QUFBQSxNQUNmQyxVQURlOztBQUcvQixNQUFNQyxRQUFRLEdBQUcsQ0FDZjtBQUFFQyxZQUFRLEVBQUUsTUFBWjtBQUFvQkMsU0FBSyxFQUFFO0FBQTNCLEdBRGUsRUFFZjtBQUFFRCxZQUFRLEVBQUUsWUFBWjtBQUEwQkMsU0FBSyxFQUFFO0FBQWpDLEdBRmUsRUFHZjtBQUFFRCxZQUFRLEVBQUUsU0FBWjtBQUF1QkMsU0FBSyxFQUFFO0FBQTlCLEdBSGUsQ0FBakI7QUFNQSxNQUFNQyxLQUFLLEdBQUcsQ0FDWjtBQUNF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QUFBQSxjQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJDRjtBQUFBLGtCQURGO0FBcUREOztHQWpNdUJsQixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMGJkY2IwYzcwYzhkMmVkOTA0YmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgSGlNZW51LCBIaVNlYXJjaCB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGViYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBuYXZMaW5rcyA9IFtcclxuICAgIHsgcGFnZU5hbWU6IFwiSG9tZVwiLCByb3V0ZTogXCIvXCIgfSxcclxuICAgIHsgcGFnZU5hbWU6IFwiU3RhdGlzdGljc1wiLCByb3V0ZTogXCIvU3RhdHNcIiB9LFxyXG4gICAgeyBwYWdlTmFtZTogXCJNZWRpY2FsXCIsIHJvdXRlOiBcIi9tZWRpY2FsXCIgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBkcm9wcyA9IFtcclxuICAgIHtcclxuICAgICAgZHJvcHRpdGxlOiBcIkNvbnRhY3RzXCIsXHJcbiAgICAgIGRyb3BJdGVtczogW1xyXG4gICAgICAgIHsgcGFnZU5hbWU6IFwiQWN0aW9uXCIsIHJvdXRlOiBcIiNcIiB9LFxyXG4gICAgICAgIHsgcGFnZU5hbWU6IFwiQW5vdGhlclwiLCByb3V0ZTogXCIjXCIgfSxcclxuICAgICAgICB7IHBhZ2VOYW1lOiBcIllldCBBbm90aGVyXCIsIHJvdXRlOiBcIiNcIiB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZHJvcHRpdGxlOiBcIkVtZXJnZW5jeVwiLFxyXG4gICAgICBkcm9wSXRlbXM6IFtcclxuICAgICAgICB7IHBhZ2VOYW1lOiBcIkFjdGlvblwiLCByb3V0ZTogXCIjXCIgfSxcclxuICAgICAgICB7IHBhZ2VOYW1lOiBcIkFub3RoZXJcIiwgcm91dGU6IFwiI1wiIH0sXHJcbiAgICAgICAgeyBwYWdlTmFtZTogXCJZZXQgQW5vdGhlclwiLCByb3V0ZTogXCIjXCIgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGRyb3B0aXRsZTogXCJNb3JlXCIsXHJcbiAgICAgIGRyb3BJdGVtczogW1xyXG4gICAgICAgIHsgcGFnZU5hbWU6IFwiQWN0aW9uXCIsIHJvdXRlOiBcIiNcIiB9LFxyXG4gICAgICAgIHsgcGFnZU5hbWU6IFwiQW5vdGhlclwiLCByb3V0ZTogXCIjXCIgfSxcclxuICAgICAgICB7IHBhZ2VOYW1lOiBcIllldCBBbm90aGVyXCIsIHJvdXRlOiBcIiNcIiB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBmdW5jdGlvbiBOYXZPcHRpb25zKCkge1xyXG4gICAgcmV0dXJuIG5hdkxpbmtzLm1hcCgobGluaykgPT4gKFxyXG4gICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2xpbmsucm91dGV9PlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayBhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+XHJcbiAgICAgICAgICAgIHtsaW5rLnBhZ2VOYW1lfVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9saT5cclxuICAgICkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gRHJvcGRvd24oKSB7XHJcbiAgICByZXR1cm4gZHJvcHMubWFwKChkcm9wKSA9PiAoXHJcbiAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtIGRyb3Bkb3duXCI+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzPVwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXCJcclxuICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgIGlkPVwibmF2YmFyRHJvcGRvd25cIlxyXG4gICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCJcclxuICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2Ryb3AuZHJvcHRpdGxlfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwibmF2YmFyRHJvcGRvd25cIj5cclxuICAgICAgICAgIHtkcm9wLmRyb3BJdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5wYWdlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBTaWRlbmF2KG9iamVjdEFycmF5KSB7XHJcbiAgICByZXR1cm4gb2JqZWN0QXJyYXkubWFwKChsaW5rKSA9PiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge1wiIFwifVxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YT57bGluay5wYWdlTmFtZX08L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gU2lkZURyb3BEb3duKCkge1xyXG4gICAgcmV0dXJuIGRyb3BzLm1hcCgoaW5kZXgsIGRyb3ApID0+IChcclxuICAgICAgPGRpdiBjbGFzcz1cImFjY29yZGlvbi1pdGVtXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzPVwiYWNjb3JkaW9uLWhlYWRlclwiIGlkPVwiaGVhZGluZ09uZVwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzcz1cImFjY29yZGlvbi1idXR0b25cIlxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVwiI2NvbGxhcHNlT25lXCJcclxuICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cInRydWVcIlxyXG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2VPbmVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZHJvcC5kcm9wdGl0bGV9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGlkPXtpbmRleH1cclxuICAgICAgICAgIGNsYXNzPVwiYWNjb3JkaW9uLWNvbGxhcHNlIGNvbGxhcHNlIHNob3dcIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiaGVhZGluZ09uZVwiXHJcbiAgICAgICAgICBkYXRhLWJzLXBhcmVudD1cIiNhY2NvcmRpb25FeGFtcGxlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uLWJvZHlcIj57U2lkZW5hdihkcm9wLmRyb3BJdGVtcyl9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0b2dnbGVTaWRlQmFyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lkZWJhcighc2lkZUJhcik7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpO1xyXG4gICAgY29uc3Qgc3BvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3BvdFwiKTtcclxuXHJcbiAgICAvL0ludGVyc2VjdGlvbiBvYnNlcnZlclxyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKGVudHJpZXMpID0+IHtcclxuICAgICAgY29uc3Qgc3BvdElzVmlzaWJsZSA9IGVudHJpZXNbMF0uaXNJbnRlcnNlY3Rpbmc7XHJcbiAgICAgIGlmIChzcG90SXNWaXNpYmxlKSBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZShcInNjcm9sbGVkLW5hdlwiKTtcclxuICAgICAgZWxzZSBuYXZiYXIuY2xhc3NMaXN0LmFkZChcInNjcm9sbGVkLW5hdlwiKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICByb290OiBudWxsLFxyXG4gICAgICByb290TWFyZ2luOiBcIjBweFwiLFxyXG4gICAgICB0aHJlc2hob2xkOiAwLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihoYW5kbGVTY3JvbGwsIG9wdGlvbnMpO1xyXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShzcG90KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8bmF2IGNsYXNzPVwibmF2YmFyIGZpeGVkLXRvcCBuYXZiYXItZXhwYW5kLW1kIGQtbm9uZSBkLXNtLW5vbmUgZC1tZC1ibG9jayAgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBQU1lDSE9TXHJcbiAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2IG1lLWF1dG8gbWItMiBtYi1sZy0wXCI+XHJcbiAgICAgICAgICAgICAgPE5hdk9wdGlvbnMgLz5cclxuICAgICAgICAgICAgICA8RHJvcGRvd24gLz5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJkLWZsZXggc2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBtZS0yIHNlYXJjaC1iYXJcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgPEhpU2VhcmNoIHN0eWxlPXt7IGNvbG9yOiBcImdyYXlcIiB9fSBzaXplPXszMH0gLz5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwb3QgZC1ub25lIGQtbWQtYmxvY2sgXCI+PC9kaXY+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZC1zbS1ibG9jayBkLW1kLW5vbmUgc2lkZW5hdlwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidG9nZ2xlLWljb25cIj5cclxuICAgICAgICAgIDxIaU1lbnVcclxuICAgICAgICAgICAgY29sb3I9e3NpZGVCYXIgJiYgXCJ3aGl0ZVwifVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdG9nZ2xlU2lkZUJhcigpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9uYXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgc2lkZUJhclxyXG4gICAgICAgICAgICA/IFwiZC1zbS1ibG9jayBkLW1kLW5vbmUgc2lkZWJhciBhY3RpdmVcIlxyXG4gICAgICAgICAgICA6IFwiZC1zbS1ibG9jayBkLW1kLW5vbmUgc2lkZWJhciBcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZD1cIm15U2lkZWJhclwiXHJcbiAgICAgID5cclxuICAgICAgICB7U2lkZW5hdihuYXZMaW5rcyl9XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFjY29yZGlvblwiIGlkPVwiYWNjb3JkaW9uRXhhbXBsZVwiPlxyXG4gICAgICAgICAge1NpZGVEcm9wRG93bigpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==