import { ChangeEvent, FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { setQuery } from '../../model/search-slice';
import s from './search-input.module.scss';

export const SearchInput: FC = () => {

  const dispatch = useAppDispatch();
  const { query, loading, products } = useAppSelector((state) => state.search);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value));
  };
  const handleSearch = ()=>{

  }

  return (
    <div className={s.searchContainer}>
      <input
        type="text"
        className={s.searchInput}
        value={query}
        onChange={handleChange}
        placeholder="Введите строку поиска..."
        disabled={loading}
      />
      <div className={s.rightSection}>
        <div className={s.foundCount}>
          Кол-во: {products?.length || 0}
        </div>
        <button
          className={s.searchButton}
          onClick={handleSearch}
          disabled={loading}
        >
          Поиск
        </button>
      </div>
    </div>
  );
};