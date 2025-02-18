import { useAppDispatch, useAppSelector } from '../../../../app/hooks.ts';
import { setProducts } from '../../model/search-slice.ts';
import { searchProducts } from '../../api';
import { SearchInput } from '../search-input';
import { ProductList } from '../product-list';
import { Pagination } from '../pagination';
import {FC, useEffect} from "react";

export const ProductSearch: FC = () => {
  const dispatch = useAppDispatch();
  const { query, page, limit } = useAppSelector((state) => state.search);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await searchProducts(query, page, limit);
        dispatch(setProducts(data));
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchData();
  }, [query, page, limit, dispatch]);

  return (
    <div>
      <SearchInput />
      <ProductList />
      <Pagination />
    </div>
  );
};