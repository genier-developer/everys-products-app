import instance from '../../../shared/api/instance.ts';
import { CollectionOutputModel } from '../../../entities/product/types.ts';

export const searchProducts = async (
  query: string,
  page: number,
  limit: number,
): Promise<CollectionOutputModel> => {
  const response = await instance.get('/v1/Stock', {
    params: {
      searchTerm: query.trim(),
      pageNumber: page,
      pageSize: limit,
    },
  });
  
  console.log('Search params:', { query, page, limit });
  console.log('Response:', response.data.result);
  
  return response.data.result;
};