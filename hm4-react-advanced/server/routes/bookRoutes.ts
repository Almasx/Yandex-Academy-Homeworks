import { Router } from "express";
import { getBook, getCatalog } from "../controllers/bookcontrollers";

const router = Router();

router.get("/", getCatalog);
router.get("/:book_id", getBook);

export default router;
