import axios from 'axios';
import { CollectionOutputModel } from '../../../entities/product/types.ts';

export const searchProducts = async (
  query: string,
  page: number,
  limit: number,
): Promise<CollectionOutputModel> => {
  const response = await axios.get('/v1/Stock', {
    params: { query, page, limit },
  });
  return response.data;
};