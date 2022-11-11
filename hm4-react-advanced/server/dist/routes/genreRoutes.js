"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const genreControllers_1 = require("../controllers/genreControllers");
const router = (0, express_1.Router)();
router.get("/", genreControllers_1.getGenres);
router.get("/:genre_id", genreControllers_1.getGenre);
exports.default = router;
