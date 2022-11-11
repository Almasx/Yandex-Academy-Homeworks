import axios from 'axios';

const API_URL = '/api/books/';

const getCatalog = async (filter: string | undefined): Promise<IBook[]> => {
  const responce = await axios.get(API_URL, { params: { ...(filter !== undefined && { genre_id: filter }) } });
  return responce.data;
};

const catalogService = { getCatalog };
export default catalogService;
