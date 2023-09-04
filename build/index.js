/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\n// import cache from './cache/redis'\nvar router_1 = __webpack_require__(/*! ./routes/router */ \"./src/routes/router.ts\");\n// import Middleware from './middleware/middleware'\nvar app = express();\napp.use('/api', router_1.default);\nexports[\"default\"] = app;\n\n\n//# sourceURL=webpack://express-app/./src/app.ts?");

/***/ }),

/***/ "./src/controller/base.ts":
/*!********************************!*\
  !*** ./src/controller/base.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar BaseController = /** @class */ (function () {\n    function BaseController() {\n    }\n    BaseController.sendHttpResponse = function (res, message, data, headers, statusCode, success) {\n        if (data === void 0) { data = {}; }\n        if (headers === void 0) { headers = []; }\n        if (statusCode === void 0) { statusCode = 200; }\n        if (success === void 0) { success = true; }\n        headers.length > 0 && headers.forEach(function (header) {\n            header.length > 0 && res.setHeader(header[0], header[1]);\n        });\n        res.status(statusCode).json({ success: success, message: message, data: data });\n    };\n    return BaseController;\n}());\nexports[\"default\"] = BaseController;\n\n\n//# sourceURL=webpack://express-app/./src/controller/base.ts?");

/***/ }),

/***/ "./src/controller/ping.ts":
/*!********************************!*\
  !*** ./src/controller/ping.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar base_1 = __webpack_require__(/*! ./base */ \"./src/controller/base.ts\");\nvar PingController = /** @class */ (function (_super) {\n    __extends(PingController, _super);\n    function PingController() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    var _a;\n    _a = PingController;\n    PingController.get = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n        return __generator(_a, function (_b) {\n            console.log(req.query);\n            base_1.default.sendHttpResponse(res, 'Success', { \"return\": \"pong\" });\n            return [2 /*return*/];\n        });\n    }); };\n    return PingController;\n}(base_1.default));\nexports[\"default\"] = PingController;\n\n\n//# sourceURL=webpack://express-app/./src/controller/ping.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.io = void 0;\n// import { Server } from '../node_modules/socket.io/dist/index'\nvar socket_io_1 = __webpack_require__(/*! socket.io */ \"socket.io\");\nvar server_1 = __webpack_require__(/*! ./server */ \"./src/server.ts\");\nexports.io = new socket_io_1.Server();\nserver_1.default.listen(3000);\nconsole.log(\"listening\");\n\n\n//# sourceURL=webpack://express-app/./src/index.ts?");

/***/ }),

/***/ "./src/routes/router.ts":
/*!******************************!*\
  !*** ./src/routes/router.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar ping_1 = __webpack_require__(/*! ../controller/ping */ \"./src/controller/ping.ts\");\nvar routes = (0, express_1.Router)();\nroutes.get('/ping', ping_1.default.get);\nexports[\"default\"] = routes;\n\n\n//# sourceURL=webpack://express-app/./src/routes/router.ts?");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar http_1 = __webpack_require__(/*! http */ \"http\");\nvar app_1 = __webpack_require__(/*! ./app */ \"./src/app.ts\");\nvar httpServer = (0, http_1.createServer)(app_1.default);\nexports[\"default\"] = httpServer;\n\n\n//# sourceURL=webpack://express-app/./src/server.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;