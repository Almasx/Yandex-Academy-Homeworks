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
exports.getGenre = exports.getGenres = void 0;
const asyncHandler = require("express-async-handler");
const mock_1 = require("../models/mock");
// @desc    Get genres
// @route   GET /api/genres
// @access  public
exports.getGenres = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json(mock_1.genres);
}));
// @desc    Get genre
// @route   GET /api/genres/:genre_id
// @access  public
exports.getGenre = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { genre_id } = req.params;
    if (genre_id === undefined) {
        res.status(400).json({ message: "Please specify books id" });
    }
    if (mock_1.genres.find((genre) => genre.id === genre_id) === undefined) {
        res.status(400).json({ message: "Genre not found" });
    }
    res.status(200).json(mock_1.genres.find((genre) => genre.id === genre_id));
}));
