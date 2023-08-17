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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\n\n\nconst getPokemon = async (key, q)=>{\n    const { data } = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/search\");\n    return data.map((pokemon)=>({\n            ...pokemon,\n            image: \"/pokemon/\".concat(pokemon.name.english.toLowerCase().replace(\" \", \"-\"), \".jpg\")\n        }));\n};\n// props 中有下面导出的数据 posts\nconst PostsIndex = (props)=>{\n    const { data } = getPokemon();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"文章列表\"\n            }, void 0, false, {\n                fileName: \"/Users/oujasper/Documents/test/nextjs-render-type/ssr/pages/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexWrap: \"wrap\"\n                },\n                children: data.map((param)=>/*#__PURE__*/ {\n                    let { id, name, type, image } = param;\n                    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/pokemon/\".concat(name.english),\n                        style: {\n                            padding: 8\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Img, {\n                                    variant: \"top\",\n                                    src: image,\n                                    style: {\n                                        maxHeight: 300\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/oujasper/Documents/test/nextjs-render-type/ssr/pages/index.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Body, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Title, {\n                                            children: name.english\n                                        }, void 0, false, {\n                                            fileName: \"/Users/oujasper/Documents/test/nextjs-render-type/ssr/pages/index.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Subtitle, {\n                                            children: type.join(\", \")\n                                        }, void 0, false, {\n                                            fileName: \"/Users/oujasper/Documents/test/nextjs-render-type/ssr/pages/index.tsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/oujasper/Documents/test/nextjs-render-type/ssr/pages/index.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/oujasper/Documents/test/nextjs-render-type/ssr/pages/index.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, undefined)\n                    }, id, false, {\n                        fileName: \"/Users/oujasper/Documents/test/nextjs-render-type/ssr/pages/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/oujasper/Documents/test/nextjs-render-type/ssr/pages/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/oujasper/Documents/test/nextjs-render-type/ssr/pages/index.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PostsIndex;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostsIndex);\nvar _c;\n$RefreshReg$(_c, \"PostsIndex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUM2QjtBQUNFO0FBRTBDO0FBQy9DO0FBVzFCLE1BQU1JLGFBQWEsT0FBT0MsS0FBVUM7SUFDbEMsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBRyxNQUFNSixpREFBUyxDQUFFO0lBQ2xDLE9BQU9JLEtBQUtFLEdBQUcsQ0FBQyxDQUFDQyxVQUFrQjtZQUNqQyxHQUFHQSxPQUFPO1lBQ1ZDLE9BQU8sWUFBaUUsT0FBckRELFFBQVFFLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxLQUFLLE1BQUs7UUFDMUU7QUFDRjtBQUVBLHdCQUF3QjtBQUN4QixNQUFNQyxhQUE4QixDQUFDQztJQUNuQyxNQUFNLEVBQUVWLElBQUksRUFBRSxHQUFHSDtJQUNqQixxQkFDRSw4REFBQ2M7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDRDtnQkFBSUUsT0FBTztvQkFBRUMsU0FBUztvQkFBUUMsVUFBVTtnQkFBTzswQkFDN0NmLEtBQUtFLEdBQUcsQ0FBQzt3QkFBQyxFQUFFYyxFQUFFLEVBQUVYLElBQUksRUFBRVksSUFBSSxFQUFFYixLQUFLLEVBQUU7MkJBQ2xDLDhEQUFDWCxrREFBSUE7d0JBQUN5QixNQUFNLFlBQXlCLE9BQWJiLEtBQUtDLE9BQU87d0JBQWFPLE9BQU87NEJBQUVNLFNBQVM7d0JBQUU7a0NBQ25FLDRFQUFDeEIsNERBQUlBOzs4Q0FDSCw4REFBQ0EsZ0VBQVE7b0NBQUMwQixTQUFRO29DQUFNQyxLQUFLbEI7b0NBQU9TLE9BQU87d0NBQUVVLFdBQVc7b0NBQUk7Ozs7Ozs4Q0FDNUQsOERBQUM1QixpRUFBUzs7c0RBQ1IsOERBQUNBLGtFQUFVO3NEQUFFVSxLQUFLQyxPQUFPOzs7Ozs7c0RBQ3pCLDhEQUFDWCxxRUFBYTtzREFBRXNCLEtBQUtVLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUxhWDs7Ozs7Z0JBUXZDOzs7Ozs7Ozs7Ozs7QUFLaEI7S0FwQk1QO0FBc0JOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzLCBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwb2tlbW9uIGZyb20gJy4uL3Bva2Vtb24uanNvbic7XG5pbXBvcnQgeyBDb250YWluZXIsIEZvcm1Db250cm9sLCBSb3csIENvbCwgQ2FyZCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG50eXBlIFBvc3QgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG59O1xuXG50eXBlIFByb3BzID0ge1xuICBwb3N0czogUG9zdFtdO1xufTtcblxuY29uc3QgZ2V0UG9rZW1vbiA9IGFzeW5jIChrZXk6IGFueSwgcTogYW55KSA9PiB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3NlYXJjaGApO1xuICByZXR1cm4gZGF0YS5tYXAoKHBva2Vtb246IGFueSkgPT4gKHtcbiAgICAuLi5wb2tlbW9uLFxuICAgIGltYWdlOiBgL3Bva2Vtb24vJHtwb2tlbW9uLm5hbWUuZW5nbGlzaC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoJyAnLCAnLScpfS5qcGdgLFxuICB9KSk7XG59O1xuXG4vLyBwcm9wcyDkuK3mnInkuIvpnaLlr7zlh7rnmoTmlbDmja4gcG9zdHNcbmNvbnN0IFBvc3RzSW5kZXg6IE5leHRQYWdlPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGRhdGEgfSA9IGdldFBva2Vtb24oKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPuaWh+eroOWIl+ihqDwvaDE+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleFdyYXA6ICd3cmFwJyB9fT5cbiAgICAgICAge2RhdGEubWFwKCh7IGlkLCBuYW1lLCB0eXBlLCBpbWFnZSB9KSA9PiAoXG4gICAgICAgICAgPExpbmsgaHJlZj17YC9wb2tlbW9uLyR7bmFtZS5lbmdsaXNofWB9IGtleT17aWR9IHN0eWxlPXt7IHBhZGRpbmc6IDggfX0+XG4gICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgPENhcmQuSW1nIHZhcmlhbnQ9J3RvcCcgc3JjPXtpbWFnZX0gc3R5bGU9e3sgbWF4SGVpZ2h0OiAzMDAgfX0gLz5cbiAgICAgICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT57bmFtZS5lbmdsaXNofTwvQ2FyZC5UaXRsZT5cbiAgICAgICAgICAgICAgICA8Q2FyZC5TdWJ0aXRsZT57dHlwZS5qb2luKCcsICcpfTwvQ2FyZC5TdWJ0aXRsZT5cbiAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdHNJbmRleDtcbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJDYXJkIiwiYXhpb3MiLCJnZXRQb2tlbW9uIiwia2V5IiwicSIsImRhdGEiLCJnZXQiLCJtYXAiLCJwb2tlbW9uIiwiaW1hZ2UiLCJuYW1lIiwiZW5nbGlzaCIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsIlBvc3RzSW5kZXgiLCJwcm9wcyIsImRpdiIsImgxIiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJpZCIsInR5cGUiLCJocmVmIiwicGFkZGluZyIsIkltZyIsInZhcmlhbnQiLCJzcmMiLCJtYXhIZWlnaHQiLCJCb2R5IiwiVGl0bGUiLCJTdWJ0aXRsZSIsImpvaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});