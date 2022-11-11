import * as asyncHandler from "express-async-handler";
import { books, genres } from "../models/mock";

// @desc    Get genres
// @route   GET /api/genres
// @access  public
export const getGenres = asyncHandler(async (req, res) => {
  res.status(200).json(genres);
});

// @desc    Get genre
// @route   GET /api/genres/:genre_id
// @access  public
export const getGenre = asyncHandler(async (req, res) => {
  const { genre_id } = req.params;
  if (genre_id === undefined) {
    res.status(400).json({ message: "Please specify books id" });
  }

  if (genres.find((genre) => genre.id === genre_id) === undefined) {
    res.status(400).json({ message: "Genre not found" });
  }
  res.status(200).json(genres.find((genre) => genre.id === genre_id));
});
