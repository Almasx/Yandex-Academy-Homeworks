import * as asyncHandler from "express-async-handler";
import { books, genres } from "../models/mock";

// @desc    Get catalog
// @route   GET /api/books
// @access  public
export const getCatalog = asyncHandler(async (req, res) => {
  let { genre_id } = req.query;

  // check genre
  if (!genre_id) {
    genre_id = genres[0].id;
  }

  // check genre in genre list
  if (genres.find((genre) => genre.id === genre_id) === undefined) {
    res.status(400).json({ message: "Genre not found" });
  }

  res.status(200).json(books.filter((book) => book.genreId === genre_id));
});

// @desc    Get book
// @route   GET /api/books/:book_id
// @access  public
export const getBook = asyncHandler(async (req, res) => {
  const { book_id } = req.params;
  if (book_id === undefined) {
    res.status(400).json({ message: "Please specify books id" });
  }

  if (books.find((book) => book.id === book_id) === undefined) {
    res.status(400).json({ message: "Book not found" });
  }
  res.status(200).json(books[book_id]);
});
