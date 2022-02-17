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

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _assets_eth_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/eth.png */ \"./assets/eth.png\");\n/* harmony import */ var _assets_uniswap_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/uniswap.png */ \"./assets/uniswap.png\");\n/* harmony import */ var _context_TransactionContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/TransactionContext */ \"./context/TransactionContext.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar style = {\n    wrapper: \"p-4 w-screen flex justify-between items-center\",\n    headerLogo: \"flex w-1/4 items-center justify-start\",\n    nav: \"flex-1 flex justify-center items-center\",\n    navItemsContainer: \"flex bg-[#191B1F] rounded-3xl\",\n    navItem: \"px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl\",\n    activeNavItem: \"bg-[#20242A]\",\n    buttonsContainer: \"flex w-1/4 justify-end items-center\",\n    button: \"flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer\",\n    buttonPadding: \"p-2\",\n    buttonTextContainer: \"h-8 flex items-center\",\n    buttonIconContainer: \"flex items-center justify-center w-8 h-8\",\n    buttonAccent: \"bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]\"\n};\nvar Header = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('swap'), selectedNav = ref[0], setSelectedNav = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_TransactionContext__WEBPACK_IMPORTED_MODULE_5__.TransactionContext), connectWallet = ref1.connectWallet, currentAccount = ref1.currentAccount;\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), userName = ref2[0], setUserName = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!currentAccount) return;\n        setUserName(\"\".concat(currentAccount.slice(0, 7), \"...\").concat(currentAccount.slice(35)));\n    }, [\n        currentAccount\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: style.wrapper,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.headerLogo,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: _assets_uniswap_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                    alt: \"uniswap\",\n                    height: 40,\n                    width: 40\n                }, void 0, false, {\n                    fileName: \"/home/thomas/Projetos/GitHub/UniSwapBlockchain/uniswapblockchain/components/Header.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/thomas/Projetos/GitHub/UniSwapBlockchain/uniswapblockchain/components/Header.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.nav,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: style.navItemsContainer,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: function() {\n                                return setSelectedNav('swap');\n                            },\n                            className: \"\".concat(style.navItem, \" \").concat(selectedNav === 'swap' && style.activeNavItem),\n                            children: \"Swap\"\n                        }, void 0, false, {\n                            fileName: \"/home/thomas/Projetos/GitHub/UniSwapBlockchain/uniswapblockchain/components/Header.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: function() {\n                                return setSelectedNav('pool');\n                            },\n                            className: \"\".concat(style.navItem, \" \").concat(selectedNav === 'pool' && style.activeNavItem),\n                            children: \"Pool\"\n                        }, void 0, false, {\n                            fileName: \"/home/thomas/Projetos/GitHub/UniSwapBlockchain/uniswapblockchain/components/Header.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: function() {\n                                return setSelectedNav('vote');\n                            },\n                            className: \"\".concat(style.navItem, \" \").concat(selectedNav === 'vote' && style.activeNavItem),\n                            children: \"Vote\"\n                        }, void 0, false, {\n                            fileName: \"/home/thomas/Projetos/GitHub/UniSwapBlockchain/uniswapblockchain/components/Header.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://info.uniswap.org/#/\",\n                            target: \"_blank\",\n                            rel: \"noreferrer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.navItem,\n                                children: [\n                                    \"Charts \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiArrowUpRight, {}, void 0, false, {\n                                        fileName: \"/home/thomas/Projetos/GitHub/UniSwapBlockchain/uniswapblockchain/components/Header.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 22\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/thomas/Projetos/GitHub/UniSwapBlockchain/uniswapblockchain/components/Header.js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/thomas/Projetos/GitHub/UniSwapBlockchain/uniswapblockchain/components/Header.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/thomas/Projetos/GitHub/UniSwapBlockchain/uniswapblockchain/components/Header.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/thomas/Projetos/GitHub/UniSwapBlockchain/uniswapblockchain/components/Header.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.buttonsContainer,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.buttonIconContainer,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: _assets_eth_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    alt: \"eth logo\",\n                                    height: 20,\n                                    width: 20\n                                }, void 0, false, {\n                                    fileName: \"/home/thomas/Projetos/GitHub/UniSwapBlockchain/uniswapblockchain/components/Header.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/thomas/Projetos/GitHub/UniSwapBlockchain/uniswapblockchain/components/Header.js\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Ethereum\"\n                            }, void 0, false, {\n                                fileName: \"/home/thomas/Projetos/GitHub/UniSwapBlockchain/uniswapblockchain/components/Header.js\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.buttonIconContainer,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiOutlineDown, {}, void 0, false, {\n                                    fileName: \"/home/thomas/Projetos/GitHub/UniSwapBlockchain/uniswapblockchain/components/Header.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/thomas/Projetos/GitHub/UniSwapBlockchain/uniswapblockchain/components/Header.js\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/thomas/Projetos/GitHub/UniSwapBlockchain/uniswapblockchain/components/Header.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, _this),\n                    currentAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: style.buttonTextContainer,\n                            children: userName\n                        }, void 0, false, {\n                            fileName: \"/home/thomas/Projetos/GitHub/UniSwapBlockchain/uniswapblockchain/components/Header.js\",\n                            lineNumber: 89,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/thomas/Projetos/GitHub/UniSwapBlockchain/uniswapblockchain/components/Header.js\",\n                        lineNumber: 88,\n                        columnNumber: 13\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: function() {\n                            return connectWallet();\n                        },\n                        className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(style.buttonAccent, \" \").concat(style.buttonPadding),\n                            children: \"Connect Wallet\"\n                        }, void 0, false, {\n                            fileName: \"/home/thomas/Projetos/GitHub/UniSwapBlockchain/uniswapblockchain/components/Header.js\",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/thomas/Projetos/GitHub/UniSwapBlockchain/uniswapblockchain/components/Header.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(style.buttonIconContainer, \" mx-2\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_8__.HiOutlineDotsVertical, {}, void 0, false, {\n                                fileName: \"/home/thomas/Projetos/GitHub/UniSwapBlockchain/uniswapblockchain/components/Header.js\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/thomas/Projetos/GitHub/UniSwapBlockchain/uniswapblockchain/components/Header.js\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/thomas/Projetos/GitHub/UniSwapBlockchain/uniswapblockchain/components/Header.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/thomas/Projetos/GitHub/UniSwapBlockchain/uniswapblockchain/components/Header.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/thomas/Projetos/GitHub/UniSwapBlockchain/uniswapblockchain/components/Header.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, _this));\n};\n_s(Header, \"+zrT35vZ7KezbnPoSwC6iQVu4v8=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLFNBQVMsRUFBRXRCLEtBQUssQ0FBQ1UsbUJBQW1CO3NDQUFHUSxRQUFROzs7Ozs7Ozs7OzRHQUczREcsQ0FBRzt3QkFDSk0sT0FBTyxFQUFFLFFBQVE7NEJBQUZYLE1BQU0sQ0FBTkEsYUFBYTs7d0JBQzVCTSxTQUFTLEVBQUcsR0FBa0J0QixNQUFtQixDQUFuQ0EsS0FBSyxDQUFDUSxNQUFNLEVBQUMsQ0FBQyxJQUFzQixPQUFwQlIsS0FBSyxDQUFDUyxhQUFhOzhHQUU1Q1ksQ0FBRzs0QkFBQ0MsU0FBUyxFQUFHLEdBQXdCdEIsTUFBbUIsQ0FBekNBLEtBQUssQ0FBQ1ksWUFBWSxFQUFDLENBQUMsSUFBc0IsT0FBcEJaLEtBQUssQ0FBQ1MsYUFBYTtzQ0FBSSxDQUVoRTs7Ozs7Ozs7Ozs7Z0dBS0hZLENBQUc7d0JBQUNDLFNBQVMsRUFBRyxHQUFrQnRCLE1BQW1CLENBQW5DQSxLQUFLLENBQUNRLE1BQU0sRUFBQyxDQUFDLElBQXNCLE9BQXBCUixLQUFLLENBQUNTLGFBQWE7OEdBQ25EWSxDQUFHOzRCQUFDQyxTQUFTLEVBQUcsR0FBNEIsTUFBSyxDQUEvQnRCLEtBQUssQ0FBQ1csbUJBQW1CLEVBQUMsQ0FBSztrSEFDL0NmLGlFQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxDLENBQUM7R0F0RktpQixNQUFNO0tBQU5BLE1BQU07QUF3RlosK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NGRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGaUFycm93VXBSaWdodCB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xuaW1wb3J0IHsgQWlPdXRsaW5lRG93biB9IGZyb20gJ3JlYWN0LWljb25zL2FpJ1xuaW1wb3J0IHsgSGlPdXRsaW5lRG90c1ZlcnRpY2FsIH0gZnJvbSAncmVhY3QtaWNvbnMvaGknXG5pbXBvcnQgZXRoTG9nbyBmcm9tICcuLi9hc3NldHMvZXRoLnBuZydcbmltcG9ydCB1bmlzd2FwTG9nbyBmcm9tICcuLi9hc3NldHMvdW5pc3dhcC5wbmcnXG5pbXBvcnQgeyBUcmFuc2FjdGlvbkNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L1RyYW5zYWN0aW9uQ29udGV4dCdcblxuY29uc3Qgc3R5bGUgPSB7XG4gIHdyYXBwZXI6IGBwLTQgdy1zY3JlZW4gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyYCxcbiAgaGVhZGVyTG9nbzogYGZsZXggdy0xLzQgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnRgLFxuICBuYXY6IGBmbGV4LTEgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJgLFxuICBuYXZJdGVtc0NvbnRhaW5lcjogYGZsZXggYmctWyMxOTFCMUZdIHJvdW5kZWQtM3hsYCxcbiAgbmF2SXRlbTogYHB4LTQgcHktMiBtLTEgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtWzAuOXJlbV0gY3Vyc29yLXBvaW50ZXIgcm91bmRlZC0zeGxgLFxuICBhY3RpdmVOYXZJdGVtOiBgYmctWyMyMDI0MkFdYCxcbiAgYnV0dG9uc0NvbnRhaW5lcjogYGZsZXggdy0xLzQganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyYCxcbiAgYnV0dG9uOiBgZmxleCBpdGVtcy1jZW50ZXIgYmctWyMxOTFCMUZdIHJvdW5kZWQtMnhsIG14LTIgdGV4dC1bMC45cmVtXSBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyYCxcbiAgYnV0dG9uUGFkZGluZzogYHAtMmAsXG4gIGJ1dHRvblRleHRDb250YWluZXI6IGBoLTggZmxleCBpdGVtcy1jZW50ZXJgLFxuICBidXR0b25JY29uQ29udGFpbmVyOiBgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy04IGgtOGAsXG4gIGJ1dHRvbkFjY2VudDogYGJnLVsjMTcyQTQyXSBib3JkZXIgYm9yZGVyLVsjMTYzMjU2XSBob3Zlcjpib3JkZXItWyMyMzQxNjldIGgtZnVsbCByb3VuZGVkLTJ4bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LVsjNEY5MEVBXWAsXG59XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkTmF2LCBzZXRTZWxlY3RlZE5hdl0gPSB1c2VTdGF0ZSgnc3dhcCcpXG4gIGNvbnN0IHsgY29ubmVjdFdhbGxldCwgY3VycmVudEFjY291bnQgfSA9IHVzZUNvbnRleHQoVHJhbnNhY3Rpb25Db250ZXh0KVxuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKCFjdXJyZW50QWNjb3VudCkgcmV0dXJuXG4gICAgc2V0VXNlck5hbWUoYCR7Y3VycmVudEFjY291bnQuc2xpY2UoMCwgNyl9Li4uJHtjdXJyZW50QWNjb3VudC5zbGljZSgzNSl9YClcbiAgfSwgW2N1cnJlbnRBY2NvdW50XSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS53cmFwcGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5oZWFkZXJMb2dvfT5cbiAgICAgICAgPEltYWdlIHNyYz17dW5pc3dhcExvZ299IGFsdD0ndW5pc3dhcCcgaGVpZ2h0PXs0MH0gd2lkdGg9ezQwfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubmF2fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5hdkl0ZW1zQ29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZE5hdignc3dhcCcpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS5uYXZJdGVtfSAke1xuICAgICAgICAgICAgICBzZWxlY3RlZE5hdiA9PT0gJ3N3YXAnICYmIHN0eWxlLmFjdGl2ZU5hdkl0ZW1cbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFN3YXBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZE5hdigncG9vbCcpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS5uYXZJdGVtfSAke1xuICAgICAgICAgICAgICBzZWxlY3RlZE5hdiA9PT0gJ3Bvb2wnICYmIHN0eWxlLmFjdGl2ZU5hdkl0ZW1cbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFBvb2xcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZE5hdigndm90ZScpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS5uYXZJdGVtfSAke1xuICAgICAgICAgICAgICBzZWxlY3RlZE5hdiA9PT0gJ3ZvdGUnICYmIHN0eWxlLmFjdGl2ZU5hdkl0ZW1cbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFZvdGVcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9pbmZvLnVuaXN3YXAub3JnLyMvJ1xuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICByZWw9J25vcmVmZXJyZXInXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5hdkl0ZW19PlxuICAgICAgICAgICAgICBDaGFydHMgPEZpQXJyb3dVcFJpZ2h0IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYnV0dG9uc0NvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZS5idXR0b259ICR7c3R5bGUuYnV0dG9uUGFkZGluZ31gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYnV0dG9uSWNvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtldGhMb2dvfSBhbHQ9J2V0aCBsb2dvJyBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHA+RXRoZXJldW08L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbkljb25Db250YWluZXJ9PlxuICAgICAgICAgICAgPEFpT3V0bGluZURvd24gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtjdXJyZW50QWNjb3VudCA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZS5idXR0b259ICR7c3R5bGUuYnV0dG9uUGFkZGluZ31gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYnV0dG9uVGV4dENvbnRhaW5lcn0+e3VzZXJOYW1lfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoICAgICAgICBcbiAgICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb25uZWN0V2FsbGV0KCl9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGUuYnV0dG9ufSAke3N0eWxlLmJ1dHRvblBhZGRpbmd9YH1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLmJ1dHRvbkFjY2VudH0gJHtzdHlsZS5idXR0b25QYWRkaW5nfWB9PlxuICAgICAgICAgICAgICAgIENvbm5lY3QgV2FsbGV0XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZS5idXR0b259ICR7c3R5bGUuYnV0dG9uUGFkZGluZ31gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGUuYnV0dG9uSWNvbkNvbnRhaW5lcn0gbXgtMmB9PlxuICAgICAgICAgICAgPEhpT3V0bGluZURvdHNWZXJ0aWNhbCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiRmlBcnJvd1VwUmlnaHQiLCJBaU91dGxpbmVEb3duIiwiSGlPdXRsaW5lRG90c1ZlcnRpY2FsIiwiZXRoTG9nbyIsInVuaXN3YXBMb2dvIiwiVHJhbnNhY3Rpb25Db250ZXh0Iiwic3R5bGUiLCJ3cmFwcGVyIiwiaGVhZGVyTG9nbyIsIm5hdiIsIm5hdkl0ZW1zQ29udGFpbmVyIiwibmF2SXRlbSIsImFjdGl2ZU5hdkl0ZW0iLCJidXR0b25zQ29udGFpbmVyIiwiYnV0dG9uIiwiYnV0dG9uUGFkZGluZyIsImJ1dHRvblRleHRDb250YWluZXIiLCJidXR0b25JY29uQ29udGFpbmVyIiwiYnV0dG9uQWNjZW50IiwiSGVhZGVyIiwic2VsZWN0ZWROYXYiLCJzZXRTZWxlY3RlZE5hdiIsImNvbm5lY3RXYWxsZXQiLCJjdXJyZW50QWNjb3VudCIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJzbGljZSIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImhlaWdodCIsIndpZHRoIiwib25DbGljayIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

});