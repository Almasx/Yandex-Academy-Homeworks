import axios from 'axios';

const API_URL = '/api/books/';

const getBook = async (book_id: string): Promise<IBook> => {
  const responce = await axios.get(API_URL + book_id);
  return responce.data;
};

const bookService = { getBook };
export default bookService;
