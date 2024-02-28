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

/***/ "./src/doms.js":
/*!*********************!*\
  !*** ./src/doms.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\n\n\n\n\n\n// add the board to the doms, next goal\n// 2 gameboards are not the same thing\nfunction Dom() {\n    function renderhead() {\n        const body = document.querySelector(\"body\");\n        \n    } \n\n        //boardDiv.style.width = '152px';\n        //boardDiv.style.fontSize = \"31.8px\";\n    let gameBoard;\n    let gameBoard2\n\n\n    function renderBoard() {\n        let mainDiv = document.getElementById(\"content\")\n\n        let boardDiv = document.createElement('div');\n        boardDiv.setAttribute(\"id\", \"board\")\n        console.log(boardDiv)\n        boardDiv.style.width = '5.025em';\n        boardDiv.style.fontSize = '1.6875em';\n        mainDiv.appendChild(boardDiv);\n\n        let array = [];\n        let rows = 10;\n        let columns = 10;\n\n        let array2  = [];\n        let rows2 = 10;\n        let columns2 = 10;\n\n        gameBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.board)(array, rows, columns)\n        gameBoard2 = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.board)(array2, rows2, columns2)\n\n        \n\n        let submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"submarine\", 1, 0, false )\n        let destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"destroyer\", 2, 0, false)\n        let cruiser = (0,_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"cruiser\", 3, 0, false)\n        let battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"battleship\", 4, 0, false)\n        let aircraft = (0,_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"aircraft\", 5, 0, false)\n    \n        ;(0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.placeShip)(gameBoard, submarine, 2, 1, \"vertical\" )\n        ;(0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.placeShip)(gameBoard, destroyer, 6, 6, \"vertical\")\n        ;(0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.placeShip)(gameBoard, cruiser, 6, 2, \"horizontal\")\n        ;(0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.placeShip)(gameBoard, battleship, 9, 1, \"horizontal\")\n        ;(0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.placeShip)(gameBoard, aircraft, 8, 1, \"horizontal\")\n\n        ;(0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.placeShip)(gameBoard2, submarine, 5, 5, \"vertical\" )\n        ;(0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.placeShip)(gameBoard2, destroyer, 1, 1, \"vertical\")\n        ;(0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.placeShip)(gameBoard2, cruiser, 3, 2, \"horizontal\")\n        ;(0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.placeShip)(gameBoard2, battleship, 7, 1, \"horizontal\")\n        ;(0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.placeShip)(gameBoard2, aircraft, 9, 0, \"horizontal\")\n\n        let html1 = gameBoard\n        let nSpace = \"\\n\\n\"\n        let html2 = gameBoard2\n\n        boardDiv.innerText += html1;\n        boardDiv.innerText += nSpace\n        boardDiv.innerText += html2;\n\n        \n    }\n\n        function renderReceiveAtk(x, y ) {\n            let mainDiv = document.getElementById(\"content\")\n            let boardDiv = document.getElementById('board');\n            (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.receiveAtk)(gameBoard, x, y, _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n            \n            mainDiv.appendChild(boardDiv)\n            \n            let nSpace = \"\"\n            let html2 = \"\"\n            boardDiv.innerText = \"\"\n            \n            let html1 = gameBoard\n            boardDiv.innerText = html1\n        \n\n        }\n\n        \n\n    return {\n        renderhead,\n        renderBoard,\n        renderReceiveAtk\n        }\n    }   \n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dom);\n\n\n\n//# sourceURL=webpack:///./src/doms.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   board: () => (/* binding */ board),\n/* harmony export */   checkCoords: () => (/* binding */ checkCoords),\n/* harmony export */   placeShip: () => (/* binding */ placeShip),\n/* harmony export */   receiveAtk: () => (/* binding */ receiveAtk)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\n\n    \n\nconst board = (array, rows, columns) => {\n    \n    for (let x = 0; x < rows; x++) {\n        array[x] = []\n        for (let y = 0; y < columns; y++) {\n            array[x][y] = \" \"\n        }\n    }\n    return array\n}\n\nconst checkCoords = (x, y) => {\n    if (x < 0 || x > 9 || y < 0 || y > 9){\n        return false\n    }   \n}\n\nconst placeShip = (board, ships, x, y, direction, fleet) => {\n    fleet = []\n    checkCoords(x, y)\n    \n    \n    if( direction === \"horizontal\") {\n        //I need to do some math to change the layout per direction\n            let i = 0;\n            while(i < ships.length){\n            let piece = `S`\n            if(board[x][y] === piece){\n                return \"something is there\"\n            }else{ \n            board[x][y + i] += piece\n            i++\n            }     \n    }\n        fleet.push(ships)\n        return board\n}\n\n    else if( direction === \"vertical\") {\n        let i = 0\n        while(i < ships.length){\n        let piece = 'S'\n        if(board[x][y] === piece){\n                return \"something is there\"\n        }else{\n        board[x + i][y] += piece\n            i++\n            }\n        }\n        fleet.push(ships)\n        return board\n    }\n\n}\n\nconst receiveAtk = (board, x, y, ships) => {\n    if (board[x][y] === \" \"){\n        board[x][y] = \"M\"\n        return \"miss\"\n    }\n    if (board[x][y] === \" S\"){\n        board[x][y] = \"H\"\n        \n        ships.setHit\n        return \"hit\"\n    }\n\nconst checkAllShips = () => {\n    fleet.every((ships) => ships.setSunk() === true)\n}\n    return { board, placeShip, receiveAtk, checkAllShips }\n}\n\n\n\n//# sourceURL=webpack:///./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _doms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doms */ \"./src/doms.js\");\n\n\n\n\n\n\nlet gameLoop = () => {\n\n    \n\n    //dom.renderhead()\n    \n// create 2 players and all of my ships\n    let play1 = (0,_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n    let play2 = (0,_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n\n    let array = []\n    let rows = 10\n    let columns = 10\n\n    let array2  = []\n    let rows2 = 10\n    let columns2 = 10\n\n\n    let gameBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.board)(array, rows, columns)\n    let gameBoard2 = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.board)(array2, rows2, columns2)\n\n    //et ships = (name, length, hits, sunk) => {\n    //const placeShip = (board, ship, x, y, direction, fleet) => {\n    \n    let submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"submarine\", 1, 0, false )\n    let destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"destroyer\", 2, 0, false)\n    let cruiser = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"cruiser\", 3, 0, false)\n    let battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"battleship\", 4, 0, false)\n    let aircraft = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"aircraft\", 5, 0, false)\n    \n\n    ;(0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.placeShip)(gameBoard, submarine, 2, 1, \"vertical\" )\n    ;(0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.placeShip)(gameBoard, destroyer, 6, 6, \"vertical\")\n    ;(0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.placeShip)(gameBoard, cruiser, 6, 2, \"horizontal\")\n    ;(0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.placeShip)(gameBoard, battleship, 9, 1, \"horizontal\")\n    ;(0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.placeShip)(gameBoard, aircraft, 8, 1, \"horizontal\")\n\n\n    ;(0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.placeShip)(gameBoard2, submarine, 5, 5, \"vertical\" )\n    ;(0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.placeShip)(gameBoard2, destroyer, 1, 1, \"vertical\")\n    ;(0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.placeShip)(gameBoard2, cruiser, 3, 2, \"horizontal\")\n    ;(0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.placeShip)(gameBoard2, battleship, 7, 1, \"horizontal\")\n    ;(0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.placeShip)(gameBoard2, aircraft, 9, 0, \"horizontal\")\n\n    let doms = (0,_doms__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n    doms.renderBoard()\n\n    ;(0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.receiveAtk)(gameBoard, 5, 5, _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n    \n    doms.renderReceiveAtk(5, 5)\n    doms.renderReceiveAtk(2, 1)\n\n\n    return {\n        gameBoard,\n        gameBoard2\n        \n    }\n    \n}\n\nconsole.log(gameLoop())\n\nlet mainDiv = document.getElementById('content')\n//mainDiv.innerText += JSON.stringify(gameLoop())\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameLoop);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\n\nlet player = (gameboard, ships) => {\n    \n    let cpuMoves = () => {\n\n        let result = \"bad moves\"\n        \n        let x = Math.floor(Math.random() * 10);\n        let y = Math.floor(Math.random() * 10);\n        result = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.receiveAtk)(gameboard, x,y)\n        \n        if (result === \"H\" || result === \"M\"){\n            return result\n        }\n\n        if (result === \" \"){\n            _gameboard__WEBPACK_IMPORTED_MODULE_0__.board[x][y] = \"M\"\n            return \"miss\"\n        }\n\n        if (result === \" S\"){\n            ship.setHit()\n            _gameboard__WEBPACK_IMPORTED_MODULE_0__.board[x][y] = \"H\"\n            return \"hit\"\n    }\n        \n    }\n\n    return { gameboard, ships, cpuMoves }\n\n} \n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet ships = (name, length, hits, sunk) => {\n    return {\n        name: name,\n        length: length,\n        hits: hits,\n        sunk: sunk,\n        \n\n        setHit: function() {\n            return this.hits += 1\n        },\n\n        setSunk: function(){\n            if(this.length === this.hits) {\n                this.sunk = true\n                return sunk\n            }\n        },\n    }\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ships);\n// export  { ships }\n\n//# sourceURL=webpack:///./src/ship.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;