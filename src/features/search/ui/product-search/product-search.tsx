import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { setAllProducts, setLoading, setError } from '../../model/search-slice';
import { searchProducts } from '../../api';
import { SearchInput } from '../search-input';
import { ProductList } from '../product-list';
import { Pagination } from '../pagination';
import { Spinner } from '../../../../shared/ui/spinner';
import s from './product-search.module.scss';

export const ProductSearch: FC = () => {
  const dispatch = useAppDispatch();
  const { loading, currentPage } = useAppSelector((state) => state.search);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        dispatch(setLoading(true));
        const data = await searchProducts('', currentPage, 10);
        dispatch(setAllProducts(data));
      } catch (error) {
        console.error('Failed to fetch products:', error);
        dispatch(setError(error instanceof Error ? error.message : 'Unknown error'));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchProducts();
  }, [dispatch, currentPage]);

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