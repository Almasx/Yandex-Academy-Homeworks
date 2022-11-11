import { Router } from "express";
import { getGenre, getGenres } from "../controllers/genreControllers";

const router = Router();

router.get("/", getGenres);
router.get("/:genre_id", getGenre);

export default router;
