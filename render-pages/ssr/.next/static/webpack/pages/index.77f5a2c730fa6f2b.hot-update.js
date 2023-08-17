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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst getPokemon = async ()=>{\n    const { data } = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/search\");\n    return data.map((pokemon)=>({\n            ...pokemon,\n            image: \"/pokemon/\".concat(pokemon.name.english.toLowerCase().replace(\" \", \"-\"), \".jpg\")\n        }));\n};\n// props 中有下面导出的数据 posts\nconst PostsIndex = (props)=>{\n    _s();\n    const [list, setList] = react__WEBPACK_IMPORTED_MODULE_2__.useState([]);\n    react__WEBPACK_IMPORTED_MODULE_2__.useEffect(()=>{\n        getData();\n    }, []);\n    const getData = async ()=>{\n        const data = await getPokemon();\n        setList(data);\n    };\n    if (list.length === 0) {\n        return;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"文章列表\"\n            }, void 0, false, {\n                fileName: \"/Users/oujasper/Documents/test/nextjs-render-type/ssr/pages/index.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexWrap: \"wrap\"\n                },\n                children: list.map((param)=>/*#__PURE__*/ {\n                    let { id, name, type, image } = param;\n                    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/pokemon/\".concat(name.english),\n                        style: {\n                            padding: 8\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Img, {\n                                    variant: \"top\",\n                                    src: image,\n                                    style: {\n                                        maxHeight: 300\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/oujasper/Documents/test/nextjs-render-type/ssr/pages/index.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Body, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Title, {\n                                            children: name.english\n                                        }, void 0, false, {\n                                            fileName: \"/Users/oujasper/Documents/test/nextjs-render-type/ssr/pages/index.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Subtitle, {\n                                            children: type.join(\", \")\n                                        }, void 0, false, {\n                                            fileName: \"/Users/oujasper/Documents/test/nextjs-render-type/ssr/pages/index.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/oujasper/Documents/test/nextjs-render-type/ssr/pages/index.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/oujasper/Documents/test/nextjs-render-type/ssr/pages/index.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, undefined)\n                    }, id, false, {\n                        fileName: \"/Users/oujasper/Documents/test/nextjs-render-type/ssr/pages/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/oujasper/Documents/test/nextjs-render-type/ssr/pages/index.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/oujasper/Documents/test/nextjs-render-type/ssr/pages/index.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PostsIndex, \"ZBNfaudzy8bVxb8UgkyyMnLdlWY=\");\n_c = PostsIndex;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostsIndex);\nvar _c;\n$RefreshReg$(_c, \"PostsIndex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDNkI7QUFDRTtBQUUwQztBQUMvQztBQVcxQixNQUFNSSxhQUFhO0lBQ2pCLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTUYsaURBQVMsQ0FBRTtJQUNsQyxPQUFPRSxLQUFLRSxHQUFHLENBQUMsQ0FBQ0MsVUFBa0I7WUFDakMsR0FBR0EsT0FBTztZQUNWQyxPQUFPLFlBQWlFLE9BQXJERCxRQUFRRSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsV0FBVyxHQUFHQyxPQUFPLENBQUMsS0FBSyxNQUFLO1FBQzFFO0FBQ0Y7QUFFQSx3QkFBd0I7QUFDeEIsTUFBTUMsYUFBOEIsQ0FBQ0M7O0lBQ25DLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHaEIsMkNBQWMsQ0FBQyxFQUFFO0lBRXpDQSw0Q0FBZSxDQUFDO1FBQ2RtQjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1BLFVBQVU7UUFDZCxNQUFNZixPQUFPLE1BQU1EO1FBQ25CYSxRQUFRWjtJQUNWO0lBRUEsSUFBSVcsS0FBS0ssTUFBTSxLQUFLLEdBQUc7UUFDckI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNEO2dCQUFJRSxPQUFPO29CQUFFQyxTQUFTO29CQUFRQyxVQUFVO2dCQUFPOzBCQUM3Q1YsS0FBS1QsR0FBRyxDQUFDO3dCQUFDLEVBQUVvQixFQUFFLEVBQUVqQixJQUFJLEVBQUVrQixJQUFJLEVBQUVuQixLQUFLLEVBQU87MkJBQ3ZDLDhEQUFDVCxrREFBSUE7d0JBQUM2QixNQUFNLFlBQXlCLE9BQWJuQixLQUFLQyxPQUFPO3dCQUFhYSxPQUFPOzRCQUFFTSxTQUFTO3dCQUFFO2tDQUNuRSw0RUFBQzVCLDREQUFJQTs7OENBQ0gsOERBQUNBLGdFQUFRO29DQUFDOEIsU0FBUTtvQ0FBTUMsS0FBS3hCO29DQUFPZSxPQUFPO3dDQUFFVSxXQUFXO29DQUFJOzs7Ozs7OENBQzVELDhEQUFDaEMsaUVBQVM7O3NEQUNSLDhEQUFDQSxrRUFBVTtzREFBRVEsS0FBS0MsT0FBTzs7Ozs7O3NEQUN6Qiw4REFBQ1QscUVBQWE7c0RBQUUwQixLQUFLVSxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFMYVg7Ozs7O2dCQVF2Qzs7Ozs7Ozs7Ozs7O0FBS2hCO0dBbENNYjtLQUFBQTtBQW9DTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcywgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcG9rZW1vbiBmcm9tICcuLi9wb2tlbW9uLmpzb24nO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBGb3JtQ29udHJvbCwgUm93LCBDb2wsIENhcmQgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxudHlwZSBQb3N0ID0ge1xuICBpZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xufTtcblxudHlwZSBQcm9wcyA9IHtcbiAgcG9zdHM6IFBvc3RbXTtcbn07XG5cbmNvbnN0IGdldFBva2Vtb24gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3NlYXJjaGApO1xuICByZXR1cm4gZGF0YS5tYXAoKHBva2Vtb246IGFueSkgPT4gKHtcbiAgICAuLi5wb2tlbW9uLFxuICAgIGltYWdlOiBgL3Bva2Vtb24vJHtwb2tlbW9uLm5hbWUuZW5nbGlzaC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoJyAnLCAnLScpfS5qcGdgLFxuICB9KSk7XG59O1xuXG4vLyBwcm9wcyDkuK3mnInkuIvpnaLlr7zlh7rnmoTmlbDmja4gcG9zdHNcbmNvbnN0IFBvc3RzSW5kZXg6IE5leHRQYWdlPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXREYXRhKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRQb2tlbW9uKCk7XG4gICAgc2V0TGlzdChkYXRhKTtcbiAgfTtcblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+5paH56ug5YiX6KGoPC9oMT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4V3JhcDogJ3dyYXAnIH19PlxuICAgICAgICB7bGlzdC5tYXAoKHsgaWQsIG5hbWUsIHR5cGUsIGltYWdlIH06IGFueSkgPT4gKFxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9rZW1vbi8ke25hbWUuZW5nbGlzaH1gfSBrZXk9e2lkfSBzdHlsZT17eyBwYWRkaW5nOiA4IH19PlxuICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgIDxDYXJkLkltZyB2YXJpYW50PSd0b3AnIHNyYz17aW1hZ2V9IHN0eWxlPXt7IG1heEhlaWdodDogMzAwIH19IC8+XG4gICAgICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+e25hbWUuZW5nbGlzaH08L0NhcmQuVGl0bGU+XG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGU+e3R5cGUuam9pbignLCAnKX08L0NhcmQuU3VidGl0bGU+XG4gICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RzSW5kZXg7XG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwiQ2FyZCIsImF4aW9zIiwiZ2V0UG9rZW1vbiIsImRhdGEiLCJnZXQiLCJtYXAiLCJwb2tlbW9uIiwiaW1hZ2UiLCJuYW1lIiwiZW5nbGlzaCIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsIlBvc3RzSW5kZXgiLCJwcm9wcyIsImxpc3QiLCJzZXRMaXN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXREYXRhIiwibGVuZ3RoIiwiZGl2IiwiaDEiLCJzdHlsZSIsImRpc3BsYXkiLCJmbGV4V3JhcCIsImlkIiwidHlwZSIsImhyZWYiLCJwYWRkaW5nIiwiSW1nIiwidmFyaWFudCIsInNyYyIsIm1heEhlaWdodCIsIkJvZHkiLCJUaXRsZSIsIlN1YnRpdGxlIiwiam9pbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});