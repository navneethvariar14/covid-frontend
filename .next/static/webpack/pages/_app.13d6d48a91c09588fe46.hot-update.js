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
      children: ["Sidenav(navLinks)", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanN4Il0sIm5hbWVzIjpbIk5hdmJhciIsInVzZVN0YXRlIiwic2lkZUJhciIsInNldFNpZGViYXIiLCJuYXZMaW5rcyIsInBhZ2VOYW1lIiwicm91dGUiLCJkcm9wcyIsImRyb3B0aXRsZSIsImRyb3BJdGVtcyIsIk5hdk9wdGlvbnMiLCJtYXAiLCJsaW5rIiwiRHJvcGRvd24iLCJkcm9wIiwiaXRlbSIsIlNpZGVuYXYiLCJvYmplY3RBcnJheSIsIlNpZGVEcm9wRG93biIsImluZGV4IiwidG9nZ2xlU2lkZUJhciIsInVzZUVmZmVjdCIsIm5hdmJhciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNwb3QiLCJoYW5kbGVTY3JvbGwiLCJlbnRyaWVzIiwic3BvdElzVmlzaWJsZSIsImlzSW50ZXJzZWN0aW5nIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwib3B0aW9ucyIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNoaG9sZCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFDREMsK0NBQVEsQ0FBQyxLQUFELENBRFA7QUFBQSxNQUN4QkMsT0FEd0I7QUFBQSxNQUNmQyxVQURlOztBQUcvQixNQUFNQyxRQUFRLEdBQUcsQ0FDZjtBQUFFQyxZQUFRLEVBQUUsTUFBWjtBQUFvQkMsU0FBSyxFQUFFO0FBQTNCLEdBRGUsRUFFZjtBQUFFRCxZQUFRLEVBQUUsWUFBWjtBQUEwQkMsU0FBSyxFQUFFO0FBQWpDLEdBRmUsRUFHZjtBQUFFRCxZQUFRLEVBQUUsU0FBWjtBQUF1QkMsU0FBSyxFQUFFO0FBQTlCLEdBSGUsQ0FBakI7QUFNQSxNQUFNQyxLQUFLLEdBQUcsQ0FDWjtBQUFF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QUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBMEJFO0FBQUssZUFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFCRixlQTJCRTtBQUFLLGVBQVMsRUFBQyw4QkFBZjtBQUFBLDZCQUNFO0FBQVEsaUJBQVMsRUFBQyxhQUFsQjtBQUFBLCtCQUNFLDhEQUFDLGtEQUFEO0FBQ0UsZUFBSyxFQUFFdEMsT0FBTyxJQUFJLE9BRHBCO0FBRUUsaUJBQU8sRUFBRSxtQkFBTTtBQUNia0IseUJBQWE7QUFDZDtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNCRixlQXFDRTtBQUNFLGVBQVMsRUFDUGxCLE9BQU8sR0FDSCxxQ0FERyxHQUVILCtCQUpSO0FBTUUsUUFBRSxFQUFDLFdBTkw7QUFBQSxtREFTRTtBQUFLLGlCQUFNLFdBQVg7QUFBdUIsVUFBRSxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQ0Y7QUFBQSxrQkFERjtBQW1ERDs7R0FuTHVCRixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMTNkNmQ0OGE5MWMwOTU4OGZlNDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgSGlNZW51LCBIaVNlYXJjaCB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGViYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBuYXZMaW5rcyA9IFtcclxuICAgIHsgcGFnZU5hbWU6IFwiSG9tZVwiLCByb3V0ZTogXCIvXCIgfSxcclxuICAgIHsgcGFnZU5hbWU6IFwiU3RhdGlzdGljc1wiLCByb3V0ZTogXCIvU3RhdHNcIiB9LFxyXG4gICAgeyBwYWdlTmFtZTogXCJNZWRpY2FsXCIsIHJvdXRlOiBcIi9tZWRpY2FsXCIgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBkcm9wcyA9IFtcclxuICAgIHsgZHJvcHRpdGxlOiBcIkNvbnRhY3RzXCIsIGRyb3BJdGVtczogW1wiQWN0aW9uXCIsIFwiQW5vdGhlclwiLCBcIllldCBBbm90aGVyXCJdIH0sXHJcbiAgICB7IGRyb3B0aXRsZTogXCJFbWVyZ2VuY3lcIiwgZHJvcEl0ZW1zOiBbXCJBY3Rpb25cIiwgXCJBbm90aGVyXCIsIFwiWWV0IEFub3RoZXJcIl0gfSxcclxuICAgIHsgZHJvcHRpdGxlOiBcIk1vcmVcIiwgZHJvcEl0ZW1zOiBbXCJBY3Rpb25cIiwgXCJBbm90aGVyXCIsIFwiWWV0IEFub3RoZXJcIl0gfSxcclxuICBdO1xyXG5cclxuICBmdW5jdGlvbiBOYXZPcHRpb25zKCkge1xyXG4gICAgcmV0dXJuIG5hdkxpbmtzLm1hcCgobGluaykgPT4gKFxyXG4gICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2xpbmsucm91dGV9PlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayBhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+XHJcbiAgICAgICAgICAgIHtsaW5rLnBhZ2VOYW1lfVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9saT5cclxuICAgICkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gRHJvcGRvd24oKSB7XHJcbiAgICByZXR1cm4gZHJvcHMubWFwKChkcm9wKSA9PiAoXHJcbiAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtIGRyb3Bkb3duXCI+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzPVwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXCJcclxuICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgIGlkPVwibmF2YmFyRHJvcGRvd25cIlxyXG4gICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCJcclxuICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2Ryb3AuZHJvcHRpdGxlfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwibmF2YmFyRHJvcGRvd25cIj5cclxuICAgICAgICAgIHtkcm9wLmRyb3BJdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBTaWRlbmF2KG9iamVjdEFycmF5KSB7XHJcbiAgICByZXR1cm4gb2JqZWN0QXJyYXkubWFwKChsaW5rKSA9PiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge1wiIFwifVxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YT57bGluay5wYWdlTmFtZX08L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gU2lkZURyb3BEb3duKCkge1xyXG4gICAgcmV0dXJuIGRyb3BzLm1hcCgoaW5kZXgsIGRyb3ApID0+IChcclxuICAgICAgPGRpdiBjbGFzcz1cImFjY29yZGlvbi1pdGVtXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzPVwiYWNjb3JkaW9uLWhlYWRlclwiIGlkPVwiaGVhZGluZ09uZVwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzcz1cImFjY29yZGlvbi1idXR0b25cIlxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVwiI2NvbGxhcHNlT25lXCJcclxuICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cInRydWVcIlxyXG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2VPbmVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZHJvcC5kcm9wdGl0bGV9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGlkPXtpbmRleH1cclxuICAgICAgICAgIGNsYXNzPVwiYWNjb3JkaW9uLWNvbGxhcHNlIGNvbGxhcHNlIHNob3dcIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiaGVhZGluZ09uZVwiXHJcbiAgICAgICAgICBkYXRhLWJzLXBhcmVudD1cIiNhY2NvcmRpb25FeGFtcGxlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uLWJvZHlcIj5cclxuICAgICAgICAgICAgPHN0cm9uZz5UaGlzIGlzIHRoZSBmaXJzdCBpdGVtJ3MgYWNjb3JkaW9uIGJvZHkuPC9zdHJvbmc+IEl0IGlzXHJcbiAgICAgICAgICAgIHNob3duIGJ5IGRlZmF1bHQsIHVudGlsIHRoZSBjb2xsYXBzZSBwbHVnaW4gYWRkcyB0aGUgYXBwcm9wcmlhdGVcclxuICAgICAgICAgICAgY2xhc3NlcyB0aGF0IHdlIHVzZSB0byBzdHlsZSBlYWNoIGVsZW1lbnQuIFRoZXNlIGNsYXNzZXMgY29udHJvbCB0aGVcclxuICAgICAgICAgICAgb3ZlcmFsbCBhcHBlYXJhbmNlLCBhcyB3ZWxsIGFzIHRoZSBzaG93aW5nIGFuZCBoaWRpbmcgdmlhIENTU1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9ucy4gWW91IGNhbiBtb2RpZnkgYW55IG9mIHRoaXMgd2l0aCBjdXN0b20gQ1NTIG9yXHJcbiAgICAgICAgICAgIG92ZXJyaWRpbmcgb3VyIGRlZmF1bHQgdmFyaWFibGVzLiBJdCdzIGFsc28gd29ydGggbm90aW5nIHRoYXQganVzdFxyXG4gICAgICAgICAgICBhYm91dCBhbnkgSFRNTCBjYW4gZ28gd2l0aGluIHRoZSA8Y29kZT4uYWNjb3JkaW9uLWJvZHk8L2NvZGU+LFxyXG4gICAgICAgICAgICB0aG91Z2ggdGhlIHRyYW5zaXRpb24gZG9lcyBsaW1pdCBvdmVyZmxvdy5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICkpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdG9nZ2xlU2lkZUJhciA9ICgpID0+IHtcclxuICAgIHNldFNpZGViYXIoIXNpZGVCYXIpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKTtcclxuICAgIGNvbnN0IHNwb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwb3RcIik7XHJcblxyXG4gICAgLy9JbnRlcnNlY3Rpb24gb2JzZXJ2ZXJcclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9IChlbnRyaWVzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNwb3RJc1Zpc2libGUgPSBlbnRyaWVzWzBdLmlzSW50ZXJzZWN0aW5nO1xyXG4gICAgICBpZiAoc3BvdElzVmlzaWJsZSkgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJzY3JvbGxlZC1uYXZcIik7XHJcbiAgICAgIGVsc2UgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGxlZC1uYXZcIik7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgcm9vdDogbnVsbCxcclxuICAgICAgcm9vdE1hcmdpbjogXCIwcHhcIixcclxuICAgICAgdGhyZXNoaG9sZDogMCxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoaGFuZGxlU2Nyb2xsLCBvcHRpb25zKTtcclxuICAgIG9ic2VydmVyLm9ic2VydmUoc3BvdCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPG5hdiBjbGFzcz1cIm5hdmJhciBmaXhlZC10b3AgbmF2YmFyLWV4cGFuZC1tZCBkLW5vbmUgZC1zbS1ub25lIGQtbWQtYmxvY2sgIFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgUFNZQ0hPU1xyXG4gICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2YmFyLW5hdiBtZS1hdXRvIG1iLTIgbWItbGctMFwiPlxyXG4gICAgICAgICAgICAgIDxOYXZPcHRpb25zIC8+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duIC8+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZC1mbGV4IHNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbWUtMiBzZWFyY2gtYmFyXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIFwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgIDxIaVNlYXJjaCBzdHlsZT17eyBjb2xvcjogXCJncmF5XCIgfX0gc2l6ZT17MzB9IC8+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcG90IGQtbm9uZSBkLW1kLWJsb2NrIFwiPjwvZGl2PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImQtc20tYmxvY2sgZC1tZC1ub25lIHNpZGVuYXZcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRvZ2dsZS1pY29uXCI+XHJcbiAgICAgICAgICA8SGlNZW51XHJcbiAgICAgICAgICAgIGNvbG9yPXtzaWRlQmFyICYmIFwid2hpdGVcIn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRvZ2dsZVNpZGVCYXIoKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgIHNpZGVCYXJcclxuICAgICAgICAgICAgPyBcImQtc20tYmxvY2sgZC1tZC1ub25lIHNpZGViYXIgYWN0aXZlXCJcclxuICAgICAgICAgICAgOiBcImQtc20tYmxvY2sgZC1tZC1ub25lIHNpZGViYXIgXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgaWQ9XCJteVNpZGViYXJcIlxyXG4gICAgICA+XHJcbiAgICAgICAgU2lkZW5hdihuYXZMaW5rcylcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uXCIgaWQ9XCJhY2NvcmRpb25FeGFtcGxlXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9