import { FC, useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from '../../../../app/hooks.ts';
import { setProducts, setTotalPages, setLoading, setError } from '../../model/search-slice.ts';
import { searchProducts } from '../../api';
import { SearchInput } from '../search-input';
import { ProductList } from '../product-list';
import { Pagination } from '../pagination';
import { Spinner } from '../../../../shared/ui/spinner/spinner';
import s from './product-search.module.scss';

export const ProductSearch: FC = () => {
  const dispatch = useAppDispatch();
  const { query, page, limit, loading } = useAppSelector((state) => state.search);

  const fetchData = useCallback(async () => {
    try {
      const data = await searchProducts(query, page, limit);
      dispatch(setProducts(data.items));
      dispatch(setTotalPages(Math.ceil(data.totalItems / limit)));
    } catch (error) {
      console.error('Failed to fetch products:', error);
      dispatch(setError(error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      dispatch(setLoading(false));
    }
  }, [query, page, limit, dispatch]);
  
  useEffect(() => {
    dispatch(setLoading(true));
    fetchData();
  }, [fetchData, dispatch]);

  return (
    <div>
      <SearchInput />
      {loading && (
        <div className={s.spinnerContainer}>
          <Spinner />
        </div>
      )}
      <ProductList />
      <Pagination />
    </div>
  );
};