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

/***/ "./src/Book.ts":
/*!*********************!*\
  !*** ./src/Book.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Book = void 0;\nclass Book {\n    constructor(title, author, year) {\n        this.title = title;\n        this.author = author;\n        this.year = year;\n    }\n}\nexports.Book = Book;\n\n\n//# sourceURL=webpack://type/./src/Book.ts?");

/***/ }),

/***/ "./src/Library.ts":
/*!************************!*\
  !*** ./src/Library.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Library = void 0;\nclass Library {\n    constructor() {\n        this.books = [];\n    }\n    addBook(book) {\n        this.books.push(book);\n    }\n    getBooks() {\n        return this.books;\n    }\n    findBookByTitle(title) {\n        return this.books.find(book => book.title === title);\n    }\n    updateBook(title, newDetails) {\n        var _a, _b, _c;\n        const book = this.findBookByTitle(title);\n        if (book) {\n            book.title = (_a = newDetails.title) !== null && _a !== void 0 ? _a : book.title;\n            book.author = (_b = newDetails.author) !== null && _b !== void 0 ? _b : book.author;\n            book.year = (_c = newDetails.year) !== null && _c !== void 0 ? _c : book.year;\n            return true;\n        }\n        return false;\n    }\n    deleteBook(title) {\n        const index = this.books.findIndex(book => book.title === title);\n        if (index !== -1) {\n            this.books.splice(index, 1);\n            return true;\n        }\n        return false;\n    }\n}\nexports.Library = Library;\n\n\n//# sourceURL=webpack://type/./src/Library.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Library_1 = __webpack_require__(/*! ./Library */ \"./src/Library.ts\");\nconst Book_1 = __webpack_require__(/*! ./Book */ \"./src/Book.ts\");\nconst library = new Library_1.Library();\nfunction promptUser() {\n    const action = parseInt(prompt(`Select an action:\r\n        1. Add a new book\r\n        2. View all books\r\n        3. Find a book by title\r\n        4. Update a book\r\n        5. Delete a book\r\n        6. Exit`) || '0'); // Default to '0' if prompt returns null\n    switch (action) {\n        case 1:\n            const title = prompt('Enter book title:') || '';\n            const author = prompt('Enter book author:') || '';\n            const year = parseInt(prompt('Enter book year:') || '0'); // Default to '0' if prompt returns null\n            library.addBook(new Book_1.Book(title, author, year));\n            alert('Book added successfully!');\n            break;\n        case 2:\n            const books = library.getBooks();\n            alert(`Books in library:\\n${books.map(book => `${book.title} by ${book.author}, ${book.year}`).join('\\n')}`);\n            break;\n        case 3:\n            const searchTitle = prompt('Enter book title to find:') || '';\n            const foundBook = library.findBookByTitle(searchTitle);\n            if (foundBook) {\n                alert(`Found book: ${foundBook.title} by ${foundBook.author}, ${foundBook.year}`);\n            }\n            else {\n                alert('Book not found.');\n            }\n            break;\n        case 4:\n            const updateTitle = prompt('Enter title of the book to update:') || '';\n            const newTitle = prompt('Enter new title (leave blank to keep current):') || undefined;\n            const newAuthor = prompt('Enter new author (leave blank to keep current):') || undefined;\n            const newYearString = prompt('Enter new year (leave blank to keep current):');\n            const newYear = newYearString ? parseInt(newYearString) : undefined;\n            const updateResult = library.updateBook(updateTitle, {\n                title: newTitle,\n                author: newAuthor,\n                year: newYear\n            });\n            if (updateResult) {\n                alert('Book updated successfully!');\n            }\n            else {\n                alert('Book not found.');\n            }\n            break;\n        case 5:\n            const deleteTitle = prompt('Enter title of the book to delete:') || '';\n            const deleteResult = library.deleteBook(deleteTitle);\n            if (deleteResult) {\n                alert('Book deleted successfully!');\n            }\n            else {\n                alert('Book not found.');\n            }\n            break;\n        case 6:\n            return;\n        default:\n            alert('Invalid action. Please try again.');\n    }\n    promptUser();\n}\npromptUser();\n\n\n//# sourceURL=webpack://type/./src/index.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;