"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/PostFeed.js":
/*!********************************!*\
  !*** ./components/PostFeed.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostFeed; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction PostFeed(param) {\n    var posts = param.posts, admin = param.admin;\n    var _this = this;\n    return posts ? posts.map(function(post) {\n        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PostItem, {\n            post: post,\n            admin: admin,\n            __source: {\n                fileName: \"/Users/l-mobile/Documents/GitHub/Devtora/components/PostFeed.js\",\n                lineNumber: 6\n            },\n            __self: _this\n        }, post.slug);\n    }) : null;\n};\n_c = PostFeed;\nfunction PostItem(param) {\n    var post = param.post, _admin = param.admin, admin = _admin === void 0 ? false : _admin;\n    // Naive method to calc word count and read time\n    var wordCount = post === null || post === void 0 ? void 0 : post.content.trim().split(/\\s+/g).length;\n    var minutesToRead = (wordCount / 100 + 1).toFixed(0);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"card\",\n        __source: {\n            fileName: \"/Users/l-mobile/Documents/GitHub/Devtora/components/PostFeed.js\",\n            lineNumber: 17\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\".concat(post.username, \"/\").concat(post.slug),\n                __source: {\n                    fileName: \"/Users/l-mobile/Documents/GitHub/Devtora/components/PostFeed.js\",\n                    lineNumber: 18\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                    __source: {\n                        fileName: \"/Users/l-mobile/Documents/GitHub/Devtora/components/PostFeed.js\",\n                        lineNumber: 19\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        __source: {\n                            fileName: \"/Users/l-mobile/Documents/GitHub/Devtora/components/PostFeed.js\",\n                            lineNumber: 20\n                        },\n                        __self: this,\n                        children: post.title\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\".concat(post.username),\n                __source: {\n                    fileName: \"/Users/l-mobile/Documents/GitHub/Devtora/components/PostFeed.js\",\n                    lineNumber: 24\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                    __source: {\n                        fileName: \"/Users/l-mobile/Documents/GitHub/Devtora/components/PostFeed.js\",\n                        lineNumber: 25\n                    },\n                    __self: this,\n                    children: [\n                        \"By \",\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"strong\", {\n                            __source: {\n                                fileName: \"/Users/l-mobile/Documents/GitHub/Devtora/components/PostFeed.js\",\n                                lineNumber: 26\n                            },\n                            __self: this,\n                            children: [\n                                \"@\",\n                                post.username\n                            ]\n                        })\n                    ]\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"footer\", {\n                __source: {\n                    fileName: \"/Users/l-mobile/Documents/GitHub/Devtora/components/PostFeed.js\",\n                    lineNumber: 30\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                        __source: {\n                            fileName: \"/Users/l-mobile/Documents/GitHub/Devtora/components/PostFeed.js\",\n                            lineNumber: 31\n                        },\n                        __self: this,\n                        children: [\n                            wordCount,\n                            \" words. \",\n                            minutesToRead,\n                            \" min read\"\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                        className: \"push-left\",\n                        __source: {\n                            fileName: \"/Users/l-mobile/Documents/GitHub/Devtora/components/PostFeed.js\",\n                            lineNumber: 34\n                        },\n                        __self: this,\n                        children: [\n                            \"💗 \",\n                            post.heartCount || 0,\n                            \" Hearts\"\n                        ]\n                    })\n                ]\n            }),\n            admin && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/admin/\".concat(post.slug),\n                        __source: {\n                            fileName: \"/Users/l-mobile/Documents/GitHub/Devtora/components/PostFeed.js\",\n                            lineNumber: 40\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                            __source: {\n                                fileName: \"/Users/l-mobile/Documents/GitHub/Devtora/components/PostFeed.js\",\n                                lineNumber: 41\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                className: \"btn-blue\",\n                                __source: {\n                                    fileName: \"/Users/l-mobile/Documents/GitHub/Devtora/components/PostFeed.js\",\n                                    lineNumber: 42\n                                },\n                                __self: this,\n                                children: \"Edit\"\n                            })\n                        })\n                    }),\n                    post.published ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        className: \"text-success\",\n                        __source: {\n                            fileName: \"/Users/l-mobile/Documents/GitHub/Devtora/components/PostFeed.js\",\n                            lineNumber: 47\n                        },\n                        __self: this,\n                        children: \"Live\"\n                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        className: \"text-danger\",\n                        __source: {\n                            fileName: \"/Users/l-mobile/Documents/GitHub/Devtora/components/PostFeed.js\",\n                            lineNumber: 49\n                        },\n                        __self: this,\n                        children: \"Unpublished\"\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_c1 = PostItem;\nvar _c, _c1;\n$RefreshReg$(_c, \"PostFeed\");\n$RefreshReg$(_c1, \"PostItem\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RGZWVkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNEI7QUFFYixRQUFRLENBQUNDLFFBQVEsQ0FBQyxLQUFnQixFQUFFLENBQUM7UUFBakJDLEtBQUssR0FBUCxLQUFnQixDQUFkQSxLQUFLLEVBQUVDLEtBQUssR0FBZCxLQUFnQixDQUFQQSxLQUFLOztJQUM3QyxNQUFNLENBQUNELEtBQUssR0FDUkEsS0FBSyxDQUFDRSxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJO3NCQUNiLE1BQU0sd0RBQUxDLFFBQVE7WUFBQ0QsSUFBSSxFQUFFQSxJQUFJO1lBQWtCRixLQUFLLEVBQUVBLEtBQUs7Ozs7OztXQUF2QkUsSUFBSSxDQUFDRSxJQUFJO1NBRXRDLElBQUk7QUFDVixDQUFDO0tBTnVCTixRQUFRO1NBUXZCSyxRQUFRLENBQUMsS0FBdUIsRUFBRSxDQUFDO1FBQXhCRCxJQUFJLEdBQU4sS0FBdUIsQ0FBckJBLElBQUksV0FBTixLQUF1QixDQUFmRixLQUFLLEVBQUxBLEtBQUssdUJBQUcsS0FBSztJQUNyQyxFQUFnRDtJQUNoRCxHQUFLLENBQUNLLFNBQVMsR0FBR0gsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBYSxHQUFiQSxJQUFJLENBQUpBLENBQWEsR0FBYkEsSUFBSSxDQUFFSSxPQUFPLENBQUNDLElBQUksR0FBR0MsS0FBSyxTQUFTQyxNQUFNO0lBQzNELEdBQUssQ0FBQ0MsYUFBYSxJQUFJTCxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRU0sT0FBTyxDQUFDLENBQUM7SUFFckQsTUFBTSx1RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBTTs7Ozs7OztpRkFDbEJoQixrREFBSTtnQkFBQ2lCLElBQUksRUFBRyxDQUFDLEdBQW1CWixNQUFTLENBQTFCQSxJQUFJLENBQUNhLFFBQVEsRUFBQyxDQUFDLElBQVksT0FBVmIsSUFBSSxDQUFDRSxJQUFJOzs7Ozs7K0ZBQ3ZDWSxDQUFFOzs7Ozs7bUdBQ0FDLENBQUM7Ozs7OztrQ0FBRWYsSUFBSSxDQUFDZ0IsS0FBSzs7OztpRkFJakJyQixrREFBSTtnQkFBQ2lCLElBQUksRUFBRyxDQUFDLEdBQWdCLE9BQWRaLElBQUksQ0FBQ2EsUUFBUTs7Ozs7O2dHQUMxQkUsQ0FBQzs7Ozs7Ozt3QkFBQyxDQUNFOzhGQUFDRSxDQUFNOzs7Ozs7O2dDQUFDLENBQUM7Z0NBQUNqQixJQUFJLENBQUNhLFFBQVE7Ozs7OztrRkFJN0JLLENBQU07Ozs7Ozs7MEZBQ0pDLENBQUk7Ozs7Ozs7NEJBQ0ZoQixTQUFTOzRCQUFDLENBQVE7NEJBQUNLLGFBQWE7NEJBQUMsQ0FDcEM7OzswRkFDQ1csQ0FBSTt3QkFBQ1IsU0FBUyxFQUFDLENBQVc7Ozs7Ozs7NEJBQUMsQ0FBRTs0QkFBQ1gsSUFBSSxDQUFDb0IsVUFBVSxJQUFJLENBQUM7NEJBQUMsQ0FBTzs7Ozs7WUFJNUR0QixLQUFLOzt5RkFFREgsa0RBQUk7d0JBQUNpQixJQUFJLEVBQUcsQ0FBTyxTQUFZLE9BQVZaLElBQUksQ0FBQ0UsSUFBSTs7Ozs7O3VHQUM1Qm1CLENBQUU7Ozs7OzsyR0FDQUMsQ0FBTTtnQ0FBQ1gsU0FBUyxFQUFDLENBQVU7Ozs7OzswQ0FBQyxDQUFJOzs7O29CQUlwQ1gsSUFBSSxDQUFDdUIsU0FBUyx3RUFDWkMsQ0FBQzt3QkFBQ2IsU0FBUyxFQUFDLENBQWM7Ozs7OztrQ0FBQyxDQUFJOzhGQUUvQmEsQ0FBQzt3QkFBQ2IsU0FBUyxFQUFDLENBQWE7Ozs7OztrQ0FBQyxDQUFXOzs7Ozs7QUFNbEQsQ0FBQztNQTVDUVYsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3RGZWVkLmpzPzkwODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0RmVlZCh7IHBvc3RzLCBhZG1pbiB9KSB7XG4gIHJldHVybiBwb3N0c1xuICAgID8gcG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgIDxQb3N0SXRlbSBwb3N0PXtwb3N0fSBrZXk9e3Bvc3Quc2x1Z30gYWRtaW49e2FkbWlufSAvPlxuICAgICAgKSlcbiAgICA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIFBvc3RJdGVtKHsgcG9zdCwgYWRtaW4gPSBmYWxzZSB9KSB7XG4gIC8vIE5haXZlIG1ldGhvZCB0byBjYWxjIHdvcmQgY291bnQgYW5kIHJlYWQgdGltZVxuICBjb25zdCB3b3JkQ291bnQgPSBwb3N0Py5jb250ZW50LnRyaW0oKS5zcGxpdCgvXFxzKy9nKS5sZW5ndGg7XG4gIGNvbnN0IG1pbnV0ZXNUb1JlYWQgPSAod29yZENvdW50IC8gMTAwICsgMSkudG9GaXhlZCgwKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgPExpbmsgaHJlZj17YC8ke3Bvc3QudXNlcm5hbWV9LyR7cG9zdC5zbHVnfWB9PlxuICAgICAgICA8aDI+XG4gICAgICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxuICAgICAgICA8L2gyPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8TGluayBocmVmPXtgLyR7cG9zdC51c2VybmFtZX1gfT5cbiAgICAgICAgPGE+XG4gICAgICAgICAgQnkgPHN0cm9uZz5Ae3Bvc3QudXNlcm5hbWV9PC9zdHJvbmc+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAge3dvcmRDb3VudH0gd29yZHMuIHttaW51dGVzVG9SZWFkfSBtaW4gcmVhZFxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1c2gtbGVmdFwiPvCfkpcge3Bvc3QuaGVhcnRDb3VudCB8fCAwfSBIZWFydHM8L3NwYW4+XG4gICAgICA8L2Zvb3Rlcj5cblxuICAgICAgey8qIElmIGFkbWluIHZpZXcsIHNob3cgZXh0cmEgY29udHJvbHMgZm9yIHVzZXIgKi99XG4gICAgICB7YWRtaW4gJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYWRtaW4vJHtwb3N0LnNsdWd9YH0+XG4gICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWJsdWVcIj5FZGl0PC9idXR0b24+XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIHtwb3N0LnB1Ymxpc2hlZCA/IChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc3VjY2Vzc1wiPkxpdmU8L3A+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+VW5wdWJsaXNoZWQ8L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJQb3N0RmVlZCIsInBvc3RzIiwiYWRtaW4iLCJtYXAiLCJwb3N0IiwiUG9zdEl0ZW0iLCJzbHVnIiwid29yZENvdW50IiwiY29udGVudCIsInRyaW0iLCJzcGxpdCIsImxlbmd0aCIsIm1pbnV0ZXNUb1JlYWQiLCJ0b0ZpeGVkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsInVzZXJuYW1lIiwiaDIiLCJhIiwidGl0bGUiLCJzdHJvbmciLCJmb290ZXIiLCJzcGFuIiwiaGVhcnRDb3VudCIsImgzIiwiYnV0dG9uIiwicHVibGlzaGVkIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PostFeed.js\n");

/***/ })

});