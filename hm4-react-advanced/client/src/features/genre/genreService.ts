import axios from 'axios';

const API_URL = '/api/genres/';

const getGenres = async (): Promise<IGenre[]> => {
  const responce = await axios.get(API_URL);
  return responce.data;
};

const getGenre = async (genre_id: string): Promise<IGenre> => {
  const responce = await axios.get(API_URL + genre_id);
  return responce.data;
};

const genreService = { getGenres, getGenre };
export default genreService;
