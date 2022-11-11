"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookcontrollers_1 = require("../controllers/bookcontrollers");
const router = (0, express_1.Router)();
router.get("/", bookcontrollers_1.getCatalog);
router.get("/:book_id", bookcontrollers_1.getBook);
exports.default = router;
