import axiosInstance from '../../../shared/api/axios-instance';
import { CollectionOutputModel } from '../../../entities/product/types.ts';

export const searchProducts = async (
  query: string,
  page: number,
  limit: number,
): Promise<CollectionOutputModel> => {
  const response = await axiosInstance.get('/v1/Stock', {
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