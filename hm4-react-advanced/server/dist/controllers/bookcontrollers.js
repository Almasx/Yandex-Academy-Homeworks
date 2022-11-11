"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBook = exports.getCatalog = void 0;
const asyncHandler = require("express-async-handler");
const mock_1 = require("../models/mock");
// @desc    Get catalog
// @route   GET /api/books
// @access  public
exports.getCatalog = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { genre_id } = req.query;
    // check genre
    if (!genre_id) {
        genre_id = mock_1.genres[0].id;
    }
    // check genre in genre list
    if (mock_1.genres.find((genre) => genre.id === genre_id) === undefined) {
        res.status(400).json({ message: "Genre not found" });
    }
    res.status(200).json(mock_1.books.filter((book) => book.genreId === genre_id));
}));
// @desc    Get book
// @route   GET /api/books/:book_id
// @access  public
exports.getBook = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { book_id } = req.params;
    if (book_id === undefined) {
        res.status(400).json({ message: "Please specify books id" });
    }
    if (mock_1.books.find((book) => book.id === book_id) === undefined) {
        res.status(400).json({ message: "Book not found" });
    }
    res.status(200).json(mock_1.books[book_id]);
}));
