import {instance} from '../../../shared/api';
import { CollectionOutputModel } from '../../../entities/product/types.ts';

export const searchProducts = async (
  query: string,
  currentPage: number,
  limit: number,
): Promise<CollectionOutputModel> => {
  const response = await instance.get('/v1/Stock', {
    params: {
      searchTerm: query.trim(),
      pageNumber: currentPage,
      pageSize: limit,
    },
  });
  
  console.log('Search params:', { query, currentPage, limit });
  console.log('Response:', response.data.result);
  
  return response.data.result;
};